import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { THEME } from '../../constants/theme';
import Icon from '../../components/Icon';

export default function ProfileScreen({ navigation }: any) {
  const [biometric, setBiometric] = React.useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.profileCard}>
        <View style={styles.profileLeft}>
          <View style={styles.profileAvatar}><Icon name="father" size={28} /></View>
          <View style={styles.profileBody}>
            <View style={styles.profileNameRow}>
              <Text style={styles.profileName}>Winfrida Mwangi</Text>
              <Text style={styles.verifiedTxt}>Verified National ID</Text>
            </View>
            <Text style={styles.profileMeta}>254 717 ••• 576 • Active Household Tier</Text>
            <View style={styles.profileBadgeRow}>
              <View style={styles.locationRow}>
                <Icon name="location" size={14} />
                <Text style={styles.locationTxt}> Nairobi County • 2 Children Protected</Text>
              </View>
              <TouchableOpacity style={styles.badgeBtn}><Text style={styles.badgeBtnTxt}>Badge ›</Text></TouchableOpacity>
            </View>
            <Text style={styles.joinedTxt}>EduFort Saver since Jan 2024</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Children Enrolled (2)</Text>
        <TouchableOpacity><Text style={styles.sectionLink}>+ Add Child</Text></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.childCard}>
        <View style={styles.childAvatarWrap}><Icon name="mother" size={22} /></View>
        <View style={styles.childBody}>
          <Text style={styles.childName}>Malia Wanjiku • Grade 1 (CBC)</Text>
          <Text style={styles.childSchool}>Peter Kibukosya Primary School</Text>
          <Text style={styles.childStatus}>Term 2 Sync</Text>
        </View>
        <View style={styles.childRight}>
          <Text style={styles.childPaybill}>Paybill #842100</Text>
          <Text style={styles.childArrow}>→</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.childCard}>
        <View style={styles.childAvatarWrap2}><Icon name="girl" size={22} /></View>
        <View style={styles.childBody}>
          <Text style={styles.childName}>Malkia Nyawira • Grade 1</Text>
          <Text style={styles.childSchool}>Peter Kibukosya Primary School</Text>
          <Text style={styles.childStatus}>Term 2 Sync</Text>
        </View>
        <View style={styles.childRight}>
          <Text style={styles.childPaybill}>Paybill #842100</Text>
          <Text style={styles.childArrow}>→</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Financial Rhythm &amp; Mobile Money</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="money" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>Primary Income Rhythm</Text>
            <Text style={styles.infoSub}>Aligned with Weekly Chama Cycle</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.changeBtn}><Text style={styles.changeBtnTxt}>Change ›</Text></TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="mobile" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>Safaricom M-Pesa Express</Text>
            <Text style={styles.infoSub}>0717 ••• 576 • Auto-STK Enabled</Text>
          </View>
        </View>
        <View style={styles.defaultBadge}><Text style={styles.defaultBadgeTxt}>Default</Text></View>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="savings" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>Secondary Backup Wallet</Text>
            <Text style={styles.infoSub}>Airtel Money or Equity Bank</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.linkBtnWrap}><Text style={styles.linkBtnTxt}>+ Link</Text></TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="shield" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>Daily Micro-Save Cap</Text>
            <Text style={styles.infoSub}>Guardrail limit for pocket stability</Text>
          </View>
        </View>
        <Text style={styles.infoVal}>KES 150 / day</Text>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Security &amp; Trust</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="fingerprint" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>Biometric Login</Text>
            <Text style={styles.infoSub}>Fingerprint / FaceID instant access</Text>
          </View>
        </View>
        <Switch value={biometric} onValueChange={setBiometric} trackColor={{ false: '#CBD5E1', true: '#86EFAC' }} thumbColor={biometric ? THEME.colors.secondary : '#FFF'} />
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="fingerprint" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>Change 4-Digit App PIN</Text>
            <Text style={styles.infoSub}>Updated 42 days ago</Text>
          </View>
        </View>
        <Text style={styles.infoChevron}>›</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="autopay" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>M-Pesa STK Authorization</Text>
            <Text style={styles.infoSub}>Require biometric verification before prompt</Text>
          </View>
        </View>
        <Text style={styles.infoChevron}>›</Text>
      </View>

      <View style={styles.trustCard}>
        <View style={styles.trustLeft}>
          <Icon name="fingerprint" size={20} style={styles.trustIcon} />
          <View>
            <Text style={styles.trustTitle}>256-bit Bank Grade Encryption</Text>
            <Text style={styles.trustSub}>Regulated Custodial Partner • Central Bank of Kenya Guidelines</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>Preferences &amp; Communication</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="language" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>Language / Luga</Text>
            <Text style={styles.infoSub}>English (Kenya)</Text>
          </View>
        </View>
        <View style={styles.kiswahiliBadge}><Text style={styles.kiswahiliBadgeTxt}>Kiswahili</Text></View>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="notification" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>Notification Channels</Text>
            <Text style={styles.infoSub}>SMS Prompts &amp; WhatsApp Reminders Active</Text>
          </View>
        </View>
        <Text style={styles.infoChevron}>›</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoLeft}>
          <Icon name="document" size={20} style={styles.infoIcon} />
          <View>
            <Text style={styles.infoTitle}>Monthly PDF Statements</Text>
            <Text style={styles.infoSub}>Delivered to WhatsApp on 1st of month</Text>
          </View>
        </View>
        <Text style={styles.infoChevron}>›</Text>
      </View>

      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutBtnTxt}>Logout of EduFort</Text>
      </TouchableOpacity>

      <View style={styles.footerRow}>
        <Text style={styles.footerTxt}>Terms of Service</Text>
        <Text style={styles.footerDot}>•</Text>
        <Text style={styles.footerTxt}>Privacy Policy</Text>
        <Text style={styles.footerDot}>•</Text>
        <Text style={styles.footerTxt}>Support Desk</Text>
      </View>
      <Text style={styles.versionTxt}>EduFort v2.4.0 (Build 20250527) • Nairobi, Kenya</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  profileCard: { backgroundColor: '#0F2922', borderRadius: 16, padding: 16, marginBottom: 24 },
  profileLeft: { flexDirection: 'row', alignItems: 'flex-start' },
  profileAvatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#FDE68A', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  profileBody: { flex: 1 },
  profileNameRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginBottom: 4 },
  profileName: { color: '#FFF', fontSize: 18, fontWeight: '800', marginRight: 8 },
  verifiedTxt: { color: '#10B981', fontSize: 12, fontWeight: '600' },
  profileMeta: { color: '#94A3B8', fontSize: 13, marginBottom: 10 },
  profileBadgeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' },
  locationRow: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  locationIcon: { fontSize: 14, marginRight: 6 },
  locationTxt: { color: '#94A3B8', fontSize: 12, flex: 1 },
  badgeBtn: { backgroundColor: '#065F46', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
  badgeBtnTxt: { color: '#FFF', fontSize: 12, fontWeight: '600' },
  joinedTxt: { color: '#94A3B8', fontSize: 11, marginTop: 10 },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textMuted, letterSpacing: 0.5 },
  sectionLink: { fontSize: 13, color: THEME.colors.primary, fontWeight: '600' },
  childCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  childAvatarWrap: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FDE68A', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  childAvatarWrap2: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FBCFE8', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  childBody: { flex: 1 },
  childName: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  childSchool: { fontSize: 12, color: THEME.colors.textMuted, marginBottom: 2 },
  childStatus: { fontSize: 11, color: THEME.colors.secondary, fontWeight: '600' },
  childRight: { alignItems: 'flex-end' },
  childPaybill: { fontSize: 11, color: THEME.colors.textMuted, marginBottom: 4 },
  childArrow: { fontSize: 18, color: THEME.colors.textMuted },
  infoCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  infoLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  infoIcon: { marginRight: 12, width: 28 },
  infoTitle: { fontSize: 15, fontWeight: '600', color: THEME.colors.textDark, marginBottom: 3 },
  infoSub: { fontSize: 12, color: THEME.colors.textMuted },
  changeBtn: { backgroundColor: '#F1F5F9', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  changeBtnTxt: { fontSize: 12, color: THEME.colors.textMuted, fontWeight: '600' },
  defaultBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 },
  defaultBadgeTxt: { fontSize: 10, color: '#065F46', fontWeight: '700' },
  linkBtnWrap: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 8 },
  linkBtnTxt: { color: THEME.colors.primary, fontSize: 13, fontWeight: '600' },
  infoVal: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark },
  infoChevron: { fontSize: 22, color: THEME.colors.textMuted },
  trustCard: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#EFF6FF', borderRadius: 12, padding: 14, marginBottom: 24, borderLeftWidth: 4, borderLeftColor: '#3B82F6' },
  trustLeft: { flexDirection: 'row', alignItems: 'flex-start', flex: 1 },
  trustIcon: { fontSize: 20, marginRight: 12, color: '#2563EB' },
  trustTitle: { fontSize: 14, fontWeight: '700', color: '#1E40AF', marginBottom: 4 },
  trustSub: { fontSize: 12, color: '#3B82F6', lineHeight: 18 },
  kiswahiliBadge: { backgroundColor: '#FEF3C7', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 },
  kiswahiliBadgeTxt: { fontSize: 10, color: '#92400E', fontWeight: '700' },
  logoutBtn: { backgroundColor: '#FEE2E2', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  logoutBtnTxt: { color: '#DC2626', fontSize: 16, fontWeight: '700' },
  footerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  footerTxt: { fontSize: 12, color: THEME.colors.textMuted },
  footerDot: { color: THEME.colors.textMuted, marginHorizontal: 8 },
  versionTxt: { textAlign: 'center', fontSize: 11, color: THEME.colors.textMuted, marginBottom: 16 },
});