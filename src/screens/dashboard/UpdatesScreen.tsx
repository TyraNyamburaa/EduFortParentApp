import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../../constants/theme';

const FILTERS = [
  { label: 'All (5)', active: true },
  { label: 'Savings Nudges (2)' },
  { label: 'School Updates (2)' },
];

const NOTIFICATIONS = [
  {
    id: '1', type: 'nudge', time: 'Today, 8:30 PM', icon: '🔔', tag: 'Gentle Prompt',
    title: 'Evening Micro-Save Nudge',
    body: 'Jambo Winfrida Chelays Grade 6 tuition is only KES 2,000 away from full clearance before exams. Would you like to tuck away KES 100 this evening?',
    action: 'Save KES 100 Now (1-Tap M-Pesa)',
    snooze: 'Snooze to Friday Chama',
    note: 'No push alerts ever',
  },
  {
    id: '2', type: 'school', time: 'Today, 11:15 AM', icon: '🏫', tag: 'Official School Notice',
    title: 'Term 2 CBC Assessment Timetable',
    body: 'School bursar confirmed: All learners with active EduFort savings plans are cleared for exam hall access without fee stoppage.',
    source: 'Official School Notice • Peter Kibukosya',
    action: 'View Student Exam Pass (PDF)',
  },
  {
    id: '3', type: 'milestone', time: 'Yesterday, 2:40 PM', icon: '🎉', tag: '60% Complete',
    title: 'Milestone Reached!',
    body: 'Horizontal Joy: You have reached 60% of Chelays Grade 6 annual fee goal. You are setting up your education for success, shilling by shilling.',
    child: 'Chelays Kerubo • Grade 6', progress: 'KES 13,800 / KES 23,000',
    started: 'Started Term 2', target: 'Target: Mid August',
    action: 'View Dignity Certificate',
  },
  {
    id: '4', type: 'payment', time: '12 July 2025 • 4:10 PM', icon: '✅', tag: 'Settled',
    title: 'Payment Verified by Bursar',
    body: 'Peter Kibukosya Primary Paybill #842100 Student Reference: Malia Wanjiku(Tuition)',
    amount: 'Amount Credited: KES 5,000.00',
    sub: 'Official digital receipt #BAR-99214 issued directly into your tax & audit vault.',
    action: 'View & Download Official Receipt',
  },
  {
    id: '5', type: 'insight', time: '10 July 2025', icon: '💡', tag: 'Cash Rhythm',
    title: 'Gentle Pacing Insight',
    body: 'Your Chama payout is expected this Friday. We have temporarily lowered your daily micro-save suggestion to KES 50 to give your household wallet breathing room until funds land.',
    footer: 'Adaptive rhythm active • Adjust cycle',
  },
];

export default function UpdatesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Text style={styles.headerTitle}>EDUFORT PARENT</Text>
      <Text style={styles.screenTitle}>Updates & Cheers</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
        {FILTERS.map((f, i) => (
          <TouchableOpacity key={i} style={[styles.filterChip, f.active && styles.filterChipActive]}>
            <Text style={[styles.filterTxt, f.active && styles.filterTxtActive]}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.guaranteeCard}>
        <Text style={styles.guaranteeTxt}>EDUFORT DIGNITY GUARANTEE</Text>
        <Text style={styles.guaranteeSub}>We will never send high-pressure notices. All reminders are gentle, flexible, and timed to your personal cash rhythm.</Text>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>TODAY</Text>
        <Text style={styles.sectionCount}>2 new notes</Text>
      </View>

      {NOTIFICATIONS.map((n) => (
        <View key={n.id} style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.iconWrap}><Text style={styles.iconEmoji}>{n.icon}</Text></View>
            <View style={styles.cardMeta}>
              <Text style={styles.cardTime}>{n.time}</Text>
              <Text style={styles.cardTag}>{n.tag}</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>{n.title}</Text>
          <Text style={styles.cardBody}>{n.body}</Text>

          {n.source && <Text style={styles.cardSource}>{n.source}</Text>}
          {n.child && (
            <View style={styles.childRow}>
              <Text style={styles.childLbl}>Child</Text>
              <Text style={styles.childVal}>{n.child}</Text>
            </View>
          )}
          {n.progress && (
            <View style={styles.progressWrap}>
              <View style={styles.progressTrack}><View style={[styles.progressFill, { width: '60%' }]} /></View>
              <Text style={styles.progressVal}>{n.progress}</Text>
            </View>
          )}
          {n.started && (
            <View style={styles.metaRow}>
              <Text style={styles.metaLbl}>{n.started}</Text>
              <Text style={styles.metaLbl2}>{n.target}</Text>
            </View>
          )}
          {n.amount && (
            <View style={styles.amountBox}>
              <Text style={styles.amountLbl}>Amount Credited</Text>
              <Text style={styles.amountVal}>{n.amount}</Text>
            </View>
          )}
          {n.sub && <Text style={styles.cardSub}>{n.sub}</Text>}
          {n.snooze && (
            <View style={styles.snoozeRow}>
              <TouchableOpacity><Text style={styles.snoozeTxt}>{n.snooze}</Text></TouchableOpacity>
              <Text style={styles.snoozeNote}>{n.note}</Text>
            </View>
          )}
          {n.footer && (
            <View style={styles.footerRow}>
              <Text style={styles.footerLbl}>Adaptive rhythm active</Text>
              <Text style={styles.footerLink}>Adjust cycle</Text>
            </View>
          )}

          {n.action && (
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>{n.action}</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      <View style={styles.whatsappCard}>
        <View style={styles.whatsappLeft}>
          <Text style={styles.whatsappIcon}>💬</Text>
          <View>
            <Text style={styles.whatsappTitle}>WhatsApp Instant Updates</Text>
            <Text style={styles.whatsappSub}>Prefer not opening the app? Receive gentle reminders, nudges, exams, and digital bursar receipts straight to your WhatsApp.</Text>
          </View>
        </View>
        <View style={styles.whatsappBadge}><Text style={styles.whatsappBadgeTxt}>🔒</Text></View>
      </View>
      <TouchableOpacity style={styles.connectBtn}>
        <Text style={styles.connectBtnTxt}>Connect WhatsApp Notifications</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  headerTitle: { fontSize: 12, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 1 },
  screenTitle: { fontSize: 26, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 16 },
  filterRow: { flexDirection: 'row', marginBottom: 16, gap: 8 },
  filterChip: { backgroundColor: THEME.colors.cardBackground, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  filterChipActive: { backgroundColor: THEME.colors.primary },
  filterTxt: { fontSize: 13, fontWeight: '600', color: THEME.colors.textMuted },
  filterTxtActive: { color: '#FFF' },
  guaranteeCard: { backgroundColor: '#0F2922', borderRadius: 14, padding: 16, marginBottom: 20 },
  guaranteeTxt: { color: '#10B981', fontSize: 12, fontWeight: '700', letterSpacing: 0.5, marginBottom: 6 },
  guaranteeSub: { color: '#94A3B8', fontSize: 12, lineHeight: 18 },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textMuted, letterSpacing: 0.5 },
  sectionCount: { fontSize: 12, color: THEME.colors.textMuted },
  card: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 14, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  cardTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  iconWrap: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  iconEmoji: { fontSize: 20 },
  cardMeta: { flex: 1 },
  cardTime: { fontSize: 12, color: THEME.colors.textMuted, marginBottom: 3 },
  cardTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, fontWeight: '600' },
  cardTitle: { fontSize: 16, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 6 },
  cardBody: { fontSize: 14, color: THEME.colors.textMuted, lineHeight: 20, marginBottom: 8 },
  cardSource: { fontSize: 11, color: THEME.colors.textMuted, marginBottom: 8 },
  childRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderTopWidth: 1, borderTopColor: '#F1F5F9', marginBottom: 8 },
  childLbl: { fontSize: 12, color: THEME.colors.textMuted },
  childVal: { fontSize: 12, fontWeight: '600', color: THEME.colors.textDark },
  progressWrap: { marginBottom: 10 },
  progressTrack: { height: 6, backgroundColor: '#F1F5F9', borderRadius: 3, overflow: 'hidden', marginBottom: 6 },
  progressFill: { height: '100%', backgroundColor: THEME.colors.accentGreen, borderRadius: 3 },
  progressVal: { fontSize: 12, fontWeight: '700', color: THEME.colors.textDark },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  metaLbl: { fontSize: 11, color: THEME.colors.textMuted },
  metaLbl2: { fontSize: 11, color: THEME.colors.textMuted },
  amountBox: { backgroundColor: '#F0FDF4', borderRadius: 10, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  amountLbl: { fontSize: 12, color: THEME.colors.textMuted },
  amountVal: { fontSize: 15, fontWeight: '800', color: THEME.colors.accentGreen },
  cardSub: { fontSize: 11, color: THEME.colors.textMuted, marginBottom: 12, lineHeight: 16 },
  snoozeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  snoozeTxt: { fontSize: 13, color: THEME.colors.primary, fontWeight: '600' },
  snoozeNote: { fontSize: 11, color: THEME.colors.textMuted },
  footerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC', borderRadius: 8, padding: 10, marginBottom: 12 },
  footerLbl: { fontSize: 12, color: THEME.colors.textMuted },
  footerLink: { fontSize: 12, color: THEME.colors.primary, fontWeight: '600' },
  actionBtn: { backgroundColor: THEME.colors.primary, padding: 14, borderRadius: 10, alignItems: 'center' },
  actionBtnTxt: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  whatsappCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', backgroundColor: '#0F2922', borderRadius: 14, padding: 16, marginBottom: 16 },
  whatsappLeft: { flex: 1, marginRight: 12 },
  whatsappIcon: { fontSize: 22, marginBottom: 8 },
  whatsappTitle: { color: '#FFF', fontSize: 15, fontWeight: '700', marginBottom: 4 },
  whatsappSub: { color: '#94A3B8', fontSize: 12, lineHeight: 18 },
  whatsappBadge: { backgroundColor: '#065F46', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
  whatsappBadgeTxt: { color: '#FFF', fontSize: 12 },
  connectBtn: { backgroundColor: THEME.colors.primary, padding: 16, borderRadius: 12, alignItems: 'center' },
  connectBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
});