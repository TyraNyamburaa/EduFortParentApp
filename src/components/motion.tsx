import React, { useEffect } from "react";
import {
  Text as RNText,
  TextProps,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSpring,
  withSequence,
  withDelay,
  Easing,
  interpolate,
  cancelAnimation,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { THEME } from "../constants/theme";

/* ============================================================
   AnimatedRing — SVG progress ring that sweeps in on mount
   ============================================================ */
interface AnimatedRingProps {
  /** 0 - 100 */
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  children?: React.ReactNode;
}

export function AnimatedRing({
  progress,
  size = 96,
  strokeWidth = 8,
  color = "#10B981",
  trackColor = "rgba(255,255,255,0.15)",
  children,
}: AnimatedRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [t, setT] = React.useState(0);

  useEffect(() => {
    let raf = 0;
    const start = Date.now();
    const tick = () => {
      const elapsed = Math.min((Date.now() - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3); // easeOutCubic
      setT(eased);
      if (elapsed < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [progress]);

  const dashoffset =
    circumference * (1 - Math.min(Math.max(progress, 0), 100) / 100) * (1 - t);

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      {children}
    </View>
  );
}

// (Ring animation uses requestAnimationFrame state — SVG props via reanimated
// animatedProps were unreliable in this SDK combo, so we keep it simple.)

/* ============================================================
   CountUp — number that counts from 0 to value on mount
   ============================================================ */
interface CountUpProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  style?: TextProps["style"];
  /** decimals to keep, e.g. 0 for whole shillings */
  decimals?: number;
}

export function CountUp({
  value,
  duration = 1100,
  prefix = "",
  suffix = "",
  style,
  decimals = 0,
}: CountUpProps) {
  const [display, setDisplay] = React.useState("0");

  const format = React.useCallback(
    (n: number) =>
      prefix +
      n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) +
      suffix,
    [prefix, suffix, decimals],
  );

  useEffect(() => {
    let raf = 0;
    const start = Date.now();
    const tick = () => {
      const elapsed = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3); // easeOutCubic
      setDisplay(format(value * eased));
      if (elapsed < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, format]);

  return <RNText style={style}>{display}</RNText>;
}

/* ============================================================
   PressableScale — every tappable card/button springs on press
   ============================================================ */
export function PressableScale({
  children,
  style,
  onPressIn,
  onPressOut,
  ...rest
}: PressableProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = (e: any) => {
    // eslint-disable-next-line react-hooks/immutability -- reanimated shared value mutation is the sanctioned pattern in event handlers
    scale.value = withSpring(0.965, { damping: 20, stiffness: 400 });
    onPressIn?.(e);
  };
  const handlePressOut = (e: any) => {
    // eslint-disable-next-line react-hooks/immutability -- reanimated shared value mutation is the sanctioned pattern in event handlers
    scale.value = withSpring(1, { damping: 14, stiffness: 300 });
    onPressOut?.(e);
  };

  return (
    <Animated.View style={[animatedStyle, style as any]}>
      <Pressable
        {...rest}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}

/* ============================================================
   StreakIntro — on login the streak shows big and centered,
   then shrinks into the header pill position and rests.
   The pill's absolute position is measured on the Home screen
   with onLayout and passed in via `target`, so the landing is
   exact on any screen size. Plays once per app open.
   ============================================================ */
export interface StreakIntroTarget {
  /** Absolute center X of the resting pill, in window coords */
  x: number;
  /** Absolute center Y of the resting pill, in window coords */
  y: number;
  /** Resting pill width, used to compute the shrink scale */
  width: number;
}
export function StreakIntro({
  days,
  target,
  onFinish,
}: {
  days: number;
  target: StreakIntroTarget | null;
  onFinish: () => void;
}) {
  const { width: SCREEN_W, height: SCREEN_H } = useWindowDimensions();
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const holdOpacity = useSharedValue(1);

  useEffect(() => {
    if (!target) return; // wait until the pill has been measured
    // 1. Fade in big and hold a beat
    opacity.value = withTiming(1, { duration: 220 });
    // 2. Shrink + travel to the measured pill position.
    //    The overlay centers the badge, so the delta is
    //    measured-pill-center minus screen-center.
    const badgeW = 168; // natural width of introStyles.bigBadge
    const targetScale = target.width / badgeW;
    translateX.value = withDelay(
      900,
      withTiming(target.x - SCREEN_W / 2, {
        duration: 550,
        easing: Easing.inOut(Easing.cubic),
      }),
    );
    translateY.value = withDelay(
      900,
      withTiming(target.y - SCREEN_H / 2, {
        duration: 550,
        easing: Easing.inOut(Easing.cubic),
      }),
    );
    scale.value = withDelay(
      900,
      withTiming(targetScale, {
        duration: 550,
        easing: Easing.inOut(Easing.cubic),
      }),
    );
    // 3. Hand off: fade overlay out, reveal the resting pill
    holdOpacity.value = withDelay(1450, withTiming(0, { duration: 180 }));
    const id = setTimeout(onFinish, 1650);
    return () => clearTimeout(id);
  }, [target, SCREEN_W, SCREEN_H, opacity, translateX, translateY, scale, holdOpacity, onFinish]);

  const moveStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  // Don't render until we have a measured target — avoids a flash at (0,0)
  if (!target) return null;

  return (
    <View style={introStyles.overlay} pointerEvents="none">
      <Animated.View style={[introStyles.hold, { opacity: holdOpacity }]}>
        <Animated.View style={moveStyle}>
          <View style={introStyles.bigBadge}>
            <Image
              source={require("../../assets/streak.png")}
              style={{ width: 56, height: 56 }}
              resizeMode="contain"
            />
            <RNText style={introStyles.bigCount}>{days} days</RNText>
            <RNText style={introStyles.bigLabel}>saving streak</RNText>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const introStyles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50,
  },
  hold: { alignItems: "center" },
  bigBadge: {
    alignItems: "center",
    backgroundColor: THEME.colors.primary,
    borderRadius: 28,
    paddingVertical: 28,
    paddingHorizontal: 36,
  },
  bigCount: { color: THEME.colors.secondary, fontSize: 40, fontWeight: "800", marginTop: 10 },
  bigLabel: { color: THEME.colors.secondarySoft, fontSize: 14, marginTop: 2 },
});

/* ============================================================
   Skeleton — shimmer placeholder for loading states
   ============================================================ */
export function Skeleton({
  width,
  height,
  radius = 10,
  style,
}: {
  width: number | `${number}%`;
  height: number;
  radius?: number;
  style?: any;
}) {
  const translateX = useSharedValue(-1);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(1, { duration: 1300, easing: Easing.inOut(Easing.quad) }),
      -1,
      false,
    );
  }, [translateX]);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(translateX.value, [-1, 1], [-250, 250]) },
    ],
  }));

  return (
    <View
      style={[
        {
          width: width as any,
          height,
          borderRadius: radius,
          overflow: "hidden",
          backgroundColor: "#EDF1F4",
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            top: 0,
            bottom: 0,
            width: 100,
            backgroundColor: "#FFFFFF",
            opacity: 0.55,
          },
          shimmerStyle,
        ]}
      />
    </View>
  );
}

/* ============================================================
   DashboardSkeleton — full home-screen loading placeholder
   ============================================================ */
export function DashboardSkeleton() {
  return (
    <View style={{ padding: 20 }}>
      <Skeleton
        width={160}
        height={14}
        radius={7}
        style={{ marginBottom: 16 }}
      />
      <Skeleton
        width={"100%"}
        height={190}
        radius={20}
        style={{ marginBottom: 20 }}
      />
      <View style={{ flexDirection: "row", gap: 12, marginBottom: 20 }}>
        <Skeleton width={120} height={64} radius={16} />
        <Skeleton width={120} height={64} radius={16} />
      </View>
      <Skeleton width={"100%"} height={120} radius={16} />
    </View>
  );
}
