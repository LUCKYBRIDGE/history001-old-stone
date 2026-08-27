# Stage 07.5 — Contact Geometry Master

Status: **GEOMETRY-LOCK SPEC / NO IMAGE GENERATED**

Purpose: prevent first-person contact scenes from being solved independently by each generated image. SC02, SC07 and SC10 must use fixed participant/body/object/camera relationships before raster production.

Depends on:

- `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
- `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`

---

# 1. General contact rule

A contact scene is approved only when all four agree:

```text
body anatomy
+ object/environment geometry
+ camera geometry
+ temporal contact state
```

Do not repair a bad contact by enlarging a hand, shrinking an object, moving a wrist independently, or changing FOV between adjacent frames.

Every contact family must have a shared normalized stage coordinate system:

```text
x = 0.00 left ... 1.00 right
y = 0.00 top  ... 1.00 bottom
z = relative depth class, not literal meters
```

Composition variants L / TP / PP may reframe the scene but must preserve contact topology and anatomy.

---

# 2. SC02 — Handaxe Handoff

Contract ID: `SC02-HANDOFF-GEO-V1`

Participants:

- `ARU-IDENTITY-V1`
- `PLAYER-HUNT-BODY-V1`
- `DAY1-HANDAXE-V1`

Pose families:

- `A-OFFER-HANDAXE`
- `A-SHARED-CONTACT`
- `A-RELEASE-HANDAXE`
- `P-HUNT-RECEIVE-REACH`
- `P-HUNT-GRIP-CLOSE`

## 2.1 Contact topology

Offer:

```text
Aru right/selected hand controls grip-support region
Player hand not yet touching
working-end oriented away from Player palm
```

Shared Contact:

```text
Aru hand
→ same DAY1-HANDAXE-V1
→ Player right hand
```

Both hands must visibly contact the same rigid object at compatible depth.

Release:

```text
Player right hand owns grip-base
Aru fingers disengage
object orientation changes only by plausible wrist/object transfer
```

## 2.2 Geometry lock

Before master approval record:

```text
handoff-contact-center-x_L
handoff-contact-center-y_L
handoff-contact-center-x_TP
handoff-contact-center-y_TP
handoff-contact-center-x_PP
handoff-contact-center-y_PP

player-wrist-angle-range
aru-wrist-angle-range
handaxe-long-axis-angle-range
player-grip-coverage-range
aru-support-coverage-range
```

Do not invent final values in a prompt. Values are measured from the approved rough/master and then frozen.

## 2.3 Reject

- object floats between hands,
- extra/merged fingers,
- hands pull from opposite ends as if competing,
- handaxe scale changes Offer→Shared→Release,
- Player hand becomes larger in portrait to preserve readability,
- working-end points into receiving palm with implausible safe transfer,
- Aru forearm length changes between keyframes.

---

# 3. SC07 — Ground Brace / Shared Observation

Contract ID: `SC07-GROUND-BRACE-GEO-V1`

Participants:

- `PLAYER-HUNT-BODY-V1`
- `DAMU-IDENTITY-V1`
- `WORLD-GROUND-OBS-A`
- held `DAY1-HANDAXE-V1`

Pose families:

- `P-HUNT-CROUCH-TRANSITION`
- `P-HUNT-CROUCH-GROUND`
- `P-HUNT-LEFT-GROUND-BRACE`
- `D-CROUCH`
- `D-GROUND-OBSERVE`

## 3.1 Body logic

SC06 ends with:

- Damu stopped/lowered first,
- Player still standing.

SC07 transition:

1. camera height lowers with Player body,
2. Player left hand enters toward stable ground support,
3. left palm contacts ground,
4. right hand keeps the same handaxe but may move lower/off-frame,
5. evidence remains center/center-lower without either hand pointing at it.

## 3.2 Ground contact topology

```text
Player left palm / heel-of-hand
→ ground support patch
```

The evidence patch is adjacent, not underneath the pointing fingers.

Damu must not physically overlap the Player contact hand.

## 3.3 Reject

- Player already crouched in SC06,
- left hand points at evidence like a teaching diagram,
- crouch accomplished by scaling the whole foreground body down,
- handaxe teleports to left hand,
- knee/forearm collision impossible,
- Damu's leg/arm proportions change from standing to crouch.

---

# 4. SC10 — Rock Brace / Shelter Inspection

Contract ID: `SC10-ROCK-BRACE-GEO-V1`

Participants:

- `PLAYER-HUNT-BODY-V1`
- `WORLD-ROCK-SHELTER-A`
- `DAY1-HANDAXE-V1`

Pose families:

- `P-HUNT-LEFT-ROCK-BRACE`
- right-hand held-tool continuation from previous scene family

## 4.1 Contact topology

```text
Player left palm/fingers
→ near entrance rock edge
```

Right hand continues to own the same handaxe.

The rock contact exists to communicate depth and physical proximity, not to create a climbing pose.

## 4.2 Geometry lock

Before master approval record:

```text
rock-contact-edge-id
left-palm-contact-zone
left-wrist-angle-range
camera-to-rock-relative-side
handaxe-visible-zone L/TP/PP
```

The same rock edge must exist in `WORLD-ROCK-SHELTER-A` master.

## 4.3 Reject

- hand penetrates rock,
- rock shape changes just to meet hand,
- left arm stretches unnaturally,
- same handaxe reappears with new shape/scale,
- contact becomes a dramatic climbing pose,
- portrait crop removes the contact proof.

---

# 5. Contact Master Artifact Set

For each contract create:

1. skeleton/line rough,
2. contact-point overlay,
3. neutral anatomy overlay,
4. object/world geometry overlay,
5. clean L keyframe,
6. clean TP keyframe,
7. clean PP keyframe,
8. adjacent-frame strip demonstrating continuity.

These are reference masters, not final UI screenshots. No dialogue/button/curriculum text may be baked into them.

---

# 6. Contact Drift Codes

```text
GEO-CONTACT-DEPTH     participants do not occupy compatible depth
GEO-CONTACT-POINT     required surfaces do not physically meet
GEO-CONTACT-TOPOLOGY  wrong ownership/order of contact chain
GEO-OBJECT-SCALE      object scale changes to solve the pose
GEO-LIMB-SCALE        limb scale changes to solve the composition
GEO-CAMERA            contact only works because camera/FOV changes illegally
GEO-CROP              L/TP/PP crop loses required contact proof
GEO-TEMPORAL          adjacent keyframes do not describe one continuous action
```

Any unresolved `GEO-*` on SC02/SC07/SC10 is P1.

---

# 7. Production order

```text
body/character proportion master
→ object/world master
→ contact skeleton rough
→ contact geometry review
→ unified contact keyframe
→ L/TP/PP adaptation
→ continuity strip review
→ scene raster candidate
```

Never reverse this order by generating the final dramatic scene first and discovering the skeleton afterward.
