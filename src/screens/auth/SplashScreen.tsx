import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const autoRoute = setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 3500);
    return () => clearTimeout(autoRoute);
  }, []);

  return (
    <LinearGradient
      colors={['#0A231C', '#0D382A', '#061913']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        
        {/* Main Branding Block Content Panel */}
        <View style={styles.centerBlock}>
          {/* Logo Container Container Block */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Edufort</Text>
          </View>

          {/* Core Slogan Label Typography */}
          <Text style={styles.sloganText}>
            Save for your child’s education term-by-term, shilling by shilling.
          </Text>

          {/* Goal Metric Tracking Panel Layer */}
          <View style={styles.goalCard}>
            <View style={styles.cardHeaderRow}>
              <View style={styles.iconAndTitle}>
                <View style={styles.iconCircle}>
                  <Text style={styles.academicIcon}>🎓</Text>
                </View>
                <View style={styles.titleColumn}>
                  <Text style={styles.goalTitle}>Term 1 Goal</Text>
                  <Text style={styles.goalSubtitle}>Grade 1 Tuition</Text>
                </View>
              </View>
              <View style={styles.financialSummaryColumn}>
                <Text style={styles.amountText}>KES 14,200</Text>
                <Text style={styles.fundingPercent}>92% funded</Text>
              </View>
            </View>

            {/* Micro-Progress Bar Engine Metrics Tracker Layout */}
            <View style={styles.progressTrack}>
              <View style={styles.progressBar} />
            </View>
          </View>

          {/* Real-time Processing Connection Status Indicator Row */}
          <View style={styles.syncStatusBlock}>
            <Text style={styles.syncStatusText}>Connecting securely</Text>
            <ActivityIndicator size="small" color="#10B981" style={styles.networkSpinner} />
          </View>
        </View>

        {/* Regulatory Central Bank Legal Attributions Grid Panel */}
        <View style={styles.legalFooter}>
          <Text style={styles.legalHeader}>🛡️ Central Bank of Kenya Custodial Framework</Text>
          <Text style={styles.legalSubDetails}>
            Regulated custodial savings partner • 100% principal protected
          </Text>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24 },
  centerBlock: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' },
  logoContainer: { backgroundColor: '#FFFFFF', paddingHorizontal: 28, paddingVertical: 18, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 12, elevation: 5, marginBottom: 32 },
  logoText: { fontSize: 24, fontWeight: '700', color: '#0F172A', letterSpacing: -0.5 },
  sloganText: { fontSize: 16, color: '#94A3B8', textAlign: 'center', paddingHorizontal: 24, lineHeight: 24, marginBottom: 40 },
  goalCard: { backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 16, borderWith: 1, borderColor: 'rgba(255, 255, 255, 0.08)', padding: 18, width: '100%' },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  iconAndTitle: { flexDirection: 'row', alignItems: 'center' },
  iconCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(16, 185, 129, 0.15)', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  academicIcon: { fontSize: 16 },
  titleColumn: { justifyContent: 'center' },
  goalTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  goalSubtitle: { color: '#64748B', fontSize: 12, marginTop: 2 },
  financialSummaryColumn: { alignItems: 'flex-end' },
  amountText: { color: '#34D399', fontSize: 16, fontWeight: '700' },
  fundingPercent: { color: '#34D399', fontSize: 12, fontWeight: '500', marginTop: 2 },
  progressTrack: { height: 5, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 3, marginTop: 16, overflow: 'hidden' },
  progressBar: { height: '100%', width: '92%', backgroundColor: '#10B981', borderRadius: 3 },
  syncStatusBlock: { flexDirection: 'row', alignItems: 'center', marginTop: 32 },
  syncStatusText: { color: '#10B981', fontSize: 14, fontWeight: '500', letterSpacing: 0.2 },
  networkSpinner: { marginLeft: 10 },
  legalFooter: { width: '100%', alignItems: 'center', paddingBottom: 24 },
  legalHeader: { color: '#F8FAFC', fontSize: 13, fontWeight: '600' },
  legalSubDetails: { color: '#475569', fontSize: 11, textAlign: 'center', marginTop: 6, lineHeight: 16, paddingHorizontal: 20 }
});
