# Stage 07.5 — Character Identity Anchor Bible

Status: **CHARACTER CONSISTENCY CONTRACT / ANCHOR REFERENCES PENDING**

Purpose: ensure Aru, Damu, Nua, background people, and the first-person Player body remain the **same visual identities** across SC00→SC11, L/TP/PP compositions, camera distance changes, and future asset revisions.

Depends on:

- `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
- `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
- `src/experience/production/stage075VisualProductionPolicy.ts`
- `src/experience/production/stage075VisualContinuityRegistry.ts`

This document does **not** claim historically exact Paleolithic faces, skin tones, hairstyles, or garment patterns. Character identity is a fictional production reconstruction under the project's Historical Reconstruction rules.

---

# 1. Core rule — a character is an approved anchor, not a prompt

Do not generate:

```text
SC01 Aru from text
SC02 Aru from text
SC05 Aru from text
SC11 Aru from text
```

Production flow must be:

```text
Character specification
→ anchor exploration
→ one approved identity packet
→ actual reference-conditioned scene variants
→ crop/framing derivation where possible
→ continuity review against approved packet
→ scene approval
```

Independent text-to-image is allowed only while exploring a **new anchor candidate**. Once an anchor is approved, later scene art must derive from that approved reference through reference conditioning, image-to-image, pose/depth control, inpaint/outpaint, compositing, manual paintover, or crop/framing.

P0 identity rule:

- expression, gaze, foreshortening, minor dirt, cloth wrinkles, and hair flyaways may vary;
- underlying face, hair silhouette, body proportion, and garment silhouette may not reset;
- a candidate that reads as a different person is D3 reject.

# **A good new image that no longer looks like the approved person is a reject.**

---

# 2. Character Anchor Packet — mandatory contents

A hero character anchor is not approved from one portrait.

Each of `ARU-IDENTITY-V1`, `DAMU-IDENTITY-V1`, `NUA-IDENTITY-V1` requires one coherent packet containing at minimum:

## Identity views

1. neutral full body, front-ish 3/4
2. opposite 3/4
3. side profile
4. seated or crouched neutral body
5. standing neutral body
6. head/shoulder close reference

## Motion identity views

7. walking stride
8. stopping / weight transfer
9. turning attention
10. one role-specific repeated behavior pose

## Material/detail references

11. hands at usable scale
12. hair silhouette reference
13. garment silhouette reference
14. garment major panel/seam/material-zone diagram
15. footwear/ankle treatment if visible

Authoring background policy:

- reusable character/body masters should be transparent, or use a neutral extraction-safe source with a transparent derivative;
- identity review sheets may use a neutral review background;
- a final scene background is not part of the character identity master.

The packet should be reviewed as a **single identity sheet**. If one view looks like another person, the packet fails.

---

# 3. What becomes immutable after anchor approval

After an identity anchor becomes `anchor-approved`, the following are P0 identity fingerprints.

## Face proportion fingerprint

Lock relative relationships, not beauty-detail measurements:

- overall cranial/face vertical ratio
- forehead-to-brow spacing
- eye line position
- nose length/width family
- mouth/chin proportion
- cheek/jaw silhouette
- ear placement when visible

Do not attempt anthropological species reconstruction beyond evidence.

## Hair silhouette fingerprint

Lock:

- total volume
- major parting/direction
- front contour
- side/back length class
- loose vs tied structure if used

Minor flyaways may vary. Hairstyle identity may not reset per scene. Fine edge strands may be simplified for a clean alpha derivative as long as the silhouette fingerprint remains intact.

## Body fingerprint

Lock:

- approximate height class relative to the other two characters
- shoulder width class
- torso/leg proportion
- body-mass class
- habitual resting posture

Distance, perspective, and foreshortening may alter projected size; body identity must not.

## Garment silhouette fingerprint

Lock:

- overall upper/lower body silhouette
- major overlap direction
- visible wrapping or drape zones
- hem length class
- major material tone family
- major material-zone placement

Exact stitching and prehistoric tailoring remain historically deferred unless evidence is added.

## Movement fingerprint

Movement is part of identity.

A face-consistent character with completely different body language is still continuity drift.

---

# 4. Cross-character distinction matrix

Aru, Damu, and Nua must be distinguishable without floating names or bright costume colors.

Use at least three independent channels per character:

| Channel | Aru | Damu | Nua |
| --- | --- | --- | --- |
| Body rhythm | restrained / deliberate | forward / stride-led | alert / attention-led |
| Repeated behavior | checks person/object before handoff | moves first, then waits | head turns before shoulders/torso |
| Silhouette | must be unique after anchor approval | must differ from Aru in motion and body outline | distinct head/neck/shoulder outline |
| Spatial habit | near people/fire in early camp beats | route-leading / near Player on movement | slightly outward / scanning |
| Costume color | not primary identifier | not primary identifier | not primary identifier |

The final approved anchor sheet should replace generic descriptions with actual visual fingerprints.

# **Do not differentiate the cast only by hair color, fur color, or one costume accessory.**

---

# 5. ARU-IDENTITY-V1

Player-facing name: **아루**

Internal authoring identity: R.

## Narrative/body identity

Aru is remembered through behavior before visual decoration:

- usually checks the Player or object before transferring something
- handoff is controlled rather than theatrical
- concern appears through shorter speech and attention, not exaggerated facial acting
- early Day 1 spatial association: fire / current camp / departure edge

## Required motion references

- near-fire neutral
- notices Player
- picks up/checks handaxe
- handoff offer
- shared-contact posture
- release posture
- departure/farewell posture
- SC11 Aru-side point-of-view body cue if any body part is visible

## Lock after approval

Record in this file when raster anchor is approved:

```text
Anchor path(s): TBD
Reference revision: TBD
Face fingerprint: TBD
Hair fingerprint: TBD
Body/height fingerprint: TBD
Garment silhouette fingerprint: TBD
Primary posture fingerprint: TBD
Hand reference path: TBD
```

## Reject Aru variant if

- age shifts visibly between scenes
- hairstyle silhouette changes materially
- shoulder/body mass changes enough to read as another person
- costume becomes a new outfit
- handoff anatomy no longer matches approved Aru hand reference
- facial detail becomes hyper-photoreal while anchor is illustrative
- portrait/close-up looks like a different actor rather than the same Aru at another framing

---

# 6. DAMU-IDENTITY-V1

Player-facing name: **다무**

Internal authoring identity: H1.

## Narrative/body identity

- tends to be a few steps ahead during movement
- movement begins before explanatory dialogue
- waits or stops rather than teleporting back to Player
- ground observation pose makes space for Player to see

## Required motion references

- camp preparation
- walking stride A/B
- look-back/wait
- stop
- weight transfer before crouch
- crouch
- shared ground observation
- rise/resume

## Critical consistency requirement

Walking Damu and crouching Damu must have the same:

- limb proportion
- shoulder width
- head size
- hair silhouette
- garment silhouette

Pose change cannot be an excuse for identity regeneration.

## Anchor lock record

```text
Anchor path(s): TBD
Reference revision: TBD
Face fingerprint: TBD
Hair fingerprint: TBD
Body/height fingerprint: TBD
Garment silhouette fingerprint: TBD
Stride fingerprint: TBD
Crouch fingerprint: TBD
```

---

# 7. NUA-IDENTITY-V1

Player-facing name: **누아**

Internal authoring identity: H2.

## Narrative/body identity

Nua is not `the observation NPC`.
The visual behavior that makes Nua memorable is a repeated attention pattern:

```text
head turns first
→ shoulder follows
→ torso follows
```

This pattern should remain recognizable at medium and smaller screen size.

## Required references

- camp outward attention
- walking/scanning
- neutral stop
- attention shift stage A: head
- stage B: shoulder
- stage C: torso
- distant 4:3/portrait-readable silhouette

## Anchor lock record

```text
Anchor path(s): TBD
Reference revision: TBD
Face fingerprint: TBD
Hair fingerprint: TBD
Body/height fingerprint: TBD
Garment silhouette fingerprint: TBD
Attention-turn fingerprint: TBD
```

## Reject if

- gaze direction is only communicated with a drawn line
- head turn says one direction while shoulders imply another
- portrait crop destroys identity/attention readability
- Nua appears to become a different person when distant

---

# 8. Background continuity — B1 / B2

Background actors are lower-detail but still persistent people.

They are not generated as random crowd filler per frame.

## B1-CONTINUITY-V1

Function in Day 1 continuity:

- fire/material activity
- same general body silhouette
- same work-zone association

## B2-CONTINUITY-V1

Function in Day 1 continuity:

- shelter/material activity
- same general body silhouette
- participates in natural name-use beat around Aru

No hero face sheet is required, but at minimum lock:

- height class
- body silhouette
- hair silhouette class
- garment silhouette
- work-zone behavior

Minor lower-detail background variation is allowed if these continuity fingerprints remain intact.

---

# 9. PLAYER-HUNT-BODY-V1

The Player's exact age/sex/face remain deferred.
However, visible first-person body continuity cannot remain undefined.

The Player body is a P0 identity. The hands, arms, feet, and ankles are not separate anonymous assets; they are visible parts of one approved fictional body master family.

## Lock before first raster scene approval

- right-hand dominant
- right/left hand proportion family
- palm/hand size family
- finger length/thickness relationships
- thumb proportion
- nail treatment
- wrist thickness
- wrist-to-forearm taper
- forearm/visible-arm proportion family
- foot length/width family where visible
- ankle proportion where visible
- visible skin/dirtying tone range within the fictional reconstruction
- wrist/ankle garment-edge silhouette if visible
- level of illustration detail

## Required body references

- neutral right hand + forearm
- neutral left hand + forearm
- receive reach
- shared-contact receive
- held-handaxe grip
- walking carry
- standing stop
- crouch left ground brace
- rock-shelter left-hand brace
- visible foot/ankle neutral reference if any final scene exposes feet
- visible foot/ankle action reference for any approved scene that exposes feet

## Derivation rule

After approval:

```text
PLAYER-HUNT-BODY-V1
→ actual body-master-conditioned pose derivative
→ crop/framing derivative
```

Do not independently generate a new hand, arm, foot, or ankle identity for a later scene.

Perspective and foreshortening may change projected size. The underlying anatomical proportions may not.

## Strong reject conditions

- two scenes use visibly different Player hands
- a visible Player foot/ankle looks like a different body family
- fingers change thickness/length materially
- wrist/forearm taper changes enough to read as another body
- skin/nail/detail treatment changes randomly
- handaxe grip changes to an anatomically incompatible hold without action continuity
- a limb is enlarged/compressed non-uniformly to fit a viewport
- Player arms become permanent lower-screen HUD elements

P0 Player-body drift is D3 reject.

---

# 10. Facial expression policy

Expression changes are allowed only inside the approved identity.

Preferred range:

- neutral
- focused
- mild concern
- fatigue
- relief
- restrained irritation/uncertainty

Avoid:

- theatrical movie-poster emotion
- exaggerated fear faces
- caricatured primitive aggression
- beauty-photo expression drift

Expressions must not remodel the face.

---

# 11. Clothing consistency policy

Until stronger evidence is available, clothing remains **low-specificity reconstruction**.

Continuity matters more than adding detail scene by scene.

Once an anchor garment silhouette is approved:

- do not add/remove major wraps between adjacent scenes
- do not change hem length without narrative cause
- do not change major material panel placement
- do not switch from rough hide-like drape to tailored modern garment construction

Permitted state changes later may include:

- dirt
- wetness
- small displacement from movement
- wear
- small fold changes

but material state changes require continuity reason rather than random identity redesign. Small fold differences alone are P3 and do not require regeneration.

---

# 12. L / TP / PP identity equivalence

For the same approved moment, crop/zoom from the same master is the first option when it preserves the event.

A dedicated portrait derivative is allowed when crop/outpaint cannot preserve the causal/spatial composition, but it is **not a new character design**.

For the same beat across L, TP, PP, preserve:

- face identity
- hair silhouette
- garment identity
- body mass/proportion
- pose intent
- Player body identity
- handaxe/body contact
- lighting side

Portrait is a different crop/camera solution, not a costume/actor reshoot.

## Required review

For every hero-character critical scene, compare side-by-side:

```text
master | L | TP | PP
```

Reviewer should be able to answer immediately:

> "같은 아루/다무/누아를 같은 순간에 다른 프레임으로 본 것이다."

If not, reject or revise.

---

# 13. Identity drift taxonomy

Every rejected candidate should use one or more drift codes.

```text
CID-FACE    face identity drift
CID-HAIR    hair silhouette drift
CID-BODY    body proportion/mass drift
CID-GARMENT garment silhouette/material-zone drift
CID-HAND    hand anatomy/Player-body identity drift
CID-FOOT    foot/ankle Player-body identity drift
CID-MOTION  movement identity drift
CID-AGE     perceived age drift
CID-STYLE   illustration/realism level drift
CID-CROP    responsive crop/derivative destroys identity
```

Record drift codes in asset review notes rather than vague `looks weird` comments.

---

# 14. Character anchor approval checklist

A hero anchor becomes `anchor-approved` only when all are true:

- [ ] required identity views exist
- [ ] all views read as the same person
- [ ] full body and close face agree
- [ ] motion poses preserve proportion
- [ ] hand reference is usable at required contact scale
- [ ] garment silhouette is stable
- [ ] reusable master has transparent or extraction-safe authoring path
- [ ] no modern/fantasy stereotype dominates
- [ ] style matches Grounded Illustrative Realism
- [ ] crop-first L/TP/PP derivation strategy is viable
- [ ] historical uncertainty is not presented as factual certainty
- [ ] approved master/reference files are stored and registered

`PLAYER-HUNT-BODY-V1` additionally requires the visible hand/arm/foot/ankle references needed by approved scenes to read as one body family.

# **No hero scene raster is approved before its required character/Player anchors pass this checklist.**
