# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Controlled Raster Asset Acquisition**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Approved / Responsive Raster Contract Ready / Raster Media Adapter Integrated / Approved Raster Assets 0**

Stage 08은 BLOCKED다.

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
14. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
15. `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`

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
- 그러나 사람/손/도구/풍경을 CSS/SVG형 geometry로 계속 다듬는 방식에는 명확한 품질 한계가 있음
- desktop landscape 중심 좌표만으로는 tablet/phone portrait가 성립하지 않음

따라서:

# **Final Player-facing visual = raster-first Hybrid Embodied Composite**

DOM/CSS/SVG geometry는 previsual/debug/UI 보조로만 유지한다.

Human Gate는 계속 FAIL이다.

---

# 3. Responsive Composition Families

```text
L  = Landscape
TP = Tablet Portrait
PP = Phone Portrait
N  = Near-square fallback
```

- 16:9 하나를 모든 화면에 단순 crop하지 않는다.
- narrative meaning이 깨지면 portrait 전용 art-directed composition을 만든다.
- SC02/SC05/SC06→07/SC08→09/SC10/SC11은 dedicated portrait variant를 우선 검토한다.

---

# 4. Dev-only Previsual Harness

```text
http://localhost:5173/?previsual=1
```

지원 ratio:

```text
16:9
16:10
4:3
3:4   = TP review
9:16  = PP review
```

portrait 실패는 dedicated portrait composition 필요 신호다.

---

# 5. Raster Media Adapter — Integrated

관련 코드:

- `src/experience/production/stage075RasterManifest.ts`
- `src/experience/production/Stage075RasterMedia.tsx`
- `src/experience/production/Stage075RasterIntegrationPreview.tsx`
- `src/styles/stage075RasterMedia.css`
- `tests/integration/Stage075RasterMedia.test.tsx`

개발 모드:

```text
http://localhost:5173/?raster=1
```

규칙:

- pending/rejected asset은 실제 `<picture>/<img>`로 렌더하지 않는다.
- approved asset + sources가 있을 때만 렌더한다.
- phone portrait(PP) → tablet portrait(TP) → landscape fallback 순으로 source를 선택한다.
- 미승인 생성물을 Player에 임시로라도 연결하지 않는다.

---

# 6. Image Generation Attempt — REJECTED

이번 세션의 생성 후보는 모두 repository 적용에서 제외했다.

실패:

- isolated handaxe 요청이 전체 게임 장면/UI mockup으로 이탈
- clean SC02 contact keyframe 요청이 editor/previsual UI 화면으로 이탈
- text/UI baked-in
- history/identity/contact continuity 검증 불가

따라서 현재 Approved Raster Asset은 **0개**다.

생성 결과는 품질/계약을 통과해야만 asset이 된다.

---

# 7. Current Raster Manifest

```text
DAY1-HANDAXE-V1                 pending
HUNT-SC02-HANDOFF-KEYFRAME-V1 pending
HUNT-SC01-CAMP-WORLD-V1       pending
```

첫 승인 순서:

1. DAY1-HANDAXE-V1
2. Aru/Damu/Nua identity anchors
3. PV-02 Handoff L/TP/PP
4. PV-01 Living Camp L/TP/PP
5. 나머지 critical PV

---

# 8. Raster Production Strategy

주 계약:

- `STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
- `STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`

형식:

- opaque world plate → AVIF/WebP
- transparent actor/body/item → WebP alpha
- PNG → source master 또는 alpha edge 필요 시
- contact-heavy scene → Unified Contact Keyframe

---

# 9. Mandatory Cross-device QA

```text
1920×1080
1440×900
1366×768
1024×768
1180×820
820×1180
768×1024
390×844
393×852
360×800
844×390
```

모든 critical scene에서:

- action-before-copy readability
- body proportion
- hand/tool/contact crop
- cast identity
- safe-area
- portrait narrative equivalence

를 확인한다.

---

# 10. Historical Boundary

# **Korean Paleolithic Educational Composite / Element-level Provenance**

- [H] Historical anchor
- [C] Comparative reference
- [R] Reconstruction choice
- [D] Deferred / non-diagnostic

Chronology Coherence Gate 유지.

여전히 보류:

- exact season/plants
- exact shelter construction/material/knots
- exact garment pattern/stitching
- exact skin/hair/species morphology
- final cast face
- Hunt Player exact age/sex
- final audio

---

# 11. Current Gate

# **Controlled Raster Asset Acquisition / Approval**

현재:

```text
Scene Composition Design = PASS
Project-owner Scene Confirmation = PASS
Responsive Raster Contract = READY
Raster Production Briefs = READY
Raster Media Adapter = INTEGRATED
Raster Approval Gate = INTEGRATED
Approved Raster Assets = 0
Player Raster Replacement = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 행동:

1. controlled asset generation/acquisition을 수행한다.
2. 후보마다 history/identity/contact/crop review를 한다.
3. DAY1-HANDAXE-V1과 cast anchors부터 승인한다.
4. SC02 L/TP/PP unified keyframe을 승인한다.
5. 승인된 source만 manifest에 등록한다.
6. minimum coherent Stage07.5 set을 Player runtime에 통합한다.
7. cross-device Human Visual QA를 다시 한다.

자동 PASS, 생성 완료, adapter 통합만으로 Human PASS를 선언하지 않는다.
