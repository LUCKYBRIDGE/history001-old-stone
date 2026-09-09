# Stage 07.5 — Serial Anchor Production Queue

Status: **MANDATORY PRE-IMAGE PRODUCTION CONTROL / GIR-SURFACE-30 ACTIVE / RASTER-INTEGRITY ENFORCED**

Purpose: ensure upstream visual anchors are produced as controlled lineage rather than batches of loosely similar images.

Machine-readable source:

- `src/experience/production/stage075AnchorReviewBundle.ts`

Dev review surface:

- `?anchors=1`

---

# 1. Governing invariant

# **Only one global anchor slot is the active production target at a time.**

```text
produce one slot candidate
→ review structure + GIR-30 + history
→ reject/revise OR accept
→ verify raster container integrity
→ store/register exact approved path
→ exactly one next slot becomes active
```

A file path, extension or lifecycle flag alone does not constitute an approved raster.

Rejected/superseded iterations stay outside current approved repository paths.

---

# 2. Why serial production is required

Batching weakens continuity because independent generations can drift in:

- face identity,
- head/body ratio,
- shoulder/pelvis relationship,
- hand/foot scale,
- hair silhouette,
- garment silhouette,
- object contour/fingerprint,
- world structure,
- surface/detail density.

For established families:

```text
one accepted parent/reference
→ actual valid parent supplied
→ one derivative
→ review
→ next derivative
```

---

# 3. STYLE-GIR-V1 — serial GIR-30 calibration

```text
surface target = 30/100
acceptance = 25–35
```

This is a surface/rendering rule. Functional anatomy/contact/perspective remains strong.

Current exact order/state:

```text
1. human-mid          ACTIVE / NEXT / r06
2. first-person-hand  BLOCKED-UPSTREAM / r02
3. world              BLOCKED
4. material           BLOCKED
5. responsive-pair    BLOCKED

approved slots = 0/5
```

There is currently no valid approved STYLE raster parent.

Candidate history relevant to current state:

```text
human-mid r03 = SUPERSEDED / old-policy visual reference; old canonical payload also invalid WebP
human-mid r04 = REJECTED / SID-CARTOON + SID-FANTASY
human-mid r05 = SUPERSEDED / prior visual review passed, canonical raster registration invalid
human-mid r06 = ACTIVE / NEXT
```

The r05 rollback is a binary-integrity correction, not a reversal of its historical visual-review notes.

### Slot modes

```text
human-mid          = independent-exploration
first-person-hand  = anchor-conditioned
world              = anchor-conditioned after prior STYLE approvals
material           = anchor-conditioned after prior STYLE approvals
responsive-pair    = locked-keyframe-variation / same-source crop-first
```

`anchor-conditioned` means the actual accepted and valid GIR-30 raster reference(s) are supplied. A non-decodable or unregistered payload is not a valid parent.

Multiple revisions of the current slot are allowed. Parallel later-slot generation is not.

---

# 4. Raster-integrity rule

Every canonical `.webp` under:

```text
public/assets/stage075/anchors/
```

must pass the repository raster-integrity check before CI can pass.

Current CI command:

```text
node scripts/verify-stage075-raster-integrity.mjs
```

The checker validates the WebP RIFF/container structure. Visual review and raster integrity are separate mandatory gates.

Required approval sequence:

```text
candidate produced
→ visual/structural review PASS
→ owner approval
→ canonical raster conversion/export
→ raster-integrity PASS
→ exact path registration
→ next serial slot unlock
```

---

# 5. Policy/integrity recalibration rule

A later owner style decision or integrity failure may invalidate an earlier slot without falsifying project history.

Required handling:

```text
preserve historical review record
→ mark prior reference SUPERSEDED
→ remove it from current approved registry/path
→ invalidate downstream work that requires it as current parent
→ reopen earliest affected serial slot
```

Current sequence:

```text
human-mid r03 old-policy approval
→ GIR-SURFACE-30 locked
→ r03 superseded
→ human-mid r04 rejected
→ human-mid r05 visually approved/registered
→ repository payload revalidated
→ r05 registration invalidated because canonical payload is not WebP
→ human-mid r06 reopened
→ first-person-hand r02 blocked upstream
```

---

# 6. DAY1-HANDAXE-V1 — one morphology seed, then derivatives

After STYLE-GIR-V1 reaches 5/5:

```text
face-a = canonical morphology seed
→ face-b derivative
→ side/thickness derivative
→ metric/normalized scale reference
```

`face-a` locks contour, grip-base, working-end, representative scar fingerprint and asymmetry. Surface texture still follows GIR-SURFACE-30; object identity does not require macro mineral photography.

---

# 7. PLAYER-HUNT-BODY-V1

```text
structural-scaffold
→ canonical-body
→ right-palm / right-dorsum
→ left-palm / left-dorsum
→ forearm-neutral
→ right-foot-ankle / left-foot-ankle
→ action/contact derivatives
```

The canonical body fixes one exact Player body identity and canonical proportion fingerprint. Near-camera limbs stay GIR-30 rather than becoming photographic.

---

# 8. ARU-IDENTITY-V1

```text
structural-scaffold
→ canonical-identity
→ front/back/3Q/sides
→ seated/action/hand derivatives
```

Do not generate views independently and choose outputs that merely look similar. GIR-30 simplifies surface noise; it does not relax identity.

---

# 9. Production readiness rule

Within a bundle, a slot is `ready` only when:

1. bundle lineage is valid;
2. slot is not approved;
3. every required earlier slot is approved;
4. its declared parent, if any, is approved and valid.

Global readiness also requires every earlier bundle in `reviewOrder` to be complete.

---

# 10. Slot approval vs anchor approval

Current example:

```text
human-mid = no current approved path
STYLE-GIR-V1 overall = reference-pending (0/5)
next slot = human-mid r06
first-person-hand r02 = blocked by human-mid
```

The overall anchor advances only after all five current-policy references pass.

---

# 11. No automatic Gate advancement

Serial queue progress does not imply:

- Human Gate PASS,
- scene raster approval,
- runtime replacement,
- Stage 08 readiness.

---

# 12. Current exact queue truth

```text
GIR-SURFACE-30 = SPEC LOCKED
STYLE-GIR-V1 approved slots = 0/5
human-mid r05 = SUPERSEDED / REGISTRATION INVALID
human-mid r06 = ACTIVE / NEXT
first-person-hand r02 = BLOCKED-UPSTREAM
world = BLOCKED
material = BLOCKED
responsive-pair = BLOCKED
DAY1-HANDAXE-V1 = pending
PLAYER-HUNT-BODY-V1 = pending
ARU-IDENTITY-V1 = pending
Approved scene raster assets = 0
Human Gate = FAIL
Stage 08 = BLOCKED
```

# **Current single production target = `STYLE-GIR-V1 / human-mid r06`.**
