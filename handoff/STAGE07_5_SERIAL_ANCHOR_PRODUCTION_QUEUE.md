# Stage 07.5 — Serial Anchor Production Queue

Status: **MANDATORY PRE-IMAGE PRODUCTION CONTROL**

Purpose: ensure upstream visual anchors are produced as a controlled lineage rather than as batches of loosely similar images.

Machine-readable source:

- `src/experience/production/stage075AnchorReviewBundle.ts`

Dev review surface:

- `?anchors=1`

---

# 1. Governing invariant

# **Only one global anchor slot is the active production target at a time.**

Do not batch-generate later slots because they are listed in the same packet.

The queue is approval-driven:

```text
produce one slot candidate
→ review
→ reject/revise OR Project-owner accepts the slot
→ store/register approved path
→ queue advances to exactly one next slot
```

Rejected iterations stay outside the approved repository paths.

A slot path being planned does not mean it is production-ready or approved.

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
- style/detail density.

Therefore:

```text
same identity/object family
≠ several independent generations + choose the closest later
```

Required:

```text
one accepted parent
→ actual parent reference supplied
→ one derivative
→ review
→ next derivative
```

---

# 3. STYLE-GIR-V1 — serial calibration, not identity locking

STYLE-GIR-V1 uses anonymous/non-diagnostic content, so the first four slots remain style exploration rather than one-person identity derivatives.

However, they are still produced **serially** to avoid wasting work and to keep the art-language boundary coherent.

Exact order:

```text
1. human-mid
2. first-person-hand
3. world
4. material
5. responsive-pair
```

Current repository state has approved slots `0/5`, therefore the only active target is:

```text
STYLE-GIR-V1 → human-mid
```

Do not generate `first-person-hand`, `world`, `material`, or `responsive-pair` until the preceding slot has an accepted/registered reference.

Multiple revisions of the **currently active slot** are allowed when necessary. This does not permit parallel batch generation of later slots.

`responsive-pair` is special:

```text
one selected source moment
→ landscape crop/zoom
→ portrait crop/zoom
→ outpaint/locked variation only if crop fails
```

Never use two unrelated text-to-image generations as the responsive pair.

---

# 4. DAY1-HANDAXE-V1 — one morphology seed, then derivatives

Exact object production order:

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
- material family,
- distinctive asymmetry.

Every later object view must use the actual approved object seed/reference.

Aru/Player grip images are intentionally **not** part of the pre-body handaxe anchor queue.

Dependency is:

```text
DAY1-HANDAXE-V1 morphology
→ PLAYER-HUNT-BODY-V1
→ ARU-IDENTITY-V1
→ SC02-HANDOFF-GEO-V1 grip/contact validation
```

This removes the former circular dependency where a handaxe could not be approved until a Player palm existed while the Player packet itself depended on the handaxe.

---

# 5. PLAYER-HUNT-BODY-V1 — canonical body before visible limbs

Exact beginning:

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

The structural scaffold fixes intended joint/segment relationships.

The canonical body fixes the actual Player identity and exact canonical proportion fingerprint.

After canonical-body approval:

- every hand is that body’s hand,
- every forearm is that body’s forearm,
- every foot/ankle is that body’s foot/ankle,
- action poses do not get a newly redesigned body.

A canonical 7.2-head body remains an underlying 7.2-head body in every derivative. Perspective/pose may change apparent projected measurements but never the canonical structure.

---

# 6. ARU-IDENTITY-V1 — one person, not a turnaround average

Exact beginning:

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

The canonical identity is the parent of every view/pose.

Do not generate front/back/side/action independently and then choose images that merely look similar.

The same-person lock includes:

- face structure,
- hair silhouette,
- exact head/body proportion fingerprint,
- body mass family,
- garment silhouette/material zones,
- hand scale family.

---

# 7. Production readiness rule

Within a bundle, a slot is `ready` only when:

1. bundle lineage is valid,
2. the slot itself is not already approved,
3. every required slot before it is approved,
4. its declared parent, if any, is approved.

Global readiness adds one more rule:

5. every earlier anchor bundle in `reviewOrder` is complete.

Therefore many slots may be conceptually defined, but only one slot can be the global `NEXT production target`.

---

# 8. Slot approval vs anchor approval

A slot may be accepted and registered while the containing anchor remains pending.

Example:

```text
STYLE-GIR-V1 human-mid approved path registered
STYLE-GIR-V1 overall status = still reference-pending
next slot = first-person-hand
```

The overall anchor advances only when its complete required packet passes.

This distinction is required for serial production.

---

# 9. No automatic Gate advancement

Serial queue progress does not imply:

- Human Gate PASS,
- scene raster approval,
- runtime replacement,
- Stage 08 readiness.

Those remain blocked until their own complete upstream dependencies pass.

---

# 10. Current exact queue truth

At the time this contract was added:

```text
STYLE-GIR-V1 approved slots = 0/5
DAY1-HANDAXE-V1 = pending
PLAYER-HUNT-BODY-V1 = pending
ARU-IDENTITY-V1 = pending
Approved raster assets = 0
Human Gate = FAIL
Stage 08 = BLOCKED
```

Therefore:

# **Current single production target = `STYLE-GIR-V1 / human-mid`.**

This statement identifies the next slot only. It does not authorize image generation unless the current task explicitly enters image production.
