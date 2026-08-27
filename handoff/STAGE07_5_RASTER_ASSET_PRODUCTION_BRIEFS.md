# Stage 07.5 — Raster Asset Production Briefs

Status: **BRIEFS READY / NO IMAGE GENERATION PERFORMED**

Depends on:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
- `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

Goal: define the first coherent real-image batch required to replace the current CSS/SVG-like human/body/world proof without expanding into Stage 08.

---

# 1. Shared production rules

## Final visual language

- Grounded Illustrative Realism.
- Natural human anatomy and believable hand/object contact.
- No caveman caricature.
- No hyper-photoreal uncanny skin.
- No modern camping visual grammar.
- No textbook cutaway or black silhouette final art.

## Image families

- `L` = landscape master.
- `P` = portrait master candidate.
- If one P asset cannot safely serve both tablet portrait and phone portrait, split to `TP` and `PP` after crop QA.

## Raster source/export

Authoring master may be PNG/PSD-equivalent workflow where useful.
Runtime target:

- world: AVIF/WebP,
- transparent foreground: WebP alpha,
- contact keyframe: WebP/AVIF optimized derivative; PNG source master allowed.

## Never bake into the raster

- Korean dialogue,
- curriculum terminology,
- buttons,
- debug labels,
- safe-zone guides.

These remain runtime UI.

---

# 2. Shared identity anchors required before scene variants

## ARU-ANCHOR-V1

Player-facing call-name: 아루.

Visual requirements:

- fictional naturalistic Paleolithic community member,
- no modern ethnicity stereotype lock,
- no exaggerated brow/hair/caveman coding,
- immediately distinguishable through silhouette/posture rather than costume gimmick,
- habitual slightly restrained posture; attention often checks people before object transfer,
- clothing remains low-specificity reconstruction.

Required outputs:

- neutral 3/4 body reference,
- near-fire standing/sitting posture reference,
- hand anatomy reference for SC02.

## DAMU-ANCHOR-V1

Requirements:

- visibly distinct from Aru without bright costume coding,
- movement silhouette readable,
- stride/wait/stop/crouch variants derive from one identity,
- clothing and body mass remain consistent across distance.

## NUA-ANCHOR-V1

Requirements:

- distinct head/hair silhouette from Aru/Damu,
- repeated outward-attention body habit,
- attention shift must be readable from head→shoulder→torso, not magic gaze line.

## B1/B2 BACKGROUND GROUP

Low-detail continuity anchors only.

- B1 = fire/material work continuity.
- B2 = shelter/material work continuity.
- no hero-level face detail required.

## DAY1-HANDAXE-V1

Document:

- face-A,
- face-B,
- grip-base,
- working-end,
- overall proportion based on approved Korean Paleolithic references.

The exact same object identity must survive all SC02→SC10 variants.

---

# 3. PV-01 / SC01 — Living Camp

## Production mode

Mode A — layered composite.

## Required raster assets

### World

- `hunt_world_camp_dawn_L_v01`
- `hunt_world_camp_dawn_P_v01`

World requirements:

- predawn/dawn low contrast but readable silhouettes,
- irregular temporary shelter integrated into terrain,
- fire area not centered like a campsite icon,
- no triangular camping-tent silhouette,
- enough middle-ground depth for 5+ people without lineup composition.

### Actors

- Aru near-fire neutral/working pose,
- Damu preparation/movement-ready pose,
- Nua outward-attention pose,
- B1/B2 background work group.

### Player body

- only a small seated-body/knee edge if composition benefits;
- do not place two symmetric arms at the bottom by default.

## Landscape composition

- camp/fire/Aru left-of-center,
- Damu right-center,
- Nua deeper/right but within 4:3 safe zone,
- B1/B2 actions form environmental life rather than NPC lineup.

## Portrait composition

Recompose, do not simple-crop.

Vertical stack:

1. environment/depth,
2. Damu/Nua upper-middle,
3. Aru/fire mid-lower,
4. optional Player body bottom edge.

## Reject if

- all actors face Player,
- people look like quest markers,
- shelter resembles an icon/tent,
- portrait loses Nua,
- Player body dominates the lower half.

---

# 4. PV-02 / SC02 — Handaxe Handoff

## Production mode

Mode B — Unified Contact Keyframe.

This is the highest-priority real-image proof.

## Required frames

### L family

- `hunt_contact_handoff_offer_L_v01`
- `hunt_contact_handoff_shared_L_v01`
- `hunt_contact_handoff_release_L_v01`

### P family

- `hunt_contact_handoff_offer_P_v01`
- `hunt_contact_handoff_shared_P_v01`
- `hunt_contact_handoff_release_P_v01`

## Shared Contact geometry

The raster must physically show:

```text
Aru hand
→ DAY1-HANDAXE-V1
→ Player right hand
```

Requirements:

- object not floating,
- Player right hand approaches grip-base,
- Aru still controls part of the object during shared-contact frame,
- no impossible wrist bend,
- hands are at compatible depth,
- handaxe size consistent with previous/next frames,
- same face/orientation family survives Release.

## Portrait composition

Critical contact should move toward central-lower safe corridor.
Aru body may be cropped more aggressively, but the handoff chain cannot be cropped.

## Reject if

- handaxe looks like a spearhead/knife,
- extra fingers or merged fingers,
- both people appear to pull from opposite ends,
- contact is hidden by dialogue/button,
- portrait is merely landscape crop with one hand missing.

---

# 5. PV-03 / SC03→04 — Tool Naming + World Resume

## Production mode

Hybrid Mode A/C.

## Required assets

- Player right-hand held-handaxe foreground L/P,
- Damu moving-away variant L/P,
- Nua outward-scan variant L/P,
- camp world family continuity from PV-01.

## Key rule

The tool naming overlay is runtime UI.
The raster must remain alive underneath it.

Frame logic:

```text
same handaxe in hand
+ Damu already beginning to move
+ Nua still attentive elsewhere
→ Player follows
```

## Portrait

Place held tool lower-right/center-right without covering Damu.
Damu may occupy upper-middle instead of far right.

## Reject if

- held tool becomes a centered inventory showcase,
- annotation would need to cover the tool/contact to fit,
- world appears paused for a lesson card.

---

# 6. PV-04 / SC05 — Departure Spatial Proof

## Production mode

Mode C — locked environment variation.

## Required world assets

- `hunt_world_departure_diagonal_L_v01`
- `hunt_world_departure_forward_L_v01`
- `hunt_world_departure_diagonal_P_v01`
- `hunt_world_departure_forward_P_v01`

These must be derived from the same camp/route geography.

## Stage A relationship

- camp/fire/Aru = behind-left / peripheral,
- Damu/Nua = ahead/right-forward,
- Player movement begins between them.

## Stage B relationship

- camera settles forward,
- camp leaves frame by scale/parallax/occlusion,
- not by a cut to an unrelated landscape.

## Portrait

A simple left/right composition is insufficient.
Use vertical depth:

- camp/fire/Aru lower/back-peripheral or upper-background depending camera geometry,
- Damu/Nua ahead in upper-mid corridor,
- route visibly opens forward.

## Reject if

- camp and route feel like two stitched images,
- vertical seam or split panel returns,
- portrait cannot communicate leaving/behind,
- Aru remains hero-sized after departure.

---

# 7. PV-05 / SC06→07 — Damu Stop / Player Crouch

## Production mode

Locked pose variation + Player body foreground.

## Required frames

L and P:

1. Damu stops; Player standing eye height.
2. Player lowers; Damu already crouched/low.
3. shared ground observation with evidence visible.

## Player body

Frame 1:

- hands may be mostly absent,
- low-carried handaxe may sit near lower edge.

Frame 2/3:

- left hand braces ground,
- left hand does not point at evidence,
- right hand maintains handaxe continuity if visible,
- knees/arm perspective must agree with lowered camera.

## Portrait

Ground evidence must live above the copy band and between body occluders.
Do not place evidence at extreme left/right.

## Reject if

- Player crouches before Damu,
- evidence appears before Player action,
- Player hand hides the evidence,
- handaxe teleports between frames.

---

# 8. PV-06 / SC08→09 — Nua Attention / Shelter Reveal

## Production mode

Mode C variation.

## Required frames

L/P:

1. Nua neutral/outward attention.
2. head turn.
3. shoulder/torso follows.
4. Player camera pan.
5. rock shelter enters view.

Production may collapse intermediate frames depending animation method, but anchor poses must exist.

## No production gaze ray

The current line used in DOM proof is debug-only.
Real art relies on body orientation and composition.

## Portrait

Nua moves inward into upper-middle safe region.
The reveal target may enter from upper/right or center-background depending portrait camera, but must not require horizontal desktop space.

## Reject if

- Nua appears to teleport/rotate as a flat sprite,
- shelter is already obvious before attention shift,
- Player discovers target because UI points at it.

---

# 9. PV-07 / SC10 — Rock Shelter Inspection

## Production mode

Hybrid Mode A/B.

## Required assets

World:

- rock shelter near plate L/P,
- near-rock foreground occluder L/P.

Body/contact:

- Player left rock-brace contact L/P,
- same DAY1-HANDAXE-V1 in right-hand lower frame,
- if layered contact fails, use unified body/rock contact keyframe.

## Environment

- natural irregular rock opening,
- ambiguous limited depth,
- uneven dry-ish ground where justified,
- no modern cave icon framing,
- no default bones/claw marks/animal spoor.

## Portrait

Use vertical rock wall/foreground to create scale.
Do not reduce cave to a small background hole because the frame is narrow.

## Reject if

- left hand floats above rock,
- handaxe returns in a different shape,
- opening looks like a game dungeon entrance,
- explicit threat props are added without narrative cause.

---

# 10. PV-08 / SC11 — Same-Moment Aru POV

## Production mode

Mode C locked to PV-04 Stage A.

## Required assets

- Aru-side same-moment L,
- Aru-side same-moment P.

Reuse exactly:

- same camp/fire/shelter state,
- same dawn light,
- same Damu/Nua/player group spacing family,
- same DAY1-HANDAXE-V1 visible on departing Player,
- same departure moment.

## Main proof

Without a title saying “Aru viewpoint,” the Student should infer:

- I am now near the fire,
- those are the people who just left,
- one of them has the same handaxe,
- this is the same morning moment from the other side.

## Reject if

- image reads as flashback filter,
- world state changes,
- people wear different clothing,
- handaxe disappears or changes hand,
- portrait crop hides the identifying group relationship.

---

# 11. First production batch order

Do not begin with all environment paintings.

Recommended sequence:

1. DAY1-HANDAXE-V1 anchor.
2. Aru/Damu/Nua identity anchors.
3. PV-02 Shared Contact L/P.
4. PV-01 camp L/P.
5. PV-05 stop/crouch L/P.
6. PV-06 attention/reveal L/P.
7. PV-04 departure L/P.
8. PV-07 rock inspection L/P.
9. PV-08 same-moment POV L/P.
10. PV-03 naming/world-resume supporting layers.

Reason: contact/body/identity errors are more expensive than environment polish; lock those before building many dependent variants.

---

# 12. Review sheet for each candidate

For every candidate asset, record:

```text
asset id:
scene/PV:
composition family: L / TP / PP / P
anchor source:
generation/edit method:
historical marker: H / C / R / D
handaxe identity pass: yes/no/n-a
cast identity pass: yes/no/n-a
body anatomy pass: yes/no/n-a
contact geometry pass: yes/no/n-a
landscape crop pass: yes/no
3:4 tablet portrait pass: yes/no
9:16 phone portrait pass: yes/no
mobile UI safe pass: yes/no
reject reason if failed:
project-owner decision:
```

No asset becomes runtime production truth from generator output alone.
