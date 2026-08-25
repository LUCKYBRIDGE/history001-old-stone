# AGENTS.md

이 저장소는 초등학생용 **구석기 신체화 1인칭 역사 체험 웹게임**의 Single Source of Truth다.

현재 기준은:

# **Design Reboot R2 / Stage 01~07 Curriculum Anchor Revision**

이다.

기존 Hunt v0.1은 Legacy Functional Prototype으로 보존한다.

---

# 1. 새 작업 세션 시작 순서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`
6. `docs/01_PROJECT_CORE.md`
7. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
8. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
9. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
10. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
11. `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
12. 이번 작업의 Stage 문서
13. 관련 코드/tests

과거 채팅 기억보다 GitHub 최신 문서를 우선한다.

---

# 2. 문서 위계

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
13. 구현 브리프/handoff

하위 문서와 코드가 상위 원칙과 충돌하면 상위 기준을 우선한다.

---

# 3. 프로젝트 정체성

학생이 구석기 시대를 밖에서 관찰하는 자료가 아니다.

# **학생이 공동체 구성원의 몸과 눈으로 그 순간을 살아보고, 다른 사람의 관점도 경험하면서 당시 삶의 조건·도구·감정·관계·판단을 역사적으로 상상하고 이해하게 한다.**

학습 흐름:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Naming / Conceptualization
```

---

# 4. Curriculum / Textbook Anchor Guardrail

교과서 핵심을 분명히 짚되 스토리를 교과서 퀴즈로 만들지 않는다.

구석기 핵심 Anchor:

- 뗀석기
- 주먹도끼
- 불의 이용
- 막집
- 동굴 / 바위 그늘 생활
- 먹을 것을 찾아 옮겨 다니는 생활
- 사냥·채집·생활 가공

기본 문법:

# **Experience → Name → Reuse → Connect**

예:

```text
R에게 돌도구를 받음
→ 손에 들어온 뒤 '뗀석기 · 주먹도끼'를 짧게 명명
→ 이후 실제 생활 행동에서 다시 사용
→ 후속 개념화에서 교과서/실제 유물과 연결
```

금지:

- 시작부터 유물 목록 제시
- 장문의 교과서 모달
- 즉시 객관식/OX 퀴즈
- 모든 사물에 이름표 상시 표시
- 교과서 Anchor 때문에 관계/위험/스토리를 정지

---

# 5. Historical Integrity

- 확인 가능한 역사 사실과 재구성을 구분한다.
- 교과서가 뒷받침하는 핵심 사실은 Learning Invariant로 보존한다.
- R/H1/H2, 특정 하루의 동굴 발견 같은 개인 서사는 `[재구성]`이다.
- 재구성을 시대 전체의 보편 규칙으로 단정하지 않는다.
- 구체 동물 종/식생/의복/친족 구조는 근거 검토 전 확정하지 않는다.
- Historical Imagination은 판타지가 아니라 **당시 조건 안에서 가능한 삶을 상상하는 것**이다.

---

# 6. Same-Day Time Guardrail

# **Student Play Order ≠ In-World Time**

Hunt → Gather → Camp는 세계 안에서 세 날이 아니다.

- 같은 공동체의 같은 `day-1`
- 역할 완료는 학생이 그 관점을 플레이했다는 의미
- 역할 완료마다 세계 시간이 하루씩 전진하지 않음
- 다른 역할의 과거를 cross-role signal로 소급 변경하지 않음
- 세 역할 관점 완료 뒤 Common Evening 한 번
- multi-day progression은 그 뒤에만 시작

---

# 7. Role-True Perspective

역할 진입 시 현재 관점을 짧게 알려줄 수 있다.

예:

> 사냥을 나선 사람의 관점

이후 player-facing 정보는 그 인물이 실제로:

- 보는 것
- 듣는 것
- 이미 아는 것
- 주변 사람이 드러낸 것

범위 안에서만 제공한다.

다른 관점에서 나중에 새롭게 알게 되는 구조를 유지한다.

---

# 8. Embodied First-Person

기본 화면:

# **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 사람 + 행동 + 빛/소리**

원칙:

- 몸은 HUD가 아니다.
- 모든 장면 아래에 손 PNG를 고정하지 않는다.
- pose에 따라 보이는 몸이 달라진다.
- 같은 역할에서 손/도구/시점/광원 continuity를 유지한다.
- 사람과 내 몸이 같은 공간처럼 보여야 한다.
- 핵심 유물은 카드보다 몸에 붙은 물건으로 반복된다.

---

# 9. 주먹도끼 Guardrail

주먹도끼를 사냥 무기 하나로 축소하지 않는다.

프로젝트에서의 학습 경로:

```text
받음
→ 뗀석기/주먹도끼 명명
→ 손에 계속 보임
→ 땅파기·두들기기·자르기/손질 등 역사적으로 타당한 생활 사용
→ 다른 역할/저녁에서 다시 등장
```

단순 receive proof와 실제 기능 사용 evidence를 구분한다.

---

# 10. 거처 Guardrail

# **막집도 맞고, 동굴/바위 그늘도 맞다.**

둘을 경쟁 정답으로 만들지 않는다.

- 막집: 임시로 비바람을 피하는 생활 공간
- 동굴/바위 그늘: 자연 지형을 이용한 생활 공간

동굴 발견 장면은 다음처럼 설계한다.

```text
먼저 공간을 발견
→ 넓이/바닥/바람/어둠/흔적을 살핌
→ 생활하기 괜찮을 가능성을 판단
→ 짧게 역사 개념 연결
```

동굴을 무조건 좋은 새 집 또는 공포 던전으로 만들지 않는다.

---

# 11. 관계와 Emotional Reality

관계는 호감도 점수가 아니라 **함께 겪은 사건의 기억과 이후 반응**이다.

허용 가능한 감정:

- 기대
- 흥분
- 두려움
- 공포
- 걱정
- 책임감
- 죄책감
- 후회
- 아쉬움
- 성취감
- 안도
- 새로운 장소에 대한 기대/경계

# **안전 = 감정 제거가 아니다.**

피할 것:

- NPC 모욕/조롱
- 학생 인격을 나쁜 사람으로 판정
- 죄책감만으로 숨겨진 정답 강요
- 호감도/도덕 점수

---

# 12. Choice / Consequence

모든 선택이 같은 결과를 가질 필요는 없다.

# **Choice Fairness = 결과 평등이 아니라 결과의 납득 가능성**

확인:

- 판단에 필요한 정보가 있었는가?
- 결과가 앞선 조건과 연결되는가?
- 결과가 사람/몸/시간/거리/감정/후속 관점에 남는가?
- 필수 교과 개념이 선택 하나에만 갇히지 않는가?

---

# 13. Threat / Horror

공포게임 같은 순간을 허용한다.

특히 Hunt에서:

- 어둠
- 시야 밖 소리/움직임
- 갑작스러운 정지
- 동굴 안쪽의 미지
- 가까워지는 위험
- 짧은 놀람
- 회피/도주
- rare strong-accent

가능.

동굴을 항상 공포 장소로 고정하지 않는다.

# **보호 가능성과 위험 가능성이 동시에 있을 수 있다.**

---

# 14. Screen Treatment

원칙:

# **Subtle by default. Strong when earned.**

가능:

- fire warmth
- dusk shift
- cave entrance/interior exposure
- focus/vignette
- sway/jolt
- blink/fade
- 짧은 red/dark accent

Reduced Effects에서도 같은 사건·판단·학습이 유지되어야 한다.

---

# 15. Scene ≠ Beat

## Scene

state/reducer에 올릴 가치가 있는 의미 변화:

- 목표
- 직접 행동
- 위치/시간
- consequence
- relationship/world memory

## Beat

같은 Scene 안의 짧은 연출:

- actor stop
- gaze
- sound drop
- dialogue
- focus/jolt
- body shift
- curriculum terminology reveal

# **모든 연출/용어 reveal을 reducer stage로 만들지 않는다.**

---

# 16. 역할 경계

## Hunt

거리 / 흔적 / 주먹도끼 / 추적 / 자연 위험 / 동굴 발견 가능성 / 귀환

## Gather

가까운 관찰 / 채집 / 도구 재사용 / 반복 탐색 / 공간 기억 / 범위 확대

## Camp

불 / 막집 / 생활 유지 / 가공 / 같은 공간의 시간 변화 / 기다림 / 재회 / 새 거처 후보 논의

Hunt의 추적/공포 문법을 Gather/Camp에 복제하지 않는다.

---

# 17. 기술 구조

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
- simple qualitative `RoleCompletion`
- explicit small state
- stable checkpoint

금지:

- 범용 Scene Engine
- generic Curriculum Engine
- 범용 NPC AI
- 대규모 Dialogue Engine
- procedural narrative
- FPS/3D 엔진 선행
- generic VFX engine
- 전역 관계 점수

---

# 18. Player / Teacher / Debug

Player에 금지:

- Stage 번호
- reducer exact state
- debug evidence
- 내부 curriculum anchor ID
- 개발 toolbar

Player에 허용:

- 현재 역할 관점의 짧은 표시
- 짧은 교과 terminology reveal

개발 환경:

- `?legacy=1` — Legacy Hunt v0.1
- `?teacher=1` — teacher surface
- `?debug=1` — debug surface

---

# 19. 현재 Stage 07 범위

R2 Stage 07 Skeleton은 다음 proof를 담당한다.

```text
사냥 관점
→ 새벽 불
→ 도구 전달
→ 뗀석기/주먹도끼 짧은 reveal
→ 동행 합류
→ 출발
→ 몸 낮춰 지면 관찰
→ 동굴/바위 그늘 후보 발견
→ 공간 살핌 + 짧은 교과 연결
→ 다른 사람 관점 전환 proof
```

이것은 전체 Hunt가 아니다.

Human QA가 남아 있다.

---

# 20. 현재 다음 공식 Gate

# **R2 Stage 07 — Teacher Browser Visual/Immersion/Curriculum QA**

확인:

- 실제 시야 같은가
- 몸/사람 공간감
- 도구 전달
- 주먹도끼 reveal이 몰입을 깨지 않는가
- 도구 continuity
- cave가 실제 공간처럼 보이는가
- cave의 장점/불확실성이 자연스럽게 읽히는가
- `동굴/바위 그늘` cue가 너무 교과서 카드 같지 않은가
- reduced effects
- perspective transition
- player에 dev info 미노출

기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

Stage 08은 이 human Gate 통과 전 시작하지 않는다.

---

# 21. 저장소 변경 세션 종료 시

필요한 문서 갱신:

- `PROJECT_STATUS.md`
- `CHANGELOG.md`
- `handoff/CURRENT_HANDOFF.md`
- 테스트 시 `handoff/TEST_REPORT.md`
- 미해결 시 `handoff/KNOWN_ISSUES.md`
- 자산 요구 변경 시 `handoff/ASSET_REQUESTS.md`

코드 변경 시 최소:

- typecheck
- tests
- production build

자동 CI만으로 Immersion Complete 또는 Curriculum Complete를 선언하지 않는다.
