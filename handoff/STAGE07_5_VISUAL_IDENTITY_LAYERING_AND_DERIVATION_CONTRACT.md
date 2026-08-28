# Stage 07.5 — Visual Identity, Layering & Derivation Contract

Status: **SPEC LOCKED / PRODUCTION POLICY**

Purpose: remove ambiguity about how much visual variation is acceptable, what must remain visually identical, when a scene should be cropped from an existing master, when a new camera-angle derivative is justified, and which assets should remain separated for compositing.

This contract clarifies the Stage 07.5 production rules in:

- `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
- `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`

Technical runtime SSOT remains `docs/06_TECH_BLUEPRINT.md`. If a technical conflict exists, the Technical SSOT wins. For Stage 07.5 art-production ambiguity, this contract is the deciding production policy.

---

# 1. Final production principle

The project does **not** require pixel-perfect repetition of every pebble, hair strand, fold, or blade of grass.

It does require strong continuity where a human viewer interprets identity, embodiment, object ownership, contact, or place.

Production priority is:

```text
P0 identity-critical continuity
> P1 geometry / recurring-object continuity
> P2 world-structural continuity
> P3 incidental micro-detail continuity
```

The governing rule is:

# **Preserve identity strictly. Preserve structure strongly. Allow harmless micro-variation.**

And:

# **Do not regenerate what can be derived from an approved master.**

---

# 2. Continuity severity classes — exact acceptance policy

## P0 — Identity-critical / hard lock

The following must remain recognizably the **same approved identity**:

- Aru / Damu / Nua face identity,
- hero-character hair silhouette,
- hero-character body proportion/mass family,
- hero-character garment silhouette and major material zones,
- Player hand/arm/foot identity,
- Player skin/nail/finger/wrist/forearm/ankle proportion family.

P0 rule:

- minor expression, dirt, flyaway hair, cloth wrinkles, foreshortening, and lighting response may change;
- the underlying person/body identity may not change;
- a candidate that reads as a different person or a different Player body is **D3 reject**.

No production candidate may use text such as `same Aru as before` or `same Player hand` as its only continuity mechanism. The approved master/reference must actually be supplied to the derivation workflow.

## P1 — Contact / recurring hero object / hard geometry lock

Includes:

- `DAY1-HANDAXE-V1` morphology and scale fingerprint,
- handaxe face-A / face-B / grip-base / working-end relationship,
- SC02 Offer → Shared Contact → Release topology,
- Player/Aru hand-to-object depth and contact relationships,
- limb scale at contact.

P1 failures are normally **D3 reject**. Small lighting or surface-noise differences are allowed when morphology/contact remains unchanged.

## P2 — World structural continuity / strong lock

Must remain reconcilable as the same place:

- major fixed rocks / landmark silhouettes,
- shelter footprint and opening orientation,
- hearth position relative to shelter and route,
- route axis,
- terrain slope direction,
- rock-shelter entrance/overhang identity,
- major horizon family,
- world-space light direction and time-of-day family.

P2 does **not** require every minor stone, grass clump, cloud edge, smoke curl, or distant shrub to match.

A major structural contradiction is D2/D3. A harmless incidental difference is D0/D1.

## P3 — Incidental micro-detail / soft continuity

Allowed to vary without blocking approval when identity/meaning is unaffected:

- a few hair flyaways,
- small garment folds,
- tiny scratches/dirt placement,
- incidental pebbles,
- small grass blades,
- smoke/flame shape,
- cloud micro-shape,
- tiny background vegetation details,
- non-identity surface noise.

P3 variation is expected and should not trigger unnecessary regeneration.

---

# 3. STYLE-GIR-V1 — hard visual boundary

Official target remains **Grounded Illustrative Realism**.

The exact production interpretation is:

```text
realistic anatomy / weight / perspective / contact
+
illustratively simplified surface detail
+
clean reusable silhouettes
-
photographic micro-detail / photographic lens language
```

## Mandatory PASS characteristics

A STYLE-GIR-V1 candidate must satisfy all of these:

1. anatomy and perspective read as physically believable;
2. face identity is carried primarily by shape/proportion, not pore-level detail;
3. hair reads first as mass + silhouette, with strand groups secondary;
4. skin reads by broad planes, value, crease, and restrained texture;
5. garments read by silhouette, drape, fold groups, and material zones rather than fiber-level detail;
6. world and actors share one illustration/detail-density language;
7. reusable actor/body/item silhouettes can be cleanly separated from a background;
8. lighting is physically coherent but not staged like a fashion portrait or game poster.

## Automatic STYLE reject conditions

Any of the following is a STYLE-GIR-V1 reject unless the image is an explicitly non-production research reference:

- visible pore-field or beauty-photo facial rendering dominates normal viewing;
- individual hair strands form a photographic hair field instead of readable grouped masses;
- photographic lens bokeh / lens flare / chromatic aberration / sensor-film noise is baked into the art as a style cue;
- shallow photographic depth-of-field dissolves a reusable actor/body silhouette;
- glossy beauty lighting or wet cinematic skin becomes a defining surface treatment;
- fur/fabric becomes micro-fiber photography rather than readable material mass;
- actor looks photographic while world looks painted, or vice versa;
- AAA poster/HDR grading overrides world readability;
- visible extraction halo/background contamination remains around a reusable transparent asset at intended display size.

## Close-up rule

A close-up may reveal **more of the same approved structure**, but it may not jump to a more photographic rendering tier.

Close-up is not permission to add:

- skin-pore photography,
- eyelash macro detail,
- isolated hair-fiber rendering,
- product-photo stone gloss.

Identity continuity takes precedence over micro-realism.

---

# 4. Asset separation policy — what has a background and what does not

Not every reference image and not every runtime asset uses the same background policy.

## A. Style-proof references

Examples:

- STYLE-GIR-V1 `human-mid`,
- STYLE-GIR-V1 world/material tests,
- responsive style proof.

Purpose: prove the shared visual language.

These **may include a simple contextual background** because actor/world integration and lighting language must be reviewable.

They are not automatically reusable actor cutouts.

## B. Reusable hero-character / Player-body / recurring-object masters

Default authoring form:

```text
transparent alpha
OR
neutral extraction-safe background with a required transparent derivative
```

Applies to:

- Aru / Damu / Nua reusable body/pose masters,
- Player hands / forearms / arms / feet / body-visible assets,
- recurring item masters where separate compositing is useful.

These masters must avoid photographic edge complexity that makes extraction unstable.

## C. World masters

World/background masters are opaque high-resolution plates.

They own:

- geography,
- landmarks,
- terrain,
- world-space lighting reference,
- camera-facing environmental detail.

## D. Contact-heavy composites

When bodies and an object physically interlock, clean topology is more important than layer purity.

For SC02 and comparable contact beats, a unified contact raster is preferred when separate transparent layers would create floating grip, scale, or depth errors.

Therefore:

```text
background plate + reusable actors/body/prop
```

is the default assembly strategy, but:

```text
contact cluster = unified raster when physical topology requires it
```

is an explicit exception and not a pipeline failure.

---

# 5. Same-person rule — Aru / Damu / Nua

Once a hero identity anchor is approved:

```text
approved identity master
→ actual reference-conditioned derivative
→ scene pose/state derivative
→ crop / framing derivative
```

is required.

Forbidden:

```text
new independent text-to-image Aru for each scene
```

## Identity elements that may not be redesigned scene-by-scene

- face proportion family,
- jaw/cheek/head silhouette,
- hair silhouette,
- head/body ratio,
- shoulder width/body-mass class,
- limb-proportion family,
- garment silhouette,
- major material-zone placement.

## Allowed non-identity variation

- facial expression,
- gaze,
- pose,
- perspective foreshortening,
- minor hair flyaways,
- cloth wrinkles,
- dirt/wetness with continuity reason,
- small material deformation caused by action.

Project-owner review should be able to identify the same person without relying on a name label, costume color, or prompt description.

---

# 6. Player body rule — my hands, arms and feet must remain my body

`PLAYER-HUNT-BODY-V1` is one coherent fictional Player body master family.

The following may **not** be independently redesigned or independently generated after lock:

- right hand,
- left hand,
- wrists,
- forearms,
- visible upper arms,
- feet,
- ankles,
- recurring garment/wrist/ankle edge if visible.

Every Player limb derivative must inherit from the same approved body master/reference packet.

Hard-lock fingerprints:

- palm/hand size family,
- finger length/thickness relationships,
- thumb proportion,
- nail treatment,
- wrist thickness,
- wrist-to-forearm taper,
- arm proportion family,
- foot length/width family,
- ankle proportion,
- skin-tone/value family,
- dirt/weathering treatment family,
- illustration/detail level.

Perspective and foreshortening may change projected size. The underlying anatomy may not.

Forbidden corrections:

- non-uniform CSS stretch/compression to make a limb fit,
- scene-specific hand enlargement because the contact is hard to read,
- a separately generated foot that no longer looks like the same body.

P0 Player-body drift is D3 reject.

---

# 7. Same-place rule — master first, angle derivative only when needed

The world pipeline is:

```text
WORLD MASTER
→ crop / zoom / pan when the camera direction is effectively the same
→ controlled outpaint / resolution derivative when source coverage is insufficient
→ ANGLE MASTER when camera direction materially changes
→ STATE DERIVATIVE when the world/action state actually changes
```

## Case 1 — same place + same moment + same camera direction

Default: **use the same master pixels** through crop/zoom/pan.

Do not regenerate the scene merely to get:

- a closer view,
- a portrait crop,
- a tighter subject crop,
- a slightly shifted framing.

## Case 2 — same place + same moment + crop is composition-safe but source coverage/resolution is insufficient

Use a controlled derivative:

- upscale/super-resolution,
- outpaint,
- local inpaint where required,

while preserving the visible master geometry.

## Case 3 — same place + same moment + camera direction materially changes

Create an **Angle Master** conditioned on:

- approved world master,
- topology map,
- fixed landmark references,
- world-space light direction,
- scene camera contract.

The new angle may reveal new surfaces. It may not invent a contradictory geography.

## Case 4 — actual state changes

Examples:

- person moves,
- contact changes,
- object ownership changes,
- Player crouches,
- fire state progresses materially,
- time advances.

Create a state derivative from the approved masters.

A state change must not be faked by an unrelated fresh image.

---

# 8. Close-up and responsive framing rule

For the same event state:

# **Crop first. Derive only when crop fails.**

A close-up should first be produced by enlarging/cropping the approved high-resolution master.

L / TP / PP should first attempt to share one source master when all critical information remains visible.

A separate responsive derivative is justified only if the shared-master crop fails one or more of these hard conditions:

- main actor identity becomes unreadable,
- Player hand/body scale becomes implausible,
- hand/tool/contact is clipped,
- world-space relationship required by the scene becomes false or unreadable,
- UI safe region necessarily covers the causal action,
- crop loses a required landmark or cause/effect cue.

If a separate TP/PP derivative is required, it must remain the **same moment, same people, same body proportions, same object, same world, same light**, with only camera/framing changes permitted.

Portrait is never permission to redesign anatomy or move a person to a different world-space location solely to make a prettier frame.

---

# 9. Derivation decision table

| Situation | Required default method | Independent regeneration? |
| --- | --- | --- |
| new anchor exploration before lock | controlled independent exploration | allowed as candidate only |
| same master, tighter/looser framing | crop / zoom / pan | no |
| same camera direction, insufficient edge coverage | controlled outpaint from master | no |
| same camera direction, insufficient resolution | upscale/super-resolution from master | no |
| same place/moment, materially different view direction | Angle Master derived from world references | no |
| same character, new pose/expression | identity-conditioned pose/state derivative | no |
| Player limb new pose | PLAYER-HUNT-BODY-V1-conditioned derivative | no |
| same event, L/TP/PP | crop first; derivative only if crop fails | no |
| physical action state changes | state derivative | no |
| contact-heavy hand/object/body state | unified contact derivative/master | no |
| harmless pebble/grass/flyaway difference | accept if P0–P2 are intact | regeneration unnecessary |

---

# 10. Layer-composite acceptance rules

A layered scene passes only when:

- all layers share STYLE-GIR-V1 detail treatment;
- actor and Player body lighting belongs to the world light;
- feet/hands/body contact the world rather than float;
- no visible alpha halo or background-color fringe remains at intended display size;
- foreground occlusion is physically plausible;
- actor/body/object scale is not corrected with non-uniform stretching;
- baked UI/dialogue/learning copy is absent from scene raster.

If a layer stack repeatedly fails contact anatomy, replace the contact region with a unified approved contact raster instead of forcing separate layers.

---

# 11. Production review order

Review every hero/Player candidate in this order:

```text
1. P0 character / Player identity
2. P1 anatomy / object / contact geometry
3. P2 world structure / lighting
4. STYLE-GIR-V1 detail and separability
5. responsive crop / camera equivalence
6. P3 micro-detail polish
```

Do not spend time repairing P3 details while P0/P1 is wrong.

---

# 12. Approval checklist

Before approving a production visual, answer all of these with YES:

- [ ] Every hero character still reads as the approved same person.
- [ ] Every visible Player hand/arm/foot reads as the same approved Player body.
- [ ] No established identity was recreated from text alone.
- [ ] Recurring hero objects preserve their morphology and scale fingerprint.
- [ ] Contact-heavy anatomy/topology is physically plausible.
- [ ] Same-angle close-up/portrait used crop/zoom from the master where feasible.
- [ ] Any different-angle view was derived from the same world topology/landmark/light references.
- [ ] Major place structure remains reconcilable; only incidental micro-details may drift.
- [ ] Reusable character/body/item assets remain extraction/composite-friendly.
- [ ] Rendering is physically realistic but not photographic in surface/lens language.
- [ ] L/TP/PP preserve the same event rather than redesigning it.
- [ ] No anatomy was stretched to fit a viewport.
- [ ] No UI/text is baked into scene art.

A candidate with P0 identity drift does not proceed to polish. A candidate with only harmless P3 variation does not need regeneration.

---

# 13. Machine-readable production policy

The deterministic derivation and asset-role vocabulary is mirrored in:

- `src/experience/production/stage075VisualProductionPolicy.ts`

This module is a production/development contract. It does not mark any visual anchor approved and does not advance the Human Gate.

# **Current Stage 07.5 truth remains: STYLE-GIR-V1 reference-pending, Human Gate FAIL, Stage 08 BLOCKED.**
