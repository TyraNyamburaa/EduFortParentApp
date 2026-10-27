import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Image,
} from "react-native";
import { THEME } from "../../constants/theme";
import Icon from "../../components/Icon";

export default function WelcomeBackScreen({ navigation }: any) {
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.headerBlock}>
        <Image
          source={require("../../../assets/splash-logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome Back, Parent</Text>
        <Text style={styles.subtitle}>
          Access your children&apos;s fee ledgers & secure micro-savings
          account.
        </Text>

        <View style={styles.trustRow}>
          <Image
            source={require("../../../assets/verified.png")}
            style={styles.trustIcon}
            resizeMode="cover"
          />
          <Text style={styles.trustTxt}>
            CBK Escrow Custody • 256-bit Encrypted
          </Text>
        </View>
      </View>

      <View style={styles.fieldCard}>
        <View style={styles.fieldTop}>
          <Text style={styles.fieldLbl}>Registered Phone Number</Text>
          <View style={styles.activeBadge}>
            <Text style={styles.activeTxt}>Active SIM</Text>
          </View>
        </View>
        <View style={styles.phoneRow}>
          <TouchableOpacity style={styles.countryPicker} onPress={() => {}}>
            <Text style={styles.flag}>
              <Icon name="kenya" size={16} /> +254
            </Text>
            <Image
              source={require("../../../assets/drop-down.png")}
              style={styles.dropArrow}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TextInput
            style={styles.phoneInput}
            value={phone}
            onChangeText={setPhone}
            placeholder="+254 XXX XXX XXX"
            placeholderTextColor={THEME.colors.textMuted}
          />
          <Image
            source={require("../../../assets/check.png")}
            style={styles.checkBadge}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.fieldCard}>
        <View style={styles.fieldTop}>
          <Text style={styles.fieldLbl}>EduFort Security PIN (4-digit)</Text>
          <TouchableOpacity>
            <Text style={styles.forgotTxt}>Forgot PIN?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pinFieldWrap}>
          <TextInput
            style={styles.pinInput}
            value={pin}
            onChangeText={setPin}
            secureTextEntry={!showPin}
            maxLength={4}
            placeholder="••••"
            placeholderTextColor={THEME.colors.textMuted}
            textAlign="left"
          />
          <TouchableOpacity
            style={styles.pinEyeBtn}
            onPress={() => setShowPin(!showPin)}
          >
            <Text style={styles.pinEyeTxt}>{showPin ? "HIDE" : "SHOW"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rememberRow}>
        <View style={styles.rememberLeft}>
          <Image
            source={require("../../../assets/mobile.png")}
            style={styles.rememberIcon}
            resizeMode="cover"
          />
          <Text style={styles.rememberTxt}>Remember this phone</Text>
        </View>
        <Switch
          value={remember}
          onValueChange={setRemember}
          trackColor={{ false: "#CBD5E1", true: "#86EFAC" }}
          thumbColor={remember ? THEME.colors.secondary : "#FFF"}
        />
      </View>

      <TouchableOpacity
        style={styles.signBtn}
        onPress={() => navigation.navigate("HomeDashboard")}
      >
        <Text style={styles.signBtnTxt}>Sign In to Dashboard</Text>
        <Text style={styles.signBtnArrow}>→</Text>
      </TouchableOpacity>

      <Text style={styles.fastLbl}>FAST SIGN-IN</Text>

      <View style={styles.fastCentered}>
        <TouchableOpacity style={styles.fastItem}>
          <View style={styles.fastIconWrap}>
            <Image
              source={require("../../../assets/fingerprint.png")}
              style={styles.fastIcon}
              resizeMode="cover"
            />
          </View>
          <View style={styles.fastBody}>
            <Text style={styles.fastTitle}>Touch ID / Fingerprint</Text>
            <Text style={styles.fastSub}>Instant one-tap parent access</Text>
          </View>
          <Text style={styles.fastChevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fastItem}>
          <View style={styles.fastIconWrap2}>
            <Image
              source={require("../../../assets/message.png")}
              style={styles.fastIcon2}
              resizeMode="cover"
            />
          </View>
          <View style={styles.fastBody}>
            <Text style={styles.fastTitle}>
              Send WhatsApp Instant One-Time Passcode
            </Text>
          </View>
          <Text style={styles.fastChevron}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.newParentWrap}>
        <Text style={styles.newParentTxt}>
          New parent on the EduFort network?{" "}
          <Text
            style={styles.linkTxt}
            onPress={() => navigation.navigate("LanguageSelection")}
          >
            Open School Fee Account
          </Text>
        </Text>
      </View>

      <View style={styles.helpCard}>
        <Image
          source={require("../../../assets/warning.png")}
          style={styles.helpIcon}
          resizeMode="cover"
        />
        <View style={styles.helpBody}>
          <Text style={styles.helpTxt}>
            Need help signing in or fees clearance? Contact your School Bursar
            Liaison or call toll-free
          </Text>
          <Text style={styles.helpPhone}>0800 720 000</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.colors.backgroundLight },
  scroll: { padding: 16, paddingTop: 56, paddingBottom: 40 },
  headerBlock: { alignItems: "center", marginBottom: 32 },
  logoImage: { width: 90, height: 28, marginBottom: 20, alignSelf: "center" },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: THEME.colors.textDark,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: THEME.colors.textMuted,
    lineHeight: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  trustRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 10,
    padding: 12,
    marginBottom: 24,
  },
  trustIcon: { width: 20, height: 20, marginRight: 8 },
  trustTxt: { fontSize: 12, color: "#065F46", fontWeight: "600" },
  fieldCard: {
    backgroundColor: THEME.colors.cardBackground,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  fieldTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  fieldLbl: {
    fontSize: 13,
    color: THEME.colors.textMuted,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  activeBadge: {
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  activeTxt: { fontSize: 9, color: "#065F46", fontWeight: "700" },
  phoneRow: { flexDirection: "row", alignItems: "center" },
  flag: { fontSize: 20, marginRight: 10 },
  countryPicker: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  dropArrow: { width: 16, height: 16, marginLeft: 4 },
  phoneIcon: { width: 28, height: 20, borderRadius: 4, marginRight: 10 },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: THEME.colors.textDark,
    textAlign: "left",
  },
  checkBadge: { width: 24, height: 24, borderRadius: 12, overflow: "hidden" },
  checkTxt: { color: "#FFF", fontSize: 13, fontWeight: "700" },
  pinFieldWrap: {
    position: "relative",
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: 12,
    marginBottom: 8,
  },
  pinInput: {
    fontSize: 28,
    fontWeight: "800",
    color: THEME.colors.textDark,
    padding: 16,
    paddingRight: 90,
    textAlign: "left",
    letterSpacing: 6,
  },
  pinActions: { flexDirection: "row", justifyContent: "flex-end" },
  eyeBtn: { padding: 4 },
  eyeTxt: { fontSize: 16 },
  pinEyeBtn: {
    position: "absolute",
    right: 12,
    top: 14,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#F1F5F9",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pinEyeTxt: { fontSize: 11, fontWeight: "700", color: THEME.colors.textMuted },
  forgotTxt: { fontSize: 12, color: THEME.colors.primary, fontWeight: "600" },
  rememberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.colors.cardBackground,
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  rememberLeft: { flexDirection: "row", alignItems: "center" },
  rememberIcon: { width: 20, height: 20, marginRight: 10 },
  rememberTxt: {
    fontSize: 13,
    color: THEME.colors.textDark,
    fontWeight: "600",
  },
  signBtn: {
    backgroundColor: THEME.colors.primary,
    padding: 18,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  signBtnTxt: { color: "#FFF", fontSize: 16, fontWeight: "700" },
  signBtnArrow: { color: "#FFF", fontSize: 18, marginLeft: 8 },
  fastLbl: {
    fontSize: 12,
    color: THEME.colors.textMuted,
    fontWeight: "700",
    letterSpacing: 0.5,
    marginBottom: 14,
    textAlign: "center",
  },
  fastItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.colors.cardBackground,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  fastIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#D1FAE5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    overflow: "hidden",
  },
  fastIcon: { width: 44, height: 44 },
  fastIconWrap2: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    overflow: "hidden",
  },
  fastIcon2: { width: 44, height: 44 },
  fastBody: { flex: 1 },
  fastTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: THEME.colors.textDark,
    marginBottom: 3,
  },
  fastSub: { fontSize: 12, color: THEME.colors.textMuted },
  fastChevron: { fontSize: 24, color: THEME.colors.textMuted },
  fastCentered: { alignItems: "center", marginBottom: 12 },
  newParentTxt: {
    fontSize: 13,
    color: THEME.colors.textMuted,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 18,
  },
  newParentWrap: { alignItems: "center", marginBottom: 20 },
  linkTxt: { color: THEME.colors.primary, fontWeight: "700" },
  helpCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#EFF6FF",
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: "#3B82F6",
    marginBottom: 24,
  },
  helpIcon: { width: 20, height: 20, marginRight: 10, color: "#2563EB" },
  helpBody: { flex: 1, marginLeft: 10 },
  helpTxt: { flex: 1, fontSize: 12, color: "#1E40AF", lineHeight: 18 },
  helpPhone: {
    fontSize: 13,
    fontWeight: "800",
    color: THEME.colors.primary,
    marginTop: 4,
  },
});
