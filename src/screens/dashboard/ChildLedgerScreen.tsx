import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { THEME } from '../../constants/theme';

const FEE_ITEMS = [
  { name: 'Tuition Fees', total: 12000, paid: 10000, icon: '🎓', color: '#005F4B' },
  { name: 'School Lunch Program', total: 4500, paid: 3000, icon: '🍽️', color: '#10B981' },
  { name: 'Transport Service', total: 3500, paid: 1500, icon: '🚌', color: '#3B82F6' },
  { name: 'Uniform & Sports Kit', total: 2500, paid: 0, icon: '👕', color: '#F59E0B' },
  { name: 'Term 2 Exam Fees', total: 1500, paid: 0, icon: '📝', color: '#EF4444' },
  { name: 'Activities & Clubs', total: 1000, paid: 0, icon: '⚽', color: '#8B5CF6' },
];

export default function ChildLedgerScreen({ navigation }: any) {
  const totalFees = FEE_ITEMS.reduce((s, f) => s + f.total, 0);
  const totalPaid = FEE_ITEMS.reduce((s, f) => s + f.paid, 0);
  const totalLeft = totalFees - totalPaid;
  const pct = totalFees > 0 ? Math.round((totalPaid / totalFees) * 100) : 0;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.headerCard}>
        <View style={styles.childRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarTxt}>M</Text>
          </View>
          <View style={styles.childInfo}>
            <Text style={styles.childName}>Malia Wanjiku</Text>
            <Text style={styles.childMeta}>Grade 1B • Adm No: ADM-2022-841</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.threeDots}>⋮</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.schoolRow}>
          <Text style={styles.schoolIcon}>🏫</Text>
          <Text style={styles.schoolName}>Baraka Academy & Primary</Text>
          <View style={styles.partnerBadge}>
            <Text style={styles.partnerTxt}>⚙️ Partner</Text>
          </View>
        </View>

        <View style={styles.termRow}>
          <Text style={styles.termText}>Term 2, 2025</Text>
          <Text style={styles.daysLeft}>⏰ 18 days left (15 Jul)</Text>
        </View>
      </View>

      <View style={styles.totalCard}>
        <View style={styles.totalTop}>
          <Text style={styles.totalLabel}>TERM 2 TOTAL FEES</Text>
          <View style={styles.savedBadge}>
            <Text style={styles.savedTxt}>{pct}% Saved</Text>
          </View>
        </View>
        <Text style={styles.totalAmt}>KES {totalFees.toLocaleString()}.00</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${pct}%` }]} />
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLbl}>Allocated: KES {totalPaid.toLocaleString()}.00</Text>
          <Text style={styles.summaryLblPending}>Pending: KES {totalLeft.toLocaleString()}.00</Text>
        </View>
        <View style={styles.quickRow}>
          <Text style={styles.quickLbl}>Quick Push:</Text>
          <View style={styles.quickBtns}>
            <TouchableOpacity style={styles.quickBtn}><Text style={styles.quickBtnTxt}>+ KES 500</Text></TouchableOpacity>
            <TouchableOpacity style={styles.quickBtn}><Text style={styles.quickBtnTxt}>+ KES 1,000</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.quickBtn, styles.quickBtnActive]}><Text style={styles.quickBtnActiveTxt}>+ KES</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.breakdownHeader}>
        <Text style={styles.breakdownTitle}>Fee Structure Breakdown</Text>
        <Text style={styles.expandAll}>Expand All</Text>
      </View>

      {FEE_ITEMS.map((item, idx) => {
        const left = item.total - item.paid;
        const itemPct = item.total > 0 ? Math.round((item.paid / item.total) * 100) : 0;
        return (
          <View key={idx} style={styles.feeItem}>
            <View style={styles.feeTop}>
              <View style={styles.feeIconWrap}><Text style={styles.feeIcon}>{item.icon}</Text></View>
              <Text style={styles.feeName}>{item.name}</Text>
              <Text style={styles.feeAmt}>KES {item.paid.toLocaleString()}</Text>
              <Text style={styles.feeDrop}>▾</Text>
            </View>
            <View style={styles.feeMeta}>
              <Text style={styles.feeTotal}>KES {item.total.toFixed(2)} total</Text>
              {item.total > 0 ? (
                <>
                  <Text style={styles.feePct}>{itemPct}%</Text>
                  <Text style={styles.feeLeft}>KES {left.toLocaleString()} left</Text>
                </>
              ) : (
                <Text style={styles.feeUnpaid}>Unpaid</Text>
              )}
            </View>
          </View>
        );
      })}

      <View style={styles.syncCard}>
        <Text style={styles.syncIcon}>&ldquo;</Text>
        <View style={styles.syncBody}>
          <Text style={styles.syncTitle}>Synchronized with Bursar Office</Text>
          <Text style={styles.syncSub}>Last updated by Bursar office: Today 10:14 AM.</Text>
          <Text style={styles.syncSub}>Official digital receipt generated automatically upon every clearance.</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.payBtn}>
        <Text style={styles.payBtnTxt}>Allocate &amp; Pay KES 1,500</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.pdfBtn}>
        <Text style={styles.pdfBtnTxt}>Download Fee Ledger Statement (PDF)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingBottom: 40 },
  headerCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 16, padding: 16, marginBottom: 16, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8 },
  childRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#E0F2FE', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarTxt: { fontSize: 18, fontWeight: '700', color: '#005F4B' },
  childInfo: { flex: 1 },
  childName: { fontSize: 17, fontWeight: '700', color: THEME.colors.textDark },
  childMeta: { fontSize: 12, color: THEME.colors.textMuted, marginTop: 2 },
  threeDots: { fontSize: 20, color: THEME.colors.textMuted },
  schoolRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' },
  schoolIcon: { fontSize: 14, marginRight: 6 },
  schoolName: { fontSize: 13, color: THEME.colors.textMuted, flex: 1 },
  partnerBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 12 },
  partnerTxt: { fontSize: 11, color: '#065F46', fontWeight: '600' },
  termRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  termText: { fontSize: 13, color: THEME.colors.textMuted },
  daysLeft: { fontSize: 12, color: '#D97706', fontWeight: '600' },
  totalCard: { backgroundColor: '#0F2922', borderRadius: 16, padding: 20, marginBottom: 20 },
  totalTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  totalLabel: { color: '#94A3B8', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  savedBadge: { backgroundColor: '#10B981', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 12 },
  savedTxt: { color: '#FFF', fontSize: 11, fontWeight: '700' },
  totalAmt: { color: '#FFF', fontSize: 32, fontWeight: '800', marginVertical: 8 },
  progressTrack: { height: 6, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden', marginBottom: 12 },
  progressFill: { height: '100%', backgroundColor: '#10B981', borderRadius: 3 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 },
  summaryLbl: { color: '#94A3B8', fontSize: 12 },
  summaryLblPending: { color: '#FBBF24', fontSize: 12, fontWeight: '700' },
  quickRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  quickLbl: { color: '#94A3B8', fontSize: 12, marginRight: 8 },
  quickBtns: { flexDirection: 'row', gap: 8 },
  quickBtn: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  quickBtnTxt: { color: '#FFF', fontSize: 12, fontWeight: '600' },
  quickBtnActive: { backgroundColor: '#10B981' },
  quickBtnActiveTxt: { color: '#FFF', fontSize: 12, fontWeight: '700' },
  breakdownHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, marginHorizontal: 4 },
  breakdownTitle: { fontSize: 16, fontWeight: '700', color: THEME.colors.textDark },
  expandAll: { fontSize: 13, color: THEME.colors.primary, fontWeight: '600' },
  feeItem: { backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 10, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  feeTop: { flexDirection: 'row', alignItems: 'center' },
  feeIconWrap: { width: 36, height: 36, borderRadius: 10, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  feeIcon: { fontSize: 18 },
  feeName: { flex: 1, fontSize: 14, fontWeight: '600', color: THEME.colors.textDark },
  feeAmt: { fontSize: 14, fontWeight: '700', color: THEME.colors.primary, marginRight: 8 },
  feeDrop: { fontSize: 12, color: THEME.colors.textMuted },
  feeMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 8, flexWrap: 'wrap' },
  feeTotal: { fontSize: 12, color: THEME.colors.textMuted, marginRight: 10 },
  feePct: { fontSize: 12, color: THEME.colors.accentGreen, fontWeight: '700', marginRight: 10 },
  feeLeft: { fontSize: 12, color: '#D97706', fontWeight: '600' },
  feeUnpaid: { fontSize: 12, color: THEME.colors.textMuted, fontStyle: 'italic' },
  syncCard: { backgroundColor: '#EFF6FF', borderRadius: 12, padding: 14, flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16, borderLeftWidth: 4, borderLeftColor: '#2563EB' },
  syncIcon: { fontSize: 18, marginRight: 10, color: '#2563EB' },
  syncBody: { flex: 1 },
  syncTitle: { fontSize: 13, fontWeight: '700', color: '#1E40AF', marginBottom: 4 },
  syncSub: { fontSize: 12, color: '#3B82F6', lineHeight: 18 },
  payBtn: { backgroundColor: THEME.colors.primary, padding: 16, borderRadius: THEME.radius.button, alignItems: 'center', marginBottom: 12 },
  payBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  pdfBtn: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 14 },
  pdfBtnTxt: { fontSize: 14, color: THEME.colors.textMuted, fontWeight: '600' },
});