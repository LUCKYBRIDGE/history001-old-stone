# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 01~07 Canonical Unification 통합 완료 / Automated PASS / Human QA 대기**

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

Non-canonical 기록/전환 문서:

- `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`
- `docs/R2_STAGE01_DEEP_AUDIT_REPORT.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`

---

# 2. 최신 canonical 버전

- `docs/01_PROJECT_CORE.md` — **v9**
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

# 6. Canonical unification에서 실제로 바뀐 것

- `docs/00_CANONICAL_BASELINE.md` 신설
- 문서 우선순위/완료 판정/공식 용어 통일
- Stage 06A 보정 문서를 Stage 06 v8에 흡수 후 삭제
- Audit/Legacy 문서를 non-canonical로 명시
- current shelter를 비대칭 cover/poles/opening primitive로 변경
- Teacher reconstruction note 범위를:
  - 공동체 인물/거처 배치
  - 특정 아침 도구 전달
  - 특정 자연 거처 후보 발견
  로 통일
- Player reconstruction metadata 미노출 테스트 추가
- package baseline을 `curriculum-hardened`로 통일

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
