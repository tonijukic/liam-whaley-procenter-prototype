/* Liam Whaley Pro Center — DEMO seed data (prototype only, no real personal data).
 * Everything the prototype shows lives here. State is kept in localStorage so
 * check-in/out and inventory edits survive a refresh; "Reset demo" clears it. */

const SEED = {
  center: {
    name: "Liam Whaley Pro Center",
    place: "Valdevaqueros, Tarifa",
    tagline: "World-Class Instruction & Equipment — Safe & Fun for All Levels",
  },

  // Live conditions widget (mock — a real build pulls a wind/tide API)
  conditions: {
    wind_kt: 19,
    gust_kt: 24,
    dir: "E (Levante)",
    dir_safe: true, // side-shore at Valdevaqueros = safe to teach
    tide: "Mid, rising",
    water_c: 20,
    note: "Good teaching window 11:00–17:00",
  },

  // Instructors + supporting personnel
  staff: [
    { id: "S1", name: "Liam Whaley", role: "Head Coach", type: "instructor", langs: ["EN", "ES"], certs: ["IKO L4", "Wing"], color: "#2AD7DD", active: true },
    { id: "S2", name: "Marco Rossi", role: "Instructor", type: "instructor", langs: ["EN", "IT", "ES"], certs: ["IKO L3"], color: "#FF9E45", active: true },
    { id: "S3", name: "Lena Fischer", role: "Instructor", type: "instructor", langs: ["EN", "DE"], certs: ["IKO L3", "Wing"], color: "#E44E56", active: true },
    { id: "S4", name: "Pablo Márquez", role: "Instructor", type: "instructor", langs: ["ES", "EN"], certs: ["IKO L2"], color: "#2BABAD", active: true },
    { id: "S5", name: "Chloé Dubois", role: "Instructor (Wing)", type: "instructor", langs: ["FR", "EN"], certs: ["Wing", "IKO L2"], color: "#7C5CFC", active: true },
    { id: "S6", name: "Sofía Navarro", role: "Front Desk / Bookings", type: "support", langs: ["ES", "EN"], certs: [], color: "#64748b", active: true },
    { id: "S7", name: "Diego Herrera", role: "Shop & Equipment", type: "support", langs: ["ES", "EN"], certs: ["Gear tech"], color: "#64748b", active: true },
    { id: "S8", name: "Anna Kovač", role: "Center Manager", type: "manager", langs: ["EN", "ES", "SL"], certs: [], color: "#0f172a", active: true },
  ],

  // Clients (demo names). weight drives kite/wing size suggestions.
  clients: [
    { id: "C01", name: "James Carter", email: "james.c@example.com", phone: "+44 7700 900001", country: "UK", level: "IKO L2", discipline: "Kite", weight: 82, waiver: true, note: "Working on water starts" },
    { id: "C02", name: "Marie Laurent", email: "marie.l@example.com", phone: "+33 6 12 34 56 78", country: "FR", level: "IKO L3", discipline: "Kite", weight: 61, waiver: true, note: "Independent, rents 9/12m" },
    { id: "C03", name: "Tom Becker", email: "tom.b@example.com", phone: "+49 151 2345678", country: "DE", level: "Beginner", discipline: "Kite", weight: 90, waiver: true, note: "First lessons — no rental yet" },
    { id: "C04", name: "Giulia Conti", email: "giulia.c@example.com", phone: "+39 320 1234567", country: "IT", level: "Wing L1", discipline: "Wing", weight: 58, waiver: true, note: "Learning to foil" },
    { id: "C05", name: "David Smith", email: "david.s@example.com", phone: "+44 7700 900045", country: "UK", level: "IKO L4", discipline: "Kite", weight: 78, waiver: true, note: "Advanced — big air" },
    { id: "C06", name: "Elena Popova", email: "elena.p@example.com", phone: "+34 600 111 222", country: "ES", level: "IKO L2", discipline: "Kite", weight: 64, waiver: false, note: "Waiver pending" },
    { id: "C07", name: "Lucas Moreau", email: "lucas.m@example.com", phone: "+33 6 98 76 54 32", country: "FR", level: "Wing L2", discipline: "Wing", weight: 74, waiver: true, note: "Rents wing + foil" },
    { id: "C08", name: "Hannah Meyer", email: "hannah.m@example.com", phone: "+49 170 9876543", country: "DE", level: "Beginner", discipline: "Wing", weight: 66, waiver: true, note: "Trial lesson" },
    { id: "C09", name: "Andrés Gómez", email: "andres.g@example.com", phone: "+34 655 333 444", country: "ES", level: "IKO L3", discipline: "Kite", weight: 85, waiver: true, note: "Local, frequent rental" },
    { id: "C10", name: "Sara Nilsson", email: "sara.n@example.com", phone: "+46 70 123 45 67", country: "SE", level: "IKO L1", discipline: "Kite", weight: 60, waiver: true, note: "Discovery course" },
    { id: "C11", name: "Mike O'Brien", email: "mike.o@example.com", phone: "+353 86 123 4567", country: "IE", level: "IKO L2", discipline: "Kite", weight: 95, waiver: true, note: "Needs bigger board" },
    { id: "C12", name: "Nadia Haddad", email: "nadia.h@example.com", phone: "+34 622 555 666", country: "ES", level: "Wing L1", discipline: "Wing", weight: 55, waiver: false, note: "Waiver pending" },
  ],

  /* Equipment inventory. size is the primary filter (m² / cm / litres / mast).
   * status: available | rented | maintenance | decommissioned */
  inventory: [
    // --- Kites (Duotone) ---
    { id: "KT-06-A", cat: "Kite", type: "Freeride", size: "6 m²", brand: "Duotone", model: "Evo", year: 2024, cond: "good", status: "available", loc: "Rack A1" },
    { id: "KT-07-A", cat: "Kite", type: "Wave", size: "7 m²", brand: "Duotone", model: "Neo", year: 2024, cond: "good", status: "available", loc: "Rack A1" },
    { id: "KT-08-A", cat: "Kite", type: "Freeride", size: "8 m²", brand: "Duotone", model: "Evo", year: 2024, cond: "good", status: "rented", loc: "Rack A2" },
    { id: "KT-09-A", cat: "Kite", type: "Freeride", size: "9 m²", brand: "Duotone", model: "Evo", year: 2024, cond: "good", status: "rented", loc: "Rack A2" },
    { id: "KT-09-B", cat: "Kite", type: "Freeride", size: "9 m²", brand: "Duotone", model: "Evo", year: 2023, cond: "worn", status: "available", loc: "Rack A2" },
    { id: "KT-10-A", cat: "Kite", type: "Freeride", size: "10 m²", brand: "Duotone", model: "Evo", year: 2024, cond: "good", status: "available", loc: "Rack A3" },
    { id: "KT-12-A", cat: "Kite", type: "Freeride", size: "12 m²", brand: "Duotone", model: "Evo", year: 2024, cond: "good", status: "rented", loc: "Rack A3" },
    { id: "KT-12-B", cat: "Kite", type: "Big Air", size: "12 m²", brand: "Duotone", model: "Rebel", year: 2023, cond: "good", status: "available", loc: "Rack A3" },
    { id: "KT-14-A", cat: "Kite", type: "Lightwind", size: "14 m²", brand: "Duotone", model: "Juice", year: 2023, cond: "worn", status: "maintenance", loc: "Workshop", notes: "Bladder leak — repair" },

    // --- Bars ---
    { id: "BAR-01", cat: "Bar", type: "Control bar", size: "22 m lines", brand: "Duotone", model: "Trust Bar", year: 2024, cond: "good", status: "available", loc: "Rack A1" },
    { id: "BAR-02", cat: "Bar", type: "Control bar", size: "22 m lines", brand: "Duotone", model: "Trust Bar", year: 2024, cond: "good", status: "rented", loc: "Rack A1" },
    { id: "BAR-03", cat: "Bar", type: "Control bar (short)", size: "18 m lines", brand: "Duotone", model: "Click Bar", year: 2023, cond: "good", status: "available", loc: "Rack A1" },

    // --- Twintip boards (Fanatic/Duotone) ---
    { id: "TT-138", cat: "Board", type: "Twintip", size: "138 cm", brand: "Duotone", model: "Gonzales", year: 2024, cond: "good", status: "available", loc: "Rack B1" },
    { id: "TT-142", cat: "Board", type: "Twintip", size: "142 cm", brand: "Duotone", model: "Gonzales", year: 2024, cond: "good", status: "rented", loc: "Rack B1" },
    { id: "TT-146", cat: "Board", type: "Twintip", size: "146 cm", brand: "Duotone", model: "Gonzales", year: 2023, cond: "good", status: "available", loc: "Rack B1" },
    { id: "TT-150", cat: "Board", type: "Twintip (XL)", size: "150 cm", brand: "Duotone", model: "Gonzales", year: 2023, cond: "worn", status: "available", loc: "Rack B1" },
    { id: "DIR-56", cat: "Board", type: "Directional / surf", size: "5'6\"", brand: "Duotone", model: "Whip", year: 2023, cond: "good", status: "available", loc: "Rack B2" },

    // --- Harnesses (Ion) ---
    { id: "HN-W-S", cat: "Harness", type: "Waist", size: "S", brand: "ION", model: "Riot", year: 2024, cond: "good", status: "available", loc: "Shelf C1" },
    { id: "HN-W-M", cat: "Harness", type: "Waist", size: "M", brand: "ION", model: "Riot", year: 2024, cond: "good", status: "rented", loc: "Shelf C1" },
    { id: "HN-W-L", cat: "Harness", type: "Waist", size: "L", brand: "ION", model: "Riot", year: 2024, cond: "good", status: "available", loc: "Shelf C1" },
    { id: "HN-W-XL", cat: "Harness", type: "Waist", size: "XL", brand: "ION", model: "Riot", year: 2023, cond: "good", status: "available", loc: "Shelf C1" },
    { id: "HN-S-M", cat: "Harness", type: "Seat (beginner)", size: "M", brand: "ION", model: "Seat", year: 2023, cond: "good", status: "rented", loc: "Shelf C1" },
    { id: "HN-S-L", cat: "Harness", type: "Seat (beginner)", size: "L", brand: "ION", model: "Seat", year: 2023, cond: "good", status: "available", loc: "Shelf C1" },

    // --- Wetsuits ---
    { id: "WS-32-S", cat: "Wetsuit", type: "3/2 fullsuit", size: "S", brand: "ION", model: "Element", year: 2024, cond: "good", status: "available", loc: "Shelf C2" },
    { id: "WS-32-M", cat: "Wetsuit", type: "3/2 fullsuit", size: "M", brand: "ION", model: "Element", year: 2024, cond: "good", status: "rented", loc: "Shelf C2" },
    { id: "WS-32-L", cat: "Wetsuit", type: "3/2 fullsuit", size: "L", brand: "ION", model: "Element", year: 2024, cond: "good", status: "available", loc: "Shelf C2" },
    { id: "WS-32-XL", cat: "Wetsuit", type: "3/2 fullsuit", size: "XL", brand: "ION", model: "Element", year: 2023, cond: "worn", status: "available", loc: "Shelf C2" },
    { id: "WS-SH-M", cat: "Wetsuit", type: "Shorty 2 mm", size: "M", brand: "ION", model: "Amaze", year: 2024, cond: "good", status: "available", loc: "Shelf C2" },
    { id: "WS-SH-L", cat: "Wetsuit", type: "Shorty 2 mm", size: "L", brand: "ION", model: "Amaze", year: 2024, cond: "good", status: "available", loc: "Shelf C2" },

    // --- Safety ---
    { id: "HELM-M", cat: "Safety", type: "Helmet", size: "M", brand: "ION", model: "Slash", year: 2024, cond: "good", status: "available", loc: "Shelf C3" },
    { id: "HELM-L", cat: "Safety", type: "Helmet", size: "L", brand: "ION", model: "Slash", year: 2024, cond: "good", status: "rented", loc: "Shelf C3" },
    { id: "VEST-M", cat: "Safety", type: "Impact vest", size: "M", brand: "ION", model: "Vector", year: 2024, cond: "good", status: "available", loc: "Shelf C3" },
    { id: "VEST-L", cat: "Safety", type: "Impact vest", size: "L", brand: "ION", model: "Vector", year: 2024, cond: "good", status: "rented", loc: "Shelf C3" },

    // --- Wing foiling: Wings (Duotone/Fanatic) ---
    { id: "WG-3-A", cat: "Wing", type: "Hand wing", size: "3 m²", brand: "Duotone", model: "Unit", year: 2024, cond: "good", status: "available", loc: "Rack D1" },
    { id: "WG-4-A", cat: "Wing", type: "Hand wing", size: "4 m²", brand: "Duotone", model: "Unit", year: 2024, cond: "good", status: "available", loc: "Rack D1" },
    { id: "WG-5-A", cat: "Wing", type: "Hand wing", size: "5 m²", brand: "Duotone", model: "Unit", year: 2024, cond: "good", status: "rented", loc: "Rack D1" },
    { id: "WG-5-B", cat: "Wing", type: "Hand wing", size: "5 m²", brand: "Duotone", model: "Unit", year: 2023, cond: "good", status: "available", loc: "Rack D1" },
    { id: "WG-6-A", cat: "Wing", type: "Hand wing", size: "6 m²", brand: "Duotone", model: "Unit", year: 2024, cond: "good", status: "available", loc: "Rack D1" },
    { id: "WG-7-A", cat: "Wing", type: "Hand wing (lightwind)", size: "7 m²", brand: "Duotone", model: "Unit", year: 2023, cond: "worn", status: "available", loc: "Rack D1" },

    // --- Wing foiling: Foil boards ---
    { id: "FB-110", cat: "Foil board", type: "Beginner (soft deck)", size: "110 L", brand: "Fanatic", model: "Sky Wing", year: 2024, cond: "good", status: "available", loc: "Rack D2" },
    { id: "FB-130", cat: "Foil board", type: "Beginner (soft deck)", size: "130 L", brand: "Fanatic", model: "Sky Wing", year: 2024, cond: "good", status: "rented", loc: "Rack D2" },
    { id: "FB-150", cat: "Foil board", type: "Beginner XL", size: "150 L", brand: "Fanatic", model: "Sky Wing", year: 2023, cond: "good", status: "available", loc: "Rack D2" },
    { id: "FB-085", cat: "Foil board", type: "Intermediate", size: "85 L", brand: "Fanatic", model: "Sky Wing", year: 2024, cond: "good", status: "available", loc: "Rack D2" },

    // --- Wing foiling: Foil sets ---
    { id: "FL-A", cat: "Foil", type: "Alu set (beginner)", size: "75 cm mast · 2000 cm²", brand: "Fanatic", model: "Aero Alu", year: 2024, cond: "good", status: "rented", loc: "Rack D3" },
    { id: "FL-B", cat: "Foil", type: "Alu set (beginner)", size: "75 cm mast · 1800 cm²", brand: "Fanatic", model: "Aero Alu", year: 2024, cond: "good", status: "available", loc: "Rack D3" },
    { id: "FL-C", cat: "Foil", type: "Carbon set (advanced)", size: "85 cm mast · 1250 cm²", brand: "Fanatic", model: "Aero HA", year: 2024, cond: "good", status: "available", loc: "Rack D3" },
  ],

  /* Today's schedule. Each session ties an instructor + client + gear together.
   * status: scheduled | on_water | returned | cancelled
   * kind: Lesson | Rental */
  sessions: [
    { id: "SES1", start: "10:00", end: "12:00", kind: "Lesson", discipline: "Kite", instructor: "S1", client: "C01", gear: ["KT-09-A", "BAR-02", "TT-142", "HN-S-M", "WS-32-M"], status: "on_water", out_at: "10:05", eta: "12:00" },
    { id: "SES2", start: "10:00", end: "12:00", kind: "Lesson", discipline: "Kite", instructor: "S2", client: "C03", gear: ["KT-12-A", "TT-150", "HN-S-L", "VEST-L"], status: "on_water", out_at: "10:10", eta: "12:00" },
    { id: "SES3", start: "10:30", end: "12:30", kind: "Lesson", discipline: "Wing", instructor: "S5", client: "C08", gear: ["WG-5-A", "FB-130", "FL-A", "HELM-L"], status: "on_water", out_at: "10:35", eta: "12:30" },
    { id: "SES4", start: "11:00", end: "13:00", kind: "Rental", discipline: "Kite", instructor: null, client: "C02", gear: ["KT-08-A", "BAR-01"], status: "scheduled", eta: "13:00" },
    { id: "SES5", start: "12:30", end: "14:30", kind: "Lesson", discipline: "Kite", instructor: "S3", client: "C10", gear: ["KT-10-A", "TT-138", "HN-S-L"], status: "scheduled", eta: "14:30" },
    { id: "SES6", start: "13:00", end: "15:00", kind: "Lesson", discipline: "Wing", instructor: "S5", client: "C04", gear: ["WG-4-A", "FB-150", "FL-B"], status: "scheduled", eta: "15:00" },
    { id: "SES7", start: "14:00", end: "16:00", kind: "Rental", discipline: "Kite", instructor: null, client: "C09", gear: ["KT-09-B", "TT-146"], status: "scheduled", eta: "16:00" },
    { id: "SES8", start: "14:30", end: "16:30", kind: "Lesson", discipline: "Kite", instructor: "S4", client: "C05", gear: ["KT-12-B", "DIR-56", "HN-W-M"], status: "scheduled", eta: "16:30" },
    { id: "SES9", start: "09:00", end: "10:30", kind: "Lesson", discipline: "Kite", instructor: "S2", client: "C11", gear: ["KT-10-A", "TT-150"], status: "returned", out_at: "09:05", in_at: "10:35", eta: "10:30" },
  ],

  // A few upcoming online reservations (for the public booking page + dashboard)
  bookings: [
    { id: "B01", date: "tomorrow", time: "10:00", activity: "Kite lesson (private)", name: "New enquiry", status: "confirmed" },
    { id: "B02", date: "tomorrow", time: "12:30", activity: "Wing foil lesson", name: "New enquiry", status: "confirmed" },
    { id: "B03", date: "in 2 days", time: "11:00", activity: "Kite rental (½ day)", name: "New enquiry", status: "pending" },
  ],

  // Mock reporting figures (a real build computes these from live data)
  reports: {
    utilization_pct: 71,
    revenue_week: 8450,
    lessons_week: 42,
    rentals_week: 28,
    util_by_cat: [
      { cat: "Kites", pct: 78 },
      { cat: "Twintip boards", pct: 74 },
      { cat: "Wings", pct: 62 },
      { cat: "Foil boards", pct: 58 },
      { cat: "Harnesses", pct: 69 },
      { cat: "Wetsuits", pct: 55 },
    ],
    top_gear: [
      { item: "Kite 9 m² Evo", rentals: 34 },
      { item: "Twintip 142 cm", rentals: 29 },
      { item: "Kite 12 m² Evo", rentals: 26 },
      { item: "Wing 5 m² Unit", rentals: 22 },
      { item: "Foil board 130 L", rentals: 18 },
    ],
    revenue_by_day: [
      { d: "Mon", v: 980 }, { d: "Tue", v: 1240 }, { d: "Wed", v: 1550 },
      { d: "Thu", v: 1120 }, { d: "Fri", v: 1680 }, { d: "Sat", v: 1900 }, { d: "Sun", v: 980 },
    ],
    revenue_by_instructor: [
      { name: "Liam W.", v: 2100 }, { name: "Marco R.", v: 1650 },
      { name: "Lena F.", v: 1480 }, { name: "Chloé D.", v: 1320 }, { name: "Pablo M.", v: 900 },
    ],
  },
};
