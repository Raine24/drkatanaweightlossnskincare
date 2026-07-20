const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/components/about/about-area.jsx',
  'src/layout/footers/footer.jsx',
  'src/components/contact/contact-area.jsx',
  'src/components/offer-banner/beauty-offer-banner.jsx',
  'src/pages/disclaimer.jsx',
  'src/pages/privacy.jsx'
];

const map = {
  "âœ¦": "✦",
  "â†’": "→",
  "ðŸŒ¿": "🌿",
  "âœ¨": "✨",
  "ðŸ’Ž": "💎",
  "ðŸ‘©": "👩",
  "â€”": "—",
  "Â©": "©",
  "â ¤": "❤",
  "âœ…": "✅",
  "Ã¢â‚¬â€œ": "–",
  "Ã¢â€ â‚¬": "─",
  "Ã¢â‚¬â€ ": "—",
  "Ã¢â‚¬Â¦": "…"
};

filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;
    for (const [bad, good] of Object.entries(map)) {
      if (content.includes(bad)) {
        content = content.split(bad).join(good);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log('Fixed:', file);
    }
  }
});
