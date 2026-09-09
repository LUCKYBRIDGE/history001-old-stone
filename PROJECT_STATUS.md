# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Visual Anatomy Reference Lock**

Long-term baseline:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

Latest exact repository HEAD / PR / Actions state is always determined from GitHub.

---

# 1. Current exact production truth

# **Social Runtime Integrated / Scene Composition v2.1 Approved / GIR-SURFACE-30 Locked / STYLE-GIR-V1 1/5 / human-mid r05 APPROVED / first-person-hand r02 ACTIVE / Human Gate FAIL / Stage 08 BLOCKED**

```text
STYLE-GIR-V1                     reference-pending
Surface policy                   GIR-SURFACE-30
Surface realism target           30 / 100
Surface acceptance band          25–35
STYLE approved slots             1 / 5
STYLE-GIR-V1 / human-mid r05     APPROVED / REGISTERED
STYLE-GIR-V1 / first-person-hand r02 ACTIVE / NEXT
STYLE-GIR-V1 / world             BLOCKED
STYLE-GIR-V1 / material          BLOCKED
STYLE-GIR-V1 / responsive-pair   BLOCKED
Approved STYLE reference paths   1
Approved scene raster assets     0
Human Gate                       FAIL
Stage 08                         BLOCKED
```

Canonical approved style reference:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Current machine-readable global production target:

# **`STYLE-GIR-V1 / first-person-hand`**

---

# 2. GIR-SURFACE-30 — exact visual target

`30/100` is **surface/rendering realism**, not anatomy correctness.

```text
0    very simple graphic/cartoon
15   strongly simplified animation-like treatment
30   grounded structural illustration  ← TARGET
45   semireal illustration
60   realistic illustration
80   game/cinematic realism
100  photograph
```

Acceptance:

```text
25–35 = acceptable surface band
```

Core formula:

```text
functional believable anatomy / weight / perspective / contact
+
GIR-30 simplified large planes / grouped texture / clean silhouette
-
photographic micro-detail / material macro-detail / lens language
```

Must remain physically strong:

- correct digit/joint structure,
- believable wrist/ankle/limb articulation,
- weight and center of mass,
- reach/contact pressure/occlusion,
- coherent perspective/light,
- exact identity/body/object/world continuity after lock.

Must remain visually simplified:

- skin pores/fine grain,
- dense veins/body hair,
- nail/cuticle/specular macro detail,
- individual hair-strand fields,
- garment fibers/stitch fields,
- exhaustive rock/soil crack/grain,
- leaf-by-leaf / pebble-by-pebble noise,
- photographic shallow DOF / bokeh / lens effects.

---

# 3. human-mid production result

Candidate history:

```text
r01 = REJECTED / historical restraint
r02 = REJECTED / SID-PHOTO + SID-LENS + SID-EDGE
r03 = SUPERSEDED / old-policy approval, too realistic for GIR-SURFACE-30
r04 = REJECTED / SID-CARTOON + SID-FANTASY
r05 = APPROVED / REGISTERED / GIR-SURFACE-30
```

r05 review:

```text
technicalCleanliness = PASS
structuralAnatomy = PASS
styleBoundary = PASS
extractionViability = PASS
historicalRestraint = PASS
driftCodes = []
```

What r05 locks:

- human surface/detail tier near 30/100,
- broad skin/value planes,
- grouped hair masses,
- broad garment folds/material zones,
- clean readable subject edge,
- functional anatomy and weight.

What r05 does **not** lock:

- Aru/Damu/Nua identity,
- Player identity,
- handaxe morphology,
- canonical Day 1 geography,
- exact historical ethnicity/species/costume certainty.

The approved source was deterministically cropped before WebP registration. Crop did not regenerate pixels or alter anatomy.

---

# 4. Current production job — first-person-hand r02

Machine-readable:

- `src/experience/production/stage075FirstPersonHandProductionJob.ts`
- `src/experience/production/stage075FirstPersonHandCandidateReviews.ts`

Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md`

Required style parent:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Target:

```text
anonymous first-person hand
+ wrist
+ enough forearm to judge continuity
+ rough non-diagnostic stone contact
+ GIR-SURFACE-30 surface/detail language
```

r01 remains rejected:

```text
handAnatomy = PASS
contactReadability = PASS
styleBoundary = FAIL
SID-PHOTO
SID-LENS
SID-DETAIL
```

r02 must preserve five-finger anatomy, wrist continuity and contact pressure while simplifying pores, veins, arm hair, nail detail, rock microtexture and cinematic depth cues.

It must not define:

- `PLAYER-HUNT-BODY-V1`
- `DAY1-HANDAXE-V1`
- named-character identity
- canonical Day 1 geography

---

# 5. Visual continuity law

Final Player-facing visual:

# **raster-first Hybrid Embodied Composite + Anchor-conditioned Continuity + Anatomy-locked Master Derivation**

Continuity priority:

```text
P0 hero + Player identity           = HARD LOCK
P1 contact + recurring hero object = HARD LOCK
P2 world structure + world light   = STRONG LOCK
P3 flyaway/fold/pebble/grass/smoke = harmless variation allowed
```

Governing laws:

# **Do not regenerate what can be derived from an approved master.**

# **Physical plausibility and GIR-30 surface realism are separate axes.**

# **Choose canonical proportions freely before approval; inherit them exactly after approval.**

Same character means the same underlying canonical ratios. Perspective, foreshortening, pose, FOV and crop may alter apparent screen-space ratio but never the underlying body design.

---

# 6. Master / camera / state derivation

```text
same moment + same camera direction
→ crop / zoom / pan from same master

coverage/resolution insufficient
→ controlled outpaint / upscale from same master

camera direction materially changes
→ Angle Master from same world/topology/landmark/light references

actual action/world/body state changes
→ State Master derivative

contact-heavy interlocked state
→ Unified Contact derivative if separate layers break topology
```

L / TP / PP are the same event/people/world unless the scene contract explicitly says otherwise.

---

# 7. Serial anchor production queue

One global production slot at a time.

Current STYLE order:

```text
human-mid r05           APPROVED / REGISTERED
→ first-person-hand r02 ACTIVE / NEXT
→ world                 BLOCKED
→ material              BLOCKED
→ responsive-pair       BLOCKED
```

Later STYLE slots inherit the accepted GIR-30 style boundary:

```text
human-mid          independent exploration
first-person-hand  anchor-conditioned
world              anchor-conditioned
material           anchor-conditioned
responsive-pair    locked-keyframe variation / crop-first
```

Do not start `DAY1-HANDAXE-V1` before STYLE-GIR-V1 reaches current-policy 5/5.

Long-term order:

```text
0. STYLE-GIR-V1
1. DAY1-HANDAXE-V1 morphology + metric/normalized scale
2. PLAYER-HUNT-BODY-V1 structural scaffold + canonical body + derivatives
3. PLAYER-HUNT-BODY-PROP-V1 exact measured contract
4. ARU-IDENTITY-V1 structural scaffold + canonical identity + derivatives
5. ARU-PROP-V1 exact measured contract
6. SC02-HANDOFF-GEO-V1
7. SC02 unified-contact state master + crop-first L/TP/PP proof
8. DAMU-IDENTITY-V1 + DAMU-PROP-V1
9. NUA-IDENTITY-V1 + NUA-PROP-V1
10. world / landmark / supporting-contact anchors
```

---

# 8. Object / Player / character lineage

## DAY1-HANDAXE-V1

```text
face-a canonical morphology seed
→ face-b derivative
→ side/thickness derivative
→ metric/normalized scale
```

## PLAYER-HUNT-BODY-V1

```text
structural-scaffold
→ canonical-body
→ hands / forearms / feet / ankles / action derivatives
```

Every visible Player hand/arm/foot/ankle inherits one exact body fingerprint.

## ARU-IDENTITY-V1

```text
structural-scaffold
→ one canonical full-body identity master
→ turnaround derivatives
→ action/contact derivatives
→ measured exact proportion contract
```

Independent multi-view generations are not a valid identity packet. All later assets inherit GIR-SURFACE-30.

---

# 9. Contact geometry

SC02 topology:

```text
Aru hand
→ same DAY1-HANDAXE-V1
→ Player right hand
```

Offer → Shared Contact → Release is one continuous transfer family.

Major reject families:

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

GIR-30 simplification never excuses unresolved `ANAT-*` or `GEO-*` on hero/contact assets.

---

# 10. Runtime gate

Required:

```text
STYLE-GIR-V1 anchor-approved under GIR-SURFACE-30 (5/5)
+
required character/body/world/object anchors approved
+
required anatomy/proportion contracts approved
+
required contact geometry approved where applicable
+
actual approved master/reference paths registered
+
scene raster approved
+
responsive sources registered
↓
runtime render
```

Current STYLE-GIR-V1 = **1/5**, so final scene rasters remain blocked.

---

# 11. Primary references

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. `handoff/NEXT_SESSION_START_HERE.md`
7. `handoff/STAGE07_5_VISUAL_CONTINUITY_INDEX.md`
8. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
9. `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
10. `handoff/STAGE07_5_FUNCTIONAL_ANATOMY_AND_STYLIZED_PROPORTION_POLICY.md`
11. `handoff/STAGE07_5_SERIAL_ANCHOR_PRODUCTION_QUEUE.md`
12. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
13. `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
14. `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
15. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
16. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
17. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
18. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
19. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
20. `handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md`

Technical conflicts are resolved by `docs/06_TECH_BLUEPRINT.md`.

---

# 12. Dev review truth

```text
?anchors=1   Visual Anchor Review Board
?previsual=1 Scene Previsual Harness
?raster=1    Raster Integration Slots
```

`?anchors=1` must currently show:

```text
GIR-SURFACE-30 target = 30/100
acceptance = 25–35
STYLE-GIR-V1 progress = 1/5
human-mid = approved reference
first-person-hand = NEXT production target
world = blocked by first-person-hand
```

---

# 13. Current Gate

```text
Scene Composition Design                  PASS
Project-owner Scene Confirmation          PASS
Responsive Raster Contract                READY
Visual Identity/Layering Policy           SPEC LOCKED
Functional Anatomy Policy                 SPEC LOCKED
Exact Canonical Ratio Inheritance         SPEC LOCKED
GIR-SURFACE-30                            SPEC LOCKED
Serial Anchor Production Queue            ENFORCED
Visual Anchor Review Board                INTEGRATED
STYLE-GIR-V1                              REFERENCE PENDING (1/5)
STYLE-GIR-V1 / human-mid r05              APPROVED / REGISTERED
Current Single Production Target          STYLE-GIR-V1 / first-person-hand r02
Character/Player Anchors                  REFERENCE PENDING
Anatomy Contracts                         REFERENCE PENDING
Contact Geometry Contracts                REFERENCE PENDING
World/Object Anchors                      REFERENCE PENDING
Approved Scene Raster Assets              0
Human Gate                                FAIL
Stage 08                                  BLOCKED
```

Next visual-production action is **one GIR-SURFACE-30 first-person-hand r02 candidate conditioned by the approved human-mid r05 reference**.
