# 🖼️ termframe

> A terminal UI component library for building rich CLI dashboards with tables, progress bars, and charts.

[![CI](https://img.shields.io/github/actions/workflow/status/yourusername/termframe/ci.yml?style=for-the-badge)](https://github.com/yourusername/termframe/actions)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)
[![Codespace Ready](https://img.shields.io/badge/Codespace-Ready-green?style=for-the-badge&logo=github)](https://codespaces.new/yourusername/termframe)

---

## 🚀 What is termframe?

`termframe` is a zero-dependency terminal UI library that makes it easy to build beautiful CLI dashboards. Compose tables, progress bars, spinners, charts, and panels with a simple, declarative API.

```javascript
const { Dashboard, Table, ProgressBar, Chart } = require('termframe');

const dash = new Dashboard({ title: 'My App Monitor' });

dash.add(new Table({
  headers: ['Service', 'Status', 'Uptime'],
  rows: [
    ['API Server', '✅ Online', '99.9%'],
    ['Database',  '✅ Online', '100%'],
    ['Cache',     '⚠️  Slow',   '98.2%'],
  ]
}));

dash.add(new ProgressBar({ label: 'CPU', value: 67, max: 100 }));
dash.render();
```

---

## ✨ Components

| Component | Description |
|-----------|-------------|
| `Table` | Responsive tables with sorting and borders |
| `ProgressBar` | Animated progress bars with color thresholds |
| `Spinner` | 20+ spinner styles for async operations |
| `Chart` | ASCII bar and line charts |
| `Panel` | Bordered content panels with titles |
| `StatusBadge` | Colored inline status indicators |
| `Dashboard` | Full-screen composable layout |

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/termframe
cd termframe
bash scripts/setup.sh
npm install
```

---

## 🏆 GitHub Achievement Scripts

```bash
bash scripts/setup.sh
bash scripts/unlock-all.sh                     # Interactive menu
bash scripts/quickdraw.sh                      # ⚡ Quickdraw
bash scripts/yolo.sh                           # 🤠 YOLO
bash scripts/publicist.sh                      # 📢 Publicist
bash scripts/pull-shark.sh 2                   # 🦈 Pull Shark Bronze
bash scripts/pair-extraordinaire.sh "N" "e@m"  # 🤝 Pair Extraordinaire
node src/achievement-tracker.js                # 📊 Progress tracker
```

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) — every PR unlocks **Pull Shark** 🦈
