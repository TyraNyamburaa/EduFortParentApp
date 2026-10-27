import { Image, StyleProp, ImageStyle } from "react-native";

/**
 * EduFort icon system — semantic names mapped to the asset library.
 * No emoji anywhere in the app; decorative graphics come from assets.
 */
export const ICONS = {
  // People
  mother: require("../../assets/mother.png"),
  father: require("../../assets/father.png"),
  girl: require("../../assets/mother.png"),
  teacher: require("../../assets/mother.png"),
  assistant: require("../../assets/Personal-online-assistant-at-desk.png"),
  guardian: require("../../assets/guardian.png"),

  // Navigation / system
  settings: require("../../assets/settings.png"),
  more: require("../../assets/more.png"),
  hamburger: require("../../assets/hamburger.png"),
  children: require("../../assets/children-enrolled.png"),
  kenya: require("../../assets/kenya.png"),
  language: require("../../assets/languages.png"),
  location: require("../../assets/location.png"),

  // Education
  tuition: require("../../assets/tuition.png"),
  school: require("../../assets/school.png"),
  exam: require("../../assets/exam.png"),
  activities: require("../../assets/activities.png"),
  lunch: require("../../assets/lunch.png"),
  uniform: require("../../assets/uniform.png"),
  transport: require("../../assets/transport.png"),
  ledger: require("../../assets/ledger.png"),
  calendar: require("../../assets/calendar.png"),
  clock: require("../../assets/clock.png"),
  pause: require("../../assets/pause.png"),
  fees: require("../../assets/fees.png"),

  // Money
  wallet: require("../../assets/wallet.png"),
  money: require("../../assets/money.png"),
  autopay: require("../../assets/automatic-payment.png"),
  save: require("../../assets/save.png"),
  savings: require("../../assets/savings.png"),
  goal: require("../../assets/smart-forecasts.png"),
  chart: require("../../assets/smart-forecasts.png"),
  receipt: require("../../assets/print.png"),
  print: require("../../assets/print.png"),
  mpesa: require("../../assets/mpesa-logo.png"),
  airtel: require("../../assets/airtel-money.png"),

  // Actions / status
  bolt: require("../../assets/daily.png"),
  sync: require("../../assets/sync.png"),
  shield: require("../../assets/verified.png"),
  verified: require("../../assets/verified.png"),
  lock: require("../../assets/lock.png"),
  fingerprint: require("../../assets/fingerprint.png"),
  clipboard: require("../../assets/ledger.png"),
  tip: require("../../assets/parent-tip.png"),
  mobile: require("../../assets/mobile.png"),
  scan: require("../../assets/scan.png"),
  search: require("../../assets/search.png"),
  attach: require("../../assets/attachment.png"),
  share: require("../../assets/share.png"),
  download: require("../../assets/download.png"),
  edit: require("../../assets/edit.png"),
  close: require("../../assets/close.png"),
  check: require("../../assets/check.png"),
  warning: require("../../assets/warning.png"),
  complete: require("../../assets/complete.png"),
  cheers: require("../../assets/cheers.png"),
  notification: require("../../assets/notification.png"),
  call: require("../../assets/call.png"),
  chat: require("../../assets/message.png"),
  email: require("../../assets/email.png"),
  add: require("../../assets/add-child.png"),
  home: require("../../assets/splash-logo.png"),
  link: require("../../assets/share.png"),
  info: require("../../assets/parent-tip.png"),
  document: require("../../assets/print.png"),
  pass: require("../../assets/exam.png"),
  history: require("../../assets/history.png"),
  logout: require("../../assets/logout.png"),
  id: require("../../assets/national-id-card.png"),
  daily: require("../../assets/daily-wage.png"),
  weekly: require("../../assets/business-wage.png"),
  monthly: require("../../assets/monthly-wage.png"),
  business: require("../../assets/business-wage.png"),
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps {
  name: IconName;
  /** Rendered width/height in px */
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export default function Icon({ name, size = 20, style }: IconProps) {
  const source = ICONS[name] ?? ICONS.verified;
  return (
    <Image
      source={source}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
}
