# Stage 07.5 — Serial Anchor Production Queue

Status: **MANDATORY PRE-IMAGE PRODUCTION CONTROL / GIR-SURFACE-30 ACTIVE**

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
→ store/register approved path
→ exactly one next slot becomes active
```

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
→ actual parent supplied
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

Exact order/current state:

```text
1. human-mid          APPROVED / REGISTERED / r05
2. first-person-hand  ACTIVE / NEXT / r02
3. world              BLOCKED
4. material           BLOCKED
5. responsive-pair    BLOCKED

approved slots = 1/5
```

Approved human style parent:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Candidate history relevant to the reset:

```text
human-mid r03 = SUPERSEDED old-policy reference
human-mid r04 = REJECTED / SID-CARTOON + SID-FANTASY
human-mid r05 = APPROVED / REGISTERED under GIR-SURFACE-30
```

### Slot modes

```text
human-mid          = independent-exploration
first-person-hand  = anchor-conditioned
world              = anchor-conditioned after prior STYLE approvals
material           = anchor-conditioned after prior STYLE approvals
responsive-pair    = locked-keyframe-variation / same-source crop-first
```

`anchor-conditioned` means the actual accepted GIR-30 reference(s) are supplied so later slots cannot silently escalate toward semireal/photo rendering.

Multiple revisions of the **current slot** are allowed. Parallel later-slot generation is not.

---

# 4. Policy recalibration rule

A later Project-owner style decision may invalidate an earlier slot without falsifying project history.

Required handling:

```text
preserve historical approval/review record
→ mark prior reference SUPERSEDED
→ remove it from current approved registry/path
→ invalidate downstream work that used it as current parent
→ reopen earliest affected serial slot
```

The completed recalibration sequence was:

```text
human-mid r03 old-policy approval
→ GIR-SURFACE-30 locked
→ r03 superseded
→ human-mid r04 rejected
→ human-mid r05 approved/registered
→ first-person-hand r02 reactivated
```

---

# 5. DAY1-HANDAXE-V1 — one morphology seed, then derivatives

After STYLE-GIR-V1 reaches 5/5:

```text
face-a = canonical morphology seed
→ face-b derivative
→ side/thickness derivative
→ metric/normalized scale reference
```

`face-a` locks contour, grip-base, working-end, representative scar fingerprint and asymmetry. Surface texture still follows GIR-SURFACE-30; object identity does not require macro mineral photography.

---

# 6. PLAYER-HUNT-BODY-V1

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

# 7. ARU-IDENTITY-V1

```text
structural-scaffold
→ canonical-identity
→ front/back/3Q/sides
→ seated/action/hand derivatives
```

Do not generate views independently and choose outputs that merely look similar. GIR-30 simplifies surface noise; it does not relax identity.

---

# 8. Production readiness rule

Within a bundle, a slot is `ready` only when:

1. bundle lineage is valid,
2. slot is not approved,
3. every required earlier slot is approved,
4. its declared parent, if any, is approved.

Global readiness also requires every earlier bundle in `reviewOrder` to be complete.

---

# 9. Slot approval vs anchor approval

Current example:

```text
human-mid r05 approved path registered
STYLE-GIR-V1 overall = reference-pending (1/5)
next slot = first-person-hand r02
```

The overall anchor advances only after all five current-policy references pass.

---

# 10. No automatic Gate advancement

Serial queue progress does not imply:

- Human Gate PASS,
- scene raster approval,
- runtime replacement,
- Stage 08 readiness.

---

# 11. Current exact queue truth

```text
GIR-SURFACE-30 = SPEC LOCKED
STYLE-GIR-V1 approved slots = 1/5
human-mid r05 = APPROVED / REGISTERED
Current target = STYLE-GIR-V1 / first-person-hand r02
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

# **Current single production target = `STYLE-GIR-V1 / first-person-hand r02`.**
