# AGENTS.md

이 저장소는 초등학생용 **구석기 신체화 1인칭 역사 체험 웹게임**의 Single Source of Truth다.

현재 기준은:

# **Design Reboot R2 / Stage 01~07 Sequential Audit**

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
11. 이번 작업의 Stage 문서
12. 관련 코드/tests

과거 채팅 기억보다 GitHub 최신 문서를 우선한다.

---

# 2. 문서 위계

1. `docs/01_PROJECT_CORE.md`
2. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
3. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
4. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
5. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
6. `docs/02_EXPERIENCE_STRUCTURE.md`
7. `docs/05_ROLE_EXPERIENCE_MAP.md`
8. 역할별 `*_STORY.md`
9. 역할별 `*_PLAYFLOW.md`
10. `docs/06_TECH_BLUEPRINT.md`
11. `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
12. 구현 브리프/handoff

하위 문서와 코드가 상위 원칙과 충돌하면 상위 기준을 우선한다.

---

# 3. 프로젝트 정체성

학생이 구석기 시대를 밖에서 관찰하는 자료가 아니다.

# **학생이 공동체 구성원의 몸과 눈으로 그 순간을 살아보고, 다른 사람의 관점도 경험하면서 당시 삶의 조건·감정·관계·판단을 역사적으로 상상하고 이해하게 한다.**

학습 흐름:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Conceptualization
```

Reflection은 필요한 곳에서 사용하지만 모든 역할 뒤에 강제하지 않는다.

---

# 4. Historical Integrity

- 확인 가능한 역사 사실과 재구성을 구분한다.
- 개인 서사는 `[재구성]`일 수 있다.
- 재구성을 시대 전체의 보편 규칙으로 단정하지 않는다.
- 구체 동물 종/도구/식생/의복/친족 구조는 근거 검토 전 확정하지 않는다.
- Historical Imagination은 판타지가 아니라 **당시 조건 안에서 가능한 삶을 상상하는 것**이다.

---

# 5. Same-Day Time Guardrail

# **Student Play Order ≠ In-World Time**

Hunt → Gather → Camp는 세계 안에서 세 날이 아니다.

- 같은 공동체의 같은 `day-1`
- 역할 완료는 학생이 그 관점을 플레이했다는 의미
- 역할 완료마다 세계 시간이 하루씩 전진하지 않음
- 다른 역할의 과거를 cross-role signal로 소급 변경하지 않음
- 세 역할 관점 완료 뒤 Common Evening 한 번
- multi-day progression은 그 뒤에만 시작

---

# 6. Role-True Perspective

역할 진입 시 현재 관점을 짧게 알려줄 수 있다.

예:

> 사냥을 나선 사람의 관점

이후 player-facing 정보는 그 인물이 실제로:

- 보는 것
- 듣는 것
- 이미 아는 것
- 주변 사람이 드러낸 것

범위 안에서만 제공한다.

금지:

- 다른 장소의 동시 사건 전지적 노출
- 타인의 속마음 설명
- 미래 결과 미리 설명

다른 관점에서 나중에 새롭게 알게 되는 구조를 유지한다.

---

# 7. Embodied First-Person

기본 화면:

# **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 사람 + 행동 + 빛/소리**

원칙:

- 몸은 HUD가 아니다.
- 모든 장면 아래에 손 PNG를 고정하지 않는다.
- pose에 따라 보이는 몸이 달라진다.
- 같은 역할에서 손/도구/시점/광원 continuity를 유지한다.
- 사람과 내 몸이 같은 공간처럼 보여야 한다.
- 몸 외형으로 근거 없는 성별 역할 분업을 가르치지 않는다.

---

# 8. 관계와 Emotional Reality

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

# **안전 = 감정 제거가 아니다.**

피할 것:

- NPC 모욕/조롱
- 복합 상황을 학생 인격의 잘못으로 단정
- 죄책감만으로 숨겨진 정답 강요
- 호감도/도덕 점수

---

# 9. Choice / Consequence

모든 선택이 같은 결과를 가질 필요는 없다.

# **Choice Fairness = 결과 평등이 아니라 결과의 납득 가능성**

확인:

- 판단에 필요한 정보가 있었는가?
- 결과가 앞선 조건과 연결되는가?
- 불확실성이 있어도 자의적인 벌은 아닌가?
- 결과가 사람/몸/시간/거리/감정/후속 관점에 남는가?

큰 플롯은 재수렴할 수 있지만 선택 의미를 지우지 않는다.

---

# 10. Threat / Horror

공포게임 같은 순간을 허용한다.

특히 Hunt에서:

- 어둠
- 시야 밖 소리/움직임
- 갑작스러운 정지
- 가까워지는 위험
- 짧은 놀람
- 회피/도주
- rare strong-accent

가능.

피할 것:

- 고어 자체를 핵심 볼거리로 삼기
- 의미 없는 jump scare 반복
- enemy HP / 처치 루프
- 공포만 남고 역사적 상황이 사라지는 구성

# **무서워도 된다. 왜 무서운지가 역사적 상황과 연결되어야 한다.**

---

# 11. Screen Treatment

원칙:

# **Subtle by default. Strong when earned.**

강도:

- `none`
- `subtle`
- `accent`
- `strong-accent` — rare

가능:

- fire warmth
- dusk shift
- focus/vignette
- sway/jolt
- blink/fade
- 짧은 red/dark accent

금지:

- 위험마다 동일한 빨간 flash
- HP damage pulse
- 반복 빠른 flashing
- 지속 강한 shake/blur/zoom

Reduced Effects에서도 같은 사건·판단·학습이 유지되어야 한다.

---

# 12. Scene ≠ Beat

## Scene

state/reducer에 올릴 가치가 있는 의미 변화:

- 목표
- 직접 행동
- 위치/시간
- consequence
- relationship memory

## Beat

같은 Scene 안의 짧은 연출:

- actor stop
- gaze
- sound drop
- 짧은 dialogue
- focus/jolt
- body shift

# **모든 연출 beat를 reducer stage/component로 만들지 않는다.**

---

# 13. 역할 경계

## Hunt

거리 / 흔적 / 추적 / 자연 위험 / 공포 / 귀환

## Gather

가까운 관찰 / 반복 탐색 / 담기 / 공간 기억 / 범위 확대

## Camp

불 / 생활 유지 / 같은 공간의 시간 변화 / 부재 / 기다림 / 재회

Hunt의 추적/공포 문법을 Gather/Camp에 복제하지 않는다.

---

# 14. 기술 구조

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
- 범용 NPC AI
- 대규모 Dialogue Engine
- procedural narrative
- FPS/3D 엔진 선행
- 범용 VFX 엔진
- 전역 관계 점수

---

# 15. Player / Teacher / Debug

기본 앱은 Player surface다.

Player에 금지:

- Stage 번호
- reducer exact state
- debug evidence
- 개발 toolbar
- legacy version label

개발 환경:

- `?legacy=1` — Legacy Hunt v0.1
- `?teacher=1` — teacher surface
- `?debug=1` — debug surface

---

# 16. 현재 Stage 07 상태

R2 Stage 07 Embodied Experience Skeleton은 **실제 구현됨**.

기본 흐름:

```text
사냥 관점
→ 새벽 불
→ 도구 전달
→ 동행 합류
→ 출발
→ 몸 낮춰 지면 관찰
→ 다른 사람 관점 전환 proof
```

자동 검증:

- 8 test files
- 31 tests
- typecheck PASS
- production build PASS

단:

# **Implementation Complete / Automated PASS / Human Immersion QA Pending**

이다.

---

# 17. 현재 다음 공식 Gate

# **R2 Stage 07 — Teacher Browser Visual/Immersion QA**

Stage 08은 이 human Gate 통과 전 시작하지 않는다.

확인:

- 실제 시야 같은가
- 몸/사람 공간감
- 도구 전달
- walking/crouch
- treatment 강도
- reduced effects
- perspective transition
- player에 dev info 미노출

기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

---

# 18. 저장소 변경 세션 종료 시

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

자동 CI만으로 Immersion Complete를 선언하지 않는다.
