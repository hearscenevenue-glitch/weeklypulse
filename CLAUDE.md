# CLAUDE.md — TipSplit

> A mobile-friendly tip calculator that splits a bill across any number of people.

## Tech Stack
- **Frontend:** Plain HTML + CSS + vanilla JavaScript (no framework)
- **Backend:** None
- **Database:** None
- **Hosting:** TBD (static file — Vercel or GitHub Pages)
- **AI / APIs:** None

## Coding Style
- ES modules (`import`/`export`), not CommonJS
- `async`/`await` over `.then()` chains
- 2-space indentation
- Descriptive variable names — no single letters except loop counters
- Comments only when the WHY is non-obvious
- Use integer math (cents) internally to avoid floating-point rounding errors; convert to dollars only at display

## Key Files
| Path | Purpose |
|------|---------|
| `index.html` | Single-page layout and structure |
| `style.css` | Mobile-first styles |
| `calculator.js` | Core calculation logic (bill, tip, per-person) |
| `main.js` | DOM wiring — reads inputs, calls calculator, updates display |
| `PRD.md` | Product requirements (source of truth) |
| `CLAUDE.md` | This file — project rules |

## Environment Variables
- None required

## Rules
- `PRD.md` is the source of truth — build only what is in scope
- Use integer math (cents) internally — never do tip math directly on floats
- All touch targets must be at least 44×44 px
- State the next action in one sentence before executing
- Make the smallest change that solves the problem
- Ask when intent is ambiguous — do not guess

## Never Without Explicit Approval
- Install packages or dependencies
- Deploy to production
- Delete files or folders
- Push to GitHub
- Add features not listed in `PRD.md`
