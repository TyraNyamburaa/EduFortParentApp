import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constants/theme';

// Import your existing screen modules
import HomeDashboardScreen from '../screens/dashboard/HomeDashboardScreen';
import ChildLedgerScreen from '../screens/dashboard/ChildLedgerScreen';
import SavingsScreen from '../screens/dashboard/SavingsScreen';
import CalendarScreen from '../screens/dashboard/CalendarScreen';

// Temporary placeholder containers for unbuilt structural tabs
function HistoryPlaceholder() { return <View style={styles.center}><Text>Transaction Logs Audit</Text></View>; }
function MorePlaceholder() { return <View style={styles.center}><Text>Configuration Panel Engine</Text></View>; }

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#005F4B',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: styles.tabBarLayout,
        tabBarLabelStyle:styles.tabLabel,
        tabBarIcon: ({ color, focused }) => {
          let iconSymbol = '•';
          if (route.name === 'HomeHub') iconSymbol = '🏠';
          else if (route.name === 'FeesHub') iconSymbol = '🎓';
          else if (route.name === 'SavingsHub') iconSymbol = '💳';
          else if (route.name === 'HistoryHub') iconSymbol = '📅';
          else if (route.name === 'MoreHub') iconSymbol = '⠿';

          return (
            <Text style={{ fontSize: 20, color: focused ? '#005F4B' : '#94A3B8' }}>
              {iconSymbol}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="HomeHub" component={HomeDashboardScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="FeesHub" component={ChildLedgerScreen} options={{ tabBarLabel: 'Fees' }} initialParams={{ childId: 'global', childName: 'All Children' }} />
      <Tab.Screen name="SavingsHub" component={SavingsScreen} options={{ tabBarLabel: 'Savings' }} />
      <Tab.Screen name="HistoryHub" component={HistoryPlaceholder} options={{ tabBarLabel: 'History' }} />
      <Tab.Screen name="MoreHub" component={MorePlaceholder} options={{ tabBarLabel: 'More' }} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ tabBarLabel: 'Calendar', tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>📅</Text> }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' },
  tabBarLayout: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
    height: 64,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabLabel: { fontSize: 11, fontWeight: '600', marginTop: 2 }
});
