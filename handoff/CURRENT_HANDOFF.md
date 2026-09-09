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
STYLE approved slots                  1 / 5
human-mid r05                         APPROVED / REGISTERED
first-person-hand r01                 REJECTED
first-person-hand r02                 ACTIVE / NEXT
world                                 BLOCKED
material                              BLOCKED
responsive-pair                       BLOCKED
Approved STYLE reference paths        1
Approved scene raster assets          0
Human Gate                            FAIL
Stage 08                              BLOCKED
```

Current single global production target:

# **`STYLE-GIR-V1 / first-person-hand` — revision r02**

Approved style parent:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

---

# 2. GIR-SURFACE-30 visual law

The selected visible surface/rendering realism is approximately **30/100**, acceptable at **25–35**.

This applies to surface/detail, not anatomy/contact correctness.

Keep strong:

- joints/digit count,
- body mechanics,
- weight/balance,
- contact pressure/depth,
- perspective,
- exact canonical identity/proportions after lock,
- object/world continuity.

Simplify strongly:

- pores/fine skin grain,
- veins/body hair,
- nail/cuticle reflections,
- individual hair strands,
- fiber/stitch fields,
- rock/soil micro-cracks and grain,
- leaf/pebble photo-density,
- bokeh/shallow photographic DOF/lens effects.

At normal viewing distance the image must immediately read as an illustration.

---

# 3. human-mid final truth

```text
r01 = rejected / historical restraint
r02 = rejected / SID-PHOTO + SID-LENS + SID-EDGE
r03 = superseded / old-policy approval, too realistic for GIR-30
r04 = rejected / SID-CARTOON + SID-FANTASY
r05 = APPROVED / REGISTERED
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

The approved r05 is a rendering-tier reference only. It is not Aru/Damu/Nua/Player identity and does not canonize the visible garment as archaeological fact.

---

# 4. Current active job — first-person-hand r02

Read:

- `handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md`
- `src/experience/production/stage075FirstPersonHandProductionJob.ts`
- `src/experience/production/stage075FirstPersonHandCandidateReviews.ts`

Required style parent:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Objective:

```text
anonymous first-person hand
+ wrist
+ enough forearm to judge continuity
+ rough non-diagnostic natural stone contact
+ GIR-SURFACE-30 surface/detail tier
```

r01 failed style only:

```text
handAnatomy = PASS
contactReadability = PASS
styleBoundary = FAIL
SID-PHOTO
SID-LENS
SID-DETAIL
```

r02 must preserve functional anatomy/contact while strongly simplifying pores, veins, body hair, nail macro-detail, rock microtexture and cinematic lens depth.

Must not define:

- Player identity,
- `DAY1-HANDAXE-V1`,
- named character identity,
- canonical Day 1 geography.

---

# 5. Identity / anatomy law

```text
P0 hero + Player identity           = HARD LOCK
P1 contact + recurring hero object = HARD LOCK
P2 world structure + world light   = STRONG LOCK
P3 flyaway/fold/pebble/grass/smoke = harmless variation allowed
```

Before approval, proportion design is flexible. After approval, exact canonical ratios are inherited.

Perspective, foreshortening, pose, FOV and crop may alter apparent screen-space ratio; they do not authorize a new body design.

GIR-30 simplification never authorizes broken anatomy.

---

# 6. Derivation law

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

# 7. STYLE queue

```text
human-mid r05           APPROVED / REGISTERED
→ first-person-hand r02 ACTIVE / NEXT / anchor-conditioned
→ world                 BLOCKED / anchor-conditioned
→ material              BLOCKED / anchor-conditioned
→ responsive-pair       BLOCKED / locked-keyframe + crop-first
```

STYLE-GIR-V1 must reach 5/5 under GIR-SURFACE-30 before downstream handaxe/Player/Aru production begins.

---

# 8. Later anchor lineage — do not start yet

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

Do not independently generate multiple views and select the most similar outputs. All later visuals inherit GIR-SURFACE-30.

---

# 9. Mandatory reading order

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

# 10. Dev review surfaces

```text
?anchors=1
?previsual=1
?raster=1
```

`?anchors=1` must show:

```text
GIR-SURFACE-30 = target 30/100 / acceptance 25–35
STYLE-GIR-V1 = 1/5
human-mid = approved reference
first-person-hand = NEXT production target
world = blocked by first-person-hand
```

---

# 11. Immediate next action

When visual production is requested:

# **Produce exactly one `STYLE-GIR-V1 / first-person-hand r02` candidate using the approved r05 human style reference → review → reject/revise or approve/register.**
