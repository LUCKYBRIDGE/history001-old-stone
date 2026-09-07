# Stage 07.5 — STYLE-GIR-V1 / human-mid Production Job Card

Status: **ACTIVE / GIR-SURFACE-30 RECALIBRATION / r04 NEXT**

## 1. Job identity

```text
JOB ID: GIR-HUMAN-MID-001
TARGET: STYLE-GIR-V1 / human-mid
OUTPUT ROLE: style-proof / anonymous human
STYLE POLICY: GIR-SURFACE-30
TARGET SURFACE REALISM: 30 / 100
ACCEPTANCE BAND: 25–35
CURRENT REVISION: r04
SUPERSEDED REVISION: r03
PLANNED APPROVED PATH: public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

`30/100`은 **표면/렌더링 사실성 지수**다. 해부학, 관절, 무게, 접촉, 원근을 30 수준으로 낮추라는 뜻이 아니다.

---

## 2. Why r03 was reopened

r03는 이전의 정성적 STYLE-GIR 기준에서는 승인됐었다. 그러나 Project-owner가 원하는 실제 표현 수준을 명시적으로 **약 30/100**으로 확정하면서 기준이 바뀌었다.

새 기준으로 재평가하면 r03는:

```text
technicalCleanliness = PASS
structuralAnatomy = PASS
styleBoundary = FAIL under GIR-SURFACE-30
extractionViability = PASS
historicalRestraint = PASS
```

재평가 drift:

```text
SID-PHOTO
SID-DETAIL
```

핵심은 구조 실패가 아니다. **피부·머리·의복·재질의 surface information이 새 목표보다 semireal 쪽으로 높다.**

따라서:

- r03의 과거 승인 이력은 review ledger에 보존한다.
- r03는 현재 canonical style parent가 아니다.
- 기존 `human-mid.webp` 승인 바이너리는 canonical approved path에서 제거한다.
- downstream hand/world/material은 r03를 conditioning reference로 사용할 수 없다.

---

## 3. GIR-SURFACE-30 exact target

Project scale:

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
25–35 = PASSABLE SURFACE BAND
<25   = review for excessive cartoon/graphic simplification
>35   = review for semireal/photographic drift
```

The image must read **immediately as an illustration at normal viewing distance**.

---

## 4. What must remain physically believable

Do not simplify these merely to hit 30:

- joint placement and limb articulation,
- head/torso/limb relationship chosen for the character design,
- weight and center of mass,
- perspective,
- contact with ground/objects where visible,
- face structure and expression readability,
- lighting direction and basic volume.

No forced textbook 6/7/8-head target is required. Once a later canonical identity/body master is approved, its exact ratio becomes fixed.

---

## 5. What must be simplified for r04

### Skin

Use:

- broad value/color planes,
- a few representative creases,
- limited dirt marks only where useful.

Do not use:

- visible pore field,
- skin grain everywhere,
- beauty-photo specular response,
- many tiny blemishes,
- individual body hair as a texture field,
- veins as decorative micro-detail.

### Face

Identity/readability comes from:

- head shape,
- eye/nose/mouth placement,
- jaw/cheek structure,
- large shadow/light planes.

Not from:

- eyelashes/pores/micro-wrinkles,
- beauty-retouch realism,
- photographic skin variation.

### Hair

Use:

- one clear silhouette,
- large masses,
- a few grouped locks if needed.

Do not render individual-hair density.

### Garment

Use:

- silhouette,
- weight/drape,
- major fold groups,
- broad material zones.

Avoid fiber, stitch and fray micro-detail except one or two representative cues.

### Background

Use simple contextual shape/value masses only. It must not become a cinematic landscape showcase or a canonical Day 1 world plate.

---

## 6. Controlled r04 instruction

Produce one anonymous fictional community member in a medium shot.

Required:

- unmistakably illustrated, not photographic,
- GIR-SURFACE-30 target 30/100,
- functional believable anatomy,
- face readable from structure,
- hair mass/silhouette first,
- simplified skin planes,
- low-specificity garment with large folds,
- clean subject edge,
- natural restrained light,
- low-information contextual natural background.

Must not define:

- `ARU-IDENTITY-V1`,
- `DAMU-IDENTITY-V1`,
- `NUA-IDENTITY-V1`,
- `PLAYER-HUNT-BODY-V1`,
- `DAY1-HANDAXE-V1`,
- `WORLD-CAMP-DAWN-A`,
- exact ethnicity/species/costume certainty.

---

## 7. Review checks

All must pass:

```text
technicalCleanliness
structuralAnatomy
styleBoundary
extractionViability
historicalRestraint
```

Additional GIR-30 question:

> At normal viewing distance, does the image clearly read around 30/100 surface realism rather than semireal/photographic rendering?

Reject directions:

```text
SID-PHOTO
SID-LENS
SID-DETAIL
SID-EDGE
SID-3D
SID-POSTER
SID-FANTASY
SID-CARTOON
```

`SID-CARTOON` is still relevant: simplification must not destroy grounded form.

---

## 8. Candidate history

| Revision | Result | Current interpretation |
| --- | --- | --- |
| r01 | REJECTED | historical restraint failure |
| r02 | REJECTED | `SID-PHOTO`, `SID-LENS`, `SID-EDGE` |
| r03 | **SUPERSEDED** | passed old qualitative boundary; too realistic for GIR-SURFACE-30 |
| r04 | **ACTIVE / NEXT** | must target 30/100 directly |

---

## 9. Queue truth

```text
STYLE-GIR-V1 approved slots = 0 / 5
human-mid r04 = ACTIVE / NEXT
first-person-hand r02 = BLOCKED UPSTREAM
world = BLOCKED
material = BLOCKED
responsive-pair = BLOCKED
Human Gate = FAIL
Stage 08 = BLOCKED
```

Only after a new GIR-SURFACE-30 human-mid candidate is reviewed, owner-approved and registered may the queue advance again to `first-person-hand`.
