const { ecard, K, T, B, shape, L, P, ellipse, head, badge, STATE, legend, hub, band, note, card, dot, chain } = require("./lib");

module.exports = function (pres, mk) {
  // ---------------- 18 DIRECT TO CHIP ----------------
  {
    const s = mk("Thermal", "Thermal chain  |  direct-to-chip liquid cooling", "Direct-to-chip cooling brings the coolant to the chip itself");
    // rack
    const rx = 2.6, ry = 1.65, rw = 2.7, rh = 4.0;
    shape(s, "rect", rx, ry, rw, rh, { fill: K.mist, line: K.ink, lw: 2 });
    T(s, "Rack", rx, ry - 0.28, rw, 0.25, { fontSize: 11, bold: true, align: "center", color: K.navy });
    for (let i = 0; i < 4; i++) {
      const sy = ry + 0.2 + i * 0.92;
      shape(s, "rect", rx + 0.4, sy, rw - 0.8, 0.75, { fill: K.white, line: K.slate, lw: 1 });
      [0.55, 1.35].forEach((o) => {
        shape(s, "rect", rx + o, sy + 0.2, 0.4, 0.35, { fill: K.teal });
        // tubes to manifolds
      });
      L(s, rx + 0.95, sy + 0.3, rx + 1.35, sy + 0.3, { color: K.cool, w: 1.5 });
      L(s, rx + 1.75, sy + 0.5, rx + rw - 0.3, sy + 0.5, { color: K.cool, w: 1.5 });
      L(s, rx + 0.55, sy + 0.4, rx + 0.3, sy + 0.4, { color: K.warm, w: 1.5 });
      ellipse(s, rx + rw - 0.38, sy + 0.44, 0.12, 0.12, { fill: K.amber, line: K.ink, lw: 0.75 });
      ellipse(s, rx + 0.24, sy + 0.34, 0.12, 0.12, { fill: K.amber, line: K.ink, lw: 0.75 });
    }
    // manifolds
    shape(s, "rect", rx + rw - 0.3, ry + 0.1, 0.14, rh - 0.2, { fill: K.cool });
    shape(s, "rect", rx + 0.16, ry + 0.1, 0.14, rh - 0.2, { fill: K.warm });
    // row manifold + CDU
    shape(s, "rect", rx + 0.1, ry + rh + 0.25, rw + 1.6, 0.12, { fill: K.cool });
    shape(s, "rect", rx - 0.5, ry + rh + 0.5, rw + 2.2, 0.12, { fill: K.warm });
    L(s, rx + rw - 0.23, ry + rh - 0.1, rx + rw - 0.23, ry + rh + 0.31, { color: K.cool, w: 2, arrow: true });
    L(s, rx + 0.23, ry + rh - 0.1, rx + 0.23, ry + rh + 0.56, { color: K.warm, w: 2 });
    B(s, "To CDU", rx + rw + 1.8, ry + rh + 0.15, 0.9, 0.55, { fill: K.navy, color: K.white, bold: true, fontSize: 11, r: 0.05 });
    // residual air
    P(s, [[0.55, 2.5], [rx, 2.5]], { color: K.warm, w: 2.5, arrow: true });
    T(s, "Cool room air still serves memory, drives and power supplies", 0.5, 2.6, 1.9, 0.9, { fontSize: 10.5, color: K.grey });
    // labels (right of rack)
    const labs = [["Cold plate H-001", 2.2, 2.55], ["Quick-disconnect H-005", 3.0, 2.5], ["Rack manifold H-002, supply (blue) and return (red)", 3.8, 2.6]];
    T(s, "Cold plates H-001 sit on the hottest chips", 5.55, 1.9, 2.4, 0.5, { fontSize: 10.5, color: K.ink }); L(s, 5.5, 2.15, 4.05, 2.15, { w: 0.75, color: K.mid });
    T(s, "Quick-disconnects H-005 (amber dots) allow servers to be pulled without draining", 5.55, 2.75, 2.4, 0.7, { fontSize: 10.5 }); L(s, 5.5, 3.0, 5.05, 3.0, { w: 0.75, color: K.mid });
    T(s, "Rack manifolds H-002: supply blue, return red", 5.55, 3.7, 2.4, 0.5, { fontSize: 10.5 }); L(s, 5.5, 3.95, 5.18, 3.95, { w: 0.75, color: K.mid });
    T(s, "Hoses H-004 and supports H-033, row manifold H-003, leak detection H-014", 5.55, 4.55, 2.5, 0.8, { fontSize: 10.5 });
    note(s, "Simplified. Real servers carry many plates and parallel micro-channels.", 0.5, 6.7, 6.5, 0.25);
    // right panel
    const px = 8.45, pw = 4.38;
    card(s, "First principles", "Water holds more than 3,000 times more heat per unit volume than air. Moving coolant to the chip removes heat at the source, so far fewer fans are needed in the room.", px, 1.5, pw, 1.55, K.teal);
    card(s, "Quantity driver", "Cold plates, manifolds and quick-disconnects scale per rack (QR). CDUs scale with thermal load (QC). Coolant is a volume in litres (QF).", px, 3.2, pw, 1.4, K.amber);
    card(s, "Commercial risk", "Liquid-ready and liquid-installed are different states. Warranty, hose and coupling quality and leak response sit with several parties.", px, 4.75, pw, 1.3, K.red);
    ecard(s, "GAP", "CURRENT PRICE GAP", "Liquid cooling is largely quote-based. Public price is very weak and tenders are emerging (GP-H), so no number is shown.", px, 6.15, pw, 0.82, 1.6);
    s.addNotes(`Direct-to-chip cooling is the technology behind high-density AI racks. The idea is simple. Put the coolant on the chip.

In an air-cooled server, fans push air over heat sinks and the heat ends up in the room. In direct-to-chip, a metal cold plate sits on the hottest chips, the CPUs and GPUs. Coolant flows through it and carries heat away through tubes. On the diagram the small teal squares are cold plates. Blue tubes bring cool coolant to them and red tubes take warm coolant away. Vertical manifolds on each side of the rack distribute and collect it. Quick-disconnect couplings, the amber dots, let operators pull a server out without draining the system. A row manifold at the bottom gathers the flow from several racks and sends it to the CDU, which we look at next.

Why bother? From first principles, water holds more than three thousand times more heat per unit volume than air. That is why a thin pipe can carry what takes a roar of fans in air. It lets rack densities rise beyond what air can handle. The orange arrow on the left is a reminder that cold plates take the hottest chips. Memory, drives and power supplies still shed heat into the air, so you still need some air cooling. Hybrid is the normal case.

For quantity drivers, three things scale differently. Cold plates, manifolds and quick-disconnects scale per rack. CDUs scale with thermal load. Coolant scales with litres, the volume in the loop.

Commercial risk is the distinction between liquid-ready and liquid-installed. A hall can have the space, the pipe routes and the plant capacity, and still have no cold plates in any rack. Responsibility is shared. The server maker owns the plates, the rack integrator the manifolds, the facility the CDUs and pipework, and the customer the hardware warranty. When a leak happens, who pays is a contractual question that diligence should answer in advance.

On evidence, the red badge applies. Public prices for liquid cooling are very weak and tenders are only emerging. The ontology flags the plates, the manifolds and the CDU family as provenance evidence of what exists and no price evidence. So no number is shown on this slide, deliberately.`);
  }

  // ---------------- 19 CDU ANATOMY ----------------
  {
    const s = mk("Thermal", "Thermal chain  |  coolant distribution unit", "A CDU is a heat exchanger with pumps, filters and a brain");
    // CDU box
    shape(s, "roundRect", 4.0, 1.75, 5.0, 3.75, { fill: K.mist, line: K.navy, lw: 2.25, rectRadius: 0.1 });
    T(s, "CDU", 4.15, 1.8, 1.0, 0.3, { fontSize: 13, bold: true, color: K.navy });
    // HX
    B(s, "Plate heat\nexchanger\nH-010", 5.9, 2.85, 1.2, 1.7, { fill: K.white, line: K.navy, lw: 1.75, fontSize: 10.5, bold: true, r: 0.04 });
    // TCS lines
    L(s, 5.9, 3.3, 0.6, 3.3, { color: K.cool, w: 3, arrow: true });
    L(s, 0.6, 4.3, 5.9, 4.3, { color: K.warm, w: 3, arrow: true });
    // FWS lines
    L(s, 12.4, 3.3, 7.1, 3.3, { color: K.teal, w: 3, arrow: true });
    L(s, 7.1, 4.3, 12.4, 4.3, { color: K.teal, w: 3, arrow: true });
    B(s, "Pump module\nduty + standby H-009", 4.35, 3.0, 1.35, 0.6, { fill: K.white, line: K.slate, fontSize: 9.5, r: 0.05 });
    B(s, "Filtration\nH-011", 4.35, 4.0, 1.35, 0.6, { fill: K.white, line: K.slate, fontSize: 9.5, r: 0.05 });
    B(s, "Expansion / buffer\ntank H-030, H-031", 4.35, 2.15, 1.35, 0.6, { fill: K.white, line: K.slate, fontSize: 9.5, r: 0.05 }); L(s, 5.0, 2.75, 5.0, 3.0, { w: 1.25, color: K.slate });
    B(s, "Control valve\n(facility side)", 7.6, 3.0, 1.2, 0.6, { fill: K.white, line: K.teal, fontSize: 9.5, r: 0.05 });
    B(s, "Controller / PLC H-015", 7.4, 2.0, 1.45, 0.5, { fill: K.violetL, line: K.violet, fontSize: 9.5, bold: true, r: 0.05 });
    L(s, 8.2, 2.5, 8.2, 3.0, { color: K.violet, dash: "dash", w: 1.25 }); L(s, 7.4, 2.25, 5.0, 2.25, { color: K.violet, dash: "dash", w: 1.25 });
    B(s, "Coolant-quality sensors H-012\nLeak detection H-014", 4.35, 4.85, 2.5, 0.5, { fill: K.violetL, line: K.violet, fontSize: 9.5, r: 0.05 });
    B(s, "Air separator H-032\nFill / make-up H-029", 7.1, 4.85, 1.75, 0.5, { fill: K.white, line: K.slate, fontSize: 9.5, r: 0.05 });
    // outside labels
    T(s, [{ text: "Technology loop (TCS)", options: { bold: true, color: K.warm, breakLine: true } }, { text: "clean, controlled coolant to and from the rack manifolds", options: { color: K.grey } }], 0.6, 1.9, 3.2, 0.9, { fontSize: 11.5 });
    T(s, "cool supply to racks", 1.0, 3.35, 2.6, 0.25, { fontSize: 10.5, color: K.cool, bold: true });
    T(s, "warm return from racks", 1.0, 4.35, 2.6, 0.25, { fontSize: 10.5, color: K.warm, bold: true });
    T(s, [{ text: "Facility water loop (FWS)", options: { bold: true, color: K.teal, breakLine: true } }, { text: "plant water that carries the heat away", options: { color: K.grey } }], 9.4, 1.9, 3.4, 0.9, { fontSize: 11.5 });
    T(s, "cool supply from plant", 9.5, 3.35, 2.8, 0.25, { fontSize: 10.5, color: K.teal, bold: true });
    T(s, "warmed return to plant", 9.5, 4.35, 2.8, 0.25, { fontSize: 10.5, color: K.teal, bold: true });
    T(s, "The two loops never mix. Heat crosses the plate wall.", 0.6, 5.0, 3.2, 0.5, { fontSize: 11.5, bold: true, color: K.navy });
    const cs = [
      ["Physical job", "Isolate the delicate chip loop from building water, hold coolant temperature and flow, and filter the fluid.", K.teal],
      ["Quantity driver", "Thermal load (kWth) or rack count, depending on form factor: in-rack H-006, in-row H-007, facility-scale H-008. Pumps and CDUs add N+1.", K.amber],
      ["Commercial risk", "'CDU' can mean a rack box or a plant-room skid. The quote may or may not include pumps, heat exchanger, filters and controls.", K.red],
    ];
    cs.forEach((c, i) => card(s, c[0], c[1], 0.5 + i * 4.18, 5.65, 3.95, 1.32, c[2]));
    s.addNotes(`This is the slide that turns a black box into a system. A coolant distribution unit, the CDU, sits between the delicate rack loop and the facility's water.

Start with the two loops. On the left in amber and blue is the technology loop, sometimes called the secondary or TCS loop. It carries clean, controlled coolant to the racks and returns it warm. On the right in teal is the facility water loop, which carries the heat to the plant. The two loops never mix. Heat crosses the thin metal plates of the plate heat exchanger in the middle.

Why separate them? Because the chips need a very clean, chemically controlled fluid at a stable temperature. Building water is dirtier and shared. The CDU is the gatekeeper.

Now the components inside, which are all ontology lines. A pump module with duty and standby pumps keeps the coolant moving. A filtration module catches particles. An expansion or buffer tank absorbs volume changes. An air separator and fill and make-up keep the loop topped up and free of bubbles. A control valve on the facility side modulates how much facility water flows, which controls the coolant temperature. A controller or PLC runs all of it. Coolant-quality sensors and leak detection watch for trouble and can trigger alarms or shutdown.

Why does a banker need this? Because 'CDU' names a product family and defines no scope. It might mean a small box in a rack, a unit between two racks or a plant-room skid serving a whole hall. A quote for a CDU may include the pumps, the heat exchanger, the filters and the controls, or some of them. If you price pumps and controls separately and the quote already contains them, you pay twice. If the quote excludes them and you assume it includes them, you under-budget.

Quantity drivers follow thermal load. A CDU is rated in kilowatts thermal. How many you need is thermal load divided by unit capacity, plus redundancy. The manufacturers we see disclose redundant pumps, filtration and controls as part of the architecture, which tells us what is inside. It does not tell us the price.`);
  }

  // ---------------- 20 CDU PACKAGE ----------------
  {
    const s = mk("Thermal", "Thermal chain  |  CDU commercial package", "No CDU scope is frozen, so every quote needs a bill of materials");
    // size ladder
    T(s, "Three form factors, three scales", 0.5, 1.45, 3.4, 0.28, { fontSize: 13, bold: true, color: K.navy });
    [["In-rack CDU", "H-006", "per rack (QR)", 0.6], ["In-row CDU", "H-007", "per block (QC)", 1.1], ["Facility CDU", "H-008", "per block (QC)", 1.6]].forEach((f, i) => {
      const y = 1.9 + i * 1.12;
      B(s, "", 0.5, y, f[3], 0.85, { fill: K.tealL, line: K.teal, r: 0.05 });
      T(s, [{ text: f[0], options: { bold: true, fontSize: 12, breakLine: true } }, { text: f[1] + "  |  " + f[2], options: { fontSize: 10.5, color: K.grey } }], 0.5 + f[3] + 0.12, y + 0.14, 3.55 - f[3] - 0.12, 0.65, {});
    });
    note(s, "Bar length is symbolic, not to scale.", 0.5, 5.25, 3.4, 0.25);
    hub(s, { id: "H-006 to H-008", text: "CDU quote", sub: "scope per vendor" },
      [
        { id: "H-009", t: "Pump module", s: "unk" }, { id: "H-010", t: "Plate heat exchanger", s: "unk" }, { id: "H-011", t: "Filtration module", s: "unk" }, { id: "H-015", t: "Controller / PLC", s: "unk" },
        { id: "H-012", t: "Coolant-quality sensors", s: "unk" }, { id: "H-014", t: "Leak detection", s: "unk" },
      ],
      [
        { id: "H-003", t: "Row / facility manifold", s: "sep" }, { id: "H-004", t: "Flexible hoses", s: "sep" }, { id: "H-005", t: "Quick-disconnects", s: "sep" }, { id: "H-013", t: "Coolant fill (litres)", s: "sep" },
        { id: "H-030", t: "Expansion / buffer tanks", s: "unk" }, { id: "H-032", t: "Air separator", s: "unk" },
      ],
      { x: 4.2, y: 1.45, w: 8.63, h: 3.7 }, { hubW: 2.1, hubH: 1.2, chipW: 2.55, chipH: 0.4, fs: 11 });
    legend(s, 4.2, 5.2, ["unk", "sep"], 3.6);
    // diligence
    shape(s, "roundRect", 0.5, 5.6, 8.1, 1.35, { fill: K.white, line: K.line, lw: 0.75, rectRadius: 0.06 });
    T(s, "Diligence questions for any CDU quote", 0.65, 5.66, 7.5, 0.28, { fontSize: 12.5, bold: true, color: K.teal });
    T(s, ["1  Which of pumps, exchanger, filters, controls and sensors are in the price?", "2  Is redundancy inside the unit, or created by buying N+1 units?", "3  Who supplies the coolant and the first fill?", "4  Who owns warranty if a hose, coupling or fluid fails?"].map((x, i, a) => ({ text: x, options: { breakLine: i < a.length - 1 } })), 0.65, 5.95, 7.8, 0.95, { fontSize: 11 });
    ecard(s, "GAP", "CURRENT PRICE GAP", "CDU public price is very weak. OEM disclosures of redundant pumps, filtration and controls describe architecture, with no price.", 8.8, 5.6, 4.03, 1.35, 1.7);
    s.addNotes(`Compare this slide with the generator and UPS package slides. There, the ontology froze rules about which children sit inside the parent price. For CDUs it has not. That is why every chip on the hub is white or grey. No inclusion rule exists, so no assumption is safe.

The left side shows three forms of CDU. An in-rack CDU serves one rack and scales per rack. An in-row CDU serves a row or a block of racks. A facility-scale CDU serves a larger thermal block, typically in a plant room. The ontology classifies the first as a per-rack driver and the other two as per thermal block. The bars are symbolic. They show only that these are different scales.

On the hub, the left chips are items that may sit inside a CDU quote. Pump module, plate heat exchanger, filtration, controller, coolant-quality sensors, leak detection, expansion tanks and the air separator. The right chips are items usually outside, such as the row manifold, hoses and quick-disconnects, and the first coolant fill, which is a volume driver. Those are tendencies and no rules. The only way to settle the boundary is to read the vendor's bill of materials.

Four diligence questions are listed. Which of the internal parts are in the price? Is redundancy inside the unit, for example duty and standby pumps, or created by buying extra units? Who supplies the coolant and the first fill? Who owns the warranty if a hose, a coupling or the fluid fails? Notice that all four are about boundaries and responsibilities. None is about price.

On evidence, the current public price for CDUs is very weak, and the ontology records it as a gap. Where manufacturers publish architecture, such as redundant pumps and filtration, that evidence helps you build a checklist. It does not give you a unit rate. A quote or a tender return, with scope stated, is what you need. Until then, carry a clearly labelled placeholder range or exclude the item from the point estimate and flag it.`);
  }

  // ---------------- 21 RDHX AND IMMERSION ----------------
  {
    const s = mk("Thermal", "Thermal chain  |  rear-door and immersion cooling", "Rear doors extend air halls, and immersion replaces air altogether");
    // left panel RDHx
    shape(s, "roundRect", 0.5, 1.45, 6.05, 3.7, { fill: K.white, line: K.line, lw: 1, rectRadius: 0.08 });
    T(s, "Rear-door heat exchanger  |  H-016 to H-019", 0.7, 1.52, 5.6, 0.3, { fontSize: 13, bold: true, color: K.navy });
    shape(s, "rect", 1.2, 2.2, 2.2, 2.4, { fill: K.mist, line: K.ink, lw: 2 });
    for (let i = 0; i < 6; i++) shape(s, "rect", 1.4, 2.35 + i * 0.36, 1.6, 0.26, { fill: K.navy });
    shape(s, "rect", 3.4, 2.2, 0.45, 2.4, { fill: K.tealL, line: K.teal, lw: 2 });
    for (let i = 0; i < 6; i++) L(s, 3.4, 2.4 + i * 0.35, 3.85, 2.4 + i * 0.35, { color: K.teal, w: 1 });
    P(s, [[0.7, 3.4], [1.2, 3.4]], { color: K.cool, w: 2.5, arrow: true }); T(s, "room air in", 0.55, 3.45, 0.8, 0.25, { fontSize: 9.5, color: K.cool });
    P(s, [[3.0, 3.0], [3.4, 3.0]], { color: K.warm, w: 2.5, arrow: true });
    P(s, [[3.85, 3.0], [4.6, 3.0]], { color: K.cool, w: 2.5, arrow: true }); T(s, "room-neutral air out", 4.0, 3.05, 1.5, 0.25, { fontSize: 9.5, color: K.cool });
    B(s, "Fan module\nH-018 (active only)", 4.35, 3.5, 1.2, 0.6, { fill: K.white, line: K.slate, fontSize: 9.5, r: 0.05 });
    B(s, "Valve / control\nH-019", 4.35, 4.22, 1.2, 0.45, { fill: K.white, line: K.slate, fontSize: 9.5, r: 0.05 });
    L(s, 3.62, 4.6, 3.62, 4.82, { color: K.teal, w: 2.5 }); L(s, 3.62, 4.82, 5.5, 4.82, { color: K.teal, w: 2.5, arrow: true });
    T(s, "water to and from the facility loop", 3.7, 4.88, 2.4, 0.2, { fontSize: 9.5, color: K.teal });
    T(s, "Heat is caught as it leaves the rack. The hall stays an air hall.", 0.7, 4.72, 2.7, 0.4, { fontSize: 10.5, color: K.grey });
    // right panel immersion
    shape(s, "roundRect", 6.78, 1.45, 6.05, 3.7, { fill: K.white, line: K.line, lw: 1, rectRadius: 0.08 });
    T(s, "Immersion cooling  |  H-020 to H-027", 6.98, 1.52, 5.6, 0.3, { fontSize: 13, bold: true, color: K.navy });
    shape(s, "roundRect", 7.1, 2.2, 2.9, 2.3, { fill: K.amberL, line: K.amber, lw: 2.5, rectRadius: 0.05 });
    T(s, "dielectric fluid H-021 / H-022", 7.2, 2.25, 2.7, 0.22, { fontSize: 9.5, color: "8A5A00", bold: true });
    for (let i = 0; i < 4; i++) shape(s, "rect", 7.35 + i * 0.62, 2.6, 0.4, 1.7, { fill: K.navy });
    B(s, "Pump H-023\nfilter H-024", 10.3, 2.35, 1.2, 0.65, { fill: K.white, line: K.slate, fontSize: 9.5, r: 0.05 });
    B(s, "Heat exchanger /\nCDU H-025", 10.3, 3.35, 1.2, 0.65, { fill: K.tealL, line: K.teal, fontSize: 9.5, r: 0.05 });
    P(s, [[10.0, 2.6], [10.3, 2.6]], { color: K.warm, w: 2.25, arrow: true }); L(s, 10.9, 3.0, 10.9, 3.35, { color: K.warm, w: 2.25, arrow: true });
    P(s, [[10.3, 3.9], [9.0, 3.9]], { color: K.cool, w: 2.25, arrow: true });
    L(s, 11.5, 3.7, 12.6, 3.7, { color: K.teal, w: 2.5, arrow: true }); T(s, "facility water", 11.55, 3.75, 1.2, 0.22, { fontSize: 9.5, color: K.teal });
    T(s, "Service kit: hoist H-027, fluid cart H-026, drip tray H-035, fluid storage H-034.", 7.0, 4.62, 5.6, 0.5, { fontSize: 10.5, color: K.grey });
    // bottom row
    card(s, "Rear-door: what to ask", "Passive or active? Active doors add fans and power. Door-water temperature, valve control and who owns leak response at the rack.", 0.5, 5.3, 4.0, 1.65, K.teal);
    card(s, "Immersion: what to ask", "Single- or two-phase fluid? Fluid is a volume (QF) and a long-term asset. Floor loading, OEM warranty acceptance and hardware compatibility decide viability.", 4.65, 5.3, 4.2, 1.65, K.amber);
    card(s, "Evidence and lifecycle", "No public numeric price. Fluid checks are scheduled, and the ontology holds no numeric fluid life, so none is shown. Do not infer one.", 9.0, 5.3, 3.83, 1.65, K.red);
    s.addNotes(`Two more liquid approaches, at opposite ends of the commitment spectrum.

On the left, the rear-door heat exchanger. This is a radiator mounted on the back door of a normal rack. Servers still push hot air out the back. That air then passes through a water-cooled coil before it re-enters the room. The result is that heat is caught as it leaves the rack, and the hall can stay an air-cooled hall. A passive door has no fans and relies on the servers' own airflow. An active door adds fans, controlled by a valve and control unit. Because the rack stays a normal rack, rear doors are a common way to extend an existing air hall to higher density without rebuilding it. Water comes from the facility loop, which means water now runs to the back of each rack.

On the right, immersion cooling. Servers sit in a tank of dielectric fluid, a liquid that does not conduct electricity. The fluid carries the heat away from every component at once. A pump circulates the fluid through a filter and a heat exchanger or CDU, which hands the heat to facility water. Single-phase fluid stays liquid. Two-phase fluid boils and condenses. The service tools are part of the system, a hoist to lift servers out, a fluid cart, drip trays and storage for fluid.

For finance the questions differ. For rear doors, ask whether the doors are passive or active, what the door water temperature is, and who is responsible for leaks near live equipment. For immersion, ask what fluid is used and in what volume, because fluid is a quantity driver in litres and a long-lived asset. Ask about floor loading, since tanks are heavy. And ask about hardware compatibility and warranty. Not every server vendor will warrant immersed hardware, and a customer base that cannot use the tank limits its value.

On evidence and lifecycle, the ontology says no public numeric price is available and, for fluid, it holds only qualitative service evidence. It specifically warns against turning a statement about scheduled fluid checks into an unsupported fluid life. So this slide has no numbers. That is the correct amount of numbers.`);
  }

  // ---------------- 22 HYBRID DECISION TREE ----------------
  {
    const s = mk("Thermal", "Thermal chain  |  hybrid cooling logic", "Most real halls mix technologies, so liquid-ready needs three tests");
    const qx = 0.5, qw = 3.3, ox = 4.6, ow = 3.1;
    const qs = ["Can air cooling serve the planned rack density?", "Is this an existing air-cooled hall?", "Will the customer's hardware vendors accept immersion?"];
    const outs = [["Air hall", "CRAH, fan wall or IAC (branch G)", K.slateL, K.slate], ["Add rear doors", "RDHx extends the air hall (H-016, H-017)", K.tealL, K.teal], ["Immersion", "Tank, fluid, pumps, CDU (H-020 to H-027)", K.amberL, K.amber]];
    qs.forEach((q, i) => {
      const y = 1.6 + i * 1.5;
      B(s, q, qx, y, qw, 0.9, { fill: K.navy, color: K.white, bold: true, fontSize: 12, r: 0.08 });
      L(s, qx + qw + 0.02, y + 0.45, ox - 0.02, y + 0.45, { w: 2.25, arrow: true });
      T(s, "Yes", qx + qw + 0.15, y + 0.12, 0.6, 0.25, { fontSize: 11, bold: true, color: K.green });
      B(s, [{ text: outs[i][0], options: { bold: true, fontSize: 13, breakLine: true } }, { text: outs[i][1], options: { fontSize: 10.5 } }], ox, y, ow, 0.9, { fill: outs[i][2], line: outs[i][3], lw: 1.5, r: 0.08 });
      L(s, qx + qw / 2, y + 0.92, qx + qw / 2, y + 1.48, { w: 2.25, arrow: true });
      T(s, "No", qx + qw / 2 + 0.1, y + 1.0, 0.5, 0.25, { fontSize: 11, bold: true, color: K.red });
    });
    B(s, [{ text: "Direct-to-chip plus residual air", options: { bold: true, fontSize: 13, breakLine: true } }, { text: "Cold plates, manifolds, CDUs, plus air for the rest (H-001 to H-015, H-028)", options: { fontSize: 10.5 } }], qx, 6.1, 7.2, 0.8, { fill: K.violetL, line: K.violet, lw: 1.5, r: 0.08 });
    note(s, "Logic is a teaching simplification. Real choices also weigh climate, power, customer mix and cost.", 8.1, 6.7, 4.73, 0.45);
    // liquid ready ladder
    T(s, "Liquid-ready is a ladder, and each rung is separate capex", 8.1, 1.5, 4.75, 0.5, { fontSize: 13, bold: true, color: K.navy });
    const rungs = [["Rung 3", "Liquid installed", "Cold plates, rack manifolds, CDUs and fluid in service and commissioned", K.red, K.redL, 2.1], ["Rung 2", "Plant and pipework ready", "Headers, risers, plant capacity and CDU space provided and tested", K.amber, K.amberL, 3.15], ["Rung 1", "Space and structure ready", "Floor loading, riser routes and plant space reserved", K.green, K.greenL, 4.2]];
    rungs.forEach((r, i) => {
      const x = 8.1 + (2 - i) * 0.0, w = 4.73;
      B(s, [{ text: r[0] + "  " + r[1], options: { bold: true, fontSize: 12.5, breakLine: true, color: K.ink } }, { text: r[2], options: { fontSize: 10.5, color: K.ink } }], x, r[5], w - (i * 0.0), 0.9, { fill: r[4], line: r[3], lw: 1.5, r: 0.07, align: "left", margin: 0.12 });
    });
    band(s, 5.35, "HIST", "HISTORICAL Q2 2021", "EXCOOL 20 MW plan: the CHW installation line is £320,000 in the direct-air case and £5,688,000 where chillers serve the hall. Architecture moves installation cost as well as plant.", 1.2, 8.1, 4.73);
    s.addNotes(`Almost no modern hall is pure. A hall serving AI training racks usually has liquid where the density is high and air for everything else. Three tests help you read what a seller says.

Follow the decision tree on the left. First, can air cooling serve the planned density? If yes, build or keep an air hall. CRAHs, fan walls or indirect air units do the job. If no, the next question is whether this is an existing air-cooled hall. If yes, rear-door heat exchangers are the usual way to extend it, because they keep the rack and the room largely as they were. If no, ask whether the customers' hardware vendors accept immersion. If yes, immersion is an option. If no, the default for a new purpose-built high-density hall is direct-to-chip cooling with CDUs, plus air for the components that still need it. The ontology has a hybrid air-liquid rack enclosure line for that case.

This tree is a teaching simplification. Real decisions weigh climate, power availability, customer mix and cost. Use it to ask 'which branch is this site on, and is that consistent with what the seller claims?'.

On the right is the part that matters most for valuation. Liquid-ready is a ladder with three rungs. Rung one is space and structure. Floor loading, riser routes and plant space are reserved. Rung two is plant and pipework. Headers, risers and plant capacity are installed and tested, and space for CDUs exists. Rung three is liquid installed. Cold plates, manifolds, CDUs and fluid are in service and commissioned. Each rung is separate capex, and each is a separate claim. A seller who says the site is liquid-ready might mean rung one.

The evidence strip shows why architecture matters. In the 2021 cost plan for a twenty megawatt hall, the chilled-water installation line is three hundred and twenty thousand pounds in the direct-air case, and five point seven million pounds where chillers serve the hall. The choice of technology moves installation cost as well as plant equipment. It is a London, 2021 cost-plan number, so use it for shape.`);
  }
};
