# 구석기 역사 체험 웹게임 — 개발 워크플로우 v7
## Design Reboot R2 / Curriculum-Aware Stage 01~07

이 문서는 **역사·교과 근거 → 몰입형 설계 → 작은 browser proof → 자동 검증 → 사람 QA → 다음 Vertical Slice** 순서를 관리한다.

기존 Hunt v0.1은 삭제하지 않고 Legacy Functional Prototype으로 보존한다.

---

# 1. 개발 원칙

```text
Historical / Curriculum Fact
→ Dramatic / Experience Design
→ Role STORY
→ Embodied PLAYFLOW
→ Technical Contract
→ Small Browser Proof
→ Automated Verification
→ Teacher Visual / Immersion / Curriculum QA
→ Larger Vertical Slice
→ Student Pilot
```

구분:

- 문서 PASS ≠ runtime PASS
- runtime PASS ≠ human immersion PASS
- terminology rendering PASS ≠ 실제 개념 이해 PASS

교과 연계의 기본 문법:

# **Experience → Name → Reuse → Connect**

---

# 2. Stage 01 — Project Constitution

상태:

# **PASS / REVISED**

최신:

- Project Core **v8**
- Embodied First-Person v4
- Relationship/Agency v3
- Screen Treatment v3
- Learning/Safety/Historical Integrity v2
- Curriculum/Textbook Anchors **v1**

핵심:

- Role-True limited POV
- Emotional Reality
- Historical Imagination
- Curriculum Anchor
- `Subtle by default. Strong when earned.`
- Choice Fairness = causal plausibility
- Historical Fact / Reconstructed Event 분리

---

# 3. Stage 02 — Same-Day Experience Structure

상태:

# **PASS / REVISED**

최신: **v8**

핵심:

# **Student Play Order ≠ In-World Time**

- Hunt/Gather/Camp는 같은 Day 1
- role completion은 play progress
- 동일 `dayId`
- cross-role signal이 과거를 소급 변경하지 않음
- Common Evening은 세 관점 뒤 한 번
- 교과 Anchor를 역할에 분산
- 필수 교과 개념을 한 분기가 독점하지 않음

---

# 4. Stage 03 — Hunt STORY

상태:

# **PASS / REVISED**

최신: **v7**

핵심:

- R/H1/H2 관계
- 주먹도끼 전달 → 짧은 용어 명명 → continuity
- 흔적/추적
- 시간/거리/사람 딜레마
- 동굴/바위 그늘 발견 가능
- 공간의 장점과 불확실성 평가
- Threat/Horror
- multi-axis result
- 귀환/재회

---

# 5. Stage 04 — Hunt PLAYFLOW

상태:

# **PASS / REVISED**

최신: **v7**

핵심:

# **Scene ≠ Beat**

Terminology Reveal은 대부분 Beat다.

Stage 07 proof 범위:

```text
Role Orientation
→ Fire
→ Tool Handoff
→ 뗀석기/주먹도끼 cue
→ Join / Departure
→ Crouch Observation
→ Cave / Natural Shelter Discovery
→ 동굴/바위 그늘 cue
→ Perspective Transition
```

---

# 6. Stage 05 — Three Role Map

상태:

# **PASS / REVISED**

최신: **v7**

역할 고유 문법:

- Hunt — 거리/주먹도끼/추적/위험/동굴 발견/귀환
- Gather — 가까운 관찰/채집/도구 재사용/공간 기억/범위 확대
- Camp — 불/막집/생활 손질/시간/부재/재회/새 거처 후보 논의

교과 핵심을 Hunt 설명에 몰지 않는다.

---

# 7. Stage 06 — Technical Blueprint

상태:

# **PASS / REVISED**

최신: **v7**

구조:

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

추가 최소 계약:

- CurriculumAnchorId
- local TerminologyReveal
- receive evidence vs functional-use evidence 구분
- cave/natural-shelter presentation
- cave exposure treatment

금지:

- generic Curriculum Engine
- 교과서 DB
- 3D cave engine
- generic Scene/NPC/VFX engine

---

# 8. Stage 07 — Embodied Curriculum Skeleton

## 구현 상태

# **Implementation Complete / Automated PASS / Human QA Pending**

package:

```text
0.0.0-r2-stage07-curriculum
```

기본 앱 흐름:

```text
사냥 관점
→ 새벽 불
→ R에게 돌도구 받기
→ 뗀석기/주먹도끼 cue
→ 주먹도끼 continuity
→ 동행 합류/출발
→ crouch observation
→ cave / rock-shelter 발견
→ 공간 살핌
→ 동굴/바위 그늘 cue
→ perspective transition proof
```

자동 검증 implementation baseline:

- 8 test files
- **33 tests**
- typecheck PASS
- production build PASS
- CI `32841962496`

---

# 9. Stage 07 Human Gate

다음 공식 작업이다.

# **Teacher Browser Visual / Immersion / Curriculum QA**

확인:

- first-person body placement
- R/H1/H2 공간감과 관계
- handaxe handoff
- `뗀석기 · 주먹도끼` cue가 경험 뒤 자연스럽게 붙는가
- held-item continuity
- cave가 실제 공간처럼 보이는가
- cave의 보호 가능성과 불확실성이 함께 읽히는가
- `동굴 · 바위 그늘` cue timing
- treatment / reduced effects
- perspective transition
- dev chrome 미노출

기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

핵심 FAIL이 있으면 Stage 08로 가지 않는다.

---

# 10. Stage 08 — Hunt Embodied Vertical Slice

상태:

# **NOT STARTED / BLOCKED BY STAGE 07 HUMAN GATE**

예정 범위:

- 주먹도끼의 실제 땅파기/두들기기/자르기·손질 interaction
- 흔적 탐색
- 발견/접근/시도
- 추적 딜레마
- Cave discovery의 실제 분기/후속 signal
- Threat/Horror
- multi-axis result
- 귀환
- emotional callbacks
- 재회

Stage 07의 `도구 받기`를 실제 `다용도 사용 경험`으로 확장한다.

---

# 11. Stage 09 — Teacher Immersion / Curriculum QA

Stage 08 Hunt 전체를 교사가 플레이하며:

- 역할 빙의
- 관계
- 공포/죄책감의 자연스러움
- 교과 terminology timing
- 주먹도끼의 다용도성 이해
- 막집/동굴 생활 오개념 여부
- 결과 변주
- 귀환
- historical imagination

을 검증한다.

---

# 12. Stage 10 — Student Pilot

초등학생 소규모 파일럿.

관찰:

- 조작 이해
- 몰입
- 공포/불편
- 선택 이유
- 기억되는 사람
- 기억되는 도구/거처
- `뗀석기`, `주먹도끼`, `막집`, `동굴/바위 그늘`의 개념 연결
- 역사적 상상력
- 오개념

---

# 13. Stage 11 — Gather

고유 문법:

- 채집
- 뿌리/열매
- 도구 재사용
- 반복 탐색
- 가까운 자원 한계
- 공간 기억

STORY → PLAYFLOW → proof → QA 순서 진행.

---

# 14. Stage 12 — Camp

고유 문법:

- fire / cooking
- 막집 생활/손질
- 같은 공간의 시간 변화
- absence / waiting / reunion
- 새 동굴 후보를 다른 관점에서 평가

으로 구현/QA.

---

# 15. Stage 13 — Three-Perspective Integration

- cross-role signals
- perspective recontextualization
- Common Evening
- 도구/먹을거리/불/거처를 하나의 공동체 생활로 결합

검증.

---

# 16. Stage 14 — Multi-Day Change

여러 날에 걸쳐:

- 가까운 자원 감소
- 사냥/채집 거리 증가
- 막집 유지 부담
- 새 shelter candidate
- 물/먹을거리/위험 조건

을 누적한다.

---

# 17. Stage 15 — Migration / New Home

이동을 교과 문장으로 알려주기보다 앞선 경험의 결론으로 만든다.

```text
자원 부담
+ 거리 증가
+ 현재 거처 부담
+ 새 장소 후보
+ 공동체 관계/판단
→ 이동 결정
```

동굴을 자동 정답 목적지로 고정하지 않는다.

---

# 18. Stage 16 — Historical Conceptualization

체험에서 이미 겪은 것을 정확한 교과 개념과 실제 자료로 연결한다.

예:

```text
내가 받았던 도구
→ 뗀석기 / 주먹도끼
→ 실제 주먹도끼 유물

내가 생활했던 임시 거처
→ 막집

내가 살핀 자연 공간
→ 동굴 / 바위 그늘 생활

반복된 거리/자원 문제
→ 먹을 것을 찾아 옮겨 다니는 생활
```

# **이 단계가 처음으로 개념을 가르치는 곳은 아니다. 이미 경험한 개념을 정리하고 실제 증거에 연결하는 단계다.**

---

# 19. 각 코드 세션 종료 Gate

최소 자동 검증:

1. install
2. typecheck
3. tests
4. production build

그리고 구현 범위가 몰입/교과 cue를 포함하면 반드시 별도 human QA 상태를 기록한다.

# **자동 CI로 Immersion Complete / Curriculum Complete를 선언하지 않는다.**
