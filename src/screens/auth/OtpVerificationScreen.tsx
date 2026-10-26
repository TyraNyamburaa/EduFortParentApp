import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';
import { supabase } from '../../utils/supabase';

export default function OtpVerificationScreen({ route, navigation }: any) {
  const { verifiedPhone } = route.params;
  const [pinToken, setPinToken] = useState('');
  const [loading, setLoading] = useState(false);
  const STEP = 3;
  const TOTAL = 5;
  const pct = (STEP / TOTAL) * 100;

  const processSecureAuthVerify = async () => {
    if (pinToken.length !== 4) {
      return Alert.alert('Pin Exception', 'Provide the absolute 4-digit authentication matrix string token.');
    }

    setLoading(true);

    if (__DEV__) {
      navigation.replace('ParentProfileSetup');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone: verifiedPhone,
        token: pinToken,
        type: 'sms'
      });

      if (error) {
        Alert.alert('Authentication Mismatch', error.message);
      } else if (data.session) {
        navigation.replace('ParentProfileSetup');
      }
    } catch (err: any) {
      Alert.alert('Authentication Mismatch', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressHeader}>
        <Text style={styles.stepIndicator}>Step {STEP} of {TOTAL}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${pct}%` }]} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Verify your phone</Text>
        <Text style={styles.subtitle}>Enter 4-digit code sent to {verifiedPhone}</Text>

        <TextInput
          style={styles.hiddenInputSelector}
          keyboardType="number-pad"
          maxLength={4}
          value={pinToken}
          onChangeText={setPinToken}
          autoFocus={true}
        />

        {/* 4-Box Split UI Layout Matrix */}
        <View style={styles.boxContainer}>
          {[0, 1, 2, 3].map((index) => (
            <View key={index} style={[styles.pinBox, pinToken.length === index && styles.pinBoxActive]}>
              <Text style={styles.pinText}>{pinToken[index] || ''}</Text>
            </View>
          ))}
        </View>

        <View style={styles.resendRow}>
          <Image source={require('../../../assets/sync.png')} style={styles.resendIcon} resizeMode="cover" />
          <Text style={styles.resendTimerText}>Resend SMS code in 0:22</Text>
        </View>
        <View style={styles.whatsappRow}>
          <Image source={require('../../../assets/message.png')} style={styles.whatsappIcon} resizeMode="cover" />
          <Text style={styles.alternativeLink}>Send via WhatsApp instead</Text>
        </View>

        <View style={styles.complianceRow}>
          <Image source={require('../../../assets/verified.png')} style={styles.complianceIcon} resizeMode="cover" />
          <Text style={styles.complianceText}>Account will be securely verified upon entering code</Text>
        </View>

        <View style={styles.spacer} />

        <TouchableOpacity style={styles.actionBtn} onPress={processSecureAuthVerify}>
          <Text style={styles.actionBtnTxt}>Verify OTP →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  progressHeader: { paddingHorizontal: 24, paddingTop: 2, marginBottom: 16 },
  progressTrack: { height: 6, backgroundColor: '#E2E8F0', borderRadius: 3, overflow: 'hidden', marginTop: 4 },
  progressFill: { height: '100%', backgroundColor: THEME.colors.primary, borderRadius: 3 },
  stepIndicator: { fontSize: 13, fontWeight: '600', color: '#0D6EFD', marginBottom: 4 },
  content: { flex: 1, padding: 24 },
  title: { fontSize: 24, fontWeight: '700', color: '#1E293B', marginTop: 8 },
  subtitle: { fontSize: 14, color: '#64748B', marginTop: 4, marginBottom: 32 },
  hiddenInputSelector: { position: 'absolute', opacity: 0, width: 1, height: 1 },
  boxContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 24 },
  pinBox: { width: 56, height: 56, borderWidth: 2, borderColor: '#E2E8F0', borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' },
  pinBoxActive: { borderColor: THEME.colors.primary, backgroundColor: '#FFFFFF' },
  pinText: { fontSize: 22, fontWeight: '700', color: '#0F172A' },
  resendRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 8 },
  resendIcon: { width: 16, height: 16, marginRight: 6 },
  resendTimerText: { textAlign: 'center', color: '#64748B', fontSize: 13, marginVertical: 0 },
  whatsappRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 8 },
  whatsappIcon: { width: 16, height: 16, marginRight: 6 },
  alternativeLink: { textAlign: 'center', color: THEME.colors.primary, fontSize: 13, fontWeight: '600', marginVertical: 0 },
  complianceRow: { backgroundColor: '#F8FAFC', padding: 12, borderRadius: 8, marginTop: 32, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
  complianceIcon: { width: 18, height: 18, marginRight: 8 },
  complianceText: { color: '#475569', fontSize: 12, textAlign: 'center' },
  spacer: { flex: 1 },
  actionBtn: { backgroundColor: THEME.colors.primary, padding: 16, borderRadius: THEME.radius.button, alignItems: 'center', marginBottom: 16 },
  actionBtnTxt: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' }
});
