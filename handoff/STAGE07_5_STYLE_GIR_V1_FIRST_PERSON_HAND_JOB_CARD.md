# Stage 07.5 — STYLE-GIR-V1 / first-person-hand Production Job Card

Status: **BLOCKED-UPSTREAM / r01 REJECTED / r02 RESERVED**

## 1. Job identity

```text
JOB ID: GIR-FIRST-PERSON-HAND-001
TARGET: STYLE-GIR-V1 / first-person-hand
OUTPUT ROLE: anonymous first-person body style proof
STYLE POLICY: GIR-SURFACE-30
TARGET SURFACE REALISM: 30 / 100
CURRENT REVISION: r02
GENERATION STRATEGY: anchor-conditioned-style-match
STATUS: blocked-upstream
```

Planned approved path:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp
```

---

## 2. Upstream block

This slot requires one actual approved human style reference at:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

There is currently no valid approved file at that path.

`human-mid r05` was visually reviewed previously, but its canonical repository payload was later found not to be a valid WebP container. Its registration was invalidated and the payload removed. `human-mid r06` is now the active upstream production target.

Therefore:

```text
human-mid r06 ACTIVE / NEXT
→ first-person-hand r02 BLOCKED-UPSTREAM
```

Do not generate r02 until the human slot is again approved, raster-valid and exactly registered.

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

The r01 family repeatedly used photographic skin/vein/nail/rock microdetail and lens-like depth. No r01 binary is approved or committed.

---

## 4. Exact r02 target after unlock

Once a new valid human style parent is registered, use that **actual canonical raster** as the style/detail parent.

Required physical logic:

- first-person camera;
- one anonymous hand + wrist + enough forearm;
- five readable fingers;
- plausible joints/knuckles;
- natural wrist-to-forearm taper;
- believable pressure/occlusion against one rough non-diagnostic stone.

Required GIR-30 surface treatment:

- broad skin planes;
- only a few representative creases;
- minimal/no body-hair texture field;
- veins only when necessary to explain large form;
- simple nail shape/value with no macro cuticle/reflection treatment;
- stone described by major planes/roughness groups rather than exhaustive cracks/grain;
- low-information contextual background;
- no photographic bokeh, shallow DOF, lens flare, cinematic vista or HDR key-art treatment.

The result must read immediately as an illustration near **30/100 surface realism**, within the 25–35 acceptance band.

---

## 5. Must not define

- `PLAYER-HUNT-BODY-V1`
- `DAY1-HANDAXE-V1`
- `ARU-IDENTITY-V1`
- `DAMU-IDENTITY-V1`
- `NUA-IDENTITY-V1`
- canonical Day 1 geography

The rough stone is not the handaxe. Do not establish its canonical contour, face-A/B, grip-base, working-end or scar fingerprint.

---

## 6. Review / reject after unlock

All must pass:

```text
technicalCleanliness
handAnatomy
styleBoundary
contactReadability
extractionViability
historicalRestraint
```

Immediate reject codes include:

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
ASSET-BINARY-INVALID
```

The final canonical WebP must also pass repository raster-integrity verification before registration.

---

## 7. Current gate truth

```text
STYLE-GIR-V1 approved slots = 0 / 5
human-mid r05 = SUPERSEDED / REGISTRATION INVALID
human-mid r06 = ACTIVE / NEXT
first-person-hand r01 = REJECTED
first-person-hand r02 = BLOCKED-UPSTREAM
world = BLOCKED
material = BLOCKED
responsive-pair = BLOCKED
Human Gate = FAIL
Stage 08 = BLOCKED
```

Next actual visual-production action is **not** a hand candidate. It is one `human-mid r06` candidate.
