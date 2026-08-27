# Stage 07.5 — Visual Generation & Continuity Review Protocol

Status: **MANDATORY PRODUCTION WORKFLOW**

Purpose: convert image generation/editing from ad-hoc prompting into a traceable anchor-conditioned production pipeline.

This protocol applies to:

- AI-assisted generation
- image-to-image variation
- inpainting/outpainting
- manual paintover
- layer compositing
- portrait recomposition
- future asset revision

Depends on:

- `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`
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
```

Strong:

```text
approved ARU-IDENTITY-V1 references attached
+ approved WORLD-CAMP-DAWN-A reference attached
+ approved DAY1-HANDAXE-V1 reference attached
+ SC02 camera/contact contract
+ only permitted change = hand/pose progression
```

---

# 2. Asset production phases

## Phase A — Anchor exploration

Allowed:

- independent generation
- multiple candidates
- broader style exploration

Output is **candidate only**.

No candidate is used in a scene until anchor review.

## Phase B — Anchor lock

Select and consolidate:

- character identity packet
- world anchor packet
- object anchor packet
- lighting anchor

Update registry status from:

```text
reference-pending
→ anchor-approved
```

only after approved master/reference files are stored.

## Phase C — Scene derivation

Scene production must reference approved anchors.

Preferred methods:

1. locked-keyframe variation
2. reference-conditioned generation
3. pose/depth/edge-controlled generation
4. inpaint/outpaint
5. manual/2D composite

Independent text-to-image is prohibited for an established continuity group unless explicitly marked `independent-exploration` and cannot be approved directly.

## Phase D — Cross-scene review

Never approve a scene while viewing only that scene.

Compare against:

- anchor masters
- immediately previous beat
- immediately next beat
- same character in at least two other scenes
- same world from another camera
- L/TP/PP counterpart

---

# 3. Mandatory Generation Job Card

Every generated or edited candidate requires a Job Card.

Template:

```text
JOB ID:
TARGET ASSET ID:
SCENE / BEAT:
PV ID:
COMPOSITION FAMILY: L / TP / PP
OUTPUT ROLE: world / actor / body / object / contact / occluder

DERIVATION MODE:
- anchor-conditioned
- locked-keyframe-variation
- independent-exploration

PARENT ASSET:
PARENT REVISION:

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

HISTORICAL CONFIDENCE:
[H] / [C] / [R] / [D]

GENERATION/EDIT METHOD:
TOOL/MODE:
PROMPT OR EDIT INSTRUCTION REVISION:

OUTPUT FILE:
REVIEW STATUS:
DRIFT CODES:
REVIEW NOTES:
```

If the Job Card cannot list actual approved reference files, the candidate is not a production scene candidate.

---

# 4. Prompt/instruction construction order

When a generation tool is used, instruction priority should be expressed in this order:

```text
1. preserve attached identity/world/object anchors
2. preserve camera/pose/contact geometry
3. specify only the intended beat change
4. preserve illustration style/detail level
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

Style anchor must preserve:

- realistic anatomy
- believable contact
- natural perspective
- restrained material texture
- slightly illustrative surface treatment
- non-photographic skin detail
- child-appropriate visual clarity

## Style drift reject codes

```text
SID-PHOTO    too photoreal / camera-photo look
SID-POSTER   cinematic advertising/poster grading
SID-CARTOON  overly simplified/cartoon shift
SID-FANTASY  fantasy barbarian/concept-art shift
SID-FOG      generic AI atmospheric fog obscures information
SID-TEXTBOOK diagram/cutaway educational illustration shift
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

1. face proportion
2. hair silhouette
3. head/body ratio
4. shoulder/body mass
5. garment silhouette
6. hands
7. movement identity
8. style/detail level

Do not get distracted by lighting or beautiful background until identity passes.

Use drift codes from Character Identity Anchor Bible.

---

# 7. World continuity review

For any environment candidate, compare:

```text
world topology map
approved world anchor
candidate camera position
neighboring scene
portrait/landscape equivalent
```

Review:

1. horizon/ridge silhouette
2. fire position
3. shelter orientation
4. route axis
5. landmark identity
6. terrain slope
7. light direction
8. material palette

A world that is merely `similar` does not pass.

---

# 8. Object continuity review

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

# 9. Contact-heavy scene protocol

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
- same Player hand
- same handaxe
- object orientation moves continuously
- fingers do not teleport between frames
- depth relationship is plausible

---

# 10. L / TP / PP production protocol

Landscape, tablet portrait, and phone portrait may be distinct source images.

They must share:

- anchor IDs
- moment ID
- character identity
- world-space positions
- object identity
- light direction
- narrative state

Each responsive family gets its own Job Card but uses the same `MOMENT ID`.

Example:

```text
MOMENT: SC02-SHARED-CONTACT-A
L  → HUNT-SC02-HANDOFF-SHARED-L-v01
TP → HUNT-SC02-HANDOFF-SHARED-TP-v01
PP → HUNT-SC02-HANDOFF-SHARED-PP-v01
```

Portrait may reposition the camera/framing but may not redesign the event.

---

# 11. Moment IDs

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

# 12. Candidate review layers

Every candidate passes gates in order.

## Gate 1 — Technical cleanliness

- valid dimensions
- no baked UI/text
- no broken alpha
- no obvious generation artifacts

## Gate 2 — Structural composition

- camera
- action readability
- pose
- contact
- crop

## Gate 3 — Identity continuity

- characters
- Player body
- objects

## Gate 4 — World continuity

- geography
- landmark
- light

## Gate 5 — Historical integrity

- no anachronism
- reconstruction/deferred boundaries respected

## Gate 6 — Responsive equivalence

- L/TP/PP preserve same event meaning

## Gate 7 — Project-owner visual review

Only after previous gates.

Failure at an earlier gate stops review; do not polish a structurally invalid candidate.

---

# 13. Drift severity

Use severity with drift codes.

```text
D0 = no meaningful drift
D1 = small polish-level variation; acceptable if intentional
D2 = visible continuity inconsistency; revise before approval
D3 = identity/world/object break; reject
```

Hero character face drift, wrong handaxe identity, world topology break, or same-moment light reversal are normally D3.

---

# 14. Versioning rules

Never silently overwrite an approved anchor concept.

If identity must materially change:

```text
ARU-IDENTITY-V1
→ ARU-IDENTITY-V2
```

Then all dependent scene assets must be marked for review/re-derivation.

Same for:

```text
WORLD-CAMP-DAWN-A
DAY1-HANDAXE-V1
PROP-TEMP-SHELTER-A
```

Small file compression/export changes do not require semantic version increment if the pixels/identity are unchanged.

---

# 15. File provenance sidecar

For each approved master/candidate, keep a sidecar metadata record where practical.

Suggested fields:

```json
{
  "assetId": "HUNT-SC02-HANDOFF-KEYFRAME-V1",
  "momentId": "MOMENT-SC02-SHARED-A",
  "family": "L",
  "revision": 1,
  "derivationMode": "anchor-conditioned",
  "parentAsset": null,
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

# 16. Approval rule

A candidate can become an approved scene raster only when:

- [ ] its own composition/art review passes
- [ ] all `requiredAnchorIds` are `anchor-approved`
- [ ] actual approved anchor files were used during derivation
- [ ] drift severity is D0/D1 only
- [ ] L/TP/PP required families exist
- [ ] no baked UI/text
- [ ] historical review passes
- [ ] project-owner visual review passes where required

The runtime adapter additionally enforces this rule programmatically.

# **Consistency is therefore not dependent on memory or prompt discipline alone; it is a production and code gate.**
