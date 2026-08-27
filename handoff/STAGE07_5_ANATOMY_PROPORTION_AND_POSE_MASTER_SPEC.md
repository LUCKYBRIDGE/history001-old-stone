# Stage 07.5 — Anatomy, Proportion & Pose Master Spec

Status: **REFERENCE-LOCK SPEC / NO IMAGE GENERATED**

Purpose: define the physical-body invariants that must be locked before any Stage 07.5 character, first-person body, or contact raster can be approved.

This document narrows the existing visual continuity system. It does not replace `docs/06_TECH_BLUEPRINT.md` as Technical SSOT.

Depends on:

- `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`

---

# 1. Core rule

A character master is not a face reference.

A usable master packet must lock:

- skeleton proportions,
- head-to-body ratio,
- shoulder/torso/pelvis relationship,
- arm/forearm/hand relationship,
- thigh/shin/foot relationship,
- left/right asymmetry only where intentional,
- hand morphology,
- garment silhouette over the body,
- neutral standing center of mass,
- seated/crouched center of mass,
- repeated movement identity.

Scene assets may vary pose, camera, crop and lighting. They may not silently redesign anatomy.

---

# 2. Production-neutral anatomical policy

Do not lock a modern population stereotype, exact hominin species morphology, exact age, or exact sex without evidence.

Therefore these constraints are **relative production constraints**, not claims about a single archaeologically proven body type.

Use:

- natural human skeletal logic,
- believable joint articulation,
- moderate non-heroic body proportions,
- no exaggerated primitive/caveman anatomy,
- no fashion-illustration long limbs,
- no superhero shoulder/torso proportions,
- no childlike chibi head scale.

The goal is stable believable embodiment, not a pseudo-scientific reconstruction of a specific individual.

---

# 3. Required Master Packet — Player Hunt Body

Anchor: `PLAYER-HUNT-BODY-V1`

## 3.1 Required master views

Before approval, the packet must include:

1. first-person neutral standing hand/forearm reference,
2. right-hand palm and dorsum reference,
3. left-hand palm and dorsum reference,
4. right forearm relaxed,
5. right forearm reaching,
6. right hand closed around `DAY1-HANDAXE-V1` grip-base,
7. left hand ground-brace pose,
8. left hand rock-brace pose,
9. seated lower-body edge reference,
10. crouched knee/forearm relationship reference,
11. walking-carry view,
12. receive-tool view.

## 3.2 Immutable body relationships

The approved master must record normalized ratios using `palm-length = 1.00` as local reference.

Required fields:

```text
palm-length                 = 1.00
middle-finger-length        = locked ratio
palm-width                  = locked ratio
wrist-width                 = locked ratio
visible-forearm-length      = locked ratio by pose family
handaxe-grip-width          = locked against DAY1-HANDAXE-V1
```

Do not hard-code archaeological claims into these ratios. Lock the chosen production body after review, then enforce it consistently.

## 3.3 First-person perspective rules

- Hand size must be consistent with camera/FOV, not enlarged for readability without documenting a camera change.
- Two symmetric arms at the lower edge are forbidden as a default HUD pose.
- A hand enters frame because an action requires it.
- Wrist articulation must stay within believable joint range.
- Forearm foreshortening must come from camera geometry, not arbitrary per-scene scaling.
- Skin/contamination range must stay within the approved master packet.
- Garment cuff/sleeve edge, if visible, must not change silhouette between scenes without an in-world cause.

---

# 4. Required Master Packet — Aru / Damu / Nua

Each hero character requires a complete turnaround/proportion sheet before scene-specific production.

Required views:

1. full-body front,
2. full-body back,
3. 3/4 left,
4. 3/4 right,
5. strict left profile,
6. strict right profile,
7. seated neutral,
8. low crouch,
9. walking stride,
10. reaching/handing pose if relevant,
11. hand close-up,
12. head silhouette strip.

## 4.1 Skeleton landmarks to lock

Each packet must explicitly mark:

- top of head,
- chin,
- shoulder line,
- elbow line in neutral stance,
- wrist line,
- pelvis center,
- knee line,
- ankle line,
- hand length,
- foot length,
- center-of-mass reference.

The sheet should use a neutral height unit `H = 1.00` and record relative vertical landmarks.

Example schema:

```text
character-height H = 1.00
head-height          = locked
shoulder-y           = locked
pelvis-y             = locked
knee-y               = locked
arm-span / H         = locked
hand-length / H      = locked
foot-length / H      = locked
```

The numeric values are chosen after master review. They are production locks, not historical population statistics.

## 4.2 Movement identity

Aru:

- restrained center of mass,
- small forward lean before handoff,
- verifies person/object before release,
- no theatrical gesture language.

Damu:

- readable forward stride,
- clear deceleration before stop,
- center of mass drops before crouch,
- waiting posture distinct from walking posture.

Nua:

- attention change begins in head,
- shoulder follows,
- torso follows last,
- no independent eye-only magic cue.

These movement habits are identity constraints. They may not be reinterpreted independently per image.

---

# 5. Pose Family IDs

Player:

```text
P-HUNT-REST-SEATED
P-HUNT-RECEIVE-REACH
P-HUNT-GRIP-CLOSE
P-HUNT-INSPECT-HANDAXE
P-HUNT-RISE
P-HUNT-WALK-CARRY
P-HUNT-STAND-STOP
P-HUNT-CROUCH-TRANSITION
P-HUNT-CROUCH-GROUND
P-HUNT-LEFT-GROUND-BRACE
P-HUNT-LEFT-ROCK-BRACE
```

Aru:

```text
A-NEAR-FIRE-NEUTRAL
A-OFFER-HANDAXE
A-SHARED-CONTACT
A-RELEASE-HANDAXE
A-WATCH-DEPARTURE
```

Damu:

```text
D-PREPARE
D-WALK
D-WAIT
D-STOP
D-CROUCH
D-GROUND-OBSERVE
```

Nua:

```text
N-OUTWARD-IDLE
N-WALK
N-ATTENTION-HEAD
N-ATTENTION-SHOULDER
N-ATTENTION-TORSO
```

A new pose that cannot be derived from an approved family requires a new pose review; it must not silently become a new body design.

---

# 6. Camera / body interaction

Body proportion validation is meaningless without camera validation.

Every body/contact candidate must record:

- composition family: `L / TP / PP`,
- camera profile ID from Scene Bible,
- approximate camera height class,
- yaw/pitch state,
- whether the limb is foreground or middle-distance,
- intended foreshortening direction.

Reject if a candidate appears to fix composition by simply enlarging/shrinking a limb independently of the camera.

---

# 7. Anatomy Drift Codes

```text
ANAT-HAND-SCALE      hand size changed relative to forearm/object
ANAT-FINGER          finger count/length/articulation failure
ANAT-WRIST           impossible or inconsistent wrist angle
ANAT-ARM-LENGTH      upper/lower arm proportion drift
ANAT-SHOULDER        shoulder width/placement drift
ANAT-TORSO           torso length/volume drift
ANAT-PELVIS          pelvis/hip relationship drift
ANAT-LEG-LENGTH      thigh/shin relationship drift
ANAT-COM             impossible center-of-mass / balance
ANAT-FOV             limb scale changed because FOV/camera was not preserved
ANAT-POSE-ID         pose no longer matches approved pose-family skeleton
```

`ANAT-*` is a P1 reject for hero/contact assets.

---

# 8. Approval packet checklist

A master body/character anchor cannot reach `anchor-approved` until:

- turnaround views agree,
- limb ratios agree,
- hands agree,
- pose-family silhouettes agree,
- garment silhouette does not hide anatomy drift,
- L/TP/PP test framing does not require anatomy rescaling,
- no `ANAT-*` P1 remains,
- source/master file path is recorded.

---

# 9. Current lock order

```text
STYLE-GIR-V1
→ DAY1-HANDAXE-V1 morphology/scale
→ PLAYER-HUNT-BODY-V1 anatomy packet
→ ARU-IDENTITY-V1 anatomy/turnaround packet
→ SC02 Contact Geometry Master
→ DAMU-IDENTITY-V1
→ NUA-IDENTITY-V1
→ remaining scene families
```

This order minimizes cascading rework.
