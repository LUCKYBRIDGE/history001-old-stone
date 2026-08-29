# Stage 07.5 — Anatomy, Proportion & Pose Master Spec

Status: **REFERENCE-LOCK SPEC / NO IMAGE GENERATED**

Purpose: define the physical-body invariants that must be locked before any Stage 07.5 character, first-person body, or contact raster can be approved.

This document narrows the existing visual continuity system. It does not replace `docs/06_TECH_BLUEPRINT.md` as Technical SSOT.

Depends on:

- `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_FUNCTIONAL_ANATOMY_AND_STYLIZED_PROPORTION_POLICY.md`
- `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`

---

# 1. Core rule

A character master is not a face reference.

A usable master packet must lock:

- skeleton proportions,
- exact canonical head-to-body ratio selected for that design,
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

# **Functional anatomy is mandatory. Photographic 6-head / 7-head / 8-head proportion convention is not.**

# **After approval, one identity has one exact canonical proportion fingerprint.**

---

# 2. Production-neutral anatomical policy

Do not lock a modern population stereotype, exact hominin species morphology, exact age, exact sex, or conventional textbook/fashion head-count target without a production reason.

Therefore these constraints are **relative production constraints**, not claims about a single archaeologically proven body type and not instructions to reproduce a modern photographic adult proportion chart.

Required:

- mechanically plausible skeletal/joint logic,
- believable joint articulation,
- coherent reach and contact geometry,
- stable center-of-mass/balance,
- stable character-specific proportion fingerprint,
- no exaggerated primitive/caveman anatomy,
- no superhero/fashion-illustration anatomy imposed only to look impressive,
- no chibi/bobble-head caricature,
- no arbitrary limb stretching to fit a frame.

Allowed before deliberate master approval:

- relatively larger or smaller head,
- shorter or longer torso,
- shorter or longer limbs,
- slightly emphasized hands or feet,
- broader or narrower shoulder-to-pelvis relationship,
- compact or elongated overall silhouette.

The goal is stable believable **functional embodiment**, not photographic body-proportion conformity.

No candidate fails merely because it is not 6/7/8 heads tall. But once a specific design is approved, its own measured proportion values are fixed identity data.

Example:

```text
approved canonical head-count = 7.2
```

means the underlying body remains 7.2-head across front/back/side/action derivatives. A later underlying 6.8-head body is drift, not acceptable variation.

---

# 3. Master creation order — structure first, identity second

Do not independently generate front / side / back / action images and then try to average them into one person.

Hero-character order:

```text
STRUCTURAL SCAFFOLD
→ CANONICAL IDENTITY MASTER
→ APPEARANCE / GARMENT LOCK
→ TURNAROUND DERIVATIVES
→ MOTION / CONTACT DERIVATIVES
→ MEASURED PROPORTION CONTRACT
```

Player order:

```text
PLAYER STRUCTURAL SCAFFOLD
→ PLAYER NEUTRAL BODY MASTER
→ HAND / ARM / FOOT / ANKLE REFERENCE DERIVATIVES
→ ACTION DERIVATIVES
→ MEASURED PROPORTION CONTRACT
```

The structural scaffold locks joints, segment relationships, reach envelope, center-of-mass logic and intended silhouette family.
The canonical identity/body master locks the actual approved fictional design.
Numeric ratios are measured **once after that approval** and then become immutable production locks.

---

# 4. Required Master Packet — Player Hunt Body

Anchor: `PLAYER-HUNT-BODY-V1`

## 4.1 Required master views

Before approval, the packet must include:

1. Player structural scaffold / neutral body proportion reference,
2. first-person neutral standing hand/forearm reference,
3. right-hand palm and dorsum reference,
4. left-hand palm and dorsum reference,
5. right forearm relaxed,
6. right forearm reaching,
7. right hand closed around `DAY1-HANDAXE-V1` grip-base,
8. left hand ground-brace pose,
9. left hand rock-brace pose,
10. right foot/ankle reference,
11. left foot/ankle reference,
12. seated lower-body edge reference,
13. crouched knee/forearm relationship reference,
14. walking-carry view,
15. receive-tool view.

## 4.2 Immutable body relationships

The approved master must record normalized ratios using `palm-length = 1.00` as a useful local hand reference, plus foot/ankle relationships where visible.

Required fields include:

```text
palm-length                 = 1.00
middle-finger-length        = locked ratio
palm-width                  = locked ratio
wrist-width                 = locked ratio
visible-forearm-length      = locked ratio by pose family
handaxe-grip-width          = locked against DAY1-HANDAXE-V1
foot-length                 = locked local ratio
ankle-width                 = locked local ratio
```

Do not invent these numbers first. Measure the chosen approved Player body once, record the result, then require every derivative to inherit that same underlying ratio set.

## 4.3 First-person perspective rules

- Hand size must be consistent with camera/FOV, not enlarged for readability without documenting a camera change.
- Two symmetric arms at the lower edge are forbidden as a default HUD pose.
- A hand enters frame because an action requires it.
- Wrist articulation must stay within believable joint range.
- Forearm foreshortening must come from camera geometry, not arbitrary per-scene scaling.
- Feet/ankles, when visible, must belong to the same Player body family as the hands/arms.
- Screen-projected limb length may change under perspective, but canonical hand/arm/foot relationships may not.
- Skin/contamination range must stay within the approved master packet.
- Garment cuff/sleeve/ankle edge, if visible, must not change silhouette between scenes without an in-world cause.

---

# 5. Required Master Packet — Aru / Damu / Nua

Each hero character requires a coherent canonical identity/body master and derived turnaround/proportion sheet before scene-specific production.

Required views:

1. canonical full-body 3/4 identity master,
2. full-body front derivative,
3. full-body back derivative,
4. opposite 3/4 derivative,
5. strict left profile derivative,
6. strict right profile derivative,
7. seated neutral,
8. low crouch,
9. walking stride,
10. reaching/handing pose if relevant,
11. hand close-up,
12. head silhouette strip.

Every derivative must inherit from the same structural scaffold + canonical identity master. A view that becomes another person/body is rejected even when the face remains superficially similar.

## 5.1 Skeleton landmarks to lock

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

The sheet should use a neutral height unit `H = 1.00` and record relative landmarks from the approved design.

Example schema:

```text
character-height H      = 1.00
canonical-head-count    = measured from approved master
head-height / H         = measured from approved master
shoulder-width / H      = measured from approved master
shoulder-y / H          = measured from approved master
pelvis-y / H            = measured from approved master
knee-y / H              = measured from approved master
arm-span / H            = measured from approved master
upper-arm / H           = measured from approved master
forearm / H             = measured from approved master
hand-length / H         = measured from approved master
thigh / H               = measured from approved master
shin / H                = measured from approved master
foot-length / H         = measured from approved master
```

There is no universal required `heads tall` target.
However, if head-count is recorded from the approved neutral master, that recorded value becomes canonical identity metadata and may not change across derivatives.

Example:

```text
Aru canonical-head-count = 7.2
```

is a lock, not a suggestion. It must not become a new underlying 6.8 or 7.5 value in another generated view.

## 5.2 Movement identity

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

# 6. Canonical proportion fingerprint

After a Player or hero master is approved, its own chosen proportions become P0 identity.

Canonical locked values include:

- canonical head-count, when recorded,
- head-height/H,
- shoulder-width/H,
- shoulder/pelvis relationships,
- upper-arm/forearm relationship,
- thigh/shin relationship,
- hand/foot scale relationships,
- body-mass distribution family.

Allowed changes:

- pose,
- expression,
- gaze,
- perspective foreshortening,
- camera distance,
- minor cloth/hair deformation.

Not allowed:

- head/body ratio reset,
- canonical head-count drift,
- shoulder/pelvis width relationship reset,
- upper-arm/forearm relationship change,
- thigh/shin relationship change,
- hand/foot scale relationship reset,
- body-mass distribution becoming another body,
- front/side/back turnaround using incompatible skeleton proportions.

A candidate that looks like the same face placed on a different body is a P0 identity failure.

---

# 7. Canonical ratio vs projected appearance

Do not confuse body identity with screen-space measurement.

The canonical fingerprint is measured in the neutral master/scaffold and remains fixed.

A rendered frame can show different apparent ratios because of:

- perspective,
- foreshortening,
- camera yaw/pitch,
- seated/crouched pose,
- partial occlusion,
- crop.

These are projection effects only.

Review rule:

```text
same canonical scaffold + different camera/pose = allowed
new canonical scaffold/body ratio disguised as camera/pose = reject
```

Do not re-measure a perspective-distorted frame and use that result to redefine the character's canonical proportion.

---

# 8. Pose Family IDs

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

# 9. Camera / body interaction

Body proportion validation is meaningless without camera validation.

Every body/contact candidate must record:

- composition family: `L / TP / PP`,
- camera profile ID from Scene Bible,
- approximate camera height class,
- yaw/pitch state,
- whether the limb is foreground or middle-distance,
- intended foreshortening direction.

Reject if a candidate appears to fix composition by simply enlarging/shrinking a limb independently of the camera.

A stylized canonical body may project differently under perspective; camera projection does not authorize changing the underlying master ratios.

---

# 10. Anatomy Drift Codes

```text
ANAT-HAND-SCALE      hand size changed relative to forearm/object
ANAT-FINGER          finger count/length/articulation failure
ANAT-WRIST           impossible or inconsistent wrist angle
ANAT-ARM-LENGTH      upper/lower arm proportion drift
ANAT-SHOULDER        shoulder width/placement drift
ANAT-TORSO           torso length/volume drift
ANAT-PELVIS          pelvis/hip relationship drift
ANAT-LEG-LENGTH      thigh/shin relationship drift
ANAT-FOOT-SCALE      foot/ankle scale changed relative to Player/body master
ANAT-HEAD-BODY       canonical head/body proportion or recorded head-count changed between derivatives
ANAT-COM             impossible center-of-mass / balance
ANAT-FOV             limb scale changed because FOV/camera was not preserved
ANAT-POSE-ID         pose no longer matches approved pose-family skeleton
```

`ANAT-*` is a P1 structural reject for hero/contact assets; `ANAT-HEAD-BODY` that changes the canonical body fingerprint is also a P0 identity failure.

---

# 11. Approval packet checklist

A master body/character anchor cannot reach `anchor-approved` until:

- structural scaffold exists,
- one canonical body/identity master is selected,
- canonical normalized ratios are measured once and recorded,
- canonical head-count is recorded if used as an identity metric,
- turnaround views are derivatives of that same master family,
- all derivative skeletons remain explainable by the exact canonical proportion fingerprint,
- limb ratios agree with the measured canonical proportion fingerprint,
- hands/feet agree with the same body family,
- pose-family silhouettes remain coherent,
- garment silhouette does not hide anatomy drift,
- L/TP/PP test framing does not require anatomy rescaling,
- no required 6/7/8-head target was imposed as a realism gate,
- no `ANAT-*` P1 remains,
- source/master file path is recorded.

---

# 12. Current lock order

```text
STYLE-GIR-V1
→ DAY1-HANDAXE-V1 morphology/scale
→ PLAYER-HUNT-BODY-V1 structural scaffold + canonical body master
→ PLAYER-HUNT-BODY-PROP-V1 measured exact-ratio contract
→ ARU-IDENTITY-V1 structural scaffold + canonical identity master + derivatives
→ ARU-PROP-V1 measured exact-ratio contract
→ SC02 Contact Geometry Master
→ DAMU-IDENTITY-V1
→ NUA-IDENTITY-V1
→ remaining scene families
```

This order minimizes cascading rework and prevents multi-image identity averaging or proportion drift.
