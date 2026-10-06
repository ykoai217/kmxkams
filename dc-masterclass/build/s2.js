const { K, T, B, shape, L, P, ellipse, head, badge, STATE, legend, hub, band, note, card, dot, chain } = require("./lib");

module.exports = function (pres, mk) {
  // ---------------- 5 POWER PATH ----------------
  {
    const s = mk("Electrical", "Electrical chain  |  grid to rack", "A signed grid connection is not rack-level usable capacity");
    const names = ["Grid connection", "HV/MV protection", "Transformer", "Generator + UPS", "LV switchboard", "Busway / PDU", "Rack PDU", "IT load"];
    const x0 = 1.9, bw = 1.18, gap = 0.17, y = 1.65, bh = 1.25;
    const rowL = [["Quantity\ndriver", 3.05], ["Ontology\nbranch", 3.62], ["Commercial\ntrap", 4.2]];
    const qd = ["MVA firm, N-1", "MVA / kA fault level", "MVA, voltage ratio", "kW + minutes + N+x", "Amps, fault rating", "Amps per feed", "kW per rack, A/B", "kW per rack"];
    const br = ["B", "B", "B", "C  D", "E", "E", "E  M", "M"];
    const trap = ["Contract is not energisation", "Protection scheme and who owns the bay", "Package may include RMU, metering, bay", "Generator and UPS sold as sub-systems", "Board rating caps what the room can use", "Tap-off design caps real density", "A and B feeds must be independent", "Density may exceed what the path serves"];
    names.forEach((n, i) => {
      const x = x0 + i * (bw + gap);
      shape(s, "roundRect", x, y, bw, bh, { fill: K.amberL, line: K.amber, lw: 1.25, rectRadius: 0.07 });
      const cx = x + bw / 2;
      // symbols
      if (i === 0) { ellipse(s, cx - 0.23, y + 0.12, 0.46, 0.46, { fill: K.white, line: K.ink, lw: 1.5 }); T(s, "~", cx - 0.23, y + 0.1, 0.46, 0.46, { align: "center", valign: "middle", fontSize: 18, bold: true }); }
      if (i === 1) { L(s, cx - 0.4, y + 0.35, cx - 0.17, y + 0.35, { w: 1.75 }); shape(s, "rect", cx - 0.17, y + 0.2, 0.34, 0.3, { fill: K.white, line: K.ink, lw: 1.5 }); L(s, cx + 0.17, y + 0.35, cx + 0.4, y + 0.35, { w: 1.75 }); }
      if (i === 2) { ellipse(s, cx - 0.3, y + 0.14, 0.36, 0.36, { line: K.ink, lw: 1.75 }); ellipse(s, cx - 0.06, y + 0.14, 0.36, 0.36, { line: K.ink, lw: 1.75 }); }
      if (i === 3) { ellipse(s, cx - 0.5, y + 0.15, 0.36, 0.36, { fill: K.white, line: K.ink, lw: 1.5 }); T(s, "G", cx - 0.5, y + 0.15, 0.36, 0.36, { align: "center", valign: "middle", bold: true, fontSize: 12 }); B(s, "UPS", cx - 0.04, y + 0.17, 0.5, 0.32, { fill: K.white, line: K.ink, lw: 1.5, fontSize: 10, bold: true }); }
      if (i === 4) { shape(s, "rect", cx - 0.32, y + 0.12, 0.64, 0.42, { fill: K.white, line: K.ink, lw: 1.5 }); [0.16, 0.32, 0.48].forEach((o) => L(s, cx - 0.32 + o, y + 0.12, cx - 0.32 + o, y + 0.54, { w: 1 })); }
      if (i === 5) { shape(s, "rect", cx - 0.42, y + 0.2, 0.84, 0.1, { fill: K.ink }); [-0.3, 0, 0.3].forEach((o) => { L(s, cx + o, y + 0.3, cx + o, y + 0.5, { w: 1.5 }); shape(s, "rect", cx + o - 0.05, y + 0.5, 0.1, 0.1, { fill: K.amber, line: K.ink, lw: 0.75 }); }); }
      if (i === 6) { shape(s, "rect", cx - 0.1, y + 0.1, 0.2, 0.54, { fill: K.white, line: K.ink, lw: 1.5 }); [0.18, 0.3, 0.42, 0.54].forEach((o) => ellipse(s, cx - 0.04, y + o - 0.02, 0.08, 0.08, { fill: K.ink })); }
      if (i === 7) { shape(s, "rect", cx - 0.25, y + 0.1, 0.5, 0.56, { fill: K.navy }); [0.18, 0.28, 0.38, 0.48].forEach((o) => L(s, cx - 0.18, y + o, cx + 0.18, y + o, { color: K.white, w: 1 })); }
      T(s, n, x + 0.04, y + 0.74, bw - 0.08, 0.48, { fontSize: 12, bold: true, align: "center", valign: "middle" });
      if (i < 7) L(s, x + bw + 0.01, y + bh / 2, x + bw + gap - 0.01, y + bh / 2, { color: K.ink, w: 2, arrow: true });
      B(s, qd[i], x, 3.05, bw, 0.5, { fill: K.tealL, fontSize: 10.5, r: 0.04 });
      B(s, br[i], x, 3.62, bw, 0.5, { fill: K.slateL, fontSize: 12, bold: true, r: 0.04 });
      B(s, trap[i], x, 4.2, bw, 0.88, { fill: K.redL, fontSize: 10.5, r: 0.04, valign: "top" });
    });
    rowL.forEach(([t, yy], i) => T(s, t, 0.5, yy + (i === 2 ? 0.1 : 0), 1.3, 0.5, { fontSize: 12, bold: true, color: [K.teal, K.slate, K.red][i], valign: i === 2 ? "top" : "middle" }));
    // voltage ribbon
    B(s, "HV or MV, set by the utility connection", x0, 5.28, 2 * bw + gap, 0.34, { fill: K.slateL, fontSize: 10.5, r: 0.04 });
    B(s, "Step down", x0 + 2 * (bw + gap), 5.28, bw, 0.34, { fill: K.slate, color: K.white, fontSize: 10.5, bold: true, r: 0.04 });
    B(s, "LV (0.4 kV in the EXCOOL plan basis, which steps 22 kV to 0.4 kV)", x0 + 3 * (bw + gap), 5.28, 5 * bw + 4 * gap, 0.34, { fill: K.slateL, fontSize: 10.5, r: 0.04 });
    T(s, "Voltage", 0.5, 5.3, 1.3, 0.3, { fontSize: 12, bold: true, color: K.slate });
    // gates
    T(s, "Three different claims about the same megawatt:", 0.5, 5.85, 6, 0.28, { fontSize: 12.5, bold: true, color: K.navy });
    const g = [["Contracted", "right on paper"], ["Energised", "live and protection-approved"], ["Deliverable to rack", "firm through every downstream stage"]];
    g.forEach((t, i) => B(s, [{ text: t[0], options: { bold: true, fontSize: 13, breakLine: true } }, { text: t[1], options: { fontSize: 11 } }], 0.5 + i * 4.15, 6.2, 4.0, 0.72, { shape: "homePlate", fill: [K.amberL, K.greenL, K.violetL][i], line: [K.amber, K.green, K.violet][i], r: 0.07 }));
    s.addNotes(`This is the spine of the electrical story. Read it left to right: grid connection, HV and MV protection, transformer, generator and UPS, LV switchboard, busway and PDU, rack PDU, and finally the IT load. Each box has a little symbol so you start to recognise the equipment in a single-line diagram.

The teal row gives the quantity driver at each stage. This is the single most important habit for a model. At the front of the chain you size in MVA and fault level. At the generator and UPS you size in kilowatts, minutes of runtime and redundancy. At the LV boards and busway you size in amps. At the rack you size in kilowatts per rack. If someone prices every stage in dollars per megawatt, they are hiding four different unit conversions inside one number.

The grey row is the ontology branch, B through E, then M for the rack hardware. The red row is the commercial trap that most often appears at that stage. At the front end the trap is treating a contract as energisation. In the middle the trap is that equipment is sold as sub-systems, so the generator package and the UPS package each contain items that also appear as their own lines elsewhere. At the rack end the trap is that a busway tap-off or an A and B feed design can cap usable density below what the rest of the chain could support.

The ribbon shows voltage. The step-down happens at the transformer. The reference cost plan we use later in this course steps from twenty-two kilovolts to point four kilovolts. That is one example, and real sites differ with the utility.

Finally the three chevrons. Contracted, energised and deliverable to rack are three different claims about the same megawatt. A banker should ask which claim the seller is making, and what evidence sits behind it. A connection agreement is contracted. A utility certificate and a tested protection scheme is energised. Deliverable to rack needs a firm path through every stage you see above.`);
  }

  // ---------------- 6 HV/MV SINGLE LINE ----------------
  {
    const s = mk("Electrical", "Electrical chain  |  HV/MV interface", "The substation is a protected corridor, and every symbol is a priced line");
    const by = 3.35;
    // source
    ellipse(s, 0.6, by - 0.25, 0.5, 0.5, { fill: K.white, line: K.ink, lw: 1.75 }); T(s, "~", 0.6, by - 0.27, 0.5, 0.5, { align: "center", valign: "middle", fontSize: 18, bold: true });
    T(s, "Utility\nHV feed", 0.45, by + 0.32, 0.8, 0.45, { fontSize: 10.5, align: "center" });
    L(s, 1.1, by, 8.0, by, { w: 2.25 });
    // surge arrester at 1.6
    L(s, 1.6, by, 1.6, by + 0.45, { w: 1.5 }); shape(s, "rect", 1.5, by + 0.45, 0.2, 0.32, { fill: K.white, line: K.ink, lw: 1.5 });
    T(s, "Surge arrester\nB-011", 1.2, by + 0.82, 0.95, 0.4, { fontSize: 10, align: "center", color: K.grey });
    // disconnector 2.25
    L(s, 2.1, by, 2.25, by, { w: 2.25, color: K.white }); L(s, 2.1, by, 2.4, by - 0.22, { w: 1.75 });
    T(s, "Disconnector +\nearth switch\nB-004 / B-005", 2.0, by + 0.3, 1.0, 0.55, { fontSize: 10, align: "center", color: K.grey });
    // breaker 3.1
    shape(s, "rect", 2.95, by - 0.15, 0.3, 0.3, { fill: K.ink });
    T(s, "HV circuit\nbreaker B-003", 2.55, by - 0.85, 1.0, 0.5, { fontSize: 10, align: "center", color: K.grey });
    // CT 3.8
    ellipse(s, 3.65, by - 0.15, 0.3, 0.3, { line: K.amber, lw: 2.5 });
    T(s, "CT\nB-006", 3.65, by - 0.6, 0.6, 0.4, { fontSize: 10, align: "center", color: K.grey });
    // VT 4.3
    L(s, 4.3, by, 4.3, by + 0.4, { w: 1.5 }); ellipse(s, 4.17, by + 0.4, 0.26, 0.26, { line: K.ink, lw: 1.5 }); ellipse(s, 4.17, by + 0.58, 0.26, 0.26, { line: K.ink, lw: 1.5 });
    T(s, "VT / CVT\nB-007", 4.42, by + 0.55, 0.8, 0.4, { fontSize: 10, color: K.grey });
    // relay panel
    B(s, "Protection relay B-008\n+ control panel B-018", 2.65, 4.95, 2.4, 0.55, { fill: K.violetL, line: K.violet, fontSize: 10.5, r: 0.05 });
    L(s, 3.1, by + 0.15, 3.1, 4.95, { color: K.violet, dash: "dash", w: 1 }); L(s, 3.8, by + 0.15, 3.8, 4.95, { color: K.violet, dash: "dash", w: 1 }); L(s, 4.3, by + 0.85, 4.3, 4.95, { color: K.violet, dash: "dash", w: 1 });
    B(s, "Substation DC supply\nB-019 charger, B-020 battery", 5.2, 4.95, 2.2, 0.55, { fill: K.violetL, line: K.violet, fontSize: 10.5, r: 0.05 });
    L(s, 5.05, 5.22, 5.2, 5.22, { color: K.violet, w: 1.25 });
    // transformer 5.5
    ellipse(s, 5.35, by - 0.3, 0.5, 0.5, { fill: K.white, line: K.ink, lw: 2 }); ellipse(s, 5.65, by - 0.3, 0.5, 0.5, { fill: K.white, line: K.ink, lw: 2 });
    T(s, "Main power transformer B-015, fans B-033, monitor B-032", 4.6, by - 1.2, 1.8, 0.65, { fontSize: 10, align: "center", color: K.grey });
    L(s, 5.9, by + 0.2, 5.9, by + 0.55, { w: 1.5 }); shape(s, "rect", 5.8, by + 0.55, 0.2, 0.3, { fill: K.white, line: K.ink, lw: 1.5 });
    T(s, "NER B-017", 5.45, by + 0.9, 0.9, 0.25, { fontSize: 10, align: "center", color: K.grey });
    // MV switchboard
    shape(s, "rect", 6.5, by - 0.07, 0.6, 0.14, { fill: K.ink }); shape(s, "rect", 7.2, by - 0.07, 0.6, 0.14, { fill: K.ink });
    shape(s, "rect", 7.08, by - 0.12, 0.14, 0.24, { fill: K.amber, line: K.ink, lw: 1 });
    T(s, "MV switchgear B-021, coupler B-024", 6.55, by - 0.85, 1.5, 0.5, { fontSize: 10, align: "center", color: K.grey });
    [6.7, 7.0, 7.6].forEach((fx) => { L(s, fx, by, fx, by + 0.5, { w: 1.5 }); shape(s, "rect", fx - 0.08, by + 0.5, 0.16, 0.16, { fill: K.ink }); L(s, fx, by + 0.66, fx, by + 1.0, { w: 1.5, arrow: true }); });
    T(s, "MV breakers B-023, cables B-026, terminations B-027", 6.0, by + 1.07, 1.45, 0.7, { fontSize: 10, align: "center", color: K.grey });
    T(s, "to MV/LV transformers, UPS blocks, chillers", 7.55, by + 1.07, 1.4, 0.7, { fontSize: 10, color: K.mid });
    note(s, "Simplified single-line diagram: power flows left to right, dashed violet lines are protection signals.", 0.5, 6.0, 8.2, 0.3);
    // right panel
    const px = 9.15, pw = 3.68;
    T(s, "Why this slide matters to a lender", px, 1.5, pw, 0.3, { fontSize: 13.5, bold: true, color: K.navy });
    const rows = [["Ownership boundary", "Who owns the bay, the utility or the operator? It decides capex and who replaces what."], ["Fault level and protection", "Wrong settings mean nuisance trips or damaged plant. Needs utility approval."], ["Redundant feeds", "Two incoming feeds only help if they are electrically independent."], ["Energisation date", "The date power is truly live is a critical path milestone."]];
    rows.forEach((r, i) => {
      dot(s, i + 1, px, 1.95 + i * 1.05, 0.32, K.amber);
      T(s, r[0], px + 0.42, 1.93 + i * 1.05, pw - 0.42, 0.28, { fontSize: 12.5, bold: true });
      T(s, r[1], px + 0.42, 2.22 + i * 1.05, pw - 0.42, 0.7, { fontSize: 11.5, color: K.grey });
    });
    band(s, 6.4, "GAP", "CURRENT PRICE GAP", "HV switchgear and large transformers are RFQ-heavy with no usable current public price (gap profile GP-B). Use tenders, utility or EPC bills of quantities and executed awards, with scope stated.", 0.62);
    s.addNotes(`This is a simplified single-line diagram, the engineer's way of drawing a power system. Power enters from the utility on the left and moves right. The line is the conductor. Everything hanging off it is a device that protects, measures or switches it.

Walk through it. The surge arrester gives lightning and switching surges a safe path to earth. The disconnector and earth switch let people isolate and ground a section so it can be worked on safely. The circuit breaker is the device that actually interrupts fault current. Fault current is the huge current that flows if something short-circuits. The current transformer and voltage transformer are measurement devices. They shrink the line current and voltage to small signals. Those signals feed the protection relay, which decides in milliseconds whether to trip the breaker. The substation DC battery and charger sit underneath because the protection must still work when AC has failed.

The main power transformer steps voltage down. The neutral earthing resistor limits earth fault current so a fault does not destroy equipment. Then the MV switchgear splits power into feeders, with a bus coupler so two sections can be tied together or separated. MV cables carry power to the next stage.

Why does a finance audience need this? Because every symbol on this slide is an ontology line, and many are bought as part of a bigger package. A single price for a substation bay can contain breakers, instrument transformers, relays and the control panel. If your model also carries those as separate lines, you have double-counted. Package controls in the ontology say that for a transformer or bay package these children are suppressed only when the vendor scope says they are included.

The four points on the right are diligence prompts. Ask who owns the bay. Ask for the protection study and the utility's approval. Ask whether two feeds are truly independent. Ask for the actual energisation date, not the contracted date.

On evidence, this is an area with no usable current public price. The ontology records it as a gap and points you to tenders, bills of quantities and awards. Keep it that way in your model until you have project-specific evidence.`);
  }

  // ---------------- 7 TRANSFORMER ----------------
  {
    const s = mk("Electrical", "Electrical chain  |  transformers", "A transformer is quoted by kVA, and the bay around it is where scope hides");
    // anatomy
    T(s, "Anatomy (simplified)", 0.5, 1.45, 4, 0.3, { fontSize: 13, bold: true, color: K.navy });
    shape(s, "roundRect", 1.2, 2.55, 2.9, 2.55, { fill: K.slateL, line: K.slate, lw: 2, rectRadius: 0.1 });
    // core
    shape(s, "rect", 1.75, 2.95, 1.8, 1.75, { line: K.ink, lw: 6 });
    // windings
    shape(s, "rect", 1.58, 3.25, 0.4, 1.15, { fill: K.amber, line: K.ink, lw: 1 });
    shape(s, "rect", 3.32, 3.25, 0.4, 1.15, { fill: K.teal, line: K.ink, lw: 1 });
    // bushings
    shape(s, "rect", 1.62, 2.1, 0.32, 0.5, { fill: K.white, line: K.ink, lw: 1.5 }); shape(s, "rect", 3.36, 2.1, 0.32, 0.5, { fill: K.white, line: K.ink, lw: 1.5 });
    L(s, 0.6, 2.2, 1.62, 2.2, { color: K.amber, w: 2.5, arrow: true }); L(s, 3.68, 2.2, 4.7, 2.2, { color: K.teal, w: 2.5, arrow: true });
    T(s, "HV in", 0.55, 1.85, 0.8, 0.28, { fontSize: 11, bold: true, color: "A56F00" }); T(s, "LV out", 4.2, 1.85, 0.8, 0.28, { fontSize: 11, bold: true, color: K.teal });
    // fan bank
    B(s, "Fans / pumps\nB-033", 4.25, 3.3, 1.0, 0.7, { fill: K.white, line: K.slate, fontSize: 10, r: 0.05 }); ellipse(s, 4.15, 3.55, 0.18, 0.18, { fill: K.slate });
    // labels
    T(s, [{ text: "Amber coil: HV winding, more turns. ", options: { color: "A56F00", bold: true } }, { text: "Teal coil: LV winding, fewer turns. ", options: { color: K.teal, bold: true } }, { text: "The iron core links them. The tank holds insulating liquid that carries heat to the radiators.", options: { color: K.grey } }], 0.5, 5.25, 4.8, 0.85, { fontSize: 11.5 });
    T(s, "Voltage ratio equals turns ratio. Size is kVA or MVA: how much power it can pass without overheating.", 0.5, 6.2, 4.8, 0.7, { fontSize: 12.5, bold: true, color: K.navy });
    // package hub
    T(s, "Commercial package: what a transformer quote may contain", 5.7, 1.45, 7.0, 0.3, { fontSize: 13, bold: true, color: K.navy });
    hub(s, { id: "B-015", text: "Main power transformer", sub: "parent line" },
      [{ id: "B-006", t: "Current transformer", s: "cond" }, { id: "B-007", t: "Voltage transformer", s: "cond" }, { id: "B-008", t: "Protection relay", s: "cond" }, { id: "B-018", t: "Control / protection panel", s: "cond" }, { id: "B-033", t: "Fan / pump bank", s: "cond" }],
      [{ id: "B-022", t: "MV ring main unit (in EXCOOL quote)", s: "cond" }, { id: "B-009", t: "Revenue meter (in EXCOOL quote)", s: "cond" }, { id: "B-017", t: "Neutral earthing resistor", s: "sep" }, { id: "B-026", t: "MV cable and terminations", s: "sep" }, { id: "B-034", t: "Prefab eHouse: housed is not included", s: "cond" }],
      { x: 5.7, y: 1.85, w: 7.13, h: 3.3 }, { hubW: 1.9, hubH: 1.15, chipW: 2.3, chipH: 0.5, fs: 10.5 });
    legend(s, 5.7, 5.2, ["cond", "sep"], 3.4);
    band(s, 5.55, "HIST", "HISTORICAL Q2 2021", "EXCOOL cost plan, London, supply only: 2.5 MVA £75,000 and 3.0 MVA £90,000, both £30/kVA, quoted with RMU and metering unit. One plan gives two points on one line, with no market curve.", 0.85, 5.7, 7.13);
    band(s, 6.5, "GAP", "CURRENT PRICE GAP", "No current public price for transformers of this class. Use a tender, award or OEM quote with scope.", 0.5, 5.7, 7.13);
    s.addNotes(`A transformer is the simplest big machine in the building. Two coils of wire wrap around a shared iron core. Alternating current in one coil creates a changing magnetic field in the core, which induces a voltage in the other coil. The ratio of turns sets the ratio of voltages. More turns on the high-voltage side, fewer on the low-voltage side, and you step the voltage down. The tank holds an insulating liquid that also carries heat to external radiators, which is why there are fan or pump banks on large units.

A transformer is sized in kVA or MVA, the apparent power it can pass without overheating. That is your quantity driver. Redundancy sits on top: how many transformers are needed so that losing one still leaves enough capacity.

Now the commercial point. When you buy a transformer you rarely buy only the tank and coils. The ontology freezes a package control for the parent line B-015. The current transformer, voltage transformer, protection relay, control panel and fan bank are only suppressed as separate lines when the vendor scope says they are included. The amber colour means conditional, never assumed.

On the right side, the reference cost plan quotes its transformers together with a ring main unit and a metering unit. So a model that takes that price and also adds a separate RMU and meter would double-count. A prefabricated eHouse or substation module is a different trap. The module houses equipment, and the ontology rule is blunt: housed is not included. The vendor bill of materials decides.

On evidence, the only numbers we have are historical. The cost plan from the second quarter of 2021 prices a two-and-a-half MVA unit at seventy-five thousand pounds and a three MVA unit at ninety thousand pounds. Both work out at thirty pounds per kVA. This is supply only, in London, five years old, and from one document. Two points on one line tell you the cost plan scaled linearly. They add nothing about the wider market. Currentising it is an explicit modelling step, which we cover later. The current public price for this class is an open gap.`);
  }

  // ---------------- 8 GENERATOR ANATOMY ----------------
  {
    const s = mk("Electrical", "Electrical chain  |  standby generation", "A generator set is five sub-systems that must all work on the day");
    // dashed package
    shape(s, "roundRect", 3.35, 2.1, 6.0, 2.35, { fill: K.white, line: K.slate, lw: 1.5, dash: "dash", rectRadius: 0.12 });
    T(s, "Genset package, often with acoustic enclosure C-021 and container C-022", 3.5, 2.12, 5.7, 0.26, { fontSize: 10.5, color: K.slate, bold: true });
    // engine
    B(s, [{ text: "Engine subsystem", options: { bold: true, fontSize: 13, breakLine: true } }, { text: "C-004", options: { fontSize: 10, color: K.grey, breakLine: true } }, { text: "Lube oil C-026\nJacket water C-025\nCoolant tank C-030\nCrankcase vent C-027", options: { fontSize: 10.5 } }], 3.55, 2.5, 2.0, 1.55, { fill: K.amberL, line: K.amber, r: 0.07 });
    B(s, [{ text: "Alternator", options: { bold: true, fontSize: 13, breakLine: true } }, { text: "C-003", options: { fontSize: 10, color: K.grey, breakLine: true } }, { text: "turns shaft rotation into electricity", options: { fontSize: 10.5 } }], 5.95, 2.5, 1.6, 1.55, { fill: K.amberL, line: K.amber, r: 0.07 });
    B(s, [{ text: "Control panel", options: { bold: true, fontSize: 12, breakLine: true } }, { text: "C-005", options: { fontSize: 10, color: K.grey, breakLine: true } }, { text: "start, sync, protect", options: { fontSize: 10.5 } }], 7.8, 2.5, 1.35, 1.55, { fill: K.violetL, line: K.violet, r: 0.07 });
    L(s, 5.55, 3.28, 5.95, 3.28, { w: 3, color: K.ink }); T(s, "shaft", 5.45, 3.35, 0.6, 0.2, { fontSize: 9.5, color: K.grey, align: "center" });
    // fuel chain
    const fy = [1.55, 2.4, 3.25];
    B(s, "Bulk tank\nC-009", 0.5, fy[0], 1.7, 0.6, { fill: K.slateL, line: K.slate, fontSize: 11, r: 0.05 });
    B(s, "Transfer pump C-010\nPolish / filter C-011, C-012", 0.5, fy[1], 1.7, 0.6, { fill: K.slateL, line: K.slate, fontSize: 10, r: 0.05 });
    B(s, "Day tank C-008", 0.5, fy[2], 1.7, 0.6, { fill: K.slateL, line: K.slate, fontSize: 11, r: 0.05 });
    L(s, 1.35, 2.15, 1.35, 2.4, { w: 1.75, arrow: true }); L(s, 1.35, 3.0, 1.35, 3.25, { w: 1.75, arrow: true });
    P(s, [[2.2, 3.55], [3.0, 3.55], [3.0, 3.3], [3.55, 3.3]], { w: 2, color: K.amber, arrow: true });
    T(s, "FUEL", 0.5, 1.28, 1.2, 0.25, { fontSize: 10.5, bold: true, color: K.slate });
    // exhaust
    T(s, "EXHAUST", 3.55, 1.28, 1.2, 0.25, { fontSize: 10.5, bold: true, color: K.slate });
    B(s, "SCR C-016 / DOC-DPF C-017", 3.55, 1.55, 2.3, 0.4, { fill: K.slateL, line: K.slate, fontSize: 10, r: 0.05 });
    B(s, "Silencer C-014", 6.05, 1.55, 1.3, 0.4, { fill: K.slateL, line: K.slate, fontSize: 10, r: 0.05 });
    B(s, "Stack C-015", 7.55, 1.55, 1.1, 0.4, { fill: K.slateL, line: K.slate, fontSize: 10, r: 0.05 });
    L(s, 4.6, 2.5, 4.6, 1.95, { w: 1.75, arrow: true }); L(s, 5.85, 1.75, 6.05, 1.75, { w: 1.75, arrow: true }); L(s, 7.35, 1.75, 7.55, 1.75, { w: 1.75, arrow: true });
    // cooling
    B(s, "Radiator / remote cooler C-018", 3.55, 4.75, 2.4, 0.45, { fill: K.tealL, line: K.teal, fontSize: 10.5, r: 0.05 });
    L(s, 4.5, 4.75, 4.5, 4.05, { w: 1.75, color: K.teal, both: true });
    T(s, "COOLING", 3.55, 4.52, 1.0, 0.22, { fontSize: 10.5, bold: true, color: K.teal });
    B(s, "Starting battery C-019\nBlock heater C-020", 6.3, 4.75, 2.5, 0.45, { fill: K.white, line: K.mid, fontSize: 10, r: 0.05 });
    // output
    B(s, "Output breaker\nC-007", 9.7, 2.85, 1.35, 0.85, { fill: K.amberL, line: K.amber, fontSize: 10.5, r: 0.05 });
    B(s, "Paralleling\nswitchgear C-006", 11.35, 2.85, 1.45, 0.85, { fill: K.amberL, line: K.amber, fontSize: 10.5, r: 0.05 });
    L(s, 9.15, 3.28, 9.7, 3.28, { w: 2.5, color: K.amber, arrow: true }); L(s, 11.05, 3.28, 11.35, 3.28, { w: 2.5, color: K.amber, arrow: true });
    T(s, "to LV board and UPS input", 10.0, 3.8, 2.7, 0.3, { fontSize: 11, bold: true, color: "A56F00" });
    B(s, "Load bank C-023\n(permanent test load)", 10.0, 4.4, 2.6, 0.55, { fill: K.white, line: K.mid, dash: "dash", fontSize: 10.5, r: 0.05 });
    L(s, 11.3, 3.7, 11.3, 4.4, { w: 1.25, dash: "dash", color: K.mid });
    // bottom cards
    card(s, "First principles", "Diesel burns, the engine turns a shaft, the alternator makes AC. It must start and take load in seconds, because the UPS battery only bridges minutes.", 0.5, 5.45, 4.0, 1.5, K.amber);
    card(s, "Quantity driver", "Critical MW, generator block size and redundancy (QG). Autonomy in hours of fuel is a separate driver (QV): tank volume.", 4.65, 5.45, 4.0, 1.5, K.teal);
    card(s, "Why finance cares", "Emissions permits, running-hour limits and fuel logistics can cap how much the backup is worth, whatever the nameplate says.", 8.8, 5.45, 4.03, 1.5, K.red);
    s.addNotes(`A standby generator is a power station in a box, and it is easiest to understand as five sub-systems that all have to work together on the day.

Fuel on the left. Fuel sits in a bulk tank, is moved by a transfer pump, is filtered and polished so water and sediment do not clog the engine, and is held in a small day tank next to the engine. Autonomy, meaning how many hours the site can run without refuelling, is set by tank volume. That is a storage driver, separate from the generator rating.

The engine in the middle burns fuel and turns a shaft. Around the engine are the support systems: lubrication, jacket-water cooling, a coolant header tank and crankcase ventilation. The alternator on the same shaft turns rotation into electricity. The local control panel starts the set, synchronises it with other sets and protects it.

Exhaust is on top. Gas leaves through emissions treatment, where the SCR or particulate filter sits, then a silencer, then a stack. Cooling is at the bottom, with a radiator or remote cooler that rejects engine heat. A starting battery and a block heater keep the engine ready to start quickly. A permanent load bank lets operators test the set without touching the live load.

On the right the electricity goes through the output breaker and the paralleling switchgear, which lets several sets share a bus, and then on to the LV board and the UPS input.

Why does the UPS matter here? The generator needs seconds to start and stabilise. The UPS battery covers that gap. So the reliability of the whole site depends on the handshake between these two systems, which commissioning must prove.

For finance, three things. First, the nameplate megawatt is only valuable if permits allow it to run and the fuel can be delivered. Second, most of the boxes on this diagram can appear as their own ontology line and as a child inside a complete-set price, which is the next slide. Third, generators have large service and overhaul needs. The ontology holds no numeric life for them, because engine families differ, and it warns against inferring overhaul hours across families.`);
  }

  // ---------------- 9 GENSET PACKAGE ----------------
  {
    const s = mk("Electrical", "Electrical chain  |  generator package", "A complete genset price already contains most of its own parts");
    hub(s, { id: "C-001", text: "Diesel / HVO generator set", sub: "complete package price" },
      [
        { id: "C-003", t: "Alternator", s: "inc" }, { id: "C-004", t: "Engine subsystem", s: "inc" }, { id: "C-005", t: "Local control panel", s: "inc" }, { id: "C-019", t: "Starting battery / charger", s: "inc" },
        { id: "C-025", t: "Jacket-water pump", s: "inc" }, { id: "C-026", t: "Lube-oil system", s: "inc" }, { id: "C-027", t: "Crankcase ventilation", s: "inc" }, { id: "C-030", t: "Coolant expansion tank", s: "inc" },
      ],
      [
        { id: "C-007", t: "Output breaker", s: "cond" }, { id: "C-008", t: "Day tank", s: "cond" }, { id: "C-014", t: "Exhaust silencer", s: "cond" }, { id: "C-015", t: "Exhaust stack", s: "cond" }, { id: "C-016", t: "SCR emissions package", s: "cond" },
        { id: "C-017", t: "DOC / DPF emissions", s: "cond" }, { id: "C-018", t: "Radiator / remote cooler", s: "cond" }, { id: "C-020", t: "Jacket-water / block heater", s: "cond" }, { id: "C-021", t: "Acoustic enclosure", s: "cond" },
      ],
      { x: 0.5, y: 1.4, w: 12.33, h: 3.75 }, { hubW: 2.9, hubH: 1.4, chipW: 3.4, chipH: 0.33, fs: 11 });
    legend(s, 0.5, 5.2, ["inc", "cond", "unk"], 3.6);
    T(s, "Outside the frozen rules, confirm per quote:", 0.5, 5.52, 3.6, 0.3, { fontSize: 11.5, bold: true, color: K.grey, valign: "middle" });
    [["C-006", "Paralleling switchgear"], ["C-009", "Bulk fuel tank"], ["C-011", "Fuel polishing skid"], ["C-023", "Permanent load bank"]].forEach((c, i) => B(s, [{ text: c[0] + "  ", options: { bold: true, color: K.grey, fontSize: 9.5 } }, { text: c[1], options: { fontSize: 11 } }], 4.1 + i * 2.2, 5.52, 2.1, 0.32, { fill: K.white, line: K.mid, r: 0.05, align: "left", margin: 0.08 }));
    band(s, 5.98, "HIST", "HISTORICAL Q2 2021", "EXCOOL, supply only, with 24h belly tank and NER: 2,000 kW £637,500, 2,500 kW £765,000, 3,000 kW £941,250. That is £319, £306 and £314 per kW.", 0.46);
    band(s, 6.5, "CAL", "CALIBRATION ONLY", "Marketplace 2 MW asks calibrate, never price. The Cardonald generator award (£187,377, rating absent) includes wiring and switchgear.", 0.46);
    s.addNotes(`This slide is about double-counting, which is the most common way a bottom-up cost model overstates capex.

In the middle is the parent line, C-001, the complete diesel or HVO generator set. When a vendor quotes a complete packaged genset, the quote normally includes the standard engine-generator assembly. The eight green chips on the left are the children the ontology freezes as default-included. If your model takes a complete-set price and also adds an alternator line, an engine line, a control panel line, a starting battery line and the rest, you are paying for the same machine twice. The ontology's rule is to suppress those children's acquisition capex and keep them in the model for lifecycle and replacement analysis. That distinction matters. The alternator can still wear out and appears in the replacement schedule, even without a separate purchase line.

The amber chips on the right are conditional. The output breaker, day tank, silencer, stack, emissions packages, radiator, block heater and enclosure are included only when the vendor's scope says so. There is no universal assumption frozen, because vendors differ. A complete set with a sound-attenuated enclosure includes the enclosure. A bare set does not. A site with a remote radiator excludes the radiator from the set price. Your job is to read the quote.

The white chips are outside the frozen rules. Paralleling gear, the bulk tank, polishing skids and the permanent load bank often sit in separate packages. No rule exists, so confirm each one.

At the bottom, the evidence. The reference cost plan from the second quarter of 2021 gives three generator points with a twenty-four hour belly tank and neutral earthing resistor included, supply only. They are around three hundred and six to three hundred and nineteen pounds per kW. That is a historical package anchor. It dates from 2021.

For current evidence the picture is weaker. Marketplace asking prices exist for two-megawatt sets. Asking prices, used units and unspecified configuration make them calibration only. The Cardonald award is an executed price, which is strong. It bundles a generator with wiring and switchgear and does not state the rating. It is installed-package evidence. It cannot be unit-normalised.`);
  }
};
