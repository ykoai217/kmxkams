# INDEPENDENT RECODE SUMMARY: R020 / SPTRD1533572

Independent-family blind recode for calibration. Batch B01C, packet V02, codebook v0.3-calibration-freeze. Coder ID IND-FAMILY-CLAUDE-BLIND-01.
Locked 2026-09-27 before any exposure to Coder-1, verifier or adjudication output. Not Gold. No human sign-off fields populated (R39).

**Status: PROVISIONAL, source-body verification outstanding.** The session's network policy blocked every source page body, so all evidence comes from search-index snippets and search-tool summaries (residual RS05). Quotes below were returned by the search tool and have not been checked word for word against the original pages.

Packet integrity: all 16 files match `MANIFEST.json` SHA-256 values. Input ZIP SHA-256 `89f9cc5526d52f7a4927b07c88cf9e7f89b0e9690b322a5b3dcaef6c877cfe75`.

## 1. Verified event identity

| Field | SOURCE (immutable) | VERIFIED | Basis |
|---|---|---|---|
| Target | Teraco Data Environments (Pty) Ltd | Teraco Data Environments (Pty) Ltd (2022 holdco: TDE Investments (Pty) Ltd) | S01, S15, S17 |
| Buyer | Berkshire Partners LLC | Berkshire Partners LLC, through its funds (vehicle not verified, RS09) | S01, S03, S06 |
| Seller | Permira Advisers Ltd. | Permira funds, advised by Permira Advisers. Management named as seller by the aggregator only (RS03) | S01, S02, S22 |
| Announced | 2019-01-24 | 2019-01-24 (definitive agreement) | S01, S03, S06 |
| Type | M&A - Whole | M&A, majority stake. Control acquired; Permira funds keep a significant minority (RS01) | S01, S02, S10 |
| Status | Completed | Completed. Closing date **unresolved**: SOURCE 2020-01-24 is unverified; Q1 2019 close was expected (RS02) | S12, S14, S16 |
| Value | NA | Undisclosed. A pre-deal Bloomberg expectation of $600m to $1bn including debt is not a deal value (RS04) | S06, S07 |

Identity Resolution Status: **RESOLVED_WITH_CONFLICTS**. This is the same economic event. No substitution was made.

Relevance: **Core DC.** Teraco is a vendor-neutral colocation and interconnection operator with 5 facilities, 30MW of installed critical load, more than 450 clients and the NAPAfrica IXP.

## 2. Positive ontology codes

| Concept | Label | Role | Evidence state | Likelihood | Confidence |
|---|---|---|---|---|---|
| AR-04 | Private equity sponsor | context | E1 | 7 | M |
| PR-01 | Structural demand growth | **R-P** | E1 | 6 | M |
| BC-05 | Deployable capital / mandate | R-E | E4 | 5 | L |
| BM-23 | Financial ownership-value thesis (non-terminal) | **R-P** | E3 (test PASS) | 6 | M |
| SM-04 | Partial monetisation with retained participation | R-C | E1 | 6 | M |
| SM-08 | Fund-life realisation | R-C | E4 | 4 | L |
| SM-10 | Valuation-window timing | R-I | E4 | 3 | L |
| SI-08 | Strategic review / formal sale process | R-E | E3 (test PASS) | 6 | M |
| VM-07 | Network and ecosystem density effects | R-C | E1 | 5 | M |
| VM-02 | Scarcity rent capture | R-C | E4 | 4 | L |
| VM-11 | Multiple arbitrage | R-I | E4 | 3 | L |
| RO-01 | Operating capacity (30MW installed) | object | E1 | 7 | M |
| RO-15 | Ecosystem / interconnected community | object | E1 | 7 | M |
| RO-06 | Connectivity assets (NAPAfrica IXP) | object | E1 | 7 | M |
| RO-13 | Customer contracts and relationships | object | E1 | 6 | M |
| RO-02 | Development pipeline (60MW target) | object | E4 | 4 | L |
| ST-01 | Whole-company acquisition (control, not 100%) | form | E1 | 7 | M |
| ST-06 | Partial sell-down to partner | form | E1 | 7 | M |
| FI-01 | Acquisition debt (aggregator LBO flag only) | R-E | E4 | 5 | L |
| PG-05 | Standalone / one-off acquisition | role | E3 (test PASS) | 5 | M |
| II-01 | Preserve standalone platform | intent | E3 (test PASS) | 6 | M |
| II-07 | Financial / governance-only ownership | intent | E4 | 5 | L |
| OU-03 | Capex follow-through (JB4, Nov 2020) | outcome | E1 | 7 | M |
| OU-09 | Exit / realised return (Digital Realty, 2022) | outcome | E1 | 7 | H |

Rule checks:
- **R06:** both primaries have a counterfactual.
  - PR-01: without sub-Saharan demand growth, the stated thesis of capturing fast market growth and doubling from 30MW to 60MW disappears, and the deal reprices or fails.
  - BM-23: a financial buyer with no evidenced operating combination has no reason to take majority control without an ownership-value thesis.
- **R37:** BM-23 is the only positive buyer motive. It is backed by VM-07 at E1, with an ownership lever: majority control of the ecosystem hub, directing growth capex and exit timing. The case is flagged for review under RS07.
- **R38:** II codes cite sources dated 2019-01-24. Closing needed regulatory approval, so it came after signing, and the same-day ordering question does not arise. Post-close conduct appears only in OU.
- **R27:** no policy code is positive, because the instrument, status and effective-date fields could not be sourced.
- **E2:** no upgrades. OU-03 and OU-09 corroborate BM-23, but BM-23 rests on E3 inference with no E1 statement, so it cannot move to E2.

## 3. Rejected and unknown concepts

- **BM-01 Geographic entry:** E4, likelihood 3. Kept as a rival only; nothing shows geographic presence itself was the purpose for a financial sponsor.
- **BM-26 Ecosystem acquisition:** E4. Not coded because it is still a candidate concept (MI21). RO-15 plus VM-07 are used instead (RS08).
- **BM-08, BM-09, BM-02, BM-11:** not coded. Capacity and pipeline are coded as objects. Berkshire has no operating platform in the market for expansion or consolidation.
- **PC-08 Competition-law feasibility:** E5 under R27. The deal was subject to Competition Commission approval, but the decision could not be retrieved (RS06).
- **SI-13 Competitive auction:** E5. No other bidders were evidenced.
- **CA facet:** no dated catalyst (E5). Microsoft Azure's South Africa launch on 2019-03-06 came after signing.
- **BO-05 and other BO codes:** E5. There are no price or premium indicators (R34).
- **PR-06 Competitive threat:** E5.
- **OU-07 Add-on sequence:** E5. None found.
- **Anti-theses:** AT-07 transient scarcity (E4, kill test proposed). AT-03 premium above capturable value (E5, price undisclosed).

## 4. Causal chain

```
AR-04 --selects--> BM-23                                  [E3]
PR-01 (R-P) --creates--> BC-05 --activates--> BM-23       [E4; grammar gap RS13]
BM-23 --requires--> RO-15 ecosystem, RO-01 30MW platform  [E1]
RO-15 --realises--> VM-07                                 [E1]
RO-06 --realises--> VM-02                                 [E4]
SM-04 (+SM-08 E4) --creates--> SI-08 --affects--> ST-06   [E3]
FI-01 --enables--> ST-01                                  [E4]
BM-23 --implemented through--> II-01 --compared with--> OU-03   [E3 / E1]
OU-03, OU-09 --corroborate--> BM-23                       [E1; no E2 upgrade]
AT-07 --refutes (if true)--> BM-23                        [E4]
```

In plain terms: a PE sponsor with no operating overlap took majority control of Africa's leading interconnection-rich colocation platform. It did so to ride structural demand growth and fund an organic expansion from 30MW to 60MW, with a later realisation in view. The seller, which had held Teraco since its December 2014 MBO, ran an adviser-led process and rolled over a significant stake.

## 5. Identity and data conflicts

- **RS01:** SOURCE says "Whole"; the deal was a majority stake with seller rollover.
- **RS02:** the Completion Date 2020-01-24 is unverified. It falls exactly 12 months after announcement, against an expected Q1 2019 close.
- **RS03:** the seller is recorded as the adviser entity rather than the Permira funds. Management selling is supported by the aggregator only.
- **RS04:** value, EV, debt and stake % are undisclosed. The "$1bn valuation" claim appears only in an unattributed search summary.
- **RS09:** the vehicles named in 2022 (TDE Luxco, BPESAL V2 S.a r.l., TDE Investments) are not mapped to Berkshire or Permira.
- **RS10:** operating and development metrics must stay separate. 30MW is installed; 60MW is a target; JB4 (19MW / 38MW) is a post-close development.
- **RS11:** the Ultimate Parent field shows Digital Realty, which is anachronistic for 2019.
- **RS12:** "Total Amount Raised 23,794" is unexplained.
- **Minor:** S07 dates the Permira MBO to 2015, while S01 gives December 2014 (announcement versus completion).

## 6. Residuals

All 13 are OPEN. Full text is in `exact_schema/Residuals.csv`.

| ID | Type | Topic |
|---|---|---|
| RS01, RS02, RS03, RS09, RS11, RS12 | bad_data | Identity and data-field conflicts (see section 5) |
| RS04, RS06, RS10 | insufficient_evidence | Value; competition approval; operating vs development metrics |
| RS05 | insufficient_evidence | **Source bodies blocked; search-summary error observed; provisional** |
| RS07 | missing_theory | No terminal BM-23 child for a sponsor buy-and-grow thesis |
| RS08 | parent_child | BM-26 candidate vs RO-15 + VM-07 |
| RS13 | wrong_layer | Grammar lacks a PR route to a financial motive |

## 7. Source register

Access is "snippet" for every source except S22. Snippet means only search-index text was available; the page body was blocked.

| ID | Source | Type | Date |
|---|---|---|---|
| S01 | Teraco release, "Berkshire Partners to Invest in Teraco" | Party (target) | 2019-01-24 |
| S02 | Permira press release PDF | Party (seller) | 2019-01-24 |
| S03 | Berkshire Partners release (Hamelsky quote) | Party (buyer) | 2019-01-24 |
| S04 | Permira announcement page | Party (seller) | 2019-01-24 |
| S05 | Teraco press office, M&G (Hnizdo quote) | Party (target) | 2019-01-24 |
| S06 | Bloomberg, "Berkshire Partners Buys Stake..." | Independent press | 2019-01-24 |
| S07 | Bloomberg, "Permira Is Said to Seek Buyers..." | Independent press | 2018-11-09 |
| S08 | Torch Partners deal credential | Adviser | n/d |
| S09 | DatacenterDynamics | Trade press | 2019-01 |
| S10 | TechCentral | Trade press | 2019-01 |
| S11 | MyBroadband | Trade press | 2019-01 |
| S12 | Bloomberg, "Berkshire-Backed Teraco Plans $250m..." | Independent press | 2020-11-03 |
| S13 | The Tech Capital (weak; not used for value) | Trade press | n/d |
| S14 | Berkshire/Permira release, sale to Digital Realty | Party | 2022-01-03 |
| S15 | Digital Realty 8-K / Ex.99.1 | SEC filing | 2022-01-03 |
| S16 | Digital Realty completion release | Party | 2022-08-01 |
| S17 | Competition Tribunal LM165Jan22 | Regulator | 2022-08-18 |
| S18 | Teraco, "NAPAfrica top 15" | Party (target) | 2018 |
| S19 | Berkshire Partners digital infrastructure pages | Party (buyer) | current |
| S20 | Microsoft Azure blog, SA regions GA | Third party | 2019-03-06 |
| S21 | DCD / PE Hub on the Permira MBO | Trade press | 2014-12 / 2015 |
| S22 | CIQ/MI packet record | Aggregator | n/d (full packet file) |

Each source's capture text and its SHA-256 are in `source_captures/` and `normalized/normalized_sources.csv`. These hashes identify the captured snippet text. They are **not** hashes of the original page bodies.

## 8. QC and completion status

All 12 checklist items PASS (`exact_schema/Completion_Checklist.csv`). The packet holds 1 candidate row; the template text refers to 10.

Overall status: **COMPLETE AS A PROVISIONAL RECODE; SOURCE-BODY VERIFICATION NOT DONE.** Before comparison weight is assigned, rerun with body access to these hosts: teraco.co.za, permira.com, media.permira.com, berkshirepartners.com, pressoffice.mg.co.za, bloomberg.com, sec.gov, saflii.org, compcom.co.za, comptrib.co.za. Then confirm the S03/S05 quotes verbatim and look for the 2019 Commission decision and closing date.

Gold: **not marked.** Human reviewer fields: **empty.** gold_eligible = N on every claim. The independent-family/human gate remains outstanding.

## 9. Hashes of locked independent outputs (SHA-256)

| File | SHA-256 |
|---|---|
| `exact_schema/Causal_Edges.csv` | `3d553e2261fc2a8c901b982eac8c85f88902144c2ebc4e0d098f48e903cae78c` |
| `exact_schema/Claim_Evidence.csv` | `2e4c85197e77ad3f211f08166df9525f8c13bcda89a4eba8f098fe0a416c4deb` |
| `exact_schema/Coding_Output.csv` | `3a6f5cff34c14b3290fb286eca932bf4ec505a635ba97c05591a3b70a4962d83` |
| `exact_schema/Completion_Checklist.csv` | `3b84f3fe04b11e93a15279da4f5f2dd9c4ccf0417937ea3e13b1577eef716c82` |
| `exact_schema/Residuals.csv` | `03a368b4961cd8b84758310e47814d7ab4d103131ad3806eced17d541152a33a` |
| `exact_schema/Source_Log.csv` | `81cdb1207e8736b59effee71533086445f010c500bd4a6eb3bd39b95ce21af38` |
| `normalized/normalized_claims.csv` | `87f2d5af0497df310bfb3cb9c3e52e33c8765ce3fb0414d16da43b9062516693` |
| `normalized/normalized_edges.csv` | `b8fde0a7facdbcfacd009525728b428b7f4a5bb0f2fd03c70fa6f3534d8d4710` |
| `normalized/normalized_residuals.csv` | `1d0e05407bbf7319aee8feb1ce8be9576e23b29db4c247d16b7a938185472011` |
| `normalized/normalized_sources.csv` | `0af9aedb1f9107fadf3bf4b148198c1ba8d9de6f8e66f7210e9ac5577aafb691` |

Source-capture hashes (22 files) are listed in `LOCK_MANIFEST.json`. The hash of this summary, and the manifest's own hash, are reported outside the manifest.
