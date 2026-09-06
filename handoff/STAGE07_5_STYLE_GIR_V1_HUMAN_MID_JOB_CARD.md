# Stage 07.5 — STYLE-GIR-V1 / human-mid Production Job Card

Status: **ACTIVE PRODUCTION SLOT / r03 PENDING / NO APPROVED CANDIDATE**

This file is the execution record for the current single active Stage 07.5 production slot.

## 1. Job identity

```text
JOB ID: GIR-HUMAN-MID-001
TARGET ASSET ID: STYLE-GIR-V1 / human-mid
SCENE / BEAT: N/A — style proof only
MOMENT ID: STYLE-GIR-HUMAN-MID-A
OUTPUT ROLE: style-proof / anonymous human
DERIVATION MODE: independent-exploration
CURRENT REVISION: r03
PARENT ASSET: none — root style exploration slot
```

Canonical approved repository path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

A candidate under review must **not** use that canonical path.

```text
candidateStagingPath
= temporary/local/external review location
= not runtime-ready
= not an approved anchor path

registeredApprovedPath
= public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
= may exist only after clean review + explicit Project-owner approval
```

Rejected candidate binaries remain outside the repository-approved asset path.

---

## 2. Production objective

Produce exactly **one current candidate at a time** that establishes the human rendering tier for `STYLE-GIR-V1`.

The candidate is not Aru, Damu, Nua, or the Player. It is an unnamed fictional community member used only to decide the project-wide human rendering language.

Required balance:

```text
functional believable anatomy / weight / depth
+
illustratively simplified planes / surfaces / hair mass / garment folds
+
clean readable silhouette suitable for later extraction-oriented production
-
photographic pore field / individual-hair simulation / beauty-photo skin
-
photographic lens language / shallow-DOF dependence / AAA poster grading
```

---

## 3. Current r03 instruction — tightened from r01/r02 review

Create one anonymous adult fictional community member in a medium-distance / mid-shot to three-quarter-body framing.

r03 must preserve what worked in r01/r02 while correcting both failure classes:

### Preserve

- believable head/neck/shoulder/arm structure,
- grounded body weight and posture,
- face specificity carried by feature structure rather than caricature,
- restrained natural earth palette,
- simple non-canonical natural background,
- broad low-specificity covering masses,
- no modern object, logo, UI, caption, or recurring hero prop.

### Reduce from r02

- photographic skin sheen and pore-like surface information,
- individually resolved hair strands,
- photographic depth-of-field blur,
- camera/lens-like subject separation,
- high-frequency garment/fiber surface detail.

### Keep corrected from r01

- no necklace, pendant, bead string, decorative personal ornament, or other unnecessary culture-specific identity marker,
- no overconfident garment construction/stitching claim,
- no exact ethnicity/species/costume reconstruction claim.

Required visual treatment:

- Grounded Illustrative Realism.
- Anatomy and joints must be functionally plausible; no textbook 6/7/8-head target is imposed at this style-proof stage.
- Face should read from facial structure, feature placement, broad planes and silhouette.
- Hair should read as mass, silhouette, large locks/clumps and broad value groups.
- Skin should use broad form, restrained creases and limited microtexture.
- Clothing/covering should use broad material masses and folds with historically low specificity.
- Background depth should come from overlap, value grouping, perspective and edge hierarchy, **not photographic shallow DOF**.
- Hair/shoulder/arm/garment boundaries must remain sufficiently readable for later extraction-oriented production.

---

## 4. Must not define downstream identity

This candidate must not lock or imply:

- `ARU-IDENTITY-V1`
- `DAMU-IDENTITY-V1`
- `NUA-IDENTITY-V1`
- `PLAYER-HUNT-BODY-V1`
- `DAY1-HANDAXE-V1`
- `WORLD-CAMP-DAWN-A`
- any exact Korean Paleolithic ethnicity/species reconstruction
- any highly specific archaeological costume claim

No handaxe or distinctive recurring prop should appear.

---

## 5. Explicit reject direction

Reject if any of the following dominates normal viewing:

```text
SID-PHOTO     photographic skin / pore / beauty-photo tier
SID-LENS      bokeh, lens flare, cinematic shallow DOF, camera-like optical separation
SID-EDGE      hair/fur/background edges unsuitable for later extraction
SID-3D        generic rendered-game-character / plastic 3D look
SID-POSTER    AAA key-art / advertising composition or grade
SID-FANTASY   fantasy barbarian / caveman concept-art coding
SID-CARTOON   chibi, bobble-head, exaggerated cartoon anatomy
SID-DETAIL    microdetail density overwhelms readable form
```

Also reject:

- malformed visible anatomy,
- modern jewelry/accessories,
- speculative cultural decoration used as factual coding,
- individual-hair simulation dominating the silhouette,
- fiber/product-photo material treatment,
- explicit UI/text/logo/border inside the image.

---

## 6. Review checks

Machine-readable source:

```text
src/experience/production/stage075HumanMidProductionJob.ts
src/experience/production/stage075HumanMidCandidateReviews.ts
```

Every candidate is reviewed in this order:

1. `technicalCleanliness`
2. `structuralAnatomy`
3. `styleBoundary`
4. `extractionViability`
5. `historicalRestraint`

Each check is `pending | pass | fail`.

A single fail or unresolved drift code blocks owner approval and canonical registration.

---

## 7. Candidate review history

Rejected candidate binary files are intentionally **not committed** to approved repository asset directories.

| Revision | Candidate label | Technical | Anatomy | Style | Extraction | Historical restraint | Drift codes | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| r01 | `GIR-HUMAN-MID-001-r01.png` | PASS | PASS | PASS | PASS | FAIL | none | REJECTED |
| r02 | `GIR-HUMAN-MID-001-r02.png` | PASS | PASS | FAIL | FAIL | PASS | `SID-PHOTO`, `SID-LENS`, `SID-EDGE` | REJECTED |
| r03 | not produced | pending | pending | pending | pending | pending | none | ACTIVE / PENDING |

### r01 decision

Promising painterly/illustrative direction, but necklace/adornment and relatively specific garment coding exceeded the low-specificity historical restraint required for an anonymous style proof. It was revised rather than promoted.

### r02 decision

The historical-specificity problem improved, but the revision moved too far toward photographic rendering. Skin and hair became more photograph-like, background separation relied too much on shallow-DOF language, and hair/background edges became less suitable for the later extraction-oriented asset pipeline.

Formal rejection codes:

```text
SID-PHOTO
SID-LENS
SID-EDGE
```

r02 must not be used as a downstream style parent or approved reference.

---

## 8. Candidate lifecycle

```text
pending-production
→ candidate-produced
→ review-passed
→ owner-approved
→ registered
→ first-person-hand unlock
```

Reject branch:

```text
candidate-produced / review
→ candidate-rejected
→ new revision of human-mid
```

Current lifecycle truth after r02 review:

```text
r01 = rejected
r02 = rejected
r03 = pending-production
human-mid remains the single global NEXT slot
```

---

## 9. Acceptance criteria for r03 or later

The slot can be accepted only when all are true:

- [ ] real candidate exists at a staging/review location, not canonical approved path,
- [ ] `technicalCleanliness = pass`,
- [ ] `structuralAnatomy = pass`,
- [ ] `styleBoundary = pass`,
- [ ] `extractionViability = pass`,
- [ ] `historicalRestraint = pass`,
- [ ] no unresolved `SID-*` / anatomy drift remains,
- [ ] face reads through structure rather than photo microtexture,
- [ ] hair reads through mass/silhouette rather than strand simulation,
- [ ] background depth does not depend on photographic shallow DOF,
- [ ] garment/material reads through broad form rather than fiber-level rendering,
- [ ] no unsupported specific cultural/ethnic/species/costume claim,
- [ ] Project-owner explicitly approves the human rendering tier,
- [ ] approved binary is then stored at the exact canonical path,
- [ ] canonical path is registered in the STYLE-GIR-V1 bundle.

Only then may the queue move to:

```text
STYLE-GIR-V1 / first-person-hand
```

---

## 10. Gate truth

```text
STYLE-GIR-V1 status = reference-pending
human-mid = ACTIVE / NEXT
current revision = r03
approved human-mid = none
registered approved path = none
STYLE approved slots = 0 / 5
Approved raster assets = 0
Human Gate = FAIL
Stage 08 = BLOCKED
```

The two reviewed candidates do not advance the gate.
