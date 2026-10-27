import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../constants/theme";
import { useDashboardData } from "../../hooks/useDashboardData";
import Icon from "../../components/Icon";
import {
  AnimatedRing,
  CountUp,
  PressableScale,
  StreakIntro,
  DashboardSkeleton,
} from "../../components/motion";
import CelebrationOverlay from "../../components/CelebrationOverlay";

// Per-child accent colors so multi-child households scan instantly
const CHILD_COLORS = ["#10B981", "#F59E0B", "#3B82F6", "#8B5CF6", "#EF4444"];

export default function HomeDashboardScreen({ navigation }: any) {
  const { data, isLoading, isError, refetch } = useDashboardData();
  const [celebrate, setCelebrate] = useState(false);
  const [celebrateName, setCelebrateName] = useState("");

  const childrenList = data?.children || [];

  // Compute per-child progress
  const childStats = useMemo(() => {
    return childrenList.map((child: any, i: number) => {
      const items =
        data?.ledgerItems.filter((l: any) => l.child_id === child.id) || [];
      const due = items.reduce((a, c) => a + Number(c.amount_due), 0);
      const paid = items.reduce((a, c) => a + Number(c.amount_paid), 0);
      const pct = due > 0 ? Math.round((paid / due) * 100) : 0;
      return {
        ...child,
        due,
        paid,
        pct,
        color: CHILD_COLORS[i % CHILD_COLORS.length],
        complete: due > 0 && paid >= due,
      };
    });
  }, [data]);

  // Fire the celebration when a child becomes fully funded (render-triggered one-shot)
  const doneChild = childStats.find((c: any) => c.complete);
  const [celebratedFor, setCelebratedFor] = useState<string | null>(null);
  if (doneChild && celebratedFor !== doneChild.full_name) {
    setCelebratedFor(doneChild.full_name);
    setCelebrateName(doneChild.full_name);
    setCelebrate(true);
  }

  const latestTx = data?.transactions?.[0];
  const streakDays = 6; // TODO: derive from transaction history dates
  const [showIntro, setShowIntro] = useState(true);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <DashboardSkeleton />
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={[styles.container, styles.errorWrap]}>
        <Icon name="warning" size={32} />
        <Text style={styles.errorTitle}>
          We couldn&apos;t load your dashboard
        </Text>
        <Text style={styles.errorSub}>
          Check your connection — your savings are safe in escrow.
        </Text>
        <PressableScale style={styles.retryBtn} onPress={() => refetch()}>
          <Text style={styles.retryTxt}>Try again</Text>
        </PressableScale>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* ── Header ─────────────────────────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Text style={styles.avatarTxt}>W</Text>
          </View>
          <View>
            <Text style={styles.greeting}>Karibu,</Text>
            <Text style={styles.greetingName}>Wanjiru</Text>
          </View>
        </View>
        <View style={styles.streakPill}>
          <Icon name="complete" size={14} />
          <Text style={styles.streakTxt}>{streakDays} day streak</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero: one glance = "are my kids covered?" ─────────── */}
        <LinearGradient colors={["#07241F", "#0D382A"]} style={styles.heroCard}>
          <View style={styles.heroTop}>
            <Text style={styles.heroLabel}>THIS TERM</Text>
            <View style={styles.heroShield}>
              <Icon name="shield" size={12} />
              <Text style={styles.heroShieldTxt}> Protected</Text>
            </View>
          </View>

          <View style={styles.heroBody}>
            {/* Primary child gets the big animated ring */}
            {childStats[0] && (
              <AnimatedRing
                progress={childStats[0].pct}
                size={130}
                strokeWidth={10}
                color={childStats[0].complete ? "#34D399" : childStats[0].color}
              >
                <View style={styles.ringCenter}>
                  <Text style={styles.ringPct}>{childStats[0].pct}%</Text>
                  <Text style={styles.ringPctLabel}>secured</Text>
                </View>
              </AnimatedRing>
            )}
            <View style={styles.heroText}>
              <Text style={styles.heroChildName}>
                {childStats[0]?.full_name || "Your child"}
              </Text>
              <Text style={styles.heroStatus}>
                {childStats[0]?.complete
                  ? "Fully covered"
                  : `${Math.max((childStats[0]?.due ?? 0) - (childStats[0]?.paid ?? 0), 0).toLocaleString()} KES to go`}
              </Text>
              {childStats[0] && !childStats[0].complete && (
                <Text style={styles.heroEta}>
                  {childStats[0].paid.toLocaleString()} of{" "}
                  {childStats[0].due.toLocaleString()} KES saved
                </Text>
              )}
            </View>
          </View>

          {/* Other children as compact chips */}
          {childStats.length > 1 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.chipRow}
            >
              {childStats.slice(1).map((c: any) => (
                <View key={c.id} style={styles.chip}>
                  <View
                    style={[styles.chipDot, { backgroundColor: c.color }]}
                  />
                  <Text style={styles.chipName} numberOfLines={1}>
                    {c.full_name.split(" ")[0]}
                  </Text>
                  <Text style={styles.chipPct}>{c.pct}%</Text>
                </View>
              ))}
            </ScrollView>
          )}

          {/* The ONE primary action */}
          <PressableScale
            style={styles.heroCta}
            onPress={() => navigation.navigate("QuickDeposit")}
          >
            <Icon name="bolt" size={18} />
            <Text style={styles.heroCtaTxt}>Save for today</Text>
          </PressableScale>
        </LinearGradient>

        {/* ── Secondary action row (2 only, rest live in tabs) ──── */}
        <View style={styles.actionRow}>
          <PressableScale
            style={styles.actionBtn}
            onPress={() => navigation.navigate("ChildLedger")}
          >
            <Icon name="clipboard" size={18} />
            <Text style={styles.actionTxt}>Fee details</Text>
          </PressableScale>
          <PressableScale
            style={styles.actionBtn}
            onPress={() => navigation.navigate("Plan")}
          >
            <Icon name="goal" size={18} />
            <Text style={styles.actionTxt}>Plan term</Text>
          </PressableScale>
        </View>

        {/* ── Latest activity: ONE line, not a feed ─────────────── */}
        {latestTx && (
          <PressableScale style={styles.latestCard}>
            <View style={styles.latestIcon}>
              <Icon name="mobile" size={16} />
            </View>
            <View style={styles.latestMeta}>
              <Text style={styles.latestTitle}>
                {latestTx.type === "FEE_PAYMENT"
                  ? "Fee payment"
                  : "Savings deposit"}{" "}
                · today
              </Text>
              <Text style={styles.latestSub}>M-Pesa · confirmed</Text>
            </View>
            <CountUp
              value={Number(latestTx.amount)}
              prefix="+ "
              style={styles.latestAmount}
            />
          </PressableScale>
        )}

        {/* ── Milestone / encouragement strip ───────────────────── */}
        <View style={styles.tipStrip}>
          <Icon name="tip" size={14} />
          <Text style={styles.tipTxt} numberOfLines={2}>
            KES 100/day clears the term balance before the deadline. You&apos;ve
            got this!
          </Text>
        </View>
      </ScrollView>

      <CelebrationOverlay
        visible={celebrate}
        childName={celebrateName}
        onClose={() => setCelebrate(false)}
      />

      {/* One-shot streak intro: big on entry, shrinks into the header pill */}
      {showIntro && streakDays > 0 && (
        <StreakIntro days={streakDays} onFinish={() => setShowIntro(false)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F0" },
  errorWrap: { justifyContent: "center", alignItems: "center", padding: 32 },
  errorTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: THEME.colors.textDark,
    marginTop: 16,
    textAlign: "center",
  },
  errorSub: {
    fontSize: 14,
    color: THEME.colors.textMuted,
    marginTop: 8,
    textAlign: "center",
    lineHeight: 20,
  },
  retryBtn: {
    backgroundColor: THEME.colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 24,
  },
  retryTxt: { color: "#FFF", fontSize: 15, fontWeight: "700" },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: THEME.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarTxt: { color: "#FFF", fontWeight: "700", fontSize: 16 },
  greeting: { fontSize: 12, color: THEME.colors.textMuted, marginLeft: 10 },
  greetingName: {
    fontSize: 17,
    fontWeight: "800",
    color: THEME.colors.textDark,
    marginLeft: 10,
  },
  streakPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.colors.secondarySoft,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  streakTxt: {
    fontSize: 12,
    fontWeight: "700",
    color: THEME.colors.primary,
  },

  scroll: { paddingBottom: 32 },

  // Hero
  heroCard: {
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 20,
  },
  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroLabel: {
    color: "#94A3B8",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  heroShield: { flexDirection: "row", alignItems: "center" },
  heroShieldTxt: { color: "#34D399", fontSize: 11, fontWeight: "600" },
  heroBody: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    gap: 18,
  },
  ringCenter: { alignItems: "center" },
  ringPct: { color: "#FFF", fontSize: 28, fontWeight: "800" },
  ringPctLabel: { color: "#64748B", fontSize: 11, marginTop: 2 },
  heroText: { flex: 1 },
  heroChildName: { color: "#FFF", fontSize: 20, fontWeight: "800" },
  heroStatus: {
    color: "#34D399",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 6,
  },
  heroEta: { color: "#94A3B8", fontSize: 12, marginTop: 4 },
  chipRow: { marginTop: 16 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    gap: 6,
  },
  chipDot: { width: 8, height: 8, borderRadius: 4 },
  chipName: { color: "#FFF", fontSize: 12, fontWeight: "600", maxWidth: 80 },
  chipPct: { color: "#94A3B8", fontSize: 12, fontWeight: "700" },
  heroCta: {
    flexDirection: "row",
    backgroundColor: "#10B981",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 20,
    gap: 8,
  },
  heroCtaTxt: { color: "#FFF", fontSize: 16, fontWeight: "800" },

  // Action row
  actionRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
    marginTop: 16,
  },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    borderRadius: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: "#EDE7DA",
  },
  actionTxt: { fontSize: 14, fontWeight: "600", color: THEME.colors.textDark },

  // Latest activity
  latestCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EDE7DA",
  },
  latestIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#E0F2FE",
    alignItems: "center",
    justifyContent: "center",
  },
  latestMeta: { flex: 1, marginLeft: 12 },
  latestTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: THEME.colors.textDark,
  },
  latestSub: { fontSize: 12, color: THEME.colors.textMuted, marginTop: 2 },
  latestAmount: { fontSize: 15, fontWeight: "800", color: "#16A34A" },

  // Tip strip
  tipStrip: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 16,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    gap: 10,
  },
  tipTxt: { flex: 1, fontSize: 12, color: "#1E40AF", lineHeight: 17 },
});
