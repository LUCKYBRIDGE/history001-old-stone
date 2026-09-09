# Stage 07.5 — Visual Continuity Index

Status: **PRIMARY ART-PRODUCTION ENTRY POINT / GIR-SURFACE-30 ACTIVE / RASTER-INTEGRITY ENFORCED**

Purpose: keep the visual production system detailed without becoming fragmented.

Technical SSOT remains `docs/06_TECH_BLUEPRINT.md`.

---

# 1. Current style interpretation

# **Grounded Illustrative Realism + GIR-SURFACE-30**

```text
surface/rendering realism target = 30 / 100
acceptance band = 25–35
```

This numerical target applies to surface/rendering treatment only. It does not reduce requirements for anatomy, joints, weight/balance, contact, perspective, exact identity/body ratios, object continuity or world continuity.

If an older document uses broad wording such as `semireal`, Stage 07.5 production interprets it through current GIR-SURFACE-30. Do not use older wording to raise surface realism above 35.

Authoritative style sources:

- `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
- `src/experience/production/stage075StyleAnchor.ts`
- `src/experience/production/stage075VisualProductionPolicy.ts`

---

# 2. Read in this order before producing any raster

1. `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
2. `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
3. `docs/07B_GIR_SURFACE_30_AMENDMENT.md`
4. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
5. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
6. `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
7. `handoff/STAGE07_5_FUNCTIONAL_ANATOMY_AND_STYLIZED_PROPORTION_POLICY.md`
8. `handoff/STAGE07_5_SERIAL_ANCHOR_PRODUCTION_QUEUE.md`
9. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
10. `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
11. `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
12. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
13. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
14. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
15. `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`
16. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`

Historical uncertainty:

- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

---

# 3. Machine-readable sources

Style / GIR-30:

- `src/experience/production/stage075StyleAnchor.ts`
- `src/experience/production/stage075VisualProductionPolicy.ts`

Serial queue / lineage:

- `src/experience/production/stage075AnchorReviewBundle.ts`
- `src/experience/production/stage075HumanMidProductionJob.ts`
- `src/experience/production/stage075HumanMidCandidateReviews.ts`
- `src/experience/production/stage075FirstPersonHandProductionJob.ts`
- `src/experience/production/stage075FirstPersonHandCandidateReviews.ts`

Raster integrity:

- `scripts/verify-stage075-raster-integrity.mjs`
- `.github/workflows/ci.yml`

Other anchors/contracts:

- `src/experience/production/stage075VisualContinuityRegistry.ts`
- `src/experience/production/stage075AnatomyRegistry.ts`
- `src/experience/production/stage075RasterManifest.ts`
- `src/experience/production/Stage075RasterMedia.tsx`

---

# 4. Current exact production truth

```text
GIR-SURFACE-30                     SPEC LOCKED
STYLE-GIR-V1                       reference-pending
STYLE approved slots               0 / 5
human-mid r05                      SUPERSEDED / REGISTRATION INVALID
human-mid r06                      ACTIVE / NEXT
first-person-hand r01              REJECTED
first-person-hand r02              BLOCKED-UPSTREAM
world                              BLOCKED
material                           BLOCKED
responsive-pair                    BLOCKED
Approved STYLE reference paths     0
Approved scene raster assets       0
Human Gate                         FAIL
Stage 08                           BLOCKED
```

Current single production target:

# **`STYLE-GIR-V1 / human-mid r06`**

There is currently no valid approved human style parent.

---

# 5. human-mid calibration history

```text
r01 = rejected / historical restraint
r02 = rejected / SID-PHOTO + SID-LENS + SID-EDGE
r03 = superseded / old-policy approval too realistic under GIR-30; old canonical payload also invalid WebP
r04 = rejected / SID-CARTOON + SID-FANTASY
r05 = superseded / prior visual review passed, canonical raster registration invalid
r06 = ACTIVE / NEXT
```

The previous r05 visual-review notes remain useful historical evidence for the intended GIR-30 treatment. They do not make its non-WebP repository payload a valid image-conditioning parent.

The invalid canonical payload was removed from:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

That path may be reused only after a new approved and raster-valid human reference is produced.

---

# 6. Raster integrity as a separate approval axis

Visual approval and binary validity are independent mandatory checks.

```text
visual / anatomy / history review PASS
+ owner approval
+ canonical raster integrity PASS
+ exact approved path registration
= serial slot approval can unlock the next slot
```

CI verifies committed Stage 07.5 WebP containers with:

```text
node scripts/verify-stage075-raster-integrity.mjs
```

A `.webp` extension or lifecycle record alone does not prove a usable image exists.

---

# 7. Approval dependency graph

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
→ owner approve
→ verify canonical raster
→ approve/register current-policy reference
→ exactly one next slot
```

---

# 8. STYLE-GIR-V1 serial calibration

```text
human-mid r06            ACTIVE / NEXT / independent-exploration
→ first-person-hand r02  BLOCKED-UPSTREAM / anchor-conditioned
→ world                  BLOCKED / anchor-conditioned
→ material               BLOCKED / anchor-conditioned
→ responsive-pair        BLOCKED / locked-keyframe + crop-first
```

Later STYLE slots must use actual approved prior GIR-30 raster references. The packet is not five unrelated explorations.

---

# 9. Anchor / anatomy lock order

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
10. supporting prop/world/contact anchors
```

Every later family inherits GIR-SURFACE-30.

---

# 10. What counts as consistency

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

GIR-30 intentionally reduces P3 surface microdetail. It does not weaken P0/P1/P2.

---

# 11. Canonical body rule

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

# 12. Derivation / camera / state law

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

# 13. Drift families

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
SID-FANTASY
```

Binary/integrity failure:

```text
ASSET-BINARY-INVALID
```

Anatomy/contact failures remain independent hard gates:

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

GEO-CONTACT-DEPTH
GEO-CONTACT-POINT
GEO-CONTACT-TOPOLOGY
GEO-OBJECT-SCALE
GEO-LIMB-SCALE
GEO-CAMERA
GEO-CROP
GEO-TEMPORAL
```

A candidate can fail `SID-PHOTO` even when anatomy is excellent. GIR-30 illustration never excuses unresolved `ANAT-*` or `GEO-*`.

---

# 14. Immediate next production gate

The next gate is not a final scene raster and not a hand candidate.

# **`STYLE-GIR-V1 / human-mid r06`**

Produce exactly one candidate at a time. Review anatomy/GIR-30/extraction/history, require owner approval, verify the actual canonical WebP bytes, and only then register or revise.

`first-person-hand r02` remains blocked until the resulting approved human reference exists as a real raster at:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```
