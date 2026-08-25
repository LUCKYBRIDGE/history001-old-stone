# AGENTS.md

이 저장소는 초등학생용 **구석기 신체화 1인칭 역사 체험 웹게임** 프로젝트의 Single Source of Truth다.

현재 프로젝트는 기존 Hunt v0.1 기능 프로토타입 이후 **Design Reboot R2 / Stage 01 Deep Audit + Emotional Realism Refinement** 기준으로 진행한다.

---

## 1. 새 작업 세션의 시작 순서

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

1. `docs/01_PROJECT_CORE.md`
2. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
3. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
4. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
5. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
6. `docs/02_EXPERIENCE_STRUCTURE.md`
7. `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
8. `docs/05_ROLE_EXPERIENCE_MAP.md`
9. 역할별 `*_STORY.md`
10. 역할별 `*_PLAYFLOW.md`
11. `docs/06_TECH_BLUEPRINT.md`

하위 문서·기존 코드가 상위 원칙과 충돌하면 상위 문서를 우선한다.

---

## 3. 프로젝트 최상위 균형

모든 작업은 다음을 함께 만족한다.

1. **Historical Integrity** — 사실과 재구성을 구분
2. **Learning Clarity** — 학생이 상황과 행동을 이해 가능
3. **Emotional & Accessibility Safety** — 감정을 없애지 않되 모욕·강압·접근성 장벽을 피함
4. **Embodiment, Agency & Historical Imagination** — 그 시대 사람의 몸·관계·불확실성을 경험하고 역사적 상상력으로 연결

중요:

# **안전 = 감정 제거가 아니다.**

두려움, 긴장, 죄책감, 후회, 걱정, 안도, 책임감, 의견 충돌은 역사적 상황에서 자연스럽다면 적극 활용할 수 있다.

---

## 4. Learning Invariants

선택/분기가 달라도 전체 체험에서 다음 핵심 조건은 보존한다.

- 도구와 생활 행동
- 불과 생활 유지
- 먹을거리 확보의 불확실성
- 사람들의 상호의존
- 자연·시간·거리 제약
- 한 장소 생활 부담의 누적
- 이동 생활의 맥락

모든 학생이 같은 장면과 같은 감정을 경험할 필요는 없다.

---

## 5. Embodied First-Person Guardrail

기본 player-facing 시점은 **Embodied First-Person**이다.

화면은 가능한 한

# **환경 + 내 몸 + 들고 있는 것 + 사람 + 행동 + 빛/소리**

의 한 장면이다.

확인:

- 눈의 위치/방향이 자연스러운가?
- 몸은 실제 자세에서 보일 만큼만 보이는가?
- 손이 실제 행동을 하는가?
- 도구 continuity가 유지되는가?
- 사람과 내 몸이 같은 공간처럼 보이는가?
- 광원/가림/원근이 일관되는가?

금지:

- 모든 화면 하단에 고정 손 PNG
- 자유 3D/FPS를 몰입 전제조건으로 삼기

---

## 6. Role-True Perspective Guardrail

역할 진입 시 현재 시점을 짧게 알려줄 수 있다.

예:

> 사냥을 나선 사람의 관점

이후에는 그 역할의 사람이 실제로 보고·듣고·알 수 있는 범위에서 player-facing 경험을 진행한다.

### Hunt

사냥하는 사람의 눈앞 풍경, 몸, 동행자, 흔적, 거리, 먹을거리 필요, 위험, 귀환 고민을 본다.

Camp에서 벌어지는 일을 전지적으로 알지 않는다.

### Gather

가까운 환경과 채집 행동, 함께 찾는 사람, 장소 기억과 범위 확대를 중심으로 본다.

### Camp

거처와 불, 남아 있는 사람, 해야 하는 일, 부재, 시간 변화, 기다림을 본다.

# **관점 전환은 명확히 알려주고, 역할에 들어간 뒤에는 그 사람으로 살아가게 한다.**

---

## 7. Player Body Identity Guardrail

역할별 다른 몸과 구체적 인물을 사용할 수 있다.

다만 개인의 특징을 시대 전체의 규칙처럼 일반화하지 않는다.

- Hunt=남성, Gather/Camp=여성 자동 고정 금지
- 성별·연령·친족 분업을 근거 없이 역사적 보편 사실로 단정 금지
- 역할 차이는 행동·장소·관계·시야·도구로 먼저 표현

중립적 마네킹을 만드는 것이 목표는 아니다.

---

## 8. Relationship / Emotional Reality Guardrail

관계는 호감도 숫자가 아니라 **함께 겪은 사건의 기억과 이후 반응**이다.

허용:

- 걱정
- 죄책감
- 후회
- 의견 충돌
- 안도
- 관계적 압박
- 늦은 귀환에 대한 현실적인 반응
- 내 선택이 타인에게 미친 영향을 다른 관점에서 깨닫기

피할 것:

- NPC 모욕/조롱
- 복잡한 상황을 학생 개인의 도덕적 잘못으로 단정
- 죄책감만으로 숨겨진 정답 선택을 강요
- 호감도/친밀도 점수

# **관계가 학생의 판단을 무겁게 만드는 것은 좋다. 학생 인격을 채점하는 것은 피한다.**

---

## 9. Choice / Consequence Guardrail

모든 선택이 똑같이 좋은 결과를 가질 필요는 없다.

어떤 판단은 더 위험하거나 더 후회스러운 결과를 낳을 수 있다.

확인:

- 당시 판단할 정보가 있었는가?
- 결과가 세계 조건과 연결되는가?
- 무작위 벌처럼 느껴지지 않는가?
- 선택의 흔적이 사람·몸·시간·감정·다음 관점 중 하나 이상에 남는가?
- 재수렴 뒤에도 의미 차이가 남는가?

# **Choice Fairness는 결과 평등이 아니라 결과의 납득 가능성이다.**

---

## 10. Threat / Horror Guardrail

공포게임 같은 순간을 허용한다.

특히 Hunt에서는

- 어둠
- 시야 밖 움직임
- 자연의 소리
- 갑작스러운 정지
- 가까워지는 위험
- 짧은 회피/도주
- 순간적인 강한 화면/사운드 accent

를 사용할 수 있다.

목표는 자연 속 인간의 취약함·불확실성·판단을 체감시키는 것이다.

피할 것:

- 고어/잔혹함 자체를 볼거리로 삼기
- 의미 없는 jump scare 반복
- 적 HP/처치 루프
- 공포만 남고 역사적 상황이 사라지는 구성

위협 뒤 긴장이 어느 정도 남는 것은 허용한다.

---

## 11. Learning Clarity / Scaffold Guardrail

학생은 최소한 다음을 알 수 있어야 한다.

- 지금 어디에 있는가
- 무엇을 할 수 있는가
- 왜 행동할 이유가 있는가

막힐 때 지원 순서:

1. 사람/환경 cue
2. 시각/사운드 cue
3. 짧은 행동 문구
4. 명확한 hint

학생이 자연스럽게 이해하면 UI는 뒤로 물러난다.

---

## 12. Screen Treatment Guardrail

원칙:

# **Subtle by default. Strong when earned.**

허용:

- 불의 따뜻한 색
- 시간대별 색/명암
- focus/vignette
- sway/jolt
- blink/fade
- 드문 strong accent
- 맥락 있는 한 번의 red/dark accent

피할 것:

- 위험마다 같은 빨간 화면
- HP damage pulse
- 반복 빠른 flashing
- 장시간 강한 blur/shake/zoom
- 효과 하나에 핵심 정보 의존

`none / subtle / accent / strong-accent`를 사용하되 strong-accent는 드문 핵심 순간에만 사용한다.

Reduced Effects에서도 같은 사건과 판단이 유지되어야 한다.

---

## 13. Historical Imagination / Concept Guardrail

전체 학습 흐름:

# **Immersion → Historical Imagination → Understanding → Conceptualization**

학생은 먼저

- 왜 무서웠는지
- 왜 돌아갈지 고민했는지
- 왜 다른 사람이 필요했는지
- 왜 불과 거처가 중요했는지
- 왜 한 장소에서 계속 살기 어려웠는지

를 자기 경험으로 느끼고 상상한다.

Reflection은 필요할 때 사용하지만 모든 역할 뒤에 강제로 삽입하지 않는다.

교과 개념은 경험에서 생긴 이해에 이름을 붙인다.

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

---

## 15. Player / Teacher / Debug 분리

### Player

세계·몸·사람·행동을 본다. 필요한 경우 역할 시점과 최소 UI만 본다.

### Teacher

- major phase
- checkpoint/restart
- reduced effects
- 학생 막힘 지원

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
- qualitative result 철학

재설계 가능:

- Common Morning
- player-facing UI
- role flow presentation
- result detail
- relationship/emotion data
- Perspective Bridge

기존 구현이 최신 R2 설계를 제한하면 설계를 우선한다.

---

## 17. QA 원칙

자동 테스트:

- 기능/상태/계약
- Learning Invariant coverage
- variant selection
- relationship/emotional memory
- threat build-up
- treatment preset / reduced effects
- persistence/checkpoint
- player/teacher/debug separation

교사/학생 테스트:

- 첫 행동 이해
- 몸 자연스러움
- 역할 관점 유지
- 기억되는 사람
- 실제 고민
- 죄책감/후회/안도 등 감정의 자연스러움
- 공포/긴장의 적절성
- 선택 회수
- 효과 위치와 강도
- 역사적 상상력과 개념 이해

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

다음 구현 단계는

# **R2 Stage 07 — Embodied Experience Skeleton**

이다.

Skeleton은 **role-true POV + 몸/사람 + 관계 + 명료성 + 화면 treatment + reduced effects + 교사/디버그 분리**를 검증한다.
