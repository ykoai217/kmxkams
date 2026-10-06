const { ecard, K, T, B, shape, L, P, ellipse, head, badge, STATE, legend, hub, band, note, card, dot, chain } = require("./lib");

module.exports = function (pres, mk) {
  // ---------------- 33 RISK HEAT MAP ----------------
  {
    const s = mk("Transaction", "Transaction use  |  risk map by system", "Where to spend diligence time: risk differs by system and by dimension");
    const cols = ["Capex weight", "Lead time", "Double-count risk", "Commissioning risk", "Lifecycle risk", "Current-price gap"];
    const rows = [
      ["HV/MV and transformers", "H", "H", "M", "M", "L", "H"],
      ["Generators and fuel", "H", "H", "H", "H", "M", "M"],
      ["UPS and batteries", "H", "M", "H", "H", "H", "H"],
      ["LV, busway, PDU", "M", "M", "M", "M", "L", "M"],
      ["Chillers and hydronics", "H", "M", "H", "M", "M", "H"],
      ["CRAH, fan wall, IAC", "M", "M", "M", "M", "M", "H"],
      ["Direct-to-chip and CDU", "H", "M", "H", "H", "M", "H"],
      ["Rear-door and immersion", "M", "L", "M", "M", "M", "H"],
      ["Fire and life safety", "M", "L", "L", "H", "M", "M"],
      ["Controls, BMS, DCIM", "M", "L", "M", "H", "H", "M"],
      ["Fibre and white space", "L", "L", "L", "L", "L", "L"],
    ];
    const fillOf = { H: K.red, M: K.amber, L: K.green };
    const x0 = 0.5, c0 = 3.1, cw = 1.54, y0 = 1.45;
    B(s, "System", x0, y0, c0, 0.5, { fill: K.navy, color: K.white, bold: true, fontSize: 11.5, align: "left", margin: 0.12 });
    cols.forEach((c, i) => B(s, c, x0 + c0 + i * cw + 0.03, y0, cw - 0.03, 0.5, { fill: i === 5 ? K.slate : K.navy, color: K.white, bold: true, fontSize: 11, margin: 0.04 }));
    rows.forEach((r, ri) => {
      const y = y0 + 0.55 + ri * 0.42;
      B(s, r[0], x0, y, c0, 0.38, { fill: ri % 2 ? K.mist : K.white, line: K.line, lw: 0.5, fontSize: 11.5, bold: true, align: "left", margin: 0.12 });
      for (let i = 1; i <= 6; i++) B(s, { H: "High", M: "Medium", L: "Low" }[r[i]], x0 + c0 + (i - 1) * cw + 0.03, y, cw - 0.03, 0.38, { fill: fillOf[r[i]], color: K.white, bold: true, fontSize: 10.5, margin: 0.02 });
    });
    note(s, "Columns 1 to 5 are analyst judgement for diligence triage, not ontology data. The current-price gap column follows the ontology gap profiles (sheet 14). Ratings describe a typical new-build facility.", 0.5, 6.7, 12.33, 0.4);
    s.addNotes(`This is a triage map. It tells you where diligence time pays off, system by system. Be clear about what it is. The first five columns are my analyst judgement for a typical new build, intended to focus your questions. Treat them as hypotheses and challenge them. The last column, current-price gap, follows the ontology's gap profiles, which record where public price evidence is weak.

Read down the columns. Capex weight is high for the big power and cooling plant: HV and transformers, generators, UPS, chillers and liquid cooling. Fibre and white-space hardware is low. Lead time is highest for the equipment that few factories make at scale, namely HV equipment, transformers and generators. The ontology's benchmark sources, such as the RLB data centre trends reports, give supply-chain context on production-slot pressure. The ontology itself holds no numeric lead times, so none are shown.

Double-count risk is highest where package controls exist. Generators, UPS, chillers with pump skids and CDUs. Commissioning risk is highest where integration is heavy. Generators and UPS must prove their handshake, fire systems need witnessed tests, controls need integration testing, and liquid cooling is newer. Lifecycle risk is highest for batteries, which can need up to full string replacement with an interval the ontology marks unknown, and for controls, where obsolescence is different from physical wear. Fire lifecycle is code-driven and the ontology marks it as a gap.

The final column is the sobering one. Almost every large system carries a high current-price gap. Generators and controls have some public calibration evidence, and the rest do not. That means the highest-value diligence requests are for quotes, tenders and awards with scope, in exactly the systems that dominate capex.

How to use this in practice. Pick the red cells in a target asset's biggest systems. Those are your first diligence requests. Then use the next slide's list to turn each into a specific question and a specific document.`);
  }

  // ---------------- 34 DILIGENCE LIST ----------------
  {
    const s = mk("Transaction", "Transaction use  |  diligence request list", "Ten questions that convert the physical system into data-room requests");
    const rows = [
      ["Grid and HV/MV", "Is the MW contracted, energised or deliverable to rack, and who owns the bay?", "Connection agreement, energisation certificate, protection study"],
      ["Transformers", "What MVA, what N+x, and what sits inside the quoted package?", "Equipment schedule, vendor bill of materials, FAT reports"],
      ["Generators", "How many hours of autonomy at what load, and what do permits allow?", "Fuel calculation, emissions permit, load bank report"],
      ["UPS and batteries", "What runtime at today's load, which chemistry, and when are strings replaced?", "Discharge test, BMS logs, warranty and replacement plan"],
      ["LV and busway", "Which is the thinnest rating between UPS and rack, against today's density?", "Single-line diagrams, thermal imaging, breaker settings"],
      ["Chillers, room cooling", "What capacity at design ambient, with which N+x, and how much spare?", "Plant schedule, performance tests, seasonal data"],
      ["Liquid cooling", "Liquid-ready or liquid-installed, and who owns CDUs, fluid and warranty?", "Readiness evidence by rung, CDU bill of materials, OEM terms"],
      ["Fire and safety", "Does the authority and insurer accept the current configuration?", "Discharge tests, authority certificate, insurer survey"],
      ["Controls", "Who owns licences, configuration and alarm history, and is there one view?", "Licence register, point list, alarm logs"],
      ["Commissioning", "Did the integrated test cover the final build, with defects closed?", "IST report, snag list, seasonal test record"],
    ];
    const head_ = [{ text: "System", options: { bold: true, color: K.white, fill: { color: K.navy }, fontSize: 11.5 } }, { text: "The question that matters", options: { bold: true, color: K.white, fill: { color: K.navy }, fontSize: 11.5 } }, { text: "The document that answers it", options: { bold: true, color: K.white, fill: { color: K.navy }, fontSize: 11.5 } }];
    const body = rows.map((r, i) => [
      { text: r[0], options: { bold: true, color: K.navy, fill: { color: i % 2 ? K.mist : K.white }, fontSize: 11.5 } },
      { text: r[1], options: { color: K.ink, fill: { color: i % 2 ? K.mist : K.white }, fontSize: 11.5 } },
      { text: r[2], options: { color: K.grey, fill: { color: i % 2 ? K.mist : K.white }, fontSize: 11 } },
    ]);
    s.addTable([head_].concat(body), { x: 0.5, y: 1.5, w: 12.33, colW: [2.2, 6.1, 4.03], rowH: [0.34].concat(rows.map(() => 0.5)), fontFace: "Calibri", valign: "middle", border: { type: "solid", pt: 0.5, color: K.line }, margin: [0.03, 0.1, 0.03, 0.1], objectName: "diligence-table" });
    s.addNotes(`Each of these ten rows turns a piece of physical understanding from earlier slides into a request you can put in a data room. Notice that the left column is a system, the middle is a question, and the right is a document. A good diligence request names the document, since that is what lets the seller respond and lets you check the answer.

Grid and HV and MV. Ask whether the megawatt is contracted, energised or deliverable to rack, and who owns the bay. The documents are the connection agreement, the energisation certificate and the protection study.

Transformers. Ask the MVA, the redundancy, and what is inside the quoted package. The ring main unit, metering and protection are the usual suspects. The documents are the equipment schedule, the vendor bill of materials and the factory test reports.

Generators. Ask how many hours of autonomy at what load, and what the permits allow. Running-hour limits and emissions rules can cap value. The documents are the fuel calculation, the permit and the load bank test report.

UPS and batteries. Ask runtime at today's load, chemistry and the replacement plan. Request discharge test results, battery management logs, and the warranty.

LV and busway. Find the thinnest rating between UPS and rack and compare it with today's density. Request single-line diagrams, thermal imaging and breaker settings.

Chillers and room cooling. Ask capacity at design ambient temperature, the redundancy and the spare. Request the plant schedule, the performance test and seasonal data.

Liquid cooling. Ask whether the site is liquid-ready or liquid-installed, using the three rungs, and who owns the CDUs, fluid and warranty.

Fire and safety. Ask whether the authority and the insurer accept the configuration as it is now.

Controls. Ask who owns the licences, configuration and alarm history.

Commissioning. Ask whether the integrated systems test covered the final build and whether defects are closed.

If you only have time to ask three, ask the grid question, the integrated systems test question and the liquid-readiness question. Between them they cover the three biggest gaps between a claimed megawatt and a usable one.`);
  }

  // ---------------- 35 BUY V BUILD ----------------
  {
    const s = mk("Transaction", "Transaction use  |  buy versus build", "Replacement cost sets the anchor, and time and risk move it");
    const base = 5.7, sc = 2.6, sw = 2.2;
    const parts = [["Main plant supply", 34.4, K.amber], ["Installation (mech + elec)", 24.0, K.violet], ["Civil, structural, arch.", 20.4, K.slate], ["GC prelims and OH&P", 13.7, K.navy], ["Support / admin", 7.5, "A9B4C0"]];
    let y = base;
    parts.forEach((p) => {
      const h = sc * p[1] / 100; y -= h;
      B(s, [{ text: p[0], options: { bold: true, fontSize: 10, color: K.white, breakLine: h > 0.3 } }, { text: h > 0.3 ? p[1].toFixed(1) + "%" : "  " + p[1].toFixed(1) + "%", options: { fontSize: 10, color: K.white } }], 0.5, y, sw, h, { fill: p[2], margin: 0.03 });
    });
    B(s, "Land, utilities, fees: excluded in source", 0.5, y - 0.4, sw, 0.4, { fill: K.white, line: K.mid, dash: "dash", fontSize: 9.5, color: K.grey, margin: 0.02 });
    const top = y - 0.4;
    T(s, "1  Replacement cost today", 0.5, 1.5, 2.6, 0.3, { fontSize: 12.5, bold: true, color: K.navy });
    T(s, "Shares: EXCOOL direct-air case, Q2 2021", 0.5, 5.78, 3.0, 0.3, { fontSize: 10, italic: true, color: K.grey });
    const c2 = top - 0.4, c3 = c2 - 0.35, c4 = c3 + 0.5;
    shape(s, "rect", 2.95, c2, 1.3, 0.4, { fill: K.green }); T(s, "2  + Time to power and to revenue", 2.95, c2 + 0.45, 1.45, 0.8, { fontSize: 10.5, bold: true, color: "1B6E47" });
    shape(s, "rect", 4.5, c3, 1.5, 0.35, { fill: K.green }); T(s, "3  + Development risk avoided: power, permits, slots", 4.5, c3 + 0.4, 1.6, 0.9, { fontSize: 10.5, bold: true, color: "1B6E47" });
    shape(s, "rect", 6.25, c3, 1.5, 0.5, { fill: K.red }); T(s, "4  - Age and obsolescence: old batteries, air-only design", 6.25, c3 + 0.55, 1.6, 0.9, { fontSize: 10.5, bold: true, color: "962F20" });
    B(s, "5  Value anchor", 8.0, c4, 1.15, base - c4, { fill: K.navy, color: K.white, bold: true, fontSize: 11, valign: "top", margin: 0.06 });
    L(s, 0.5 + sw, top, 2.95, top, { w: 1, dash: "dash", color: K.mid }); L(s, 4.25, c2, 4.5, c2, { w: 1, dash: "dash", color: K.mid }); L(s, 6.0, c3, 6.25, c3, { w: 1, dash: "dash", color: K.mid }); L(s, 7.75, c4, 8.0, c4, { w: 1, dash: "dash", color: K.mid });
    note(s, "Blocks 2 to 4 are symbolic, not sized. Size each with evidence.", 2.95, 5.78, 6.2, 0.3);
    // right
    const px = 9.35, pw = 3.48;
    card(s, "Buy tends to win when", "Power is energised and contracted. Capacity is commissioned. Contracts already pay. Supply slots are tight.", px, 1.5, pw, 1.7, K.green);
    card(s, "Build tends to win when", "Power is cheap and available. The design is standard. Customers will wait. You already own the land.", px, 3.35, pw, 1.55, K.teal);
    card(s, "Evidence discipline", "The stack gives shape. Total benchmarks reconcile it. Every layer carries a source, date and scope.", px, 5.05, pw, 1.4, K.navy, K.mist);
    s.addNotes(`This is where the physical and commercial understanding turns into a transaction view. The question is whether it is better to buy an existing operating asset or to build a new one.

Start with column one, replacement cost today. It is the cost to rebuild the capacity from scratch. The stack uses the shares from the 2021 reference cost plan for the direct-air case. Main plant supply is about thirty-four percent. Installation across mechanical and electrical is about twenty-four. Civil, structural and architectural is about twenty. General contractor preliminaries and overheads and profit about fourteen, and support and admin space about seven and a half. The dashed box on top is a reminder that land, off-site utilities and fees are excluded from that source, and they can matter a great deal. Everything in this column is historical and must be currentised before use.

Replacement cost is the anchor. Three adjustments move the value of an operating asset away from it. Block two is the time to power and to revenue. A buyer gets capacity today. A builder waits through design, permitting, grid connection, equipment slots, construction and commissioning, and forgoes revenue meanwhile. Block three is the development risk the buyer avoids. Power may not arrive, permits may be refused and supply chains may slip. Block four is the discount for age and obsolescence. Batteries part-way through life, a design that is air-only when customers need liquid cooling, or controls that are near end of support all reduce value relative to new. The floating blocks are symbolic. The point is the structure of the argument, and you should size each block with evidence.

The right-hand cards give the heuristic. Buy tends to win when power is energised and contracted, capacity is commissioned, contracts already pay, and supply slots are tight. Build tends to win when power is cheap and available, the design is standard, customers can wait, and the land is already owned.

One last discipline. The stack gives shape. A total benchmark such as cost per megawatt reconciles the whole. Every layer you put in the stack needs its source, date and scope, using everything this course has taught about evidence.`);
  }

  // ---------------- 36 DR03 LAYER ----------------
  {
    const s = mk("Transaction", "Transaction use  |  the next model layer", "DR03 adds the installation layer the equipment ontology omits");
    const layers = [
      ["Equipment ontology", "418 lines, branches A to P, quantity drivers, evidence taxonomy", "FROZEN v0.1.1", K.green, K.greenL],
      ["Package controls", "Parent and child rules for genset, UPS, transformer bay, prefab modules, pump skids", "FROZEN", K.green, K.greenL],
      ["DR03 construction and installation", "Civil, structural, architectural; builder's work; containment and cabling; install labour; prelims and OH&P; testing and commissioning", "NEXT LAYER", K.amber, K.amberL],
      ["Outside both layers", "Land, off-site utilities, fees, finance, tax", "SEPARATE WORK", K.slate, K.slateL],
    ];
    layers.forEach((l, i) => {
      const y = 1.5 + i * 1.28;
      shape(s, "roundRect", 0.5, y, 6.9, 1.12, { fill: l[4], line: l[3], lw: 1.5, rectRadius: 0.07 });
      T(s, l[0], 0.7, y + 0.1, 4.5, 0.3, { fontSize: 13.5, bold: true, color: K.ink });
      T(s, l[1], 0.7, y + 0.45, 5.1, 0.6, { fontSize: 11, color: K.ink });
      B(s, l[2], 5.7, y + 0.12, 1.55, 0.3, { fill: l[3], color: K.white, bold: true, fontSize: 9.5, r: 0.06 });
    });
    note(s, "The cost plan itself separates client-supplied main plant from installation, which is the same seam.", 0.5, 6.65, 6.9, 0.4);
    // chart: EXCOOL line families
    T(s, "EXCOOL gives DR03 a first skeleton: 52 numbered cost lines", 7.8, 1.45, 5.0, 0.5, { fontSize: 13, bold: true, color: K.navy });
    const cats = ["Civil, structural, architectural", "Mechanical installation", "Electrical installation", "Support / admin", "GC prelims and OH&P", "Main plant supply"];
    s.addChart(pres.charts.BAR, [{ name: "Cost lines", labels: cats, values: [12, 12, 22, 1, 2, 3] }], {
      x: 7.8, y: 1.95, w: 5.03, h: 2.9, barDir: "bar", barGapWidthPct: 40, chartColors: [K.amber], showLegend: false,
      catAxisOrientation: "maxMin", catAxisLabelFontSize: 10.5, catAxisLabelColor: "44546A", catAxisLabelFontFace: "+mn-lt", catAxisLabelFrequency: 1,
      valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, showValue: true, dataLabelFontSize: 10.5, dataLabelColor: "44546A", dataLabelFontFace: "+mn-lt", dataLabelPosition: "outEnd", valAxisMaxVal: 27,
    });
    card(s, "What DR03 must capture", "Quantity drivers such as floor area, structure volume, metres of containment and cable, and labour. Evidence from QS cost plans, tender bills and executed awards, mapped back to ontology parents.", 7.8, 4.95, 5.03, 1.75, K.amber);
    badge(s, "HIST", 7.8, 6.78, 1.6, "Q2 2021 line count");
    s.addNotes(`The equipment ontology tells you what physical things exist, how they are packaged and what evidence prices them. It does not tell you what it costs to build the building and install the equipment. That is the job of the next layer, which the workbook calls DR03, the construction and installation ontology. The ontology explicitly defers construction and building fabric to that layer. It does not add them to the equipment list.

The four boxes on the left show the layering. First, the equipment ontology: four hundred and eighteen lines in sixteen branches, frozen at version zero point one point one. Second, package controls, which are the parent-and-child rules that prevent double-counting. Also frozen. Third, DR03, the next layer. It will cover civil, structural and architectural work, builder's work, containment and cabling, installation labour, preliminaries and overheads, and testing and commissioning. Fourth, a separate box for things outside both layers. Land, off-site utilities, fees, finance and tax.

Why does this layer matter so much? Recall the equipment-versus-installed slide. Main plant was about a third of the build. The other two-thirds sit in layers that the equipment ontology does not cover.

The chart shows what the one detailed cost plan we have offers as a skeleton. The EXCOOL plan has fifty-two numbered lines. Twelve are civil, structural and architectural. Twelve are mechanical installation. Twenty-two are electrical installation. One is support space, two are general contractor items and three are main plant supply. The three main plant lines are the ones the equipment ontology covers. The other forty-nine are what DR03 would take on. Because it is one historical cost plan, treat it as a skeleton to be completed with more sources.

The card on the right lists what DR03 must capture. Quantity drivers such as floor area, structural volume, metres of containment and cable, and labour hours. And evidence from cost plans, tender bills and awards, each mapped back to the ontology parent it installs. When that exists, the bottom-up model can be reconciled in full against a total benchmark.`);
  }

  // ---------------- 37 FINAL FIVE-MOVE ----------------
  {
    const s = pres.addSlide({ masterName: "DARK", sectionTitle: "5 Transaction use" });
    T(s, "THE FIVE-MOVE TEST", 0.7, 0.45, 8, 0.3, { fontSize: 12, bold: true, color: "3FC3D3", charSpacing: 3 });
    T(s, "Apply it to any line in any model", 0.7, 0.8, 11.5, 0.7, { fontFace: "Cambria", fontSize: 30, bold: true, color: K.white });
    const mv = [["1", "Job", "What physical job does it do?", K.amber], ["2", "Driver", "What sets its size or count?", "3FC3D3"], ["3", "Package", "What else is inside the price?", "A99BE0"], ["4", "Evidence", "Which rung, date and scope?", "7FD6A8"], ["5", "Risk", "What can fail commercially?", "F08A7B"]];
    mv.forEach((m, i) => {
      const x = 0.7 + i * 2.4;
      B(s, m[0], x, 1.85, 0.6, 0.6, { shape: "ellipse", fill: m[3], color: K.ink, bold: true, fontSize: 20, margin: 0 });
      T(s, m[1], x, 2.6, 2.2, 0.35, { fontSize: 18, bold: true, color: K.white });
      T(s, m[2], x, 3.0, 2.1, 0.7, { fontSize: 12.5, color: "C9D8E8" });
    });
    // worked example
    shape(s, "roundRect", 0.7, 3.95, 11.9, 1.5, { fill: K.navy, line: "3A5F85", lw: 1, rectRadius: 0.08 });
    T(s, "Worked example: a CDU quote lands in the data room", 0.9, 4.03, 10, 0.3, { fontSize: 13, bold: true, color: K.white });
    const ex = ["Isolates and exchanges heat between rack and facility loops", "kWth or racks, with N+1 pumps or units", "Pumps, exchanger, filters, controls may or may not be inside", "Quote or tender with scope. No current public price", "Boundary, leak and warranty ownership, lead time"];
    ex.forEach((e, i) => {
      T(s, e, 0.9 + i * 2.35, 4.45, 2.15, 1.2, { fontSize: 11.5, color: "DCE7F2" });
    });
    // three rules
    const rules = [["Know the chain.", "Power in, heat out, assurance around."], ["Know the package.", "Included, housed, installed and commissioned differ."], ["Know the date.", "Historical evidence is shape until it is currentised."]];
    rules.forEach((r, i) => {
      T(s, [{ text: r[0], options: { bold: true, color: K.amber, breakLine: true, fontSize: 16 } }, { text: r[1], options: { color: "C9D8E8", fontSize: 12 } }], 0.7 + i * 4.05, 5.8, 3.8, 0.9, {});
    });
    s.addNotes(`Let us end with the framework you can carry into any transaction. Five moves, applied to any line in any model.

Move one, job. What physical job does this item do, and what happens if it is missing? If you cannot say it in a sentence, you still need to study the line. Move two, driver. What sets its size or its count? Megavolt-amps, kilowatts, kilowatts thermal, runtime, rack count, metres, amps or litres. If the unit of the price does not match the unit of the quantity, the line is wrong. Move three, package. What else is inside the price, and what is outside it? Remember the four states: included, housed, installed and commissioned. Move four, evidence. Which rung of the ladder, which date and which scope? Executed award, cost plan, list price, marketplace ask or assumption. Current or historical. Package or component. Move five, risk. What can go wrong commercially? Capex, lead time, double-counting, commissioning, lifecycle replacement, customer acceptance or bankability.

The worked example applies it to a CDU quote arriving in a data room. The job is to isolate and exchange heat between the rack loop and the facility loop. The driver is kilowatts thermal or racks, with redundancy. The package is uncertain. Pumps, heat exchanger, filters and controls may or may not be inside, and no frozen rule settles it, so you ask for the bill of materials. The evidence is a quote or tender with scope, because there is no current public price. The risks are the boundary of scope, leak and warranty ownership, and lead time. In five moves you have turned a vague line into five specific diligence requests.

Finally, three rules to take away. Know the chain: power in, heat out, assurance around. Know the package: included, housed, installed and commissioned are different. Know the date: historical evidence is shape until it is explicitly currentised.

If you apply those, you will find the errors that other people miss, you will ask for the documents that matter, and you will be honest about the numbers that nobody can defend today. Thank you.`);
  }
};
