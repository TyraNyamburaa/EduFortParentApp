import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { THEME } from '../../constants/theme';
import Icon from '../../components/Icon';

const STUDENTS = [
  { id: '1', name: 'Malia Wanjiku', meta: 'Grade 1 Emerald • Adm: ADM-2022-841', school: 'Peter Kibukosya Primary School', status: 'Bursar Stamped • Exam Clear', file: 'BAR-99214_Malia.pdf (184 KB)', amt: 5000, checked: true },
  { id: '2', name: 'Malkia Nyawira', meta: 'Grade 1 Blue • Adm: ADM-2024-119', school: 'Peter Kibukosya Primary School', status: 'Bursar Stamped • CBC Kit Cleared', file: 'BAR-9442_Malkia.pdf (310 KB)', amt: 1200, checked: true },
];

export default function BulkShareScreen({ navigation }: any) {
  const [autoSplit, setAutoSplit] = useState(true);
  const [gatePush, setGatePush] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.balanceCard}>
        <View style={styles.balanceTop}>
          <Text style={styles.balanceLbl}>MULTI-CHILD DISPATCH</Text>
          <View style={styles.clearedBadge}><Text style={styles.clearedTxt}>2 Receipts Cleared</Text></View>
        </View>
        <Text style={styles.balanceAmt}>KES 6,200.00</Text>
        <Text style={styles.balanceSub}>Batch-official stamped clearance certificates to school bursars, class teachers and co-parents simultaneously.</Text>
        <View style={styles.batchRow}>
          <Text style={styles.batchLbl}>BATCH:</Text>
          <Text style={styles.batchVal}>BATCH-2025-07-5882</Text>
        </View>
        <Text style={styles.termTxt}>Term 2 Settlement</Text>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Included Students & Receipts</Text>
        <Text style={styles.sectionCount}>2 of 2 Selected</Text>
      </View>

      {STUDENTS.map((s) => (
        <View key={s.id} style={styles.studentCard}>
          <View style={styles.studentLeft}>
            <View style={styles.studentAvatar}><Icon name="mother" size={22} /></View>
            <View style={styles.studentBody}>
              <Text style={styles.studentName}>{s.name}</Text>
              <Text style={styles.studentMeta}>{s.meta}</Text>
              <Text style={styles.studentSchool}>{s.school}</Text>
              <Text style={styles.studentStatus}>{s.status}</Text>
              <Text style={styles.studentFile}>{s.file}</Text>
            </View>
          </View>
          <View style={styles.studentRight}>
            <Text style={styles.studentAmt}>KES {s.amt.toLocaleString()}</Text>
            <View style={styles.checkBadge}><Icon name="check" size={14} /></View>
          </View>
        </View>
      ))}

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Primary Dispatch Channel</Text>
      </View>
      <View style={styles.channelRow}>
        <TouchableOpacity style={[styles.channelBtn, styles.channelBtnActive]}>
          <Icon name="chat" size={20} style={styles.channelIcon} />
          <Text style={styles.channelLblActive}>WhatsApp</Text>
          <Text style={styles.channelSub}>Instant PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.channelBtn}>
          <Icon name="link" size={20} style={styles.channelIcon} />
          <Text style={styles.channelLbl}>SMS Link</Text>
          <Text style={styles.channelSub}>Low Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.channelBtn}>
          <Icon name="email" size={20} style={styles.channelIcon} />
          <Text style={styles.channelLbl}>Email ZIP</Text>
          <Text style={styles.channelSub}>Formal Copy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Verified Recipients Matrix</Text>
        <Text style={styles.sectionTag}>Consolidated delivery to all 4 destinations</Text>
      </View>

      <View style={styles.recipientCard}>
        <View style={styles.recipientTop}>
          <View style={styles.recipientIconWrap}><Icon name="tuition" size={20} /></View>
          <View style={styles.recipientBody}>
            <Text style={styles.recipientName}>Baraka Academy Bursar</Text>
            <Text style={styles.recipientSub}>+254 700 691 023 • Central Accounts</Text>
          </View>
          <View style={styles.recipientTags}>
            <Text style={styles.recipientTag}>Consolidated</Text>
          </View>
        </View>
        <Text style={styles.recipientSub2}>Receives full batch ledger (Malia & Malkia)</Text>
      </View>

      <View style={styles.recipientCard}>
        <View style={styles.recipientTop}>
          <View style={styles.recipientIconWrap}><Icon name="mother" size={20} /></View>
          <View style={styles.recipientBody}>
            <Text style={styles.recipientName}>Tr. Mwangi</Text>
            <Text style={styles.recipientSub}>+254 721 694 332 • Grade 1 Emerald Head</Text>
          </View>
          <View style={[styles.recipientTags, { backgroundColor: '#D1FAE5' }]}>
            <Text style={[styles.recipientTag, { color: '#065F46' }]}>Sarah Only</Text>
          </View>
        </View>
      </View>

      <View style={styles.recipientCard}>
        <View style={styles.recipientTop}>
          <View style={styles.recipientIconWrap}><Icon name="teacher" size={20} /></View>
          <View style={styles.recipientBody}>
            <Text style={styles.recipientName}>Tr. Faith Chebet</Text>
            <Text style={styles.recipientSub}>+254 714 559 012 • Grade 1 Blue Rep</Text>
          </View>
          <View style={[styles.recipientTags, { backgroundColor: '#FEF3C7' }]}>
            <Text style={[styles.recipientTag, { color: '#92400E' }]}>Brian Only</Text>
          </View>
        </View>
      </View>

      <View style={styles.recipientCard}>
        <View style={styles.recipientTop}>
          <View style={styles.recipientIconWrap}><Icon name="father" size={20} /></View>
          <View style={styles.recipientBody}>
            <Text style={styles.recipientName}>Evans Ndege Nduathi (Father)</Text>
            <Text style={styles.recipientSub}>+254 737 113 224 • Full Household Copy</Text>
          </View>
          <View style={styles.recipientTags}>
            <Text style={styles.recipientTag}>Co-Payer</Text>
          </View>
        </View>
      </View>

      <View style={styles.recipientCard}>
        <View style={styles.recipientTop}>
          <View style={styles.recipientIconWrap}><Icon name="chat" size={20} /></View>
          <View style={styles.recipientBody}>
            <Text style={styles.recipientName}>Winfrida Mwangi (Self Vault)</Text>
            <Text style={styles.recipientSub}>+254 722 ••• 419 • Cloud Archive</Text>
          </View>
          <View style={[styles.recipientTags, { backgroundColor: '#DBEAFE' }]}>
            <Text style={[styles.recipientTag, { color: '#1E40AF' }]}>Backup</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addNewBtn}><Text style={styles.addNewBtnTxt}>+ Add New</Text></TouchableOpacity>

      <View style={styles.prefRow}>
        <View style={styles.prefLeft}>
          <Text style={styles.prefTitle}>Auto-Split Delivery (Privacy Filter)</Text>
          <Text style={styles.prefSub}>Class teachers only view their own student&apos;s record</Text>
        </View>
        <Switch value={autoSplit} onValueChange={setAutoSplit} trackColor={{ false: '#CBD5E1', true: '#86EFAC' }} thumbColor={autoSplit ? THEME.colors.secondary : '#FFF'} />
      </View>

      <View style={styles.prefRow}>
        <View style={styles.prefLeft}>
          <Text style={styles.prefTitle}>Instant Bursar Gate Stamp Push</Text>
          <Text style={styles.prefSub}>Requests electronic gate clearance ping</Text>
        </View>
        <Switch value={gatePush} onValueChange={setGatePush} trackColor={{ false: '#CBD5E1', true: '#86EFAC' }} thumbColor={gatePush ? THEME.colors.secondary : '#FFF'} />
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Message Dispatch Preview</Text>
        <View style={styles.langToggles}>
          <TouchableOpacity style={[styles.langBtn, styles.langBtnActive]}><Text style={styles.langBtnActiveTxt}>English</Text></TouchableOpacity>
          <TouchableOpacity style={styles.langBtn}><Text style={styles.langBtnTxt}>Kiswahili</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.previewCard}>
        <View style={styles.previewTop}>
          <Text style={styles.previewTitle}>EduFort Dispatch Bot • WhatsApp Preview</Text>
          <Text style={styles.previewTime}>Today, 08:42</Text>
        </View>
        <Text style={styles.previewBody}>Jambo Mwalimu / Bursar Office,</Text>
        <Text style={styles.previewBody}>Please receive the consolidated EduFort verified receipts for the Kamau household:</Text>
        <View style={styles.previewBullets}>
          <Text style={styles.previewBullet}>1. Malia Wanjiku (Grade 1 Emerald) • Ref #BAR-99214 KES 5,000.00 (Tuition • Exam Hall Cleared)</Text>
          <Text style={styles.previewBullet}>2. Malkia Nyawira (Grade 1 Blue) • Ref #BAR-9442 KES 1,200.00 (CBC Kit • Cleared)</Text>
        </View>
        <Text style={styles.previewBody}>Combined M-Pesa Settle: KES 6,200.00. Both digital clearance certificates are signed, instant-stamped, and attached with tamper-proof CBK Escrow hash.</Text>
        <View style={styles.previewAttachRow}><Icon name="attach" size={12} /><Text style={styles.previewAttachTxt}> Attached: 2 Signed PDFs (694 KB)</Text></View>
        <View style={styles.previewCheckRow}><Icon name="check" size={14} /></View>
      </View>

      <Text style={styles.appendLbl}>Quick Notes to Append:</Text>
      <View style={styles.appendRow}>
        <TouchableOpacity style={styles.appendBtn}><Text style={styles.appendBtnTxt}>+ Gate Pass Request</Text></TouchableOpacity>
        <TouchableOpacity style={styles.appendBtn}><Text style={styles.appendBtnTxt}>+ Physical Copy</Text></TouchableOpacity>
        <TouchableOpacity style={styles.appendBtn}><Text style={styles.appendBtnTxt}>+ CC Co-Parent</Text></TouchableOpacity>
      </View>

      <View style={styles.trustRow}>
        <View style={styles.trustLeft}>
          <Icon name="shield" size={20} style={styles.trustIcon} />
          <View>
            <Text style={styles.trustTitle}>Tamper-Proof Escrow Seal</Text>
            <Text style={styles.trustSub}>QR Code embedded on both receipts for instant school barcode scanning</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.dispatchBtn}>
        <Text style={styles.dispatchBtnTxt}>▶ Dispatch All Receipts via WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mergedBtn}>
        <Text style={styles.mergedBtnTxt}>Download Merged PDF Bundle (694 KB)</Text>
      </TouchableOpacity>
      <Text style={styles.footNote}>EduFort Custodial Protocol • Real-time double-tick delivery audit</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  balanceCard: { backgroundColor: '#0F2922', borderRadius: 16, padding: 20, marginBottom: 24 },
  balanceTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  balanceLbl: { color: '#10B981', fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },
  clearedBadge: { backgroundColor: '#065F46', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  clearedTxt: { color: '#FFF', fontSize: 10, fontWeight: '700' },
  balanceAmt: { color: '#FFF', fontSize: 32, fontWeight: '800', marginVertical: 6 },
  balanceSub: { color: '#94A3B8', fontSize: 13, lineHeight: 18, marginBottom: 14 },
  batchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  batchLbl: { color: '#10B981', fontSize: 11, fontWeight: '700', marginRight: 8 },
  batchVal: { color: '#FFF', fontSize: 13, fontWeight: '700' },
  termTxt: { color: '#94A3B8', fontSize: 11 },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark },
  sectionCount: { fontSize: 11, color: THEME.colors.textMuted },
  studentCard: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  studentLeft: { flexDirection: 'row', flex: 1 },
  studentAvatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FDE68A', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  studentAvatarTxt: { fontSize: 22 },
  studentBody: { flex: 1 },
  studentName: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  studentMeta: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  studentSchool: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  studentStatus: { fontSize: 10, color: THEME.colors.secondary, fontWeight: '600', marginTop: 3 },
  studentFile: { fontSize: 10, color: THEME.colors.textMuted, marginTop: 2 },
  studentRight: { alignItems: 'flex-end', marginLeft: 12 },
  studentAmt: { fontSize: 15, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 6 },
  checkBadge: { width: 28, height: 28, borderRadius: 14, backgroundColor: THEME.colors.secondary, justifyContent: 'center', alignItems: 'center' },
  checkTxt: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  channelRow: { flexDirection: 'row', gap: 8, marginBottom: 24 },
  channelBtn: { flex: 1, backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, alignItems: 'center', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  channelBtnActive: { backgroundColor: '#0F2922' },
  channelIcon: { fontSize: 20, marginBottom: 6 },
  channelLbl: { fontSize: 11, color: THEME.colors.textMuted, fontWeight: '600' },
  channelLblActive: { color: '#FFF', fontSize: 11, fontWeight: '700' },
  channelSub: { fontSize: 9, color: THEME.colors.textMuted, marginTop: 2 },
  recipientCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  recipientTop: { flexDirection: 'row', alignItems: 'center' },
  recipientIconWrap: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  recipientIcon: { fontSize: 20 },
  recipientBody: { flex: 1 },
  recipientName: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  recipientSub: { fontSize: 11, color: THEME.colors.textMuted },
  recipientSub2: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 8 },
  recipientTags: { flexDirection: 'row' },
  recipientTag: { fontSize: 9, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  addNewBtn: { alignItems: 'center', padding: 14, backgroundColor: THEME.colors.cardBackground, borderRadius: 12, marginBottom: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  addNewBtnTxt: { fontSize: 14, color: THEME.colors.primary, fontWeight: '700' },
  prefRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  prefLeft: { flex: 1, marginRight: 12 },
  prefTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  prefSub: { fontSize: 11, color: THEME.colors.textMuted, lineHeight: 16 },
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
  previewBullets: { marginBottom: 8 },
  previewBullet: { fontSize: 12, color: THEME.colors.textMuted, lineHeight: 18 },
  previewAttachRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#D1FAE5', padding: 8, borderRadius: 8, marginBottom: 8 },
  previewAttachTxt: { fontSize: 11, color: '#065F46', fontWeight: '600' },
  previewCheckRow: { flexDirection: 'row', justifyContent: 'flex-end' },
  previewCheck: { fontSize: 14, color: THEME.colors.secondary, fontWeight: '700' },
  appendLbl: { fontSize: 13, color: THEME.colors.textMuted, marginBottom: 10 },
  appendRow: { flexDirection: 'row', gap: 8, marginBottom: 20 },
  appendBtn: { backgroundColor: THEME.colors.cardBackground, paddingHorizontal: 12, paddingVertical: 10, borderRadius: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  appendBtnTxt: { fontSize: 11, color: THEME.colors.textMuted, fontWeight: '600' },
  trustRow: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#EFF6FF', borderRadius: 10, padding: 12, marginBottom: 20 },
  trustLeft: { flexDirection: 'row', alignItems: 'flex-start', flex: 1 },
  trustIcon: { fontSize: 20, marginRight: 12, color: '#2563EB' },
  trustTitle: { fontSize: 14, fontWeight: '700', color: '#1E40AF', marginBottom: 3 },
  trustSub: { fontSize: 11, color: '#3B82F6', lineHeight: 16 },
  dispatchBtn: { backgroundColor: THEME.colors.primary, padding: 18, borderRadius: 12, alignItems: 'center', marginBottom: 12, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  dispatchBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  mergedBtn: { backgroundColor: THEME.colors.cardBackground, borderWidth: 1.5, borderColor: THEME.colors.border, padding: 16, borderRadius: 12, alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 4 },
  mergedBtnTxt: { color: THEME.colors.textMuted, fontSize: 15, fontWeight: '600' },
  footNote: { textAlign: 'center', fontSize: 11, color: THEME.colors.textMuted, marginTop: 12 },
});