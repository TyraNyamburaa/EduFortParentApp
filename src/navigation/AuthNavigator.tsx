import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Onboarding layouts
import SplashScreen from '../screens/auth/SplashScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LanguageSelectionScreen from '../screens/auth/LanguageSelectionScreen';
import PhoneRegistrationScreen from '../screens/auth/PhoneRegistrationScreen';
import OtpVerificationScreen from '../screens/auth/OtpVerificationScreen';

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
      
      {/* Root entry node links directly into the global Bottom Tabs shell layout */}
      <Stack.Screen name="HomeDashboard" component={TabNavigator} />
    </Stack.Navigator>
  );
}
