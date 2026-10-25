import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../../constants/theme';

const NAV_ITEMS = [
  { id: 'ledger', icon: '📖', title: 'Child Fee Ledgers', sub: '2 Pupils • Sarah (Grade 4) & Brian (Form 2) breakdown...', color: '#005F4B' },
  { id: 'receipts', icon: '🧾', title: 'Recent Payment Receipts', sub: 'Verify M-Pesa statements & school reference...', color: '#10B981' },
  { id: 'bursar', icon: '🏫', title: 'School Bursar Desk', sub: 'Direct liaison for missing fee invoices', color: '#3B82F6', available: true },
  { id: 'protected', icon: '🛡️', title: 'Funds & Ledgers Protected', sub: 'Your savings and school balances are completely safe and backed up in CBK Escrow. No money is lost or compromised.', color: '#8B5CF6' },
];

export default function NotFoundScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.back()}><Text style={styles.backTxt}>←</Text></TouchableOpacity>
        <View style={styles.topRight}>
          <View style={styles.profileIcon}><Text style={styles.profileIconTxt}>👤</Text></View>
        </View>
      </View>

      <Text style={styles.title}>Not Found</Text>

      <View style={styles.ledgerCard}>
        <View style={styles.ledgerBadge}><Text style={styles.ledgerBadgeTxt}>LEDGER QUERY</Text></View>
        <View style={styles.ledgerBadge2}><Text style={styles.ledgerBadgeTxt2}>TERM 1</Text></View>
        <View style={styles.notFoundBox}>
          <View style={styles.notFoundIconWrap}><Text style={styles.notFoundIcon}>🔍</Text></View>
          <Text style={styles.notFoundNum}>404</Text>
        </View>
        <View style={styles.encryptedRow}>
          <Text style={styles.encryptedIcon}>🔐</Text>
          <Text style={styles.encryptedTxt}>Encrypted Key</Text>
          <Text style={styles.encryptedVal}>#ED-000</Text>
        </View>
        <TouchableOpacity style={styles.searchBtn}><Text style={styles.searchBtnTxt}>EQ</Text></TouchableOpacity>
      </View>

      <View style={styles.noticeCard}>
        <Text style={styles.noticeIcon}>📋</Text>
        <Text style={styles.noticeBadge}>NOTICE OF FILE UPDATE</Text>
      </View>

      <Text style={styles.headline}>We Couldn't Find That Record</Text>
      <Text style={styles.subtext}>The school fee schedule, receipt, or ledger link you are looking for might have been archived, updated by the school bursar, or moved to a new term.</Text>

      <TouchableOpacity style={styles.homeBtn}>
        <Text style={styles.homeBtnTxt}>Return to Home Dashboard</Text>
      </TouchableOpacity>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>FAST NAVIGATION</Text>
        <Text style={styles.sectionTag}>Active Accounts</Text>
      </View>

      {NAV_ITEMS.map((item) => (
        <TouchableOpacity key={item.id} style={styles.navItem}>
          <View style={styles.navIconWrap}><Text style={styles.navIcon}>{item.icon}</Text></View>
          <View style={styles.navBody}>
            <View style={styles.navNameRow}>
              <Text style={styles.navTitle}>{item.title}</Text>
              {item.available && <View style={styles.availableBadge}><Text style={styles.availableTxt}>Available</Text></View>}
            </View>
            <Text style={styles.navSub}>{item.sub}</Text>
          </View>
          <Text style={styles.navChevron}>›</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.callRow}>
        <TouchableOpacity style={styles.callBtn}><Text style={styles.callBtnTxt}>Call Desk</Text></TouchableOpacity>
        <TouchableOpacity style={styles.whatsappBtn}><Text style={styles.whatsappBtnTxt}>WhatsApp</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  backTxt: { fontSize: 24, color: THEME.colors.textDark },
  topRight: { flexDirection: 'row', gap: 10 },
  profileIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E0F2FE', justifyContent: 'center', alignItems: 'center' },
  profileIconTxt: { fontSize: 18 },
  title: { fontSize: 22, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 24 },
  ledgerCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 16, padding: 20, marginBottom: 20, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8 },
  ledgerBadge: { position: 'absolute', top: 14, left: 14, backgroundColor: '#FEF3C7', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  ledgerBadgeTxt: { fontSize: 10, color: '#92400E', fontWeight: '700' },
  ledgerBadge2: { position: 'absolute', top: 14, right: 14, backgroundColor: '#D1FAE5', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  ledgerBadgeTxt2: { fontSize: 10, color: '#065F46', fontWeight: '700' },
  notFoundBox: { alignItems: 'center', paddingVertical: 20 },
  notFoundIconWrap: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  notFoundIcon: { fontSize: 30 },
  notFoundNum: { fontSize: 48, fontWeight: '800', color: THEME.colors.textDark },
  encryptedRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' },
  encryptedIcon: { fontSize: 16, marginRight: 6 },
  encryptedTxt: { fontSize: 12, color: THEME.colors.textMuted, marginRight: 6 },
  encryptedVal: { fontSize: 12, fontWeight: '700', color: THEME.colors.textDark },
  searchBtn: { position: 'absolute', bottom: 14, right: 14, width: 40, height: 40, borderRadius: 20, backgroundColor: THEME.colors.accentGreen, justifyContent: 'center', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  searchBtnTxt: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  noticeCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EFF6FF', borderRadius: 10, padding: 12, marginBottom: 20 },
  noticeIcon: { fontSize: 18, marginRight: 10, color: '#2563EB' },
  noticeBadge: { fontSize: 12, color: '#1E40AF', fontWeight: '700' },
  headline: { fontSize: 24, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 10 },
  subtext: { fontSize: 14, color: THEME.colors.textMuted, lineHeight: 20, marginBottom: 24 },
  homeBtn: { backgroundColor: THEME.colors.primary, padding: 18, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 32, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  homeBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textMuted, letterSpacing: 0.5 },
  sectionTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  navItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  navIconWrap: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  navIcon: { fontSize: 22 },
  navBody: { flex: 1 },
  navNameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  navTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark, flex: 1 },
  availableBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, marginLeft: 8 },
  availableTxt: { fontSize: 9, color: '#065F46', fontWeight: '700' },
  navSub: { fontSize: 12, color: THEME.colors.textMuted },
  navChevron: { fontSize: 26, color: THEME.colors.textMuted, marginLeft: 10 },
  callRow: { flexDirection: 'row', gap: 10, marginTop: 8 },
  callBtn: { flex: 1, backgroundColor: THEME.colors.cardBackground, borderWidth: 1.5, borderColor: THEME.colors.border, padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 4 },
  callBtnTxt: { color: THEME.colors.textMuted, fontSize: 15, fontWeight: '600' },
  whatsappBtn: { flex: 1, backgroundColor: '#D1FAE5', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  whatsappBtnTxt: { color: '#065F46', fontSize: 15, fontWeight: '700' },
});