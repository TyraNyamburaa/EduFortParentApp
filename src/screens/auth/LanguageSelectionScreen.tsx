import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';

const REGIONAL_LANGUAGES = [
  { code: 'en', label: 'English', sub: 'English (UK & Kenya)', defaultValue: true },
  { code: 'sw', label: 'Kiswahili', sub: 'Jifunze na uweke akiba kwa urahisi' },
  { code: 'luo', label: 'Luo', sub: 'Kano konyo puonjruok' },
  { code: 'gik', label: 'Gĩkūyũ', sub: 'Kũiga mbeca cia mathomo' },
  { code: 'kal', label: 'Kalenjin', sub: 'Koter konyit ne somanet' },
  { code: 'som', label: 'Af Somali / Oromiffa', sub: 'Kaydinta waxbarashada carruurta' }
];

export default function LanguageSelectionScreen({ navigation }: any) {
  const [selected, setSelected] = useState('en');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressHeader}>
        <Text style={styles.stepCounter}>Step 1 of 5</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.sectionHeader}>ONBOARDING</Text>
        <Text style={styles.mainTitle}>Choose your preferred language</Text>
        <Text style={styles.subText}>Select the language you are most comfortable using for SMS reminders and school fee savings tracking.</Text>

        {REGIONAL_LANGUAGES.map((lang) => (
          <TouchableOpacity 
            key={lang.code}
            style={[styles.langCard, selected === lang.code && styles.activeCard]}
            onPress={() => setSelected(lang.code)}
          >
            <View style={styles.langMeta}>
              <Text style={styles.langName}>{lang.label}</Text>
              <Text style={styles.langSub}>{lang.sub}</Text>
            </View>
            <View style={[styles.checkCircle, selected === lang.code && styles.checkCircleActive]}>
              {selected === lang.code && <View style={styles.innerDot} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footerAction}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('PhoneRegistration')}>
          <Text style={styles.primaryBtnTxt}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  progressHeader: { paddingHorizontal: 24, paddingTop: 16 },
  stepCounter: { color: '#0D6EFD', fontWeight: '600', fontSize: 13 },
  scroll: { paddingHorizontal: 24, paddingBottom: 100 },
  sectionHeader: { fontSize: 11, fontWeight: '700', color: '#64748B', marginTop: 16 },
  mainTitle: { fontSize: 24, fontWeight: '700', color: '#1E293B', marginTop: 8 },
  subText: { fontSize: 14, color: '#64748B', marginTop: 8, marginBottom: 24, lineHeight: 20 },
  langCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: '#F8FAFC', borderRadius: 12, marginVertical: 6, borderWidth: 1, borderColor: '#E2E8F0' },
  activeCard: { borderColor: THEME.colors.primary, backgroundColor: '#F0FDF4' },
  langMeta: { flex: 1 },
  langName: { fontSize: 16, fontWeight: '600', color: '#1E293B' },
  langSub: { fontSize: 12, color: '#64748B', marginTop: 2 },
  checkCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#CBD5E1', justifyContent: 'center', alignItems: 'center' },
  checkCircleActive: { borderColor: THEME.colors.primary },
  innerDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: THEME.colors.primary },
  footerAction: { padding: 24, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderColor: '#E2E8F0' },
  primaryBtn: { backgroundColor: THEME.colors.primary, padding: 16, borderRadius: THEME.radius.button, alignItems: 'center' },
  primaryBtnTxt: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' }
});
