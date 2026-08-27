# Stage 07.5 — Object Continuity Bible

Status: **OBJECT / HELD-ITEM / PROP CONSISTENCY CONTRACT**

Purpose: ensure the Day 1 handaxe and recurrent physical anchors remain the same objects across handoff, inspection, walking, crouching, off-frame continuity, shelter approach, and cross-perspective replay.

Primary object:

- `DAY1-HANDAXE-V1`

Supporting props:

- `PROP-CAMP-FIRE-A`
- `PROP-TEMP-SHELTER-A`
- `LM-SPLIT-ROCK-01`

Depends on:

- `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
- `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
- `src/experience/production/stage075VisualContinuityRegistry.ts`

---

# 1. Core rule — object identity survives camera change

The handaxe is not a generic category placeholder once production begins.

The student should be able to infer:

> "아침에 아루에게 받은 그 돌이다."

without the UI telling them.

Therefore:

```text
SC02 handoff
→ SC03 inspection
→ SC04 rise
→ SC05 walk
→ SC06 stop
→ SC07 crouch
→ SC08/09 off-frame/re-entry
→ SC10 shelter inspection
→ SC11 distant same-moment proof
```

must all preserve one object identity.

---

# 2. DAY1-HANDAXE-V1 — historical/product framing

This is a **fictional canonical object informed by approved Korean Paleolithic handaxe references**.

It is not:

- a 1:1 claim that one museum object belonged to this fictional community
- a fantasy knife
- a spearhead
- a polished Neolithic stone tool

Curriculum hierarchy remains:

```text
뗀석기 = parent concept
주먹도끼 = representative example
```

---

# 3. Mandatory object fingerprint

Before `DAY1-HANDAXE-V1` becomes `anchor-approved`, create a master object sheet containing:

1. face-A
2. face-B
3. edge/side thickness view
4. grip-base marking
5. working-end marking
6. scale reference
7. major flake-scar map
8. material/color range
9. Player right-hand grip reference
10. Aru handoff grip reference

## Fingerprint fields

Record after approval:

```text
Master path: TBD
Reference revision: TBD
Overall length ratio: TBD
Width ratio: TBD
Thickness ratio: TBD
Face-A major scar 1: TBD
Face-A major scar 2: TBD
Face-B major scar 1: TBD
Grip-base contour: TBD
Working-end contour: TBD
Dominant material hue/value: TBD
Distinctive asymmetry: TBD
```

These are production identifiers, not archaeological classification claims.

---

# 4. Face orientation contract

Define the object coordinate system once.

```text
face-A  = primary approved presentation face
face-B  = opposite face
grip-base = hand-held broader/base zone
working-end = working/cutting/chopping end
```

Every scene asset must record which face is visible and why.

Examples:

```text
SC02 Offer      face-A-biased / grip-base toward Player
SC02 Shared     face-A-biased / shared grip transition
SC02 Release    face-A-biased / Player grip closes
SC03 Inspect    face-A primary, minor wrist rotation only
SC05 Carry      partial face-A or edge depending arm swing
SC10 Re-entry   same object; visible face must follow actual wrist orientation
```

Do not mirror the image casually. A horizontal mirror swaps hand dominance and can invert the object fingerprint.

---

# 5. Scale contract

The handaxe must retain a believable size relative to:

- Aru hand
- Player right hand
- Player forearm
- distant SC11 silhouette

Perspective can change projected pixel size, but physical scale cannot.

Reject if:

- it fits in fingertips in one scene but covers the entire forearm in another
- portrait composition enlarges it into a hero-item card
- distant SC11 object is too large to belong to the same person/object

---

# 6. Grip continuity

## Aru grip

Aru controls the object before shared contact.

- grip must avoid presenting the working end toward Player in an implausible unsafe way
- fingers must visibly contact the same object surface
- grip should leave a reachable `grip-base` zone for Player

## Shared contact

The key physical chain is:

```text
Aru hand
→ DAY1-HANDAXE-V1
→ Player right hand
```

Both hands must share one consistent depth and object volume.

## Player grip

After release:

- Player right hand owns the same grip-base
- fingers wrap with believable pressure/contact
- object does not snap to a new orientation without wrist motion

---

# 7. Off-frame continuity

SC08→SC10 deliberately allows the handaxe to leave FOV.

That does **not** mean inventory disappearance.

Required continuity logic:

```text
right arm lowers
→ handaxe leaves bottom/right FOV with the hand
→ Player attention pans
→ same right arm/handaxe re-enters as camera/body relation changes
```

Reject if:

- handaxe fades independently from hand
- disappears between static frames with no arm movement logic
- reappears with another face/size/material
- returns centered like a selected inventory item

---

# 8. Surface/material continuity

Lock a restrained material family after anchor approval.

Maintain:

- base rock color
- roughness
- flake-scar contrast
- edge wear family

Allow:

- dawn/fire warm reflection
- shadow
- dirt/contact shading

Do not allow lighting to change gray-brown stone into red/orange/black stone identity.

---

# 9. Handaxe drift taxonomy

Use explicit codes:

```text
OID-SHAPE     overall contour drift
OID-SCALE     physical scale drift
OID-SCAR      flake-scar fingerprint drift
OID-FACE      face-A/face-B continuity error
OID-GRIP      grip location/anatomy drift
OID-MATERIAL  rock material/color drift
OID-HAND      Aru/Player hand contact mismatch
OID-MIRROR    accidental horizontal mirror / handedness inversion
OID-OFFFRAME  disappearance/re-entry continuity failure
OID-STYLE     realism/illustration mismatch
```

---

# 10. PROP-CAMP-FIRE-A continuity

Although fire is dynamic, its hearth is a persistent object/location system.

Lock:

- hearth footprint
- major stone arrangement family
- position relative to shelter and Aru zone

Allow:

- flame shape
- ember intensity
- smoke
- small log collapse

Reject:

- new hearth geometry every frame
- fire moves because the art composition needs a glow elsewhere
- SC05 and SC11 same-moment hearth looks unrelated

---

# 11. PROP-TEMP-SHELTER-A continuity

The temporary shelter is part world, part recurring prop.

Lock after anchor approval:

- silhouette
- opening direction
- major support-line pattern
- ground footprint
- relation to hearth

Do not invent more construction detail in later images unless the anchor is versioned and re-approved.

---

# 12. LM-SPLIT-ROCK-01 continuity

The landmark must have a **recognizable silhouette fingerprint**.

Create:

- master silhouette
- front-ish route view
- alternate route view
- scale reference with Damu

The split itself should function like an object identity feature.

A return-route future view must derive from the same rock, not regenerate another `split rock` from text.

---

# 13. Responsive object equivalence

L/TP/PP may use separately composed source images, but the object remains identical.

Critical checks:

- handaxe fingerprint visible in all families where scale permits
- no mirroring for layout convenience
- contact geometry preserved in SC02
- portrait crop does not cut grip/contact
- SC10 brace hand and held item can coexist without impossible body geometry

---

# 14. Object asset naming

Use stable anchor IDs in filenames.

Examples:

```text
DAY1-HANDAXE-V1_master_faceA.png
DAY1-HANDAXE-V1_master_faceB.png
DAY1-HANDAXE-V1_master_edge.png
DAY1-HANDAXE-V1_playerGrip_R.webp
DAY1-HANDAXE-V1_aruOffer.webp

PROP-TEMP-SHELTER-A_master_L.webp
LM-SPLIT-ROCK-01_master.webp
```

Scene outputs should point back to the anchor in metadata/registry.

Example:

```text
HUNT-SC02-HANDOFF-KEYFRAME-V1
requires DAY1-HANDAXE-V1
```

---

# 15. Object anchor approval checklist

`DAY1-HANDAXE-V1` becomes `anchor-approved` only when:

- [ ] face-A approved
- [ ] face-B approved
- [ ] side/thickness approved
- [ ] scale approved
- [ ] major scar fingerprint approved
- [ ] grip-base and working-end documented
- [ ] Aru grip is anatomically feasible
- [ ] Player right-hand grip is anatomically feasible
- [ ] Grounded Illustrative Realism style matches character/world anchors
- [ ] no polished Neolithic/fantasy weapon visual drift
- [ ] approved master paths are registered

# **Scene rasters requiring the handaxe remain runtime-blocked until this anchor passes.**
