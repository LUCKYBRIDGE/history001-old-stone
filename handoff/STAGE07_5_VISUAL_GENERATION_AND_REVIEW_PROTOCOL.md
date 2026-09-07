# Stage 07.5 — Visual Generation & Continuity Review Protocol

Status: **MANDATORY PRODUCTION WORKFLOW / GIR-SURFACE-30 ACTIVE**

Purpose: convert image generation/editing from ad-hoc prompting into a traceable anchor-conditioned production pipeline while keeping all final visuals inside the Project-owner selected GIR-30 surface tier.

This protocol applies to:

- AI-assisted generation
- image-to-image variation
- inpainting/outpainting
- manual paintover
- layer compositing
- responsive crop/framing derivation
- future asset revision

Depends on:

- `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
- `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
- `src/experience/production/stage075VisualProductionPolicy.ts`
- `src/experience/production/stage075VisualContinuityRegistry.ts`
- `src/experience/production/stage075RasterManifest.ts`

---

# 1. Production principles

# **Do not ask the generator to remember the project. Give it the approved references.**

Text description is not a continuity mechanism.

Weak:

```text
"same Aru as before"
"same camp"
"same handaxe"
"same Player hand"
```

Strong:

```text
approved identity/body/world/object references attached
+ camera/contact contract
+ GIR-SURFACE-30 constraint
+ only permitted change explicitly stated
```

Second governing principle:

# **Do not regenerate what can be derived from an approved master. Crop first; derive only when crop fails.**

Third governing principle:

# **Physical plausibility and surface realism are separate axes.**

```text
functional anatomy / contact / weight / perspective = strong requirement
surface/rendering realism = target 30/100, acceptance 25–35
```

---

# 2. Asset production phases

## Phase A — Anchor exploration

Allowed only for the current active upstream slot:

- controlled independent generation
- revision of that slot
- broader exploration before lock

Output is **candidate only**.

Do not batch-generate downstream slots.

## Phase B — Anchor lock

Select and consolidate the current slot only after:

- structural review,
- GIR-30 surface review,
- historical review,
- Project-owner approval where required,
- canonical file registration.

Anchor status moves:

```text
reference-pending
→ anchor-approved
```

only when the complete required packet is approved and registered.

## Phase C — Master derivation

Once a continuity group is approved:

```text
same moment + same camera direction + safe coverage
→ crop-from-master

same moment + same camera direction + insufficient coverage/resolution
→ outpaint-from-master / upscale-from-master

same moment + materially different camera direction
→ angle-derivative

actual action/world/body state changed
→ state-derivative

contact-heavy interlocked hand/body/object state
→ unified-contact-derivative
```

Independent text-to-image is prohibited for an established continuity group.

## Phase D — Cross-scene review

Never approve a scene while viewing only that scene.

Compare against:

- anchor masters,
- immediately previous/next beat,
- same character/body elsewhere,
- same world from another camera where applicable,
- L/TP/PP counterpart.

---

# 3. Mandatory Generation / Derivation Job Card

Every generated or materially edited candidate requires a Job Card.

Template:

```text
JOB ID:
TARGET ASSET ID:
SCENE / BEAT:
MOMENT ID:
COMPOSITION FAMILY: L / TP / PP / N
OUTPUT ROLE: style-proof / world / actor / body / object / contact / occluder

STYLE POLICY: GIR-SURFACE-30
SURFACE REALISM TARGET: 30 / 100
ACCEPTANCE BAND: 25–35
ASSIGNED REVIEW SCORE:

DERIVATION MODE:
- independent-exploration
- anchor-conditioned
- crop-from-master
- outpaint-from-master
- angle-derivative
- state-derivative
- unified-contact-derivative

PARENT ASSET:
PARENT REVISION:

CONDITIONING / EDIT METHOD:
- locked-keyframe variation
- reference-conditioned generation
- pose/depth/edge controlled
- inpaint/outpaint
- manual/2D composite
- crop/zoom/pan only

APPROVED REFERENCE FILES ACTUALLY SUPPLIED:
- ...

CAMERA CONTRACT:
BODY/POSE CONTRACT:
CONTACT CONTRACT:
OBJECT FACE/GRIP CONTRACT:
LIGHT DIRECTION:
SAFE REGION / UI RESERVED AREA:

ONLY THINGS ALLOWED TO CHANGE:
- ...

MUST NOT CHANGE:
- ...

P0 IDENTITY CHECK:
P1 CONTACT/OBJECT CHECK:
P2 WORLD-STRUCTURE CHECK:
P3 INCIDENTAL VARIATION NOTES:

HISTORICAL CONFIDENCE:
[H] / [C] / [R] / [D]

OUTPUT FILE:
REVIEW STATUS:
DRIFT CODES:
REVIEW NOTES:
```

If an established continuity group cannot list the actual approved reference files supplied to generation/derivation, the candidate is not a production candidate.

---

# 4. Instruction construction order

When a generation/edit tool is used, express priority in this order:

```text
1. preserve attached identity/Player/world/object anchors
2. preserve camera/pose/contact geometry
3. enforce GIR-SURFACE-30: target 30, acceptance 25–35
4. explicitly simplify photographic micro-detail
5. specify only the intended beat/camera change
6. apply historical exclusions
7. reserve runtime UI-safe space
```

Do not lead with:

```text
cinematic
photorealistic
highly detailed
8K
ultra realistic
epic
movie still
```

These phrases systematically push the generator away from GIR-30 and should normally be excluded from production prompts.

---

# 5. GIR-SURFACE-30 style consistency target

Official style remains **Grounded Illustrative Realism**, now numerically narrowed by `GIR-SURFACE-30`.

Project scale:

```text
0    very simple graphic/cartoon
15   strongly simplified animation-like
30   grounded structural illustration  ← target
45   semireal illustration
60   realistic illustration
80   game/cinematic realism
100  photograph
```

Acceptance band:

```text
25–35
```

Hard interpretation:

```text
physical realism in anatomy / weight / perspective / contact
+
illustratively simplified large planes / grouped texture / clean silhouette
-
photographic micro-detail / macro material texture / lens language
```

Required:

- face identity carried by structure/proportion,
- hair mass/silhouette before strands,
- skin broad planes + limited representative creases,
- simplified nails,
- minimal body hair/vein detail,
- garment fold/material zones before fibers,
- rock/soil major planes and grouped roughness before micro-cracks/grain,
- consistent actor/world finish,
- extraction-friendly reusable edges,
- natural coherent lighting.

Reject:

```text
SID-PHOTO    surface realism materially above GIR-30 / photographic skin or material tier
SID-LENS     photographic lens-language drift
SID-EDGE     unstable/contaminated reusable extraction edge
SID-DETAIL   photo-density or cross-layer detail-density drift
SID-POSTER   cinematic advertising/poster grading
SID-CARTOON  simplification so strong grounded form is lost
SID-FANTASY  fantasy barbarian/concept-art shift
SID-FOG      generic AI atmosphere obscures information
SID-TEXTBOOK diagram/cutaway shift
SID-COMPOSITE pasted-layer mismatch in finish/detail
```

A scene with correct anatomy but surface score above the band is rejected/revised.

A scene at 30 with broken anatomy is also rejected.

---

# 6. Surface simplification checklist by asset

## Human face / body

Simplify:

- pores,
- fine skin grain,
- micro-wrinkles,
- tiny blemishes,
- individual body hair,
- decorative veins.

Preserve:

- head shape,
- facial feature placement,
- body mass,
- exact canonical ratios after lock,
- pose and balance.

## Hair

Simplify to:

- silhouette,
- large masses,
- a few grouped locks.

## Hands / feet

Preserve:

- digit count,
- joint sequence,
- hand/foot scale family,
- wrist/ankle transition,
- pressure/contact.

Simplify:

- pores,
- veins,
- body hair,
- cuticles,
- nail reflection,
- fine crease networks.

## Rock / soil / garment

Preserve:

- major geometry,
- material category,
- object fingerprint where locked,
- broad roughness/fold/weight.

Simplify:

- exhaustive grain,
- micro-cracks,
- fiber/stitch fields,
- product-photo texture.

## World

Preserve:

- geography,
- landmarks,
- route/shelter relationships,
- light direction.

Simplify:

- leaf-by-leaf foliage,
- pebble-by-pebble ground,
- distant texture noise.

---

# 7. Character continuity review

For Aru/Damu/Nua compare:

```text
approved canonical identity
approved turnaround/body reference
candidate
nearest prior scene
nearest next scene
```

Review order:

1. face structure/identity
2. hair silhouette
3. exact canonical head/body ratio
4. shoulder/body mass
5. garment silhouette/material zones
6. hands
7. movement identity
8. GIR-30 surface tier

P0 identity failure = reject regardless of beautiful rendering.

---

# 8. Player-body continuity review

Any candidate showing Player hands/arms/feet/ankles must compare against `PLAYER-HUNT-BODY-V1`.

Review:

1. hand/palm size family
2. finger-length/thickness relationships
3. wrist thickness / forearm taper
4. arm proportion family
5. foot/ankle proportion
6. skin/dirt treatment family
7. GIR-30 detail level

Perspective may change projected scale. Underlying anatomy may not.

Forbidden:

- new-looking Player hand/foot after lock,
- non-uniform viewport stretching,
- scene-specific hand enlargement,
- higher realism because a hand is close to camera.

---

# 9. World continuity review

Compare:

```text
world topology map
approved world anchor
candidate camera position
neighboring scene
portrait/landscape equivalent
```

Review P2 structure:

1. horizon/ridge family
2. fire position
3. shelter orientation
4. route axis
5. landmark identity
6. terrain slope
7. light direction
8. material palette
9. GIR-30 grouped-detail language

Tiny pebbles/grass/smoke/cloud shapes may vary if structure is intact.

---

# 10. Object continuity review

For DAY1-HANDAXE-V1 compare:

- face-A master
- face-B master
- side/thickness
- scale reference
- approved grip references when available
- candidate

Review:

1. contour
2. major scar fingerprint
3. scale
4. visible face
5. grip-base
6. working-end
7. contact anatomy
8. GIR-30 material treatment

Macro mineral detail is not required to preserve object identity.

---

# 11. Contact-heavy scene protocol

For SC02 and other contact scenes, beauty is secondary.

Required review zooms:

- whole composition,
- hand/contact crop,
- object/contact crop,
- Player wrist/forearm crop,
- actor wrist/forearm crop.

SC02:

```text
Offer | Shared Contact | Release
```

Pass conditions:

- same Aru,
- same Player body family,
- same handaxe,
- continuous object orientation,
- fingers do not teleport,
- plausible depth,
- same GIR-30 surface tier across the contact cluster.

If separate layers repeatedly fail, use a unified contact raster.

---

# 12. L / TP / PP production protocol

For the same event state:

```text
1. crop/zoom/pan from same approved master
2. controlled outpaint if coverage/resolution is insufficient
3. dedicated angle/framing derivative only if the shared master cannot preserve event meaning
```

All variants share:

- anchor IDs,
- moment ID,
- character identity,
- Player body identity,
- object identity,
- world relationships,
- light direction,
- narrative state,
- GIR-30 surface tier.

Portrait enlargement does not authorize extra pores, hair, nail or material microdetail.

---

# 13. Moment IDs

Initial critical moments:

```text
MOMENT-CAMP-LIVING-A
MOMENT-SC02-OFFER-A
MOMENT-SC02-SHARED-A
MOMENT-SC02-RELEASE-A
MOMENT-SC03-TOOL-NAMING-A
MOMENT-SC05-DEPARTURE-A
MOMENT-SC06-DAMU-STOP-A
MOMENT-SC07-CROUCH-A
MOMENT-SC08-NUA-TURN-A
MOMENT-SC09-REVEAL-A
MOMENT-SC10-SHELTER-INSPECT-A
MOMENT-SC11-DEPARTURE-A-ARU-POV
```

Same-moment derivatives must reconcile event state, lighting, people and objects.

---

# 14. Candidate review gates

## Gate 1 — Technical cleanliness

- valid dimensions
- no baked UI/text
- no broken alpha
- no obvious generation artifact

## Gate 2 — Structural anatomy / P0 identity

- correct identity/body family where applicable
- functional joints/pose

## Gate 3 — P1 contact/object

- contact topology
- object scale/morphology
- camera/body relationship

## Gate 4 — P2 world continuity

- geography
- landmark
- light

## Gate 5 — GIR-SURFACE-30

- assigned surface score 25–35
- reads immediately as illustration
- no photographic micro-detail dominance
- consistent layer detail language
- extraction/composite viability

## Gate 6 — Historical integrity

- no anachronism
- reconstruction/deferred boundaries respected

## Gate 7 — Responsive equivalence

- crop-first decision followed
- dedicated derivative preserves same event

## Gate 8 — P3 polish

- harmless microvariation may remain
- do not regenerate merely for tiny incidental differences

## Gate 9 — Project-owner visual review

Only after previous gates.

---

# 15. Drift severity

```text
D0 = no meaningful drift
D1 = small polish/incidental variation
D2 = visible structural/style inconsistency; revise before approval
D3 = identity/body/object/contact/world break; reject
```

Typical:

```text
P0 identity failure             → D3
P1 contact/hero-object failure  → D3
P2 major world contradiction    → D2/D3
GIR-30 surface above band       → D2; D3 if strongly photographic and unusable
P3 incidental variation         → D0/D1
```

---

# 16. Versioning / policy recalibration

Never silently overwrite an approved identity/master.

Material identity change:

```text
ARU-IDENTITY-V1 → ARU-IDENTITY-V2
```

Style-policy recalibration is handled differently:

- preserve historical review decision,
- mark prior reference `superseded`,
- remove it from current approved path/registry,
- invalidate downstream candidates that depended on it,
- reopen the earliest affected serial slot.

Current example:

```text
human-mid r03 old-policy approval
→ GIR-SURFACE-30 locked
→ r03 superseded
→ approved path removed
→ human-mid r04 reopened
→ first-person-hand r02 blocked upstream
```

---

# 17. Approval rule

A candidate can become approved only when:

- [ ] composition/art review passes
- [ ] required upstream anchors are approved
- [ ] actual approved references were supplied
- [ ] P0 identity continuity passes where applicable
- [ ] P1 anatomy/object/contact passes
- [ ] P2 world structure is reconcilable
- [ ] GIR-SURFACE-30 surface score is 25–35
- [ ] photographic microdetail/lens drift is absent
- [ ] derivation follows crop-first/master-derived policy
- [ ] drift severity is D0/D1 at approval
- [ ] responsive families exist through crop or controlled derivative
- [ ] no baked UI/text
- [ ] historical review passes
- [ ] Project-owner review passes where required

# **Consistency and illustration level are therefore code/production gates, not prompt-memory preferences.**
