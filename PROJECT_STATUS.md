# PROJECT_STATUS.md

## Current phase

# **R2 Stage 01~07 Canonical Unification 완료 / Stage 07 자동검증 PASS / Human QA 대기**

현재 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

기준 문서:

- `docs/00_CANONICAL_BASELINE.md`

교과 연결 문법:

# **Experience → Name → Reuse → Connect**

---

# 현재 판정

- Canonical baseline/index: **NEW / PASS**
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
- Legacy Hunt transition brief: **NON-CANONICAL / refreshed**
- Audit reports: **NON-CANONICAL historical records**
- Stage 07 Skeleton: **IMPLEMENTATION COMPLETE**
- Stage 07 automated verification: **PASS**
- Stage 07 human QA: **PENDING**
- Stage 08 Hunt Embodied Vertical Slice: **BLOCKED until Human Gate PASS**

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

이번 통일에서 current shelter placeholder도 현대 집 아이콘보다 **비대칭 덮개/지지대형 임시 구조물 proof**에 가깝게 수정했다.

Teacher/Debug의 reconstruction note도:

- 구체 공동체 인물/거처 배치
- 특정 아침 도구 전달
- 특정 자연 거처 후보 발견

범위로 통일했다.

---

# 첫 통합 검증

PR #15 implementation/canonical-unification head:

- SHA: `5b69c5858a6a5d4b6a989eacddce18d25f962673`
- CI run: **32926349166 — PASS**
- Node: **24.19.0**
- npm: **11.17.0**
- install: PASS
- typecheck: PASS
- test files: **8 / 8 PASS**
- tests: **35 / 35 PASS**
- Stage 07 Skeleton integration tests: **10 PASS**
- production build: PASS
- Vite modules transformed: **41**

최종 상태/handoff 기록을 포함한 PR HEAD는 별도 CI로 다시 검증한 뒤 main에 통합한다.

---

# 자동검증이 아직 증명하지 않는 것

- 손/팔/주먹도끼 비율이 실제 1인칭처럼 자연스러운가
- current shelter가 실제로 현대 집/텐트 아이콘처럼 보이지 않는가
- `뗀석기 → 주먹도끼` 관계를 학생이 실제로 이해하는가
- terminology reveal이 몰입을 얼마나 끊는가
- cave가 넓고 보호 가능한 실제 공간처럼 느껴지는가
- 학생이 동굴/막집을 단일 정답 거처로 오해하지 않는가
- Teacher가 Fact / Reconstruction을 실제로 충분히 구분하는가

이 항목은 Human Gate 책임이다.

---

# 다음 공식 Gate

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

Human Gate PASS 전 Stage 08 전체 Hunt 구현 금지.

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
