# AGENTS.md

이 저장소는 초등학생용 **구석기 신체화 1인칭 역사 체험 웹게임** 프로젝트의 Single Source of Truth다.

현재 프로젝트는 기존 Hunt v0.1 기능 프로토타입 이후 **Design Reboot R2 / Stage 01 Deep Audit 기준**으로 진행한다.

---

## 1. 새 ChatGPT 작업 세션의 시작 순서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
7. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
8. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
9. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
10. 이번 작업에 필요한 Stage 문서
11. 실제 개발이면 관련 코드/tests

과거 채팅 기억보다 GitHub 최신 문서를 우선한다.

---

## 2. 문서 위계

1. `docs/01_PROJECT_CORE.md` — 프로젝트 교육·체험 헌법
2. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — 몸/시야 헌법
3. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — 관계·딜레마·결과 헌법
4. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` — 미세 화면 연출 헌법
5. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` — 학습 명료성·안전·역사성 상한
6. `docs/02_EXPERIENCE_STRUCTURE.md` — 전체 경험 구조
7. `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — 공통 몰입 실무 기준
8. `docs/05_ROLE_EXPERIENCE_MAP.md` — 역할 경계·균형
9. 역할별 `*_STORY.md`
10. 역할별 `*_PLAYFLOW.md` / 구현 브리프
11. `docs/06_TECH_BLUEPRINT.md` — 기술 기준

하위 문서·기존 코드가 상위 원칙과 충돌하면 **기존 구현을 정당화하지 말고 상위 문서를 우선**한다.

---

## 3. 네 가지 비타협 기준

모든 작업은 다음 네 축을 동시에 만족해야 한다.

1. **Historical Integrity** — 역사 사실과 재구성을 구분
2. **Learner Safety & Accessibility** — 초등학생에게 불필요한 공포/불편/장벽을 만들지 않음
3. **Learning Clarity** — 학생이 무엇을 보고 무엇을 할 수 있는지 이해 가능
4. **Embodiment & Agency** — 몸과 판단이 세계 안에서 의미 있게 느껴짐

몰입이 다른 세 기준을 침해하면 몰입 연출을 줄인다.

---

## 4. Learning Invariants

선택/분기가 달라도 다음 핵심은 전체 체험에서 보존한다.

- 도구와 생활 행동 연결
- 불과 생활 유지
- 먹을거리 확보의 불확실성
- 역할 상호의존
- 자연·시간·거리 제약
- 한 장소 생활 부담의 누적
- 이동 생활의 맥락

분기는 **역사 사실을 바꾸는 것**이 아니라 같은 생활 조건을 다른 개인적 경험으로 만나게 한다.

---

## 5. Embodied First-Person Guardrail

기본 player-facing 시점은 **Embodied First-Person**이다.

화면은 가능한 한

# **환경 + 내 몸 + 들고 있는 것 + 사람 + 행동 + 빛/소리**

의 한 장면으로 설계한다.

확인:

- 지금 눈의 위치/방향은 자연스러운가?
- 몸은 실제 자세에서 보일 만큼만 보이는가?
- 손은 실제 행동을 하는가?
- 물건/도구 continuity가 유지되는가?
- 사람과 내 몸이 같은 공간처럼 보이는가?
- 광원/가림/원근이 일관되는가?
- 몸이 Primary Attention Target을 방해하지 않는가?

금지:

- 모든 장면 하단에 고정 손 PNG
- 몸이 많이 보일수록 좋다는 접근
- 자유 3D/FPS를 몰입 전제조건으로 삼기

---

## 6. Player Body Identity Guardrail

역할별 다른 몸을 사용할 수 있지만 다음을 금지한다.

- Hunt = 남성 고정
- Gather/Camp = 여성 고정
- 나이/성별/친족 분업을 근거 없이 사실처럼 표현
- 몸 크기/힘을 역할 중요도와 연결

외형보다 **행동·장소·관계·딜레마**로 역할 차이를 만든다.

---

## 7. Relationship / Agency Guardrail

관계는 호감도 숫자가 아니라 **함께 겪은 사건의 기억과 이후 반응**이다.

확인:

- 반복 인물이 있는가?
- 그 사람이 학생 행동에 반응하는가?
- 관계가 죄책감/도덕 채점으로 작동하지 않는가?
- 주요 선택 전에 필요한 정보가 보이는가?
- 적어도 두 선택이 합리적 이유를 갖는가?
- 특정 선택만 좋은 관계/핵심 콘텐츠를 독점하지 않는가?
- 선택 결과가 뒤에서 최소 한 번 회수되는가?
- 재수렴 뒤에도 의미 차이가 남는가?

금지:

- 호감도/친밀도 게이지
- NPC 모욕/비난
- 숨겨진 정답 루트
- 무작위 처벌

---

## 8. Threat Guardrail

기본 문법:

# **징후 → actor reaction → body reaction → player observation → judgment → recovery**

위협은 전투/공포가 목적이 아니다.

금지:

- 고어/그래픽 부상
- 반복 jump scare
- enemy HP/처치
- 장시간 강한 공포
- 죽음 GAME OVER

학생이 UI보다 상황으로 먼저 이상함을 느껴야 한다.

---

## 9. Learning Clarity / Scaffold Guardrail

학생은 최소한 다음을 알 수 있어야 한다.

- 지금 어디에 있는가
- 무엇을 살펴보거나 할 수 있는가
- 왜 지금 행동할 이유가 있는가

막힐 때 지원 순서:

1. 사람/환경 cue
2. 은은한 hotspot
3. 짧은 행동 문구
4. 명확한 hint

중요한 조작을 pixel hunting으로 만들지 않는다.

장면마다 **Primary Attention Target**을 하나 정한다.

---

## 10. Perspective Recontextualization Guardrail

Hunt / Gather / Camp는 같은 사람이 세 일을 하는 구조가 아니다.

# **같은 하루를 서로 다른 공동체 구성원의 몸과 눈으로 경험한다.**

관점 전환은 다음 anchor 중 2개 이상을 사용한다.

- 같은 사람
- 같은 불/물건
- 같은 대사/소리
- 같은 사건의 반대편 위치
- 달라진 손/몸

혼란이 생기면 한 줄 orientation을 허용한다.

몰입보다 이해가 우선이다.

---

## 11. Subtle Screen Treatment Guardrail

허용:

- 불의 따뜻한 색
- 시간대별 색온도/명암
- 짧은 focus 변화
- 미세 sway
- 제한적 blink/fade

원칙:

# **World/Actor → Body → Treatment**

효과가 먼저 의미를 말하지 않는다.

금지:

- 위험마다 진한 전체 빨강
- HP damage flash
- 반복 빠른 flashing
- 지속 강한 shake/blur/zoom
- 효과 하나에 핵심 정보 의존
- 범용 VFX 엔진

`none / subtle / accent` 정도의 작은 budget을 사용한다.

Reduced effects에서도 모든 정보와 진행이 유지되어야 한다.

---

## 12. 역할 경계

### Hunt

- 먼 시야
- 걷기
- 흔적 앞에 몸 낮추기
- 추적
- 자연 위험
- 동행
- 운반
- 귀환

### Gather

- 가까운 시야
- 손으로 살피기
- 담기
- 장소 기억/비교
- 탐색 범위 확대

### Camp

- 불 가까이의 몸
- 손질
- 같은 장소의 시간 변화
- 빈자리
- 멀리 바라보기
- 기다림
- 재회

Hunt의 플레이 문법을 다른 역할에 복제하지 않는다.

---

## 13. Reflection / Historical Concept

몰입만으로 학습 완료를 선언하지 않는다.

전체 루프:

# **Experience → Reflection → Historical Concept**

Reflection은 학생이 자기 플레이를 근거로 설명하게 한다.

교과 개념은 경험에 이름을 붙이는 단계다.

---

## 14. 기술 Guardrail

기본 구조:

```text
App
→ Experience Orchestrator
→ World Continuity / Learning Integration
→ Common Experience / Role Features
→ Embodied Presentation UI
```

유지:

- Role Feature 독립
- same-day role time 분리
- 질적 RoleCompletion
- small explicit variant rules
- stable checkpoint

금지:

- 범용 Scene Engine
- 범용 NPC AI
- 대규모 대화 트리
- procedural narrative
- FPS/3D 엔진 선행
- 범용 VFX 엔진
- 전역 상태에 모든 역할 내부 stage 저장

---

## 15. Player / Teacher / Debug 분리

### Player

세계·몸·사람·행동·reflection만 본다.

### Teacher

필요한 경우:

- major phase
- checkpoint/restart
- reduced effects
- 학생 막힘 상태

### Debug

- internal stage
- pose/gaze
- selected variant
- memories
- learning evidence
- treatment preset

학생 화면에 개발 정보를 노출하지 않는다.

---

## 16. 기존 코드의 지위

기존 Hunt v0.1은 **Legacy Functional Prototype**이다.

재사용 가능:

- React/TypeScript/Vite
- CI
- reducer/RoleCompletion 아이디어
- non-combat / qualitative result guardrail

재설계 가능:

- Common Morning
- player-facing UI
- role flow presentation
- result detail
- relationship/learning data
- Perspective Bridge

기존 구현이 R2 v6 설계를 제한하면 설계를 우선한다.

---

## 17. QA 원칙

자동 테스트:

- 기능/상태/계약
- Learning Invariant coverage
- choice precondition
- variant selection
- relationship memory
- threat build-up/recovery
- reduced effects parity
- persistence/checkpoint
- player/teacher/debug separation

교사/학생 테스트:

- 첫 행동 이해
- 몸 자연스러움
- 기억되는 사람
- 실제 고민
- 위협 강도
- 선택 회수
- 관점 전환 이해
- 효과 불편 여부
- Reflection을 통한 역사 이해

자동 CI만으로 Immersion Complete를 선언하지 않는다.

---

## 18. 저장소 변경 세션 종료 시

필요한 문서를 갱신한다.

- `PROJECT_STATUS.md`
- `CHANGELOG.md`
- `handoff/CURRENT_HANDOFF.md`
- 테스트 시 `handoff/TEST_REPORT.md`
- 미해결 시 `handoff/KNOWN_ISSUES.md`
- 자산 요구 시 `handoff/ASSET_REQUESTS.md`

---

## 19. 현재 공식 개발 계획

`docs/00_DEVELOPMENT_WORKFLOW.md`의 R2 계획을 따른다.

현재 다음 구현 단계는

# **R2 Stage 07 — Embodied Experience Skeleton**

이다.

Skeleton은 몸/사람/시점뿐 아니라 **명료성·reduced effects·teacher/debug 분리·관점 orientation**도 함께 검증해야 한다.
