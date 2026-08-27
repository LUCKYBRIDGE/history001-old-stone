# Stage 07.5 — Style Anchor Bible

Status: **STYLE-GIR-V1 SPEC LOCKED / REFERENCE SHEET PENDING**

Anchor ID:

```text
STYLE-GIR-V1
```

Purpose: keep every Stage 07.5 raster inside the same **Grounded Illustrative Realism** visual language so character/world/object continuity is not broken by realism-level drift.

Depends on:

- `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
- `src/experience/production/stage075StyleAnchor.ts`

---

# 1. Target position on the realism spectrum

Official target:

```text
cartoon ────── illustrative realism ──●──── photoreal
                                     ↑
                              STYLE-GIR-V1
```

The image should feel physically believable, but not like a photograph, movie still, or AAA marketing screenshot.

## Required qualities

- realistic anatomy
- believable weight/contact
- coherent perspective
- natural light
- readable material differences
- restrained surface texture
- slight painterly/illustrative simplification
- child-appropriate visual clarity

## Explicitly not the target

- documentary photo
- hyper-real 3D render
- cinematic poster
- fantasy concept-art hero shot
- children's cartoon
- museum textbook cutaway

---

# 2. Why photorealism is intentionally limited

High photorealism creates three problems for this project:

1. historical uncertainty looks falsely certain
2. face/hand/generation inconsistency becomes more obvious
3. isolated generated layers look pasted together when detail density differs

Therefore realism is used for **physical logic**, not for photographic surface imitation.

---

# 3. Skin rendering

Target:

- natural broad form
- simple pore suggestion at most
- soft microtexture
- dirt/dust can be visible but restrained
- believable hand creases at action scale

Avoid:

- visible pores across whole face
- beauty-photo skin
- wet glossy cinematic skin
- extreme subsurface-scattering look
- 8K portrait texture emphasis

## Review question

> 피부가 실제 사람처럼 납득되지만, 사진 확대를 보는 느낌은 아닌가?

---

# 4. Face rendering

Target:

- realistic proportions
- natural asymmetry
- readable gaze and expression
- softened micro-detail

Avoid:

- fashion portrait lighting
- beauty retouching
- ultra-sharp eyelashes/pores
- exaggerated primitive facial coding
- random AI attractiveness drift between scenes

Face identity must come from structure, not photo-level detail.

---

# 5. Hair rendering

Target:

- mass and silhouette first
- a few strand groups for texture
- movement readable at medium distance

Avoid:

- individually rendered every hair strand
- glossy shampoo-ad highlight
- modern styled hair appearance unless justified as low-specificity natural arrangement

Hair silhouette is an identity anchor, not a decorative texture field.

---

# 6. Garment/material rendering

Target:

- broad folds
- weight and drape
- rough natural-material impression
- restrained edge fraying where useful

Avoid:

- fantasy fur armor
- glossy leather costume
- hyper-detailed stitching presented as archaeological fact
- modern tailoring grammar

Material should read clearly without pretending we know exact garment construction.

---

# 7. Hand rendering

Hands are high-priority because they carry first-person embodiment.

Target:

- anatomically correct finger count/proportion
- believable pressure/contact
- readable knuckles and palm planes
- moderate texture

Avoid:

- photo-real hand against painterly world
- oversized knuckle detail
- glossy skin
- extra/merged fingers
- floating grip

Player and NPC hands must share the same illustration/detail level.

---

# 8. Stone / handaxe rendering

Target:

- clear flake-scar structure
- rough stone surface
- believable thickness
- moderate edge sharpness
- material readable at gameplay distance

Avoid:

- knife-like polished edge
- jewelry/gloss reflection
- macro product-photo rendering
- gray blob with no flake structure

The handaxe must look tactile without becoming a product showcase.

---

# 9. World rendering

Target:

- depth through value/occlusion/perspective
- enough environmental texture to feel lived-in
- terrain readable for movement
- horizon and landmark silhouettes legible

Avoid:

- ultra-detailed foliage noise everywhere
- fantasy matte-painting atmosphere
- giant scenic vistas that overpower people/action
- generic AI mist hiding geography

The world exists to support embodied history, not to be a wallpaper painting.

---

# 10. Lighting

Target:

- one coherent world-space light direction
- dawn ambience
- fire creates local warm contribution
- actor/body/object light belongs to the same environment

Avoid:

- rim light added only to make a character look cool
- HDR highlight clipping
- orange/teal blockbuster grade
- every actor independently lit
- portrait version with different sun direction

---

# 11. Contrast and dynamic range

Target:

- readable in ordinary classroom/display environments
- shadows contain enough information to understand action
- highlights remain controlled

Avoid:

- crushed cinematic blacks
- blinding bloom
- dramatic vignette baked into raster
- action-critical hands disappearing in shadow

Runtime screen treatment may add subtle emphasis; base raster should remain information-readable.

---

# 12. Color policy

Target:

- restrained natural earth range
- cool dawn ambient + warm local fire contrast
- skin/garment/rock remain distinguishable without neon separation

Avoid:

- saturation used to label characters
- modern game rarity colors
- fantasy teal/orange palette
- scene-by-scene palette reset

---

# 13. Detail density hierarchy

Detail should follow perceptual importance.

Suggested order:

```text
contact/action area > hero actor > Player body/tool > nearby world > distant background
```

Do not render every part of the frame at the same micro-detail density.

This helps both consistency and mobile readability.

---

# 14. L / TP / PP style equivalence

Portrait variants must not become more photographic simply because the face/hand is larger in frame.

Maintain the same:

- brush/texture character
- skin detail level
- contrast
- color grade
- material simplification
- edge treatment

Side-by-side review:

```text
L | TP | PP
```

should look like one art team, one renderer, one world.

---

# 15. Style Anchor Reference Packet

`STYLE-GIR-V1` becomes `anchor-approved` only after a small reference packet is approved.

Minimum packet should include:

1. one human medium shot
2. one first-person hand/tool close action
3. one camp/environment frame
4. one rock/ground material frame
5. one landscape/portrait paired example

The packet should prove one consistent treatment across:

- skin
- hair
- garment
- stone
- fire
- terrain
- atmospheric depth

Reference frames may be purpose-made style tests; they do not need to be final scenes.

---

# 16. Style drift taxonomy

```text
SID-PHOTO     too photographic / skin-camera realism
SID-3D        synthetic high-end 3D render look
SID-POSTER    movie/game marketing poster grading
SID-FANTASY   fantasy barbarian/concept-art look
SID-CARTOON   excessive simplification/cartooning
SID-TEXTBOOK  educational diagram/cutaway look
SID-FOG       generic AI fog/bloom obscures information
SID-DETAIL    inconsistent detail density between layers/scenes
SID-LIGHT     style-level lighting mismatch
SID-COLOR     palette/grading drift
SID-COMPOSITE pasted-layer mismatch in finish/detail
```

D2/D3 style drift blocks scene approval.

---

# 17. Style approval checklist

- [ ] people are physically believable but not photographic portraits
- [ ] hands match character/world illustration level
- [ ] stone texture is readable but not product photography
- [ ] background supports action and does not become fantasy matte art
- [ ] dawn/fire lighting is natural and restrained
- [ ] no cinematic poster grading
- [ ] no caveman stereotype coding
- [ ] no hyper-detailed uncertain historical garment claims
- [ ] L/TP/PP retain same treatment
- [ ] reference packet paths are registered

# **No production scene raster becomes runtime-ready before STYLE-GIR-V1 is anchor-approved.**
