import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { THEME } from '../constants/theme';

import HomeDashboardScreen from '../screens/dashboard/HomeDashboardScreen';
import ChildLedgerScreen from '../screens/dashboard/ChildLedgerScreen';
import SavingsScreen from '../screens/dashboard/SavingsScreen';
import MoreScreen from '../screens/dashboard/MoreScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#005F4B',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: styles.tabBarLayout,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ color, focused }) => {
          let iconSymbol = '•';
          if (route.name === 'HomeHub') iconSymbol = '🏠';
          else if (route.name === 'FeesHub') iconSymbol = '🎓';
          else if (route.name === 'SavingsHub') iconSymbol = '💳';
          else if (route.name === 'MoreHub') iconSymbol = '⠿';

          return (
            <Text style={{ fontSize: 22, color: focused ? '#005F4B' : '#94A3B8' }}>
              {iconSymbol}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="HomeHub" component={HomeDashboardScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="FeesHub" component={ChildLedgerScreen} options={{ tabBarLabel: 'Fees' }} initialParams={{ childId: 'global', childName: 'All Children' }} />
      <Tab.Screen name="SavingsHub" component={SavingsScreen} options={{ tabBarLabel: 'Savings' }} />
      <Tab.Screen name="MoreHub" component={MoreScreen} options={{ tabBarLabel: 'More' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLayout: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
    height: 64,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabLabel: { fontSize: 11, fontWeight: '600', marginTop: 2 },
});