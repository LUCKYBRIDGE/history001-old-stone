# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Visual Anatomy Reference Lock**

Long-term baseline:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

Latest exact repository HEAD / PR / Actions state is always determined from GitHub.

---

# 1. Current exact production truth

# **Social Runtime Integrated / Automated PASS / Scene Composition v2.1 Approved / GIR-SURFACE-30 Locked / STYLE-GIR-V1 Recalibration 0/5 / human-mid r04 ACTIVE / Human Gate FAIL / Stage 08 BLOCKED**

```text
STYLE-GIR-V1                     reference-pending
Surface policy                   GIR-SURFACE-30
Surface realism target           30 / 100
Surface acceptance band          25–35
STYLE approved slots             0 / 5
STYLE-GIR-V1 / human-mid r04     ACTIVE / NEXT
STYLE-GIR-V1 / first-person-hand r02 BLOCKED UPSTREAM
STYLE-GIR-V1 / world             BLOCKED
STYLE-GIR-V1 / material          BLOCKED
STYLE-GIR-V1 / responsive-pair   BLOCKED
Approved STYLE reference paths   0
Approved scene raster assets     0
Human Gate                       FAIL
Stage 08                         BLOCKED
```

Current machine-readable global production target:

# **`STYLE-GIR-V1 / human-mid`**

The former canonical file:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

was removed from the current approved path after the style-policy recalibration. Do not use the old r03 binary as a downstream style parent.

---

# 2. GIR-SURFACE-30 — exact visual target

`30/100` is **surface/rendering realism**, not anatomy correctness.

Project scale:

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

## Must remain physically strong

- correct digit/joint structure
- believable wrist/ankle/limb articulation
- weight and center of mass
- reach/contact pressure/occlusion
- coherent perspective
- coherent light direction
- exact identity/body/object/world continuity after lock

## Must be visually simplified

- skin pores and fine skin grain
- dense veins/body hair
- nail/cuticle/specular macro detail
- individual hair strand fields
- garment fibers/stitch fields
- exhaustive rock/soil cracks and grain
- leaf-by-leaf / pebble-by-pebble background texture
- photographic shallow DOF / bokeh / lens effects

At normal viewing distance, the image must read immediately as **an illustration**, not a game cinematic or photograph.

---

# 3. Why human-mid r03 is no longer approved

Historical truth is preserved:

```text
r01 = rejected / historical restraint
r02 = rejected / SID-PHOTO + SID-LENS + SID-EDGE
r03 = approved under the former qualitative STYLE-GIR boundary
```

After the Project-owner fixed the intended surface level at GIR-SURFACE-30, r03 was re-evaluated:

```text
technicalCleanliness = PASS
structuralAnatomy = PASS
styleBoundary = FAIL under GIR-SURFACE-30
extractionViability = PASS
historicalRestraint = PASS
current drift = SID-PHOTO + SID-DETAIL
current decision = SUPERSEDED
```

This is **not an anatomy failure**. r03 carries too much semireal surface information for the new 25–35 band.

Therefore:

```text
old r03 historical approval retained in review ledger
→ current canonical approval revoked by policy supersession
→ old approved binary removed from canonical path
→ STYLE progress reset 1/5 → 0/5
→ human-mid r04 reopened
→ first-person-hand r02 blocked until r04 replacement is approved
```

---

# 4. Current production job — human-mid r04

Machine-readable:

- `src/experience/production/stage075HumanMidProductionJob.ts`
- `src/experience/production/stage075HumanMidCandidateReviews.ts`

Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_HUMAN_MID_JOB_CARD.md`

Required target:

```text
anonymous fictional community member
+ medium shot
+ functional anatomy
+ surface realism near 30/100
+ face structure before microtexture
+ grouped hair mass/silhouette
+ broad low-specificity garment folds
+ clean extraction-friendly subject edge
+ low-information contextual natural background
```

Do not define:

- `ARU-IDENTITY-V1`
- `DAMU-IDENTITY-V1`
- `NUA-IDENTITY-V1`
- `PLAYER-HUNT-BODY-V1`
- `DAY1-HANDAXE-V1`
- `WORLD-CAMP-DAWN-A`
- exact ethnicity/species/costume certainty

Only after r04 or a later human-mid revision passes GIR-30 review, owner approval, and canonical registration may the queue move forward.

---

# 5. first-person-hand status

r01 remains rejected:

```text
technicalCleanliness = PASS
handAnatomy = PASS
contactReadability = PASS
extractionViability = PASS
historicalRestraint = PASS
styleBoundary = FAIL
SID-PHOTO
SID-LENS
SID-DETAIL
```

r02 revision number is reserved but currently:

# **BLOCKED UPSTREAM**

because there is no approved current-policy `human-mid` style parent.

After unlock, r02 must use the new GIR-30 human reference and preserve hand anatomy/contact while strongly simplifying pores, veins, arm hair, nail detail, rock microtexture, and cinematic depth effects.

---

# 6. Visual continuity law

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

Same character means the same underlying canonical ratios.

Example:

```text
canonical body = 7.2 heads
→ front / side / back / seated / walk / handoff = same underlying 7.2 body
```

Forbidden:

```text
7.2 canonical body
→ derivative underlying body redesigned as 6.8 or 7.5
```

Allowed apparent variation:

- perspective
- foreshortening
- pose
- camera distance/FOV
- crop

These may change screen-space appearance, never the underlying body design.

---

# 7. Master / camera / state derivation

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

# 8. Serial anchor production queue

One global production slot at a time.

Current STYLE order:

```text
human-mid r04          ACTIVE / NEXT
→ first-person-hand r02 BLOCKED UPSTREAM
→ world                BLOCKED
→ material             BLOCKED
→ responsive-pair      BLOCKED
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

# 9. Object / Player / character lineage

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

Independent multi-view generations are not a valid identity packet.

All of these later assets also inherit GIR-SURFACE-30.

---

# 10. Contact geometry

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

# 11. Runtime gate

A scene raster is not runtime-ready merely because its own image looks acceptable.

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

Current STYLE-GIR-V1 = **0/5**, so runtime remains blocked from final scene rasters.

---

# 12. Primary references

Start with:

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
20. `handoff/STAGE07_5_STYLE_GIR_V1_HUMAN_MID_JOB_CARD.md`

Technical conflicts are resolved by `docs/06_TECH_BLUEPRINT.md`.

---

# 13. Dev review truth

```text
?anchors=1   Visual Anchor Review Board
?previsual=1 Scene Previsual Harness
?raster=1    Raster Integration Slots
```

`?anchors=1` must currently show:

```text
GIR-SURFACE-30 target = 30/100
acceptance = 25–35
STYLE-GIR-V1 progress = 0/5
human-mid = NEXT production target
first-person-hand = blocked by human-mid
```

---

# 14. Current Gate

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
STYLE-GIR-V1                              REFERENCE PENDING (0/5)
STYLE-GIR-V1 / human-mid r03              SUPERSEDED
Current Single Production Target          STYLE-GIR-V1 / human-mid r04
STYLE-GIR-V1 / first-person-hand r02      BLOCKED UPSTREAM
Character/Player Anchors                  REFERENCE PENDING
Anatomy Contracts                         REFERENCE PENDING
Contact Geometry Contracts                REFERENCE PENDING
World/Object Anchors                      REFERENCE PENDING
Approved Scene Raster Assets              0
Human Gate                                FAIL
Stage 08                                  BLOCKED
```

The next visual-production action, when image production is explicitly requested, is **one GIR-SURFACE-30 human-mid r04 candidate**, not a hand image and not a downstream anchor.
