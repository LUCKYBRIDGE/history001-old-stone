# 구석기 역사 체험 웹게임
## Canonical Baseline v4 — R2 Stage 07 Human-Gate Remediation + Social Immersion Contract

이 문서는 프로젝트의 **현재 기준선, 문서 위계, 공식 용어, 완료/미완료 경계**를 한곳에 고정한다.

새 세션은 과거 채팅이나 Audit 문서보다 이 기준선을 먼저 확인한다.

---

# 1. 현재 공식 기준선

장기 기준선은 계속:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

이다.

그러나 최초 실제 Player Human QA가 이미 수행되었고, 자동검증과 달리 사람의 실제 플레이에서 관계·서사·신체화·시각 구성 관련 **P1 blocker**가 확인됐다.

따라서 현재 운영 상태는:

# **Stage 07 Automated PASS / Human Gate FAIL / Stage 07.5 Social Immersion Remediation In Progress**

이다.

`Stage 07.5`는 새 대형 production Stage가 아니다. Stage 07 Human Gate를 통과하기 위해 relationship / narrative / embodied / social continuity를 보완하는 remediation substage다.

현재 의미:

- Stage 01~06 기본 설계 계약 정리 완료
- Stage 07 Embodied Curriculum Skeleton 구현 완료
- 원래 Stage 07 자동 검증 완료
- 실제 Player Human QA 수행 완료
- Human QA에서 P1 blocker 확인
- 역할 중심 Player 서술 제거 remediation은 main 반영됨
- Social Immersion / Day 1 Character canonical 계약은 main 반영됨
- 다음 구현 대상은 **Day 1 Community + Hunt First Five Minutes Stage 07.5 vertical proof**
- first-person visual/image production 원칙은 `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`가 소유
- Stage 08 직전 구체 visual production 실행 규격은 `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`가 소유
- 실제 production image / Stage 08 Hunt visual integration은 아직 시작하지 않음
- Stage 08 Hunt Embodied Vertical Slice는 Human Gate PASS + Visual Production Readiness 전 시작 금지

현재 다음 Gate:

# **Stage 07.5 Player Human Re-check — Social Identification / Embodiment / Spatial Continuity / Curriculum / Misconception**

단, 이 재검증은 first-five runtime proof가 구현·CI 통과된 뒤 수행한다.

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
13. `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
14. `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
15. `docs/00_DEVELOPMENT_WORKFLOW.md`
16. `PROJECT_STATUS.md` / `handoff/CURRENT_HANDOFF.md`

`docs/06_TECH_BLUEPRINT.md`가 **유일한 기술 SSOT**다. 과도기 보정 문서였던 `06A`는 v8에 흡수되어 삭제됐으며 다시 canonical 문서로 사용하지 않는다.

`docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`는 **시각 자산 제작/생성/합성/QA 원칙 계약**이다.
`docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`는 그 원칙을 Stage 08 직전 실행 가능한 reference/anchor/contact/responsive/performance/readiness 규격으로 좁힌다.

07A/07B 어느 쪽도 React/TypeScript runtime 타입과 구현 구조를 별도 기술 SSOT처럼 소유하지 않는다. Stage 08에서 실제 visual manifest/anchor 구조가 필요해지면 `docs/06_TECH_BLUEPRINT.md`의 정식 후속 버전에 흡수한다.

다음은 **기록/전환 참고 문서**이며 canonical 설계를 덮지 않는다.

- `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`
- `docs/R2_STAGE01_DEEP_AUDIT_REPORT.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`
- `handoff/STAGE07_5_SOCIAL_IMMERSION_CANON_PLAN.md`
- `handoff/DAY1_COMMUNITY_HUNT_FIRST5_SCREENPLAY.md`
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

- Stage 07에서 학생이 처음 보는 현재 생활 공간을 가리키는 비교적 중립적인 player-facing 표현.
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

- R/H1/H2라는 authoring identity와 fictional cast
- Stage 07.5에서 사용하는 provisional call-name `아루 / 다무 / 누아`
- 특정 아침 아루가 주먹도끼를 건네는 사건
- 이 Day 1 공동체의 구체 거처/사람 배치
- Hunt 중 특정 자연 거처 후보를 발견하는 사건
- 구체 대사·감정·선택 결과

Player flow를 매번 `[재구성]` 라벨로 끊지 않는다. Teacher/Debug에서는 사실/재구성 경계를 확인할 수 있어야 한다.

## Language Convention

Player에게 들리는 한국어 대사는 실제 선사 언어 복원이 아니다.

# **학생이 당시 장면의 의미를 이해할 수 있도록 현대 한국어로 번역해 표현하는 convention**

으로 취급한다.

`우가우가`식 pseudo-primitive speech나 괴성+괄호 번역으로 구석기인의 언어 능력을 희화화하지 않는다.

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
- 같은 하루의 핵심 cast, 현재 거처, 불 주변 배치, 도구 같은 shared visual anchor의 정체성도 역할마다 모순되지 않아야 한다.
- 다른 POV이므로 구도와 보이는 범위는 달라도 되지만 같은 사람/장소/물건이 다른 세계의 자산처럼 바뀌면 안 된다.

## Limited Knowledge

# **World Truth ≠ Character Knowledge**

- 직접 본 것
- 함께 겪은 것
- 다른 사람에게 나중에 들은 것

을 구분한다.

한 관점에서 일어난 사건을 다른 관점 캐릭터가 자동으로 전지적으로 알지 않는다.

---

# 7. Social Immersion 공식 기준

Player는 구석기 세계에 처음 떨어진 현대 관광객이 아니다.

# **그 공동체에서 Day 1 이전부터 살아오던 사람의 몸과 제한된 기억을 이어받는다.**

따라서:

- 핵심 인물은 역할 기능 설명보다 이름·습관·shared event·callback으로 기억됨
- R/H1/H2는 authoring ID이며 Player character label이 아님
- NPC는 Player가 없어도 자기 행동과 서로의 대화를 가질 수 있음
- 모두가 Player를 동시에 바라보거나 Player 입력만 기다리지 않음
- Player는 아는 세계를 설명받기보다 학생이 그 세계를 플레이를 통해 따라잡게 함
- 관계는 호감도 숫자가 아니라 Shared Memory와 후속 반응으로 유지됨

Stage 07.5 provisional call-name:

```text
R  → 아루
H1 → 다무
H2 → 누아
```

이는 production final naming lock이 아니다.

---

# 8. 역할별 공식 문법

## Hunt

거리 / 흔적 / 주먹도끼 / 추적 / 불확실성 / 자연 위험 / 새 장소 / 귀환

시각 몸 문법:

- 멀어짐
- carry
- crouch
- alert
- fatigue
- return

## Gather

가까운 관찰 / 채집 / 도구 재사용 / 가공 / 반복 / 공간 기억 / 범위 확대

시각 몸 문법:

- close hand work
- repeated reach
- sorting
- processing
- small-resource carry

## Camp

불 / 현재 임시 거처와 막집 / 생활 유지 / 가공 / 시간 / 빈자리 / 기다림 / 재회 / 새 거처 후보 재평가

시각 몸 문법:

- fire tending
- shelter repair
- food processing
- resting/waiting
- departure/return observation

세 역할은 같은 미니게임 문법이나 같은 손 pose 세트를 복제하지 않는다.

---

# 9. 화면·감정 공식 기준

Embodied First-Person:

> **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 주변 사람 + 현재 행동 + 빛/소리**

Production visual composition:

```text
World Plate
+ Spatial / Occlusion
+ Actor
+ Embodied Body
+ Held / Contact Item
+ Environmental Light
+ Perceptual Treatment
+ Minimal Player UI
```

이 레이어 분리는 제작과 placement를 위한 것이며 학생에게는 **하나의 물리적 시야**처럼 보여야 한다.

핵심:

- 몸은 HUD가 아니다.
- 매 Beat마다 새 완성 이미지를 갈아끼우는 slideshow를 기본 구조로 삼지 않는다.
- 손/도구는 세계와 접촉해야 한다.
- 동일 역할의 camera/body/tool identity와 광원 continuity를 유지한다.
- physical-looking light를 먼저 맞춘 뒤 screen treatment를 적용한다.
- occlusion은 depth 정보를 전달하는 핵심 수단으로 본다.

Screen Treatment:

# **Subtle by default. Strong when earned.**

관계/감정:

- 공포·죄책감·후회·걱정·안도·성취를 역사적 상황에서 자연스럽게 허용한다.
- 감정을 학생 인격 점수로 바꾸지 않는다.

Choice Fairness:

# **결과 평등이 아니라 결과의 납득 가능성**

---

# 10. Stage 07 / 07.5 구현 경계

현재 main Browser Skeleton은 원래 Stage 07 proof와 여러 Human-Gate remediation을 포함한다.

현재 구현되어 있는 핵심 범위:

```text
감각적 orientation
→ 새벽 불 + 현재 임시 거처
→ 도구 전달
→ 뗀석기 상위 개념 + 주먹도끼 대표 예 명명
→ held-item continuity
→ 합류/출발
→ 현재 거처가 멀어짐
→ 몸 낮춰 지면 관찰
→ 한동안 이동
→ 자연 거처 후보 발견
→ 장점/불확실성 살핌
→ 동굴/바위 그늘 용어 연결
→ 다른 자리 Perspective Proof
```

이미 remediation된 것:

- 역할/관점 제목을 Player에서 제거
- 주요 대사를 actor 위치와 연결
- Player-facing 기능 역할 설명 축소

그러나 아직 **구현되지 않은 다음 Stage 07.5 proof**:

```text
눈뜨기 전 ambient community life
→ background NPC autonomy
→ 생활 속 fictional name acquisition
→ 아루/다무/누아 social identification
→ action-first first five minutes
→ 다무와 shared ground observation 강화
→ 누아 attention seed의 자연스러운 causal staging
```

이 first-five proof가 구현되기 전 Social Immersion canonical을 `runtime 완료`라고 부르지 않는다.

Stage 07/07.5가 아직 증명하지 않은 것:

- 주먹도끼의 실제 다용도 interaction
- 막집 정식 명명과 거처 손질
- 불의 여러 기능을 행동으로 충분히 체험
- 완성된 Hunt 추적/공포/결과/귀환
- 실제 학생의 개념 이해
- production-quality body/cast/tool/environment identity continuity
- 실제 생성 자산의 grip/contact/occlusion/lighting 자연스러움
- responsive viewport에서 production composition 안정성

---

# 11. Human QA 판정

최초 실제 Player Human QA에서 확인된 주요 P1 범주:

- body/arm이 HUD처럼 읽히는 embodied spatial 문제
- handaxe grip/contact 약함
- 핵심 인물이 사람보다 기능 silhouette처럼 읽힘
- 관계/서사 causal spine 약함
- terminology cue가 학습 카드처럼 보이는 문제
- current shelter / actor / body composition의 production-replaceability 문제
- 역할 기능 중심 서술이 identification을 막는 문제

따라서 현재 Human Gate는:

# **FAIL / P1 remediation in progress**

이다.

Human Gate는 프로젝트 오너/교사의 실제 브라우저 proxy QA이며 Student Pilot을 대체하지 않는다.

다음 Human re-check는 first-five runtime proof 구현·자동검증 후 수행한다.

---

# 12. Visual Production Readiness

Design PASS와 별도다.

Stage 08에서 production visual을 만들기 전에 최소 다음이 있어야 한다.

- Historical / Visual Reference Pack
- Player Body Continuity Sheet
- Camera / Composition Profiles
- core cast anchor sheets
- canonical Handaxe Anchor Sheet
- Current Shelter / Terrain / Cave / Fire Scene Families
- contact / grip / occlusion anchor plan
- crop-safe / responsive composition plan
- historical reference provenance / asset license 구분

구체 실행/판정 규격은:

- `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`

가 소유한다.

# **Visual Production Ready ≠ Human QA PASS ≠ Stage Complete**

Stage 07 Human Gate가 먼저다.

---

# 13. 기술 용어

## Curriculum Anchor

교과 핵심 개념과 구현/QA를 연결하는 안정 ID. 학생에게 internal ID는 노출하지 않는다.

## Terminology Reveal

경험 뒤 짧게 이름을 붙이는 player-facing beat.

## Learning Evidence

학생 점수가 아니라 자동검증/QA를 위한 내부 증거.

## Shared Day Event

같은 Day 1에서 실제로 일어난 질적 사건. participant / witness / knowledge를 구분할 수 있다.

## Perspective Knowledge

현재 캐릭터가 직접 보거나 함께 겪거나 전달받아 알 수 있는 정보 범위.

## Scene

목표·직접 행동·위치·결과·관계/world memory가 의미 있게 변하는 상태 단위.

## Beat

시선·정적·대사·손 움직임·용어 reveal·화면 효과 같은 Scene 내부 표현 변화.

# **Scene ≠ Beat**

## Embodied Composite

분리된 world/body/actor/item/treatment 자산을 같은 시야·광원·접촉·깊이 논리로 합성하여 하나의 1인칭 세계처럼 보이게 하는 visual production 문법.

---

# 14. 완료 판정 용어

- **Design PASS**: 설계 문서 계약이 정리됨.
- **Implementation Complete**: 해당 범위 코드가 존재함.
- **Automated PASS**: install/typecheck/tests/build 통과.
- **Human QA PASS**: 실제 브라우저 플레이로 시각·몰입·교과·오개념 Gate 통과.
- **Visual Production Ready**: 생성/제작을 위한 reference, anchor, camera, continuity, provenance 계약이 준비됨.
- **Stage Complete**: 그 Stage가 요구하는 Design/Implementation/Automated/Human Gate가 모두 충족됨.

현재:

```text
Original Stage 07 implementation: complete
Original automated baseline: PASS
Social Immersion canonical design: PASS
Stage 07 Human Gate: FAIL
First-five social runtime proof: NOT YET IMPLEMENTED
Stage 08: BLOCKED
```

Human QA PASS 역시 Student Pilot PASS를 의미하지 않는다.

---

# 15. 운영 상태 소유권

## Canonical docs

- 장기 원칙
- 설계 계약
- Acceptance Gate
- 공식 용어

최신 SHA/run/test count 같은 변동 정보는 가능한 한 소유하지 않는다.

## `PROJECT_STATUS.md`

- 현재 phase
- 현재 완료/미완료 판정
- 다음 공식 Gate
- 현재 통합 baseline 요약

## `handoff/CURRENT_HANDOFF.md`

- 새 세션이 지금 무엇을 해야 하는지
- 무엇을 다시 하지 말아야 하는지
- 현재 개발/QA 진입점

## `handoff/TEST_REPORT.md`

- 가장 최근 main에 통합되어 검증된 기능/canonical baseline SHA
- CI run
- test count
- 자동검증 범위와 한계

최신 docs-only 상태 정리 commit의 SHA/run을 다시 문서에 쓰기 위해 반복 commit하는 recursive verification loop를 만들지 않는다. 최신 exact repository HEAD와 CI는 GitHub repository/Actions 상태를 최종 기준으로 확인한다.

# **이미 main에 통합된 작업을 운영 문서에서 미래형으로 쓰지 않는다.**

---

# 16. 변경 규칙

새 리비전에서 반드시 확인한다.

- 한 개념에 서로 다른 공식 용어가 생기지 않았는가?
- 구형 버전 예시가 최신 계약보다 앞서 읽히지 않는가?
- Audit/Legacy 문서가 canonical 문서를 덮지 않는가?
- 삭제/흡수된 보정 문서를 다시 canonical로 참조하지 않는가?
- 문서의 현재 Gate/버전이 실제 저장소와 일치하는가?
- 운영 문서가 이미 끝난 병합을 미래형으로 말하지 않는가?
- 학생 화면과 Teacher/Debug 관리 정보가 분리되는가?
- 구현했다고 학습 완료로 과장하지 않는가?
- visual asset이 아름답다는 이유로 body/contact/continuity 문제를 덮지 않는가?
- 외부 reference의 라이선스와 실제 프로젝트 asset 사용 권리를 구분하는가?
- Human QA PASS를 Student Pilot PASS로 과장하지 않는가?
- 07A 원칙과 07B 실행 규격의 역할이 뒤섞이지 않는가?
- authoring identity가 Player-facing 역할 설명으로 새어 나오지 않는가?
- World Truth와 Character Knowledge가 섞이지 않는가?

이 문서는 그 판정을 위한 프로젝트 기준선이다.
