/**
 * One-shot codemod: replaces every emoji-keyed Icon usage with semantic names
 * and strips emojis from JSX text. Run once: node scripts/emoji-codemod.js
 */
const fs = require("fs");
const path = require("path");

const MAP = {
  "👩": "mother",
  "👨": "father",
  "👧": "girl",
  "👩‍🏫": "teacher",
  "😊": "assistant",
  "👤": "settings",
  "👥": "children",
  "🇰🇪": "kenya",
  "🌐": "language",
  "🎓": "tuition",
  "🏫": "school",
  "📝": "exam",
  "⚽": "activities",
  "📖": "ledger",
  "📅": "calendar",
  "⏰": "clock",
  "⏸️": "pause",
  "⏸": "pause",
  "💳": "wallet",
  "💰": "money",
  "💸": "autopay",
  "🏦": "bank",
  "🎯": "goal",
  "📊": "chart",
  "🧾": "receipt",
  "🛒": "cart",
  "⚖️": "scale",
  "⚡": "bolt",
  "🔄": "sync",
  "🛡️": "shield",
  "🛡": "shield",
  "🔒": "lock",
  "🔐": "fingerprint",
  "🔑": "key",
  "📋": "clipboard",
  "💡": "tip",
  "📱": "mobile",
  "📷": "scan",
  "🔍": "search",
  "📎": "attach",
  "📤": "share",
  "📥": "download",
  "⬇️": "download",
  "⬇": "download",
  "✎": "edit",
  "✕": "close",
  "⚙️": "settings",
  "⚙": "settings",
  "🔔": "notification",
  "📬": "mailbox",
  "🎉": "cheers",
  "📞": "call",
  "💬": "chat",
  "📧": "email",
  "📍": "location",
  "➕": "add",
  "🏠": "home",
  "🍽️": "lunch",
  "🍽": "lunch",
  "👕": "uniform",
  "🚌": "transport",
  "🏃": "run",
  "✅": "check",
  "⚠️": "warning",
  "🔗": "link",
  ℹ️: "info",
  "📄": "document",
  "🎫": "pass",
  "🏳️": "flag",
  "✓": "check",
  "⠿": "more",
  "❯": "chevron",
};

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (/\.(tsx?|ts)$/.test(f)) out.push(p);
  }
  return out;
}

let totalReplacements = 0;
for (const file of walk(path.join(__dirname, "..", "src"))) {
  if (file.includes("emoji-codemod")) continue;
  let src = fs.readFileSync(file, "utf8");
  let before = src;

  // 1) <Icon emoji="X" -> <Icon name="semantic"
  for (const [emo, name] of Object.entries(MAP)) {
    src = src.split(`emoji="${emo}"`).join(`name="${name}"`);
    src = src.split(`emoji='${emo}'`).join(`name='${name}'`);
    src = src.split(`emoji={${JSON.stringify(emo)}}`).join(`name="${name}"`);
  }

  // 2) data arrays: icon: 'X' -> icon: 'semantic' (objects feeding Icon name=)
  for (const [emo, name] of Object.entries(MAP)) {
    src = src.split(`icon: '${emo}'`).join(`icon: '${name}'`);
    src = src.split(`icon: "${emo}"`).join(`icon: "${name}"`);
    src = src.split(`icon: '${emo}' as IconEmoji`).join(`icon: '${name}'`);
    src = src.split(`icon: "${emo}" as IconEmoji`).join(`icon: "${name}"`);
  }

  // 3) Inline emoji inside JSX text strings -> removed (decorative)
  //    Only strip emoji chars from string literals in Text content; keep word chars.
  src = src.replace(
    />([^<>{}\n]*)([\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}])(\uFE0F?)([^<>{}\n]*)</gu,
    (m, a, e, vs, b) => {
      totalReplacements++;
      return `>${(a + b).replace(/\s{2,}/g, " ").trim() ? (a + b).replace(/^\s+|\s+$/g, "") : ""}<`;
    },
  );

  if (src !== before) {
    fs.writeFileSync(file, src);
    totalReplacements++;
    console.log("updated", path.relative(process.cwd(), file));
  }
}
console.log("done");
