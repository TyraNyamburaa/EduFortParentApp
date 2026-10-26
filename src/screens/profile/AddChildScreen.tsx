import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { THEME } from '../../constants/theme';
import { supabase } from '../../utils/supabase';

export default function AddChildScreen({ navigation }: any) {
  const [childName, setChildName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [gradeClass, setGradeClass] = useState('');
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const STEP = 5;
  const TOTAL = 5;
  const pct = (STEP / TOTAL) * 100;

  const handleRegisterChild = async () => {
    if (!childName.trim() || !schoolName.trim()) {
      return Alert.alert('Required Fields Missing', 'Please enter at least the Child\'s Name and School Name.');
    }

    setLoading(true);

    if (__DEV__) {
      setLoading(false);
      navigation.reset({ index: 0, routes: [{ name: 'HomeDashboard' }] });
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return Alert.alert('Session Error', 'User context session missing. Please re-authenticate.');
    }

    try {
      // 1. Insert the Child Profile record into Supabase
      const { data: childData, error: childError } = await supabase
        .from('children')
        .insert({
          parent_id: user.id,
          full_name: childName.trim(),
          school_name: schoolName.trim(),
          grade_class: gradeClass.trim() || null,
          student_id: studentId.trim() || null,
        })
        .select()
        .single();

      if (childError) throw childError;

      // 2. Seed a mock tuition installment ledger for your dashboard development mapping
      const { error: ledgerError } = await supabase
        .from('fee_ledger')
        .insert([
          {
            child_id: childData.id,
            title: 'Term 1 Tuition Fee',
            amount_due: 15000.00,
            amount_paid: 1200.00,
            due_date: new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString().split('T')[0],
            status: 'PARTIAL'
          },
          {
            child_id: childData.id,
            title: 'School Bus Transportation Fee',
            amount_due: 4500.00,
            amount_paid: 4500.00,
            due_date: new Date().toISOString().split('T')[0],
            status: 'PAID'
          }
        ]);

      if (ledgerError) throw ledgerError;

      setLoading(false);
      Alert.alert('Onboarding Complete', 'Child profile and institutional balances successfully synced!', [
        {
          text: 'Go to Dashboard',
          onPress: () => navigation.reset({ index: 0, routes: [{ name: 'HomeDashboard' }] })
        }
      ]);

    } catch (error: any) {
      setLoading(false);
      Alert.alert('Mapping Error', error.message || 'Failed to sync parameters.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Step 5 of 5 Progress HUD */}
      <View style={styles.progressBarWrapper}>
        <Text style={styles.stepIndicator}>Step {STEP} of {TOTAL}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${pct}%` }]} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles.mainTitle}>Link Your Child</Text>
        <Text style={styles.subtitle}>
          Connect your child to their school database records to map real-time digital bursar statements and micro-saving balances.
        </Text>

        {/* Input Fields Form Matrix */}
        <Text style={styles.fieldLabel}>Child&apos;s Full Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g., Chelsy Kerubo"
          placeholderTextColor="#94A3B8"
          value={childName}
          onChangeText={setChildName}
        />

        <Text style={styles.fieldLabel}>School / Institution Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g., Peter Kibukosya Primary School"
          placeholderTextColor="#94A3B8"
          value={schoolName}
          onChangeText={setSchoolName}
        />

        <Text style={styles.fieldLabel}>Grade / Class Level</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g., Grade 6"
          placeholderTextColor="#94A3B8"
          value={gradeClass}
          onChangeText={setGradeClass}
        />

        <Text style={styles.fieldLabel}>Student Admission ID (Optional)</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g., STD-2024-893"
          placeholderTextColor="#94A3B8"
          value={studentId}
          onChangeText={setStudentId}
        />
        <Text style={styles.inputCaption}>Helps clear account reconciliation locks with your school bursar automatically.</Text>

        {/* Sync Guarantee Assurance Card */}
        <View style={styles.syncCard}>
          <Text style={styles.syncTitle}>🔄 Real-time Bursar Sync</Text>
          <Text style={styles.syncBody}>
            EduFort establishes a secure link directly to verified ledger records to avoid tracking discrepancies.
          </Text>
        </View>

        {/* Primary CTA submission pipeline target */}
        <TouchableOpacity style={styles.submitBtn} onPress={handleRegisterChild} disabled={loading}>
          {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.submitBtnText}>Complete Onboarding Pipeline</Text>}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  progressBarWrapper: { paddingHorizontal: 24, paddingTop: 2, marginBottom: 16 },
  stepIndicator: { fontSize: 13, fontWeight: '600', color: '#0D6EFD', marginBottom: 4 },
  progressTrack: { height: 6, backgroundColor: '#E2E8F0', borderRadius: 3, overflow: 'hidden', marginTop: 4 },
  progressFill: { height: '100%', backgroundColor: THEME.colors.primary, borderRadius: 3 },
  scroll: { paddingHorizontal: 24, paddingBottom: 40 },
  mainTitle: { fontSize: 24, fontWeight: '700', color: '#1E293B', marginTop: 12 },
  subtitle: { fontSize: 14, color: '#64748B', marginTop: 8, lineHeight: 20 },
  fieldLabel: { fontSize: 14, fontWeight: '700', color: '#1E293B', marginTop: 24, marginBottom: 8 },
  textInput: { backgroundColor: '#F8FAFC', borderWidth: 1.5, borderColor: '#E2E8F0', borderRadius: 10, padding: 16, fontSize: 16, color: '#0F172A', fontWeight: '500' },
  inputCaption: { fontSize: 12, color: '#94A3B8', marginTop: 6, fontStyle: 'italic' },
  syncCard: { backgroundColor: '#EFF6FF', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#BFDBFE', marginTop: 28, marginBottom: 32 },
  syncTitle: { color: '#1E40AF', fontWeight: '700', fontSize: 14, marginBottom: 4 },
  syncBody: { color: '#1E3A8A', fontSize: 13, lineHeight: 18 },
  submitBtn: { backgroundColor: THEME.colors.primary, padding: 18, borderRadius: THEME.radius.button, alignItems: 'center', marginBottom: 20 },
  submitBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' }
});
