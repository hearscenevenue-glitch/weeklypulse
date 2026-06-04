# CLAUDE.md — WeeklyPulse

> A client-facing dashboard where coaching clients log weekly check-ins and track their own progress over time.

## Tech Stack
- **Frontend:** Next.js (App Router)
- **Backend:** Node.js (Next.js API routes)
- **Database:** Supabase (Postgres + Auth)
- **Hosting:** Vercel
- **AI / APIs:** None (v1)

## Coding Style
- ES modules (`import`/`export`), not CommonJS
- `async`/`await` over `.then()` chains
- 2-space indentation
- Descriptive variable names — no single letters except loop counters
- Comments only when the WHY is non-obvious

## Key Files
| Path | Purpose |
|------|---------|
| `src/app/` | Next.js App Router pages and layouts |
| `src/app/(client)/` | Client-facing routes (check-in form, dashboard) |
| `src/app/(coach)/` | Coach read-only view routes |
| `src/components/` | Shared UI components |
| `src/lib/supabase/` | Supabase client (browser + server) |
| `src/types/` | TypeScript type definitions |
| `.env.example` | Environment variable template |
| `PRD.md` | Product requirements (source of truth) |
| `CLAUDE.md` | This file — project rules |

## Environment Variables
- Copy `.env.example` → `.env.local` and fill in keys before starting
- Required: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- Never commit `.env.local` — must be in `.gitignore`

## Auth Model
- Supabase Auth handles client and coach accounts
- Row-level security (RLS) on all tables — clients can only read/write their own check-ins
- Coach access is granted explicitly via a client–coach link record, not by role alone

## Rules
- Never commit `.env.local` or any file containing secrets
- `PRD.md` is the source of truth — build what's in scope, nothing more
- State the next action in one sentence before executing
- Make the smallest change that solves the problem
- Ask when intent is ambiguous — do not guess
- All database access goes through Supabase RLS — never bypass with service role key on the client side

## Never Without Explicit Approval
- Install packages or dependencies
- Deploy to production
- Delete files, folders, or database records
- Push to GitHub
- Add features not listed in `PRD.md`
