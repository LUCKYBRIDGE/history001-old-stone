# Stage 07.5 — STYLE-GIR-V1 / human-mid Production Job Card

Status: **ACTIVE / GIR-SURFACE-30 / r05 REGISTRATION INVALID / r06 NEXT**

## 1. Job identity

```text
JOB ID: GIR-HUMAN-MID-001
TARGET: STYLE-GIR-V1 / human-mid
OUTPUT ROLE: style-proof / anonymous human
STYLE POLICY: GIR-SURFACE-30
TARGET SURFACE REALISM: 30 / 100
ACCEPTANCE BAND: 25–35
CURRENT REVISION: r06
SUPERSEDED REVISION: r05
PLANNED APPROVED PATH: public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
STATUS: pending-production
```

`30/100`은 표면/렌더링 사실성 지수다. 해부학·관절·무게·접촉·원근의 정확도를 낮추는 값이 아니다.

---

## 2. Why r05 is no longer registered

r05 originally passed visual review for:

```text
structuralAnatomy
styleBoundary
extractionViability
historicalRestraint
```

However, before downstream hand production the actual canonical repository payload was revalidated and found not to be a valid WebP container. The prior r03 canonical payload showed the same defect.

Current correction:

```text
r05 visual-review history = PRESERVED
r05 technicalCleanliness = FAIL at canonical binary-integrity layer
r05 driftCode = ASSET-BINARY-INVALID
r05 canonical registration = INVALIDATED
r05 approved path = REMOVED
r06 = ACTIVE / NEXT
```

This is not a claim that r05's intended visual direction was anatomically or stylistically wrong. It means the registered repository file cannot function as an actual image reference and therefore cannot unlock an anchor-conditioned downstream slot.

---

## 3. Candidate history

| Revision | Result | Reason |
| --- | --- | --- |
| r01 | REJECTED | historical-restraint failure |
| r02 | REJECTED | `SID-PHOTO`, `SID-LENS`, `SID-EDGE` |
| r03 | SUPERSEDED | old-policy approval; too realistic for GIR-SURFACE-30; old canonical payload also invalid WebP |
| r04 | REJECTED | `SID-CARTOON`, `SID-FANTASY`; overly designed fantasy-prehistory cues |
| r05 | SUPERSEDED | prior visual review passed, but canonical raster registration failed binary-integrity validation |
| r06 | **ACTIVE / NEXT** | produce a new valid GIR-SURFACE-30 style proof |

---

## 4. Exact r06 target

Required visual target:

- anonymous fictional community member;
- medium / three-quarter style-proof framing;
- functional anatomy, weight and perspective;
- broad skin/value planes instead of pore/fine-grain rendering;
- grouped hair mass/silhouette instead of individual-hair fields;
- broad low-specificity garment folds/material zones;
- clean extraction-friendly outer silhouette;
- low-information contextual natural background;
- clear illustration reading near 30/100 surface realism;
- no photo lens language, cinematic bokeh, AAA key-art treatment, fantasy-barbarian design or chibi/cartoon drift.

Must not define:

- `ARU-IDENTITY-V1`
- `DAMU-IDENTITY-V1`
- `NUA-IDENTITY-V1`
- `PLAYER-HUNT-BODY-V1`
- `DAY1-HANDAXE-V1`
- `WORLD-CAMP-DAWN-A`
- specific historical individual, ethnicity/species certainty or exact archaeological costume

---

## 5. Required review gates

All visual checks must pass:

```text
technicalCleanliness
structuralAnatomy
styleBoundary
extractionViability
historicalRestraint
```

Unresolved drift codes must be empty.

Then Project-owner approval is required.

After visual/owner approval, the final canonical raster must also pass:

```text
node scripts/verify-stage075-raster-integrity.mjs
```

A `.webp` filename alone is insufficient. The committed file must contain a coherent WebP RIFF container.

---

## 6. Registration sequence

```text
produce r06 candidate outside approved anchor path
→ visual review
→ owner approval
→ deterministic crop/convert/export if required
→ verify actual canonical WebP bytes
→ commit canonical human-mid.webp
→ register exact approved path in machine-readable STYLE bundle
→ unlock first-person-hand r02
```

Do not write a candidate directly into the canonical approved anchor directory before approval.

---

## 7. Current queue truth

```text
STYLE-GIR-V1 approved slots = 0 / 5
human-mid r05 = SUPERSEDED / REGISTRATION INVALID
human-mid r06 = ACTIVE / NEXT / pending-production
first-person-hand r02 = BLOCKED-UPSTREAM
world = BLOCKED
material = BLOCKED
responsive-pair = BLOCKED
Human Gate = FAIL
Stage 08 = BLOCKED
```

Next actual visual-production action is exactly one `human-mid r06` candidate.
