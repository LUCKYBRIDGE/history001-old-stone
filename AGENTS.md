# AGENTS.md

이 저장소는 초등학생용 **구석기 신체화 1인칭 역사 체험 웹게임**의 Single Source of Truth다.

현재 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

정확한 기준선·문서 위계·공식 용어·완료 판정은 가장 먼저:

- `docs/00_CANONICAL_BASELINE.md`

를 따른다.

기존 Hunt v0.1은 **Legacy Functional Prototype**으로만 보존한다.

---

# 1. 새 작업 세션 시작 순서

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. `docs/01_PROJECT_CORE.md`
7. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
8. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
9. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
10. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
11. `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
12. 해당 Stage canonical 문서
13. 관련 코드/tests

Audit/Legacy 문서는 필요할 때만 참고한다.

- `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`
- `docs/R2_STAGE01_DEEP_AUDIT_REPORT.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`

과거 채팅 기억보다 GitHub 최신 canonical 문서를 우선한다.

---

# 2. 핵심 정체성

학생이 구석기 시대를 밖에서 관찰하는 자료가 아니다.

# **학생이 공동체 구성원의 몸과 눈으로 그 순간을 살아보고, 다른 사람의 관점도 경험하면서 당시 삶의 조건·도구·감정·관계·위험·판단을 역사적으로 상상하고 이해하게 한다.**

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

# 3. Curriculum / Textbook Anchor Guardrail

현재 핵심 Anchor:

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

학생용 연결 예:

> **뗀석기**  
> 돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다. 지금 손에 든 것은 그 대표적인 예인 **주먹도끼**다.

금지:

- `뗀석기 = 주먹도끼`처럼 동의어화
- 시작부터 유물 목록 제시
- 장문의 교과서 모달
- 즉시 객관식/OX 퀴즈
- 모든 사물 상시 이름표
- 교과 Anchor 때문에 관계·위험·스토리를 정지

---

# 4. 거처 용어 통일

## 현재 임시 거처

Stage 07에서 현재 공동체 생활 공간을 처음 보여줄 때 사용하는 중립적 표현.

## 막집

교과서 핵심 용어. Camp에서 실제 임시 거처를 보고/손질한 뒤 명명하는 것을 기본 경로로 한다.

## 동굴 / 바위 그늘

자연 지형을 이용한 생활 공간.

# **막집도 맞고 동굴/바위 그늘도 맞다. 둘을 경쟁 정답으로 만들지 않는다.**

동굴은:

- 구석기의 유일한 집이 아님
- 막집의 업그레이드가 아님
- 자동 새 집 판정이 아님
- 자동 공포 던전도 아님

---

# 5. Historical Integrity

두 층을 구분한다.

## Historical / Curriculum Fact

- 뗀석기 사용
- 주먹도끼의 다용도성
- 이동 생활
- 막집
- 동굴/바위 그늘 생활
- 불 이용

## Reconstructed Event

- R/H1/H2라는 구체 인물
- R이 특정 아침에 주먹도끼를 건네는 사건
- 특정 Hunt에서 동굴 후보를 발견하는 사건
- 구체 대사·감정·선택 결과

Player를 매번 `[재구성]` 라벨로 끊지 않는다.
Teacher/Debug에서는 사실/재구성 경계를 확인 가능하게 한다.

---

# 6. Same-Day Time Guardrail

# **Student Play Order ≠ In-World Time**

```text
Same Day 1
├─ Hunt
├─ Gather
└─ Camp
```

- 역할 완료는 플레이 진행 상태.
- 역할 완료마다 세계 시간이 하루씩 전진하지 않음.
- 역할 순서를 바꿔도 동일 `dayId`.
- 한 역할의 결과가 다른 역할의 이미 일어난 과거를 소급 변경하지 않음.
- 세 관점 뒤 Common Evening 한 번.

---

# 7. Role-True Perspective

역할 시작 시 현재 관점을 짧게 알려줄 수 있다.

예:

> **사냥을 나선 사람의 관점**

이후 player-facing 정보는 그 인물이 실제로:

- 보는 것
- 듣는 것
- 이미 아는 것
- 주변 사람이 드러낸 것

범위 안에서만 제공한다.

---

# 8. Embodied First-Person

기본 화면:

# **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 주변 사람 + 행동 + 빛/소리**

- 몸은 HUD가 아니다.
- 모든 장면 아래에 손 PNG를 고정하지 않는다.
- pose에 따라 보이는 몸이 달라진다.
- 같은 역할에서 몸/도구/광원 continuity를 유지한다.
- 사람과 내 몸이 같은 공간처럼 보여야 한다.

---

# 9. 주먹도끼 Guardrail

주먹도끼를 사냥 전용 무기로 축소하지 않는다.

```text
받음
→ 뗀석기 상위 개념 + 주먹도끼 대표 예 명명
→ 손에 계속 보임
→ Stage 08 이후 실제 생활 행동에서 재사용
→ 다른 역할/저녁에서 다시 등장
```

단순 receive proof와 실제 다용도 사용 evidence를 구분한다.

---

# 10. 관계와 Emotional Reality

관계는 호감도 점수가 아니라 함께 겪은 사건의 기억과 이후 반응이다.

허용:

- 기대
- 흥분
- 두려움/공포
- 걱정
- 책임감
- 죄책감/후회
- 아쉬움
- 성취감
- 안도

# **안전 = 감정 제거가 아니다.**

피할 것:

- NPC 모욕/조롱
- 학생 인격 판정
- 죄책감만으로 숨겨진 정답 강요
- 호감도/도덕 점수

---

# 11. Choice / Consequence

# **Choice Fairness = 결과 평등이 아니라 결과의 납득 가능성**

- 판단에 필요한 정보가 선택 전에 존재해야 함.
- 결과는 앞선 조건과 연결되어야 함.
- 더 나쁜 결과/후회도 가능.
- 필수 교과 개념을 특정 선택 하나가 독점하지 않음.

---

# 12. Threat / Horror

공포게임 같은 순간을 허용한다.

가능:

- 어둠
- 시야 밖 소리/움직임
- 갑작스러운 정지
- 미지의 동굴 안쪽
- 가까워지는 위험
- 짧은 놀람
- 회피/도주
- rare strong-accent

공포는 역사적 상황·자연의 불확실성과 연결한다.

---

# 13. Screen Treatment

# **Subtle by default. Strong when earned.**

가능:

- fire warmth
- dusk shift
- cave exposure
- focus/vignette
- sway/jolt
- blink/fade
- 짧은 red/dark accent

Reduced Effects에서도 같은 사건·판단·학습이 유지돼야 한다.

---

# 14. Scene ≠ Beat

## Scene

목표·직접 행동·위치·시간·결과·관계/world memory가 의미 있게 변하는 상태 단위.

## Beat

시선·정적·대사·손 transition·용어 reveal·화면 효과 같은 Scene 내부 표현 변화.

# **모든 연출/용어 reveal을 reducer state로 만들지 않는다.**

---

# 15. 역할 경계

## Hunt

거리 / 흔적 / 주먹도끼 / 추적 / 자연 위험 / 새 장소 / 귀환

## Gather

가까운 관찰 / 채집 / 도구 재사용 / 가공 / 공간 기억 / 범위 확대

## Camp

불 / 현재 임시 거처와 막집 / 생활 유지 / 가공 / 기다림 / 재회 / 새 거처 후보 재평가

Hunt의 추적/공포 문법을 Gather/Camp에 복제하지 않는다.

---

# 16. 기술 구조

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

유지:

- React + TypeScript + Vite
- role feature 독립
- qualitative `RoleCompletion`
- explicit small state
- stable checkpoint

금지:

- generic Scene Engine
- generic Curriculum Engine
- 범용 NPC AI
- 대규모 Dialogue Engine
- procedural narrative
- FPS/3D 엔진 선행
- generic VFX engine
- 전역 관계 점수

---

# 17. Curriculum Runtime 용어

- **Curriculum Anchor**: 교과 개념과 구현/QA를 연결하는 내부 안정 ID.
- **Terminology Reveal**: 경험 뒤 학생에게 짧게 이름을 붙이는 beat.
- **Learning Evidence**: 학생 점수가 아니라 자동검증/QA 내부 증거.

상위 개념+구체 예를 한 cue에서 연결할 때는 복수 anchor를 허용한다.

```text
paleolithic-chipped-stone
+ handaxe
```

학생에게 internal ID는 노출하지 않는다.

---

# 18. Player / Teacher / Debug

Player에 금지:

- Stage 번호
- exact reducer state
- evidence ID
- internal curriculum anchor ID
- 개발 toolbar
- reconstruction 관리 metadata

Player에 허용:

- 짧은 역할 orientation
- 직접 행동
- 짧은 terminology reveal

개발 환경:

- `?legacy=1` — Legacy Hunt v0.1
- `?teacher=1` — Teacher surface
- `?debug=1` — Debug surface

---

# 19. 현재 Stage 07 범위

```text
사냥 관점
→ 새벽 불 + 현재 임시 거처
→ R의 도구 전달
→ 뗀석기 → 대표적인 예: 주먹도끼
→ 동행 합류/출발
→ 현재 거처가 멀어짐
→ 몸 낮춰 관찰
→ 한동안 이동
→ 동굴/바위 그늘 후보 발견
→ 공간 평가 + 짧은 교과 연결
→ 다른 사람 관점 전환 proof
```

이것은 전체 Hunt가 아니다.

현재 판정:

# **Implementation Complete / Automated PASS / Human QA Pending**

---

# 20. 현재 다음 공식 Gate

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

이 Gate에서 최소 확인:

- body/item spatial relation
- R/H1/H2 존재감
- 현재 임시 거처가 집 아이콘처럼 보이지 않는지
- `뗀석기 → 주먹도끼` 관계 이해
- terminology reveal의 몰입 영향
- cave 발견의 공간감/거리감
- cave 장점과 불확실성
- 사실/재구성 구분
- reduced effects parity
- 핵심 오개념 여부

Human Gate 통과 전 Stage 08 전체 Hunt 확장 금지.

---

# 21. 완료 판정

- Design PASS
- Implementation Complete
- Automated PASS
- Human QA PASS
- Stage Complete

자동 CI만으로 `Immersion Complete` 또는 `Curriculum Complete`를 선언하지 않는다.

---

# 22. 세션 종료

코드/설계를 변경했다면:

1. 관련 canonical 문서 업데이트
2. typecheck
3. tests
4. production build
5. `PROJECT_STATUS.md`
6. `handoff/CURRENT_HANDOFF.md`
7. `handoff/TEST_REPORT.md`
8. 실제 GitHub SHA/CI 확인

최신 상태를 과장하지 않고 기록한다.
