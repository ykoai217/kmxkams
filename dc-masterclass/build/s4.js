const { K, T, B, shape, L, P, ellipse, head, badge, STATE, legend, hub, band, note, card, dot, chain } = require("./lib");

module.exports = function (pres, mk) {
  // ---------------- 14 COOLING CHAIN ----------------
  {
    const s = mk("Thermal", "Thermal chain  |  heat to atmosphere", "Heat has to be captured, carried and finally handed to the outside air");
    const rows = [
      { y: 1.75, tag: "AIR PATH", c: K.warm, nodes: [
        ["IT heat", "Server fans push hot air out of the rack", "kW IT"],
        ["Room capture", "CRAH or fan-wall coil hands heat to water", "G-001 to G-013"],
        ["Water loop", "Pumps move chilled water around the plant", "F-013 to F-018"],
        ["Chiller", "Refrigerant cycle lifts heat to outdoor-ready level", "F-001 to F-004"],
        ["Heat rejection", "Fans blow outside air over a coil or tower", "F-005 to F-010"],
        ["Atmosphere", "Heat leaves the site", ""],
      ] },
      { y: 3.8, tag: "LIQUID PATH", c: K.cool, nodes: [
        ["Chip heat", "Cold plates sit on the hottest chips", "H-001"],
        ["Rack capture", "Manifolds and quick-disconnect hoses carry coolant", "H-002 to H-005"],
        ["CDU", "Heat exchanger between rack loop and facility loop", "H-006 to H-011"],
        ["Facility water", "Water or glycol loop to the plant", "F-013 to F-016"],
        ["Heat rejection", "Dry or hybrid coolers, or a chiller if needed", "F-007, F-008, F-010"],
        ["Atmosphere", "Heat leaves the site", ""],
      ] },
    ];
    rows.forEach((r) => {
      T(s, r.tag, 0.5, r.y - 0.28, 3, 0.24, { fontSize: 11, bold: true, color: r.c, charSpacing: 2 });
      r.nodes.forEach((n, i) => {
        const x = 0.5 + i * 2.13, w = 1.82, last = i === 5;
        shape(s, "roundRect", x, r.y, w, 1.5, { fill: last ? K.tealL : K.white, line: r.c === K.warm ? K.teal : K.teal, lw: 1.25, rectRadius: 0.07 });
        T(s, n[0], x + 0.1, r.y + 0.08, w - 0.2, 0.3, { fontSize: 13, bold: true, color: K.navy });
        T(s, n[1], x + 0.1, r.y + 0.42, w - 0.2, 0.7, { fontSize: 11, color: K.ink });
        if (n[2]) T(s, n[2], x + 0.1, r.y + 1.16, w - 0.2, 0.25, { fontSize: 10, color: K.grey });
        if (i < 5) L(s, x + w + 0.02, r.y + 0.75, x + 2.11, r.y + 0.75, { color: K.warm, w: 3, arrow: true });
      });
    });
    const cs = [
      ["First principle", "Almost every kW of IT power ends as a kW of heat (kWth). Chillers and fans add a little more.", K.teal],
      ["Design temperature is a choice", "The EXCOOL plan sizes chillers for 21/31 °C water with 20% glycol. Warmer loops reject heat more easily.", K.amber],
      ["Where the money sits", "Branch F plant is shared by both paths. Branches G and H differ by how heat is captured.", K.violet],
    ];
    cs.forEach((c, i) => card(s, c[0], c[1], 0.5 + i * 4.18, 5.5, 3.95, 1.45, c[2]));
    s.addNotes(`The thermal chain is harder to see than the electrical chain, so we will draw it carefully. The job is simple. Take heat from where it is made, carry it somewhere, and give it to the outside air. Every step in the chain exists because heat only flows from hot to cold, and the outside air can be only so cold.

The top row is the familiar air-cooled path. The IT equipment turns almost all the power it draws into heat. Server fans push hot air out of the rack. A room cooling unit, a CRAH or a fan-wall, has a coil carrying cold water. The hot air passes over the coil, gives up its heat and returns cool. The water now carries that heat through pumps and pipes, called the hydronic loop, to the chiller. A chiller is a refrigeration machine. It uses a compressor and refrigerant to lift the heat to a temperature at which the outside air can accept it. A heat rejection device, a condenser, dry cooler or cooling tower, finally blows outside air over a coil to carry the heat away.

The bottom row is the liquid path. Here cold plates sit directly on the hottest chips. Coolant flows through manifolds and flexible hoses with quick-disconnect couplings. A coolant distribution unit, the CDU, keeps the rack loop separate from the facility loop and exchanges heat between them. The facility water then goes to heat rejection. Because liquid can run warmer, some designs reject heat with dry coolers alone for much of the year. Do not assume that, as it depends on the design and the climate.

The labels at the bottom of each box are ontology branches. F is central plant, G is white-space air cooling, H is liquid cooling.

The three cards on the bottom give the finance lens. First principle: kilowatts of IT become kilowatts thermal, so cooling is sized to heat. Second: design temperature is a choice with cost consequences. The reference cost plan sizes chillers for twenty-one to thirty-one degree water with twenty percent glycol. Third: central plant is shared, while capture differs. That is why a liquid-cooled hall and an air-cooled hall can share a plant and still have very different white-space capex.`);
  }

  // ---------------- 15 CHILLER AND HYDRONICS ----------------
  {
    const s = mk("Thermal", "Thermal chain  |  chillers and hydronics", "A chiller is one box inside a plant, and each quote draws the box differently");
    T(s, "Refrigeration cycle", 0.5, 1.45, 3, 0.28, { fontSize: 13, bold: true, color: K.navy });
    // cycle
    B(s, [{ text: "Compressor", options: { bold: true, fontSize: 12, breakLine: true } }, { text: "raises pressure and temperature", options: { fontSize: 10 } }], 2.5, 1.85, 2.0, 0.7, { fill: K.violetL, line: K.violet, r: 0.06 });
    B(s, [{ text: "Condenser", options: { bold: true, fontSize: 12, breakLine: true } }, { text: "rejects heat to outside air", options: { fontSize: 10 } }], 4.7, 3.2, 1.9, 0.7, { fill: K.amberL, line: K.amber, r: 0.06 });
    B(s, [{ text: "Expansion valve", options: { bold: true, fontSize: 12, breakLine: true } }, { text: "drops pressure, so it chills", options: { fontSize: 10 } }], 2.5, 4.55, 2.0, 0.7, { fill: K.violetL, line: K.violet, r: 0.06 });
    B(s, [{ text: "Evaporator", options: { bold: true, fontSize: 12, breakLine: true } }, { text: "absorbs heat from the water", options: { fontSize: 10 } }], 0.9, 3.2, 1.7, 0.7, { fill: K.tealL, line: K.teal, r: 0.06 });
    P(s, [[1.75, 3.2], [1.75, 2.2], [2.5, 2.2]], { color: K.violet, w: 2.25, arrow: true });
    P(s, [[4.5, 2.2], [5.65, 2.2], [5.65, 3.2]], { color: K.violet, w: 2.25, arrow: true });
    P(s, [[5.65, 3.9], [5.65, 4.9], [4.5, 4.9]], { color: K.violet, w: 2.25, arrow: true });
    P(s, [[2.5, 4.9], [1.75, 4.9], [1.75, 3.9]], { color: K.violet, w: 2.25, arrow: true });
    L(s, 6.6, 3.55, 6.9, 3.55, { color: K.amber, w: 2.5, arrow: true }); T(s, "to air", 6.55, 3.2, 0.5, 0.25, { fontSize: 9.5, color: "A56F00", align: "center" });
    L(s, 0.3, 3.4, 0.9, 3.4, { color: K.teal, w: 2.5, arrow: true }); T(s, "warm in", 0.5, 3.1, 0.6, 0.25, { fontSize: 9.5, color: K.teal, bold: true });
    L(s, 0.9, 3.75, 0.3, 3.75, { color: K.teal, w: 2.5, arrow: true }); T(s, "cool out", 0.5, 3.8, 0.6, 0.25, { fontSize: 9.5, color: K.teal, bold: true });
    T(s, "Four chiller types in the ontology: air-cooled screw F-001, air-cooled centrifugal or magnetic-bearing F-002, water-cooled screw F-003, water-cooled centrifugal F-004.", 0.5, 5.4, 5.8, 0.65, { fontSize: 11, color: K.grey });
    // hydronics
    T(s, "Hydronic plant: what moves the water", 7.0, 1.45, 5.8, 0.28, { fontSize: 13, bold: true, color: K.navy });
    const chips = [
      ["Primary pump + VFD", "F-013, F-016", 7.0, 1.9, K.tealL, K.teal], ["Strainer", "F-029", 9.0, 1.9, K.tealL, K.teal], ["To white space", "CRAH, CDU", 10.95, 1.9, K.navy, K.ink],
      ["Buffer tank", "F-018", 7.0, 3.1, K.tealL, K.teal], ["Air / dirt separator", "F-024", 9.0, 3.1, K.tealL, K.teal], ["Return from white space", "", 10.95, 3.1, K.navy, K.ink],
      ["Expansion vessel", "F-017", 7.0, 4.3, K.white, K.mid], ["Glycol fill, treatment", "F-027, F-021 to F-023", 9.0, 4.3, K.white, K.mid], ["Plate HX / economiser", "F-011, F-025", 10.95, 4.3, K.white, K.mid],
    ];
    chips.forEach((c) => B(s, [{ text: c[0], options: { bold: true, fontSize: 11, color: c[4] === K.navy ? K.white : K.ink, breakLine: !!c[1] } }].concat(c[1] ? [{ text: c[1], options: { fontSize: 9.5, color: c[4] === K.navy ? "BFD0E0" : K.grey } }] : []), c[2], c[3], 1.85, 0.75, { fill: c[4], line: c[5], r: 0.06 }));
    L(s, 8.87, 2.28, 9.0, 2.28, { w: 2, arrow: true, color: K.teal }); L(s, 10.87, 2.28, 10.95, 2.28, { w: 2, arrow: true, color: K.teal });
    L(s, 10.95, 3.48, 10.87, 3.48, { w: 2, arrow: true, color: K.teal }); L(s, 9.0, 3.48, 8.87, 3.48, { w: 2, arrow: true, color: K.teal });
    L(s, 7.9, 3.1, 7.9, 2.65, { w: 2, arrow: true, color: K.teal });
    T(s, "Chiller F-001 to F-004 plumbs into this loop.", 8.1, 2.72, 2.7, 0.35, { fontSize: 10, italic: true, color: K.grey });
    B(s, "Packaged pump room F-026 may bundle pumps, VFDs, vessels, separators, strainers and controls (package rules PKG-083 to PKG-091).", 7.0, 5.2, 5.8, 0.55, { fill: K.violetL, line: K.violet, fontSize: 10.5, r: 0.06, align: "left", margin: 0.1 });
    // ne
    shape(s, "roundRect", 0.5, 6.1, 12.33, 0.88, { fill: K.mist, line: K.line, lw: 0.75, rectRadius: 0.06 });
    badge(s, "HIST", 0.65, 6.2, 1.2, "Q2 2021, UK");
    T(s, "Air-cooled chiller 1,660 kWth: £498,750 = £300 per kWth, supply only, compressor type not stated.", 0.65, 6.5, 5.2, 0.45, { fontSize: 11 });
    B(s, "≠", 5.95, 6.3, 0.5, 0.5, { shape: "ellipse", fill: K.red, color: K.white, bold: true, fontSize: 18, margin: 0 });
    badge(s, "HIST", 6.65, 6.2, 1.2, "2019, UK notional");
    T(s, "Air-cooled chillers N+1 with CHW pipework, pumps and associated plant: £890 per kW IT, 4.5 MW Tier III.", 6.65, 6.5, 6.05, 0.45, { fontSize: 11 });
    s.addNotes(`Start on the left with the refrigeration cycle, the beating heart of a chiller. A refrigerant gas circulates in a closed loop through four components. The evaporator is where cold refrigerant absorbs heat from the building's chilled water, which returns warm and leaves cool. The compressor raises the refrigerant's pressure and temperature, so it is hotter than the outside air. The condenser then rejects that heat to the outside air, using fans on an air-cooled chiller. The expansion valve drops the pressure, which chills the refrigerant again, and the cycle repeats. The ontology holds four chiller types, differing in compressor and in how they reject heat.

On the right is the part people forget. A chiller does not work alone. Water has to be moved, cleaned, kept in volume and protected. A primary pump with a variable-frequency drive circulates it. Strainers and an air and dirt separator protect the system. A buffer tank smooths load. An expansion vessel absorbs volume changes as temperature moves. A glycol fill and treatment skid keep the fluid safe. Plate heat exchangers and an economiser can provide free cooling when the weather helps. All of this is hydronics.

Commercially, this is a package puzzle. The ontology has a packaged pump room line, F-026. If a vendor sells a pump skid, the pumps, drives, vessels, separators, strainers and controls may all be inside. The package controls freeze that as conditional on the vendor bill of materials.

Now the strip at the bottom is a lesson in scope. On the left, a chiller at three hundred pounds per kilowatt thermal, from the 2021 cost plan. On the right, a chiller line at eight hundred and ninety pounds per kilowatt of IT load, from the 2019 CIBSE and AECOM cost model. They look like two prices for one thing. They differ on four counts. The units differ, kilowatt thermal against kilowatt of IT. The scope differs, a supply-only chiller against chillers plus chilled-water pipework, pumps and associated plant. The year differs. The redundancy differs. The ontology flags the second as a multi-component package that includes more than the chiller. Never put them in the same column.`);
  }

  // ---------------- 16 CIBSE CHART ----------------
  {
    const s = mk("Thermal", "Thermal chain  |  installed cooling packages", "Three cooling architectures, priced as installed packages, per kW of IT");
    const cats = ["Conventional\n(chillers + CRAC)", "Indirect air cooling\n(IAC)", "Hybrid\n(cooler + chillers)"];
    const series = [
      ["Room cooling units (CRAC, N+2)", [240, 0, 0], K.teal],
      ["Chillers + CHW pipework + pumps (N+1)", [890, 0, 0], K.slate],
      ["IAC units (N+2)", [0, 760, 0], K.amber],
      ["IAC process water, storage, pumps, duct", [0, 220, 0], "F0C36A"],
      ["Hybrid cooler + water-cooled chillers + networks", [0, 0, 1130], K.violet],
      ["Room cooling, implied (not itemised)", [0, 0, 240], "B9AEE0"],
      ["BMS controls + power supplies", [320, 280, 350], K.red],
    ];
    s.addChart(pres.charts.BAR, series.map((x) => ({ name: x[0], labels: cats, values: x[1] })), {
      x: 0.5, y: 1.45, w: 7.6, h: 5.0, barDir: "col", barGrouping: "stacked", barGapWidthPct: 55,
      chartColors: series.map((x) => x[2]), showLegend: true, legendPos: "b", legendFontSize: 10, legendColor: "44546A", legendFontFace: "+mn-lt",
      catAxisLabelFontSize: 11, catAxisLabelColor: "44546A", catAxisLabelFontFace: "+mn-lt", valAxisLabelFontSize: 11, valAxisLabelColor: "44546A", valAxisLabelFontFace: "+mn-lt",
      valGridLine: { color: "E1E7ED", size: 0.5 }, catGridLine: { style: "none" }, showValue: true, dataLabelFontSize: 10, dataLabelColor: "FFFFFF", dataLabelFontFace: "+mn-lt", dataLabelPosition: "ctr", dataLabelFormatCode: "#,##0;;;",
      valAxisMaxVal: 1800, valAxisMajorUnit: 300, showValAxisTitle: true, valAxisTitle: "GBP per kW IT, 2019", valAxisTitleFontSize: 11, valAxisTitleColor: "44546A",
    });
    badge(s, "HIST", 0.5, 6.58, 2.3, "HISTORICAL 2019, UK notional");
    T(s, "CIBSE/AECOM Table 2 | 4.5 MW IT | Tier III | not escalated", 2.95, 6.58, 5.0, 0.26, { fontSize: 10.5, color: K.grey, valign: "middle" });
    const rules = [
      ["Totals: £1,450, £1,260, £1,720", "Use the total or the components, never both. The ontology suppresses constituents when a total is active.", K.red],
      ["£1,130 appears twice in history", "An earlier extract wrongly showed £1,130 as the conventional total. It is the hybrid mechanical line only. £1,450 supersedes it.", K.amber],
      ["Controls are about a fifth", "BMS controls and power supplies are £280 to £350 per kW, roughly 20% to 22% of each total.", K.violet],
      ["Scale it to see the size", "At 4.5 MW IT: about £6.5m conventional, £5.7m IAC, £7.7m hybrid, in 2019 money. Arithmetic on the reference facility only.", K.teal],
    ];
    rules.forEach((r, i) => card(s, r[0], r[1], 8.4, 1.45 + i * 1.38, 4.43, 1.28, r[2]));
    s.addNotes(`This chart shows the best installed-package cooling evidence in the ontology. The 2019 CIBSE and AECOM cost model prices three cooling options for a reference four-and-a-half megawatt, Tier III data centre. Each bar is a total installed cost per kilowatt of IT load, built from components.

The conventional option is room cooling units at two hundred and forty pounds, air-cooled chillers with pipework, pumps and associated plant at eight hundred and ninety, and controls and power supplies at three hundred and twenty. That sums to fourteen hundred and fifty pounds per kW of IT. The indirect air cooling option is units at seven hundred and sixty, a process water and ductwork support package at two hundred and twenty, and controls at two hundred and eighty, for twelve hundred and sixty. The hybrid option is a hybrid cooler with water-cooled chillers and networks at eleven hundred and thirty and controls at three hundred and fifty, for seventeen hundred and twenty.

A careful reader will notice that eleven hundred and thirty plus three hundred and fifty is fourteen hundred and eighty, not seventeen hundred and twenty. The difference is two hundred and forty. That matches the room cooling line in the conventional option, so the likely explanation is that room cooling is part of the hybrid total and was not extracted as a separate line. I have drawn it as the lighter violet block and labelled it as implied. That is my inference and no source figure. The total is the anchor.

Three rules from the ontology. Use the total or the components, never both, because the package controls suppress one when the other is active. The eleven hundred and thirty figure belongs to the hybrid option and must not be used as the conventional total, which an earlier research pass did by mistake. And controls matter. At roughly a fifth of each total, they are a material line that is easy to omit.

At the bottom right is a scaling illustration. Multiply the per-kW rates by forty-five hundred kilowatts and you get roughly six and a half, five and a half, and seven and three-quarter million pounds. That is the 2019 reference facility, in 2019 money. This answers 'what did one design cost to install in 2019?' and leaves 'what does cooling cost today?' open. Escalating it is a separate, explicit step. It is historical evidence.`);
  }

  // ---------------- 17 ROOM COOLING ----------------
  {
    const s = mk("Thermal", "Thermal chain  |  white-space air cooling", "Three ways to cool a hall with air, each moving the heat differently");
    const panels = [
      { t: "CRAH on a raised floor", sub: "G-001, G-010 to G-013", kind: "crah" },
      { t: "Fan-wall array", sub: "G-004, G-006", kind: "fan" },
      { t: "Indirect air cooling (IAC / AHU)", sub: "G-005", kind: "iac" },
    ];
    panels.forEach((p, i) => {
      const x = 0.5 + i * 4.18, w = 3.95, y0 = 1.5;
      shape(s, "roundRect", x, y0, w, 3.35, { fill: K.white, line: K.line, lw: 1, rectRadius: 0.08 });
      T(s, p.t, x + 0.15, y0 + 0.08, w - 0.3, 0.3, { fontSize: 13, bold: true, color: K.navy });
      T(s, p.sub, x + 0.15, y0 + 0.38, w - 0.3, 0.22, { fontSize: 10, color: K.grey });
      // hall box
      const hx = x + 0.2, hy = y0 + 0.75, hw = w - 0.4, hh = 2.2;
      shape(s, "rect", hx, hy, hw, hh, { fill: K.mist, line: K.mid, lw: 1 });
      T(s, "blue: cold air   red: hot air", x + w - 1.9, y0 + 0.4, 1.75, 0.22, { fontSize: 9, color: K.grey, align: "right" });
      // racks
      const rk = (rx) => { shape(s, "rect", rx, hy + 0.85, 0.5, 1.1, { fill: K.navy }); };
      rk(hx + 1.7); rk(hx + 2.5);
      if (p.kind === "crah") {
        shape(s, "rect", hx, hy + 1.95, hw, 0.25, { fill: K.tealL, line: K.teal, lw: 0.75 });
        B(s, "CRAH", hx + 0.1, hy + 0.9, 0.7, 1.05, { fill: K.teal, color: K.white, fontSize: 10, bold: true });
        P(s, [[hx + 0.45, hy + 2.07], [hx + 2.1, hy + 2.07], [hx + 2.1, hy + 1.95]], { color: K.cool, w: 2.25, arrow: true });
        P(s, [[hx + 2.25, hy + 1.2], [hx + 2.25, hy + 0.35], [hx + 0.45, hy + 0.35], [hx + 0.45, hy + 0.9]], { color: K.warm, w: 2.25, arrow: true });
        T(s, "hot air returns overhead", hx + 0.6, hy + 0.1, 2.2, 0.22, { fontSize: 9, color: K.warm });
      }
      if (p.kind === "fan") {
        shape(s, "rect", hx + 0.05, hy + 0.2, 0.6, 1.8, { fill: K.tealL, line: K.teal, lw: 1 });
        for (let k = 0; k < 4; k++) ellipse(s, hx + 0.12, hy + 0.28 + k * 0.44, 0.38, 0.38, { fill: K.white, line: K.teal, lw: 1.25 });
        T(s, "coil", hx + 0.52, hy + 0.9, 0.2, 0.3, { fontSize: 8, color: K.teal });
        P(s, [[hx + 0.65, hy + 1.4], [hx + 1.65, hy + 1.4]], { color: K.cool, w: 2.5, arrow: true });
        P(s, [[hx + 3.15, hy + 1.1], [hx + 3.4, hy + 1.1], [hx + 3.4, hy + 0.3], [hx + 0.35, hy + 0.3], [hx + 0.35, hy + 0.2]], { color: K.warm, w: 2.25 });
      }
      if (p.kind === "iac") {
        B(s, "IAC unit\nair-to-air exchanger", hx + 0.05, hy + 0.2, 1.3, 1.5, { fill: K.amberL, line: K.amber, fontSize: 9.5, bold: true, r: 0.04 });
        P(s, [[hx + 0.05, hy + 0.05], [hx + 0.7, hy + 0.2]], { color: K.green, w: 2, arrow: true });
        P(s, [[hx + 0.9, hy + 0.2], [hx + 1.35, hy + 0.04]], { color: K.green, w: 2, arrow: true });
        P(s, [[hx + 1.35, hy + 1.35], [hx + 1.7, hy + 1.35]], { color: K.cool, w: 2.5, arrow: true });
        P(s, [[hx + 3.15, hy + 1.0], [hx + 3.4, hy + 1.0], [hx + 3.4, hy + 0.5], [hx + 1.1, hy + 0.5], [hx + 1.1, hy + 0.55]], { color: K.warm, w: 2.25 });
        T(s, "outside air cools the hall air through the exchanger", hx + 1.4, hy + 0.08, 1.9, 0.35, { fontSize: 9, color: K.green });
      }
    });
    // info rows under panels
    const rowA = ["Heat leaves via chilled water to chillers", "Heat leaves via chilled water to chillers", "Heat leaves to outside air, trimmed by chillers"];
    const rowB = ["Sized by kW sensible and N+x units", "Sized by kW sensible, airflow and N+x", "Sized by kW sensible, N+2 per hall"];
    panels.forEach((p, i) => {
      const x = 0.5 + i * 4.18;
      T(s, rowA[i], x + 0.15, 4.95, 3.7, 0.28, { fontSize: 11.5, bold: true });
      T(s, rowB[i], x + 0.15, 5.23, 3.7, 0.28, { fontSize: 11.5, color: K.grey });
    });
    band(s, 5.65, "HIST", "HISTORICAL Q2 2021", "EXCOOL, supply only: DX CRAC 50 kW £33,000 (£660/kW, plantroom unit, not a white-space CRAH). IAC 250 kW sensible: direct £88,000 (£352/kW), indirect £66,000 (£264/kW). 357 kW IAC at £92,400 includes controls, spares and training, so it is not like-for-like.", 0.82);
    band(s, 6.55, "GAP", "CURRENT PRICE GAP", "CRAH and fan-wall project pricing is scarce in public sources (gap profile GP-G).", 0.42);
    s.addNotes(`Three different ways to cool a hall with air. The common job is the same. Keep the cold aisle cold, remove the hot aisle's heat, and avoid mixing the two.

On the left is the classic design. A computer room air handler, a CRAH, stands at the edge of the hall. It blows cold air into the void under a raised floor. Perforated tiles let it rise into the cold aisle in front of the racks. Servers pull it through, and the heated air rises at the back, returns overhead and goes back to the CRAH coil, which is cooled by chilled water from the central plant. Containment panels in the ontology stop hot and cold air mixing.

In the middle is a fan wall. A wall of electronically commutated fans sits in front of a cooling coil and pushes cooled air across the hall, in place of a few big air handlers. Many small fans give resilience and fine control. The heat still leaves by chilled water.

On the right is indirect air cooling. The hall air stays in a closed loop. It passes through a large air-to-air exchanger, and outside air passes the other side, never mixing. When the weather is cool enough, outside air does all the work. The ontology notes that chillers may only trim, and the cost plan describes a trim chiller used about one percent of the year in one hybrid design.

The quantity driver for all three is kilowatts of sensible cooling and the redundancy count, N+1 or N+2. Sensible means the ordinary temperature-changing heat, as opposed to humidity-related latent heat.

On pricing, the evidence is historical and uneven. The 2021 cost plan has a DX CRAC at six hundred and sixty pounds per kW, and note that it is a plantroom unit, a different item from a white-space CRAH. Indirect air cooling units come in cheaper per kW than direct air in that plan. One line, the three-hundred-and-fifty-seven kW unit, includes controls, spares and training, and the ontology says you cannot compare it with the others on kW alone. Public current pricing for CRAHs and fan walls is scarce. Treat everything here as shape.`);
  }
};
