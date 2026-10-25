import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../../constants/theme';

const VAULT_BALANCE = 20408.12;

const GOALS = [
  {
    id: '1', name: 'Term 2 Tuition', status: 'Active', child: 'Malia Wanjiku • Grade 1',
    current: 10000, target: 15000, pct: 65, autoRule: 'KES 100 daily via M-Pesa',
    targetDate: '15 July 2025', remaining: 5000, color: '#005F4B',
  },
  {
    id: '2', name: 'School Uniform Set', status: 'Active', child: 'Malkia Nyawira • Term 2 Pass',
    current: 2400, target: 3000, pct: 80, autoRule: null,
    targetDate: '20 July 2025', remaining: 600, color: '#10B981',
  },
  {
    id: '3', name: 'School Bus Transport', status: 'Active', child: 'Malia Wanjiku • Grade 2 Pass',
    current: 1225, target: 3500, pct: 35, autoRule: 'Round-ups enabled',
    targetDate: '10 August 2025', remaining: 2275, color: '#3B82F6',
  },
  {
    id: '4', name: 'Hot Lunch Program', status: 'Almost Complete', child: 'Both Children • Malia & Malkia',
    current: 6783, target: 7500, pct: 90, autoRule: null,
    targetDate: '05 July 2025 (Next week)', remaining: 717, color: '#8B5CF6',
  },
];

export default function SavingsScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Text style={styles.headerTitle}>EDUFORT PARENT</Text>

      <View style={styles.vaultCard}>
        <View style={styles.vaultTop}>
          <Text style={styles.vaultLabel}>EDUCATION VAULT</Text>
          <View style={styles.lockBadge}>
            <Text style={styles.lockTxt}>🔒 Locked & Protected</Text>
          </View>
        </View>
        <Text style={styles.vaultBal}>KES {VAULT_BALANCE.toLocaleString()}</Text>
        <Text style={styles.vaultSub}>Total Education Vault Balance</Text>
        <View style={styles.shieldRow}>
          <Text style={styles.shieldTxt}>🛡️ Goal locked balances are safe from personal spend withdrawals.</Text>
        </View>
        <View style={styles.vaultBtns}>
          <TouchableOpacity style={styles.createBtn}>
            <Text style={styles.createBtnTxt}>＋ Create New Goal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recBtn}>
            <Text style={styles.recBtnTxt}>📋</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.momentumCard}>
        <View style={styles.momentumLeft}>
          <Text style={styles.momentumEmoji}>⚡</Text>
          <View style={styles.momentumBody}>
            <Text style={styles.momentumTitle}>Daily Micro-Momentum</Text>
            <Text style={styles.momentumSub}>Small daily amounts protect big futures. Saving just KES 50 today keeps Malia in class without stress.</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.depositBtn} onPress={() => navigation.navigate('QuickDeposit')}>
          <Text style={styles.depositBtnTxt}>⚡ Quick Deposit KES 50</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.activeHeader}>
        <Text style={styles.activeTitle}>Active Goals</Text>
        <Text style={styles.activeCount}>4 on track</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}><Text style={styles.tabActiveTxt}>All (4)</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabTxt}>Tuition</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabTxt}>Transport & Lunch</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabTxt}>Uniform</Text></TouchableOpacity>
      </ScrollView>

      {GOALS.map((g) => (
        <View key={g.id} style={styles.goalCard}>
          <View style={styles.goalTop}>
            <View style={styles.goalIconWrap}>
              <Text style={styles.goalIconEmoji}>{g.id === '1' ? '🎓' : g.id === '2' ? '👕' : g.id === '3' ? '🚌' : '🍽️'}</Text>
            </View>
            <View style={styles.goalTitleWrap}>
              <Text style={styles.goalName}>{g.name}</Text>
              <Text style={styles.goalChild}>{g.child}</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: g.status === 'Active' ? '#D1FAE5' : '#FEF3C7' }]}>
              <Text style={[styles.statusTxt, { color: g.status === 'Active' ? '#065F46' : '#92400E' }]}>{g.status}</Text>
            </View>
            <Text style={styles.moreDots}>⋮</Text>
          </View>

          <Text style={styles.goalAmt}>KES {g.current.toLocaleString()} <Text style={styles.goalTarget}>/ KES {g.target.toLocaleString()}</Text></Text>
          <Text style={styles.goalPctTxt}>{g.pct}%</Text>
          <View style={styles.goalTrack}>
            <View style={[styles.goalFill, { width: `${g.pct}%`, backgroundColor: g.color }]} />
          </View>

          {g.autoRule && (
            <View style={styles.autoRow}>
              <Text style={styles.autoIcon}>🔄</Text>
              <Text style={styles.autoTxt}>Auto-save rule: {g.autoRule}</Text>
            </View>
          )}

          <View style={styles.goalMetaRow}>
            <View>
              <Text style={styles.metaLbl}>Target Date</Text>
              <Text style={styles.metaVal}>{g.targetDate}</Text>
            </View>
            {g.remaining && (
              <View>
                <Text style={styles.metaLbl}>Remaining gap</Text>
                <Text style={[styles.metaVal, { color: g.color, fontWeight: '700' }]}>KES {g.remaining.toLocaleString()}</Text>
              </View>
            )}
          </View>

          <View style={styles.goalBtns}>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnTxt}>＋ Add Funds</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editBtnTxt}>✎ Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn}>
              <Text style={styles.menuBtnTxt}>⋮⋮</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {GOALS.find(g => g.id === '4') && (
        <View style={styles.completeCard}>
          <View style={styles.completeLeft}>
            <Text style={styles.completeEmoji}>🍽️</Text>
            <View>
              <Text style={styles.completeTitle}>Hot Lunch Program</Text>
              <Text style={styles.completeSub}>Almost Complete!</Text>
            </View>
          </View>
          <Text style={styles.completePct}>90%</Text>
          <TouchableOpacity style={styles.completeBtn}>
            <Text style={styles.completeBtnTxt}>✓ Complete Goal • Deposit KES 717</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.quickHeader}>
        <Text style={styles.quickTitle}>One-Tap Quick Save via M-Pesa</Text>
        <Text style={styles.quickSub}>9 Instant lock</Text>
      </View>
      <View style={styles.quickGrid}>
        <TouchableOpacity style={styles.quickCard}>
          <Text style={styles.quickAmt}>+ KES 100</Text>
          <Text style={styles.quickLbl}>Chai savings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickCard}>
          <Text style={styles.quickAmt}>+ KES 250</Text>
          <Text style={styles.quickLbl}>Weekly habit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.quickCard, styles.quickCardActive]}>
          <Text style={styles.quickAmtActive}>+ KES 500</Text>
          <Text style={styles.quickLblActive}>Power boost</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  headerTitle: { fontSize: 13, fontWeight: '700', color: THEME.colors.textMuted, letterSpacing: 1, marginBottom: 12 },
  vaultCard: { backgroundColor: '#0F2922', borderRadius: 16, padding: 20, marginBottom: 16 },
  vaultTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  vaultLabel: { color: '#94A3B8', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  lockBadge: { backgroundColor: '#065F46', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 12 },
  lockTxt: { color: '#FFF', fontSize: 10, fontWeight: '600' },
  vaultBal: { color: '#FFF', fontSize: 32, fontWeight: '800', marginVertical: 4 },
  vaultSub: { color: '#94A3B8', fontSize: 12, marginBottom: 10 },
  shieldRow: { backgroundColor: 'rgba(255,255,255,0.08)', padding: 10, borderRadius: 8, marginBottom: 16 },
  shieldTxt: { color: '#94A3B8', fontSize: 11, lineHeight: 16 },
  vaultBtns: { flexDirection: 'row', gap: 10 },
  createBtn: { flex: 1, backgroundColor: '#10B981', padding: 14, borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  createBtnTxt: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  recBtn: { width: 48, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  recBtnTxt: { fontSize: 18 },
  momentumCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 20, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  momentumLeft: { flexDirection: 'row', alignItems: 'flex-start', flex: 1, marginRight: 12 },
  momentumEmoji: { fontSize: 22, marginRight: 10 },
  momentumBody: { flex: 1 },
  momentumTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark, marginBottom: 4 },
  momentumSub: { fontSize: 12, color: THEME.colors.textMuted, lineHeight: 18 },
  depositBtn: { backgroundColor: '#10B981', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  depositBtnTxt: { color: '#FFF', fontSize: 12, fontWeight: '700' },
  activeHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  activeTitle: { fontSize: 17, fontWeight: '700', color: THEME.colors.textDark },
  activeCount: { fontSize: 12, color: THEME.colors.textMuted },
  tabs: { flexDirection: 'row', marginBottom: 16, gap: 8 },
  tab: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20, backgroundColor: THEME.colors.cardBackground, borderWidth: 1, borderColor: THEME.colors.border },
  tabActive: { backgroundColor: THEME.colors.primary, borderColor: THEME.colors.primary },
  tabActiveTxt: { color: '#FFF', fontSize: 12, fontWeight: '600' },
  tabTxt: { color: THEME.colors.textMuted, fontSize: 12, fontWeight: '600' },
  goalCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 14, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  goalTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  goalIconWrap: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  goalIconEmoji: { fontSize: 20 },
  goalTitleWrap: { flex: 1 },
  goalName: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark },
  goalChild: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginRight: 10 },
  statusTxt: { fontSize: 10, fontWeight: '700' },
  moreDots: { fontSize: 16, color: THEME.colors.textMuted },
  goalAmt: { fontSize: 20, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 2 },
  goalTarget: { fontSize: 14, fontWeight: '400', color: THEME.colors.textMuted },
  goalPctTxt: { fontSize: 12, fontWeight: '700', color: THEME.colors.textMuted, marginBottom: 6 },
  goalTrack: { height: 6, backgroundColor: '#F1F5F9', borderRadius: 3, overflow: 'hidden', marginBottom: 12 },
  goalFill: { height: '100%', borderRadius: 3 },
  autoRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0FDF4', padding: 8, borderRadius: 8, marginBottom: 12 },
  autoIcon: { fontSize: 14, marginRight: 6 },
  autoTxt: { fontSize: 11, color: '#065F46', flex: 1 },
  goalMetaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  metaLbl: { fontSize: 11, color: THEME.colors.textMuted },
  metaVal: { fontSize: 13, fontWeight: '600', color: THEME.colors.textDark, marginTop: 2 },
  goalBtns: { flexDirection: 'row', gap: 8 },
  addBtn: { flex: 1, backgroundColor: THEME.colors.primary, padding: 12, borderRadius: 10, alignItems: 'center' },
  addBtnTxt: { color: '#FFF', fontSize: 13, fontWeight: '700' },
  editBtn: { width: 70, backgroundColor: THEME.colors.cardBackground, borderWidth: 1, borderColor: THEME.colors.border, padding: 12, borderRadius: 10, alignItems: 'center' },
  editBtnTxt: { color: THEME.colors.textMuted, fontSize: 13, fontWeight: '600' },
  menuBtn: { width: 44, backgroundColor: THEME.colors.cardBackground, borderWidth: 1, borderColor: THEME.colors.border, padding: 12, borderRadius: 10, alignItems: 'center' },
  menuBtnTxt: { color: THEME.colors.textMuted, fontSize: 14 },
  completeCard: { backgroundColor: '#ECFDF5', borderRadius: 14, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: '#A7F3D0' },
  completeLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 12 },
  completeEmoji: { fontSize: 24, marginRight: 10 },
  completeTitle: { fontSize: 14, fontWeight: '700', color: THEME.colors.textDark },
  completeSub: { fontSize: 11, color: THEME.colors.textMuted, marginTop: 2 },
  completePct: { fontSize: 18, fontWeight: '800', color: THEME.colors.accentGreen, marginBottom: 8 },
  completeBtn: { backgroundColor: THEME.colors.primary, padding: 14, borderRadius: 10, alignItems: 'center' },
  completeBtnTxt: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  quickHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  quickTitle: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark },
  quickSub: { fontSize: 11, color: THEME.colors.textMuted },
  quickGrid: { flexDirection: 'row', gap: 10 },
  quickCard: { flex: 1, backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 16, alignItems: 'center', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  quickAmt: { fontSize: 16, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 4 },
  quickLbl: { fontSize: 11, color: THEME.colors.textMuted },
  quickCardActive: { backgroundColor: THEME.colors.primary },
  quickAmtActive: { color: '#FFF' },
  quickLblActive: { color: 'rgba(255,255,255,0.85)' },
});