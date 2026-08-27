# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Visual Anchor Reference Lock**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Approved / Raster Media Adapter Integrated / Visual Continuity System Integrated / Approved Raster Assets 0 / Stage 08 BLOCKED**

최신 exact repository HEAD와 CI는 GitHub가 최종 진실 공급원이다.

---

# 1. 세션 시작 시 반드시 읽을 것

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
7. `docs/03_HUNT_STORY.md`
8. `docs/04_HUNT_PLAYFLOW.md`
9. `docs/06_TECH_BLUEPRINT.md`
10. `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
11. `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
12. `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
13. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
14. `handoff/STAGE07_5_VISUAL_CONTINUITY_INDEX.md`
15. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
16. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
17. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
18. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
19. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
20. `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`
21. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`

감사/근거 추적 시:

- `handoff/STAGE07_5_PREVISUAL_REMEDIATION_READINESS.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
- `handoff/STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`

handoff 문서는 Technical SSOT가 아니다.

---

# 2. Latest Human QA Truth

최근 Player replay에서:

- social/narrative causality는 이전보다 개선됨
- CSS previsual도 동작 구분은 개선됨
- 그러나 사람/손/도구/풍경을 CSS/SVG geometry로 계속 다듬는 방식에는 품질 한계가 있음
- portrait/tablet/mobile은 별도 composition family가 필요함
- 실제 raster 전환 시 `좋은 한 장`보다 캐릭터/배경/도구/스타일 continuity가 더 중요함

따라서:

# **Final Player-facing visual = raster-first Hybrid Embodied Composite + Anchor-conditioned Continuity**

DOM/CSS/SVG geometry는 previsual/debug/UI 보조로만 유지한다.

Human Gate는 계속 FAIL이다.

---

# 3. Visual Continuity System — Integrated

Art-production 진입점:

- `STAGE07_5_VISUAL_CONTINUITY_INDEX.md`

세부 계약:

- style → `STAGE07_5_STYLE_ANCHOR_BIBLE.md`
- characters/player body → `STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- world/geography/light/landmark → `STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
- handaxe/recurring props → `STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
- generation/review → `STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`

Machine-readable:

- `src/experience/production/stage075StyleAnchor.ts`
- `src/experience/production/stage075VisualContinuityRegistry.ts`
- `src/experience/production/stage075RasterManifest.ts`

Tests:

- `tests/integration/Stage075VisualContinuityRegistry.test.ts`
- `tests/integration/Stage075RasterMedia.test.tsx`

---

# 4. Approval dependency

Scene raster 자체가 `approved`여도 바로 runtime에 노출되지 않는다.

필수 조건:

```text
STYLE-GIR-V1 = anchor-approved
+
all required character/body/world/object/prop/light anchors = anchor-approved
+
approved master/reference paths registered
+
scene raster = approved
+
required L/TP/PP sources registered
↓
runtime render allowed
```

이 Gate는 코드에서도 강제된다.

---

# 5. STYLE-GIR-V1

목표:

# **Grounded Illustrative Realism**

- 현실적인 해부/접촉/원근
- 약간 일러스트적인 surface treatment
- hyper-photoreal skin 금지
- cinematic poster/AAA advertising look 금지
- fantasy barbarian/caveman caricature 금지
- people/body/tool/world가 같은 detail density를 공유

현재:

```text
STYLE-GIR-V1 = reference-pending
```

실제 style reference packet이 승인되기 전 scene raster는 runtime-ready가 될 수 없다.

---

# 6. Character identity anchors

```text
ARU-IDENTITY-V1     reference-pending
DAMU-IDENTITY-V1    reference-pending
NUA-IDENTITY-V1     reference-pending
PLAYER-HUNT-BODY-V1 reference-pending
```

Hero character는 한 portrait로 승인하지 않는다.

최소 identity packet:

- 3/4 양방향
- side
- full body
- seated/crouched
- head/shoulder
- walking/stop/attention motion
- hand reference
- hair silhouette
- garment silhouette

일관성은 face뿐 아니라 body/motion/garment/hand까지 포함한다.

---

# 7. World continuity anchors

```text
WORLD-CAMP-DAWN-A       reference-pending
WORLD-DEPARTURE-PATH-A  reference-pending
WORLD-GROUND-OBS-A      reference-pending
WORLD-ROCK-SHELTER-A    reference-pending
LM-SPLIT-ROCK-01        reference-pending
PROP-TEMP-SHELTER-A     reference-pending
```

핵심:

- 같은 Day 1 world geography
- camp/fire/Aru behind-left
- route right/right-center
- scene마다 새 배경을 독립 생성하지 않음
- L/TP/PP는 다른 세계가 아니라 같은 세계의 다른 camera framing
- SC05와 SC11은 같은 순간의 world-state/light를 공유

---

# 8. DAY1-HANDAXE-V1

현재:

```text
DAY1-HANDAXE-V1 = reference-pending
```

승인 packet:

- face-A
- face-B
- side/thickness
- grip-base
- working-end
- scale reference
- major flake-scar fingerprint
- Aru grip
- Player right-hand grip

SC02→SC11에서 같은 물체 identity를 유지한다.

---

# 9. Generation protocol

각 생성/편집 후보는 Generation Job Card를 가져야 한다.

필수 기록:

- target asset / scene / beat / composition family
- derivation mode
- parent asset
- 실제로 제공한 approved anchor reference files
- camera/body/contact/object/light contracts
- only-allowed changes
- must-not-change list
- historical confidence
- drift codes / severity

# **`same Aru as before` 같은 텍스트만으로 continuity를 맡기지 않는다.**

---

# 10. Responsive families

```text
L  = Landscape
TP = Tablet Portrait
PP = Phone Portrait
N  = Near-square fallback
```

- 16:9 단순 crop 금지
- dedicated portrait recompose 허용/권장
- identity/world/object/light는 동일
- framing만 달라야 함

---

# 11. Current Raster Adapter

개발 모드:

```text
http://localhost:5173/?raster=1
```

현재 approved raster asset count:

# **0**

이전 자유 생성 후보는 production brief 이탈로 모두 REJECT됐으며 repository에 넣지 않았다.

---

# 12. Immediate Anchor Lock Order

다음 제작 순서:

```text
0. STYLE-GIR-V1 reference packet
1. DAY1-HANDAXE-V1 master packet
2. PLAYER-HUNT-BODY-V1 hand/forearm packet
3. ARU-IDENTITY-V1 packet
4. DAMU-IDENTITY-V1 packet
5. NUA-IDENTITY-V1 packet
6. WORLD-CAMP-DAWN-A packet
7. fire/shelter supporting anchors
8. route/landmark/ground/rock-shelter anchors
```

SC02 production은 최소 0~3이 잠기고 camp/light anchors가 준비된 뒤 시작한다.

---

# 13. Current Gate

# **Visual Anchor Reference Lock**

현재:

```text
Scene Composition Design = PASS
Project-owner Scene Confirmation = PASS
Responsive Raster Contract = READY
Raster Media Adapter = INTEGRATED
Visual Continuity Registry = INTEGRATED
Style Anchor = REFERENCE PENDING
Character Anchors = REFERENCE PENDING
World Anchors = REFERENCE PENDING
DAY1-HANDAXE Anchor = REFERENCE PENDING
Approved Raster Assets = 0
Player Raster Replacement = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 행동:

1. STYLE-GIR-V1 reference packet 후보를 만든다.
2. 사실성 수준/손/사람/배경/material treatment가 같은지 검토한다.
3. style PASS 후 DAY1-HANDAXE master를 만든다.
4. Player hand/forearm과 Aru identity packet을 같은 style anchor에서 파생한다.
5. anchor packet은 각각 전체 packet side-by-side로 승인한다.
6. 승인 master path를 registry에 등록한다.
7. 그 뒤에만 SC02 L/TP/PP contact keyframe을 제작한다.

자동 PASS, 생성 완료, 한 장의 좋은 이미지로 Human PASS나 Anchor PASS를 선언하지 않는다.
