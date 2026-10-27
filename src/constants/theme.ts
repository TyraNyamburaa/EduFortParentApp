/**
 * EduFort brand palette — the ONLY colors allowed in the app.
 * Primary:    Deep Lagoon  #0F2A2A  (dark surfaces, hero cards)
 * Secondary:  Teal Wave    #00BFA6  (progress, active states, CTAs)
 *             Aqua Silk    #D9FAF4  (soft tint backgrounds, highlights)
 * Neutrals (grays only — no invented hues).
 */
export const THEME = {
  colors: {
    // Brand
    primary: "#0F2A2A", // Deep Lagoon
    secondary: "#00BFA6", // Teal Wave
    secondarySoft: "#D9FAF4", // Aqua Silk

    // Neutrals
    textDark: "#1E293B",
    textMuted: "#64748B",
    backgroundLight: "#F8FAFC",
    cardBackground: "#FFFFFF",
    border: "#E2E8F0",
    white: "#FFFFFF",

    // Semantic (tinted neutrals, same hue family as the brand teals)
    successSoft: "#D9FAF4",
    onPrimary: "#FFFFFF",
  },
  radius: {
    card: 12,
    button: 8,
    input: 8,
  },
};
