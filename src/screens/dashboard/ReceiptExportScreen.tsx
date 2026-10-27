import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../../constants/theme';
import Icon from '../../components/Icon';

export default function ReceiptExportScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.statusRow}>
        <Text style={styles.receiptMeta}>BAR-99214_Sarah_Wanjiku_Term2.pdf • 142 KB • </Text>
        <View style={styles.verifiedBadge}><Text style={styles.verifiedTxt}>VERIFIED</Text></View>
      </View>

      <View style={styles.toolsRow}>
        <TouchableOpacity style={styles.toolBtn}><Text style={styles.toolTxt}>Fit Screen</Text></TouchableOpacity>
        <TouchableOpacity style={styles.toolBtn}><Text style={styles.toolTxt}>AirPrint</Text></TouchableOpacity>
        <TouchableOpacity style={styles.toolBtn}><Text style={styles.toolTxt}>Share</Text></TouchableOpacity>
        <View style={styles.escrowBadge}><Text style={styles.escrowTxt}>CBK ESCROW</Text></View>
      </View>

      <View style={styles.officialCard}>
        <View style={styles.officialLeft}>
          <Icon name="shield" size={20} style={styles.officialIcon} />
          <View>
            <Text style={styles.officialTitle}>Official Validated Bursar Copy</Text>
            <Text style={styles.officialSub}>Ministry of Education Reg. MOE/PR/8421 • Central Bank Escrow</Text>
          </View>
        </View>
      </View>

      <View style={styles.bursarCard}>
        <View style={styles.bursarLeft}>
          <View style={styles.bursarLogo}><Icon name="tuition" size={20} /></View>
          <View style={styles.bursarBody}>
            <Text style={styles.bursarName}>Peter Kibukosya Primary</Text>
            <Text style={styles.bursarMeta}>P.O. Box 42100 • 00100 GPO Nairobi</Text>
            <Text style={styles.bursarMeta}>Tel: +254 700 691 223</Text>
            <Text style={styles.bursarMeta}>bursar@peterkibukosya.sc.ke</Text>
          </View>
        </View>
        <View style={styles.bursarRight}>
          <Text style={styles.bursarReg}>MOE/PR/8421/2018</Text>
          <Text style={styles.bursarReg}>KRA PIN: P051284910Z</Text>
        </View>
      </View>

      <View style={styles.clearanceCard}>
        <Text style={styles.clearanceTitle}>REPUBLIC OF KENYA • BASIC EDUCATION PORTAL</Text>
        <Text style={styles.clearanceSub}>BURSAR FEE RECEIPT & CLEARANCE</Text>
        <Text style={styles.clearanceSub2}>EduFort Custodial Escrow Clearance Certificate</Text>

        <View style={styles.receiptRow}>
          <View>
            <Text style={styles.receiptLbl}>RECEIPT SERIAL NUMBER</Text>
            <Text style={styles.receiptVal}>BAR-2025-07-99214</Text>
          </View>
          <View style={styles.barcodeWrap}>
            <Text style={styles.barcodeTxt}>BAR992140725</Text>
          </View>
        </View>
        <Text style={styles.receiptMeta2}>Issued: 15 July 2025, 10:32 AM EAT</Text>

        <View style={styles.pupilGrid}>
          <View style={styles.pupilCol}>
            <Text style={styles.pupilLbl}>PUPIL NAME</Text>
            <Text style={styles.pupilVal}>Malia Wanjiku</Text>
            <Text style={styles.pupilMeta}>Adm No: ADM-2022-841</Text>
          </View>
          <View style={styles.pupilCol}>
            <Text style={styles.pupilLbl}>CLASS / TERM</Text>
            <Text style={styles.pupilVal}>Grade 1 (Green)</Text>
            <Text style={styles.pupilMeta}>Term 2 2025 Academic Year</Text>
          </View>
          <View style={styles.pupilCol}>
            <Text style={styles.pupilLbl}>SPONSOR / PARENT</Text>
            <Text style={styles.pupilVal}>Winfrida Mwangi</Text>
            <Text style={styles.pupilMeta}>+254 717 ••• 676</Text>
          </View>
          <View style={styles.pupilCol}>
            <Text style={styles.pupilLbl}>ESCROW VERIFICATION</Text>
            <Text style={styles.pupilVal}>National ID Verified</Text>
            <Text style={styles.pupilMeta}>Ref: EDF-NRB-8831</Text>
          </View>
        </View>
      </View>

      <View style={styles.breakdownCard}>
        <View style={styles.breakdownHead}>
          <Text style={styles.breakdownLbl}>Line Item & Scope</Text>
          <Text style={styles.breakdownLbl}>Credited</Text>
          <Text style={styles.breakdownLbl}>Due</Text>
        </View>

        <View style={styles.breakdownRow}>
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownTitle}>Grade 6 Tuition & CBC Resources</Text>
            <Text style={styles.breakdownSub}>Term 2 Base Fee • KES 25,000 Total</Text>
          </View>
          <View style={styles.breakdownAmts}>
            <Text style={styles.breakdownCred}>KES 5,000.00</Text>
            <Text style={styles.breakdownDue}>KES 10,500.00</Text>
          </View>
        </View>
        <Text style={styles.depositTxt}>This Deposit</Text>

        <View style={styles.breakdownRow}>
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownTitle}>Hot Midday Nutrition & Meals</Text>
            <Text style={styles.breakdownSub}>Term 2 Catering Plan</Text>
          </View>
          <View style={styles.breakdownAmts}>
            <Text style={styles.breakdownCred}>3,000.00</Text>
            <Text style={[styles.breakdownDue, styles.clearedTxt]}>CLEARED</Text>
          </View>
        </View>

        <View style={styles.breakdownRow}>
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownTitle}>Activity Learning Kit & CBC Practical</Text>
            <Text style={styles.breakdownSub}>Sciences & Art supplies</Text>
          </View>
          <View style={styles.breakdownAmts}>
            <Text style={styles.breakdownCred}>1,200.00</Text>
            <Text style={[styles.breakdownDue, styles.clearedTxt]}>CLEARED</Text>
          </View>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLbl}>TOTAL CREDITED THIS TRANSACTION</Text>
          <Text style={styles.totalLbl2}>Five Thousand Kenya Shillings Only</Text>
          <Text style={styles.totalVal}>KES 5,000.00</Text>
        </View>
      </View>

      <View style={styles.mpedaCard}>
        <View style={styles.mpedaLeft}>
          <Text style={styles.mpedaTitle}>M-Pesa CONFIRMED</Text>
          <Text style={styles.mpedaSub}>TRANSACTION REF: QKD9201M88</Text>
          <Text style={styles.mpedaSub2}>PAYBILL ACCOUNT 842100 (Baraka)</Text>
          <Text style={styles.mpedaSub3}>ESCROW TRUST • Edufort / CBK</Text>
        </View>
        <View style={styles.mpedaRight}>
          <View style={styles.qrWrap}><Text style={styles.qrEmoji}></Text></View>
        </View>
      </View>

      <View style={styles.guaranteeCard}>
        <Text style={styles.guaranteeTxt}>KENYA MOE DIGNITY GUARANTEE</Text>
        <Text style={styles.guaranteeSub}>The bearer of this validated certificate, pupil Sarah Wanjiku is legally cleared for all Term 2 Continuous Assessments, sports and educational sessions. Fee-stoppage or child exclusion from classroom activities is strictly prohibited under EduFort Custodial Accord.</Text>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerTxt}>Page 1 of 1 • Signed & Stamped</Text>
        <View style={styles.readyBadge}><Text style={styles.readyTxt}>READY TO PRINT</Text></View>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.bursarBtn}><Text style={styles.bursarBtnTxt}>Bursar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.pdfBtn}><Text style={styles.pdfBtnTxt}>Download Receipt PDF</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  receiptMeta: { fontSize: 12, color: THEME.colors.textMuted },
  verifiedBadge: { backgroundColor: '#10B981', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  verifiedTxt: { color: '#FFF', fontSize: 10, fontWeight: '700' },
  toolsRow: { flexDirection: 'row', gap: 8, marginBottom: 20 },
  toolBtn: { flex: 1, backgroundColor: THEME.colors.cardBackground, padding: 10, borderRadius: 8, alignItems: 'center', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  toolTxt: { fontSize: 12, color: THEME.colors.textMuted, fontWeight: '600' },
  escrowBadge: { backgroundColor: '#0F2922', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, justifyContent: 'center' },
  escrowTxt: { color: '#10B981', fontSize: 10, fontWeight: '700' },
  officialCard: { backgroundColor: '#0F2922', borderRadius: 12, padding: 14, marginBottom: 16 },
  officialLeft: { flexDirection: 'row', alignItems: 'center' },
  officialIcon: { fontSize: 20, marginRight: 12, color: '#10B981' },
  officialTitle: { color: '#FFF', fontSize: 14, fontWeight: '700', marginBottom: 3 },
  officialSub: { color: '#94A3B8', fontSize: 11 },
  bursarCard: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 16, marginBottom: 16, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  bursarLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  bursarBody: { flex: 1 },
  bursarLogo: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#0F2922', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  bursarLogoTxt: { fontSize: 22 },
  bursarName: { fontSize: 16, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 3 },
  bursarMeta: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  bursarRight: { alignItems: 'flex-end' },
  bursarReg: { fontSize: 10, color: THEME.colors.textMuted, marginTop: 2 },
  clearanceCard: { backgroundColor: '#0F2922', borderRadius: 14, padding: 18, marginBottom: 16 },
  clearanceTitle: { color: '#10B981', fontSize: 12, fontWeight: '700', letterSpacing: 1, marginBottom: 4 },
  clearanceSub: { color: '#FFF', fontSize: 16, fontWeight: '800', marginBottom: 3 },
  clearanceSub2: { color: '#94A3B8', fontSize: 11, marginBottom: 16 },
  receiptRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  receiptLbl: { fontSize: 10, color: '#94A3B8', fontWeight: '700', letterSpacing: 0.5 },
  receiptVal: { color: '#FFF', fontSize: 16, fontWeight: '800', marginTop: 3 },
  barcodeWrap: { backgroundColor: '#FFF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  barcodeTxt: { color: '#0F2922', fontSize: 14, fontWeight: '800', letterSpacing: 2 },
  receiptMeta2: { color: '#94A3B8', fontSize: 11, marginBottom: 16 },
  pupilGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  pupilCol: { flex: 1, minWidth: '45%', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: 10 },
  pupilLbl: { fontSize: 9, color: '#94A3B8', fontWeight: '700', letterSpacing: 0.5 },
  pupilVal: { color: '#FFF', fontSize: 13, fontWeight: '700', marginTop: 3 },
  pupilMeta: { color: '#94A3B8', fontSize: 10, marginTop: 2 },
  breakdownCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 16, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  breakdownHead: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  breakdownLbl: { fontSize: 11, color: THEME.colors.textMuted, fontWeight: '700', flex: 1 },
  breakdownRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  breakdownItem: { flex: 1, marginRight: 12 },
  breakdownTitle: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  breakdownSub: { fontSize: 11, color: THEME.colors.textMuted },
  breakdownAmts: { alignItems: 'flex-end' },
  breakdownCred: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  breakdownDue: { fontSize: 12, color: THEME.colors.textMuted },
  depositTxt: { fontSize: 10, color: THEME.colors.textMuted, marginBottom: 8 },
  clearedTxt: { color: THEME.colors.secondary, fontWeight: '700' },
  totalRow: { backgroundColor: '#0F2922', borderRadius: 10, padding: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  totalLbl: { color: '#10B981', fontSize: 12, fontWeight: '700', flex: 1 },
  totalLbl2: { color: '#94A3B8', fontSize: 10, flex: 1, marginHorizontal: 10 },
  totalVal: { color: '#FFF', fontSize: 20, fontWeight: '800' },
  mpedaCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ECFDF5', borderWidth: 1, borderColor: '#A7F3D0', borderRadius: 12, padding: 14, marginBottom: 16 },
  mpedaLeft: { flex: 1 },
  mpedaTitle: { fontSize: 13, fontWeight: '800', color: '#065F46', marginBottom: 4 },
  mpedaSub: { fontSize: 11, color: '#047857', marginTop: 2 },
  mpedaSub2: { fontSize: 11, color: '#047857', marginTop: 2 },
  mpedaSub3: { fontSize: 11, color: '#047857', marginTop: 2 },
  mpedaRight: { marginLeft: 12 },
  qrWrap: { width: 44, height: 44, borderRadius: 10, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  qrEmoji: { fontSize: 22 },
  guaranteeCard: { backgroundColor: '#0F2922', borderRadius: 12, padding: 14, marginBottom: 20 },
  guaranteeTxt: { color: '#10B981', fontSize: 12, fontWeight: '700', letterSpacing: 0.5, marginBottom: 6 },
  guaranteeSub: { color: '#94A3B8', fontSize: 12, lineHeight: 18 },
  footerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  footerTxt: { fontSize: 12, color: THEME.colors.textMuted },
  readyBadge: { backgroundColor: '#10B981', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8 },
  readyTxt: { color: '#FFF', fontSize: 10, fontWeight: '700' },
  actionRow: { flexDirection: 'row', gap: 10 },
  bursarBtn: { flex: 1, backgroundColor: THEME.colors.cardBackground, borderWidth: 1.5, borderColor: THEME.colors.border, padding: 16, borderRadius: 12, alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 4 },
  bursarBtnTxt: { color: THEME.colors.textMuted, fontSize: 15, fontWeight: '600' },
  pdfBtn: { flex: 1, backgroundColor: THEME.colors.primary, padding: 16, borderRadius: 12, alignItems: 'center', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  pdfBtnTxt: { color: '#FFF', fontSize: 15, fontWeight: '700' },
});