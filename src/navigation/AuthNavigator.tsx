import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Onboarding layouts
import SplashScreen from '../screens/auth/SplashScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LanguageSelectionScreen from '../screens/auth/LanguageSelectionScreen';
import PhoneRegistrationScreen from '../screens/auth/PhoneRegistrationScreen';
import OtpVerificationScreen from '../screens/auth/OtpVerificationScreen';
import QuickDepositScreen from '../screens/dashboard/QuickDepositScreen';
import ReceiptScreen from '../screens/dashboard/ReceiptScreen';
import CalendarScreen from '../screens/dashboard/CalendarScreen';
import FinancialPlanScreen from '../screens/dashboard/FinancialPlanScreen';
import UpdatesScreen from '../screens/dashboard/UpdatesScreen';
import HelpScreen from '../screens/dashboard/HelpScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import ReceiptExportScreen from '../screens/dashboard/ReceiptExportScreen';
import ShareReceiptScreen from '../screens/dashboard/ShareReceiptScreen';
import BulkShareScreen from '../screens/dashboard/BulkShareScreen';
import DispatchAuditScreen from '../screens/dashboard/DispatchAuditScreen';
import WelcomeBackScreen from '../screens/auth/WelcomeBackScreen';
import SyncScreen from '../screens/auth/SyncScreen';

// Core functional workflow containers
import ParentProfileSetupScreen from '../screens/profile/ParentProfileSetupScreen';
import AddChildScreen from '../screens/profile/AddChildScreen';
import TabNavigator from './TabNavigator'; // Pull in your new bottom tab shell layout

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
      <Stack.Screen name="PhoneRegistration" component={PhoneRegistrationScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
      <Stack.Screen name="ParentProfileSetup" component={ParentProfileSetupScreen} />
      <Stack.Screen name="AddChildAndSchool" component={AddChildScreen} />
      <Stack.Screen name="QuickDeposit" component={QuickDepositScreen} options={{ headerShown: true, title: 'Quick Deposit M-Pesa', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' } }} />
      <Stack.Screen name="Receipt" component={ReceiptScreen} options={{ headerShown: true, title: 'Official Receipt', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }, animation: 'slide_from_bottom' }} />
      <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: true, title: 'Term Fee Calendar', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' } }} />
      <Stack.Screen name="Plan" component={FinancialPlanScreen} options={{ headerShown: true, title: 'Financial Planning', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' } }} />
      <Stack.Screen name="Updates" component={UpdatesScreen} options={{ headerShown: true, title: 'Updates & Cheers', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }} } />
      <Stack.Screen name="Help" component={HelpScreen} options={{ headerShown: true, title: 'Help & Support', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }} } />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true, title: 'Profile', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }} } />
      <Stack.Screen name="ReceiptExport" component={ReceiptExportScreen} options={{ headerShown: true, title: 'Receipt PDF Export', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }} } />
      <Stack.Screen name="ShareReceipt" component={ShareReceiptScreen} options={{ headerShown: true, title: 'Share via WhatsApp', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }} } />
      <Stack.Screen name="BulkShare" component={BulkShareScreen} options={{ headerShown: true, title: 'Bulk Share Receipts', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }} } />
      <Stack.Screen name="DispatchAudit" component={DispatchAuditScreen} options={{ headerShown: true, title: 'Dispatch Audit Trail', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }} } />
      <Stack.Screen name="WelcomeBack" component={WelcomeBackScreen} options={{ headerShown: true, title: 'Welcome Back', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }} } />
      <Stack.Screen name="Sync" component={SyncScreen} options={{ headerShown: true, title: 'Sync Status', headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#005F4B', headerTitleStyle: { fontWeight: '800' }} } />

      {/* Root entry node links directly into the global Bottom Tabs shell layout */}
      <Stack.Screen name="HomeDashboard" component={TabNavigator} />
    </Stack.Navigator>
  );
}
