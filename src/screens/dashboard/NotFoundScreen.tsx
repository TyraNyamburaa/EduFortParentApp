import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default function NotFoundScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.errCode}>404</Text>
        <Text style={styles.errTitle}>Document Content Not Found</Text>
        <Text style={styles.errMessage}>
          The payment reference link, statement trace ID, or section parameter profile is missing or out of sync.
        </Text>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('HomeDashboard')}
        >
          <Text style={styles.backText}>Return to Terminal Control Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  innerView: { flex: 1, padding: 32, justifyContent: 'center', alignItems: 'center' },
  errCode: { fontSize: 72, fontWeight: '800', color: '#CBD5E1' },
  errTitle: { fontSize: 20, fontWeight: '700', color: '#1E293B', marginTop: 16 },
  errMessage: { fontSize: 14, color: '#64748B', textAlign: 'center', marginTop: 8, lineHeight: 22, paddingHorizontal: 16 },
  backButton: { backgroundColor: '#2563EB', paddingHorizontal: 20, paddingVertical: 14, borderRadius: 10, marginTop: 32 },
  backText: { color: '#FFFFFF', fontWeight: '600', fontSize: 15 }
});
