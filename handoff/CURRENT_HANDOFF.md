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
human-mid r05                         SUPERSEDED / REGISTRATION INVALID
human-mid r06                         ACTIVE / NEXT
first-person-hand r01                 REJECTED
first-person-hand r02                 BLOCKED-UPSTREAM
world                                 BLOCKED
material                              BLOCKED
responsive-pair                       BLOCKED
Approved STYLE reference paths        0
Approved scene raster assets          0
Human Gate                            FAIL
Stage 08                              BLOCKED
```

Current single global production target:

# **`STYLE-GIR-V1 / human-mid` — revision r06**

There is currently no valid approved human style parent.

---

# 2. Why the queue moved back to human-mid

Before starting `first-person-hand r02`, the repository binary registered as:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

was revalidated against the actual Git blob.

The blob was the exact repository payload, but it was not a WebP container and could not serve as an actual image reference. The earlier r03 canonical payload showed the same registration defect.

Therefore:

- r05 visual-review history is retained;
- r05 canonical registration is invalidated;
- the invalid canonical payload is removed;
- r06 becomes the next human candidate;
- `first-person-hand r02` is upstream-blocked until a real approved WebP parent exists.

CI now executes `scripts/verify-stage075-raster-integrity.mjs` before Typecheck/Test/Production build.

---

# 3. GIR-SURFACE-30 visual law

Surface/rendering target is **30/100**, accepted at **25–35**.

This does not relax anatomy/contact correctness.

Keep strong:

- digit/joint structure;
- wrist/limb articulation;
- weight/balance;
- contact pressure/depth/occlusion;
- perspective;
- exact canonical identity/proportions after lock;
- object/world continuity.

Simplify strongly:

- pores/fine skin grain;
- veins/body hair;
- nail/cuticle reflections;
- individual hair strands;
- fiber/stitch fields;
- rock/soil micro-cracks and grain;
- leaf/pebble photo-density;
- photographic shallow DOF, bokeh and lens effects.

At normal viewing distance the image must immediately read as an illustration.

---

# 4. Human-mid production truth

```text
r01 = rejected / historical restraint
r02 = rejected / SID-PHOTO + SID-LENS + SID-EDGE
r03 = superseded / too realistic for GIR-30; old canonical payload also invalid WebP
r04 = rejected / SID-CARTOON + SID-FANTASY
r05 = superseded / prior visual review passed, raster registration invalid
r06 = ACTIVE / NEXT
```

r06 remains an anonymous style-only human reference and must not define Aru/Damu/Nua/Player identity, DAY1-HANDAXE-V1, canonical Day 1 geography, or unsupported archaeological certainty.

Do not register r06 until the final canonical file is a real valid WebP and all visual/owner review gates pass.

---

# 5. First-person-hand r02

The hand revision remains queued but may not be produced now.

```text
status                 blocked-upstream
required parent        approved STYLE-GIR-V1 / human-mid raster
current parent         none
candidate revision     r02
```

Once human-mid is validly approved again, r02 must use that actual raster as the style parent and preserve five-finger anatomy, wrist continuity, forearm taper and natural-stone contact while simplifying skin/nail/stone microdetail.

It must not define Player identity, DAY1-HANDAXE-V1 morphology, named-character identity or canonical Day 1 geography.

---

# 6. Derivation and continuity law

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

After approval, exact canonical proportions and identity/object/world fingerprints are inherited. Perspective, pose, foreshortening, FOV and crop may change apparent screen-space proportions but not the underlying design.

---

# 7. Serial queue

```text
human-mid r06           ACTIVE / NEXT
→ first-person-hand r02 BLOCKED-UPSTREAM
→ world                 BLOCKED
→ material              BLOCKED
→ responsive-pair       BLOCKED
```

STYLE-GIR-V1 must reach 5/5 before downstream production begins.

Later order remains:

```text
DAY1-HANDAXE-V1
→ PLAYER-HUNT-BODY-V1
→ PLAYER-HUNT-BODY-PROP-V1
→ ARU-IDENTITY-V1
→ ARU-PROP-V1
→ SC02-HANDOFF-GEO-V1
→ SC02 unified-contact master
→ Damu/Nua
→ World anchors
```

---

# 8. Gate status

```text
Human Gate = FAIL
Stage 08   = BLOCKED
```

CI PASS does not promote either gate.
