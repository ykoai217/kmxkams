// Shared helpers for the DC masterclass build
const pptxgen = require("pptxgenjs");

const THEME = {
  name: "DC Masterclass",
  headFontFace: "Cambria",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "0B1F33", lt1: "FFFFFF", dk2: "16385A", lt2: "EEF2F6",
    accent1: "D98E04", accent2: "0E8A9A", accent3: "6E5BB0",
    accent4: "2E9E6B", accent5: "C8503F", accent6: "5B7C99",
    hlink: "0E8A9A", folHlink: "6E5BB0",
  },
};

// plain hex palette (tints and neutrals); main hues are also in THEME
const K = {
  ink: "0B1F33", navy: "16385A", white: "FFFFFF", mist: "EEF2F6", line: "C9D3DD",
  grey: "5E6B78", mid: "8896A5",
  amber: "D98E04", amberL: "FBEFD5",
  teal: "0E8A9A", tealL: "D8EFF2",
  violet: "6E5BB0", violetL: "E6E1F4",
  green: "2E9E6B", greenL: "D9F0E4",
  red: "C8503F", redL: "F7DEDA",
  slate: "5B7C99", slateL: "DCE5ED",
  warm: "E4572E", cool: "1F7FBF",
};

function newDeck() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.title = "Data Centre Masterclass for Front-Office Finance";
  pres.author = "DC Masterclass";
  pres.company = "Front-office training";

  pres.defineSlideMaster({
    title: "CONTENT",
    background: { color: K.white },
    objects: [
      { text: { text: "Data Centre Masterclass  |  Evidence base: MASTER_DC_COST_ONTOLOGY v0.1.1", options: { x: 0.5, y: 7.1, w: 9, h: 0.28, fontSize: 10, color: K.mid, fontFace: "Calibri", margin: 0 } } },
    ],
    slideNumber: { x: 12.2, y: 7.1, w: 0.6, h: 0.28, fontSize: 10, color: K.mid, fontFace: "Calibri", align: "right" },
    margin: [0, 0, 0, 0],
  });
  pres.defineSlideMaster({
    title: "DARK",
    background: { color: K.ink },
    objects: [],
    slideNumber: { x: 12.2, y: 7.1, w: 0.6, h: 0.28, fontSize: 10, color: "9FB3C8", fontFace: "Calibri", align: "right" },
    margin: [0, 0, 0, 0],
  });
  return pres;
}

// ---------- primitives ----------
let _n = 0;
const nm = (p) => `${p}-${++_n}`;

function T(s, text, x, y, w, h, o = {}) {
  s.addText(text, Object.assign({
    x, y, w, h, fontFace: "Calibri", fontSize: 12, color: K.ink, margin: 0, valign: "top", isTextBox: true, objectName: nm("txt"),
  }, o));
}

// filled box with centred text
function B(s, text, x, y, w, h, o = {}) {
  const fill = o.fill === undefined ? K.mist : o.fill;
  const opts = Object.assign({
    x, y, w, h, fontFace: "Calibri", fontSize: 11, color: K.ink, align: "center", valign: "middle", margin: 0.05,
    shape: o.r ? "roundRect" : "rect", objectName: nm("box"),
  }, o);
  if (o.r) opts.rectRadius = typeof o.r === "number" ? o.r : 0.08;
  opts.fill = fill ? { color: fill } : undefined;
  if (o.line) opts.line = { color: o.line, width: o.lw || 1, dashType: o.dash || "solid" };
  else opts.line = { type: "none" };
  delete opts.r; delete opts.lw; delete opts.dash;
  if (!fill) delete opts.fill;
  s.addText(text, opts);
}

function shape(s, type, x, y, w, h, o = {}) {
  const opts = { x, y, w, h, objectName: nm("shp") };
  if (o.fill) opts.fill = { color: o.fill, transparency: o.tr || 0 };
  if (o.line) opts.line = { color: o.line, width: o.lw || 1, dashType: o.dash || "solid" };
  else opts.line = { type: "none" };
  if (o.rot) opts.rotate = o.rot;
  if (o.rectRadius) opts.rectRadius = o.rectRadius;
  s.addShape(type, opts);
}

// straight line / arrow between two points
function L(s, x1, y1, x2, y2, o = {}) {
  const x = Math.min(x1, x2), y = Math.min(y1, y2);
  const w = Math.abs(x2 - x1), h = Math.abs(y2 - y1);
  const line = { color: o.color || K.ink, width: o.w || 1.5, dashType: o.dash || "solid" };
  if (o.arrow) line.endArrowType = "triangle";
  if (o.both) line.beginArrowType = "triangle";
  s.addShape("line", { x, y, w, h, line, flipH: x2 < x1, flipV: y2 < y1, objectName: nm("ln") });
}

// polyline, arrowhead on the last segment
function P(s, pts, o = {}) {
  for (let i = 0; i < pts.length - 1; i++) {
    const last = i === pts.length - 2;
    L(s, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], Object.assign({}, o, { arrow: last && o.arrow, both: i === 0 && o.both }));
  }
}

function ellipse(s, x, y, w, h, o = {}) { shape(s, "ellipse", x, y, w, h, o); }

// kicker (chapter) + action title
function head(s, kicker, title, color = K.teal, num) {
  shape(s, "ellipse", 0.5, 0.33, 0.12, 0.12, { fill: K.amber });
  shape(s, "ellipse", 0.66, 0.33, 0.12, 0.12, { fill: K.teal });
  shape(s, "ellipse", 0.82, 0.33, 0.12, 0.12, { fill: K.violet });
  T(s, kicker.toUpperCase(), 1.05, 0.27, 9, 0.24, { fontSize: 11, bold: true, color: color, charSpacing: 2 });
  T(s, title, 0.5, 0.58, 12.33, 0.8, { fontFace: "Cambria", fontSize: 24, bold: true, color: K.ink, valign: "top" });
}

// status badges
const BADGE = {
  HIST: { t: "HISTORICAL", f: K.amberL, c: "8A5A00", l: K.amber },
  CURR: { t: "CURRENT", f: K.greenL, c: "1B6E47", l: K.green },
  GAP: { t: "CURRENT PRICE GAP", f: K.redL, c: "962F20", l: K.red },
  CAL: { t: "CALIBRATION ONLY", f: K.slateL, c: "36526B", l: K.slate },
  PKG: { t: "PACKAGE ONLY", f: K.violetL, c: "4A3A8A", l: K.violet },
  REC: { t: "RECONCILIATION ONLY", f: K.slateL, c: "36526B", l: K.slate },
};
function badge(s, kind, x, y, w, label) {
  const b = BADGE[kind];
  B(s, label || b.t, x, y, w || 1.2, 0.24, { fill: b.f, line: b.l, lw: 0.75, color: b.c, fontSize: 9.5, bold: true, r: 0.12, margin: 0.02 });
}

// state colours for package diagrams
const STATE = {
  inc: { f: K.greenL, l: K.green, t: "Usually included (frozen rule)" },
  cond: { f: K.amberL, l: K.amber, t: "Included only if vendor scope says so" },
  sep: { f: K.slateL, l: K.slate, t: "Usually separate" },
  life: { f: K.redL, l: K.red, t: "Lifecycle / replacement item" },
  unk: { f: K.white, l: K.mid, t: "No frozen rule: confirm per quote" },
};
function legend(s, x, y, keys, w = 2.6) {
  keys.forEach((k, i) => {
    const st = STATE[k];
    shape(s, "roundRect", x + i * w, y + 0.03, 0.26, 0.18, { fill: st.f, line: st.l, lw: 1, rectRadius: 0.04 });
    T(s, st.t, x + i * w + 0.34, y, w - 0.4, 0.26, { fontSize: 10.5, color: K.grey, valign: "middle" });
  });
}

// hub-and-spoke package diagram
// hub: {text, sub}, left/right: [{t, s: stateKey, id}] columns
function hub(s, hubBox, left, right, area, o = {}) {
  const { x, y, w, h } = area;
  const hw = o.hubW || 2.6, hh = o.hubH || 1.3;
  const cx = x + w / 2 - hw / 2, cy = y + h / 2 - hh / 2;
  const cw = o.chipW || (w - hw) / 2 - 0.5;
  const ch = o.chipH || 0.34;
  const place = (arr, side) => {
    const gap = (h - arr.length * ch) / (arr.length + 1 || 1);
    arr.forEach((it, i) => {
      const st = STATE[it.s];
      const cyy = y + gap * (i + 1) + ch * i;
      const cxx = side === "L" ? x : x + w - cw;
      B(s, it.id ? [{ text: it.id + "  ", options: { bold: true, color: K.grey, fontSize: 9.5 } }, { text: it.t, options: { fontSize: o.fs || 11 } }] : it.t, cxx, cyy, cw, ch, { fill: st.f, line: st.l, lw: 1, r: 0.05, align: "left", margin: 0.08 });
      const hx = side === "L" ? cx : cx + hw;
      const ex = side === "L" ? cxx + cw : cxx;
      const hy = cy + hh / 2 + (cyy + ch / 2 - (cy + hh / 2)) * 0.35;
      L(s, ex, cyy + ch / 2, hx, hy, { color: st.l, w: 1.25 });
    });
  };
  place(left, "L"); place(right, "R");
  B(s, (hubBox.id ? [{ text: hubBox.id, options: { fontSize: 10, color: "BFD0E0", breakLine: true } }] : []).concat([{ text: hubBox.text, options: { bold: true, fontSize: 14, color: K.white, breakLine: !!hubBox.sub } }]).concat(hubBox.sub ? [{ text: hubBox.sub, options: { fontSize: 10.5, color: "BFD0E0" } }] : []),
    cx, cy, hw, hh, { fill: K.navy, r: 0.12, line: K.ink });
}

// evidence band: label + text
function band(s, y, kind, label, text, h = 0.62, x = 0.5, w = 12.33) {
  shape(s, "roundRect", x, y, w, h, { fill: K.mist, line: K.line, lw: 0.75, rectRadius: 0.06 });
  badge(s, kind, x + 0.15, y + (h - 0.24) / 2, kind === "GAP" ? 1.6 : 1.25, label);
  T(s, text, x + (kind === "GAP" ? 1.9 : 1.55), y + 0.04, w - (kind === "GAP" ? 2.05 : 1.7), h - 0.08, { fontSize: 11.5, color: K.ink, valign: "middle" });
}

// vertical evidence card: badge on top, text below
function ecard(s, kind, label, text, x, y, w, h, bw) {
  shape(s, "roundRect", x, y, w, h, { fill: K.mist, line: K.line, lw: 0.75, rectRadius: 0.06 });
  badge(s, kind, x + 0.12, y + 0.08, bw || 1.7, label);
  T(s, text, x + 0.12, y + 0.38, w - 0.24, h - 0.44, { fontSize: 10.5, color: K.ink });
}

// small caption block
function note(s, text, x, y, w, h, o = {}) { T(s, text, x, y, w, h, Object.assign({ fontSize: 11, color: K.grey, italic: true }, o)); }

// callout card with coloured title
function card(s, title, body, x, y, w, h, color = K.teal, fill = K.white) {
  shape(s, "roundRect", x, y, w, h, { fill, line: K.line, lw: 0.75, rectRadius: 0.07 });
  T(s, title, x + 0.15, y + 0.1, w - 0.3, 0.3, { fontSize: 12.5, bold: true, color });
  T(s, body, x + 0.15, y + 0.42, w - 0.3, h - 0.5, { fontSize: 12, color: K.ink });
}

// numbered dot
function dot(s, n, x, y, d = 0.34, fill = K.navy) {
  B(s, String(n), x, y, d, d, { shape: "ellipse", fill, color: K.white, bold: true, fontSize: 11, margin: 0 });
}

// chain of boxes with arrows; returns centres
function chain(s, items, x, y, bw, bh, gap, o = {}) {
  items.forEach((it, i) => {
    const bx = x + i * (bw + gap);
    B(s, it.t, bx, y, bw, bh, { fill: it.fill || K.mist, line: it.line || K.line, color: it.color || K.ink, bold: it.bold, r: 0.07, fontSize: it.fs || o.fs || 12 });
    if (i < items.length - 1) L(s, bx + bw + 0.02, y + bh / 2, bx + bw + gap - 0.02, y + bh / 2, { color: o.ac || K.ink, w: 1.75, arrow: true });
  });
}

module.exports = { ecard, pptxgen, THEME, K, newDeck, T, B, shape, L, P, ellipse, head, badge, BADGE, STATE, legend, hub, band, note, card, dot, chain };
