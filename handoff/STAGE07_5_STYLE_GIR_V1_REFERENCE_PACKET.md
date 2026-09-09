# Stage 07.5 — STYLE-GIR-V1 Controlled Reference Packet

Status: **GIR-SURFACE-30 SERIAL CALIBRATION / 1 OF 5 APPROVED**

Anchor ID: `STYLE-GIR-V1`

Surface policy: `GIR-SURFACE-30`

Current Gate: **R2 Stage 07.5 Visual Anatomy Reference Lock**

STYLE-GIR-V1 remains `reference-pending` until all five required slots are approved and registered under the current GIR-SURFACE-30 policy.

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

## 2. Human-mid calibration result

Canonical approved reference:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Approved revision:

```text
GIR-HUMAN-MID-001 r05
```

r05 proves:

- clearly illustrative surface tier near 30/100,
- broad skin/value planes,
- grouped hair masses,
- broad garment folds/material zones,
- functional anatomy and weight,
- clean silhouette,
- low-information contextual background,
- no photographic pore-field / individual-hair field / lens-language dominance.

It is a rendering-tier reference only. It does not establish Aru/Damu/Nua/Player identity, canonical handaxe morphology, canonical Day 1 geography, or an exact archaeological costume.

Candidate history:

```text
r01 → rejected / historical restraint
r02 → rejected / SID-PHOTO + SID-LENS + SID-EDGE
r03 → superseded after GIR-SURFACE-30 reset
r04 → rejected / SID-CARTOON + SID-FANTASY
r05 → APPROVED / REGISTERED
```

---

## 3. Serial production state

Only one STYLE-GIR slot is production-active at a time.

```text
1. human-mid          APPROVED / REGISTERED / r05
2. first-person-hand  ACTIVE / NEXT / r02
3. world              BLOCKED
4. material           BLOCKED
5. responsive-pair    BLOCKED
```

Approved count:

```text
1 / 5
```

Do not batch-generate later slots.

---

## 4. Active Slot B — `first-person-hand` r02

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp
```

Required style parent:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

r01 was rejected for:

```text
SID-PHOTO
SID-LENS
SID-DETAIL
```

r02 must inherit the approved r05 surface language while proving:

- five-finger functional anatomy,
- wrist/forearm continuity,
- plausible contact pressure/occlusion,
- broad skin planes rather than pore/vein/body-hair density,
- simple nail structure rather than macro cuticle/reflection detail,
- rough stone through major planes/roughness groups rather than exhaustive crack/grain texture,
- low-information background with no cinematic lens separation.

The rough stone remains non-diagnostic and must not define `DAY1-HANDAXE-V1`.

Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md`

---

## 5. Later slots

### `world`

Mode: `anchor-conditioned`

- same GIR-30 rendering tier,
- grouped terrain/vegetation masses,
- depth via overlap/value/perspective,
- no photo-density foliage/cinematic bokeh,
- no canonical Day 1 geography lock.

### `material`

Mode: `anchor-conditioned`

- stone / earth / garment material language,
- broad planes/roughness/folds,
- no macro product-photo treatment,
- no exhaustive crack/grain/fiber detail.

### `responsive-pair`

Mode: `locked-keyframe-variation`

- one anonymous source moment,
- Landscape + Portrait from the same source,
- crop/zoom/pan first,
- controlled outpaint only when needed,
- no unrelated generations,
- no increase in surface realism when portrait enlarges the subject.

---

## 6. Shared constraints

Required:

- surface realism 25–35 centered near 30,
- image clearly reads as illustration,
- functional anatomy/contact/depth,
- no forced 6/7/8-head convention,
- structure before microtexture,
- comparable detail density across human/hand/material/world,
- clean readable silhouettes,
- natural readable light,
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
```

Historical specifics that are uncertain remain `[R]` reconstruction or `[D]` deferred/non-diagnostic.

---

## 7. Gate truth

```text
STYLE-GIR-V1 = reference-pending
surface policy = GIR-SURFACE-30
approved slots = 1 / 5
human-mid r05 = approved / registered
first-person-hand r02 = active / next
world = blocked
material = blocked
responsive-pair = blocked
Human Gate = FAIL
Stage 08 = BLOCKED
```

Only after all five GIR-30 STYLE slots are approved and the exact approved path set is registered may `STYLE-GIR-V1` become `anchor-approved` and the global queue move to `DAY1-HANDAXE-V1`.
