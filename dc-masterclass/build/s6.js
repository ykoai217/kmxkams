const { ecard, K, T, B, shape, L, P, ellipse, head, badge, STATE, legend, hub, band, note, card, dot, chain } = require("./lib");

module.exports = function (pres, mk) {
  // ---------------- 23 FIRE ----------------
  {
    const s = mk("Assurance", "Assurance chain  |  fire and life safety", "Fire protection is zoned by what burns and what water would destroy");
    // plan
    shape(s, "rect", 0.5, 1.5, 7.5, 4.3, { fill: K.white, line: K.ink, lw: 2.5 });
    const z = (t, sub, x, y, w, h, f, l) => B(s, [{ text: t, options: { bold: true, fontSize: 12, breakLine: true } }, { text: sub, options: { fontSize: 10 } }], x, y, w, h, { fill: f, line: l, lw: 1.25, r: 0.04 });
    z("Data halls", "Early smoke detection (VESDA I-005), clean agent or pre-action sprinklers (I-009)", 0.65, 1.65, 3.9, 2.2, K.violetL, K.violet);
    z("Electrical rooms", "Switchgear, UPS: detection plus clean agent (I-013, I-014)", 4.7, 1.65, 3.15, 1.0, K.amberL, K.amber);
    z("Battery room", "Detection, ventilation (D-018) and suppression interface (D-019)", 4.7, 2.75, 3.15, 1.1, K.redL, K.red);
    z("Meet-me room", "Carrier and fibre: detection and agent", 0.65, 4.0, 1.9, 1.65, K.slateL, K.slate);
    z("Control room", "Fire panel I-001, firefighter interface I-026", 2.65, 4.0, 2.4, 1.65, K.tealL, K.teal);
    z("Generator and fuel", "Fuel area: detection, extinguishers, bunding", 5.15, 4.0, 2.7, 1.65, K.greenL, K.green);
    shape(s, "roundRect", 0.5, 5.95, 7.5, 0.5, { fill: K.mist, line: K.line, lw: 0.75, rectRadius: 0.05 });
    T(s, "Outside the building: fire-water tank I-019, fire pump I-017, jockey pump I-018, hydrants I-025", 0.65, 5.95, 7.2, 0.5, { fontSize: 11, valign: "middle" });
    note(s, "Schematic plan. Real layouts vary by jurisdiction and insurer.", 0.5, 6.55, 7.5, 0.25);
    // chain
    T(s, "From detection to action", 8.4, 1.45, 4.4, 0.3, { fontSize: 13, bold: true, color: K.navy });
    const steps = [["Detect", "Smoke I-003, heat I-004, aspirating I-005", K.violet, K.violetL], ["Alarm", "Fire alarm control panel I-001, annunciators I-002", K.violet, K.violetL], ["Release", "Releasing panel I-012, cylinders I-013, nozzles I-014", K.red, K.redL], ["Interface", "Dampers I-022, I-028, smoke extract I-027, HVAC shutdown", K.amber, K.amberL], ["Prove", "Discharge, alarm and interface tests, with the authority", K.green, K.greenL]];
    steps.forEach((st, i) => {
      const y = 1.9 + i * 0.84;
      dot(s, i + 1, 8.4, y + 0.14, 0.34, st[2]);
      B(s, [{ text: st[0], options: { bold: true, fontSize: 12, breakLine: true } }, { text: st[1], options: { fontSize: 10 } }], 8.9, y, 3.93, 0.68, { fill: st[3], line: st[2], lw: 1, r: 0.05, align: "left", margin: 0.1 });
      if (i < 4) L(s, 8.57, y + 0.5, 8.57, y + 0.98, { w: 1.5, color: K.ink, arrow: true });
    });
    ecard(s, "HIST", "HISTORICAL Q2 2021", "EXCOOL 20 MW, direct case: gaseous and fire suppression £1.72m; fire detection, alarm and VESDA £0.38m. Installed scope dominates cost.", 8.4, 6.15, 4.43, 0.85, 1.6);
    s.addNotes(`Fire and life safety is an assurance system that lets the building be insured, permitted and operated.

The plan view shows why a data centre has several different fire strategies. Fire protection is zoned by two questions: what could burn here, and what would suppression damage here? Water in a switchgear room is itself a hazard.

Data halls typically use very early smoke detection, an aspirating system sometimes called VESDA, which pulls air through sampling pipes to a sensitive detector. Suppression is either a clean agent gas or a pre-action sprinkler, which keeps pipes dry until detection confirms a fire. Electrical rooms use detection plus clean agent. The battery room is its own problem. It needs ventilation for gases from lead-acid batteries, and, for lithium-ion, a suppression and detection interface. The ontology lists both ventilation and fire-detection interface as separate lines under the UPS branch. The generator area is about fuel. The control room hosts the fire alarm panel and the firefighter interface. Outside the building sit the fire-water tank and pumps.

On the right is the chain of events. Detectors sense smoke or heat. The alarm panel decides. The releasing panel triggers agent cylinders or opens a valve. Interfaces shut dampers, start smoke extract and stop HVAC so the agent stays in the room. Then, importantly, someone proves it, through discharge and interface tests witnessed by the authority.

For finance, three points. First, fire systems are mostly installed scope. Small devices have public prices. The system is the installation, and it is priced as a package. In the 2021 cost plan for a twenty-megawatt hall, gaseous and fire suppression installation is one point seven two million pounds and detection and alarm another three hundred and eighty thousand. Those are installed trade lines. Second, lifecycle intervals are driven by code, which varies by jurisdiction, and the ontology marks lifecycle evidence for fire as a gap. Third, acceptance matters. A site without a clean sign-off from the fire authority and the insurer is not bankable, regardless of how good the hardware is.`);
  }

  // ---------------- 24 CONTROLS ----------------
  {
    const s = mk("Assurance", "Assurance chain  |  controls and monitoring", "Controls hardware is cheap and public, and the integrated system is neither");
    // layers
    T(s, "Five layers, data up and commands down", 0.5, 1.45, 5, 0.28, { fontSize: 13, bold: true, color: K.navy });
    const ly = [["DCIM", "capacity, assets, customer reporting  |  K-020, K-021", K.violet, K.violetL], ["BMS and EPMS", "mechanical and power supervision  |  K-001, K-007, K-008, K-009 to K-012", K.navy, K.slateL], ["Network and gateways", "protocol bridges, monitoring Ethernet  |  K-006, K-022, K-027", K.slate, K.mist], ["Controllers", "PLC, DDC, remote I/O  |  K-002, K-003, K-004", K.teal, K.tealL], ["Field devices", "sensors K-013 to K-019, actuators K-024 to K-026, meters", K.amber, K.amberL]];
    ly.forEach((l, i) => {
      const y = 1.85 + i * 0.95;
      B(s, [{ text: l[0], options: { bold: true, fontSize: 13, breakLine: true } }, { text: l[1], options: { fontSize: 10.5 } }], 0.5 + i * 0.0, y, 6.3, 0.8, { fill: l[3], line: l[2], lw: 1.5, r: 0.06, align: "left", margin: 0.15 });
    });
    L(s, 7.0, 6.4, 7.0, 1.9, { w: 2, color: K.green, arrow: true }); T(s, "data", 7.05, 3.9, 0.6, 0.25, { fontSize: 10, color: K.green, bold: true });
    L(s, 7.35, 1.9, 7.35, 6.4, { w: 2, color: K.red, arrow: true }); T(s, "commands", 7.4, 3.0, 0.9, 0.25, { fontSize: 10, color: K.red, bold: true });
    // iceberg
    T(s, "Visible price versus installed system", 8.5, 1.45, 4.3, 0.28, { fontSize: 13, bold: true, color: K.navy });
    shape(s, "rect", 8.5, 1.85, 4.33, 4.75, { fill: "EAF4F8" });
    shape(s, "rect", 8.5, 3.15, 4.33, 3.45, { fill: "BFD9E6" });
    L(s, 8.5, 3.15, 12.83, 3.15, { color: K.teal, w: 2, dash: "dash" });
    shape(s, "triangle", 9.9, 1.9, 1.5, 1.25, { fill: K.white, line: K.slate, lw: 1.5 });
    T(s, "tip", 9.9, 2.4, 1.5, 0.3, { fontSize: 10, align: "center", color: K.grey });
    badge(s, "CURR", 8.65, 1.93, 1.0);
    T(s, "Catalogue hardware: PLC CPU $302, 15-slot base $228 (AutomationDirect)", 8.65, 2.28, 1.35, 0.85, { fontSize: 9.5, color: K.ink });
    T(s, "Below the waterline", 8.65, 3.2, 4.0, 0.25, { fontSize: 11, bold: true, color: K.navy });
    T(s, [{ text: "Integration, programming, head ends and wiring", options: { bold: true, breakLine: true } }, { text: "£2.765m, same in all five EXCOOL cases (Q2 2021, 20 MW).", options: { breakLine: true } }, { text: " ", options: { fontSize: 5, breakLine: true } }, { text: "BMS controls and power supplies to mechanical plant", options: { bold: true, breakLine: true } }, { text: "£320 per kW IT, about £1.44m at 4.5 MW (CIBSE/AECOM 2019).", options: { breakLine: true } }, { text: " ", options: { fontSize: 5, breakLine: true } }, { text: "Software licences and DCIM", options: { bold: true, breakLine: true } }, { text: "Package prices weak (gap profile GP-K).", options: {} }], 8.65, 3.5, 4.05, 2.9, { fontSize: 11 });
    s.addNotes(`Controls and monitoring are the nervous system of the data centre. They are easy to dismiss as a small line, and for hardware they are. Let us separate layers.

At the bottom are field devices. Temperature, humidity, pressure and flow sensors. Fuel-level sensors. Actuators that move valves and dampers. Meters. Above them are controllers. A programmable logic controller, or PLC, runs a control loop, such as keeping a chilled-water temperature. Remote I/O modules and direct digital controllers extend that reach. Above them is a network layer of gateways and protocol converters, which let equipment from different manufacturers talk. Above that sit the supervisory systems. A building management system, the BMS, supervises mechanical plant. An electrical power monitoring system, the EPMS, supervises power through meters and monitors. At the top is DCIM, data centre infrastructure management, which tracks capacity, assets and customer reporting. Data flows up. Commands flow down.

Now the finance point, illustrated by the iceberg. Above the waterline is what you can see in a public catalogue. A PLC CPU costs a few hundred dollars. A base rack costs a hundred or two hundred. These are strong, structured, current observations. The ontology rates controls as one of the strongest public price categories.

Below the waterline is the system. The 2021 cost plan carries two point seven six five million pounds for controls, head ends and control-system wiring on a twenty megawatt hall, and that number is the same in every cooling scenario. The 2019 CIBSE and AECOM model carries three hundred and twenty pounds per kW of IT for BMS controls and power supplies to mechanical plant, which is about one point four four million pounds at four-and-a-half megawatts. Those are installed, integrated packages. Software and DCIM package prices are weak in public sources.

The lesson is about scale mismatch. Do not price a controls system by multiplying a catalogue PLC price by a point count. The cost is in design, programming, integration, testing and commissioning. And controls obsolescence is different from physical wear. The ontology says to model it separately. Ask who owns the licences and the configuration, because a buyer who cannot change the controls without the vendor is exposed.`);
  }

  // ---------------- 25 FIBRE AND WHITE SPACE ----------------
  {
    const s = mk("Assurance", "Assurance chain  |  fibre and white space", "Connectivity and rack space are what the customer actually buys");
    const ch = [["Diverse entrances", "Two routes, two entry points  |  L-015", K.slateL, K.slate], ["Meet-me room", "Carrier racks L-001, frames L-002", K.violetL, K.violet], ["Cross-connect", "Frames and demarcation L-014, L-013", K.violetL, K.violet], ["Trunks and raceway", "Trunk L-009, raceway L-011", K.tealL, K.teal], ["At the rack", "Panels L-004, cassettes L-005, L-017, cords L-007", K.amberL, K.amber]];
    ch.forEach((c, i) => {
      const x = 0.5 + i * 2.5;
      B(s, [{ text: c[0], options: { bold: true, fontSize: 12.5, breakLine: true } }, { text: c[1], options: { fontSize: 10 } }], x, 1.55, 2.2, 0.95, { fill: c[2], line: c[3], lw: 1.25, r: 0.07 });
      if (i < 4) L(s, x + 2.22, 2.02, x + 2.48, 2.02, { w: 2, arrow: true, both: true });
    });
    // product ladder
    T(s, "What a colocation customer rents, from small to large", 0.5, 2.85, 7, 0.28, { fontSize: 13, bold: true, color: K.navy });
    const steps = [["Rack", "M-001, M-002", "per rack (QR)"], ["Cage", "M-008, M-009", "per cage"], ["Suite", "private room", "per suite"], ["Hall", "dedicated hall", "per hall, kW"]];
    steps.forEach((st, i) => {
      const w = 1.65, h = 0.9 + i * 0.5, x = 0.5 + i * 1.85, y = 6.0 - h;
      B(s, [{ text: st[0], options: { bold: true, fontSize: 13, breakLine: true } }, { text: st[1], options: { fontSize: 10, breakLine: true } }, { text: st[2], options: { fontSize: 10, color: K.grey } }], x, y, w, h, { fill: K.tealL, line: K.teal, lw: 1.25, r: 0.05, valign: "top", margin: 0.1 });
    });
    note(s, "Every step adds committed kW, power, cooling and connectivity. Billing is usually kW or MW.", 0.5, 6.1, 7.5, 0.3);
    // right
    card(s, "Landlord or tenant?", "The EXCOOL plan excludes IT racks, hot/cold aisle containment, data cabling and servers from the build. Fit-out responsibility changes what capex a buyer inherits.", 8.3, 2.85, 4.53, 1.55, K.violet);
    card(s, "Why connectivity is value", "Carrier density and diverse routes drive cross-connect revenue and customer stickiness. They are hard to replicate.", 8.3, 4.55, 4.53, 1.2, K.teal);
    band(s, 6.4, "CURR", "CURRENT", "Passive fibre parts have strong public prices, e.g. a 24-fibre LC adapter panel at CNY 199 (native currency kept). Installed pathways are the real cost.", 0.58);
    s.addNotes(`This slide is about what the customer actually buys. A data centre sells more than power and cooling. A colocation customer rents space and connectivity.

Along the top is the physical path of a fibre. Carriers enter the building through diverse entrances, two routes at two entry points, so one dug-up duct does not isolate the site. They land in the meet-me room, where carriers and customers interconnect, using carrier racks and optical distribution frames. Cross-connect frames and demarcation cabinets mark the boundary of responsibility. Fibre trunks run through overhead raceways into the white space, and at the rack, patch panels, cassettes and patch cords terminate the cable.

The steps below show the product ladder. A customer might rent a single rack, a locked cage, a private suite or a whole hall. Each step commits more kilowatts, and billing is usually in kilowatts or megawatts. For a lender the commercial unit is committed and drawn power with cooling and connectivity attached.

Two commercial points. First, scope. The 2021 cost plan explicitly excludes IT racks, containment, data cabling and servers from the build. In a colocation model the landlord often provides shell, power, cooling and base connectivity, and the tenant provides racks and servers. Be clear which fit-out capex a buyer inherits. Second, connectivity is hard to replicate. A carrier-dense building with diverse routes earns cross-connect revenue and attracts customers who value latency and choice. That is value that sits outside the pure replacement-cost analysis, and it is a reason buy can beat build.

On evidence, passive fibre components have strong, current public prices. The ontology preserves a Chinese catalogue price for a twenty-four fibre adapter panel in its native currency, not converted. As with controls, a component price is a tiny part of an installed pathway. Do not build a connectivity cost from catalogue parts.`);
  }

  // ---------------- 26 MW LADDER ----------------
  {
    const s = mk("Assurance", "Assurance chain  |  which megawatt", "The same site can have eight different megawatt numbers");
    const steps = [
      ["Utility connection", "contracted MVA or MW", "utility"],
      ["Energised", "live and protection-approved", "utility and engineer"],
      ["Facility load", "IT MW x PUE, includes cooling and losses", "design engineer"],
      ["Designed critical IT", "kW delivered at the racks", "design engineer"],
      ["Redundancy-adjusted", "N-available after N+1 or 2N", "design engineer"],
      ["Commissioned", "integrated test passed under load", "commissioning agent"],
      ["Contracted", "signed customer commitments", "legal and sales"],
      ["Billing", "kW actually drawn or billed", "metering and finance"],
    ];
    steps.forEach((st, i) => {
      const w = 1.45, x = 0.5 + i * 1.55, h = 3.7 - i * 0.37, y = 5.55 - h;
      const col = i < 3 ? K.amber : (i < 5 ? K.teal : K.violet);
      const fill = i < 3 ? K.amberL : (i < 5 ? K.tealL : K.violetL);
      B(s, [{ text: String(i + 1), options: { bold: true, fontSize: 18, color: col, breakLine: true } }, { text: st[0], options: { bold: true, fontSize: 12, breakLine: true } }, { text: st[1], options: { fontSize: 10.5, color: K.ink } }], x, y, w, h, { fill, line: col, lw: 1.5, r: 0.05, valign: "top", margin: 0.1 });
      T(s, st[2], x, 5.62, w, 0.4, { fontSize: 10, color: K.grey, align: "center" });
    });
    note(s, "Schematic, not to scale. The grey line under each bar names who confirms it. Always ask which step a quoted megawatt refers to.", 0.5, 6.25, 8.5, 0.25);
    B(s, [{ text: "Worked example. ", options: { bold: true } }, { text: "20 MW of IT at a PUE of 1.3 draws 26 MW from the grid. Cooling and losses take the other 6 MW. Illustrative arithmetic only." }], 0.5, 6.55, 12.33, 0.42, { fill: K.mist, line: K.line, lw: 0.75, fontSize: 11.5, r: 0.06, align: "left", margin: 0.15 });
    s.addNotes(`This is the slide that stops megawatts being used loosely. A single site can honestly be described with eight different megawatt numbers, and they are all real.

Step one is the utility connection, the contracted capacity. Step two is energised capacity, live and approved. Step three is the facility's electrical load. This includes cooling, losses and everything else. It equals the IT load multiplied by the power usage effectiveness, or PUE. Step four is the designed critical IT capacity, the kilowatts delivered at the rack. Step five is redundancy-adjusted capacity, the N-available amount after reserve modules and paths are taken out. A hall with sixty megawatts of installed UPS modules in 2N might carry only about thirty megawatts of usable load. Step six is commissioned capacity, where an integrated test has passed under load. Step seven is contracted capacity, what customers have signed for. Step eight is billing capacity, what is actually drawn or billed.

The colours group the steps. Amber is mostly electrical supply. Teal is design and test. Violet is commercial. The bars fall to the right to show that capacity is removed or proved at each step. The scale is schematic. Real values do not fall in a perfectly smooth sequence.

The worked example is simple arithmetic. If twenty megawatts of IT run at a PUE of one point three, the facility draws twenty-six megawatts. The extra six megawatts goes to cooling and losses. That is why a grid connection quoted in megawatts and a revenue capacity quoted in megawatts are not the same thing, and the gap between them is a design variable.

For diligence, make it a habit. When a seller or a model uses megawatts, ask which of the eight. When you compare capex per megawatt across assets, check that the denominators match. A cost per grid megawatt and a cost per billing megawatt can differ by a large factor in the same building. Most disagreements about cost per megawatt are really disagreements about which megawatt.`);
  }

  // ---------------- 27 COMMISSIONING ----------------
  {
    const s = mk("Assurance", "Assurance chain  |  commissioning", "Commissioning is the proof that converts installed equipment into capacity");
    const rows = [["Level 1", "Factory witness tests (FAT)", 0, 1.5], ["Level 2", "Delivery and installation checks", 1.3, 1.5], ["Level 3", "Start-up and energisation", 2.6, 1.5], ["Level 4", "Functional tests per system, with load banks", 3.8, 2.3], ["Level 5", "Integrated systems test (IST) under full heat load", 5.7, 2.4], ["Handover", "Training, O&M documents, critical spares", 7.7, 1.8]];
    const gx = 3.8, gw = 9.0, unit = gw / 9.5;
    T(s, "Relative sequence, not to scale", 3.8, 1.45, 5, 0.25, { fontSize: 11, italic: true, color: K.grey });
    rows.forEach((r, i) => {
      const y = 1.8 + i * 0.48;
      T(s, [{ text: r[0] + "  ", options: { bold: true, color: K.navy } }, { text: r[1], options: { color: K.ink } }], 0.5, y + 0.02, 3.2, 0.42, { fontSize: 11, valign: "middle" });
      B(s, "", gx + r[2] * unit, y + 0.05, r[3] * unit, 0.34, { fill: i === 4 ? K.violet : (i === 3 ? K.teal : K.slate), r: 0.04 });
      L(s, 3.75, y + 0.45, 12.83, y + 0.45, { color: K.line, w: 0.5 });
    });
    note(s, "Load banks O-001 and O-002 stand in for the IT load. Heat-load tests prove the cooling.", 3.8, 4.7, 9.0, 0.25);
    // states ladder
    T(s, "Which commercial state is the capacity in?", 0.5, 5.0, 6, 0.28, { fontSize: 13, bold: true, color: K.navy });
    const st = [["Included", "in the price", K.greenL, K.green], ["Housed", "inside a module", K.amberL, K.amber], ["Installed", "fixed and connected", K.slateL, K.slate], ["Commissioned", "tested under load", K.tealL, K.teal], ["Accepted", "customer and lender sign-off", K.violetL, K.violet]];
    st.forEach((t, i) => B(s, [{ text: t[0], options: { bold: true, fontSize: 12, breakLine: true } }, { text: t[1], options: { fontSize: 10 } }], 0.5 + i * 2.5, 5.35, 2.4, 0.7, { shape: "homePlate", fill: t[2], line: t[3], lw: 1.25 }));
    B(s, [{ text: "0.4%", options: { bold: true, fontSize: 26, color: K.red, breakLine: true } }, { text: "of the £100.5m EXCOOL direct-air cost is the itemised Level 1 to 5 test lines (£300,000 mechanical, £126,336 electrical), and it gates the revenue of all of it. Historical, Q2 2021.", options: { fontSize: 11 } }], 0.5, 6.15, 12.33, 0.85, { fill: K.redL, line: K.red, lw: 1, r: 0.06, align: "left", margin: 0.15 });
    s.addNotes(`Commissioning is the single most important concept in this assurance section, because it converts installed equipment into capacity a customer can use and a lender can rely on.

The bars show the usual levels. Level one is factory witness testing. Engineers watch the manufacturer test the equipment before it ships. Level two is delivery and installation checks, confirming it arrived undamaged and was installed to specification. Level three is start-up and energisation. Level four is functional performance testing, system by system. Generators, UPS, chillers and CDUs are each run through their modes, often with load banks, which are devices that consume power and generate heat to simulate the IT load. Level five is the integrated systems test, the IST. Everything runs together under full heat load, and engineers inject failures to prove the redundancy works. They pull a utility feed, trip a generator, fail a chiller. Then comes handover, with training, operation and maintenance documents and critical spares.

Below the Gantt are the five commercial states. Included, housed, installed, commissioned, accepted. Think of them as a ladder. A megawatt is only bankable at the commissioned and accepted rungs. A seller who says the capacity is installed may not have run the integrated test. A model that books capex when equipment is included in a price, or housed in a module, and revenue when it is installed, is mixing rungs.

The red box makes a quiet point from the historical cost plan. The itemised Level one to five testing lines, mechanical and electrical, total about four hundred and twenty-six thousand pounds in the direct-air case. That is roughly point four percent of the one hundred point five million pound scenario cost. It is a tiny cost line that gates the revenue of the whole facility. Treat commissioning as a risk item. The ontology also carries load banks and critical spares, branch O, as maintenance and commissioning assets.

For diligence, ask for the integrated systems test report, the open-defects list, whether seasonal tests were done, and whether the test covered the final configuration or an earlier phase.`);
  }

  // ---------------- 28 PROCUREMENT FLOW ----------------
  {
    const s = mk("Evidence", "Evidence  |  how equipment is bought", "Every price source is born at a different stage of procurement");
    const st = ["Design basis and specification", "RFQ to OEMs, budget quote", "Tender return, QS cost plan", "Slot reservation and deposit", "Award or purchase order", "Factory test and delivery", "Install, test, commission", "Final account"];
    st.forEach((t, i) => {
      const x = 0.5 + i * 1.55;
      B(s, t, x, 1.6, 1.62, 0.95, { shape: "homePlate", fill: i < 3 ? K.slateL : (i < 5 ? K.amberL : K.tealL), line: i < 3 ? K.slate : (i < 5 ? K.amber : K.teal), lw: 1.25, fontSize: 10.5, bold: true, margin: 0.08 });
    });
    // evidence markers
    const marks = [["CA3", "OEM or distributor price", 1, K.slate], ["CA2", "Tender return or QS cost plan", 2, K.amber], ["CA1", "Executed award or contract", 4, K.green], ["CA1", "Final account, audited actual", 7, K.green]];
    marks.forEach((m) => {
      const x = 0.5 + m[2] * 1.55 + 0.35;
      L(s, x + 0.35, 2.55, x + 0.35, 3.05, { w: 1.5, color: m[3] });
      B(s, [{ text: m[0], options: { bold: true, fontSize: 13, color: K.white, breakLine: true } }, { text: m[1], options: { fontSize: 10, color: K.white } }], x - 0.25, 3.05, 1.4, 0.9, { fill: m[3], r: 0.06, margin: 0.06 });
    });
    B(s, "Lead time bites here: slot, factory, shipping", 6.2, 4.15, 3.6, 0.38, { fill: K.redL, line: K.red, fontSize: 11, bold: true, r: 0.05 });
    L(s, 7.1, 2.55, 7.1, 4.15, { w: 1, dash: "dash", color: K.red });
    // Guildhall bars
    T(s, "Why award is not outturn: one real chiller project", 0.5, 4.3, 5.4, 0.28, { fontSize: 13, bold: true, color: K.navy });
    const scale = 5.0 / 4.6;
    B(s, "Original award  £3.55m", 0.5, 4.75, 3.548 * scale, 0.5, { fill: K.green, color: K.white, bold: true, fontSize: 11.5, align: "left", margin: 0.12 });
    B(s, "Later value, same project  £4.52m  (+27%)", 0.5, 5.4, 4.522 * scale, 0.5, { fill: K.red, color: K.white, bold: true, fontSize: 11.5, align: "left", margin: 0.12 });
    note(s, "Guildhall chiller replacement. Count it once.", 0.5, 6.0, 5.6, 0.3);
    card(s, "Read the stage, then the price", "A quote is an intention. A tender is a proposal. An award is a commitment. A final account is what happened. They answer different questions, and each can still be a broad package.", 6.2, 4.7, 6.63, 1.45, K.navy, K.mist);
    note(s, "The ontology notes a later change notice on the same project must not be treated as a second observation.", 6.2, 6.25, 6.63, 0.5);
    s.addNotes(`To judge a price you need to know where in the buying process it came from. Equipment is bought in stages, and every stage creates a different kind of evidence.

Start on the left. A design basis and specification define what is needed. The buyer sends a request for quotation to manufacturers and gets budget quotes. Those are OEM prices. In the ontology's evidence taxonomy this is commercial authority level three, usually equipment only and not installed. Next, a tender return or a quantity surveyor's cost plan gives a project cost. That is level two, strong project evidence that may differ from an executed price. Then there is often a slot reservation and a deposit, because manufacturing capacity for transformers, generators and large UPS is scarce. This is where lead time bites. After that comes the award or purchase order. An executed award is level one, the strongest commercial evidence, and it may still be a broad package. Then factory test, delivery, installation, commissioning, and finally the final account, the audited actual cost, also level one.

The two bars show why you must not mix stages. A real chiller replacement project was awarded at about three point five five million pounds. The same project later carried a value of about four point five two million, an increase of twenty-seven percent. Both numbers are real. The first was the commitment, the second was closer to what happened. The ontology warns that a change notice on the same project is not an independent observation, so do not count both as two data points.

For diligence, you should always ask three things about any price. Which stage produced it? Which scope does it cover? And has the number moved since? If a seller shows you a budget quote, you are looking at a stage-two number. If they show you a final account, you are looking at stage eight. And be aware of the lead-time zone. A buyer or a developer planning a new build is exposed between award and delivery, and a buyer of an operating asset is protected from it, which is part of the buy-versus-build argument later.`);
  }
};
