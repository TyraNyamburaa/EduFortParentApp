import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../../constants/theme';

export default function FinancialPlanScreen({ navigation }: any) {
  const [dailyTarget, setDailyTarget] = useState(160);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.dignityCard}>
        <View style={styles.dignityLeft}>
          <View style={styles.shieldIconWrap}>
            <Text style={styles.shieldTxt}>🛡️</Text>
          </View>
          <View>
            <Text style={styles.dignityTitle}>DIGNITY SHIELD ACTIVE</Text>
            <Text style={styles.dignitySub}>Education Stability Index</Text>
          </View>
        </View>
        <View style={styles.indexWrap}>
          <Text style={styles.indexNum}>84</Text>
          <Text style={styles.indexMax}>/100</Text>
          <Text style={styles.indexLbl}>Strong</Text>
        </View>
      </View>
      <Text style={styles.dignityNote}>Malia & Malkia are fully protected from mid-term short-falls.</Text>

      <View style={styles.cashCard}>
        <View style={styles.cashTop}>
          <Text style={styles.cashTitle}>HOUSEHOLD CASH RHYTHM</Text>
          <Text style={styles.cashTag}>Chama + Daily Flow</Text>
        </View>
        <Text style={styles.cashAmt}>KES 32,000</Text>
        <Text style={styles.cashSub}>Estimated Monthly Float (Flexible)</Text>
        <View style={styles.cashSplitRow}>
          <View style={styles.cashSplit}>
            <Text style={styles.cashLbl}>Avg Weekly Chama</Text>
            <Text style={styles.cashVal}>KES 4,500</Text>
          </View>
          <View style={styles.cashSplit}>
            <Text style={styles.cashLbl}>Daily Float Pace</Text>
            <Text style={styles.cashVal}>KES 700 – 1,200</Text>
          </View>
          <View style={styles.cashSplit}>
            <Text style={styles.cashLbl}>School Share</Text>
            <Text style={[styles.cashVal, { color: THEME.colors.accentGreen }]}>30%</Text>
          </View>
        </View>
      </View>

      <View style={styles.commitCard}>
        <View style={styles.commitTop}>
          <Text style={styles.commitTitle}>Term Fee Commitment</Text>
          <Text style={styles.commitTag}>Term 2, 2025</Text>
        </View>
        <View style={styles.commitMainRow}>
          <Text style={styles.commitAmt}>Secured to Date</Text>
          <Text style={styles.commitVal}>KES 20,408</Text>
        </View>
        <Text style={styles.commitSub}>Total Required: KES 48,000</Text>
        <View style={styles.commitTrack}>
          <View style={[styles.commitFill, { width: '42.5%' }]} />
        </View>
        <View style={styles.commitBottom}>
          <Text style={styles.commitLbl}>42.5% secured</Text>
          <Text style={styles.commitLbl2}>KES 27,592 remaining</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Children Breakdown</Text>

      <View style={styles.childCard}>
        <View style={styles.childTop}>
          <View style={styles.childAvatarWrap}>
            <Text style={styles.childAvatarTxt}>👩</Text>
          </View>
          <View style={styles.childInfo}>
            <Text style={styles.childName}>Malia Wanjiku</Text>
            <Text style={styles.childMeta}>Grade 1 • Peter Kibukosya</Text>
          </View>
          <View style={styles.priorityBadge}><Text style={styles.priorityTxt}>PRIORITY</Text></View>
          <View style={styles.candBadge}><Text style={styles.candTxt}>CANDIDATE</Text></View>
        </View>
        <View style={styles.childStatsRow}>
          <View>
            <Text style={styles.childStatLbl}>Target</Text>
            <Text style={styles.childStatVal}>KES 25,000</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.childStatLbl}>60% funded</Text>
            <Text style={styles.childStatVal2}>KES 15,000 paid</Text>
          </View>
        </View>
        <View style={styles.childTrack}>
          <View style={[styles.childFill, { width: '60%' }]} />
        </View>
      </View>

      <View style={styles.childCard}>
        <View style={styles.childTop}>
          <View style={styles.childAvatarWrap2}>
            <Text style={styles.childAvatarTxt2}>👧</Text>
          </View>
          <View style={styles.childInfo}>
            <Text style={styles.childName}>Malkia Nyawira</Text>
            <Text style={styles.childMeta}>Grade 3 • Lower Primary, Pioneer Preparatory</Text>
          </View>
        </View>
        <View style={styles.childStatsRow}>
          <View>
            <Text style={styles.childStatLbl}>Target</Text>
            <Text style={styles.childStatVal}>KES 23,000</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.childStatLbl}>23.5% funded</Text>
            <Text style={styles.childStatVal2}>KES 5,408 paid</Text>
          </View>
        </View>
        <View style={styles.childTrack}>
          <View style={[styles.childFill2, { width: '23.5%' }]} />
        </View>
      </View>

      <View style={styles.cashFlowCard}>
        <View style={styles.cashFlowTop}>
          <Text style={styles.cashFlowTitle}>Cash Flow Projection</Text>
          <Text style={styles.cashFlowSub}>Current Micro-Pace vs School Deadlines</Text>
        </View>
        <View style={styles.chartBox}>
          <View style={styles.gridLine} />
          <View style={styles.gridLine2} />
          <View style={styles.gridLine3} />

          <View style={styles.areaFill} />

          <View style={[styles.curveSeg, { left: '5%', width: '4.2%', height: 34 }]} />
          <View style={[styles.curveSeg, { left: '9.2%', width: '4.2%', height: 44 }]} />
          <View style={[styles.curveSeg, { left: '13.4%', width: '4.2%', height: 54 }]} />
          <View style={[styles.curveSeg, { left: '17.6%', width: '4.2%', height: 64 }]} />
          <View style={[styles.curveSeg, { left: '21.8%', width: '4.2%', height: 74 }]} />
          <View style={[styles.curveSeg, { left: '26%', width: '4.2%', height: 82 }]} />
          <View style={[styles.curveSeg, { left: '30.2%', width: '4.2%', height: 90 }]} />
          <View style={[styles.curveSeg, { left: '34.4%', width: '4.2%', height: 98 }]} />
          <View style={[styles.curveSeg, { left: '38.6%', width: '4.2%', height: 106 }]} />
          <View style={[styles.curveSeg, { left: '42.8%', width: '4.2%', height: 114 }]} />
          <View style={[styles.curveSeg, { left: '47%', width: '4.2%', height: 122 }]} />
          <View style={[styles.curveSeg, { left: '51.2%', width: '4.2%', height: 128 }]} />
          <View style={[styles.curveSeg, { left: '55.4%', width: '4.2%', height: 134 }]} />
          <View style={[styles.curveSeg, { left: '59.6%', width: '4.2%', height: 140 }]} />
          <View style={[styles.curveSeg, { left: '63.8%', width: '4.2%', height: 146 }]} />
          <View style={[styles.curveSeg, { left: '68%', width: '4.2%', height: 152 }]} />
          <View style={[styles.curveSeg, { left: '72.2%', width: '4.2%', height: 156 }]} />
          <View style={[styles.curveSeg, { left: '76.4%', width: '4.2%', height: 160 }]} />
          <View style={[styles.curveSeg, { left: '80.6%', width: '4.2%', height: 160 }]} />
          <View style={[styles.curveSeg, { left: '84.8%', width: '4.2%', height: 160 }]} />
          <View style={[styles.curveSeg, { left: '89%', width: '4.2%', height: 160 }]} />

          <View style={[styles.dot, { left: '42.8%', bottom: 114 }]}>
            <View style={styles.dotInner} />
          </View>
          <Text style={[styles.dotLbl, { left: '34%', bottom: 122 }]}>32K</Text>

          <View style={[styles.dotActive, { left: '89%', bottom: 160 }]}>
            <View style={styles.dotActiveInner} />
          </View>
          <Text style={[styles.dotLblActive, { left: '74%', bottom: 168 }]}>46.5K target</Text>
          <Text style={[styles.dotLblGreen, { left: '82%', bottom: 168 }]}>Zero Arrears</Text>

          <Text style={styles.chartLbl1}>May</Text>
          <Text style={styles.chartLbl2}>Jun</Text>
          <Text style={styles.chartLbl3}>Jul</Text>
          <Text style={styles.chartLbl4}>Aug</Text>

          <View style={styles.zeroBadge}><Text style={styles.zeroTxt}>KES 46,500 Target</Text></View>
          <View style={styles.zeroBadge2}><Text style={styles.zeroTxt2}>Zero Arrears</Text></View>
        </View>
        <View style={styles.coverageRow}>
          <Text style={styles.coverageLbl}>Exam Deadline Coverage</Text>
          <Text style={styles.coverageVal}>100% on schedule</Text>
        </View>
      </View>

      <View style={styles.insightCard}>
        <View style={styles.insightTop}>
          <Text style={styles.insightTitle}>SMART FORECAST & INSIGHTS</Text>
        </View>
        <Text style={styles.insightTxt}>&ldquo;At your current savings rate of KES 160/day, you&apos;ll reach your Term 2 tuition goal in 3 weeks and 2026 secondary transition in 5 months with zero school arrears.&rdquo;</Text>
        <View style={styles.insightBanner}>
          <View style={styles.insightBannerLeft}>
            <Text style={styles.insightBannerTxt}>Increasing your daily micro-save by just KES 40</Text>
            <Text style={styles.insightBannerTxt2}>finishes Bran&apos;s term fees 12 days before school exams</Text>
          </View>
        </View>
      </View>

      <View style={styles.simulatorCard}>
        <View style={styles.simulatorTop}>
          <Text style={styles.simulatorTitle}>Micro-Adjustment Simulator</Text>
          <Text style={styles.simulatorSub}>Drag to see real-time impact on buffer</Text>
        </View>
        <View style={styles.sliderRow}>
          <Text style={styles.sliderLbl}>DAILY MICRO-SAVE TARGET</Text>
          <Text style={styles.sliderVal}>KES {dailyTarget} / day</Text>
        </View>
        <View style={styles.sliderBtns}>
          {[50, 100, 160, 250].map((v) => (
            <TouchableOpacity key={v} style={[styles.sliderBtn, dailyTarget === v && styles.sliderBtnActive]} onPress={() => setDailyTarget(v)}>
              <Text style={[styles.sliderBtnTxt, dailyTarget === v && styles.sliderBtnActiveTxt]}>KES {v}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.simulatorStats}>
          <View style={styles.simStat}>
            <Text style={styles.simStatLbl}>Term 2 Completion</Text>
            <Text style={styles.simStatVal}>July 18 (21 Days)</Text>
          </View>
          <View style={styles.simStatDivider} />
          <View style={styles.simStat}>
            <Text style={styles.simStatLbl}>Date Buffer</Text>
            <Text style={[styles.simStatVal, { color: THEME.colors.accentGreen }]}>+14 Days early</Text>
          </View>
        </View>
        <View style={styles.priorityRow}>
          <View style={styles.priorityItem}>
            <Text style={styles.priorityLbl}>Smart Priority Routing</Text>
            <Text style={styles.priorityVal}>65% Savings (Exam) • 35% Bran</Text>
          </View>
          <TouchableOpacity><Text style={styles.rebalanceTxt}>Rebalance</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.zeroCard}>
        <Text style={styles.zeroTitle}>ZERO DEBT DIGNITY</Text>
        <Text style={styles.zeroSub}>86% of parents using Chama forecasting successfully cleared fees before KCSE/KCPE exams.</Text>
      </View>

      <View style={styles.actionBtns}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('QuickDeposit')}>
          <Text style={styles.primaryBtnIcon}>✓</Text>
          <Text style={styles.primaryBtnTxt}>Apply New Target (KES 160)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ghostBtn}>
          <Text style={styles.ghostBtnIcon}>📄</Text>
          <Text style={styles.ghostBtnTxt}>Export Financial Plan (PDF)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingBottom: 40 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8 },
  headerTitle: { fontSize: 12, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 1 },
  screenTitle: { fontSize: 22, fontWeight: '800', color: THEME.colors.textDark },
  topRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: THEME.colors.cardBackground, justifyContent: 'center', alignItems: 'center', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  iconTxt: { fontSize: 16 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#E0F2FE', justifyContent: 'center', alignItems: 'center' },
  avatarTxt: { fontSize: 16 },
  dignityCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0F2922', borderRadius: 16, padding: 16, marginBottom: 10 },
  dignityLeft: { flexDirection: 'row', alignItems: 'center' },
  shieldIconWrap: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#065F46', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  shieldTxt: { fontSize: 20 },
  dignityTitle: { color: '#FFF', fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  dignitySub: { color: '#94A3B8', fontSize: 11, marginTop: 2 },
  indexWrap: { alignItems: 'flex-end' },
  indexNum: { color: '#10B981', fontSize: 28, fontWeight: '800' },
  indexMax: { color: '#94A3B8', fontSize: 14, fontWeight: '600' },
  indexLbl: { color: '#10B981', fontSize: 11, fontWeight: '700' },
  dignityNote: { color: THEME.colors.textMuted, fontSize: 12, marginBottom: 16, marginTop: 4 },
  cashCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 16, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  cashTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  cashTitle: { fontSize: 12, fontWeight: '700', color: THEME.colors.textDark, letterSpacing: 0.5 },
  cashTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  cashAmt: { fontSize: 28, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 4 },
  cashSub: { fontSize: 12, color: THEME.colors.textMuted, marginBottom: 14 },
  cashSplitRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  cashSplit: { flex: 1, backgroundColor: '#F8FAFC', borderRadius: 10, padding: 10, alignItems: 'center' },
  cashLbl: { fontSize: 10, color: THEME.colors.textMuted, marginBottom: 4 },
  cashVal: { fontSize: 12, fontWeight: '700', color: THEME.colors.textDark },
  commitCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  commitTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  commitTitle: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark },
  commitTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  commitMainRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 },
  commitAmt: { fontSize: 13, color: THEME.colors.textMuted },
  commitVal: { fontSize: 22, fontWeight: '800', color: THEME.colors.textDark },
  commitSub: { fontSize: 12, color: THEME.colors.textMuted, marginBottom: 10 },
  commitTrack: { height: 6, backgroundColor: '#F1F5F9', borderRadius: 3, overflow: 'hidden', marginBottom: 8 },
  commitFill: { height: '100%', backgroundColor: THEME.colors.primary, borderRadius: 3 },
  commitBottom: { flexDirection: 'row', justifyContent: 'space-between' },
  commitLbl: { fontSize: 12, color: THEME.colors.accentGreen, fontWeight: '700' },
  commitLbl2: { fontSize: 12, color: '#D97706', fontWeight: '700' },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 14 },
  childCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  childTop: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 },
  childAvatarWrap: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FDE68A', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  childAvatarTxt: { fontSize: 20 },
  childAvatarWrap2: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FBCFE8', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  childAvatarTxt2: { fontSize: 20 },
  childInfo: { flex: 1 },
  childName: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark },
  childMeta: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  priorityBadge: { backgroundColor: '#FEF3C7', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, marginRight: 6 },
  priorityTxt: { fontSize: 9, color: '#92400E', fontWeight: '700' },
  candBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  candTxt: { fontSize: 9, color: '#065F46', fontWeight: '700' },
  childStatsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  childStatLbl: { fontSize: 11, color: THEME.colors.textMuted },
  childStatVal: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark, marginTop: 2 },
  childStatVal2: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark, marginTop: 2 },
  childTrack: { height: 6, backgroundColor: '#F1F5F9', borderRadius: 3, overflow: 'hidden' },
  childFill: { height: '100%', backgroundColor: THEME.colors.primary, borderRadius: 3 },
  childFill2: { height: '100%', backgroundColor: '#8B5CF6', borderRadius: 3 },
  cashFlowCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 16, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  cashFlowTop: { marginBottom: 14 },
  cashFlowTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark },
  cashFlowSub: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  chartBox: { height: 190, position: 'relative', marginBottom: 14 },
  gridLine: { position: 'absolute', bottom: 40, left: '4%', right: '4%', height: 1, backgroundColor: '#E2E8F0' },
  gridLine2: { position: 'absolute', bottom: 75, left: '4%', right: '4%', height: 1, backgroundColor: '#F1F5F9' },
  gridLine3: { position: 'absolute', bottom: 110, left: '4%', right: '4%', height: 1, backgroundColor: '#F1F5F9' },
  areaFill: { position: 'absolute', bottom: 40, left: '4%', right: '4%', height: 150, backgroundColor: '#10B981', opacity: 0.1, borderRadius: 8 },
  curveSeg: { position: 'absolute', bottom: 40, width: 2, backgroundColor: '#10B981', opacity: 0.85, borderRadius: 1 },
  dot: { position: 'absolute', width: 10, height: 10, transform: [{ translateX: -5 }] },
  dotInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#FFF', borderWidth: 2, borderColor: '#10B981' },
  dotActive: { position: 'absolute', width: 14, height: 14, transform: [{ translateX: -7 }] },
  dotActiveInner: { width: 14, height: 14, borderRadius: 7, backgroundColor: THEME.colors.primary, borderWidth: 3, borderColor: '#FFF' },
  dotLbl: { position: 'absolute', fontSize: 9, color: THEME.colors.textMuted, fontWeight: '700', backgroundColor: '#FFF', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, transform: [{ translateX: -20 }] },
  dotLblActive: { position: 'absolute', fontSize: 9, color: THEME.colors.primary, fontWeight: '700', backgroundColor: '#FFF', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, transform: [{ translateX: -30 }] },
  dotLblGreen: { position: 'absolute', fontSize: 9, color: THEME.colors.accentGreen, fontWeight: '700', backgroundColor: '#FFF', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, transform: [{ translateX: -30 }] },
  chartLbl1: { position: 'absolute', bottom: 22, left: '4%', fontSize: 10, color: THEME.colors.textMuted },
  chartLbl2: { position: 'absolute', bottom: 22, left: '30%', fontSize: 10, color: THEME.colors.textMuted },
  chartLbl3: { position: 'absolute', bottom: 22, left: '55%', fontSize: 10, color: THEME.colors.textMuted },
  chartLbl4: { position: 'absolute', bottom: 22, left: '80%', fontSize: 10, color: THEME.colors.textMuted },
  zeroBadge: { position: 'absolute', top: 10, right: 10, backgroundColor: '#0F2922', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  zeroTxt: { color: '#FFF', fontSize: 10, fontWeight: '700' },
  zeroBadge2: { position: 'absolute', top: 30, right: 10, backgroundColor: '#10B981', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  zeroTxt2: { color: '#FFF', fontSize: 10, fontWeight: '700' },
  coverageRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  coverageLbl: { fontSize: 12, color: THEME.colors.textMuted },
  coverageVal: { fontSize: 13, fontWeight: '700', color: THEME.colors.accentGreen },
  insightCard: { backgroundColor: '#0F2922', borderRadius: 14, padding: 16, marginBottom: 16 },
  insightTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  insightTitle: { fontSize: 12, fontWeight: '700', color: '#10B981', letterSpacing: 0.5 },
  insightTxt: { color: '#FFF', fontSize: 14, lineHeight: 20, marginBottom: 14 },
  insightBanner: { backgroundColor: 'rgba(16,185,129,0.15)', borderRadius: 10, padding: 12 },
  insightBannerLeft: { flex: 1 },
  insightBannerTxt: { color: '#10B981', fontSize: 12, fontWeight: '600' },
  insightBannerTxt2: { color: '#10B981', fontSize: 12, fontWeight: '600', marginTop: 4 },
  simulatorCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 16, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  simulatorTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  simulatorTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark },
  simulatorSub: { fontSize: 11, color: THEME.colors.textMuted },
  sliderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sliderLbl: { fontSize: 12, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 0.5 },
  sliderVal: { fontSize: 18, fontWeight: '800', color: THEME.colors.textDark },
  sliderBtns: { flexDirection: 'row', gap: 8, marginBottom: 20 },
  sliderBtn: { flex: 1, backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: THEME.colors.border, borderRadius: 10, padding: 12, alignItems: 'center' },
  sliderBtnActive: { backgroundColor: THEME.colors.primary, borderColor: THEME.colors.primary },
  sliderBtnTxt: { fontSize: 13, fontWeight: '700', color: THEME.colors.textMuted },
  sliderBtnActiveTxt: { color: '#FFF' },
  simulatorStats: { flexDirection: 'row', backgroundColor: '#F0FDF4', borderRadius: 10, padding: 14, marginBottom: 14 },
  simStat: { flex: 1, alignItems: 'center' },
  simStatLbl: { fontSize: 11, color: THEME.colors.textMuted, marginBottom: 4 },
  simStatVal: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark },
  simStatDivider: { width: 1, backgroundColor: '#D1FAE5' },
  priorityRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC', borderRadius: 10, padding: 12 },
  priorityItem: { flex: 1 },
  priorityLbl: { fontSize: 12, color: THEME.colors.textMuted },
  priorityVal: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark, marginTop: 2 },
  rebalanceTxt: { fontSize: 13, color: THEME.colors.primary, fontWeight: '700' },
  zeroCard: { backgroundColor: '#0F2922', borderRadius: 12, padding: 14, marginBottom: 16 },
  zeroTitle: { color: '#10B981', fontSize: 12, fontWeight: '700', letterSpacing: 0.5, marginBottom: 6 },
  zeroSub: { color: '#94A3B8', fontSize: 12, lineHeight: 18 },
  actionBtns: { flexDirection: 'row', gap: 10, marginTop: 8 },
  primaryBtn: { flex: 1, backgroundColor: THEME.colors.primary, padding: 16, borderRadius: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  primaryBtnIcon: { color: '#FFF', fontSize: 16, marginRight: 8, fontWeight: '700' },
  primaryBtnTxt: { color: '#FFF', fontSize: 15, fontWeight: '700' },
  ghostBtn: { flex: 1, backgroundColor: THEME.colors.cardBackground, borderWidth: 1.5, borderColor: THEME.colors.border, padding: 16, borderRadius: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 4 },
  ghostBtnIcon: { color: THEME.colors.textMuted, fontSize: 16, marginRight: 8 },
  ghostBtnTxt: { color: THEME.colors.textMuted, fontSize: 14, fontWeight: '600' },
});