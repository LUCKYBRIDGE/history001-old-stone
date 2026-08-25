# R2 Stage 01~06 Deep Audit Report

## 목적

Embodied First-Person, 관계 기억, 비획일적 결과, 미세 화면 연출이 연속해서 추가된 뒤 프로젝트를 Stage 01부터 다시 검토했다.

질문은 단순했다.

> **현재 방향이 더 몰입적인가?**

만 묻지 않고,

> **더 몰입적인 동시에 더 정확하고, 더 이해하기 쉽고, 초등학생에게 안전하며, 실제로 구현 가능한가?**

를 검증했다.

---

# 1. 최종 판정

# **R2 핵심 방향은 유지한다. 그러나 `몰입이 강할수록 좋다`는 해석은 폐기한다.**

현재 canonical 원칙:

1. Historical Integrity
2. Learner Safety & Accessibility
3. Learning Clarity
4. Embodiment & Agency

네 축이 동시에 성립해야 한다.

---

# 2. 유지할 핵심 강점

## Embodied First-Person

- 환경과 내 몸이 같은 시야 안에 있음
- 손/도구/사람의 실제 상호작용
- 역할별 다른 몸과 관점

## Relationship Memory

- 호감도 숫자보다 공유한 사건
- 이전 선택이 뒤의 시선/대사/재회에 남음

## Situation-first Threat / Dilemma

- 위협 설명보다 징후/사람 반응
- 선택지보다 상황이 먼저 딜레마를 만듦

## Reconverging Narrative

- 완전 자유분기 없이도 선택 흔적 유지
- 같은 거처에 돌아와도 의미가 달라짐

## Perspective Recontextualization

- 같은 사건을 다른 사람의 몸/시간에서 다시 경험
- 공동체 상호의존을 설명이 아니라 관점 차이로 이해

## Subtle Screen Treatment

- 대형 VFX 대신 색/명암/focus/blink/micro motion
- 효과는 세계/몸 상태를 보조

---

# 3. Deep Audit에서 발견한 핵심 결손

## A. 몰입과 학습 우선순위

문제:

몰입을 높이기 위해 역사적 정확성이나 명료성을 희생할 가능성.

보완:

- 4 non-negotiable axes
- Immersion is a means, not the curriculum

## B. 분기와 학습 누락

문제:

학생 선택에 따라 핵심 역사 개념을 못 볼 가능성.

보완:

- Learning Invariants
- Narrative Variants와 분리
- Learning Evidence 기술 계약

## C. Diegetic UI 과잉

문제:

`설명을 줄인다`가 `무엇을 해야 하는지 숨긴다`로 변질될 가능성.

보완:

- Progressive Scaffolding
- Primary Attention Target
- pixel hunting 금지

## D. Player Body stereotype

문제:

역할별 다른 몸이 Hunt=남성, Gather/Camp=여성 같은 역사적 고정관념으로 읽힐 가능성.

보완:

- Player Body Identity neutrality
- 역할 차이는 행동/공간/관계/딜레마로 먼저 표현

## E. Relationship guilt

문제:

기다리는 사람과 관계 기억이 학생에게 죄책감을 주어 특정 선택을 사실상 정답으로 만들 가능성.

보완:

- Relationship Emotional Safety
- NPC 비난/모욕/관계 처벌 금지

## F. Threat intensity

문제:

`위협을 체감`시키려다 초등학생용 역사 체험이 공포 콘텐츠가 될 가능성.

보완:

- Threat Intensity Ceiling
- 비그래픽 긴장
- no gore / no repeated jump scare / no death-game-over
- Recovery Beat

## G. Screen effect overload

문제:

red/focus/sway/blink가 누적되면 게임 HUD나 멀미 유발 요소가 될 가능성.

보완:

- World/Actor → Body → Treatment
- none/subtle/accent
- Primary Attention 우선
- reduced-effects parity
- flash보다 blink/fade

## H. Perspective confusion

문제:

다른 사람의 몸으로 바뀌는 장치가 `깊은 관점 전환`보다 `왜 손이 갑자기 바뀌었지?`라는 혼란이 될 가능성.

보완:

- Perspective Orientation
- 2개 이상의 continuity anchor
- 필요한 경우 한 줄 orientation

## I. Immersion without learning transfer

문제:

학생이 재미있게 경험했지만 역사 개념을 설명하지 못할 가능성.

보완:

- Micro Reflection
- Shared Reflection
- Historical Concept Bridge
- Experience → Reflection → Historical Concept

## J. Classroom practicality

문제:

수업에서 중단/재개/효과 조정/학생 막힘 확인이 어려울 가능성.

보완:

- Player / Teacher / Debug 분리
- stable checkpoint
- reduced effects
- teacher restart/progress 후보

---

# 4. 외부 설계 기준과의 대조에서 얻은 결론

Deep Audit은 몰입형 학습·serious game·body ownership/perspective-taking·WCAG 접근성 자료를 참고했다.

핵심적으로 받아들인 원칙:

- presence/agency만으로 학습 효과가 자동 보장되지 않음
- reflection/scaffolding이 필요함
- 직관적인 조작이 불필요한 cognitive load를 줄임
- 몸과 시점의 congruence가 중요함
- flashing/motion은 접근성 안전 기준을 가져야 함

주의:

이 프로젝트는 HMD VR이 아니라 일반 브라우저 기반 cinematic first-person이다.

따라서 외부 연구 결과를 효과 보장으로 복제하지 않는다.

# **설계 원칙만 참고하고 실제 효과는 교사/학생 브라우저 테스트로 확인한다.**

---

# 5. 현재 문서 버전

- `docs/01_PROJECT_CORE.md` v6
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` v3
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` v2
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` v2
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` v1
- `docs/02_EXPERIENCE_STRUCTURE.md` v5
- `docs/03_HUNT_STORY.md` v5
- `docs/04_HUNT_PLAYFLOW.md` v5
- `docs/05_ROLE_EXPERIENCE_MAP.md` v5
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` v4
- `docs/06_TECH_BLUEPRINT.md` v5
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` v4
- `docs/08_HUNT_IMMERSION_REDESIGN.md` v3 — legacy transition brief

---

# 6. 현재 설계에서 아직 증명되지 않은 것

문서 PASS는 실제 UX PASS가 아니다.

아직 직접 검증해야 한다.

- 브라우저에서 내 몸이 자연스러운가?
- 손/사람/배경의 광원과 공간이 일치하는가?
- 첫 행동을 초등학생이 이해하는가?
- 반복 인물을 실제 관계로 기억하는가?
- 다른 몸으로 바뀐 것을 이해하는가?
- 선택 전에 실제로 고민하는가?
- 위협이 적당한 긴장인가?
- 화면 효과가 불편하지 않은가?
- reduced effects가 동등한가?
- 서로 다른 경로가 의미 있게 다르게 느껴지는가?
- Reflection이 역사 개념 전이로 이어지는가?

---

# 7. 다음 단계가 Skeleton인 이유

현재 설계에서 가장 위험한 오류는 `전체 Hunt를 만든 뒤 처음으로 체감 문제를 발견하는 것`이다.

따라서 다음은 전체 콘텐츠 구현이 아니다.

# **R2 Stage 07 — Embodied Experience Skeleton**

에서 가장 위험한 가설부터 작게 검증한다.

검증 대상:

- Player / Teacher / Debug 분리
- 몸/사람/환경의 한 공간감
- 도구 전달
- 첫 행동 scaffold
- walking/crouch POV
- screen treatment + reduced effects
- perspective transition + orientation
- 최소 Learning Evidence
- checkpoint

Skeleton이 실패하면 전체 Hunt로 가지 않는다.

---

# 8. 다음 개발 세션의 핵심 질문

코드를 얼마나 많이 만들었는지가 아니라 다음을 묻는다.

> **내 몸과 사람이 같은 공간에 있는가?**

> **무엇을 해야 하는지 이해하는가?**

> **효과를 꺼도 경험이 성립하는가?**

> **다른 사람의 몸으로 옮겨갔다는 것을 이해하는가?**

> **이 작은 체험에서 실제 역사 학습의 증거가 생기는가?**

이 다섯 질문이 Stage 07의 성공 기준이다.
