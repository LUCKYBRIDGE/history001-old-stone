# 구석기 역사 체험 웹게임
## Hunt 전환 브리프 v3 / Legacy v0.1 → R2 Embodied Hunt

> **문서 지위: 보조 전환 문서. 최신 Hunt 구현의 canonical source는 이 문서가 아니라 `docs/03_HUNT_STORY.md` v5, `docs/04_HUNT_PLAYFLOW.md` v5, `docs/06_TECH_BLUEPRINT.md` v5, `docs/07_IMMERSION_NARRATIVE_BIBLE.md` v4, `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`다.**
>
> 목적: 기존 Hunt v0.1에서 무엇을 보존하고 무엇을 폐기/재설계하는지 설명한다. 과거 Stage 09-C 구현 계획은 더 이상 공식 다음 단계가 아니다.

---

# 1. 기존 Hunt v0.1의 지위

# **Legacy Functional Prototype**

보존 가치:

- React + TypeScript + Vite 실행 기반
- Hunt-local reducer
- qualitative outcome 철학
- non-combat natural danger
- 귀환 뒤 completion
- Perspective Bridge의 개념
- 기존 자동 테스트/CI 기준선

새 R2와 충돌하면 수정 가능한 것:

- Common Morning UI
- player-facing 카드형 화면
- role entry UI
- Hunt stage 구조/표현
- result detail
- relationship/learning state
- Perspective Bridge 표현

`이미 구현되어 있다`는 이유로 새 설계를 약화하지 않는다.

---

# 2. 기존 v0.1의 핵심 결손

기능은 있었지만 다음 체험이 충분하지 않았다.

- 내 몸이 실제 시야에 존재하는 감각
- 같은 공간에 있는 반복 인물
- 첫 행동의 신체적 상호작용
- 선택 전에 형성되는 실제 고민
- 위협의 징후/사람/몸 build-up
- 관계 기억
- 다축 결과
- 관점 전환의 명료성
- screen treatment / reduced effects
- Learning Invariant coverage
- Progressive Scaffold
- Reflection / Historical Concept Bridge

따라서 단순 스타일 수정이 아니라 presentation/state/flow 일부를 다시 설계한다.

---

# 3. 최신 구현 순서

이전 `Stage 09-C Hunt v0.2 전체 구현` 계획은 폐기됐다.

공식 순서:

## R2 Stage 07 — Embodied Experience Skeleton

먼저 작은 골격에서 검증한다.

```text
Player / Teacher / Debug 분리
→ 불 앞 embodied POV
→ R의 도구 전달
→ first-action scaffold
→ H1/H2와 합류
→ walking POV
→ crouch POV
→ subtle treatment / reduced effects
→ Perspective transition + orientation
→ 최소 Learning Evidence
→ checkpoint
```

## R2 Stage 08 — Hunt Embodied Vertical Slice

Stage 07 통과 뒤:

- 흔적 탐색/발견
- 접근/시도
- 추적 딜레마
- Threat build-up + recovery
- 다축 결과
- 귀환
- R/H1/H2 관계 회수
- Perspective Bridge
- Hunt Micro Reflection

---

# 4. 구현 시 보존할 Hunt Learning Invariants

어떤 경로에서도 다음을 잃지 않는다.

1. 사냥은 흔적/환경을 살피는 것부터 시작된다.
2. 발견은 성공을 보장하지 않는다.
3. 먹을거리 확보는 불확실하다.
4. 더 멀리 가는 데 시간·거리·피로 부담이 있다.
5. 자연 속 인간도 위험할 수 있다.
6. 위험 대응은 전투가 아니라 관찰·거리·협력이다.
7. 성공/빈손 모두 귀환한다.
8. Hunt만으로 공동체 하루가 완성되지 않는다.

---

# 5. 기존 코드에서 재사용 판단 기준

코드 하나마다 묻는다.

- R2 Learning Invariant를 지원하는가?
- Embodied presentation을 방해하지 않는가?
- 관계/결과 확장에 과도한 결합이 없는가?
- Common/Role 경계를 유지하는가?
- 새 구조보다 단순하게 재사용 가능한가?

YES면 재사용.

NO면 과거 구현이라는 이유로 유지하지 않는다.

---

# 6. State migration 원칙

현재 v0.1 state를 한꺼번에 일반화하지 않는다.

필요한 최소 상태만 추가한다.

후보:

- player body preset / gaze
- R/H1/H2 continuity key
- relationship memory
- observation state before choice
- return timing / burden
- Learning Evidence
- treatment preset / reduced-effects resolution

금지:

- 범용 Scene state machine 프레임워크
- 모든 actor state 전역화
- 모든 클릭 로그 저장
- 관계 점수화

---

# 7. 화면 전환 원칙

기존 카드형

```text
제목
→ 설명
→ 버튼
→ 다음 카드
```

을 그대로 꾸미지 않는다.

새 기본:

```text
세계/사람이 먼저 보임
→ 몸/시선으로 직접 살핌
→ 필요한 정보가 형성됨
→ 판단/행동
→ 사람/세계가 반응
→ 앞선 상태가 뒤에서 회수
```

학생이 막히면 Progressive Scaffold를 사용한다.

---

# 8. Threat migration

기존 danger choice를 바로 띄우지 않는다.

새 흐름:

```text
ambient
→ anomaly
→ companion reaction
→ body reaction
→ player observation
→ response choice
→ recovery
```

기존 danger response의 비전투 철학은 보존한다.

---

# 9. Result migration

기존:

- food-secured
- empty-handed

은 계속 의미 있는 한 축이다.

하지만 전체 결과는 다음 축을 추가 검토한다.

- return timing
- distance burden
- danger exposure
- carry burden
- relationship memories

공통 저녁/재회는 작은 명시적 variant 규칙으로 변주한다.

---

# 10. Screen Treatment migration

최종 이미지가 없어도 CSS/DOM 수준에서 검증한다.

우선 후보:

- `fire-warmth`
- `crouch-shift`
- `threat-attention`
- `return-firelight`
- `blink-perspective-transition`

기본 순서:

# **World/Actor → Body → Treatment**

효과를 끄거나 줄여도 정보/학습/진행이 유지된다.

---

# 11. 관계 migration

R/H1/H2는 AI NPC가 아니다.

필요한 것:

- 동일 인물 continuity
- 장면별 위치/시선
- 몇 개의 명시적 반응
- 소수 Relationship Memory

관계는 학생 선택을 처벌하거나 죄책감을 주지 않는다.

---

# 12. Perspective migration

Perspective Bridge는 `다음 역할` 화면이 아니다.

같은 사람/불/물건을 anchor로 다음 Player Body Identity로 이동한다.

학생 혼란을 줄이기 위해 필요한 경우 짧은 orientation 문장을 허용한다.

---

# 13. 구현 전 읽기 순서

R2 Stage 07:

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
7. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
8. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
9. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
10. `docs/02_EXPERIENCE_STRUCTURE.md`
11. `docs/06_TECH_BLUEPRINT.md`
12. 기존 code/tests

R2 Stage 08에서는 추가로:

13. `docs/03_HUNT_STORY.md`
14. `docs/04_HUNT_PLAYFLOW.md`
15. `docs/05_ROLE_EXPERIENCE_MAP.md`
16. `docs/07_IMMERSION_NARRATIVE_BIBLE.md`

---

# 14. 이 문서로 하지 않을 것

이 브리프 자체를 최신 Scene specification으로 사용하지 않는다.

최신 행동/장면/상태 판단은 상위 canonical 문서가 소유한다.

이 문서의 역할은 오직:

# **Legacy Hunt에서 새 R2 Hunt로 무엇을 가져가고 무엇을 버릴지 안내하는 것**

이다.
