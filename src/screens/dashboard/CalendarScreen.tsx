import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../../constants/theme';
import Icon from '../../components/Icon';

const WEEK_DAYS = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const DAYS = [11, 12, 13, 14, 15, 16, 17];

export default function CalendarScreen({ navigation }: any) {
  const [view, setView] = useState('Timeline');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.syncCard}>
        <View style={styles.syncLeft}>
          <View style={styles.syncIconWrap}><Icon name="tuition" size={18} /></View>
          <View>
            <Text style={styles.syncTitle}>BARAKA ACADEMY SYNC</Text>
            <Text style={styles.syncSub}>Official school portal verified 2 days ago</Text>
          </View>
        </View>
        <TouchableOpacity><Icon name="settings" size={18} /></TouchableOpacity>
      </View>

      <View style={styles.childRow}>
        <View style={styles.childPillActive}>
          <Text style={styles.childPillTxt}>All Children (2)</Text>
        </View>
        <View style={styles.childPill}>
          <View style={styles.miniAvatar}><Icon name="mother" size={12} /></View>
          <Text style={styles.childPillTxt}>Malia (Grade 1)</Text>
          <Text style={styles.dot}>●</Text>
        </View>
      </View>

      <View style={styles.cycleCard}>
        <View style={styles.cycleLeft}>
          <Icon name="calendar" size={20} style={styles.cycleIcon} />
          <View>
            <Text style={styles.cycleLbl}>ACADEMIC CYCLE</Text>
            <Text style={styles.cycleVal}>Term 2, 2025</Text>
          </View>
        </View>
        <View style={styles.viewToggles}>
          <TouchableOpacity style={[styles.viewBtn, view === 'Timeline' && styles.viewBtnActive]} onPress={() => setView('Timeline')}>
            <Text style={[styles.viewBtnTxt, view === 'Timeline' && styles.viewBtnActiveTxt]}>Timeline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.viewBtn, view === 'Month' && styles.viewBtnActive]} onPress={() => setView('Month')}>
            <Text style={[styles.viewBtnTxt, view === 'Month' && styles.viewBtnActiveTxt]}>Month</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.weekRow}>
        {WEEK_DAYS.map((d, i) => (
          <View key={i} style={styles.dayCol}>
            <Text style={styles.weekLbl}>{d}</Text>
            <View style={[styles.dayCircle, i === 4 && styles.dayCircleToday]}>
              <Text style={[styles.dayTxt, i === 4 && styles.dayTxtToday]}>{DAYS[i]}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.balanceCard}>
        <View style={styles.balanceTop}>
          <View style={styles.badge}><Text style={styles.badgeTxt}>18 DAYS LEFT</Text></View>
          <Text style={styles.badge2}>Grade 1 Term 2</Text>
        </View>
        <Text style={styles.balanceTitle}>Malia&apos;s Final Balance</Text>
        <Text style={styles.balanceSub}>You have saved KES 14,500 of KES 25,000.</Text>
        <Text style={styles.balanceSub2}>Putting aside just KES 100/day closes the gap comfortably before 15 July.</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: '58%' }]} />
        </View>
        <View style={styles.balanceBottom}>
          <Text style={styles.balanceLbl}>58% Funded</Text>
          <Text style={styles.balanceLbl2}>KES 10,500 Remaining</Text>
        </View>
        <TouchableOpacity style={styles.quickDepositBtn}>
          <Text style={styles.quickDepositBtnTxt}>＋ Quick Deposit for 15 July Milestone</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>This Month (July 2025)</Text>
        <Text style={styles.sectionCount}>3 Events</Text>
      </View>

      <View style={styles.eventCard}>
        <View style={styles.eventDateCol}>
          <Text style={styles.eventMonth}>JUL</Text>
          <Text style={styles.eventDay}>15</Text>
        </View>
        <View style={styles.eventBody}>
          <View style={styles.eventTop}>
            <Text style={styles.eventTitle}>Mid-Term Fee Clearance</Text>
            <Text style={styles.eventAmt}>KES 8,000</Text>
          </View>
          <View style={styles.eventMetaRow}>
            <Text style={styles.eventChild}>Malia • Grade 5</Text>
            <Text style={styles.eventTag}>Target</Text>
          </View>
          <View style={styles.paceRow}>
            <Text style={styles.paceLbl}>Suggested Pace: KES 120 / day</Text>
            <TouchableOpacity><Text style={styles.paceLink}>Set Auto-Save →</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.eventCard}>
        <View style={styles.eventDateCol}>
          <Text style={styles.eventMonth}>JUL</Text>
          <Text style={styles.eventDay}>22</Text>
        </View>
        <View style={styles.eventBody}>
          <View style={styles.eventTop}>
            <Text style={styles.eventTitle}>CBC Mid-Term Assessment</Text>
            <View style={styles.checkBadge}><Icon name="check" size={13} /></View>
          </View>
          <View style={styles.eventMetaRow}>
            <Text style={styles.eventChild}>Malia • Grade 5</Text>
            <Text style={styles.eventTag2}>Academic Assessment</Text>
          </View>
          <View style={styles.timelineRow}>
            <Icon name="assistant" size={14} style={styles.timelineIcon} />
            <Text style={styles.timelineTxt}>Timeline: 22 July – 26 July</Text>
            <Text style={styles.timelineTxt2}>Zero Clearance Stress</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Next Month (August 2025)</Text>
        <Text style={styles.sectionCount}>2 Events</Text>
      </View>

      <View style={styles.eventCard}>
        <View style={styles.eventDateCol}>
          <Text style={styles.eventMonth}>AUG</Text>
          <Text style={styles.eventDay}>08</Text>
        </View>
        <View style={styles.eventBody}>
          <View style={styles.eventTop}>
            <Text style={styles.eventTitle}>Term 2 Closing & Holiday Break</Text>
            <TouchableOpacity><Text style={styles.linkIcon}>↗</Text></TouchableOpacity>
          </View>
          <View style={styles.eventMetaRow}>
            <Text style={styles.eventChild}>School Recess</Text>
            <Text style={styles.eventTag3}>All Children</Text>
          </View>
          <View style={styles.noteRow}>
            <Icon name="info" size={14} style={styles.noteIcon} />
            <Text style={styles.noteTxt}>Report cards released on portal • Holidays run until 31 August</Text>
          </View>
        </View>
      </View>

      <View style={styles.eventCard}>
        <View style={styles.eventDateCol}>
          <Text style={styles.eventMonthGreen}>SEP</Text>
          <Text style={styles.eventDayGreen}>01</Text>
        </View>
        <View style={styles.eventBody}>
          <View style={styles.eventTop}>
            <Text style={styles.eventTitle}>Term 3 Official Opening Day</Text>
            <Text style={styles.earlyTxt}>Early Bird Pot</Text>
          </View>
          <View style={styles.eventMetaRow}>
            <Text style={styles.eventTag4}>Next Term</Text>
            <Text style={styles.eventTag5}>Term 3 2025</Text>
            <Text style={styles.eventTag6}>Open for prep</Text>
          </View>
          <View style={styles.planningRow}>
            <Text style={styles.planningTxt}>Early planning prevents last-minute shopping rush</Text>
            <TouchableOpacity><Text style={styles.planLink}>Plan Term 3 ›</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.circularCard}>
        <View style={styles.circularLeft}>
          <Icon name="document" size={22} style={styles.circularIcon} />
          <View>
            <Text style={styles.circularTitle}>Have a printed school circular?</Text>
            <Text style={styles.circularSub}>Scan paper notice to auto-update dates</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.scanBtn}>
          <View style={styles.scanRow}><Icon name="search" size={13} /><Text style={styles.scanBtnTxt}> Scan</Text></View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8 },
  headerTitle: { fontSize: 12, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 1 },
  screenTitle: { fontSize: 22, fontWeight: '800', color: THEME.colors.textDark },
  topRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: THEME.colors.cardBackground, justifyContent: 'center', alignItems: 'center', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  iconTxt: { fontSize: 16 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#E0F2FE', justifyContent: 'center', alignItems: 'center' },
  avatarTxt: { fontSize: 16 },
  syncCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  syncLeft: { flexDirection: 'row', alignItems: 'center' },
  syncIconWrap: { width: 38, height: 38, borderRadius: 10, backgroundColor: '#D1FAE5', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  syncIcon: { fontSize: 18 },
  syncTitle: { fontSize: 12, fontWeight: '700', color: THEME.colors.textDark, letterSpacing: 0.5 },
  syncSub: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  settingsTxt: { fontSize: 18, color: THEME.colors.textMuted },
  childRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  childPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  childPillActive: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.primary, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20 },
  childPillTxt: { fontSize: 13, fontWeight: '600', color: THEME.colors.textDark },
  miniAvatar: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#FDE68A', justifyContent: 'center', alignItems: 'center', marginRight: 6 },
  miniAvatarTxt: { fontSize: 12 },
  dot: { color: '#FFF', fontSize: 10, marginLeft: 4 },
  cycleCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 16, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  cycleLeft: { flexDirection: 'row', alignItems: 'center' },
  cycleIcon: { fontSize: 20, marginRight: 10 },
  cycleLbl: { fontSize: 10, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 1 },
  cycleVal: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark },
  viewToggles: { flexDirection: 'row', backgroundColor: '#F1F5F9', borderRadius: 8, padding: 3 },
  viewBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  viewBtnActive: { backgroundColor: THEME.colors.cardBackground, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 2 },
  viewBtnTxt: { fontSize: 12, fontWeight: '600', color: THEME.colors.textMuted },
  viewBtnActiveTxt: { color: THEME.colors.textDark },
  weekRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  dayCol: { alignItems: 'center' },
  weekLbl: { fontSize: 11, color: THEME.colors.textMuted, marginBottom: 6 },
  dayCircle: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  dayCircleToday: { backgroundColor: THEME.colors.primary },
  dayTxt: { fontSize: 13, fontWeight: '600', color: THEME.colors.textMuted },
  dayTxtToday: { color: '#FFF' },
  balanceCard: { backgroundColor: '#0F2922', borderRadius: 16, padding: 20, marginBottom: 24 },
  balanceTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  badge: { backgroundColor: '#065F46', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeTxt: { color: '#FFF', fontSize: 10, fontWeight: '700' },
  badge2: { color: '#94A3B8', fontSize: 11, fontWeight: '600' },
  balanceTitle: { color: '#FFF', fontSize: 20, fontWeight: '800', marginBottom: 6 },
  balanceSub: { color: '#94A3B8', fontSize: 13, lineHeight: 18, marginBottom: 4 },
  balanceSub2: { color: '#94A3B8', fontSize: 13, lineHeight: 18, marginBottom: 14 },
  progressTrack: { height: 6, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden', marginBottom: 10 },
  progressFill: { height: '100%', backgroundColor: '#10B981', borderRadius: 3 },
  balanceBottom: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 },
  balanceLbl: { color: '#10B981', fontSize: 13, fontWeight: '700' },
  balanceLbl2: { color: '#FBBF24', fontSize: 13, fontWeight: '700' },
  quickDepositBtn: { backgroundColor: '#10B981', padding: 14, borderRadius: 10, alignItems: 'center' },
  quickDepositBtnTxt: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: THEME.colors.textDark },
  sectionCount: { fontSize: 12, color: THEME.colors.textMuted },
  eventCard: { flexDirection: 'row', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  eventDateCol: { alignItems: 'center', marginRight: 14, minWidth: 50 },
  eventMonth: { fontSize: 11, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 1 },
  eventDay: { fontSize: 22, fontWeight: '800', color: THEME.colors.textDark },
  eventBody: { flex: 1 },
  eventTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  eventTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark, flex: 1 },
  eventAmt: { fontSize: 15, fontWeight: '800', color: THEME.colors.primary },
  eventMetaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 8 },
  eventChild: { fontSize: 12, color: THEME.colors.textMuted },
  eventTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  eventTag2: { fontSize: 10, color: '#059669', backgroundColor: '#D1FAE5', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  eventTag3: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  eventTag4: { fontSize: 10, color: '#059669', backgroundColor: '#D1FAE5', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  eventTag5: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  eventTag6: { fontSize: 10, color: '#D97706', backgroundColor: '#FEF3C7', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  paceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  paceLbl: { fontSize: 12, color: THEME.colors.textMuted },
  paceLink: { fontSize: 12, color: THEME.colors.primary, fontWeight: '600' },
  checkBadge: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#10B981', justifyContent: 'center', alignItems: 'center' },
  checkTxt: { color: '#FFF', fontSize: 13, fontWeight: '700' },
  timelineRow: { flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'wrap' },
  timelineIcon: { marginRight: 2 },
  timelineTxt: { fontSize: 12, color: THEME.colors.textMuted },
  timelineTxt2: { fontSize: 12, color: '#059669', fontWeight: '600' },
  noteRow: { flexDirection: 'row', alignItems: 'center' },
  noteIcon: { marginRight: 6 },
  noteTxt: { flex: 1, fontSize: 12, color: THEME.colors.textMuted, lineHeight: 18 },
  linkIcon: { fontSize: 16, color: THEME.colors.textMuted },
  planningRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  planningTxt: { fontSize: 12, color: THEME.colors.textMuted, flex: 1, marginRight: 10 },
  planLink: { fontSize: 13, color: THEME.colors.primary, fontWeight: '700' },
  eventMonthGreen: { color: '#059669' },
  eventDayGreen: { color: '#059669' },
  earlyTxt: { fontSize: 10, color: '#D97706', fontWeight: '700', backgroundColor: '#FEF3C7', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  circularCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 16, marginBottom: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  circularLeft: { flexDirection: 'row', alignItems: 'center' },
  circularIcon: { fontSize: 22, marginRight: 12 },
  circularTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark },
  circularSub: { fontSize: 12, color: THEME.colors.textMuted, marginTop: 2 },
  scanBtn: { backgroundColor: THEME.colors.primary, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' },
  scanRow: { flexDirection: 'row', alignItems: 'center' },
  scanBtnTxt: { color: '#FFF', fontSize: 13, fontWeight: '700' },
});