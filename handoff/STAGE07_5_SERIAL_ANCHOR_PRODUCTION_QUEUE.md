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
→ reject/revise OR Project-owner accepts the slot
→ store/register approved path
→ exactly one next slot becomes active
```

Rejected/superseded iterations stay outside current approved repository paths.

A planned path does not mean production-ready or approved.

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

Therefore:

```text
same identity/object/style family
≠ several independent generations + choose the closest later
```

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

STYLE policy:

```text
GIR-SURFACE-30
surface target = 30/100
acceptance = 25–35
```

This is a surface/rendering rule. Functional anatomy/contact/perspective remains strong.

Exact order:

```text
1. human-mid
2. first-person-hand
3. world
4. material
5. responsive-pair
```

Current truth:

```text
human-mid r03 = SUPERSEDED old-policy reference
human-mid r04 = ACTIVE / NEXT
first-person-hand r02 = BLOCKED UPSTREAM
world = BLOCKED
material = BLOCKED
responsive-pair = BLOCKED
approved slots = 0/5
```

The former r03 binary was removed from the current approved anchor path. Do not use it as a production style parent.

### Slot modes

```text
human-mid          = independent-exploration
first-person-hand  = anchor-conditioned after human-mid approval
world              = anchor-conditioned after prior STYLE approvals
material           = anchor-conditioned after prior STYLE approvals
responsive-pair    = locked-keyframe-variation / same-source crop-first
```

`anchor-conditioned` means the actual accepted GIR-30 reference(s) are supplied so later slots cannot silently escalate toward semireal/photo rendering.

Multiple revisions of the **current slot** are allowed. Parallel later-slot generation is not.

`responsive-pair`:

```text
one selected source moment
→ landscape crop/zoom
→ portrait crop/zoom
→ controlled outpaint/locked variation only if crop fails
```

Never call two unrelated generations a responsive pair.

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

Current example:

```text
human-mid r03 approved under old qualitative STYLE-GIR
→ GIR-SURFACE-30 locked
→ r03 superseded
→ STYLE progress 1/5 → 0/5
→ human-mid r04 reopened
→ first-person-hand r02 blocked upstream
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

`face-a` locks:

- overall contour,
- grip-base,
- working-end,
- representative face-A scar fingerprint,
- distinctive asymmetry.

Surface texture still follows GIR-SURFACE-30; object identity does not require macro mineral photography.

Aru/Player grip images are not prerequisites for initial handaxe morphology approval.

```text
DAY1-HANDAXE-V1 morphology
→ PLAYER-HUNT-BODY-V1
→ ARU-IDENTITY-V1
→ SC02-HANDOFF-GEO-V1 grip/contact validation
```

---

# 6. PLAYER-HUNT-BODY-V1 — canonical body before limbs

```text
structural-scaffold
→ canonical-body
→ right-palm
→ right-dorsum
→ left-palm
→ left-dorsum
→ forearm-neutral
→ right-foot-ankle
→ left-foot-ankle
→ action/contact derivatives
```

The structural scaffold fixes joint/segment relationships.
The canonical body fixes one exact Player body identity and canonical proportion fingerprint.

After approval:

- every hand is that body’s hand,
- every forearm is that body’s forearm,
- every foot/ankle is that body’s foot/ankle,
- action poses do not redesign body ratios.

A 7.2-head canonical body remains an underlying 7.2-head body in every derivative. Perspective/pose may change apparent measurements only.

All Player surfaces remain GIR-30 rather than becoming photographic because the limb is near camera.

---

# 7. ARU-IDENTITY-V1 — one person, not a turnaround average

```text
structural-scaffold
→ canonical-identity
→ front
→ back
→ opposite-three-quarter
→ side-left
→ side-right
→ seated
→ offer-handaxe
→ hand-reference
```

Do not generate views independently and select ones that merely look similar.

Same-person lock includes:

- face structure,
- hair silhouette,
- exact canonical head/body proportion fingerprint,
- body mass family,
- garment silhouette/material zones,
- hand scale family.

GIR-30 simplifies surface noise; it does not relax identity.

---

# 8. Production readiness rule

Within a bundle, a slot is `ready` only when:

1. bundle lineage is valid,
2. slot is not approved,
3. every required earlier slot is approved,
4. its declared parent, if any, is approved.

Global readiness also requires:

5. every earlier anchor bundle in `reviewOrder` is complete.

Thus many slots may be defined in documents, but only one is the global `NEXT production target`.

---

# 9. Slot approval vs anchor approval

An individual slot may be approved while the full anchor remains `reference-pending`.

Example after a future GIR-30 r04 approval:

```text
human-mid approved path registered
STYLE-GIR-V1 overall = reference-pending
next slot = first-person-hand
```

The overall anchor advances only after all five current-policy references pass.

---

# 10. No automatic Gate advancement

Serial queue progress does not imply:

- Human Gate PASS,
- scene raster approval,
- runtime replacement,
- Stage 08 readiness.

These remain blocked until their complete dependencies pass.

---

# 11. Current exact queue truth

```text
GIR-SURFACE-30 = SPEC LOCKED
STYLE-GIR-V1 approved slots = 0/5
Current target = STYLE-GIR-V1 / human-mid r04
first-person-hand r02 = BLOCKED UPSTREAM
DAY1-HANDAXE-V1 = pending
PLAYER-HUNT-BODY-V1 = pending
ARU-IDENTITY-V1 = pending
Approved scene raster assets = 0
Human Gate = FAIL
Stage 08 = BLOCKED
```

# **Current single production target = `STYLE-GIR-V1 / human-mid r04`.**

This statement identifies the next slot only. It does not authorize image generation unless the user explicitly requests image production.
