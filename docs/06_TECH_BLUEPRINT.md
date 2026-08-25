# 구석기 역사 체험 웹게임
## Stage 06 — 기술 설계 v5 / Embodied Learning Architecture

> 목적: Stage 01~05 R2 Deep Audit를 실제 브라우저 앱으로 구현할 수 있도록 최소 기술 구조를 정의한다. 기존 Hunt v0.1은 Legacy Functional Prototype이며 이 문서보다 우선하지 않는다.
>
> 상위 기준:
> - `AGENTS.md`
> - `docs/01_PROJECT_CORE.md`
> - `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
> - `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
> - `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
> - `docs/02_EXPERIENCE_STRUCTURE.md`
> - `docs/05_ROLE_EXPERIENCE_MAP.md`

---

# 1. 기술 최상위 구조

# **App → Experience Orchestrator → World Continuity / Learning Integration → Common Experience / Role Features → Embodied Presentation UI**

원칙:

1. Orchestrator는 큰 진행만 책임진다.
2. Hunt / Gather / Camp는 내부 플레이 규칙을 각자 소유한다.
3. World Continuity는 반복 인물·공통 모티프·cross-role 회수에 필요한 최소 정보만 가진다.
4. Learning Integration은 역할별 질적 결과를 최종 reflection/concept bridge와 연결한다.
5. Presentation UI는 몸·사람·환경·screen treatment 표현 primitive를 제공하지만 역할 규칙을 소유하지 않는다.
6. 범용 Scene Engine / NPC AI / Quest Engine / VFX Engine을 만들지 않는다.

---

# 2. 기술 스택

유지:

- React
- TypeScript
- Vite
- React `useReducer`
- 필요한 범위의 Context
- CSS Variables / Feature 단위 CSS
- Vitest
- React Testing Library
- `@testing-library/user-event`

권장:

- Playwright — 핵심 POV/E2E/teacher-mode smoke

초기에는 없음:

- 서버
- 로그인
- DB
- 원격 저장
- 실시간 멀티플레이
- WebGL/3D 엔진

---

# 3. Scene은 의미 단위이지 범용 엔진 객체가 아니다

역할 Feature가 자기 흐름을 명시적으로 소유한다.

다만 주요 Scene은 다음 의미를 표현할 수 있어야 한다.

```ts
export interface EmbodiedScenePresentation {
  sceneId: string;
  viewpoint: ViewpointSpec;
  body: BodyPresentation;
  environment: EnvironmentPresentation;
  actors: readonly ActorPresentation[];
  interactables: readonly InteractablePresentation[];
  ambience?: AmbiencePresentation;
  treatment?: ScreenTreatmentPresentation;
  attention?: AttentionSpec;
  scaffold?: ScaffoldSpec;
}
```

실제 타입은 구현 시 더 단순할 수 있다.

중요한 것은 **역할 상태와 표현 의미를 분리해 테스트 가능하게 만드는 것**이다.

---

# 4. ViewpointSpec

개념 예:

```ts
export interface ViewpointSpec {
  perspectiveId: string;
  roleId: RoleId;
  pose: 'sitting' | 'standing' | 'walking' | 'crouching' | 'carrying';
  gaze: 'forward' | 'down' | 'left' | 'right' | 'back' | 'focused';
  dayMoment: DayMoment;
}
```

3D 카메라가 아니다.

초기에는 pose/gaze에 따라 CSS/asset/layout을 바꾸는 수준이면 충분하다.

---

# 5. BodyPresentation

```ts
export interface BodyPresentation {
  preset: string;
  visibleParts: readonly string[];
  heldItem?: string;
  burden?: 'none' | 'light' | 'heavy';
  tension?: 'relaxed' | 'alert' | 'tired';
}
```

지원할 body preset은 소수로 제한한다.

예:

- `fire-rest`
- `receive-tool`
- `tool-in-hand`
- `crouch-observe`
- `alert-with-companions`
- `carrying-return`
- `tired-return`

모든 상태 조합을 자산으로 만들지 않는다.

---

# 6. Player Body Identity

```ts
export interface PlayerBodyIdentity {
  perspectiveId: string;
  roleId: RoleId;
  bodyAssetSet: string;
  dominantHand?: 'left' | 'right';
  continuityTags: readonly string[];
}
```

목적:

- 같은 역할의 손/팔/도구 continuity
- 역할 전환 시 다른 몸이라는 명확성
- 최종 자산 관리

금지:

- roleId만으로 성별/연령을 암묵적으로 고정
- Hunt body = male asset 같은 하드코딩

Body identity 세부는 역사/아트 검토 뒤 확정한다.

---

# 7. Cast Anchor

범용 NPC 시스템을 만들지 않는다.

```ts
export interface CastAnchor {
  id: string;
  continuityKey: string;
  crossRoleFunctions: readonly string[];
}
```

예:

- `waiting-person-r`
- `hunt-companion-h1`
- `hunt-companion-h2`

같은 사람의 외형/목소리/역할 간 continuity를 관리하기 위한 최소 식별자다.

---

# 8. Relationship Memory

```ts
export interface RelationshipMemory {
  id: string;
  actorId: string;
  sourceRole: RoleId;
  tags: readonly string[];
}
```

예:

- `stayed-together-under-danger`
- `shared-carry-burden`
- `returned-late`
- `noticed-waiting-person`

원칙:

- 학생에게 점수로 노출하지 않음
- 좋음/나쁨 총점으로 환산하지 않음
- 실제 후속 장면에서 사용하는 memory만 생성

---

# 9. Consequence Model

Hunt 예:

```ts
export interface HuntCompletionDetail {
  foodOutcome: 'food-secured' | 'empty-handed';
  returnTiming: 'earlier' | 'late';
  distanceBurden: 'moderate' | 'far' | 'farther';
  dangerExposure: 'low' | 'heightened';
  carryBurden: 'none' | 'shared' | 'heavy';
  relationshipMemories: readonly RelationshipMemory[];
  returnedToCommunity: true;
}
```

정확한 enum은 구현 시 현재 reducer와 비교해 확정한다.

한 축의 성공/실패로 전체 서사를 결정하지 않는다.

---

# 10. Learning Contract

Narrative Variant가 Learning Invariant를 제거하지 못하도록 기술적으로 검증 가능한 계약을 둔다.

개념:

```ts
export interface LearningEvidence {
  id: string;
  sourceRole?: RoleId;
  tags: readonly string[];
}

export interface ExperienceLearningState {
  evidence: readonly LearningEvidence[];
}
```

예시 evidence:

- `used-tool-in-context`
- `experienced-food-uncertainty`
- `experienced-role-interdependence`
- `experienced-time-distance-constraint`
- `experienced-mobility-pressure`

학생 화면에 ID를 노출하지 않는다.

목적은 점수화가 아니라 **어떤 경로에서도 최종 Concept Bridge에 필요한 경험 근거가 확보됐는지 검증**하는 것이다.

필요한 evidence가 없으면 다른 장면/공통 통합에서 자연스럽게 보충한다.

---

# 11. AttentionSpec

장면의 Primary Attention Target을 표현할 수 있다.

```ts
export interface AttentionSpec {
  targetId: string;
  priority: 'primary' | 'supporting';
}
```

반드시 런타임 타입으로 구현할 필요는 없다.

최소한 테스트/scene config/문서 중 한 곳에서 확인 가능해야 한다.

목적:

- 몸/actor/effect/text 경쟁 방지
- UX QA 기준 제공

---

# 12. Progressive Scaffold

최소 단계:

```ts
export interface ScaffoldSpec {
  level: 0 | 1 | 2 | 3;
  hintId?: string;
}
```

개념적 단계:

- 0: 자연스러운 actor/environment cue
- 1: 은은한 hotspot/cue
- 2: 짧은 행동 문구
- 3: 명확한 hint

학생이 같은 행동에서 반복 막힐 때만 단계 상승을 검토한다.

범용 튜토리얼 엔진은 만들지 않는다.

---

# 13. RoleCompletion vNext

```ts
export interface RoleCompletion<TResultDetail = unknown> {
  roleId: RoleId;
  completed: true;
  sharedSignals: readonly SharedSignal[];
  detail: TResultDetail;
}
```

기존 단순 계약을 유지하는 것을 우선한다.

relationship/consequence/learning 신호를 별도 배열로 늘릴지는 실제 필요가 증명될 때 결정한다.

**타입 개수보다 의미의 명확성이 중요하다.**

---

# 14. World Continuity

공유 후보:

```ts
export interface SharedWorldContinuity {
  sharedMorningSeen: boolean;
  castAnchors: readonly string[];
  sharedMotifs: readonly string[];
  completedRoleSignals: readonly SharedSignal[];
}
```

금지:

- 모든 NPC 상태 전역 저장
- 역할 내부 stage를 Common reducer가 해석
- 모든 선택 로그 저장

다른 역할에서 실제로 회수할 최소 정보만 공유한다.

---

# 15. Narrative Variant Selector

거대한 대화 트리를 만들지 않는다.

```ts
function chooseReturnBeat(detail: HuntCompletionDetail): ReturnBeatId {
  // 작은 테스트 가능한 규칙 집합
}
```

지원 예:

- `late-empty`
- `late-food`
- `earlier-empty`
- `shared-carry`

한 장면에 모든 축의 조합을 만들지 않는다.

중요한 의미 조합만 우선순위를 정한다.

---

# 16. Choice Fairness 기술 검증

주요 선택은 테스트/문서에서 다음을 확인할 수 있어야 한다.

- 선택 전 필요한 observation state 존재
- 최소 두 선택이 진행 가능
- 특정 선택만 핵심 Learning Evidence 독점 금지
- 결과가 deterministic이든 controlled variation이든 앞선 상태와 연결

무작위 요소를 사용한다면 핵심 학습/관계 보상을 임의로 박탈하지 않는다.

---

# 17. Threat Build-up / Recovery

Hunt 역할 내부 stage 예:

```text
ambient-normal
→ anomaly-heard
→ companion-reacts
→ player-observes
→ threat-understood
→ response-choice
→ recovery
```

`danger=true` 즉시 선택 패널을 띄우지 않는다.

범용 Threat Engine을 만들지 않는다.

---

# 18. ScreenTreatmentPresentation

개념:

```ts
export interface ScreenTreatmentPresentation {
  preset?: string;
  intensity?: 'none' | 'subtle' | 'accent';
  motion?: 'none' | 'micro';
  reducedEffectsSafe: true;
}
```

후보 preset:

- `fire-warmth`
- `crouch-shift`
- `threat-attention`
- `dusk-fatigue`
- `return-firelight`
- `blink-perspective-transition`

금지:

- `strong` 기본 preset
- HP damage flash
- 범용 VFX engine

---

# 19. Reduced Effects / Reduced Motion

사용자/OS 환경에 따라 다음을 줄일 수 있어야 한다.

- sway
- transform animation
- motion blur
- blink transition

대체:

- static pose
- instant/fade transition
- actor gaze/contrast cue

모든 Learning Invariants와 선택 정보는 유지한다.

웹 구현은 `prefers-reduced-motion`을 활용할 수 있다.

---

# 20. Perspective Bridge 기술 구조

필요 요소:

- 이전 관점의 마지막 actor/anchor
- 다음 PlayerBodyIdentity
- 같은 불/물건/시간 anchor
- orientation cue
- 짧은 transition

예:

Hunt에서 R을 바라봄
→ 동일한 불/사람 유지
→ transition
→ R의 손이 player body가 됨
→ 필요 시 `같은 아침. 이번에는 불 옆이다.`

3D 카메라 이동 필요 없음.

---

# 21. Reflection / Concept Bridge

역할 종료/공통 저녁 뒤 선택적으로 Micro Reflection을 제공한다.

최종 Concept Bridge는 `LearningEvidence`와 실제 플레이 결과를 참조해 학생의 경험을 교과 개념과 연결한다.

점수표가 아니다.

예:

- 늦은 귀환을 겪었으면 시간/거리 판단을 회상
- Camp 관점을 했으면 기다림과 역할 상호의존을 회상

학생에게 내부 evidence ID는 보이지 않는다.

---

# 22. Player / Teacher / Debug Surface

## Player

- 세계
- 몸
- 사람
- 최소 행동 UI
- 필요한 reflection

## Teacher

후보:

- 현재 major phase
- 재시작/checkpoint 이동
- reduced effects 설정
- 학생이 막혔을 때 hint 상태 확인

학생 화면과 분리한다.

## Debug

- role stage
- pose/gaze
- variant
- memories
- consequence detail
- learning evidence
- treatment preset

Teacher와 Debug를 반드시 같은 UI로 만들 필요는 없다.

---

# 23. Persistence / Classroom Checkpoint

안정된 checkpoint만 저장한다.

후보:

- Cold Open 완료
- completed roles
- role completion details
- selected cross-role memories
- common evening 완료
- multi-day major phase

저장하지 않을 것:

- 모든 gaze
- hover
- animation frame
- 순간 blink/focus state
- 개인정보

---

# 24. Shared Presentation Primitive

후보:

- `EmbodiedExperienceFrame`
- `WorldLayer`
- `BodyLayer`
- `ActorLayer`
- `InteractionHotspot`
- `DialogueBeat`
- `AttentionCue`
- `ScreenTreatmentLayer`
- `TransitionBeat`
- `ReflectionBeat`
- `TeacherPanel`
- `DebugPanel`

이름은 구현 계약이 아니다.

최종 이미지가 한 장으로 합성되어 있다면 레이어를 실제 DOM으로 분리할 필요 없다.

---

# 25. 테스트 전략 v5

## Unit

- reducer transition
- consequence resolution
- relationship memory creation
- variant selector
- completion guard
- learning evidence creation
- treatment/reduced-effects resolution

## Integration

- Common → Role → Completion → Bridge
- cross-role signal
- Learning Invariant coverage
- persistence/checkpoint
- reflection input

## Presentation

- player 화면에 debug text 없음
- 주요 scene body/actor state 존재
- Primary Attention target 관련 cue 존재
- scaffold 단계가 진행 가능
- threat choice 전에 build-up
- reduced effects에서도 동일 action 가능

## E2E

Skeleton:

- Cold Open
- 도구 받기
- actor와 합류
- walking/crouch POV
- treatment on/off
- perspective transition
- teacher/debug separation

Hunt 이후:

- 추적 딜레마
- threat build-up/recovery
- 결과 변주
- 귀환
- R 재회
- Perspective Bridge

자동 테스트는 몰입/감정 효과를 증명하지 않는다.

---

# 26. R2 Stage 07 구현 순서

## A. Player / Teacher / Debug 분리

## B. Embodied Surface

- frame
- body preset
- R/H1/H2
- Cold Open

## C. Clarity

- Primary Attention
- hotspot/scaffold fallback

## D. Screen Treatment

- `fire-warmth`
- `threat-attention` 또는 attention prototype
- `blink-perspective-transition`
- reduced effects

## E. Perspective

- body identity 전환
- orientation cue

## F. Verification

- automated tests
- browser teacher QA

전체 Hunt는 Skeleton 승인 뒤 구현한다.

---

# 27. 하지 않을 것

- WebGL/3D 엔진 선행
- 자유 이동 FPS
- 범용 NPC AI
- 호감도 시스템
- 대규모 대화 트리
- 범용 Scene DSL
- procedural narrative
- 범용 VFX 엔진
- 점수/HP/EXP/ranking
- 전투 시스템
- 모든 UX 문제를 자동화 시스템으로 해결하려는 과설계

---

# 28. Stage 06 Acceptance Criteria

- Embodied POV를 최소 구조로 표현 가능
- Player Body Identity continuity 지원
- 몸 외형을 role gender로 하드코딩하지 않음
- Cast Anchor/Relationship Memory 지원
- 다축 결과와 Narrative Variant 지원
- Learning Invariant coverage를 테스트 가능
- Choice Fairness를 검증할 observation state 존재
- Primary Attention / scaffold를 구현 가능
- Threat build-up/recovery 지원
- screen treatment / reduced effects parity 지원
- Perspective orientation 지원
- Reflection / Concept Bridge 연결 가능
- Player/Teacher/Debug 분리 가능
- classroom checkpoint 지원
- 기존 role boundary와 same-day 시간 원칙 유지
- 과설계 없이 React 기반으로 구현 가능

## 판정

이 기술 설계는 R2 Stage 07 Skeleton의 직접 입력이다.
