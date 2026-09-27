# Independent Recode Summary: T009 (B01C, packet V02)

**Candidate:** CyrusOne Inc. take-private by KKR and GIP. MI Transaction ID SPTRD1918006.
**Codebook:** v0.3-calibration-freeze. **Coder ID:** CLAUDE_IFR_T009. **Locked:** 2026-09-27.
**Status:** INDEPENDENT RECODE LOCKED, EVIDENCE-LIMITED. Not Gold. No human sign-off fields populated. Independent-family/human gate remains outstanding.

> **Evidence-access limitation (read first).** This session's egress policy blocked every source host, including sec.gov, businesswire.com, kkr.com, global-infra.com, cyrusone.com, web.archive.org and wikipedia.org. No genuine source body was read. Every source is a search-index excerpt captured through the WebSearch tool, and each one is labelled that way in the Source Log. Source confidence is capped at M. E2 and E3 upgrades were withheld where only index text supported them. Before any adjudication use, rerun R14 verification against the genuine DEFM14A and 8-K bodies (residual T009-R05).

Packet integrity: all 16 packet files matched `MANIFEST.json` SHA-256 values. Packet ZIP SHA-256 `30613a849a61a9c5a1337167d0514a9b8c9d3537f03356900cee51e10dedf5b1`. No Coder-1, verifier, adjudication or Gold material was supplied or consulted.

## 1. Verified event identity

| Field | SOURCE (immutable) | VERIFIED | Sources |
|---|---|---|---|
| Target | CyrusOne Inc. | CyrusOne Inc. (Nasdaq: CONE), data-centre REIT, Dallas | S01, S02 |
| Buyer | Global Infrastructure Management, LLC; Global Infrastructure Partners L.P.; KKR & Co. Inc. (NYSE:KKR) | Cavalry Parent L.P., controlled by funds affiliated with Kohlberg Kravis Roberts & Co. L.P. (KKR infrastructure and real estate equity strategies) and Global Infrastructure Management, LLC (GIP infrastructure funds). Merger sub: Cavalry Merger Sub LLC | S02, S06 |
| Seller | CyrusOne Inc. (:CONE) | Public common stockholders of CyrusOne Inc. No controlling holder | S01, S05 |
| Signing | n/a | 2021-11-14 | S02 |
| Announced | 2021-11-15 | 2021-11-15 | S01 |
| Stockholder vote | n/a | 2022-02-01: 78.41% of outstanding shares; over 99.5% of votes cast | S05 |
| Closing | (null) | 2022-03-25; Nasdaq delisting requested | S06 |
| Type | M&A - Whole | All-cash public-to-private reverse triangular merger; CyrusOne survives as a wholly owned subsidiary of Parent | S02 |
| Status | Completed | Completed | S06 |
| Price | n/a | $90.50 per share cash. About 25% premium to the unaffected close of 2021-09-27; 5.9% premium to the last close before announcement | S01, S09 |
| Value | $15,238.57m | Equity about $11.49bn (Reuters). About $15bn including assumed debt (party release). The basis of the SOURCE figure is unreconciled | S01, S09 |

**Identity resolution:** RESOLVED, same event, with field discrepancies (R01 to R04, R09, R11). The event was not substituted.

**Operating vs development metrics at 2021-09-30 (S08):** operating footprint of 50+ data centres in the U.S. and Europe (operating MW not captured). Development of 49 MW / ~211,000 CSF plus 469,000 sq ft of powered shell, 82% pre-leased. Q3 2021 signings were 20 MW / $37.8m annualised GAAP revenue.

## 2. Positive ontology codes

| Claim | Concept | Role | Evidence | Likelihood | Conf. |
|---|---|---|---|---|---|
| C01 | AR-05 Infrastructure fund | context | E1 | 7 | M |
| C02 | AR-11 Multi-mandate consortium | context | E1 | 7 | M |
| C03 | BC-05 Deployable capital / mandate | R-E | E1 | 7 | L |
| C04 | PR-01 Structural demand growth | **R-P** | E4 | 6 | L |
| C05 | PR-08 Capital-market liquidity regime | R-C | E4 | 5 | L |
| C06 | BM-23 Financial ownership-value thesis (non-terminal) | **R-P** | E1 | 6 | M |
| C07 | VM-14.1 Development-capital advantage (the BM-23 lever) | **R-P** | E1 | 5 | L |
| C08 | VM-15 Public / private valuation arbitrage | R-C | E4 | 5 | L |
| C09 | BM-06.2 Contracted cash-flow acquisition | R-C | E4 | 5 | L |
| C10 | VM-14.4 Duration-matched capital | R-C | E4 | 4 | L |
| C11 | BM-23.2 Governance and disciplinary improvement | R-C | E4 | 3 | L |
| C12 | PS-06 Multi-market platform strategy | context | E4 | 5 | L |
| C13 | PG-01 Platform acquisition | context | E2 | 6 | L |
| C14-C18 | RO-01, RO-02, RO-03, RO-13, RO-16 | context | E1 | 7 | M/L |
| C19 | SM-10 Valuation-window timing | R-C | E4 | 3 | L |
| C20 | SI-08 Strategic review / sale process | R-E | E1 | 7 | M |
| C21 | SI-13 Competitive multi-party process | R-C | E1 | 7 | L |
| C22 | SI-06 Undervalued listed company | R-C | E4 | 4 | L |
| C23 | CA-10 Management change (2021-07-28) | R-C | E4 | 4 | L |
| C24 | CA-06 Competitor transaction (Blackstone/QTS) | R-I | E4 | 3 | L |
| C25-C26 | ST-01 Whole-company; ST-08 Take-private | context | E1 | 7 | M |
| C27 | FI-01 Acquisition debt | R-E | E1 | 6 | L |
| C28 | II-01 Preserve standalone platform | context | E4 | 6 | L |
| C29 | OU-03 Capex follow-through | outcome | E1 | 7 | L |
| C30 | OU-01 Integration outcome (standalone; new CEO) | outcome | E1 | 6 | L |

**R06 counterfactuals (Primary drivers).**
- PR-01: without sustained hyperscale demand growth, the footprint-expansion thesis loses its basis and a ~25% premium could not be underwritten.
- BM-23: without a hurdle return from funding CyrusOne's development with private capital, no strategic combination supports $90.50 cash.
- VM-14.1: remove the capital-provision lever and the premium must rest on arbitrage alone, which implies a materially lower bid.

**R37:** BM-23 is paired with VM-14.1 (E1 stated lever, "access to long term capital ... to support the Company's growth") and PG-01 (E2). Result: CONDITIONAL PASS. The lever rests on an index excerpt, and the "cheaper than the prior owner" element is not evidenced.

**R38:** II-01 is coded only from the 2021-11-15 release. The closing-day release (S06) was excluded from intent because it post-dates completion. PASS.

**R27:** No policy claim was coded, so the rule is not triggered.

## 3. Rejected or unknown concepts

- **E5 (unknown):** OU-09 exit (pending; 2026 reports of a possible 2027 IPO), AT-03, AT-10, BO-05.
- **Unknown, not coded:** VM-13 (leverage at entry not captured), VM-12, VM-16.1 and PC-09 (REIT/tax status after close), PC-04 and PC-08 (HSR, CFIUS and EU FDI approvals not captured), SI-10 (no activist evidence found), CA-03 (the review was never publicly announced; the market learned of it through a leak after 2021-09-27).
- **Not applicable:** SI-03 distress; SM-08, SM-09 and SI-07 (the seller is a listed company).
- **Rejected for this buyer archetype:** BM-01, BM-02, BM-08, BM-09, BM-11 and BM-17. No operating combination with another buyer platform was stated or observed.
- **Seller motive:** mostly E5, because the Board's "Reasons for the Merger" were not retrieved.

## 4. Causal chains

1. **Thesis (primary):** AR-05/AR-11 + BC-05 activate BM-23. BM-23 requires RO-02 (pipeline) and RO-16 (platform), which realise VM-14.1. PR-01 underpins the value case, but the grammar provides no permitted edge for it (R07).
2. **Rival thesis:** AR-05 selects BM-06.2, which requires RO-13 and realises VM-14.4.
3. **Programme:** BM-23 is pursued through PS-06, which assigns PG-01.
4. **Actionability:** CA-10 (CEO separation, 2021-07-28) preceded the unsolicited IOI of 2021-08-11 at $80.00. That led to SI-08 (Board review, 2021-08-28) and SI-13. KKR and Party B made a joint IOI at $82.50 on 2021-09-18. Party B later withdrew, and GIP was admitted on 2021-10-29. The bid moved from $84.00 to $90.50, compressing VM-15.
5. **Form:** FI-01 enables ST-01/ST-08.
6. **Execution:** BM-23 is implemented through II-01. That compares with OU-01 (consistent), and OU-03 corroborates BM-23. The E2 upgrade was withheld.

## 5. Identity and data conflicts

- **R01:** the SOURCE seller is the target itself. The verified sellers are the public stockholders.
- **R02:** the SOURCE buyer lists the listed parent and manager entities. The verified acquirer is the vehicle Cavalry Parent L.P. GIP was later acquired by BlackRock (announced Jan 2024).
- **R03:** SOURCE value $15,238.57m against ~$15bn EV and ~$11.49bn equity. The basis is unreconciled.
- **R04:** the SOURCE completion date is null. The verified completion date is 2022-03-25.
- **R09:** four Houston data centres were sold to DataBank for $670m between signing and close, so the perimeter at close differs from signing.
- **R11:** the two premium figures use different reference dates. They do not conflict.

## 6. Residuals

- **R05 (High):** no genuine source bodies were read.
- **R06 (High):** missing DEFM14A content: bidder identities, board reasons, projections, financing amounts and regulatory approvals.
- **R07:** wrong layer. The grammar has no PR-to-VM edge for financial buyers.
- **R08:** missing theory. There is no terminal child for a sponsor growth-capital platform thesis.
- **R09:** the interim-period disposal.
- **R10:** weak sources were excluded (student deck, aggregator fund data).
- **R01 to R04, R11:** see Section 5.

All residuals are OPEN, carry model recommendations only, and have no human decision recorded.

## 7. Source register

| ID | Source | Date | Family | Access |
|---|---|---|---|---|
| S01 | CyrusOne/KKR/GIP announcement, 8-K Ex. 99.1 | 2021-11-15 | Party primary | Index excerpt |
| S02 | Merger Agreement, 8-K Ex. 2.1 | 2021-11-14 | Party legal | Index excerpt |
| S03 | DEFM14A / PREM14A proxy | 2021-12-15 | Party filing | Index excerpt (fragments) |
| S04 | Dgtl Infra merger-process summary | ~2021-12 | Trade press | Index excerpt |
| S05 | Stockholder approval, 8-K Ex. 99.1 | 2022-02-01 | Party primary | Index excerpt |
| S06 | Closing release, 8-K Ex. 99.1 | 2022-03-25 | Party primary | Index excerpt |
| S07 | CEO transition, 8-K Ex. 99.1 | 2021-07-28 | Party primary | Index excerpt |
| S08 | Q3 2021 earnings release | 2021-10-27 | Party primary | Index excerpt |
| S09 | Reuters (via investing.com / Yahoo) | 2021-11-15 | Independent news | Index excerpt |
| S10 | DatacenterDynamics | 2021-11-15 | Trade press | Headline |
| S11 | CyrusOne CEO appointment | 2022-09-12 | Party primary (post-close) | Index excerpt |
| S12 | CyrusOne/KEPCO JV | 2023-05 | Party primary (post-close) | Index excerpt |
| S13 | Northern Virginia land purchase | 2023-01-18 | Party primary (post-close) | Headline |
| S14 | Data Center Frontier, ~$9.7bn financing | 2024 | Trade press (post-close) | Index excerpt |
| S15 | DataBank Houston acquisition | 2022-01 / 2022-03 | Trade press | Index excerpt |
| S16 | Reuters, CyrusOne IPO plans | 2026 | Independent news | Index excerpt |
| S17 | KKR "Here's the Deal" | undated | Sponsor page (context only) | Index excerpt |
| S18 | GIP portfolio page | undated | Sponsor page (context only) | Index excerpt |
| S19 | Cravath / Paul, Weiss | 2021-11 / 2022-03 | Adviser | Headline |
| S20 | QPCG student deck | 2023-02 | **Excluded** | Not used |
| S21 | BlackRock acquisition of GIP | 2024-01 | Party primary (context) | Headline |

Captured excerpts are stored in `raw/Sxx.txt`, and their hashes appear in `normalized/normalized_sources.csv`.

## 8. QC and completion status

- **Passed:** row and ID preservation, source coverage, zero weak sources used as evidence, edge validity, R06, R38, blank human fields, gold_eligible = N.
- **Conditional:** R37.
- **Failed:** "genuine source bodies used", because all source hosts were blocked.
- **Overall:** COMPLETE AS A LOCKED INDEPENDENT RECODE, INCOMPLETE FOR THE GOLD PATH until R05 verification is done. See `exact_schema/Completion_Checklist.csv`.

## 9. Hashes of locked outputs (SHA-256)

| File | SHA-256 |
|---|---|
| `exact_schema/Causal_Edges.csv` | `d35f9f72b96f27612f2e4247824e2e8f27d40d86d93fe393c23f31626d0fc20b` |
| `exact_schema/Claim_Evidence.csv` | `06b869b9674eb44d0b98cb32e6d3658fd8ed7fcf79f02caac555cab334fd4550` |
| `exact_schema/Coding_Output.csv` | `e8515729bb5b597cf9c61e610914db122fdffef788ea7943cd8444c1204b6c25` |
| `exact_schema/Completion_Checklist.csv` | `26847fa3130aef45d477c8094b292e2e19f1e6f029ac70620841586af7aed83a` |
| `exact_schema/Residuals.csv` | `0c436b87c91376cc39182a74d3f14562c8ca802aad42173025fd5cb1d6a29870` |
| `exact_schema/Source_Log.csv` | `16aa369dc01f6f2898193d9dd9d682bf8d84de990fbc7ff3dac2f92a4786e98b` |
| `normalized/normalized_claims.csv` | `be04cee6fb5b1dab37e7bcd26202555a8cefd2e8830807707d0477086b0ffee3` |
| `normalized/normalized_edges.csv` | `fbfe2ab184404ec46c47e8fc4c765cbc8e73f1090a47fa60e76fa8bc8abbcdb2` |
| `normalized/normalized_residuals.csv` | `5e30aec94b76239419e215f0d3b2d67b5849686382963cb2d75cf136bca3536d` |
| `normalized/normalized_sources.csv` | `1c6bc2239beff8506230cfe1cbe30045759a3536d029db032bf3b1dea13b3ee6` |
| `raw/S01.txt` | `c86d58ebd97defeee0f2ad31f7d40e22d0bb5cf81858e7abdfdfa4f76f6f8e52` |
| `raw/S02.txt` | `e2243ad6d3362922962b54a2946959e2f122582a7c1f0735dc0a509cc60d43aa` |
| `raw/S03.txt` | `39c52c8585953c296fb6d838001bee111600b2d8feb1b4289c8f50a187690cd2` |
| `raw/S04.txt` | `94fe2ffb5ad2e9bc2556ae1933d702edcc554b47699ab938778daf41d3a195df` |
| `raw/S05.txt` | `5a3710a1a797571c4b5e4e46c810b1e30ab5dd06894392c8f76db8b46179507b` |
| `raw/S06.txt` | `6ded2a9c28dd9dc53eb5e7ff53711e64f9b6a0e483693ea17f5c11f95c89c041` |
| `raw/S07.txt` | `6ec90d2f59b9d2a0769717b1bc3e4f6735eda61be37e870e75e9f677a23e5530` |
| `raw/S08.txt` | `579a03f741f4fad92ecc9451aba5f661fc42b3ee2f5a4e7c08800f9ed2108826` |
| `raw/S09.txt` | `ca0c7c318c270a9bb9cca908934bbe4321227ad84453354837b470bf6ce9f6bb` |
| `raw/S10.txt` | `aacae13fe93a807dfe0f92a8d5e354175a9100c88275ae8d36b22ada52bbe8b6` |
| `raw/S11.txt` | `ac4dbc7e61303eb6887756f540e3168cb91085b8979992dd4ee81b6473330973` |
| `raw/S12.txt` | `bfcbc75b0173b55866fcf0283d94599947f43c0206f387f9b04f407fa25905e6` |
| `raw/S13.txt` | `4a0be4bb486febab8a68f748070511c7f91b5c05409fe7571bfd88962a61577e` |
| `raw/S14.txt` | `9c47b1575bf5dbba60d95cb3bd8f0ac6f8d324c44d3ffd34eddee045ae5669e5` |
| `raw/S15.txt` | `6e0a9648fcb3b717171a0c7cd377e24a729c50e2f138d46e19890af6c5fa357f` |
| `raw/S16.txt` | `6eb4911c5115e7c83628e42f5c92cffb5be2cd48cc26b1ba2beaa18a1dfe3cb5` |
| `raw/S17.txt` | `2739349b2558d3d19cd8cffeeb9fce692993ebe42c4472c46982697a828b31a0` |
| `raw/S18.txt` | `1a1223086f9161e16a523f0cf60830db2498efad9a24d7e08a47d4841408e85a` |
| `raw/S19.txt` | `e6a4b8a4c367ca7fcd793b656f8268e27f7ff11f2ab892ccafbba13480f3f174` |
| `raw/S20.txt` | `4bbdd7910b4f4a48a8783a6ba764462a421f4b834991975f0555f3406e5c867d` |
| `raw/S21.txt` | `c1f18727570449feb623f965dc4a7e0ac96c37a28bd246dd2275b26e05b96192` |

This summary file and the full set above are hashed again in `LOCK_MANIFEST.json`.
