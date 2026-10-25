import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { THEME } from '../../constants/theme';

const FAQ_ITEMS = [
  { q: 'What happens if my child changes schools?', open: false },
  { q: 'Can the school send my child home if I\'m saving on Edufort?', open: false },
  { q: 'Is my money safe if I lose my phone?', open: false },
  { q: 'Are there hidden charges on micro-deposits?', open: false },
];

export default function HelpScreen({ navigation }: any) {
  const [faqs, setFaqs] = useState(FAQ_ITEMS);
  const [filter, setFilter] = useState('All Questions');

  const toggleFaq = (i: number) => {
    setFaqs(faqs.map((f, idx) => ({ ...f, open: idx === i ? !f.open : f.open })));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.headerTitle}>EDUFORT PARENT</Text>
          <Text style={styles.screenTitle}>Financial Planning</Text>
        </View>
        <View style={styles.topRight}>
          <TouchableOpacity style={styles.iconBtn}><Text style={styles.iconTxt}>🔔</Text></TouchableOpacity>
          <View style={styles.avatar}><Text style={styles.avatarTxt}>👤</Text></View>
        </View>
      </View>

      <View style={styles.assistCard}>
        <View style={styles.assistTop}>
          <Text style={styles.assistBadge}>Support Agents Online • Avg response • 3 mins</Text>
        </View>
        <Text style={styles.assistTitle}>How can we assist you, Winnie?</Text>
        <Text style={styles.assistSub}>We are here to safeguard your child&apos;s educational journey. Get assisted in English and Kiswahili.</Text>
      </View>

      <View style={styles.directRow}>
        <View style={[styles.directCard, { backgroundColor: '#ECFDF5' }]}>
          <View style={styles.directIconWrap}><Text style={styles.directIcon}>💬</Text></View>
          <Text style={styles.directTitle}>WhatsApp Chat</Text>
          <Text style={styles.directSub}>Instant help with M-Pesa deposits, receipts &amp; more</Text>
          <TouchableOpacity style={styles.whatsappBtn}><Text style={styles.whatsappBtnTxt}>WhatsApp</Text></TouchableOpacity>
        </View>
        <View style={[styles.directCard, { backgroundColor: '#EFF6FF' }]}>
          <View style={styles.directIconWrap2}><Text style={styles.directIcon2}>🏫</Text></View>
          <View style={styles.directTitleRow}>
            <Text style={styles.directTitle}>School Bursar</Text>
            <Text style={styles.trustedTxt}>Trusted Escrow</Text>
          </View>
          <Text style={styles.directSub}>Peter Kibukosya Desk: +254 700 691 223</Text>
          <TouchableOpacity style={styles.callBtn}><Text style={styles.callBtnTxt}>Call Desk</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.agentRow}>
        <View style={styles.agentAvatar}><Text style={styles.agentAvatarTxt}>👩</Text></View>
        <View style={styles.agentBody}>
          <Text style={styles.agentName}>Amina from Nairobi Team <Text style={styles.langTxt}>• Swahili • Eng</Text></Text>
          <Text style={styles.agentSub}>&ldquo;Habari Winfrida! Malia&apos;s Term 2 goals is on trac...&rdquo;</Text>
        </View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Self-Service Fast Track</Text>
        <Text style={styles.sectionTag}>Instant Action</Text>
      </View>

      <TouchableOpacity style={styles.fastItem}>
        <View style={styles.fastIconWrap}><Text style={styles.fastIcon}>📄</Text></View>
        <View style={styles.fastBody}>
          <Text style={styles.fastTitle}>Request Missing School Receipt</Text>
          <Text style={styles.fastSub}>Enter your M-Pesa transaction code (e.g. QK59...) to auto-reconcile with the school ledger.</Text>
        </View>
        <Text style={styles.fastChevron}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fastItem}>
        <View style={styles.fastIconWrap2}><Text style={styles.fastIcon2}>⚖️</Text></View>
        <View style={styles.fastBody}>
          <Text style={styles.fastTitle}>Report Fee Discrepancy</Text>
          <Text style={styles.fastSub}>If the printed circular differs from your app balance, trigger our formal bursar review.</Text>
        </View>
        <Text style={styles.fastChevron}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fastItem}>
        <View style={styles.fastIconWrap3}><Text style={styles.fastIcon3}>⏸️</Text></View>
        <View style={styles.fastBody}>
          <Text style={styles.fastTitle}>Pause Automations During Hardship</Text>
          <Text style={styles.fastSub}>Zero penalties or fines. Temporarily pause all SMS &amp; STK push prompts with one tap.</Text>
        </View>
        <Text style={styles.fastChevron}>›</Text>
      </TouchableOpacity>

      <View style={styles.searchWrap}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput style={styles.searchInput} placeholder="Search answers (e.g. transfers, bursar, M-Pesa)" placeholderTextColor={THEME.colors.textMuted} />
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Parent Guidance &amp; FAQ</Text>
        <Text style={styles.sectionTag}>24/7 Knowledge Base</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
        {['All Questions', 'M-Pesa & Money', 'School Sync'].map((f) => (
          <TouchableOpacity key={f} style={[styles.filterChip, filter === f && styles.filterChipActive]} onPress={() => setFilter(f)}>
            <Text style={[styles.filterTxt, filter === f && styles.filterTxtActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {faqs.map((faq, i) => (
        <View key={i} style={styles.faqCard}>
          <TouchableOpacity style={styles.faqTop} onPress={() => toggleFaq(i)}>
            <Text style={styles.faqQ}>{faq.q}</Text>
            <Text style={styles.faqChevron}>{faq.open ? '▾' : '▸'}</Text>
          </TouchableOpacity>
          {faq.open && (
            <Text style={styles.faqA}>Edufort keeps your funds in a CBK-regulated custodial account. All micro-deposits are fee-free and covered by our Dignity Guarantee.</Text>
          )}
        </View>
      ))}

      <View style={styles.escalateCard}>
        <View style={styles.escalateLeft}>
          <Text style={styles.escalateIcon}>📞</Text>
          <View>
            <Text style={styles.escalateTitle}>Formal Escalation &amp; Toll-Free</Text>
            <Text style={styles.escalateSub}>Need a formal stamp or mediation letter? Reach our regulatory compliance desk.</Text>
          </View>
        </View>
      </View>

      <View style={styles.contactRow}>
        <View style={styles.contactItem}>
          <Text style={styles.contactLbl}>Toll-Free:</Text>
          <Text style={styles.contactVal}>0800 720 000</Text>
          <Text style={styles.contactTag}>FREE CALL</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLbl}>Email:</Text>
          <Text style={styles.contactVal}>support@edufort.co.ke</Text>
          <TouchableOpacity><Text style={styles.contactLink}>Open ↗</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.hoursRow}>
        <Text style={styles.hoursTxt}>Operating Hours: Mon - Sat, 7:00 AM - 9:00 PM EAT</Text>
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
  assistCard: { backgroundColor: '#0F2922', borderRadius: 16, padding: 20, marginBottom: 20 },
  assistTop: { marginBottom: 10 },
  assistBadge: { color: '#10B981', fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },
  assistTitle: { color: '#FFF', fontSize: 20, fontWeight: '800', marginBottom: 6 },
  assistSub: { color: '#94A3B8', fontSize: 14, lineHeight: 20 },
  directRow: { flexDirection: 'row', gap: 12, marginBottom: 20 },
  directCard: { flex: 1, borderRadius: 14, padding: 16, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 6 },
  directIconWrap: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  directIcon: { fontSize: 22 },
  directIconWrap2: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#DBEAFE', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  directIcon2: { fontSize: 22 },
  directTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 4 },
  directTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  trustedTxt: { fontSize: 10, color: '#059669', fontWeight: '700', backgroundColor: '#D1FAE5', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  directSub: { fontSize: 12, color: THEME.colors.textMuted, marginBottom: 12, lineHeight: 16 },
  whatsappBtn: { backgroundColor: '#10B981', padding: 12, borderRadius: 10, alignItems: 'center' },
  whatsappBtnTxt: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  callBtn: { backgroundColor: THEME.colors.primary, padding: 12, borderRadius: 10, alignItems: 'center' },
  callBtnTxt: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  agentRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 24, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  agentAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FDE68A', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  agentAvatarTxt: { fontSize: 20 },
  agentBody: { flex: 1 },
  agentName: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark },
  langTxt: { color: THEME.colors.textMuted, fontWeight: '400' },
  agentSub: { fontSize: 12, color: THEME.colors.textMuted, marginTop: 2 },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: THEME.colors.textDark },
  sectionTag: { fontSize: 10, color: THEME.colors.textMuted, backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  fastItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  fastIconWrap: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#DBEAFE', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  fastIcon: { fontSize: 20 },
  fastIconWrap2: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#FEF3C7', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  fastIcon2: { fontSize: 20 },
  fastIconWrap3: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#FCE7F3', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  fastIcon3: { fontSize: 20 },
  fastBody: { flex: 1 },
  fastTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 4 },
  fastSub: { fontSize: 12, color: THEME.colors.textMuted, lineHeight: 18 },
  fastChevron: { fontSize: 24, color: THEME.colors.textMuted },
  searchWrap: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, paddingHorizontal: 14, marginBottom: 24, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  searchIcon: { fontSize: 16, marginRight: 10 },
  searchInput: { flex: 1, paddingVertical: 14, fontSize: 14, color: THEME.colors.textDark },
  filterRow: { flexDirection: 'row', marginBottom: 16, gap: 8 },
  filterChip: { backgroundColor: THEME.colors.cardBackground, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  filterChipActive: { backgroundColor: THEME.colors.primary },
  filterTxt: { fontSize: 13, fontWeight: '600', color: THEME.colors.textMuted },
  filterTxtActive: { color: '#FFF' },
  faqCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 16, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  faqTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  faqQ: { fontSize: 15, fontWeight: '600', color: THEME.colors.textDark, flex: 1 },
  faqChevron: { fontSize: 18, color: THEME.colors.textMuted, marginLeft: 10 },
  faqA: { fontSize: 14, color: THEME.colors.textMuted, lineHeight: 20, marginTop: 12 },
  escalateCard: { backgroundColor: '#0F2922', borderRadius: 14, padding: 16, marginBottom: 20 },
  escalateLeft: { flexDirection: 'row', alignItems: 'flex-start' },
  escalateIcon: { fontSize: 22, marginRight: 12 },
  escalateTitle: { color: '#FFF', fontSize: 15, fontWeight: '700', marginBottom: 4 },
  escalateSub: { color: '#94A3B8', fontSize: 13, lineHeight: 18 },
  contactRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  contactItem: { flex: 1, backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 16, marginHorizontal: 6, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  contactLbl: { fontSize: 11, color: THEME.colors.textMuted, marginBottom: 4 },
  contactVal: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 4 },
  contactTag: { fontSize: 10, color: '#10B981', fontWeight: '700' },
  contactLink: { fontSize: 12, color: THEME.colors.primary, fontWeight: '600' },
  hoursRow: { backgroundColor: THEME.colors.cardBackground, borderRadius: 10, padding: 12, alignItems: 'center', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  hoursTxt: { fontSize: 12, color: THEME.colors.textMuted, textAlign: 'center' },
});