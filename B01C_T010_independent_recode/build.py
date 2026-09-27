import csv, hashlib, json, os

OUT = "/home/user/kmxkams/B01C_T010_independent_recode"
PKT = "/tmp/claude-0/-home-user-kmxkams/ab2925df-d934-5d90-965f-1e9957bf9539/scratchpad/packet"
SID, MID, BATCH, CBV = "T010", "SPTRD1784042", "B01C", "v0.3-calibration-freeze"
CODER = "CLAUDE-INDEP-FAMILY-RECODE"
RET = "2026-09-27"
ACC_SNIP = "search-index snippet/engine synthesis only; body NOT retrieved (WebFetch egress-blocked)"
DA = "model_recommendation"
NOT_CLOSED = "NOT CLOSED (terminated by mutual agreement; announced 2021-07-27)"


def sha(p):
    return hashlib.sha256(open(p, "rb").read()).hexdigest()


def header(tpl):
    with open(os.path.join(PKT, "templates", tpl), encoding="utf-8-sig") as f:
        return next(csv.reader(f))


def write(name, hdr, rows):
    with open(os.path.join(OUT, name), "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(hdr)
        for r in rows:
            assert set(r) <= set(hdr), (name, set(r) - set(hdr))
            w.writerow([r.get(h, "") for h in hdr])


LABEL = {}
with open(os.path.join(PKT, "concept_register.json")) as f:
    reg = json.load(f)
for row in reg["rows"]:
    LABEL[row[0]] = (row[1], row[3], row[6], row[24])

# ---------------------------------------------------------------- sources
S = [
    ("S01", "MediaTek MOPS material-information announcement on behalf of subsidiary Richtek: acquisition of Enpirion product-line assets from Intel", "MediaTek Inc. (TWSE:2454) via TWSE MOPS", "Primary party filing (identified, NOT retrieved)", "2020-11-16", "https://mops.twse.com.tw/ (announcement not located; host egress-blocked)", "NOT RETRIEVED", "", "Existence and content known only via S02-S06 reporting. Never cited as direct evidence in any claim.", "party_primary", ""),
    ("S02", "聯發科旗下立錡 8,500萬美收購英特爾轉投資Enpirion電源管理IC產品線", "China Times / 工商時報 (中時新聞網)", "Trade/financial press reporting S01", "2020-11-17", "https://www.chinatimes.com/realtimenews/20201117002026-260410", ACC_SNIP, "title; engine synthesis in Q02/Q06", "Secondary relay of MOPS filing; snippet level only.", "tw_press", "raw/Q02_zh_announcement_and_termination.txt"),
    ("S03", "聯發科近台幣 24 億元，收購英特爾旗下 Enpirion 電源管理晶片產品線", "TechNews 科技新報", "Trade press reporting S01", "2020-11-17", "https://finance.technews.tw/2020/11/17/mediatek-will-merger-intel-enpirion/", ACC_SNIP, "title; engine synthesis in Q06", "Secondary relay; snippet level only.", "tw_press", "raw/Q06_zh_mops_details.txt"),
    ("S04", "聯發科將斥24億元 併購Intel旗下電源管理晶片產品資產", "Anue 鉅亨網", "Financial press reporting S01", "2020-11-17", "https://news.cnyes.com/news/id/4543260", ACC_SNIP, "title; engine synthesis in Q02/Q06", "Secondary relay; snippet level only.", "tw_press", "raw/Q06_zh_mops_details.txt"),
    ("S05", "立錡擬收購Enpirion電源管理IC產品線，交易額8,500萬美元", "經濟部工業局 智慧電子產業計畫推動辦公室 (SIPO)", "Government-programme industry news digest", "2020-11-18", "https://www.sipo.org.tw/industry-overview/industry-news/item/2168-2020111801.html", ACC_SNIP, "title; engine synthesis in Q06", "Digest of press/filing; low independence; snippet level only.", "tw_gov_digest", "raw/Q06_zh_mops_details.txt"),
    ("S06", "MediaTek to acquire assets related to PWM IC from Intel", "DIGITIMES", "Trade press citing TWSE filing", "2020-11-17", "https://www.digitimes.com/news/a20201117VL200.html", ACC_SNIP, "title; engine synthesis in Q05", "Paywalled trade press; snippet level only.", "tw_trade_press", "raw/Q05_en_filing_closing.txt"),
    ("S07", "聯發科併購英特爾旗下Enpirion 蔡力行：瞄準資料中心", "ETtoday 財經雲", "Press report of CEO (Rick Tsai) remarks", "2020-11 (exact day not captured)", "https://finance.ettoday.net/news/1857099", ACC_SNIP, "headline; CEO quote in engine synthesis Q02", "Quote relayed by engine synthesis; venue and exact date of remark not verified.", "tw_press", "raw/Q02_zh_announcement_and_termination.txt"),
    ("S08", "Intel sells Enpirion power management and controller product line to Richtek for $85M", "SiliconANGLE", "Tech press with Intel spokesperson statement", "2020-11-18", "https://siliconangle.com/2020/11/18/intel-sells-enpirion-power-management-controller-product-line-richtek-85m/", ACC_SNIP, "title; spokesperson quote in engine synthesis Q09", "Seller statement relayed via press; snippet level only.", "us_tech_press", "raw/Q09_intel_spokesperson.txt"),
    ("S09", "Mediatek to acquire assets relating to power management from Intel", "Evertiq", "Trade press", "2020-11 (exact day not captured)", "https://evertiq.com/design/49123", ACC_SNIP, "title; engine synthesis Q01", "Snippet level only.", "eu_trade_press", "raw/Q01_en_announcement.txt"),
    ("S10", "MediaTek MOPS announcement on behalf of Richtek: termination of Enpirion asset acquisition agreement with Intel", "MediaTek Inc. via TWSE MOPS", "Primary party filing (identified, NOT retrieved)", "2021-07-27", "https://mops.twse.com.tw/ (announcement not located; host egress-blocked)", "NOT RETRIEVED", "", "Existence and content known only via S11-S13 reporting. Never cited as direct evidence in any claim.", "party_primary", ""),
    ("S11", "聯發科併英特爾電源管理IC事業告吹 雙方合意終止交易", "工商時報 (CTEE)", "Financial press reporting S10", "2021-07-28", "https://www.ctee.com.tw/news/20210728700718-430502", ACC_SNIP, "title; engine synthesis Q03/Q07", "Secondary relay; snippet level only.", "tw_press", "raw/Q03_zh_termination.txt"),
    ("S12", "聯發科宣布 將終止收購英特爾旗下PMIC產品線", "Anue 鉅亨網", "Financial press reporting S10", "2021-07-27", "https://news.cnyes.com/news/id/4688463", ACC_SNIP, "title; engine synthesis Q03", "Secondary relay; snippet level only; publication day inferred from announcement day.", "tw_press", "raw/Q03_zh_termination.txt"),
    ("S13", "MediaTek terminates deal to acquire assets related to PWM IC from Intel", "DIGITIMES", "Trade press reporting S10", "2021-07-29", "https://www.digitimes.com/news/a20210729VL201.html", ACC_SNIP, "title; engine synthesis Q04", "Paywalled; snippet level only.", "tw_trade_press", "raw/Q04_en_termination.txt"),
    ("S14", "Intel Enpirion Power Solutions product discontinuance PDN2133 (as cited in Intel Community threads)", "Intel Corporation / Intel Community", "Seller primary notice relayed in vendor support forum", "2021-09-17", "https://community.intel.com/t5/Intel-Enpirion-Power-Solutions/Enpirion-discontinued/td-p/1317197", ACC_SNIP, "PDN2133 dates in engine synthesis Q10", "PDN body not read; forum thread snippet only.", "party_primary_relay", "raw/Q10_intel_eol.txt"),
    ("S15", "Intel Enpirion Power Solutions PCN 118505-02 Product Discontinuance, End of Life (revision: LTB backlog NCNR)", "Intel Corporation", "Seller primary product-change notice (title only)", "2022-07-01", "https://www.intel.com/content/www/us/en/content-details/807327/", ACC_SNIP, "result title; engine synthesis Q10", "Title/snippet only.", "party_primary", "raw/Q10_intel_eol.txt"),
    ("S16", "MediaTek Announces Tender Offer for Richtek; Mediatek Acquires Richtek To Expand Reach", "Design & Reuse; AmCham Taiwan Topics", "Press (2015) on buyer ownership", "2015-09/2015-10", "https://www.design-reuse.com/news/38176/mediatek-richtek-acquisition.html", ACC_SNIP, "engine synthesis Q11", "Snippet level; ownership completion date (2Q16) and delisting from engine synthesis.", "press", "raw/Q11_richtek_ownership.txt"),
    ("S17", "Altera to acquire Enpirion for $140 million (Form 8-K exhibit / EEPower report)", "Altera Corp. (SEC EDGAR); EEPower", "Historical primary filing (title) and press", "2013-05-14", "https://www.sec.gov/Archives/edgar/data/0000768251/000076825113000031/a2013q28-kerexhibit.htm", ACC_SNIP, "engine synthesis Q12", "Background lineage only; not deal-period evidence.", "us_filing_relay", "raw/Q12_altera_enpirion_2013.txt"),
    ("S18", "Unattributed 'industry analyst' speculation on termination (Gelsinger CEO change)", "Unidentified (search-engine synthesis over S11/UDN results)", "WEAK: unattributed speculation", "2021-07 (approx.)", "https://money.udn.com/money/story/5612/5632183 (candidate host; attribution unverified)", ACC_SNIP, "engine synthesis Q07", "WEAK SOURCE. Rival-generator only. Not used as evidence for any coded claim.", "weak_unattributed", "raw/Q07_zh_termination_reason.txt"),
    ("S19", "Reports that 'the company' had Google orders for the Enpirion line", "Gizchina / SMM / Evertiq (via engine synthesis)", "WEAK: ambiguous secondary claim", "2020-11-17", "https://www.gizchina.com/2020/11/17/mediatek-announces-the-85-million-acquisition-of-intels-enpirion-power-chip-business/", ACC_SNIP, "engine synthesis Q01/Q08", "WEAK SOURCE. Grammatical subject ambiguous (Enpirion vs MediaTek). Not used as evidence.", "weak_ambiguous", "raw/Q08_google_orders.txt"),
]

# ---------------------------------------------------------------- claims
# fields: id, concept, facet_override, role, text, E, L, conf, cfx, rivals, test, srcs, datebasis, factual_basis, test_passed, value_lever, terminal_check, outcome_ids
C = []


def claim(**k):
    C.append(k)


ANN = "Announcement 2020-11-16 (pre-closing; deal never closed)"
claim(id="C01", cid="AR-01", role="n/a (context)", E="E1", L="7", conf="M",
      text="Buyer is Richtek Technology Corp., a wholly owned, delisted subsidiary of listed strategic corporate MediaTek Inc.; MediaTek made the announcement on Richtek's behalf.",
      srcs="S02;S04;S16", date=ANN, fb="Filing relay: '透過子公司立錡科技收購'; Richtek wholly owned by MediaTek from 2Q16 and delisted.",
      rivals="AR-02 (Richtek as private company) rejected: ultimate parent MediaTek is listed.", test="n/a (context field)")
claim(id="C02", cid="PR-01", role="R-C", E="E4", L="4", conf="L",
      text="Structural growth in data-centre / enterprise compute (FPGA, CPU, ASIC power delivery) made entry into enterprise power management attractive.",
      srcs="S07;S08", date=ANN, fb="CEO frames deal as data-centre entry; Intel frames its own reinvestment toward cloud/AI. No market-sizing claim by the buyer captured.",
      rivals="PR-02 technological inflection (high-frequency integrated PowerSoC); no market condition operative (deal is purely portfolio fill).",
      test="Proposed: buyer filings or investor-call transcripts citing DC/enterprise demand growth as rationale. Not run.")
claim(id="C03", cid="BC-03", role="R-C", E="E1", L="6", conf="M",
      text="Buyer-state deficit: Richtek had never penetrated data-centre power-management applications.",
      srcs="S07", date=ANN, fb="蔡力行: '立錡在電源管理晶片一直做得很好，但始終未打入資料中心的應用'.",
      rivals="BC-08 core growth deceleration at MediaTek/Richtek (no evidence captured).",
      test="n/a (E1 party statement)")
claim(id="C04", cid="BM-05", role="R-P", E="E1", L="6", conf="M",
      text="Primary buyer motive: enter the enterprise / data-centre customer segment (FPGA, SoC, CPU, ASIC power delivery) that Richtek did not serve.",
      cfx="Without the enterprise/data-centre segment-entry purpose the deal disappears: Richtek already had broad consumer/mobile PMIC capability, and an $85m sub-scale FPGA-attached product line adds little scale or capability outside that segment.",
      srcs="S02;S03;S04;S06;S07", date=ANN,
      fb="Filing relay: '拓展產品線，提供...整合式高頻、高效率的電源解決方案至企業級系統應用'; CEO: '是一個進入資料中心很好的切入點'.",
      rivals="BM-04 product-scope expansion (co-coded contributory); BM-07 technology acquisition; BM-11 horizontal scale; BM-19 diversification; BM-06 customer acquisition (Google).",
      test="n/a for E1. Discriminator vs BM-11: stated purpose names a new end-segment, not scale.", terminal="Y (terminal motive; R37 not engaged)")
claim(id="C05", cid="BM-04", role="R-C", E="E1", L="5", conf="M",
      text="Contributory buyer motive: add a product family (integrated high-frequency, high-efficiency PowerSoCs, controllers and power stages for FPGA/SoC/CPU/ASIC loads) Richtek did not offer.",
      srcs="S02;S03;S04;S06", date=ANN, fb="Filing relay: stated purpose '拓展產品線'.",
      rivals="BM-04.1 existing-product enhancement (Richtek already sells DC-DC converters); BM-05 carries the segment purpose.",
      test="n/a for E1. Open question whether BM-04 and BM-05 are separable here (single stated sentence).", terminal="Y")
claim(id="C06", cid="BM-07", role="R-C", E="E4", L="4", conf="L",
      text="Hypothesis: acquire Enpirion integrated-magnetics / high-frequency PowerSoC technology and IP the buyer lacked.",
      srcs="S02;S17", date=ANN, fb="Filing relay stresses '整合式高頻、高效率'; Enpirion lineage is Bell Labs power/magnetics technology (2013 Altera deal).",
      rivals="Product line bought for revenue/customers (BM-06) rather than technology; buyer could build equivalent parts organically (AT-02).",
      test="Proposed: asset purchase schedule showing patents and engineering team transfer; Richtek post-deal product roadmap. Not run (deal terminated, schedule not public).", terminal="Y")
claim(id="C07", cid="SM-01", role="R-P", E="E1", L="6", conf="M",
      text="Primary seller motive: Intel exits a non-core power product line so its Programmable Solutions Group can focus on core FPGA.",
      cfx="Without Intel's non-core exit intent there is no seller and no transaction; the line was otherwise embedded in Intel PSG's FPGA offer.",
      srcs="S08", date=ANN, fb="Intel spokesperson: transaction would 'enable Intel's Programmable Solutions Group to focus on its core FPGA business'.",
      rivals="SM-09 liquidity need (rejected: $85m immaterial to Intel); SM-10 valuation timing (no evidence).",
      test="n/a for E1. Post-termination discontinuation (C15) is consistent but not graded to E2 (see RES-06).")
claim(id="C08", cid="SM-02", role="R-C", E="E1", L="5", conf="M",
      text="Contributory seller motive: redeploy resources to high-growth opportunities (5G, edge, AI, cloud).",
      srcs="S08", date=ANN, fb="Intel spokesperson: 'increase investment in high-growth opportunities ... 5G, edge computing, artificial intelligence and the cloud'.",
      rivals="SM-01 alone (refocus language may be boilerplate).", test="n/a for E1")
claim(id="C09", cid="SI-01", role="R-E", E="E1", L="7", conf="M",
      text="Situation: the target is a product line inside Intel (PSG) being separated by its corporate owner.",
      srcs="S02;S03;S08;S11", date=ANN, fb="'英特爾旗下Enpirion電源管理晶片產品線相關資產'; 'Enpirion為英特爾FPGA事業群中負責電源管理晶片的部門'.",
      rivals="SI-02 orphan/neglected asset (possible, no evidence).", test="n/a")
claim(id="C10", cid="ST-02", role="R-E", E="E1", L="7", conf="M",
      text="Structure: purchase of product-line related assets (not shares) by Richtek from Intel and its subsidiaries.",
      srcs="S02;S04;S06;S13", date=ANN, fb="'產品線相關資產'; 'assets related to the power management solutions product line sold under the Enpirion brand owned by Intel and its subsidiaries'.",
      rivals="ST-01 whole-company (rejected: Enpirion Inc. merged into Altera/Intel; assets not entity).", test="n/a")
claim(id="C11", cid="ST-09", role="R-E", E="E1", L="6", conf="M",
      text="Structure: carve-out of a product line from its parent group.",
      srcs="S02;S08;S11", date=ANN, fb="Product line separated from Intel PSG.", rivals="Pure asset sale without operational separation (perimeter unknown).", test="n/a")
claim(id="C12", cid="RO-09", role="n/a (object)", E="E1", L="7", conf="M",
      text="Resource object: Enpirion-branded power-management products (PowerSoCs, controllers, power stages) for FPGA/SoC/CPU/ASIC loads.",
      srcs="S02;S06;S08;S15", date=ANN, fb="Filing relay product description; Intel PCN lists PowerSoCs/controllers/power stages.", rivals="n/a", test="n/a")
claim(id="C13", cid="RO-10", role="n/a (object)", E="E4", L="5", conf="L",
      text="Resource object (hypothesis): associated IP and designs formed part of the 'related assets'.",
      srcs="S02", date=ANN, fb="Asset perimeter described only as '相關資產'.", rivals="Licence-only or inventory/customer-only perimeter.",
      test="Proposed: asset purchase agreement schedule. Not available.")
claim(id="C14", cid="VM-01", role="R-C", E="E4", L="4", conf="L",
      text="Value mechanism (hypothesis): time compression, reaching the data-centre segment sooner than organic development.",
      srcs="S07", date=ANN, fb="CEO calls the deal a good 'access' point into data centre.", rivals="VM-08 revenue synergy with MediaTek ASIC/server customers; VM-19 capability transfer.",
      test="Proposed: buyer disclosure of time-to-market versus build plan. Not run.", lever="Faster design-in with enterprise/DC customers")
claim(id="C15", cid="VM-08", role="R-C", E="E4", L="3", conf="L",
      text="Value mechanism (hypothesis): cross-sell of enterprise power parts alongside MediaTek group ASIC/server offers.",
      srcs="S07", date=ANN, fb="CEO data-centre framing only; Google-order claim (S19) excluded as ambiguous.",
      rivals="VM-01; no synergy beyond standalone product revenue.", test="Proposed: customer/design-win disclosures pairing Richtek power with MediaTek ASICs. Not run.", lever="Bundled ASIC plus power-delivery design-ins")
claim(id="C16", cid="PG-05", role="n/a (context)", E="E4", L="5", conf="L",
      text="Programme role: standalone / one-off acquisition; no evidence of a repeat power-management acquisition programme at announcement.",
      srcs="S02;S16", date=ANN, fb="Only prior link is MediaTek's 2015-16 acquisition of Richtek itself; no captured programme statement.", rivals="PG-02 add-on to the Richtek platform within a MediaTek PMIC programme.",
      test="Proposed: MediaTek/Richtek acquisition history 2016-2021 in power management. Not run.")
claim(id="C17", cid="OU-02", role="n/a (outcome)", E="E1", L="7", conf="M",
      text="Revealed seller behaviour AFTER TERMINATION (not after closing): Intel discontinued the Enpirion line (PDN2133 released 2021-09-17; final order 2022-03-18; last shipment 2023-03-31; PCN 118505-02 revision 2022-07-01).",
      srcs="S14;S15", date="Post-termination 2021-09-17 onward", fb="PDN2133 dates relayed from Intel Community thread; PCN 118505-02 title.",
      rivals="Line transferred elsewhere (no evidence).", test="n/a", outcome="SM-01 (consistent); retention-by-new-CEO termination rival (contradicted)")
# unknown facets
for cid_, fac, txt in [
    ("", "II", "No ex-ante integration intent disclosed on or before any closing (deal never closed). Facet unknown."),
    ("", "FI", "Funding source not disclosed (cash consideration presumed by reporting but not verified). Facet unknown."),
    ("", "CA", "No dated catalyst for the 2020-11-16 announcement identified. Facet unknown."),
    ("", "PC", "Closing was subject to 'certain legal procedures' (相關法律程序) that are unspecified; no instrument, jurisdiction, status or date identifiable, so no PC code under R27."),
    ("", "BO", "No behavioural indicators (premium, returns, impairment) available; deal never closed. Facet unknown."),
    ("", "PS", "No multi-deal programme evidenced. Facet unknown."),
]:
    claim(id=f"C{len(C)+1:02d}", cid=cid_, fac=fac, role="n/a", E="E5", L="", conf="L", text=txt, srcs="S02;S06" if fac == "PC" else "",
          date=ANN, fb="Absence of disclosure in captured sources.", rivals="n/a", test="n/a")
# anti-theses
for cid_, txt, fb in [
    ("AT-02", "Kill condition: Richtek (an established PMIC vendor) could develop comparable enterprise power parts organically within the required time.", "Richtek's existing PMIC franchise; no evidence either way captured."),
    ("AT-01", "Kill condition: a supply, licence or partnership arrangement with Intel would deliver most of the segment access without ownership.", "Termination statement stresses continuing 'other business cooperation'; no evidence on alternatives."),
    ("AT-05", "Kill condition: the unspecified 'legal procedures' block or dilute the deal.", "Deal terminated before closing; cause undisclosed."),
]:
    claim(id=f"C{len(C)+1:02d}", cid=cid_, role="n/a (anti-thesis)", E="E5", L="", conf="L", text=txt, srcs="S11;S12" if cid_ in ("AT-01", "AT-05") else "",
          date=ANN, fb=fb, rivals="n/a", test="Whether condition held is untested (E5).")

for c in C:
    c.setdefault("cfx", ""); c.setdefault("lever", ""); c.setdefault("terminal", ""); c.setdefault("outcome", "")
    if c["cid"]:
        fac, lab, status, term = LABEL[c["cid"]]
        assert status not in ("Merged", "Deprecated"), c["cid"]
        c["fac"], c["label"] = fac, lab
        if fac == "BM" and not c["terminal"]:
            c["terminal"] = term
    else:
        c["label"] = "(facet unknown)"
    if c["role"] == "R-P":
        assert c["cfx"], c["id"]

# ---------------------------------------------------------------- edges
E = [
    ("E01", "C02", "C03", "creates", "E4", "S07", "Market growth in DC/enterprise compute makes Richtek's DC absence a deficit (hypothesis)."),
    ("E02", "C03", "C04", "activates", "E1", "S07", "CEO links DC absence directly to the deal as a DC entry point."),
    ("E03", "C01", "C04", "selects", "E4", "S16", "Strategic-corporate parent selects the operating-motive layer."),
    ("E04", "C04", "C12", "requires", "E1", "S02;S06", "Segment entry requires control of the enterprise power product line."),
    ("E05", "C05", "C12", "requires", "E1", "S02", "Product-scope expansion requires the Enpirion product family."),
    ("E06", "C06", "C13", "requires", "E4", "S02", "Technology motive would require IP/designs (perimeter unverified)."),
    ("E07", "C12", "C14", "realises", "E4", "S07", "Owning an existing qualified product line compresses time to DC design-ins."),
    ("E08", "C12", "C15", "realises", "E4", "S07", "Product line could be cross-sold with group ASIC/server offers."),
    ("E09", "C07", "C09", "creates", "E1", "S08", "Intel's non-core exit creates the carve-out situation."),
    ("E10", "C09", "C10", "affects", "E1", "S02;S13", "Carve-out situation shapes the asset-purchase form."),
    ("E11", "C09", "C11", "affects", "E1", "S02;S08", "Carve-out situation shapes the separation form."),
]
at_ids = {c["cid"]: c["id"] for c in C if c["cid"].startswith("AT-")}
E += [
    ("E12", at_ids["AT-02"], "C04", "refutes", "E5", "", "Organic build in time would refute the segment-entry-by-acquisition thesis; untested."),
    ("E13", at_ids["AT-01"], "C04", "refutes", "E5", "S11", "Partnership sufficiency would refute control necessity; untested."),
]
# grammar check
ALLOWED = {("PC", "alters", "PR"), ("PR", "creates", "BC"), ("BC", "activates", "BM"), ("AR", "selects", "BM"),
           ("BM", "requires", "RO"), ("RO", "realises", "VM"), ("SM", "creates", "SI"), ("SI", "affects", "VM"),
           ("SI", "affects", "ST"), ("AT", "refutes", "BM"), ("OU", "corroborates", "BM"), ("OU", "contradicts", "BM")}
cmap = {c["id"]: c for c in C}
for e in E:
    t = (cmap[e[1]]["fac"], e[3], cmap[e[2]]["fac"])
    assert t in ALLOWED, t

# ---------------------------------------------------------------- residuals
R = [
    ("RES01", "bad_data", "", "SOURCE Buyer ':6286' is stale. Richtek was delisted from TWSE after becoming a wholly owned MediaTek subsidiary (2Q16). Announcing/ultimate parent is MediaTek Inc. (TWSE:2454). SOURCE field preserved; VERIFIED buyer records the parent.", "Record ultimate parent MediaTek in VERIFIED buyer; flag ticker in MI data.", "S16;S02", "Changes buyer archetype lookup and parent-level clustering.", "Medium"),
    ("RES02", "bad_data", "", "SOURCE Termination Date, Expected Completion Date and Deal Summary are null. Verified: expected completion 4Q2020 subject to legal procedures; termination by mutual agreement announced by MediaTek on 2021-07-27 (reported 2021-07-28/29).", "Populate VERIFIED termination date 2021-07-27 (announcement date).", "S06;S11;S12;S13", "Status/timing fields drive outcome and duration statistics.", "Medium"),
    ("RES03", "insufficient_evidence", "ALL", "No genuine source body was retrieved. WebFetch was egress-blocked for every host tried (UDN, BusinessNext, ETtoday, SiliconANGLE, Evertiq, mediatek.com, sec.gov, mops.twse.com.tw). All evidence is search-index snippets and engine synthesis, captured in raw/. Primary MOPS announcements S01 and S10 are identified but unread. Source confidence is capped at M.", "Re-run with network access; read MOPS 2020-11-16 and 2021-07-27 announcements, ETtoday CEO article and SiliconANGLE Intel statement in full; re-grade confidence.", "S01;S10", "Blocks Gold eligibility; could move E1 claims' confidence to H.", "High"),
    ("RES04", "insufficient_evidence", "SM-01;BM-05", "Cause of termination undisclosed (E5). Rivals: (a) Intel strategy change under new CEO Gelsinger (from Feb 2021), from unattributed speculation S18; (b) failure of unspecified legal/regulatory procedures; (c) buyer reassessment or price/perimeter disagreement. Discriminating evidence: Intel discontinued the line in Sept 2021 (C17) instead of retaining or reinvesting in it, which contradicts rival (a) in its retention form; (b) and (c) remain open.", "Obtain termination filing text and any Intel 10-Q/10-K note; test for regulatory filings.", "S10;S11;S12;S14;S18", "Determines whether termination is buyer-side (thesis failure) or process-side.", "High"),
    ("RES05", "wrong_layer", "OU-02", "OU facet and OU->BM/BO grammar assume a closed deal. Here the seller's post-termination discontinuation is informative about SM-01, but no OU->SM edge exists and the deal never closed, so SM-01 is not graded to E2.", "Ontology release decision: allow OU for terminated deals and an OU->SM corroboration edge, or keep as note.", "S14;S15", "If admitted, SM-01 would grade E1->E2.", "Medium"),
    ("RES06", "wrong_layer", "", "Relevance: a semiconductor power-management product line for FPGA/SoC/CPU/ASIC loads. It is a data-centre supply-chain component deal and not a data-centre infrastructure asset. The buyer's own framing is data-centre entry, so it is not pure contamination. Recommended Final Relevance: Adjacent (DC supply chain, peripheral); human decision whether it stays in the DC M&A population.", "Human scope decision.", "S07;S02", "Inclusion changes population frequencies for BM-05/BM-04 among DC deals.", "High"),
    ("RES07", "insufficient_evidence", "BM-06;VM-08", "Reports that 'the company' already had Google orders for the Enpirion line are grammatically ambiguous (Enpirion vs MediaTek ASIC unit) and unattributed. Not used as evidence; BM-06 not coded.", "Read S08/S09 bodies to resolve subject.", "S19", "Could add BM-06 / VM-08 support.", "Low"),
    ("RES08", "insufficient_evidence", "PC", "Closing conditioned on unspecified 'legal procedures'. R27 cannot be satisfied (no instrument, jurisdiction, status, effective date), so no PC code.", "Read MOPS filing for approval list (e.g. Taiwan Investment Commission, antitrust).", "S02;S06", "Possible PC-04/PC-08 code and AT-05 test.", "Medium"),
    ("RES09", "insufficient_evidence", "RO-10;RO-11;RO-13;FI", "Asset perimeter (IP, employees, inventory, customer contracts), consideration form and funding source are undisclosed in captured sources. Signing date is not separately evidenced; 2020-11-16 is the board/announcement date.", "Obtain filing detail.", "S02;S04", "Affects RO and FI coding and equity vs asset value interpretation.", "Low"),
    ("RES10", "bad_data", "", "NT$ conversion of US$85m reported inconsistently (約23.89億, 約24.24億, 約24.3億). FX translation only; US$85m headline is consistent across sources.", "Use US$85m; note FX.", "S02;S03;S04;S06", "None material.", "Low"),
]

# ---------------------------------------------------------------- write exact-schema
ce_h = header("Claim_Evidence.csv")
rows = []
for c in C:
    rows.append({"Claim ID": c["id"], "Sample ID": SID, "MI Transaction ID": MID, "Facet": c["fac"], "Concept ID": c["cid"],
                 "Concept Label": c["label"], "Driver Role": c["role"], "Assessed Claim": c["text"], "Evidence State": c["E"],
                 "Likelihood Band": c["L"], "Source Confidence": c["conf"], "Primary Counterfactual": c["cfx"],
                 "Rivals Considered": c["rivals"], "Process / Discriminating Test": c["test"], "Source IDs": c["srcs"],
                 "Claim Date Basis": c["date"], "Post-close Evidence Used?": "Post-termination seller evidence only (C17); no post-close evidence (never closed)" if c["id"] == "C17" else "No",
                 "Coder ID": CODER, "Batch ID": BATCH, "Codebook Version": CBV, "Adjudication Status": "Independent recode; not adjudicated",
                 "Terminal Motive?": c["terminal"] if c["fac"] == "BM" else "n/a",
                 "Terminal Rule Check": "PASS (R37: no BM-22/23/25 coded)" if c["fac"] == "BM" else "n/a"})
write("Claim_Evidence.csv", ce_h, rows)

src_used = {}
for c in C:
    for s in filter(None, c["srcs"].split(";")):
        src_used.setdefault(s, []).append(c["id"])
for e in E:
    for s in filter(None, e[5].split(";")):
        src_used.setdefault(s, []).append(e[0])
for r in R:
    for s in filter(None, r[5].split(";")):
        src_used.setdefault(s, []).append(r[0])
ids = {s[0] for s in S}
assert set(src_used) <= ids, set(src_used) - ids
WEAK = {"S18", "S19"}
for c in C:
    assert not (set(c["srcs"].split(";")) & WEAK), c["id"]
    assert not (set(c["srcs"].split(";")) & {"S01", "S10"}), c["id"]

sl_h = header("Source_Log.csv")
rows = []
for s in S:
    rows.append({"Source ID": s[0], "Sample ID": SID, "MI Transaction ID": MID, "URL": s[5], "Source Title": s[1], "Publisher / Author": s[2],
                 "Source Type": s[3], "Publication Date": s[4], "Access Date": RET if s[6] != "NOT RETRIEVED" else "not accessed",
                 "Claims Supported": ";".join(sorted(set(x for x in src_used.get(s[0], []) if x.startswith("C")))),
                 "Exact Extract / Key Fact": s[7] or "(not read)", "Claim-Dependent Confidence": "L (weak; not evidence)" if s[0] in WEAK else ("n/a (unread)" if s[6] == "NOT RETRIEVED" else "M for party-stated rationale/identity; L for inferred motive"),
                 "Limitations / Incentives": s[8], "Archived / Stable URL?": ("raw capture: " + s[10]) if s[10] else "No"})
write("Source_Log.csv", sl_h, rows)

cedge_h = header("Causal_Edges.csv")
write("Causal_Edges.csv", cedge_h, [{"Edge ID": e[0], "Sample ID": SID, "MI Transaction ID": MID, "From Facet": cmap[e[1]]["fac"], "From Concept ID": cmap[e[1]]["cid"],
       "From Concept Label": cmap[e[1]]["label"], "Edge Type": e[3], "To Facet": cmap[e[2]]["fac"], "To Concept ID": cmap[e[2]]["cid"],
       "To Concept Label": cmap[e[2]]["label"], "Evidence State": e[4], "Source IDs": e[5], "Notes": e[6], "Codebook Version": CBV} for e in E])

res_h = header("Residuals.csv")
write("Residuals.csv", res_h, [{"Residual ID": r[0], "Sample ID": SID, "MI Transaction ID": MID, "Current Concept(s)": r[2], "Residual Type": r[1],
       "Description": r[3], "Proposed Resolution": r[4], "Evidence / Source IDs": r[5], "Decision-Consequence Test": r[6], "Research Priority": r[7],
       "Status": "Open", "Adjudication Note": "", "Codebook Version": CBV} for r in R])

# Coding output
def codes(fac, fmt=lambda c: f"{c['cid']} {c['label']} [{c['role']}; {c['E']}; L{c['L']}; {c['conf']}]"):
    xs = [fmt(c) for c in C if c["fac"] == fac and c["cid"]]
    if xs:
        return "; ".join(xs)
    u = [c for c in C if c["fac"] == fac and not c["cid"]]
    return "Unknown (E5)" if u else "None coded"

co_h = header("Coding_Output.csv")
with open(os.path.join(PKT, "templates", "Coding_Output.csv"), encoding="utf-8-sig") as f:
    base = list(csv.DictReader(f))[0]
row = dict(base)
row.update({
    "VERIFIED Buyer / Investor": "Richtek Technology Corporation (wholly owned subsidiary of MediaTek Inc., TWSE:2454; Richtek delisted from TWSE 2016)",
    "VERIFIED Seller": "Intel Corporation and its subsidiaries (Programmable Solutions Group)",
    "VERIFIED Announced Date": "2020-11-16",
    "VERIFIED Transaction Type": "M&A - Asset (carve-out purchase of Enpirion-brand power-management product-line assets)",
    "VERIFIED Status": "Terminated/Withdrawn (mutual agreement; termination announced 2021-07-27; never closed)",
    "Identity Resolution Status": "Resolved - consistent with SOURCE; data defects logged",
    "Identity Conflict Note": "SOURCE target, seller, date, type, status and US$85m value all confirmed. Buyer ticker ':6286' stale (RES01). Termination date and expected completion missing in SOURCE (RES02). Evidence is snippet-level only (RES03).",
    "Identity Source IDs": "S02;S03;S04;S06;S11;S12;S13;S16",
    "Final Relevance": "Adjacent - DC supply chain (peripheral); human scope decision pending (RES06)",
    "Relevance Basis / Evidence": "Semiconductor power-management product line for FPGA/SoC/CPU/ASIC enterprise loads; buyer CEO frames as data-centre entry point (S07). Not a DC infrastructure asset.",
    "Buyer Archetype": "AR-01 Strategic corporate (listed) via wholly owned subsidiary",
    "Capital Pool / Consortium": "MediaTek group balance sheet (funding not disclosed); single buyer",
    "Stated Rationale (summary)": "Buyer: expand product line to supply integrated high-frequency, high-efficiency power solutions for FPGA/SoC/CPU/ASIC enterprise systems and enter data centre. Seller: let Intel PSG focus on core FPGA and reinvest in high-growth areas.",
    "Stated Rationale Exact Extract(s)": "'拓展產品線，提供使用在FPGA、SoC、CPU、ASIC上的整合式高頻、高效率的電源解決方案至企業級系統應用，以擴大經營規模及提升經營績效與競爭力' (filing relay, S02/S04/S06); '立錡...始終未打入資料中心的應用...是一個進入資料中心很好的access' (CEO, S07); 'enable Intel's Programmable Solutions Group to focus on its core FPGA business' (Intel, S08). All snippet-level.",
    "Market Pressure(s)": codes("PR"),
    "Buyer Condition(s)": codes("BC"),
    "Buyer Motive(s) + Role": codes("BM"),
    "Primary Driver Counterfactual(s)": " | ".join(f"{c['cid']}: {c['cfx']}" for c in C if c["role"] == "R-P"),
    "Programme Strategy": codes("PS"),
    "Programme Role": codes("PG"),
    "Seller Motive(s)": codes("SM"),
    "Value Mechanism(s)": codes("VM"),
    "Resource Object(s)": codes("RO"),
    "Situation(s)": codes("SI"),
    "Catalyst(s)": codes("CA"),
    "Integration Intent": "Unknown (E5); no ex-ante plan disclosed; never closed (R38 not engaged)",
    "Structure": codes("ST"),
    "Financing": "Unknown (E5)",
    "Policy Link(s)": "None coded; closing subject to unspecified legal procedures, R27 unmet (RES08)",
    "Behavioural Overlay": "Unknown (E5); no indicators",
    "Evidence State(s)": "; ".join(f"{c['cid'] or c['fac']}={c['E']}" for c in C),
    "Likelihood Band(s)": "; ".join(f"{c['cid']}={c['L']}" for c in C if c["L"]),
    "Source Confidence(s)": "; ".join(f"{c['cid'] or c['fac']}={c['conf']}" for c in C),
    "Alternatives / Control-Necessity Evidence": "Not evidenced. Buyer did not disclose build/partner alternatives; termination notice preserves 'other business cooperation' with Intel, implying a non-ownership relationship existed (AT-01 untested).",
    "Anti-thesis / Kill Conditions": "AT-02 organic build in time (E5); AT-01 partnership suffices (E5); AT-05 legal procedures block (E5). Deal terminated 2021-07-27, cause undisclosed.",
    "Causal Chain Summary": "Buyer: PR-01 (E4) -> BC-03 DC absence (E1) -> BM-05 enterprise/DC segment entry (E1, R-P) + BM-04 product scope (E1, R-C) -> RO-09 Enpirion product line -> VM-01 time compression (E4) / VM-08 cross-sell (E4). Seller: SM-01 non-core exit (E1, R-P) -> SI-01 carve-out -> ST-02 asset purchase / ST-09 carve-out.",
    "Outcome / Revealed Behaviour": "Deal terminated by mutual agreement (announced 2021-07-27), never closed. Intel then discontinued Enpirion (PDN2133 2021-09-17; final order 2022-03-18; last ship 2023-03-31): OU-02, post-termination, seller-side.",
    "Contradictions / Rival Hypotheses": "Termination cause rivals: Intel strategy change under new CEO (weak, unattributed; retention form contradicted by discontinuation), unmet legal procedures, buyer reassessment. Motive rivals: BM-07 tech acquisition (E4), BM-11 scale (rejected), BM-19 diversification (E4 not coded), BM-06 Google customer acquisition (ambiguous, not coded).",
    "Residual Flag": "Y",
    "Residual Type": "bad_data; insufficient_evidence; wrong_layer",
    "Research Sources / Citations": "S02-S09; S11-S17 (snippet-level). S01, S10 identified primaries not retrieved. S18, S19 weak, not evidence.",
    "Adjudication Status": "Independent-family recode; locked; not adjudicated; not Gold",
    "Coder ID": CODER,
    "Non-terminal Motive Check": "PASS: no BM-22/BM-23/BM-25 coded; terminal motives BM-05, BM-04, BM-07",
})
write("Coding_Output.csv", co_h, [row])

cc_h = header("Completion_Checklist.csv")
write("Completion_Checklist.csv", cc_h, [
    {"Check": "Manifest rows readable", "Required": "10 exact rows", "DR self-check result": "PASS (1/1)", "Notes": "Packet scope is one candidate (T010); template default of 10 does not apply."},
    {"Check": "Coding Output rows", "Required": "10", "DR self-check result": "PASS (1/1)", "Notes": "Single-candidate packet."},
    {"Check": "Every Sample ID preserved", "Required": "10/10 exact", "DR self-check result": "PASS (1/1)", "Notes": "T010"},
    {"Check": "Every MI ID preserved", "Required": "10/10 exact", "DR self-check result": "PASS (1/1)", "Notes": "SPTRD1784042; SOURCE fields unchanged from template"},
    {"Check": "Identity conflicts logged", "Required": "100% of conflicts", "DR self-check result": "PASS", "Notes": "RES01, RES02, RES10"},
    {"Check": "Claim Evidence coverage", "Required": "Every non-N/A coded concept has a claim row", "DR self-check result": "PASS", "Notes": f"{len(C)} claim rows incl. E5 facet rows"},
    {"Check": "Source Log coverage", "Required": "Every Source ID used exists in Source Log", "DR self-check result": "PASS", "Notes": "Script-asserted"},
    {"Check": "Weak source used as evidence", "Required": "0", "DR self-check result": "PASS (0)", "Notes": "S18, S19 excluded by assertion; unread primaries S01, S10 never cited in claims"},
    {"Check": "Causal edges", "Required": "Evidence-backed for every materially coded deal", "DR self-check result": "PASS", "Notes": f"{len(E)} edges; all in permitted grammar (script-asserted)"},
    {"Check": "Residuals", "Required": "All identity/evidence/ontology problems logged", "DR self-check result": "PASS", "Notes": f"{len(R)} residuals"},
    {"Check": "QC reproducible", "Required": "Yes, from output rows", "DR self-check result": "PASS", "Notes": "build.py included; raw captures hashed"},
    {"Check": "Output format", "Required": ".xlsx or exact-schema CSV; no PDF substitute", "DR self-check result": "PASS", "Notes": "Exact-schema CSV (headers copied from packet templates)"},
    {"Check": "Genuine source bodies used", "Required": "Primary/original-language bodies", "DR self-check result": "FAIL", "Notes": "Egress block: snippets only (RES03). Confidence capped at M. Output is PROVISIONAL on this criterion."},
])

# ---------------------------------------------------------------- normalized
sch = json.load(open(os.path.join(PKT, "normalized_schema.json")))
write("normalized_claims.csv", sch["claims"], [{
    "claim_id": c["id"], "sample_id": SID, "mi_transaction_id": MID, "concept_id": c["cid"], "facet": c["fac"], "claim_text": c["text"],
    "evidence_state": c["E"], "likelihood_band": c["L"], "source_confidence": c["conf"], "driver_role": c["role"], "counterfactual": c["cfx"],
    "source_ids": c["srcs"], "factual_basis": c["fb"], "rival": c["rivals"], "discriminating_test": c["test"],
    "test_passed": "n/a (no E3 claims)", "closing_date": NOT_CLOSED, "intent_source_date": "", "intent_source_ids": "",
    "e1_source_ids": c["srcs"] if c["E"] == "E1" else "", "outcome_source_ids": c["srcs"] if c["fac"] == "OU" else "",
    "outcome_concept_id": c["cid"] if c["fac"] == "OU" else "",
    "value_lever": c["lever"], "decision_authority": DA, "human_reviewer_decision": "", "gold_eligible": "N"} for c in C])
write("normalized_sources.csv", sch["sources"], [{
    "source_id": s[0], "sample_id": SID, "title": s[1], "publisher": s[2], "source_type": s[3], "publication_date": s[4], "url": s[5],
    "retrieved_at": RET if s[6] != "NOT RETRIEVED" else "", "access": s[6], "locator": s[7], "limitations": s[8], "source_family": s[9],
    "raw_path": s[10], "raw_sha256": sha(os.path.join(OUT, s[10])) if s[10] else "", "claim_ids": ";".join(sorted(set(src_used.get(s[0], []))))} for s in S])
write("normalized_edges.csv", sch["edges"], [{"edge_id": e[0], "sample_id": SID, "from_claim_id": e[1], "to_claim_id": e[2], "edge_type": e[3],
       "source_ids": e[5], "rationale": f"[{e[4]}] {e[6]}"} for e in E])
write("normalized_residuals.csv", sch["residuals"], [{"residual_id": r[0], "sample_id": SID, "residual_type": r[1], "description": r[3],
       "source_ids": r[5], "status": "Open", "decision_authority": DA, "human_reviewer_decision": ""} for r in R])

# no em dashes anywhere in outputs
for fn in os.listdir(OUT):
    if fn.endswith(".csv"):
        assert "—" not in open(os.path.join(OUT, fn), encoding="utf-8").read(), fn
print("claims", len(C), "edges", len(E), "residuals", len(R), "sources", len(S))
