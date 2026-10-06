const { K, T, B, shape, L, P, ellipse, head, badge, STATE, legend, hub, band, note, card, dot, chain } = require("./lib");

module.exports = function (pres, mk) {
  // ---------------- 1 TITLE ----------------
  {
    const s = pres.addSlide({ masterName: "DARK", sectionTitle: "0 Orientation" });
    // circuit motif: three chains
    const rows = [[K.amber, 2.2], [K.teal, 3.3], [K.violet, 4.4]];
    rows.forEach(([c, y], r) => {
      L(s, 7.4, y, 12.6, y, { color: c, w: 2.5 });
      for (let i = 0; i < 6; i++) ellipse(s, 7.4 + i * 1.05 - 0.09, y - 0.09, 0.18, 0.18, { fill: c });
    });
    T(s, "POWER IN", 7.4, 1.8, 3, 0.3, { fontSize: 11, bold: true, color: K.amber, charSpacing: 3 });
    T(s, "HEAT OUT", 7.4, 2.9, 3, 0.3, { fontSize: 11, bold: true, color: "3FC3D3", charSpacing: 3 });
    T(s, "ASSURANCE AROUND", 7.4, 4.0, 4, 0.3, { fontSize: 11, bold: true, color: "A99BE0", charSpacing: 3 });
    ellipse(s, 12.55, 2.0, 0.5, 2.6, { fill: K.navy, line: "3A5F85" });
    T(s, "IT", 12.55, 3.1, 0.5, 0.4, { fontSize: 14, bold: true, color: K.white, align: "center" });
    T(s, "Data Centres,\nRead as Financial Assets", 0.7, 1.7, 6.4, 2.2, { fontFace: "Cambria", fontSize: 38, bold: true, color: K.white });
    T(s, "A front-office masterclass: physical chains, commercial packages, price evidence and diligence", 0.7, 4.15, 6.0, 1.0, { fontSize: 17, color: "C9D8E8" });
    T(s, "Infrastructure M&A  |  Project finance  |  Credit  |  Origination", 0.7, 5.5, 6.4, 0.3, { fontSize: 12, color: "9FB3C8" });
    T(s, "Evidence base: MASTER_DC_COST_ONTOLOGY v0.1.1 (frozen 2026-10-06)  |  418 equipment lines  |  16 branches (A to P)", 0.7, 6.55, 11.5, 0.3, { fontSize: 11, color: "7F95AB" });
    s.addNotes(`Welcome. This masterclass has one job. It turns a data centre from a black box with a dollars-per-megawatt number on the side into a physical system you can follow, price sensibly and challenge in diligence.

You are not here to become an electrical or mechanical engineer. You are here to build enough physical and commercial fluency to do five things. Follow how power gets from the grid to the rack. Follow how heat gets from the chip to the atmosphere. Understand what sits inside each major system. Understand how that equipment is bought and what price evidence is genuinely valid for it. And connect all of that to replacement cost, bankability and buy-versus-build.

The graphic on the right is the whole course in one picture. Power flows in along the amber line. Heat flows out along the teal line. The violet line is everything that makes the asset safe, observable and provable: fire, security, controls, fibre and commissioning. Every slide you are about to see belongs to one of those three lines.

A word on evidence. Everything in this deck is anchored to a frozen equipment ontology of 418 lines across 16 branches. That workbook tells us what exists physically, how it is packaged, and, importantly, where public price evidence is strong and where it is still an open gap. Where the deck shows a number, the number is labelled as current or historical, and as a package or a component. Where no defensible current price exists, the deck says so. That honesty is a feature. A banker who knows which numbers are weak is more useful than one who quotes a precise number from the wrong source.

Plan roughly two to three hours if you read the notes properly. Move on when you are ready.`);
  }

  // ---------------- 2 THREE CHAINS ----------------
  {
    const s = mk("Orientation", "A data centre is three chains converging on one load", "Power flows in, heat flows out, and assurance wraps both");
    const lanes = [
      { y: 1.6, c: K.amber, l: K.amberL, name: "POWER", sub: "electrical chain", nodes: ["Grid connection", "HV/MV + transformer", "Generator + UPS", "LV board + busway", "Rack PDU"], br: ["B", "B", "C  D", "E", "E  M"], dir: 1 },
      { y: 3.35, c: K.teal, l: K.tealL, name: "THERMAL", sub: "heat chain (runs right to left)", nodes: ["Atmosphere", "Chillers / heat rejection", "Water or coolant loops", "Capture: air or liquid", "Server heat"], br: ["F", "F", "F  H", "G  H", "IT load"], dir: -1 },
      { y: 5.1, c: K.violet, l: K.violetL, name: "ASSURANCE", sub: "proof and protection", nodes: ["Fire / life safety", "Security", "Controls / metering", "Fibre / white space", "Commissioning"], br: ["I", "J", "K", "L  M", "O"], dir: 0 },
    ];
    lanes.forEach((ln) => {
      B(s, [{ text: ln.name, options: { bold: true, fontSize: 14, color: K.white, breakLine: true } }, { text: ln.sub, options: { fontSize: 10.5, color: K.white } }], 0.5, ln.y, 1.75, 1.3, { fill: ln.c, r: 0.08, color: K.white });
      for (let i = 0; i < 5; i++) {
        const x = 2.55 + i * 1.78;
        B(s, ln.nodes[i], x, ln.y + 0.05, 1.5, 0.8, { fill: ln.l, line: ln.c, lw: 1.25, r: 0.07, fontSize: 12, bold: true });
        T(s, "Branch " + ln.br[i], x, ln.y + 0.92, 1.5, 0.25, { fontSize: 10.5, color: K.grey, align: "center" });
        if (i < 4) {
          if (ln.dir === 1) L(s, x + 1.52, ln.y + 0.45, x + 1.76, ln.y + 0.45, { color: ln.c, w: 2.25, arrow: true });
          else if (ln.dir === -1) L(s, x + 1.76, ln.y + 0.45, x + 1.52, ln.y + 0.45, { color: ln.c, w: 2.25, arrow: true });
          else L(s, x + 1.52, ln.y + 0.45, x + 1.76, ln.y + 0.45, { color: ln.c, w: 1.5, dash: "dash" });
        }
      }
    });
    // IT load
    B(s, "IT LOAD\nservers, GPUs, network", 11.75, 1.75, 1.1, 4.6, { fill: K.navy, color: K.white, bold: true, fontSize: 12, r: 0.1, line: K.ink });
    L(s, 11.5, 2.05, 11.75, 2.05, { color: K.amber, w: 2.5, arrow: true });
    L(s, 11.75, 3.8, 11.5, 3.8, { color: K.teal, w: 2.5, arrow: true });
    L(s, 11.5, 5.55, 11.75, 5.55, { color: K.violet, w: 1.5, dash: "dash", both: true });
    T(s, "1 MW of IT load means about 1 MW drawn electrically and about 1 MW of heat to reject, all watched by the assurance chain.", 0.5, 6.5, 11.0, 0.5, { fontSize: 12.5, bold: true, color: K.navy });
    s.addNotes(`Start with the most useful mental model in the whole course. A data centre is three chains that all meet at one place, the IT load.

The amber chain is electrical. Grid power comes in, is protected and stepped down, is backed up by generators and by UPS batteries, and is distributed through low voltage boards and busway to the rack. Read it left to right.

The teal chain is thermal. Nearly every watt the servers consume turns into heat. That heat has to be captured at the chip or the rack, moved by air or liquid through loops, and rejected to the atmosphere. Notice the arrows run right to left. Power travels towards the IT load and heat travels away from it. Keep that direction in your head, because it explains why cooling plant is sized to what the IT load draws, and why a power constraint and a cooling constraint can both cap the same megawatt.

The violet chain is assurance. Fire protection, security, controls and metering, fibre connectivity, and commissioning. Its cargo is confidence. It is what lets a lender or a customer believe the first two chains will keep working.

The small letters under each box are the branch letters in the ontology workbook, A to P. B is grid and HV/MV, C is standby power, D is UPS and stored energy, E is LV distribution, F is heat rejection, G is white-space air cooling, H is liquid cooling, I fire, J security, K controls, L network, M white space, and O is maintenance and commissioning. You will see those letters again.

The bottom line is the finance point. A single dollars-per-megawatt number compresses all three chains. When it is wrong, you cannot tell which chain is wrong. Learning the chains lets you decompose it.`);
  }

  // ---------------- 3 FIVE MOVES / ROW ANATOMY ----------------
  {
    const s = mk("Orientation", "Any equipment row can be read with five moves", "Read the ontology row, then ask the five questions it answers");
    // spreadsheet-like row
    const cols = [
      ["Ontology ID", "D-010", 1.3], ["Equipment", "VRLA battery string", 2.3], ["Branch / system", "D  UPS and stored energy", 2.4],
      ["Quantity-driver code", "QU", 1.6], ["Evidence code", "P", 1.3], ["Lifecycle", "Up to 100% of string; interval UNKNOWN", 3.4],
    ];
    let x = 0.5;
    const mid = [];
    cols.forEach(([h, v, w]) => {
      B(s, h, x, 1.55, w, 0.32, { fill: K.navy, color: K.white, fontSize: 10.5, bold: true });
      B(s, v, x, 1.87, w, 0.62, { fill: K.mist, line: K.line, fontSize: 12.5, bold: true });
      mid.push(x + w / 2); x += w;
    });
    T(s, "Real row from the frozen workbook. QU is defined there as protected kW + runtime + redundancy.", 0.5, 2.55, 9, 0.25, { fontSize: 10.5, color: K.grey, italic: true });
    const moves = [
      ["1", "Physical job", "What does it do, and what physical thing happens if it is missing?", "Stores energy so the load rides through a grid failure until generators start.", K.amber, 5],
      ["2", "Quantity driver", "What sets how many or how big?", "Protected kW, minutes of runtime and redundancy. Not rack count.", K.teal, 3],
      ["3", "Commercial package", "Is it a line, or a child of something bigger?", "May sit inside the UPS price. Conditional, never assumed.", K.violet, 1],
      ["4", "Valid evidence", "Which source class can price it, and for what date and scope?", "OEM quote, tender or award. A retail UPS price is the wrong scale.", K.green, 4],
      ["5", "Risk created", "What can go wrong commercially?", "Replacement cycle, runtime shortfall, fire-code and warranty exposure.", K.red, 5],
    ];
    moves.forEach((m, i) => {
      const bx = 0.5 + i * 2.5, by = 3.05;
      shape(s, "roundRect", bx, by, 2.32, 2.55, { fill: K.white, line: m[4], lw: 1.5, rectRadius: 0.08 });
      dot(s, m[0], bx + 0.12, by + 0.12, 0.38, m[4]);
      T(s, m[1], bx + 0.6, by + 0.14, 1.65, 0.34, { fontSize: 14, bold: true, color: m[4] });
      T(s, m[2], bx + 0.15, by + 0.62, 2.05, 0.8, { fontSize: 11.5, color: K.grey });
      T(s, m[3], bx + 0.15, by + 1.45, 2.05, 1.0, { fontSize: 12, bold: true });
    });
    // commercial states
    T(s, "Four commercial states that are routinely confused:", 0.5, 5.8, 5, 0.28, { fontSize: 12, bold: true, color: K.navy });
    const st = [["Included", "in the quoted price"], ["Housed", "physically inside a module, price may sit elsewhere"], ["Installed", "fixed and connected on site"], ["Commissioned", "tested under load and accepted"]];
    st.forEach((t, i) => {
      const bx = 0.5 + i * 3.1;
      B(s, [{ text: t[0], options: { bold: true, fontSize: 12.5, breakLine: true } }, { text: t[1], options: { fontSize: 10.5 } }], bx, 6.12, 2.95, 0.7, { fill: [K.greenL, K.amberL, K.slateL, K.violetL][i], line: [K.green, K.amber, K.slate, K.violet][i], r: 0.07, shape: "homePlate" });
    });
    s.addNotes(`This is the operating method for the whole deck. Take any row in the ontology workbook and ask five questions.

The row on screen is a real one. D-010 is a valve-regulated lead-acid battery string, in branch D, UPS and stored energy. Its quantity-driver code is QU, which the workbook defines as protected kilowatts plus runtime plus redundancy. Its evidence code is P, which only means a primary product family was found when the row was created. It does not mean a current price exists. Its lifecycle entry says up to one hundred percent of the string may need replacement, and the interval is unknown. The workbook deliberately refuses to insert a generic three-to-five year assumption without a source.

Move one is the physical job. A battery string stores energy so the load rides through a grid failure until the generators start.

Move two is the quantity driver. It is protected load times minutes of runtime, times the redundancy design. Rack count and floor area do not drive it.

Move three is the commercial package. The battery may be priced inside the UPS package, or as a separate line. The ontology has frozen rules that make that conditional on vendor scope. You will see that on the UPS package slide.

Move four is valid evidence. Which source class can price this, for which date and scope? An OEM quote, a tender or an executed award. A retail price for a ten kilovolt-amp rack UPS is the wrong scale.

Move five is risk. For batteries that means replacement cycles, runtime shortfall against what customers were promised, and fire and warranty exposure.

Along the bottom are four commercial states people routinely confuse. Included means in the quoted price. Housed means physically inside a module while the price may sit elsewhere. Installed means fixed and connected on site. Commissioned means tested under load and accepted. A lot of double-counting and a lot of overstated capacity come from sliding between these four words. We will keep returning to them.`);
  }

  // ---------------- 4 TERRITORY MAP (chart) ----------------
  {
    const s = mk("Orientation", "The ontology is large and public price evidence is thin", "Of 418 equipment lines, only 10 carry a native public price observation");
    const labels = ["A Site / external", "B Grid / HV / MV", "C Standby power", "D UPS / stored energy", "E LV distribution", "F Heat rejection", "G White-space air", "H Liquid cooling", "I Fire / life safety", "J Security", "K Controls / BMS", "L Network / carrier", "M White space", "N Plumbing / MEP", "O Maint. / commissioning", "P Power interfaces"];
    const lines = [37, 35, 32, 25, 30, 31, 23, 35, 28, 25, 28, 20, 20, 19, 23, 7];
    const priced = [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 2, 3, 1, 0, 0, 0];
    s.addChart(pres.charts.BAR, [
      { name: "Equipment lines in ontology", labels, values: lines },
      { name: "Lines with a native public price observation", labels, values: priced },
    ], {
      x: 0.5, y: 1.45, w: 7.4, h: 5.5, barDir: "bar", barGapWidthPct: 45,
      chartColors: [K.slate, K.amber], showLegend: true, legendPos: "b", legendFontSize: 11, legendColor: "44546A", legendFontFace: "+mn-lt",
      catAxisOrientation: "maxMin", catAxisLabelFontSize: 10, catAxisLabelColor: "44546A", catAxisLabelFontFace: "+mn-lt",
      valAxisLabelFontSize: 11, valAxisLabelColor: "44546A", valAxisLabelFontFace: "+mn-lt", valGridLine: { color: "E1E7ED", size: 0.5 }, catGridLine: { style: "none" },
      catAxisLabelFrequency: 1, valAxisHidden: true, showValue: true, dataLabelFontSize: 10, dataLabelColor: "44546A", dataLabelFontFace: "+mn-lt", dataLabelPosition: "outEnd", valAxisMaxVal: 45,
    });
    card(s, "Where public prices are strongest", "Small and packaged UPS, commodity LV breakers, PLC and control hardware, optical termination, racks, selected test kit.", 8.3, 1.55, 4.5, 1.45, K.green);
    card(s, "Where they are weakest", "HV switchgear, large transformers, bespoke MV/LV line-ups, hyperscale UPS, central chillers and cooling towers, CRAHs and fan walls, CDUs.", 8.3, 3.15, 4.5, 1.55, K.red);
    card(s, "What follows", "Visibility falls as equipment becomes project-engineered. The biggest-ticket systems are the ones with the thinnest current public evidence.", 8.3, 4.85, 4.5, 1.3, K.navy, K.mist);
    badge(s, "GAP", 8.3, 6.35, 1.6);
    T(s, "Gaps stay open.", 10.0, 6.35, 2.8, 0.26, { fontSize: 11, color: K.grey, valign: "middle" });
    s.addNotes(`Before we go into the systems, look at the territory we are mapping. The frozen ontology has four hundred and eighteen equipment lines across sixteen branches. The slate bars are the number of lines in each branch.

The amber bars are the number of lines in each branch that carry at least one native public price observation. Ten lines out of four hundred and eighteen. Fifty-nine lines have primary OEM product evidence, which tells you what the equipment is and says nothing about cost.

Look at where the amber sits. Controls, network, small UPS, a commodity breaker, a rack. These are catalogue products with posted prices. Now look at where the amber is missing. Grid and HV and MV equipment, heat rejection, white-space air cooling, liquid cooling. Those are the largest-ticket, most engineered systems, and they are sold by quotation.

This gap reflects the structure of the market. A better scrape would not remove it. The more a product is configured to a site, a rating and a voltage, the less likely anyone posts a price. For a banker the consequence is direct. The systems that dominate capex are precisely the systems for which you will rely on package evidence, tenders, executed awards and historical cost plans, and you will have to be disciplined about their scope and date.

The ontology names this gap explicitly and keeps it open. Current-price gaps remain real for transformers, HV and MV switchgear, large UPS and batteries, LV equipment and busway, central cooling and liquid cooling. This deck will never fill those gaps with an invented number. When you see the red gap badge later on, that is what it is telling you.`);
  }
};
