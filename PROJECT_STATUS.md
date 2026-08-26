# PROJECT_STATUS.md

## Current phase

# **R2 Stage 01~07 Canonical Unification 통합 완료 / Stage 07 Automated PASS / Human QA 대기**

현재 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

기준 문서:

- `docs/00_CANONICAL_BASELINE.md`

시각 제작 계약:

- `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md` — 원칙/아트 프로덕션 계약
- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md` — Stage 08 직전 구체 실행 규격

교과 연결 문법:

# **Experience → Name → Reuse → Connect**

---

# 현재 판정

- Canonical baseline/index: **PASS**
- Stage 01 Project Core: **PASS / v9**
- Stage 01E Curriculum/Textbook Anchors: **PASS / v3**
- Stage 02 Experience Structure: **PASS / v9**
- Stage 03 Hunt Story: **PASS / v8**
- Stage 04 Hunt Playflow: **PASS / v8**
- Stage 05 Role Experience Map: **PASS / v8**
- Stage 05A Design Validation: **PASS / v6**
- Stage 06 Technical Blueprint: **PASS / v8 / SINGLE TECH SSOT**
- Stage 06A supplement: **REMOVED / absorbed into Stage 06 v8**
- Immersion Narrative Bible: **PASS / v7**
- First-Person Visual Asset Bible: **PLANNING CONTRACT ADDED**
- First-Person Visual Production Spec: **HARDENED / production not started**
- Legacy Hunt transition brief: **NON-CANONICAL / refreshed**
- Audit reports: **NON-CANONICAL historical records**
- Stage 07 Skeleton: **IMPLEMENTATION COMPLETE**
- Stage 07 automated verification: **PASS**
- Stage 07 human QA: **PENDING**
- Stage 08 Hunt Embodied Vertical Slice: **BLOCKED until Human Gate PASS + Visual Production Readiness**

---

# 공식 용어 통일

## 도구

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

금지:

- `뗀석기 = 주먹도끼`
- 관계 설명 없는 `뗀석기 · 주먹도끼` 병렬 표현
- 주먹도끼를 사냥 전용 무기로 축소

## 거처

- **현재 임시 거처** — Stage 07 초기 중립적 player-facing 표현
- **막집** — Camp에서 실제 생활/손질 뒤 명명할 핵심 교과 용어
- **동굴 / 바위 그늘** — 자연 지형을 이용한 생활 공간

막집과 동굴/바위 그늘을 경쟁 정답으로 만들지 않는다.

---

# Fact / Reconstruction 통일

## Historical / Curriculum Fact

- 뗀석기 사용
- 주먹도끼의 대표성/다용도성
- 이동 생활
- 막집
- 동굴/바위 그늘 생활
- 불의 이용

## Reconstructed Event

- R/H1/H2라는 구체 인물
- 특정 아침의 도구 전달
- 이 Day 1의 구체 거처 배치
- Hunt 중 특정 자연 거처 후보 발견
- 구체 대사·감정·선택 결과
- Hunt Player의 dominant hand 같은 production continuity attribute

Player에는 reconstruction 관리 metadata를 노출하지 않는다.
Teacher/Debug에서 확인한다.

---

# Stage 07 현재 Browser proof

package:

```text
0.0.0-r2-stage07-curriculum-hardened
```

Player 흐름:

```text
사냥 관점
→ 새벽 불 + 현재 임시 거처
→ R의 돌도구 전달
→ 뗀석기 상위 개념 명명
→ 지금 손의 대표적인 예 = 주먹도끼
→ held-item continuity
→ H1/H2와 출발
→ 불/사람/current shelter가 멀어짐
→ crouch observation
→ 한동안 이동
→ 동굴/바위 그늘 후보 발견
→ 장점/불확실성 평가
→ 짧은 동굴/바위 그늘 연결
→ 다른 사람 관점 proof
```

current shelter placeholder는 단순 house-like pentagon 대신 **비대칭 덮개/지지대형 임시 구조물 proof**로 바뀌었다.

Teacher/Debug의 reconstruction note는 다음 범위를 일관되게 구분한다.

- 구체 공동체 인물/거처 배치
- 특정 아침 도구 전달
- 특정 자연 거처 후보 발견

---

# First-Person Visual / Image Production 현재 확정안

`07A`가 시각 제작 원칙을 소유하고, `07B`가 Stage 08 직전 실행 규격을 구체화한다.

## 확정 Style

# **Grounded Illustrative Realism**

- 현실적인 신체/도구/공간 비율
- 자연스러운 재질과 광원
- 약한 회화적 질감 허용
- hyper-photoreal uncanny / fantasy barbarian / cartoon / textbook diagram 느낌 금지

## 확정 Render Strategy

```text
Mode A: Layered Reusable Composite
Mode B: Unified Contact Keyframe
Mode C: Locked-Keyframe Variation
```

핵심 contact 장면은 손/NPC/도구를 따로 생성해 억지로 합치지 않고 **통합 contact keyframe을 먼저 확정**한다.

같은 Scene의 다음 Beat는 독립 text-to-image 반복보다:

- approved reference anchor
- reference-conditioned variation
- pose/depth control
- inpaint/outpaint

을 우선한다.

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

- logical master composition: **1600 × 900 / 16:9**
- mandatory QA: **4:3 / 16:10 / 16:9**
- normalized body/grip/contact anchors
- scene-specific crop/focus position
- contact zone를 UI가 가리지 않음

## Handaxe morphology reference

Day 1 handaxe는 한국 구석기 실물 자료에 근거한 **fictional canonical object**다.

우선 reference:

- 국립중앙박물관 `신수19143` — 파주, 17.8 × 10.2 × 6.4cm
- 국립중앙박물관 `신수18710` — 연천, 화강암, 16.5 × 12.0 × 7.4cm

실물 한 점을 이야기 속 실제 도구로 주장하지 않는다.

## Hunt Player production continuity

- Stage 08 Hunt Player v1 dominant hand: **right**
- 이는 역사 사실이 아니라 reconstructed production attribute
- 성별/세부 외형/복식은 reference review 전 과도하게 확정하지 않음

## Web serving / soft budget

- initial critical world visual은 `<img>/<picture>` 계열 우선 검토
- responsive `srcset/sizes`, scene-specific crop, modern image formats 활용
- first meaningful scene critical image payload 목표 **1.2MB 이하**, 경고선 **1.8MB**
- world plate 목표 **500KB 이하**, alpha foreground 목표 **250KB 이하**
- 수치는 Stage 08 실제 측정 뒤 조정 가능

---

# Stage 01~07 시각 보완 확정

Stage 01~07을 다시 갈아엎지 않는다.

후속 개발 책임으로 다음을 확정한다.

- Stage 01A: body visibility = action information / camera / dominant hand / contact / occlusion continuity
- Stage 01C: physical-looking lighting first / perceptual treatment second
- Stage 02: same-day shared visual anchors
- Stage 03: handaxe / distance / sun / fatigue / dirt-wear / return-firelight continuity checkpoints
- Stage 04: scene별 camera/world/body/actor/item/contact/occlusion/light/crop checklist
- Stage 05/05A: 역할별 body vocabulary + 별도 `Visual Production Ready` 판정
- Stage 06: Stage 08 구현 시 필요한 최소 visual runtime 계약만 v9로 정식화
- Stage 07: placeholder production-replaceability / crop / floating-hand risk Human QA 추가

---

# Visual Production Readiness Gate

Stage 07 Human Gate PASS 뒤에도 곧바로 이미지 대량 생성/Stage 08 코드 확장을 하지 않는다.

먼저:

1. Historical Reference Ready
2. Identity Ready
3. Composition Ready
4. Scene Family Ready
5. Technical Handoff Ready

를 확인한다.

구체 기준은:

- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`

가 소유한다.

---

# 자동 검증 기준선

Canonical/runtime 통합 내용은 PR #15에서 검증됐다.

- canonical/runtime content head: `e40208b0d6e8fbf3a2949af2ef1fbaf6704b6849`
- initial consolidated CI: `32926349166` — PASS
- exact PR-head CI: `32926520525` — PASS
- Node: **24.19.0**
- npm: **11.17.0**
- test files: **8 / 8 PASS**
- tests: **35 / 35 PASS**
- Stage 07 Skeleton integration tests: **10 PASS**
- production build: PASS
- Vite modules transformed: **41**

상태 문서 자체의 최종화 커밋도 저장소 CI를 통과한 뒤 main에 반영하는 운영 규칙을 유지한다. 최신 exact main SHA/run은 GitHub Actions 상태를 기준으로 확인하며, 그 값을 다시 문서에 써서 끝없는 docs-only CI 루프를 만들지 않는다.

---

# 자동검증이 아직 증명하지 않는 것

- 손/팔/주먹도끼 비율이 실제 1인칭처럼 자연스러운가
- current shelter가 실제로 현대 집/텐트 아이콘처럼 보이지 않는가
- `뗀석기 → 주먹도끼` 관계를 학생이 실제로 이해하는가
- terminology reveal이 몰입을 얼마나 끊는가
- cave가 넓고 보호 가능한 실제 공간처럼 느껴지는가
- 학생이 동굴/막집을 단일 정답 거처로 오해하지 않는가
- Teacher가 Fact / Reconstruction을 실제로 충분히 구분하는가
- production asset의 body/cast/tool identity continuity
- contact/grip/occlusion의 물리적 자연스러움
- responsive viewport에서 crop/scale/contact가 유지되는지
- 실제 production asset payload가 교실 환경에서 체험을 끊지 않는지

이 항목은 Human Gate와 후속 Visual QA 책임이다.

---

# 다음 공식 Gate

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

Human Gate PASS 전 Stage 08 전체 Hunt 구현 금지.

---

# Human Gate PASS 직후 Stage 08 진입 순서

```text
Visual Production Readiness Gate
→ Historical / Visual Reference Pack
→ Canonical Anchor Sheets
→ Camera / Composition Profiles
→ contact keyframe roughs
→ Scene Family anchors
→ Stage 06 v9 minimal visual runtime contract
→ Hunt minimum coherent production asset set
→ Embodied Composite browser integration
→ Visual Continuity / Responsive / Performance QA
→ Hunt interaction / pursuit / threat / result / return 확장
```

아름다운 최종 이미지부터 대량 생성하지 않는다.

먼저 같은 몸·같은 도구·같은 사람·같은 세계가 이어지는 최소 세트를 검증한다.

---

# 의도적으로 아직 미완성인 것

- 주먹도끼 실제 땅파기/두들기기/자르기·손질 interaction
- 반복 사용으로 다용도성 체감
- Camp에서 현재 임시 거처 생활/손질 뒤 `막집` 명명
- 불의 여러 기능 실제 상호작용
- 완성 Hunt 추적/위협/결과/귀환
- cave discovery의 실제 consequence
- Camp의 cave recontextualization
- 학생 파일럿
- Gather / Camp / Three-Perspective integration
- Multi-day Change / Migration / Historical Conceptualization
- final Player Body / Cast / visual / audio production
