# Stage 07.5 — World Continuity Bible

Status: **WORLD GEOGRAPHY / LIGHT / LANDMARK CONSISTENCY CONTRACT**

Purpose: prevent SC00→SC11 from becoming a collection of unrelated `Paleolithic-looking backgrounds`. Every scene must read as another camera position inside the **same Day 1 world**.

Depends on:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
- `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
- `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
- `src/experience/production/stage075VisualProductionPolicy.ts`
- `src/experience/production/stage075VisualContinuityRegistry.ts`

Historical boundary:

- environment is a Korean Paleolithic educational composite
- exact season, exact plant species, exact shelter construction remain deferred unless evidence is added
- continuity choices are production reconstruction, not claims that this exact site existed

---

# 1. Core rule — one world, many cameras

Forbidden workflow:

```text
SC01: generate a Paleolithic camp
SC02: generate a Paleolithic camp with Aru
SC05: generate a Paleolithic trail
SC11: generate a Paleolithic camp from another angle
```

Required workflow:

```text
Day 1 world geography lock
→ approved world master / spatial map
→ same-direction shots crop/zoom/pan from that master where possible
→ controlled outpaint when coverage/resolution is insufficient
→ Angle Master only when camera direction materially changes
→ state derivative only when the actual world/action state changes
→ responsive framing preserving geography
```

# **A beautiful background that changes the geography is a reject. Small incidental world differences are not.**

---

# 2. Day 1 world topology

High-level spatial relationship:

```text
                         route / right-right-center
                                ↓
         [WORLD-CAMP-DAWN-A] → [WORLD-DEPARTURE-PATH-A]
                |                        |
                |                        → [LM-SPLIT-ROCK-01]
                |                                   |
                |                                   ↓
                |                         [WORLD-GROUND-OBS-A]
                |                                   |
                |                                   ↓
                └──────── same Day 1 ───── [WORLD-ROCK-SHELTER-A]
```

Outbound logic:

```text
camp / fire / Aru = behind-left
route = right / right-center
Damu / Nua = ahead
```

This is a world-space relationship, not merely a screen-space CSS position.

---

# 3. WORLD-CAMP-DAWN-A

Scenes:

- SC00 sensory pre-open
- SC01 living camp
- SC02 handoff
- SC03 tool naming
- SC04 rise/join
- SC05 departure Stage A
- SC11 same-moment Aru POV

## Geography fingerprint

The approved anchor must define and retain:

1. hearth/fire center
2. temporary shelter footprint/orientation
3. Aru early work zone
4. B1 fire/material zone
5. B2 shelter/material zone
6. route exit point
7. one or more major fixed rocks
8. mountain/hill horizon silhouette family
9. large vegetation-mass silhouette family
10. ground slope direction

## Fixed relative relationships

Example production map language:

```text
Shelter        B2
   \           |
    \      Aru zone
     \        |
      Fire — B1
         \
          \ Player early camera
             \
              route exit → Damu/Nua
```

Exact meter distances are not curriculum facts. The relative geography is production-locked after world-anchor approval.

## Camp continuity reject conditions

- shelter moves to opposite side of fire
- fire relocates between adjacent beats
- horizon ridge changes shape materially without camera explanation
- terrain slope flips
- route exit changes side
- SC11 cannot be reconciled geometrically with SC05
- portrait derivative invents different shelter/horizon because the frame is narrower

Minor pebbles, grass blades, cloud edges, smoke curls, and non-landmark vegetation may vary when these structural relationships remain intact.

---

# 4. PROP-TEMP-SHELTER-A

The shelter is a **low-specificity fictional temporary shelter/windbreak**, not a reconstruction of one specific excavated structure.

## Identity fingerprint to lock

After anchor approval record:

```text
main silhouette: TBD
highest point location: TBD
opening orientation: TBD
major support-line count visible from camp camera: TBD
cover/drape mass shape: TBD
ground-contact footprint: TBD
```

## Must remain

- low
- asymmetric
- integrated with terrain/material clutter
- visually continuous across SC01→SC05 and SC11

## Must not become

- A-frame camping tent
- symmetric triangle icon
- square house with triangular roof
- modern tarp
- perfectly repeated manufactured poles

A different camera may reveal another side, but the structure must still be geometrically reconcilable.

---

# 5. PROP-CAMP-FIRE-A

The hearth is a key spatial/emotional anchor.

Lock:

- world position
- approximate stone cluster footprint
- relation to shelter
- relation to Aru
- smoke default drift direction range

Allow:

- flame height change
- log collapse
- ember intensity
- smoke density
- smoke/flame micro-shape

Do not allow:

- campfire jumping across the frame because composition changed
- perfectly circular modern campfire-ring icon
- same fire rendered with incompatible major stone layout in SC05 vs SC11

---

# 6. WORLD-DEPARTURE-PATH-A

Scenes:

- SC05 departure
- SC06 Damu stop
- SC08 Nua attention
- SC09 shelter reveal approach

This environment must visibly **continue from the camp exit**, not appear as a new level.

## Lock

- outbound axis
- ground slope
- main foreground vegetation mass families
- horizon relationship
- LM-SPLIT-ROCK-01 location
- rough route curvature

## Distance progression

SC05 should preserve visual memory of camp.
As distance increases:

```text
camp clearly visible
→ fire/shelter smaller
→ partially occluded
→ no longer visible
```

Do not replace that progression with an instant unrelated background swap.

---

# 7. LM-SPLIT-ROCK-01

Purpose:

- spatial memory
- route orientation
- later return/callback potential

## Required visual fingerprint

Lock after approval:

- broad low shape
- asymmetry
- distinctive split direction
- one memorable contour break
- approximate scale relative to Damu
- base contact with terrain

Record:

```text
front/reference view path: TBD
route-left view path: TBD
route-right/return view path: TBD
silhouette sketch/reference: TBD
```

## Allowed

- partial vegetation occlusion
- distance/perspective
- different visible face caused by camera angle

## Reject

- split reverses direction without camera explanation
- rock becomes much taller/narrower
- color/material changes into another geological object
- landmark vanishes from a frame in which the geography says it should be visible unless occluded

---

# 8. WORLD-GROUND-OBS-A

SC06 and SC07 are the **same patch of ground** from standing vs crouched height.

Lock evidence-bearing structure:

- one bent/pressed grass cluster
- one disturbed soil zone
- one small branch orientation
- nearby fixed pebble/rock marker
- Damu relation to patch

SC07 should not generate a more dramatic `clue` just because Player crouched.
The information was physically present before; the lower view makes it readable.

Incidental grass blades/pebbles outside the evidence-bearing fingerprint may vary.

## Reject

- ground patch identity completely changes
- branch/evidence marker rotates or moves without action
- evidence becomes a glowing/iconic target
- Player crouch teleports to another patch

---

# 9. WORLD-ROCK-SHELTER-A

Scenes:

- SC09 discovery
- SC10 approach/inspection

## Lock

- entrance outer contour
- primary overhang shape
- visible crack pattern family
- near-edge rock used for Player left-hand brace
- floor slope
- darkness/depth direction

SC10 is a **closer camera in the same space**.
Default method is crop/zoom from the approved high-resolution view when that preserves the required inspection framing. If a closer camera requires newly visible geometry, use a world-master-conditioned derivative rather than a newly generated cave.

## Historical framing

The project may use a natural cave/rock shelter as a historically anchored category, but this exact geometry is fictional reconstruction.

## Reject

- entrance changes from wide/low to tall/narrow
- rock type/color changes radically
- near brace rock disappears
- interior becomes an artificial tunnel
- default scene adds dramatic bones/claw marks/animal spoor not in current contract

---

# 10. Lighting continuity

Lighting is spatial continuity, not mood decoration.

## LIGHT-DAY1-DAWN-A

Applies to camp and departure Stage A.

Lock:

- natural light world direction
- low dawn intensity family
- fire warm contribution zone
- broad sky color family

SC05 Stage A and SC11 show the **same moment** from opposite sides.
Therefore:

- light direction stays in world space
- it must not simply mirror with the composition
- shadow direction must remain reconcilable

## LIGHT-DAY1-ROUTE-A

Route/ground/rock-shelter lighting progresses from the same morning.

Allowed:

- occlusion by terrain/rock
- local shade
- slight exposure adaptation

Forbidden:

- sudden golden-hour sunset look
- one scene midday blue and the next dawn orange
- opposite rim-light direction caused by independent generation

---

# 11. Environment material palette

Before world anchor approval, define a restrained palette family, not exact scientific plant/species identification.

Lock at anchor approval:

- soil hue/value band
- dominant rock hue/value band
- dry/wetness level
- vegetation saturation range
- sky dawn range
- fire warm range

The goal is to prevent:

```text
SC01 warm brown camp
SC02 gray volcanic camp
SC05 lush green forest
SC09 orange desert rock shelter
```

unless the narrative explicitly crosses those environments, which current Stage 07.5 does not.

---

# 12. World plate production method

Preferred method once anchor is approved:

```text
approved high-resolution world master
→ crop / zoom / pan when camera direction is effectively the same
→ controlled outpaint / super-resolution when coverage or resolution is insufficient
→ Angle Master only when camera direction materially changes
→ actor/body integration
→ local inpaint only where needed
```

Avoid independent regeneration of the whole environment for every beat.

If a substantially different camera needs new geometry, use all of these together:

- approved world master as actual reference
- world topology map
- landmark reference
- light-direction lock
- scene camera contract

The resulting image is an **Angle Master derivative of the same world**, not a new world design.

---

# 13. L / TP / PP world equivalence

Responsive variants must preserve:

- world topology
- landmark identity
- actor world positions
- light direction
- scene meaning

## Landscape to portrait rule

Use this order:

```text
1. Can the same high-resolution master be cropped/zoomed safely?
   YES → use the same master.

2. Is the camera direction still effectively the same but edge coverage/resolution is insufficient?
   YES → controlled outpaint/upscale from the same master.

3. Does portrait require a materially different view direction to preserve causal/spatial meaning?
   YES → create an Angle Master derived from the same world references.
```

A portrait viewport does **not** automatically require a new background.

It also does not justify moving shelter/fire/route/landmarks to prettier screen positions.

The rule is:

# **Crop first. Different angle only when the crop cannot tell the same truthful spatial event.**

---

# 14. World drift taxonomy

Use codes during review:

```text
WID-GEO      geography/topology drift
WID-HORIZON  ridge/horizon silhouette drift
WID-SHELTER  shelter identity drift
WID-FIRE     hearth position/layout drift
WID-PATH     route axis/curvature drift
WID-LM       landmark shape/location drift
WID-GROUND   evidence-bearing ground patch drift
WID-CAVE     rock-shelter geometry drift
WID-LIGHT    light direction/time drift
WID-PALETTE  material/color environment drift
WID-PORTRAIT portrait is a different world rather than master-derived framing
```

Do not use a WID reject code for harmless P3-only microvariation.

---

# 15. World anchor approval packet

`WORLD-CAMP-DAWN-A` is not approved from one pretty image.

Minimum packet:

- [ ] topology diagram
- [ ] high-resolution landscape/world master
- [ ] alternate camera/reference showing same geography
- [ ] TP crop or derived-composition proof
- [ ] PP crop or derived-composition proof
- [ ] shelter reference
- [ ] fire/hearth reference
- [ ] route-exit reference
- [ ] horizon/landmark reference
- [ ] lighting-direction note

`WORLD-DEPARTURE-PATH-A` minimum:

- [ ] camp-to-route continuity frame
- [ ] route master
- [ ] LM-SPLIT-ROCK-01 reference
- [ ] forward camera proof
- [ ] TP/PP equivalent framing through crop or controlled derivative

`WORLD-ROCK-SHELTER-A` minimum:

- [ ] discovery master view
- [ ] closer inspection crop/derivative
- [ ] brace-rock reference
- [ ] entrance contour match proof
- [ ] TP/PP equivalent framing through crop or controlled derivative

# **No scene world raster is approved before the required world anchors pass this packet review.**
