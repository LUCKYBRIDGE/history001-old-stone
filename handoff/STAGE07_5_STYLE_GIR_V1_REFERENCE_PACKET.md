# Stage 07.5 — STYLE-GIR-V1 Controlled Reference Packet

Status: **GIR-SURFACE-30 SERIAL CALIBRATION / 0 OF 5 APPROVED / RASTER-INTEGRITY REPAIR**

Anchor ID: `STYLE-GIR-V1`

Surface policy: `GIR-SURFACE-30`

Current Gate: **R2 Stage 07.5 Visual Anatomy Reference Lock**

STYLE-GIR-V1 remains `reference-pending` until all five required slots are visually approved, raster-valid and registered under the current GIR-SURFACE-30 policy.

---

## 1. Locked surface target

```text
SURFACE / RENDERING REALISM = 30 / 100
ACCEPTANCE BAND = 25–35
```

This score is not anatomy realism. Required combination:

```text
functional believable anatomy / weight / perspective / contact
+
GIR-30 simplified surfaces / grouped texture / clean silhouette
-
photographic pore / hair / nail / material micro-detail
-
photographic lens language
```

---

## 2. Human-mid calibration history and rollback

Candidate history:

```text
r01 → rejected / historical restraint
r02 → rejected / SID-PHOTO + SID-LENS + SID-EDGE
r03 → superseded after GIR-SURFACE-30 reset; old canonical payload also invalid WebP
r04 → rejected / SID-CARTOON + SID-FANTASY
r05 → superseded / prior visual review passed but canonical raster registration invalid
r06 → ACTIVE / NEXT
```

The previously registered path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

contained the exact repository blob but not a valid WebP container, so it cannot be used as an image-conditioning parent. The invalid payload has been removed from the current approved path.

r05 visual-review notes remain historical evidence for the intended GIR-30 direction, but r05 is not a current canonical raster reference.

---

## 3. Current Slot A — `human-mid` r06

Mode: `independent-exploration`

Planned approved path after successful review and valid export:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Target:

- clearly illustrative surface tier near 30/100;
- broad skin/value planes;
- grouped hair masses;
- broad low-specificity garment folds/material zones;
- functional anatomy and weight;
- clean extraction-friendly silhouette;
- low-information natural context;
- no photographic pore-field, individual-hair field or lens-language dominance.

It must not establish Aru/Damu/Nua/Player identity, canonical handaxe morphology, canonical Day 1 geography, or an exact archaeological costume.

Approval requires both visual review and raster integrity. A `.webp` extension alone is insufficient.

---

## 4. Serial production state

Only one STYLE-GIR slot is production-active at a time.

```text
1. human-mid          ACTIVE / NEXT / r06
2. first-person-hand  BLOCKED-UPSTREAM / r02
3. world              BLOCKED
4. material           BLOCKED
5. responsive-pair    BLOCKED
```

Approved count:

```text
0 / 5
```

Do not batch-generate later slots.

---

## 5. Slot B — `first-person-hand` r02

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp
```

Required style parent after unlock:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

That parent must be the newly valid approved human raster, not the superseded r05 repository payload.

r01 was rejected for:

```text
SID-PHOTO
SID-LENS
SID-DETAIL
```

When unlocked, r02 must inherit the approved human surface language while proving:

- five-finger functional anatomy;
- wrist/forearm continuity;
- plausible contact pressure/occlusion;
- broad skin planes rather than pore/vein/body-hair density;
- simple nail structure rather than macro cuticle/reflection detail;
- rough stone through major planes/roughness groups rather than exhaustive crack/grain texture;
- low-information background with no cinematic lens separation.

The rough stone remains non-diagnostic and must not define `DAY1-HANDAXE-V1`.

---

## 6. Later slots

### `world`

Mode: `anchor-conditioned`

- same GIR-30 rendering tier;
- grouped terrain/vegetation masses;
- depth via overlap/value/perspective;
- no photo-density foliage/cinematic bokeh;
- no canonical Day 1 geography lock.

### `material`

Mode: `anchor-conditioned`

- stone / earth / garment material language;
- broad planes/roughness/folds;
- no macro product-photo treatment;
- no exhaustive crack/grain/fiber detail.

### `responsive-pair`

Mode: `locked-keyframe-variation`

- one anonymous source moment;
- Landscape + Portrait from the same source;
- crop/zoom/pan first;
- controlled outpaint only when needed;
- no unrelated generations;
- no increase in surface realism when portrait enlarges the subject.

---

## 7. Raster-integrity gate

Current repository verifier:

```text
node scripts/verify-stage075-raster-integrity.mjs
```

Every committed `.webp` under `public/assets/stage075/anchors/` must have a coherent WebP RIFF container before Project CI can pass.

This is separate from visual approval:

```text
visual review PASS
+ owner approval
+ valid canonical WebP payload
+ exact path registration
= serial slot can unlock the next slot
```

---

## 8. Shared constraints

Required:

- surface realism 25–35 centered near 30;
- image clearly reads as illustration;
- functional anatomy/contact/depth;
- no forced 6/7/8-head convention;
- structure before microtexture;
- comparable detail density across human/hand/material/world;
- clean readable silhouettes;
- natural readable light;
- no baked UI/dialogue/text.

Reject directions:

```text
SID-PHOTO
SID-LENS
SID-EDGE
SID-3D
SID-POSTER
SID-FANTASY
SID-CARTOON
SID-TEXTBOOK
SID-FOG
SID-DETAIL
SID-LIGHT
SID-COLOR
SID-COMPOSITE
ASSET-BINARY-INVALID
```

Historical specifics that are uncertain remain `[R]` reconstruction or `[D]` deferred/non-diagnostic.

---

## 9. Gate truth

```text
STYLE-GIR-V1 = reference-pending
surface policy = GIR-SURFACE-30
approved slots = 0 / 5
human-mid r05 = superseded / registration invalid
human-mid r06 = active / next
first-person-hand r02 = blocked-upstream
world = blocked
material = blocked
responsive-pair = blocked
Human Gate = FAIL
Stage 08 = BLOCKED
```

Only after all five GIR-30 STYLE slots are visually approved, raster-valid and exactly registered may `STYLE-GIR-V1` become `anchor-approved` and the global queue move to `DAY1-HANDAXE-V1`.
