import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../../constants/theme';

const EVENTS = [
  { time: '10:14:32', text: 'M-Pesa Settle (QKD9201M88): KES 6,200.00 confirmed receipts into Peter Kibukosya Escrow pool.', color: THEME.colors.accentGreen },
  { time: '10:14:35', text: 'Digital Bursar Signature: Cryptographic seals attached to receipts #BAR-99214 & #BAR-9442.', color: THEME.colors.textDark },
  { time: '10:14:40', text: 'Carrier Dispatch Queued: Handshake established with Safaricom SMS & Meta Business Gateways.', color: THEME.colors.textDark },
  { time: '10:14:45', text: 'Delivered to 4 Channels: Grade priority payloads segregated; parent ledger records posted.', color: THEME.colors.textDark },
  { time: '10:15:10', text: 'Ledger Reconciliation Confirmed: Baraka Academy main school accounts balanced to zero defect.', color: THEME.colors.accentGreen },
];

export default function DispatchAuditScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.back()}><Text style={styles.backTxt}>←</Text></TouchableOpacity>
        <Text style={styles.title}>Dispatch Status & Audit Trail</Text>
        <View style={styles.topRight}>
          <TouchableOpacity style={styles.iconBtn}><Text style={styles.iconTxt}>↗</Text></TouchableOpacity>
          <View style={styles.avatar}><Text style={styles.avatarTxt}>👤</Text></View>
        </View>
      </View>

      <View style={styles.dispatchCard}>
        <View style={styles.dispatchTop}>
          <View style={styles.sealedBadge}><Text style={styles.sealedTxt}>CRYPTOGRAPHICALLY SEALED & DISPATCHED</Text></View>
        </View>
        <Text style={styles.dispatchTitle}>Dispatch Complete</Text>
        <Text style={styles.dispatchSub}># BATCH-2025-07-5882</Text>
        <Text style={styles.dispatchMeta}>15 July 2025, 10:14:45 EAT</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCol}>
            <Text style={styles.statLbl}>RECEIPTS</Text>
            <Text style={styles.statVal}>2 Files</Text>
          </View>
          <View style={styles.statCol}>
            <Text style={styles.statLbl}>SETTLED</Text>
            <Text style={[styles.statVal, { color: THEME.colors.accentGreen }]}>KES 6,200</Text>
            <Text style={styles.statSub}>Full Clear</Text>
          </View>
          <View style={styles.statCol}>
            <Text style={styles.statLbl}>NOTIFIED</Text>
            <Text style={styles.statVal}>4 Parties</Text>
            <Text style={styles.statSub}>100%</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Live Delivery Matrix</Text>
        <Text style={styles.sectionTag}>Multi-Channel</Text>
      </View>

      <View style={styles.deliveryCard}>
        <View style={styles.deliveryRow}>
          <View style={styles.deliveryIconWrap}><Text style={styles.deliveryIcon}>🏫</Text></View>
          <View style={styles.deliveryBody}>
            <Text style={styles.deliveryName}>Peter Kibukosya Bursar</Text>
            <Text style={styles.deliverySub}>+254 700 691 023 • WhatsApp App</Text>
            <Text style={styles.deliveryMeta}>Auto-sync valid • Ledger: LDG-8812 at 10:15 AM</Text>
          </View>
          <View style={[styles.deliveryStatus, { backgroundColor: '#D1FAE5' }]}>
            <Text style={[styles.deliveryStatusTxt, { color: '#065F46' }]}>Reconciled</Text>
          </View>
        </View>
      </View>

      <View style={styles.deliveryCard}>
        <View style={styles.deliveryRow}>
          <View style={styles.deliveryIconWrap}><Text style={styles.deliveryIcon}>👩</Text></View>
          <View style={styles.deliveryBody}>
            <Text style={styles.deliveryName}>Tr. Mwangi (Malia - Gr 1)</Text>
            <Text style={styles.deliverySub}>+254 721 694 332 • WhatsApp</Text>
            <Text style={styles.deliveryMeta}>Delivered at 10:14 AM • Auto-privacy filter applied</Text>
          </View>
          <View style={[styles.deliveryStatus, { backgroundColor: '#DBEAFE' }]}>
            <Text style={[styles.deliveryStatusTxt, { color: '#1E40AF' }]}>Delivered</Text>
          </View>
        </View>
      </View>

      <View style={styles.deliveryCard}>
        <View style={styles.deliveryRow}>
          <View style={styles.deliveryIconWrap}><Text style={styles.deliveryIcon}>👩‍🏫</Text></View>
          <View style={styles.deliveryBody}>
            <Text style={styles.deliveryName}>Tr. Faith Chebet (Malkia - Gr 1)</Text>
            <Text style={styles.deliverySub}>+254 714 559 012 • WhatsApp</Text>
            <Text style={styles.deliveryMeta}>Delivered at 10:14 AM • Auto-privacy filter applied</Text>
          </View>
          <View style={[styles.deliveryStatus, { backgroundColor: '#DBEAFE' }]}>
            <Text style={[styles.deliveryStatusTxt, { color: '#1E40AF' }]}>Delivered</Text>
          </View>
        </View>
      </View>

      <View style={styles.deliveryCard}>
        <View style={styles.deliveryRow}>
          <View style={styles.deliveryIconWrap}><Text style={styles.deliveryIcon}>👨</Text></View>
          <View style={styles.deliveryBody}>
            <Text style={styles.deliveryName}>Evans Ndege (Co-Payer)</Text>
            <Text style={styles.deliverySub}>+254 737 113 224 • SMS & Web</Text>
            <Text style={styles.deliveryMeta}>Viewed via EduFort Web Viewer at 10:15 AM</Text>
          </View>
          <View style={[styles.deliveryStatus, { backgroundColor: '#FEF3C7' }]}>
            <Text style={[styles.deliveryStatusTxt, { color: '#92400E' }]}>Opened</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Custodial Trust Block</Text>
        <Text style={styles.sectionTag}>Immutable</Text>
      </View>
      <View style={styles.trustCard}>
        <View style={styles.trustTop}>
          <Text style={styles.trustTitle}>Dignity Accord Active</Text>
        </View>
        <Text style={styles.trustSub}>Malia & Malkia are protected under Ministry of Education anti-exclusion protocols. Attendance & exams are legally protected.</Text>
        <View style={styles.hashRow}>
          <Text style={styles.hashLbl}>SHA-256 FORENSIC CHECKSUM</Text>
          <Text style={styles.hashVal}>77e92b98aa233+944e9a44+2b114092b2</Text>
          <TouchableOpacity><Text style={styles.copyTxt}>COPY</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.badgeRow}>
        <View style={styles.badgeCard}>
          <Text style={styles.badgeLbl}>CBK ESCROW TOKEN</Text>
          <Text style={styles.badgeVal}>CBK-ESC-2025-9921</Text>
          <Text style={styles.badgeSub}>Statutory Bound</Text>
        </View>
        <View style={styles.badgeCard}>
          <Text style={styles.badgeLbl}>MOE COMPLIANCE</Text>
          <Text style={styles.badgeVal}>MOE/PR/8421/18</Text>
          <Text style={styles.badgeSub}>Accredited Inst.</Text>
        </View>
      </View>

      <View style={styles.gateCard}>
        <View style={styles.gateLeft}>
          <Text style={styles.gateIcon}>🎫</Text>
          <View>
            <Text style={styles.gateTitle}>GATE CLEARANCE PASS</Text>
            <Text style={styles.gateSub}>Valid for Main Gate Check • Instant guard scanner recognition • Tap for full pass</Text>
          </View>
        </View>
        <View style={styles.qrWrap}><Text style={styles.qrEmoji}>📷</Text></View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Audit Trail & Events</Text>
        <Text style={styles.sectionCount}>5 forensic checkpoints</Text>
      </View>

      {EVENTS.map((e, i) => (
        <View key={i} style={styles.eventCard}>
          <View style={styles.eventLeft}>
            <View style={[styles.eventDot, { backgroundColor: e.color }]} />
            <View style={styles.eventBody}>
              <Text style={styles.eventTime}>{e.time}</Text>
              <Text style={styles.eventText}>{e.text}</Text>
            </View>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.auditBtn}>
        <Text style={styles.auditBtnTxt}>Download Audit Certificate (PDF)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.vaultBtn}>
        <Text style={styles.vaultBtnTxt}>View Receipts in Vault</Text>
      </TouchableOpacity>
      <Text style={styles.footNote}>Protected under EduFort Escrow & Safaricom Business API. E2E Encrypted</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingBottom: 40 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8 },
  backTxt: { fontSize: 24, color: THEME.colors.textDark },
  title: { fontSize: 16, fontWeight: '700', color: THEME.colors.textDark, flex: 1, marginHorizontal: 12 },
  topRight: { flexDirection: 'row', gap: 8 },
  iconBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: THEME.colors.cardBackground, justifyContent: 'center', alignItems: 'center', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  iconTxt: { fontSize: 16 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#E0F2FE', justifyContent: 'center', alignItems: 'center' },
  avatarTxt: { fontSize: 16 },
  dispatchCard: { backgroundColor: '#0F2922', borderRadius: 16, padding: 20, marginBottom: 24 },
  dispatchTop: { marginBottom: 10 },
  sealedBadge: { backgroundColor: '#065F46', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, alignSelf: 'flex-start' },
  sealedTxt: { color: '#10B981', fontSize: 10, fontWeight: '700', letterSpacing: 0.5 },
  dispatchTitle: { color: '#FFF', fontSize: 22, fontWeight: '800', marginBottom: 4 },
  dispatchSub: { color: '#10B981', fontSize: 14, fontWeight: '700', marginBottom: 4 },
  dispatchMeta: { color: '#94A3B8', fontSize: 12, marginBottom: 18 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statCol: { flex: 1, alignItems: 'center', borderRightWidth: 1, borderRightColor: 'rgba(255,255,255,0.1)' },
  statLbl: { color: '#94A3B8', fontSize: 10, fontWeight: '700', letterSpacing: 0.5, marginBottom: 6 },
  statVal: { color: '#FFF', fontSize: 18, fontWeight: '800' },
  statSub: { color: '#94A3B8', fontSize: 10, marginTop: 2 },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark },
  sectionTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  sectionCount: { fontSize: 11, color: THEME.colors.textMuted },
  deliveryCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  deliveryRow: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  deliveryIconWrap: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  deliveryIcon: { fontSize: 20 },
  deliveryBody: { flex: 1 },
  deliveryName: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  deliverySub: { fontSize: 11, color: THEME.colors.textMuted },
  deliveryMeta: { fontSize: 10, color: THEME.colors.textMuted, marginTop: 3 },
  deliveryStatus: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, marginLeft: 10 },
  deliveryStatusTxt: { fontSize: 10, fontWeight: '700' },
  trustCard: { backgroundColor: '#ECFDF5', borderWidth: 1, borderColor: '#A7F3D0', borderRadius: 12, padding: 16, marginBottom: 16 },
  trustTop: { marginBottom: 8 },
  trustTitle: { fontSize: 14, fontWeight: '700', color: '#065F46' },
  trustSub: { fontSize: 12, color: '#047857', lineHeight: 18, marginBottom: 14 },
  hashRow: { backgroundColor: '#FFF', borderRadius: 8, padding: 10 },
  hashLbl: { fontSize: 9, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 0.5, marginBottom: 4 },
  hashVal: { fontSize: 10, color: THEME.colors.textDark, marginBottom: 6, letterSpacing: 1 },
  copyTxt: { fontSize: 11, color: THEME.colors.primary, fontWeight: '700' },
  badgeRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  badgeCard: { flex: 1, backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  badgeLbl: { fontSize: 10, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 0.5, marginBottom: 6 },
  badgeVal: { fontSize: 13, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 4 },
  badgeSub: { fontSize: 10, color: THEME.colors.textMuted },
  gateCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0F2922', borderRadius: 12, padding: 16, marginBottom: 24 },
  gateLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  gateIcon: { fontSize: 24, marginRight: 12, color: '#10B981' },
  gateTitle: { color: '#FFF', fontSize: 13, fontWeight: '800', letterSpacing: 0.5, marginBottom: 4 },
  gateSub: { color: '#94A3B8', fontSize: 11, lineHeight: 16 },
  qrWrap: { width: 52, height: 52, borderRadius: 12, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  qrEmoji: { fontSize: 26 },
  eventCard: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  eventLeft: { alignItems: 'center', marginRight: 14 },
  eventDot: { width: 12, height: 12, borderRadius: 6 },
  eventBody: { flex: 1 },
  eventTime: { fontSize: 11, color: THEME.colors.textMuted, marginBottom: 4 },
  eventText: { fontSize: 13, color: THEME.colors.textDark, lineHeight: 18 },
  auditBtn: { backgroundColor: THEME.colors.primary, padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 12, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  auditBtnTxt: { color: '#FFF', fontSize: 15, fontWeight: '700' },
  vaultBtn: { backgroundColor: THEME.colors.cardBackground, borderWidth: 1.5, borderColor: THEME.colors.border, padding: 16, borderRadius: 12, alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 4 },
  vaultBtnTxt: { color: THEME.colors.textMuted, fontSize: 15, fontWeight: '600' },
  footNote: { textAlign: 'center', fontSize: 11, color: THEME.colors.textMuted, marginTop: 12 },
});