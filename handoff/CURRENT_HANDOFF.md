# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Responsive Raster Production Readiness**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Approved / Responsive Proof Updated / Raster Production Contract Ready / Raster Assets NOT YET**

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

최근 Player screenshots/replay에서:

- social/narrative causality는 이전보다 개선됨
- CSS previsual도 이전보다 동작 구분은 개선됨
- 그러나 사람/손/도구/풍경을 CSS/SVG형 geometry로 계속 다듬는 방식에는 명확한 품질 한계가 있음
- 왼쪽 story overlay가 직사각형으로 끝나 세로 구분선/2-pane처럼 보였음
- desktop landscape 중심 좌표만으로는 tablet/phone portrait가 성립하지 않음

따라서:

# **Final Player-facing visual은 raster-first Hybrid Embodied Composite로 전환한다.**

DOM/CSS/SVG geometry는 previsual/debug/UI 보조로만 유지한다.

Human Gate는 계속 FAIL이다.

---

# 3. Current Player Proof Layout Fix

새 responsive composition layer가 다음을 보정한다.

- story overlay width를 full frame으로 확장
- 왼쪽 copy 영역 끝의 hard vertical seam 제거
- landscape에서는 soft bottom/bottom-left fade
- portrait에서는 soft bottom vertical fade
- action UI는 copy와 함께 scene-local 유지
- persistent footer 없음
- phone safe-area bottom/left/right 고려

이것은 final art가 아니라 raster integration 전에 layout 자체가 잘못되지 않는지 보는 proof다.

---

# 4. Responsive Composition Families

```text
L  = Landscape
TP = Tablet Portrait
PP = Phone Portrait
N  = Near-square fallback
```

핵심:

- 16:9 하나를 모든 화면에 단순 crop하지 않는다.
- narrative meaning이 깨지면 portrait 전용 art-directed composition을 만든다.
- SC02/SC05/SC06→07/SC08→09/SC10/SC11은 portrait dedicated variant를 우선 검토한다.

---

# 5. Dev-only Previsual Harness

개발 모드:

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

portrait mode에서 normalized landscape 요소가 부딪히거나 crop되는 문제를 CSS로 자동 숨기지 않는다.
그 실패는 전용 portrait composition 필요 신호다.

관련 코드:

- `src/experience/previsual/stage075PrevisualSpec.ts`
- `src/experience/previsual/Stage075PrevisualHarness.tsx`
- `src/styles/stage075PrevisualHarness.css`
- `src/styles/stage075PrevisualPortrait.css`
- `tests/integration/Stage075PrevisualHarness.test.tsx`

---

# 6. Raster Production Strategy

주 계약:

- `STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
- `STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`

형식 원칙:

- opaque world plate → AVIF/WebP
- transparent actor/body/item → WebP alpha
- PNG → source master 또는 alpha edge 필요 시
- contact-heavy scene → Unified Contact Keyframe

즉 “PNG 같은 실제 그림을 쓴다”는 방향은 맞지만, 모든 파일을 lossless PNG로 runtime에 넣는 것은 아니다.

---

# 7. Critical Raster Batch

Stage 08 전체가 아니라 Stage 07.5 Human-Gate proof만 제작한다.

순서:

1. DAY1-HANDAXE-V1
2. Aru/Damu/Nua anchors
3. PV-02 Handoff L/P
4. PV-01 Living Camp L/P
5. PV-05 Stop/Crouch L/P
6. PV-06 Nua Attention/Reveal L/P
7. PV-04 Departure L/P
8. PV-07 Rock Shelter L/P
9. PV-08 Same-Moment Aru POV L/P
10. PV-03 supporting variants

실제 이미지 생성/제작은 아직 시작하지 않았다.

---

# 8. Mandatory Cross-device QA

최소 확인:

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
- copy seam/pane absence
- safe-area
- portrait narrative equivalence

를 확인한다.

---

# 9. Historical Boundary

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

# 10. Current Gate

# **Responsive Previsual Recheck / Raster Asset Production Readiness**

현재:

```text
Scene Composition Design = PASS
Project-owner Scene Confirmation = PASS
Responsive Proof Layout = UPDATED
Landscape/Portrait Previsual Modes = READY
Responsive Raster Contract = READY
Raster Production Briefs = READY
Raster Assets = NOT YET
Previsual Approval = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 행동:

1. latest responsive proof를 desktop + portrait에서 재확인한다.
2. hard vertical story seam이 사라졌는지 확인한다.
3. `?previsual=1`에서 3:4 / 9:16을 보며 dedicated portrait composition이 필요한 PV를 확인한다.
4. brief에 수정이 필요하면 image production 전에 수정한다.
5. 실제 raster image 제작은 별도 explicit task로 시작한다.
6. candidate review 후 minimum coherent set만 runtime에 통합한다.
7. cross-device Human Visual QA를 다시 한다.

자동 PASS나 문서 완료만으로 Human PASS를 선언하지 않는다.
