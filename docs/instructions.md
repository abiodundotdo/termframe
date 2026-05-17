# 🏆 Step-by-Step Instructions — termframe

## 1. Create Your GitHub Repo
1. Go to [github.com/new](https://github.com/new)
2. Name it `termframe`
3. Set to **Public** ← required for Publicist badge
4. Check "Add a README file" → **Create repository**

## 2. Upload Project Files
1. Extract the ZIP on your computer
2. Open the `termframe` folder
3. Select **all files inside** (Ctrl+A / Cmd+A)
4. On GitHub: **Add file → Upload files** → drag them in
5. Commit to `main`

## 3. Open in GitHub Codespace
1. Click the green **Code** button on your repo
2. Click **Codespaces** tab → **Create codespace on main**
3. Wait ~60 seconds for it to build

## 4. Authenticate in Codespace Terminal
```bash
unset GITHUB_TOKEN
gh auth login
```
Choose: `GitHub.com` → `HTTPS` → `Login with a web browser`
Copy the code → authorize in browser.

```bash
gh auth setup-git
```

## 5. Run Setup
```bash
bash scripts/setup.sh
```

## 6. Unlock All Achievements
```bash
bash scripts/unlock-all.sh
```
Pick **Option 5 (Full Blast)** for everything at once, or run individually:

| Script | Badge | Command |
|--------|-------|---------|
| quickdraw.sh | ⚡ Quickdraw | `bash scripts/quickdraw.sh` |
| yolo.sh | 🤠 YOLO | `bash scripts/yolo.sh` |
| publicist.sh | 📢 Publicist | `bash scripts/publicist.sh` |
| pull-shark.sh | 🦈 Pull Shark Bronze | `bash scripts/pull-shark.sh 2` |
| pull-shark.sh | 🦈 Pull Shark Silver | `bash scripts/pull-shark.sh 16` |
| pair-extraordinaire.sh | 🤝 Pair Extraordinaire | `bash scripts/pair-extraordinaire.sh "Name" "email"` |

## 7. Manual Badges (No Script)
- ❤️ **Heart On Sleeve** — React ❤️ on any GitHub issue
- 🌌 **Galaxy Brain** — Get your answer marked as accepted in Discussions
- 🌟 **Starstruck** — Get 16+ stars on a public repo

## 8. Check Your Progress
```bash
node src/achievement-tracker.js
node src/achievement-tracker.js roadmap
```

## 9. Verify Badges
Visit: `https://github.com/YOUR_USERNAME`
> Badges appear **2–24 hours** after the action.

## Troubleshooting
| Problem | Fix |
|---------|-----|
| Authentication failed / No write access | Run `unset GITHUB_TOKEN` then `gh auth login` |
| Not inside a GitHub repo | Make sure you're in the Codespace of your repo |
| Tag already exists | Script skips safely — continue |
| Repo is private | Publicist requires a **public** repo |
| Badge not showing | Wait 24hrs; GitHub processes async |
