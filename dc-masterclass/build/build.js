const path = require("path");
const { newDeck, head, K, THEME } = require("./lib");
const SKILL = process.env.APPLY_THEME || "apply_theme.js"; // path to the pptx skill apply_theme.js
const { applyTheme } = require(SKILL);

const parts = process.argv.slice(2).length ? process.argv.slice(2) : ["s1", "s2", "s3", "s4", "s5", "s6"];
const out = process.env.OUT || "deck.pptx";

const added = {};
(async () => {
  const pres = newDeck();
  
  const SEC = { Orientation: "0 Orientation", Electrical: "1 Electrical chain", Thermal: "2 Thermal chain", Assurance: "3 Assurance and proof", Evidence: "4 Evidence and cost", Transaction: "5 Transaction use" };
  const mk = (kicker, kicker2, title, color) => {
    const sec = SEC[kicker];
    if (!added[sec]) { pres.addSection({ title: sec }); added[sec] = true; }
    const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: sec });
    const col = { Orientation: K.navy, Electrical: K.amber, Thermal: K.teal, Assurance: K.violet, Evidence: K.navy, Transaction: K.navy }[kicker];
    head(s, kicker2, title, col === K.amber ? "A56F00" : col);
    return s;
  };
  pres.addSection({ title: '0 Orientation' }); added['0 Orientation'] = true;
  for (const p of parts) {
    // sections are declared in the first slide of each chapter via sectionTitle
    require("./" + p)(pres, mk);
  }
  await pres.writeFile({ fileName: out });
  await applyTheme(out, THEME);
  console.log("written", out);
})();
