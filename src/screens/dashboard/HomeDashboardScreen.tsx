import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../../constants/theme";
import { useDashboardData } from "../../hooks/useDashboardData";

export default function HomeDashboardScreen({ navigation }: any) {
  const { data, isLoading, isError, refetch } = useDashboardData();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </View>
    );
  }

  const aggregates = data?.aggregates || {
    totalFamilySavings: 0,
    totalTermFees: 0,
    remainingBalance: 0,
    completionPercentage: 0,
  };
  const childrenList = data?.children || [];
  const transactionsList = data?.transactions || [];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation Row */}
      <View style={styles.navBar}>
        <View style={styles.profileSummaryRow}>
          <View style={styles.avatarMini}>
            <Text style={styles.avatarMiniTxt}>W</Text>
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.userLabel}>EDUFORT PARENT</Text>
            <Text style={styles.userName}>Jambo, Wanjiru</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notifButton}>
          <Text style={styles.notifIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Consolidated Total Family Savings Summary Panel */}
        <View style={styles.aggregateCard}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.badgeEnrolled}>
              <Text style={styles.badgeEnrolledText}>
                👥 {childrenList.length} Children Enrolled
              </Text>
            </View>
            <Text style={styles.shieldText}>🛡️ Term 2 Shield</Text>
          </View>

          <Text style={styles.savingsLabel}>TOTAL FAMILY SAVINGS</Text>
          <Text style={styles.savingsValue}>
            KES{" "}
            {aggregates.totalFamilySavings.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </Text>

          <View style={styles.financialSplitRow}>
            <View style={styles.splitColumn}>
              <Text style={styles.splitLabel}>Total Term Fees</Text>
              <Text style={styles.splitValue}>
                KES{" "}
                {aggregates.totalTermFees.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </View>
            <View style={styles.splitColumnRight}>
              <Text style={styles.splitLabel}>Remaining Balance</Text>
              <Text style={styles.splitValueGreen}>
                KES{" "}
                {aggregates.remainingBalance.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </View>
          </View>

          <View style={styles.progressRow}>
            <Text style={styles.progressPercentText}>
              {aggregates.completionPercentage.toFixed(1)}% Completed
            </Text>
            <Text style={styles.progressGoalText}>
              Goal: KES {aggregates.totalTermFees.toLocaleString()}
            </Text>
          </View>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressBar,
                { width: `${aggregates.completionPercentage}%` },
              ]}
            />
          </View>

          <View style={styles.nudgeBanner}>
            <Text style={styles.nudgeText}>
              💡 You&apos;re on track for Term 2 fees! Next auto-nudge in 3 days.
            </Text>
          </View>
        </View>

        {/* Quick Actions Grid Launchpad */}
        <Text style={styles.sectionHeader}>Quick Actions</Text>
        <View style={styles.actionGrid}>
          <TouchableOpacity
            style={[
              styles.actionBtn,
              { backgroundColor: THEME.colors.primary },
            ]}
          >
            <Text style={styles.actionIconLight}>💳</Text>
            <Text style={styles.actionTextLight}>Save Money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtnSec}
            onPress={() => navigation.navigate("ChildLedger")}
          >
            <Text style={styles.actionIconDark}>📋</Text>
            <Text style={styles.actionTextDark}>View Fees</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtnSec}>
            <Text style={styles.actionIconDark}>🏳️</Text>
            <Text style={styles.actionTextDark}>Goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtnSec}>
            <Text style={styles.actionIconDark}>📊</Text>
            <Text style={styles.actionTextDark}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Dynamic Child Wallets Card Loop */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeaderNoMargin}>
            Child Wallets{" "}
            <Text style={{ fontWeight: "400", fontSize: 13, color: "#64748B" }}>
              {childrenList.length} Active
            </Text>
          </Text>
          <TouchableOpacity>
            <Text style={styles.manageLink}>Manage ❯</Text>
          </TouchableOpacity>
        </View>

        {childrenList.map((child: any) => {
          // Find matching child ledger stats
          const items =
            data?.ledgerItems.filter((l: any) => l.child_id === child.id) || [];
          const childDue = items.reduce(
            (acc, curr) => acc + Number(curr.amount_due),
            0,
          );
          const childPaid = items.reduce(
            (acc, curr) => acc + Number(curr.amount_paid),
            0,
          );
          const outstanding = childDue - childPaid;

          return (
            <View key={child.id} style={styles.childCard}>
              <View style={styles.childProfileHeader}>
                <Image
                  source={{ uri: "https://unsplash.com" }}
                  style={styles.childAvatar}
                />
                <View style={styles.childMeta}>
                  <Text style={styles.childName}>{child.full_name}</Text>
                  <Text style={styles.childSchool}>
                    Grade {child.grade_class || "1"} • {child.school_name}
                  </Text>
                </View>
                <View style={styles.scheduleBadge}>
                  <Text style={styles.scheduleBadgeText}>● On Schedule</Text>
                </View>
              </View>

              <View style={styles.walletMetricsRow}>
                <View>
                  <Text style={styles.metricLabel}>Progress</Text>
                  <Text style={styles.metricValBold}>
                    KES {childPaid.toLocaleString()}{" "}
                    <Text style={{ fontWeight: "400", color: "#94A3B8" }}>
                      / KES {childDue.toLocaleString()}
                    </Text>
                  </Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.metricLabel}>Outstanding</Text>
                  <Text style={styles.metricValOutstanding}>
                    KES {outstanding.toLocaleString()}
                  </Text>
                </View>
              </View>

              <View style={styles.childCardProgressTrack}>
                <View
                  style={[
                    styles.childCardProgressBar,
                    {
                      width: `${childDue > 0 ? (childPaid / childDue) * 100 : 0}%`,
                    },
                  ]}
                />
              </View>

              <View style={styles.cardFooterActions}>
                <Text style={styles.deadlineDays}>
                  📅 15 July{" "}
                  <Text style={{ fontWeight: "bold", color: "#475569" }}>
                    (18 days left)
                  </Text>
                </Text>
                <TouchableOpacity style={styles.inlineDepositBtn}>
                  <Text style={styles.inlineDepositBtnTxt}>+ Add Deposit</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        {/* Consolidated Transaction Sync Feed */}
        <Text style={styles.sectionHeader}>Recent Micro-Savings</Text>
        <View style={styles.feedCard}>
          {transactionsList.map((tx: any) => (
            <View key={tx.id} style={styles.feedRow}>
              <View style={styles.feedIconSquare}>
                <Text style={{ fontSize: 16 }}>📱</Text>
              </View>
              <View style={styles.feedMeta}>
                <Text style={styles.feedTitle}>
                  {tx.type === "FEE_PAYMENT"
                    ? "Malia • Tuition"
                    : "Savings Allocation"}
                </Text>
                <Text style={styles.feedSub}>Today • M-Pesa Direct</Text>
              </View>
              <View style={styles.feedFin}>
                <Text style={styles.feedAmount}>
                  + KES {Number(tx.amount).toLocaleString()}
                </Text>
                <Text style={styles.feedStatus}>Confirmed</Text>
              </View>
            </View>
          ))}
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllBtnText}>View All Transactions ❯</Text>
          </TouchableOpacity>
        </View>

        {/* Tip Banner Element */}
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>
            💡 Parent Tip: Shilling by Shilling
          </Text>
          <Text style={styles.tipBody}>
            Saving just KES 100 per day covers the outstanding term balance well
            before the deadline. You&apos;ve got this!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },
  profileSummaryRow: { flexDirection: "row", alignItems: "center" },
  avatarMini: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#005F4B",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarMiniTxt: { color: "#FFFFFF", fontWeight: "bold", fontSize: 14 },
  profileTextContainer: { marginLeft: 10 },
  userLabel: { fontSize: 10, fontWeight: "700", color: "#94A3B8" },
  userName: { fontSize: 16, fontWeight: "700", color: "#1E293B" },
  notifButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
  },
  notifIcon: { fontSize: 16 },
  scrollContainer: { paddingBottom: 32 },
  aggregateCard: {
    backgroundColor: "#07241F",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badgeEnrolled: {
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeEnrolledText: { color: "#FFFFFF", fontSize: 11, fontWeight: "600" },
  shieldText: { color: "#34D399", fontSize: 12, fontWeight: "600" },
  savingsLabel: {
    color: "#94A3B8",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 20,
  },
  savingsValue: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 4,
  },
  financialSplitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    paddingTop: 16,
  },
  splitColumn: { flex: 1 },
  splitColumnRight: { flex: 1, alignItems: "flex-end" },
  splitLabel: { color: "#64748B", fontSize: 12 },
  splitValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 2,
  },
  splitValueGreen: {
    color: "#34D399",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 2,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  progressPercentText: { color: "#34D399", fontSize: 12, fontWeight: "600" },
  progressGoalText: { color: "#64748B", fontSize: 12 },
  progressTrack: {
    height: 6,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 3,
    marginTop: 8,
    overflow: "hidden",
  },
  progressBar: { height: "100%", backgroundColor: "#34D399" },
  nudgeBanner: {
    backgroundColor: "rgba(52, 211, 153, 0.08)",
    padding: 12,
    borderRadius: 10,
    marginTop: 16,
  },
  nudgeText: { color: "#34D399", fontSize: 12, lineHeight: 16 },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
    marginHorizontal: 24,
    marginTop: 12,
    marginBottom: 12,
  },
  sectionHeaderNoMargin: { fontSize: 16, fontWeight: "700", color: "#1E293B" },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 12,
    marginBottom: 12,
  },
  manageLink: { color: "#005F4B", fontSize: 13, fontWeight: "600" },
  actionGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  actionBtn: {
    width: "23%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtnSec: {
    width: "23%",
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },
  actionIconLight: { fontSize: 18, color: "#FFFFFF" },
  actionTextLight: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
  actionIconDark: { fontSize: 18, color: "#07241F" },
  actionTextDark: {
    color: "#07241F",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
  childCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  childProfileHeader: { flexDirection: "row", alignItems: "center" },
  childAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#CBD5E1",
  },
  childMeta: { flex: 1, marginLeft: 12 },
  childName: { fontSize: 16, fontWeight: "700", color: "#1E293B" },
  childSchool: { fontSize: 12, color: "#64748B", marginTop: 2 },
  scheduleBadge: {
    backgroundColor: "#CCFBF1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  scheduleBadgeText: { color: "#0F766E", fontSize: 11, fontWeight: "700" },
  walletMetricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  metricLabel: { fontSize: 12, color: "#64748B" },
  metricValBold: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 2,
  },
  metricValOutstanding: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F766E",
    marginTop: 2,
  },
  childCardProgressTrack: {
    height: 6,
    backgroundColor: "#F1F5F9",
    borderRadius: 3,
    marginTop: 12,
    overflow: "hidden",
  },
  childCardProgressBar: { height: "100%", backgroundColor: "#005F4B" },
  cardFooterActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "#F1F5F9",
    paddingTop: 12,
  },
  deadlineDays: { fontSize: 13, color: "#64748B" },
  inlineDepositBtn: {
    backgroundColor: "#005F4B",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  inlineDepositBtnTxt: { color: "#FFFFFF", fontSize: 13, fontWeight: "600" },
  feedCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  feedRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },
  feedIconSquare: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#E0F2FE",
    alignItems: "center",
    justifyContent: "center",
  },
  feedMeta: { flex: 1, marginLeft: 12 },
  feedTitle: { fontSize: 14, fontWeight: "600", color: "#1E293B" },
  feedSub: { fontSize: 12, color: "#94A3B8", marginTop: 2 },
  feedFin: { alignItems: "flex-end" },
  feedAmount: { fontSize: 14, fontWeight: "700", color: "#16A34A" },
  feedStatus: { fontSize: 11, color: "#94A3B8", marginTop: 2 },
  viewAllBtn: { alignItems: "center", paddingTop: 14 },
  viewAllBtnText: { color: "#005F4B", fontSize: 13, fontWeight: "600" },
  tipCard: {
    backgroundColor: "#EFF6FF",
    margin: 20,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderColor: "#2563EB",
  },
  tipTitle: { fontSize: 14, fontWeight: "700", color: "#1E40AF" },
  tipBody: { fontSize: 13, color: "#1E3A8A", marginTop: 4, lineHeight: 18 },
});
