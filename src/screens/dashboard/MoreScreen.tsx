import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../../constants/theme';

const MENU_ITEMS = [
  { id: 'calendar', icon: '📅', label: 'Term Fee Calendar', sub: 'Academic cycle & deadlines', color: '#005F4B' },
  { id: 'plan', icon: '📊', label: 'Financial Planning', sub: 'Cash flow & simulator', color: '#10B981' },
  { id: 'updates', icon: '🔔', label: 'Updates & Cheers', sub: 'Nudges, milestones & receipts', color: '#3B82F6' },
  { id: 'help', icon: '📞', label: 'Help & Support', sub: 'Direct assistance & FAQ', color: '#EF4444' },
  { id: 'profile', icon: '👤', label: 'Profile & Settings', sub: 'Household, security & preferences', color: '#8B5CF6' },
  { id: 'receipt', icon: '🧾', label: 'Receipts', sub: 'Official PDF receipts', color: '#F59E0B' },
];

export default function MoreScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Text style={styles.title}>More</Text>
      <Text style={styles.subtitle}>Everything else in one place</Text>

      {MENU_ITEMS.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.id.charAt(0).toUpperCase() + item.id.slice(1))}
        >
          <View style={[styles.menuIcon, { backgroundColor: item.color + '22' }]}>
            <Text style={styles.menuIconTxt}>{item.icon}</Text>
          </View>
          <View style={styles.menuBody}>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Text style={styles.menuSub}>{item.sub}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  title: { fontSize: 26, fontWeight: '800', color: THEME.colors.textDark, marginBottom: 4 },
  subtitle: { fontSize: 14, color: THEME.colors.textMuted, marginBottom: 24 },
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.colors.cardBackground, borderRadius: 14, padding: 16, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4 },
  menuIcon: { width: 48, height: 48, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  menuIconTxt: { fontSize: 24 },
  menuBody: { flex: 1 },
  menuLabel: { fontSize: 16, fontWeight: '700', color: THEME.colors.textDark },
  menuSub: { fontSize: 12, color: THEME.colors.textMuted, marginTop: 3 },
  chevron: { fontSize: 26, color: THEME.colors.textMuted, fontWeight: '300' },
});