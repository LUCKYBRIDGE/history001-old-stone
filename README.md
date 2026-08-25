# history001-old-stone

초등학생용 **신체화 1인칭 구석기 역사 체험 웹게임** 프로젝트 저장소다.

GitHub가 기획·코드·테스트·플레이 관찰·교과 연결·아트 맥락·인수인계를 관리하는 Single Source of Truth다.

## 프로젝트 한 문장

# **학생이 구석기 공동체 여러 사람의 몸과 눈으로 같은 시대의 삶을 살아보고, 사람·도구·불·먹을거리·거처·위험·이동을 실제 상황처럼 경험하면서 역사적 상상력과 교과 개념 이해로 이어지는 체험**

을 만든다.

기본 학습 흐름:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Naming / Conceptualization
```

교과 연결 흐름:

# **Experience → Name → Reuse → Connect**

핵심 용어를 숨기지 않지만, 먼저 경험하게 한 뒤 짧게 이름을 붙인다.

---

## 구석기 Curriculum Anchors

사용자가 제공한 5학년 사회 교과서의 구석기 부분을 현재 교과 기준으로 사용한다.

핵심:

- 뗀석기
- 주먹도끼
- 불의 이용
- 막집
- 동굴 / 바위 그늘 생활
- 먹을 것을 찾아 옮겨 다니는 생활
- 사냥·채집·생활 가공

예:

```text
R에게 돌도구를 받음
→ 내 손에 들어온 뒤 '뗀석기 · 주먹도끼'라고 짧게 명명
→ 계속 손에 들고 이동
→ 이후 생활 행동에서 재사용
→ 실제 유물과 연결
```

교과서 문장을 장문 팝업으로 복제하거나 바로 객관식 문제로 만들지 않는다.

---

## 역사 사실과 재구성

역사/교과 사실:

- 뗀석기 사용
- 주먹도끼의 다용도성
- 불 이용
- 막집
- 동굴/바위 그늘 생활
- 이동 생활

프로젝트 재구성:

- R/H1/H2라는 구체 인물
- R이 특정 아침에 주먹도끼를 건네는 사건
- Hunt 도중 넓은 동굴을 발견하는 사건
- 특정 대사·감정·결과

# **역사적 상상력은 사실과 가능한 삶의 조건 위에서 만든 재구성이다.**

---

## 기본 시각 문법

> **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 실제 주변 사람 + 현재 행동 + 빛/소리**

몸은 HUD가 아니다.

- 자세와 행동에 맞는 순간에 자연스럽게 보인다.
- 같은 역할 안에서 손/도구/광원 continuity를 유지한다.
- 핵심 유물은 카드보다 내 몸에 붙은 생활 물건으로 보인다.

---

## 역할 관점

역할 시작 시 현재 시점을 짧게 알려줄 수 있다.

예:

> **사냥을 나선 사람의 관점**

그 뒤에는 그 사람이 실제로 보고·듣고·알 수 있는 범위에서만 이야기가 진행된다.

Hunt 중에는 Camp에서 실제로 무슨 일이 일어나는지 전지적으로 알지 못한다.

---

## 관계와 감정

- 주변 인물은 반복해서 만나는 관계의 대상
- 관계는 호감도 숫자가 아니라 함께 겪은 사건의 기억
- 죄책감·후회·걱정·안도·책임감·공포·기대를 허용
- 학생 인격을 나쁜 사람으로 판정하거나 죄책감으로 숨겨진 정답을 강요하지 않음

안전은 감정 제거를 뜻하지 않는다.

---

## 선택과 결과

모든 선택이 똑같이 좋은 결과를 가질 필요는 없다.

# **Choice Fairness = 결과 평등이 아니라 결과의 납득 가능성**

선택의 흔적은

- 사람 반응
- 몸 상태
- 시간/거리
- 들고 있는 것
- 위험 경험
- 새로운 장소 발견
- 다음 관점

등에 남을 수 있다.

---

## 공포와 Screen Treatment

공포게임 같은 순간도 허용한다.

특히 Hunt에서는 어둠·시야 밖 소리·정체 모를 움직임·짧은 회피/도주·드문 strong accent가 가능하다.

원칙:

# **Subtle by default. Strong when earned.**

동굴도 항상 공포 던전으로 만들지 않는다.

- 비바람을 피할 수 있는 보호 가능성
- 어둠과 다른 동물 흔적의 위험 가능성

이 함께 존재할 수 있다.

---

## 막집과 동굴

`구석기 사람의 집 = 하나의 정답`으로 만들지 않는다.

현재 공동체는 임시 막집을 이용할 수 있고, 이동 중 동굴이나 바위 그늘 같은 자연 공간을 발견·이용할 수도 있다.

동굴 발견 event 예:

```text
큰 바위 아래 어두운 공간 발견
→ 가까이 감
→ 넓이 / 바닥 / 바람 / 어둠 / 흔적을 살핌
→ '머물기 괜찮을 수도 있겠다'고 판단
→ 바로 이사하지 않음
→ 이후 공동체가 다른 조건과 함께 재평가
```

---

## 같은 세계, 다른 몸

```text
Same Day 1
├─ Hunt — 멀어지는 몸 / 주먹도끼 / 위험 / 귀환
├─ Gather — 가까이 살피는 몸 / 채집 / 도구 재사용
└─ Camp — 불 / 막집 / 생활 손질 / 기다림
```

Student Play Order와 세계 시간은 다르다.

---

## 현재 Stage 07 Browser Skeleton

기본 `/` 화면은 R2 Stage 07 Curriculum Skeleton이다.

현재 proof:

```text
사냥 관점
→ 새벽 불
→ R에게 돌도구 받기
→ '뗀석기 · 주먹도끼' 짧은 cue
→ held-item continuity
→ H1/H2와 출발
→ crouch observation
→ 넓은 cave / rock-shelter 발견
→ 공간 살핌
→ '동굴 · 바위 그늘' 짧은 cue
→ 다른 관점 전환
```

package:

```text
0.0.0-r2-stage07-curriculum
```

개발 경로:

- `/` — Player
- `?teacher=1` — Teacher
- `?debug=1` — Debug
- `?legacy=1` — Legacy Hunt v0.1

현재 automated baseline:

- 8 test files
- 33 tests
- typecheck PASS
- production build PASS

자동 테스트는 실제 몰입과 교과 기억을 증명하지 않는다.

다음 공식 Gate:

# **R2 Stage 07 Teacher Browser Visual / Immersion / Curriculum QA**

---

## 반드시 읽을 문서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
7. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
8. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
9. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
10. `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
11. 해당 Stage 문서

공통 몰입:

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md`

기술:

- `docs/06_TECH_BLUEPRINT.md`

---

## 기술 방향

유지:

- React + TypeScript + Vite
- cinematic embodied first-person
- qualitative state/result
- Player/Teacher/Debug 분리

사용하지 않음:

- 자유 3D/FPS를 전제한 엔진
- 범용 NPC AI
- 호감도 시스템
- 대규모 대화 트리
- 점수/HP/EXP/ranking
- generic VFX engine
- generic Curriculum Engine
- 교과서 전체 DB
