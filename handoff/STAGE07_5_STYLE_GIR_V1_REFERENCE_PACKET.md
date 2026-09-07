# Stage 07.5 — STYLE-GIR-V1 Controlled Reference Packet

Status: **GIR-SURFACE-30 RECALIBRATION / 0 OF 5 APPROVED**

Anchor ID: `STYLE-GIR-V1`

Surface policy: `GIR-SURFACE-30`

Current Gate: **R2 Stage 07.5 Visual Anatomy Reference Lock**

STYLE-GIR-V1 remains `reference-pending` until all five required slots are approved and registered under the current GIR-SURFACE-30 policy.

---

## 1. Purpose

Lock one coherent **Grounded Illustrative Realism** treatment across:

- human anatomy / surface treatment,
- first-person hand / contact,
- environment / depth,
- rock / earth / garment material,
- landscape / portrait equivalence.

Exact target:

```text
SURFACE / RENDERING REALISM = 30 / 100
ACCEPTANCE BAND = 25–35
```

This is not anatomy realism. The required combination is:

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

## 2. Why the packet was reset

The prior `human-mid r03` was approved under an older qualitative STYLE-GIR boundary.

After Project-owner review, the desired visible realism level was fixed at **about 30/100**, which is substantially more illustrative than the old accepted r03.

Therefore:

```text
r03 historical approval = preserved in review history
r03 current status = SUPERSEDED
former human-mid canonical binary = removed from approved path
STYLE approved slots = reset 1/5 → 0/5
first-person-hand r02 = BLOCKED until new human-mid approval
```

This is a policy recalibration, not an anatomy failure.

---

## 3. Serial production rule

# **Only one STYLE-GIR slot is production-active at a time.**

Current order/status:

```text
1. human-mid          ACTIVE / NEXT / r04
2. first-person-hand  BLOCKED UPSTREAM / r02 reserved
3. world              BLOCKED
4. material           BLOCKED
5. responsive-pair    BLOCKED
```

Approved count:

```text
0 / 5
```

Do not batch-generate later slots.

Workflow:

```text
active candidate
→ GIR-30 + structure review
→ reject/revise OR owner accept
→ canonical registration
→ exactly one next slot
```

---

## 4. Active Slot A — `human-mid` r04

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

There is currently no file at this canonical approved path.

Goal:

- anonymous fictional community member,
- medium shot,
- unmistakably illustrated at normal viewing distance,
- surface realism near 30/100,
- functional anatomy,
- face structure before skin microtexture,
- hair mass/silhouette before strands,
- broad low-specificity garment folds,
- clean edge,
- simple contextual natural background.

Strongly simplify:

- pores,
- fine skin grain,
- veins/body hair,
- nail/cuticle reflections,
- individual hair,
- fiber/stitch microdetail,
- background leaf/rock grain density.

Must not define:

- Aru / Damu / Nua identity,
- Player body identity,
- handaxe morphology,
- canonical Day 1 geography,
- specific historical ethnicity/species/costume certainty.

Candidate history:

```text
r01 → rejected / historical restraint
r02 → rejected / SID-PHOTO + SID-LENS + SID-EDGE
r03 → superseded after GIR-SURFACE-30 reset
r04 → ACTIVE / NEXT
```

Active Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_HUMAN_MID_JOB_CARD.md`

---

## 5. Slot B — `first-person-hand` / blocked

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp
```

r01 was rejected for:

```text
SID-PHOTO
SID-LENS
SID-DETAIL
```

r02 is reserved but **must not be produced** until a new GIR-30 `human-mid` is approved and registered.

After unlock, r02 must use the new approved human reference as the actual style parent and preserve:

- five-finger anatomy,
- wrist/forearm continuity,
- contact pressure,

while simplifying:

- pores/veins/body hair,
- nail microdetail,
- rock microtexture,
- cinematic depth/lens language.

Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md`

---

## 6. Later STYLE slots — do not produce yet

### `world`

Mode: `anchor-conditioned`

Purpose:

- same GIR-30 rendering tier,
- grouped terrain/vegetation masses,
- depth via overlap/value/perspective,
- no photo-density foliage or cinematic bokeh,
- no canonical Day 1 geography lock.

### `material`

Mode: `anchor-conditioned`

Purpose:

- stone / earth / garment language,
- broad planes/roughness/folds,
- no macro product-photo treatment,
- no exhaustive crack/grain/fiber detail.

### `responsive-pair`

Mode: `locked-keyframe-variation`

Purpose:

- one anonymous source moment,
- Landscape + Portrait from the same source,
- crop/zoom/pan first,
- controlled outpaint only when needed,
- no unrelated generations,
- no increase in surface realism when portrait enlarges the subject.

---

## 7. Shared GIR-30 constraints

Required:

- surface realism 25–35 centered near 30,
- image clearly reads as illustration,
- functional anatomy/contact/depth,
- no forced 6/7/8-head photographic convention,
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

## 8. Gate truth

```text
STYLE-GIR-V1 = reference-pending
surface policy = GIR-SURFACE-30
approved slots = 0 / 5
human-mid r04 = active / next
first-person-hand r02 = blocked-upstream
world = blocked
material = blocked
responsive-pair = blocked
Human Gate = FAIL
Stage 08 = BLOCKED
```

Only after all five GIR-30 STYLE slots are approved and the exact approved path set is registered may `STYLE-GIR-V1` become `anchor-approved` and the global queue move to `DAY1-HANDAXE-V1`.
