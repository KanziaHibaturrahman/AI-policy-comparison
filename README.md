# lex.ai — Global AI Law Explorer

A clean, static website to read, compare, and track official AI laws across jurisdictions.

## Jurisdictions covered

| Flag | Country | Law | In force |
|------|---------|-----|----------|
| 🇪🇺 | European Union | EU AI Act (Reg. 2024/1689) | Aug 2024 |
| 🇰🇷 | South Korea | AI Basic Act (Law No. 20676) | Jan 2026 |
| 🇻🇳 | Vietnam | Law on AI (No. 134/2025/QH15) | Mar 2026 |
| 🇰🇿 | Kazakhstan | Law on AI (No. 230-VIII ZPK) | Jan 2026 |
| 🇯🇵 | Japan | AI Promotion Act | Sep 2025 |

## Features

- **Overview** — law metadata, risk tier breakdown, official document links
- **Full text** — key articles with table of contents navigation
- **Compare all** — 15-dimension side-by-side comparison table with strength index
- **Timeline** — chronological view of all legislative milestones

## File structure

```
lex-ai/
├── index.html        ← HTML shell (hero, sidebar, footer)
├── style.css         ← All shared styles
├── app.js            ← Navigation, routing, rendering logic
├── data/
│   ├── eu.js         ← EU AI Act data
│   ├── kr.js         ← South Korea AI Basic Act data
│   ├── vn.js         ← Vietnam AI Law data
│   ├── kz.js         ← Kazakhstan AI Law data
│   ├── jp.js         ← Japan AI Promotion Act data
│   └── compare.js    ← Comparison table + timeline data
└── README.md
```

## How to run

No build step, no npm, no framework.

**Locally:**
```bash
# Any static server works. Examples:
python3 -m http.server 8000
npx serve .
```
Then open `http://localhost:8000`.

> Note: open `index.html` directly in a browser also works in most cases,
> but a local server is recommended to avoid any CORS quirks with `<script src>` loading.

**Deploy to GitHub Pages:**
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: Deploy from branch → `main` / `root`
3. Done — live at `https://yourusername.github.io/lex-ai/`

## How to add a new jurisdiction

1. Create `data/xx.js` following the same structure as an existing data file
2. Set `window.LAW_XX = { ... }` with all required fields
3. Add `<script src="data/xx.js"></script>` to `index.html` before `app.js`
4. Register it in `app.js` under the `LAWS` object: `xx: () => window.LAW_XX`
5. Add a sidebar entry in `index.html`
6. Add the country columns to `data/compare.js`

## How to update law text

Edit the relevant `data/xx.js` file. Each law has a `fulltext` array of chapters, each with an `articles` array. Articles have `num`, `title`, `text`, and an optional `note` field.

## License

MIT
