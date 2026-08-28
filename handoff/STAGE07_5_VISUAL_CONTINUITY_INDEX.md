# Stage 07.5 — Visual Continuity Index

Status: **PRIMARY ART-PRODUCTION ENTRY POINT**

Purpose: keep the visual production system detailed **without becoming fragmented**.

This file does not replace the technical SSOT (`docs/06_TECH_BLUEPRINT.md`). It is the Stage 07.5 art-production navigation/index.

---

# 1. Read in this order before producing any raster

1. `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
   - overall Embodied Composite principles
2. `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
   - Grounded Illustrative Realism / production modes / generation control
3. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
   - SC00→SC11 exact camera/body/actor/world/dialogue contracts
4. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
   - STYLE-GIR-V1 realism/detail/lighting target
5. `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
   - exact P0→P3 continuity tolerances, non-photographic surface boundary, alpha/layer policy, crop-first/angle/state derivation rules
6. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
   - Aru/Damu/Nua/B1/B2/Player identity packets
7. `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
   - skeleton/turnaround/hand/limb ratio and pose-family master requirements
8. `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
   - SC02/SC07/SC10 contact topology, camera/body/object geometry
9. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
   - Day 1 geography/light/landmark continuity
10. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
   - DAY1-HANDAXE-V1 and recurring prop continuity
11. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
   - L/TP/PP composition families and viewport QA
12. `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`
   - PV/scene-specific production requirements
13. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
   - Generation Job Card / derivation / drift / approval process

Historical uncertainty review:

- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

---

# 2. Machine-readable sources

## Style

- `src/experience/production/stage075StyleAnchor.ts`

## Visual identity / layering / derivation policy

- `src/experience/production/stage075VisualProductionPolicy.ts`

## Character/world/object/light anchors

- `src/experience/production/stage075VisualContinuityRegistry.ts`

## Anatomy / pose / contact contracts

- `src/experience/production/stage075AnatomyRegistry.ts`

## Scene raster dependencies / approval

- `src/experience/production/stage075RasterManifest.ts`

## Runtime media adapter

- `src/experience/production/Stage075RasterMedia.tsx`

---

# 3. Approval dependency graph

A scene raster cannot become runtime-ready directly.

```text
STYLE-GIR-V1 approved
        +
required Character Anchors approved
        +
required Player Body Anchor approved
        +
required World / Landmark Anchors approved
        +
required Object / Prop Anchors approved
        +
required Lighting Anchor approved
        +
required Anatomy / Pose Contracts approved
        +
required Contact Geometry Contract approved where applicable
        ↓
scene candidate generated/edited from those masters
        ↓
continuity + anatomy + contact + history + responsive review
        ↓
scene raster status = approved
        ↓
L/TP/PP sources registered
        ↓
runtime adapter may render it
```

If any upstream anchor/contract is not approved, runtime remains on the pending/fallback proof.

---

# 4. Anchor / anatomy lock order

Do not attempt to lock everything simultaneously.

Recommended order:

```text
0. STYLE-GIR-V1
1. DAY1-HANDAXE-V1 morphology + scale packet
2. PLAYER-HUNT-BODY-V1 reference packet
3. PLAYER-HUNT-BODY-PROP-V1 anatomy/proportion contract
4. ARU-IDENTITY-V1 reference packet
5. ARU-PROP-V1 turnaround/proportion contract
6. SC02-HANDOFF-GEO-V1 contact geometry
7. DAMU-IDENTITY-V1 + DAMU-PROP-V1
8. NUA-IDENTITY-V1 + NUA-PROP-V1
9. WORLD-CAMP-DAWN-A
10. PROP-CAMP-FIRE-A / PROP-TEMP-SHELTER-A
11. WORLD-DEPARTURE-PATH-A + LM-SPLIT-ROCK-01
12. WORLD-GROUND-OBS-A + SC07-GROUND-BRACE-GEO-V1
13. WORLD-ROCK-SHELTER-A + SC10-ROCK-BRACE-GEO-V1
14. B1/B2 low-detail continuity packet
15. lighting reference packet final cross-check
```

Reason:

- style must not drift while other anchors are created,
- the handaxe defines a real scale relationship for the Player hand,
- Player hand/forearm proportions must be locked before SC02,
- Aru body/arm proportions must be locked before the handoff keyframe,
- contact geometry should be solved before any final SC02 scene raster,
- Damu/Nua and world families can then inherit the same scale/anatomy discipline.

---

# 5. First scene production dependency examples

## HUNT-SC02-HANDOFF-KEYFRAME-V1

Requires visual anchors:

```text
STYLE-GIR-V1
ARU-IDENTITY-V1
PLAYER-HUNT-BODY-V1
DAY1-HANDAXE-V1
WORLD-CAMP-DAWN-A
PROP-CAMP-FIRE-A
PROP-TEMP-SHELTER-A
LIGHT-DAY1-DAWN-A
```

Requires anatomy/contact contracts:

```text
PLAYER-HUNT-BODY-PROP-V1
ARU-PROP-V1
SC02-HANDOFF-GEO-V1
```

Production method:

```text
approved body/object masters
→ contact skeleton rough
→ contact geometry approval
→ anchor-conditioned Unified Contact Keyframe
→ Offer / Shared / Release
→ crop-first L / TP / PP derivation
```

## HUNT-SC01-CAMP-WORLD-V1

Requires:

```text
STYLE-GIR-V1
WORLD-CAMP-DAWN-A
PROP-CAMP-FIRE-A
PROP-TEMP-SHELTER-A
LM-SPLIT-ROCK-01 where geographically visible
LIGHT-DAY1-DAWN-A
ARU-IDENTITY-V1
DAMU-IDENTITY-V1
NUA-IDENTITY-V1
B1-CONTINUITY-V1
B2-CONTINUITY-V1
ARU-PROP-V1
DAMU-PROP-V1
NUA-PROP-V1
```

Portrait must use the same approved bodies and world state; crop is preferred when it preserves meaning, and any dedicated derivative may not stretch/compress anatomy to fit.

---

# 6. What counts as consistency

Consistency is not only `same face`.

It includes:

```text
STYLE
+ FACE
+ HAIR SILHOUETTE
+ SKELETON PROPORTION
+ BODY PROPORTION
+ GARMENT SILHOUETTE
+ HAND ANATOMY
+ JOINT ARTICULATION
+ CENTER OF MASS
+ POSE FAMILY
+ MOVEMENT IDENTITY
+ CONTACT TOPOLOGY
+ OBJECT FINGERPRINT
+ WORLD GEOGRAPHY
+ LANDMARK SHAPE
+ LIGHT DIRECTION
+ MATERIAL PALETTE
+ SAME-MOMENT STATE
+ RESPONSIVE EVENT EQUIVALENCE
```

The tolerance is not equal across all fields:

```text
P0 identity = hard lock
P1 contact/object geometry = hard lock
P2 world structure = strong lock
P3 incidental micro-detail = harmless drift allowed
```

A candidate is not rejected merely because a pebble, cloth wrinkle, hair flyaway, smoke curl, or tiny vegetation detail changed. It is rejected when the change breaks P0/P1 or materially contradicts P2.

---

# 7. Do not solve continuity with text prompts alone

Forbidden production assumption:

> "The model will remember Aru from previous generations."

Also forbidden:

> "We can fix the hand/arm scale later in CSS."

Required:

- approved anchor reference files,
- approved anatomy/proportion master packet,
- approved contact geometry where applicable,
- derivation lineage,
- Job Card,
- side-by-side comparison,
- registry dependency.

Model memory is not an asset management strategy. CSS scaling is not an anatomy correction strategy.

---

# 8. Drift families

Visual continuity drift:

```text
CID-* character identity
WID-* world identity
OID-* object identity
SID-* style identity
```

Anatomy drift:

```text
ANAT-HAND-SCALE
ANAT-FINGER
ANAT-WRIST
ANAT-ARM-LENGTH
ANAT-SHOULDER
ANAT-TORSO
ANAT-PELVIS
ANAT-LEG-LENGTH
ANAT-COM
ANAT-FOV
ANAT-POSE-ID
```

Contact geometry drift:

```text
GEO-CONTACT-DEPTH
GEO-CONTACT-POINT
GEO-CONTACT-TOPOLOGY
GEO-OBJECT-SCALE
GEO-LIMB-SCALE
GEO-CAMERA
GEO-CROP
GEO-TEMPORAL
```

Unresolved `ANAT-*` or `GEO-*` is P1 for hero/contact production assets.

---

# 9. Current anchor/contract state

Current production truth:

```text
STYLE-GIR-V1                 reference-pending
DAY1-HANDAXE-V1              reference-pending
PLAYER-HUNT-BODY-V1          reference-pending
PLAYER-HUNT-BODY-PROP-V1     reference-pending
ARU-IDENTITY-V1              reference-pending
ARU-PROP-V1                  reference-pending
SC02-HANDOFF-GEO-V1          reference-pending
DAMU-IDENTITY-V1             reference-pending
DAMU-PROP-V1                 reference-pending
NUA-IDENTITY-V1              reference-pending
NUA-PROP-V1                  reference-pending
WORLD-CAMP-DAWN-A            reference-pending
WORLD-DEPARTURE-PATH-A       reference-pending
WORLD-GROUND-OBS-A            reference-pending
WORLD-ROCK-SHELTER-A         reference-pending
SC07-GROUND-BRACE-GEO-V1     reference-pending
SC10-ROCK-BRACE-GEO-V1       reference-pending
LM-SPLIT-ROCK-01             reference-pending
PROP-TEMP-SHELTER-A          reference-pending
```

No anchor or anatomy/contact contract should be marked approved until an actual approved master/reference path is stored.

---

# 10. Immediate next production gate

The next gate is not `generate SC01` or `generate SC02 final`.

It is:

# **Visual Anatomy Reference Lock**

The identity/layering/derivation policy is now a prerequisite production contract. It does not itself approve any image.

First review bundle should contain only a small coherent master pack:

1. `STYLE-GIR-V1` style reference packet
2. `DAY1-HANDAXE-V1` master object packet
3. `PLAYER-HUNT-BODY-V1` hand/forearm/body reference packet
4. `PLAYER-HUNT-BODY-PROP-V1` measured production ratios
5. `ARU-IDENTITY-V1` turnaround packet
6. `ARU-PROP-V1` measured production ratios
7. `SC02-HANDOFF-GEO-V1` skeleton/contact rough

Only after these seven align should the SC02 final contact keyframe be produced.

This deliberately trades short-term image count for long-term anatomical and visual consistency.
