import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Switch, TextInput } from 'react-native';
import { THEME } from '../../constants/theme';
import Icon, { IconName } from '../../components/Icon';

const RECIPIENTS: { id: string; name: string; sub: string; icon: IconName; verified: boolean; selected: boolean }[] = [
  { id: 'bursar', name: 'School Bursar Desk', sub: 'Peter Kibukosya Primary • +254 700 691 223', icon: 'school', verified: true, selected: true },
  { id: 'teacher', name: 'Class Teacher / Grade 5 Head', sub: 'Ti Mwangi • +254 782 984 332', icon: 'teacher', verified: false, selected: false },
  { id: 'parent', name: 'Co-Parent / Sponsor', sub: 'Kamau Njau • +254 737 113 224', icon: 'father', verified: false, selected: false },
  { id: 'vault', name: 'My Own WhatsApp Vault', sub: 'Winfrida Mwangi • +254 722 ••• 419', icon: 'chat', verified: false, selected: false },
];

export default function ShareReceiptScreen({ navigation }: any) {
  const [recipients, setRecipients] = useState(RECIPIENTS);
  const [readReceipt, setReadReceipt] = useState(true);
  const [saveVault, setSaveVault] = useState(true);

  const toggleRecipient = (id: string) => {
    setRecipients(recipients.map(r => ({ ...r, selected: r.id === id ? !r.selected : r.selected })));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.receiptHeader}>
        <View style={styles.receiptIconWrap}><Icon name="receipt" size={22} /></View>
        <View style={styles.receiptBody}>
          <Text style={styles.receiptTitle}>Receipt #BAR-99214</Text>
          <Text style={styles.receiptSub}>Malia Wanjiku • CBC Grade 1 (Green)</Text>
        </View>
        <View style={styles.receiptStatusWrap}>
          <Text style={styles.receiptStatus}>STAMPED</Text>
          <Text style={styles.receiptAmt}>KES 5,000</Text>
        </View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>DIRECT WHATSAPP DISPATCH</Text>
        <Text style={styles.sectionTag}>End-to-End Encrypted</Text>
      </View>

      <Text style={styles.recipientLbl}>Select Recipients</Text>
      <Text style={styles.recipientCount}>1 Selected</Text>

      {recipients.map((r) => (
        <TouchableOpacity key={r.id} style={styles.recipientCard} onPress={() => toggleRecipient(r.id)}>
          <View style={styles.recipientLeft}>
            <View style={styles.recipientIconWrap}><Icon name={r.icon} size={20} /></View>
            <View style={styles.recipientBody}>
              <View style={styles.recipientNameRow}>
                <Text style={styles.recipientName}>{r.name}</Text>
                {r.verified && <View style={styles.verifiedBadge}><Text style={styles.verifiedTxt}>Verified</Text></View>}
              </View>
              <Text style={styles.recipientSub}>{r.sub}</Text>
            </View>
          </View>
          <View style={[styles.checkbox, r.selected && styles.checkboxActive]}>
            {r.selected && <View style={styles.checkboxDot} />}
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.phoneRow}>
        <Text style={styles.phoneLbl}>+254</Text>
        <TextInput style={styles.phoneInput} placeholder="700 000 000" placeholderTextColor={THEME.colors.textMuted} />
        <View style={styles.phoneIconWrap}><Icon name="mobile" size={16} /></View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Official Attachment</Text>
        <Text style={styles.sectionTag}>MOE Cleared</Text>
      </View>
      <View style={styles.attachmentCard}>
        <View style={styles.attachmentLeft}>
          <View style={styles.pdfIconWrap}><Icon name="document" size={22} /></View>
          <View style={styles.attachmentBody}>
            <Text style={styles.attachmentName}>PET-99214_Malia_Wanjiku_Term2_Receipt.pdf</Text>
            <Text style={styles.attachmentSub}>364 KB • Official Stamped Bursar Copy</Text>
          </View>
        </View>
        <View style={styles.attachmentRight}>
          <View style={styles.trustBadge}><Text style={styles.trustTxt}>Tamper-Proof CBK Trust Hash</Text></View>
          <TouchableOpacity><Text style={styles.previewTxt}>Preview</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Message Copy Preview</Text>
        <View style={styles.langToggles}>
          <TouchableOpacity style={[styles.langBtn, styles.langBtnActive]}><Text style={styles.langBtnActiveTxt}>English</Text></TouchableOpacity>
          <TouchableOpacity style={styles.langBtn}><Text style={styles.langBtnTxt}>Kiswahili</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.previewCard}>
        <View style={styles.previewTop}>
          <Text style={styles.previewTitle}>PETER KIBUKOSYA PRIMARY SCHOOL</Text>
          <Text style={styles.previewTime}>Just now</Text>
        </View>
        <Text style={styles.previewBody}>Hi Mwalimu / Bursar,</Text>
        <Text style={styles.previewBody}>Please find attached the official validated EduFort custodial receipt #BAR-99214 for Malia Wanjiku (Grade 1 (Green), Adm: ADM-2022-841).</Text>
        <View style={styles.previewBullets}>
          <Text style={styles.previewBullet}>• Amount Credited: KES 5,000.00 (Tuition Settlement)</Text>
          <Text style={styles.previewBullet}>• M-Pesa Ref: QKD9201M88</Text>
          <Text style={styles.previewBullet}>• Clearance: Exam & Term 2 Hall Entry Cleared</Text>
          <Text style={styles.previewBullet}>Signed by Peter Kibukosya Treasury on 15 Jul 2025.</Text>
          <Text style={styles.previewBullet}>Verified via EduFort Custodial Trust (CBK Accord).</Text>
        </View>
        <View style={styles.previewActions}>
          <Text style={styles.previewLink}>Customize message</Text>
          <Icon name="check" size={11} style={{ alignSelf: 'center' }} />
          <Text style={styles.previewCheck}> Double Tick Delivery</Text>
        </View>
      </View>

      <Text style={styles.appendLbl}>Tap to append notes:</Text>
      <View style={styles.appendRow}>
        <TouchableOpacity style={styles.appendBtn}><Text style={styles.appendBtnTxt}>+ Add exam gate pass note</Text></TouchableOpacity>
        <TouchableOpacity style={styles.appendBtn}><Text style={styles.appendBtnTxt}>+ Paybill confirmation</Text></TouchableOpacity>
        <TouchableOpacity style={styles.appendBtn}><Text style={styles.appendBtnTxt}>+ Co-parent notice</Text></TouchableOpacity>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Delivery Preferences</Text>
      </View>

      <View style={styles.prefRow}>
        <View style={styles.prefLeft}>
          <Text style={styles.prefTitle}>Request Bursar Read Receipt</Text>
          <Text style={styles.prefSub}>Automatic push update when the bursar desk logs this in the ledger</Text>
        </View>
        <Switch value={readReceipt} onValueChange={setReadReceipt} trackColor={{ false: '#CBD5E1', true: '#86EFAC' }} thumbColor={readReceipt ? THEME.colors.secondary : '#FFF'} />
      </View>

      <View style={styles.prefRow}>
        <View style={styles.prefLeft}>
          <Text style={styles.prefTitle}>Save Copy to EduFort Cloud Vault</Text>
          <Text style={styles.prefSub}>Keep a permanent auto-PDF in your encrypted records</Text>
        </View>
        <Switch value={saveVault} onValueChange={setSaveVault} trackColor={{ false: '#CBD5E1', true: '#86EFAC' }} thumbColor={saveVault ? THEME.colors.secondary : '#FFF'} />
      </View>

      <View style={styles.noteCard}>
        <Icon name="info" size={16} style={styles.noteIcon} />
        <Text style={styles.noteTxt}>Peter Kibukosya Bursar desk operates automated ledger sync on WhatsApp Business API. Acknowledgements typically post within 10 minutes.</Text>
      </View>

<TouchableOpacity style={styles.sendBtn} onPress={() => navigation.navigate('BulkShare')}>
          <Text style={styles.sendBtnTxt}>Send via WhatsApp Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkBtn} onPress={() => navigation.navigate('DispatchAudit')}>
          <Text style={styles.linkBtnTxt}>Copy Shareable Verification Link</Text>
        </TouchableOpacity>
      <Text style={styles.footNote}>Standard Safaricom data rates apply • No extra dispatch fees</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  receiptHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  receiptIconWrap: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#DBEAFE', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  receiptIcon: { fontSize: 22 },
  receiptBody: { flex: 1 },
  receiptTitle: { fontSize: 16, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 3 },
  receiptSub: { fontSize: 12, color: THEME.colors.textMuted },
  receiptStatusWrap: { alignItems: 'flex-end' },
  receiptStatus: { fontSize: 10, color: '#D97706', fontWeight: '700', backgroundColor: '#FEF3C7', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, marginBottom: 4 },
  receiptAmt: { fontSize: 16, fontWeight: '800', color: THEME.colors.textDark },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark },
  sectionTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  recipientLbl: { fontSize: 13, color: THEME.colors.textMuted, marginBottom: 4 },
  recipientCount: { fontSize: 12, color: THEME.colors.textMuted, marginBottom: 14 },
  recipientCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  recipientLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  recipientIconWrap: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  recipientIcon: { fontSize: 20 }, // kept for layout reference
  recipientBody: { flex: 1 },
  recipientNameRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginBottom: 3 },
  recipientName: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark, marginRight: 8 },
  verifiedBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  verifiedTxt: { fontSize: 9, color: '#065F46', fontWeight: '700' },
  recipientSub: { fontSize: 11, color: THEME.colors.textMuted },
  checkbox: { width: 24, height: 24, borderRadius: 6, borderWidth: 2, borderColor: THEME.colors.border, justifyContent: 'center', alignItems: 'center' },
  checkboxActive: { borderColor: THEME.colors.primary, backgroundColor: THEME.colors.primary },
  checkboxDot: { width: 12, height: 12, borderRadius: 3, backgroundColor: '#FFF' },
  phoneRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, paddingHorizontal: 14, marginBottom: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  phoneLbl: { fontSize: 16, fontWeight: '700', color: THEME.colors.textDark, marginRight: 8 },
  phoneInput: { flex: 1, paddingVertical: 14, fontSize: 15, color: THEME.colors.textDark },
  phoneIconWrap: { width: 32, height: 32, borderRadius: 10, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center' },
  phoneIcon: { fontSize: 16 },
  attachmentCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  attachmentLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  pdfIconWrap: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#FEE2E2', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  pdfIcon: { fontSize: 22 },
  attachmentBody: { flex: 1 },
  attachmentName: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  attachmentSub: { fontSize: 11, color: THEME.colors.textMuted },
  attachmentRight: { alignItems: 'flex-end' },
  trustBadge: { backgroundColor: '#ECFDF5', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, marginBottom: 6 },
  trustTxt: { fontSize: 9, color: '#065F46', fontWeight: '700' },
  previewTxt: { fontSize: 12, color: THEME.colors.primary, fontWeight: '600' },
  langToggles: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  langBtn: { backgroundColor: THEME.colors.cardBackground, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  langBtnActive: { backgroundColor: THEME.colors.primary },
  langBtnTxt: { fontSize: 13, color: THEME.colors.textMuted, fontWeight: '600' },
  langBtnActiveTxt: { color: '#FFF', fontSize: 13, fontWeight: '600' },
  previewCard: { backgroundColor: '#F0FDF4', borderWidth: 1, borderColor: '#A7F3D0', borderRadius: 12, padding: 16, marginBottom: 16 },
  previewTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  previewTitle: { fontSize: 14, fontWeight: '800', color: THEME.colors.textDark },
  previewTime: { fontSize: 10, color: THEME.colors.textMuted },
  previewBody: { fontSize: 13, color: THEME.colors.textMuted, lineHeight: 18, marginBottom: 8 },
  previewBullets: { marginBottom: 12 },
  previewBullet: { fontSize: 12, color: THEME.colors.textMuted, lineHeight: 18 },
  previewActions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#D1FAE5', paddingTop: 10 },
  previewActionsRow: { flexDirection: 'row', gap: 6 },
  previewLink: { fontSize: 12, color: THEME.colors.primary, fontWeight: '600' },
  previewCheck: { fontSize: 11, color: THEME.colors.secondary, fontWeight: '600' },
  appendLbl: { fontSize: 13, color: THEME.colors.textMuted, marginBottom: 10 },
  appendRow: { flexDirection: 'row', gap: 8, marginBottom: 24 },
  appendBtn: { backgroundColor: THEME.colors.cardBackground, paddingHorizontal: 12, paddingVertical: 10, borderRadius: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  appendBtnTxt: { fontSize: 11, color: THEME.colors.textMuted, fontWeight: '600' },
  prefRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  prefLeft: { flex: 1, marginRight: 12 },
  prefTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  prefSub: { fontSize: 11, color: THEME.colors.textMuted, lineHeight: 16 },
  noteCard: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#EFF6FF', borderRadius: 10, padding: 12, marginBottom: 20 },
  noteIcon: { fontSize: 16, marginRight: 8, color: '#2563EB' },
  noteTxt: { flex: 1, fontSize: 11, color: '#1E40AF', lineHeight: 16 },
  sendBtn: { backgroundColor: THEME.colors.primary, padding: 18, borderRadius: 12, alignItems: 'center', marginBottom: 12, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  sendBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  linkBtn: { alignItems: 'center', padding: 14 },
  linkBtnTxt: { fontSize: 14, color: THEME.colors.textMuted, fontWeight: '600' },
  footNote: { textAlign: 'center', fontSize: 11, color: THEME.colors.textMuted, marginTop: 8 },
});