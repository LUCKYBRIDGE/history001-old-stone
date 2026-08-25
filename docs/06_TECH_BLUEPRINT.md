# 구석기 역사 체험 웹게임
## Stage 06 — 기술 설계 v6 / Same-Day Embodied Role Architecture

> 목적: Stage 01~05의 최신 R2 설계를 React/TypeScript 브라우저 앱으로 구현할 수 있도록 **최소하고 명시적이며 테스트 가능한 계약**을 고정한다. 기존 Hunt v0.1은 Legacy Functional Prototype이며, 새 설계와 충돌하면 R2 계약을 우선한다.
>
> 상위 기준:
> - `AGENTS.md`
> - `docs/01_PROJECT_CORE.md`
> - `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
> - `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
> - `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
> - `docs/02_EXPERIENCE_STRUCTURE.md`
> - `docs/03_HUNT_STORY.md`
> - `docs/04_HUNT_PLAYFLOW.md`
> - `docs/05_ROLE_EXPERIENCE_MAP.md`

---

# 1. 기술 최상위 구조

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

책임:

## App

- player / teacher / debug surface 진입점
- 기본은 player surface

## Experience Orchestrator

- 학생 플레이 순서
- major phase
- 역할 진입/완료
- Perspective Bridge
- Common Evening 진입
- stable checkpoint

## Same-Day World / Integration

- 같은 날의 stable world facts
- cross-role에 실제로 필요한 질적 신호
- 역할 결과를 Common Evening/후속 관점에서 회수

## Role Features

- Hunt/Gather/Camp 내부 상태와 행동 규칙 소유
- 다른 역할의 내부 stage를 해석하지 않음

## Embodied Presentation

- 몸/시점/사람/interaction/treatment 표현 primitive
- 역할 규칙 소유 금지

---

# 2. 기술 스택

유지:

- React
- TypeScript
- Vite
- `useReducer` / local component state
- 필요한 범위의 Context
- CSS / CSS variables
- Vitest
- React Testing Library
- `@testing-library/user-event`

현재 Stage 07에서 추가하지 않을 것:

- 서버
- 로그인
- DB
- WebGL/3D 엔진
- 범용 state machine 라이브러리
- NPC AI
- VFX 엔진
- 대규모 Scene DSL

Playwright는 실제 필요가 생긴 뒤 도입 가능하지만 Stage 07의 필수 조건은 아니다.

---

# 3. 시간 모델 — Play Sequence와 World Time 분리

가장 중요한 신규 계약이다.

학생 세션:

```ts
export interface ExperienceSessionProgress {
  currentRole: RoleId | null;
  completedRoles: readonly RoleId[];
}
```

세계 시간:

```ts
export interface SharedDayContext {
  experienceId: string;
  communityId: string;
  dayId: 'day-1';
  sharedMorningSeen: boolean;
}
```

핵심:

- `completedRoles`는 **학생이 어떤 관점을 이미 플레이했는가**를 나타낸다.
- `dayId`는 역할 세 개가 같은 날에 속한다는 world identity다.
- 역할을 완료했다고 `dayId`를 증가시키지 않는다.
- 세 역할 + Common Evening 이후에만 later-days phase를 별도로 시작한다.

# **세션 진행 상태와 역사 세계 시간을 같은 값으로 표현하지 않는다.**

---

# 4. Same-Day World Facts와 Cross-Role Signal

공유 정보는 두 종류로 나눈다.

## Stable World Facts

같은 날 역할 순서와 무관하게 유지되는 정보.

예:

```ts
export interface SharedWorldFacts {
  dayId: string;
  communityId: string;
  sharedMorningId: string;
  motifIds: readonly string[];
  castIds: readonly string[];
}
```

## Cross-Role Signal

한 관점에서 생긴 결과를 다른 관점의 **후속 표현**에 쓰는 질적 신호.

기존 `SharedSignal` 형태를 우선 유지한다.

좋은 신호:

- `hunt-returned-late`
- `hunt-returned-with-food`
- `hunt-shared-carry`

금지:

- 모든 클릭 기록
- role 내부 stage
- actor 모든 내부 상태
- animation/treatment 순간 상태

Cross-role signal은 다른 역할의 과거를 소급 변경하지 않는다.

---

# 5. RoleCompletion은 단순하게 유지

현재 계약을 최대한 보존한다.

```ts
export interface RoleCompletion<TResultDetail = unknown> {
  roleId: RoleId;
  completed: true;
  sharedSignals: readonly SharedSignal[];
  detail: TResultDetail;
}
```

원칙:

- 역할 내부 detail은 역할이 소유
- Common은 `sharedSignals`와 필요한 통합 detail만 읽음
- 점수/HP/EXP 추가 금지
- 관계/학습/treatment를 무조건 별도 전역 배열로 늘리지 않음

# **실제로 후속 장면에서 필요할 때만 계약을 확장한다.**

---

# 6. Scene-State와 Cinematic Beat

Stage 04의 핵심을 기술적으로 보존한다.

## Scene state

Reducer/state에 올릴 가치가 있는 것:

- 목표가 달라짐
- 직접 행동 가능성이 달라짐
- 결과/관계/위치/시간이 의미 있게 달라짐

## Beat

state enum으로 만들 필요가 없는 것:

- actor가 잠깐 멈춤
- 시선 이동
- sound drop
- 짧은 jolt
- focus 변화
- 대사 한 줄
- 손이 올라오는 transition

필요하면 component-local transient state 또는 CSS transition으로 처리한다.

# **모든 연출을 reducer stage로 만들지 않는다.**

---

# 7. Stage 07에 필요한 최소 Scene 모델

범용 Scene Engine을 만들지 않는다.

Stage 07 Skeleton은 작은 명시적 상태만 있으면 된다.

예:

```ts
export type SkeletonStep =
  | 'orientation'
  | 'fire'
  | 'receive-tool'
  | 'join'
  | 'depart'
  | 'crouch-proof'
  | 'perspective-proof';
```

이 타입은 **Skeleton 전용**이다.

향후 Hunt 전체의 generic Scene DSL로 승격하지 않는다.

---

# 8. Role-True Perspective Contract

Stage 07부터 presentation이 현재 관점을 명시적으로 알 수 있어야 한다.

```ts
export interface RolePerspectiveContext {
  roleId: RoleId;
  perspectiveLabel: string;
  dayId: string;
}
```

player-facing에서는:

- 역할 시작 시 perspective label을 짧게 노출 가능
- role 내부에서는 반복 label을 고정 HUD처럼 노출하지 않아도 됨
- 다른 역할의 내부 정보/속마음/미래 결과를 player text에 넣지 않음

Debug에서는 현재 role/step을 볼 수 있다.

---

# 9. Embodied Presentation — 필요한 만큼만

범용 asset engine 대신 소수의 명시적 presentation state를 사용한다.

```ts
export type BodyPose =
  | 'fire-rest'
  | 'receive-tool'
  | 'standing-with-tool'
  | 'walking-with-tool'
  | 'crouch-observe';

export interface BodyPresentation {
  pose: BodyPose;
  heldItem: 'stone-tool' | null;
  emotionalTone?: 'neutral' | 'alert' | 'hesitant' | 'relieved';
}
```

Skeleton은 silhouette / CSS shape / placeholder로 충분하다.

목표는 최종 아트가 아니라:

- body placement
- pose 변화
- tool continuity
- actor와의 spatial relation

검증이다.

---

# 10. Cast Anchor

범용 NPC 모델 없음.

Stage 07 최소 anchor:

```ts
export type SkeletonActorId = 'r' | 'h1' | 'h2';
```

각 actor에 필요한 것:

- 화면 위치
- 짧은 label/대사
- player와의 관계 기능

관계 기억은 실제 후속 장면에서 쓸 것만 만든다.

---

# 11. Relationship / Emotional Consequence

관계는 점수로 저장하지 않는다.

예:

```ts
export type RelationshipMemoryId =
  | 'noticed-r-before-departure'
  | 'pressed-on-despite-fatigue'
  | 'stayed-close-under-danger'
  | 'shared-carry-burden'
  | 'returned-late';
```

감정 자체를 boolean으로 강제 저장하지 않는다.

예를 들어 `guilt=true`보다:

```text
returned-late
+
R의 기다린 흔적
+
재회 반응
```

이 감정을 만들게 한다.

필요 시 `emotionalCallbackId`처럼 **표현용 callback**을 둘 수 있지만 점수화하지 않는다.

---

# 12. Choice Fairness 기술 기준

Choice Fairness는 결과 평등이 아니다.

테스트 가능한 조건:

- 선택 전에 관련 observation state가 존재
- 가능한 선택이 최소 2개 이상
- 결과 규칙이 앞선 상태와 연결
- 더 나쁜 결과가 있어도 deterministic/controlled rule로 설명 가능
- 학생 인격을 평가하는 score를 만들지 않음
- 한 선택만 필수 역사 콘텐츠를 독점하지 않음

불확실성은 허용한다.

# **자의적인 벌은 피하고, 납득 가능한 위험은 허용한다.**

---

# 13. Learning Evidence는 QA용 증거

학생 점수가 아니다.

```ts
export interface LearningEvidence {
  id: string;
  sourceRole: RoleId;
}
```

Hunt 후보:

- `tool-used-in-context`
- `hunt-begins-with-observation`
- `discovery-does-not-guarantee-food`
- `time-distance-constrained`
- `human-vulnerable-in-nature`
- `return-to-community-matters`

Stage 07 Skeleton 최소 evidence:

- `tool-used-in-context`
- `embodied-observation-performed`

목적:

- 어떤 핵심 경험이 실제 상호작용으로 존재했는지 테스트
- 마지막 개념화/교사 QA 지원

학생에게 배지/점수로 노출하지 않는다.

---

# 14. Screen Treatment Contract

최신 강도:

```ts
export type ScreenTreatmentIntensity =
  | 'none'
  | 'subtle'
  | 'accent'
  | 'strong-accent';
```

Stage 07 후보 preset:

```ts
export type SkeletonTreatmentPreset =
  | 'none'
  | 'fire-warmth'
  | 'standing-shift'
  | 'walking-air'
  | 'crouch-focus'
  | 'perspective-transition';
```

Stage 07에서는 horror strong-accent를 억지로 넣지 않아도 된다.

다만 구조는 향후 Hunt Threat에서 `strong-accent`를 지원할 수 있어야 한다.

원칙:

# **Subtle by default. Strong when earned.**

반복 HP damage flash 금지.

---

# 15. Reduced Effects Resolver

효과를 끄면 내용이 사라지면 안 된다.

간단한 resolver면 충분하다.

```ts
function resolveTreatment(
  preset: SkeletonTreatmentPreset,
  reducedEffects: boolean,
): SkeletonTreatmentPreset {
  if (!reducedEffects) return preset;

  if (preset === 'standing-shift' || preset === 'perspective-transition') {
    return 'none';
  }

  return preset;
}
```

실제 구현은 더 세밀할 수 있다.

Reduced Effects에서 유지해야 하는 것:

- actor position
- body pose 의미
- 선택 정보
- 대사
- historical/relationship event

---

# 16. Scaffold는 로컬하고 점진적으로

범용 튜토리얼 엔진 없음.

Skeleton 도구 전달 정도에서만 검증한다.

```ts
export type HintLevel = 0 | 1 | 2 | 3;
```

- 0: actor gesture
- 1: 약한 cue
- 2: 짧은 행동 문구
- 3: 명확한 hint

Stage 07에서는 시간 자동 증가 엔진까지 만들 필요 없다.

테스트에서는 수동/명시적 hint 진행이 가능한지만 확인해도 된다.

---

# 17. Player / Teacher / Debug 분리

현재 Legacy runtime의 가장 큰 구조 부채다.

## Player

보이면 안 되는 것:

- Stage 번호
- reducer phase
- internal step ID
- debug signal
- `Vertical Slice v0.1`
- 개발용 toolbar

보일 수 있는 것:

- 현재 역할 관점의 짧은 진입 표시
- 세계/몸/사람
- 직접 행동
- 필요한 최소 안내

## Teacher

명시적으로 열었을 때만:

- 처음부터/현재 skeleton 재시작
- reduced effects 토글
- 현재 major step 정도

학생 화면과 시각적으로 분리한다.

## Debug

개발 환경 + 명시적 opt-in에서만:

- exact step ID
- body pose
- treatment preset
- reduced effects
- evidence/memory

# **기본 URL/기본 렌더는 Player surface다.**

---

# 18. Stage 07 진입 모드

기존 Legacy Hunt v0.1을 삭제하지 않는다.

개발 중 비교 가능하게 한다.

권장:

- 기본 앱: R2 Stage 07 Skeleton
- 개발 환경에서 `?legacy=1`: 기존 ExperienceOrchestrator
- 개발 환경에서 `?teacher=1`: Skeleton teacher controls
- 개발 환경에서 `?debug=1`: Skeleton debug surface

프로덕션 빌드에서는 legacy/debug 진입을 제품 기능처럼 노출하지 않는다.

---

# 19. AppShell 원칙

현재의

```text
Stage 08-B · Hunt Vertical Slice v0.1
현재 단계: ...
프로토타입 안내 footer
```

는 player surface에서 제거한다.

Skeleton은 화면 자체가 체험의 입구여야 한다.

AppShell은 구조/접근성 컨테이너만 담당하고 개발 메타데이터를 표시하지 않는다.

---

# 20. Persistence

Stage 07 Skeleton은 짧으므로 모든 순간을 저장하지 않는다.

기존 ExperienceStorage는 Legacy 경로를 유지한다.

R2 Skeleton에 persistence가 필요하다면 stable checkpoint만 고려한다.

Stage 07 필수 구현에는 로컬 저장을 새로 추가하지 않아도 된다.

---

# 21. Common Evening / Cross-Role 계약

Stage 07에서는 Common Evening을 새로 구현하지 않는다.

하지만 Stage 06은 향후 계약을 명확히 한다.

- 세 역할의 같은 날 관점이 모두 끝난 뒤 한 번 실행
- `completedRoles`는 play completion이지 world clock이 아님
- role completion sharedSignals를 장면 변주에 사용
- 한 역할 결과로 다른 역할의 이미 지나간 과거를 소급 변경 금지

---

# 22. 테스트 전략

## Legacy regression

기존 테스트는 계속 통과해야 한다.

- ExperienceOrchestrator
- Hunt v0.1 reducer
- completion
- storage
- integration

## Stage 07 Skeleton unit/presentation

검증:

1. player surface에 개발 메타데이터가 없음
2. role orientation 표시
3. 도구 받기 전/후 held item continuity
4. fire → receive → join → depart → crouch 진행
5. body pose가 step에 따라 변함
6. reduced effects에서도 진행 가능
7. teacher controls는 player 기본 화면에 없음
8. debug data는 explicit debug mode에만 있음
9. perspective proof에서 새 역할 관점이 명확함
10. 최소 Learning Evidence 생성

자동 테스트는 `진짜 몰입되었다`를 증명하지 않는다.

---

# 23. Stage 07 구현 순서

1. AppShell의 legacy dev chrome 제거
2. R2 Skeleton local state 구현
3. role orientation
4. fire / tool receive / join / depart / crouch proof
5. body/actor/world placeholder composition
6. treatment + reduced effects
7. teacher/debug explicit surface
8. perspective transition proof
9. tests
10. 브라우저 교사 QA 준비

전체 Hunt는 Stage 07 승인 뒤 Stage 08에서 구현한다.

---

# 24. 하지 않을 것

- 전체 Hunt v6를 이번 Skeleton에 구현
- Gather/Camp 본체 구현
- 3D/FPS
- 범용 Scene Engine
- 범용 NPC/Dialogue Engine
- generic VFX system
- 전역 관계 점수
- 모든 body/treatment 조합 타입 생성
- transient beat를 전역 reducer에 저장
- Stage 07을 최종 아트 품질로 평가

---

# 25. Stage 06 Acceptance Gate

- Student Play Order와 same-day world time이 기술적으로 구분되는가?
- RoleCompletion 단순 계약을 보존하는가?
- Scene와 Beat를 구분해 state 폭발을 막는가?
- Role-True limited POV를 presentation 계약이 지원하는가?
- Embodied body/held-item continuity를 표현 가능한가?
- 관계/감정이 점수 대신 사건 memory/callback으로 표현되는가?
- Choice Fairness가 `결과 평등`으로 잘못 구현되지 않는가?
- `strong-accent`를 드물게 지원하되 기본값으로 만들지 않는가?
- Reduced Effects가 동일한 사건 의미를 유지하는가?
- Player/Teacher/Debug가 기본적으로 분리되는가?
- Stage 07 Skeleton을 작은 local state로 구현할 수 있는가?
- Legacy Hunt v0.1을 보존하면서 새 기본 체험을 만들 수 있는가?
- 향후 Common Evening이 세 역할 완료 뒤 한 번 실행되는 구조를 침해하지 않는가?

## 판정

이 문서는 R2 Stage 07 Skeleton의 직접 구현 입력이다.
