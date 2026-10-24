import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { THEME } from '../../constants/theme';

export default function ChildLedgerScreen({ navigation }: any) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Fee Ledger Tracker</Text>
      <Text style={styles.subtitle}>Coming soon — real-time bursar statements.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC', padding: 24 },
  title: { fontSize: 20, fontWeight: '700', color: '#1E293B', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#64748B', textAlign: 'center' },
});
