# Stage 07.5 — STYLE-GIR-V1 / human-mid Production Job Card

Status: **APPROVED / REGISTERED / GIR-SURFACE-30 / r05 CLOSED**

## 1. Job identity

```text
JOB ID: GIR-HUMAN-MID-001
TARGET: STYLE-GIR-V1 / human-mid
OUTPUT ROLE: style-proof / anonymous human
STYLE POLICY: GIR-SURFACE-30
TARGET SURFACE REALISM: 30 / 100
ACCEPTANCE BAND: 25–35
APPROVED REVISION: r05
SUPERSEDED REVISION: r03
REGISTERED PATH: public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

`30/100`은 표면/렌더링 사실성 지수다. 해부학·관절·무게·접촉·원근의 정확도를 낮추는 값이 아니다.

---

## 2. Final r05 decision

r05 passed:

```text
technicalCleanliness = PASS
structuralAnatomy = PASS
styleBoundary = PASS
extractionViability = PASS
historicalRestraint = PASS
driftCodes = []
```

Approval rationale:

- normal viewing distance에서 사진/세미리얼이 아니라 명확한 일러스트로 읽힌다.
- 피부는 모공/잔털 대신 broad plane과 제한된 대표 주름으로 읽힌다.
- 머리는 개별 모발 field보다 큰 mass/silhouette가 먼저 읽힌다.
- 의복은 섬유/봉제 micro-detail보다 큰 drape/fold/material zone으로 읽힌다.
- 신체 구조와 무게는 기능적으로 납득 가능하다.
- 배경은 낮은 정보량의 contextual treatment라 canonical Day 1 geography를 고정하지 않는다.
- subject edge가 clean하여 이후 extraction-oriented production 기준을 검토할 수 있다.

생성된 r05 source는 승인 전 deterministic crop만 적용하여 medium/three-quarter style-proof framing으로 정리했다. crop은 pixel regeneration이나 anatomy 변형이 아니다.

이 이미지는 **rendering-tier reference**일 뿐이며 다음을 정의하지 않는다.

- `ARU-IDENTITY-V1`
- `DAMU-IDENTITY-V1`
- `NUA-IDENTITY-V1`
- `PLAYER-HUNT-BODY-V1`
- `DAY1-HANDAXE-V1`
- `WORLD-CAMP-DAWN-A`
- 특정 역사 인물·민족·정확한 복식의 사실 복원

---

## 3. Candidate history

| Revision | Result | Reason |
| --- | --- | --- |
| r01 | REJECTED | historical-restraint failure |
| r02 | REJECTED | `SID-PHOTO`, `SID-LENS`, `SID-EDGE` |
| r03 | SUPERSEDED | old-policy approval; too realistic for GIR-SURFACE-30 |
| r04 | REJECTED | `SID-CARTOON`, `SID-FANTASY`; overly designed fantasy-prehistory cues |
| r05 | **APPROVED / REGISTERED** | GIR-SURFACE-30 + anatomy + extraction + historical restraint PASS |

r04 rejected binary remains outside the approved repository path.

---

## 4. GIR-SURFACE-30 lock inherited downstream

The accepted human surface tier is:

```text
functional believable anatomy / weight / perspective
+
large skin/value planes
+
grouped hair masses
+
broad garment folds/material zones
+
clean readable silhouette
-
photographic pore / body-hair field
-
individual-hair simulation
-
photo-macro fabric/material detail
-
photographic bokeh / shallow DOF / lens language
-
AAA poster / fantasy-barbarian / chibi-cartoon drift
```

The approved r05 is the actual style parent for the next STYLE slot. Its clothing silhouette is not a costume canon and must not be copied as archaeological fact.

---

## 5. Queue handoff

The serial queue now advances exactly one slot:

```text
STYLE-GIR-V1 / human-mid        APPROVED / REGISTERED
STYLE-GIR-V1 / first-person-hand ACTIVE / NEXT (r02)
STYLE-GIR-V1 / world            BLOCKED
STYLE-GIR-V1 / material         BLOCKED
STYLE-GIR-V1 / responsive-pair  BLOCKED

STYLE approved slots            1 / 5
Human Gate                      FAIL
Stage 08                        BLOCKED
```

Next Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md`

The next hand candidate must use the actual registered reference:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

as a **style/detail parent only**, never as Player or named-character identity.
