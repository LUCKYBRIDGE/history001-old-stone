# Stage 07.5 — STYLE-GIR-V1 / first-person-hand Production Job Card

Status: **ACTIVE PRODUCTION SLOT / r01 REJECTED / r02 PENDING**

## 1. Job identity

```text
JOB ID: GIR-FIRST-PERSON-HAND-001
TARGET: STYLE-GIR-V1 / first-person-hand
OUTPUT ROLE: anonymous first-person body style proof
CURRENT REVISION: r02
GENERATION STRATEGY: anchor-conditioned-style-match
```

Required upstream style reference:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp
```

The approved `human-mid.webp` supplies rendering language only. This hand does not define the Player or any named character.

---

## 2. Exact production objective

Produce exactly one current candidate at a time showing an anonymous adult **hand + wrist + enough forearm to judge continuity** while naturally contacting one rough, non-diagnostic natural stone.

The slot locks:

- five-finger functional anatomy,
- finger segment/joint readability,
- wrist-to-forearm transition,
- believable pressure/contact,
- skin/stone finish compatibility,
- clean limb silhouette,
- the same Grounded Illustrative Realism boundary already approved in `human-mid.webp`.

It must not define `PLAYER-HUNT-BODY-V1` or `DAY1-HANDAXE-V1`.

---

## 3. r01 review — REJECTED

The r01 generation family was retried several times under the same slot because the first outputs missed the style boundary.

What consistently worked:

```text
technicalCleanliness = PASS
handAnatomy = PASS
contactReadability = PASS
extractionViability = PASS
historicalRestraint = PASS
```

What failed:

```text
styleBoundary = FAIL
SID-PHOTO
SID-LENS
SID-DETAIL
```

Reason:

- five fingers, wrist continuity and stone contact were generally coherent;
- however skin and rock repeatedly became photographic/macro-detailed;
- scenic depth repeatedly used camera/lens-like separation;
- the result no longer matched the accepted `human-mid.webp` broad painted surface/detail tier.

No r01 retry is approved. **No r01 binary is committed to the repository.**

Machine-readable ledger:

```text
src/experience/production/stage075FirstPersonHandCandidateReviews.ts
```

---

## 4. r02 controlled production instruction

r02 is not another free scenic first-person image. It is an **anchor-conditioned style-match** attempt.

Required:

- use `human-mid.webp` as the actual visual style parent/reference;
- first-person camera;
- one anonymous bare hand, wrist and forearm;
- all five fingers anatomically legible;
- plausible tendon/knuckle/joint sequence;
- natural wrist-to-forearm taper;
- light grip/brace/rest against one rough natural stone;
- clear contact pressure and occlusion;
- broad painted skin planes and restrained creases;
- stone represented through broad planes/roughness groups, not mineral macro photography;
- low-information earth/rock background only;
- edges and detail density must visually belong to the same family as `human-mid.webp`.

Explicitly reduce:

- pores and fine skin relief,
- individual arm hair,
- nail macro detail,
- high-frequency lichen/mineral texture,
- cinematic landscape spectacle,
- bokeh / shallow photographic DOF,
- lens-like foreground/background separation,
- HDR/key-art grading.

Do not include:

- clothing/jewelry/tattoo/modern accessory,
- handaxe-like shaped stone,
- distinctive Player identity,
- named character identity,
- canonical Day 1 geography,
- UI/text/logo.

---

## 5. Immediate reject conditions

```text
ANAT-FINGER
ANAT-WRIST
ANAT-HAND-SCALE
GEO-CONTACT-POINT
SID-PHOTO
SID-LENS
SID-EDGE
SID-DETAIL
SID-COMPOSITE
```

Any unresolved code blocks approval.

A technically attractive image is still rejected if it looks more photographic than the approved human reference.

---

## 6. Acceptance checks

All must pass:

```text
technicalCleanliness
handAnatomy
styleBoundary
contactReadability
extractionViability
historicalRestraint
```

Only after a clean PASS may the binary be stored at:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp
```

Then the serial queue advances to `STYLE-GIR-V1 / world`.

---

## 7. Current gate truth

```text
STYLE-GIR-V1 approved slots = 1 / 5
human-mid = APPROVED / REGISTERED
first-person-hand r01 = REJECTED
first-person-hand r02 = ACTIVE / NEXT / pending-production
world = BLOCKED
material = BLOCKED
responsive-pair = BLOCKED
Human Gate = FAIL
Stage 08 = BLOCKED
```
