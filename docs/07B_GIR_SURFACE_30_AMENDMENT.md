# Stage 07B Amendment — GIR-SURFACE-30

Status: **CURRENT STYLE INTERPRETATION / STAGE 07.5 MANDATORY**

Applies to:

- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
- all Stage 07.5 visual anchor/reference/scene production

Technical runtime SSOT remains:

- `docs/06_TECH_BLUEPRINT.md`

This amendment does not replace the historical-reference, camera, responsive, manifest, performance, or production-mode content in 07B. It **replaces/narrows the visual realism interpretation** where 07B uses broad terms such as `세미리얼`, `realistic`, or `Grounded Illustrative Realism` without a numerical surface boundary.

---

# 1. Superseded interpretation

The old qualitative phrase:

```text
사실 기반의 세미리얼 2D 일러스트
```

must no longer be interpreted as permission to target semireal, game-cinematic, or near-photographic surface detail.

For Stage 07.5 and later production that inherits this visual system, the controlling interpretation is:

# **Grounded Illustrative Realism + GIR-SURFACE-30**

---

# 2. Exact surface target

```text
surface/rendering realism target = 30 / 100
acceptance band = 25–35
```

Project scale:

```text
0    very simple graphic/cartoon
15   strongly simplified animation-like treatment
30   grounded structural illustration  ← TARGET
45   semireal illustration
60   realistic illustration
80   game/cinematic realism
100  photograph
```

`30` is not anatomy realism.

---

# 3. Physical plausibility remains strong

GIR-SURFACE-30 does not reduce requirements for:

- finger count / joint sequence,
- wrist/ankle/limb articulation,
- body mechanics,
- weight and center of mass,
- reach and contact pressure,
- perspective,
- object depth/occlusion,
- world-space lighting,
- exact canonical body ratios after approval,
- recurring object morphology,
- world geography/landmarks.

Core formula:

```text
functional believable anatomy / weight / perspective / contact
+
GIR-30 simplified large planes / grouped texture / clean silhouette
-
photographic micro-detail / macro material texture / lens language
```

---

# 4. Surface simplification requirements

## Human skin

Prefer:

- broad color/value planes,
- a few representative creases,
- limited dirt/marks.

Suppress:

- pore fields,
- fine skin grain,
- dense veins,
- individual body hair,
- beauty-photo shine,
- photographic blemish accumulation.

## Face

Identity comes from:

- head shape,
- eye/nose/mouth placement,
- jaw/cheek structure,
- large shadow/light planes.

Not from pore, eyelash, or micro-wrinkle realism.

## Hair

Use:

- silhouette,
- grouped masses,
- a few grouped locks.

Do not use a photographic individual-strand field as the defining treatment.

## Hands / feet

Preserve functional anatomy and exact body-family scale.

Simplify:

- veins,
- pores,
- body hair,
- cuticles,
- nail reflections,
- fine crease networks.

## Garment

Use:

- silhouette,
- weight/drape,
- major fold groups,
- broad material zones.

Avoid fiber/stitch/fray macro detail.

## Stone / soil

Use:

- major planes,
- grouped roughness,
- representative marks.

Avoid exhaustive mineral grains, cracks, lichen and product-photo texture density.

## World

Use:

- shape/value groups,
- overlap,
- perspective,
- readable terrain and landmarks.

Avoid leaf-by-leaf / pebble-by-pebble photo density.

---

# 5. Lens / cinematic language

The following are not default production style cues:

- photographic shallow depth of field,
- bokeh,
- lens flare,
- chromatic aberration,
- sensor/film-noise simulation,
- glamour rim light,
- HDR/key-art grading,
- cinematic vista staging that dominates the embodied action.

Depth should primarily come from:

```text
scale
+ overlap / occlusion
+ value
+ perspective
+ controlled atmospheric depth
```

---

# 6. Prompt / generation wording

Production instructions should normally avoid leading with:

```text
photorealistic
ultra realistic
highly detailed
8K
cinematic
movie still
epic
```

because these phrases repeatedly pushed candidate generation above the intended GIR-30 surface band.

Production instructions should instead prioritize:

```text
structure / identity / contact
→ GIR-SURFACE-30
→ broad planes / grouped texture
→ clean silhouette
→ only the intended state/camera change
```

---

# 7. Close-up rule

A close-up enlarges **the same approved visual language**.

Allowed:

- clearer joint shape,
- clearer pressure/contact,
- clearer large material planes,
- a few representative creases/marks.

Not allowed merely because the camera is closer:

- new pore field,
- new vein/body-hair field,
- nail/cuticle macro detail,
- individual hair field,
- micro-crack/mineral field.

Portrait and close-up must not silently increase realism from 30 toward 60–100.

---

# 8. Identity / canonical proportions remain exact

Surface simplification exists partly to make continuity easier, not looser.

For one approved person/Player body:

```text
same face structure
same hair silhouette
same canonical head/body ratio
same limb ratios
same body mass family
same garment silhouette/material zones
```

remain fixed.

A canonical 7.2-head body remains the same underlying 7.2-head body across views/poses. Perspective and foreshortening may change apparent screen-space ratios only.

---

# 9. Current Stage 07.5 consequence

The previous `STYLE-GIR-V1 / human-mid r03` was approved before the numerical surface target was fixed.

Under GIR-SURFACE-30:

```text
r03 = SUPERSEDED old-policy approval
current STYLE approved slots = 0 / 5
human-mid r04 = ACTIVE / NEXT
first-person-hand r02 = BLOCKED UPSTREAM
```

The former r03 binary is not a current approved style parent.

---

# 10. Current controlling documents

For Stage 07.5 visual style interpretation, read together:

1. `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
2. `docs/07B_GIR_SURFACE_30_AMENDMENT.md`
3. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
4. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
5. `src/experience/production/stage075StyleAnchor.ts`
6. `src/experience/production/stage075VisualProductionPolicy.ts`

If old qualitative realism wording conflicts with this numerical boundary, **GIR-SURFACE-30 controls current Stage 07.5 art production**.
