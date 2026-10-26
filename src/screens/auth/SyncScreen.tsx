import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { THEME } from '../../constants/theme';

export default function SyncScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.topBar}>
        <Text style={styles.rail}>🔒 256-BIT TLS BANK RAIL</Text>
        <View style={styles.liveBadge}><View style={styles.liveDot} /><Text style={styles.liveTxt}>Live Handshake</Text></View>
      </View>

      <View style={styles.ringWrap}>
        <View style={[styles.ring, styles.ringOuter]} />
        <View style={[styles.ring, styles.ringMid]} />
        <View style={styles.ringCenter}>
          <Image source={require('../../../assets/splash-logo.png')} style={styles.ringLogo} resizeMode="contain" />
          <Text style={styles.ringPct}>96%</Text>
        </View>
        <View style={styles.ringDot} />
      </View>

      <Text style={styles.title}>Syncing School Ledger & M-Pesa Float</Text>
      <Text style={styles.subtitle}>Securing your child&apos;s educational records with immutable cryptographic receipts.</Text>

      <View style={styles.statusCard}>
        <View style={styles.statusRow}>
          <View style={styles.statusIconWrap}><Text style={styles.statusIcon}>🏫</Text></View>
          <View style={styles.statusBody}>
            <View style={styles.statusNameRow}>
              <Text style={styles.statusName}>Peter Kibukosya Primary Sc...</Text>
              <View style={styles.connectedBadge}><Text style={styles.connectedTxt}>Connected</Text></View>
            </View>
            <Text style={styles.statusSub}>Direct bursar ledger integration • Grade 4 term reconcile</Text>
          </View>
        </View>
      </View>

      <View style={styles.statusCard}>
        <View style={styles.statusRow}>
          <View style={styles.statusIconWrap2}><Text style={styles.statusIcon2}>🔄</Text></View>
          <View style={styles.statusBody}>
            <View style={styles.statusNameRow}>
              <Text style={styles.statusName}>CBK Escrow Reconciliation</Text>
              <View style={styles.transitBadge}><Text style={styles.transitTxt}>In Transit</Text></View>
            </View>
            <Text style={styles.statusSub}>Central Bank of Kenya custodial trust verification</Text>
          </View>
        </View>
      </View>

      <View style={styles.deltaCard}>
        <View style={styles.deltaLeft}>
          <Text style={styles.deltaIcon}>🌐</Text>
          <Text style={styles.deltaTxt}>Delta-sync active • Offline cache safeguarded</Text>
        </View>
      </View>

      <View style={styles.tipCard}>
        <View style={styles.tipLeft}>
          <Text style={styles.tipIcon}>💡</Text>
          <View>
            <Text style={styles.tipTitle}>PARENT MILESTONE TIP</Text>
            <Text style={styles.tipSub}>Did you know? Saving even KES 20 daily prevents unexpected end-of-term fee strain.</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.continueBtn}>
        <Text style={styles.continueBtnTxt}>Continue in Background</Text>
        <Text style={styles.continueBtnArrow}>→</Text>
      </TouchableOpacity>

      <View style={styles.footerRow}>
        <TouchableOpacity style={styles.footerBtn}><Text style={styles.footerBtnTxt}>Check SMS Receipt</Text></TouchableOpacity>
        <View style={styles.footerDot} />
        <TouchableOpacity style={styles.footerBtn}><Text style={styles.footerBtnTxt}>Bursar Support</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40, alignItems: 'center' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, width: '100%' },
  rail: { fontSize: 11, color: THEME.colors.textMuted, fontWeight: '700', letterSpacing: 0.5 },
  liveBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#D1FAE5', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12 },
  liveDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: THEME.colors.accentGreen, marginRight: 6 },
  liveTxt: { fontSize: 10, color: '#065F46', fontWeight: '700' },
  ringWrap: { width: 220, height: 220, justifyContent: 'center', alignItems: 'center', marginBottom: 32, position: 'relative' },
  ring: { position: 'absolute', borderRadius: 110, borderWidth: 12 },
  ringOuter: { width: 220, height: 220, borderColor: '#E2E8F0' },
  ringMid: { width: 180, height: 180, borderColor: '#005F4B', borderLeftColor: 'transparent', borderTopColor: 'transparent', transform: [{ rotate: '-135deg' }] },
  ringCenter: { width: 140, height: 140, borderRadius: 70, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8 },
  ringLogo: { width: 72, height: 22, marginBottom: 4, alignSelf: 'center' },
  ringPct: { fontSize: 28, fontWeight: '800', color: THEME.colors.primary },
  ringDot: { position: 'absolute', top: 10, right: 60, width: 14, height: 14, borderRadius: 7, backgroundColor: THEME.colors.accentGreen, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  title: { fontSize: 24, fontWeight: '800', color: THEME.colors.textDark, textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: THEME.colors.textMuted, textAlign: 'center', lineHeight: 20, marginBottom: 32 },
  statusCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 12, width: '100%', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  statusIconWrap: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#D1FAE5', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  statusIcon: { fontSize: 22 },
  statusIconWrap2: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#FEF3C7', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  statusIcon2: { fontSize: 22 },
  statusBody: { flex: 1 },
  statusNameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  statusName: { fontSize: 15, fontWeight: '700', color: THEME.colors.textDark, flex: 1 },
  connectedBadge: { backgroundColor: '#D1FAE5', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  connectedTxt: { fontSize: 10, color: '#065F46', fontWeight: '700' },
  transitBadge: { backgroundColor: '#FEF3C7', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  transitTxt: { fontSize: 10, color: '#92400E', fontWeight: '700' },
  statusSub: { fontSize: 12, color: THEME.colors.textMuted },
  deltaCard: { backgroundColor: '#EFF6FF', borderRadius: 10, padding: 12, marginBottom: 16, width: '100%' },
  deltaLeft: { flexDirection: 'row', alignItems: 'center' },
  deltaIcon: { fontSize: 18, marginRight: 10, color: '#2563EB' },
  deltaTxt: { fontSize: 13, color: '#1E40AF', fontWeight: '600' },
  tipCard: { backgroundColor: THEME.colors.cardBackground, borderRadius: 12, padding: 16, marginBottom: 24, width: '100%', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  tipLeft: { flexDirection: 'row', alignItems: 'flex-start' },
  tipIcon: { fontSize: 20, marginRight: 12, color: THEME.colors.accentGreen },
  tipTitle: { fontSize: 12, fontWeight: '700', color: THEME.colors.textDark, letterSpacing: 0.5, marginBottom: 4 },
  tipSub: { fontSize: 12, color: THEME.colors.textMuted, lineHeight: 18 },
  continueBtn: { backgroundColor: THEME.colors.primary, padding: 18, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20, width: '100%', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 },
  continueBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  continueBtnArrow: { color: '#FFF', fontSize: 18, marginLeft: 8 },
  footerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' },
  footerBtn: { padding: 14 },
  footerBtnTxt: { fontSize: 14, color: THEME.colors.textMuted, fontWeight: '600' },
  footerDot: { color: THEME.colors.textMuted, marginHorizontal: 12, fontSize: 14 },
});