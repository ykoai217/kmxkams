# OpCore Buyer Forensics: Factual Coverage Dossier

**As of:** 27 September 2026
**Subject:** OpCore (legal entity OP CORE SAS, France), 50/50 joint venture of the iliad Group and InfraVia Capital Partners
**Scope:** Factual reconstruction only. No acquisition, target, structure or strategic action is recommended. Interpretations appear only in Section 21 and are labelled `I`.

---

## 0. Method and evidence caveat (read first)

**Evidence labels.** **O** Observed (directly supported by source) · **D** Derived (arithmetic or logic from O facts) · **I** Inferred (interpretation, basis stated) · **U** Unknown (not established by public evidence).

**Confidence.** **H** primary wording available and corroborated · **M** primary source seen through search-index extraction, or several strong sources agree · **L** single secondary source, aggregator, LinkedIn, event bio, or extraction that may be garbled.

**Collection limitation.** The research environment's egress policy blocked direct retrieval of every domain tried. This includes opcore.com, iliad.fr, infraviacapital.com, edf.fr, ec.europa.eu, datacenterdynamics.com, realassets.ipe.com and the fs.siteor.com PDF mirror. `curl` returned HTTP 403 at the proxy and `WebFetch` returned `EGRESS_BLOCKED`. **Every fact in this dossier was captured through a search index that extracts or summarises page content.** No page was read directly. For that reason:

* no claim is graded **H**, even where the source is a primary filing or press release;
* a claim is graded **M** when the index attributes it to a primary document, or when two independent sources agree;
* a claim is graded **L** when it rests on one secondary source, an aggregator (datacentermap, datacenters.com, datacenterHawk, Baxtel, DC Hub), LinkedIn, or an extraction that looked conflated.

At least one extraction was demonstrably conflated. The search index returned the June 2026 iliad financing press release with an arranger list that is word for word the July 2022 list. That item is treated as **U** (see Section 13 and Conflict C14). Section 19 lists the primary documents that should be read directly before anyone relies on a specific figure.

**Units.** Unless a source says otherwise, "MW" is recorded as **unidentified**. Where a source specifies IT, electrical, grid, generator thermal or "AI-ready" MW, the unit is carried verbatim.

---

## 1. Executive factual state

1. **O/M.** OpCore is the iliad Group's data-centre business. It was carved out of Scaleway on **1 July 2023** as a standalone company led by Scaleway co-founder **Arnaud de Bermingham**, with **46 staff** at launch. [S44]
2. **O/M.** The legal operating entity in France is **OP CORE SAS** (SIREN 891 405 227). It was incorporated on **18 Nov 2020**, has its registered office at 14 rue du Printemps, 75017 Paris, share capital of **€32,402,978**, and 11 establishments (10 active). [S39]
3. **O/M.** On **4 Dec 2024** iliad entered exclusive negotiations to sell **50% of OpCore to InfraVia** at an **enterprise value of €860m**. [S1]
4. **O/M.** The European Commission cleared the deal on **21 Feb 2025** (case **M.11845**, Art. 6(1)(b)) as an acquisition of **joint control** by **InfraVia VI Invest S.à r.l.** and **Iliad S.A.** [S3]
5. **O/M.** Closing occurred on **31 Mar 2025** according to iliad's H1 2025 accounts, and was announced on **3 Apr 2025**. iliad now equity-accounts its **50%** stake and booked a **€466m gain** on the sale. [S2, S4]
6. **O/L.** Consideration for the 50% stake is reported at **€440m** in an iliad earnings-call transcript and at **"around €400m"** in Usine Digitale. Neither figure was seen in a primary document. [S6, S7]
7. **O/M.** A **€650m senior financing** accompanied the sale. It comprises a **€400m capex facility, a €200m term loan and a €50m RCF**. Underwriters were **Crédit Agricole, ING, MUFG and Société Générale**, with **ABN AMRO** as lender. [S8, S9, S10]
8. **O/M.** The partners said dedicated financing would cover **"up to 75%" of OpCore's investment needs with bank debt**. They also plan **">€2.5bn"** of investment. [S1]
9. **O/M.** Stated footprint: "**15 data centres**" in May 2024 (six Paris-area, one Lyon, one Marseille, seven Poland). "**13 data centres**" was used in Feb and Apr 2025. OpCore's current marketing and job adverts cite "**>50 MW**" operating. [S12, S13, S15, S7, S30, S55]
10. **O/L.** During the 2024 sale process OpCore was described as having **31 MW of contracted capacity**. Reaching **131 MW at existing sites** would require **>€800m of capex**. [S11]
11. **O/M.** In **H1 2024** Play (P4) contributed its **seven Polish data centres** to a subsidiary, **3S Box**. It sold 3S Box to **OpCore S.A.S.** and kept long-term use of the sites under a contract with 3S Box. [S17, S18]
12. **O/M.** On **17 Nov 2025**, **EDF and OpCore entered exclusive negotiations** for a data centre of "several hundred megawatts" on the former **Montereau-Vallée-de-la-Seine** thermal plant (20 to 20.6 ha). OpCore investment is **~€4bn**, maximum electrical power is **700 MW**, and first commissioning is targeted "from 2027". [S23, S24, S27]
13. **O/M.** Montereau is one of four sites selected in **May 2025** for RTE's **"fast-track"** 400 kV connection procedure. **700 MW** was **pre-reserved** on the site. This is a time-limited pre-reservation, and no evidence was found of a signed OpCore connection agreement. [S32, S33]
14. **O/L.** OpCore markets a "**Montereau AI Factory**" with "**400 MW AI-ready capacity by 2028**", "**730 MW secured**" across its portfolio, and a **direct energy agreement with EDF** for "decarbonised nuclear power for all our sites". Contract terms are **U**. [S28, S29, S31]
15. **O/M.** A separate Paris-region programme exists at **Saint-Ouen-l'Aumône** (Val-d'Oise). It covers a **DC5 extension**, which received an MRAe environmental opinion on **21 Jan 2026** (generator thermal power 49.5 MW rising to 71.9 MW), and a new **DC6**, a warehouse conversion of **17,500 m² with 34 MW IT** under ICPE public consultation. [S35, S36]
16. **D/M.** The "~100 MW Paris-region data centre" described as **under construction in Dec 2024** cannot be Montereau. EDF only launched its Montereau call for interest on **3 Mar 2025** and selected OpCore in **Jul 2025**. The Dec 2024 project's identity is **U**. DC6 is the only candidate found (see Section 8).
17. **O/M.** Named demand is **iliad-group related**: Free, Play, Scaleway ("privileged client") and Kyutai. The rest is "several hyperscalers" and ">150 blue-chip B2B customers", none of whom is named. [S2, S12]
18. **O/L.** Statutory accounts of OP CORE SAS show revenue of **€28.2m (2023)** and **€60.7m (2024)**, with net income of **€4.3m (2023)** and **-€5.0m (2024)**. Telepolis reported OpCore EBITDA of **~€35m** a year at announcement. The perimeters differ. [S39, S16]
19. **O/M.** InfraVia invested through **InfraVia European Fund VI** (€8bn hard cap, closed Mar 2026). OpCore is one of Fund VI's first three investments. [S45, S3]
20. **O/M.** MUFG has a documented **direct** role as underwriter of OpCore's €650m financing. It also has **iliad-level** roles: additional arranger in 2022, and joint lead manager on the Oct 2024 green bond and the Sep 2025 bond. No InfraVia-level MUFG relationship was found. [S9, S48, S49, S50]
21. **O/M.** In May and June 2026 iliad joined the **AION** consortium (Ardian, Artefact, Bull, Capgemini, EDF, iliad, Orange, Scaleway) bidding for an EU AI Gigafactory (~€10bn). Opcore is named as providing hosting. The EuroHPC call closes **12 Nov 2026** and the outcome is **U**. [S46]
22. **U.** No named external hyperscaler contract, pre-let MW, lease tenor, indexation, board composition, shareholder agreement terms, covenant package or Montereau land contract was found in public evidence.

---

## 2. Ownership and governance

### 2.1 Current corporate perimeter

| Item | Established state | Label / Conf. | Source |
|---|---|---|---|
| French operating entity | **OP CORE SAS**, SIREN 891 405 227, created 18 Nov 2020, HQ 14 rue du Printemps 75017 Paris, capital €32,402,978, NAF 6311Z, 11 establishments (10 active), 50 to 99 employees (2023) | O / M | S39 |
| Establishments | Include SIRET …00028 at Saint-Ouen-l'Aumône (DC5 area) and …00085 (Paris HQ). The full list was not retrieved | O / M (partial) | S39 |
| Polish perimeter | **3S Box** (Play subsidiary holding 7 DCs) sold to **OpCore S.A.S.** in H1 2024 | O / M | S17, S18 |
| Legacy Polish operating company | **3S Data Center S.A.**, KRS 0000364798, ul. Gospodarcza 12, Katowice. Whether it sits inside 3S Box / OpCore today is **U**. One aggregator says 3S merged into Play/UPC in late 2022 | O / L (entity); U (current parent) | S22, S40 |
| Holding structure above OP CORE SAS | EC decision says InfraVia VI Invest S.à r.l. acquires joint control "over OP Core" by share purchase. Whether an intermediate holdco exists is **U** | O / M; U | S3 |
| Countries operating | **France** (Paris region, Lyon region, Marseille) and **Poland** (Katowice, Bytom, Warsaw, Kraków, Gdańsk) | O / M | S1, S22 |
| Italy | A 2026 secondary article says more centres are "planned across France, Poland and Italy". No Italian site or entity was found | O / L; site U | S56 |
| Relationship to iliad | 50% shareholder with joint control. OpCore is equity-accounted in iliad accounts from 31 Mar 2025 | O / M | S3, S4 |
| Relationship to Scaleway | OpCore was spun out of Scaleway on 1 Jul 2023. Scaleway remains a "privileged client" and hosts GPU clusters (Nabu) in DC5 | O / M | S2, S44, S64 |
| Relationship to Play | Play sold its DCs to OpCore in 2024 and has long-term use rights (sale and leaseback language in P4 accounts) | O / M | S17, S18 |
| Relationship to InfraVia | 50% shareholder with joint control. InfraVia also holds 50% of Polish fibre JV **PŚO** with Play (separate transaction) | O / M | S3, S52 |

### 2.2 Ownership history

| Date | Event | Label / Conf. | Source |
|---|---|---|---|
| 1999 | Online (later Scaleway) founded by Xavier Niel. ISDnet launches the data centres later inherited through Alice. OpCore markets itself as "since 1999" | O / L | S29, S43 |
| Dec 2008 | iliad buys Alice ADSL (Telecom Italia France) and inherits the Vitry "Iliad Datacenter" lineage (DC2) | O / L | S43 |
| Aug 2019 | Play (P4) acquires the 3S Group (EV **€96m / PLN 410m**), including 4 data centres and 3,800 km of fibre | O / M | S20 |
| Nov 2020 | OP CORE SAS incorporated (18 Nov 2020) | O / M | S39 |
| 1 Jul 2023 | Scaleway Datacenter becomes **Opcore**, 100% iliad | O / M | S44 |
| H1 2024 | Play's 7 DCs, via 3S Box, sold to OpCore S.A.S. (intra-group) | O / M | S17, S18 |
| 30 May 2024 | iliad (Q1 2024) announces €2.5bn OpCore plan "supported by iliad and a future financial partner" | O / M | S12, S14 |
| Summer to Oct 2024 | Sale process. Antin, Morrison and InfraVia shortlisted. Antin exits the second round. Binding offers "earmarked for mid-October". Stonepeak and Mubadala cited as possible late entrants | O / L | S11, S59 |
| 4 Dec 2024 | Exclusive negotiations. InfraVia to buy 50% "via its infrastructure funds", EV €860m | O / M | S1 |
| 31 Dec 2024 | OpCore classified as held for sale in iliad accounts | O / M | S4 |
| 21 Feb 2025 | EC clearance, M.11845 | O / M | S3 |
| 31 Mar 2025 | Closing per iliad H1 2025 financial report. First recognition as equity-accounted investee | O / M | S4 |
| 3 Apr 2025 | Closing press release (iliad and InfraVia) | O / M | S2 |

### 2.3 Current ownership and transaction economics

| Item | Value | Label / Conf. | Source |
|---|---|---|---|
| iliad S.A. | **50%** | O / M | S3, S4 |
| InfraVia (InfraVia VI Invest S.à r.l., InfraVia European Fund VI) | **50%** | O / M | S3, S45 |
| Management equity | Not disclosed | U | |
| Ultimate control of iliad | "Niel family group" | O / M | S3 |
| Enterprise value (100%) | **€860m** | O / M | S1 |
| Consideration for 50% | **€440m** (earnings-call transcript) vs **~€400m** (Usine Digitale) | O / L (both) | S6, S7 |
| Implied 100% equity at €440m | €880m | D / L | from S6 |
| Implied net debt at €440m | EV €860m minus equity €880m = **-€20m** (net cash), unless the price includes other items | D / L | S1, S6 |
| iliad gain on disposal | **€466m** (H1 2025) | O / M | S4 |
| Primary vs secondary capital | The press release describes a **sale** by iliad of 50% of the shares (secondary). No primary equity injection is disclosed at closing | O / M (sale); U (any primary) | S1, S3 |
| Shareholder loans | Not disclosed | U | |
| Debt at closing | A €650m facility was put in place "to facilitate the sale". The amount drawn at closing and any intra-group debt repaid to iliad are **U** | O / M; U | S9 |
| Sell-side advisers | Lazard and RBC Capital Markets (financial). Bredin Prat (legal) | O / M | S9, S53 |
| Buy-side advisers | Perella Weinberg Partners (financial). Linklaters, Addleshaw Goddard, De Pardieu Brocas Maffei (legal) | O / M | S9, S53 |
| Lender and borrower counsel | White & Case (lenders). Clifford Chance ("for the Borrowers", plural) | O / M | S8, S9 |

### 2.4 Governance

| Dimension | Established state | Label / Conf. | Source |
|---|---|---|---|
| Joint control | EC treated the deal as acquisition of joint control by InfraVia VI Invest S.à r.l. and Iliad S.A. | O / M | S3 |
| What joint control implies | Under EUMR practice, joint control means each parent can block strategic decisions (typically the budget, business plan, major investments or senior appointments). Which rights OpCore's agreement actually contains is **U** | D / M (legal meaning); U (specific rights) | S3 |
| Board composition | Not disclosed | U | |
| Chair | Thomas Reynaud (iliad CEO) is described as "**Chairman of OpCore**" in the closing release | O / M | S2 |
| Legal representative of the SAS | Arnaud Brindejonc de Bermingham is **Président and Directeur Général** of OP CORE SAS per company registers. How the SAS président role relates to Reynaud's "Chairman" title is **U** (see Conflict C9) | O / M | S39 |
| Reserved matters, vetoes, shareholder agreement | Not disclosed | U | |
| Operating control | The CEO has been in place since the 2023 carve-out and was retained after closing. The allocation of day-to-day authority is **U** | O / M (CEO continuity); U | S2, S44 |
| Statutory auditor | EXELMANS AUDIT appointed 17 Oct 2025 | O / L | S39 |
| Post-deal executive hires | CTO Hugues Bodin joined in 2025 (see Section 14). No CFO appointment announcement was found | O / L; U (CFO) | S54 |

### 2.5 InfraVia

| Item | Established state | Label / Conf. | Source |
|---|---|---|---|
| Investing vehicle | InfraVia VI Invest S.à r.l. (Luxembourg) | O / M | S3 |
| Fund | InfraVia European Fund VI. The Fund VI close release lists OpCore among its first three investments (with LDA and Prosolia Energy), >€1bn committed across them | O / M | S45 |
| Fund size | **€8bn hard cap** (target €7bn), raised in 18 months, announced Mar 2026 | O / M | S45 |
| Vintage | First close date **U**. An 18-month raise ending Mar 2026 implies launch around H2 2024 | D / L | S45 |
| Predecessor | InfraVia European Fund V, €5bn | O / M | S45 |
| Mandate | European infrastructure: energy and energy transition, digital, mobility, social infrastructure | O / M | S45 |
| Investment period | Not disclosed | U | |
| Stated rationale | Vincent Levita (Founder and CEO): "expand our partnership with Iliad… draws on all our experience in hyperscale data center development… contribute to shaping a major hyperscale data center operator in Europe." | O / M | S1 |
| Prior iliad relationship | Bought 50% of Play's fibre network JV PŚO (Poland) in 2022 | O / M | S52 |
| Prior DC experience | Green Datacenter (Switzerland). InfraVia states it grew capacity fivefold and expanded campuses | O / L | S61 |
| Exit timing | Not inferred (instruction) | n/a | |

---

## 3. Explicit strategy

| Date | Speaker / source | Exact statement or close paraphrase | Scope | Evidence |
|---|---|---|---|---|
| Jul 2023 | Scaleway / A. de Bermingham | Datacenter business becomes Opcore. "Total separation" of Scaleway's technical and commercial activities from the DC unit | Organisation | S44, O/M |
| 30 May 2024 | iliad Q1 2024 / Thomas Reynaud | €2.5bn over the next decade in organic developments "supported by iliad and a future financial partner". Open to "opportunistic M&A". "iliad's ambition, in terms of data centers, is the size of Europe" | Capital, M&A, geography | S12, S13, O/M |
| 4 Dec 2024 | iliad / InfraVia joint release | Develop OpCore into "a major independent European hyperscale data center platform". ">€2.5bn" of investment. Financing to cover "up to 75%" of investment needs with bank debt. Scale to ">130 MW" via a c.100 MW Paris-region DC (French text: "construction **en cours**"), then "multiple hundreds of megawatts in Europe". European hyperscale market growing ">20%" a year | Positioning, scale, financing | S1, O/M |
| 4 Dec 2024 | Vincent Levita, InfraVia | Hyperscale development experience; "shaping a major hyperscale data center operator in Europe" | Sponsor rationale | S1, O/M |
| Dec 2024 | Telepolis (reporting iliad) | Plan to quadruple current capacity (131 MW) over 10 years. The €2.5bn includes debt and M&A | Scale, M&A | S16, O/L |
| 7 Feb 2025 | iliad €3bn AI plan release | OpCore (13 DCs, France and Poland) invests €2.5bn, including for AI compute. With InfraVia, "several hundred MW in the short term, ambition of several gigawatts long-term across Europe" | AI, scale | S15, O/M |
| 3 Apr 2025 | Closing release / A. de Bermingham | "Unprecedented growth in the capacity demands expressed by hyperscaler and AI customers". "Several construction projects already underway" | Demand, construction | S2, O/M |
| 3 Apr 2025 | Closing release / T. Reynaud | "Together with our partner, InfraVia, we're looking forward to supporting OpCore's teams in this ambitious new chapter" | Governance tone | S2, O/M |
| 3 Apr 2025 | Closing release | Scaleway "will retain its status as a privileged client of OpCore" | Related-party demand | S2, O/M |
| 17 Nov 2025 | EDF / OpCore release / T. Reynaud | Montereau to be one of "the largest strategic facilities France and Europe need to retain control of their digital destiny" | Sovereignty, AI | S23, O/M |
| 17 Nov 2025 | Choose France (France edition) | OpCore presents "Montereau AI Factory", ~400 MW AI-ready by end-2028, first service 2027. €4bn was the largest investment announced at the event | AI/HPC, timing | S28, O/M |
| 2025 (undated) | opcore.com | "Sovereign AI-Ready Data Centers in Europe". 100% European ownership. 730 MW secured "with EDF". Direct EDF energy agreement for "decarbonized nuclear power for all our sites". Exclusive renewable sourcing since 2018. Modular HDD in 1 MW modules up to 250 MW, air and liquid cooling | Sovereignty, power, product | S29, O/L |
| 2025 (Teratec) | Hugues Bodin, CTO | Modular Hybrid Datacenter Design with MW-by-MW power and cooling. Montereau has "fastest fast-tracked connectivity to RTE's 400kV network" | Technical, power | S31, O/L |
| 2025 to 2026 | Patrick Lastennet bio | Go-to-market "to capture workloads along the entire AI lifecycle" | Commercial | S54, O/L |
| Q4 2025 call (Mar 2026) | iliad | Envelope of around €4bn over 7 to 8 years across OpCore (50/50 JV) and Scaleway | Capital | S6, O/L |
| May to Jun 2026 | AION consortium release | iliad and Scaleway join Ardian, Artefact, Bull, Capgemini, EDF and Orange in a French AI Gigafactory bid. Opcore named for hosting | AI/HPC, partnership | S46, O/M |
| 2026 | w.media (secondary) | More centres planned across France, Poland and Italy | Geography | S56, O/L |

---

## 4. Site and campus inventory

Operating MW figures come from aggregators and are recorded as "power access" or "capacity" as the aggregator phrases them. **None is confirmed as IT MW by OpCore.** Ownership or lease status is **U** for every site unless stated.

### 4.1 France: operating sites

| Site | OpCore code | City / address | Legacy name | Tenure | Area | Power / MW | Energy / cooling / PUE | Customers | Label / Conf. | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| DC2 | PAR2 | 29 rue Edith Cavell, Vitry-sur-Seine (94) | Iliad Datacenter / Scaleway DC2. Built 1989 by NMPP, via ISDNet, C&W, Tiscali, Telecom Italia (Alice) | U | 4,500 m² | "5 MW power access" | U | Carrier-neutral colo, U | O / L | S40, S43 |
| DC3 | PAR3 | 61 rue Julian Grimau, Vitry-sur-Seine (94) | Online / Scaleway DC3, opened 2012 | U | 11,800 m² | "6.9 MW total capacity"; "12 MW connection" | Indirect free cooling; PUE 1.36 (Online live PUE page) | Scaleway fr-par-1, colo | O / L | S40, S41 |
| DC4 | PAR4 | 58 bd Lefebvre, Paris 15e | Online DC4 "data bunker", ex anti-atomic shelter 26 m underground, acquired by iliad 2012 | U | 9,000 m² incl. surface; 2,000 m² servers | "4 MW" | **Heat reuse:** 10-year contract with Paris Habitat; covers ~80% of winter heating for 150 social homes (rue Albert Bartholomé) | Colo, U | O / M (heat reuse); L (MW) | S40, S42 |
| DC5 | PAR5 | 25 rue de l'Eguillette, Saint-Ouen-l'Aumône (95), ZI Vert Galant | Scaleway DC5, opened 2018 | U | 17,000 m² (aggregator); 12 rooms on 20,000 m² planned (JDN 2019) | "24 MW power access". Private suites 1 MW to 16.2 MW, OCP-ready (aggregator) | Free cooling plus adiabatic; 30°C cold aisle; PUE 1.16 (Scaleway); renewable GOs (wind and hydro) | Scaleway GPU clusters **Nabu** (1,016 H100 GPUs, 127 DGX H100) and Jeroboam. Mistral AI trained Mixtral on Nabu | O / M (Nabu, cooling); L (MW) | S40, S41, S64 |
| Paris-area site 5/6 | U | U | U | U | U | U | U | U | U | May 2024: "six" Paris-area DCs. Job adverts: "5" in Paris region. Only four are identified above |
| Marseille | MRS1 | 71 av André Roussin, Marseille (one aggregator gives 70 chemin du Passet) | Jaguar Network MRS01 (Free Pro) | U | U | "10 MW" | U | Carrier-neutral, >30 carriers, HDS certified | O / L | S40 |
| Lyon (1) | LYO1 / "Rockefeller" | 60 av Rockefeller, Lyon 8e (aggregator) | Jaguar Network Lyon, launched 2019 with DCforData (Free Pro) | U | U | U | 2N power, 72 h generator autonomy | Carrier-neutral | O / L | S40, S63 |
| Lyon (2) | U | Limonest (aggregator lists Free Pro Limonest) | Jaguar Network / Free Pro | U | U | U | U | U | O / L | S40, S55 |
| Historic DC1 | n/a | Bezons | Exodus (2001), then Spherion | n/a | 6,300 m² | n/a | n/a | No Online activity since 2013 | O / L | S43 |

**D/L.** The French sites with a named MW figure (DC2 5 + DC3 12 + DC4 4 + DC5 24 + MRS1 10) total **55 MW** of mixed "power access" and "connection" figures. That total is consistent in order of magnitude with OpCore's ">50 MW" claim. It is not an IT MW total.

### 4.2 France: development sites

| Site | Code | Location | Tenure / land | Capacity | Grid | Permits | Status | Customers | Label / Conf. | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| DC5 extension | DC5 | Saint-Ouen-l'Aumône | Existing OpCore site; tenure U | +4 computer rooms, +16 UPS in 8 new rooms, +8 generator sets. Generator thermal power **49.5 MW to 71.9 MW**. IT MW **U** | U | Impact study filed Mar 2025. **MRAe Île-de-France delegated opinion APJIF-2025-114, 21 Jan 2026.** Final ICPE authorisation and building permit **U** | Permitting | U | O / M | S35 |
| DC6 | DC6 | Saint-Ouen-l'Aumône, ZI Vert Galant, near DC5 | Conversion of an existing warehouse. Ownership or lease **U** | **17,500 m², 34 MW IT** (ICPE file). Universfreebox reports "90 MW". An engineering firm page says "16 MW" | Universfreebox: grid connection "within a reasonable timeframe" is the main challenge. Contract **U** | ICPE "consultation du public parallélisée" (Val-d'Oise prefecture, 2025 to 2026; CNCE procedure 2225). Outcome **U** | Universfreebox (Apr 2025): "construction launched". One aggregator lists "OPCORE DC6-2" as operational (L) | U | O / M (34 MW IT, consultation); L (90 MW, construction, operational) | S36, S37, S38 |
| Montereau AI Factory | Aggregators label it "PAR6/DC6" (Conflict C6) | 1 chemin du Port, Vernou-la-Celle-sur-Seine, and La Grande-Paroisse (77). Former EDF Montereau thermal plant, shut 2004 | **EDF-owned land. Exclusive negotiations only** (Nov 2025). No signed sale or lease found | "Several hundred MW". **Max electrical 700 MW.** "~400 MW AI-ready by end-2028" (OpCore) | RTE fast-track site. **700 MW pre-reserved** from May 2025 (time-limited) | **U** | Pre-development | None disclosed. AION consortium names Opcore as host (not a contract) | O / M | S23 to S28, S32 |

### 4.3 Poland

See Section 9 for the full reconstruction.

---

## 5. Development de-risking ladder

Gate definitions: **G0** Announced · **G1** Land secured · **G2** Grid contracted · **G3** Energisation scheduled · **G4** Permitted · **G5** Data-hall construction underway · **G6** Customer contracted / pre-leased · **G7** Operating.

Cell values: **Yes** (evidenced) · **Partial** (evidence exists and is incomplete or L) · **No** (evidence points against) · **U** (no evidence).

### 5.1 By project

| Project | G0 | G1 | G2 | G3 | G4 | G5 | G6 | G7 | Notes |
|---|---|---|---|---|---|---|---|---|---|
| **Montereau AI Factory** | **Yes** (EDF selection Jul 2025; exclusive negotiations 17 Nov 2025) | **No.** Exclusive negotiations only; no signed land contract found | **No.** RTE **pre-reservation** of 700 MW on the site, valid 9 months plus up to 3. This is not a signed OpCore connection agreement | **U.** "First commissioning from 2027" is a company target, not an RTE schedule | **U** | **U** | **U.** AION hosting mention is not a customer contract | No | "~400 MW AI-ready by end-2028" is a marketing target |
| **DC6 Saint-Ouen-l'Aumône** | **Yes** (Apr 2025 reporting; ICPE file) | **Partial.** OPCORE is the applicant for a warehouse conversion, which implies site control (I). Tenure U | **U.** Grid timing described as the main challenge | **U** | **Partial.** ICPE consultation run; decision U | **Partial / L.** "Construction launched" (Universfreebox); "several construction projects underway" (closing PR, unspecified) | **U** | **Partial / L.** "DC6-2 operational" per one aggregator | 34 MW IT per ICPE file |
| **DC5 extension** | **Yes** | **Yes** (existing site; tenure U) | **U** | **U** | **Partial.** MRAe opinion issued 21 Jan 2026 (an opinion, not a permit) | **U** | **U** | Existing DC5 is operating | IT MW of extension U |
| **"c.100 MW Paris-region DC under construction" (Dec 2024)** | **Yes** | U | U | U | U | **Stated** ("construction en cours", Dec 2024) | U | U | Identity U. It cannot be Montereau (D). DC6, possibly with the DC5 extension, is the only candidate found (I) |
| **Poland expansion** | **U** | n/a | n/a | n/a | n/a | n/a | n/a | n/a | No announced Polish project found |
| **Existing portfolio** | n/a | n/a | n/a | n/a | n/a | n/a | **Partial.** "31 MW contracted" (2024, L) | **Yes.** ">50 MW" | Unit unidentified |

### 5.2 Aggregate MW by gate

Figures are not summed across projects where a double count is possible. The DC6 figures and the "c.100 MW Paris project" may describe the same asset.

| Gate | MW evidenced | Unit | Notes | Label / Conf. |
|---|---|---|---|---|
| G7 Operating | **>50 MW** (OpCore). Named-site aggregator sum 55 MW (France only) | Unidentified / mixed | Poland MW largely U (Kraków ~1.44 MW only) | O / L; D / L |
| G6 Contracted | **31 MW** (existing portfolio, 2024) | Unidentified | No pre-let on any development project found | O / L |
| G5 Construction underway | **0 to 34 MW** | IT (DC6) | DC6 construction is L-evidenced only | O / L |
| G4 Permitted | **0 MW** confirmed | n/a | DC5 extension has an MRAe opinion; DC6 is in consultation | O / M |
| G3 Energisation scheduled | **0 MW** confirmed | n/a | Montereau 2027 is a target only | U |
| G2 Grid contracted | **0 MW** confirmed | n/a | Separate line below for pre-reservations | U |
| (G2-pre) Grid pre-reserved, not contracted | **700 MW** | Electrical (RTE site reservation) | Montereau. The reservation attaches to the State-identified site and runs 9 months plus up to 3 | O / M |
| G1 Land secured | DC5 extension and DC6 (MW per above). **Montereau 0** | n/a | Montereau land is under exclusive negotiation only | O / M |
| G0 Announced | Montereau "several hundred MW" / 700 MW electrical max / ~400 MW AI-ready. DC6 34 MW IT (or 90 MW, or 16 MW). Company headline 530 MW "under development, Paris region" | Mixed | Do not add the 530 MW headline to project figures | O / M-L |

---

## 6. Capacity reconciliation

| # | Date | Source | Exact wording (or close) | MW type | Perimeter | Status | Label / Conf. |
|---|---|---|---|---|---|---|---|
| K1 | Jul 2023 | DCD / Telecompaper | DC unit hosts "on average over 340,000 physical servers" in Paris region | n/a | Paris (Scaleway DCs) | Operating | O / M |
| K2 | 30 May 2024 | iliad Q1 2024 via DCD / TelecomTV | "Six data centers across Paris, one each in Lyon and Marseille, and seven in Poland". "Around **131 MW**, including in-development projects" | Unidentified | FR + PL, **15 DCs** | Mixed operating and in-development | O / M |
| K3 | Summer to autumn 2024 | ION Infralogic | "15 data centres with **31 MW of contracted capacity**". Expansion "to reach **131 MW at its existing sites**" needs ">EUR 800m of capex" | "Contracted" | FR + PL | Contracted (operating) | O / L |
| K4 | 4 Dec 2024 | iliad / InfraVia release | ">130 MW" via "c.100 MW" Paris-region DC under construction, then "multiple hundreds of MW" | Unidentified | Group | Planned | O / M |
| K5 | Dec 2024 | Telepolis | "Quadruple… current power capacity (currently **131 MW**) over 10 years" | "Power capacity" | Group | Presented as current (see Conflict C1) | O / L |
| K6 | 7 Feb 2025 | iliad €3bn AI release | OpCore "operates **13 datacenters** in France and Poland" | n/a | FR + PL | Operating | O / M |
| K7 | Apr 2025 | Usine Digitale | "13 data centers distributed between Île-de-France, Marseille and Poland" | n/a | FR + PL | Operating | O / L |
| K8 | 2025 to 2026 | opcore.com / DCD company profile | "Current **50 MW** capacity spans Paris, Lyon, Marseille, and Poland, expanding to **100 MW by 2026** with **530 MW under development** in Paris region" | Unidentified | 50: FR + PL. 530: Paris region | 50 operating; 100 planned; 530 development | O / L |
| K9 | 2025 to 2026 | opcore.com | "Portfolio of sites with **730 MW secured**" / "730 MW with EDF" | "Secured" (meaning U) | Portfolio | Secured (not defined) | O / L |
| K10 | 2025 to 2026 | InfraVia company page (via index) | "15 data centres… with over 50 MW of installed capacity" | "Installed" | FR + PL | Operating | O / L |
| K11 | 2025 to 2026 | OpCore job adverts | ">50 MW across 5 datacenters in the Paris region, 2 in the Lyon region and 1 in the Marseille region" | Unidentified | **France only, 8 DCs** | Operating | O / L |
| K12 | 17 Nov 2025 | EDF / OpCore release | "Several hundred megawatts". Maximum electrical power **700 MW** | Electrical | Montereau | Planned | O / M |
| K13 | 17 Nov 2025 | Choose France coverage | "~**400 MW** of AI-ready capacity by end of 2028" | "AI-ready" (likely IT, U) | Montereau | Planned | O / M |
| K14 | May 2025 | RTE | **700 MW** pre-reserved per fast-track site | Grid (RTE reservation) | Montereau site | Pre-reserved | O / M |
| K15 | 2025 to 2026 | Val-d'Oise ICPE file | DC6 **34 MW IT** | IT | DC6 | Planned / under construction | O / M |
| K16 | Apr 2025 | Universfreebox | DC6 "**90 MW**" | Unidentified (possibly electrical) | DC6 | Planned | O / L |
| K17 | 2025 | Engineering firm page (neo-db) | DC6 "**16 MW**" | Unidentified (possibly a phase) | DC6 | Planned | O / L |
| K18 | Jan 2026 | MRAe | Generator thermal power 49.5 MW rising to 71.9 MW | Generator thermal | DC5 | Permitting | O / M |

**Reconciliation notes (not forced):**

* **13 vs 15 DCs (D/M).** Both counts include Poland. 15 = 6 Paris + 1 Lyon + 1 Marseille + 7 Poland (May 2024). The Feb and Apr 2025 "13" is not broken down in the sources. The 2025 to 2026 job advert gives **8 French DCs** (5 Paris, 2 Lyon, 1 Marseille), which with 7 in Poland would also make 15. The two-site gap is **unreconciled**. See Conflict C2.
* **131 MW (D/M).** Three sources use 131 MW. The May 2024 source says it *includes in-development projects*. ION says it is the target *at existing sites*. Telepolis calls it *current*. The most consistent reading is **existing sites at full build-out** (I). It is not operating capacity.
* **~50 MW (O/L).** This is the current operating headline. It is unclear whether the figure is IT or electrical, and whether Poland is included. OpCore's own "50 MW… spans Paris, Lyon, Marseille, and Poland" includes Poland. The job advert attributes ">50 MW" to the eight French DCs alone. Unreconciled (Conflict C3).
* **31 MW contracted vs ~50 MW operating (D/L).** If both are correct, roughly 60% of operating capacity was contracted in 2024. The dates and units differ, so this ratio is indicative only.
* **100 MW by end-2026 (O/L).** This is a marketing target. No source identifies which sites deliver the ~50 MW increment. DC6 (34 MW IT) plus the DC5 extension are the only identified near-term additions (I).
* **530 MW under development in Paris region (O/L).** No breakdown is given. One arithmetic possibility is Montereau ~400 MW plus DC6 (34 to 90 MW) plus the DC5 extension plus other U. This is **I** only and is falsifiable by any OpCore breakdown.
* **730 MW secured (O/L).** No breakdown is given. The Montereau RTE reservation (700 MW) is the only documented large block. 700 plus ~30 MW of other capacity is one reading (**I**). "Secured" is undefined, and **must not be read as grid-contracted** (Section 5).
* **France vs Poland.** Headline MW figures K2, K5, K8 and K10 include Poland. K11 is France only. Polish MW is **U** apart from Kraków (~1.44 MW, aggregator).

---

## 7. Montereau deep dive

### 7.1 Chronology

| Date | Event | Stage | Label / Conf. | Source |
|---|---|---|---|---|
| 2004 | EDF Montereau thermal plant (coal/fuel-oil) permanently shut. Later dismantled | Background | O / M | S23 |
| 3 Mar 2025 | EDF launches a call for expressions of interest (AMI) for very-high-power DCs on its own sites | Process | O / M | S23, S25 |
| 7 May 2025 | CRE approves RTE fast-track procedure for >400 MW consumers on State-identified sites (400 kV) | Regulatory | O / M | S33 |
| ~20 May 2025 (Choose France) | Four fast-track sites selected: **Fouju, Montereau** (77), Escaudain (59), Le Bosquel (80). 700 MW pre-reserved per site, 9 months plus up to 3 | Grid pre-reservation | O / M | S32 |
| 24 Jun 2025 | CRE deliberation 2025-166 approves the fast-track connection convention template | Regulatory | O / M | S33 |
| 24 Jul 2025 | EDF announces OpCore as its partner for Montereau (DCmag). Eclairion takes two Moselle sites | Selection | O / M | S24, S26 |
| Aug 2025 | Announcement relayed by James Chéron (VP, Région Île-de-France); DCD and BeBeez coverage | Selection | O / M | S25 |
| 17 Nov 2025 | **EDF and OpCore enter exclusive negotiations** (Choose France, France edition). ~€4bn OpCore investment. First commissioning "from 2027". Phased | Exclusive negotiations | O / M | S23, S27, S28 |
| 15 Dec 2025 | RTE fast-track certification document (5 sites incl. Dunkirk). One extraction gives pre-booking validity "9 months from 15 December 2025" | Grid | O / L (Conflict C7) | S32 |
| May to Jun 2026 | AION consortium: Opcore named as hosting partner; Montereau cited as a probable AION site ("probablement", silicon.fr) | Partnership (bid) | O / L | S46 |
| Jun 2026 | GridReadiness (advisory, secondary) lists Montereau as still "accessible" among fast-track sites | Grid status | O / L | S34 |

### 7.2 Attribute table

| Attribute | Established state | Label / Conf. |
|---|---|---|
| Exact site | Former EDF Montereau-Vallée-de-la-Seine thermal plant, communes of Vernou-la-Celle-sur-Seine and La Grande-Paroisse (77). Aggregator address: 1 chemin du Port, Vernou-la-Celle. ~75 km SE of Paris (OpCore says 65 km) | O / M |
| Land area | 20 ha (EDF) / 20.6 ha (DCmag) | O / M |
| Land ownership | EDF. EDF describes itself as France's third-largest industrial landowner, providing "land and support for accelerated network connection" | O / M |
| OpCore tenure | **Not secured.** Status is exclusive negotiations. Sale vs lease vs other structure is **U** | O / M (negotiations); U (structure) |
| Exclusivity | Yes, announced 17 Nov 2025. Duration **U** | O / M |
| Current legal status (Sep 2026) | No evidence of a signed definitive agreement | U |
| Electrical MW | Up to **700 MW** maximum electrical | O / M |
| IT MW | "~400 MW AI-ready by end-2028" (OpCore marketing). No IT MW in the EDF release | O / M (claim) |
| "400 MW capacity subscription" | No source found that uses subscription language. The 400 MW figure appears only as "AI-ready capacity". The 400 kV figure is the grid voltage. Do not conflate | O / M |
| Grid operator | RTE (400 kV transmission) | O / M |
| Grid agreement | **Pre-reservation only.** No signed connection convention found | O / M; U |
| Fast-track status | Yes, one of the original four sites | O / M |
| Permitting | **U.** No ICPE, building permit, MRAe or CNDP record found. PINM designation is legally possible under Loi 2026-403 of 26 May 2026. No Montereau designation found | U |
| First energisation | **U** | U |
| First RFS | "From 2027" (target) | O / M (target) |
| Phases | "Likely phased". 400 MW AI-ready by end-2028 | O / M |
| Total capex | ~€4bn (OpCore investment) | O / M |
| Who funds grid infrastructure | **U.** The fast-track convention allocation of costs is not disclosed for this site | U |
| Customer / pre-let | None disclosed | U |
| Energy source | French grid (nuclear-heavy mix). OpCore claims an EDF agreement for decarbonised nuclear power for all sites. No CAPN (EDF long-term nuclear allocation contract) found for OpCore. Data4 is the first disclosed DC operator with a CAPN (Sep 2025) | O / L (claim); U (contract) |
| Cooling | Modular HDD with air and liquid cooling (marketing) | O / L |
| AI/HPC design | "AI Factory", "AI-ready", GPU/HPC optimised (marketing) | O / L |
| Government involvement | State pre-identified the site for fast-track. Announced at Choose France. Région Île-de-France official relayed the selection | O / M |
| Outstanding conditions | Definitive EDF agreement, connection convention, permits, customer contracts, financing for ~€4bn: all **U** | U |

### 7.3 Stage separation (not collapsed)

| Stage | Montereau status |
|---|---|
| Exclusive negotiations | **Yes** (17 Nov 2025) |
| Signed agreement (land) | **Not evidenced** |
| Grid allocation | **Site pre-reservation (700 MW), not contracted** |
| Permitted | **Not evidenced** |
| Construction | **Not evidenced** |
| Customer contract | **Not evidenced** |
| Operating | **No** |

---

## 8. Other development projects (the ~100 to 120 MW question)

**D/M. The Dec 2024 "c.100 MW Paris-region DC" is not Montereau.**

* The 4 Dec 2024 French release says "via la construction **en cours** d'un datacenter de 100MW en région parisienne". [S1]
* EDF launched the Montereau AMI on **3 Mar 2025** and selected OpCore on **24 Jul 2025**. [S23, S24]
* An asset described as under construction in Dec 2024 therefore cannot be a site OpCore was selected for seven months later.
* Some secondary sources (lafibre.info, one DCD rewrite) fold the "100 MW" into Montereau. That is a conflation (Conflict C5).

**Candidate identification (I, basis stated).** DC6 at Saint-Ouen-l'Aumône is the only identified Paris-region new-build in the right period.

* Universfreebox reported in Apr 2025 that iliad was "launching construction" of DC6 at "90 MW" and extending DC5 nearby. [S37]
* The ICPE file gives DC6 **34 MW IT** on 17,500 m². [S36]
* 90 MW (possibly electrical) and "~100 MW" are close. The DC5 extension would add further capacity on the same campus.
* **Falsifier:** an OpCore or iliad statement naming a different site as the Dec 2024 100 MW project.

| Project | Location | Capacity | Timeline | Land / grid | Customer | Capex | Current gate | Label / Conf. |
|---|---|---|---|---|---|---|---|---|
| DC6 | Saint-Ouen-l'Aumône (95), ZI Vert Galant | 34 MW IT (ICPE) / 90 MW (press) / 16 MW (engineer) | Construction reported Apr 2025. Delivery U | Warehouse conversion; tenure U; grid U | U | U | G0 yes; G4 partial; G5 partial (L) | O / M-L |
| DC5 extension | Saint-Ouen-l'Aumône | +4 rooms; gensets 49.5 to 71.9 MW thermal | Impact study Mar 2025; MRAe Jan 2026 | Existing site | U | U | G0 yes; G1 yes; G4 partial | O / M |
| "c.100 MW Paris region" | U (see above) | c.100 MW | "Under construction" Dec 2024 | U | U | U | G0; G5 stated | O / M |
| AION Gigafactory (consortium) | Multi-site France. Ardian/Verne 500 MW IdF campus (up to €5bn, 200+ MW by 2030) is one component. Montereau "probably" another | 200 MW initial, scaling 100 MW to 1 GW (reports vary) | EuroHPC call deadline 12 Nov 2026 | n/a | n/a | ~€10bn (consortium) | Bid stage. Not an OpCore project | O / L |

Double-count guard: Montereau appears once (Sections 4.2 and 7). DC6 and the "c.100 MW" line may be the same asset and are **not added together**.

---

## 9. Poland / Play perimeter

### 9.1 How the sites reached OpCore

| Date | Event | Label / Conf. | Source |
|---|---|---|---|
| 26 Jun 2019 | P4 signs preliminary agreement for the 3S Group (3S SA, 3S Data Center, 3S Fibertech, 3S Box). EV €96m / PLN 410m | O / M | S20 |
| 19 Aug 2019 | Closing. Play acquires 4 DCs (Katowice, Kraków, Bytom, Warsaw) and 3,800 km of fibre | O / M | S20 |
| 2019 to 2022 | 3S Data Center expands: new 2,200 m² Katowice DC (site total 4,400 m²), 750 m² Bytom DC. Acquires an existing Gdańsk DC (ul. Nowy Świat, >500 m²), described as the **7th object**. Cluster then: Katowice 3, Bytom 1, Warsaw 1, Kraków 1, Gdańsk 1 | O / M | S21, S22 |
| Nov 2020 | iliad completes acquisition of Play (background fact; not re-sourced in this pass) | O / L | n/a |
| Undated | Play CEO Jean Marc Harion says Play is "not convinced" of its DC competencies and may seek a "partner" | O / L | S19 |
| Late 2022 | Aggregator: 3S merged with Play and UPC | O / L | S22 |
| H1 2024 | P4 contributes its **7 DC facilities** to subsidiary **3S Box** and sells 3S Box to **OpCore S.A.S.** P4 held **PLN 56m** of 3S Box bonds at end-H1, described as temporary. P4 keeps use of the DCs via a **long-term contract with 3S Box**. P4 FY2024 accounts record a profit on "sale and leaseback" of subsidiaries including 3S Box | O / M | S17, S18 |
| 4 Dec 2024 | Deal release lists OpCore DCs "in Poland". Polish press names them "3S Data Center" | O / M | S1, S16 |

Sale price of 3S Box to OpCore: **U**. The PLN 56m bond figure is not a price.

### 9.2 Polish site table

| # | Site | Address (aggregator) | Current branding (aggregator) | Size / MW | Standard | Use | Label / Conf. |
|---|---|---|---|---|---|---|---|
| 1 | Katowice DC | ul. Ligocka 103, Katowice | "PLAY Katowice DC" | Part of 4,400 m² Katowice site total | Tier III (Play B2B) | Play captive plus colo | O / L |
| 2 | Katowice DC 2 | ul. Gospodarcza 12, Katowice (3S Data Center S.A. registered address) | "PLAY Katowice DC 2" | U | Tier III | As above | O / L |
| 3 | Katowice (third object) | U | U | U | U | U | O / M (existence); U (details) |
| 4 | Bytom DC | ul. Szymały 153, Bytom | "PLAY Bytom DC" | 750 m² (new build) | U | As above | O / L |
| 5 | Warsaw DC | Annopol 3, Warsaw | "PLAY Warsaw DC" | >1,250 m²; up to 385 cages | Tier III / Rated 3 | As above | O / L |
| 6 | Kraków DC | ul. Królewska 57, Kraków | "PLAY Krakow DC" | ~1.44 MW | 2N power, N+1 cooling | As above | O / L |
| 7 | Gdańsk DC | ul. Nowy Świat 40, Gdańsk | "PLAY Gdansk DC" | >500 m² | U | As above | O / L |

### 9.3 Poland attributes

| Question | Established state | Label / Conf. |
|---|---|---|
| Sites from Play | All seven, via 3S Box | O / M |
| Operating MW | U (Kraków ~1.44 MW only). Early 3S total gross area ~5,000 m² for 4 facilities | O / L; U |
| Land / ownership | U. Legal owner of the buildings (3S Box vs 3S Data Center S.A.) is U | U |
| Captive vs third-party | Mixed. Play has long-term use rights (captive, related-party). Play B2B markets colocation, cloud, DRaaS and IaaS from the same sites. Third-party share is **U** | O / M (captive right); U (mix) |
| Scaleway / iliad use | Not established for Scaleway. Play is an iliad subsidiary | U / O |
| Expansion plans | No Polish project announced. A 2026 secondary piece says more centres are planned in Poland | O / L |
| Included in capacity figures | Yes for 131 MW (May 2024), 15 DCs, "50 MW spans… Poland". No for the job-advert ">50 MW" (France only) | O / M-L |
| Current branding | Aggregators still label them "PLAY … DC". Play's B2B site still markets them | O / L |
| Recent expansion | None found after 2024 | U |

---

## 10. Commercial / customer position

### 10.1 Customer composition

| Customer group | Evidence | Type | Label / Conf. | Source |
|---|---|---|---|---|
| Scaleway (iliad) | "Privileged client". Hosts Nabu (1,016 H100) at DC5 | **Related-party, named** | O / M | S2, S64 |
| Free (iliad, France) | Named customer | **Related-party, named** | O / M | S12 |
| Play (iliad, Poland) | Named customer. Long-term use contract over the 7 Polish DCs | **Related-party, named** | O / M | S12, S17 |
| Kyutai (iliad co-founded AI lab) | Named customer | **Related-party, named** | O / M | S12 |
| Free Pro (iliad B2B) | Legacy operator of Lyon and Marseille sites | Related-party; relationship **U** | O / L | S40 |
| Hyperscalers | "Several hyperscalers" (May 2024). "Hyperscalers, techcos and large corporates" (Dec 2024). **None named** | **External, unnamed** | O / M | S1, S12 |
| Enterprise | ">150 blue-chip B2B customers" | External, unnamed | O / M | S12 |
| Government | None found | U | | |
| AI customers | Mistral AI used Scaleway's Nabu cluster (a Scaleway customer, indirect to OpCore). "Unprecedented" hyperscaler and AI demand (CEO) | Indirect / marketing | O / M | S2, S64 |
| Telecom carriers | MRS1 and Lyon: ">30 international operators" on site | Interconnection tenants | O / L | S40 |

### 10.2 Contracting

| Item | State | Label / Conf. |
|---|---|---|
| Contracted MW | 31 MW (2024, whole portfolio) | O / L |
| Pre-leased development capacity | None disclosed | U |
| Lease tenor | Play: "long-term" (tenor U). Others U | O / M; U |
| Indexation, take-or-pay, expansion options | Not disclosed | U |
| Customer concentration | Not disclosed. Named customers are all iliad-group | U; O / M |
| Related-party revenue share | Not disclosed | U |

### 10.3 Product

| Product | Evidence | Label / Conf. |
|---|---|---|
| Retail colocation (racks, cages) | Aggregator listings for DC2 to DC5, MRS1, Lyon, Poland | O / L |
| Private suites / wholesale | DC5 private suites 1 MW to 16.2 MW (aggregator) | O / L |
| Dedicated building / build-to-suit | "Data centers designed around your needs" (opcore.com) | O / L |
| Cloud adjacency | Scaleway regions hosted in DC3 and DC5 | O / M |
| Interconnection | >30 carriers at MRS1 and Lyon. PeeringDB facility entries (DC5/PAR5) | O / L |
| AI/HPC | "AI-ready", liquid cooling, GPU/HPC optimised (marketing). Nabu at DC5 (installed) | O / M (Nabu); L (marketing) |
| Sovereign infrastructure | "100% European ownership", "sovereign" (marketing) | O / L |
| Certifications | HDS at MRS1 (aggregator). Other certifications U | O / L |

---

## 11. Financial profile

### 11.1 Operating financials

| Metric | Value | Perimeter | Label / Conf. | Source |
|---|---|---|---|---|
| Revenue 2023 | **€28,194,220** | OP CORE SAS statutory (France). Poland likely excluded (the 3S Box purchase was 2024) | O / L | S39 |
| Net income 2023 | **€4,274,672** | OP CORE SAS | O / L | S39 |
| Revenue 2024 | **€60.67m** | OP CORE SAS statutory | O / L | S39 |
| Net income 2024 | **-€5.01m** | OP CORE SAS | O / L | S39 |
| Cash end-2024 | €1.82m | OP CORE SAS | O / L | S39 |
| EBITDA | "~€35m annual profit before financing costs, taxes, D&A" | OpCore (at announcement; perimeter U) | O / L | S16 |
| Revenue growth 2023 to 2024 | +115% | Statutory | D / L | S39 |
| EV / EBITDA at €860m and €35m | **~24.6x** | Mixed | D / L | S1, S16 |
| Operating profit, capex, cash flow (consolidated OpCore) | Not disclosed | | U | |
| Iliad segment disclosure | No OpCore segment found. iliad reports OpCore as an equity-accounted investee from 31 Mar 2025. France EBITDA fell in Q1 2026 partly due to deconsolidation | O / M | S4, S6 |
| Historical pre-carve-out financials | Not separately disclosed | U | |

### 11.2 Transaction valuation reconciliation

| Item | Value | Label / Conf. |
|---|---|---|
| EV (100%) | €860m | O / M |
| Consideration for 50% | €440m (S6) / ~€400m (S7) | O / L |
| Implied 100% equity | €880m (at €440m) / ~€800m (at €400m) | D / L |
| Implied net debt | -€20m (at €440m) / ~€60m (at €400m) | D / L |
| iliad gain | €466m | O / M |
| Implied carrying amount of 100% net assets (IFRS 10 loss of control: gain = consideration + fair value of retained 50% minus carrying amount) | At €440m + €440m: **~€414m** | D / L (depends on consideration) |
| "€700m capital gain" | One extraction. Appears to conflate H1 2026 net profit with the gain | O / L (Conflict C11) |
| Debt assumed / put in place | €650m senior facility. Drawn amount at close **U** | O / M; U |
| Capital injected | None disclosed at closing | U |
| iliad balance-sheet effect | Q1 2025 net debt €9.7bn, leverage 2.5x (from 2.7x at FY2024). "Equity FCF €216m excluding OpCore proceeds" | O / M |

### 11.3 Development capex by project

| Project | Capex | Label / Conf. |
|---|---|---|
| Existing sites to 131 MW | >€800m ("next few years") | O / L |
| Montereau | ~€4bn | O / M |
| DC6 | U | U |
| DC5 extension | U | U |
| Platform plan | >€2.5bn (iliad plus InfraVia, ~10 years) | O / M |
| iliad OpCore plus Scaleway envelope | ~€4bn over 7 to 8 years | O / L |

**D/L.** The ~€4bn Montereau budget exceeds the >€2.5bn platform plan announced in Dec 2024. No source reconciles the two.

### 11.4 Capital availability (what is actually documented)

| Source of capital | Documented | Label / Conf. |
|---|---|---|
| Shareholder equity commitments | "Plan to invest more than €2.5bn" (joint). No binding commitment amount, split or schedule disclosed | O / M; U (binding) |
| Equity injections to date | None disclosed | U |
| Capex facility | €400m | O / M |
| Term loan | €200m | O / M |
| RCF | €50m | O / M |
| Accordion / incremental | Not disclosed | U |
| Stated debt capacity | Up to 75% of investment needs via bank debt (see Section 12.2) | O / M |
| Montereau financing | Not disclosed | U |

---

## 12. Debt and capital structure

### 12.1 Facility-by-facility

| Facility | Amount | Borrower(s) | Purpose | Tenor | Margin | Amortisation | Label / Conf. | Source |
|---|---|---|---|---|---|---|---|---|
| Capex facility | **€400m** | "Borrowers" (plural; identities U) | Development capex (I from name) | U | U | U | O / M | S9 |
| Term loan | **€200m** | As above | "To facilitate the sale by the iliad Group to InfraVia of a 50% stake" (package purpose) | U | U | U | O / M | S9 |
| RCF | **€50m** | As above | General / liquidity (I from type) | U | U | n/a | O / M | S9 |
| **Total senior** | **€650m** | | | | | | O / M | S8, S9, S10 |

| Term | State | Label / Conf. |
|---|---|---|
| Date | Closed around the Apr 2025 closing. White & Case release ~May 2025 (BeBeez 9 May 2025) | O / M |
| Underwriters | Crédit Agricole, ING, **MUFG**, Société Générale | O / M |
| Other lender | ABN AMRO | O / M |
| Arrangers / bookrunners (titles) | "Underwriters" is the only role label found. MLA or bookrunner titles U | O / M; U |
| Guarantors | U | U |
| Security package | U | U |
| Covenants, leverage, DSCR, LTV tests | U | U |
| Acquisition baskets | U | U |
| Draw conditions, pre-let requirements | U | U |
| Hedging | U | U |
| Green / sustainability-linked features | None disclosed | U |
| Accordion | U | U |
| Legal counsel | White & Case (lenders), Clifford Chance (borrowers) | O / M |
| Financial advisers | RBC Capital Markets and Lazard (listed on the financing entry; also sell-side M&A advisers) | O / M |
| Shareholder funding | U | U |
| Recognition | Shortlisted, TMT Finance Awards EMEA 2026 | O / M |

### 12.2 The "75%" statement

| Question | Answer | Label / Conf. |
|---|---|---|
| Who said it | Joint iliad / InfraVia release, 4 Dec 2024 (restated in closing coverage) | O / M |
| Exact wording (EN) | "dedicated financing that will cover **up to 75%** of the required investment in OpCore with bank debt" / "covers up to 75% of its investment needs through bank debt" | O / M |
| What it refers to | "Investment needs" / "required investment" of OpCore, in the context of the >130 MW plan (c.100 MW Paris DC) and later "multiple hundreds of MW" | O / M |
| Debt-to-cost, capacity, policy or availability? | The wording ("dedicated financing that will cover up to") reads as a **ceiling on bank-debt share of investment cost**. It is not stated as a covenant or LTV test. Whether it is a target policy or indicative availability is **U** | D / M (reading); U (legal nature) |
| All development or one programme? | Not specified. It was stated before Montereau existed, so it cannot have been sized on Montereau (D). Application to Montereau is **U** | D / M; U |
| Illustrative arithmetic only | On €2.5bn: up to ~€1.9bn debt and ≥~€0.6bn equity. On €4bn Montereau: up to €3.0bn debt and ≥€1.0bn equity. Neither is a disclosed plan | D (illustrative) |
| Relation to the €650m | €400m capex facility vs ">€800m" capex to 131 MW implies the facility covers ~50% of that programme | D / L |

---

## 13. MUFG relationship map

| Level | Transaction | Date | MUFG entity | Role | Label / Conf. | Source |
|---|---|---|---|---|---|---|
| **Direct (OpCore)** | €650m senior financing (€400m capex, €200m TL, €50m RCF) | ~Apr 2025 | "MUFG" (legal entity U; likely MUFG Bank, Ltd.) | **Underwriter** (with CA, ING, SG) | O / M | S9 |
| Direct advisory | No MUFG advisory role found on the equity sale. Lazard and RBC were sell-side; PWP was buy-side | Dec 2024 to Apr 2025 | n/a | None found | O / M (absence in listed roles) | S9, S53 |
| **Shareholder (InfraVia)** | No InfraVia-level MUFG financing or advisory relationship found. The PŚO (InfraVia / Play JV) PLN 5.125bn financing in 2023 lists BNP Paribas BP, CA, KfW IPEX, Santander BP, SG, EIB, BGK, Pekao and PKO. MUFG is not among them | 2023 | n/a | None found | U | S52 |
| **Iliad** | €5bn bank facilities (€1bn TL, €2bn bridge-type facility, €2bn RCF) | 27 Jul 2022 | "MUFG" | **Additional Arranger** | O / M | S48 |
| Iliad | Inaugural €500m green bond (4.25%, ~5 yr) | 22 Oct 2024 | "MUFG" | **Joint Lead Manager** | O / M | S49 |
| Iliad | €600m bond (4.25%) | Sep 2025 | "MUFG" | **Joint Lead Manager** | O / M | S50 |
| Iliad | €500m bond | Apr 2024 | "MUFG" | Role unclear in extraction (co-manager vs JLM) | O / L | S49 |
| Iliad | €10bn bank financing commitments | 19 Jun 2026 | U | The index returned the 2022 arranger list verbatim. Treated as unreliable | **U** | S51 |

MUFG's general sector activity is not treated as evidence of a relationship.

---

## 14. Management and execution capability

### 14.1 Leadership table

| Role | Name | Appointed | Prior employer / experience | Label / Conf. | Source |
|---|---|---|---|---|---|
| CEO; Président and DG of OP CORE SAS | **Arnaud (Brindejonc) de Bermingham** | Led OpCore since 1 Jul 2023. Describes himself as a "cofounder… leading the Company for 20 years" | Co-founder, former president and CEO of Scaleway (Online) | O / M | S2, S39, S44 |
| Chairman | **Thomas Reynaud** | By Apr 2025 | CEO, iliad Group | O / M | S2 |
| CFO | U. One LinkedIn-derived listing shows "Nelso da Silva, Ingénieur CFO Datacenter" (title ambiguous) | U / L | | S54 |
| CTO (development / construction) | **Hugues Bodin** | 2025 | OVHcloud Head of Data Centre Construction Programmes (from 2018). Earlier renewable-energy project manager and business developer. ">10 years of large-scale DC construction in Europe" | O / L | S54, S31 |
| Business development and strategic partnerships | **Patrick Lastennet** | U | 13 years at Interxion / Digital Realty in business development and strategy (AI, data protection, capital markets / HFT ecosystems) | O / L | S54 |
| VP Sales | **Nicolas Fontés** | U | U | O / L | S54 |
| Marketing Director | **Erwan Colin** | U | U | O / L | S54 |
| HR Director | Sélima P. | U | U | O / L | S54 |
| COO, Energy, Sustainability, Hyperscale sales | Not identified | | | U | |

### 14.2 Organisation

| Item | State | Label / Conf. |
|---|---|---|
| Headcount | 46 at carve-out (Jul 2023). "About fifty expert employees" (job adverts). 50 to 99 (2023 register band) | O / M-L |
| Recruitment | Active adverts for DC technicians (Paris, Lyon, Marseille), DevOps, support, accounting | O / L |
| Engineering capacity | Hybrid model implied. In-house CTO; external engineering (neo-db as maîtrise d'œuvre on DC6) and architect (Joséphine Larère Architecte) | O / L |
| Delivery partners (EPC) | Not identified | U |
| Post-InfraVia organisational change | CTO hire (2025). Other changes U | O / L |

---

## 15. Technical / energy position

Marketing claims and installed or observed capability are kept separate.

| Topic | Installed / observed | Marketing claim | Label / Conf. |
|---|---|---|---|
| Cooling | DC3 indirect free cooling. DC5 free cooling plus adiabatic (evaporative), 30°C cold aisle, Armstrong Evapack case study | Modular HDD with native air and liquid cooling | O / M (installed); O / L (claim) |
| Liquid cooling | No installed direct liquid cooling deployment found | "Large-scale direct liquid cooling" readiness | U; O / L |
| Rack density | U | "Optimized for GPU clusters and HPC" | U; O / L |
| AI/HPC | Nabu (1,016 H100) and Jeroboam at DC5 (Scaleway-owned compute) | "AI-ready", "AI Factory" | O / M |
| PUE | DC5 1.16 (Scaleway). DC3 1.36 (Online live PUE page) | n/a | O / M-L |
| Water use | U | n/a | U |
| Heat reuse | DC4 to Paris Habitat, 150 homes, 10-year contract | n/a | O / M |
| Renewable / low-carbon | Online DCs 100% renewable (GOs) from Jan 2018. DC5 wind and hydro GOs | "Exclusive renewable sourcing since 2018". "Direct energy agreement with EDF… decarbonized nuclear for all our sites". "730 MW with EDF" | O / M (GOs); O / L (EDF claim); U (contract terms) |
| Nuclear / EDF arrangements | Montereau exclusive negotiations (land). No CAPN or PPA disclosed | See above | O / M; U |
| Backup generation | DC5 gensets 49.5 MW rising to 71.9 MW thermal (+8 sets). Lyon 72 h autonomy | n/a | O / M-L |
| Grid infrastructure | Montereau: RTE 400 kV fast-track pre-reservation 700 MW | "Fastest fast-tracked connectivity" | O / M |
| Transformers, electrical suppliers | U | n/a | U |
| Modularity | U (installed) | 1 MW external power and cooling modules, scalable to 250 MW | O / L |

---

## 16. Corporate action history

| Date | Event | Counterparty | Asset / perimeter | Structure | Value | Explicit rationale | Source |
|---|---|---|---|---|---|---|---|
| Dec 2008 | Acquisition of Alice ADSL | Telecom Italia | Includes Vitry "Iliad Datacenter" (DC2 lineage) | Share acquisition (iliad) | U here | U | S43 |
| 2012 | Acquisition of Paris 15e anti-atomic shelter (DC4) | U | DC4 | Asset acquisition | U | U | S42 |
| 2012 | DC3 opened | n/a | DC3 Vitry | Organic build | U | U | S41 |
| ~2013 | Exit from DC1 Bezons | Spherion (owner) | DC1 | Vacated | n/a | U | S43 |
| 2018 | DC5 opened | n/a | DC5 | Organic build | U | U | S41 |
| Aug 2019 | Play buys 3S Group | 3S shareholders | 4 DCs plus 3,800 km fibre | Share acquisition | EV €96m | Support mobile network and 5G | S20 |
| 2019 to 2022 | 3S buys existing Gdańsk DC; builds Katowice and Bytom DCs | Seller U | Gdańsk DC (7th object) | Asset acquisition | U | U | S21 |
| 2019 | Lyon Rockefeller DC launched by Jaguar Network with DCforData | DCforData | Lyon DC | Partnership | U | U | S63 |
| 18 Nov 2020 | OP CORE SAS incorporated | n/a | Entity | Incorporation | n/a | n/a | S39 |
| 1 Jul 2023 | Scaleway Datacenter carved out as Opcore | Intra-group | French DC business | Internal carve-out | n/a | "Total separation" from Scaleway | S44 |
| H1 2024 | Play's DCs contributed to 3S Box; 3S Box sold to OpCore S.A.S. | P4 (Play) | 7 Polish DCs | Contribution in kind, share sale, long-term use-back | Price U; PLN 56m bonds held temporarily | Not stated | S17, S18 |
| Summer 2024 | Minority-stake sale process | Antin, Morrison, InfraVia (shortlist) | 50% of OpCore | Auction | n/a | Fund expansion to 131 MW | S11, S59 |
| 4 Dec 2024 | Exclusive negotiations | InfraVia | 50% of OpCore | Secondary share sale | EV €860m | "Develop OpCore into a major independent European hyperscale data center platform" | S1 |
| 21 Feb 2025 | EC clearance M.11845 | EC | n/a | Merger control | n/a | n/a | S3 |
| 31 Mar / 3 Apr 2025 | Closing | InfraVia | 50% | Joint control JV | €440m (L) | As above | S2, S4, S6 |
| ~Apr 2025 | €650m senior financing | CA, ING, MUFG, SG, ABN AMRO | OpCore | Capex facility, TL, RCF | €650m | "To facilitate the sale" and fund expansion | S8, S9 |
| Mar 2025 onward | DC5 extension and DC6 permitting | Prefecture / MRAe | Saint-Ouen-l'Aumône campus | Organic development | U | U | S35, S36 |
| 24 Jul 2025 | Selected by EDF for Montereau | EDF | 20.6 ha EDF land | AMI selection | n/a | EDF: reuse industrial land for high-power DCs | S24 |
| 17 Nov 2025 | Exclusive negotiations | EDF | Montereau site | Negotiation (structure U) | ~€4bn OpCore capex | Sovereignty, AI capacity | S23 |
| May to Jun 2026 | AION consortium (iliad, Scaleway; Opcore as host) | Ardian, Artefact, Bull, Capgemini, EDF, Orange | EU AI Gigafactory bid | Consortium | ~€10bn (consortium) | "Anchor the full AI value chain" in France | S46 |

---

## 17. Regulatory / policy facts

| Area | Fact | Label / Conf. | Source |
|---|---|---|---|
| EU merger control | M.11845 InfraVia / Iliad / OP Core. Joint control. Cleared 21 Feb 2025 under Art. 6(1)(b). Published in the OJ | O / M | S3 |
| French FDI screening | iliad referred to "customary regulatory approvals". A specific French FDI (IEF) filing or approval was not found | U | S1 |
| RTE fast-track | CRE approved on 7 May 2025 an accelerated connection procedure for >400 MW consumers on State-identified sites at 400 kV. CRE deliberation 2025-166 (24 Jun 2025) approved the connection convention | O / M | S33 |
| Fast-track sites | May 2025: Fouju, Montereau, Escaudain, Le Bosquel (700 MW each). Dec 2025: Dunkirk added | O / M | S32 |
| Pre-reservation validity | 9 months, extendable by up to 3 months if a land-allocation process is ongoing | O / M | S32 |
| PINM regime | Loi n° 2026-403 of 26 May 2026 (simplification de la vie économique) allows DCs to be designated "projets d'intérêt national majeur" by decree. Décret 2025-1181 (8 Dec 2025) designated the competent authority for the compatibility procedure. No OpCore designation found | O / M; U (OpCore) | S58 |
| Environmental permitting (ICPE) | DC5 extension: MRAe IdF opinion APJIF-2025-114 (21 Jan 2026). DC6: parallel public consultation for environmental authorisation (Val-d'Oise, 2025 to 2026) | O / M | S35, S36 |
| Planning | Building permits for DC5 extension, DC6 and Montereau: U | U | |
| EDF nuclear offtake (CAPN) | CAPNs succeed ARENH from 2026. Data4 signed first DC CAPN (Sep 2025). No OpCore CAPN found | O / M; U | S57 |
| EU Energy Efficiency Directive | DCs of ≥500 kW IT fall under EED (EU) 2023/1791 Art. 12 reporting, with a delegated regulation setting KPIs. OpCore's filings not found | O / M (law); U (OpCore) | general law |
| Poland | No OpCore-specific Polish regulatory matter found | U | |

No causal link is asserted between any regulation and the InfraVia transaction.

---

## 18. Factual state vector

| Dimension | Established factual state | O/D/I/U | Confidence | Key evidence |
|---|---|---|---|---|
| Ownership | iliad 50% / InfraVia (InfraVia VI Invest S.à r.l., Fund VI) 50% since 31 Mar 2025 | O | M | S3, S4, S45 |
| Governance | EU "joint control". Reynaud chairman; de Bermingham Président/DG and CEO. Board, vetoes and SHA terms unknown | O / U | M / U | S2, S3, S39 |
| Capital availability | >€2.5bn joint investment "plan" (not a disclosed binding commitment); €400m capex facility; no equity injection disclosed | O / U | M | S1, S9 |
| Debt capacity | €650m senior (€400m capex / €200m TL / €50m RCF). Stated ceiling of up to 75% bank debt of investment needs. Terms unknown | O | M | S1, S9 |
| Operating capacity | >50 MW (unit unidentified; Poland inclusion conflicting). 15 DCs (2024) / 13 DCs (2025) | O | L | S29, S30, S12, S15 |
| Under-construction capacity | DC6 34 MW IT reported under construction (L). Dec 2024 "c.100 MW under construction" unidentified | O / U | L | S36, S37, S1 |
| Secured power | "730 MW secured" (undefined). Montereau 700 MW RTE pre-reservation (time-limited) | O | L / M | S29, S32 |
| Energisation timing | Montereau "from 2027" target; 400 MW AI-ready by end-2028 target. No RTE schedule found | O (targets) / U | M | S23, S28 |
| Land | Existing Paris, Lyon, Marseille and Polish sites (tenure U). Montereau land under exclusive negotiation only | O / U | M | S23 |
| Permitting | DC5 extension MRAe opinion (Jan 2026). DC6 ICPE consultation. Montereau none found | O / U | M | S35, S36 |
| Customer contracting | 31 MW contracted (2024). No development pre-lets disclosed | O / U | L | S11 |
| Customer concentration | Not disclosed | U | n/a | |
| Hyperscale exposure | "Several hyperscalers" as customers, unnamed | O | M | S12 |
| Related-party / captive demand | Scaleway (privileged client), Free, Play (long-term use of Polish DCs), Kyutai | O | M | S2, S12, S17 |
| AI/HPC readiness | Nabu H100 cluster installed at DC5 (Scaleway). Liquid cooling and 400 MW AI-ready are marketing claims | O | M / L | S64, S29 |
| Development capability | CTO with OVHcloud construction background (2025). DC5 and DC3 built in-house historically. EPC partners unknown | O / U | L | S54, S41 |
| Geographic footprint | France (Paris region, Lyon, Marseille) and Poland (Katowice, Bytom, Warsaw, Kraków, Gdańsk) | O | M | S1, S22 |
| International expansion | "Multiple hundreds of MW in Europe"; "several GW long term"; Italy mentioned (L). No non-FR/PL site found | O / U | M / L | S1, S15, S56 |
| Management capacity | ~50 employees. Named CEO, CTO, BD, Sales. CFO and COO not identified | O / U | L | S55, S54 |
| Historical M&A | 3S (2019, via Play), Alice DC lineage (2008), DC4 (2012). Intra-group 3S Box transfer (2024). Opportunistic M&A stated as possible (2024) | O | M | S20, S17, S12 |
| Partnerships/JVs | Itself a 50/50 JV. EDF (Montereau, exclusive negotiations). AION consortium (hosting). DC4 heat reuse with Paris Habitat | O | M | S3, S23, S46, S42 |
| Sponsor context | InfraVia European Fund VI (€8bn, closed Mar 2026). InfraVia also 50% of PŚO with Play. Investment period unknown | O / U | M | S45, S52 |
| MUFG relationship | Direct: underwriter of €650m OpCore facility. Iliad: arranger (2022), JLM (Oct 2024, Sep 2025). InfraVia: none found | O / U | M | S9, S48, S49, S50 |

---

## 19. Open questions / evidence gaps

| Priority | Question | Best likely source |
|---|---|---|
| **P1** | Operating MW by site, split IT vs electrical, and whether Poland is in the ">50 MW" | OpCore investor or lender materials; iliad annual report notes; RTE/Enedis connection data |
| **P1** | Definition and breakdown of "730 MW secured" and "530 MW under development" | opcore.com (direct read); OpCore management; EDF |
| **P1** | Montereau legal status: definitive agreement with EDF? Sale, lease or surface right? Exclusivity expiry? | EDF and iliad press releases after Nov 2025; land registry (Seine-et-Marne); municipal council minutes of La Grande-Paroisse and Vernou-la-Celle |
| **P1** | Montereau grid: signed RTE fast-track convention, capacity and date, cost allocation; status of the 700 MW pre-reservation after its 9 to 12 month window | RTE fast-track register; CRE deliberations; RTE services portal |
| **P1** | Identity of the Dec 2024 "c.100 MW Paris-region DC under construction" | iliad FY2024/FY2025 annual reports; Dec 2024 release (direct read); DC6 ICPE file |
| **P1** | DC6: IT MW (34 vs 90 vs 16), construction status, ICPE decision, grid connection, RFS | Val-d'Oise prefecture ICPE arrêté; registre-numerique DC6 file; Enedis/RTE |
| **P1** | Contracted MW today, named external customers, pre-lets, tenor, indexation | Lender materials; customer announcements; iliad related-party note |
| **P1** | €650m facility terms: borrowers, guarantors, security, covenants, draw conditions, pre-let conditions, accordion | Facility agreement (private); Infrastructure Investor Deals and IJGlobal records; OP CORE SAS accounts notes |
| **P1** | Actual consideration paid (€440m vs ~€400m) and any debt repaid to iliad at closing | iliad H1 2025 financial report cash-flow statement (direct read) |
| **P2** | Shareholder agreement: reserved matters, deadlock, transfer restrictions, funding obligations | Not public. The EC decision text may describe control rights |
| **P2** | Board composition and the Reynaud "Chairman" vs SAS Président distinction | OP CORE SAS statuts (Infogreffe); RNE extract |
| **P2** | Consolidated OpCore revenue, EBITDA, capex (France plus Poland) | iliad equity-accounted investee note (FY2025 URD); OP CORE SAS 2025 accounts |
| **P2** | Polish sites: MW, ownership, 3S Box vs 3S Data Center structure, third-party share | KRS filings (3S Box, 3S Data Center S.A.); P4 FY2024 consolidated FS notes |
| **P2** | Paris sites 5 and 6 (only four identified) and the two Lyon sites' transfer to OpCore | OpCore site list (direct read); Free Pro communications |
| **P2** | EDF energy supply contract terms ("direct energy agreement"); CAPN or PPA | EDF; OpCore |
| **P2** | AION: role of Opcore and whether Montereau is a named AION site | AION submission summary; EuroHPC selection (after 12 Nov 2026) |
| **P2** | InfraVia Fund VI first-close date and investment period | InfraVia; Infrastructure Investor; Preqin |
| **P3** | EPC, electrical and cooling suppliers | Trade press; supplier case studies |
| **P3** | Water usage, WUE, EED reporting data | EU EED database; OpCore CSR materials |
| **P3** | CFO and COO identity | OpCore LinkedIn; register filings |
| **P3** | MUFG role in iliad's June 2026 €10bn financing | iliad 19 Jun 2026 release (direct read) |

---

## 20. Conflict register

| ID | Topic | Competing values | Sources | Status |
|---|---|---|---|---|
| C1 | 131 MW meaning | "Including in-development projects" (May 2024) vs "at existing sites" target (ION) vs "current power capacity" (Telepolis) | S12, S11, S16 | Unresolved. Best reading is existing-site build-out (I) |
| C2 | DC count | 15 (May 2024; InfraVia page) vs 13 (Feb and Apr 2025) | S12, S15, S7 | Unresolved |
| C3 | Paris-area DC count and >50 MW perimeter | 6 Paris + 1 Lyon + 1 Marseille (2024) vs 5 Paris + 2 Lyon + 1 Marseille (job advert). ">50 MW" includes Poland (opcore.com) vs France only (job advert) | S12, S55, S30 | Unresolved |
| C4 | Closing date | 31 Mar 2025 (iliad accounts) vs 3 Apr 2025 (releases; "completed 3 April") | S4, S2 | Likely accounting date vs announcement date (I) |
| C5 | c.100 MW Paris DC identity | Montereau (lafibre.info, some rewrites) vs not Montereau (timeline) | S60, S1, S23 | Resolved as not Montereau (D/M). Identity U |
| C6 | "DC6" label | Aggregators: DC6/PAR6 = Montereau (1 chemin du Port). Prefecture: DC6 = Saint-Ouen-l'Aumône warehouse conversion | S40, S36 | Prefecture treated as authoritative |
| C7 | RTE pre-reservation start | 9 months from 20 May 2025 vs 9 months from 15 Dec 2025 | S32 | Unresolved (possible re-issue with 5th site) |
| C8 | DC6 capacity | 34 MW IT (ICPE) vs 90 MW (Universfreebox) vs 16 MW (engineer) | S36, S37, S38 | Unresolved. Likely different units or phases (I) |
| C9 | Who chairs OpCore | Reynaud "Chairman of OpCore" vs de Bermingham "Président" of OP CORE SAS | S2, S39 | Possibly different bodies or entities (I) |
| C10 | Consideration for 50% | €440m vs ~€400m | S6, S7 | Unresolved |
| C11 | Gain on sale | €466m (H1 2025 report) vs "€700m capital gain" (extraction) | S4 | €466m preferred. €700m appears conflated with H1 2026 net profit |
| C12 | Montereau distance and land | 75 km (EDF) vs 65 km (OpCore). 20 ha vs 20.6 ha | S23, S29, S24 | Minor. Unresolved |
| C13 | Montereau plant type | "Coal" (DCD) vs "fuel oil" (Révolution Énergétique) vs "thermal" (EDF) | S25, S23 | EDF wording "thermal" retained |
| C14 | June 2026 iliad financing arrangers | Index returns the 2022 list verbatim | S51, S48 | Treated as U |
| C15 | MRS1 address | 71 av André Roussin vs 70 chemin du Passet | S40 | Unresolved |
| C16 | Fast-track site count | "Four projects" (DCmag, Jul 2025) vs five sites (RTE Dec 2025) | S24, S32 | Timing difference (Dunkirk added Dec 2025) |
| C17 | AION capacity | 200 MW initial vs 100 MW scaling to 1 GW | S46 | Unresolved. Reports vary |
| C18 | InfraVia stake description | "via its infrastructure funds" (plural) vs Fund VI named at close | S1, S45 | Consistent if Fund VI is the sole investing fund (U) |

---

## 21. Hypothesis parking lot (non-canonical)

Every item is **I**. None is ranked or recommended. No target is named.

| # | Hypothesis (I) | Factual basis | What would falsify it |
|---|---|---|---|
| H1 | The "730 MW secured" headline is largely the Montereau 700 MW RTE site pre-reservation plus existing-site capacity | 700 MW is the only documented large block; opcore.com ties 730 MW to EDF | An OpCore breakdown showing other secured blocks, or Montereau reservation lapse with the headline unchanged |
| H2 | The "530 MW under development, Paris region" headline aggregates Montereau (~400 MW AI-ready) with the Saint-Ouen-l'Aumône campus (DC6 plus DC5 extension) | Arithmetic proximity only | Any OpCore site-level breakdown with different components |
| H3 | The Dec 2024 "c.100 MW Paris DC under construction" is the DC6 / DC5-extension programme | Only identified Paris new-build in period; 90 MW press figure | iliad or OpCore naming another site |
| H4 | Operating revenue is materially related-party (Scaleway, Free, Play, Kyutai) | Named customers are all iliad-group; Play long-term use contract; Scaleway "privileged client" | Disclosure of related-party revenue share below a material threshold, or named external anchor tenants |
| H5 | The €200m term loan was sized to fund a distribution or repayment to iliad at closing | Package purpose stated as "to facilitate the sale" | iliad cash-flow note showing proceeds equal to share price only, or facility terms showing TL undrawn |
| H6 | Montereau cannot be funded inside the current €650m structure without new facilities and/or shareholder equity | ~€4bn capex vs €400m capex facility | Announcement of a Montereau-specific financing that is within existing facilities (unlikely by size), or of a third-party capital partner |
| H7 | The RTE pre-reservation window created a timing constraint on converting Montereau exclusive negotiations into a definitive agreement | 9 to 12 month pre-reservation validity; exclusive negotiations from Nov 2025; GridReadiness June 2026 lists site as still "accessible" | Evidence of an RTE extension, or of a signed convention before the window closed |
| H8 | Iliad's role in AION is a demand-side channel for OpCore capacity | Opcore named as hosting partner; Scaleway and iliad are consortium members | EuroHPC selection documents naming non-OpCore hosting sites only, or AION not selected |
| H9 | The Polish perimeter functions mainly as captive Play infrastructure with ancillary colocation | Sale-and-leaseback structure; Play branding persists; small MW | Disclosure of large third-party Polish contracts or a Polish expansion project |

---

## 22. Source register

All sources were retrieved via **search-index extraction**. None was read directly (Section 0).

| ID | Publisher | Title | Date | URL | Primary / secondary | Claims supported |
|---|---|---|---|---|---|---|
| S1 | iliad / InfraVia | The iliad Group and InfraVia partner to develop a major European Hyperscale data center platform (EN and FR) | 4 Dec 2024 | https://infraviacapital.com/wp-content/uploads/2024/12/2024-12-04-PR-InfraVia-iliad-OpCore-EN-Final.docx.pdf ; https://www.iliad.fr/media/CP_041224_d50f6ea742.pdf | Primary | EV €860m, 50%, 75% debt, >130 MW, c.100 MW "en cours", >€2.5bn, sites, Levita quote |
| S2 | iliad / InfraVia | The iliad Group and InfraVia have closed the transaction… | 3 Apr 2025 | https://www.iliad.fr/media/CP_030425_groupe_iliad_Eng_d6e87e79ed.pdf ; https://infraviacapital.com/wp-content/uploads/2025/04/2025-04-03-PR-Eng-InfraVia-Closing-OpCore.docx.pdf | Primary | Closing, Reynaud as Chairman, Scaleway privileged client, construction underway, CEO quote |
| S3 | European Commission / EUR-Lex | M.11845 InfraVia / Iliad / OP Core | 21 Feb 2025 | https://competition-cases.ec.europa.eu/cases/M.11845 ; https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:C_202500944 | Primary (regulator) | Joint control, vehicles, clearance date, Niel control |
| S4 | iliad | Financial Report First Half 2025 | Aug 2025 | https://www.iliad.fr/media/iliad_Group_H12025_financial_report_c5a8c4ac3a.pdf | Primary (filing) | 31 Mar closing, €466m gain, equity accounting, held for sale |
| S5 | iliad | Q1 2025 results slides and release | 22 May 2025 | https://www.iliad.fr/media/Slideshow_220525_56ca7a4814.pdf | Primary | Net debt €9.7bn, leverage 2.5x |
| S6 | Investing.com | Earnings call transcript: Iliad Q4 2025 (and Q1 2026) | Mar and May 2026 | https://www.investing.com/news/transcripts/earnings-call-transcript-iliads-q4-2025-growth-outpaces-european-telecom-peers-93CH-4577892 | Secondary (transcript) | €440m, ~€4bn envelope, Montereau question |
| S7 | Usine Digitale | Iliad cède 50% du capital d'Opcore… | Apr 2025 | https://www.usine-digitale.fr/editorial/iliad-cede-50-du-capital-d-opcore-sa-filiale-dediee-aux-data-centers-au-fonds-infravia.N2230158 | Secondary | ~€400m, 13 DCs |
| S8 | White & Case; BeBeez | White & Case advises lenders on OpCore financing | ~May 2025 | https://www.whitecase.com/news/press-release/white-case-advises-lenders-opcore-financing ; https://bebeez.eu/2025/05/09/white-case-advises-lenders-on-opcore-financing/ | Primary (law firm) | €650m senior financing |
| S9 | TMT Finance | TMT Finance Awards EMEA 2026 Shortlists | 2026 | https://www.tmtfinance.com/emea/awards/shortlists | Secondary (trade) | Tranches, underwriters incl. MUFG, ABN AMRO, advisers, counsel |
| S10 | Infrastructure Investor Deals | InfraVia and Iliad close €650m OpCore data centre debt financing | 2025 | https://www.infrastructureinvestordeals.com/deals/infravia-and-iliad-close-e650m-opcore-data-centre-debt-financing | Secondary | Financing closed |
| S11 | ION Analytics (Infralogic) | Antin drops out of Iliad's French data centre sale; Iliad shortlists bidders for Opcore | 2024 | https://ionanalytics.com/insights/infralogic/antin-drops-out-of-iliads-french-data-centre-sale/ | Secondary | 15 DCs, 31 MW contracted, 131 MW, >€800m capex, bidders |
| S12 | DCD | Iliad to invest €2.5 billion into OpCore data center unit | May 2024 | https://www.datacenterdynamics.com/en/news/iliad-to-invest-25-billion-into-opcore-data-center-unit/ | Secondary | 6+1+1+7 DCs, 131 MW, customers, opportunistic M&A |
| S13 | TelecomTV | Iliad preps European datacentre expansion | May 2024 | https://www.telecomtv.com/content/digital-platforms-services/iliad-preps-european-datacentre-expansion-50532/ | Secondary | 15 DCs, >150 customers, Reynaud quote |
| S14 | iliad (GlobeNewswire) | The iliad Group records solid first-quarter results | 30 May 2024 | https://www.globenewswire.com/news-release/2024/05/30/2890416/0/en/Press-Release-The-iliad-Group-records-solid-first-quarter-results.html | Primary | €2.5bn plan context |
| S15 | iliad | Le Groupe iliad investit 3 milliards d'euros dans l'IA | 7 Feb 2025 | https://www.iliad.fr/media/CP_Groupe_070225_3ac0e91df8.pdf | Primary | 13 DCs, several GW ambition |
| S16 | Telepolis.pl | Iliad i InfraVia łączą siły. Właściciel Play sprzedaje centra danych | Dec 2024 | https://www.telepolis.pl/wiadomosci/iliad-play-infravia-centra-danych-opcore-sprzedaz | Secondary | €35m EBITDA, PLN 3.7bn, quadruple 131 MW |
| S17 | TELKO.in | Play z wynikami po Q2. Sprzedał swoje data centers | 2024 | https://www.telko.in/play-z-wynikami-po-q2-sprzedal-swoje-data-centers | Secondary | 7 DCs to 3S Box, sold to OpCore S.A.S., PLN 56m bonds, long-term use |
| S18 | P4 (Play) | H1 2024 management report; FY2024 consolidated financial statements | 2024 to 2025 | https://ir.play.pl/upload/reports/Skonsolidowane%20Sprawozdanie%20Finansowe%20Grupy%20P4%20sp.%20z%20o.o.%202024%20rok.pdf | Primary (filing) | Sale and leaseback of subsidiaries incl. 3S Box |
| S19 | TELKO.in | Play poszuka „partnera" do swoich data centers? | U | https://www.telko.in/play-poszuka-partnera-do-swoich-data-centers | Secondary | Harion quote, 3S footprint |
| S20 | Bankier.pl; Telecompaper; strefainwestorow | Play acquisition of 3S | Jun to Aug 2019 | https://www.bankier.pl/wiadomosc/Play-ma-przedwstepna-umowe-nabycia-grupy-3S-wartosc-przedsiebiorstwa-to-96-mln-euro-opis-7696090.html | Secondary | EV €96m, 4 DCs, fibre |
| S21 | gsmonline.pl; TELKO.in; CRN | 3S buys Gdańsk data center; new 3S DCs | ~2020 to 2022 | https://gsmonline.pl/artykuly/data-center-3s-w-gdansku-play-iliad | Secondary | 7th object, site counts, areas |
| S22 | Datacentermap; Play B2B | PLAY DC pages (Katowice, Bytom, Warsaw, Kraków, Gdańsk) | n/a | https://www.datacentermap.com/c/3services-factory-sa/ | Aggregator | Addresses, branding, sizes |
| S23 | EDF / OpCore / InfraVia | EDF and OpCore to develop a high-power data center… Montereau | 17 Nov 2025 | https://www.edf.fr/en/the-edf-group/dedicated-sections/journalists/all-press-releases/edf-and-opcore-to-develop-a-high-power-data-center-on-site-of-former-thermal-power-plant-in-montereau-vallee-de-la-seine-wider-paris-metropolitan-region ; https://www.iliad.fr/media/CP_171125_Eng_e9fd578b7c.pdf | Primary | Exclusive negotiations, €4bn, 700 MW, 2027, AMI 3 Mar 2025, Reynaud quote |
| S24 | DCmag | EDF a retenu OPCORE… Montereau | Jul 2025 | https://dcmag.fr/edf-a-retenu-opcore-pour-construire-et-exploiter-le-futur-datacenter-de-montereau-vallee-de-la-seine/ | Secondary | 24 Jul selection, 20.6 ha, 4 fast-track projects |
| S25 | DCD; BeBeez; Structure Research | OpCore to develop data center on EDF-owned land outside Paris | Aug 2025 | https://www.datacenterdynamics.com/en/news/opcore-to-develop-data-center-on-edf-owned-land-outside-paris/ | Secondary | Chéron announcement, 700 MW |
| S26 | Le Monde Informatique | EDF retient Opcore et Eclairion pour créer des datacenters IA | Jul 2025 | https://www.lemondeinformatique.fr/actualites/lire-edf-retient-opcore-et-eclairion-pour-creer-des-datacenters-ia-98510.html | Secondary | Selection context |
| S27 | Next.ink | OpCore et EDF négocient un datacenter à 4 milliards d'euros en Seine-et-Marne | Nov 2025 | https://next.ink/209358/opcore-et-edf-negocient-un-datacenter-a-4-milliards-deuros-en-seine-et-marne/ | Secondary | Phasing, fast-track |
| S28 | Usine Digitale; franceinfo; economie.gouv.fr | Choose France coverage | 17 Nov 2025 | https://www.usine-digitale.fr/editorial/choose-france-opcore-et-eclairion-investissement-massivement-pour-construire-des-data-centers-dans-l-hexagone.N2241509 | Secondary / government | 400 MW AI-ready end-2028; largest investment |
| S29 | OpCore | opcore.com home, /100-sovereign-data-centers, /datacenters | 2025 to 2026 | https://www.opcore.com/ | Primary (marketing) | 730 MW, since 1999, EDF agreement, HDD modules |
| S30 | DCD | OPCORE company profile | 2025 to 2026 | https://www.datacenterdynamics.com/en/company/opcore/ | Secondary | 50 / 100 / 530 MW |
| S31 | Teratec | Hugues Bodin OPCORE keynote | 2025 | https://www.teratec.fr/library/pdf/forum/2025/Presentations/K04_Hugues_Bodin_Opcore.pdf | Primary (presentation) | HDD, Montereau 400 MW AI-ready by 2028 |
| S32 | RTE | Pre-reservation of capacity on four suitable sites; Fast-track site certification (Dec 2025) | May and Dec 2025 | https://www.services-rte.com/en/news/pre-reservation-of-capacity-on-four-suitable-sites.html ; https://www.services-rte.com/files/live/sites/services-rte/files/Fast-Track%20site%20Certification%20-%205%20sites.pdf | Primary (grid operator) | Four sites, 700 MW, validity |
| S33 | CRE | Fast-track procedure approval; délibération 2025-166 | 7 May and 24 Jun 2025 | https://www.cre.fr/fileadmin/Documents/Deliberations/2025/240625_2025-166_Convention_raccordement_fast_track.pdf | Primary (regulator) | Procedure, convention |
| S34 | GridReadiness | AI Data Center France Grid Connection: RTE Process & Timeline 2026 | 2026 | https://www.gridreadiness.com/blog/ai-data-center-france-grid-connection-rte-2026 | Secondary (advisory) | Montereau "accessible" Jun 2026 |
| S35 | MRAe Île-de-France | Avis délégué APJIF-2025-114, extension datacenter DC5 | 21 Jan 2026 | https://www.mrae.developpement-durable.gouv.fr/IMG/pdf/2026-01-21_st-ouen-l_aumone_extension_datacenterdc5_delegue.pdf | Primary (authority) | DC5 extension scope, gensets |
| S36 | Préfecture du Val-d'Oise; registre-numerique; CNCE | OP CORE DC6 à Saint-Ouen-l'Aumône (consultation du public parallélisée) | 2025 to 2026 | https://www.val-doise.gouv.fr/Actions-de-l-Etat/Environnement-risques-et-nuisances/INSTALLATIONS-CLASSEES-POUR-LA-PROTECTION-DE-L-ENVIRONNEMENT-ICPE/CONSULTATIONS-DU-PUBLIC-PARALLELISEES-2025-2026/OP-CORE-DC6-a-SAINT-OUEN-L-AUMONE | Primary (authority) | 17,500 m², 34 MW IT |
| S37 | Univers Freebox | Iliad lance la construction de son DC6… | ~Apr 2025 | https://www.universfreebox.com/article/579412/iliad-lance-la-construction-de-son-dc6-un-nouveau-data-center-mega-puissant-pres-de-paris | Secondary | 90 MW, construction, grid challenge |
| S38 | neo-db | Scaleway DC6 Data Center (project page) | U | https://neo-db.expert/project/data-center-dc6/ | Secondary (supplier) | Engineering firm, architect, 16 MW |
| S39 | Annuaire des Entreprises; Pappers; Societe.com | OP CORE (891405227) | 2024 to 2025 | https://annuaire-entreprises.data.gouv.fr/entreprise/op-core-891405227 ; https://www.pappers.fr/entreprise/op-core-891405227 | Primary register (via aggregators) | Entity data, dirigeants, financials, auditor |
| S40 | Datacentermap; datacenters.com; datacenterHawk; DC Hub; inflect | OpCore site pages | n/a | https://www.datacentermap.com/c/opcore/ | Aggregator | Addresses and MW for DC2 to DC5, MRS1, Lyon, PAR6 label |
| S41 | Online; JDN; Scaleway | pue.online.net DC3; Au cœur du data center DC5 | 2019 onward | https://pue.online.net/fr/ ; https://www.journaldunet.com/solutions/cloud-computing/1422270-au-coeur-du-data-center-dc5-de-scaleway-taille-pour-les-gafam/ | Primary / secondary | DC3 PUE, cooling, DC5 design |
| S42 | Univers Freebox; Freenews | DC4 heats 150 social homes | 2016 to 2018 | https://www.universfreebox.com/article/48907/Le-data-bunker-d-Iliad-a-fini-sa-metamorphose-et-chauffe-desormais-150-logements-sociaux | Secondary | Heat reuse, DC4 facts |
| S43 | Wikipedia; HandWiki | Scaleway | n/a | https://en.wikipedia.org/wiki/Scaleway | Aggregator | DC1 and DC2 history |
| S44 | Telecompaper; DCD; Structure Research | Scaleway Datacenter to become Opcore from 01 July | Jul 2023 | https://www.telecompaper.com/news/scaleway-datacenter-to-become-opcore-from-01-july--1467076 | Secondary | Carve-out, 46 staff, 340k servers |
| S45 | InfraVia; Infrastructure Investor; The Tech Capital | Record fundraising at €8bn hard cap for InfraVia's sixth infrastructure fund | Mar 2026 | https://infraviacapital.com/record-fundraising-at-e8bn-hard-cap-for-infravias-sixth-infrastructure-fund/ | Primary | Fund VI size, OpCore in Fund VI |
| S46 | Orange; Bull; Bloomberg; silicon.fr; EuroHPC | AION consortium releases and coverage; EuroHPC AI Gigafactories call | May to Jul 2026 | https://www.orange.com/en/press-release/ardian-artefact-bull-capgemini-edf-le-groupe-iliad-orange-et-scaleway-unissent-leurs-expertises-pour-porter-la-candidature-dune-ai-gigafactory-europeenne-en-france-473064-473064 ; https://www.eurohpc-ju.europa.eu/eurohpc-joint-undertaking-launches-ai-gigafactories-call-2026-07-30_en | Primary / secondary | Consortium, Opcore hosting, deadline |
| S47 | Ardian | Ardian and Verne announce digital infrastructure hub in Île-de-France | 2026 | https://www.ardian.com/news-insights/press-releases/ardian-and-verne-announce-digital-infrastructure-hub-ile-de-france | Primary | AION component campus |
| S48 | iliad (GlobeNewswire) | The iliad Group puts in place three new financing facilities representing an aggregate €5 billion | 27 Jul 2022 | https://www.globenewswire.com/news-release/2022/07/27/2487160/0/en/iliad-press-release-The-iliad-Group-puts-in-place-three-new-financing-facilities-representing-an-aggregate-5-billion.html | Primary | MUFG additional arranger |
| S49 | iliad (GlobeNewswire) | iliad SA successfully issues inaugural €500 million green bond; €500m bond (Apr 2024) | 22 Oct 2024; Apr 2024 | https://www.globenewswire.com/news-release/2024/10/22/2967260/0/en/Press-Release-iliad-SA-successfully-issues-inaugural-500-million-green-bond.html | Primary | MUFG JLM |
| S50 | iliad | iliad SA successfully completes a €600 million bond issue | Sep 2025 | https://www.iliad.fr/media/CP_020925_Eng_f2c037ff2c.pdf | Primary | MUFG JLM |
| S51 | iliad | The iliad Group strengthens its financial profile | 19 Jun 2026 | https://www.iliad.fr/media/CP_190626_Eng_bbd0d8ba35.pdf | Primary | €10bn commitments (arrangers U) |
| S52 | Norton Rose Fulbright; KfW IPEX; Pekao | PŚO PLN 5.125bn financing | 2023 | https://www.nortonrosefulbright.com/en/news/0336f6ff/norton-rose-fulbright-advises-polski-swiatlowod-otwarty-sp-z-oo-on-pln-5-125bn-fiber | Primary (law firm / bank) | PŚO lenders (no MUFG) |
| S53 | Bredin Prat; Linklaters | Adviser announcements | Dec 2024 | https://www.bredinprat.fr/en/news/bredin-prat-advises-the-iliad-group-as-it-enters-into-exclusive-negotiations-with-private-equity-firm-infravia/ ; https://www.linklaters.com/en/about-us/news-and-deals/deals/2024/december/linklaters-advises-infravia | Primary (law firms) | Legal advisers |
| S54 | LinkedIn; RocketReach; OVHcloud; event bios | Management profiles (Bodin, Lastennet, Fontés, Colin) | 2025 to 2026 | https://corporate.ovhcloud.com/en/company/leadership-team/hugues-bodin/ ; https://www.aidataanalytics.network/events-ai-infrastructure-and-architecture-summit/speakers/patrick-lastennet | Secondary | Leadership table |
| S55 | Indeed; Jooble | OpCore job adverts | 2025 to 2026 | https://fr.indeed.com/q-opcore-emplois.html | Primary (employer text via boards) | ~50 staff, 5/2/1 French DCs, >50 MW |
| S56 | w.media | The iliad Group expands data center business… | 2026 | https://w.media/the-iliad-group-expands-data-center-business-as-telecom-growth-funds-infrastructure-push/ | Secondary | France, Poland, Italy |
| S57 | EDF | Data4 signe un accord avec EDF… | 4 Sep 2025 | https://www.edf.fr/groupe-edf/espaces-dedies/journalistes/tous-les-communiques-de-presse/data4-signe-un-accord-avec-edf-pour-l-approvisionnement-en-electricite-bas-carbone-de-ses-datacenters-en-france | Primary | CAPN context |
| S58 | Gossement Avocats; Weka | Loi n° 2026-403 du 26 mai 2026 and PINM | 2025 to 2026 | https://www.gossement-avocats.com/blog/centres-de-donnees-data-centers-ce-que-change-la-loi-de-simplification-de-la-vie-economique/ | Secondary (legal) | PINM regime, décret 2025-1181 |
| S59 | DCD | Antin, Morrison, and InfraVia shortlisted as potential investors in Iliad's Opcore unit | 2024 | https://www.datacenterdynamics.com/en/news/antin-morrison-and-infravia-shortlisted-as-potential-investors-in-iliads-opcore-unit-report/ | Secondary | Shortlist |
| S60 | lafibre.info | OpCore (groupe Iliad) construit un datacenter IA à Montereau | 2025 | https://lafibre.info/opcore/opcore-montereau/ | Forum (weak) | Conflation example; "~30 MW operational" |
| S61 | InfraVia | OPCORE company page; OpCore and EDF page; Green Datacenter page | 2025 to 2026 | https://infraviacapital.com/companies/opcore/ | Primary | Portfolio description, prior DC experience |
| S63 | DCD; Baxtel | Free/Jaguar to expand Rockefeller data center in Lyon | U | https://www.datacenterdynamics.com/en/news/frances-freejaguar-to-expand-rockefeller-data-center-in-lyon/ | Secondary | Lyon site lineage |
| S64 | Scaleway | Nabuchodonosor offering; custom-built clusters | 2023 to 2025 | https://www.scaleway.com/en/news/scaleway-releases-the-details-of-its-offering-based-on-nabuchodonosor-its-dedicated-ai-supercomputer-built-on-nvidia-dgx-h100-infrastructure/ | Primary (related party) | Nabu at DC5, PUE 1.16, Mistral |

---

## Quality-bar self-check

| Check | Status |
|---|---|
| Operating separated from planned capacity | Yes (Sections 5, 6) |
| IT MW separated from electrical MW | Yes. Units carried verbatim; most headlines unidentified |
| Secured power separated from energised power | Yes. "730 MW secured" and the 700 MW pre-reservation are not treated as contracted or energised |
| Construction separated from announcement | Yes (ladder) |
| Customer marketing separated from signed contracts | Yes. Only 31 MW (2024) is "contracted" |
| France and Poland reconciled | Partially. Perimeter conflicts left open (C2, C3) |
| Montereau not double-counted | Yes |
| Separate ~100 to 120 MW project investigated | Yes (Section 8). Not Montereau (D). Identity U; DC6 is the candidate (I) |
| Captive vs external demand distinguished | Yes (Section 10) |
| Debt reconstructed | Yes, to tranche level. Terms U |
| Direct vs sponsor-level MUFG separated | Yes (Section 13) |
| Unknowns left unknown | Yes |
| Buy-side thesis avoided | Yes. Interpretations confined to Section 21 |
