import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { THEME } from '../../constants/theme';
import { supabase } from '../../utils/supabase';

export default function PhoneRegistrationScreen({ navigation }: any) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const triggerSmsOtpFlow = async () => {
    if (phoneNumber.length < 9) {
      return Alert.alert('Invalid Account Input', 'Verify your Kenyan network routing digits.');
    }
    
    // Auto-formatting configuration logic parsing prefix parameters
    const formattedLine = phoneNumber.startsWith('+254') ? phoneNumber : `+254${phoneNumber.replace(/^0/, '')}`;
    
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ phone: formattedLine });
    setLoading(false);

    if (error) {
      Alert.alert('Routing Failed', error.message);
    } else {
      navigation.navigate('OtpVerification', { verifiedPhone: formattedLine });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressHeader}>
        <Text style={styles.stepText}>STEP 2 OF 5</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Enter your phone number</Text>
        <Text style={styles.body}>We'll send a one-time verification code via SMS to confirm your account and link your M-Pesa wallet.</Text>
        
        <View style={styles.networkBadge}>
          <Text style={styles.networkText}>● M-Pesa Express & Airtel Money supported</Text>
        </View>

        <Text style={styles.inputLabel}>Mobile Phone Number</Text>
        <View style={styles.phoneInputContainer}>
          <View style={styles.prefixWrapper}>
            <Text style={styles.prefixTxt}>🇰🇪 +254</Text>
          </View>
          <TextInput
            style={styles.inputField}
            placeholder="0712 345 678"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Text style={styles.cryptoNotice}>🔒 Your number is encrypted and never shared. Standard SMS rates apply.</Text>

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
  progressHeader: { paddingHorizontal: 24, paddingTop: 16 },
  stepText: { color: '#10B981', fontWeight: '700', fontSize: 12 },
  content: { flex: 1, padding: 24 },
  heading: { fontSize: 24, fontWeight: '700', color: '#1E293B', marginTop: 8 },
  body: { fontSize: 14, color: '#64748B', marginTop: 8, lineHeight: 20 },
  networkBadge: { backgroundColor: '#F0FDF4', padding: 8, borderRadius: 6, marginTop: 12, alignSelf: 'flex-start' },
  networkText: { color: '#15803D', fontSize: 12, fontWeight: '500' },
  inputLabel: { fontSize: 13, fontWeight: '600', color: '#475569', marginTop: 32, marginBottom: 8 },
  phoneInputContainer: { flexDirection: 'row', borderWidth: 1.5, borderColor: '#E2E8F0', borderRadius: THEME.radius.input, overflow: 'hidden' },
  prefixWrapper: { backgroundColor: '#F8FAFC', paddingHorizontal: 16, justifyContent: 'center', borderRightWidth: 1, borderColor: '#E2E8F0' },
  prefixTxt: { fontSize: 16, color: '#334155', fontWeight: '500' },
  inputField: { flex: 1, padding: 16, fontSize: 16, color: '#0F172A', fontWeight: '600' },
  cryptoNotice: { fontSize: 12, color: '#94A3B8', marginTop: 12 },
  flexSpacer: { flex: 1 },
  submitBtn: { backgroundColor: THEME.colors.primary, padding: 16, borderRadius: THEME.radius.button, alignItems: 'center', marginBottom: 16 },
  submitBtnTxt: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' }
});
