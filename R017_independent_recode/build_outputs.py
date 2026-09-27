#!/usr/bin/env python3
"""Build the R017 independent blind-recode package (exact-schema + normalized CSVs).

All content is authored in this file so the outputs are reproducible from one place.
Run: python3 build_outputs.py   (writes into ./exact_schema, ./normalized, ./raw_snippets)
"""
import csv
import hashlib
import os

HERE = os.path.dirname(os.path.abspath(__file__))
SAMPLE = "R017"
MI = "SPTRD1982232"
CODER = "IND-FAMILY-CLAUDE-01"
BATCH = "B01C"
CBV = "v0.3-calibration-freeze"
ACCESS = "2026-09-27"
AUTH = "model_recommendation_R39"
ADJ = "Unadjudicated; independent-family blind recode; model recommendation only (R39)"
GOLD = "not_assessed_pending_independent_family_human_gate"
SNIP = ("Search-index snippet only; full source body NOT retrieved (session egress policy blocked "
        "the host). Wording may be a search-tool paraphrase; re-verify against the body.")

# ---------------------------------------------------------------------------
# SOURCES
# ---------------------------------------------------------------------------
# Each: id, title, publisher, type, date, url, family, locator, limitations, key_fact, conf, snippet
SOURCES = [
    dict(id="S00", title="Sealed packet raw record R017 (S&P MI SPTRD1982232 / CIQ IQTR1800442048)",
         pub="S&P Global Market Intelligence (via sealed packet)", type="Aggregator database record",
         date="2026-09-27", url="packet://raw_deals.jsonl#R017", family="aggregator_MI",
         loc="raw_deals.jsonl row 1 (Deal Summary, Seller, Value, Feature Type, Termination Date)",
         lim="Aggregator record; SOURCE fields immutable; used only for SOURCE identity and to test against primary evidence.",
         fact="Deal Summary: Chen non-binding proposal 13 Sep 2022, US$8.2/ADS (~US$1.3667/sh), 'US$1.2 billion'; equity+debt; Kroll/Davis Polk to special committee 14 Oct 2022; cancelled 10 Jul 2024. Seller field 'Best Ventures Limited'; Buyer null; Value 2,897.450366 = Implied EV; Sponsor Backed Yes; Ultimate parent 'Asia Investment Fund Management Limited'.",
         conf="M (for what MI recorded); L (as evidence of the economic event)", access="Full record in packet"),
    dict(id="S01", title="VNET Announces Receipt of Preliminary Non-Binding Proposal to Acquire All of Its Shares and Formation of Special Committee to Review the Proposal",
         pub="VNET Group, Inc. (issuer press release; PR Newswire / ir.vnet.com / Stockhouse mirror)", type="Issuer press release (party primary)",
         date="2022-09-13", url="https://www.prnewswire.com/news-releases/vnet-announces-receipt-of-preliminary-non-binding-proposal-to-acquire-all-of-its-shares-and-formation-of-special-committee-to-review-the-proposal-301623081.html",
         family="issuer_VNET", loc="Paras 1-2 (proposal terms; special committee: Kenneth Chung-Hou Tai, Sean Shao, Changqing Ye)",
         lim=SNIP + " Mirrors: ir.vnet.com/news-releases/news-release-details/vnet-announces-receipt-preliminary-non-binding-proposal-acquire/ ; stockhouse.com dated 2022-09-13.",
         fact="Board received preliminary non-binding proposal letter dated 13 Sep 2022 from Josh Sheng Chen, founder and executive chairman, to acquire all outstanding ordinary shares for US$8.20/ADS (~US$1.3667/ordinary share); special committee of three independent directors formed to evaluate it and other strategic alternatives.",
         conf="H for proposal terms and date (party primary; multiple mirrors converge); body not retrieved", access="snippet"),
    dict(id="S02", title="Form 6-K Exhibit 99.1 (proposal letter annex), VNET Group, Inc.",
         pub="VNET Group, Inc. / Josh Sheng Chen (letter author) via SEC EDGAR", type="SEC filing exhibit (party primary)",
         date="2022-09-13", url="https://www.sec.gov/Archives/edgar/data/1508475/000110465922099681/tm2225763d1_ex99-1.htm",
         family="issuer_VNET", loc="Proposal letter text: price, premium, financing, definitive agreements",
         lim=SNIP + " Phrases were returned by a search summariser attributing them to the letter.",
         fact="'I believe the Proposal is a highly attractive offer to the Company's shareholders'; premium ~74.8% to 12 Sep 2022 ADS close and ~64% to 30-trading-day VWAP; 'The MBO Consortium will fund the Transaction with a combination of equity and debt financing'; commitments expected to be in place when definitive agreements are signed.",
         conf="M (party primary but snippet-level wording)", access="snippet"),
    dict(id="S03", title="Schedule 13D/A (Amendment No. 1) by Sheng (Josh) Chen and affiliates re VNET Group, Inc.",
         pub="Sheng Chen, GenTao Capital Ltd, Fast Horse Technology Ltd, Sunrise Corporate Holding Ltd, Personal Group Ltd (filers) via SEC EDGAR",
         type="SEC beneficial-ownership filing (party primary)", date="2022-09-14",
         url="https://www.sec.gov/Archives/edgar/data/1508475/000110465922099826/tm2225865d1_sc13da.htm",
         family="buyer_Chen", loc="Item 4 (purpose; proposal) and Item 5 (holdings)",
         lim=SNIP + " Holdings figures in snippet may come from a later amendment (Feb 2023 13D/A also indexed).",
         fact="Founder delivered a preliminary, non-binding management-team-led proposal to acquire all outstanding shares not already owned by the Founder and his affiliates for US$8.20/ADS; Founder and rest of management intend to form the 'MBO Consortium'; equity and debt financing to be in place at definitive agreements. Holdings: GenTao 48,515,635 Class A; Fast Horse 19,670,117 Class B; Sunrise 8,087,875 Class B; Personal Group 4 Class A, 769,486 Class B, 60,000 Class C; 1,479,660 Class A issuable on RSU vesting. Chen sole shareholder of each vehicle.",
         conf="M (party primary; snippet)", access="snippet"),
    dict(id="S04", title="VNET Announces Appointment of Independent Financial Advisor and Legal Counsel to the Special Committee",
         pub="VNET Group, Inc. (PR Newswire)", type="Issuer press release (party primary)", date="2022-10-14",
         url="https://www.prnewswire.com/news-releases/vnet-announces-appointment-of-independent-financial-advisor-and-legal-counsel-to-the-special-committee-301650144.html",
         family="issuer_VNET", loc="Headline; corroborated by S00 Deal Summary",
         lim=SNIP + " Only headline indexed; advisor names (Kroll Securities LLC; Kroll LLC/Duff & Phelps Opinions Practice; Davis Polk) come from S00.",
         fact="Special committee retained independent financial advisor and legal counsel (Kroll; Davis Polk per S00).",
         conf="M", access="snippet (headline)"),
    dict(id="S05", title="VNET Announces Receipt of Withdrawal of Non-binding Offer by Mr. Josh Sheng Chen and Termination of Discussion on Potential Going-Private Transactions",
         pub="VNET Group, Inc. (PR Newswire / ir.21vianet.com / Form 6-K Ex. 99.1)", type="Issuer press release (party primary)",
         date="2024-07-11", url="https://www.prnewswire.com/news-releases/vnet-announces-receipt-of-withdrawal-of-non-binding-offer-by-mr-josh-sheng-chen-and-termination-of-discussion-on-potential-going-private-transactions-302194657.html",
         family="issuer_VNET", loc="Paras 1-3 incl. Chen quote; 6-K: sec.gov/Archives/edgar/data/1508475/000110465924078197/tm2419009d1_ex99-1.htm",
         lim=SNIP,
         fact="Special committee received letter dated 10 Jul 2024 from Chen (Founder, Co-Chairperson, interim CEO) that he would not proceed with the 13 Sep 2022 proposal; withdrawn with immediate effect. Given withdrawal and lack of substantive progress on any other going-private transaction, committee ceased evaluation; board dissolved the committee. Chen: 'I withdrew my privatization proposal as I believe that maintaining VNET's listing status is better aligned with the Company's long-term interests given current market conditions.'",
         conf="H for withdrawal fact/date; M for Chen's stated reason (self-interested statement)", access="snippet"),
    dict(id="S06", title="VNET Receives Unsolicited Preliminary Non-Binding Proposal to Acquire All of Its Shares",
         pub="VNET Group, Inc. (PR Newswire; 6-K Ex. 99.1)", type="Issuer press release (party primary)", date="2022-04-11",
         url="https://www.prnewswire.com/news-releases/vnet-receives-unsolicited-preliminary-non-binding-proposal-to-acquire-all-of-its-shares-301522673.html",
         family="issuer_VNET", loc="Para 1; 6-K: sec.gov/Archives/edgar/data/1508475/000110465922044641/tm2212420d1_ex99-1.htm",
         lim=SNIP + " SEPARATE transaction (Hina Group + Industrial Bank Shanghai Branch); used only as context, not substituted.",
         fact="Unsolicited preliminary non-binding proposal from The Hina Group and Industrial Bank Co., Ltd., Shanghai Branch to acquire all outstanding ordinary shares for US$8.00/ADS (~US$1.3333/share) in cash.",
         conf="H for existence/terms of the rival proposal", access="snippet"),
    dict(id="S07", title="VNET Group, Inc. Form 20-F for FY2022",
         pub="VNET Group, Inc. via SEC EDGAR", type="Annual report (party primary)", date="2023-04-25",
         url="https://www.sec.gov/Archives/edgar/data/1508475/000110465923050330/vnet-20221231x20f.htm",
         family="issuer_VNET", loc="Risk factors (HFCAA); Item 4/Recent developments (special committee); notes (2026 convertible notes indenture US$600m)",
         lim=SNIP + " Filing date approximated from accession sequence; verify.",
         fact="Special committee evaluating both the April 2022 (Hina/Industrial Bank) and September 2022 (Chen) proposals; May 2022 conclusive HFCAA identification; Aug 2022 PCAOB protocol; Dec 2022 PCAOB vacated determinations; US$600,000,000 convertible senior notes under the 2026 Indenture.",
         conf="M", access="snippet"),
    dict(id="S08", title="VNET Provides Update on its Status under the Holding Foreign Companies Accountable Act",
         pub="VNET Group, Inc. (PR Newswire / ir.vnet.com)", type="Issuer press release (party primary)", date="2022-05-26",
         url="https://www.prnewswire.com/news-releases/vnet-provides-update-on-its-status-under-the-holding-foreign-companies-accountable-act-301540560.html",
         family="issuer_VNET", loc="Para 1",
         lim=SNIP + " Release date inferred from the identification date stated in the snippet; verify.",
         fact="On 26 May 2022 VNET was conclusively identified by the SEC as a Commission-Identified Issuer under the HFCAA because its FY2021 20-F audit report was issued by Ernst & Young Hua Ming LLP.",
         conf="H for regime state (party primary on its own status)", access="snippet"),
    dict(id="S09", title="Bold Ally (Cayman) Limited: Enforcement of up to 76,273,626 Class A ordinary shares (equivalent to 12,712,271 ADSs) of VNET Group, Inc.",
         pub="Bold Ally (Cayman) Limited (lender) via Business Wire / Nasdaq", type="Lender press release (counterparty primary)", date="2023-02-07",
         url="https://www.businesswire.com/news/home/20230207005947/en/",
         family="lender_BoldAlly", loc="Paras 1-3",
         lim=SNIP + " Post-announcement (Feb 2023); used for buyer-condition facts that pre-date the proposal (facility from Aug 2021) and as revealed behaviour.",
         fact="Following default by GenTao Capital Limited (wholly owned by Chen) under a US$50,250,000 margin loan facility, lender exercised rights over collateral: 48,515,634 Class A (8,085,939 ADSs) and 27,757,992 Class B shares pledged; lender may convert Class B to Class A; if all sold, Chen's voting interest would significantly decrease.",
         conf="H for facility/enforcement facts", access="snippet"),
    dict(id="S10", title="VNET Group securities class action notices (Berger Montague; Bragar Eagel & Squire; Glancy Prongay & Murray)",
         pub="Plaintiff law firms (GlobeNewswire / PR Newswire / investigations.bergermontague.com)", type="Litigation notice (incentivised third party)", date="2024-01-05",
         url="https://investigations.bergermontague.com/vnet-group/",
         family="plaintiff_counsel", loc="Complaint summary",
         lim=SNIP + " Plaintiff-side allegations; incentive to overstate. Used only for dated facility facts consistent with S09.",
         fact="On 19 Aug 2021 Chen and his companies entered a US$50.25m margin loan facility with Bold Ally, pledging shares of GenTao, Sunrise and Beacon Capital Group; Chen, GenTao and affiliates beneficially owned ~78.52m VNET shares; complaint alleges non-disclosure of GenTao default risk; ADS fell 17.8% to US$5.02 on 14 Feb 2023.",
         conf="L-M (incentivised; consistent with S09)", access="snippet"),
    dict(id="S11", title="21Vianet Announces Signing of Definitive Agreement to Repurchase Approximately US$260 million of Class B Ordinary Shares from Tuspark; 21Vianet's Founder and Executive Chairman to Expand Ownership in 21Vianet",
         pub="21Vianet Group, Inc. (GlobeNewswire; 6-K Ex. 99.1)", type="Issuer press releases (party primary)", date="2021-03-24",
         url="https://www.globenewswire.com/news-release/2021/03/24/2198601/25408/en/21Vianet-Announces-Signing-of-Definitive-Agreement-to-Repurchase-Approximately-US-260-million-of-Class-B-Ordinary-Shares-from-Tuspark.html",
         family="issuer_VNET", loc="Mar 2021 release para 1; Aug 2021 release globenewswire.com/en/news-release/2021/08/06/2276468/",
         lim=SNIP,
         fact="Mar 2021: company repurchased 48,634,493 Class B shares from Tuspark Innovation Venture Ltd for ~US$260m at US$5.346/share (US$32.076/ADS); Tuspark also agreed to sell shares to Beacon Capital Group Inc. (Chen-affiliated) at the same price. Aug 2021: Beacon to buy 17,140,898 Class A shares from Tuspark for ~US$50m.",
         conf="H for transaction marks", access="snippet"),
    dict(id="S12", title="VNET Announces US$299 Million Strategic Investment from Shandong Hi-Speed Holdings Group Limited; completion release; SDHG Schedule 13D",
         pub="VNET Group, Inc. (PR Newswire); Shandong Hi-Speed Holdings Group (13D filer)", type="Issuer press release + SEC filing (party primary)", date="2023-11-27",
         url="https://www.prnewswire.com/news-releases/vnet-announces-us299-million-strategic-investment-from-shandong-hi-speed-holdings-group-limited-301990587.html",
         family="issuer_VNET", loc="Announcement paras; completion release (28 Dec 2023); 13D sec.gov/Archives/edgar/data/1508475/000110465924001539/tm2333758d1_sc13d.htm",
         lim=SNIP + " Announcement date approximated (Nov 2023) from index; verify exact date.",
         fact="Success Flow (US$209.3m) and Choice Faith (US$89.7m), beneficially owned by SDHG, subscribe new Class A shares; ~42% of shares / ~35.7% voting; investor rights agreement with VNET and a voting and consortium agreement with Chen and his vehicles (Founder Parties); 3-year lock-up on Success Flow; completed 28 Dec 2023.",
         conf="H", access="snippet"),
    dict(id="S13", title="世纪互联私有化搁浅始末：从流动性困局到国资混改“拆弹” (Securities Times, republished by Sina Finance)",
         pub="证券时报 (Securities Times), reporter 王小伟; Sina Finance", type="Chinese-language financial press (original language)", date="2024-07-30",
         url="https://finance.sina.com.cn/jjxw/2024-07-30/doc-incfwiqk8313139.shtml",
         family="press_CN_SecuritiesTimes", loc="Sections on privatisation rationale, founder liquidity, Tus-Holdings (启迪控股) defaults",
         lim=SNIP + " Retrospective (post-withdrawal) journalism; reasons attributed to Chen are second-hand, not a party document.",
         fact="Privatisation withdrawal shelved a return to A-share/HK listing; VNET valued below peers GDS (万国数据) and Chindata (秦淮数据); Chen reportedly judged it an opportune time to privatise to escape short-term profit cycles; behind it a founder liquidity crisis linked to Tus-Holdings (启迪控股) bond defaults (2021-22); Chen pledged shares; resolved by July 2024 via Shandong state capital.",
         conf="M for reported sequence; L for motive attribution", access="snippet"),
    dict(id="S14", title="私有化期间因股权收购款惹官司，世纪互联有钱不付还是资金紧张？ (Yicai; Sina/Sohu reposts)",
         pub="第一财经 Yicai", type="Chinese-language financial press (original language)", date="2023-02-23",
         url="https://m.yicai.com/news/101683674.html",
         family="press_CN_Yicai", loc="Paras on Yunsi Chanxiang lawsuit; Fitch view; deal size",
         lim=SNIP,
         fact="Proposal valued VNET at ~US$1.2bn (~RMB 8.5bn); Fitch considered privatisation would trigger immediate repayment of VNET's US$600m notes; former holders of Beijing Yunsi Chanxiang sued over unpaid transfer consideration (acquisition completed 15 Jul 2021); cash RMB3.531bn at end-Sep 2022.",
         conf="M (Fitch view reported second-hand)", access="snippet"),
    dict(id="S15", title="Management-Led Group Advances in VNET Bidding War, as Big Names Line Up to Play",
         pub="Bamboo Works (also Benzinga / Seeking Alpha syndication)", type="Independent financial press", date="2022-11-01",
         url="https://thebambooworks.com/management-led-group-advances-in-vnet-bidding-war-as-big-names-line-up-to-play/",
         family="press_BambooWorks", loc="Lead paragraphs",
         lim=SNIP + " Date approximated from Benzinga URL path (22/11); reports Chinese media claims without naming the fund.",
         fact="A government-backed fund reportedly lined up to support the management-led bid; Hina Group bid US$8/ADS; MBK, PAG, CDH reportedly weighed bids; no deal materialised.",
         conf="L (unnamed, second-hand)", access="snippet"),
    dict(id="S16", title="Vnet Boss Scraps Takeover Bid as Data Centre Firm Stays Listed; China's Shandong Hi-Speed Buys Control of Vnet Data Centres",
         pub="Mingtiandi", type="Trade press", date="2024-07-12",
         url="https://www.mingtiandi.com/real-estate/data-centres/vnet-boss-scraps-takeover-bid-as-data-centre-firm-stays-listed/",
         family="press_Mingtiandi", loc="Body paras",
         lim=SNIP + " Date approximated.",
         fact="Interested parties included Hina/Industrial Bank, MBK, Chen, CDH, PAG; only Hina/Industrial Bank and Chen submitted confirmed bids; SDHG held 41.2% by end-Feb 2024.",
         conf="M", access="snippet"),
    dict(id="S17", title="Schedule 13G filed by Best Ventures Limited (Xiaomi Corporation) in respect of another issuer (CIK 1722608)",
         pub="Best Ventures Limited / Xiaomi Corporation via SEC EDGAR", type="SEC beneficial-ownership filing", date="2025-01-01",
         url="https://www.sec.gov/Archives/edgar/data/1722608/000095017025041241/xslSCHEDULE_13G_X01/primary_doc.xml",
         family="holder_Xiaomi", loc="Cover page / Item 2",
         lim=SNIP + " Filing relates to a different issuer; used ONLY to identify Best Ventures Limited. Filing date approximated (2025).",
         fact="Best Ventures Limited is a BVI company beneficially owned and controlled by Xiaomi Corporation; formerly known as Xiaomi Ventures Limited.",
         conf="M for entity identity", access="snippet"),
    dict(id="S18", title="21Vianet Group, Inc. Form 20-F (FY2015/FY2016) major shareholders; US$296m investment from Kingsoft, Xiaomi and Temasek",
         pub="21Vianet Group, Inc. via SEC EDGAR / ir.21vianet.com", type="Annual report + issuer press release (party primary)", date="2016-04-28",
         url="https://www.sec.gov/Archives/edgar/data/0001508475/000119312517121355/d305584d20f.htm",
         family="issuer_VNET", loc="Item 7 Major Shareholders; 2014 investment release",
         lim=SNIP + " Pre-2022 holdings; Best Ventures/Xiaomi holding in VNET as at Sep 2022 NOT verified.",
         fact="In Jan 2015 Xiaomi Ventures Limited received 6,142,410 Class A and 10,524,257 Class B ordinary shares for US$50m.",
         conf="M", access="snippet"),
    dict(id="S19", title="VNET Reports Unaudited Second Quarter 2022 Financial Results",
         pub="VNET Group, Inc. (PR Newswire; 6-K)", type="Issuer earnings release (party primary)", date="2022-08-23",
         url="https://www.prnewswire.com/news-releases/vnet-reports-unaudited-second-quarter-2022-financial-results-301614819.html",
         family="issuer_VNET", loc="Highlights; liquidity",
         lim=SNIP + " Release date approximated; total debt not captured by snippet.",
         fact="Cash, cash equivalents and restricted cash RMB3.62bn (US$539.9m) at 30 Jun 2022; Q2 2022 net revenues RMB1.72bn (US$257.5m); adjusted EBITDA RMB486.9m (US$72.7m).",
         conf="H for figures", access="snippet"),
    dict(id="S20", title="PCAOB: Board Determinations Under the HFCAA; issuer risk-factor restatements of HFCAA chronology",
         pub="PCAOB; SEC filings citing HFCAA", type="Regulator page / filings", date="2022-12-15",
         url="https://pcaobus.org/oversight/international/board-determinations-holding-foreign-companies-accountable-act-hfcaa",
         family="regulator_PCAOB", loc="Determination history",
         lim=SNIP,
         fact="HFCAA enacted 18 Dec 2020; Statement of Protocol CSRC/MOF/PCAOB signed 26 Aug 2022; PCAOB vacated its 2021 determinations on 15 Dec 2022.",
         conf="H for regime dates", access="snippet"),
]

# ---------------------------------------------------------------------------
# CLAIMS
# ---------------------------------------------------------------------------
def claim(**k):
    base = dict(counterfactual="", factual_basis="", rival="", discriminating_test="", test_passed="",
                closing_date="none (proposal withdrawn 2024-07-10; never signed or closed)",
                intent_source_date="", intent_source_ids="", e1_source_ids="", outcome_source_ids="",
                outcome_concept_id="", policy_instrument="", policy_jurisdiction="", policy_status="",
                policy_effective_date="", policy_channel="", policy_layer="", policy_sign="", value_lever="",
                terminal="n/a", terminal_check="n/a", date_basis="Pre-announcement / announcement-date evidence",
                postclose="No")
    base.update(k)
    return base

CLAIMS = [
    claim(id="C01", facet="AR", concept="AR-09", label="Founder / management-led", role="Context (R16)",
          text="The proposer is Josh Sheng Chen, VNET founder and executive chairman, leading a management-team 'MBO Consortium'; no financial sponsor, fund or co-investor is named in the proposal.",
          es="E1", lik="7", conf="H", src="S01;S02;S03", e1="S01;S03",
          factual_basis="Proposal letter dated 2022-09-13 from Chen; 13D/A Item 4: Founder and rest of management intend to form MBO Consortium.",
          rival="AR-04 PE sponsor / AR-11 multi-mandate consortium (MI flags 'Sponsor Backed = Yes', LBO): no sponsor named in any party document; reported state-backed fund (S15) unnamed and unverified."),
    claim(id="C02", facet="BC", concept="BC-09", label="Existing minority / JV position", role="R-E",
          text="Chen and his wholly owned vehicles (GenTao, Fast Horse, Sunrise, Personal Group; Beacon Capital) already held a material founder stake (~78.5m shares incl. high-vote Class B and Class C) that would roll into the MBO; the offer targeted shares not already owned by the Founder.",
          es="E1", lik="6", conf="M", src="S03;S10;S11", e1="S03",
          factual_basis="13D/A holdings table; Beacon purchases from Tuspark 2021.",
          rival="None material; exact economic % at 13 Sep 2022 not verified from body."),
    claim(id="C03", facet="BC", concept="BC-07", label="Balance-sheet headroom or constraint", role="R-C",
          text="Buyer-side constraint: Chen's vehicle GenTao carried a US$50.25m margin loan (from 19 Aug 2021) secured on 48.5m Class A and 27.8m Class B VNET shares; the ADS had fallen from the US$32.08 2021 transaction mark to US$4.69 before the proposal. The facility defaulted and the lender enforced on 7 Feb 2023.",
          es="E1", lik="5", conf="M", src="S09;S10;S11;S13", e1="S09",
          factual_basis="Lender enforcement notice (S09) states facility size, collateral and borrower ownership; facility date from S10; price marks from S11/S01.",
          rival="Facility may have been comfortably covered at Sep 2022 (LTV triggers not disclosed in snippets), in which case the constraint was not operative at announcement.",
          discriminating_test="Obtain facility LTV/margin-call thresholds (13D/A exhibits) and compare with ADS price path Jun-Sep 2022.", test_passed="NOT_RUN",
          date_basis="Facility pre-dates announcement (Aug 2021); enforcement is post-announcement revealed behaviour"),
    claim(id="C04", facet="SI", concept="SI-06", label="Undervalued listed company", role="R-P",
          text="The proposal was actionable because VNET's listed equity traded far below contemporaneous private and transaction marks: US$4.69/ADS at 12 Sep 2022 versus US$32.076/ADS in the Mar 2021 Tuspark repurchase and a US$8.00/ADS third-party (Hina/Industrial Bank) bid in Apr 2022, allowing a US$8.20/ADS offer (74.8% premium) at only ~US$1.2bn of equity.",
          es="E3", lik="6", conf="M", src="S01;S02;S06;S11;S13;S19", e1="S01;S06;S11",
          counterfactual="Had VNET ADSs traded near the ~US$32/ADS mark set in Mar 2021 rather than US$4.69, a founder whose own stake was financed with a US$50.25m margin loan could not credibly have proposed buying out the float; the proposal would disappear or require a several-times-larger equity cheque.",
          factual_basis="Undisturbed price and premium (S01/S02); 2021 repurchase price (S11); independent rival bid at US$8.00 five months earlier (S06); press reports VNET valued below peers GDS and Chindata (S13); company not distressed at entity level (RMB3.62bn cash, S19).",
          rival="SI-03 distress/forced sale (rejected: no seller compulsion, company liquidity adequate); BO-01 pretextual price support (proposal as collateral defence); fair repricing of China-ADR risk rather than undervaluation.",
          discriminating_test="Hoop: market price materially below contemporaneous independent third-party and transaction marks at announcement (US$4.69 vs US$8.00 third-party bid and US$32.08 2021 mark). Straws: independent rival bidder at similar level; press peer-multiple gap.",
          test_passed="PASS (hoop + several independent straws; E3 standard). Fair-repricing rival not excluded."),
    claim(id="C05", facet="VM", concept="VM-15", label="Public / private valuation arbitrage", role="R-C",
          text="Hypothesised value channel: take VNET private at a depressed US-ADR valuation and capture the gap to private-market or domestic (A-share/HK) valuation, including a possible later domestic relisting.",
          es="E4", lik="5", conf="L", src="S01;S06;S13", value_lever="Delist from Nasdaq at depressed ADR price; potential domestic relisting at higher multiple (lever reported only retrospectively by press)",
          factual_basis="Deep discount (C04); Securities Times reports the withdrawal shelved a return to A-share/HK listing and cites the domestic multiple gap.",
          rival="VM-11 multiple arbitrage (near-synonym); BO-01 control defence with no value-capture plan; strategic long-horizon rationale (not codable under R37 without specifics).",
          discriminating_test="Proposed: relisting plan, sponsor underwriting or domestic-listing covenants in financing documents or 13D Item 4. None disclosed in retrieved snippets.", test_passed="NOT_RUN"),
    claim(id="C06", facet="BM", concept="BM-23", label="Financial ownership-value thesis", role="R-C",
          text="Candidate buyer motive: founder-led ownership thesis in which returns come from the public/private valuation gap (VM-15) at a depressed entry price (SI-06), not from strategic combination.",
          es="E4", lik="4", conf="L", src="S01;S02;S13", value_lever="VM-15 (E4) only",
          factual_basis="MBO structure; premium framed as attractive to shareholders; no strategic combination possible (buyer is an individual/management group).",
          rival="BO-01 founder control/collateral defence; BM-25 control consolidation; BM-22 vague 'escape short-termism' narrative (S13, second-hand).",
          discriminating_test="Proposed: disclosed underwriting case, committed equity with return targets, or relisting plan. None found.", test_passed="NOT_RUN",
          terminal="N (non-terminal per R37)",
          terminal_check="R37 FLAG: non-terminal motive; supporting VM-15 only at E4 and no specific supported terminal purpose. Cannot stand alone; terminal buyer motive recorded as E5 (C21)."),
    claim(id="C07", facet="BM", concept="BM-25", label="Control consolidation / ownership step-up", role="R-C",
          text="Candidate: Chen would move from a founder stake with enhanced voting (and pledged collateral at risk) to 100% ownership, securing control of the company.",
          es="E4", lik="4", conf="L", src="S03;S09;S12", factual_basis="Existing founder stake (C02); pledged high-vote shares whose enforcement would 'significantly decrease' Chen's voting interest (S09).",
          rival="BM-23 financial thesis; BO-01 agency. Control step-up adds no value unless a substantive motive exists (R37).",
          discriminating_test="Proposed: whether control mattered independent of personal leverage (e.g., step-up terms, governance changes planned).", test_passed="NOT_RUN",
          terminal="N (non-terminal per R37)",
          terminal_check="R37 FLAG: non-terminal; no supported substantive motive co-coded above E4."),
    claim(id="C08", facet="BO", concept="BO-01", label="Empire building / agency", role="R-C",
          text="Behavioural overlay (indicator-based, R34): the proposal may have served founder control preservation under margin-loan pressure (price support for pledged collateral) rather than a financed buyout. Indicators: pledged high-vote collateral; 74.8% headline premium with no committed financing; no definitive agreement in ~22 months; lender enforcement Feb 2023; withdrawal only after a state investor's PIPE plus voting and consortium agreement with Chen.",
          es="E4", lik="4", conf="L", src="S02;S05;S09;S12;S13", outcome_source_ids="S05;S09;S12",
          factual_basis="Indicators only; no statement relied on (R34).",
          rival="Genuine valuation-driven MBO derailed by financing constraints (C04-C06, C15).",
          discriminating_test="Proposed: margin-call thresholds vs ADS price before/after 13 Sep 2022; evidence of equity/debt commitment efforts (NDA/diligence access, lender engagement) during 2022-23.", test_passed="NOT_RUN",
          date_basis="Indicators span pre-announcement (facility) and post-announcement (enforcement, withdrawal)", postclose="Post-announcement revealed behaviour (no close occurred)"),
    claim(id="C09", facet="PR", concept="PR-08", label="Capital-market liquidity regime", role="R-C",
          text="Market condition: 2021-22 de-rating and liquidity withdrawal for US-listed China issuers, compounded by HFCAA delisting risk, depressed VNET's ADR valuation relative to domestic peers and private marks.",
          es="E4", lik="5", conf="L", src="S07;S08;S13;S20",
          factual_basis="HFCAA identification (S08); press on US vs domestic multiple gap (S13).",
          rival="Company-specific de-rating (governance, founder pledge, leverage) rather than regime-wide.",
          discriminating_test="Proposed: VNET discount vs China-ADR index and vs domestic IDC peers over 2021-22.", test_passed="NOT_RUN"),
    claim(id="C10", facet="PC", concept="PC-11", label="Disclosure regime", role="R-C",
          text="US audit-inspection/disclosure regime under the HFCAA placed VNET on the conclusive Commission-Identified Issuer list (26 May 2022), creating a dated US trading-prohibition risk that lowered the value of the US listing and raised the relative attractiveness of going private.",
          es="E4", lik="3", conf="M", src="S07;S08;S20",
          policy_instrument="Holding Foreign Companies Accountable Act and SEC implementing rules (Commission-Identified Issuer process)",
          policy_jurisdiction="United States (SEC / PCAOB)",
          policy_status="In force; VNET conclusively identified 2022-05-26; CSRC/MOF/PCAOB Statement of Protocol signed 2022-08-26 (18 days before proposal); PCAOB vacated 2021 determinations 2022-12-15",
          policy_effective_date="Act enacted 2020-12-18; VNET identification 2022-05-26",
          policy_channel="Delisting/trading-prohibition risk -> lower US-listing valuation -> cheaper take-private and higher relative value of exiting the US listing",
          policy_layer="SI (SI-06) / VM (VM-15)",
          policy_sign="+ for going-private attractiveness at identification; attenuating after 2022-08-26 protocol and reversed after 2022-12-15",
          factual_basis="Regime facts are E1-grade (S08, S20); no party document links HFCAA to the proposal, so the causal link is E4.",
          rival="Protocol signed 26 Aug 2022 had already reduced delisting risk before the proposal, weakening the channel.",
          discriminating_test="Proposed: any Chen/committee statement citing listing risk; timing of VNET discount vs HFCAA milestones.", test_passed="NOT_RUN"),
    claim(id="C11", facet="SI", concept="SI-10", label="Contested, hostile or activist situation", role="R-C",
          text="Control was contested by an unsolicited third-party proposal (Hina Group + Industrial Bank Shanghai Branch, US$8.00/ADS, 11 Apr 2022) that remained under special-committee evaluation; Chen's proposal was priced US$0.20 above it.",
          es="E4", lik="4", conf="M", src="S06;S07;S15;S16", e1="S06",
          factual_basis="Rival proposal existence and price (S06); committee evaluating both (S07).",
          rival="Chen would have proposed regardless (valuation/founder-liquidity drivers).",
          discriminating_test="Proposed: Chen's contemporaneous 13D/A or letter reference to the Hina proposal; price anchoring pattern.", test_passed="NOT_RUN"),
    claim(id="C12", facet="CA", concept="CA-06", label="Competitor transaction or move", role="R-C",
          text="Dated trigger candidate: the 11 Apr 2022 rival Hina/Industrial Bank proposal may have set the timing of a founder counter-proposal (5 months later).",
          es="E4", lik="3", conf="L", src="S06;S01",
          rival="Timing set by founder liquidity (undated) or HFCAA/protocol milestones (26 May / 26 Aug 2022).",
          discriminating_test="Proposed: sequence of 13D/A amendments and committee minutes Apr-Sep 2022.", test_passed="NOT_RUN"),
    claim(id="C13", facet="ST", concept="ST-08", label="Take-private", role="N/A-form",
          text="Proposed form: going-private acquisition of a Nasdaq-listed company (delisting), management buyout; preliminary and non-binding only; no merger agreement ever signed.",
          es="E1", lik="7", conf="H", src="S01;S02;S03;S05", e1="S01;S03"),
    claim(id="C14", facet="ST", concept="ST-01", label="Whole-company acquisition", role="N/A-form",
          text="Proposed acquisition of all outstanding ordinary shares (all shares not already owned by the Founder and affiliates) for cash.",
          es="E1", lik="7", conf="H", src="S01;S03", e1="S01;S03"),
    claim(id="C15", facet="FI", concept="FI-01", label="Acquisition debt", role="R-E",
          text="The MBO Consortium proposed to fund with a combination of equity and debt financing; commitments were to be in place only at signing of definitive agreements; no lender or equity provider was ever named or committed.",
          es="E1", lik="6", conf="M", src="S02;S03;S05", e1="S02;S03",
          rival="Reported state-backed fund support (S15) never confirmed."),
    claim(id="C16", facet="FI", concept="FI-08", label="Rating or covenant constraint", role="R-C",
          text="Funding constraint: a take-private would trigger immediate repayment of VNET's US$600m convertible notes (Fitch view), adding a large refinancing need on top of acquisition financing for an already levered issuer.",
          es="E4", lik="5", conf="L", src="S07;S14",
          factual_basis="US$600m 2026 notes indenture (S07); Fitch view reported by Yicai (S14).",
          rival="Notes could be refinanced or waived; financing failure driven by founder default instead.",
          discriminating_test="Proposed: fundamental-change/delisting put terms in the 2026 indenture and 2022-23 refinancing actions.", test_passed="NOT_RUN"),
    claim(id="C17", facet="RO", concept="RO-16", label="Multi-market operating platform", role="N/A-object",
          text="Object: control of the whole VNET operating platform (carrier- and cloud-neutral IDC, managed hosting and cloud services across multiple Chinese markets).",
          es="E1", lik="7", conf="H", src="S00;S01", e1="S01"),
    claim(id="C18", facet="RO", concept="RO-01", label="Operating capacity", role="N/A-object",
          text="Object: VNET's live data-centre capacity (installed IT capacity across its China portfolio) passes with the company.",
          es="E1", lik="7", conf="M", src="S00;S19", e1="S19"),
    claim(id="C19", facet="PG", concept="PG-05", label="Standalone / one-off acquisition", role="N/A-programme",
          text="No evidence that the MBO was a step in any repeat acquisition or development programme at announcement.",
          es="E4", lik="6", conf="M", src="S01;S02;S03",
          rival="None identified."),
    claim(id="C20", facet="II", concept="II-01", label="Preserve standalone platform", role="N/A-intent",
          text="Ex-ante intent (R38): as a management-team-led buyout, the plan implied continuing VNET as a standalone platform under existing management; no integration plan was disclosed.",
          es="E4", lik="6", conf="L", src="S02;S03", intent_source_date="2022-09-14", intent_source_ids="S02;S03",
          rival="II-07 financial/governance-only ownership (if outside equity took control).",
          discriminating_test="Proposed: operating plan in definitive documents (never produced).", test_passed="NOT_RUN",
          date_basis="Intent sources dated 2022-09-13/14, on or before any close (no close occurred); R38 compliant"),
    claim(id="C21", facet="BM", concept="UNCODED-TERMINAL", label="Terminal buyer motive", role="n/a",
          text="No specific terminal buyer motive is stated in any party primary document retrieved; the letter only asserts the offer is 'highly attractive' to shareholders. Terminal motive is unknown.",
          es="E5", lik="", conf="M", src="S01;S02;S03",
          terminal="Unknown", terminal_check="R37: only non-terminal motives (BM-23, BM-25) coded, both E4; deal flagged."),
    claim(id="C22", facet="SM", concept="UNCODED-SM", label="Seller motive", role="n/a",
          text="Offerees were VNET's unaffiliated public shareholders; no seller agreed to sell and no seller motive is evidenced. Best Ventures Limited (SOURCE seller) motive unknown.",
          es="E5", lik="", conf="M", src="S01;S03;S17;S18"),
    claim(id="C23", facet="AT", concept="AT-08", label="Leverage breaches rating or covenant tolerance", role="R-C",
          text="Anti-thesis: financing an MBO of a levered issuer, with a change-of-control repayment of US$600m notes and a buyer whose own stake was margin-financed, breaches feasible leverage tolerance. Consistent with no financing ever being committed and eventual withdrawal.",
          es="E4", lik="5", conf="L", src="S05;S07;S09;S14", outcome_source_ids="S05;S09",
          rival="Withdrawal explained by improved market conditions / SDHG solution rather than leverage.",
          discriminating_test="Proposed: lender term sheets or committee statements on financing certainty.", test_passed="NOT_RUN",
          postclose="Post-announcement revealed behaviour (no close occurred)"),
    claim(id="C24", facet="AT", concept="AT-01", label="Control not necessary", role="R-C",
          text="Anti-thesis: a minority primary investment by Shandong Hi-Speed (US$299m, ~42% of shares, completed 28 Dec 2023) plus a voting and consortium agreement with Chen addressed the founder-side and funding objectives without a take-private; Chen withdrew seven months later citing the listing as better for long-term interests.",
          es="E4", lik="5", conf="M", src="S05;S12;S13;S16", outcome_source_ids="S05;S12",
          rival="Withdrawal driven by market recovery or HFCAA resolution (Dec 2022), not by the PIPE.",
          discriminating_test="Proposed: content of the voting and consortium agreement (whether it references the going-private proposal) and timing vs withdrawal.", test_passed="NOT_RUN",
          postclose="Post-announcement revealed behaviour (no close occurred)"),
    claim(id="C25", facet="OU", concept="UNCODED-OU", label="Revealed behaviour: withdrawal", role="n/a",
          text="Revealed behaviour: no definitive agreement or financing in ~22 months; founder margin loan enforced Feb 2023; SDHG PIPE closed Dec 2023; proposal withdrawn 10 Jul 2024 (announced 11 Jul 2024); special committee dissolved. No OU concept exists for abandonment of an unsigned proposal (residual RES-08).",
          es="E1", lik="7", conf="H", src="S05;S09;S12", e1="S05", outcome_source_ids="S05;S09;S12",
          date_basis="Post-announcement", postclose="Post-announcement revealed behaviour (no close occurred)"),
]

# ---------------------------------------------------------------------------
# EDGES (permitted grammar only)
# ---------------------------------------------------------------------------
EDGES = [
    ("E01", "C10", "C09", "alters", "E4", "S08;S20;S13", "HFCAA conclusive identification contributes to the China-ADR de-rating regime."),
    ("E02", "C10", "C04", "constrains", "E4", "S08;S20", "Policy state constrains the US-listing situation (delisting risk) that makes VNET cheap to take private. Grammar note: PC->SI permitted as 'constrains'; semantic is 'depresses'."),
    ("E03", "C04", "C05", "affects", "E4", "S01;S06;S11", "Deep discount to private/transaction marks is what creates the public/private arbitrage."),
    ("E04", "C04", "C13", "affects", "E3", "S01;S02", "Depressed price makes a founder-led take-private feasible at ~US$1.2bn equity."),
    ("E05", "C01", "C06", "selects", "E4", "S01;S03", "Founder/management archetype selects a financial ownership thesis (no strategic combination available)."),
    ("E06", "C01", "C07", "selects", "E4", "S03", "Founder archetype selects control consolidation."),
    ("E07", "C02", "C07", "activates", "E4", "S03", "Existing founder stake activates a step-up to full control."),
    ("E08", "C03", "C07", "activates", "E4", "S09;S10", "Margin-loan pledge over high-vote shares makes securing control more urgent."),
    ("E09", "C06", "C17", "requires", "E4", "S01", "Financial thesis requires control of the whole operating platform."),
    ("E10", "C17", "C05", "realises", "E4", "S13", "Owning the platform privately realises the valuation gap (and any relisting)."),
    ("E11", "C06", "C20", "implemented through", "E4", "S02;S03", "Management-led thesis implies standalone continuation."),
    ("E12", "C08", "C05", "distorts", "E4", "S02;S09", "Possible control-defence purpose distorts the headline price/valuation (74.8% premium without committed funding)."),
    ("E13", "C11", "C13", "affects", "E4", "S06", "Rival US$8.00 bid anchors the founder's US$8.20 price."),
    ("E14", "C12", "DEAL", "triggers", "E4", "S06;S01", "Rival bid as candidate timing trigger."),
    ("E15", "C15", "C13", "enables", "E1", "S02;S03", "Proposed equity + debt package is the stated funding route."),
    ("E16", "C16", "C13", "constrains", "E4", "S07;S14", "Change-of-control repayment of US$600m notes constrains financing."),
    ("E17", "C23", "C06", "refutes", "E4", "S05;S09;S14", "Leverage infeasibility weakens the financial thesis; consistent with withdrawal."),
    ("E18", "C24", "C07", "refutes", "E4", "S05;S12", "SDHG PIPE + voting agreement delivered control/funding objectives without a take-private."),
    ("E19", "C25", "C08", "corroborates", "E4", "S05;S09;S12", "Revealed sequence (no financing, enforcement, rescue, withdrawal) is consistent with BO-01 but does not discriminate it from C23."),
]

# ---------------------------------------------------------------------------
# RESIDUALS
# ---------------------------------------------------------------------------
RESIDUALS = [
    ("RES-01", "bad_data", "SOURCE Seller", "SOURCE Seller 'Best Ventures Limited' is not evidenced as a party. Best Ventures Limited is a Xiaomi-controlled BVI vehicle (formerly Xiaomi Ventures Limited) that subscribed VNET shares in Jan 2015. No source shows it agreed to sell or was named in the proposal. VERIFIED Seller: none contracted; offerees were VNET's unaffiliated public shareholders.",
     "Keep SOURCE immutable; VERIFIED Seller = 'None contracted (offer to unaffiliated public shareholders)'.", "S00;S01;S03;S17;S18", "High: seller-side coding (SM) and any Xiaomi linkage would be wrong if SOURCE is used.", "High"),
    ("RES-02", "bad_data", "SOURCE Buyer", "SOURCE Buyer/Investor is null although the proposer is explicit: Josh Sheng Chen with a proposed management-team 'MBO Consortium'.",
     "VERIFIED Buyer = Josh Sheng Chen (founder, executive chairman) and proposed MBO Consortium.", "S00;S01;S03", "High: archetype selection (AR-09).", "High"),
    ("RES-03", "bad_data", "SOURCE Value", "SOURCE Value US$2,897.45m equals MI 'Implied Enterprise Value', not offer consideration. Offer equity ~US$1.2bn (MI summary; Yicai ~RMB8.5bn). The EV bridge (~US$1.7bn implied net debt/other claims) is unverified from primary balance-sheet data. MI 'Percent acquired = 100' vs 13D/A 'shares not already owned by the Founder'.",
     "Record equity ~US$1.2bn (headline, 100% basis) and EV US$2.90bn (MI-derived, unverified) in separate fields; acquired stake = shares not owned by Founder group.", "S00;S01;S03;S14;S19", "Medium: value bucket and multiple comparisons.", "Medium"),
    ("RES-04", "bad_data", "SOURCE sponsor flags", "MI 'Sponsor Backed = Yes', 'LBO' feature and ultimate parent 'Asia Investment Fund Management Limited' are not supported by any party document. The only sponsor-like support is an unnamed 'government-backed fund' reported second-hand.",
     "Treat sponsor involvement as E5; do not code AR-04/AR-11.", "S00;S02;S03;S15", "Medium: archetype stratum (sampling proxy says Sponsor-backed).", "Medium"),
    ("RES-05", "insufficient_evidence", "All", "Full source bodies were not retrievable: session egress policy blocked sec.gov, ir.vnet.com, ir.21vianet.com, prnewswire.com, businesswire and all news hosts. All evidence is search-index snippet or summariser paraphrase. E1 grades are provisional pending body verification of the 6-K Ex. 99.1 letter and 13D/A.",
     "Re-run source verification with egress to sec.gov and ir.vnet.com; confirm quoted phrases and holdings.", "S01-S20", "High: evidence-state and confidence grades depend on it.", "High"),
    ("RES-06", "missing_theory", "BO-01; BM-25", "Founder personal-leverage / collateral-defence proposal (going-private bid by a controlling founder whose pledged stake is at risk) has no clean concept. BO-01 (empire building) is a poor fit.",
     "Candidate for a BO or BC child ('founder collateral / control defence'); adjudicate under R29/R30.", "S09;S10;S13", "Medium: recurs in China-ADR founder MBOs.", "Medium"),
    ("RES-07", "wrong_layer", "PC-11", "No PC concept captures listing-venue / delisting eligibility regimes (HFCAA). PC-11 'Disclosure regime' used provisionally; PC-04 (ownership eligibility) does not fit.",
     "Consider PC child 'listing eligibility / delisting regime'.", "S08;S20", "Medium.", "Low"),
    ("RES-08", "missing_theory", "OU", "OU facet has no concept for abandonment/withdrawal of an unsigned proposal or for 'alternative solution adopted' (minority PIPE instead of take-private). Revealed behaviour recorded as UNCODED-OU.",
     "Consider OU concept 'withdrawal / alternative transaction adopted'.", "S05;S12", "Medium for terminated-deal strata.", "Medium"),
    ("RES-09", "parent_child_issue", "Causal Grammar", "Grammar gaps: PR->SI (market regime creates situation) and BC->BO (buyer condition activates overlay) are needed for this chain but not permitted. PR-08->SI-06 and BC-07->BO-01 therefore left unlinked; PC->SI 'constrains' used semantically as 'depresses'.",
     "Review grammar at next scheduled release (do not change during batch).", "n/a", "Low-Medium.", "Low"),
    ("RES-10", "bad_data", "Identity", "Separate event: the 11 Apr 2022 Hina Group + Industrial Bank Shanghai Branch US$8.00/ADS proposal carries the same '$1.2 billion' headline in MI summaries. Not substituted. Duplicate/merge risk in the MI population.",
     "Keep R017 = Chen proposal only; flag the Hina record for de-duplication checks.", "S06;S07;S16", "Medium: sampling integrity.", "Medium"),
    ("RES-11", "bad_data", "Dates", "Minor date noise: one Chinese secondary (Sina) dates the announcement 15 Sep 2022 against 13 Sep 2022 in the issuer release; termination letter dated 10 Jul 2024 but announced 11 Jul 2024 (MI uses letter date).",
     "VERIFIED Announced 2022-09-13; termination 2024-07-10 (letter) / 2024-07-11 (announcement).", "S01;S05;S13", "Low.", "Low"),
    ("RES-12", "insufficient_evidence", "BM-23; BM-25 (R37)", "Only non-terminal buyer motives coded (both E4); terminal motive E5. Deal flagged under R37.",
     "Human review of whether an unsigned founder proposal can support any terminal motive with available evidence.", "S01;S02;S03", "Medium: motive frequencies.", "Medium"),
]

# ---------------------------------------------------------------------------
# WRITERS
# ---------------------------------------------------------------------------
def src_by_id(i):
    return next(s for s in SOURCES if s["id"] == i)

def claims_for_source(sid):
    out = []
    for c in CLAIMS:
        ids = c["src"].split(";") + c.get("outcome_source_ids", "").split(";")
        if sid in ids:
            out.append(c["id"])
    return ";".join(sorted(set(out)))

def write_csv(path, header, rows):
    with open(path, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f, lineterminator="\r\n")
        w.writerow(header)
        w.writerows(rows)

def read_header(name):
    with open(os.path.join(HERE, "_packet_templates", name), encoding="utf-8-sig") as f:
        return next(csv.reader(f))

def main():
    ex = os.path.join(HERE, "exact_schema")
    nz = os.path.join(HERE, "normalized")
    rs = os.path.join(HERE, "raw_snippets")

    # raw snippet captures (what was actually seen; not source bodies)
    for s in SOURCES:
        p = os.path.join(rs, f"{s['id']}.txt")
        with open(p, "w", encoding="utf-8") as f:
            f.write(f"source_id: {s['id']}\nurl: {s['url']}\ntitle: {s['title']}\npublisher: {s['pub']}\n"
                    f"publication_date: {s['date']}\nretrieved_at: {ACCESS}\naccess: {s['access']}\n"
                    f"capture_method: WebSearch result summary (page fetch blocked by egress policy)\n\n"
                    f"KEY FACTS AS CAPTURED:\n{s['fact']}\n")
    sha = {s["id"]: hashlib.sha256(open(os.path.join(rs, f"{s['id']}.txt"), "rb").read()).hexdigest() for s in SOURCES}

    # ---------------- normalized ----------------
    ncl = ["claim_id","sample_id","mi_transaction_id","concept_id","facet","claim_text","evidence_state","likelihood_band",
           "source_confidence","driver_role","counterfactual","source_ids","factual_basis","rival","discriminating_test",
           "test_passed","closing_date","intent_source_date","intent_source_ids","e1_source_ids","outcome_source_ids",
           "outcome_concept_id","policy_instrument","policy_jurisdiction","policy_status","policy_effective_date",
           "policy_channel","policy_layer","policy_sign","value_lever","decision_authority","human_reviewer_decision","gold_eligible"]
    rows = []
    for c in CLAIMS:
        rows.append([f"{SAMPLE}-{c['id']}", SAMPLE, MI, c["concept"], c["facet"], c["text"], c["es"], c["lik"], c["conf"],
                     c["role"], c["counterfactual"], c["src"], c["factual_basis"], c["rival"], c["discriminating_test"],
                     c["test_passed"], c["closing_date"], c["intent_source_date"], c["intent_source_ids"], c.get("e1", ""),
                     c["outcome_source_ids"], c["outcome_concept_id"], c["policy_instrument"], c["policy_jurisdiction"],
                     c["policy_status"], c["policy_effective_date"], c["policy_channel"], c["policy_layer"], c["policy_sign"],
                     c["value_lever"], AUTH, "", GOLD])
    write_csv(os.path.join(nz, "normalized_claims.csv"), ncl, rows)

    nsrc = ["source_id","sample_id","title","publisher","source_type","publication_date","url","retrieved_at","access",
            "locator","limitations","source_family","raw_path","raw_sha256","claim_ids"]
    write_csv(os.path.join(nz, "normalized_sources.csv"), nsrc,
              [[s["id"], SAMPLE, s["title"], s["pub"], s["type"], s["date"], s["url"], ACCESS, s["access"], s["loc"],
                s["lim"], s["family"], f"raw_snippets/{s['id']}.txt", sha[s["id"]], claims_for_source(s["id"])] for s in SOURCES])

    write_csv(os.path.join(nz, "normalized_edges.csv"),
              ["edge_id","sample_id","from_claim_id","to_claim_id","edge_type","source_ids","rationale"],
              [[e[0], SAMPLE, f"{SAMPLE}-{e[1]}", (f"{SAMPLE}-{e[2]}" if e[2] != "DEAL" else "DEAL"), e[3], e[5], f"[{e[4]}] {e[6]}"] for e in EDGES])

    write_csv(os.path.join(nz, "normalized_residuals.csv"),
              ["residual_id","sample_id","residual_type","description","source_ids","status","decision_authority","human_reviewer_decision"],
              [[r[0], SAMPLE, r[1], r[3], r[5], "Open", AUTH, ""] for r in RESIDUALS])

    # ---------------- exact schema ----------------
    cmap = {c["id"]: c for c in CLAIMS}
    write_csv(os.path.join(ex, "Claim_Evidence.csv"), read_header("Claim_Evidence.csv"),
              [[f"{SAMPLE}-{c['id']}", SAMPLE, MI, c["facet"], c["concept"], c["label"], c["role"], c["text"], c["es"], c["lik"],
                c["conf"], c["counterfactual"], c["rival"], (c["discriminating_test"] + (f" | Result: {c['test_passed']}" if c["test_passed"] else "")),
                c["src"], c["date_basis"], c["postclose"], CODER, BATCH, CBV, ADJ, c["terminal"], c["terminal_check"]] for c in CLAIMS])

    write_csv(os.path.join(ex, "Causal_Edges.csv"), read_header("Causal_Edges.csv"),
              [[e[0], SAMPLE, MI, cmap[e[1]]["facet"], cmap[e[1]]["concept"], cmap[e[1]]["label"], e[3],
                (cmap[e[2]]["facet"] if e[2] != "DEAL" else "Deal"), (cmap[e[2]]["concept"] if e[2] != "DEAL" else "DEAL"),
                (cmap[e[2]]["label"] if e[2] != "DEAL" else "Transaction (proposal timing)"), e[4], e[5], e[6], CBV] for e in EDGES])

    write_csv(os.path.join(ex, "Residuals.csv"), read_header("Residuals.csv"),
              [[r[0], SAMPLE, MI, r[2], r[1], r[3], r[4], r[5], r[6], r[7], "Open", "Model recommendation only (R39); no human decision recorded", CBV] for r in RESIDUALS])

    write_csv(os.path.join(ex, "Source_Log.csv"), read_header("Source_Log.csv"),
              [[s["id"], SAMPLE, MI, s["url"], s["title"], s["pub"], s["type"], s["date"], ACCESS, claims_for_source(s["id"]),
                s["fact"], s["conf"], s["lim"], "No (live URL; body not archived; snippet capture in raw_snippets/)"] for s in SOURCES])

    co = read_header("Coding_Output.csv")
    row = {
        "Research Order": "25", "Sample ID": SAMPLE, "MI Transaction ID": MI, "Target / Issuer": "VNET Group, Inc.",
        "SOURCE Buyer / Investor": "", "SOURCE Seller": "Best Ventures Limited", "SOURCE Announced Date": "2022-09-13",
        "SOURCE Transaction Type": "M&A - Whole", "SOURCE Status": "Terminated/Withdrawn",
        "VERIFIED Buyer / Investor": "Josh Sheng Chen (founder, executive chairman) with a proposed management-team 'MBO Consortium'; no sponsor or financier named",
        "VERIFIED Seller": "None contracted: offer to all VNET ordinary shares/ADSs not owned by the Founder group (unaffiliated public shareholders). Best Ventures Limited not evidenced as a party",
        "VERIFIED Announced Date": "2022-09-13",
        "VERIFIED Transaction Type": "Proposed take-private / management buyout of whole company (preliminary non-binding proposal; never signed)",
        "VERIFIED Status": "Withdrawn (letter dated 2024-07-10; announced 2024-07-11); special committee dissolved",
        "Identity Resolution Status": "Resolved with conflicts",
        "Identity Conflict Note": "Event resolved to the 13 Sep 2022 Chen proposal (US$8.20/ADS). Conflicts: SOURCE Buyer null (RES-02); SOURCE Seller Best Ventures Limited = Xiaomi-controlled legacy holder, not a party (RES-01); SOURCE Value 2,897.45 = MI implied EV, offer equity ~US$1.2bn (RES-03); sponsor/LBO flags unsupported (RES-04). Distinct Apr 2022 Hina/Industrial Bank proposal not substituted (RES-10).",
        "Identity Source IDs": "S00;S01;S02;S03;S05;S17;S18",
        "Final Relevance": "Core DC (target is a China carrier-/cloud-neutral IDC operator)",
        "Relevance Basis / Evidence": "Target business description (S00); issuer releases (S01, S19).",
        "Buyer Archetype": "AR-09 Founder / management-led (E1)",
        "Capital Pool / Consortium": "Founder rollover stake (margin-financed) plus unnamed equity and debt; proposed MBO Consortium of Chen and management; reported but unnamed state-backed fund (E5/L)",
        "Stated Rationale (summary)": "Letter states only that the offer is highly attractive to shareholders (74.8% premium); no strategic or operating rationale stated. Withdrawal: listing better aligned with long-term interests given market conditions.",
        "Stated Rationale Exact Extract(s)": "\"I believe the Proposal is a highly attractive offer to the Company's shareholders\" (S02, snippet); \"The MBO Consortium will fund the Transaction with a combination of equity and debt financing\" (S02, snippet); \"I withdrew my privatization proposal as I believe that maintaining VNET's listing status is better aligned with the Company's long-term interests given current market conditions.\" (S05)",
        "Market Pressure(s)": "PR-08 Capital-market liquidity regime (E4, lik 5, L)",
        "Buyer Condition(s)": "BC-09 Existing founder stake (E1, R-E); BC-07 Founder margin-loan constraint (E1 fact, R-C, lik 5)",
        "Buyer Motive(s) + Role": "Terminal motive E5 unknown (C21). Non-terminal candidates: BM-23 Financial ownership-value thesis (E4, R-C, lik 4, L); BM-25 Control consolidation (E4, R-C, lik 4, L). R37 flag.",
        "Primary Driver Counterfactual(s)": "SI-06 (R-P): Had VNET ADSs traded near the ~US$32/ADS 2021 mark rather than US$4.69, a margin-financed founder could not credibly have proposed buying out the float; the proposal disappears or needs a several-times-larger equity cheque.",
        "Programme Strategy": "None (N/A)", "Programme Role": "PG-05 Standalone (E4)",
        "Seller Motive(s)": "E5 unknown (no contracted seller)",
        "Value Mechanism(s)": "VM-15 Public/private valuation arbitrage (E4, R-C, lik 5, L; lever: delist at depressed ADR price, possible domestic relisting)",
        "Resource Object(s)": "RO-16 Multi-market operating platform; RO-01 Operating capacity (E1)",
        "Situation(s)": "SI-06 Undervalued listed company (E3 PASS, R-P, lik 6, M); SI-10 Contested situation - rival Hina/Industrial Bank bid (E4, R-C, lik 4, M)",
        "Catalyst(s)": "CA-06 Rival proposal 2022-04-11 as timing trigger (E4, lik 3, L)",
        "Integration Intent": "II-01 Preserve standalone platform (E4, ex-ante sources 2022-09-13/14; R38 compliant)",
        "Structure": "ST-08 Take-private; ST-01 Whole-company (E1; proposal only)",
        "Financing": "FI-01 Acquisition debt + equity proposed, never committed (E1, R-E); FI-08 Change-of-control repayment of US$600m notes (E4, R-C, L)",
        "Policy Link(s)": "PC-11 HFCAA: US; VNET conclusively identified 2022-05-26; Act enacted 2020-12-18; protocol 2022-08-26; PCAOB vacated 2022-12-15; channel delisting risk -> lower US valuation; layer SI/VM; sign + at identification, attenuating (E4, lik 3)",
        "Behavioural Overlay": "BO-01 Founder control/collateral defence (E4, lik 4, L; indicators only, R34)",
        "Evidence State(s)": "E1: C01-C03,C13-C15,C17,C18,C25; E3: C04; E4: C05-C12,C16,C19,C20,C23,C24; E5: C21,C22",
        "Likelihood Band(s)": "See Claim_Evidence (1-7 per claim)",
        "Source Confidence(s)": "H: C01,C13,C14,C17,C25; M: C02-C04,C10,C11,C15,C18,C19,C24; L: C05-C09,C12,C16,C20,C23. All provisional (snippet-only, RES-05)",
        "Alternatives / Control-Necessity Evidence": "Alternative actually adopted: minority primary PIPE by Shandong Hi-Speed (US$299m, ~42%, closed 2023-12-28) plus voting and consortium agreement with Chen; then withdrawal (AT-01, E4).",
        "Anti-thesis / Kill Conditions": "AT-08 leverage/covenant infeasibility (E4); AT-01 control not necessary (E4). Both consistent with withdrawal.",
        "Causal Chain Summary": "A: PC-11 -> PR-08; PC-11 -> SI-06 -> VM-15 / ST-08; AR-09 -> BM-23 -> RO-16 -> VM-15 (E4). B: BC-09, BC-07 -> BM-25; BO-01 distorts price. C: SI-10/CA-06 -> timing and price anchor (US$8.20 vs US$8.00). Failure: FI-08 + founder default -> no financing -> AT-08; SDHG PIPE -> AT-01 -> withdrawal.",
        "Outcome / Revealed Behaviour": "No definitive agreement or committed financing in ~22 months; founder margin loan enforced 2023-02-07; SDHG PIPE closed 2023-12-28; proposal withdrawn 2024-07-10 (announced 2024-07-11).",
        "Contradictions / Rival Hypotheses": "Valuation-arbitrage MBO (BM-23/VM-15) vs founder collateral/control defence (BO-01) vs fair repricing of China-ADR risk; not discriminated with available evidence.",
        "Residual Flag": "Yes", "Residual Type": "bad_data; insufficient_evidence; missing_theory; wrong_layer; parent_child_issue",
        "Research Sources / Citations": ";".join(s["id"] for s in SOURCES),
        "Adjudication Status": ADJ, "Codebook Version": CBV, "Coder ID": CODER, "Batch ID": BATCH,
        "Non-terminal Motive Check": "FLAG (R37): only BM-23 and BM-25 coded, both E4; terminal motive E5.",
    }
    missing = [h for h in co if h not in row]
    assert not missing, missing
    write_csv(os.path.join(ex, "Coding_Output.csv"), co, [[row[h] for h in co]])

    chk = [
        ["Manifest rows readable", "1 exact row (single-candidate packet; template text says 10)", "PASS", "raw_deals.jsonl and batch_manifest.jsonl each 1 row; packet hashes verified against MANIFEST.json"],
        ["Coding Output rows", "1 (single-candidate packet)", "PASS", "1 row, template header preserved exactly"],
        ["Every Sample ID preserved", "1/1 exact", "PASS", "R017"],
        ["Every MI ID preserved", "1/1 exact", "PASS", "SPTRD1982232"],
        ["Identity conflicts logged", "100% of conflicts", "PASS", "RES-01, RES-02, RES-03, RES-04, RES-10, RES-11"],
        ["Claim Evidence coverage", "Every non-N/A coded concept has a claim row", "PASS", f"{len(CLAIMS)} claim rows incl. E5 rows for terminal motive and seller motive"],
        ["Source Log coverage", "Every Source ID used exists in Source Log", "PASS", "Checked programmatically"],
        ["Weak source used as evidence", "0", "PASS with caveat", "No aggregator/incentivised source is sole support for any E1-E3 claim; S10/S15 used only as corroboration or for E4/E5. All sources snippet-only (RES-05)"],
        ["Causal edges", "Evidence-backed for every materially coded deal", "PASS", f"{len(EDGES)} permitted-grammar edges; gaps in RES-09"],
        ["Residuals", "All identity/evidence/ontology problems logged", "PASS", f"{len(RESIDUALS)} residuals"],
        ["QC reproducible", "Yes, from output rows", "PASS", "build_outputs.py regenerates all CSVs"],
        ["Output format", ".xlsx or exact-schema CSV; no PDF substitute", "PASS", "Exact-schema CSV (UTF-8 BOM, CRLF, template headers)"],
        ["Source-body verification", "Genuine bodies for E1 claims", "INCOMPLETE", "Egress policy blocked all page fetches; evidence is search-index level (RES-05)"],
    ]
    write_csv(os.path.join(ex, "Completion_Checklist.csv"), read_header("Completion_Checklist.csv"), chk)

    # integrity: every cited source exists
    ids = {s["id"] for s in SOURCES}
    for c in CLAIMS:
        for f in ("src", "outcome_source_ids", "intent_source_ids"):
            for x in filter(None, c.get(f, "").split(";")):
                assert x in ids, (c["id"], x)
    for e in EDGES:
        for x in e[5].split(";"):
            assert x in ids, (e[0], x)
    print("ok", len(CLAIMS), "claims", len(EDGES), "edges", len(RESIDUALS), "residuals", len(SOURCES), "sources")

if __name__ == "__main__":
    main()
