# history001-old-stone

초등학생용 **신체화 1인칭 구석기 역사 체험 웹게임** 프로젝트다.

GitHub가 기획·코드·테스트·플레이 관찰·교과 연결·아트 맥락·인수인계를 관리하는 Single Source of Truth다.

현재 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

가장 먼저 읽을 기준:

- `AGENTS.md`
- `docs/00_CANONICAL_BASELINE.md`
- `PROJECT_STATUS.md`

---

## 프로젝트 한 문장

# **학생이 구석기 공동체 여러 사람의 몸과 눈으로 같은 시대의 삶을 살아보고, 사람·도구·불·먹을거리·거처·위험·이동을 실제 상황처럼 경험하면서 역사적 상상력과 교과 개념 이해로 이어지는 체험**

을 만든다.

학습 흐름:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Naming / Conceptualization
```

교과 연결 흐름:

# **Experience → Name → Reuse → Connect**

---

## 구석기 Curriculum Anchors

현재 사용자가 제공한 5학년 사회 교과서 구석기 부분을 교과 기준으로 사용한다.

핵심:

- 뗀석기
- 주먹도끼
- 불의 이용
- 막집
- 동굴 / 바위 그늘 생활
- 먹을 것을 찾아 옮겨 다니는 생활
- 사냥·채집·생활 가공

정확한 관계:

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

좋은 연결:

```text
R에게 돌도구를 받음
→ 손에 들어옴
→ '뗀석기'라는 상위 개념을 짧게 명명
→ 지금 손의 대표적인 예가 '주먹도끼'임을 연결
→ 손에 계속 들고 이동
→ Stage 08 이후 실제 생활 행동에서 재사용
→ 실제 유물/교과 개념과 연결
```

`뗀석기`와 `주먹도끼`를 동의어처럼 병렬 제시하지 않는다.

---

## 역사 사실과 재구성

### Historical / Curriculum Fact

- 뗀석기 사용
- 주먹도끼의 다용도성
- 불 이용
- 막집
- 동굴/바위 그늘 생활
- 이동 생활

### Reconstructed Event

- R/H1/H2라는 구체 인물
- R이 특정 아침에 주먹도끼를 건네는 사건
- Hunt 도중 특정 자연 거처 후보를 발견하는 사건
- 특정 대사·감정·선택 결과

# **역사적 상상력은 사실과 당시 가능한 삶의 조건 위에서 만든 재구성이다.**

---

## 기본 시각 문법

# **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 주변 사람 + 현재 행동 + 빛/소리**

- 몸은 HUD가 아니다.
- 자세와 행동에 따라 보이는 신체부위가 달라진다.
- 같은 역할 안에서 몸/도구/광원 continuity를 유지한다.
- 핵심 유물은 카드보다 내 몸에 붙은 생활 물건으로 보인다.

---

## 역할 관점

역할 시작 시 현재 시점을 짧게 알려줄 수 있다.

예:

> **사냥을 나선 사람의 관점**

그 뒤에는 그 사람이 실제로 보고·듣고·알 수 있는 범위에서 진행한다.

```text
Same Day 1
├─ Hunt
├─ Gather
└─ Camp
```

# **Student Play Order ≠ In-World Time**

---

## 거처 용어

- **현재 임시 거처**: Stage 07에서 처음 보는 현재 생활 공간의 중립적 표현
- **막집**: Camp에서 실제 거처 생활/손질 뒤 명명할 핵심 교과 용어
- **동굴 / 바위 그늘**: 자연 지형을 이용한 생활 공간

막집과 동굴을 경쟁 정답으로 만들지 않는다.

동굴은 자동 새 집도, 자동 공포 던전도 아니다.

---

## 관계·감정·선택

관계는 호감도 숫자가 아니라 함께 겪은 사건의 기억이다.

공포·죄책감·후회·걱정·안도·책임감·성취감 등을 역사적 상황에서 자연스럽게 허용한다.

# **Choice Fairness = 결과 평등이 아니라 결과의 납득 가능성**

---

## 공포와 Screen Treatment

공포게임 같은 순간도 허용한다.

원칙:

# **Subtle by default. Strong when earned.**

가능:

- 불의 따뜻한 색
- 해질녘 명암 변화
- 동굴 입구/안쪽 노출 차이
- focus/vignette
- 미세 sway/jolt
- blink/fade
- 드문 red/dark accent

Reduced Effects에서도 같은 정보와 진행이 유지돼야 한다.

---

## 현재 Stage 07 Browser Skeleton

기본 `/` 화면은 Stage 07 Curriculum-Hardened Skeleton이다.

현재 proof:

```text
사냥 관점
→ 새벽 불 + 현재 임시 거처
→ R에게 돌도구 받기
→ 뗀석기 → 대표적인 예: 주먹도끼
→ held-item continuity
→ H1/H2와 출발
→ 현재 거처가 멀어짐
→ 몸 낮춰 지면 관찰
→ 한동안 더 이동
→ 동굴/바위 그늘 후보 발견
→ 공간 장점/불확실성 살핌
→ 동굴/바위 그늘 용어 연결
→ 다른 사람 관점 전환
```

이것은 전체 Hunt가 아니다.

개발 경로:

- `/` — Player
- `?teacher=1` — Teacher
- `?debug=1` — Debug
- `?legacy=1` — Legacy Hunt v0.1

현재 자동 기준선은 `PROJECT_STATUS.md`와 `handoff/TEST_REPORT.md`를 따른다.

다음 공식 Gate:

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

---

## 기술 방향

유지:

- React + TypeScript + Vite
- cinematic embodied first-person
- qualitative state/result
- Player/Teacher/Debug 분리

사용하지 않음:

- 자유 3D/FPS를 전제한 엔진
- generic Scene/Curriculum/NPC/VFX engine
- 호감도 시스템
- 대규모 대화 트리
- 점수/HP/EXP/ranking
- 교과서 전체 DB
