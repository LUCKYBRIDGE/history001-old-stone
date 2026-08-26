# PROJECT_STATUS.md

## Current phase

# **R2 Stage 01~07 Canonical Baseline 통합 완료 / Automated PASS / Human QA 대기**

현재 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

최상위 기준:

- `AGENTS.md`
- `docs/00_CANONICAL_BASELINE.md`

교과 연결 문법:

# **Experience → Name → Reuse → Connect**

---

# 1. 현재 canonical 상태

- Stage 01 Project Core: **PASS / v9**
- Stage 01A Embodied First-Person: **PASS**
- Stage 01B Relationship / Agency: **PASS**
- Stage 01C Screen Treatment: **PASS**
- Stage 01D Learning / Safety / Historical Integrity: **PASS**
- Stage 01E Curriculum / Textbook Anchors: **PASS / v3**
- Stage 02 Experience Structure: **PASS / v9**
- Stage 03 Hunt Story: **PASS / v8**
- Stage 04 Hunt Playflow: **PASS / v8**
- Stage 05 Role Experience Map: **PASS / v8**
- Stage 05A Design Validation: **PASS / v6**
- Stage 06 Technical Blueprint: **PASS / v8 / SINGLE TECH SSOT**
- Stage 07 Immersion Narrative Bible: **PASS / v7**
- Stage 07 Browser Skeleton: **IMPLEMENTATION COMPLETE**
- Stage 07 Automated Verification: **PASS**
- Stage 07 Human QA: **PENDING**
- Stage 08 Hunt Embodied Vertical Slice: **BLOCKED until Human Gate PASS**

`docs/06A_CURRICULUM_RUNTIME_CONTRACT.md`는 Stage 06 v8에 흡수되어 삭제된 과도기 문서다. 다시 만들지 않는다.

Legacy/Audit 문서는 현재 canonical 설계를 덮지 않는다.

---

# 2. 공식 용어

## 도구

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

- `뗀석기 = 주먹도끼`처럼 동의어로 표현하지 않는다.
- 주먹도끼를 사냥 전용 무기로 축소하지 않는다.

## 거처

- **현재 임시 거처**: Stage 07 초기의 중립적 player-facing 표현
- **막집**: Camp에서 실제 거처 생활/손질 뒤 명명할 교과 용어
- **동굴 / 바위 그늘**: 자연 지형을 이용한 생활 공간

막집과 동굴/바위 그늘을 경쟁 정답으로 만들지 않는다.

---

# 3. Fact / Reconstruction

## Historical / Curriculum Fact

- 뗀석기 사용
- 주먹도끼의 대표성/다용도성
- 먹을 것을 찾아 옮겨 다니는 생활
- 막집
- 동굴/바위 그늘 생활
- 불의 이용

## Reconstructed Event

- R/H1/H2라는 구체 인물
- 특정 아침의 도구 전달
- 이 Day 1 공동체의 구체 거처 배치
- Hunt 중 특정 자연 거처 후보 발견
- 구체 대사·감정·선택 결과

Player에는 reconstruction 관리 metadata를 노출하지 않는다. Teacher/Debug에서 확인한다.

---

# 4. Stage 07 현재 Browser Proof

package:

```text
0.0.0-r2-stage07-curriculum-hardened
```

현재 Player 흐름:

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
→ 같은 날 다른 사람 관점 proof
```

이것은 전체 Hunt가 아니라 **layout / interaction / curriculum / continuity proof**다.

---

# 5. 통합된 자동검증 기준선

Canonical Unification PR #15는 `main`에 통합 완료됐다.

통합 baseline:

```text
SHA: e40208b0d6e8fbf3a2949af2ef1fbaf6704b6849
```

`main` push CI:

```text
run: 32926565326
conclusion: success
```

검증:

- Node **24.19.0**
- npm **11.17.0**
- install PASS
- typecheck PASS
- **8 test files / 35 tests PASS**
- `R2EmbodiedSkeleton.test.tsx` **10 tests PASS**
- production build PASS
- Vite **41 modules transformed**

정확한 자동검증 상세는 `handoff/TEST_REPORT.md`가 소유한다.

---

# 6. 자동검증이 아직 증명하지 않는 것

- 손/팔/주먹도끼 비율이 실제 1인칭 시야처럼 자연스러운가
- R/H1/H2가 실제 주변 사람처럼 느껴지는가
- current shelter가 현대 집/텐트 아이콘처럼 보이지 않는가
- `뗀석기 → 주먹도끼` 관계를 학생이 실제로 이해하는가
- terminology reveal이 몰입을 얼마나 끊는가
- cave가 넓고 보호 가능한 실제 공간처럼 느껴지는가
- 학생이 막집/동굴을 단일 정답 거처로 오해하지 않는가
- Teacher가 Fact / Reconstruction을 충분히 구분하는가

이 항목은 Human Gate 책임이다.

---

# 7. 다음 공식 Gate

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

프로토콜:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

Human Gate PASS 전 Stage 08 전체 Hunt 구현을 시작하지 않는다.

---

# 8. 의도적으로 아직 미완성인 것

- 주먹도끼 실제 땅파기/두들기기/자르기·손질 interaction
- 반복 사용을 통한 주먹도끼 다용도성 체감
- Camp에서 현재 임시 거처 생활/손질 뒤 `막집` 명명
- 불의 여러 기능 실제 상호작용
- 완성 Hunt 추적/위협/공포/결과/귀환
- cave discovery의 실제 consequence
- Camp의 cave recontextualization
- Gather / Camp / Three-Perspective Integration
- Multi-day Change / Migration / Historical Conceptualization
- Student Pilot
- final Player Body / Cast / visual / audio production

---

# 9. 상태 표현 규칙

`PROJECT_STATUS.md`는 **현재 통합 상태만** 기록한다.

이미 병합된 작업에 대해 `병합 예정`, `검증 후 main 반영` 같은 과거 진행형 문구를 남기지 않는다.

- 설계 원칙: canonical docs
- 현재 phase / 다음 Gate: `PROJECT_STATUS.md`
- 새 세션 행동 지침: `handoff/CURRENT_HANDOFF.md`
- exact SHA / CI / test count: `handoff/TEST_REPORT.md`
