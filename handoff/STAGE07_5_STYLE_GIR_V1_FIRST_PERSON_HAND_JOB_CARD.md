# Stage 07.5 — STYLE-GIR-V1 / first-person-hand Production Job Card

Status: **BLOCKED UPSTREAM / r01 REJECTED / r02 RESERVED**

## 1. Job identity

```text
JOB ID: GIR-FIRST-PERSON-HAND-001
TARGET: STYLE-GIR-V1 / first-person-hand
OUTPUT ROLE: anonymous first-person body style proof
STYLE POLICY: GIR-SURFACE-30
TARGET SURFACE REALISM: 30 / 100
CURRENT REVISION NUMBER: r02
GENERATION STRATEGY: anchor-conditioned-style-match
STATUS: blocked-upstream
BLOCKED BY: STYLE-GIR-V1 / human-mid
```

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp
```

There is currently **no approved upstream human style reference**. Therefore r02 must not be generated yet.

---

## 2. Why this slot is blocked again

The former `human-mid r03` reference was approved under an older qualitative STYLE-GIR boundary. The Project-owner later fixed the intended **surface/rendering realism at about 30/100**, with a 25–35 acceptance band.

r03 is now superseded under `GIR-SURFACE-30`, and its former canonical binary has been removed from the approved anchor path.

Therefore:

```text
human-mid r04 GIR-30 approval
→ required first
→ then first-person-hand r02 may resume
```

Do not use the superseded r03 binary as a visual parent.

---

## 3. r01 review — REJECTED

What worked:

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

The generated family repeatedly used:

- photographic skin texture,
- visible veins/creases/hair at photo density,
- highly detailed nails,
- macro-like rock/mineral texture,
- scenic lens separation and shallow DOF.

This failure is even clearer under GIR-SURFACE-30. No r01 binary is approved or committed.

---

## 4. r02 target after upstream unlock

When a new `human-mid` is approved, r02 must use that exact approved GIR-30 reference as the style parent.

Required physical logic:

- first-person camera,
- one anonymous hand + wrist + enough forearm,
- five readable fingers,
- plausible joints/knuckles,
- natural wrist-to-forearm taper,
- believable pressure/occlusion against one rough non-diagnostic stone.

Required surface simplification:

- broad skin planes,
- only a few representative creases,
- minimal or no visible body hair,
- veins only if needed for large form, not decorative texture,
- simple nail shape/value with no macro reflection/cuticle rendering,
- rock described by major planes/roughness groups, not exhaustive cracks/grain,
- low-information shape/value background,
- no lens bokeh or cinematic vista.

The result must read immediately as an illustration near **30/100 surface realism**, not as a game cinematic or photo.

---

## 5. Must not define

- `PLAYER-HUNT-BODY-V1`,
- `DAY1-HANDAXE-V1`,
- `ARU-IDENTITY-V1`,
- `DAMU-IDENTITY-V1`,
- `NUA-IDENTITY-V1`,
- canonical Day 1 geography.

The stone must remain non-diagnostic:

- no handaxe contour,
- no face-A/B,
- no grip-base,
- no working-end,
- no canonical scar fingerprint.

---

## 6. Immediate reject conditions after unlock

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

Also reject if the assigned surface realism is clearly outside the GIR-30 25–35 band.

---

## 7. Current gate truth

```text
STYLE-GIR-V1 approved slots = 0 / 5
human-mid r04 = ACTIVE / NEXT
first-person-hand r01 = REJECTED
first-person-hand r02 = BLOCKED UPSTREAM
world = BLOCKED
material = BLOCKED
responsive-pair = BLOCKED
Human Gate = FAIL
Stage 08 = BLOCKED
```

No hand image should be generated until the upstream GIR-30 human reference is approved and registered.
