# Stage 07.5 — Visual Generation & Continuity Review Protocol

Status: **MANDATORY PRODUCTION WORKFLOW**

Purpose: convert image generation/editing from ad-hoc prompting into a traceable anchor-conditioned production pipeline.

This protocol applies to:

- AI-assisted generation
- image-to-image variation
- inpainting/outpainting
- manual paintover
- layer compositing
- responsive crop/framing derivation
- future asset revision

Depends on:

- `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
- `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`
- `src/experience/production/stage075VisualProductionPolicy.ts`
- `src/experience/production/stage075VisualContinuityRegistry.ts`
- `src/experience/production/stage075RasterManifest.ts`

---

# 1. Production principle

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
approved ARU-IDENTITY-V1 references attached
+ approved PLAYER-HUNT-BODY-V1 references attached
+ approved WORLD-CAMP-DAWN-A reference attached
+ approved DAY1-HANDAXE-V1 reference attached
+ camera/contact contract
+ only permitted change explicitly stated
```

Second governing principle:

# **Do not regenerate what can be derived from an approved master. Crop first; derive only when crop fails.**

---

# 2. Asset production phases

## Phase A — Anchor exploration

Allowed:

- controlled independent generation
- multiple candidates
- broader style exploration

Output is **candidate only**.

No candidate is used in a scene until anchor review.

## Phase B — Anchor lock

Select and consolidate:

- character identity packet
- Player body packet
- world anchor packet
- object anchor packet
- lighting anchor

Update registry status from:

```text
reference-pending
→ anchor-approved
```

only after approved master/reference files are stored.

## Phase C — Master derivation

Once a continuity group is approved, choose the smallest necessary derivation:

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

Conditioning/edit techniques may include:

1. locked-keyframe variation
2. reference-conditioned generation
3. pose/depth/edge-controlled generation
4. inpaint/outpaint
5. manual/2D composite

These are **techniques**, not permission to reset identity.

## Phase D — Cross-scene review

Never approve a scene while viewing only that scene.

Compare against:

- anchor masters
- immediately previous beat
- immediately next beat
- same character in at least two other scenes where available
- same world from another camera where applicable
- L/TP/PP counterpart

---

# 3. Mandatory Generation / Derivation Job Card

Every generated or materially edited candidate requires a Job Card. A pure metadata crop exported from an already approved master may share the parent Job Card if no pixels are regenerated.

Template:

```text
JOB ID:
TARGET ASSET ID:
SCENE / BEAT:
PV ID:
MOMENT ID:
COMPOSITION FAMILY: L / TP / PP / N
OUTPUT ROLE: style-proof / world / actor / body / object / contact / occluder

DERIVATION MODE:
- independent-exploration
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

REQUIRED CHARACTER ANCHORS:
REQUIRED PLAYER-BODY ANCHOR:
REQUIRED WORLD ANCHORS:
REQUIRED OBJECT ANCHORS:
REQUIRED PROP/LANDMARK ANCHORS:
REQUIRED LIGHTING ANCHOR:

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

TOOL/MODE:
PROMPT OR EDIT INSTRUCTION REVISION:

OUTPUT FILE:
REVIEW STATUS:
DRIFT CODES:
REVIEW NOTES:
```

If the Job Card cannot list actual approved reference files for an established continuity group, the candidate is not a production scene candidate.

---

# 4. Instruction construction order

When a generation/edit tool is used, instruction priority must be expressed in this order:

```text
1. preserve attached identity/Player/world/object anchors
2. preserve camera/pose/contact geometry
3. specify only the intended beat/camera change
4. preserve STYLE-GIR-V1 detail/separability level
5. apply historical exclusions
6. reserve runtime UI-safe space
```

Do not lead with aesthetic prose such as:

> cinematic, epic, beautiful prehistoric scene

before continuity constraints.

Aesthetic adjectives must not override anchor identity.

---

# 5. Style consistency target

Official style remains **Grounded Illustrative Realism**.

Hard interpretation:

```text
physical realism in anatomy / weight / perspective / contact
+
illustratively simplified surfaces and clean reusable silhouettes
-
photographic micro-detail and photographic lens language
```

Required:

- face identity carried primarily by structure/proportion,
- hair mass/silhouette before individual strand detail,
- skin broad planes/creases before pore detail,
- garment fold/material zones before fiber detail,
- consistent actor/world finish,
- extraction-friendly reusable actor/body/item edges,
- natural coherent lighting.

Reject:

```text
SID-PHOTO    photographic skin/micro-detail tier
SID-LENS     photographic lens-language drift
SID-EDGE     unstable/contaminated reusable extraction edge
SID-POSTER   cinematic advertising/poster grading
SID-CARTOON  overly simplified/cartoon shift
SID-FANTASY  fantasy barbarian/concept-art shift
SID-FOG      generic AI atmospheric fog obscures information
SID-TEXTBOOK diagram/cutaway educational illustration shift
SID-COMPOSITE pasted-layer mismatch in finish/detail
```

A scene with correct people but wrong style is rejected.

---

# 6. Character continuity review

For any candidate containing Aru/Damu/Nua, show side-by-side:

```text
approved anchor 3/4
approved anchor full body
candidate
nearest prior scene
nearest next scene
```

Review in this order:

1. face proportion/identity
2. hair silhouette
3. head/body ratio
4. shoulder/body mass
5. garment silhouette/material zones
6. hands
7. movement identity
8. style/detail level

P0 rule:

- expression, perspective, minor wrinkles, dirt, and flyaways may vary;
- a candidate that reads as another person is D3 reject.

Do not get distracted by lighting or a beautiful background until identity passes.

---

# 7. Player-body continuity review

Any candidate showing Player hands, arms, feet, ankles, or recurring garment edges must compare against `PLAYER-HUNT-BODY-V1`.

Review:

1. hand/palm size family
2. finger-length/thickness relationships
3. thumb/nail treatment
4. wrist thickness and forearm taper
5. arm proportion family
6. foot/ankle proportion when visible
7. skin/dirt treatment family
8. illustration/detail level

Perspective may change projected scale. The underlying anatomy may not.

Forbidden:

- independently generating a new-looking Player hand/foot after lock,
- non-uniform CSS stretching/compression to fit a viewport,
- scene-specific hand enlargement to make contact easier to see.

P0 Player-body drift is D3 reject.

---

# 8. World continuity review

For any environment candidate, compare:

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

A world that changes those structural relationships does not pass.

The following alone do **not** require rejection/regeneration when the structural world remains intact:

- tiny pebble shifts,
- individual grass blades,
- smoke/flame micro-shape,
- cloud micro-shape,
- small distant vegetation differences.

---

# 9. Object continuity review

For scenes with DAY1-HANDAXE-V1 compare:

- face-A master
- face-B master
- scale reference
- approved grip references
- candidate

Review:

1. contour
2. major scar fingerprint
3. scale
4. visible face
5. grip-base position
6. working-end position
7. material
8. contact anatomy

Mirrored images require explicit review because handedness/object face can invert.

---

# 10. Contact-heavy scene protocol

For SC02 and other physical-contact scenes, general scene beauty is secondary.

Required review zooms:

- 100% whole composition
- hand/contact crop
- object/contact crop
- Player wrist/forearm crop
- actor wrist/forearm crop

SC02 sequence must be reviewed as:

```text
Offer | Shared Contact | Release
```

not as three unrelated images.

Pass conditions:

- same Aru
- same Player hand/body family
- same handaxe
- object orientation moves continuously
- fingers do not teleport between frames
- depth relationship is plausible

If separate layers repeatedly fail these conditions, use a unified contact raster rather than forcing layer purity.

---

# 11. L / TP / PP production protocol

Landscape, tablet portrait, and phone portrait are **not automatically distinct source generations**.

For the same event state:

```text
1. crop/zoom/pan from same approved master
2. controlled outpaint if coverage/resolution is insufficient
3. dedicated angle/framing derivative only if the shared master cannot preserve event meaning
```

All responsive variants must share:

- anchor IDs
- moment ID
- character identity
- Player body identity
- object identity
- world-space relationships
- light direction
- narrative state

If a dedicated derivative is required, it gets its own Job Card and references the same `MOMENT ID` plus its parent master.

Example:

```text
MOMENT: SC02-SHARED-CONTACT-A
STATE MASTER → HUNT-SC02-HANDOFF-SHARED-MASTER-v01
L  → crop/derivative of MASTER
TP → crop first; derivative only if crop fails
PP → crop first; derivative only if crop fails
```

Portrait is a different camera/framing solution only when necessary, not a character/world reshoot.

---

# 12. Moment IDs

Use Moment IDs to tie multiple images to the same world-time state.

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

`MOMENT-SC05-DEPARTURE-A` and `MOMENT-SC11-DEPARTURE-A-ARU-POV` are the same world-time instant from different positions. Their event state, lighting, people, and object state must reconcile.

---

# 13. Candidate review layers

Every candidate passes gates in order.

## Gate 1 — Technical cleanliness

- valid dimensions
- no baked UI/text
- no broken alpha
- no obvious generation artifacts

## Gate 2 — P0 identity continuity

- hero characters
- Player body

P0 failure stops review and is normally D3.

## Gate 3 — P1 structural anatomy/contact/object

- anatomy
- object scale/morphology
- contact topology
- camera/body relationship

## Gate 4 — P2 world continuity

- geography
- landmark
- light

## Gate 5 — STYLE-GIR-V1

- non-photographic surface boundary
- consistent detail language
- extraction/composite viability

## Gate 6 — Historical integrity

- no anachronism
- reconstruction/deferred boundaries respected

## Gate 7 — Responsive equivalence

- crop-first decision was followed
- any dedicated derivative preserves the same event

## Gate 8 — P3 polish

- harmless micro-detail variation may remain
- do not regenerate only to chase pebble/flyaway/fold perfection

## Gate 9 — Project-owner visual review

Only after previous gates.

Failure at an earlier gate stops review; do not polish a structurally invalid candidate.

---

# 14. Drift severity

Use severity with drift codes.

```text
D0 = no meaningful drift
D1 = small polish/incidental variation; acceptable if meaning/identity is intact
D2 = visible structural continuity inconsistency; revise before approval
D3 = identity/body/object/contact/world break; reject
```

Default mapping:

```text
P0 identity failure           → D3
P1 contact/hero-object failure → D3
P2 major world contradiction   → D2/D3
P3 incidental variation        → D0/D1
```

A few changed grass blades, pebbles, cloth wrinkles, flyaways, smoke curls, or cloud shapes are not grounds for regeneration by themselves.

---

# 15. Versioning rules

Never silently overwrite an approved anchor concept.

If identity must materially change:

```text
ARU-IDENTITY-V1
→ ARU-IDENTITY-V2
```

Then all dependent scene assets must be marked for review/re-derivation.

Same for:

```text
PLAYER-HUNT-BODY-V1
WORLD-CAMP-DAWN-A
DAY1-HANDAXE-V1
PROP-TEMP-SHELTER-A
```

Small file compression/export changes do not require semantic version increment if the pixels/identity are unchanged.

---

# 16. File provenance sidecar

For each approved master/candidate, keep a sidecar metadata record where practical.

Suggested fields:

```json
{
  "assetId": "HUNT-SC02-HANDOFF-SHARED-L-V1",
  "momentId": "MOMENT-SC02-SHARED-A",
  "family": "L",
  "revision": 1,
  "derivationMode": "crop-from-master",
  "parentAsset": "HUNT-SC02-HANDOFF-SHARED-MASTER-V1",
  "anchorIds": [
    "ARU-IDENTITY-V1",
    "PLAYER-HUNT-BODY-V1",
    "DAY1-HANDAXE-V1",
    "WORLD-CAMP-DAWN-A",
    "LIGHT-DAY1-DAWN-A"
  ],
  "status": "candidate"
}
```

The TypeScript registry remains the runtime/development contract; sidecars help art-production provenance.

---

# 17. Approval rule

A candidate can become an approved scene raster only when:

- [ ] its own composition/art review passes
- [ ] all `requiredAnchorIds` are `anchor-approved`
- [ ] actual approved anchor files were used during derivation
- [ ] P0 identity continuity passes
- [ ] P1 anatomy/object/contact continuity passes where applicable
- [ ] P2 world structure is reconcilable
- [ ] STYLE-GIR-V1 hard boundary passes
- [ ] derivation method follows crop-first/master-derived policy
- [ ] drift severity is D0/D1 only at approval
- [ ] required responsive families exist through crop or controlled derivative
- [ ] no baked UI/text
- [ ] historical review passes
- [ ] project-owner visual review passes where required

The runtime adapter additionally enforces its registered dependency rules.

# **Consistency is therefore not dependent on memory or prompt discipline alone; it is a production and code gate.**
