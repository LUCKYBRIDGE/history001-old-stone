# Stage 07.5 — Responsive Visual Production Contract

Status: **APPROVED DESIGN INPUT / IMAGE PRODUCTION NOT STARTED**

Purpose: convert the approved Scene Composition Bible v2.1 into a production-ready raster asset plan that works on desktop landscape, tablet portrait, phone portrait, and compact landscape without reverting to SVG/DOM placeholder composition as the final visual language.

This is a Stage 07.5 execution contract. Technical runtime SSOT remains `docs/06_TECH_BLUEPRINT.md`; broad art policy remains `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md` and `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`.

---

## 1. Decision: placeholder DOM/SVG is not the final visual medium

The current silhouettes, CSS limbs, gradients, and DOM geometry are only previsual/debug instruments.

Final Player-facing scene visuals must not rely on:

- CSS capsule limbs as human anatomy,
- geometric silhouette people as final actors,
- CSS polygon handaxe as the final tool,
- CSS tent-like shelter shapes as final shelter art,
- debug gaze lines,
- wireframe labels,
- left/right split panels.

Allowed long-term uses of SVG/DOM geometry:

- developer overlays,
- safe-zone guides,
- hit areas,
- focus/interaction affordances,
- accessibility/debug visualization,
- non-diegetic UI icons.

### Production raster strategy

Use the smallest number of coherent raster assets that preserves physical continuity.

Preferred formats:

- opaque world plate: AVIF/WebP,
- transparent actor/body/item layer: WebP alpha,
- PNG only when alpha-edge quality or authoring workflow materially requires it,
- contact-heavy unified keyframe: WebP/AVIF or PNG source master → optimized runtime derivative.

`PNG-like final art` means raster illustrated assets, not that every runtime file must literally be PNG.

---

## 2. Composition families — no universal 16:9 crop

A single 1600×900 composition may remain the landscape master coordinate reference, but it is no longer sufficient as the only production composition.

Every critical scene must belong to at least these families.

### L — Landscape family

Primary targets:

- 16:9
- 16:10
- 4:3 landscape
- compact landscape phone

Typical logical master:

- 1600×900

Behavior:

- wide spatial storytelling,
- camp can remain peripheral while route stays forward,
- dialogue/copy occupies a soft bottom-left or bottom band,
- no hard vertical panel edge.

### TP — Tablet Portrait family

Primary targets:

- 3:4
- 5:8 / similar Android tablet portrait ratios
- iPad-class portrait

Typical logical master:

- 900×1200 or equivalent normalized 3:4 composition

Behavior:

- actors move inward rather than being cropped from a landscape frame,
- Player hands/body use the lower third without covering the main actor,
- copy becomes a bottom fade band,
- world depth uses vertical stacking: foreground body → mid actor/action → far environment.

### PP — Phone Portrait family

Primary targets:

- 9:16
- 9:19.5 / modern tall phones
- safe-area notches/home indicator

Typical logical master:

- 900×1600

Behavior:

- only one primary social/action relationship should dominate a frame,
- secondary actors may move higher/deeper rather than remain far left/right,
- critical hand/tool contact must stay in the center-safe vertical corridor,
- text never forces the world into a left/right two-pane layout,
- action affordance appears close to the associated copy and disappears on action start.

### N — Near-square fallback

For unusual embedded/classroom windows and resize states:

- 1:1 to 4:5

This is a graceful fallback, not a separate art batch by default. Use TP source art and focus anchors unless Human QA proves a separate composition is required.

---

## 3. Art direction rule: crop when safe, recompose when meaning changes

Do not create a separate image for every viewport by default.

### Crop-safe asset

One source may serve multiple families only when all of these remain true:

- main actor is not pushed outside the safe zone,
- hand/tool/contact is fully visible,
- spatial relation remains understandable,
- dialogue does not cover the action,
- body scale still feels first-person rather than oversized HUD.

### Recomposition-required asset

Create a dedicated portrait variant when cropping would change narrative meaning.

Mandatory dedicated portrait consideration:

- SC02 handaxe handoff,
- SC05 departure spatial proof,
- SC06→07 Damu stop/crouch,
- SC08→09 Nua attention/reveal,
- SC10 rock shelter inspection,
- SC11 same-moment Aru POV.

These are not decorative scenes; their composition carries the causal proof.

---

## 4. Raster assembly modes by Stage 07.5 scene

### SC01 — Living Camp

Mode A: layered composite.

Assets:

- camp world plate L + TP/PP crop or variant,
- fire integration layer if needed,
- Aru idle/near-fire layer,
- Damu preparation layer,
- Nua outward-attention layer,
- B1/B2 background life group,
- optional near-ground occluder.

Goal: the community exists before Player interaction.

### SC02 — Handaxe Handoff

Mode B: unified contact keyframe first.

Required keyframes:

1. Offer,
2. Shared Contact,
3. Release/ownership transfer.

Landscape and portrait may require separate unified compositions.

Do not separately generate Aru hand, handaxe, and Player hand and try to align them afterward as the primary method.

### SC03→04 — Tool Naming + World Resume

Hybrid.

- same held-handaxe identity from SC02,
- Player right-hand/body foreground layer,
- Damu movement layer,
- Nua scan layer,
- annotation remains runtime UI, never baked into the image.

### SC05 — Departure

Mode A/C.

Need a coherent camp-to-route family rather than a new unrelated landscape image.

- Stage A diagonal departure variant,
- forward-settle variant,
- same camp/fire/shelter identity,
- same actor clothing/body identities,
- same DAY1-HANDAXE-v1.

Portrait likely requires separate staging because `camp behind-left` and `route ahead` cannot be represented by simple horizontal cropping.

### SC06→07 — Damu Stop / Player Crouch

Mode C anchored variation, with contact/body composite where needed.

Frames must preserve:

- Damu stops first,
- Player eye height initially standing,
- Player later lowers,
- ground evidence appears only after the Player's action,
- Player left hand braces ground without pointing at the evidence.

### SC08→09 — Nua Attention / Reveal

Mode C.

- Nua head→shoulder→torso orientation change,
- Player camera pans after the social cue,
- rock shelter is revealed after the pan,
- no debug gaze ray in production.

Portrait needs an inward Nua placement and vertical depth staging.

### SC10 — Rock Shelter Inspection

Hybrid A/B.

- world plate / near-rock occluder,
- Player left rock-brace contact,
- same held handaxe re-enters from lower-right,
- no default explicit animal spoor,
- cave/rock-shelter uncertainty comes from depth and limited visibility.

### SC11 — Aru Same-Moment POV

Mode C locked to SC05 Stage A.

Must reuse:

- same world moment,
- same actor spacing family,
- same handaxe identity,
- same morning light,
- same camp state.

The viewpoint changes; the world moment does not.

---

## 5. UI/copy compositing rule — remove split-screen feel

The Player-facing world is one continuous visual field.

Forbidden:

- a 50/50 left copy panel + right world panel,
- an opaque vertical seam,
- fixed bottom footer spanning every scene,
- large terminology card cutting the scene in half,
- dialogue boxes that cover the physical contact point.

### Landscape copy treatment

Use a soft bottom and bottom-left fade with no rectangular end edge.

Copy max width should be bounded independently of the overlay background.

### Portrait copy treatment

Use a soft bottom vertical fade.

World action remains visible above the copy.

### Dialogue

Keep speaker dialogue near the speaker only when it does not cover body/action geometry.

On narrow portrait screens, dialogue may shift toward a top/side safe pocket rather than stay mechanically attached to landscape coordinates.

---

## 6. Responsive anchor manifest — required before image integration

Every production visual record must eventually resolve these fields conceptually:

```ts
interface ResponsiveVisualPlacement {
  compositionFamily: 'L' | 'TP' | 'PP' | 'N';
  sourceAssetId: string;
  focusAnchor: { x: number; y: number };
  bodyAnchor?: { x: number; y: number };
  toolAnchor?: { x: number; y: number };
  contactAnchor?: { x: number; y: number };
  dialogueSafeRegion?: { x: number; y: number; w: number; h: number };
  actionSafeRegion?: { x: number; y: number; w: number; h: number };
  cropPolicy: 'cover' | 'contain' | 'art-directed';
}
```

This interface is a production-planning contract, not yet the Stage 06 runtime type.

---

## 7. Mandatory viewport QA matrix

Every critical PV and every first production integration must be checked at minimum at:

### Desktop / laptop

- 1920×1080
- 1440×900
- 1366×768

### 4:3 / classroom / legacy

- 1024×768

### Tablet landscape

- 1180×820 class
- 1024×768 class

### Tablet portrait

- 820×1180 class
- 768×1024 class

### Phone portrait

- 390×844 class
- 393×852 class
- 360×800 class

### Phone landscape

- 844×390 class

QA questions:

1. Is the primary action understandable before reading copy?
2. Is the Player body proportion believable?
3. Does any hand/tool/contact disappear or become oversized?
4. Is the main actor identity still readable?
5. Does copy create a false panel or seam?
6. Are safe-area insets respected?
7. Does the same event still mean the same thing after portrait recomposition?

---

## 8. Production asset set — first coherent batch

Do not produce all Stage 08 assets.

The first real visual batch should cover only the Stage 07.5 Human-Gate proof.

### Environment anchors

- CAMP-DAY1-DAWN-L
- CAMP-DAY1-DAWN-P
- ROUTE-DAY1-DAWN-L
- ROUTE-DAY1-DAWN-P
- GROUND-OBS-DAY1-L
- GROUND-OBS-DAY1-P
- ROCK-SHELTER-DAY1-L
- ROCK-SHELTER-DAY1-P

`P` may initially serve both TP/PP when crop-safe; split into TP/PP only when QA proves necessary.

### Character anchors

- ARU anchor
- DAMU anchor
- NUA anchor
- B1/B2 low-detail background group

### Player/body anchors

- receive reach
- held inspect
- low carry
- standing stop
- crouch ground brace
- rock brace
- Aru-side POV body state if body is visible

### Tool anchor

- DAY1-HANDAXE-v1 with face-A/face-B/grip-base/working-end documentation.

### Unified contact keyframes

At minimum:

- SC02 Shared Contact L
- SC02 Shared Contact P
- SC10 rock-brace/contact L if separate layers fail physical QA
- SC10 rock-brace/contact P if separate layers fail physical QA

---

## 9. Acceptance gate before Player runtime integration

Raster asset integration may begin only when the candidate set proves:

- no split-screen composition,
- no SVG-human dependence in Player-facing visual,
- handaxe identity continuity,
- Aru/Damu/Nua identity continuity,
- landscape + tablet portrait + phone portrait composition viability,
- contact geometry,
- no modern/historical misconception regression,
- mobile copy/action safe areas,
- asset payload within soft performance budget after optimization.

Passing this gate does **not** mean Human Gate PASS. It only means the visual batch is coherent enough to integrate and browser-test.

---

## 10. Current next action

Current order:

```text
responsive composition contract
→ remove current hard story seam
→ portrait layout proof
→ production asset briefs per PV/scene
→ explicit raster asset production task
→ raster candidate review
→ minimum coherent runtime integration
→ cross-device Human Visual QA
→ Human Gate decision
```

Image production remains a separate explicit task. This document does not itself generate images.
