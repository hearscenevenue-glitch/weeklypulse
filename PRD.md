# PRD — TipSplit

> A mobile-friendly web app that calculates the tip on a bill and splits the total evenly across any number of people.

**Status:** Draft
**Owner:** Jeffrey Joachim
**Last updated:** 2026-06-04

---

## 1. Problem

Splitting a restaurant bill is a predictably awkward moment — someone has to do mental math under social pressure, the numbers often get wrong, and no one wants to wait while someone fumbles with their phone's calculator app.

**Users affected:** Anyone dining out in a group — friends, coworkers, families — who needs to quickly and accurately divide a bill including tip.

**Current workaround:** Native phone calculator, mental math, or asking someone who "is good with numbers." All are slow, error-prone, and require re-explaining inputs every time.

---

## 2. Goals

Give any group at a table a fast, foolproof way to know exactly what each person owes — including tip — in under 10 seconds.

**In scope:**
- Bill amount input
- Tip percentage selector (preset options + custom entry)
- Number of people selector
- Live calculation of tip amount, total bill, and per-person amount
- Mobile-first responsive layout that works on any screen size

**Out of scope:**
- Splitting unequally (different amounts per person)
- Saving or sharing bills
- Currency conversion
- Payment processing or Venmo/PayPal integration
- User accounts or history

---

## 3. Target Users

| Persona | Who they are | Primary need |
|---------|-------------|--------------|
| Diner at a restaurant | Person at a table with a group, phone in hand | Instant answer to "what do I owe?" without doing math |
| Bill payer | Person who paid and needs to collect from others | Know exactly what each person owes including tip, fast |

---

## 4. Requirements

### Must Have (MVP)
- [ ] Input field for bill amount (numeric, supports decimals)
- [ ] Tip selector with presets: 10%, 15%, 18%, 20%, 25% + custom %
- [ ] People counter: increment / decrement (minimum 1)
- [ ] Live output: tip amount, total bill, and per-person amount — updates as inputs change
- [ ] Works correctly on screens 375 px and wider (iPhone SE and up)
- [ ] No install, no login — works instantly in any mobile browser

### Should Have (v1.1)
- [ ] Rounding toggle — round each person's share up to nearest dollar
- [ ] "Copy result" button to paste into a group chat

### Won't Have (this version)
- Unequal splits (person A orders steak, person B orders salad)
- Bill history or saved calculations
- Payment integrations (Venmo, PayPal, Apple Pay)

---

## 5. User Stories

1. As a diner, I want to type in the bill total and immediately see what each person owes so that we can settle up without any debate.
2. As a bill payer, I want to pick a tip percentage from quick presets so that I don't have to type anything beyond the total.
3. As a diner with a large group, I want to increment the number of people with a tap so that I don't have to type on a small keyboard.
4. As any user, I want the per-person amount to update live as I change inputs so that I can compare tip percentages before deciding.

---

## 6. Success Criteria

| Metric | Target | How to measure |
|--------|--------|----------------|
| Time to result from page load | < 10 seconds | Timed user test on mobile |
| Works at 375 px viewport | No horizontal scroll, all inputs reachable | Manual check in DevTools device mode |
| Calculation accuracy | Correct to 2 decimal places in all cases | Unit tests covering edge cases |

---

## 7. Risks

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Floating-point rounding errors in JS | Med | Use integer math (cents) internally, format output at display layer |
| Inputs too small to tap on mobile | Med | Minimum touch target 44×44 px per Apple HIG / WCAG |
| Page feels too bare without styling | Low | Single clean card layout with large typography handles this |

---

## 8. Open Questions

- [ ] Should 20% be the default selected tip, or no default? — decide before build starts
- [ ] Does the per-person amount round to nearest cent, or show exact decimal? — affects display logic
