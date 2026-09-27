# T010 Independent-Family Blind Recode Summary

| Field | Value |
|---|---|
| Sample ID | T010 |
| MI Transaction ID | SPTRD1784042 |
| Batch | B01C (packet V02) |
| Codebook | v0.3-calibration-freeze |
| Coder ID | CLAUDE-INDEP-FAMILY-RECODE |
| Recode date | 2026-09-27 |
| Packet ZIP SHA-256 | 77279087b752723a059dc79ea8dbcabeed8d29808b9f2fb04a026f3f632e6b96 |
| Packet MANIFEST check | 16/16 file hashes verified before coding |
| Status | LOCKED. Independent recode. Not adjudicated. Not Gold. No human sign-off fields populated. |

**Evidence-access caveat.** The environment's egress proxy blocked full-page retrieval for every host I tried. That included UDN, BusinessNext, ETtoday, SiliconANGLE, Evertiq, mediatek.com, sec.gov and mops.twse.com.tw. All evidence below comes from search-index result lists and search-engine synthesis, and each capture is stored verbatim in `raw/` with its hash. I did not read any genuine source body. I identified the primary MOPS filings (S01, S10) but could not read them, so no claim cites them directly. Source confidence is capped at M throughout. The event identity is resolved because multiple independent Taiwanese and English outlets agree on every identity field. The output is provisional on the "genuine source bodies" criterion (RES03).

## 1. Verified event identity

| Field | SOURCE (immutable) | VERIFIED |
|---|---|---|
| Target | Power Management Solutions Product Line Assets of Intel Corporation | Assets of the Enpirion-brand power-management product line (PowerSoCs, controllers, power stages) owned by Intel and its subsidiaries. The line sat in Intel's Programmable Solutions Group (FPGA). |
| Buyer | Richtek Technology Corporation (:6286) | Richtek Technology Corporation, a wholly owned subsidiary of MediaTek Inc. (TWSE:2454). Richtek was delisted in 2016. MediaTek made the announcement on Richtek's behalf. |
| Seller | Intel Corporation (NASDAQGS:INTC) | Intel Corporation and its subsidiaries |
| Announced | 2020-11-16 | 2020-11-16 (MOPS announcement, evening Taiwan time; press 2020-11-17) |
| Type | M&A - Asset | M&A - Asset (carve-out purchase of product-line assets) |
| Status | Terminated/Withdrawn | Terminated/Withdrawn. Mutual agreement to terminate, announced 2021-07-27. The deal never closed. |
| Value | US$85m | US$85m headline consideration for assets. This is not an EV or equity value. No debt was assumed or disclosed. NT$ conversions vary with FX (RES10). |
| Expected completion | null | 4Q2020, subject to "certain legal procedures" (相關法律程序) |
| Signing vs announcement | n/a | No signing date is separately evidenced. 2020-11-16 is the announcement and board date. |

Identity resolution: **Resolved, consistent with SOURCE.** Data defects are logged in RES01, RES02 and RES10. No other transaction was substituted.

Relevance: **Adjacent (DC supply chain, peripheral).** This is a component product line and not a data-centre infrastructure asset. The buyer's CEO explicitly framed it as a data-centre entry point, so it is not pure contamination. A human scope decision is required (RES06).

## 2. Positive ontology codes

| Claim | Code | Label | Role | Evidence | Likelihood | Conf |
|---|---|---|---|---|---|---|
| C01 | AR-01 | Strategic corporate (listed), via wholly owned sub | context | E1 | 7 | M |
| C02 | PR-01 | Structural demand growth (DC/enterprise compute) | R-C | E4 | 4 | L |
| C03 | BC-03 | Capability or product gap (never penetrated DC) | R-C | E1 | 6 | M |
| C04 | BM-05 | Customer-segment entry (enterprise/DC) | **R-P** | E1 | 6 | M |
| C05 | BM-04 | Product / service scope expansion | R-C | E1 | 5 | M |
| C06 | BM-07 | Capability acquisition (PowerSoC tech/IP) | R-C | E4 | 4 | L |
| C07 | SM-01 | Portfolio simplification / non-core exit (Intel) | **R-P** | E1 | 6 | M |
| C08 | SM-02 | Strategic refocus (Intel reinvest in 5G/edge/AI/cloud) | R-C | E1 | 5 | M |
| C09 | SI-01 | Corporate carve-out | R-E | E1 | 7 | M |
| C10 | ST-02 | Asset acquisition | R-E | E1 | 7 | M |
| C11 | ST-09 | Carve-out | R-E | E1 | 6 | M |
| C12 | RO-09 | Technology / product (Enpirion line) | object | E1 | 7 | M |
| C13 | RO-10 | IP and designs (perimeter unverified) | object | E4 | 5 | L |
| C14 | VM-01 | Time compression | R-C | E4 | 4 | L |
| C15 | VM-08 | Revenue synergy (cross-sell with group ASIC) | R-C | E4 | 3 | L |
| C16 | PG-05 | Standalone / one-off | context | E4 | 5 | L |
| C17 | OU-02 | Discontinuation (Intel EOL after termination) | outcome | E1 | 7 | M |

R06 counterfactuals:
- **BM-05:** Remove the enterprise/DC segment-entry purpose and the deal disappears. Richtek already had broad consumer and mobile PMIC capability, and an $85m sub-scale FPGA-attached line adds little outside that segment.
- **SM-01:** Remove Intel's non-core exit intent and no seller exists. The line was embedded in Intel PSG's FPGA offer.

Rule checks:
- **R37 PASS.** No BM-22, BM-23 or BM-25 is coded, and all buyer motives are terminal.
- **R38.** Not engaged. No II is coded (E5), and no pre-closing integration plan was disclosed.
- **R27.** Not engaged. No PC is coded because the "legal procedures" are unspecified.
- **E3.** No claims are graded E3, so no PASS test is required.

## 3. Rejected or unknown concepts

| Concept | Disposition | Reason |
|---|---|---|
| BM-11 Horizontal scale | Rejected (likelihood 2) | The only support is the filing's boilerplate "擴大經營規模". The stated purpose names a new segment. The target is small relative to the buyer. |
| BM-06 Customer acquisition (Google) | Not coded | The "Google orders" report is ambiguous and unattributed (S19, RES07) |
| BM-19 Diversification | Not coded (E4 rival, likelihood 3) | Journalist framing only ("布局多元業務") |
| BM-17 / BM-16.2 / BO-06 | Rejected | No pre-emption or suppression indicator. The buyer would have continued the line and did not plan to kill it. |
| BM-08/09/10, RO-01 to RO-08 | N/A | No DC physical capacity, land, power or connectivity is involved |
| SI-03 / VM-18 forced sale | Rejected | US$85m is immaterial to Intel. There is no distress. |
| II (integration intent) | E5 | No ex-ante plan disclosed. The deal never closed. |
| FI financing | E5 | Undisclosed |
| CA catalyst | E5 | No dated trigger identified |
| PC policy | E5 | The legal procedures are unspecified, so R27 is unmet (RES08) |
| BO behavioural | E5 | No indicators |
| PS programme | E5 | None evidenced |
| AT-01, AT-02, AT-05 | E5 (untested kill conditions) | See Section 4 |

## 4. Causal chains

Buyer chain:
`PR-01 (E4) -creates-> BC-03 (E1) -activates-> BM-05 (E1, R-P) -requires-> RO-09 (E1) -realises-> VM-01 (E4) / VM-08 (E4)`
`AR-01 -selects-> BM-05 (E4)`; `BM-04 (E1, R-C) -requires-> RO-09`; `BM-07 (E4) -requires-> RO-10 (E4)`

Seller chain:
`SM-01 (E1, R-P) -creates-> SI-01 (E1) -affects-> ST-02 (E1) and ST-09 (E1)`

Anti-thesis:
`AT-02 organic build in time -refutes-> BM-05 (E5)`; `AT-01 partnership suffices -refutes-> BM-05 (E5)`

Outcome note: The seller discontinued the line after termination (OU-02). This is consistent with SM-01, but the grammar has no OU to SM edge and the deal never closed. SM-01 therefore stays at E1 (RES05).

All 13 edges are in the permitted grammar, and the build script asserts this.

## 5. Identity and data conflicts

- **RES01 bad_data.** The SOURCE buyer ticker ":6286" is stale. Richtek has been wholly owned by MediaTek and delisted since 2Q2016.
- **RES02 bad_data.** SOURCE leaves the termination date, expected completion and deal summary null. Verified values are termination announced 2021-07-27 and expected completion 4Q2020.
- **RES10 bad_data.** The NT$ equivalent varies across outlets (23.89億 / 24.24億 / 24.3億). The difference comes from FX conversion only.
- No conflict was found on target, seller, announcement date, type, status or US$85m value.

## 6. Residuals

| ID | Type | Priority | Summary |
|---|---|---|---|
| RES01 | bad_data | Medium | Stale buyer ticker. MediaTek is the parent. |
| RES02 | bad_data | Medium | Missing termination and expected-completion dates |
| RES03 | insufficient_evidence | High | No source bodies read (egress block). Primaries S01 and S10 are unread. |
| RES04 | insufficient_evidence | High | Termination cause is undisclosed. The rivals are (a) Intel strategy change under its new CEO, (b) unmet legal procedures and (c) buyer reassessment. Intel's Sept 2021 discontinuation contradicts the retention form of (a). |
| RES05 | wrong_layer | Medium | OU facet and OU edges assume a closed deal, and there is no OU to SM edge |
| RES06 | wrong_layer | High | Relevance: a DC supply-chain component deal. A human scope decision is needed. |
| RES07 | insufficient_evidence | Low | Ambiguous "Google orders" claim |
| RES08 | insufficient_evidence | Medium | Unspecified legal procedures, so R27 is unmet |
| RES09 | insufficient_evidence | Low | Asset perimeter, consideration form, funding and signing date are unknown |
| RES10 | bad_data | Low | NT$ conversion variance |

## 7. Source register

All sources were accessed only as search snippets or engine synthesis on 2026-09-27, except where marked.

| ID | Source | Date | Use |
|---|---|---|---|
| S01 | MediaTek MOPS announcement (acquisition), identified and not retrieved | 2020-11-16 | Not cited |
| S02 | China Times, 聯發科旗下立錡 8,500萬美收購英特爾轉投資Enpirion電源管理IC產品線 | 2020-11-17 | Filing relay: purpose, value |
| S03 | TechNews, 聯發科近台幣24億元收購英特爾旗下Enpirion | 2020-11-17 | Filing relay |
| S04 | Anue 鉅亨網 4543260 | 2020-11-17 | Filing relay |
| S05 | MOEA IDB SIPO digest | 2020-11-18 | Filing relay (low independence) |
| S06 | DIGITIMES a20201117VL200 | 2020-11-17 | TWSE filing: 4Q20 close, legal procedures |
| S07 | ETtoday 1857099, 蔡力行：瞄準資料中心 | 2020-11 | CEO data-centre quote |
| S08 | SiliconANGLE, Intel sells Enpirion to Richtek for $85M | 2020-11-18 | Intel spokesperson statement |
| S09 | Evertiq design/49123 | 2020-11 | Background |
| S10 | MediaTek MOPS announcement (termination), identified and not retrieved | 2021-07-27 | Not cited |
| S11 | 工商時報 (CTEE), 雙方合意終止交易 | 2021-07-28 | Termination |
| S12 | Anue 鉅亨網 4688463 | 2021-07-27 | Termination |
| S13 | DIGITIMES a20210729VL201 | 2021-07-29 | Termination |
| S14 | Intel PDN2133 via Intel Community | 2021-09-17 | Discontinuation dates |
| S15 | Intel PCN 118505-02 (title) | 2022-07-01 | Discontinuation revision |
| S16 | Design & Reuse / AmCham Taiwan (Richtek ownership) | 2015 | Buyer parentage |
| S17 | Altera 8-K / EEPower (Enpirion 2013, $140m) | 2013-05-14 | Lineage only |
| S18 | Unattributed analyst speculation (Gelsinger) | 2021-07 | WEAK. Used only to generate rivals. |
| S19 | Ambiguous "Google orders" reports | 2020-11 | WEAK. Not evidence. |

## 8. QC and completion status

| Check | Result |
|---|---|
| Packet hashes verified | PASS 16/16 |
| Sample ID / MI ID preserved; SOURCE fields unchanged | PASS |
| Every coded concept has a claim row (26 rows incl. E5 facets and AT) | PASS |
| Every cited Source ID in Source Log | PASS (asserted) |
| Weak or unread sources used as evidence | 0 (asserted) |
| Edges within permitted grammar | PASS (asserted) |
| Merged or deprecated IDs coded | 0 (asserted) |
| R06 counterfactual on every R-P | PASS (asserted) |
| R37 / R38 / R27 / R34 | PASS / not engaged / not engaged / not engaged |
| Genuine source bodies read | **FAIL.** Egress was blocked, so the output is provisional (RES03). |
| Gold / human sign-off fields | Not populated. `gold_eligible = N`; `decision_authority = model_recommendation`. |
| Completion | **COMPLETE AS INDEPENDENT RECODE, PROVISIONAL ON SOURCE-BODY VERIFICATION.** Independent-family and human gates remain outstanding. |

## 9. Hashes of locked independent outputs (SHA-256)

```
e6c2ab77923ab12eafc2cac24e377f2bb8cd90096e3b329ebe98aba1fa28825b  Causal_Edges.csv
32a6a653bc229f336bf24697f5968e37dc8ed485b17e51c516b3099ffb1229ed  Claim_Evidence.csv
3ed6dd848a37f7c821abda67121665b5b45753459cd4d53029761f1b47fc27e3  Coding_Output.csv
9ee0251eda7376a09d7ceecfc8a7bb7f00b9ac0b5756b0877a24b08839be1909  Completion_Checklist.csv
c16cef516d514c453b88322bcb704a671cf952987085d41b5fec8daa0d48e967  Residuals.csv
7c7869a21d27ee5a5bbadc7d6f4d586228fc1729f4ea7208d2632d7750e8d5a3  Source_Log.csv
0a0af8610bdc8230d65556e3e6f32c578875945131d0cb5887181156464f7bc9  normalized_claims.csv
798d5b60b5d6235eb58f681365d48ad936c7feec94c27568b3b71c257283c9bf  normalized_edges.csv
869b7ca03074ba9e6b855cf2c268779d6333e04e7a4226ef5a555a27f7b68937  normalized_residuals.csv
00bf675c16df207dcafcea81e43175eb330db42151b2c2b79a7d135d4981bf96  normalized_sources.csv
e8576583bf822a31418402fb508527c5614649e3d5d2a47c3ba14b7ab99ad242  build.py
32f417e6abcefd0b53a18b879e776e7df6cfe62b48268633a8e48dcb47073b31  raw/Q01_en_announcement.txt
ed00384f7de1f9be0d22c1d0d735fae7531996c7471e379e818f27f36b920c13  raw/Q02_zh_announcement_and_termination.txt
f850a3a976504c63c791d737d20ee4cfa2dc4ce42868b28e4dd026187ef1ab7b  raw/Q03_zh_termination.txt
4602af21aa3270775460c08292ab88ff3a74c6aaa4e5e9933266efdc2ea942c5  raw/Q04_en_termination.txt
5ce41dffe9ec4f76f475756cb29d4813d38453c8db35376dc2e12177b5805ccf  raw/Q05_en_filing_closing.txt
2499871ad8f535765038b4cf7e49e4ef43e600647f1312e86e47ec10b4b9b961  raw/Q06_zh_mops_details.txt
24df5a01d1604f9af2dd9f4e11ae107c29589a7050c84b00e621b20ae4e72ba9  raw/Q07_zh_termination_reason.txt
39bdca611a7ea782d70ed296768b5ba57fdfba413a14b597eac2304c0b149a76  raw/Q08_google_orders.txt
4a901e5844246f31b13caaa124e088d3552edd0ffad00d64ac6cf34890bed3ce  raw/Q09_intel_spokesperson.txt
b81025511cc5960d50cf27e6f4c48e93ada4ac5180792ef53c8628df925c2e2c  raw/Q10_intel_eol.txt
4b3460e61af5205691dc00f8b925fe9ffeba5d2f20b47ec18b1f9cac41cf64b9  raw/Q11_richtek_ownership.txt
eeda3d140a21890682f08f4f1f5d11acfcf1fd47ad9900c48479cdabb093367c  raw/Q12_altera_enpirion_2013.txt
```

`LOCK_MANIFEST.json` also hashes this summary file. These conclusions were locked before I saw any Coder-1, verifier or adjudication output for T010.
