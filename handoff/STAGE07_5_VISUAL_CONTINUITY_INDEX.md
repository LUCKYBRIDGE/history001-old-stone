# Stage 07.5 — Visual Continuity Index

Status: **PRIMARY ART-PRODUCTION ENTRY POINT / GIR-SURFACE-30 ACTIVE**

Purpose: keep the visual production system detailed without becoming fragmented.

This file does not replace the technical SSOT (`docs/06_TECH_BLUEPRINT.md`). It is the Stage 07.5 art-production navigation/index.

---

# 1. Current style interpretation

Stage 07.5 production uses:

# **Grounded Illustrative Realism + GIR-SURFACE-30**

```text
surface/rendering realism target = 30 / 100
acceptance band = 25–35
```

This numerical target applies to **surface/rendering treatment only**.

It does not reduce requirements for:

- anatomy,
- joints,
- weight/balance,
- contact,
- perspective,
- exact identity/body ratios,
- object/world continuity.

If an older document uses broad wording such as `semireal`, `realistic illustration`, or similar qualitative language, Stage 07.5 production interprets it through the current `GIR-SURFACE-30` policy. Do not use older wording to raise surface realism above 35.

Authoritative Stage 07.5 style contract:

- `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
- `src/experience/production/stage075StyleAnchor.ts`
- `src/experience/production/stage075VisualProductionPolicy.ts`

---

# 2. Read in this order before producing any raster

1. `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
   - overall Embodied Composite principles
2. `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
   - base production modes / historical reference / generation control; qualitative realism wording is narrowed by GIR-SURFACE-30
3. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
   - SC00→SC11 camera/body/actor/world/dialogue contracts
4. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
   - exact GIR-SURFACE-30 surface/detail/lighting target
5. `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
   - P0→P3 continuity, alpha/layer policy, crop/angle/state derivation
6. `handoff/STAGE07_5_FUNCTIONAL_ANATOMY_AND_STYLIZED_PROPORTION_POLICY.md`
   - functional anatomy, no forced 6/7/8-head target, exact post-approval ratio inheritance
7. `handoff/STAGE07_5_SERIAL_ANCHOR_PRODUCTION_QUEUE.md`
   - one global active slot, current-policy approval-driven queue
8. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
   - Aru/Damu/Nua/B1/B2/Player identity packets
9. `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
   - skeleton/turnaround/hand/limb ratio and pose master requirements
10. `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
   - SC02/SC07/SC10 contact topology
11. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
   - Day 1 geography/light/landmark continuity
12. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
   - DAY1-HANDAXE-V1 and recurring props
13. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
   - L/TP/PP and viewport QA
14. `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`
   - scene-specific briefs
15. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
   - GIR-30 Job Card / derivation / drift / approval

Historical uncertainty:

- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

---

# 3. Machine-readable sources

## Style / GIR-30

- `src/experience/production/stage075StyleAnchor.ts`
- `src/experience/production/stage075VisualProductionPolicy.ts`

## Serial queue / lineage

- `src/experience/production/stage075AnchorReviewBundle.ts`
- `src/experience/production/stage075HumanMidProductionJob.ts`
- `src/experience/production/stage075HumanMidCandidateReviews.ts`
- `src/experience/production/stage075FirstPersonHandProductionJob.ts`
- `src/experience/production/stage075FirstPersonHandCandidateReviews.ts`

## Character/world/object/light anchors

- `src/experience/production/stage075VisualContinuityRegistry.ts`

## Anatomy / pose / contact

- `src/experience/production/stage075AnatomyRegistry.ts`

## Scene raster dependencies

- `src/experience/production/stage075RasterManifest.ts`

## Runtime adapter

- `src/experience/production/Stage075RasterMedia.tsx`

---

# 4. Current exact production truth

```text
GIR-SURFACE-30                     SPEC LOCKED
STYLE-GIR-V1                       reference-pending
STYLE approved slots               0 / 5
human-mid r03                      SUPERSEDED old-policy reference
human-mid r04                      ACTIVE / NEXT
first-person-hand r01              REJECTED
first-person-hand r02              BLOCKED UPSTREAM
world                              BLOCKED
material                           BLOCKED
responsive-pair                    BLOCKED
Approved STYLE reference paths     0
Approved scene raster assets       0
Human Gate                         FAIL
Stage 08                           BLOCKED
```

Current single production target:

# **`STYLE-GIR-V1 / human-mid r04`**

The former r03 canonical binary is not a current approved style reference.

---

# 5. Approval dependency graph

A scene raster cannot become runtime-ready directly.

```text
STYLE-GIR-V1 approved under GIR-SURFACE-30
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
required Contact Geometry approved where applicable
        ↓
scene candidate derived from approved masters
        ↓
continuity + anatomy + contact + GIR-30 + history + responsive review
        ↓
scene raster approved
        ↓
L/TP/PP sources registered
        ↓
runtime adapter may render it
```

Anchor production itself:

```text
one active slot
→ review
→ approve/register current-policy reference
→ exactly one next slot
```

---

# 6. STYLE-GIR-V1 serial calibration

```text
human-mid r04            ACTIVE / NEXT / independent exploration
→ first-person-hand r02  BLOCKED / anchor-conditioned after unlock
→ world                  BLOCKED / anchor-conditioned
→ material               BLOCKED / anchor-conditioned
→ responsive-pair        BLOCKED / locked-keyframe + crop-first
```

Later STYLE slots must use actual approved prior GIR-30 references. The packet is not five unrelated explorations.

Policy recalibration rule:

```text
preserve historical approval
→ mark old reference SUPERSEDED
→ remove old current approved path
→ invalidate dependent current work
→ reopen earliest affected slot
```

This rule is why human-mid r03 is historical but no longer current.

---

# 7. Anchor / anatomy lock order

Do not attempt to lock everything simultaneously.

```text
0. STYLE-GIR-V1 serial GIR-30 calibration
1. DAY1-HANDAXE-V1 canonical morphology seed + derivatives + metric scale
2. PLAYER-HUNT-BODY-V1 structural scaffold + canonical body + derivatives
3. PLAYER-HUNT-BODY-PROP-V1 measured exact proportion contract
4. ARU-IDENTITY-V1 structural scaffold + canonical identity + derivatives
5. ARU-PROP-V1 measured exact proportion contract
6. SC02-HANDOFF-GEO-V1 contact geometry + grip validation
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

Reasons:

- style must be stable before identity/object/world anchors,
- only one global slot is active,
- handaxe morphology/scale is locked before body-specific grip validation,
- Player/Aru use one canonical master rather than multi-image averages,
- no forced textbook 6/7/8-head target,
- measured ratios become exact after canonical master approval,
- contact geometry precedes final contact scene rasters,
- every later family inherits GIR-SURFACE-30.

---

# 8. What counts as consistency

Consistency includes:

```text
STYLE / GIR-30 TIER
+ FACE
+ HAIR SILHOUETTE
+ CANONICAL HEAD/BODY RELATIONSHIP
+ SKELETON/BODY PROPORTION
+ GARMENT SILHOUETTE
+ HAND/FOOT ANATOMY
+ JOINT ARTICULATION
+ CENTER OF MASS
+ POSE/MOVEMENT IDENTITY
+ CONTACT TOPOLOGY
+ OBJECT FINGERPRINT
+ WORLD GEOGRAPHY
+ LANDMARK SHAPE
+ LIGHT DIRECTION
+ MATERIAL PALETTE
+ SAME-MOMENT STATE
+ RESPONSIVE EVENT EQUIVALENCE
```

Tolerance:

```text
P0 identity = hard lock
P1 contact/object geometry = hard lock
P2 world structure = strong lock
P3 incidental micro-detail = harmless variation allowed
```

GIR-30 intentionally reduces the importance and amount of P3 surface microdetail. It does not weaken P0/P1/P2.

---

# 9. Canonical body rule

Do not solve anatomy with a universal textbook head count.

```text
structural scaffold
→ canonical body/identity master
→ derivatives
→ measured exact proportion contract
```

Once approved, the master’s own ratio fingerprint is P0 identity.

Example:

```text
canonical master = 7.2 heads
→ front / side / back / seated / walking / contact = same underlying 7.2 body
```

Perspective, foreshortening and crop may alter projected appearance only.

---

# 10. Derivation / camera / state law

# **Do not regenerate what can be derived from an approved master.**

```text
same moment + same camera direction
→ crop / zoom / pan

coverage/resolution insufficient
→ controlled outpaint / upscale

camera direction materially changes
→ Angle Master from same world/topology/light

actual world/body/action state changes
→ State Master derivative

contact-heavy interlocked state
→ Unified Contact derivative when separate layers break topology
```

---

# 11. Drift families

```text
CID-*  character identity
WID-*  world identity
OID-*  object identity
SID-*  style identity
```

Key GIR-30 style drifts:

```text
SID-PHOTO
SID-LENS
SID-DETAIL
SID-EDGE
SID-COMPOSITE
SID-POSTER
SID-CARTOON
```

Anatomy:

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

Contact:

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

A candidate can fail `SID-PHOTO` even when anatomy is excellent. Conversely, GIR-30 illustration does not excuse unresolved `ANAT-*` or `GEO-*`.

---

# 12. Immediate next production gate

The next gate is not a final scene raster.

# **Visual Anatomy Reference Lock / GIR-SURFACE-30 human calibration**

Current production target:

# **`STYLE-GIR-V1 / human-mid r04`**

Only after it is approved and registered can `first-person-hand r02` become active. Then the queue proceeds one slot at a time.
