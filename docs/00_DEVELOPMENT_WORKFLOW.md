# 구석기 역사 체험 웹게임 — 개발 워크플로우 v8
## Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline

이 문서는 **역사·교과 근거 → 몰입형 설계 → 작은 browser proof → 자동 검증 → 사람 QA → 다음 Vertical Slice** 순서를 관리한다.

현재 기준선과 공식 용어는 `docs/00_CANONICAL_BASELINE.md`를 따른다.

기존 Hunt v0.1은 Legacy Functional Prototype으로 보존한다.

---

# 1. 전체 개발 루프

```text
Historical / Curriculum Fact
→ Dramatic / Experience Design
→ Role STORY
→ Embodied PLAYFLOW
→ Technical Contract
→ Small Browser Proof
→ Automated Verification
→ Teacher Human QA
→ Larger Vertical Slice
→ Teacher QA
→ Student Pilot
```

구분:

- Design PASS ≠ runtime PASS
- Implementation Complete ≠ Human QA PASS
- terminology rendering PASS ≠ 실제 개념 이해 PASS
- 자동 CI PASS ≠ Stage Complete

교과 연결 문법:

# **Experience → Name → Reuse → Connect**

---

# 2. 문서 변경 원칙

안정적인 canonical 문서에는 가능한 한 다음을 하드코딩하지 않는다.

- 최신 CI run ID
- 최신 test count
- 현재 branch SHA

이런 변동 정보는 다음 두 파일이 소유한다.

- `PROJECT_STATUS.md`
- `handoff/TEST_REPORT.md`

canonical 문서는 원칙·계약·Acceptance Gate를 소유한다.

---

# 3. Stage 01 — Project Constitution

상태 판단은 `PROJECT_STATUS.md`를 따른다.

핵심 문서:

- Project Core
- Embodied First-Person
- Relationship/Agency
- Screen Treatment
- Learning/Safety/Historical Integrity
- Curriculum/Textbook Anchors

핵심 계약:

- Role-True limited POV
- Emotional Reality
- Historical Imagination
- Curriculum Anchor
- `Subtle by default. Strong when earned.`
- Choice Fairness = causal plausibility
- Historical Fact / Reconstructed Event 분리
- `뗀석기 → 대표적인 예: 주먹도끼` 계층
- 현재 임시 거처 / 막집 / 동굴·바위 그늘 용어 분리

---

# 4. Stage 02 — Same-Day Experience Structure

핵심:

# **Student Play Order ≠ In-World Time**

- Hunt/Gather/Camp는 같은 Day 1
- role completion은 play progress
- 동일 `dayId`
- cross-role signal이 과거를 소급 변경하지 않음
- Common Evening은 세 관점 뒤 한 번
- Curriculum Anchor를 역할에 분산
- 필수 교과 개념을 한 분기가 독점하지 않음

---

# 5. Stage 03 — Hunt STORY

핵심:

- R/H1/H2 관계
- 돌도구 전달
- 경험 뒤 `뗀석기 → 주먹도끼` 짧은 명명
- held-item continuity
- 흔적/추적
- 시간/거리/사람 딜레마
- 동굴/바위 그늘 후보 발견 가능
- 공간의 장점과 불확실성 평가
- Threat/Horror
- multi-axis result
- 귀환/재회

---

# 6. Stage 04 — Hunt PLAYFLOW

# **Scene ≠ Beat**

Scene:

- 목표·직접 행동·위치·결과·world/relationship memory가 의미 있게 달라지는 상태 단위

Beat:

- gaze
- dialogue
- body shift
- terminology reveal
- focus/jolt 등 짧은 표현 변화

Stage 07 proof 범위:

```text
Role Orientation
→ Fire + Current Temporary Shelter
→ Tool Handoff
→ 뗀석기 → 주먹도끼 Terminology Beat
→ Join / Departure
→ Crouch Observation
→ Natural Shelter Discovery / Inspection
→ 동굴/바위 그늘 Terminology Beat
→ Perspective Transition
```

---

# 7. Stage 05 — Three Role Map

- Hunt — 거리/주먹도끼/추적/위험/새 장소/귀환
- Gather — 가까운 관찰/채집/도구 재사용/가공/공간 기억/범위 확대
- Camp — 불/현재 임시 거처/막집/생활 손질/시간/부재/재회/새 거처 후보 재평가

교과 핵심을 Hunt 설명에 몰지 않는다.

---

# 8. Stage 06 — Technical Blueprint

기술 SSOT는:

# **`docs/06_TECH_BLUEPRINT.md` 하나**

만 사용한다.

별도 보정 문서가 생기면 다음 정식 Stage 06 버전업에서 반드시 본문에 흡수하고 보정 문서는 제거한다.

구조:

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

핵심 최소 계약:

- `SharedDayContext`
- qualitative `RoleCompletion`
- `CurriculumAnchorId`
- local `TerminologyReveal`
- `LearningEvidence`
- body/held-item continuity
- natural-shelter presentation
- relationship/world memory
- screen treatment / reduced effects
- Player / Teacher / Debug 분리

금지:

- generic Curriculum Engine
- generic Scene/NPC/VFX engine
- 교과서 DB
- 3D cave engine
- item stats/inventory system

---

# 9. Stage 07 — Embodied Curriculum Skeleton

현재 구현 범위:

```text
사냥 관점
→ 새벽 불 + 현재 임시 거처
→ R의 도구 전달
→ 뗀석기 상위 개념 + 주먹도끼 대표 예
→ held-item continuity
→ 동행 합류/출발
→ 현재 거처가 멀어짐
→ crouch observation
→ 한동안 이동
→ 동굴/바위 그늘 후보 발견
→ 공간 장점/불확실성 평가
→ 짧은 용어 연결
→ 다른 관점 전환 proof
```

현재 자동검증의 정확한 test count/run ID는 `handoff/TEST_REPORT.md`가 소유한다.

---

# 10. Stage 07 Human Gate

다음 공식 Gate:

# **Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

확인:

- first-person body placement
- R/H1/H2 공간감과 관계
- current temporary shelter가 현대 집/텐트 아이콘처럼 보이지 않는지
- `뗀석기 → 대표적인 예: 주먹도끼` 관계가 이해되는지
- terminology cue가 몰입을 과도하게 끊지 않는지
- held-item continuity
- cave/rock-shelter가 실제 공간처럼 보이는지
- 보호 가능성과 불확실성이 함께 읽히는지
- fact / reconstruction 경계
- treatment / reduced effects
- perspective transition
- dev chrome 미노출
- 핵심 오개념 없음

기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

핵심 FAIL이 있으면 Stage 08로 가지 않는다.

---

# 11. Stage 08 — Hunt Embodied Vertical Slice

Human Gate 통과 뒤 시작한다.

예정 범위:

- 주먹도끼의 실제 땅파기/두들기기/자르기·손질 interaction
- 흔적 탐색
- 발견/접근/시도
- 추적 딜레마
- cave discovery의 실제 consequence
- Threat/Horror
- multi-axis result
- 귀환
- emotional callbacks
- 재회

Stage 07의 `도구 받기/명명`을 Stage 08의 `실제 다용도 사용 경험`으로 확장한다.

---

# 12. Stage 09 — Teacher Hunt QA

Stage 08 Hunt 전체를 교사가 플레이하며 검증:

- 역할 빙의
- 관계
- 공포/죄책감의 자연스러움
- terminology timing
- 주먹도끼의 다용도성 이해
- 주거 형태 오개념 여부
- 결과 변주
- 귀환
- historical imagination

---

# 13. Stage 10 — Student Pilot

초등학생 소규모 파일럿.

관찰:

- 조작 이해
- 몰입
- 공포/불편
- 선택 이유
- 기억되는 사람
- 기억되는 도구/거처
- `뗀석기`, `주먹도끼`, `막집`, `동굴/바위 그늘` 개념 연결
- 역사적 상상력
- 오개념

---

# 14. Stage 11 — Gather

고유 문법:

- 채집
- 뿌리/열매
- 도구 재사용
- 반복 탐색
- 가까운 자원 한계
- 공간 기억

STORY → PLAYFLOW → proof → QA 순서.

---

# 15. Stage 12 — Camp

고유 문법:

- fire / cooking
- 현재 임시 거처를 직접 다룸
- 경험 뒤 `막집` 명명
- 같은 공간의 시간 변화
- absence / waiting / reunion
- 새 동굴 후보를 다른 관점에서 평가

---

# 16. Stage 13 — Three-Perspective Integration

- cross-role signals
- perspective recontextualization
- Common Evening
- 도구/먹을거리/불/거처를 하나의 공동체 생활로 결합

---

# 17. Stage 14 — Multi-Day Change

여러 날에 걸쳐:

- 가까운 자원 감소
- 사냥/채집 거리 증가
- 현재 거처 유지 부담
- 새 shelter candidate
- 물/먹을거리/위험 조건

누적.

---

# 18. Stage 15 — Migration / New Home

```text
자원 부담
+ 거리 증가
+ 현재 거처 부담
+ 새 장소 후보
+ 공동체 관계/판단
→ 이동 결정
```

동굴을 자동 목적지로 고정하지 않는다.

---

# 19. Stage 16 — Historical Conceptualization

이미 체험한 것을 정확한 교과 개념과 실제 자료로 연결한다.

```text
내가 사용한 도구
→ 뗀석기
→ 대표적인 예: 주먹도끼
→ 실제 주먹도끼 유물

내가 생활/손질한 임시 거처
→ 막집

내가 살핀 자연 공간
→ 동굴 / 바위 그늘 생활

반복된 거리/자원 문제
→ 먹을 것을 찾아 옮겨 다니는 생활
```

이 단계가 처음으로 개념을 가르치는 곳은 아니다.

---

# 20. 각 코드 세션 종료 Gate

최소 자동 검증:

1. install
2. typecheck
3. tests
4. production build

그리고:

5. 해당 Human Gate 상태를 정확히 기록
6. `PROJECT_STATUS.md` 업데이트
7. `handoff/CURRENT_HANDOFF.md` 업데이트
8. `handoff/TEST_REPORT.md`에 exact SHA/run 기록

# **자동 CI로 Immersion Complete / Curriculum Complete를 선언하지 않는다.**
