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

# TellUrStori Digital Asset System
## Music NFT Ownership & Revenue Model

**Version**: 1.0  
**Date**: November 11, 2025  
**Status**: Draft

---

## Executive Summary

TellUrStori introduces a revolutionary two-tier digital asset system that mirrors real-world media ownership while leveraging blockchain transparency and automation. Instead of traditional NFTs, we use **Digital Masters** (parent tokens representing original creations) and **Digital Instances** (child tokens representing copies/licenses), enabling flexible ownership structures, automated royalty distribution, and multiple monetization strategies.

**Key Innovation**: Separate the concept of "creation ownership" (Digital Master) from "consumption rights" (Digital Instances), allowing creators to maintain control while enabling flexible distribution models.

---

## The Two-Tier Asset System

### Tier 1: Digital Master Token

The **Digital Master** represents the original creation and its ownership rights. Think of it as the "master recording" in traditional music industry terms.

#### Technical Specification
- **Token Standard**: ERC-721 (unique, non-fungible)
- **Uniqueness**: One Digital Master per creation
- **Ownership**: Multi-signature with m/n owners
- **Primary Function**: Rights management and royalty collection

#### Ownership Structure

**Multi-Owner Model**:
```solidity
struct DigitalMaster {
    uint256 tokenId;
    address[] owners;           // Array of owner addresses
    uint256[] ownershipShares;  // Percentage shares (must sum to 100%)
    uint256 royaltyPercentage;  // Total royalty % (e.g., 10 = 10%)
    string metadataURI;         // IPFS link to creation metadata
    address instanceContract;   // Contract address for instances
    bool isLocked;             // Prevents ownership/royalty changes
}
```

**Ownership Configuration**:
- **Owner Count**: 1 to n owners (unlimited)
- **Ownership Shares**: Each owner sets their percentage (must total 100%)
- **Example**: 
  - Artist A: 50%
  - Producer B: 30%
  - Songwriter C: 20%

**Modifiable Parameters** (if not locked):
- ✅ Add/remove owners
- ✅ Modify ownership percentages
- ✅ Adjust royalty percentage
- ✅ Transfer ownership shares
- ✅ Lock configuration permanently

**Smart Contract Functions**:
```solidity
// Create new Digital Master
function mintDigitalMaster(
    address[] memory owners,
    uint256[] memory shares,
    uint256 royaltyPercentage,
    string memory metadataURI
) external returns (uint256 tokenId);

// Modify ownership (requires m/n signatures)
function updateOwnership(
    uint256 tokenId,
    address[] memory newOwners,
    uint256[] memory newShares
) external requiresMultisig;

// Adjust royalty percentage
function setRoyaltyPercentage(
    uint256 tokenId,
    uint256 newPercentage
) external requiresMultisig;

// Permanently lock configuration
function lockMaster(uint256 tokenId) external requiresMultisig;

// Transfer ownership share
function transferOwnershipShare(
    uint256 tokenId,
    address from,
    address to,
    uint256 sharePercentage
) external;
```

#### Royalty Distribution

**Automatic Distribution**:
- Every sale of a Digital Instance triggers royalty payment to Digital Master owners
- Royalties are distributed proportionally based on ownership shares
- Distribution happens atomically (no manual claims required)
- Smart contract enforces payment before transfer completes

**Example Calculation**:
```
Digital Instance sells for: 10 TUS
Royalty percentage: 10%
Total royalty: 1 TUS

Owner A (50%): 0.5 TUS
Owner B (30%): 0.3 TUS
Owner C (20%): 0.2 TUS
```

**Payment Flow**:
```
Buyer pays 10 TUS
  ├─ 1 TUS → Digital Master owners (distributed by %)
  ├─ 0.1 TUS → TellUrStori platform fee (1%)
  └─ 8.9 TUS → Seller
```

---

### Tier 2: Digital Instance Tokens

**Digital Instances** represent copies or licenses of the Digital Master. These are the tokens that get bought, sold, streamed, and consumed by users.

#### Technical Specification
- **Token Standard**: ERC-1155 (semi-fungible, multiple copies)
- **Quantity**: Unlimited instances per Digital Master
- **Ownership**: Individual holders
- **Primary Function**: Consumption rights and transferability

#### Instance Types & Licensing

**1. Full Ownership Instance**
- **Description**: Complete ownership with download rights
- **Use Cases**: Collectors, DJ libraries, commercial use
- **Price Point**: High (e.g., 10-100 TUS)
- **Rights**: 
  - ✅ Download audio file
  - ✅ Unlimited playback
  - ✅ Resell on secondary market
  - ✅ Public display of ownership

**2. Streaming Instance**
- **Description**: Pay-per-stream micro-transactions
- **Use Cases**: Casual listeners, sampling, radio play
- **Price Point**: Micro-payment (e.g., 0.001 TUS per stream)
- **Rights**:
  - ✅ Stream audio (no download)
  - ✅ Limited to streaming platform
  - ❌ No resale
  - ❌ No download

**3. Limited Play Instance**
- **Description**: Fixed number of plays before expiration
- **Use Cases**: Promotional copies, time-limited access
- **Price Point**: Low (e.g., 0.1-1 TUS for 100 plays)
- **Rights**:
  - ✅ Play N times
  - ✅ Countdown mechanism
  - ❌ No download
  - ❌ Expires after plays exhausted

**4. Time-Limited Instance**
- **Description**: Access for fixed time period
- **Use Cases**: Subscriptions, rentals, temporary licenses
- **Price Point**: Medium (e.g., 1-5 TUS for 30 days)
- **Rights**:
  - ✅ Unlimited playback during period
  - ✅ Optional download (DRM protected)
  - ❌ Expires after time period
  - ❌ No resale

**5. Commercial License Instance**
- **Description**: Rights for commercial use (films, ads, games)
- **Use Cases**: Content creators, businesses, filmmakers
- **Price Point**: Very high (e.g., 100-10,000 TUS)
- **Rights**:
  - ✅ Commercial usage rights
  - ✅ Download high-quality master
  - ✅ Sync licensing included
  - ✅ Transferable (with restrictions)

#### Smart Contract Structure

```solidity
struct DigitalInstance {
    uint256 masterId;          // Link to Digital Master
    uint256 instanceId;        // Unique instance ID
    LicenseType licenseType;   // Type of instance (Full, Stream, etc.)
    uint256 remainingPlays;    // For limited play instances
    uint256 expirationTime;    // For time-limited instances
    bool isTransferable;       // Can be resold?
    string encryptedContent;   // Encrypted download link (if applicable)
}

enum LicenseType {
    FullOwnership,
    Streaming,
    LimitedPlay,
    TimeLimited,
    CommercialLicense
}
```

**Minting Functions**:
```solidity
// Mint new Digital Instance
function mintDigitalInstance(
    uint256 masterId,
    LicenseType licenseType,
    uint256 quantity,
    uint256 price,
    InstanceParameters memory params
) external onlyMasterOwner returns (uint256 instanceId);

// Purchase Digital Instance
function purchaseInstance(
    uint256 instanceId,
    uint256 quantity
) external payable;

// Stream content (micropayment)
function streamContent(
    uint256 instanceId
) external payable;

// Check instance validity (for time-limited/play-count)
function isInstanceValid(
    uint256 instanceId,
    address owner
) external view returns (bool);
```

---

## Revenue Model

### TellUrStori Platform Fee: 1%

**Fee Structure**:
- **Platform Fee**: 1% of all transactions
- **Applied To**: 
  - ✅ Digital Master minting
  - ✅ Digital Instance sales (primary market)
  - ✅ Digital Instance resales (secondary market)
  - ✅ Streaming micropayments
  - ✅ License purchases

**Example Transactions**:

**Digital Master Minting**:
```
Minting Fee: 0.05 TUS
Platform Fee (1%): 0.0005 TUS
Creator Pays: 0.0505 TUS
```

**Digital Instance Sale (Primary Market)**:
```
Instance Price: 10 TUS
Royalty (10%): 1 TUS → Digital Master owners
Platform Fee (1%): 0.1 TUS → TellUrStori
Creator Receives: 8.9 TUS
```

**Digital Instance Resale (Secondary Market)**:
```
Resale Price: 15 TUS
Royalty (10%): 1.5 TUS → Digital Master owners
Platform Fee (1%): 0.15 TUS → TellUrStori
Seller Receives: 13.35 TUS
```

**Streaming Micropayment**:
```
Stream Cost: 0.001 TUS
Royalty (10%): 0.0001 TUS → Digital Master owners
Platform Fee (1%): 0.00001 TUS → TellUrStori
Instance Owner Receives: 0.00089 TUS
```

### Revenue Projections

**Monthly Revenue Calculation**:
```
Assumptions:
- 10,000 active creators
- Average 5 Digital Instances minted per creator per month
- Average instance price: 5 TUS
- 20% resale rate on secondary market
- 1 million streams per month

Primary Sales:
10,000 creators × 5 instances × 5 TUS = 250,000 TUS
Platform fee (1%): 2,500 TUS

Secondary Sales:
250,000 TUS × 20% = 50,000 TUS
Platform fee (1%): 500 TUS

Streaming:
1,000,000 streams × 0.001 TUS = 1,000 TUS
Platform fee (1%): 10 TUS

Total Monthly Revenue: 3,010 TUS (~$1,505 at $0.50/TUS)
Total Annual Revenue: ~$18,060
```

**Growth Scenario** (18 months):
- **Month 6**: 5,000 creators = $750/month
- **Month 12**: 20,000 creators = $3,000/month
- **Month 18**: 50,000 creators = $7,500/month

**Conservative vs. Aggressive Scenarios**:
| Metric | Conservative | Base | Aggressive |
|--------|--------------|------|------------|
| Active Creators (18mo) | 25,000 | 50,000 | 100,000 |
| Avg Instances/Creator/Mo | 3 | 5 | 8 |
| Avg Instance Price | 3 TUS | 5 TUS | 10 TUS |
| Monthly Revenue | $2,812 | $7,500 | $30,000 |
| Annual Revenue (Year 2) | $33,750 | $90,000 | $360,000 |

---

## Smart Contract Architecture

### Contract Suite

**1. DigitalMasterRegistry.sol**
- Manages all Digital Master tokens (ERC-721)
- Handles multi-signature ownership
- Enforces ownership share validation
- Manages royalty percentage configuration
- Links to Digital Instance contracts

**2. DigitalInstanceFactory.sol**
- Creates Digital Instance contracts (ERC-1155)
- Links instances back to their Digital Master
- Manages different license types
- Handles minting permissions (only master owners can mint)

**3. RoyaltyDistributor.sol**
- Calculates and distributes royalty payments
- Handles automatic payment splitting
- Manages platform fee collection
- Provides payment history and analytics

**4. MarketplaceManager.sol**
- Facilitates buying and selling of Digital Instances
- Handles primary and secondary market sales
- Enforces royalty payments on all transactions
- Manages listing fees and platform fees

**5. StreamingController.sol**
- Manages streaming micropayments
- Tracks play counts for limited-play instances
- Enforces time-based expiration
- Provides usage analytics

### Data Flow Diagram

```
User Creates Content in DAW
    ↓
Mint Digital Master (ERC-721)
    ├─ Multi-owner configuration
    ├─ Royalty percentage set
    └─ IPFS metadata stored
    ↓
Mint Digital Instances (ERC-1155)
    ├─ Choose license type
    ├─ Set price and quantity
    └─ Link to Digital Master
    ↓
List on Marketplace
    ↓
User Purchases Instance
    ↓
Smart Contract Executes:
    ├─ 10% Royalty → Master Owners (split by %)
    ├─ 1% Fee → TellUrStori
    └─ 89% → Seller
    ↓
Instance Transferred to Buyer
```

---

## Use Cases & Examples

### Example 1: Solo Artist Single Release

**Artist**: Independent musician releasing a new single

**Setup**:
1. Creates song in TellUrStori DAW
2. Mints Digital Master:
   - Owner: Artist (100%)
   - Royalty: 10%
3. Mints Digital Instances:
   - 100× Full Ownership @ 10 TUS each
   - Unlimited Streaming @ 0.001 TUS per stream
   - 50× Limited Play (100 plays) @ 1 TUS each

**Revenue**:
```
Full Ownership Sales (50 sold):
50 × 10 TUS = 500 TUS
Artist receives: 500 × 0.89 = 445 TUS ($222.50 at $0.50/TUS)

Streaming (10,000 streams):
10,000 × 0.001 TUS = 10 TUS
Artist receives: 10 × 0.89 = 8.9 TUS ($4.45)

Limited Play Sales (30 sold):
30 × 1 TUS = 30 TUS
Artist receives: 30 × 0.89 = 26.7 TUS ($13.35)

Total Artist Revenue: 480.6 TUS (~$240.30)
```

**Secondary Market** (after initial sales):
- Fan resells Full Ownership token for 15 TUS
- Artist receives royalty: 15 × 0.10 = 1.5 TUS ($0.75)
- Platform receives: 15 × 0.01 = 0.15 TUS ($0.08)
- Seller receives: 15 - 1.5 - 0.15 = 13.35 TUS ($6.68)

---

### Example 2: Collaborative Album Project

**Artists**: Producer, Vocalist, Songwriter collaborating on an album

**Setup**:
1. Create 10 songs in DAW
2. Mint Digital Masters for each song:
   - Owner A (Producer): 40%
   - Owner B (Vocalist): 40%
   - Owner C (Songwriter): 20%
   - Royalty: 15% (higher for collaborative work)
3. Mint Album Bundle:
   - 500× Full Album @ 50 TUS each
   - Individual tracks available for streaming

**Revenue Distribution** (per album sale at 50 TUS):
```
Sale Price: 50 TUS
Royalty (15%): 7.5 TUS
Platform Fee (1%): 0.5 TUS
Seller Receives: 42 TUS

Royalty Distribution:
Owner A: 7.5 × 0.40 = 3 TUS ($1.50)
Owner B: 7.5 × 0.40 = 3 TUS ($1.50)
Owner C: 7.5 × 0.20 = 1.5 TUS ($0.75)
```

**If 200 albums sell**:
- Owner A earns: 200 × 3 = 600 TUS ($300)
- Owner B earns: 200 × 3 = 600 TUS ($300)
- Owner C earns: 200 × 1.5 = 300 TUS ($150)
- Platform earns: 200 × 0.5 = 100 TUS ($50)

---

### Example 3: Commercial License for Film

**Filmmaker**: Needs music for indie film soundtrack

**Scenario**:
1. Browses TellUrStori marketplace
2. Finds perfect track with Commercial License instance available
3. Purchases Commercial License @ 1,000 TUS

**Transaction Breakdown**:
```
License Price: 1,000 TUS
Royalty (10%): 100 TUS → Digital Master owners
Platform Fee (1%): 10 TUS → TellUrStori
Artist Receives: 890 TUS ($445)

If Digital Master has 2 owners:
Owner A (70%): 70 TUS ($35)
Owner B (30%): 30 TUS ($15)
```

**Rights Granted**:
- ✅ Use in film (all distribution channels)
- ✅ Sync licensing included
- ✅ Download high-quality master
- ✅ Worldwide distribution rights
- ❌ No sublicensing to others

---

### Example 4: Subscription Model (Future Enhancement)

**Platform**: TellUrStori Premium Subscription

**Setup**:
- Monthly subscription: 20 TUS/month
- Grants access to Time-Limited Instances across entire catalog
- Artists receive pro-rata share of subscription revenue based on streams

**Revenue Distribution** (per 1,000 subscribers):
```
Monthly Subscription Revenue: 20,000 TUS

Platform Fee (1%): 200 TUS
Distributable to Artists: 19,800 TUS

If Artist receives 1% of total streams:
Artist Earnings: 198 TUS ($99/month)
```

---

## Governance & Evolution

### Parameter Adjustment (DAO Governance)

**Adjustable Parameters** (requires community vote):
- Platform fee percentage (currently 1%)
- Default royalty percentages
- Minting fees for Digital Masters
- License type templates
- Secondary market rules

**Governance Process**:
1. Proposal submission (requires 10,000 TUS stake)
2. Community discussion (7-day period)
3. Voting (14-day period, 1 TUS = 1 vote)
4. Execution (if >50% approval with >10% quorum)

### Future Enhancements

**Phase 1** (Months 1-6):
- ✅ Basic Digital Master + Instance system
- ✅ Full Ownership and Streaming instances
- ✅ Automated royalty distribution
- ✅ Marketplace integration

**Phase 2** (Months 7-12):
- [ ] Time-Limited and Limited-Play instances
- [ ] Commercial License instances
- [ ] Subscription model (catalog access)
- [ ] Fractionalization of Digital Masters

**Phase 3** (Months 13-18):
- [ ] Dynamic pricing algorithms
- [ ] Creator staking for boosted visibility
- [ ] Revenue-share pools for curators

**Phase 4** (Months 19-24):
- [ ] DAO governance implementation
- [ ] Decentralized storage integration (Filecoin)
- [ ] Advanced licensing (territorial rights, usage tracking)
- [ ] Integration with external streaming platforms

---

## Technical Security

### Smart Contract Security

**Audits**:
- Pre-launch audit by CertiK or ConsenSys Diligence
- Continuous monitoring with OpenZeppelin Defender
- Bug bounty program (up to $100K for critical vulnerabilities)

**Security Measures**:
- ReentrancyGuard on all payment functions
- Pausable mechanism for emergency controls
- Multi-signature requirements for critical operations
- Time-locked upgrades (48-hour delay)
- Rate limiting on minting operations

**Access Controls**:
```solidity
// Only Digital Master owners can mint instances
modifier onlyMasterOwner(uint256 masterId) {
    require(isOwner(masterId, msg.sender), "Not authorized");
    _;
}

// Multi-signature for ownership changes
modifier requiresMultisig(uint256 masterId) {
    require(hasMultisigApproval(masterId), "Requires m/n signatures");
    _;
}

// Platform admin functions (emergency only)
modifier onlyAdmin() {
    require(msg.sender == admin, "Admin only");
    _;
}
```

### Payment Security

**Royalty Enforcement**:
- Royalties enforced at smart contract level (cannot be bypassed)
- Atomic transactions (royalty payment + transfer happen together)
- Failed payments revert entire transaction
- Payment history immutably recorded on-chain

**Anti-Manipulation**:
- Minimum pricing floors to prevent wash trading
- Cooldown periods between ownership changes
- Stake requirements for high-value operations
- Transaction monitoring for suspicious patterns

---

## Comparison: Traditional vs. TellUrStori

| Aspect | Traditional Music Industry | TellUrStori Digital Assets |
|--------|----------------------------|---------------------------|
| **Master Rights** | Complex legal contracts, opaque ownership | Transparent blockchain ownership, configurable splits |
| **Royalty Distribution** | Quarterly/annual, manual calculations, 15-30% errors | Instant, automatic, mathematically precise |
| **Licensing** | Separate deals per use case, slow negotiations | Smart contract templates, instant execution |
| **Secondary Sales** | No creator participation | 10% royalty on every resale forever |
| **Ownership Transfers** | Legal paperwork, weeks/months | Blockchain transaction, instant |
| **Revenue Transparency** | Hidden by labels/distributors | Fully visible on-chain |
| **Distribution Costs** | 30-50% to intermediaries | 11% total (10% royalty + 1% platform) |
| **Geographic Restrictions** | Territory-specific deals | Global by default, no restrictions |
| **Fractionalization** | Complex equity structures | Native multi-owner support |

---

## Terminology

**Digital Asset**: Blockchain-based representation of digital media (replaces "NFT")

**Digital Master**: Parent token representing original creation and ownership rights (ERC-721)

**Digital Instance**: Child token representing copies/licenses of the Digital Master (ERC-1155)

**Ownership Share**: Percentage of Digital Master owned by each co-owner (must sum to 100%)

**Royalty Percentage**: Percentage of each sale paid to Digital Master owners

**License Type**: Category of rights granted by a Digital Instance (Full, Streaming, Limited, etc.)

**Platform Fee**: 1% fee collected by TellUrStori on all transactions

**Primary Market**: Initial sale of Digital Instances by creators

**Secondary Market**: Resale of Digital Instances between users

---

## FAQs

**Q: What happens if ownership percentages don't add up to 100%?**  
A: The smart contract validates that shares sum to exactly 100% before allowing mint. Transaction reverts if validation fails.

**Q: Can I change ownership after minting the Digital Master?**  
A: Yes, unless the master is locked. Changes require m/n multi-signature approval from current owners.

**Q: How are royalties distributed if an owner's wallet is compromised?**  
A: Owners can update their wallet address through multi-sig process. Royalties always go to currently registered addresses.

**Q: Can I mint more instances after the initial batch?**  
A: Yes, Digital Master owners can mint unlimited instances at any time. No cap on instance quantity.

**Q: What if I want different royalty rates for different instance types?**  
A: Currently all instances from a Digital Master share the same royalty rate. Future enhancement may allow per-instance rates.

**Q: How do streaming micropayments work technically?**  
A: Each play triggers a small on-chain transaction. To reduce gas costs, payments can be batched (e.g., every 100 plays).

**Q: Can I gift Digital Instances?**  
A: Yes, owners can transfer instances to any address for 0 TUS. Royalties still apply on subsequent sales.

**Q: What prevents someone from screen-recording streaming content?**  
A: Technical measures can't prevent this. However, ownership remains on-chain, and high-quality downloads require purchasing Full Ownership instances.

**Q: How do I prove I'm a Digital Master owner for legal purposes?**  
A: The blockchain provides cryptographic proof of ownership. We provide legal documentation services for formal rights agreements.

**Q: Can Digital Masters be burned/destroyed?**  
A: No, Digital Masters are permanent. However, owners can choose to stop minting new instances.

---

## Conclusion

TellUrStori's two-tier Digital Asset system revolutionizes how digital media is owned, distributed, and monetized. By separating creation ownership (Digital Masters) from consumption rights (Digital Instances), we enable:

✅ **Transparent Ownership**: Multi-signature Digital Masters with configurable ownership splits  
✅ **Flexible Monetization**: Multiple instance types for different use cases and price points  
✅ **Automated Royalties**: Instant, accurate distribution to all stakeholders  
✅ **Creator Empowerment**: 89% of revenue goes to creators (vs. 50-70% in traditional industry)  
✅ **Sustainable Platform**: 1% fee model enables long-term platform development

**The result**: A creator-first economy where artists retain control, earn more, and benefit from secondary market activity—all powered by transparent, automated blockchain technology.

---

**Version**: 1.0  
**Date**: November 11, 2025  
**Status**: Draft  
**Next Review**: After smart contract audit completion

