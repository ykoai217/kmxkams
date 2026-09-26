# Equinix Growth-Mechanism and M&A Forensics

**As of:** 27 September 2026
**Central case:** CPP Investments / Equinix acquisition of atNorth (signed 27 Feb 2026, closed 2 Sep 2026)
**Scope:** Buyer forensics only. No future targets are proposed and no companies are ranked.

---

## 0. Method and evidence caveat (read first)

**Evidence labels:** **O** Observed (directly supported by source) · **D** Derived (arithmetic or logic from O facts) · **I** Inferred (interpretation, flagged as such) · **U** Unknown.

**Confidence:** H (primary source, wording captured) · M (primary source via extracted summary, or strong secondary) · L (single secondary, or summary with possible extraction error).

**Collection limitation.** The research environment's network policy blocked direct retrieval of sec.gov, newsroom.equinix.com, investor.equinix.com, atnorth.com, cppinvestments.com, prnewswire.com and datacenterdynamics.com. Every fact was captured through a search index that extracts content from those pages. The source register points to the underlying primary document wherever the index identified one. Nothing here rests on Wikipedia or aggregators. Search extraction can paraphrase or mis-attribute, so no claim is graded above **M** unless two independent sources agree on the same figure. Section 9 lists the verification reads that should be done against the primary PDFs before anyone relies on this report for a decision.

---

## 1. Executive factual state (15 bullets)

1. **O/H.** On 27 Feb 2026, CPP Investments and Equinix agreed to buy atNorth from Partners Group at a **US$4.0bn enterprise value**. The announced split was CPP ~60% (~US$1.6bn) and Equinix ~40%. [S1, S5, S7, S13]
2. **O/M.** Equinix's Q1 2026 10-Q describes an **equity commitment letter of up to US$963m** to a CPP subsidiary, for ~40% of that subsidiary. So Equinix invests *into a CPP-controlled acquisition vehicle*; it does not buy atNorth shares directly. [S8]
3. **O/H.** The deal closed on **2 Sep 2026** with a changed cap table: **CPP ~51% (US$1.3bn), Equinix ~34% (US$895m), Partners Group ~10% (US$260m, reinvesting from its infrastructure secondaries strategy)**. atNorth internal stakeholders rolled over a "substantial portion" of their equity (**D:** ~5%). [S2, S3, S14, S15]
4. **O/H.** The European Commission reviewed the deal as an **acquisition of joint control by CPPIB and Equinix** (case M.12394). It cleared the deal unconditionally in Phase I on 11/12 Aug 2026, finding that atNorth and Equinix "have different focuses in the market". [S10, S11, S12]
5. **O/M.** The financing package is **€3.6bn (reported as US$4.1bn to US$4.2bn)**, underwritten by European and Canadian lenders. It funds both the acquisition and atNorth's expansion capex. Lender names and tranche terms are **U**. [S2, S14, S16]
6. **O/M.** At signing, atNorth had **1 GW of secured power** and an **~800 MW pipeline expected online over ~5 years**. At close it had **eight operational data centres** across the Nordics, plus development sites in all five Nordic countries. [S2, S16, S17]
7. **O/H.** After close, **atNorth operates independently under its own brand**. Equinix's stated contribution is "complementary digital infrastructure expertise and global customer relationships". [S2, S3, S6]
8. **U.** No public source found any **Equinix capacity-lease, offtake, referral or exclusivity agreement** with atNorth. The absence of disclosure is not evidence that none exists.
9. **O/M.** On its Q1 2026 call, Equinix said the deal would be **"immediately accretive to AFFO per share upon closing"**. [S17]
10. **O/H.** xScale is a family of **partner-majority JVs**. Equinix holds 20% (GIC in EMEA and Japan; PGIM in Sydney and Silicon Valley) or 25% (US JV with GIC 37.5% and CPP 37.5%, >US$15bn investable, >1.5 GW). Equinix manages the assets for fees. Major decisions need both partners' consent. [S25, S26, S27, S30, S31, S32]
11. **O/M.** **No xScale facility is disclosed in the Nordics.** Disclosed xScale markets are Dublin, Paris, London, Frankfurt, Warsaw, Milan, Madrid, Tokyo, Osaka, Seoul, Sydney, São Paulo, Mexico City, Silicon Valley, and the US campuses (Atlanta/Hampton, Dallas). [S28, S33, S34]
12. **O/M.** Equinix's own organic "Build Bolder" plan: ~**3 GW developable capacity** after 2025 land closings (Amsterdam, Chicago, Johannesburg, London, Toronto, ~900 MW). The target is to double capacity by 2029, with capex of **US$5bn to US$7bn a year through 2029**. [S35, S36, S18]
13. **O/H.** The 2015 to 2026 record is dominated by **whole-company or portfolio buys that bring market entry, installed customers and interconnection density**: Telecity, Verizon, Bit-isle, Metronode, Axtel, Bell, GPX, MainOne, Entel, TIM, BT Ireland. The one large **capability** buy (Packet, 2020) was sunset in June 2026. [S38 to S53, S47]
14. **O/M.** Equinix-specific constraint evidence exists for **Dublin** (grid moratorium; planning refusal of an on-site gas-powered DC), **Singapore** (capacity awarded through the DC-CFA allocation regime), and **Frankfurt, Amsterdam and Ashburn** (named as constrained). No Equinix-specific constraint evidence was found for the **Nordics** (**U**). [S54, S55, S56, S57]
15. **I.** The atNorth structure most closely resembles an **xScale-style capital-partner model applied to an existing operating platform**. Its reported shape is partner-majority equity, Equinix minority with joint control, and project-level debt. The key differences are that the team, brand, customers, sites and power position came pre-built, and that Equinix does not operate the assets.

---

## 2. atNorth transaction forensic

### 2.1 Timeline

| Date | Event | Label / Conf. | Source |
|---|---|---|---|
| 2012 | Advania Data Centers formed from three components | O / M | S13 |
| 2017 | De-merged from Advania Group | O / M | S13 |
| 2020 | Rebranded **atNorth** | O / M | S13 |
| 2022 | Partners Group acquires atNorth | O / H | S7, S13 |
| 2024 to 2025 | Iceland expansions: ICE02 (Keflavík) +35 MW, ICE03 (Akureyri) +16 MW; heat-reuse partnerships (Hringvarmi, Iceland; Vesforbrænding, Denmark); SWE02 Stockholm 30 MW planned for Q4 2027 | O / M | S22, S23 |
| **27 Feb 2026** | **Signing.** EV US$4.0bn. CPP ~60% (~US$1.6bn), Equinix ~40%. €3.6bn financing provisionally agreed. Closing subject to regulatory approvals | O / H | S1, S4, S5, S7 |
| Feb 2026 | Equinix signs equity commitment letter of up to **US$963m** for ~40% of a CPP subsidiary (the acquisition vehicle) | O / M | S8 |
| 11 Feb 2026 (before signing) | Q4 2025 call. xScale framed as "capital-efficient JVs"; >400 MW xScale leased globally | O / M | S19 |
| 29 Apr 2026 | Q1 2026 call. atNorth gives "access to an installed and active development pipeline of approximately 800 megawatts... over the next five years"; "immediately accretive to AFFO per share upon closing" | O / M | S17 |
| 3 Jun 2026 | atNorth enters Norway: 36 ha at Haugaland Business Park (NOR01), 120 MW initial rising to 350 MW, power projected for 2028 | O / M | S20 |
| 6 Jul 2026 | EU merger notification, case **M.12394 CPPIB / Equinix / atNorth** | O / H | S10 |
| 29 Jul 2026 | Q2 2026 call. Capex guidance US$5bn to US$7bn a year through 2029; long-term outlook raised | O / M | S18 |
| 11 to 12 Aug 2026 | **EC Phase I unconditional clearance** ("different focuses in the market"; sufficient alternative competitors) | O / H | S10, S12 |
| **2 Sep 2026** | **Closing.** Final ownership CPP ~51% / Equinix ~34% / Partners Group ~10% / management remainder. atNorth reports new hyperscale contracts since signing | O / H | S2, S3, S6, S14, S15 |
| 2 Sep 2026 | Equinix issues a corrected version of the completion release through PR Newswire. The content of the correction is **U** | O / L | S2a |
| 4 Sep 2026 | Public version of EC decision released | O / M | S10 |
| 22 Sep 2026 | Publication in the Official Journal | O / M | S10, S11 |

**Signing to close:** 187 days (**D**). The EU review took 36 days from notification to decision (**D**). Other clearances (Nordic FDI screening, Icelandic competition authority) are **U**.

### 2.2 Transaction structure

| Item | At signing (27 Feb 2026) | At close (2 Sep 2026) | Label / Conf. | Source |
|---|---|---|---|---|
| Enterprise value | US$4.0bn | US$4.0bn (restated in close release) | O / H | S1, S2 |
| CPP Investments | ~60%, ~US$1.6bn, "controlling interest" | ~51%, US$1.3bn, "controlling stake" | O / H | S1, S2, S15 |
| Equinix | ~40%, up to US$963m (commitment letter) | ~34%, US$895m | O / M (963), O / H (895) | S8, S2 |
| Partners Group (seller) | Exit | ~10%, ~US$260m reinvested | O / H | S15 |
| Management / internal rollover | Not specified | "Substantial portion" rolled; residual ~5% | O (qualitative) / D (5%) | S2, S15 |
| Implied 100% equity value | CPP: 1.6 / 0.60 = **US$2.67bn**. Equinix: 0.963 / 0.40 = **US$2.41bn** | CPP: 1.3 / 0.51 = **US$2.55bn**. EQIX: 0.895 / 0.34 = **US$2.63bn**. PG: 0.26 / 0.10 = **US$2.60bn** | D | arithmetic |
| Implied net debt and other claims | EV 4.0 less equity ~2.4 to 2.7 = **~US$1.3bn to US$1.6bn** | EV 4.0 less ~2.6 = **~US$1.4bn** | D (percentages are rounded "c." figures) | arithmetic |
| Change in Equinix cheque | n/a | 963 less 895 = **US$68m lower**; stake 40% to 34% | D | arithmetic |
| Financing | €3.6bn "provisionally agreed" | €3.6bn (US$4.1bn to US$4.2bn) underwritten by European and Canadian lenders, covering the transaction plus growth capex | O / M | S1, S2, S14 |
| Undrawn growth debt | U | **I:** a package of ~US$4.1bn against ~US$1.4bn implied acquisition debt suggests a large delayed-draw or capex facility. This is unverified | I | derived from above |
| Control | CPP "controlling interest" | CPP "controlling stake". EC treats it as **joint control CPPIB + Equinix** | O / H | S2, S10 |
| Operating model | Not specified | "Continue to operate independently under the atNorth brand" | O / H | S2, S3 |
| Equinix capacity lease / offtake | Not disclosed | Not disclosed | U | none found |
| Equinix accounting | n/a | **I:** equity method, given ~34% ownership and joint control. The Q3 2026 10-Q (due ~late Oct 2026) should confirm | I | S8, S25 pattern |
| Equinix share as % of 2026 capex guide (US$5bn to US$6bn) | n/a | 895 / 5,000 to 6,000 = **~15% to 18%** | D | S18 |
| EV per secured MW | 4.0bn / 1,000 MW = **~US$4.0m per secured MW** (secured power, not built IT load) | same | D | S16 |
| EV per pipeline MW | 4.0bn / 800 MW = **~US$5.0m per pipeline MW** (excludes build capex) | same | D | S17 |

**Why the cap table changed (O / I split).** Partners Group's reinvestment is the observed cause (**O**). Whether Equinix *chose* to cut its cheque, or was diluted pro rata to make room for Partners Group, is **U**. Pro-rata dilution of 60/40 by a 10% entrant plus a ~5% rollover would give ~51/34. The observed split matches that exactly (**D**). This points to mechanical dilution rather than an Equinix decision to shrink its stake (**I**, moderately strong).

### 2.3 atNorth assets, pipeline and positioning

| Dimension | Evidence | Label / Conf. | Source |
|---|---|---|---|
| Operating sites | "Eight operational data centres" across the Nordics at close. Named operating campuses include ICE01 to ICE03 (Iceland), SWE01 Stockholm (opened Mar 2022) and Finnish sites. A full site list with MW is **U** | O / M; site MW U | S2, S21, S22 |
| Secured power | 1 GW secured | O / M | S16, S24 |
| Pipeline | ~800 MW online over ~5 years (Equinix wording). atNorth-announced mega sites: **Varde, Denmark** (174 ha, 250 MW initial, "several hundred" more); **Myllykoski/Kouvola, Finland** (45 ha phase 1, 180 MW); **Sollefteå, Sweden** (30 ha, 200 MW initial); **Haugaland, Norway** (36 ha, 120 MW rising to 350 MW, power 2028); SWE02 Stockholm 30 MW (Q4 2027) | O / M | S17, S20, S21, S22 |
| Pipeline change between signing and close | Norway site added (Jun 2026); new hyperscale contracts secured (counterparties **U**) | O / M | S2, S20 |
| Customers | Crusoe, Advania, RVX, DNV, Opera, BNP Paribas, Tomorrow.io; colocation partnerships with Nokia and 6G AI Sweden | O / L (company marketing, date-sensitive) | S23, S61 |
| Product focus | "High-density colocation and built-to-suit" for enterprise, hyperscale and AI/HPC | O / H | S1, S2 |
| Cooling / sustainability | Heat reuse (Hringvarmi microgreens pilot at ICE03; Vesforbrænding in Denmark); renewable Nordic grids | O / M | S23 |
| Competitive overlap with Equinix | EC: "different focuses in the market" | O / H | S12 |
| Equinix's Nordic footprint (for comparison) | Retail IBXs in Helsinki (HE3 to HE7), Stockholm, Oslo, Copenhagen. €32m and later €180m Finnish investment programmes | O / M | S59 |

### 2.4 Why a minority/platform stake plus (possible) capacity access, and not the alternatives?

**What the parties explicitly said (O):**
- Equinix: the deal "enhance[s] our position in the Nordics" and gives "access to an installed and active development pipeline of approximately 800 megawatts" (S17). It is "immediately accretive to AFFO per share" (S17).
- Equinix Nordics MD: it will "strengthen our ability to support customers expanding digital and AI deployments", and "organisations need infrastructure that brings together data, clouds, networks and inference services" (S24; secondary, L).
- CPP: the deal "builds on CPP Investments' global experience in data center investing" and "underscores the strategic importance of the Nordics as a leading hub for AI-ready digital infrastructure" (S2, S6).
- Joint release: Equinix brings "complementary digital infrastructure expertise and global customer relationships"; atNorth runs independently under its brand (S2, S3).
- **Nobody has publicly said why Equinix took a minority stake rather than control, or why it chose this over xScale or a lease.** (U)

**What the transaction facts strongly support (D):**
- **Time to capacity.** atNorth came with 8 live sites, 1 GW secured power, permitted land in five countries and a delivery team. Greenfield (organic or xScale) would have to acquire and permit land, reserve grid and staff up. Haugaland alone shows a ~2-year gap from land to power (2026 to 2028). So the deal buys roughly a multi-year head start on a 1 GW position. This is *derived* from the asset facts. Equinix has not said it.
- **Capital efficiency.** Equinix's ~US$895m buys an economic share of a US$4bn EV platform plus a €3.6bn growth financing package. Less than one-fifth of one year's capex buys joint control of a 1 GW platform (**D**, from S2, S18).
- **Governance.** A ~34% stake with joint control (EC finding) gives Equinix veto-level influence over strategic decisions without consolidation. This matches the xScale governance pattern (both partners consent to major decisions; S25).
- **Different product.** The EC found different market focuses, so atNorth is not a direct substitute for Equinix retail IBXs. That makes a separately branded, separately run platform consistent with protecting Equinix's retail pricing and model (**D** from S12, S2).

**Hypotheses (I, not established):**
- *Versus outright control:* consolidating a 1 GW development platform would put large capex and project debt on Equinix's balance sheet and dilute retail-weighted metrics (margin, AFFO/share). CPP's appetite for control lets Equinix hold a strategic seat at lower balance-sheet cost. Evidence consistent: the "accretive to AFFO/share" framing (S17) and the priority on investment-grade metrics (S57). Direct evidence of this motive: none.
- *Versus organic build:* Nordic mega-site power and permitting are scarce at scale even where energy is cheap. Equinix had no disclosed Nordic hyperscale land or power. Evidence of a *Nordic-specific* Equinix constraint: none (Section 6).
- *Versus xScale JV:* xScale is a greenfield vehicle and has no Nordic presence. Its partners (GIC, PGIM, CPP) operate by region. Whether GIC's EMEA JV holds any right of first offer that would complicate a Nordic xScale with another partner is **U**. xScale serves a small set of named hyperscalers. atNorth also serves AI/HPC neoclouds and enterprises (Crusoe, BNP Paribas), a segment xScale has not been positioned for (**I**).
- *Versus simple lease:* a lease gives capacity but no upside, no pipeline control and no influence over what gets built. The equity stake captures development margin and platform value (**I**). Whether Equinix *also* has a lease or referral agreement is **U**. That is the single most important open question.
- *Versus asset acquisition:* buying individual sites would not transfer the team, the land bank or the power queue positions across five countries, and each site would need its own diligence and consents (**I**).

---

## 3. xScale JV map (as of 27 Sep 2026)

Facility-level MW and status after 2024 are only partly disclosed. Cells marked U were not established from sources reachable in this environment.

| # | Vehicle (10-K label where known) | Partner(s) and ownership | Geography / metros | Announced commitment | Facilities (as disclosed) | MW (planned or operating) | Status | Named hyperscaler | Debt | Equinix manages? | Could it solve a "platform acquisition" problem? | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | EMEA JV (formed 2019) | GIC 80% / EQIX 20% | London (x2), Frankfurt (x2), Paris, Amsterdam initially | >US$1.0bn initial | LD11x, LD13x, PA8x, PA9x, FR9x, AM7x (initial six, names partly **I**) | PA8x 14 MW; FR9x 18 MW; total U | Operating | U | Project-level; terms U | Yes (fees) | No team or land acquisition. Greenfield on Equinix-sourced sites | S26 |
| 2 | Asia-Pacific 1 JV (Japan, 2020) | GIC 80% / EQIX 20% | Tokyo (x2), Osaka | >US$1.0bn | 3 initial facilities | 138 MW (initial three) | Operating | U | U | Yes | Same limits | S27 |
| 3 | 2021 expansion (EMEA 2, AMER 1, AP expansions) | GIC 80% / EQIX 20% (I, same template) | EMEA additions (Dublin, Warsaw, Milan, Madrid per later list); **São Paulo (x3), Mexico City (x1)** | +US$3.9bn, taking xScale to >US$6.9bn and 32 facilities | 32 facilities portfolio-wide | U | Mixed | U | U | Yes | Same limits | S28, S33 |
| 4 | Korea JV (Jan 2022) | GIC / EQIX (20% I) | Seoul (x2) | US$525m | 2 facilities | U | Operating or under construction | U | U | Yes | Same limits | S29 |
| 5 | PGIM Sydney JV (closed Mar 2022) | PGIM 80% / EQIX 20% | Sydney | US$575m | SY9x, SY10x | >55 MW total; SY9x 28 MW full build | Operating | U | U | Yes | Same limits | S30 |
| 6 | PGIM Silicon Valley JV (Apr 2024) | PGIM 80% / EQIX 20% | San Jose (Great Oaks campus) | US$600m | SV12x | >28 MW | Reported energised Jan 2026 (L) | U | U | Yes | Same limits; retail campus adjacency | S31, S60 |
| 7 | US xScale JV (Oct 2024) | GIC 37.5% / CPP 37.5% / EQIX 25% | US multi-campus: Atlanta (Hampton, 262 acres, 240 MW, AT10x to AT13x), Dallas; London and Chicago 2025 land partly earmarked for xScale | >US$15bn investable, including leverage | Multiple >100 MW campuses | >1.5 GW target | Hampton anchor leasing from mid-2026. Q2 2026: 134 MW leases closed including Hampton, ~US$120m non-recurring fees (L) | U (not named) | "Leverage debt to increase investable capital" | Yes | Only partly: capital at scale, but still greenfield with land and power sourced by Equinix | S32, S34, S18 |
| 8 | xScale portfolio (aggregate) | as above | 13 markets | >US$8bn pre-US JV | 35+ facilities (2024); 21 operational in 13 markets (Analyst Day 2025) | 725+ MW at full build (2024). Leased: ">400 MW" (Q4 2025 call) vs "750+ MW" (Analyst Day kiosk). **Conflict, unresolved** | n/a | U | n/a | Yes | n/a | S32, S33, S19 |

**Structural read (D):** Every xScale vehicle is (a) greenfield or build-to-suit, (b) on land Equinix sources, (c) operated by Equinix for fees, (d) partner-majority with shared consent rights, and (e) aimed at a small group of hyperscalers. None of them transfers an existing operating team, a multi-country permitted land bank, or a non-hyperscale AI/HPC customer base. atNorth differs on all three. **Nordic coverage: none disclosed.**

---

## 4. Transaction history 2015 to 27 Sep 2026

| Date (close) | Target / counterparty | Geography | Type | Value | Ownership | Assets / capabilities | Installed customers | Power / land | Network assets | Stated rationale (O) | Alternative it appears to have beaten (I) | Post-close outcome | Src |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Nov/Dec 2015 | Bit-isle | Japan (Tokyo, Osaka) | Whole company | ¥33.2bn (~US$275m) | 100% (97% tender then squeeze-out) | Colo DCs | Yes (U count) | U | U | Expand Japan footprint | Organic Tokyo build | Non-DC businesses sold (L). DCs integrated | S39 |
| 15 Jan 2016 | TelecityGroup | UK, NL, DE, Nordics, Ireland, others | Whole company | ~US$3.8bn (£2.6bn) | 100% | ~34 DCs, incl. Nordic and Dublin sites | Large interconnection base | U | IXPs and peering density | Scale in EMEA interconnection hubs | Organic EMEA roll-out | EC-mandated divestment of 8 sites (below) | S38 |
| 5 Jul 2016 | Digital Realty (buyer) | London, Amsterdam, Frankfurt | **Disposal** (regulatory remedy) | US$874m agreed; US$827m at close FX | 0% | 8 DCs | n/a | n/a | n/a | EC condition for Telecity | n/a | Completed | S38 |
| 1 May 2017 | Verizon colocation business | US, Brazil, Colombia | Asset portfolio (business) | ~US$3.6bn | 100% | 29 DC buildings incl. NAP of the Americas (Miami) | Yes (U count) | U | Latin America cable-landing gateway (Miami) | Interconnection and Americas reach (M) | Organic Miami / LatAm build | Integrated | S40 |
| 9 Oct 2017 | Itconic (incl. CloudMas) | Spain, Portugal | Whole company | €220.5m (US$259m) | 100% | 5 DCs (Madrid x2, Barcelona, Seville, Lisbon) + cloud services | Yes | U | U | Iberia entry / expansion | Greenfield Iberia | Integrated. Madrid later an xScale market | S41 |
| 6 Oct 2017 | Zenium Istanbul | Turkey | Asset (single DC) | ~US$92m | 100% | IL2 DC | Some | U | U | Capacity in Istanbul (Equinix already had IL1) | **Organic build** | Integrated | S41 |
| 3 Apr 2018 | Infomart Dallas (from ASB) | Dallas | Asset (building incl. tenants) | US$800m (debt + cash) | 100% | Major interconnection building where Equinix was a tenant | Yes (building tenants) | Expansion space | Carrier hotel | Secure the hub and room to grow | Continue leasing / build elsewhere | Integrated | S42 |
| 18 Apr 2018 | Metronode (from OTPP) | Australia (6 metros) | Whole company | A$1.034bn (US$805m) | 100% | 10 DCs | Government / enterprise | U | Limited (I) | "Market leader in Australia" | Organic multi-metro build | Integrated | S43 |
| 18 Apr 2019 | Switch Datacenters AMS1 | Amsterdam | Asset (single DC) | €30m (US$34m) | 100% | AM11 near SE Amsterdam campus | Some | Powered building in constrained metro (I) | U | "Help meet growing demand" | **Organic build** | Integrated | S44 |
| Oct 2019 (formation) | xScale EMEA JV with GIC | Europe | JV + **partial disposal** of hyperscale assets into JV | >US$1.0bn | 20% | See Section 3 | n/a | n/a | n/a | Serve hyperscale core deployments | Balance-sheet hyperscale build | Expanded 2021 | S26 |
| 9 Jan 2020 | Axtel (3 DCs) | Mexico City, Monterrey | Asset portfolio | US$175m | 100% | 3 DCs | Yes | U | U | Mexico entry | Greenfield Mexico | Mexico City later an xScale market | S45 |
| 2 Mar 2020 | Packet Host | Global (software) | Capability (whole company) | US$290.3m purchase consideration + retention equity | 100% | Bare-metal automation (Equinix Metal) | Developers / SaaS | n/a | n/a | "Provision interconnected bare metal... in minutes instead of months" | Build internally / partner | **Sunset:** platform off 30 Jun 2026. ~1.25% of revenue per CFO (L) | S46, S47 |
| 2H 2020 | xScale Japan JV (GIC) | Tokyo, Osaka | JV | >US$1.0bn | 20% | 3 DCs, 138 MW | n/a | n/a | n/a | Hyperscale in Japan | Balance-sheet build | Operating | S27 |
| 1 Oct 2020 | Bell Canada (13 DC sites / 25 facilities) | Canada | Asset portfolio + strategic partnership | US$780m | 100% | ~1.2m gross sq ft | **600+ customers, 500+ new to Equinix** | U | Bell partnership for joint offers | Canada leadership plus channel partnership | Organic Canada build | Integrated. Toronto land added 2025 | S48 |
| 1 Sep 2021 | GPX Global Systems (India ops) | Mumbai | Asset portfolio (2 DCs) | US$161m (~15x projected EBITDA at full utilisation) | 100% | 1,350 cabinets + 500 expansion | Cloud providers, all local carriers, 130 ISPs, 4 IXs | Expansion room | IX density | "Extending Platform Equinix to India has long been a strategic objective" | Greenfield Mumbai | Integrated. Organic Mumbai builds followed (L) | S49 |
| Jun 2021 | xScale expansion (GIC) | EMEA, Americas, APAC | JV expansion | +US$3.9bn (total >US$6.9bn) | 20% | 32 facilities | n/a | n/a | n/a | Scale hyperscale programme | Balance-sheet build | Operating / building | S28 |
| Jan 2022 | xScale Korea (GIC) | Seoul | JV | US$525m | 20% (I) | 2 DCs | n/a | n/a | n/a | n/a | n/a | U | S29 |
| Mar 2022 | xScale Sydney (PGIM) | Sydney | JV | US$575m | 20% | SY9x, SY10x (>55 MW) | n/a | n/a | n/a | n/a | n/a | SY9x open | S30 |
| 5 Apr 2022 | MainOne | Nigeria, Ghana, Côte d'Ivoire | Whole company | US$320m EV | 100% | 3 DCs + **7,000 km Portugal to West Africa subsea cable** | Yes | Land for expansion (U) | Subsea cable and landing stations | "Leading African carrier-neutral digital infrastructure company" | Greenfield Lagos | Integrated. Johannesburg land 2025 is organic | S50 |
| 2 May / 1 Aug 2022 | Entel (Chile x3, Peru x1) | Santiago, Lima | Asset portfolio | ~US$705m EV (Chile US$638.3m; Peru US$80.3m) | 100% | Network-dense Santiago DC by Entel Tower; largest multi-tenant Santiago DC; DR site | Entel and others | U | Adjacent to carrier HQ | Chile and Peru entry | Greenfield | Integrated | S51 |
| Apr 2024 | xScale Silicon Valley (PGIM) | San Jose | JV | US$600m | 20% | SV12x (>28 MW) | n/a | n/a | n/a | First US xScale | Balance-sheet build | Reported energised Jan 2026 (L) | S31 |
| 2024 to 2025 | Land: Atlanta (Hampton, 262 acres), Dallas; 2025: Amsterdam, Chicago, Johannesburg, London, Toronto (~900 MW) | Multi | **Land acquisition** | U | 100% then contributed to JV where xScale | Land for ~1 GW+ | n/a | Power "contracted or high confidence" | n/a | Double capacity by 2029 | Buy operating platforms | Hampton leasing from mid-2026 | S34, S35, S36, S37 |
| Oct 2024 (signed) | US xScale JV (GIC, CPP) | US | JV | >US$15bn | 25% | >1.5 GW | n/a | n/a | n/a | "Capital-efficient" hyperscale | Balance-sheet build | Hampton anchor leases 2026 | S32 |
| 3 Jun 2025 | TIM NextGen DC (Total Information Management) | Philippines (Makati, Cavite) | Asset portfolio (share purchase) | US$183m | 100% | MN1 to MN3, >1,000 cabinets | Yes | U | **4 of Manila's main IXs** | Philippines entry, SE Asia expansion | Greenfield Manila | Integrated | S52 |
| 3 Nov 2025 | BT's data centre business in Ireland | Dublin | Asset / business | €59m | 100% | 5th Dublin DC | BT and others | **Existing grid connection in a moratorium metro (I)** | U | Grow Dublin portfolio | Organic Dublin build (blocked; see Section 6) | Integrated | S53 |
| 2 Sep 2026 | atNorth | Nordics | **Minority/platform co-investment (joint control)** | US$4.0bn EV; EQIX US$895m | ~34% | 8 DCs, 1 GW secured, ~800 MW pipeline | Enterprise, hyperscale, AI/HPC | Mega-site land in 5 countries | U | See Section 2.4 | Organic / xScale / lease / control | Just closed | S1 to S17 |

Not captured, so **U**: Nimbo (2015 consultancy), small land buys before 2024, and any disposals of non-core Bit-isle units, which need 10-K confirmation.

---

## 5. Equinix decision criteria (official wording)

| Criterion | Short extract | Context | Label / Conf. | Source |
|---|---|---|---|---|
| New-market entry | "Extending Platform Equinix to India has long been a strategic objective" | GPX, 2020/21 (CEO Meyers) | O / M | S49 |
| Entry valuation discipline | ~15x projected EBITDA at full utilisation | GPX | O / M | S49 |
| Installed customers | "more than 600 customers... over 500 new to Equinix" | Bell, 2020 | O / H | S48 |
| Partnership / channel | Bell partnership delivering "joint offers" | Bell, 2020 | O / M | S48 |
| Network / ecosystem adjacency | Santiago site is "network-dense... adjacent to the Entel Tower" | Entel, 2022 | O / M | S51 |
| Network / ecosystem adjacency | Manila sites host "four of the main internet exchanges" | TIM, 2025 | O / M | S52 |
| Network assets | MainOne's subsea cable; aim to be "a leading African carrier-neutral digital infrastructure company" | MainOne, 2022 | O / M | S50 |
| Developer / engineering capability | Provision "interconnected bare metal resources in minutes instead of months" | Packet, 2020 | O / M | S46 |
| Capability retreat | Metal sunset to focus on Fabric, Network Edge, managed services | 2024 to 2026 | O / M | S47 |
| Hyperscale adjacency | xScale lets hyperscalers "add core deployments to their existing access point footprints at Equinix IBX" | US JV, 2024 | O / H | S32 |
| JV vs balance sheet | xScale as "capital-efficient JVs"; JV "will leverage debt to increase total investable capital" | Q4 2025 call; US JV release | O / M | S19, S32 |
| JV governance | Major decisions need consent of both Equinix and partner. Equinix earns management fees | 10-K FY2025 | O / M | S25 |
| Powered land / power | Of ~3 GW planned on controlled land, Equinix has "either contracted power or has a high degree of confidence" it will | Q3 2025 | O / M (paraphrase) | S36 |
| Power pipeline | 1 GW secured, 2 GW filed, 4 GW pipeline | Analyst Day 2025 | O / L | S35 |
| Supply-chain risk | Pre-purchases equipment. "relationships, process, operation, and our balance sheet where necessary" | Q3 2025 (Fox-Martin) | O / M | S36 |
| Investment discipline | "disciplined in where we invest" | Fox-Martin | O / L | S57 |
| Capital priorities | Investment grade; AFFO/share growth; M&A "opportunistic" | Analyst Day summary | O / L (secondary paraphrase) | S57 |
| Time to revenue / returns | Stabilised assets ~27% cash-on-cash yield | Q2 2026 | O / L | S18 |
| AI density | Over half of top-25 Q4 2025 retail deals were HPC/AI; ~60% of largest deals AI-driven | Q4 2025 | O / M | S19, S37 |
| Inorganic platform (atNorth) | "access to an installed and active development pipeline"; "immediately accretive to AFFO per share" | Q1 2026 | O / M | S17 |
| Organic scale | Capex US$5bn to US$7bn a year through 2029 | Q2 2026 | O / M | S18 |

**Gap (U):** no Equinix statement found setting explicit buy-vs-build hurdles (IRR thresholds, payback, time-to-FCF breakeven). Nor did one explain minority versus control for atNorth.

---

## 6. Metro / power constraint evidence (Equinix-specific, 2024 to 2026)

| Metro | Constraint type | Evidence | Equinix-specific? | Label / Conf. | Source |
|---|---|---|---|---|---|
| Dublin | Grid moratorium; permitting | EirGrid de facto moratorium on new DC connections to ~2028. **An Bord Pleanála refused Equinix's appeal for a gas-powered (on-site generation) DC (Feb 2025).** Equinix filed a response to the CRU 2024 connection-policy consultation. Hydrogen backup trial (Jun 2026) | Yes | O / M | S54, S55, S58 |
| Dublin | Response via M&A | BT Ireland DC business bought (€59m, closed Nov 2025) | Yes (the deal). Link to constraint is **I** | O (deal) / I (motive) | S53 |
| Singapore | Regulatory capacity allocation | SG6 (20 MW, US$260m+, opening Q1 2027) "awarded as part of Singapore's pilot DC-CFA" | Yes | O / M | S56 |
| Frankfurt, Amsterdam, Ashburn | Power scarcity | Named as constrained markets. Equinix prioritises projects "where energy delivery is on track" | Yes (management commentary via press) | O / L | S57 |
| Ashburn | Grid / pipeline | Building there because projects "have been in development plans for years" | Yes | O / L | S57 |
| Silicon Valley | Grid capacity | SV12x reportedly energised Jan 2026 after a July 2025 City of San José power-delivery agreement. Santa Clara substations 2028 to 2029 | Partly (source quality weak) | O / L | S60 |
| Global | Equipment / supply chain | Pre-purchasing equipment; moving it between sites | Yes | O / M | S36 |
| Dubai (DX3) | Construction / geopolitical | Project "impacted by geopolitical conflict" | Yes (not power) | O / M | S17 |
| Amsterdam | Response via M&A | AM11 (Switch AMS1) purchase, 2019. Link to constraint is **I** | Deal yes | O / I | S44 |
| **Nordics (Helsinki, Stockholm, Oslo, Copenhagen)** | Any | **No Equinix-specific constraint evidence found.** Equinix was investing organically in Helsinki (€32m, then €180m) | n/a | U | S59 |

**Implication (D):** the metros with Equinix-specific constraint evidence are FLAP-D core and Singapore. The atNorth investment sits in a region with no documented Equinix constraint. Any claim that atNorth was bought to "solve a power shortage" is therefore about **AI-scale capacity Equinix does not build**, not about Equinix's existing Nordic retail sites. That is **I**.

---

## 7. Growth-mechanism comparison

| Mechanism | Problem it solves | Evidence | Limits shown by evidence |
|---|---|---|---|
| **Organic IBX build** | Retail and interconnection capacity in metros where Equinix already has ecosystems and land | ~3 GW developable; 52 to 58 major projects; US$5bn to US$7bn a year capex (S18, S35) | Blocked or slowed by grid and permitting (Dublin refusal; FLAP-D) (S54, S57) |
| **xScale JV** | Hyperscale core capacity next to Equinix ecosystems, funded mostly by partner equity and JV debt | 20 to 25% EQIX stakes; >US$15bn US JV; Equinix operates for fees (S25, S32) | Greenfield only; Equinix must source land and power; limited to regions with partner and land; no Nordic presence (S33) |
| **Whole-company acquisition** | Market entry with installed customers, IX density, licences and staff | Bell, GPX, MainOne, Entel, TIM, Axtel, Itconic, Metronode, Bit-isle, Telecity (Section 4) | Regulatory remedies (Telecity to DLR) (S38). Capability buys can fail (Packet) (S47) |
| **Minority / platform investment** | Exposure to a *running* development platform with power and pipeline, sharing control with a financial sponsor | atNorth ~34%, joint control, independent brand (S2, S10) | Only one case. Economics, rights and any commercial link undisclosed (U) |
| **Asset / land acquisition** | Powered sites or buildings in constrained or strategic metros | Infomart, Zenium, AM11, BT Ireland; 2024 to 2025 land (S42, S44, S53, S35) | Land still needs power and permits. Single assets bring no platform |
| **Lease / offtake** | Short-term capacity without capex | No material Equinix offtake disclosed. Equinix leases many IBX buildings (10-K; not quantified here) | No evidence Equinix uses third-party wholesale offtake as a growth route (U) |
| **Partnership** | Channel and customer access without ownership | Bell partnership (S48); Entel adjacency (S51); power partnerships incl. nuclear (S35) | Partnerships sit alongside acquisitions here, not in place of them |
| **Do nothing** | Protect returns and balance sheet | Priority on investment grade and AFFO/share (S57); Metal exit (S47) | Unobservable in filings except through exits and walk-aways (U) |

---

## 8. Independent challenge: the scarce-position hypothesis

> *Hypothesis:* acquisitions are most valuable to Equinix when they secure a scarce strategic position (power, ecosystem, customers, market entry or capability) rather than generic MW, because xScale and organic build already supply hyperscale capacity.

### 8.1 Evidence supporting it
- **Market entry plus ecosystem dominates the record.** GPX (4 IXs, 130 ISPs), TIM (4 IXs), Entel (network-dense Santiago), MainOne (subsea cable), Bell (500+ new customers), Axtel, Itconic and Bit-isle all bought positions that organic greenfield could not quickly copy (S48 to S52).
- **Constrained-metro asset buys.** BT Ireland in moratorium-era Dublin and AM11 in Amsterdam fit "scarce power" (S53, S44, S54). The motive is **I**.
- **xScale does cover generic hyperscale MW.** Equinix routes hyperscale MW through partner-majority JVs rather than buying hyperscale platforms. The US JV (>1.5 GW) and Hampton (240 MW) show the organic/JV route working at scale (S32, S34).
- **atNorth came with scarce inputs.** It had 1 GW secured power, permitted mega-site land in five countries, and a team with AI/HPC customers. These inputs take years to replicate, and Equinix had none of them in the Nordics (S16, S20).

### 8.2 Evidence against it (counterexamples)
- **Zenium Istanbul (2017, US$92m).** Equinix already had IL1, so this was **built capacity in a metro it already served**. It is the closest to buying generic MW (S41).
- **Switch AMS1 (2019, €30m).** The stated reason was capacity: to "help meet growing demand" near an existing campus. It is generic MW unless Amsterdam's power scarcity is itself the "scarce position". That reading risks making the hypothesis unfalsifiable (S44).
- **Metronode (2018, A$1.0bn).** Ten government/enterprise DCs in a market where Equinix was already present. The framing was scale ("market leader in Australia"). It carried less interconnection density than Equinix's own Sydney assets (**I**) (S43).
- **Verizon (2017, US$3.6bn).** It included NAP of the Americas, a scarce ecosystem. But much of the 29-building portfolio was enterprise-colocation capacity. It is a mixed case.
- **atNorth itself partly contradicts the hypothesis.** The EC found atNorth and Equinix have "different focuses". atNorth sells high-density and built-to-suit capacity: that is MW, not ecosystem (S12). Equinix's own words stress "access to... ~800 megawatts" (S17). If the "scarce position" is just *power*, then almost any large DC platform qualifies. At that point the hypothesis and "buying MW" become the same thing.
- **Packet shows capability buys can fail.** Scarce capability did not create durable value. The platform closed after ~6 years (S47). This is not a counterexample to *seeking* scarce positions, but it undercuts the claim that such buys are "most valuable".
- **xScale was not a substitute everywhere.** Equinix had no US xScale until 2024 and has no Nordic xScale. In those gaps, "xScale already provides an alternative route" was not true when the decision was made (S31, S33).

### 8.3 Unresolved cases
- **atNorth:** was it a scarce-power buy, a capital-efficient AI MW buy, or an option on a future platform (for example, a right to buy CPP's stake later)? Motive disclosure is **U**.
- **Infomart:** was it buying ecosystem (carrier hotel) or protecting against landlord risk?
- **BT Ireland:** the motive (power access or customers) was not stated in reachable sources.

### 8.4 What would discriminate between interpretations
1. **atNorth shareholder agreement terms.** Reserved matters, call/put or ROFR on CPP's stake, and non-compete or exclusivity in the Nordics. A call option would suggest a staged path to control. Plain vetoes suggest a financial-strategic hybrid.
2. **Any Equinix–atNorth commercial agreement.** Lease, referral, Fabric on-ramp or interconnection deployment. Its existence would support "customer / AI capacity access". Its absence would support "financial exposure to Nordic AI MW".
3. **Equinix Q3 2026 10-Q** (late Oct 2026). Equity-method carrying value, basis difference, any guarantees, and whether atNorth sits in the "VIE Joint Ventures" category with xScale.
4. **atNorth operating MW and contracted MW at close.** These split paid-for built capacity from option value in the pipeline.
5. **Buy-vs-build hurdle disclosures**, for example from investor-day Q&A on post-close IRR for Bell, GPX, Entel and Metronode compared with organic yields (~27% stabilised cash-on-cash; S18).
6. **Equinix Nordic retail constraint evidence** (Helsinki, Stockholm). Its presence would support "scarce power". Its absence supports "new product and segment".
7. **Whether Equinix bid for control or was capped by CPP**, for example in auction reporting from the FT or Bloomberg. Neither was reachable here.

---

## 9. Evidence gaps (prioritised)

| Priority | Gap | Why it matters | Where to look |
|---|---|---|---|
| 1 | Equinix–atNorth commercial / capacity agreement | Core to the "minority plus capacity access" thesis | 8-K / 10-Q Q3 2026; atNorth and Equinix releases; call Q&A |
| 2 | Shareholder agreement: reserved matters, options, exclusivity | Separates strategic option from financial stake | EC decision text M.12394 (public version 4 Sep 2026); 10-Q |
| 3 | atNorth operating MW, contracted MW, revenue, EBITDA | Valuation (EV/EBITDA, EV per built MW) and "immediately accretive" test | Lender materials, ratings reports, Partners Group reporting |
| 4 | Content of the 2 Sep 2026 PR Newswire correction | May change a stated fact (ownership, amounts) | PR Newswire release 302867672 vs 302867738 |
| 5 | Financing terms (lenders, tenor, DDTL size, leverage) | Separates acquisition debt from growth capex | Loan-market press; atNorth statements |
| 6 | Nordic regulatory approvals beyond the EU (FDI screening) | Timeline completeness | National regulators |
| 7 | xScale leased MW: ">400 MW" vs "750+ MW" | xScale map accuracy | Q4 2025 and Q2 2026 presentations; FY2025 10-K |
| 8 | xScale facility-level MW for 2021 to 2026 builds | Workstream 1 completeness | Equinix quarterly presentations (xScale appendix) |
| 9 | GIC exclusivity / ROFO in EMEA xScale | Whether a Nordic xScale was even available | JV agreements (exhibits), 10-K |
| 10 | Post-close performance of Bell, GPX, Entel, Metronode | Tests whether scarce-position buys outperform | Equinix metro disclosures; investor day |

---

## 10. Source register

P = primary, S = secondary. All accessed through search extraction (see Section 0).

| ID | Title | Publisher | Date | URL | P/S | Claims supported | Conf. |
|---|---|---|---|---|---|---|---|
| S1 | CPP Investments and Equinix to Acquire atNorth for US$4 Billion | Equinix (newsroom; 8-K exhibit) | 27 Feb 2026 | https://newsroom.equinix.com/2026-02-27-CPP-Investments-and-Equinix-to-Acquire-atNorth-for-US-4-Billion ; https://www.sec.gov/Archives/edgar/data/1101239/000110123926000051/a2026-geminipressreleasexf.htm | P | EV, 60/40, US$1.6bn, financing | M |
| S2 | CPP Investments and Equinix Complete atNorth Acquisition... | Equinix | 2 Sep 2026 | https://newsroom.equinix.com/2026-09-02-CPP-Investments-and-Equinix-Complete-atNorth-Acquisition-to-Support-Growth-of-Leading-Nordic-Data-Center-Platform | P | Close, 51/34/10, amounts, brand independence, 8 DCs | M |
| S2a | /C O R R E C T I O N -- Equinix, Inc./ | PR Newswire | 2 Sep 2026 | https://www.prnewswire.com/news-releases/cpp-investments-and-equinix-complete-atnorth-acquisition-to-support-growth-of-leading-nordic-data-center-platform-302867672.html | P | Existence of correction | L |
| S3 | CPP Investments and Equinix complete atNorth acquisition | atNorth | 2 Sep 2026 | https://www.atnorth.com/news/cpp-investments-and-equinix-complete-atnorth-acquisition-to-support-growth-of-leading-nordic-data-center-platform/ | P | New hyperscale contracts, Norway, independence | M |
| S4 | CPP Investments and Equinix join forces to acquire atNorth | atNorth | 27 Feb 2026 | https://www.atnorth.com/news/cpp-investments-and-equinix-join-forces-to-acquire-atnorth-to-further-accelerate-growth-in-the-nordics/ | P | Signing, CEO quote | M |
| S5 | CPP Investments and Equinix to Acquire atNorth for US$4 Billion | CPP Investments | 27 Feb 2026 | https://www.cppinvestments.com/newsroom/cpp-investments-and-equinix-to-acquire-atnorth-for-us4-billion/ | P | CPP stake and rationale | M |
| S6 | CPP Investments and Equinix Complete atNorth Acquisition | CPP Investments | 2 Sep 2026 | https://www.cppinvestments.com/newsroom/cpp-investments-and-equinix-complete-atnorth-acquisition-to-support-growth-of-leading-nordic-data-center-platform/ | P | CPP rationale wording | M |
| S7 | Partners Group to sell atNorth for an EV of USD 4 billion | Partners Group | Feb 2026 | https://www.partnersgroup.com/en/news-and-views/press-releases/investment-news/detail?news_id=064d4e79-30b6-4500-9a08-f7a65686f860 | P | Seller, EV, 2022 entry | M |
| S8 | Equinix Form 10-Q, Q1 2026 | Equinix / SEC | 29 Apr 2026 | https://www.sec.gov/Archives/edgar/data/1101239/000110123926000091/eqix-20260331.htm | P | US$963m equity commitment letter, ~40% of CPP subsidiary | M |
| S9 | Equinix Form 10-Q, Q2 2026 | Equinix / SEC | Jul/Aug 2026 | https://www.sec.gov/Archives/edgar/data/0001101239/000110123926000147/eqix-20260630.htm | P | Pending-deal status (not independently read) | L |
| S10 | Case M.12394 CPPIB / Equinix / atNorth | European Commission | 6 Jul to 22 Sep 2026 | https://competition-cases.ec.europa.eu/cases/M.12394 | P | Joint control, dates, clearance | M |
| S11 | OJ notice CPPIB / EQUINIX / ATNORTH | EUR-Lex | 2026 | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ%3AC_202603797 | P | Notification | M |
| S12 | EU clears data centre takeover... | Brussels Times | Aug 2026 | https://www.brusselstimes.com/eu-affairs/2268553/eu-clears-data-centre-takeover-cites-no-competition-concerns-despite-market-shifts | S | "Different focuses", Phase I, colocation market | M |
| S13 | atNorth sold to Equinix and CPP Investments in $4.2bn deal | DCD | 27 Feb 2026 | https://www.datacenterdynamics.com/en/news/atnorth-sold-to-equinix-and-cpp-investments-in-42bn-deal/ | S | History (Advania, 2022 PG) | M |
| S14 | Equinix & CPP close acquisition of atNorth | DCD | Sep 2026 | https://www.datacenterdynamics.com/en/news/equinix-cpp-close-acquisition-of-atnorth/ | S | Final stakes, US$4.1bn financing | M |
| S15 | Partners Group reinvests in atNorth after sale to CPP Investments, Equinix | IPE Real Assets | Sep 2026 | https://realassets.ipe.com/news/partners-group-reinvests-in-atnorth-after-sale-to-cpp-investments-equinix/10138327.article | S | PG 10%, US$260m, secondaries strategy, rollover | M |
| S16 | Equinix acquires atNorth for $4bn to fast-track Europe hyperscale growth | Capacity Media | Feb/Sep 2026 | https://capacityglobal.com/news/equinix-cpp-purchase-atnorth-rapid-nordic-data-centre-growth/ | S | 1 GW secured, 800 MW 5-yr pipeline | M |
| S17 | Equinix (EQIX) Q1 2026 Earnings Transcript | The Motley Fool | 29 Apr 2026 | https://www.fool.com/earnings/call-transcripts/2026/04/29/equinix-eqix-q1-2026-earnings-transcript/ | S (transcript of P) | 800 MW, accretive, Dubai DX3 | M |
| S18 | Equinix Q2 2026 Earnings Call Transcript; Q2 results release | Motley Fool; Equinix | 29 Jul 2026 | https://www.fool.com/earnings/call-transcripts/2026/08/07/equinix-eqix-q2-2026-earnings-call-transcript/ ; https://investor.equinix.com/news-events/press-releases/detail/1114/equinix-reports-second-quarter-results-raises-2026 | P/S | Capex US$5bn to US$7bn, xScale leasing, 27% yield | L to M |
| S19 | Equinix (EQIX) Q4 2025 Earnings Transcript | The Motley Fool | 11 Feb 2026 | https://www.fool.com/earnings/call-transcripts/2026/02/11/equinix-eqix-q4-2025-earnings-transcript/ | S | "Capital-efficient JVs", >400 MW leased, AI deal share | M |
| S20 | atNorth expands to Norway with new mega site in Haugaland | atNorth | 3 Jun 2026 | https://www.atnorth.com/news/atnorth-expands-to-norway-with-new-mega-site-in-haugaland/ | P | NOR01 120 to 350 MW, power 2028 | M |
| S21 | Future Sites | atNorth | 2026 | https://www.atnorth.com/nordic-data-centers/future-sites/ | P | Varde, Myllykoski, Sollefteå, Tysvær | M |
| S22 | atNorth plans 30MW data center in Stockholm | DCD | 2025 | https://www.datacenterdynamics.com/en/news/northc-plans-30mw-data-center-in-stockholm-sweden/ | S | SWE02 30 MW Q4 2027 | M |
| S23 | atNorth expansion in Iceland & new heat reuse partnership | atNorth | 2024 | https://www.atnorth.com/news/atnorth-expansion-plans-and-heat-reuse-initiative/ | P | ICE02 +35 MW, ICE03 +16 MW, heat reuse, customers | M |
| S24 | Equinix Expands Nordic AI Footprint with US$4 Billion atNorth Acquisition | Converge Digest | 2026 | https://convergedigest.com/equinix-expands-nordic-ai-footprint-with-us4-billion-atnorth-acquisition/ | S | Equinix Nordics MD quote | L |
| S25 | Equinix Form 10-K FY2025 | Equinix / SEC | Feb 2026 | https://www.sec.gov/Archives/edgar/data/1101239/000110123926000032/eqix-20251231.htm | P | VIE JV list, shared control, management fees | M |
| S26 | Equinix and GIC Agree to Form JV... Europe; Complete Formation | Equinix | 1 Jul / 9 Oct 2019 | https://investor.equinix.com/news-events/press-releases/detail/158/equinix-and-gic-agree-to-form-joint-venture-to-develop-and ; https://investor.equinix.com/news-events/press-releases/detail/143/equinix-and-gic-complete-formation-of-greater-than-us1-0 | P | EMEA JV 80/20, six sites | M |
| S27 | Equinix and GIC to Form >US$1.0bn JV... Japan | Equinix | Apr 2020 | https://investor.equinix.com/news-events/press-releases/detail/113/equinix-and-gic-to-form-greater-than-us1-0-billion-joint | P | Japan JV, 138 MW | M |
| S28 | Equinix and GIC to Add $3.9B to Expand xScale | Equinix | 14 Jun 2021 | https://newsroom.equinix.com/2021-06-14-Equinix-and-GIC-to-Add-3-9B-to-Expand-xScale-Data-Center-Program | P | >US$6.9bn, 32 facilities, São Paulo, Mexico City | M |
| S29 | Equinix and GIC to Invest US$525 Million... Korea | Equinix | Jan 2022 | https://investor.equinix.com/news-events/press-releases/detail/13/equinix-and-gic-to-invest-us525-million-to-build | P | Seoul JV | M |
| S30 | Equinix and PGIM... US$575 Million JV... Australia | Equinix | 2021/22 | https://investor.equinix.com/news-events/press-releases/detail/31/equinix-and-pgim-real-estate-enter-into-a-us575-million-jv | P | Sydney 80/20, 55 MW | M |
| S31 | Equinix and PGIM... $600 Million JV for First xScale in the U.S. | Equinix | 15 Apr 2024 | https://investor.equinix.com/news-events/press-releases/detail/1036/equinix-and-pgim-real-estate-enter-into-600-million-jv-for | P | SV12x 80/20, 28 MW | M |
| S32 | Equinix Agrees to Form Greater Than $15B JV... | Equinix | 1 Oct 2024 | https://investor.equinix.com/news-events/press-releases/detail/1053/equinix-agrees-to-form-greater-than-15b-jv-to-expand | P | 37.5/37.5/25, >1.5 GW, IBX adjacency, leverage | H |
| S33 | Building Bolder and xScale (Analyst Day kiosk) | Equinix | Jun 2025 | https://d1io3yog0oux5.cloudfront.net/_61ce85944b338f3e09395ba2ce8fd459/equinix/files/Equinix_Analyst_Day_2025_Building_Bolder_and_xScale_Kiosk_-_vF.pdf | P | 21 operational xScale in 13 markets; market list | L to M |
| S34 | Tuning out 'bragawatts': Equinix on a 'generational' DC biz | RCR Wireless | 13 Aug 2025 | https://rcrwireless.com/20250813/data-center-2/bragawatts-equinix-dc | S | Atlanta / Dallas land, Hampton 240 MW | M |
| S35 | Equinix Reports Strong Third-Quarter 2025 Results | Equinix | 29 Oct 2025 | https://investor.equinix.com/news-events/press-releases/detail/1086/equinix-reports-strong-third-quarter-2025-results | P | Land in 5 metros, ~3 GW, 58 projects, power partnerships | M |
| S36 | Equinix lifts 2029 outlook, downplays power and equipment constraints | w.media | Oct 2025 | https://w.media/equinix-lifts-2029-outlook-downplays-power-and-equipment-constraints/ | S | Power confidence, Fox-Martin quote, equipment | M |
| S37 | EARNINGS: Equinix adds 1 GW to powered land pipeline | New Project Media | Feb 2026 | https://newprojectmedia.com/earnings-equinix-adds-1-gw-to-powered-land-pipeline-clocks-60-of-4q25-bookings-from-ai-workloads/ | S | +1 GW powered land 2025; AI deal share | M |
| S38 | Equinix Agrees to Divest Eight European Assets to Digital Realty; 10-Q Q1 2016 | Equinix / SEC | May 2016 | https://investor.equinix.com/news-events/press-releases/detail/367/equinix-agrees-to-divest-eight-european-assets-to-digital ; https://www.sec.gov/Archives/edgar/data/0001101239/000162828016015911/eqix-33116x10q.htm | P | Telecity US$3.8bn; divestment | M |
| S39 | Equinix Completes Bit-isle Acquisition in Japan; 10-K FY2015 | Equinix / SEC | Nov 2015 | https://investor.equinix.com/news-events/press-releases/detail/404/equinix-completes-bit-isle-acquisition-in-japan ; https://www.sec.gov/Archives/edgar/data/1101239/000162828016011802/equix_20151231x10k.htm | P | ¥33.2bn | M |
| S40 | Equinix 10-K FY2017 | Equinix / SEC | Feb 2018 | https://www.sec.gov/Archives/edgar/data/0001101239/000162828018002212/eqix_20171231x10k.htm | P | Verizon US$3.6bn, 29 buildings; Itconic; Zenium | M |
| S41 | Equinix Acquires Istanbul Data Center from Zenium | Equinix | Oct 2017 | https://investor.equinix.com/news-events/press-releases/detail/256/equinix-acquires-istanbul-data-center-from-zenium | P | IL2 US$92m; Itconic €220.5m | M |
| S42 | Equinix Completes Acquisition of Infomart Dallas | Equinix | Apr 2018 | https://investor.equinix.com/news-events/press-releases/detail/227/equinix-completes-acquisition-of-infomart-dallas | P | US$800m | M |
| S43 | Equinix Closes Metronode Acquisition to Become Market Leader in Australia | Equinix | 18 Apr 2018 | https://investor.equinix.com/news-events/press-releases/detail/223/equinix-closes-metronode-acquisition-to-become-market | P | A$1.034bn, 10 DCs | M |
| S44 | Equinix Acquires Switch Datacenters' AMS1... | Equinix | Apr 2019 | https://investor.equinix.com/news-events/press-releases/detail/169/equinix-acquires-switch-datacenters-ams1-data-center | P | €30m, AM11, "meet growing demand" | M |
| S45 | Equinix Completes US$175 Million Acquisition of Three Data Centers in Mexico | Equinix | 9 Jan 2020 | https://investor.equinix.com/news-events/press-releases/detail/127/equinix-completes-us175-million-acquisition-of-three-data | P | Axtel | M |
| S46 | Equinix Completes Acquisition of Bare Metal Leader Packet; 10-Q Q1 2020 | Equinix / SEC | 3 Mar 2020 | https://investor.equinix.com/news-events/press-releases/detail/115/equinix-completes-acquisition-of-bare-metal-leader-packet ; https://www.sec.gov/Archives/edgar/data/1101239/000162828020006896/eqix-33120x10q.htm | P | US$290.3m; rationale | M |
| S47 | Equinix to kill off Metal by June 2026; Equinix officially retires bare metal offering | DCD; SDxCentral | Nov 2024; 2026 | https://www.datacenterdynamics.com/en/news/equinix-to-kill-off-metal-by-june-2026/ ; https://www.sdxcentral.com/news/equinix-officially-retires-bare-metal-offering/ | S | Sunset dates; ~1.25% revenue | M |
| S48 | Equinix Completes US$780 Million Acquisition of 13 Bell Data Centers | Equinix; BCE | 1 Oct 2020 | https://investor.equinix.com/news-events/press-releases/detail/90/equinix-completes-us780-million-acquisition-of-13-bell ; https://www.bce.ca/news-and-media/releases/show/equinix-completes-US-780-million-acquisition-of-13-bell-data-centers-in-canada | P | 600+ customers, partnership | H |
| S49 | Equinix 8-K ex-99.1 (GPX close); Equinix Enters India with $161M... | Equinix / SEC; Data Center Knowledge | Aug 2020 / Sep 2021 | https://www.sec.gov/Archives/edgar/data/1101239/000156459021046819/d44520dex991.htm ; https://www.datacenterknowledge.com/deals/equinix-enters-india-with-a-161m-mumbai-data-center-acquisition | P/S | US$161m, IX density, 15x EBITDA, Meyers quote | M |
| S50 | Equinix Enters Africa, Closing the US$320 Million Acquisition of MainOne | Equinix | 5 Apr 2022 | https://investor.equinix.com/news-events/press-releases/detail/4/equinix-enters-africa-closing-the-us320-million | P | EV, cable, 3 DCs, rationale | M |
| S51 | Equinix to Expand into Chile and Peru with US$705 Million...; 10-Q Q2 2022 | Equinix / SEC | 18 Mar 2022 | https://investor.equinix.com/news-events/press-releases/detail/7/equinix-to-expand-into-chile-and-peru-with-us705-million ; https://www.sec.gov/Archives/edgar/data/1101239/000162828022019818/eqix-20220630.htm | P | US$705m; Chile US$638.3m; Peru US$80.3m | M |
| S52 | Equinix Completes Acquisition to Bolster Digital Innovation in the Philippines | Equinix | 2 Jun 2025 | https://newsroom.equinix.com/2025-06-02-Equinix-Completes-Acquisition-to-Bolster-Digital-Innovation-in-the-Philippines | P | US$183m; 4 IXs | M |
| S53 | Equinix completes acquisition of BT's data centre business in Ireland | Equinix | 3 Nov 2025 | https://newsroom.equinix.com/2025-11-03-Equinix-completes-acquisition-of-BTs-data-centre-business-in-Ireland | P | €59m; CCPC clearance | M |
| S54 | Equinix loses appeal to get permission for gas-powered data center in Dublin | DCD | Feb 2025 | https://www.datacenterdynamics.com/en/news/equinix-loses-appeal-to-get-permission-for-gas-powered-data-center-in-dublin/ | S (of regulator decision) | Planning refusal | M |
| S55 | CRU/2024001: Equinix response | Commission for Regulation of Utilities | 2024/25 | https://consult.cru.ie/ga/system/files/materials/200/CRU202504ac%20-%20Equinix.pdf | P | Equinix engaged on Irish DC connection policy | M |
| S56 | Equinix to Help Accelerate AI Innovation in Singapore with US$260+ Million... | Equinix | 2024 | https://investor.equinix.com/news-events/press-releases/detail/1057/equinix-to-help-accelerate-ai-innovation-in-singapore-with | P | SG6 via DC-CFA, 20 MW | M |
| S57 | Equinix Plans Through 2029 as Power Constraints Shape Data Center Growth | Yahoo Finance | 2025 | https://finance.yahoo.com/technology/articles/equinix-plans-2029-power-constraints-200425172.html | S | Constrained markets; capital priorities | L |
| S58 | Equinix Trials Landmark Hydrogen Power Solution at Dublin Data Centre | Equinix | 19 Jun 2026 | https://newsroom.equinix.com/2026-06-19-Equinix-Trials-Landmark-Hydrogen-Power-Solution-at-Dublin-Data-Centre | P | Dublin backup-power response | M |
| S59 | Equinix to expand two Helsinki data centers with €32 million investment | DCD | 2023/24 | https://www.datacenterdynamics.com/en/news/equinix-to-expand-two-helsinki-data-centers-with-32-million-investment/ | S | Equinix Nordic organic investment | M |
| S60 | Search-extracted summary on SV12x energisation and San José agreement | Unverified | 2026 | (no primary identified) | S | SV12x status | L |
| S61 | BNP Paribas moves portion of IT infrastructure to atNorth | Datacenter Forum | 2018+ | https://www.datacenter-forum.com/atnorth/bnp-paribas-moves-portion-of-it-infrastructure-to-atnorths-swedish-data-center | S | atNorth enterprise customer | L |

---

*Prepared for internal analysis. Facts are labelled O/D/I/U throughout. No inference in this document should be read as a statement by Equinix, CPP Investments, Partners Group or atNorth.*
