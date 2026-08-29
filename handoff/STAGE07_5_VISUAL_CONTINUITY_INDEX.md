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
6. `handoff/STAGE07_5_FUNCTIONAL_ANATOMY_AND_STYLIZED_PROPORTION_POLICY.md`
   - functional anatomy hard requirements, no forced 6/7/8-head target, structure→canonical master→measured-ratio workflow
7. `handoff/STAGE07_5_SERIAL_ANCHOR_PRODUCTION_QUEUE.md`
   - one global active slot, serial approval-driven queue, no batch generation, handaxe/body circular-dependency resolution
8. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
   - Aru/Damu/Nua/B1/B2/Player identity packets
9. `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
   - skeleton/turnaround/hand/limb ratio and pose-family master requirements
10. `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
   - SC02/SC07/SC10 contact topology, camera/body/object geometry
11. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
   - Day 1 geography/light/landmark continuity
12. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
   - DAY1-HANDAXE-V1 and recurring prop continuity
13. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
   - L/TP/PP composition families and viewport QA
14. `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`
   - PV/scene-specific production requirements
15. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
   - Generation Job Card / derivation / drift / approval process

Historical uncertainty review:

- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

---

# 2. Machine-readable sources

## Style

- `src/experience/production/stage075StyleAnchor.ts`

## Serial anchor queue / parent lineage / required slots

- `src/experience/production/stage075AnchorReviewBundle.ts`

## Visual identity / layering / derivation / body-proportion policy

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

Anchor production itself also has an upstream queue:

```text
one active slot
→ approve/register
→ exactly one next slot
```

Do not batch-generate the full packet before reviewing the current slot.

---

# 4. Anchor / anatomy lock order

Do not attempt to lock everything simultaneously.

Required order:

```text
0. STYLE-GIR-V1 serial style calibration
1. DAY1-HANDAXE-V1 canonical morphology seed + object derivatives + metric/normalized scale
2. PLAYER-HUNT-BODY-V1 structural scaffold + canonical body master + body derivatives
3. PLAYER-HUNT-BODY-PROP-V1 measured proportion contract
4. ARU-IDENTITY-V1 structural scaffold + canonical identity master + turnaround derivatives
5. ARU-PROP-V1 measured proportion contract
6. SC02-HANDOFF-GEO-V1 contact geometry, including Aru/Player grip validation
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
- only one global slot is production-active at a time,
- the handaxe locks its own morphology and physical scale before any body-specific grip is required,
- Player palm/handaxe and Aru grip relationships are validated only after the relevant bodies exist, preventing circular dependency,
- Player/Aru are not multi-image averages: each gets a structural scaffold, then one canonical master, then derivatives,
- no conventional 6/7/8-head target is imposed before master approval,
- measured ratios come from the approved canonical master and then become production locks,
- contact geometry should be solved before any final SC02 scene raster,
- Damu/Nua and world families inherit the same functional-anatomy and master-derivation discipline.

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
→ Aru grip + Player grip validation against the same approved handaxe
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
+ CANONICAL HEAD/BODY RELATIONSHIP
+ SKELETON PROPORTION
+ BODY PROPORTION
+ GARMENT SILHOUETTE
+ HAND/FOOT ANATOMY
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

A body is not rejected merely because it is not a textbook 6/7/8-head adult. Once a canonical master is approved, however, that master's own proportion fingerprint is P0 identity and may not drift between derivatives.

---

# 7. Do not solve continuity with text prompts alone

Forbidden production assumptions:

> "The model will remember Aru from previous generations."

> "We can fix the hand/arm scale later in CSS."

> "Make every adult 7.5 heads tall so anatomy is realistic."

> "Generate all views now and choose the closest-looking set later."

Required:

- approved anchor reference files,
- serial queue discipline,
- structural scaffold,
- one canonical identity/body/object seed,
- measured anatomy/proportion master packet,
- approved contact geometry where applicable,
- derivation lineage,
- Job Card,
- side-by-side comparison,
- registry dependency.

Model memory is not an asset management strategy. CSS scaling is not an anatomy correction strategy. Textbook head-count conformity is not the project's anatomy criterion. Batch similarity selection is not identity continuity.

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
ANAT-FOOT-SCALE
ANAT-HEAD-BODY
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

Unresolved `ANAT-*` or `GEO-*` is P1 for hero/contact production assets. `ANAT-HEAD-BODY` that changes who the body appears to be is also P0 identity failure.

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
WORLD-GROUND-OBS-A           reference-pending
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

The identity/layering/derivation policy, functional-anatomy/stylized-proportion policy, and serial anchor queue are prerequisite production contracts. They do not themselves approve any image.

Longer dependency sequence:

1. `STYLE-GIR-V1`
2. `DAY1-HANDAXE-V1`
3. `PLAYER-HUNT-BODY-V1`
4. `PLAYER-HUNT-BODY-PROP-V1`
5. `ARU-IDENTITY-V1`
6. `ARU-PROP-V1`
7. `SC02-HANDOFF-GEO-V1`

But **these are not seven simultaneous production jobs**.

At repository state `STYLE-GIR-V1 approved slots = 0/5`, the machine-readable queue resolves the one active production slot as:

# **`STYLE-GIR-V1 / human-mid`**

Only after that slot is accepted and registered does the queue advance to `first-person-hand`, then `world`, `material`, and `responsive-pair`.

This deliberately trades short-term image count for long-term identity, functional anatomy, object continuity, and visual consistency.
