# 구석기 역사 체험 웹게임
## Stage 01~05 설계 재검증 v4 / R2 Deep Audit

> 목적: Embodied First-Person, 관계 기억, 비획일적 결과, 미세 화면 연출이 추가된 뒤 Stage 01부터 다시 검토해 **교육 목표·역사성·명료성·정서/접근성 안전·구현 가능성**이 서로 충돌하지 않는지 재검증한다.

---

# 1. 재검증 결론

## **R2의 방향은 유지할 가치가 높다. 다만 `몰입을 강하게 만들수록 좋다`는 암묵적 전제를 제거하고, 몰입을 역사 학습·명료성·안전 안에서 작동하는 수단으로 다시 제한해야 했다.**

이번 감사에서 추가/강화한 것:

- Learning Invariants / Narrative Variants 분리
- Learning Clarity Gate
- Progressive Scaffolding
- Primary Attention Target
- Player Body Identity의 성/연령 고정관념 방지
- Perspective Orientation
- Relationship Emotional Safety
- Threat Intensity Ceiling
- Choice Fairness
- Reflection / Historical Concept Bridge
- Screen Effect Safety / Reduced Effects parity
- Classroom checkpoint

새 상위 문서:

- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`

---

# 2. Stage 01 Core 재검증

기존 강점:

- 설명보다 경험
- 같은 하루의 세 관점
- 몸이 있는 1인칭
- 관계 기억
- 비획일적 결과
- 이동은 누적 경험의 결론

발견한 결손:

1. 몰입과 역사 정확성이 충돌할 때 우선순위 불명확
2. 분기에 따라 핵심 역사 학습이 사라질 가능성
3. 학생이 조작을 찾지 못해 몰입 자체가 깨질 가능성
4. 몸 외형이 성별 역할 고정관념으로 읽힐 가능성
5. 관계를 죄책감 유도에 사용할 가능성
6. 위협/효과 강도의 초등학생 기준 부족
7. 체험 뒤 성찰·개념화가 상대적으로 약함

보완:

- Project Core v6
- Historical Integrity / Safety / Clarity / Embodiment 4축
- Experience → Reflection → Historical Concept

판정: **PASS AFTER REVISION**

---

# 3. Stage 01A Embodied First-Person 재검증

기존 위험:

- `몸이 많이 보일수록 몰입`으로 오해 가능
- 사실적 몸이 장면마다 달라지는 uncanny risk
- 역할 몸이 성 역할을 고정할 위험

보완:

- 몸이 안 보이는 순간도 정상
- Player Body Identity neutrality
- Primary Attention Target
- Embodied Fidelity Ladder
- Uncanny / Mismatch QA
- 관점 전환 orientation 허용

판정: **PASS AFTER REVISION**

---

# 4. Stage 01B 관계·선택 재검증

기존 위험:

- 관계 강화가 죄책감/정답 유도로 변질 가능
- 선택 결과가 복잡해지면서 숨겨진 최적 루트 발생 가능
- 특정 분기만 핵심 학습을 독점할 가능성

보완:

- Relationship Emotional Safety
- Choice Fairness Gate
- Learning Invariants 분기 독립
- 위협 강도 상한
- 재수렴의 의미 차이 명시

판정: **PASS AFTER REVISION**

---

# 5. Stage 01C 화면 연출 재검증

기존 강점:

- 대형 VFX가 아닌 색/명암/focus/blink/micro motion
- 효과가 의미를 대신하지 않음

발견한 위험:

- red/focus/sway가 반복되면 게임 HUD 문법이 될 수 있음
- blur/motion이 초등학생의 조작과 읽기를 방해할 수 있음
- 효과가 장면의 주의 초점을 빼앗을 수 있음

보완:

- World/Actor → Body → Treatment 순서
- Primary Attention Target 우선
- WCAG three-flashes threshold 초과 금지
- flash보다 blink/fade 우선
- reduced effects parity
- 의미 중복 금지

판정: **PASS AFTER REVISION**

---

# 6. Stage 01D 신규 검증

목적:

몰입·분기·1인칭·효과에 대한 **상한선**을 제공한다.

핵심:

- Historical Integrity
- Learner Safety & Accessibility
- Learning Clarity
- Learning Invariants
- Progressive Scaffolding
- Cognitive Load / Primary Attention
- Body Identity neutrality
- Perspective clarity
- Relationship safety
- Threat ceiling
- Screen effect safety
- Reflection
- Classroom readiness

판정: **REQUIRED / PASS AS CONSTITUTION**

---

# 7. Stage 02 Experience Structure 재검증

기존 강점:

- Shared Morning Event
- Perspective Morning Echo
- Perspective Recontextualization
- Common Evening

보완 필요:

- 관점 전환 혼란 방지
- 모든 경로의 Learning Invariant 보존
- 역할/공통 reflection 위치
- 교실용 checkpoint

보완:

- Perspective Orientation Rule
- Micro Reflection
- Shared Reflection
- Historical Concept Bridge 강화
- Classroom Session Boundary

판정: **PASS AFTER REVISION**

---

# 8. Stage 03 Hunt STORY 재검증

유지:

- R/H1/H2 관계
- 도구 전달
- 추적 딜레마
- Threat build-up
- 다축 결과
- 귀환/재회

보완:

- Hunt Learning Invariants 명시
- body identity 고정관념 금지
- 첫 행동 scaffold
- Choice Fairness
- Threat ceiling / recovery beat
- 관계 비난 금지
- Micro Reflection seed

판정: **PASS AFTER REVISION**

---

# 9. Stage 04 Hunt PLAYFLOW 재검증

기존 Scene 계약에 다음을 추가했다.

- Primary Attention Target
- Learning Invariant contribution
- screen treatment budget
- scaffold fallback
- safety/accessibility note

Threat는

```text
anomaly
→ actor reaction
→ body reaction
→ player observation
→ choice
```

를 요구한다.

판정: **PASS AFTER REVISION**

---

# 10. Stage 05 Role Map 재검증

핵심 보완:

- 역할 차이를 성별/연령 외형으로 만들지 않음
- 역할별 Learning Invariants
- 역할별 dilemma / relationship / body grammar
- 역할별 screen treatment 차별화
- 공통 Safety/Clarity Gate

판정: **PASS AFTER REVISION**

---

# 11. 외부 연구/접근성 기준과의 대조

설계 방향은 다음 근거와 정합적이다.

- K–6 몰입형 학습에서는 presence/agency뿐 아니라 reflection/scaffolding이 학습에 중요함
- serious-game 설계에서는 직관적 navigation과 responsive interface가 불필요한 cognitive load를 줄임
- body ownership/perspective-taking 연구는 1인칭 embodiment의 가능성을 보여주지만 몸/시점의 congruence가 중요함
- WCAG 2.2는 flashing과 interaction-triggered motion에 안전 기준을 둠

이 프로젝트는 HMD VR이 아니라 웹 기반 cinematic first-person이므로 연구 결과를 그대로 효과 보장으로 해석하지 않는다.

원칙만 참고하고 실제 효과는 교사/학생 테스트로 검증한다.

---

# 12. 남은 핵심 리스크

## A. 실제 화면의 몸 이질감

문서로 해결 불가.

R2 Stage 07 Skeleton에서 실제 브라우저 검증 필요.

## B. 관점 전환 혼란

학생 테스트에서 `같은 날 다른 사람`을 이해하는지 직접 확인.

## C. 관계 기억의 과잉 복잡성

초기에는 소수 memory만 구현.

## D. 분기 폭발

중요 변주만 지원하고 재수렴 유지.

## E. 역사적 재구성 과단정

최종 동물/식생/의복/사회관계 전 역사 Context Bible 필요.

## F. 화면 효과의 신체 불편

reduced effects를 Skeleton부터 함께 검증.

## G. 몰입 후 학습 전이

Reflection/Concept Bridge를 학생 파일럿에서 반드시 검증.

---

# 13. Stage 06에 새로 요구하는 기술 조건

1. Learning Invariant를 테스트 가능하게 표현
2. Narrative Variant와 학습 핵심 분리
3. Player Body Identity / continuity
4. Cast Anchor / relationship memory
5. Perspective orientation 지원
6. progressive hint/scaffold 최소 구조
7. Primary Attention metadata 또는 동등 설계
8. Threat build-up / recovery
9. Screen treatment + reduced effects parity
10. Teacher/debug surface
11. stable classroom checkpoint
12. Reflection / Concept Bridge 연결

---

# 14. 최종 판정

# **Stage 01~05 R2 Deep Audit: PASS / REVISED**

단, 이 PASS는 **설계 정합성**에 대한 판정이다.

아직 증명하지 않은 것:

- 실제 브라우저에서 몸이 자연스러운가
- 학생이 첫 행동을 이해하는가
- 사람을 실제 관계로 기억하는가
- 관점 전환을 이해하는가
- 실제로 고민하는가
- 위협이 적절한 긴장으로 느껴지는가
- 화면 효과가 불편하지 않은가
- 선택 변주가 의미 있게 느껴지는가
- Reflection이 역사 학습 전이로 이어지는가

이 항목은 R2 Stage 07 이후 직접 플레이로 검증한다.
