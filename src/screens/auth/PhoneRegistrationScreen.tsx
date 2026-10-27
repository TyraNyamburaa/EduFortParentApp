import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';
import { supabase } from '../../utils/supabase';
import Icon from '../../components/Icon';

export default function PhoneRegistrationScreen({ navigation }: any) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const STEP = 2;
  const TOTAL = 5;
  const pct = (STEP / TOTAL) * 100;

  const triggerSmsOtpFlow = async () => {
    if (phoneNumber.length < 9) {
      return Alert.alert('Invalid Account Input', 'Verify your Kenyan network routing digits.');
    }
    
    // Auto-formatting configuration logic parsing prefix parameters
    const formattedLine = phoneNumber.startsWith('+254') ? phoneNumber : `+254${phoneNumber.replace(/^0/, '')}`;
    
    setLoading(true);

    if (__DEV__) {
      navigation.navigate('OtpVerification', { verifiedPhone: formattedLine });
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({ phone: formattedLine });

      if (error) {
        Alert.alert('Routing Failed', error.message);
      } else {
        navigation.navigate('OtpVerification', { verifiedPhone: formattedLine });
      }
    } catch (err: any) {
      Alert.alert('Routing Failed', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressHeader}>
        <Text style={styles.stepIndicator}>STEP {STEP} OF {TOTAL}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${pct}%` }]} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Enter your phone number</Text>
        <Text style={styles.body}>We&apos;ll send a one-time verification code via SMS to confirm your account and link your M-Pesa wallet.</Text>
        
        <View style={styles.networkBadge}>
          <Text style={styles.networkText}>● M-Pesa Express & Airtel Money supported</Text>
        </View>

        <Text style={styles.inputLabel}>Mobile Phone Number</Text>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity style={styles.prefixWrapper}>
            <Text style={styles.prefixTxt}><Icon name="kenya" size={16} /> +254</Text>
            <Image source={require('../../../assets/drop-down.png')} style={styles.dropDownIcon} resizeMode="cover" />
          </TouchableOpacity>
          <TextInput
            style={styles.inputField}
            placeholder="0712 345 678"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={styles.cryptoRow}>
          <Image source={require('../../../assets/lock.png')} style={styles.lockIcon} resizeMode="cover" />
          <Text style={styles.cryptoNotice}>Your number is encrypted and never shared. Standard SMS rates apply.</Text>
        </View>

        <View style={styles.flexSpacer} />

        <TouchableOpacity style={styles.submitBtn} onPress={triggerSmsOtpFlow} disabled={loading}>
          <Text style={styles.submitBtnTxt}>Send Verification Code →</Text>
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
  heading: { fontSize: 24, fontWeight: '700', color: '#1E293B', marginTop: 8 },
  body: { fontSize: 14, color: '#64748B', marginTop: 8, lineHeight: 20 },
  networkBadge: { backgroundColor: '#F0FDF4', padding: 8, borderRadius: 6, marginTop: 12, alignSelf: 'flex-start' },
  networkText: { color: '#15803D', fontSize: 12, fontWeight: '500' },
  inputLabel: { fontSize: 13, fontWeight: '600', color: '#475569', marginTop: 32, marginBottom: 8 },
  phoneInputContainer: { flexDirection: 'row', borderWidth: 1.5, borderColor: '#E2E8F0', borderRadius: THEME.radius.input, overflow: 'hidden' },
  prefixWrapper: { backgroundColor: '#F8FAFC', paddingHorizontal: 16, justifyContent: 'center', borderRightWidth: 1, borderColor: '#E2E8F0', flexDirection: 'row', alignItems: 'center' },
  prefixTxt: { fontSize: 16, color: '#334155', fontWeight: '500', marginRight: 6 },
  dropDownIcon: { width: 14, height: 14 },
  inputField: { flex: 1, padding: 16, fontSize: 16, color: '#0F172A', fontWeight: '600' },
  cryptoRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  lockIcon: { width: 16, height: 16, marginRight: 8 },
  cryptoNotice: { fontSize: 12, color: '#94A3B8', marginTop: 0 },
  flexSpacer: { flex: 1 },
  submitBtn: { backgroundColor: THEME.colors.primary, padding: 16, borderRadius: THEME.radius.button, alignItems: 'center', marginBottom: 16 },
  submitBtnTxt: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' }
});
