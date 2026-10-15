import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../../constants/theme";
import { supabase } from "../../utils/supabase";

const RELATIONSHIPS = ["Mother", "Father", "Guardian", "Other Sponsor"];
const INCOME_RHYTHMS = [
  {
    id: "DAILY_WAGE",
    title: "Daily Wage",
    sub: "Casual or daily payout",
    icon: "📅",
  },
  {
    id: "WEEKLY_CHAMA",
    title: "Weekly / Chama",
    sub: "Cycle payouts",
    icon: "🗓️",
  },
  {
    id: "MONTHLY_SALARY",
    title: "Monthly Salary",
    sub: "End-of-month pay",
    icon: "🏦",
  },
  {
    id: "BUSINESS_TRADE",
    title: "Business & Trade",
    sub: "Flexible cash-flow",
    icon: "🏪",
  },
];

export default function ParentProfileSetupScreen({ navigation }: any) {
  const [fullName, setFullName] = useState("");
  const [relationship, setRelationship] = useState("Mother");
  const [county, setCounty] = useState("Nairobi County");
  const [language, setLanguage] = useState("English");
  const [incomeRhythm, setIncomeRhythm] = useState("WEEKLY_CHAMA");
  const [loading, setLoading] = useState(false);

  const saveProfileData = async () => {
    if (!fullName.trim()) {
      return Alert.alert(
        "Missing Field",
        "Please enter your full official name.",
      );
    }

    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return Alert.alert(
        "Session Expired",
        "Please re-authenticate your account session.",
      );
    }

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      full_name: fullName,
      relationship_to_student: relationship,
      county_region: county,
      preferred_language: language,
      income_rhythm: incomeRhythm,
      updated_at: new Date().toISOString(),
    });

    setLoading(false);

    if (error) {
      Alert.alert("Save Failed", error.message);
    } else {
      // Cleanly route onward to Step 5 of 5
      navigation.navigate("AddChildAndSchool");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Dynamic Scannable Header Tracker */}
      <View style={styles.progressBarWrapper}>
        <View style={styles.progressLabelRow}>
          <Text style={styles.stepIndicator}>● STEP 4 OF 5</Text>
          <Text style={styles.percentText}>80% Completed</Text>
        </View>
        <View style={styles.trackBackground}>
          <View style={styles.activeTrackBar} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.mainTitle}>Parent Profile Setup</Text>
        <Text style={styles.subtitle}>
          Tell us a bit about yourself so schools and bursars can clearly
          identify your fee settlements and milestone contributions.
        </Text>

        {/* Full Name Section */}
        <Text style={styles.fieldLabel}>Full Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Wanjiru Kamau"
          placeholderTextColor="#94A3B8"
          value={fullName}
          onChangeText={setFullName}
        />
        <Text style={styles.inputCaption}>
          As it appears on your National ID or official school records.
        </Text>

        {/* Relationship Section */}
        <Text style={styles.fieldLabel}>Relationship to Student</Text>
        <View style={styles.relationshipGrid}>
          {RELATIONSHIPS.map((rel) => (
            <TouchableOpacity
              key={rel}
              style={[
                styles.relCapsule,
                relationship === rel && styles.relCapsuleActive,
              ]}
              onPress={() => setRelationship(rel)}
            >
              <Text
                style={[
                  styles.relText,
                  relationship === rel && styles.relTextActive,
                ]}
              >
                {rel === "Mother"
                  ? "👩‍👦 "
                  : rel === "Father"
                    ? "👨‍👦 "
                    : rel === "Guardian"
                      ? "🛡️ "
                      : "🤝 "}
                {rel}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* County Selection Box */}
        <Text style={styles.fieldLabel}>County / Region</Text>
        <TouchableOpacity style={styles.selectorDropdown}>
          <Text style={styles.selectorValueText}>📍 {county}</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </TouchableOpacity>

        {/* Preferred Language Selection Box */}
        <Text style={styles.fieldLabel}>Preferred Language</Text>
        <TouchableOpacity style={styles.selectorDropdown}>
          <Text style={styles.selectorValueText}>文A {language}</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </TouchableOpacity>

        {/* Primary Income Rhythm Grid (2x2 Matrix) */}
        <View style={styles.incomeHeaderRow}>
          <Text style={styles.fieldLabelNoMargin}>Primary Income Rhythm</Text>
          <View style={styles.recommendedBadge}>
            <Text style={styles.recommendedText}>Recommended</Text>
          </View>
        </View>
        <Text style={styles.inputCaptionSpacing}>
          Select how you usually receive money. We will shape small, stress-free
          micro-deposit suggestions to match your reality.
        </Text>

        <View style={styles.incomeGrid}>
          {INCOME_RHYTHMS.map((rhythm) => (
            <TouchableOpacity
              key={rhythm.id}
              style={[
                styles.rhythmCard,
                incomeRhythm === rhythm.id && styles.rhythmCardActive,
              ]}
              onPress={() => setIncomeRhythm(rhythm.id)}
            >
              <View style={styles.rhythmHeader}>
                <Text style={styles.rhythmIcon}>{rhythm.icon}</Text>
                <View
                  style={[
                    styles.radioCircle,
                    incomeRhythm === rhythm.id && styles.radioCircleActive,
                  ]}
                >
                  {incomeRhythm === rhythm.id && (
                    <View style={styles.radioDot} />
                  )}
                </View>
              </View>
              <Text style={styles.rhythmTitle}>{rhythm.title}</Text>
              <Text style={styles.rhythmSub}>{rhythm.sub}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Dignity First Promise Callout Panel */}
        <View style={styles.promiseCard}>
          <Text style={styles.promiseTitle}>🛡️ Dignity First Promise</Text>
          <Text style={styles.promiseBody}>
            Edufort personalizes gentle reminders to fit your actual income
            rhythm for continuous progress.
          </Text>
        </View>

        {/* Primary Execution Target CTA */}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={saveProfileData}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.submitBtnText}>Continue to Add Child →</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  progressBarWrapper: {
    paddingHorizontal: 24,
    paddingTop: 16,
    marginBottom: 12,
  },
  progressLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepIndicator: { fontSize: 11, fontWeight: "700", color: "#15803D" },
  percentText: { fontSize: 12, fontWeight: "600", color: "#64748B" },
  trackBackground: {
    height: 6,
    backgroundColor: "#F1F5F9",
    borderRadius: 3,
    marginTop: 8,
    overflow: "hidden",
  },
  activeTrackBar: {
    height: "100%",
    width: "80%",
    backgroundColor: "#10B981",
    borderRadius: 3,
  },
  scroll: { paddingHorizontal: 24, paddingBottom: 40 },
  mainTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 12,
  },
  subtitle: { fontSize: 14, color: "#64748B", marginTop: 8, lineHeight: 20 },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 24,
    marginBottom: 8,
  },
  fieldLabelNoMargin: { fontSize: 14, fontWeight: "700", color: "#1E293B" },
  textInput: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    color: "#0F172A",
    fontWeight: "500",
  },
  inputCaption: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 6,
    fontStyle: "italic",
  },
  inputCaptionSpacing: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 16,
    lineHeight: 18,
  },
  relationshipGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 4,
  },
    relCapsule: {
    width: "48%",
    backgroundColor: "#F8FAFC",
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    marginVertical: 6,
  },
  relCapsuleActive: {
    borderColor: THEME.colors.primary,
    backgroundColor: "#E6F4F0",
  },
  relText: { fontSize: 14, fontWeight: "500", color: "#475569" },
  relTextActive: { color: THEME.colors.primary, fontWeight: "600" },
  selectorDropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    borderRadius: 10,
    padding: 16,
  },
  selectorValueText: { fontSize: 15, color: "#1E293B", fontWeight: "500" },
  dropdownArrow: { fontSize: 10, color: "#64748B" },
  incomeHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
  },
  recommendedBadge: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  recommendedText: { color: "#2563EB", fontSize: 11, fontWeight: "700" },
  incomeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  rhythmCard: {
    width: "48%",
    backgroundColor: "#F8FAFC",
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    height: 110,
    justifyContent: "space-between",
  },
  rhythmCardActive: {
    borderColor: THEME.colors.primary,
    backgroundColor: "#E6F4F0",
  },
  rhythmHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rhythmIcon: { fontSize: 20 },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#CBD5E1",
    justifyContent: "center",
    alignItems: "center",
  },
  radioCircleActive: { borderColor: THEME.colors.primary },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: THEME.colors.primary,
  },
  rhythmTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 8,
  },
  rhythmSub: { fontSize: 11, color: "#64748B", marginTop: 2 },
  promiseCard: {
    backgroundColor: "#F0FDF4",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DCFCE7",
    marginTop: 24,
    marginBottom: 32,
  },
  promiseTitle: {
    color: "#16A34A",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 4,
  },
  promiseBody: { color: "#166534", fontSize: 13, lineHeight: 18 },
  submitBtn: {
    backgroundColor: THEME.colors.primary,
    padding: 18,
    borderRadius: THEME.radius.button,
    alignItems: "center",
    marginBottom: 20,
  },
  submitBtnText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
});
