# Stage 07.5 — STYLE-GIR-V1 Controlled Reference Packet

Status: **CANDIDATE PRODUCTION READY / REFERENCES NOT YET APPROVED**

Anchor ID: `STYLE-GIR-V1`

Current Gate: **R2 Stage 07.5 Visual Anatomy Reference Lock**

This packet operationalizes `STAGE07_5_STYLE_ANCHOR_BIBLE.md` without designing downstream character, object, or world anchors early.

It does **not** approve STYLE-GIR-V1. Approval remains blocked until all five required reference slots are stored, reviewed, Project-owner approved, and registered.

---

## 1. Purpose

The first production task is to lock one coherent **Grounded Illustrative Realism** treatment across:

- human anatomy/surface treatment,
- first-person hand/contact,
- environment/depth,
- rock/earth/garment material,
- landscape/portrait equivalence.

A single attractive image is insufficient.

---

## 2. Upstream/downstream boundary

STYLE-GIR-V1 is a style anchor, not an identity/object/world master.

The candidates therefore use anonymous or non-diagnostic content and must not prematurely lock:

- `ARU-IDENTITY-V1`, `DAMU-IDENTITY-V1`, `NUA-IDENTITY-V1`,
- `PLAYER-HUNT-BODY-V1`,
- `DAY1-HANDAXE-V1` morphology/fingerprint/scale,
- `WORLD-CAMP-DAWN-A` geography,
- shelter footprint, route, or landmark topology.

Historical specifics that are not securely established remain reconstruction/deferred rather than being rendered as factual claims.

---

## 3. Derivation rule

The derivation rule is intentionally **not identical for all five slots**.

```text
human-mid          = independent-exploration
first-person-hand  = independent-exploration
world              = independent-exploration
material           = independent-exploration
responsive-pair    = locked-keyframe-variation
```

The first four are Phase-A style exploration samples. `responsive-pair` must be derived from **one selected anonymous source moment** so Landscape and Portrait prove framing equivalence rather than becoming unrelated generations.

---

## 4. Shared production constraints

All candidates are reference candidates, not scene rasters.

Required:

- realistic anatomy/contact/depth,
- restrained illustrative surface treatment,
- comparable detail density across person/hand/material/world,
- natural readable light,
- no UI/dialogue/button/learning text baked into pixels.

Forbidden:

- hyper-photoreal skin/lens rendering,
- AAA poster grading,
- fantasy barbarian/caveman concept-art drift,
- cartoon/chibi anatomy,
- generic AI fog/bloom hiding information,
- photo-like person composited into a painterly background,
- modern accessories or manufactured details used as historical claims,
- exact species/ethnicity/costume certainty unsupported by the historical contract,
- scene-specific final geography or hero identity.

Candidate files do not become approved references merely because a planned path exists.

---

## 5. Slot A — `human-mid`

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Mode: `independent-exploration`

Controlled instruction:

- use an unnamed fictional community member at medium distance,
- natural human proportions,
- restrained skin/hair/low-specificity garment treatment,
- do not turn the sample into Aru/Damu/Nua identity design,
- do not encode exact species, modern ethnicity, or speculative costume as fact.

Review focus:

1. realistic anatomy before surface polish,
2. natural but non-photographic skin,
3. hair mass/silhouette before strand simulation,
4. broad garment folds without modern tailoring claims,
5. restrained natural light.

Reject:

```text
SID-PHOTO
SID-3D
SID-POSTER
SID-FANTASY
SID-CARTOON
SID-DETAIL
```

---

## 6. Slot B — `first-person-hand`

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp
```

Mode: `independent-exploration`

Controlled instruction:

- one plausible hand + wrist + forearm,
- touch a non-diagnostic rough stone,
- five readable fingers and believable contact pressure,
- do **not** define `DAY1-HANDAXE-V1` contour, scale, face-A/B, grip-base, working-end, or flake-scar fingerprint.

Review focus:

1. finger count/joints,
2. wrist transition,
3. moderate gameplay-distance hand detail,
4. skin and stone share one rendering language,
5. contact reads before texture polish.

Reject:

```text
SID-PHOTO
SID-DETAIL
SID-COMPOSITE
ANAT-FINGER
ANAT-WRIST
ANAT-HAND-SCALE
```

---

## 7. Slot C — `world`

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/world.webp
```

Mode: `independent-exploration`

Controlled instruction:

- non-canonical dawn environment vignette,
- low terrain / rocks / vegetation masses permitted,
- small local warm fire contribution permitted,
- do not lock `WORLD-CAMP-DAWN-A`, shelter footprint, route exit, `LM-SPLIT-ROCK-01`, or horizon fingerprint.

Review focus:

1. perspective/value/occlusion create depth rather than fog,
2. readable restrained terrain palette,
3. plausible cool dawn + local warm contribution,
4. no blockbuster rim/HDR treatment,
5. detail density matches person/hand samples.

Reject:

```text
SID-FOG
SID-POSTER
SID-FANTASY
SID-LIGHT
SID-COLOR
SID-DETAIL
```

---

## 8. Slot D — `material`

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/material.webp
```

Mode: `independent-exploration`

Controlled instruction:

- rock + earth + low-specificity garment material under natural scene light,
- scene-distance treatment rather than macro product photography,
- no labeled textbook specimen plate,
- no speculative exact textile/stitching claim.

Review focus:

1. rock roughness without polished/glossy finish,
2. earth readable without noisy microtexture,
3. garment weight/fold without invented manufacturing detail,
4. one brush/detail density across materials,
5. no pasted-together rendering pipelines.

Reject:

```text
SID-TEXTBOOK
SID-PHOTO
SID-DETAIL
SID-COMPOSITE
SID-COLOR
```

---

## 9. Slot E — `responsive-pair`

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/responsive-pair.webp
```

Mode: `locked-keyframe-variation`

Parent rule:

- select one anonymous style-test source moment,
- derive Landscape and Portrait from that same source/moment,
- do not run two unrelated text-to-image generations and call them equivalent.

May change:

- camera framing,
- crop,
- visibility priority required by aspect ratio.

Must not change:

- subject identity,
- limb lengths or hand scale,
- torso/head ratio,
- object scale if an object is visible,
- light direction,
- color grade,
- material/detail density,
- realism level.

Review focus:

1. same moment/source is evident,
2. portrait solves composition by framing rather than anatomy deformation,
3. light/material/color treatment remains equivalent,
4. larger portrait subject does not become more photographic,
5. no world/identity redesign appears between aspect families.

Reject:

```text
SID-PHOTO
SID-DETAIL
SID-LIGHT
SID-COLOR
SID-COMPOSITE
ANAT-FOV
```

If production later requires physically separate L/TP/PP files for this proof, register each approved file explicitly rather than hiding unrelated sources behind one label.

---

## 10. Packet review order

```text
Gate 1 Technical cleanliness
→ Gate 2 Structural/anatomy readability
→ Gate 3 Cross-slot style consistency
→ Gate 4 Historical/reconstruction boundary
→ Gate 5 Responsive equivalence
→ Gate 6 Project-owner visual review
```

Use D0–D3 drift severity:

- D0 — no meaningful drift,
- D1 — polish-level intentional variation,
- D2 — visible inconsistency; revise,
- D3 — style/anatomy identity break; reject.

Stop early when structure is wrong. Do not polish or repository-register a candidate with unresolved anatomy/style drift.

---

## 11. Approval checklist

STYLE-GIR-V1 remains `reference-pending` until all are true:

- [ ] `human-mid` approved,
- [ ] `first-person-hand` approved,
- [ ] `world` approved,
- [ ] `material` approved,
- [ ] `responsive-pair` approved,
- [ ] all five actual approved files stored at registered repository paths,
- [ ] all five pass cross-slot style review,
- [ ] no unresolved D2/D3 drift,
- [ ] Project-owner explicitly approves the packet,
- [ ] `stage075AnchorReviewBundle.ts` has approved paths for every required slot,
- [ ] `stage075StyleAnchor.ts` has the same complete approved reference set,
- [ ] automated gate tests pass.

Only then may:

```text
STYLE-GIR-V1
reference-pending → anchor-approved
```

be committed.

Packet preparation alone does not advance `DAY1-HANDAXE-V1`, Player body, Aru identity, SC02 final contact art, Human Gate, or Stage 08.

---

## 12. Current repository truth

```text
STYLE-GIR-V1 status = reference-pending
Required slots = 5
Approved slots = 0
Approved style reference files = 0
Approved raster assets = 0
Human Gate = FAIL
Stage 08 = BLOCKED
```

The next visual-production action is to create controlled candidates for these five slots, review them as one packet, and reject any candidate that violates the contracts above. Do not generate full game scenes first.
