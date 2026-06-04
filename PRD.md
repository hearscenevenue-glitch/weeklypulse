# PRD — WeeklyPulse

> A client-facing dashboard where coaching clients log weekly check-ins and track their own progress over time.

**Status:** Draft
**Owner:** Jeffrey Joachim
**Last updated:** 2026-06-04

---

## 1. Problem

Coaching clients have no structured, recurring place to reflect on their week, log what's changing, and see their own momentum. Between sessions, progress is invisible — to both the client and the coach. Clients arrive at sessions unable to recall what happened the previous week, and coaches spend the first 10 minutes reconstructing it.

**Users affected:** Coaching clients who meet with their coach weekly or bi-weekly and want to stay accountable between sessions.

**Current workaround:** Clients journal in Notes apps, Google Docs, or nothing at all. No structure, no history, no visibility into trends.

---

## 2. Goals

Give clients a simple, recurring ritual — log a check-in each week — and show them a visual record of their growth over time.

**In scope:**
- Weekly check-in form — a short, structured set of prompts clients fill out each week
- Progress dashboard — visual timeline of all past check-ins
- Streak / consistency tracker — shows how many weeks in a row the client has checked in
- Coach view — read-only access for the coach to see a client's check-in history
- Email or in-app reminder to prompt the client on their check-in day

**Out of scope:**
- Two-way messaging between coach and client
- Video or scheduling features
- Payment processing
- Custom check-in templates per coach (v1 uses a fixed prompt set)
- Mobile app (responsive web only for v1)

---

## 3. Target Users

| Persona | Who they are | Primary need |
|---------|-------------|--------------|
| Coaching client | Person actively working with a coach, wants to stay accountable | A quick, structured way to log the week and see progress without friction |
| Coach | Practitioner reviewing client work between sessions | Read access to client check-ins so sessions start with context, not catch-up |

---

## 4. Requirements

### Must Have (MVP)
- [ ] Client can create an account and link to their coach
- [ ] Client fills out a weekly check-in form (wins, challenges, focus for next week, mood rating 1–5)
- [ ] Client can view all past check-ins in a scrollable timeline
- [ ] Mood / rating trend shown as a simple line chart over time
- [ ] Coach can view any linked client's check-in history (read-only)
- [ ] Weekly reminder notification (email) sent on the client's chosen day

### Should Have (v1.1)
- [ ] Streak counter — consecutive weeks checked in
- [ ] Coach can leave a short text reaction on a check-in
- [ ] Client can mark a check-in as a milestone

### Won't Have (this version)
- Custom prompt templates per coach
- Real-time chat or messaging
- Mobile native app
- Payment or subscription management

---

## 5. User Stories

1. As a client, I want to fill out my weekly check-in in under 5 minutes so that it becomes a habit I keep.
2. As a client, I want to see a chart of my mood ratings over the past 12 weeks so that I can notice patterns I'd otherwise miss.
3. As a client, I want to scroll back through my past check-ins so that I can remember what I've worked through and feel proud of my growth.
4. As a coach, I want to read my client's check-in before our session so that we skip catch-up and go straight into the work.
5. As a client, I want a reminder on my chosen day each week so that I don't forget to log.

---

## 6. Success Criteria

| Metric | Target | How to measure |
|--------|--------|----------------|
| Check-in completion time | < 5 minutes | Timed user test |
| Weekly check-in rate (active users) | ≥ 70% of users submit each week | Product analytics |
| Client retention at 60 days | ≥ 60% still logging | Cohort analysis |
| Coach adoption | Coach views client check-ins ≥ once per week | Analytics event |

---

## 7. Risks

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Clients stop logging after 2–3 weeks | High | Streak counter + weekly email reminder make the habit sticky |
| Check-in form feels too long or clinical | Med | Limit to 4 prompts max in v1; test with real clients before launch |
| Coach has no incentive to check the dashboard | Med | Send coach a digest email when client submits — pull them in |
| Data privacy — clients sharing personal reflections | High | Auth required, no public URLs, coach access only with explicit client link |

---

## 8. Open Questions

- [ ] What are the 4 default check-in prompts? — coach or product team decides before design begins
- [ ] Should clients be able to keep some check-ins private from their coach? — affects data model and trust
- [ ] Is email the only reminder channel, or should we support SMS / push? — affects infra for v1
- [ ] Does the coach need to invite the client, or can the client sign up and request to link? — affects onboarding flow
