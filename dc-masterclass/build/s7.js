const { ecard, K, T, B, shape, L, P, ellipse, head, badge, STATE, legend, hub, band, note, card, dot, chain } = require("./lib");

module.exports = function (pres, mk) {
  // ---------------- 29 EVIDENCE HIERARCHY ----------------
  {
    const s = mk("Evidence", "Evidence  |  hierarchy and admissibility", "Five grades of commercial evidence, and each one has a job");
    const rows = [
      ["CA1", "Executed award, contract, paid schedule or audited actual", "Strongest. Still may be a broad package.", "Cardonald generator award £187,377 (with wiring and switchgear). Southern Water UPS lot £4.8m. Guildhall chiller award.", K.green, K.greenL],
      ["CA2", "Tender return, procurement schedule or formal QS cost plan", "Strong project cost. Not an executed price.", "EXCOOL cost plan (Q2 2021). CIBSE/AECOM cost model (2019). Both historical.", K.teal, K.tealL],
      ["CA3", "OEM, list or distributor public price", "Usually equipment only, not installed.", "APC 10 kVA UPS $12,022 reseller. PLC and breaker catalogue prices.", K.slate, K.slateL],
      ["CA4", "Marketplace ask, rental, surplus or case study", "Calibration only.", "Surplus Record 2 MW generator listings.", K.amber, K.amberL],
      ["CA5", "Generic estimate or analyst assumption", "Engineering allowance only.", "Any number without a source scope.", K.red, K.redL],
    ];
    rows.forEach((r, i) => {
      const y = 1.5 + i * 0.93;
      B(s, r[0], 0.5, y, 0.8, 0.8, { fill: r[4], color: K.white, bold: true, fontSize: 16, r: 0.06 });
      shape(s, "roundRect", 1.4, y, 11.43, 0.8, { fill: r[5], line: r[4], lw: 1, rectRadius: 0.06 });
      T(s, r[1], 1.55, y + 0.06, 4.3, 0.5, { fontSize: 12, bold: true });
      T(s, r[2], 1.55, y + 0.5, 4.3, 0.28, { fontSize: 10.5, color: K.grey });
      T(s, r[3], 6.1, y + 0.08, 6.6, 0.68, { fontSize: 11, valign: "middle" });
    });
    // outside ladder
    shape(s, "roundRect", 0.5, 6.2, 12.33, 0.75, { fill: K.white, line: K.slate, lw: 1.25, dash: "dash", rectRadius: 0.06 });
    badge(s, "REC", 0.65, 6.28, 2.0);
    T(s, "Aggregate benchmarks (Turner & Townsend, RLB, Arcadis, any $/W or £/MW) sit outside the ladder. They reconcile a total, and never price a component.", 0.65, 6.55, 12.0, 0.35, { fontSize: 11.5 });
    s.addNotes(`The ontology's evidence taxonomy grades commercial evidence in five levels. Think of it as a ladder where each rung has a job. It also tags evidence along other axes: technical authority, admissibility, whether it is current or historical, and whether it can be normalised. We focus on the commercial ladder because it answers 'how much should I trust this price?'.

The top rung, level one, is an executed award, contract, paid schedule or audited actual. It is the strongest because money changed hands. Note the warning on the slide: it may still be a broad package. The Cardonald generator award is a real executed price for a generator with wiring and switchgear, and it does not state the rating, so you cannot turn it into a pounds-per-kW rate. The Southern Water framework lot of four point eight million pounds for UPS supply and install across a region tells you scale and offers no unit rates.

Level two is a tender return, a procurement schedule or a formal quantity surveyor's cost plan. Two of the main sources in this course sit here. The EXCOOL cost plan from the second quarter of 2021 and the CIBSE and AECOM cost model from 2019. I class both as level two on my reading of the taxonomy, since each is a formal cost plan or engineering cost model, so treat that classification as mine. The ontology's own label for both is admitted historical. They are strong project-cost evidence for package shape, historical anchors and scaling relationships. Treat both as historical.

Level three is an OEM, list or distributor public price. It is usually equipment-only. The small rack UPS price and the PLC catalogue prices are here. Level four is a marketplace ask, a rental, surplus or a case study. The generator listings fall here. It is calibration only. Level five is a generic estimate or analyst assumption. It is an allowance.

The dashed box at the bottom matters. Aggregate benchmarks such as the Turner and Townsend cost index, the RLB trends reports and the Arcadis cost reports, plus any dollars per watt figure, are valuable for sanity-checking a total build cost. The ontology limits them to reconciliation. Use them to ask whether a bottom-up sum is plausible, and never to generate a transformer price.

A final practical rule. Any number in your model should carry its rung, its date and its scope. If you cannot write those three things next to it, it is not ready to be relied on.`);
  }

  // ---------------- 30 EQUIPMENT VS INSTALLED ----------------
  {
    const s = mk("Evidence", "Evidence  |  equipment price versus installed cost", "Main plant is only about a third of the installed build");
    const cats = ["Direct air", "Zero (indirect air)", "Fan walls + chillers", "Hybrid + chillers (colo)", "Hybrid (hyperscale)"];
    const ser = [
      ["Main plant supply (client-procured)", [34.579, 38.775, 46.025, 43.658, 38.381], K.amber],
      ["Civil, structural, architectural", [20.495, 20.495, 23.917, 24.017, 24.017], K.slate],
      ["Mechanical installation", [6.029, 6.075, 12.533, 12.697, 12.022], K.teal],
      ["Electrical installation", [18.122, 18.561, 19.647, 19.900, 19.375], K.violet],
      ["Support / admin (scope flagged)", [7.5, 7.5, 7.5, 7.5, 7.5], "A9B4C0"],
      ["GC preliminaries and OH&P", [13.819, 13.948, 16.853, 16.990, 16.672], K.navy],
    ];
    s.addChart(pres.charts.BAR, ser.map((x) => ({ name: x[0], labels: cats, values: x[1] })), {
      x: 0.5, y: 1.45, w: 8.0, h: 5.05, barDir: "col", barGrouping: "stacked", barGapWidthPct: 45,
      chartColors: ser.map((x) => x[2]), showLegend: true, legendPos: "b", legendFontSize: 10, legendColor: "44546A", legendFontFace: "+mn-lt",
      catAxisLabelFontSize: 10.5, catAxisLabelColor: "44546A", catAxisLabelFontFace: "+mn-lt", valAxisLabelFontSize: 11, valAxisLabelColor: "44546A", valAxisLabelFontFace: "+mn-lt",
      valGridLine: { color: "E1E7ED", size: 0.5 }, catGridLine: { style: "none" }, showValue: true, dataLabelFontSize: 10, dataLabelColor: "FFFFFF", dataLabelFontFace: "+mn-lt", dataLabelPosition: "ctr", dataLabelFormatCode: "0.0",
      valAxisMaxVal: 140, valAxisMajorUnit: 20, showValAxisTitle: true, valAxisTitle: "GBP million, Q2 2021, 20 MW", valAxisTitleFontSize: 11, valAxisTitleColor: "44546A",
    });
    badge(s, "HIST", 0.5, 6.62, 2.3, "HISTORICAL Q2 2021, LONDON");
    T(s, "EXCOOL cost plan | 20 MW | day-1 build | totals £100.5m to £126.5m", 2.95, 6.62, 5.6, 0.26, { fontSize: 10.5, color: K.grey, valign: "middle" });
    const px = 8.8, pw = 4.03;
    card(s, "32% to 37%", "Main plant supply as a share of each scenario total. The rest is civil, installation, support and general contractor cost.", px, 1.45, pw, 1.3, K.amber);
    card(s, "Up to £25.9m", "Spread between the cheapest and dearest cooling architecture, about 26% of the lowest case, with the same electrical plant.", px, 2.9, pw, 1.3, K.teal);
    card(s, "£5.0m to £6.3m per MW", "Implied by the plan. It reconciles a total. It does not price a component.", px, 4.35, pw, 1.1, K.slate);
    B(s, [{ text: "Excluded: ", options: { bold: true } }, { text: "land, off-site utilities, IT fit-out, fees, finance, VAT and inflation. The £7.5m support line conflicts with the plan's own exclusion note, so it stays flagged." }], px, 5.6, pw, 1.0, { fill: K.redL, line: K.red, lw: 1, fontSize: 10.5, r: 0.06, align: "left", margin: 0.12, valign: "top" });
    s.addNotes(`This chart is the clearest picture in the course of the gap between an equipment price and an installed cost. It comes from the 2021 EXCOOL cost plan for a twenty-megawatt data centre in London, priced under five different cooling designs. Everything is in millions of pounds in second-quarter 2021 money.

The amber block at the bottom of each column is main plant supply, meaning transformers, switchgear, UPS and batteries, generators, chillers and the like, bought directly by the client and supplied to the contractor. Look at its size relative to the total. It is between thirty-two and thirty-seven percent in every scenario. Two-thirds of the cost is something else. Civil, structural and architectural work, mechanical and electrical installation, support and administration space, and the general contractor's preliminaries and overheads and profit.

That is the practical meaning of the difference between an equipment price and an installed cost. Take a quote for a generator or a UPS and you have bought the amber block. To get the data centre you add everything else. The cost plan itself lists fifty-two numbered lines, including installation, cabling, containment, builder's work, testing and commissioning. The ontology you have been using describes the equipment. The installation layer is deferred to a separate construction and installation ontology, which we call DR03 later in the course.

Second observation. The cooling architecture moves the total by up to about twenty-six million pounds, or twenty-six percent of the lowest case. The fan-wall and chiller case costs more than the direct-air case, in both plant and installation, since it needs chilled-water pipework and chillers. Architecture is a major capex lever, which is why the cooling slides came before this one.

Third observation. The implied cost per megawatt in this plan ranges from about five to six point three million pounds. That is a useful benchmark to reconcile a total against. The ontology says plainly that it must not be used to price components.

Finally, the box in the bottom right is a reminder of scope. The plan excludes land, off-site utilities, IT fit-out, fees, finance, VAT and construction inflation. It also has an unresolved internal inconsistency. Its notes say office and admin areas are excluded, and the summary includes a seven and a half million pound line for them. The ontology preserves that as an open quality flag. This is a historical anchor with known limits, .`);
  }

  // ---------------- 31 CURRENTISATION ----------------
  {
    const s = mk("Evidence", "Evidence  |  historical anchors and currentisation", "A historical anchor is useful for shape, and a price only after explicit steps");
    // timeline
    const ax = 1.0, ay = 2.25, per = 1.4;
    const xOf = (yr) => ax + (yr - 2019) * per;
    L(s, ax, ay, ax + 8 * per, ay, { color: K.ink, w: 2 });
    for (let y = 2019; y <= 2027; y++) { L(s, xOf(y), ay - 0.07, xOf(y), ay + 0.07, { w: 1.25 }); T(s, String(y), xOf(y) - 0.3, ay + 0.1, 0.6, 0.22, { fontSize: 10, color: K.grey, align: "center" }); }
    const mark = (yr, label, sub, col, up) => {
      ellipse(s, xOf(yr) - 0.1, ay - 0.1, 0.2, 0.2, { fill: col });
      T(s, [{ text: label, options: { bold: true, color: col, breakLine: true } }, { text: sub, options: { color: K.grey, fontSize: 10 } }], xOf(yr) - 1.0, up ? ay - 0.85 : ay + 0.4, 2.0, 0.6, { fontSize: 11.5, align: "center" });
    };
    mark(2019.0, "CIBSE/AECOM", "2019 cost model", K.amber, true);
    mark(2021.4, "EXCOOL", "Q2 2021 cost plan", K.amber, true);
    mark(2026.76, "Model date", "2026-10-06", K.green, true);
    L(s, xOf(2021.4), ay + 0.62, xOf(2026.76), ay + 0.62, { w: 2, color: K.red, arrow: true });
    T(s, "about 5.4 years old, no escalation applied", xOf(2021.4) + 0.3, ay + 0.66, 4.6, 0.25, { fontSize: 11, bold: true, color: K.red });
    // steps
    T(s, "Five steps between an anchor and a usable estimate", 0.5, 3.45, 8, 0.28, { fontSize: 13, bold: true, color: K.navy });
    const st = [["1  Scope", "What is in and out? Supply, install, controls, spares"], ["2  Units", "kWth, kW IT, kVA, A: align the driver"], ["3  Date", "Explicit index input. The workbook leaves it blank"], ["4  Geography", "Region, currency, labour market"], ["5  Reconcile", "Against current awards, quotes and benchmarks"]];
    st.forEach((t, i) => {
      B(s, [{ text: t[0], options: { bold: true, fontSize: 12.5, breakLine: true } }, { text: t[1], options: { fontSize: 10.5 } }], 0.5 + i * 2.5, 3.85, 2.4, 1.0, { shape: "homePlate", fill: i === 2 ? K.amberL : K.slateL, line: i === 2 ? K.amber : K.slate, lw: 1.25, align: "left", margin: 0.12 });
    });
    B(s, [{ text: "Output: ", options: { bold: true } }, { text: "a currentised estimate, labelled as an estimate. Never relabelled as a price, and never a CA1 or CA3 observation." }], 0.5, 5.0, 12.33, 0.45, { fill: K.violetL, line: K.violet, lw: 1, r: 0.06, fontSize: 11.5, align: "left", margin: 0.15 });
    card(s, "The arithmetic of an explicit index", "Currentised = anchor x (1 + index change) x scope adjustment x geography factor. Each 10% of escalation moves the £30/kVA transformer anchor by £3/kVA. That is arithmetic only.", 0.5, 5.6, 6.0, 1.35, K.amber);
    card(s, "What survives age", "Ratios inside one cost plan, such as generator rates of £306 to £319 per kW across 2,000 to 3,000 kW, package shape and scope boundaries.", 6.83, 5.6, 6.0, 1.35, K.teal);
    s.addNotes(`This slide is the discipline that keeps you from the most common historical-data mistake. Using an old price as if it were today's.

The timeline shows two historical anchors. The 2019 CIBSE and AECOM cost model and the second-quarter 2021 EXCOOL cost plan. The model date is early October 2026. The ontology states the EXCOOL plan is about five point four years old, and records that no automatic escalation from 2021 to 2026 has been applied. The escalation factors are left as explicit inputs, deliberately blank. The CIBSE model is older still.

The workbook calls these anchors admitted historical. That label has a precise meaning. They are valid evidence in their native scope, and they are never a current price without an explicit currentisation step.

The five steps show that currentisation is more than multiplying by an index. First, align scope. A supply-only cost plan line and an installed package are different things. Second, align units. Kilowatts thermal, kilowatts of IT, kVA and amps are different drivers. Third, the date. Choose an index, as an explicit and visible input, with a rationale. Fourth, geography. London in 2021 differs from a mid-sized European market in 2026. Fifth, reconcile the result against current evidence, such as recent awards, fresh quotes and benchmark totals, and see whether it holds up.

The output must carry its status. A currentised estimate is an engineering allowance. It should be labelled as one. It must never be re-entered in the model as if it were an observed price, because that would launder a historical number into a current one.

The two cards give the arithmetic and the good news. The formula has no hidden pieces. If you assume ten percent escalation, the thirty-pounds-per-kVA transformer anchor moves by three pounds. That arithmetic shows how sensitive the answer is to the index you choose, and forecasts nothing about transformer prices. And the good news is that some things survive age well. Ratios inside one cost plan, such as the generator rate being broadly flat at three hundred and six to three hundred and nineteen pounds per kW across three sizes, tell you about scaling and shape even when the level is out of date.`);
  }

  // ---------------- 32 MODELLING ERRORS ----------------
  {
    const s = mk("Evidence", "Evidence  |  common modelling errors", "Eight errors that overstate, understate or falsely sharpen capex");
    const hdr = [["", 0.5, 0.5], ["The error", 1.1, 3.6], ["What causes it", 4.8, 4.0], ["The control", 8.9, 3.93]];
    hdr.forEach((h) => B(s, h[0], h[1], 1.45, h[2], 0.32, { fill: K.navy, color: K.white, bold: true, fontSize: 11, align: "left", margin: 0.1 }));
    const er = [
      ["Parent plus child lines", "Genset, UPS and bay quotes already contain children", "Apply package controls. Suppress acquisition, keep lifecycle."],
      ["Housed counted as included", "A prefab module houses equipment without pricing it", "The vendor bill of materials decides, never the module row."],
      ["Units swapped", "kWth, kW IT, kVA, amps and kW sensible are different drivers", "Model each line in its native driver."],
      ["Historical read as current", "EXCOOL is Q2 2021 and CIBSE is 2019", "Currentise explicitly and label the result."],
      ["Equipment treated as installed", "Supply-only prices miss install, test and prelims", "Add the installation layer (DR03)."],
      ["Benchmark builds components", "A $/W figure divided across equipment lines", "Benchmarks reconcile totals only."],
      ["Small price scaled to MW", "A 10 kVA retail UPS multiplied up", "Match the evidence scale to the line."],
      ["Observations blended or doubled", "List and reseller averaged, or award plus outturn both counted", "Keep native observations separate. Count once."],
    ];
    er.forEach((r, i) => {
      const y = 1.85 + i * 0.62;
      const fill = i % 2 === 0 ? K.white : K.mist;
      shape(s, "rect", 0.5, y, 12.33, 0.56, { fill, line: K.line, lw: 0.5 });
      dot(s, i + 1, 0.55, y + 0.11, 0.34, K.red);
      T(s, r[0], 1.15, y, 3.5, 0.56, { fontSize: 12, bold: true, valign: "middle" });
      T(s, r[1], 4.85, y, 3.9, 0.56, { fontSize: 11, valign: "middle", color: K.grey });
      T(s, r[2], 8.95, y, 3.85, 0.56, { fontSize: 11, valign: "middle", color: K.ink, bold: true });
    });
    T(s, "Where the control lives: package controls PKG-001 to PKG-100 in the ontology workbook (sheet 39).", 0.5, 6.84, 10, 0.2, { fontSize: 10, color: K.grey, italic: true });
    s.addNotes(`This is the checklist to use on any model you are handed. Each of these errors is real, and each has a control in the ontology.

One, parent plus child lines. If a quote for a generator set, a UPS or a transformer bay already contains its children, adding the children as separate lines double-counts. The package controls handle this case by case and keep children for lifecycle even when they are suppressed for acquisition cost.

Two, housed is counted as included. A prefabricated module physically houses equipment. Its price may still exclude it. Only the bill of materials can say.

Three, units swapped. Kilowatts thermal, kilowatts of IT, kVA, amps and kilowatts sensible are different drivers. A price per kilowatt thermal applied to kilowatts of IT mixes two quantities that differ by the plant's efficiency. Each line should be modelled in its native driver.

Four, historical evidence read as current. The EXCOOL plan is from 2021 and the CIBSE model is from 2019. They need explicit currentisation.

Five, equipment treated as installed. We saw that main plant is roughly a third of the installed build in the reference plan.

Six, a benchmark used to build components. A dollars-per-watt figure is a total. Dividing it across equipment lines produces numbers that look precise and mean nothing.

Seven, a small price scaled to megawatts. A ten kVA retail UPS price is real and current, and it is the wrong scale. Scaling effects, project engineering and bundled scope all change the economics.

Eight, observations blended or doubled. The ontology says explicitly not to average a list price and a reseller price, and not to count an award and a later change notice on the same project as independent.

For a quick test, take a model and ask three questions of every cost line. What is its driver, and does the unit match the quantity? What is its source rung, date and scope? And what children might already be inside it? If any answer is blank, you have found your next diligence request.`);
  }
};
