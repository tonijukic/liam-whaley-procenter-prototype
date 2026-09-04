# Plan — Kiteboarding Center Management System

Prototype → production plan for the Liam Whaley Pro Center management portal.

---

## 1. What exists now (this prototype)

A clickable, front-end-only demo (`index.html` + `booking.html`) with realistic sample
data, the center's branding, and all requested sections working as UI:
clients, staff, inventory (kite + wing foil), schedule, check-in/out, public booking with
live availability, and basic reports. State is saved in the browser only.

**Purpose:** let Liam react to the flows and layout before we build the real backend.

---

## 2. Research → what "good" looks like (informed the design)

From reviewing kite/surf/dive-specific tools (Viking Bookings, Bloowatch, Rentle,
Checkfront) the best-practice patterns we've reflected — and should keep in the real build:

- **Two product types:** *Lesson* (instructor + skill progression) vs *Rental*
  (ability-gated, gear attached). Beginners generally can't rent unsupervised.
- **Serial/asset-level inventory** — every kite/board/wing tracked as an individual unit
  with its own history, condition and maintenance lockout. This is the rental core.
- **"Who's on the water" reconciliation** — out/back headcount that must return to zero,
  with an overdue alert. Borrowed from the dive-shop "tag board" safety model.
- **Weather as data, not a note** — wind speed **and direction** (offshore = unsafe),
  plus tide. Bookings are provisional until the morning wind call.
- **Waiver + valid skill level as hard gates** before check-out.
- **Kite/wing size recommender** from rider weight + wind (already shown in the demo).
- **Reporting led by utilization %** (target 65–75%), revenue/instructor, most-rented gear.

---

## 3. Decisions locked in (from Toni)

- First draft = **clickable demo with sample data** ✅ (this)
- Booking = **standalone hosted page** we build (link/embed into their site later)
- **Bookings only** for now — no online payments in the prototype
- Language = **English**

---

## 4. Production build (proposed)

Reuse the proven stack already running for F45 dashboard-v2:
**React + Vite (client) · Express + Zod (API) · Postgres via Drizzle · deploy on Render + Neon.**
This is battle-tested here and cheap to run.

### Phase 1 — Real data & multi-user (core)
- Postgres schema: `clients`, `staff`, `equipment`, `sessions`, `bookings`, `waivers`.
- Auth + roles: **manager** (full), **instructor** (own schedule + check-in/out),
  **front desk** (bookings + clients). 
- Inventory CRUD with status lifecycle (available/rented/maintenance/decommissioned)
  as the single source of truth.
- Check-in/out that locks/frees specific assets and records timestamps.

### Phase 2 — Public booking portal (real)
- Hosted booking page writing to the same availability pool (no double-booking).
- Provisional booking + morning wind-check confirm/cancel flow + email notifications.
- Embed or link from liamwhaleyprocenter.com.

### Phase 3 — Conditions & safety
- Live **wind + tide API** (e.g. Windguru/Stormglass) → auto-suggest bookable windows,
  flag offshore/no-go.
- Overdue-on-water alerts (screen + optional SMS/push).
- Digital waiver signing + skill-level gating before check-out.

### Phase 4 — Reporting & extras
- Live utilization, revenue per instructor, most-rented gear, no-show rate.
- Maintenance/damage log per asset (photos, service-due flags).
- *(Later, if wanted)* online payment / deposit (Stripe), packages, gift cards.

---

## 5. Open questions for Liam (next round)

1. **Roles:** who logs in and what should each role see/do? (manager, instructors, front desk)
2. **Existing website & booking:** what is the site built on, and is there a booking tool
   in use today we'd replace or link from?
3. **Pricing model:** lesson types + rental rates (per hour / half-day / day) — needed for
   quotes and reporting even before real payments.
4. **Spots & conditions:** just Valdevaqueros, or multiple beaches? Which wind directions
   are safe to teach at each?
5. **Skill system:** use IKO levels as the standard for gating rentals/lessons?
6. **Data import:** is there an existing client/equipment list (spreadsheet) to seed from?
7. **Payments:** keep bookings-only, or add deposits/online payment in a later phase?
8. **Languages:** English only, or add Spanish (and others) for the public page?

---

## 6. Suggested next step

Get Liam's reactions to this prototype + answers to §5, then scope Phase 1 into a
concrete build with a real database and logins.
