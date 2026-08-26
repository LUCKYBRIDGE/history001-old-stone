# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 01~07 Canonical Unification 완료 / Automated PASS / Human QA 대기**

공식 기준선:

- `docs/00_CANONICAL_BASELINE.md`

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
7. 관련 코드/tests

다음은 non-canonical 기록/전환 문서:

- `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`
- `docs/R2_STAGE01_DEEP_AUDIT_REPORT.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`

---

# 2. 최신 canonical 버전

- `docs/01_PROJECT_CORE.md` — **v9**
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
- `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md` — **v3**
- `docs/02_EXPERIENCE_STRUCTURE.md` — **v9**
- `docs/03_HUNT_STORY.md` — **v8**
- `docs/04_HUNT_PLAYFLOW.md` — **v8**
- `docs/05_ROLE_EXPERIENCE_MAP.md` — **v8**
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — **v6**
- `docs/06_TECH_BLUEPRINT.md` — **v8 / single tech SSOT**
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — **v7**

`docs/06A_CURRICULUM_RUNTIME_CONTRACT.md`는 Stage 06 v8에 흡수되어 삭제됐다.

---

# 3. 공식 용어

## 도구

- `뗀석기` = 상위 개념
- `주먹도끼` = 대표적인 구체 예

Student cue:

```text
뗀석기
돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다.
지금 손에 든 것은 그 대표적인 예인 주먹도끼다.
```

## 거처

- `현재 임시 거처` = Stage 07 초기 중립적 player-facing 표현
- `막집` = Camp에서 실제 거처 생활/손질 뒤 명명
- `동굴 / 바위 그늘` = 자연 지형 생활 공간

경쟁 정답으로 만들지 않는다.

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
- Hunt 중 특정 자연 거처 후보 발견
- 구체 대사/감정/선택 결과

Player에는 reconstruction 관리 metadata를 노출하지 않는다.
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
→ 입구/바닥/어둠/불확실성 평가
→ 동굴 / 바위 그늘 짧은 연결
→ 같은 날 다른 사람 관점 proof
```

Stage 07은 전체 Hunt가 아니다.

---

# 6. 이번 canonical unification의 코드 보완

- current shelter를 단순 house-like pentagon에서 비대칭 cover/poles/opening primitive로 변경
- `currentShelter.css`로 presentation 분리
- current shelter는 아직 `막집`으로 player-facing 확정하지 않음
- Teacher reconstruction note 범위를 다음으로 통일:
  - 이 Day 1 공동체의 구체 인물/거처 배치
  - 특정 아침 R의 도구 전달
  - 특정 자연 거처 후보 발견
- Player에는 `역사적 재구성` 관리 문구가 보이지 않음
- Debug에는 exact anchor/evidence/reconstruction metadata 유지

---

# 7. 첫 자동 검증

PR #15 initial consolidated head:

- SHA: `5b69c5858a6a5d4b6a989eacddce18d25f962673`
- CI run: **32926349166 — PASS**
- Node 24.19.0
- npm 11.17.0
- install PASS
- typecheck PASS
- **8 test files / 35 tests PASS**
- `R2EmbodiedSkeleton.test.tsx`: **10 tests**
- production build PASS
- 41 modules transformed

상태/handoff/test report 커밋까지 포함한 exact PR HEAD를 다시 CI 검증한 뒤 main에 통합한다.

---

# 8. 개발 URL

- Player: `http://localhost:5173/`
- Teacher: `http://localhost:5173/?teacher=1`
- Debug: `http://localhost:5173/?debug=1`
- Legacy Hunt: `http://localhost:5173/?legacy=1`

---

# 9. 다음 공식 작업

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

프로토콜:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

필수 확인:

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

Human Gate PASS 전 Stage 08 전체 Hunt 구현 금지.

---

# 10. Stage 08 이후 책임

아직 완료가 아님:

- 주먹도끼 실제 땅파기/두들기기/자르기·손질
- 주먹도끼 다용도성 실제 체감
- Camp current shelter 생활/손질 뒤 `막집` 명명
- 불의 여러 기능 실제 행동
- 완성 Hunt 추적/위협/결과/귀환
- cave consequence
- Camp cave recontextualization
- Student Pilot

Legacy Hunt v0.1은 회귀/비교 기준으로 유지한다.
