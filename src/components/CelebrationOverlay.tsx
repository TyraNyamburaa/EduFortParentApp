import React, { useEffect, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Animated as RNA,
  Easing as RNEasing,
  Dimensions,
} from "react-native";
import { PressableScale } from "./motion";
import Icon from "./Icon";

const { width: SCREEN_W } = Dimensions.get("window");

/**
 * Full-screen celebration when a child's fees are fully covered.
 * Confetti pieces are cheap RNA.Value drops — no extra dependency.
 */
export default function CelebrationOverlay({
  visible,
  childName,
  onClose,
}: {
  visible: boolean;
  childName: string;
  onClose: () => void;
}) {
  const scale = useMemo(() => new RNA.Value(0), []);
  const fade = useMemo(() => new RNA.Value(0), []);
  const confetti = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        x: new RNA.Value(SCREEN_W / 2),
        y: new RNA.Value(-40),
        rot: new RNA.Value(0),
        delay: (i % 6) * 90,
        left: (i / 24) * SCREEN_W,
        size: 8 + (i % 4) * 3,
        color: ["#10B981", "#F59E0B", "#3B82F6", "#EF4444", "#8B5CF6"][i % 5],
      })),
    [],
  );

  useEffect(() => {
    if (visible) {
      fade.setValue(0);
      scale.setValue(0);
      RNA.parallel([
        RNA.timing(fade, { toValue: 1, duration: 200, useNativeDriver: true }),
        RNA.spring(scale, {
          toValue: 1,
          friction: 5,
          tension: 120,
          useNativeDriver: true,
        }),
      ]).start();

      confetti.forEach((c) => {
        c.y.setValue(-40);
        c.rot.setValue(0);
        RNA.sequence([
          RNA.delay(c.delay),
          RNA.parallel([
            RNA.timing(c.y, {
              toValue: Dimensions.get("window").height + 60,
              duration: 2600,
              easing: RNEasing.in(RNEasing.quad),
              useNativeDriver: true,
            }),
            RNA.timing(c.rot, {
              toValue: (Math.random() - 0.5) * 720,
              duration: 2600,
              useNativeDriver: true,
            }),
            RNA.timing(c.x, {
              toValue: c.left + (Math.random() - 0.5) * 120,
              duration: 2600,
              useNativeDriver: true,
            }),
          ]),
        ]).start();
      });
    }
  }, [visible, confetti, fade, scale]);

  if (!visible) return null;

  return (
    <Modal transparent visible onRequestClose={onClose}>
      <RNA.View style={[styles.backdrop, { opacity: fade }]}>
        {confetti.map((c, i) => (
          <RNA.View
            key={i}
            style={[
              styles.confetti,
              {
                backgroundColor: c.color,
                width: c.size,
                height: c.size * 0.6,
                left: c.left,
                transform: [
                  { translateX: c.x },
                  { translateY: c.y },
                  {
                    rotate: c.rot.interpolate({
                      inputRange: [-720, 720],
                      outputRange: ["-720deg", "720deg"],
                    }),
                  },
                ],
              },
            ]}
          />
        ))}

        <RNA.View style={[styles.card, { transform: [{ scale }] }]}>
          <View style={styles.badgeRing}>
            <Icon name="cheers" size={36} />
          </View>
          <Text style={styles.title}>Malia is fully covered!</Text>
          <Text style={styles.sub}>
            Every shilling of {childName}&apos;s term fees is secured. The
            bursar&apos;s ledger is cleared — no stress, no arrears.
          </Text>
          <PressableScale style={styles.doneBtn} onPress={onClose}>
            <Text style={styles.doneTxt}>Shukran, continue</Text>
          </PressableScale>
        </RNA.View>
      </RNA.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(7, 36, 31, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  confetti: {
    position: "absolute",
    top: -40,
    borderRadius: 2,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 32,
    alignItems: "center",
    width: "100%",
  },
  badgeRing: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#ECFDF5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#07241F",
    textAlign: "center",
  },
  sub: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 21,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 24,
  },
  doneBtn: {
    backgroundColor: "#10B981",
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 16,
  },
  doneTxt: { color: "#FFF", fontSize: 16, fontWeight: "800" },
});
