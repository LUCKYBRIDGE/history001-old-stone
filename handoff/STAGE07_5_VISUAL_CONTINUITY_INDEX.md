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
5. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
   - Aru/Damu/Nua/B1/B2/Player identity packets
6. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
   - Day 1 geography/light/landmark continuity
7. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
   - DAY1-HANDAXE-V1 and recurring prop continuity
8. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
   - L/TP/PP composition families and viewport QA
9. `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`
   - PV/scene-specific production requirements
10. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
   - Generation Job Card / derivation / drift / approval process

Historical uncertainty review:

- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

---

# 2. Machine-readable sources

## Style

- `src/experience/production/stage075StyleAnchor.ts`

## Character/world/object/light anchors

- `src/experience/production/stage075VisualContinuityRegistry.ts`

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
        ↓
scene candidate generated/edited from those anchors
        ↓
continuity + history + responsive review
        ↓
scene raster status = approved
        ↓
L/TP/PP sources registered
        ↓
runtime adapter may render it
```

If any upstream anchor is not approved, runtime remains on the pending/fallback proof.

---

# 4. Anchor lock order

Do not attempt to lock everything simultaneously.

Recommended order:

```text
0. STYLE-GIR-V1
1. DAY1-HANDAXE-V1
2. PLAYER-HUNT-BODY-V1 hand/forearm packet
3. ARU-IDENTITY-V1
4. DAMU-IDENTITY-V1
5. NUA-IDENTITY-V1
6. WORLD-CAMP-DAWN-A
7. PROP-CAMP-FIRE-A / PROP-TEMP-SHELTER-A
8. WORLD-DEPARTURE-PATH-A + LM-SPLIT-ROCK-01
9. WORLD-GROUND-OBS-A
10. WORLD-ROCK-SHELTER-A
11. B1/B2 low-detail continuity packet
12. lighting reference packet final cross-check
```

Reason:

- style must not drift while other anchors are created
- the handaxe and Player hand are reused immediately in the most important contact scene
- Aru is needed for SC02
- camp geography is needed before full living-camp and departure variants

---

# 5. First scene production dependency examples

## HUNT-SC02-HANDOFF-KEYFRAME-V1

Requires:

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

Production method:

```text
anchor-conditioned Unified Contact Keyframe
→ Offer / Shared / Release
→ L / TP / PP
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
```

---

# 6. What counts as consistency

Consistency is not only `same face`.

It includes:

```text
STYLE
+ FACE
+ HAIR SILHOUETTE
+ BODY PROPORTION
+ GARMENT SILHOUETTE
+ HAND ANATOMY
+ MOVEMENT IDENTITY
+ OBJECT FINGERPRINT
+ WORLD GEOGRAPHY
+ LANDMARK SHAPE
+ LIGHT DIRECTION
+ MATERIAL PALETTE
+ SAME-MOMENT STATE
+ RESPONSIVE EVENT EQUIVALENCE
```

A candidate may fail even if only one of these breaks immersion.

---

# 7. Do not solve continuity with text prompts alone

Forbidden production assumption:

> "The model will remember Aru from previous generations."

Required:

- approved anchor reference files
- derivation lineage
- Job Card
- side-by-side comparison
- registry dependency

Model memory is not an asset management strategy.

---

# 8. Current anchor state

At the time this index was created:

```text
STYLE-GIR-V1            reference-pending
ARU-IDENTITY-V1         reference-pending
DAMU-IDENTITY-V1        reference-pending
NUA-IDENTITY-V1         reference-pending
PLAYER-HUNT-BODY-V1     reference-pending
WORLD-CAMP-DAWN-A       reference-pending
WORLD-DEPARTURE-PATH-A  reference-pending
WORLD-GROUND-OBS-A      reference-pending
WORLD-ROCK-SHELTER-A    reference-pending
LM-SPLIT-ROCK-01        reference-pending
DAY1-HANDAXE-V1         reference-pending
PROP-TEMP-SHELTER-A     reference-pending
```

Spec-locked but still needing production reference review where relevant:

```text
B1-CONTINUITY-V1
B2-CONTINUITY-V1
PROP-CAMP-FIRE-A
LIGHT-DAY1-DAWN-A
LIGHT-DAY1-ROUTE-A
```

No entry should be marked `anchor-approved` until an actual approved master/reference path is stored.

---

# 9. Immediate next production gate

The next gate is not `generate SC01`.

It is:

# **Visual Anchor Reference Lock**

First review bundle should contain only a small coherent anchor pack:

1. STYLE-GIR-V1 style test/reference packet
2. DAY1-HANDAXE-V1 master object packet
3. PLAYER-HUNT-BODY-V1 hand/forearm packet
4. ARU-IDENTITY-V1 first character packet

Only after these four align should SC02 contact production begin.

This deliberately trades short-term image count for long-term consistency.
