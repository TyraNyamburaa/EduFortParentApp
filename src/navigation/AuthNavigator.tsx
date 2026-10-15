import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/auth/SplashScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LanguageSelectionScreen from '../screens/auth/LanguageSelectionScreen';
import PhoneRegistrationScreen from '../screens/auth/PhoneRegistrationScreen';
import OtpVerificationScreen from '../screens/auth/OtpVerificationScreen';
import NotFoundScreen from '../screens/dashboard/NotFoundScreen';
import ParentProfileSetupScreen from '../screens/profile/ParentProfileSetupScreen';


const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
      <Stack.Screen name="PhoneRegistration" component={PhoneRegistrationScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
      <Stack.Screen name="ParentProfileSetup" component={ParentProfileSetupScreen} />
      <Stack.Screen name="AddChildAndSchool" component={NotFoundScreen} />
      <Stack.Screen name="HomeDashboard" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
