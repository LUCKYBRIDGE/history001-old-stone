# 구석기 역사 체험 웹게임
## Canonical Baseline v1 — R2 Stage 07 Curriculum-Hardened Baseline

이 문서는 프로젝트의 **현재 기준선, 문서 위계, 공식 용어, 완료/미완료 경계**를 한곳에 고정한다.

새 세션은 과거 채팅이나 Audit 문서보다 이 기준선을 먼저 확인한다.

---

# 1. 현재 공식 기준선

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

현재 의미:

- Stage 01~06 설계 계약 정리 완료
- Stage 07 Embodied Curriculum Skeleton 구현 완료
- 자동 검증 완료
- Teacher Browser Human QA는 아직 미실시
- Stage 08 Hunt Embodied Vertical Slice는 Human Gate 통과 전 시작 금지

공식 다음 Gate:

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

---

# 2. 문서 위계

설계 충돌 시 다음 순서로 우선한다.

1. `docs/01_PROJECT_CORE.md`
2. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
3. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
4. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
5. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
6. `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
7. `docs/02_EXPERIENCE_STRUCTURE.md`
8. `docs/05_ROLE_EXPERIENCE_MAP.md`
9. 역할별 `*_STORY.md`
10. 역할별 `*_PLAYFLOW.md`
11. `docs/06_TECH_BLUEPRINT.md`
12. `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
13. `docs/00_DEVELOPMENT_WORKFLOW.md`
14. `PROJECT_STATUS.md` / `handoff/CURRENT_HANDOFF.md`

다음은 **기록/전환 참고 문서**이며 canonical 설계를 덮지 않는다.

- `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`
- `docs/R2_STAGE01_DEEP_AUDIT_REPORT.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`
- 과거 playtest/handoff 기록

---

# 3. 공식 학습 문법

전체 학습 흐름:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Naming / Conceptualization
```

교과 연결 흐름:

# **Experience → Name → Reuse → Connect**

뜻:

1. 먼저 세계 안에서 실제 물건/사람/공간/문제를 경험한다.
2. 핵심 교과 용어를 짧고 정확하게 붙인다.
3. 이후 다른 행동/역할에서 다시 사용하거나 재해석한다.
4. 마지막에 교과서 표현과 실제 유물/유적에 연결한다.

---

# 4. 공식 용어 사전

## 뗀석기

- 상위 도구 개념.
- 돌을 깨뜨리거나 떼어 만들어 사용한 도구를 가리키는 교과 용어.

## 주먹도끼

- `뗀석기`의 대표적인 구체 예.
- 프로젝트에서 사냥 전용 무기로 축소하지 않는다.
- 자르기·두들기기·땅파기 등 여러 생활 맥락을 후속 Stage에서 경험시킨다.

학생용 연결 예:

> **뗀석기**  
> 돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다. 지금 손에 든 것은 그 대표적인 예인 **주먹도끼**다.

금지:

- `뗀석기 = 주먹도끼`처럼 동의어로 표현
- `뗀석기 · 주먹도끼`만 병렬 제목으로 제시하고 관계를 설명하지 않음

## 현재 임시 거처

- Stage 07에서 학생이 처음 보는 현재 생활 공간을 가리키는 **비교적 중립적인 player-facing 표현**.
- 구체 형태가 충분히 경험·검증되기 전에 자동으로 `막집`이라고 단정하지 않는다.

## 막집

- 교과서 핵심 용어.
- Camp에서 임시 거처를 실제로 보고 손질한 뒤 짧게 명명하는 것을 기본 경로로 한다.

## 동굴 / 바위 그늘

- 자연 지형을 이용한 생활 공간.
- `구석기의 유일한 집`, `막집의 업그레이드`, `자동 정답 목적지`가 아니다.

---

# 5. 사실과 재구성의 공식 구분

## Historical / Curriculum Fact

교과서·유물·유적 등 근거가 직접 뒷받침하는 층.

예:

- 뗀석기 사용
- 주먹도끼의 다용도성
- 먹을 것을 찾아 옮겨 다니는 생활
- 막집
- 동굴/바위 그늘 생활
- 불의 이용

## Reconstructed Event

역사적 조건 안에서 체험을 위해 만든 구체 사건.

예:

- R/H1/H2라는 인물
- R이 특정 아침에 주먹도끼를 건네는 사건
- Hunt 중 특정 동굴 후보를 발견하는 사건
- 구체 대사·감정·선택 결과

Player flow를 매번 `[재구성]` 라벨로 끊지 않는다.
Teacher/Debug에서는 사실/재구성 경계를 확인할 수 있어야 한다.

---

# 6. 같은 하루 규칙

# **Student Play Order ≠ In-World Time**

```text
Same Day 1
├─ Hunt perspective
├─ Gather perspective
└─ Camp perspective
```

- 역할 완료는 플레이 진행 상태다.
- 역할 완료마다 세계 시간이 하루씩 증가하지 않는다.
- 역할 순서가 달라도 동일 `dayId`를 공유한다.
- 한 역할의 결과가 다른 역할에서 이미 일어난 과거를 소급 변경하지 않는다.

---

# 7. 역할별 공식 문법

## Hunt

거리 / 흔적 / 주먹도끼 / 추적 / 불확실성 / 자연 위험 / 새 장소 / 귀환

## Gather

가까운 관찰 / 채집 / 도구 재사용 / 가공 / 반복 / 공간 기억 / 범위 확대

## Camp

불 / 현재 임시 거처와 막집 / 생활 유지 / 가공 / 시간 / 빈자리 / 기다림 / 재회 / 새 거처 후보 재평가

세 역할은 같은 미니게임 문법을 복제하지 않는다.

---

# 8. 화면·감정 공식 기준

Embodied First-Person:

> **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 주변 사람 + 현재 행동 + 빛/소리**

Screen Treatment:

# **Subtle by default. Strong when earned.**

관계/감정:

- 공포·죄책감·후회·걱정·안도·성취를 역사적 상황에서 자연스럽게 허용한다.
- 감정을 학생 인격 점수로 바꾸지 않는다.

Choice Fairness:

# **결과 평등이 아니라 결과의 납득 가능성**

---

# 9. Stage 07 현재 구현 경계

현재 Browser Skeleton은 다음을 proof 한다.

```text
사냥 관점
→ 새벽 불 + 현재 임시 거처
→ R의 돌도구 전달
→ 뗀석기 상위 개념 + 주먹도끼 대표 예 명명
→ held-item continuity
→ H1/H2와 출발
→ 현재 거처가 멀어짐
→ 몸 낮춰 지면 관찰
→ 한동안 이동
→ 동굴/바위 그늘 후보 발견
→ 장점/불확실성 살핌
→ 동굴/바위 그늘 용어 연결
→ 다른 사람 관점 전환 proof
```

Stage 07이 아직 증명하지 않은 것:

- 주먹도끼의 실제 다용도 interaction
- 막집 정식 명명과 거처 손질
- 불의 여러 기능을 행동으로 충분히 체험
- 완성된 Hunt 추적/공포/결과/귀환
- 실제 학생의 개념 이해
- 실제 시각 몰입 품질

---

# 10. 기술 용어

## Curriculum Anchor

교과 핵심 개념과 구현/QA를 연결하는 안정 ID.
학생에게 internal ID는 노출하지 않는다.

## Terminology Reveal

경험 뒤 짧게 이름을 붙이는 player-facing beat.

## Learning Evidence

학생 점수가 아니라 자동검증/QA를 위한 내부 증거.

## Scene

목표·직접 행동·위치·결과·관계/world memory가 의미 있게 변하는 상태 단위.

## Beat

시선·정적·대사·손 움직임·용어 reveal·화면 효과 같은 Scene 내부 표현 변화.

# **Scene ≠ Beat**

---

# 11. 완료 판정 용어

- **Design PASS**: 설계 문서 계약이 정리됨.
- **Implementation Complete**: 해당 범위 코드가 존재함.
- **Automated PASS**: install/typecheck/tests/build 통과.
- **Human QA PASS**: 실제 브라우저 플레이로 시각·몰입·교과·오개념 Gate 통과.
- **Stage Complete**: 그 Stage가 요구하는 Design/Implementation/Automated/Human Gate가 모두 충족됨.

현재 Stage 07은:

# **Implementation Complete / Automated PASS / Human QA Pending**

따라서 전체 Stage 07을 `완료`라고 부르지 않는다.

---

# 12. 변경 규칙

새 리비전에서 반드시 확인한다.

- 한 개념에 서로 다른 공식 용어가 생기지 않았는가?
- 구형 버전 예시가 최신 계약보다 앞서 읽히지 않는가?
- Audit/Legacy 문서가 canonical 문서를 덮지 않는가?
- 문서의 테스트 수/현재 Gate/버전이 실제 저장소와 일치하는가?
- 학생 화면과 Teacher/Debug 관리 정보가 분리되는가?
- 구현했다고 학습 완료로 과장하지 않는가?

이 문서는 그 판정을 위한 프로젝트 기준선이다.
