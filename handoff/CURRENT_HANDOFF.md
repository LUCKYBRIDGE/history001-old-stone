# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Visual Anatomy Reference Lock**

Baseline:

- `docs/00_CANONICAL_BASELINE.md`

Technical SSOT:

- `docs/06_TECH_BLUEPRINT.md`

Latest exact repository HEAD and CI are always determined from GitHub.

---

# 1. Current exact state

```text
Scene Composition v2.1                APPROVED
Serial anchor queue                   ENFORCED
STYLE-GIR-V1                          reference-pending
Surface policy                        GIR-SURFACE-30
Surface target                        30 / 100
Acceptance band                       25–35
STYLE approved slots                  0 / 5
human-mid r03                         SUPERSEDED old-policy approval
human-mid r04                         ACTIVE / NEXT
first-person-hand r01                 REJECTED
first-person-hand r02                 BLOCKED UPSTREAM
world                                 BLOCKED
material                              BLOCKED
responsive-pair                       BLOCKED
Approved STYLE reference paths        0
Approved scene raster assets          0
Human Gate                            FAIL
Stage 08                              BLOCKED
```

Current single global production target:

# **`STYLE-GIR-V1 / human-mid` — revision r04**

There is currently no approved `human-mid.webp` canonical reference. The former r03 file was removed from the approved path after policy recalibration.

---

# 2. New visual law — GIR-SURFACE-30

The Project-owner selected approximately **30/100 surface/rendering realism**.

```text
0    very simple graphic/cartoon
15   strongly simplified animation-like
30   grounded structural illustration  ← target
45   semireal
60   realistic illustration
80   game/cinematic realism
100  photograph
```

Acceptance band:

```text
25–35
```

Critical distinction:

# **30 applies to surface/rendering, not anatomy/contact correctness.**

Keep strong:

- joints/digit count
- body mechanics
- weight/balance
- contact pressure/depth
- perspective
- exact canonical identity/proportions after lock
- object/world continuity

Simplify strongly:

- pores/fine skin grain
- veins/body hair
- nail/cuticle reflections
- individual hair strands
- fiber/stitch fields
- rock/soil micro-cracks and grain
- leaf/pebble photo-density
- bokeh/shallow photographic DOF/lens effects

At normal viewing distance the image must immediately read as **an illustration**.

---

# 3. r03 supersession truth

Do not erase history:

```text
r01 = rejected / historical restraint
r02 = rejected / SID-PHOTO + SID-LENS + SID-EDGE
r03 = approved under old qualitative policy
```

Under GIR-SURFACE-30, r03 was re-reviewed:

```text
technicalCleanliness = PASS
structuralAnatomy = PASS
styleBoundary = FAIL
extractionViability = PASS
historicalRestraint = PASS
current drift = SID-PHOTO + SID-DETAIL
current decision = SUPERSEDED
```

Actions already taken:

```text
old approval history retained
old human-mid canonical path registration removed
old human-mid.webp removed from approved asset path
STYLE progress reset 1/5 → 0/5
human-mid r04 reopened
first-person-hand r02 blocked upstream
```

Do not supply r03 as a current style parent.

---

# 4. Current active job — human-mid r04

Read:

- `handoff/STAGE07_5_STYLE_GIR_V1_HUMAN_MID_JOB_CARD.md`
- `src/experience/production/stage075HumanMidProductionJob.ts`
- `src/experience/production/stage075HumanMidCandidateReviews.ts`

Objective:

```text
anonymous fictional community member
+ medium shot
+ functional believable anatomy
+ surface realism around 30/100
+ broad skin planes
+ hair mass/silhouette
+ broad low-specificity garment folds
+ clean subject edge
+ low-information contextual natural background
```

Must not define:

- Aru/Damu/Nua identity
- Player identity
- handaxe morphology
- canonical Day 1 geography
- exact historical ethnicity/species/costume certainty

---

# 5. first-person-hand is not active

r01 was rejected because anatomy/contact were generally sound but visual treatment repeatedly became photographic:

```text
SID-PHOTO
SID-LENS
SID-DETAIL
```

r02 is reserved but:

# **BLOCKED BY `STYLE-GIR-V1 / human-mid`**

Do not generate r02 until a current-policy GIR-30 human-mid reference is approved and registered.

When later unlocked, the hand must preserve functional anatomy/contact while using the same GIR-30 surface tier.

---

# 6. Identity / anatomy law

Continuity priority:

```text
P0 hero + Player identity           = HARD LOCK
P1 contact + recurring hero object = HARD LOCK
P2 world structure + world light   = STRONG LOCK
P3 flyaway/fold/pebble/grass/smoke = harmless variation allowed
```

Canonical proportion law:

# **Before approval, proportion design is flexible. After approval, exact canonical ratios are inherited.**

Example:

```text
canonical body = 7.2 heads
→ all views/poses retain the same underlying 7.2 body
```

Perspective, foreshortening, pose, FOV and crop may change apparent screen-space proportion. They do not authorize a 6.8/7.5 redesign.

Surface simplification under GIR-30 never authorizes broken anatomy.

---

# 7. Derivation law

# **Do not regenerate what can be derived from an approved master.**

```text
same moment + same camera direction
→ crop / zoom / pan

coverage insufficient
→ controlled outpaint / upscale

materially different camera direction
→ Angle Master from same World Master/topology/light

actual state changes
→ State Master derivative

contact-heavy interlocked state
→ Unified Contact derivative if needed
```

---

# 8. STYLE queue

```text
human-mid r04           ACTIVE / NEXT / independent exploration
→ first-person-hand r02 BLOCKED / anchor-conditioned after unlock
→ world                 BLOCKED / anchor-conditioned
→ material              BLOCKED / anchor-conditioned
→ responsive-pair       BLOCKED / locked-keyframe + crop-first
```

STYLE-GIR-V1 must reach 5/5 under GIR-SURFACE-30 before downstream anchor production begins.

---

# 9. Later anchor lineage — do not start yet

```text
DAY1-HANDAXE-V1
face-a canonical seed
→ face-b
→ side/thickness
→ metric/normalized scale
```

```text
PLAYER-HUNT-BODY-V1
structural-scaffold
→ canonical-body
→ hands/arms/feet/ankles/actions
→ measured exact proportion contract
```

```text
ARU-IDENTITY-V1
structural-scaffold
→ canonical-identity
→ turnaround/action derivatives
→ measured exact proportion contract
```

Do not independently generate multiple views and select the most similar outputs.

All later visuals inherit GIR-SURFACE-30.

---

# 10. Mandatory reading order

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

# 11. Dev review surfaces

```text
?anchors=1
?previsual=1
?raster=1
```

`?anchors=1` must show:

```text
GIR-SURFACE-30 = target 30/100 / acceptance 25–35
STYLE-GIR-V1 = 0/5
human-mid = NEXT production target
first-person-hand = blocked by human-mid
```

---

# 12. Immediate next action

No downstream hand/world/handaxe/character work is valid yet.

When visual production is explicitly requested, the next action is:

# **Produce exactly one `STYLE-GIR-V1 / human-mid r04` candidate under GIR-SURFACE-30 → review → reject/revise or approve/register.**
