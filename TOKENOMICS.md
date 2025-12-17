⚠️ IMPORTANT LEGAL NOTICE

This document is for informational purposes only and does not constitute:
- An offer to sell or solicitation to purchase TUS tokens
- Investment, financial, legal, or tax advice
- A guarantee of token functionality or value

TUS tokens have not been registered with the U.S. Securities and Exchange 
Commission or any other regulatory authority. This offering is not available 
to U.S. persons or residents of restricted jurisdictions.

Purchasers should consult their own legal, financial, and tax advisors before 
participating in any token sale. There is a risk of total loss of capital.

# TellUrStori (TUS) Tokenomics

**Validator-Fee, Utility-First Model**

## 1. Purpose of the TUS Token

TUS is a **protocol utility and coordination token** used exclusively within the TellUrStori ecosystem.

TUS enables:

- Compensation for validators and contributors
- Participation in governance
- Sybil resistance and reputation signaling

TUS is **not designed as a store of value or investment asset**.

## 2. Supply Model: Elastic Utility Supply

### Core Principle

> TUS supply adapts to real protocol usage.

TUS is designed as a **regenerative resource token**, not a deflationary asset.

Supply Characteristics

- **No fixed maximum supply**
- Supply expands only in response to **verifiable protocol activity**
- Issuance is **non-discretionary and algorithmic**
- Issuance is **not price-reactive**

This ensures the token remains usable at small scale *and* massive scale. Issuance parameters are defined in open-source protocol rules and may only be modified through governance processes.

### Supply Projections & Quantitative Bounds

While TUS has no fixed maximum supply, issuance is constrained by **algorithmic bounds** to prevent excessive inflation:

**Issuance Formula:**
```
New TUS = min(
  Protocol_Activity_Score × Issuance_Coefficient,
  Current_Supply × Max_Annual_Inflation_Rate
)

Where Protocol_Activity_Score = weighted sum of:
- 50% Daily Active Users
- 30% Transaction Volume
- 20% Validator Participation
```

**Maximum Annual Inflation Rates:**
- **Years 0-1:** 15% (bootstrap phase with validator subsidies)
- **Years 2-3:** 10% (growth phase as network scales)
- **Years 4-5:** 7% (maturity phase with established usage)
- **Year 6+:** 5% declining to 3% (steady-state equilibrium)

**10-Year Supply Projection:**

| Year | Estimated Supply | Inflation Rate | Assumptions |
|------|------------------|----------------|-------------|
| 0    | 10,000,000 TUS   | N/A (Genesis)  | Initial allocation |
| 1    | 11,500,000 TUS   | 15%            | 1,000 DAU, bootstrap phase |
| 2    | 13,225,000 TUS   | 13%            | 3,000 DAU |
| 3    | 15,000,000 TUS   | 10%            | 10,000 DAU |
| 5    | 22,000,000 TUS   | 7%             | 50,000 DAU |
| 10   | 35,000,000 TUS   | 3-5%           | 200,000 DAU |

**Long-Term Equilibrium:**
- Target steady-state inflation: **3-5% annually**
- Governance can adjust issuance within **2-8% bounds only**
- Issuance asymptotically approaches equilibrium as network matures
- All parameters adjustable only through governance votes with 60% quorum

This controlled elastic supply model provides **psychological comfort** to stakeholders while maintaining the flexibility to scale from small community to massive-scale adoption without artificial scarcity constraints.

## 3. Initial Genesis Allocation

### Initial Genesis Supply: **10,000,000 TUS**

The genesis allocation represents the initial supply minted at protocol launch.

| Allocation | Percentage | TUS Amount | Purpose |
|------------|------------|------------|---------|
| **Seed Sale** | **5%** | **500,000** | **Early investors, strategic partners** |
| **Strategic Round** | **10%** | **1,000,000** | **Key partners, advisors, market makers** |
| **Public Sale** | **10%** | **1,000,000** | **Community distribution** |
| Community Usage Pool | 30% | 3,000,000 | Ongoing rewards for creators, validators, moderators |
| Network Bootstrap Fund | 10% | 1,000,000 | Validator subsidies for first 12 months (see Section 8) |
| Ecosystem & Grants Treasury | 15% | 1,500,000 | Integrations, research, tooling |
| Team Allocation | 15% | 1,500,000 | Long-term contributor alignment |
| Foundation Reserve | 5% | 500,000 | Operations and liquidity |
| **Total Genesis Supply** | **100%** | **10,000,000** | |

**Total for Token Sales: 25% (2,500,000 TUS)**

### Rationale for 10M Genesis Supply

The 10,000,000 TUS genesis supply was determined through economic modeling based on:

**Target Exchange Rate Analysis:**
- Optimal range: **$0.10 - $1.00 USD per TUS**
- This range provides the best balance of usability and value perception

**License Pricing Viability:**
| License Type | TUS Price | @ $0.10/TUS | @ $1.00/TUS |
|--------------|-----------|-------------|-------------|
| Streaming | 0.001 TUS | $0.0001 | $0.001 |
| Limited Play (100 plays) | 1 TUS | $0.10 | $1.00 |
| Time-Limited (30 days) | 5 TUS | $0.50 | $5.00 |
| Full Ownership | 10-100 TUS | $1-$10 | $10-$100 |
| Commercial License | 100-10,000 TUS | $10-$1,000 | $100-$10,000 |

**Year 1 Economic Requirements:**
- Expected tracks minted: 10,000 × 0.05 TUS = **500 TUS**
- License purchases: 100,000 × avg 50 TUS = **5,000,000 TUS**
- Streaming revenue: 50M streams × 0.001 TUS = **50,000 TUS**
- Transaction fees & operations: **~10,000 TUS**
- **Total Year 1 circulation needs: ~5,060,000 TUS**

**Supply Design Principles:**
1. **2x Buffer**: 10M supply provides ~2x Year 1 requirements, allowing for organic growth without artificial scarcity
2. **Bootstrap Coverage**: Combined Community Pool (3M TUS) + Bootstrap Fund (1M TUS) = 4M TUS (40%) can fully cover Year 1 operations
3. **Gas Fee Efficiency**: At $0.10-$1.00/TUS, gas fees ($0.01-$0.05) = 0.01-0.5 TUS (negligible overhead)
4. **Streaming Economics**: 0.001 TUS per stream = $0.0001-$0.001, competitive with Spotify ($0.003-$0.005/stream)
5. **Elastic Growth**: Initial supply is modest; additional issuance can occur algorithmically based on protocol usage milestones

**Why NOT Higher or Lower:**
- ❌ **100M+ supply**: Would require impractically low prices (fractions of a cent) or create perception of "cheap" token
- ❌ **1M supply**: Too constraining; would force high prices ($10+/TUS) that price out casual users and break streaming economics
- ✅ **10M supply**: Sweet spot enabling human-readable amounts (1-100 TUS for most transactions) while maintaining value

**Note on Bootstrap Allocation:**
- 10% of genesis supply (1,000,000 TUS) allocated to Network Bootstrap Fund
- Covers validator subsidies during critical first 12 months
- Reduces Community Usage Pool from 50% to 30%, but combined with Bootstrap Fund maintains 40% for ecosystem growth
- Unused bootstrap funds return to Community Pool after Month 12

### Token Sale Allocation Rationale

**Why 25% for token sales?**
- Raises sufficient capital ($500K-$1M) for 18-24 months runway
- Maintains combined 40% in Community Pool (30%) + Bootstrap Fund (10%) for organic protocol usage
- Phased sale approach (seed → strategic → public) ensures price discovery
- Bootstrap allocation (10%) specifically covers validator subsidies during critical first year
- Year 1 operational needs (~5M TUS) fully covered by 4M TUS allocation + elastic issuance

**Capital Raise Projections:**
| Round | TUS Amount | Price Range | Capital Raised | Discount vs Public |
|-------|------------|-------------|----------------|-------------------|
| Seed Sale | 500,000 | $0.05-$0.10 | $25K-$50K | 50-80% |
| Strategic | 1,000,000 | $0.15-$0.25 | $150K-$250K | 25-50% |
| Public Sale | 1,000,000 | $0.40-$0.60 | $400K-$600K | Market rate |
| **Total** | **2,500,000** | - | **$575K-$900K** | - |

**Use of Proceeds:**
- 40% → Core development (DAW, AI services, L1 infrastructure)
- 25% → Smart contract audits, security, legal compliance
- 20% → Marketing, community growth, creator onboarding
- 10% → Initial liquidity provision for DEX pools
- 5% → Operational contingency

## 4. Token Sale Structure & Timeline

### Phase 1: Seed Round (5% - 500,000 TUS)

**Timing:** Before Token Generation Event (TGE)

**Target Participants:**
- Strategic VCs focused on music tech, Web3, or creator economy
- Angel investors with relevant industry connections
- Early believers and advisors

**Terms:**
- **Price:** $0.05-$0.10 per TUS
- **Raise Target:** $25,000-$50,000
- **Minimum Investment:** $5,000
- **Vesting:** 1-year cliff, 3-year linear vest
- **Lockup:** Tokens locked until TGE + cliff period
- **Investor Rights:** Limited to information rights, no board seats or veto rights

### Phase 2: Strategic Round (10% - 1,000,000 TUS)

**Timing:** Before TGE

**Target Participants:**
- Strategic partners (music labels, distribution platforms, AI companies)
- Industry advisors and key opinion leaders
- Market makers (for liquidity provision)
- Ecosystem partners (wallets, exchanges, L1 validators)

**Terms:**
- **Price:** $0.15-$0.25 per TUS
- **Raise Target:** $150,000-$250,000
- **Minimum Investment:** $10,000
- **Vesting:** 6-month cliff, 24-month linear vest
- **Lockup:** Tokens locked until TGE + cliff period
- **Value-Add Required:** Strategic partners must provide operational value (integrations, distribution, technical support)

### Phase 3: Public Sale / IDO (10% - 1,000,000 TUS)

**Timing:** At TGE (Token Generation Event)

**Target Participants:**
- Community members, early users, creators
- Public crypto community
- Musicians and content creators

**Mechanism Options:**
1. **Initial DEX Offering (IDO)**
   - Platform: Trader Joe, Pangolin, or other Avalanche DEX
   - Fixed price or Dutch auction
   - Anti-bot protections (CAPTCHA, wallet age requirements)

2. **Launchpad Sale**
   - Platform: Avalanche Launchpad, DAO Maker, Polkastarter
   - Benefits: Built-in community, KYC/AML handled, marketing support
   - Cost: 5-15% of raise to platform

**Terms:**
- **Price:** $0.40-$0.60 per TUS (market rate, no discount)
- **Raise Target:** $400,000-$600,000
- **Minimum Investment:** $100
- **Maximum Investment:** $5,000 (prevents whales)
- **Vesting:** 20% immediate unlock, 80% vested over 6 months
- **KYC Required:** Yes (for amounts >$1,000)

### Token Generation Event (TGE)

**What Happens at TGE:**
1. **Smart Contract Deployment:** TUS token contract deployed on TellUrStori L1
2. **Vesting Contracts:** All seed/strategic allocations locked in on-chain vesting contracts
3. **Initial Liquidity:** Seed DEX pools (e.g., 100K TUS + $40K AVAX)
4. **Airdrop Distribution:** Early user airdrop (500K TUS) distributed
5. **Public Sale:** IDO/Launchpad sale opens
6. **Trading Begins:** Secondary market trading starts

**Initial Circulating Supply at TGE:**
| Source | Amount | % of Total |
|--------|--------|------------|
| Public Sale (immediate) | 200,000 | 2.0% |
| Airdrop | 500,000 | 5.0% |
| Seed (10% unlock) | 50,000 | 0.5% |
| Strategic (10% unlock) | 100,000 | 1.0% |
| **Total Circulating** | **850,000** | **8.5%** |

**Fully Diluted Valuation (FDV):**
- At public sale price of $0.50/TUS
- FDV = 10M TUS × $0.50 = **$5,000,000**
- Initial Market Cap = 850K TUS × $0.50 = **$425,000**
- Circulating to FDV ratio: **8.5%** (healthy for early stage)

### Safe Harbor Compliance Framework

**For Legal Review with BVI/Cayman Foundation Counsel:**

**1. Regulatory Positioning**

**Utility-Focused Token Design:**
- TUS is required for protocol operations (gas fees, minting, licenses)
- No promises of profits or returns
- Value derives from protocol usage, not expectation of others' efforts
- Fully functional utility at TGE (not "promised future functionality")

**2. Safe Harbor Approach (SEC/US Compliance)**

**To minimize securities law risk:**
- ✅ **Restrict US Participants:** Geo-block US IPs, require attestation of non-US residency
- ✅ **KYC/AML:** Implement for all sale participants (especially >$1,000)
- ✅ **Accredited Investors Only (Seed/Strategic):** Use Form D exemption for early rounds
- ✅ **No Investment Language:** Avoid terms like "investment," "returns," "appreciation," "ROI"
- ✅ **Functional at Launch:** Ensure DAW, marketplace, and L1 are operational at TGE
- ✅ **Decentralization Pathway:** Clear roadmap to progressive decentralization

**3. Howey Test Analysis**

| Factor | Risk Level | Mitigation |
|--------|------------|------------|
| Investment of money | ✅ Yes | N/A - unavoidable |
| Common enterprise | ✅ Yes | Foundation structure, not company shares |
| Expectation of profits | ⚠️ Maybe | **Emphasize utility, not speculation** |
| Efforts of others | ⚠️ Maybe | **Progressive decentralization, validator network** |

**Key Mitigations:**
1. **Utility-First Messaging:** All marketing focuses on DAW functionality, not price appreciation
2. **No APY/Yield:** Staking rewards framed as "work compensation," not passive income
3. **Functional Network:** TellUrStori L1 + DAW operational before public sale
4. **Decentralized Validators:** Third-party validators operating from day 1
5. **Open Source:** Codebase public, community can fork/verify

**4. Foundation Structure (BVI/Cayman)**

**Recommended Entity:**
- **BVI Foundation Company** (preferred for flexibility)
- **Alternative:** Cayman Foundation Company

**Benefits:**
- No shareholders (non-profit structure)
- Clear separation from commercial DAW operations
- Tax neutrality
- Internationally recognized
- Can hold IP, tokens, and treasury assets
- Foundation Council (not Board of Directors) manages protocol governance

**Structure:**
```
TellUrStori Foundation (BVI)
├── Holds: 10M genesis TUS allocation
├── Manages: Protocol treasury, grants program
├── Governed by: Foundation Council (5-7 members)
└── Operates: Non-profit, mission-driven

TellUrStori Inc (US or Delaware C-Corp)
├── Develops: DAW software, services
├── Funded by: VC, grants from Foundation
└── Commercial operations
```

**5. Token Sale Legal Documents Required**

**For Seed/Strategic Rounds:**
- ✅ Simple Agreement for Future Tokens (SAFT)
- ✅ Investor Qualification Questionnaire
- ✅ Token Purchase Agreement
- ✅ Risk Disclosure Document

**For Public Sale:**
- ✅ Terms of Sale
- ✅ Token Purchase Agreement
- ✅ Risk Disclosures
- ✅ Privacy Policy (GDPR compliant)

**Key Legal Disclaimers:**
- No guarantees of profits or returns
- High-risk investment warning
- Token utility may not be realized
- Regulatory uncertainty
- Technology risks (smart contract bugs, hacks)
- Market volatility

## 5. Distribution Mechanics

Early User Airdrop (5%)

- Based on:
  - Verified TellUrStori usage
  - Testnet participation
  - Content creation or moderation
- No purchase required

***

Community Usage Pool (30%) + Bootstrap Fund (10%)

**Community Usage Pool (3,000,000 TUS):**

Tokens enter circulation **only** as compensation for:

- Story creation and curation
- Moderation and validation
- Governance participation
- Content quality contributions

No upfront unlock—earned only through verified protocol activity.

**Network Bootstrap Fund (1,000,000 TUS):**

Reserved specifically for validator subsidies during the first 12 months (see Section 8: Network Bootstrap Economics). Ensures network can operate sustainably while organic fee revenue scales.

Unused bootstrap funds return to Community Usage Pool after Month 12.

## 6. Team Allocation & Vesting

Team Allocation (15%)

- 1-year cliff
- 4-year linear vesting
- On-chain time locks
- No acceleration clauses

Purpose:

- Align long-term incentives
- Prevent early dumping
- Reduce speculation narratives

## 7. Validator-Fee Economic Model

Transaction Fees

Users pay TUS fees for:

- Blockchain transaction gas fees
- Tokenizing songs as digital masters (NFTs)
- Purchasing songs under marketplace license types
- Content moderation and validation
- Storage, indexing, and retrieval

Fee Distribution

Transaction fees are distributed directly to **active participants**, including:

| Recipient | Function |
|-----------|----------|
| Compute Validators | Transaction processing |
| Content Moderators | Quality, safety, compliance |
| Curators | Discovery & ranking |
| Infrastructure Operators | Storage & indexing |

Fees are not burned.

***

Fee Allocation Model

Transaction fees are distributed to balance work compensation with holding incentives:

- **60%** → Active validators (work-based compensation)
- **15%** → Staking rewards (distributed to all stakers proportionally)
- **10%** → Protocol burns (permanent removal creating deflationary pressure)
- **10%** → Grants & ecosystem development treasury
- **5%** → Emergency response / insurance pool

**Design Rationale:**

This split creates three key benefits:

1. **Validator Priority (60%):** Majority goes to active workers maintaining network security
2. **Holding Incentive (15%):** Staking rewards reduce velocity and stabilize token economics
3. **Long-term Sustainability (10% burns):** Creates deflationary pressure as protocol usage grows

All percentages are adjustable via governance within predefined bounds (±20% from base allocation).

## 8. Network Bootstrap Economics

### The Cold Start Problem

A validator-fee model requires active usage to generate revenue, but validators are needed to provide service. This creates a circular dependency that must be solved through **temporary bootstrap subsidies**.

### Bootstrap Phase (Months 0-12)

**Validator Launch Subsidy Program:**

- **Source:** Community Usage Pool (allocated 1,000,000 TUS for bootstrap)
- **Duration:** 12 months with graduated transition to fee-based economics
- **Target:** Minimum 50 active validators to ensure network reliability
- **Initial Subsidy:** 10,000 TUS per validator per month

**Graduated Transition Schedule:**

| Phase | Timeline | Subsidy % | Fee Revenue % | Monthly Pool Allocation |
|-------|----------|-----------|---------------|------------------------|
| Phase 1 | Months 0-3 | 100% | 0% | 500,000 TUS |
| Phase 2 | Months 4-6 | 75% | 25% | 375,000 TUS |
| Phase 3 | Months 7-9 | 50% | 50% | 250,000 TUS |
| Phase 4 | Months 10-12 | 25% | 75% | 125,000 TUS |
| Phase 5 | Month 13+ | 0% | 100% | 0 TUS (self-sustaining) |

**Transition Success Criteria:**

The network transitions to the next phase when:
- Monthly fee revenue exceeds 80% of validator operating costs, AND
- Minimum 100 Daily Active Users sustained for 30 days, AND
- Average 1,000+ transactions per day for 30 days

If success criteria are not met, the current phase extends until thresholds are achieved.

**Bootstrap Pool Impact:**

- Total allocated: 1,000,000 TUS (10% of genesis supply)
- Reduces Community Usage Pool from 50% to 40% of genesis allocation
- Remaining 4,000,000 TUS in Community Pool covers ongoing rewards
- Bootstrap funds not spent by Month 12 return to Community Usage Pool

This bootstrap model ensures validators can operate sustainably during the critical early months while creating clear incentives for organic network growth.

## 9. Issuance & Inflation Controls

Controlled Issuance

New TUS tokens are minted only when:

- Protocol usage milestones are reached
- Issuance offsets ecosystem growth needs
- Distribution flows to **active contributors**

Issuance is:

- Transparent
- Predictable
- Usage-linked
- Non-discretionary

There are **no price-based issuance mechanisms**.

## 10. Staking Economics & Value Accrual Mechanisms

While TUS is not designed as a passive investment asset, the protocol implements **value accrual mechanisms** that reward long-term participation and create natural velocity sinks to support sustainable token economics.

### Staking Tiers & Benefits

#### Validator Stake (10,000+ TUS)

**Requirements:**
- Minimum stake: 10,000 TUS
- Technical infrastructure: Minimum specs for node operation
- Identity verification: KYC for validator accountability
- Slashing risk: Stake subject to penalties for poor performance

**Benefits:**
- Earn 60% share of transaction fees (work-based compensation)
- Participate in transaction validation and consensus
- Full governance voting rights with reputation weighting
- Priority consideration for protocol upgrades and new features

**Slashing Conditions:**
- 5% slash: Network downtime exceeding 24 hours
- 25% slash: Invalid validation attempts or protocol violations
- 100% slash: Proven malicious behavior (with appeals process)

#### Creator Stake (1,000+ TUS)

**Requirements:**
- Minimum stake: 1,000 TUS
- Lock period: Minimum 30 days for benefits
- Active usage: Must use platform for content creation

**Benefits:**
- **20% discount** on AI generation fees and services
- **Priority access** during high-demand periods
- **Staking rewards:** 15% of transaction fees distributed proportionally
- **Governance participation:** Weighted voting on creator-focused proposals
- **Early access** to new AI models and features

#### Community Stake (100+ TUS)

**Requirements:**
- Minimum stake: 100 TUS
- Lock period: Minimum 30 days
- Platform engagement: Active account required

**Benefits:**
- **10% discount** on all platform services
- **Staking rewards:** 10% APR from fee pool distribution
- **Governance voting rights** on community proposals
- **Exclusive access** to beta features and community events

### Fee Distribution Model (Revised)

Transaction fees are distributed to create holding incentives while rewarding active work:

| Recipient | Allocation | Purpose |
|-----------|------------|---------|
| Active Validators | 60% | Work-based compensation for network operation |
| Staking Rewards | 15% | Distributed proportionally to all stakers (incentivizes holding) |
| Protocol Burns | 10% | Permanent removal creating deflationary pressure |
| Grants & Ecosystem | 10% | Development, integrations, community growth |
| Emergency Fund | 5% | Insurance pool for security incidents and contingencies |

**Rationale:**
- Validators maintain majority (60%) as primary workers
- Staking rewards (15%) reduce velocity and create holding incentive
- Burns (10%) provide long-term deflationary pressure as usage grows
- Treasury (10%) funds sustainable ecosystem development
- Emergency fund (5%) ensures protocol resilience

### Time-Weighted Governance

To encourage long-term alignment, governance voting power scales with stake duration:

**Voting Power Formula:**
```
Voting_Power = Stake_Amount × √(Lock_Days)
Maximum Multiplier: 4x (achieved at 730 days / 2 years)
```

**Examples:**
- 1,000 TUS staked for 30 days: 1,000 × √30 = 5,477 voting power
- 1,000 TUS staked for 365 days: 1,000 × √365 = 19,105 voting power
- 1,000 TUS staked for 730 days: 1,000 × √730 = 27,019 voting power (capped at 4x = 4,000 effective)

This mechanism:
- Rewards long-term commitment over short-term speculation
- Prevents governance manipulation by whale accumulation
- Aligns voting power with protocol sustainability interests
- Remains sybil-resistant (spreading stake across wallets doesn't increase power)

### Staking Reward Calculations

**Annual Percentage Rate (APR) Estimation:**

Staking rewards come from 15% of all transaction fees distributed proportionally to stakers.

**Example Calculation:**
```
Annual Network Fees: $1,000,000 (hypothetical)
Staker Share (15%): $150,000
Total Staked TUS: $2,000,000 (assuming 40% staking ratio at $0.50/TUS)
Staking APR: $150,000 / $2,000,000 = 7.5% APR
```

**Key Variables:**
- APR increases with higher network usage (more fees)
- APR decreases as more users stake (higher denominator)
- APR is **not guaranteed** and fluctuates with protocol activity
- Rewards paid in TUS, not USD (no price guarantees)

### Value Accrual Summary

TUS holders benefit from network growth through:

1. **Staking Rewards (15% of fees):** Direct yield from protocol usage
2. **Fee Discounts (10-30%):** Reduces cost of platform services
3. **Governance Power:** Influence protocol evolution and fee structures
4. **Priority Access:** Queue advantages during high-demand periods
5. **Deflationary Pressure (10% burns):** Long-term supply reduction as usage scales

**Important Framing:**

These mechanisms are designed to **reward active participation and long-term alignment**, not to create passive investment returns. Staking rewards represent **compensation for providing economic security** through capital lockup, similar to validator bonds in proof-of-stake systems.

## 11. Governance

Governance is implemented through on-chain voting mechanisms, progressively decentralizing over time.

Governance Scope

Token holders may vote on:

- Fee ranges
- Validator weightings
- Grant programs
- Protocol rules

Token holders **cannot** vote on:

- Buybacks
- Dividends
- Revenue sharing
- Price-support mechanisms

## 12. Market Integrity & Fairness

- No liquidity withdrawals by insiders
- No discretionary minting
- Public vesting schedules
- On-chain transparency
- Smart contract audits

Launch mechanisms may include:

- Phased activation
- Anti-bot protections
- Fair-access policies

## 13. Explicit Non-Features

TUS does **not** include:

- Burn-driven scarcity narratives (though 10% of fees are burned for long-term deflation)
- Guaranteed returns or fixed yields
- Misleading "APY" marketing (staking rewards fluctuate with usage)
- Price targets or appreciation promises
- Profit participation or revenue sharing rights
- Pure passive income (staking requires capital lockup and bears slashing risk)

**Important Distinction:**

While TUS implements staking rewards, these are framed as **compensation for providing economic security** through capital lockup, similar to validator bonds in proof-of-stake systems. Staking is not passive—it requires:

- Capital commitment (lockup periods)
- Economic risk (slashing for validators)
- Active platform engagement (for reward eligibility)
- Governance participation (time-weighted voting)

This maintains our utility-first positioning while creating sustainable token economics.

## 14. Economic Model Summary

### Key Design Innovations

**1. Controlled Elastic Supply**
- No fixed maximum, but capped at 15% annual inflation declining to 3-5%
- 10-year projection: 10M → 35M TUS as network scales from 1K to 200K DAU
- Governance-adjustable within 2-8% bounds to prevent abuse

**2. Bootstrap Economics**
- 1M TUS allocated for validator subsidies (Months 0-12)
- Graduated transition: 100% subsidized → 100% fee-based
- Clear success criteria before each phase transition
- Solves cold start problem without ongoing inflation

**3. Multi-Tier Staking**
- **Validators (10K+ TUS):** Earn 60% of fees + governance + slashing risk
- **Creators (1K+ TUS):** 20% fee discounts + 15% staking rewards + priority access
- **Community (100+ TUS):** 10% fee discounts + 10% staking rewards + governance

**4. Value Accrual Mechanisms**
- Staking rewards (15% of fees) reduce velocity
- Fee discounts (10-30%) incentivize holding
- Time-weighted governance (up to 4x voting power)
- Deflationary burns (10% of fees) create long-term supply pressure

**5. Balanced Fee Distribution**
- 60% → Active validators (work-based)
- 15% → Staking rewards (holding incentive)
- 10% → Burns (deflationary pressure)
- 10% → Grants & ecosystem
- 5% → Emergency fund

### Economic Sustainability Metrics

**Target Ratios:**
- Staking ratio: 40-60% of circulating supply
- Token velocity: 8-12 (moderate, not excessive)
- Validator count: 100+ active validators
- Governance participation: 20%+ voter turnout

**Year 1 Projections (Conservative):**
- Network fees: $100K-$500K
- Validator subsidies: $50K-$100K (from bootstrap pool)
- Staking rewards APR: 5-10% (fluctuates with usage)
- Total TUS in circulation: ~11.5M (including elastic issuance)

### Regulatory Positioning

**Howey Test Compliance:**
- ✅ Functional utility at TGE (not speculative)
- ✅ No profit participation or revenue sharing
- ✅ Decentralized validator network (not "efforts of others")
- ✅ Work-based compensation model (staking = security provision)
- ✅ BVI Foundation structure for governance separation

**Securities Risk: LOW** - Strong utility classification positioning

## 15. Why This Model Fits TellUrStori

This model:

- **Rewards contribution over speculation** through work-based validator compensation
- **Scales indefinitely with usage** via controlled elastic supply with quantitative bounds
- **Aligns incentives across creators, moderators, and infrastructure** through multi-tier staking
- **Reduces regulatory risk** with honest utility-first framing and no profit participation
- **Matches TellUrStori's creative, participatory ethos** by paying ecosystem contributors
- **Creates sustainable economics** through balanced fee distribution and value accrual mechanisms
- **Solves bootstrap challenges** with dedicated validator subsidy program
- **Enables long-term growth** through deflationary pressure and governance evolution

### One-Sentence Summary (Very Useful)

**TUS is a protocol utility token that rewards ecosystem contributors through work-based compensation and staking incentives, creating sustainable economics that scale from small community to massive-scale adoption without speculative financial engineering.**

## 16. Oracle-Based License Pricing

### The Price Stability Problem

License prices must remain stable in USD terms for user experience, but TUS market price fluctuates. Without price oracles, a 10x TUS appreciation would make streaming licenses 10x more expensive, causing user exodus.

### Oracle Architecture

**Multi-Source Price Feed:**

Primary sources provide redundancy and manipulation resistance:

1. **DEX TWAP (60% weight)** - 30-minute time-weighted average from Trader Joe and Pangolin TUS pools
2. **Chainlink Feed (30% weight)** - TUS/USD direct feed or composite via TUS/AVAX × AVAX/USD
3. **Fallback** - Last known good price if feeds fail (circuit breaker activates)

**Update Frequency:**
- Base: Every 1 hour (gas-efficient)
- Emergency: When price deviation exceeds ±20%
- Maximum price change per update: 15% (prevents shock)

### Dynamic License Pricing

**Fixed USD Targets:**

| License Type | USD Target | TUS Calculation |
|--------------|------------|-----------------|
| Streaming | $0.0005 | USD_Target / Current_TUS_Price |
| Limited Play | $1.00 | Updated hourly via oracle |
| Time-Limited | $3.00 | ±20% deviation tolerance |
| Full Ownership | $10-$100 | Updated hourly |
| Commercial | $100-$5,000 | Per-transaction oracle query |

**Purchase Flow:**
1. User initiates license purchase
2. Smart contract queries oracle for current TUS/USD rate
3. Calculate required TUS: `USD_Target / TUS_Price`
4. Transfer TUS from user → Issue license NFT

### Attack Protection

**Flash Loan Defense:**
- 30-minute TWAP cannot be manipulated by single-block attacks
- Multi-source aggregation requires compromising DEX + Chainlink simultaneously
- Price change dampening (15% max) limits exploit profitability

**Staleness Protection:**
- Maximum price age: 6 hours
- Circuit breaker pauses marketplace if oracle fails
- Multi-sig can provide emergency price override

**Implementation:** Phase 1 (TGE) uses manual updates, Phase 2 (Month 1-3) activates automated Chainlink + DEX integration.

## 17. Unstaking Mechanics & Cooldown Periods

### The Bank Run Problem

Without unstaking friction, panic events trigger mass exits that crash token price and destabilize the network. Cooldown periods provide time for market recovery and prevent liquidity death spirals.

### Tiered Cooldown System

**Lock Periods + Cooldown Delays:**

| Tier | Lock Period | Cooldown | Total Timeline | APR Multiplier |
|------|-------------|----------|----------------|----------------|
| **Flexible** | 0 days | 7 days | 7 days | 0.5x (50% base APR) |
| **Standard** | 30 days | 14 days | 44 days | 1.0x (100% base APR) |
| **Validator** | 90 days | 21 days | 111 days | 1.5x (150% base APR) |

**Unstaking Process:**

**Standard Tier Example:**
1. User stakes 10,000 TUS with 30-day minimum lock
2. After Day 30, user can request unstake
3. 14-day cooldown begins (rewards stop)
4. After Day 44 total, tokens claimable to wallet

**Flexible Tier:**
- No lock period (instant unstake request)
- 7-day cooldown prevents immediate panic exits
- Lower rewards (50% of base APR) compensate for liquidity

**Validator Tier:**
- Longer cooldown (21 days) protects network security
- Slashing protection during cooldown (fair exit mechanism)
- Higher rewards (150% APR) compensate for extended commitment

### Emergency Withdrawal Queue

**Activation Trigger:** If unstake requests exceed 10% of total staked in 24 hours.

**Queue Mechanics:**
- Daily processing limit: 2% of total stake
- FIFO (first-in-first-out) order
- Priority: Validator → Standard → Flexible
- Users can cancel requests anytime before processing

**Example:**
```
Crisis event: 20% of stake requests unstaking
Days to clear: 10 days (processing 2%/day)
Impact: Gradual exit prevents price collapse
```

### Dynamic APR Rebalancing

**Auto-Adjustment Formula:**

Target staking ratio: 40-60% of circulating supply

```
If staking ratio < 30%: APR increases to 15% (crisis mode)
If staking ratio 30-40%: APR = 7.5% + bonus (attract stakers)
If staking ratio 40-60%: APR = 7.5% base (optimal)
If staking ratio > 60%: APR decreases to 5% (encourage liquidity)
```

This creates natural rebalancing without manual intervention—higher APR during unstaking pressure attracts new stakers and incentivizes cancellations.

### Governance Integration

**Voting Power During Unstaking:**

- **Flexible/Standard:** Lose voting power immediately upon unstake request
- **Validator:** Retain voting power during cooldown (rewarded for long-term commitment)
- **Rationale:** Prevents "vote then exit" governance attacks

## 18. Protocol-Owned Liquidity (POL)

### The Mercenary Liquidity Problem

Traditional liquidity mining attracts temporary capital that exits when rewards end, requiring token emissions. POL solves this by having the protocol permanently own its liquidity.

**Traditional Model (Unsustainable):**
```
Year 1: Offer 500K TUS rewards → Attract $2M liquidity
Year 2: Reduce rewards → Liquidity exits → Thin pools
Year 3: End rewards → All liquidity gone → Death spiral
```

**POL Model (Sustainable):**
```
Year 1: Deploy $150K initial POL + bonding program
Year 2: Protocol owns 40% of liquidity
Year 3: Protocol owns 60% of liquidity, fees cover operations
```

### Bond Mechanism Design

**How It Works:**

Users exchange LP tokens for discounted TUS (vested), protocol acquires permanent liquidity.

**Bond Terms:**
- **Discount:** 5-10% below market TUS price
- **Vesting:** 7-14 days linear unlock
- **Maximum payout:** Capped per bond (prevents dumps)
- **LP tokens:** Held by protocol (never withdrawable)

**Example:**
```
User provides: $2,000 worth of TUS-AVAX LP tokens
TUS market price: $0.50
Bond discount: 7%
Discounted price: $0.465

TUS payout: $2,000 / $0.465 = 4,301 TUS (vested over 10 days)
User profit: 7% gain ($140)
Protocol gain: Permanent $2,000 liquidity position
```

### Dynamic Bond Pricing

Bond discount adjusts based on protocol's liquidity ownership:

| POL Ownership % | Bond Discount | Phase |
|----------------|---------------|-------|
| 0-20% | 10% | Bootstrap (need liquidity urgently) |
| 20-40% | 7% | Growth (strong incentive) |
| 40-60% | 5% | Maturity (approaching target) |
| 60%+ | 3% | Endgame (protocol controls majority) |

**Rationale:** Early bonders get better terms to bootstrap POL. As protocol owns more liquidity, bonding becomes less attractive (less urgency).

### Initial POL Deployment

**Capital Allocation from Token Sales:**

From $575K-$900K raised, allocate $150K (20%) to initial POL:

- **TUS-AVAX Pool (Trader Joe):** $100K (50% TUS + 50% AVAX)
- **TUS-USDC Pool (Pangolin):** $50K (50% TUS + 50% USDC)
- **Target:** Protocol owns 40-50% of initial liquidity at TGE

### Fee Compounding Strategy

**Automated Weekly Harvests:**

1. Collect trading fees from all POL positions
2. Reinvest 100% of fees back into POL (compounding)
3. No fees withdrawn for other purposes

**10-Year Projection:**
```
Year 0: $150K POL initial
Year 1: $150K + $20K fees = $170K (13% growth)
Year 3: $230K (53% growth from compounding)
Year 5: $300K (100% growth, doubled from fees alone)
Year 10: $500K+ (protocol self-sustaining from POL fees)
```

**Assumptions:** $100K daily trading volume, 0.3% fee tier, protocol owns 40% of liquidity.

### POL vs. Liquidity Mining

| Metric | Traditional Mining | Protocol-Owned Liquidity |
|--------|-------------------|--------------------------|
| **Capital Efficiency** | Rent liquidity monthly | Own liquidity |
| **TUS Emissions** | 500K+ TUS/year | 100K TUS Year 1, then self-sustaining |
| **Liquidity Stability** | Exits when rewards end | Permanent (never exits) |
| **Long-term Cost** | $500K+/year | $150K one-time + bonding |

**Conclusion:** POL is 5x more cost-effective and creates liquidity without ongoing inflation.

### Governance Controls

**What Community CAN Vote On:**
- Rebalancing POL across pools (60% approval)
- Bond discount rates within 3-10% range (50% approval)
- Fee harvesting frequency

**What Community CANNOT Vote On:**
- Withdrawing POL liquidity ( = permanent by design)
- Selling LP tokens (defeats POL purpose)
- Using POL as collateral (liquidation risk)

**Emergency Exception:** 90% governance vote + 7-day timelock can withdraw POL only for critical security migrations (existential threats only).

### Implementation Roadmap

**Phase 1: TGE (Day 0)**
- Deploy $150K initial POL to Trader Joe + Pangolin
- Set up POL treasury multi-sig (5-of-7)

**Phase 2: Month 1-3**
- Activate bonding contracts (7% discount)
- First automated fee harvest and compounding
- Target: 30-40% POL ownership

**Phase 3: Month 6-12**
- POL reaches 50%+ of total liquidity
- Fee earnings begin covering 10-20% of protocol costs
- Eliminate liquidity mining (POL replaces emissions)