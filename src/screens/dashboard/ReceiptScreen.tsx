import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../../constants/theme';

export default function ReceiptScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.receiptCard}>
        <View style={styles.receiptHeader}>
          <View style={styles.schoolIconWrap}>
            <Text style={styles.schoolIconEmoji}>🎓</Text>
          </View>
          <View style={styles.receiptTitleWrap}>
            <Text style={styles.receiptTitle}>Peter Kibukosya Primary</Text>
            <Text style={styles.receiptSub}>Bursar&apos;s Office • P.O. Box 42100 • Nairobi</Text>
            <Text style={styles.receiptMeta}>Receipt No: #BAR-99214 • Issued: 15 Jul 2025, 10:14 AM</Text>
          </View>
          <View style={styles.custodyBadge}><Text style={styles.custodyTxt}>CBK Custodial</Text></View>
        </View>

        <View style={styles.statusCard}>
          <View style={styles.sealWrap}>
            <Text style={styles.sealEmoji}>✅</Text>
          </View>
          <View style={styles.statusBody}>
            <Text style={styles.statusTitle}>PAID IN FULL • VALID FOR EXAM ENTRY</Text>
            <Text style={styles.statusSub}>Baraka Academy Bursar&apos;s Office Official Seal. Exam clearance granted for Term 2 Mid-Term Assessments.</Text>
          </View>
        </View>

        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>PUPIL INFORMATION</Text>
          <Text style={styles.sectionTag}>Active Enrollment</Text>
        </View>
        <View style={styles.infoGrid}>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>Full Name</Text><Text style={styles.infoVal}>Malia Wanjiku</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>Grade &amp; Curriculum</Text><Text style={styles.infoVal}>Grade 1CBC</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>Admission Number</Text><Text style={styles.infoVal}>ADM-2022-841</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>Parent / Sponsor</Text><Text style={styles.infoVal}>Winfrida Mwangi (+254 717 ••• 676)</Text></View>
        </View>

        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>PAYMENT BREAKDOWN</Text>
          <Text style={styles.sectionTagGreen}>M-Pesa Verified</Text>
        </View>
        <View style={styles.infoGrid}>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>Allocation</Text><Text style={styles.infoVal}>Grade 1&amp;6 Tuition Settlement</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>Payment</Text><Text style={styles.infoVal}>Paybill #842100 (Acc: ADM-2022-841-SW)</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>Method</Text><Text style={styles.infoVal}>M-Pesa</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>M-Pesa Ref</Text><Text style={styles.infoVal}>QKD9201M88</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>Outstanding Prior Balance</Text><Text style={[styles.infoVal, { color: '#DC2626' }]}>KES 15,500.00</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoLbl}>Amount Credited</Text><Text style={[styles.infoVal, { color: THEME.colors.accentGreen }]}>- KES 5,000.00</Text></View>
          <View style={[styles.infoRow, styles.totalRow]}><Text style={styles.totalLbl}>New Term 2 Arrears</Text><Text style={styles.totalVal}>KES 10,500.00</Text></View>
          <View style={styles.protectedBadge}><Text style={styles.protectedTxt}>Protected on Edufort Micro-Pace</Text></View>
        </View>

        <View style={styles.qrCard}>
          <View style={styles.qrIconWrap}><Text style={styles.qrIcon}>📷</Text></View>
          <View style={styles.qrBody}>
            <Text style={styles.qrTitle}>Gate Pass &amp; Exam Hall QR</Text>
            <Text style={styles.qrSub}>Scan at Academy Bursary Gate 2 for clearance</Text>
          </View>
          <View style={styles.qrToggle}><View style={styles.qrToggleTrack} /></View>
        </View>

        <View style={styles.regCard}>
          <Text style={styles.regIcon}>🛡️</Text>
          <Text style={styles.regTxt}>Recognized under Central Bank of Kenya Custodial Framework and Peter Kibukosya Bursar Regulations. Confers clearance for mid-term exams and report card collection.</Text>
        </View>

        <TouchableOpacity style={styles.pdfBtn} onPress={() => navigation.navigate('ReceiptExport')}>
          <Text style={styles.pdfBtnIcon}>⬇️</Text>
          <Text style={styles.pdfBtnTxt}>Download Official PDF Receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.whatsappBtn} onPress={() => navigation.navigate('ShareReceipt')}>
          <Text style={styles.whatsappBtnIcon}>📤</Text>
          <Text style={styles.whatsappBtnTxt}>Share via WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  receiptCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 20, padding: 20, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.15, shadowRadius: 12 },
  receiptHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16, marginTop: 8 },
  schoolIconWrap: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#0F2922', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  schoolIconEmoji: { fontSize: 22 },
  receiptTitleWrap: { flex: 1 },
  receiptTitle: { fontSize: 17, fontWeight: '800', color: THEME.colors.textDark },
  receiptSub: { fontSize: 12, color: THEME.colors.textMuted, marginTop: 3 },
  receiptMeta: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  custodyBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
  custodyTxt: { fontSize: 10, color: '#065F46', fontWeight: '700' },
  statusCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ECFDF5', borderWidth: 1, borderColor: '#A7F3D0', borderRadius: 12, padding: 14, marginBottom: 20 },
  sealWrap: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', marginRight: 12, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  sealEmoji: { fontSize: 20 },
  statusBody: { flex: 1 },
  statusTitle: { fontSize: 13, fontWeight: '800', color: '#065F46', marginBottom: 4 },
  statusSub: { fontSize: 11, color: '#047857', lineHeight: 16 },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  sectionTitle: { fontSize: 11, fontWeight: '700', color: THEME.colors.textMuted, letterSpacing: 0.5 },
  sectionTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  sectionTagGreen: { fontSize: 10, color: '#059669', backgroundColor: '#D1FAE5', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  infoGrid: { backgroundColor: '#F8FAFC', borderRadius: 12, padding: 4, marginBottom: 20 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 14, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  infoLbl: { fontSize: 12, color: THEME.colors.textMuted, flex: 1 },
  infoVal: { fontSize: 13, fontWeight: '600', color: THEME.colors.textDark, flex: 1, textAlign: 'right' },
  totalRow: { backgroundColor: '#F0FDF4', borderBottomWidth: 0, paddingVertical: 14 },
  totalLbl: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark, flex: 1 },
  totalVal: { fontSize: 15, fontWeight: '800', color: THEME.colors.primary, flex: 1, textAlign: 'right' },
  protectedBadge: { backgroundColor: '#EFF6FF', margin: 14, marginTop: 0, padding: 10, borderRadius: 8, alignItems: 'center' },
  protectedTxt: { fontSize: 11, color: '#2563EB', fontWeight: '700' },
  qrCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', borderRadius: 12, padding: 14, marginBottom: 16 },
  qrIconWrap: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#DBEAFE', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  qrIcon: { fontSize: 22 },
  qrBody: { flex: 1 },
  qrTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark },
  qrSub: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  qrToggle: { width: 40, height: 24, backgroundColor: '#10B981', borderRadius: 12, padding: 2, justifyContent: 'flex-end' },
  qrToggleTrack: { width: 18, height: 18, borderRadius: 9, backgroundColor: '#FFF' },
  regCard: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#F0FDF4', borderRadius: 10, padding: 12, marginBottom: 20 },
  regIcon: { fontSize: 16, marginRight: 8, color: THEME.colors.accentGreen },
  regTxt: { flex: 1, fontSize: 11, color: '#065F46', lineHeight: 16 },
  pdfBtn: { backgroundColor: THEME.colors.primary, padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 12, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  pdfBtnIcon: { color: '#FFF', fontSize: 16, marginRight: 8 },
  pdfBtnTxt: { color: '#FFF', fontSize: 15, fontWeight: '700' },
  whatsappBtn: { backgroundColor: THEME.colors.cardBackground, borderWidth: 1.5, borderColor: THEME.colors.border, padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 4 },
  whatsappBtnIcon: { color: THEME.colors.textMuted, fontSize: 16, marginRight: 8 },
  whatsappBtnTxt: { color: THEME.colors.textMuted, fontSize: 15, fontWeight: '600' },
});