const { K, T, B, shape, L, P, ellipse, head, badge, STATE, legend, hub, band, note, card, dot, chain } = require("./lib");

module.exports = function (pres, mk) {
  // ---------------- 10 UPS SCHEMATIC ----------------
  {
    const s = mk("Electrical", "Electrical chain  |  UPS first principles", "A UPS converts power twice so the load never feels the grid");
    const y = 3.0, h = 0.8, cy = y + h / 2;
    // main path
    B(s, "Utility AC\ninput", 0.5, y, 1.2, h, { fill: K.slateL, line: K.slate, fontSize: 11.5, bold: true, r: 0.06 });
    B(s, "Input\nswitchboard\nD-006", 1.95, y, 1.2, h, { fill: K.white, line: K.mid, fontSize: 10.5, r: 0.06 });
    B(s, [{ text: "Rectifier", options: { bold: true, fontSize: 13, breakLine: true } }, { text: "AC to DC", options: { fontSize: 11 } }], 3.55, y, 1.45, h, { fill: K.amberL, line: K.amber, lw: 1.75, r: 0.06 });
    shape(s, "rect", 5.3, 2.75, 0.7, 1.3, { fill: K.ink }); T(s, "DC bus", 5.3, 3.2, 0.7, 0.4, { color: K.white, bold: true, fontSize: 11.5, align: "center" });
    B(s, [{ text: "Inverter", options: { bold: true, fontSize: 13, breakLine: true } }, { text: "DC to AC", options: { fontSize: 11 } }], 6.3, y, 1.45, h, { fill: K.amberL, line: K.amber, lw: 1.75, r: 0.06 });
    B(s, "Output\nswitchboard\nD-007", 8.85, y, 1.2, h, { fill: K.white, line: K.mid, fontSize: 10.5, r: 0.06 });
    B(s, "Critical AC\nload", 10.55, y, 1.35, h, { fill: K.navy, color: K.white, bold: true, fontSize: 12, r: 0.06 });
    [[1.7, 1.95], [3.15, 3.55], [5.0, 5.3], [6.0, 6.3], [7.75, 8.3], [8.55, 8.85], [10.05, 10.55]].forEach(([a, b]) => L(s, a, cy, b, cy, { w: 2.5, color: K.amber, arrow: b - a > 0.3 }));
    ellipse(s, 8.22, cy - 0.08, 0.16, 0.16, { fill: K.ink }); ellipse(s, 8.47, cy - 0.08, 0.16, 0.16, { fill: K.ink });
    // battery
    L(s, 5.65, 4.05, 5.65, 4.85, { w: 2.5, color: K.green, both: true, arrow: true });
    B(s, "DC fuse / breaker\nD-023 / D-014", 5.75, 4.2, 1.6, 0.45, { fill: K.white, line: K.mid, fontSize: 10, r: 0.05 });
    B(s, [{ text: "Battery strings", options: { bold: true, fontSize: 12.5, breakLine: true } }, { text: "VRLA D-010 or Li-ion D-011\nracks D-012", options: { fontSize: 10.5 } }], 4.45, 4.85, 2.4, 0.9, { fill: K.greenL, line: K.green, lw: 1.75, r: 0.06 });
    B(s, "Battery management D-013\nmonitoring D-015", 7.1, 4.95, 2.1, 0.55, { fill: K.violetL, line: K.violet, fontSize: 10.5, r: 0.05 });
    L(s, 6.85, 5.22, 7.1, 5.22, { w: 1.25, dash: "dash", color: K.violet });
    // static bypass
    P(s, [[3.3, cy], [3.3, 2.3], [8.3, 2.3], [8.3, cy - 0.08]], { color: K.teal, w: 2.25, arrow: true });
    B(s, "Static bypass switch D-004\n(fast electronic transfer)", 4.9, 2.07, 2.5, 0.46, { fill: K.tealL, line: K.teal, fontSize: 10.5, bold: true, r: 0.05 });
    // maintenance bypass
    P(s, [[3.0, cy], [3.0, 1.75], [8.55, 1.75], [8.55, cy - 0.08]], { color: K.violet, w: 2.25, arrow: true, dash: "dash" });
    B(s, "Maintenance bypass switch D-005 (manual)", 4.5, 1.52, 3.2, 0.4, { fill: K.violetL, line: K.violet, fontSize: 10.5, bold: true, r: 0.05 });
    T(s, "Why two conversions? The inverter output is rebuilt from DC, so grid noise, sags and short outages never reach the servers.", 9.3, 1.45, 3.5, 0.9, { fontSize: 11.5, color: K.grey });
    T(s, "Quantity driver (QU): protected kW + minutes of runtime + redundancy", 9.3, 4.45, 3.5, 0.8, { fontSize: 12.5, bold: true, color: K.navy });
    // modes
    const modes = [
      ["1  Normal", "Load runs through rectifier and inverter. The battery floats on the DC bus.", K.amber],
      ["2  Grid fails", "Battery feeds the inverter with no break. Runtime clock starts while generators start.", K.green],
      ["3  Fault or overload", "Static bypass moves the load to raw mains in a fraction of a cycle.", K.teal],
      ["4  Maintenance", "Manual bypass feeds the load so the UPS can be isolated and worked on.", K.violet],
    ];
    modes.forEach((m, i) => {
      const bx = 0.5 + i * 3.1;
      shape(s, "roundRect", bx, 5.95, 2.95, 1.0, { fill: K.white, line: m[2], lw: 1.5, rectRadius: 0.07 });
      T(s, m[0], bx + 0.12, 6.0, 2.7, 0.26, { fontSize: 12.5, bold: true, color: m[2] === K.amber ? "A56F00" : m[2] });
      T(s, m[1], bx + 0.12, 6.28, 2.72, 0.66, { fontSize: 11, color: K.ink });
    });
    s.addNotes(`The UPS, or uninterruptible power supply, answers a simple question. What keeps the servers running during the seconds between a grid failure and the generators taking over, and what cleans the power in the meantime?

Follow the amber line. Utility AC comes in through an input switchboard to the rectifier. The rectifier turns AC into DC. That DC sits on a DC bus. The inverter turns the DC back into clean AC and sends it through an output switchboard to the critical load. Converting twice looks wasteful, and it costs a little efficiency. The payoff is an output rebuilt from scratch. Grid noise, sags and brief outages never reach the servers.

The batteries hang off the DC bus below, through a fuse or breaker. In normal operation they float, charged and waiting. When the grid fails, they discharge into the DC bus and the inverter carries on without a break. A battery management system and monitoring watch the strings. The runtime is whatever the battery energy and the load allow. Think minutes, not hours, because the generator exists for the long haul.

Now the two bypasses, which matter more than people expect. The teal line is the static bypass. It is an electronic switch. If the UPS has a fault or sees an overload, the static bypass moves the load directly to mains power in a fraction of a cycle. The violet dashed line is the maintenance bypass. It is a manual switch that lets engineers isolate the whole UPS for service while the load stays powered on raw mains.

The four boxes at the bottom are the operating modes. Normal, grid fails, fault or overload, and maintenance. Ask any operator which mode the site spends time in and how often they exercise the others.

The quantity driver, QU, is protected kilowatts plus minutes of runtime plus redundancy. A UPS rated in kVA and kW is sized to the load. Its battery is sized to the runtime. Those are two different cost drivers, and the next slide shows why they are often priced together and sometimes priced apart.`);
  }

  // ---------------- 11 UPS PACKAGE ----------------
  {
    const s = mk("Electrical", "Electrical chain  |  UPS and battery package", "UPS evidence spans three scales and none is a current MW price");
    hub(s, { id: "D-001 / D-002", text: "UPS frame (monolithic or modular)", sub: "parent line" },
      [
        { id: "D-004", t: "Static bypass switch", s: "cond" }, { id: "D-005", t: "Maintenance bypass", s: "cond" }, { id: "D-010", t: "VRLA battery string", s: "cond" }, { id: "D-011", t: "Li-ion battery cabinet", s: "cond" },
        { id: "D-012", t: "Battery rack / cabinet", s: "cond" }, { id: "D-013", t: "Battery management", s: "cond" }, { id: "D-014", t: "Battery breaker + DC fuse", s: "cond" }, { id: "D-015", t: "Battery monitoring", s: "cond" }, { id: "D-022", t: "DC cable / interconnect", s: "cond" },
      ],
      [
        { id: "D-006", t: "Input switchboard", s: "sep" }, { id: "D-007", t: "Output switchboard", s: "sep" }, { id: "D-020", t: "Isolation / input transformer", s: "sep" }, { id: "D-021", t: "Output / step-down transformer", s: "sep" },
        { id: "D-018", t: "Battery-room ventilation", s: "sep" }, { id: "D-019", t: "Battery fire-detection interface", s: "sep" }, { id: "D-024", t: "Prefab UPS module: housed is not included", s: "cond" }, { id: "D-025", t: "Capacitor / fan service kit", s: "life" },
      ],
      { x: 0.5, y: 1.4, w: 12.33, h: 3.6 }, { hubW: 2.7, hubH: 1.3, chipW: 3.4, chipH: 0.32, fs: 11 });
    legend(s, 0.5, 5.07, ["cond", "sep", "life"], 3.4);
    // price ladder
    const cells = [
      ["CURR", "CURRENT, WRONG SCALE", "APC 10 kVA / 10 kW rack UPS: $12,022 reseller, $18,355 list (observed 2026-10-05). The UPS plus transformer bundle is a different scope. Neither scales to MW.", K.green],
      ["HIST", "HISTORICAL Q2 2021", "EXCOOL: 1,660 kVA UPS with 15 min batteries £323,700, or £195/kVA, supply only, battery monitoring excluded. Output switchboard 3,000 A £105,000 priced separately.", K.amber],
      ["PKG", "EXECUTED PACKAGE", "Southern Water UPS framework lot £4.8m, supply and install, quantities and ratings undisclosed. Package scale only, no unit rate.", K.violet],
      ["GAP", "CURRENT PRICE GAP", "MW-class UPS with batteries has no current public price. Needs OEM quote, tender return or award with runtime, chemistry and scope.", K.red],
    ];
    cells.forEach((c, i) => {
      const bx = 0.5 + i * 3.1;
      shape(s, "roundRect", bx, 5.42, 2.95, 1.55, { fill: K.white, line: c[3], lw: 1.25, rectRadius: 0.07 });
      badge(s, c[0], bx + 0.1, 5.5, c[0] === "GAP" ? 1.6 : 1.75, c[1]);
      T(s, c[2], bx + 0.12, 5.8, 2.72, 1.15, { fontSize: 10.5, color: K.ink });
    });
    s.addNotes(`On the left side of this hub are the children that may sit inside a UPS price. Static bypass, maintenance bypass, the battery strings or Li-ion cabinets, racks, the battery management system, the DC breaker and fuse, monitoring and the DC interconnect. The ontology freezes these as conditional. They are suppressed as separate acquisition lines only when the vendor scope says the UPS package includes them. It never assumes it.

On the right are items usually priced separately. Input and output switchboards, isolation and step-down transformers, battery-room ventilation and the fire detection interface. One entry is a lifecycle item, the capacitor and fan service kit, which belongs in the replacement schedule and sits outside acquisition capex. And, again, a prefabricated UPS module houses equipment. It does not automatically include it.

The batteries need special attention. The UPS frame is a power electronics asset. The battery is an energy store with a different chemistry, a different fire profile and a different replacement cycle. In a model, a combined price should be split back into those two lines for lifecycle, even if you used the package price for acquisition.

The bottom row is the heart of the slide. It shows four kinds of price evidence on the same equipment family, and none of them lets you price a megawatt-scale UPS today. The first is current and observable. A small rack UPS has a posted price, both a list price and a reseller price, and the ontology keeps those apart and says do not average them. It is the right kind of evidence at the wrong scale. The second is a historical cost plan from 2021. It gives a package at real project scale, about one hundred and ninety-five pounds per kVA including fifteen minutes of batteries, supply only. It is a shape anchor. The third is an executed regional framework award. It tells you the order of magnitude of a procurement and nothing about unit rates. The fourth box says what it is. The current price for MW-class UPS and batteries remains an open gap.

The finance lesson is to match the evidence to the scale, and say out loud when you cannot.`);
  }

  // ---------------- 12 LV AND RACK ----------------
  {
    const s = mk("Electrical", "Electrical chain  |  LV and rack distribution", "The last 30 metres decide how much power a rack can actually use");
    const stages = [["UPS output switchboard", "D-007  |  amps"], ["LV board, PDU, RPP", "E-001, E-009, E-010  |  amps"], ["Busway and tap-off", "E-011, E-012  |  amps per feed"], ["Rack whip and rack PDU", "E-017 to E-019  |  kW per rack"], ["Server power supplies", "A and B inputs  |  kW"]];
    stages.forEach((st, i) => {
      const x = 0.5 + i * 2.55;
      B(s, [{ text: st[0], options: { bold: true, fontSize: 12.5, breakLine: true } }, { text: st[1], options: { fontSize: 10.5, color: K.grey } }], x, 1.5, 2.1, 0.78, { fill: K.amberL, line: K.amber, lw: 1.25, r: 0.07 });
      if (i < 4) L(s, x + 2.12, 1.89, x + 2.53, 1.89, { w: 2, arrow: true });
    });
    // elevation: busways
    T(s, "Row elevation, simplified", 0.5, 2.5, 4, 0.26, { fontSize: 11, bold: true, color: K.navy });
    shape(s, "rect", 0.6, 2.85, 7.1, 0.1, { fill: K.amber }); T(s, "Busway A", 7.85, 2.78, 0.9, 0.22, { fontSize: 10.5, bold: true, color: "A56F00" });
    shape(s, "rect", 0.6, 3.1, 7.1, 0.1, { fill: K.teal }); T(s, "Busway B", 7.85, 3.03, 0.9, 0.22, { fontSize: 10.5, bold: true, color: K.teal });
    for (let i = 0; i < 5; i++) {
      const rx = 0.85 + i * 1.4;
      shape(s, "rect", rx, 3.75, 1.15, 2.0, { fill: K.mist, line: K.ink, lw: 1.5 });
      for (let k = 0; k < 6; k++) shape(s, "rect", rx + 0.22, 3.9 + k * 0.28, 0.7, 0.2, { fill: K.navy });
      shape(s, "rect", rx + 0.08, 3.85, 0.1, 1.8, { fill: K.amber }); shape(s, "rect", rx + 0.97, 3.85, 0.1, 1.8, { fill: K.teal });
      L(s, rx + 0.13, 2.95, rx + 0.13, 3.85, { color: K.amber, w: 1.5 }); L(s, rx + 1.02, 3.2, rx + 1.02, 3.85, { color: K.teal, w: 1.5 });
      shape(s, "rect", rx + 0.06, 3.4, 0.14, 0.18, { fill: K.white, line: K.ink, lw: 1 }); shape(s, "rect", rx + 0.95, 3.5, 0.14, 0.18, { fill: K.white, line: K.ink, lw: 1 });
    }
    T(s, "Each rack has two independent feeds: an A rack PDU and a B rack PDU. Amber and teal never share a busway.", 0.6, 5.85, 8.5, 0.5, { fontSize: 11.5, color: K.grey });
    T(s, "Tap-off boxes E-012 (small white squares)", 7.85, 3.4, 1.55, 0.5, { fontSize: 10.5, color: K.grey });
    T(s, "Rack PDUs E-018, E-019 (vertical strips)", 7.85, 4.3, 1.55, 0.5, { fontSize: 10.5, color: K.grey });
    // right column
    const px = 9.7, pw = 3.13;
    T(s, "Read the chain as a chain of ratings", px, 2.5, pw, 0.3, { fontSize: 13, bold: true, color: K.navy });
    T(s, "Density is capped by the thinnest link: tap-off amps, whip size, rack PDU or the breaker feeding it. A bigger UPS upstream does not fix it.", px, 2.85, pw, 1.2, { fontSize: 12, color: K.grey });
    B(s, "Quantity drivers: amps, fault rating, circuits, metres of busway and cable, racks", px, 4.15, pw, 0.85, { fill: K.tealL, line: K.teal, fontSize: 11.5, bold: true, r: 0.06 });
    band(s, 6.15, "HIST", "HISTORICAL Q2 2021", "EXCOOL, supply only: main LV switchgear 4,000 A £128,000 and 5,000 A £155,000 (about £31 to £32 per A). PDU 24-way 630 A £23,000, excluding lift, cranage and FAT/SAT/IST. Installation is separate.", 0.8, 0.5, 8.3);
    shape(s, "roundRect", 8.95, 6.15, 3.88, 0.8, { fill: K.mist, line: K.line, lw: 0.75, rectRadius: 0.06 });
    badge(s, "CURR", 9.05, 6.2, 1.9, "CURRENT, COMPONENT");
    T(s, "A commodity breaker posts at $8.07 (THQP120). Assemblies stay quote-based (GP-E).", 9.05, 6.48, 3.7, 0.45, { fontSize: 10.5 });
    s.addNotes(`The last thirty metres of the electrical chain are where capacity becomes usable. Look at the chain at the top. The UPS output switchboard feeds an LV board, PDU or remote power panel. That feeds a busway with tap-off boxes. A tap-off box is a plug-in unit that connects a rack to the busway. A short cable called a whip, or a rack PDU, delivers power to the servers' power supplies.

The elevation drawing shows the topology. Two busways run above a row of racks, A in amber and B in teal. Each rack takes one feed from each, so that if one path fails, every server still has the other. This is the physical form of two-N distribution that we cover on the redundancy slide.

The key learning is that this is a chain of ratings. Any link can be the thinnest. The tap-off box has an amp rating. The whip has a size. The rack PDU has a breaker. A site may have a huge UPS and a perfectly good board, and still be unable to serve a rack of high-density GPUs because the final links were specified for air-cooled servers. That is why density is a diligence question for the physical path as well as for the cooling.

On quantity drivers, this layer scales with amps, fault rating, circuit count, metres of busway and cable, and rack count. That is why it is often the least well captured item in a top-down dollars-per-megawatt number.

On evidence, the historical cost plan gives us supply-only prices for main LV switchgear, about thirty-one to thirty-two pounds per amp at four and five thousand amps, and a PDU at twenty-three thousand pounds for a six hundred and thirty amp, twenty-four-way unit. Those exclude lifting, cranage and factory and site testing, and installation is a separate trade. On the current side, individual commodity breakers have public prices, a few dollars each. Do not read across. The ontology notes that switchboards and busway assemblies remain quote-based. A cheap breaker inside an expensive assembly tells you nothing about the assembly.`);
  }

  // ---------------- 13 REDUNDANCY ----------------
  {
    const s = mk("Electrical", "Electrical chain  |  redundancy", "Redundancy changes how many units you buy at each layer");
    const cols = [
      { t: "N", sub: "just enough", n: 4, paths: 1 },
      { t: "N+1", sub: "one spare module", n: 5, paths: 1 },
      { t: "2N", sub: "two full paths", n: 4, paths: 2 },
    ];
    cols.forEach((c, i) => {
      const x = 0.5 + i * 4.18, w = 3.95;
      shape(s, "roundRect", x, 1.5, w, 3.2, { fill: K.white, line: K.line, lw: 1, rectRadius: 0.08 });
      T(s, [{ text: c.t, options: { bold: true, fontSize: 20, color: K.navy } }, { text: "   " + c.sub, options: { fontSize: 12, color: K.grey } }], x + 0.2, 1.58, w - 0.4, 0.4, {});
      const sq = 0.42;
      for (let p = 0; p < c.paths; p++) {
        const py = 2.15 + p * 1.05;
        const n = c.n;
        for (let k = 0; k < n; k++) {
          const isSpare = c.t === "N+1" && k === 4;
          B(s, "1", x + 0.25 + k * 0.5, py, sq, sq, { fill: isSpare ? K.white : K.amberL, line: isSpare ? K.red : K.amber, lw: isSpare ? 1.75 : 1.25, dash: isSpare ? "dash" : "solid", fontSize: 10, r: 0.04 });
        }
        L(s, x + 0.25, py + 0.6, x + 0.25 + n * 0.5 - 0.08, py + 0.6, { w: 3, color: c.paths === 2 ? (p === 0 ? K.amber : K.teal) : K.ink });
        L(s, x + 0.46 + (n - 1) * 0.5 / 2, py + 0.43, x + 0.46 + (n - 1) * 0.5 / 2, py + 0.6, { w: 1 });
        T(s, c.paths === 2 ? (p === 0 ? "Path A" : "Path B") : "Shared bus", x + 0.25 + n * 0.5 + 0.1, py + 0.48, 1.1, 0.25, { fontSize: 10, color: K.grey });
      }
      B(s, c.paths === 2 ? "IT load, dual-fed" : "IT load: 4 MW", x + 0.9, c.paths === 2 ? 4.1 : 3.75, 2.1, 0.4, { fill: K.navy, color: K.white, bold: true, fontSize: 11.5, r: 0.05 });
      if (c.paths === 2) { L(s, x + 1.4, 3.8, x + 1.4, 4.1, { color: K.amber, w: 2, arrow: true }); L(s, x + 2.5, 3.8, x + 2.5, 4.1, { color: K.teal, w: 2, arrow: true }); }
      else L(s, x + 1.95, 2.75, x + 1.95, 3.75, { w: 2, arrow: true });
    });
    // table
    const rows = [["Modules bought (1 MW each, 4 MW load)", "4", "5", "8"], ["Survives one module failing", "No", "Yes", "Yes"], ["Survives loss of a whole path or bus", "No", "No", "Yes"], ["Maintain without exposing the load", "No", "Partly", "Yes"]];
    rows.forEach((r, ri) => r.forEach((cell, ci) => {
      const x = ci === 0 ? 0.5 : 4.2 + (ci - 1) * 2.9, w = ci === 0 ? 3.6 : 2.7;
      B(s, cell, x, 4.85 + ri * 0.34, ci === 0 ? 3.6 : 2.7, 0.3, { fill: ri === 0 ? K.mist : K.white, line: K.line, lw: 0.5, fontSize: 11, bold: ri === 0 || ci === 0, align: ci === 0 ? "left" : "center", margin: 0.08 });
    }));
    B(s, [{ text: "Not a percentage uplift. ", options: { bold: true, color: K.red } }, { text: "Generators, UPS, distribution and cooling can each carry a different topology, so apply redundancy layer by layer. Illustration only: 4 MW load, 1 MW modules, one layer.", options: { color: K.ink } }], 0.5, 6.35, 12.33, 0.58, { fill: K.redL, line: K.red, fontSize: 12, r: 0.06, align: "left", margin: 0.15 });
    s.addNotes(`Redundancy is the most misused word in data centre finance, so let us make it concrete with a simple example. A four megawatt load, served by one-megawatt UPS modules.

In an N design you buy exactly what you need. Four modules. If any one fails, you lose capacity, and the load is exposed. If any shared component such as the bus fails, the load is down.

In an N+1 design you buy one extra module, five in total. You can lose one module and carry on. You can also take a module out for maintenance. The five modules also feed a shared bus. If the bus fails, the load fails. N+1 protects against component failure and does not protect against the failure of the thing everything shares.

In a 2N design you build two entire paths, each able to carry the whole load on its own. Eight modules in this example, with separate buses, and a dual-fed load. You can lose a whole path and keep running. You can maintain one path while the other carries the load. It is the most expensive and the most resilient. In practice it is applied at specific layers with real choices at each.

The table summarises it. Modules bought are four, five and eight. Notice the jump from five to eight. The step from N+1 to 2N carries a real cost that varies with the layer. It depends on which layer you apply it to.

The finance consequence is that you should never apply a redundancy uplift as a single percentage to total capex. Generators, UPS, distribution boards, chillers and room cooling units can each have their own topology. The reference facility in the 2019 CIBSE and AECOM cost model is a four-and-a-half megawatt Tier III design, with room cooling units at N+2 and chillers at N+1. The cost plan from 2021 prices indirect air units at N+2 per hall. Those are layer choices, and you will see their effect in counts. When someone quotes a Tier rating, ask which layers carry which topology, and whether the quoted capacity is before or after the redundancy.`);
  }
};
