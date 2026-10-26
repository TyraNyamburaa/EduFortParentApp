import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Top Feature Graphic Showcase */}
        <View style={styles.imageCard}>
          <Image
            source={require('../../../assets/edufort.jpg')}
            style={imageStyles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.floatingBadge}>
            <Text style={styles.badgeTitle}>Term 2 Tuition Goal</Text>
            <Text style={styles.badgeVal}>KES 14,200 Secured</Text>
          </View>
        </View>

        {/* Student Tracker Card */}
        <View style={styles.studentCard}>
          <View style={styles.avatar}><Text style={styles.avatarTxt}>A</Text></View>
          <View style={styles.studentInfo}>
            <Text style={styles.studentName}>Chelsy Kerubo</Text>
            <Text style={styles.studentClass}>Grade 6 • Peter Kibukosya</Text>
          </View>
          <View style={styles.targetWrapper}>
            <Text style={styles.targetLabel}>Target Met</Text>
            <Text style={styles.targetPercent}>82%</Text>
          </View>
        </View>

        {/* App Title Header */}
        <Text style={styles.mainHeading}>Save for your child&apos;s education one step at a time.</Text>

        {/* Value Proposition Rows */}
        <View style={styles.propRow}>
          <Image source={require('../../../assets/money.png')} style={styles.iconImage} resizeMode="cover" />
          <View style={styles.propTextBlocks}>
            <Text style={styles.propHeadline}>KES 10 - KES 100 Daily Micro-savings</Text>
            <Text style={styles.propSub}>Stash small change directly from your daily MPesa float.</Text>
          </View>
        </View>

        <View style={styles.propRow}>
          <Image source={require('../../../assets/sync.png')} style={styles.iconImage} resizeMode="cover" />
          <View style={styles.propTextBlocks}>
            <Text style={styles.propHeadline}>Zero Arrears & Direct School Sync</Text>
            <Text style={styles.propSub}>Instant digital receipts straight to the school bursar ledger.</Text>
          </View>
        </View>

        {/* Primary Interaction Pipeline Actions */}
        <TouchableOpacity 
          style={styles.getStartedBtn} 
          onPress={() => navigation.navigate('LanguageSelection')}
        >
          <Text style={styles.getStartedText}>Get Started →</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginLinkButton}
          onPress={() => navigation.navigate('WelcomeBack')}
        >
          <Text style={styles.loginLinkText}>Already have an account? <Text style={{fontWeight: 'bold'}}>Log In</Text></Text>
        </TouchableOpacity>

        <Text style={styles.complianceNote}>Protected by CBK-regulated micro-escrow standards</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const imageStyles = StyleSheet.create({
  heroImage: { width: '100%', height: '100%' },
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { padding: 24 },
  imageCard: { height: 200, width: '100%', borderRadius: 16, overflow: 'hidden', backgroundColor: '#E2E8F0', position: 'relative' },
  floatingBadge: { position: 'absolute', bottom: 12, left: 12, right: 12, backgroundColor: 'rgba(0,0,0,0.7)', padding: 12, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between' },
  badgeTitle: { color: '#FFF', fontWeight: '500' },
  badgeVal: { color: '#10B981', fontWeight: '700' },
  studentCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', padding: 16, borderRadius: 12, marginTop: 16, borderWidth: 1, borderColor: '#E2E8F0' },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#A7F3D0', justifyContent: 'center', alignItems: 'center' },
  avatarTxt: { color: '#065F46', fontWeight: 'bold' },
  studentInfo: { flex: 1, marginLeft: 12 },
  studentName: { fontSize: 16, fontWeight: '600', color: '#1E293B' },
  studentClass: { fontSize: 12, color: '#64748B', marginTop: 2 },
  targetWrapper: { alignItems: 'flex-end' },
  targetLabel: { fontSize: 11, color: '#64748B' },
  targetPercent: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  mainHeading: { fontSize: 24, fontWeight: '700', color: '#1E293B', marginTop: 24, marginBottom: 16 },
  propRow: { flexDirection: 'row', marginVertical: 12, alignItems: 'center' },
  iconImage: { width: 36, height: 36, borderRadius: 8, backgroundColor: '#E0F2FE', marginRight: 12 },
  propTextBlocks: { flex: 1, marginLeft: 12 },
  propHeadline: { fontSize: 15, fontWeight: '600', color: '#1E293B' },
  propSub: { fontSize: 13, color: '#64748B', marginTop: 2 },
  getStartedBtn: { backgroundColor: THEME.colors.primary, borderRadius: THEME.radius.button, padding: 16, alignItems: 'center', marginTop: 24 },
  getStartedText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  loginLinkButton: { padding: 16, alignItems: 'center', marginTop: 8 },
  loginLinkText: { color: '#475569', fontSize: 14 },
  complianceNote: { fontSize: 11, color: '#94A3B8', textAlign: 'center', marginTop: 16 }
});
