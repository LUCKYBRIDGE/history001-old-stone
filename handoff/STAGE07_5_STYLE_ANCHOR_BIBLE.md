# Stage 07.5 — Style Anchor Bible

Status: **STYLE-GIR-V1 SPEC LOCKED / GIR-SURFACE-30 RECALIBRATION ACTIVE / REFERENCE SHEET PENDING**

Anchor ID:

```text
STYLE-GIR-V1
```

Surface policy ID:

```text
GIR-SURFACE-30
```

Purpose: keep every Stage 07.5 raster inside one **Grounded Illustrative Realism** language while deliberately limiting photographic surface detail so identity continuity, compositing and historical restraint remain stronger than micro-realism.

Depends on:

- `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
- `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
- `src/experience/production/stage075StyleAnchor.ts`
- `src/experience/production/stage075VisualProductionPolicy.ts`

The Stage 07.5 rule below **narrows** earlier qualitative `semireal / illustrative realism` wording. When older prose is ambiguous, this GIR-SURFACE-30 contract controls Stage 07.5 production.

---

# 1. Exact target on the realism spectrum

`30` is the Project-owner selected target for **surface/rendering realism**.

```text
0    very simple graphic/cartoon
15   strongly simplified animation-like treatment
30   grounded structural illustration  ← TARGET
45   semireal illustration
60   realistic illustration
80   game/cinematic realism
100  photograph
```

Machine-readable acceptance band:

```text
25–35
```

Interpretation:

- target center = `30/100`
- `25–35` = acceptable surface band
- `<25` = inspect for excessive cartoon/graphic simplification
- `>35` = inspect for semireal/photographic drift

# **This score applies to surface/rendering treatment, not to anatomy correctness.**

The image should immediately read as an illustration at normal viewing distance.

---

# 2. Two independent requirements

The project separates **physical plausibility** from **surface realism**.

## A. Physical / structural logic — keep strong

Required:

- correct finger count and joint sequence,
- believable wrist/forearm articulation,
- coherent limb/body relationship,
- believable weight and center of mass,
- plausible reach/contact,
- coherent perspective,
- readable object depth/occlusion,
- coherent world-space light,
- exact approved identity/body/object/world continuity after lock.

## B. Surface / rendering realism — deliberately around 30

Simplify:

- skin microtexture,
- individual hair,
- veins/body hair,
- nail reflections/cuticles,
- fabric fibers/stitching,
- rock/soil grains and micro-cracks,
- leaf/grass/pebble density,
- photographic depth-of-field cues.

Core formula:

```text
functional believable anatomy / weight / perspective / contact
+
GIR-SURFACE-30 simplified planes / grouped texture / clean silhouette
-
photographic micro-detail / lens language / material macro-detail
```

---

# 3. Why photorealism is intentionally limited

High photorealism creates project-specific problems:

1. historical uncertainty looks falsely certain;
2. face/hand/body inconsistency becomes more obvious;
3. multiple generated angles drift in pores, hair, wrinkles and lighting;
4. Player hands/arms/feet are harder to keep as one body family;
5. extracted layers look pasted together when detail density differs;
6. background removal becomes harder around photographic hair/fiber edges;
7. style-conditioned generation tends to escalate toward cinematic/photo language.

Therefore realism is used for **physical logic**, not photographic surface imitation.

Identity continuity and derivability are higher priorities than micro-detail.

---

# 4. Hard GIR-SURFACE-30 acceptance boundary

A candidate must satisfy all of these:

1. anatomy/perspective/contact are functionally believable;
2. assigned surface realism is approximately 30 and within 25–35;
3. face identity comes from shape/proportion/large planes before microtexture;
4. hair reads as mass + silhouette before individual strands;
5. skin reads as broad planes/value + representative creases before pores;
6. garments read as silhouette/drape/fold groups/material zones before fibers;
7. stone/soil read from major planes/roughness groups before micro-cracks/grain;
8. actor/body/object/world share one GIR-30 finish/detail-density language;
9. reusable actor/body/item assets can produce a clean separated silhouette;
10. lighting remains physically coherent without photo/lens/poster staging.

Automatic reject or mandatory revision if any of these defines the image:

- pore-field / beauty-photo facial rendering,
- photographic individual-hair field,
- visible body-hair/vein field used as realism texture,
- macro nail/cuticle/specular detail,
- macro rock/mineral/fiber/soil texture,
- lens bokeh,
- lens flare,
- chromatic aberration,
- sensor/film-noise simulation,
- shallow photographic DOF,
- glossy beauty/wet skin treatment,
- photographic actor against painterly world or the reverse,
- visible alpha halo/background contamination on reusable assets,
- AAA poster/HDR grading,
- excessive cartoon/chibi simplification that breaks grounded form.

A close-up may reveal larger **shapes**, not a higher photographic rendering tier.

---

# 5. Skin rendering

Target:

- large color/value planes,
- simplified volume,
- a few action-relevant creases,
- limited dirt/dust marks,
- minimal local texture.

Normally omit or strongly suppress:

- pore field,
- fine skin grain,
- many tiny blemishes,
- individual body hair,
- decorative veins,
- wet/glossy skin,
- subsurface-scattering showcase.

Review question:

> 형태는 사람답지만 표면은 확실히 그림으로 정리되어 있는가?

---

# 6. Face rendering

Target:

- readable head shape,
- clear eye/nose/mouth placement,
- natural asymmetry,
- jaw/cheek structure,
- readable gaze/expression,
- large light/shadow planes.

Avoid:

- pore/eyelash/micro-wrinkle realism,
- beauty portrait lighting,
- beauty retouching,
- photo-attractiveness drift,
- exaggerated primitive coding.

# **Face identity must survive even if all pore-level detail is removed.**

---

# 7. Hair rendering

Target:

- mass and silhouette first,
- a few grouped locks only when needed,
- movement readable through large shape,
- stable extraction-friendly contour.

Avoid:

- individual strand field,
- feathery photographic edge,
- shampoo-ad highlights,
- random strand complexity as identity.

Hair silhouette is P0 identity for named characters; individual flyaways are P3.

---

# 8. Hand / arm / foot rendering

Hands and limbs are high priority because they carry first-person embodiment.

Must preserve:

- correct digits,
- finger segment sequence,
- hand width/length relationship,
- wrist transition,
- forearm taper,
- pressure/contact,
- later exact Player body family.

Surface target:

- broad skin planes,
- a few key knuckle/palm creases,
- simple nails,
- minimal hair/veins,
- no macro skin texture.

Avoid:

- photographic hand against illustrative world,
- vein/hair/crease overload,
- glossy skin,
- cuticle/nail macro detail,
- extra/merged fingers,
- floating grip,
- scene-specific hand redesign.

Player and NPC hands share the same GIR-30 rendering tier. Player limbs additionally inherit one approved `PLAYER-HUNT-BODY-V1` identity.

---

# 9. Garment/material rendering

Target:

- silhouette,
- weight/drape,
- broad folds,
- large material zones,
- only a few representative fray/roughness marks.

Avoid:

- fiber-level product photography,
- detailed stitching as archaeological fact,
- glossy leather costume,
- fantasy fur armor,
- repeated micro-fray texture.

Historical uncertainty should be handled by **low specificity**, not photoreal certainty.

---

# 10. Stone / handaxe rendering

Target:

- clear large flake-scar structure where relevant,
- readable thickness,
- major planes,
- grouped roughness,
- representative surface marks,
- moderate edge sharpness.

Avoid:

- every grain/crack/lichen spot rendered,
- macro mineral photography,
- product showcase lighting,
- jewelry/gloss reflection,
- polished knife-like edge.

The handaxe must preserve morphology/fingerprint after lock while still using GIR-30 surface density.

---

# 11. World rendering

Target:

- depth through value, overlap, scale and perspective,
- grouped terrain masses,
- readable movement space,
- simplified vegetation clusters,
- legible horizon/landmarks,
- consistent material palette.

Avoid:

- leaf-by-leaf or pebble-by-pebble photo density,
- giant scenic vista as the purpose of the frame,
- fantasy matte-painting atmosphere,
- generic AI mist hiding geography,
- bokeh/lens separation as depth logic.

The world supports embodied history; it is not a landscape wallpaper showcase.

---

# 12. Lighting / contrast / color

Lighting target:

- one coherent world-space direction,
- readable local volume,
- natural ambient/local contrast,
- controlled highlights,
- shadows with action information.

Avoid:

- glamour rim light,
- HDR clipping,
- orange/teal blockbuster grade,
- crushed blacks,
- baked vignette,
- bloom used to hide structure.

Color target:

- restrained natural earth range,
- enough separation for skin/garment/rock readability,
- no rarity/game-code colors.

---

# 13. Detail density hierarchy

Required perceptual priority:

```text
contact/action area > hero actor > Player body/tool > nearby world > distant background
```

But even the highest-priority contact area remains GIR-30. A close-up does **not** unlock photo-macro texture.

Good close-up change:

```text
larger joint shape
clearer contact point
clearer representative crease
```

Bad close-up change:

```text
new pore field
individual hair field
cuticle detail
micro-crack field
```

---

# 14. Identity and canonical proportion

Surface simplification does not relax identity.

For approved characters/Player:

```text
same face structure
same hair silhouette
same canonical head/body ratio
same limb ratios
same body mass family
same garment silhouette/material zones
```

must remain fixed.

If a canonical character is 7.2 heads, a later derivative does not become 6.8 or 7.5. Apparent screen-space differences from perspective/foreshortening are allowed; underlying structure changes are not.

---

# 15. Extraction / layering

GIR-30 is chosen partly because it supports production continuity.

Reusable hero/body/item masters should favor:

- grouped edges,
- stable silhouette,
- low photographic hair/fiber complexity,
- manageable masks,
- consistent lighting/material density.

This does not mean every final contact scene must be transparent-layer purity. Contact-heavy moments may use unified rasters when anatomy/contact breaks under separate layers.

---

# 16. L / TP / PP style equivalence

Portrait variants must not become more photographic because the subject is larger.

Maintain the same:

- GIR-30 surface tier,
- brush/texture character,
- skin simplification,
- contrast,
- color grade,
- material simplification,
- edge treatment.

Same moment + same camera direction:

```text
crop / zoom / pan from same high-resolution master first
```

If a dedicated derivative is necessary, its surface realism remains inside the same 25–35 band.

---

# 17. STYLE-GIR-V1 reference packet

The packet contains five serial slots:

```text
1. human-mid
2. first-person-hand
3. world
4. material
5. responsive-pair
```

Current calibration was reset after GIR-SURFACE-30 was locked.

Current truth:

```text
human-mid r03 = superseded old-policy reference
human-mid r04 = ACTIVE / NEXT
approved slots = 0 / 5
```

The packet becomes `anchor-approved` only when all five current-policy references are approved and their canonical paths are registered.

---

# 18. Style drift taxonomy

```text
SID-PHOTO     surface realism too high / photographic rendering
SID-3D        synthetic high-end 3D render look
SID-POSTER    movie/game marketing poster grading
SID-FANTASY   fantasy barbarian/concept-art look
SID-CARTOON   excessive simplification/cartooning
SID-TEXTBOOK  educational diagram/cutaway look
SID-FOG       generic AI fog/bloom obscures information
SID-DETAIL    detail density inconsistent with GIR-30 or between layers/scenes
SID-LIGHT     style-level lighting mismatch
SID-COLOR     palette/grading drift
SID-COMPOSITE pasted-layer mismatch in finish/detail
SID-EDGE      reusable asset has unstable/contaminated extraction edge
SID-LENS      photographic lens-language drift
```

For GIR-30 calibration, `SID-PHOTO` and `SID-DETAIL` can apply even when anatomy is excellent.

---

# 19. Style approval checklist

- [ ] assigned surface realism is 25–35, centered near 30
- [ ] image reads immediately as illustration at normal viewing distance
- [ ] anatomy/contact/perspective are functionally believable
- [ ] face identity is carried by structure rather than microtexture
- [ ] skin uses large planes and limited representative creases
- [ ] hair is mass/silhouette-first
- [ ] nails/veins/body hair are not photo-macro cues
- [ ] stone/soil/garment detail uses grouped planes/roughness/folds
- [ ] reusable character/body/item silhouettes can be cleanly separated
- [ ] no photographic lens-language cue dominates
- [ ] actor/body/object/world use one GIR-30 density
- [ ] background supports action and does not become cinematic landscape art
- [ ] no poster/HDR grading
- [ ] no caveman stereotype coding
- [ ] no hyper-detailed uncertain historical garment claims
- [ ] L/TP/PP retain same treatment
- [ ] reference packet paths are registered only for current-policy approvals

# **No production scene raster becomes runtime-ready before STYLE-GIR-V1 is anchor-approved under GIR-SURFACE-30.**
