import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { THEME } from '../../constants/theme';

const AMOUNTS = [
  { label: 'KES 50', value: 50, popular: false },
  { label: 'KES 100', value: 100, selected: true, popular: false },
  { label: 'KES 250', value: 250, popular: false },
  { label: 'KES 500', value: 500, popular: false },
];

const PAY_METHODS = [
  { id: 'mpesa', name: 'M-Pesa Express', sub: 'Direct push to 0722 ••• 419', icon: 'M', color: '#10B981', selected: false },
  { id: 'airtel', name: 'Airtel Money', sub: 'Push to 0733 ••• 812', icon: 'A', color: '#EF4444', selected: false },
  { id: 'wallet', name: 'Wallet / Bank Transfer', sub: 'Avail. Bal: KES 450.00 • Equity Bank', icon: '🏦', color: '#3B82F6', selected: true },
];

export default function QuickDepositScreen({ navigation }: any) {
  const [selectedAmt, setSelectedAmt] = useState(100);
  const [customAmt, setCustomAmt] = useState('100');
  const [methods, setMethods] = useState(PAY_METHODS);
  const [dailyHabit, setDailyHabit] = useState(true);

  const toggleMethod = (id: string) => {
    setMethods(methods.map(m => ({ ...m, selected: m.id === id })));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={styles.cardTitle}>Deposit to Edufort Vault</Text>
          <View style={styles.feeFreeBadge}>
            <Text style={styles.feeFreeTxt}>FEE-FREE</Text>
          </View>
        </View>
        <Text style={styles.sectionLbl}>BENEFICIARY STUDENT</Text>
        <TouchableOpacity style={styles.beneficiary}>
          <View style={styles.benefAvatar}>
            <Text style={styles.benefAvatarTxt}>👩</Text>
          </View>
          <View style={styles.benefInfo}>
            <Text style={styles.benefName}>Sarah Wanjiku (Grade 5B)</Text>
            <Text style={styles.benefSub}>Peter Kibukosya Primary School • KES ...</Text>
          </View>
          <Text style={styles.drop}>▾</Text>
        </TouchableOpacity>

        <View style={styles.allocRow}>
          <View style={styles.allocLeft}>
            <Text style={styles.allocIcon}>🎯</Text>
            <Text style={styles.allocLbl}>Allocating to:</Text>
          </View>
          <Text style={styles.allocVal}>Term 2 Tuition</Text>
          <TouchableOpacity><Text style={styles.changeTxt}>Change</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={styles.cardTitle}>Choose Deposit Amount</Text>
          <TouchableOpacity><Text style={styles.microSaveTxt}>⚡ Micro-save</Text></TouchableOpacity>
        </View>
        <View style={styles.amtGrid}>
          {AMOUNTS.map((a, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.amtBtn, a.selected && styles.amtBtnActive]}
              onPress={() => { setSelectedAmt(a.value); setCustomAmt(String(a.value)); }}
            >
              {a.popular && <Text style={styles.popularTxt}>POPULAR</Text>}
              <Text style={[styles.amtBtnTxt, a.selected && styles.amtBtnActiveTxt]}>{a.label}</Text>
              {a.selected && <Text style={styles.selectedCheck}>✓ Selected</Text>}
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.customLbl}>Enter Custom Amount</Text>
        <View style={styles.customRow}>
          <Text style={styles.keLbl}>KES</Text>
          <TextInput
            style={styles.customInput}
            value={customAmt}
            onChangeText={setCustomAmt}
            keyboardType="number-pad"
          />
          <TouchableOpacity><Text style={styles.clearTxt}>✕</Text></TouchableOpacity>
        </View>
        <View style={styles.noteRow}>
          <Text style={styles.noteIcon}>ℹ️</Text>
          <Text style={styles.noteTxt}>Minimum deposit is KES 10. No transaction fee applies for deposits under KES 100.</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={styles.cardTitle}>Pay With Mobile Money</Text>
          <Text style={styles.stkTxt}>Instant STK Push</Text>
        </View>
        {methods.map((m) => (
          <TouchableOpacity key={m.id} style={styles.methodRow} onPress={() => toggleMethod(m.id)}>
            <View style={[styles.methodIcon, { backgroundColor: m.color + '22' }]}>
              <Text style={[styles.methodIconTxt, { color: m.color }]}>{m.icon}</Text>
            </View>
            <View style={styles.methodInfo}>
              <Text style={styles.methodName}>{m.name}</Text>
              <Text style={styles.methodSub}>{m.sub}</Text>
            </View>
            <View style={[styles.radio, m.selected && styles.radioActive]}>
              {m.selected && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
        <View style={styles.habitRow}>
          <View style={styles.habitInfo}>
            <Text style={styles.habitIcon}>🔄</Text>
            <View>
              <Text style={styles.habitTitle}>Daily Micro-Save Habit</Text>
              <Text style={styles.habitSub}>Repeat this deposit every day at 7:00 PM automatically.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.toggle} onPress={() => setDailyHabit(!dailyHabit)}>
            <View style={[styles.toggleTrack, dailyHabit && styles.toggleTrackOn]}>
              <View style={[styles.toggleThumb, dailyHabit && styles.toggleThumbOn]} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.secRow}>
        <Text style={styles.secIcon}>🛡️</Text>
        <Text style={styles.secTxt}>Secured with 256-bit encryption. Funds held in trust with Central Bank of Kenya regulated custodial partner.</Text>
      </View>

      <TouchableOpacity style={styles.depositBtn}>
        <Text style={styles.depositBtnTxt}>Deposit KES 100 via Wallet</Text>
      </TouchableOpacity>
      <Text style={styles.pinNote}>• An M-Pesa PIN prompt will appear on your phone screen.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  card: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 14, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark },
  feeFreeBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 12 },
  feeFreeTxt: { fontSize: 10, color: '#065F46', fontWeight: '700' },
  sectionLbl: { fontSize: 10, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 1, marginBottom: 8 },
  beneficiary: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', borderRadius: 10, padding: 12, marginBottom: 14 },
  benefAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FDE68A', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  benefAvatarTxt: { fontSize: 20 },
  benefInfo: { flex: 1 },
  benefName: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark },
  benefSub: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  drop: { fontSize: 14, color: THEME.colors.textMuted },
  allocRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  allocLeft: { flexDirection: 'row', alignItems: 'center' },
  allocIcon: { fontSize: 16, marginRight: 6 },
  allocLbl: { fontSize: 13, color: THEME.colors.textMuted },
  allocVal: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark, marginRight: 10 },
  changeTxt: { fontSize: 13, color: THEME.colors.primary, fontWeight: '600' },
  microSaveTxt: { fontSize: 12, color: THEME.colors.primary, fontWeight: '600' },
  amtGrid: { flexDirection: 'row', gap: 8, marginBottom: 20 },
  amtBtn: { flex: 1, backgroundColor: '#F8FAFC', borderRadius: 10, padding: 12, alignItems: 'center', borderWidth: 1, borderColor: THEME.colors.border, position: 'relative' },
  amtBtnActive: { backgroundColor: '#5EEAD4', borderColor: '#0D9488' },
  popularTxt: { fontSize: 9, color: THEME.colors.textMuted, fontWeight: '700', position: 'absolute', top: 6, left: 8 },
  amtBtnTxt: { fontSize: 13, fontWeight: '700', color: THEME.colors.textDark, marginTop: 6 },
  amtBtnActiveTxt: { color: '#0F2922' },
  selectedCheck: { fontSize: 9, color: '#0F2922', fontWeight: '700', marginTop: 4 },
  customLbl: { fontSize: 13, color: THEME.colors.textMuted, marginBottom: 8 },
  customRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', borderRadius: 10, paddingHorizontal: 14, marginBottom: 12, borderWidth: 1, borderColor: THEME.colors.border },
  keLbl: { fontSize: 18, fontWeight: '700', color: THEME.colors.textMuted, marginRight: 8 },
  customInput: { flex: 1, fontSize: 24, fontWeight: '800', color: THEME.colors.textDark },
  clearTxt: { fontSize: 16, color: THEME.colors.textMuted },
  noteRow: { flexDirection: 'row', alignItems: 'flex-start' },
  noteIcon: { fontSize: 14, marginRight: 6, color: THEME.colors.textMuted },
  noteTxt: { flex: 1, fontSize: 12, color: THEME.colors.textMuted, lineHeight: 18 },
  stkTxt: { fontSize: 12, color: '#059669', fontWeight: '600' },
  methodRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  methodIcon: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  methodIconTxt: { fontSize: 18, fontWeight: '700' },
  methodInfo: { flex: 1 },
  methodName: { fontSize: 14, fontWeight: '600', color: THEME.colors.textDark },
  methodSub: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: THEME.colors.border, justifyContent: 'center', alignItems: 'center' },
  radioActive: { borderColor: THEME.colors.primary },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: THEME.colors.primary },
  habitRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  habitInfo: { flexDirection: 'row', alignItems: 'flex-start', flex: 1, marginRight: 12 },
  habitIcon: { fontSize: 20, marginRight: 10 },
  habitTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark },
  habitSub: { fontSize: 12, color: THEME.colors.textMuted, marginTop: 2, lineHeight: 18 },
  toggle: { padding: 4 },
  toggleTrack: { width: 48, height: 28, borderRadius: 14, backgroundColor: '#CBD5E1', padding: 2 },
  toggleTrackOn: { backgroundColor: THEME.colors.primary },
  toggleThumb: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#FFF' },
  toggleThumbOn: { transform: [{ translateX: 20 }] },
  secRow: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#F0FDF4', padding: 12, borderRadius: 10, marginBottom: 16 },
  secIcon: { fontSize: 16, marginRight: 8, color: THEME.colors.accentGreen },
  secTxt: { flex: 1, fontSize: 11, color: '#065F46', lineHeight: 16 },
  depositBtn: { backgroundColor: THEME.colors.primary, padding: 18, borderRadius: THEME.radius.button, alignItems: 'center', marginBottom: 12 },
  depositBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  pinNote: { textAlign: 'center', fontSize: 12, color: THEME.colors.textMuted, marginBottom: 8 },
});