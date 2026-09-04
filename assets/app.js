/* Manager portal logic — Alpine.js component. Pure client-side demo:
 * data lives in localStorage so edits persist across refresh. */

const STORE_KEY = "lwpc_demo_v1";
const DEMO_NOW = "11:15"; // fixed demo clock so the schedule/overdue logic reads sensibly

function loadDb() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return JSON.parse(JSON.stringify(SEED));
}

function toMin(hhmm) { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; }

function portal() {
  return {
    view: "dashboard",
    db: loadDb(),
    now: DEMO_NOW,
    // inventory filters
    invCat: "All",
    invStatus: "All",
    invSearch: "",
    // add-equipment modal
    showAdd: false,
    newItem: { cat: "Kite", type: "", size: "", brand: "", model: "", year: 2025, cond: "good", loc: "" },
    // client detail modal
    detail: null,

    save() { localStorage.setItem(STORE_KEY, JSON.stringify(this.db)); },
    resetDemo() { localStorage.removeItem(STORE_KEY); this.db = JSON.parse(JSON.stringify(SEED)); },

    // ---- lookups ----
    staffById(id) { return this.db.staff.find(s => s.id === id) || null; },
    clientById(id) { return this.db.clients.find(c => c.id === id) || null; },
    itemById(id) { return this.db.inventory.find(i => i.id === id) || null; },
    initials(name) { return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase(); },
    gearLabels(ids) { return ids.map(id => { const i = this.itemById(id); return i ? `${i.cat} ${i.size}` : id; }); },

    // ---- schedule / water ----
    get instructors() { return this.db.staff.filter(s => s.type === "instructor"); },
    get todaySessions() { return [...this.db.sessions].sort((a, b) => toMin(a.start) - toMin(b.start)); },
    get onWater() { return this.db.sessions.filter(s => s.status === "on_water"); },
    get returnedToday() { return this.db.sessions.filter(s => s.status === "returned"); },
    get scheduledToday() { return this.db.sessions.filter(s => s.status === "scheduled"); },
    isOverdue(s) { return s.status === "on_water" && toMin(this.now) > toMin(s.eta); },
    get overdueCount() { return this.onWater.filter(s => this.isOverdue(s)).length; },

    checkOut(s) {
      s.status = "on_water"; s.out_at = this.now;
      s.gear.forEach(id => { const i = this.itemById(id); if (i && i.status === "available") i.status = "rented"; });
      this.save();
    },
    checkIn(s) {
      s.status = "returned"; s.in_at = this.now;
      s.gear.forEach(id => { const i = this.itemById(id); if (i && i.status === "rented") i.status = "available"; });
      this.save();
    },

    // ---- inventory ----
    get invCategories() { return ["All", ...Array.from(new Set(this.db.inventory.map(i => i.cat)))]; },
    get filteredInventory() {
      const q = this.invSearch.trim().toLowerCase();
      return this.db.inventory.filter(i =>
        (this.invCat === "All" || i.cat === this.invCat) &&
        (this.invStatus === "All" || i.status === this.invStatus) &&
        (!q || `${i.id} ${i.brand} ${i.model} ${i.type} ${i.size}`.toLowerCase().includes(q))
      );
    },
    countBy(cat, status) { return this.db.inventory.filter(i => i.cat === cat && i.status === status).length; },
    catStatus(cat) {
      const items = this.db.inventory.filter(i => i.cat === cat);
      return { total: items.length, avail: items.filter(i => i.status === "available").length };
    },
    setStatus(item, status) { item.status = status; this.save(); },
    addItem() {
      const n = this.newItem;
      if (!n.size || !n.brand) { alert("Please fill in at least size and brand."); return; }
      const count = this.db.inventory.filter(i => i.cat === n.cat).length + 1;
      const id = `${n.cat.slice(0, 2).toUpperCase()}-NEW-${count}`;
      this.db.inventory.unshift({ id, cat: n.cat, type: n.type || n.cat, size: n.size, brand: n.brand, model: n.model, year: Number(n.year) || 2025, cond: n.cond, status: "available", loc: n.loc || "New stock" });
      this.save();
      this.showAdd = false;
      this.newItem = { cat: "Kite", type: "", size: "", brand: "", model: "", year: 2025, cond: "good", loc: "" };
      this.invCat = "All"; this.invStatus = "All"; this.invSearch = id;
    },

    // ---- dashboard summary ----
    get availableCount() { return this.db.inventory.filter(i => i.status === "available").length; },
    get rentedCount() { return this.db.inventory.filter(i => i.status === "rented").length; },
    get maintCount() { return this.db.inventory.filter(i => i.status === "maintenance").length; },
    get gearSummary() {
      const cats = ["Kite", "Board", "Wing", "Foil board", "Foil", "Harness", "Wetsuit", "Safety", "Bar"];
      return cats.map(c => ({ cat: c, ...this.catStatus(c) })).filter(x => x.total > 0);
    },

    statusBadge(status) {
      return { available: "green", rented: "cyan", maintenance: "orange", decommissioned: "red" }[status] || "gray";
    },
    condBadge(cond) { return { good: "green", worn: "orange", damaged: "red", new: "blue" }[cond] || "gray"; },
    levelBadge(lvl) { return lvl.includes("Beginner") || lvl.includes("L1") ? "gray" : "blue"; },

    // ---- reports helpers ----
    get maxRevDay() { return Math.max(...this.db.reports.revenue_by_day.map(d => d.v)); },
    get maxTopGear() { return Math.max(...this.db.reports.top_gear.map(d => d.rentals)); },
    get maxRevInst() { return Math.max(...this.db.reports.revenue_by_instructor.map(d => d.v)); },
  };
}
