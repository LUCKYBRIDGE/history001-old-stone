# Stage 07.5 — STYLE-GIR-V1 Controlled Reference Packet

Status: **SERIAL PRODUCTION ACTIVE / 1 OF 5 APPROVED**

Anchor ID: `STYLE-GIR-V1`

Current Gate: **R2 Stage 07.5 Visual Anatomy Reference Lock**

STYLE-GIR-V1 remains `reference-pending` until all five required slots are approved and registered.

---

## 1. Purpose

Lock one coherent **Grounded Illustrative Realism** treatment across:

- human anatomy / surface treatment,
- first-person hand / contact,
- environment / depth,
- rock / earth / garment material,
- landscape / portrait equivalence.

Exact target:

```text
functional believable anatomy / weight / perspective / contact
+
illustratively simplified surfaces / clean reusable silhouette
-
photographic pore field / individual-hair field / photographic lens language
```

---

## 2. Serial production rule

# **Only one STYLE-GIR slot is production-active at a time.**

Current order/status:

```text
1. human-mid          APPROVED / REGISTERED
2. first-person-hand  ACTIVE / NEXT
3. world              BLOCKED
4. material           BLOCKED
5. responsive-pair    BLOCKED
```

Approved count:

```text
1 / 5
```

Do not batch-generate later slots.

Workflow:

```text
active candidate
→ review
→ reject/revise OR accept
→ canonical registration
→ exactly one next slot
```

---

## 3. Approved Slot A — `human-mid`

Canonical path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Approved revision:

```text
GIR-HUMAN-MID-001 r03
```

This image establishes the accepted human rendering tier:

- functional anatomy and believable weight,
- painterly broad skin planes,
- hair mass/silhouette before individual strands,
- broad garment/material folds,
- natural restrained light,
- clean extraction-oriented silhouette,
- no photographic shallow DOF / bokeh / lens language.

It does not define:

- Aru / Damu / Nua identity,
- Player body identity,
- handaxe morphology,
- canonical Day 1 geography,
- a specific historical ethnicity/species/costume.

Rejected history:

```text
r01 → historical restraint failure
r02 → SID-PHOTO / SID-LENS / SID-EDGE
r03 → approved
```

Closed Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_HUMAN_MID_JOB_CARD.md`

---

## 4. Active Slot B — `first-person-hand`

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp
```

Machine-readable job:

- `src/experience/production/stage075FirstPersonHandProductionJob.ts`

Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md`

Required upstream style reference:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Mode:

```text
independent-exploration constrained by approved STYLE-GIR rendering tier
```

The hand does not need to belong to the anonymous `human-mid` person. The approved image supplies **rendering/detail language only**.

Target:

- first-person camera,
- anonymous adult hand,
- wrist,
- enough forearm to judge proportion/transition,
- contact with one rough non-diagnostic natural stone,
- five readable fingers,
- plausible joints/knuckles/tendons,
- natural wrist-to-forearm transition,
- contact pressure through placement/compression/occlusion,
- illustrative skin/nail detail at gameplay distance,
- low-information natural background.

Must not define:

- `PLAYER-HUNT-BODY-V1`,
- `DAY1-HANDAXE-V1`,
- named character identity.

The rough stone must not acquire:

- handaxe contour,
- face-A/B,
- grip-base,
- working-end,
- canonical scar fingerprint.

Review checks:

```text
technicalCleanliness
handAnatomy
styleBoundary
contactReadability
extractionViability
historicalRestraint
```

Reject:

```text
ANAT-FINGER
ANAT-WRIST
ANAT-HAND-SCALE
GEO-CONTACT-POINT
SID-PHOTO
SID-LENS
SID-EDGE
SID-DETAIL
SID-COMPOSITE
```

---

## 5. Later STYLE slots — do not produce yet

### `world`

Purpose:

- low-specificity dawn environment,
- depth through overlap/value/perspective,
- same rendering tier as accepted human/hand references,
- no canonical Day 1 geography lock.

### `material`

Purpose:

- stone / earth / garment material language,
- broad planes/roughness/folds,
- no macro product-photo treatment.

### `responsive-pair`

Purpose:

- one anonymous source moment,
- Landscape + Portrait derived from the same source,
- crop/zoom/pan first,
- controlled outpaint only when crop is insufficient,
- no independent unrelated generations.

---

## 6. Shared constraints

Required:

- functional anatomy/contact/depth,
- no forced 6/7/8-head photographic convention,
- structure before photographic microtexture,
- comparable detail density across human/hand/material/world,
- clean readable silhouettes,
- natural readable light,
- no baked UI/dialogue/text.

Reject directions:

```text
SID-PHOTO
SID-LENS
SID-EDGE
SID-3D
SID-POSTER
SID-FANTASY
SID-CARTOON
SID-TEXTBOOK
SID-FOG
SID-DETAIL
SID-LIGHT
SID-COLOR
SID-COMPOSITE
```

Historical specifics that are uncertain remain `[R]` reconstruction or `[D]` deferred/non-diagnostic rather than being presented as facts.

---

## 7. Gate truth

```text
STYLE-GIR-V1 = reference-pending
approved slots = 1 / 5
human-mid = approved / registered
first-person-hand = active / next
world = blocked
material = blocked
responsive-pair = blocked
Human Gate = FAIL
Stage 08 = BLOCKED
```

Only after all five STYLE-GIR slots are approved and the exact approved reference path set is registered may `STYLE-GIR-V1` become `anchor-approved` and the global queue move to `DAY1-HANDAXE-V1`.
