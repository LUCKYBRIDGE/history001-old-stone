# Stage 07.5 — STYLE-GIR-V1 / human-mid Production Job Card

Status: **APPROVED / REGISTERED / CLOSED**

## 1. Job identity

```text
JOB ID: GIR-HUMAN-MID-001
TARGET: STYLE-GIR-V1 / human-mid
OUTPUT ROLE: style-proof / anonymous human
APPROVED REVISION: r03
REGISTERED PATH: public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

This image is a **human rendering tier reference only**. It is not Aru, Damu, Nua, the Player, or a historically documented individual.

---

## 2. Final review decision

r03 passed all machine-readable review checks:

```text
technicalCleanliness = PASS
structuralAnatomy = PASS
styleBoundary = PASS
extractionViability = PASS
historicalRestraint = PASS
driftCodes = []
```

Approval rationale:

- anatomy, weight and posture remain functionally believable,
- face reads primarily through structure/planes rather than photographic pore detail,
- hair reads as mass/silhouette rather than individual-strand simulation,
- skin/material surfaces remain painterly and illustrative,
- background depth is readable without photographic shallow-DOF dependence,
- outer silhouette is clean enough to serve as a style reference for later extraction-oriented production,
- clothing remains a low-specificity reconstruction rather than a canonical archaeological costume claim,
- no downstream hero/Player/object/world identity is locked by this image.

Minor hair/fold/background variation is P3 and does not block this style-proof approval.

---

## 3. Candidate history

| Revision | Technical | Anatomy | Style | Extraction | Historical restraint | Drift codes | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| r01 | PASS | PASS | PASS | PASS | FAIL | none | REJECTED |
| r02 | PASS | PASS | FAIL | FAIL | PASS | `SID-PHOTO`, `SID-LENS`, `SID-EDGE` | REJECTED |
| r03 | PASS | PASS | PASS | PASS | PASS | none | **APPROVED** |

r01/r02 rejected binaries remain outside approved asset paths.

---

## 4. What r03 locks

The accepted STYLE-GIR human tier is:

```text
functional anatomy / believable weight / readable depth
+
illustratively simplified skin planes, hair masses and garment folds
+
clean reusable silhouette
-
photographic pore field / beauty-photo skin
-
individual-hair simulation
-
photographic bokeh / shallow DOF / lens language
-
AAA poster / fantasy barbarian / cartoon drift
```

It does **not** lock:

- `ARU-IDENTITY-V1`
- `DAMU-IDENTITY-V1`
- `NUA-IDENTITY-V1`
- `PLAYER-HUNT-BODY-V1`
- `DAY1-HANDAXE-V1`
- `WORLD-CAMP-DAWN-A`

---

## 5. Queue handoff

The serial queue now advances to:

```text
STYLE-GIR-V1 / first-person-hand
```

The approved `human-mid.webp` must be supplied as the **style/detail reference** for that next slot, but not as an identity parent.

Next Job Card:

```text
handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md
```

---

## 6. Gate truth

```text
STYLE-GIR-V1 status = reference-pending
human-mid = APPROVED / REGISTERED
first-person-hand = ACTIVE / NEXT
STYLE approved slots = 1 / 5
STYLE remaining slots = 4 / 5
Human Gate = FAIL
Stage 08 = BLOCKED
```

STYLE-GIR-V1 itself remains unapproved until all five required slots are approved and registered.
