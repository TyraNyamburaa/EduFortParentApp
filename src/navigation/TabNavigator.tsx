import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Icon, { IconName } from "../components/Icon";

import HomeDashboardScreen from "../screens/dashboard/HomeDashboardScreen";
import ChildLedgerScreen from "../screens/dashboard/ChildLedgerScreen";
import SavingsScreen from "../screens/dashboard/SavingsScreen";
import MoreScreen from "../screens/dashboard/MoreScreen";

const Tab = createBottomTabNavigator();

const TAB_ICONS: Record<string, IconName> = {
  HomeHub: "home",
  FeesHub: "tuition",
  SavingsHub: "wallet",
  MoreHub: "settings",
};

/** Bounces the icon + raises a dot under the active tab */
function TabIcon({ name, focused }: { name: string; focused: boolean }) {
  const scale = useSharedValue(1);
  const dot = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(focused ? 1.15 : 1, {
      damping: 12,
      stiffness: 260,
    });
    dot.value = withSpring(focused ? 1 : 0, { damping: 18, stiffness: 300 });
  }, [focused, scale, dot]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const dotStyle = useAnimatedStyle(() => ({
    opacity: dot.value,
    transform: [{ scale: dot.value }],
  }));

  return (
    <View style={styles.iconWrap}>
      <Animated.View style={iconStyle}>
        <Icon
          name={TAB_ICONS[name]}
          size={22}
          style={{ opacity: focused ? 1 : 0.5 }}
        />
      </Animated.View>
      <Animated.View style={[styles.activeDot, dotStyle]} />
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#005F4B",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: styles.tabBarLayout,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ focused }) => (
          <TabIcon name={route.name} focused={focused} />
        ),
      })}
    >
      <Tab.Screen
        name="HomeHub"
        component={HomeDashboardScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="FeesHub"
        component={ChildLedgerScreen}
        options={{ tabBarLabel: "Fees" }}
        initialParams={{ childId: "global", childName: "All Children" }}
      />
      <Tab.Screen
        name="SavingsHub"
        component={SavingsScreen}
        options={{ tabBarLabel: "Savings" }}
      />
      <Tab.Screen
        name="MoreHub"
        component={MoreScreen}
        options={{ tabBarLabel: "More" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLayout: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderColor: "#EDE7DA",
    height: 68,
    paddingBottom: 10,
    paddingTop: 8,
  },
  tabLabel: { fontSize: 11, fontWeight: "600", marginTop: 2 },
  iconWrap: { alignItems: "center", justifyContent: "center" },
  activeDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#005F4B",
    marginTop: 3,
  },
});
