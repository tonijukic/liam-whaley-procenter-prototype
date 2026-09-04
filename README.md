# Liam Whaley Pro Center — Management Portal (Prototype)

A clickable first-draft prototype of a management system for a kiteboarding + wing
foiling center in Tarifa. **Demo data only — no real personal data, no backend, no payments.**

## Two screens

| Screen | File | Who it's for |
|---|---|---|
| **Manager portal** | `index.html` | Staff — dashboard, schedule, on-the-water check-in/out, clients, staff, inventory, reports |
| **Public booking page** | `booking.html` | Customers — reserve a session + see live equipment availability |

Open `index.html` to start. The two screens **share the same demo storage** in your
browser, so if you (as manager) mark a kite as *maintenance* or *decommissioned*, the
public booking page's availability updates too. Use **Reset demo data** (bottom-left) to
restore the original sample set.

## What it demonstrates

- Clients, instructors & support staff lists (with IKO levels, languages, waivers)
- Full rental inventory for **kiteboarding** (kites, bars, boards, harnesses, wetsuits,
  safety) and **wing foiling** (wings, foil boards, hydrofoils) — each item tracked by
  size, type, brand, condition, status and location
- **Schedule** grid: which instructor is with which client on what equipment
- **On the Water**: live out/back roster with check-in/out and overdue alerts
- Manager can **add** newly delivered gear and **decommission** retired gear
- Public **booking page** with live availability + wind/tide conditions
- Basic **reporting** (utilization, revenue, most-rented gear)

## Tech

Static HTML + [Alpine.js](https://alpinejs.dev) (CDN) + vanilla JS. No build step.
Branding (turquoise `#2AD7DD` + charcoal, logo, photos) is taken from
[liamwhaleyprocenter.com](https://www.liamwhaleyprocenter.com/).

See `PLAN.md` for how this becomes a real, multi-user, data-backed product.
