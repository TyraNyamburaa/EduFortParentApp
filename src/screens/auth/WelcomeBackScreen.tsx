import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { THEME } from '../../constants/theme';

export default function WelcomeBackScreen({ navigation }: any) {
  const [phone, setPhone] = useState('+254 724 819 402');
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.back()}><Text style={styles.backTxt}>←</Text></TouchableOpacity>
        <View style={styles.langRow}>
          <Text style={styles.langActive}>🇪🇬 EN</Text>
          <Text style={styles.langInactive}>| SWA</Text>
        </View>
      </View>

      <Text style={styles.logo}>EduFort</Text>
      <Text style={styles.title}>Welcome Back, Parent</Text>
      <Text style={styles.subtitle}>Access your children's fee ledgers & secure micro-savings account.</Text>

      <View style={styles.trustRow}>
        <Text style={styles.trustIcon}>🛡️</Text>
        <Text style={styles.trustTxt}>CBK Escrow Custody • 256-bit Encrypted</Text>
      </View>

      <View style={styles.fieldCard}>
        <View style={styles.fieldTop}>
          <Text style={styles.fieldLbl}>M-Pesa Registered Mobile</Text>
          <View style={styles.activeBadge}><Text style={styles.activeTxt}>Active SIM</Text></View>
        </View>
        <View style={styles.phoneRow}>
          <Text style={styles.flag}>🇰🇪</Text>
          <TextInput style={styles.phoneInput} value={phone} onChangeText={setPhone} />
          <View style={styles.checkBadge}><Text style={styles.checkTxt}>✓</Text></View>
        </View>
      </View>

      <View style={styles.fieldCard}>
        <View style={styles.fieldTop}>
          <Text style={styles.fieldLbl}>EduFort Security PIN (4-digit)</Text>
          <TouchableOpacity><Text style={styles.forgotTxt}>Forgot PIN?</Text></TouchableOpacity>
        </View>
        <TextInput
          style={styles.pinInput}
          value={pin}
          onChangeText={setPin}
          secureTextEntry={!showPin}
          maxLength={4}
          placeholder="••••"
          placeholderTextColor={THEME.colors.textMuted}
        />
        <View style={styles.pinActions}>
          <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowPin(!showPin)}>
            <Text style={styles.eyeTxt}>{showPin ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rememberRow}>
        <View style={styles.rememberLeft}>
          <Text style={styles.rememberIcon}>📱</Text>
          <Text style={styles.rememberTxt}>Remember this phone for offline sync</Text>
        </View>
        <Switch value={remember} onValueChange={setRemember} trackColor={{ false: '#CBD5E1', true: '#86EFAC' }} thumbColor={remember ? THEME.colors.accentGreen : '#FFF'} />
      </View>

      <TouchableOpacity style={styles.signBtn}>
        <Text style={styles.signBtnTxt}>Sign In to Dashboard</Text>
        <Text style={styles.signBtnArrow}>→</Text>
      </TouchableOpacity>

      <Text style={styles.fastLbl}>FAST SIGN-IN</Text>

      <TouchableOpacity style={styles.fastItem}>
        <View style={styles.fastIconWrap}><Text style={styles.fastIcon}>👆</Text></View>
        <View style={styles.fastBody}>
          <Text style={styles.fastTitle}>Touch ID / Fingerprint</Text>
          <Text style={styles.fastSub}>Instant one-tap parent access</Text>
        </View>
        <Text style={styles.fastChevron}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fastItem}>
        <View style={styles.fastIconWrap2}><Text style={styles.fastIcon2}>💬</Text></View>
        <View style={styles.fastBody}>
          <Text style={styles.fastTitle}>Send WhatsApp Instant One-Time Passcode</Text>
        </View>
        <Text style={styles.fastChevron}>›</Text>
      </TouchableOpacity>

      <Text style={styles.newParentTxt}>New parent on the EduFort network? <Text style={styles.linkTxt} onPress={() => navigation.navigate('PhoneRegistration')}>Open School Fee Account ↗</Text></Text>

      <View style={styles.helpCard}>
        <Text style={styles.helpIcon}>ℹ️</Text>
        <Text style={styles.helpTxt}>Need help signing in or fees clearance? Contact your School Bursar Liaison or call toll-free 0800 720 000</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  backTxt: { fontSize: 24, color: THEME.colors.textDark },
  langRow: { flexDirection: 'row', alignItems: 'center' },
  langActive: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark },
  langInactive: { fontSize: 13, color: THEME.colors.textMuted, marginLeft: 8 },
  logo: { fontSize: 14, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 1, marginBottom: 12 },
  title: { fontSize: 28, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 8 },
  subtitle: { fontSize: 14, color: THEME.colors.textMuted, lineHeight: 20, marginBottom: 20 },
  trustRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0FDF4', borderRadius: 10, padding: 12, marginBottom: 24 },
  trustIcon: { fontSize: 16, marginRight: 8, color: THEME.colors.accentGreen },
  trustTxt: { fontSize: 12, color: '#065F46', fontWeight: '600' },
  fieldCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 16, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  fieldTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  fieldLbl: { fontSize: 13, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 0.5 },
  activeBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  activeTxt: { fontSize: 9, color: '#065F46', fontWeight: '700' },
  phoneRow: { flexDirection: 'row', alignItems: 'center' },
  flag: { fontSize: 20, marginRight: 10 },
  phoneInput: { flex: 1, fontSize: 16, fontWeight: '700', color: THEME.colors.textDark },
  checkBadge: { width: 24, height: 24, borderRadius: 12, backgroundColor: THEME.colors.accentGreen, justifyContent: 'center', alignItems: 'center' },
  checkTxt: { color: '#FFF', fontSize: 13, fontWeight: '700' },
  pinInput: { fontSize: 28, fontWeight: '800', color: THEME.colors.textDark, borderWidth: 1, borderColor: THEME.colors.border, borderRadius: 12, padding: 16, textAlign: 'center', letterSpacing: 6, marginBottom: 8 },
  pinActions: { flexDirection: 'row', justifyContent: 'flex-end' },
  eyeBtn: { padding: 4 },
  eyeTxt: { fontSize: 16 },
  forgotTxt: { fontSize: 12, color: THEME.colors.primary, fontWeight: '600' },
  rememberRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  rememberLeft: { flexDirection: 'row', alignItems: 'center' },
  rememberIcon: { fontSize: 16, marginRight: 10 },
  rememberTxt: { fontSize: 13, color: THEME.colors.textDark, fontWeight: '600' },
  signBtn: { backgroundColor: THEME.colors.primary, padding: 18, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 24, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  signBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  signBtnArrow: { color: '#FFF', fontSize: 18, marginLeft: 8 },
  fastLbl: { fontSize: 12, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 0.5, marginBottom: 14 },
  fastItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 14, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  fastIconWrap: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#D1FAE5', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  fastIcon: { fontSize: 22 },
  fastIconWrap2: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#DBEAFE', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  fastIcon2: { fontSize: 22 },
  fastBody: { flex: 1 },
  fastTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 3 },
  fastSub: { fontSize: 12, color: THEME.colors.textMuted },
  fastChevron: { fontSize: 24, color: THEME.colors.textMuted },
  newParentTxt: { fontSize: 13, color: THEME.colors.textMuted, textAlign: 'center', marginBottom: 20, lineHeight: 18 },
  linkTxt: { color: THEME.colors.primary, fontWeight: '700' },
  helpCard: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#EFF6FF', borderRadius: 10, padding: 14, borderLeftWidth: 4, borderLeftColor: '#3B82F6' },
  helpIcon: { fontSize: 16, marginRight: 10, color: '#2563EB' },
  helpTxt: { flex: 1, fontSize: 12, color: '#1E40AF', lineHeight: 18 },
});