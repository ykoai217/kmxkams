# R017 Independent Recode Summary

**Sample:** R017 · **MI ID:** SPTRD1982232 · **Batch:** B01C · **Codebook:** v0.3-calibration-freeze
**Coder:** IND-FAMILY-CLAUDE-01 (independent family, blind) · **Locked:** 2026-09-27
**Status:** Model recommendation only (R39). Not Gold. No human sign-off fields populated.
**Blindness:** Built only from the sealed packet `B01C_20260927_R017_V02.zip` and fresh public-source search. I did not see any Coder-1, verifier, adjudication or prior-model output. Packet file hashes were checked against `MANIFEST.json` and all 16 matched.

> **Evidence limitation (read first).** The session's egress policy blocked every page fetch (sec.gov, ir.vnet.com, ir.21vianet.com, prnewswire.com, businesswire.com, sina.com.cn and all news hosts). Only web search worked, so every source below is a **search-index snippet or search-tool paraphrase, not a genuine source body**. What the snippets show is captured in `raw_snippets/` and hashed. E1 grades rest on party primary documents seen only at snippet level. They are provisional until checked against the bodies (RES-05).

---

## 1. Verified event identity

| Field | SOURCE (immutable) | VERIFIED | Basis |
|---|---|---|---|
| Target | VNET Group, Inc. | VNET Group, Inc. (Nasdaq: VNET; formerly 21Vianet Group) | S01 |
| Buyer / Investor | *(null)* | Josh Sheng Chen, founder and executive chairman, with a proposed management-team "MBO Consortium". No sponsor or financier named | S01, S02, S03 |
| Seller | Best Ventures Limited | **None contracted.** The offer covered all shares not owned by the Founder group, i.e. unaffiliated public holders. Best Ventures Limited is a Xiaomi-controlled BVI vehicle (formerly Xiaomi Ventures Limited) that subscribed for VNET shares in Jan 2015. No source shows it as a party | S03, S17, S18 |
| Announced | 2022-09-13 | 2022-09-13 (letter dated and released the same day; Chen 13D/A filed 2022-09-14) | S01, S03 |
| Type | M&A - Whole | Proposed take-private / MBO of the whole company. It was a preliminary non-binding proposal only and was never signed | S01, S02 |
| Status | Terminated/Withdrawn | Withdrawn by letter dated 2024-07-10, announced 2024-07-11. Special committee dissolved | S05 |
| Value | 2,897.450366 ($M) | Offer US$8.20/ADS (about US$1.3667/share), a 74.8% premium to the 12 Sep 2022 close. Headline equity about **US$1.2bn**. The SOURCE value is MI's *implied EV*; the bridge to it is not verified | S00, S02, S14 |

**Identity Resolution Status:** Resolved with conflicts. The economic event is unambiguous: the Chen founder proposal of 13 Sep 2022. The separate 11 Apr 2022 Hina Group + Industrial Bank Shanghai Branch proposal (US$8.00/ADS) was **not substituted** (RES-10).

**Process facts:** The special committee was Kenneth Chung-Hou Tai, Sean Shao and Changqing Ye (S01). Kroll Securities / Kroll LLC (Duff & Phelps Opinions Practice) and Davis Polk were appointed 2022-10-14 (S04, S00). The committee evaluated both the April and September proposals (S07). No definitive agreement and no committed financing followed.

## 2. Positive ontology codes

| Claim | Concept | Role | ES | Lik | Conf |
|---|---|---|---|---|---|
| C01 | AR-09 Founder / management-led | Context | E1 | 7 | H |
| C02 | BC-09 Existing founder stake (~78.5m shares incl. high-vote Class B/C) | R-E | E1 | 6 | M |
| C03 | BC-07 Founder margin-loan constraint (US$50.25m, Aug 2021, secured on VNET shares) | R-C | E1 (fact) | 5 | M |
| C04 | **SI-06 Undervalued listed company** | **R-P** | **E3 (PASS)** | 6 | M |
| C05 | VM-15 Public/private valuation arbitrage | R-C | E4 | 5 | L |
| C06 | BM-23 Financial ownership-value thesis (non-terminal) | R-C | E4 | 4 | L |
| C07 | BM-25 Control consolidation (non-terminal) | R-C | E4 | 4 | L |
| C08 | BO-01 Agency: founder control/collateral defence (indicators only, R34) | R-C | E4 | 4 | L |
| C09 | PR-08 Capital-market liquidity regime (China-ADR de-rating) | R-C | E4 | 5 | L |
| C10 | PC-11 HFCAA regime (see R27 fields) | R-C | E4 | 3 | M |
| C11 | SI-10 Contested situation (rival Hina/Industrial Bank bid) | R-C | E4 | 4 | M |
| C12 | CA-06 Rival proposal 2022-04-11 as timing trigger | R-C | E4 | 3 | L |
| C13 | ST-08 Take-private | form | E1 | 7 | H |
| C14 | ST-01 Whole-company acquisition | form | E1 | 7 | H |
| C15 | FI-01 Equity + debt proposed, never committed | R-E | E1 | 6 | M |
| C16 | FI-08 Change-of-control repayment of US$600m notes | R-C | E4 | 5 | L |
| C17 | RO-16 Multi-market operating platform | object | E1 | 7 | H |
| C18 | RO-01 Operating capacity | object | E1 | 7 | M |
| C19 | PG-05 Standalone / one-off | programme | E4 | 6 | M |
| C20 | II-01 Preserve standalone platform (ex ante; R38 compliant) | intent | E4 | 6 | L |
| C23 | AT-08 Leverage / covenant infeasibility | R-C | E4 | 5 | L |
| C24 | AT-01 Control not necessary (SDHG PIPE route) | R-C | E4 | 5 | M |
| C25 | Revealed behaviour: withdrawal (UNCODED-OU) | n/a | E1 | 7 | H |

**R06 counterfactual (only R-P, SI-06):** Had VNET ADSs traded near the ~US$32/ADS mark set in the Mar 2021 Tuspark repurchase instead of US$4.69, a founder whose own stake was margin-financed could not credibly have offered to buy out the float. The proposal would disappear or would need a several-times-larger equity cheque.

**SI-06 E3 test record:** The hoop test passed: the market price was far below contemporaneous independent marks (US$8.00 third-party bid in Apr 2022; US$32.08 transaction mark in Mar 2021). Straws: an independent rival bidder at a similar level, and press reports of a peer-multiple gap to GDS and Chindata. The rivals considered were SI-03 distress (rejected, since RMB3.62bn cash and no compulsion), BO-01 pretext, and fair repricing of China-ADR risk. The last is not excluded.

**R27 (C10 PC-11):** Instrument: HFCAA and the SEC Commission-Identified Issuer rules. Jurisdiction: United States. Status: VNET conclusively identified 2022-05-26. Effective date: Act enacted 2020-12-18. Channel: delisting risk lowers the value of the US listing and raises the relative value of going private. Layer: SI-06 / VM-15. Sign: **+** at identification. The effect was attenuating after the CSRC/MOF/PCAOB protocol of 2022-08-26 (18 days before the proposal) and reversed after the PCAOB vacated its determinations on 2022-12-15. No party links HFCAA to the proposal, so the link is E4.

**R37:** Only the non-terminal motives BM-23 and BM-25 are coded, both at E4. The supporting VM-15 is also E4. **FLAG:** the terminal buyer motive is recorded as E5 (C21).

**R38:** II-01 is drawn from sources dated 2022-09-13/14. No close occurred. All later conduct is recorded as revealed behaviour, not as intent.

## 3. Rejected / unknown concepts

- **Terminal buyer motive: E5** (C21). The letter says only that the offer is "highly attractive" to shareholders.
- **Seller motive: E5** (C22). There was no contracted seller, and Best Ventures Limited's motive is unknown.
- **Rejected for lack of evidence:** BM-01 to BM-21 and BM-24.x (no strategic combination possible for an individual/management buyer). BM-22 (the "escape short-termism" line is second-hand and non-specific). BM-23.2 (management is the buyer). BC-05 and AR-04/AR-11 (no sponsor or capital pool named; the state-backed fund is unnamed, S15). VM-13 (no evidence that leverage improves on an already-levered issuer). VM-11 (treated as a near-synonym rival within VM-15). PR-01 (demand growth is context only). PS-* (no programme). SI-03 (no distress at company level). OU-01 to OU-09 (no close occurred).

## 4. Causal chains

- **A. Valuation window (best-supported):** PC-11 HFCAA → PR-08 ADR de-rating. PC-11 → SI-06 deep discount → VM-15 and ST-08. AR-09 → BM-23 → RO-16 → VM-15.
- **B. Founder condition / agency:** BC-09 existing stake + BC-07 pledged, margin-financed stake → BM-25. BO-01 distorts the headline price, with a 74.8% premium and no committed funding.
- **C. Contest and timing:** SI-10 / CA-06 rival US$8.00 bid (11 Apr 2022) → founder counter-proposal at US$8.20.
- **Failure path:** FI-08 (US$600m notes put on change of control) + founder default (lender enforcement 7 Feb 2023) → no financing (AT-08). The SDHG US$299m PIPE (~42%, closed 28 Dec 2023) with a voting and consortium agreement with Chen then gives AT-01 → withdrawal on 10 Jul 2024. Chen's stated reason: "maintaining VNET's listing status is better aligned with the Company's long-term interests given current market conditions."
- **Rival explanations not discriminated:** (i) a genuine valuation-arbitrage MBO defeated by financing; (ii) a founder control/collateral defence using a headline bid; (iii) fair repricing of China-ADR risk, with no true undervaluation.
- **Anti-thesis / kill tests:** margin-call thresholds against the price path around 13 Sep 2022; evidence of real financing work (NDAs, lender term sheets) in 2022-23; whether the SDHG voting and consortium agreement references the going-private proposal.

## 5. Identity / data conflicts

RES-01 SOURCE Seller is not a party. RES-02 SOURCE Buyer is null. RES-03 value basis: EV of US$2.90bn against about US$1.2bn equity, "100%" against shares not owned by the Founder. RES-04 the sponsor/LBO flags and the "Asia Investment Fund Management Limited" parent are unsupported. RES-10 duplicate-risk with the Hina Apr 2022 record, which carries the same "$1.2bn" headline. RES-11 date noise: one secondary gives 15 Sep 2022; the termination letter is dated 10 Jul and was announced 11 Jul 2024.

## 6. Residuals

| ID | Type | Short description |
|---|---|---|
| RES-01 | bad_data | Seller Best Ventures Limited (Xiaomi) not evidenced as a party |
| RES-02 | bad_data | Buyer null in SOURCE |
| RES-03 | bad_data | Value is implied EV; equity ~US$1.2bn; EV bridge unverified |
| RES-04 | bad_data | Sponsor/LBO flags and ultimate parent unsupported |
| RES-05 | insufficient_evidence | All sources snippet-only; bodies blocked by egress policy |
| RES-06 | missing_theory | Founder collateral/control-defence proposal has no clean concept |
| RES-07 | wrong_layer | No PC concept for listing-eligibility/delisting regime; PC-11 provisional |
| RES-08 | missing_theory | OU lacks withdrawal / alternative-transaction-adopted outcome |
| RES-09 | parent_child_issue | Grammar lacks PR→SI and BC→BO edges |
| RES-10 | bad_data | Separate Hina/Industrial Bank event; de-dup risk |
| RES-11 | bad_data | Minor announcement/termination date noise |
| RES-12 | insufficient_evidence | R37 flag: only non-terminal motives, both E4 |

## 7. Source register

| ID | Source | Date | Family | Access |
|---|---|---|---|---|
| S00 | Sealed packet MI record | n/a | aggregator | full |
| S01 | VNET PR: receipt of Chen proposal; special committee | 2022-09-13 | issuer | snippet |
| S02 | 6-K Ex. 99.1 proposal letter | 2022-09-13 | issuer/buyer | snippet |
| S03 | Chen et al. Schedule 13D/A No. 1 | 2022-09-14 | buyer | snippet |
| S04 | VNET PR: Kroll / Davis Polk appointed | 2022-10-14 | issuer | headline |
| S05 | VNET PR + 6-K: withdrawal; committee dissolved | 2024-07-11 | issuer | snippet |
| S06 | VNET PR: Hina/Industrial Bank US$8.00 proposal | 2022-04-11 | issuer | snippet |
| S07 | VNET 20-F FY2022 | 2023-04 | issuer | snippet |
| S08 | VNET PR: HFCAA status | 2022-05-26 | issuer | snippet |
| S09 | Bold Ally (Cayman) enforcement notice | 2023-02-07 | lender | snippet |
| S10 | Securities class-action notices | 2024-01 | plaintiff counsel | snippet |
| S11 | 21Vianet PRs: Tuspark repurchase; founder purchase | 2021-03-24 / 2021-08-06 | issuer | snippet |
| S12 | VNET PRs + SDHG 13D: US$299m investment | 2023-11 / 2023-12-28 | issuer/investor | snippet |
| S13 | 证券时报 via 新浪: 世纪互联私有化搁浅始末 (Chinese original) | 2024-07-30 | CN press | snippet |
| S14 | 第一财经: 私有化期间因股权收购款惹官司 (Chinese original) | 2023-02-23 | CN press | snippet |
| S15 | Bamboo Works: management-led group advances | 2022-11 | press | snippet |
| S16 | Mingtiandi: Vnet boss scraps takeover bid | 2024-07 | trade press | snippet |
| S17 | Best Ventures Limited 13G (other issuer): Xiaomi vehicle | 2025 | holder | snippet |
| S18 | 21Vianet 20-F FY2015/16: Xiaomi Ventures holding | 2016-04 | issuer | snippet |
| S19 | VNET Q2 2022 results | 2022-08 | issuer | snippet |
| S20 | PCAOB HFCAA determinations; HFCAA chronology | 2022-12-15 | regulator | snippet |

Full URLs, locators, limitations and captured key facts are in `exact_schema/Source_Log.csv` and `normalized/normalized_sources.csv`.

## 8. QC / completion status

- All packet hashes were verified. The exact-schema headers match the packet templates byte-for-byte at header level. The normalized headers match `normalized_schema.json`. The SOURCE fields and pre-filled template cells are preserved unchanged.
- Coverage: 25 claims, 19 edges (permitted grammar only), 12 residuals and 21 sources. Every cited source ID resolves (checked in the generator).
- **Completion: INCOMPLETE on source-body verification (RES-05).** Coding is complete at snippet-level evidence. Before any adjudication use, the E1 wording (S02, S03, S05) and holdings should be re-verified against the SEC bodies.
- The independent-family/human gate is still outstanding. Gold is not claimed.

## 9. Hashes of locked independent outputs (SHA-256)

```
930100f84ba999aa2dae09bbdecd2e029e04dbed8d5fd527ba4b89b2292e3cec  exact_schema/Causal_Edges.csv
b824ce5f3f32302d97b1742a2c913e8a8824e9ffc2bc59fdb0787b958714bc9c  exact_schema/Claim_Evidence.csv
ee5da1bccab278b3f7a332bf4519f0c5f58b97d165f389ec3ed2c3a9d2344cd5  exact_schema/Coding_Output.csv
ebbc7cfd943077e7ceffca816f1a7e62c938999a7ba0938a629cfcbbafc7e6b5  exact_schema/Completion_Checklist.csv
eff443979f7d3ceb55941ee6c1e6ea95cffd6d737cdb46cb25e86fe481e55b73  exact_schema/Residuals.csv
9a79e1b66c2ba46b74240c76b50e79f563c5827718b28ed30b66d35bb3c28f53  exact_schema/Source_Log.csv
41c081e9ff551dbd8c80cee66bd5b9320b720e2f09163999a8d8fad7a0ee88a1  normalized/normalized_claims.csv
caedc820010832bd0475ba5755b59089f4b10a8722993a79c2b4610cc09b45e3  normalized/normalized_edges.csv
967b5c2a36f5bdcd8cd70da538bce81e0b79c81be914b57d3e2f48ce63a31bfb  normalized/normalized_residuals.csv
993c147f773d94f8bbc9978fbc73f46bebc327be8b5aafdb2e2475295be16b7f  normalized/normalized_sources.csv
c41b0e15224af8272ce01b4475bd25164f05ce885e274ffa7a0643f406653d64  build_outputs.py
```

The raw snippet capture hashes are listed per source in `normalized/normalized_sources.csv` (`raw_sha256`). `LOCK_HASHES.sha256` covers every file in the package, including this summary.
