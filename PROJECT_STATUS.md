# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Visual Anatomy Reference Lock**

Long-term baseline:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

Latest exact repository HEAD / PR / Actions state is always determined from GitHub.

---

# 1. Current exact production truth

# **GIR-SURFACE-30 Locked / STYLE-GIR-V1 0/5 / human-mid r06 ACTIVE / first-person-hand r02 UPSTREAM BLOCKED / Human Gate FAIL / Stage 08 BLOCKED**

```text
STYLE-GIR-V1                     reference-pending
Surface policy                   GIR-SURFACE-30
Surface realism target           30 / 100
Surface acceptance band          25–35
STYLE approved slots             0 / 5
STYLE-GIR-V1 / human-mid r05     SUPERSEDED / REGISTRATION INVALID
STYLE-GIR-V1 / human-mid r06     ACTIVE / NEXT
STYLE-GIR-V1 / first-person-hand r02 BLOCKED-UPSTREAM
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

There is currently **no valid canonical STYLE raster parent** in `public/assets/stage075/anchors/STYLE-GIR-V1/`.

---

# 2. Raster integrity correction — 2026-09-09

The previously registered `human-mid r05` repository payload was revalidated before starting `first-person-hand r02`.

Findings:

- the Git blob matched the repository SHA and size, so the retrieved payload was not a download/copy mismatch;
- the payload did not contain a valid WebP `RIFF....WEBP` container signature and was not a decodable WebP image;
- the superseded r03 canonical payload showed the same non-WebP registration defect;
- the prior integration tests validated lifecycle/path metadata but did not validate raster container bytes.

Therefore r05 cannot be used as the actual style-conditioning parent required by the Stage 07.5 generation protocol.

Corrective state:

```text
r05 visual review history         preserved
r05 canonical registration        INVALIDATED
r05 approved path                 REMOVED
next human candidate              r06
first-person-hand r02             BLOCKED until valid human parent exists
STYLE progress                    0 / 5
```

CI now runs:

```text
node scripts/verify-stage075-raster-integrity.mjs
```

Every committed `.webp` under `public/assets/stage075/anchors/` must have a coherent WebP RIFF container before Typecheck/Test/Production build can pass.

---

# 3. GIR-SURFACE-30 visual target

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

Physical structure remains strict: digit/joint count, wrist/ankle articulation, weight, center of mass, contact pressure/occlusion, perspective, light and post-lock continuity.

Surface rendering remains intentionally simplified: no pore fields, dense veins/body hair, nail/cuticle macro detail, individual hair-strand fields, garment fiber/stitch fields, exhaustive rock/soil microtexture, bokeh or cinematic lens language.

---

# 4. Human-mid candidate history

```text
r01 = REJECTED / historical restraint
r02 = REJECTED / SID-PHOTO + SID-LENS + SID-EDGE
r03 = SUPERSEDED / too realistic for GIR-SURFACE-30; old canonical payload also invalid WebP
r04 = REJECTED / SID-CARTOON + SID-FANTASY
r05 = SUPERSEDED / prior visual review passed, canonical raster registration invalid
r06 = ACTIVE / NEXT
```

r06 remains an anonymous style-only human reference. It must not define Aru/Damu/Nua identity, Player identity, DAY1-HANDAXE-V1 morphology, canonical Day 1 geography, or unsupported historical certainty.

A candidate cannot unlock the next slot until all of the following are true:

1. visual review checks pass;
2. owner decision is approved;
3. unresolved drift codes are empty;
4. the final canonical file is an actual valid WebP raster;
5. the review bundle records the exact canonical approved path.

---

# 5. First-person-hand r02 status

`first-person-hand r02` remains the next queued hand revision, but it is **not currently producible**.

Reason:

```text
required style parent = STYLE-GIR-V1 / human-mid approved raster
current valid parent  = none
status                = blocked-upstream
```

When human-mid is validly re-approved, r02 must use that actual raster as its style parent and preserve five-finger anatomy, wrist continuity, forearm taper and stone contact while avoiding photo-macro skin/nail/rock detail.

It still must not define Player identity, DAY1-HANDAXE-V1 morphology, named-character identity or canonical Day 1 geography.

---

# 6. Serial production queue

One global production slot at a time.

```text
human-mid r06           ACTIVE / NEXT
→ first-person-hand r02 BLOCKED-UPSTREAM
→ world                 BLOCKED
→ material              BLOCKED
→ responsive-pair       BLOCKED
```

Only after STYLE-GIR-V1 reaches 5/5:

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

Canonical derivation law remains:

# **Do not regenerate what can be derived from an approved master.**

---

# 7. Gate status

CI PASS is not Human Gate PASS.

Current gate truth remains:

```text
Human Gate = FAIL
Stage 08   = BLOCKED
```

No code or document change in the raster-integrity repair automatically promotes Human Gate or Stage 08.
