# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 01~07 Canonical Unification 통합 완료 / Automated PASS / Human QA 대기**

공식 기준선:

- `docs/00_CANONICAL_BASELINE.md`

시각 제작 계약:

- `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md` — 원칙/아트 프로덕션 계약
- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md` — Stage 08 직전 구체 실행 규격

핵심 교과 문법:

# **Experience → Name → Reuse → Connect**

도구 위계:

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

---

# 1. 새 세션 읽기 순서

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. Stage 01~07 해당 canonical 문서
7. `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
8. `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
9. 관련 코드/tests

Non-canonical 기록/전환 문서:

- `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`
- `docs/R2_STAGE01_DEEP_AUDIT_REPORT.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`

---

# 2. 최신 canonical / production 문서

- `docs/01_PROJECT_CORE.md` — **v9**
- `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md` — **v3**
- `docs/02_EXPERIENCE_STRUCTURE.md` — **v9**
- `docs/03_HUNT_STORY.md` — **v8**
- `docs/04_HUNT_PLAYFLOW.md` — **v8**
- `docs/05_ROLE_EXPERIENCE_MAP.md` — **v8**
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — **v6**
- `docs/06_TECH_BLUEPRINT.md` — **v8 / single tech SSOT**
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — **v7**
- `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md` — **v1 / visual production principles**
- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md` — **v1 / concrete production spec**

`docs/06A_CURRICULUM_RUNTIME_CONTRACT.md`는 Stage 06 v8에 흡수되어 삭제됐다.

07A/07B는 Technical SSOT가 아니다. 실제 runtime 타입/manifest/asset loading 구조를 구현할 때는 `docs/06_TECH_BLUEPRINT.md`의 정식 후속 버전에 흡수한다.

---

# 3. 공식 용어

## 도구

- `뗀석기` = 상위 개념
- `주먹도끼` = 대표적인 구체 예

## 거처

- `현재 임시 거처` = Stage 07 초기 중립적 표현
- `막집` = Camp에서 실제 생활/손질 뒤 명명
- `동굴 / 바위 그늘` = 자연 지형 생활 공간

---

# 4. Fact / Reconstruction

Fact:

- 뗀석기
- 주먹도끼의 대표성/다용도성
- 이동 생활
- 막집
- 동굴/바위 그늘 생활
- 불의 이용

Reconstruction:

- R/H1/H2
- 특정 아침 도구 전달
- 이 Day 1의 구체 거처 배치
- 특정 자연 거처 후보 발견
- 구체 대사/감정/선택 결과
- Hunt Player right-dominant 같은 production continuity attribute

Player에는 관리 metadata를 노출하지 않는다.
Teacher/Debug에서만 확인한다.

---

# 5. Stage 07 현재 Player 흐름

package:

```text
0.0.0-r2-stage07-curriculum-hardened
```

```text
사냥 관점
→ 새벽 불 + 현재 임시 거처
→ R에게 돌도구 받기
→ 뗀석기 상위 개념
→ 지금 손의 대표 예 = 주먹도끼
→ held-item continuity
→ H1/H2와 출발
→ 현재 거처가 멀어짐
→ crouch observation
→ 한동안 이동
→ 자연 거처 후보 발견
→ 장점/불확실성 평가
→ 동굴 / 바위 그늘 짧은 연결
→ 같은 날 다른 사람 관점 proof
```

Stage 07은 전체 Hunt가 아니다.

---

# 6. 시각 계획에서 현재 확정된 것

## Style

# **Grounded Illustrative Realism**

- 현실적인 신체/도구/공간
- 자연스러운 빛/재질
- 약한 회화적 질감
- hyper-photoreal uncanny, fantasy barbarian, cartoon, textbook diagram 금지

## Render / Generation Modes

```text
Mode A — Layered Reusable Composite
Mode B — Unified Contact Keyframe
Mode C — Locked-Keyframe Variation
```

핵심:

- R의 손 → 주먹도끼 → 내 손처럼 직접 접촉하는 장면은 통합 keyframe 먼저
- 같은 Scene Beat는 독립 생성보다 reference-conditioned variation / inpaint / outpaint 우선
- 지원 도구가 있으면 pose/depth/edge conditioning 우선
- prompt만 반복해 identity consistency를 해결하려 하지 않음

## Embodied Composite

```text
World Plate
+ Spatial / Occlusion
+ Actor
+ Embodied Body
+ Held / Contact Item
+ Environmental Light
+ Perceptual Treatment
+ Minimal Player UI
```

## Camera / Responsive

- logical master: **1600×900 / 16:9**
- mandatory QA: **4:3 / 16:10 / 16:9**
- normalized pivot / grip / contact anchor
- scene-specific crop focus

## Handaxe Visual Canon

Day 1 handaxe는 실물 한 점의 복제가 아니라 한국 구석기 morphology 기반의 fictional canonical object.

Primary references:

- 국립중앙박물관 `신수19143` — 파주, 17.8 × 10.2 × 6.4cm
- 국립중앙박물관 `신수18710` — 연천, 화강암, 16.5 × 12.0 × 7.4cm

## Hunt Player Body v1

- dominant hand: **right**
- production continuity 목적의 reconstructed attribute
- 성별/세부 외형/복식은 source review 전 과도하게 확정하지 않음

## Web / Performance soft target

- initial critical visual: `<img>/<picture>` 우선 검토
- responsive `srcset/sizes`
- first meaningful scene critical image payload 목표 **1.2MB 이하**, 경고선 **1.8MB**
- world plate 목표 **500KB 이하**
- alpha foreground 목표 **250KB 이하**

수치는 실제 Stage 08 측정으로 조정할 수 있다.

---

# 7. 자동검증 기준선

PR #15 canonical/runtime content:

- content head: `e40208b0d6e8fbf3a2949af2ef1fbaf6704b6849`
- CI `32926349166` — PASS
- exact PR-head CI `32926520525` — PASS
- Node 24.19.0
- npm 11.17.0
- **8 test files / 35 tests PASS**
- Stage 07 Skeleton integration tests: **10**
- production build PASS

정적 handoff 파일은 최신 main CI 번호를 다시 써서 CI 루프를 만들지 않는다. 최신 exact repository HEAD/CI는 GitHub 상태가 최종 기준이다.

07A/07B 및 이 handoff 수정은 문서/계획 보완이며 기존 Stage 07 runtime 자동검증 범위를 확장했다고 과장하지 않는다.

---

# 8. 개발 URL

- Player: `http://localhost:5173/`
- Teacher: `http://localhost:5173/?teacher=1`
- Debug: `http://localhost:5173/?debug=1`
- Legacy Hunt: `http://localhost:5173/?legacy=1`

---

# 9. 지금 공식 작업

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

프로토콜:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

반드시 확인:

- 역할 진입
- body/tool spatial relation
- R/H1/H2 존재감
- current shelter가 현대 집/텐트 아이콘처럼 보이지 않는지
- `뗀석기 → 주먹도끼` 실제 이해
- terminology cue 몰입 영향
- natural shelter 공간감/거리감
- 주거 형태 오개념
- Fact / Reconstruction 교사 이해
- reduced effects parity
- Perspective transition

07A/07B 관점 추가 관찰:

- 현재 placeholder body/contact 구도가 production 이미지로 치환 가능한가?
- R 손 → 도구 → 내 손의 접촉 관계가 현재 구성에서도 명료한가?
- 손/도구가 floating HUD처럼 보이는가?
- contact zone에 UI가 들어올 위험은 없는가?
- 4:3 / 16:10 / 16:9 crop에서 핵심 target을 살릴 수 있는 구도인가?
- Scene 내부 Beat가 slideshow 방식으로 굳어질 위험은 없는가?

Human Gate PASS 전 Stage 08 전체 Hunt 구현 금지.

---

# 10. Human Gate PASS 뒤에도 바로 Stage 08 production을 시작하지 않는다

다음 **Visual Production Readiness Gate**를 먼저 통과한다.

## A. Historical Reference Ready

- handaxe reference 승인
- shelter/cave/landscape reference scope
- provenance/license 기록

## B. Identity Ready

- Player Body anchor
- R/H1/H2 anchors
- Day1 handaxe anchor

## C. Composition Ready

- 16:9 master
- 4:3 / 16:10 crop proof
- handoff / crouch / cave rough contact-composition

## D. Scene Family Ready

- Camp
- Travel
- Rock Shelter
- Return

anchor rough 승인

## E. Technical Handoff Ready

- asset naming
- production manifest fields
- responsive serving plan
- image budget

그 뒤에만 Stage 06 v9 minimal runtime contract로 넘어간다.

---

# 11. Stage 08 진입 순서

```text
Stage 07 Human Gate PASS
→ Visual Production Readiness Gate
→ Historical / Visual Reference Pack 확정
→ Identity Anchor Sheets
→ Camera / Composition Profiles
→ Unified Contact Keyframe roughs
→ Scene Family anchors
→ Stage 06 v9 minimal visual runtime contract
→ Hunt minimum coherent production asset set
→ Browser Embodied Composite integration
→ Visual Continuity / Responsive / Performance QA
→ handaxe reuse / pursuit / threat / result / return 구현
```

Minimum coherent production asset set:

## World

- camp dawn
- shelter visible
- departure looking back
- travel distance
- crouch ground
- rock shelter far/near
- dusk return
- distant firelight
- reunion camp

## Body

- fire-rest
- receive-reach
- tool-inspect
- walking-carry
- crouch-observe
- cave-inspect
- fatigued-return
- firelight-relief

## Contact Keyframes

- R tool handoff
- ground observation/touch
- first actual handaxe living-use interaction

같은 R/H1/H2 / 같은 handaxe / 같은 Day 1 light progression을 유지한다.

---

# 12. Stage 01~07 시각 보완 확정

전체 재설계가 아니다.

- Stage 01A — camera/dominant-hand/contact/occlusion continuity
- Stage 01C — physical light first / treatment second
- Stage 02 — same-day shared visual anchors
- Stage 03 — same handaxe / distance / light / fatigue / wear checkpoints
- Stage 04 — camera/world/body/actor/item/contact/occlusion/light/crop production fields
- Stage 05/05A — role-specific body vocabulary + Visual Production Ready
- Stage 06 — Stage 08 시작 시 최소 visual runtime contract v9
- Stage 07 — production-replaceability / responsive crop / floating-hand risk Human QA

---

# 13. 아직 보류한 시각 결정

source review 전 고정하지 않는다.

- Hunt Player 정확한 나이/성별
- 세부 피부/머리 형태
- 구체 복식 재료/봉제
- 특정 계절/식생
- current shelter 특정 유적 1:1 형태
- 특정 동물 종의 final visual
- final audio/animation production 규모

---

# 14. Stage 08 이후 책임

아직 완료가 아님:

- 주먹도끼 실제 땅파기/두들기기/자르기·손질
- 주먹도끼 다용도성 실제 체감
- production-quality first-person body / cast / tool / environment integration
- visual continuity / contact / responsive composition QA
- performance budget 실측 및 조정
- Camp current shelter 생활/손질 뒤 `막집` 명명
- 불의 여러 기능 실제 행동
- 완성 Hunt 추적/위협/결과/귀환
- cave consequence
- Camp cave recontextualization
- Student Pilot

Legacy Hunt v0.1은 회귀/비교 기준으로 유지한다.
