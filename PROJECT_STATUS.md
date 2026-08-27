# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Raster Integration Readiness**

장기 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

현재 정확한 상태:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Approved / Responsive Raster Contract Ready / Raster Media Adapter Integrated / Approved Raster Assets 0 / Stage 08 BLOCKED**

최신 exact main/PR/Actions는 GitHub가 최종 진실 공급원이다.

---

# 1. Human QA에서 확인된 핵심 P1

- R2UX-001 Embodied spatial — 팔/손이 HUD처럼 읽힘
- R2UX-002 Relationship presence — 인물이 기능 silhouette처럼 읽힘
- R2UX-003 Narrative causality — 관계/공동행동 인과 약함
- R2UX-004 Curriculum presentation — 학습 카드처럼 보임
- R2UX-005 Visual composition — production 치환 가능한 구도 부족
- R2UX-006 Speaker ambiguity — 인물 기억 방해
- R2UX-007 Functional-role narration — 기능이 정체성 대체
- R2UX-008 Action-scene legibility — 몸/장면만으로 동작 즉시 파악 어려움
- R2UX-009 Previsual under-specification — 구현 전 camera/body/tool/world 미잠금
- R2UX-010 Chronology coherence risk — 서로 다른 시기/유적의 구체 복원 혼합 위험
- R2UX-011 SSOT drift — 상위 문서가 실제 main보다 과거 상태를 기술
- R2UX-012 Spatial geometry — SC05 departure 공간기하 불명확
- R2UX-013 Curriculum timing — SC03 terminology 뒤 world action 재개 시점 미잠금
- R2UX-014 Held-item continuity — SC08~10 handaxe off-frame continuity 미정
- R2UX-015 Perspective legibility — SC11 rewind/teleport 오해 가능
- R2UX-016 Screen treatment — fixed bottom action lane HUD화 위험
- R2UX-017 Hard story seam — 왼쪽 copy overlay의 직사각형 끝선이 세로 구분선처럼 보임
- R2UX-018 Final visual medium — CSS/SVG형 사람·손·도구는 최종 몰입 품질에 구조적 한계
- R2UX-019 Portrait composition — tablet/phone 세로가 landscape 단순 축소/crop으로는 성립하지 않음
- R2UX-020 Raster candidate control — 생성 결과가 제작 브리프 대신 광범위한 게임 UI mockup으로 이탈할 수 있음

현재 확인된 P0는 없다.

# **P1 시각/몰입 문제가 승인된 raster production-like proof로 재검증되지 않았으므로 Human Gate는 계속 FAIL이다.**

---

# 2. Project-owner Feedback — Latest

최근 Player replay 판정:

- 이전보다 연출/인과는 개선됨
- 그러나 CSS/SVG placeholder만 계속 다듬는 방식은 한계가 명확함
- 실제 사람/손/도구/풍경은 raster illustrated asset으로 전환해야 함
- mobile/tablet portrait와 다양한 viewport를 처음부터 composition family로 설계해야 함

이에 따라:

# **Player-facing final visuals = raster-first Hybrid Embodied Composite**

DOM/SVG/CSS geometry는 previsual/debug/UI 보조 역할로 제한한다.

---

# 3. Scene Composition Contract

Project-owner 승인 통합본:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`

LOCK:

1. SC03 terminology while world resumes
2. SC05 diagonal departure → forward settle
3. SC08~10 same held handaxe off-frame continuity
4. SC11 same SC05 Stage A moment from Aru-side
5. fixed bottom action HUD 금지
6. SC10 default explicit animal spoor 제외
7. Nua narrow-screen crop tune

---

# 4. Responsive Raster Production Contract

실행 계약:

- `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
- `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`

composition family:

```text
L  = landscape
TP = tablet portrait
PP = phone portrait
N  = near-square fallback
```

핵심:

- 16:9 하나를 모든 화면에 crop하지 않는다.
- 의미가 깨지는 장면은 portrait 전용 재구성을 만든다.
- contact-heavy 장면은 Unified Contact Keyframe 우선.
- 최종 사람/손/도구/거처를 CSS 도형으로 유지하지 않는다.

---

# 5. Raster Media Adapter — Integrated

현재 `main`에는 승인된 raster를 안전하게 연결하기 위한 runtime adapter가 통합되어 있다.

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

정책:

- `pending` 또는 `rejected` asset은 `<picture>/<img>`로 렌더하지 않는다.
- `approved + sources 존재`일 때만 실제 raster를 렌더한다.
- source 우선순위는 PP → TP → landscape fallback이다.
- landscape/portrait variant가 준비되기 전 Player runtime visual을 강제로 교체하지 않는다.

---

# 6. Generated Candidate Review — Current Session

이번 세션에서 이미지 생성 후보를 시도했으나 모두 **REJECT** 처리했다.

실패 유형:

- isolated handaxe 요청이 전체 게임 장면/UI mockup으로 이탈
- SC02 clean keyframe 요청이 previsual/editor UI mockup으로 이탈
- 텍스트/UI가 baked-in되어 production asset 계약과 충돌
- 역사/인물/공간 continuity를 검증할 수 없는 자유 생성

따라서 해당 이미지는 repository에 넣지 않았다.

# **생성됐다는 이유만으로 asset을 채택하지 않는다.**

---

# 7. Current Raster Manifest

현재 manifest entry:

```text
DAY1-HANDAXE-V1                 pending
HUNT-SC02-HANDOFF-KEYFRAME-V1 pending
HUNT-SC01-CAMP-WORLD-V1       pending
```

Approved raster asset count:

# **0**

첫 승인 목표는 여전히:

1. DAY1-HANDAXE-V1
2. Aru/Damu/Nua identity anchors
3. SC02 Shared Contact L/TP/PP

이다.

---

# 8. Dev-only Previsual Harness

```text
http://localhost:5173/?previsual=1
```

지원:

- 16:9
- 16:10
- 4:3
- 3:4 tablet portrait
- 9:16 phone portrait

portrait에서 의미가 깨지는 결과는 TP/PP 전용 composition 필요 신호다.

---

# 9. Mandatory Viewport QA

최소:

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

각 화면에서:

- 행동이 설명문보다 먼저 읽히는가
- 손/도구/contact가 crop되지 않는가
- Player body가 HUD처럼 커지지 않는가
- copy overlay가 pane/seam을 만들지 않는가
- safe-area를 침범하지 않는가
- portrait 재구성 후에도 사건 의미가 같은가

를 본다.

---

# 10. Still Deferred

- exact season
- exact vegetation species
- exact temporary shelter construction/material/knots
- exact garment pattern/stitching
- exact skin tone
- exact hair morphology/style
- exact hominin species visual coding
- final cast faces
- Hunt Player exact age/sex
- final audio production

이는 evidence boundary다.

---

# 11. Current Gate

# **Controlled Raster Asset Acquisition / Approval**

현재:

```text
Scene Composition Design = PASS
Project-owner Scene Confirmation = PASS
Responsive Layout Contract = READY
Raster Asset Briefs = READY
Raster Media Adapter = INTEGRATED
Raster Approval Gate = INTEGRATED
Approved Raster Assets = 0
Player Raster Replacement = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 순서:

```text
controlled asset acquisition/generation
→ candidate rejection/approval review
→ DAY1-HANDAXE / identity anchor lock
→ SC02 L/TP/PP contact keyframe lock
→ manifest status approved + source registration
→ minimum coherent Stage07.5 raster integration
→ cross-device Human Visual QA
→ Human Gate PASS 여부
→ Stage 08
```

# **자동 PASS는 Human PASS가 아니며, 생성 성공도 visual approval이 아니다.**
