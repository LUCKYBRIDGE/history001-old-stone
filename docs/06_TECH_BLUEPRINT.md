# 구석기 역사 체험 웹게임
## Stage 06 — 기술 설계 v3 / Embodied Narrative Architecture

> 목적: Stage 01~05 Design Reboot R2를 실제 브라우저 앱으로 구현할 수 있도록 최소 기술 구조를 다시 정의한다. 기존 Hunt v0.1 코드는 참고 가능한 기능 프로토타입이지만 이 문서보다 우선하지 않는다.
>
> 상위 기준:
> - `AGENTS.md`
> - `docs/01_PROJECT_CORE.md`
> - `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
> - `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - `docs/02_EXPERIENCE_STRUCTURE.md`
> - `docs/05_ROLE_EXPERIENCE_MAP.md`

---

# 1. 기술 최상위 결론

기존의 역할 경계는 유지하되, 세계·관계·관점 연속성을 위한 얇은 Integration 층을 명확히 둔다.

# **App → Experience Orchestrator → World Continuity / Integration → Common Experience / Role Features → Embodied Presentation UI**

원칙:

1. Experience Orchestrator는 큰 진행만 책임진다.
2. Hunt / Gather / Camp는 각자 내부 플레이 규칙을 소유한다.
3. `World Continuity / Integration`은 역할 플레이 규칙을 소유하지 않는다.
4. 공통층은 반복 인물·공통 모티프·역할 간 회수에 필요한 최소 의미만 전달한다.
5. Embodied UI는 표현 primitive를 제공하지만 역할의 게임 규칙을 알지 않는다.
6. 범용 Scene Engine, NPC AI Engine, Quest Engine을 만들지 않는다.

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

도입 권장:

- Playwright: 핵심 POV/E2E 경로

초기에는 계속 없음:

- 서버
- 로그인
- DB
- 원격 저장
- 실시간 멀티플레이

---

# 3. Embodied View는 기술적 1급 개념이다

이제 `ExperienceFrame`은 단순 배경 컨테이너가 아니다.

장면은 최소한 다음 레이어/의미를 표현할 수 있어야 한다.

```ts
export interface EmbodiedScenePresentation {
  sceneId: string;
  viewpoint: ViewpointSpec;
  body: BodyPresentation;
  environment: EnvironmentPresentation;
  actors: readonly ActorPresentation[];
  interactables: readonly InteractablePresentation[];
  ambience?: AmbiencePresentation;
}
```

실제 타입은 구현 단계에서 최소화해도 된다. 중요한 것은 의미 분리다.

---

# 4. ViewpointSpec

역할마다 POV 일관성이 필요하다.

개념 예시:

```ts
export interface ViewpointSpec {
  roleId: RoleId;
  pose: 'sitting' | 'standing' | 'walking' | 'crouching' | 'carrying';
  gaze: 'forward' | 'down' | 'left' | 'right' | 'back' | 'focused';
  dayMoment: DayMoment;
}
```

이것은 3D 카메라 엔진을 뜻하지 않는다.

초기 구현에서는 pose/gaze에 따라 적절한 장면 구성과 CSS/이미지 자산을 선택하는 수준이면 충분하다.

---

# 5. BodyPresentation

몸은 장식 overlay가 아니라 장면 상태다.

개념 예시:

```ts
export interface BodyPresentation {
  visibleParts: readonly ('left-hand' | 'right-hand' | 'forearm' | 'knees' | 'legs' | 'feet')[];
  heldItem?: string;
  burden?: 'none' | 'light' | 'heavy';
  tension?: 'relaxed' | 'alert' | 'tired';
}
```

초기 프로토타입에서 모든 조합을 이미지로 만들지 않는다.

필요한 주요 상태만 명시적으로 지원한다.

예:

- fire-rest
- tool-in-hand
- crouch-observe
- alert-with-companions
- carrying-return
- tired-return

분기 폭발을 막기 위해 **소수의 의미 있는 body pose preset**을 둔다.

---

# 6. Player Body Identity

역할마다 다른 사람의 몸을 빌린다는 것을 기술적으로 표현한다.

```ts
export interface PlayerBodyIdentity {
  perspectiveId: string;
  roleId: RoleId;
  bodyAssetSet: string;
  dominantHand?: 'left' | 'right';
  continuityTags: readonly string[];
}
```

학생에게 ID를 보여주지 않는다.

목적:

- 같은 역할 내 손/팔/도구 일관성
- 역할 전환 시 다른 몸으로 바뀌는 명확성
- 최종 아트 자산 continuity 관리

---

# 7. 반복 등장 인물 — Cast Anchor

범용 NPC 시스템을 만들지 않는다.

공통으로 필요한 것은 소수 인물의 **동일성**이다.

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

실제 이름·외형은 별도 역사/아트 문서가 소유한다.

Common Shell은 캐릭터 AI를 돌리지 않는다.

---

# 8. 관계 상태 — 숫자 대신 Memory Signal

호감도 수치를 사용하지 않는다.

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

역할 내부 기억은 역할이 소유한다.

다른 관점/공통 저녁에서 실제로 필요한 기억만 RoleCompletion을 통해 공유한다.

---

# 9. Consequence Model — 다축 질적 상태

기존처럼 `food-secured / empty-handed` 하나만 결과 의미를 대표하지 않는다.

Hunt detail 예시:

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

정확한 enum은 구현 과정에서 현재 reducer와 비교해 확정한다.

원칙:

## **한 축의 성공/실패로 전체 서사를 결정하지 않는다.**

---

# 10. RoleCompletion vNext 방향

공통 계약은 질적 신호를 유지한다.

```ts
export interface RoleCompletion<TResultDetail = unknown> {
  roleId: RoleId;
  completed: true;
  sharedSignals: readonly SharedSignal[];
  relationshipSignals?: readonly SharedSignal[];
  consequenceSignals?: readonly SharedSignal[];
  detail: TResultDetail;
}
```

실제 구현에서 배열을 분리할지 기존 `sharedSignals.tags`로 유지할지는 단순성을 비교해 결정한다.

중요한 것은 **의미 카테고리**이지 타입 개수 증가가 아니다.

---

# 11. WorldContinuity

역할 간 공유가 필요한 최소 데이터만 둔다.

후보:

```ts
export interface SharedWorldContinuity {
  sharedMorningSeen: boolean;
  castAnchors: readonly string[];
  sharedMotifs: readonly string[];
  completedRoleSignals: readonly SharedSignal[];
}
```

추가 여부는 실제 구현에서 증명한다.

금지:

- 모든 NPC 상태를 전역 저장
- 역할 내부 stage를 전역으로 승격
- Hunt 선택 전체 로그를 Common reducer가 해석

---

# 12. Narrative Variant Selector

비획일적 결과를 위해 거대한 대화 트리 엔진을 만들지 않는다.

필요한 장면에서 명시적으로 변주를 선택한다.

개념:

```ts
function chooseReturnBeat(detail: HuntCompletionDetail): ReturnBeatId {
  // 작은 규칙 집합
}
```

예:

- late + empty-handed
- late + food-secured
- earlier + empty-handed
- shared-carry

이런 몇 개의 의미 있는 조합만 우선 지원한다.

규칙 우선순위는 테스트 가능해야 한다.

---

# 13. 재수렴 구조

기술적으로 다음을 선호한다.

```text
공통 주요 장면
→ 선택/상태 변화
→ 짧은 변주
→ 공통 주요 장면
→ 이전 상태를 다시 회수하는 변주
```

각 선택마다 완전히 새로운 컴포넌트 트리를 만들지 않는다.

목표:

- 선택 의미 유지
- 개발량 통제
- 테스트 가능성 유지

---

# 14. Threat Build-up

위험 이벤트는 `danger=true`가 되자마자 선택 패널을 띄우지 않는다.

역할 내부 상태는 최소 몇 Beat를 가질 수 있다.

예:

```text
ambient-normal
→ anomaly-heard
→ companion-reacts
→ player-observes
→ threat-understood
→ response-choice
```

이것을 범용 위협 엔진으로 만들지 않는다.

HuntFeature 내부의 명시적 stage/beat로 구현할 수 있다.

---

# 15. Perspective Bridge 기술 구조

Perspective Bridge는 새로운 역할 메뉴보다 **시각 continuity transition**을 지원해야 한다.

필요 요소:

- 이전 관점의 마지막 actor
- 다음 관점의 PlayerBodyIdentity
- 같은 장소/불/시간 anchor
- 짧은 transition beat

예:

Hunt에서 R을 바라봄
→ R 중심으로 transition
→ 다음 관점에서 R의 손/몸이 player body가 됨

이 구현은 CSS transition + asset/state 교체만으로도 가능하다.

3D 카메라 이동은 필수 아님.

---

# 16. Shared Presentation Primitive v3

공통으로 재사용할 수 있는 것은 표현 수단이다.

후보:

- `EmbodiedExperienceFrame`
- `BodyLayer`
- `WorldLayer`
- `ActorLayer`
- `InteractionHotspot`
- `GazeControl`
- `DialogueBeat`
- `AmbientAudioLayer`
- `TransitionBeat`
- `DebugPanel`

주의:

레이어 이름은 구현 편의에 따라 바꿀 수 있다.

최종 이미지가 완전 합성된 한 장이라면 BodyLayer를 별도로 두지 않아도 된다.

## **기술 레이어 분리는 최종 시각이 분리되어 보여야 한다는 뜻이 아니다.**

광원·가림·원근이 자연스러운 하나의 시야가 최종 목표다.

---

# 17. 이미지 자산 전략

초기 프로토타입:

- CSS
- 단순 배경
- 임시 body silhouette
- hotspot

등으로 상호작용과 POV 구조를 검증할 수 있다.

최종 자산 단계:

- 역할별 Player Body Continuity Sheet
- POV height / lens 느낌 / gaze 기준
- 손·팔·도구 연속성
- 반복 인물 continuity
- scene별 광원

을 선행한다.

최종 이미지 생성 요청은 `배경`이 아니라 **POV composition** 단위로 만든다.

---

# 18. 사운드

사운드는 1인칭 공간감을 강화한다.

우선순위:

1. 공간 ambience
2. 몸/행동 소리
3. 사람의 위치가 느껴지는 짧은 대사
4. 위협 징후
5. 음악

위험을 음악만으로 알려주지 않는다.

---

# 19. 접근성

- 모션 감소
- 과도한 화면 흔들림 금지
- 소리 정보의 시각 보조
- 충분한 hotspot 크기
- 키보드/포인터 기본 접근성
- 중요한 정보가 이미지의 미세한 한 점에만 있지 않게 함
- 긴 텍스트를 줄여도 의미 있는 대체 텍스트/설명 구조 유지

---

# 20. Persistence

초기에는 stable checkpoint만 저장한다.

저장 후보:

- completed roles
- role completion details
- cross-role에 필요한 selected memories
- current major phase

저장하지 않을 것:

- 모든 시선 이동
- 모든 hover
- 짧은 애니메이션 beat
- 개인 식별 정보

---

# 21. Debug와 Player Surface 분리

Player-facing:

- 세계
- 몸
- 사람
- 필요한 최소 행동 UI

Debug:

- role stage
- pose/gaze
- selected variant
- relationship memories
- consequence detail
- RoleCompletion

Debug 정보가 기본 화면에 나오면 몰입 Gate 실패다.

---

# 22. 테스트 전략 v3

## Unit

- reducer state transition
- qualitative result resolution
- relationship memory creation
- narrative variant selection
- completion guard

## Integration

- Common/Perspective → Role → completion → Bridge
- cross-role shared signal 전달
- persistence

## Presentation tests

- player-facing에서 debug text 없음
- 주요 Scene에서 필요한 body state 존재
- interaction 뒤 actor/world response 존재
- threat choice 전에 threat build-up beat 존재

## E2E

최소 Hunt 경로:

- Cold Open
- 도구 받기
- 사람들과 출발
- 흔적 관찰
- 발견
- 추적 딜레마
- 위협 build-up
- 귀환
- R 재회
- Perspective Bridge

성공/빈손뿐 아니라 `late/earlier`, 관계 변주 중 최소 몇 개를 검증한다.

자동 테스트는 감정을 증명하지 않는다.

---

# 23. 구현 순서

기존 Hunt v0.1을 한 번에 덮어쓰지 않는다.

## Phase A — Embodied Surface

- player/debug 분리
- Embodied frame
- 몸 pose preset
- Cold Open

## Phase B — Relationship

- R/H1/H2 continuity
- actor reaction
- relationship memory

## Phase C — Dilemma/Threat

- 딜레마 정보 선행
- threat build-up
- 다축 consequence

## Phase D — Return/Recontextualization

- return variants
- R reaction variants
- Perspective Bridge

각 Phase마다 기존 자동 테스트를 유지/수정하고 브라우저 플레이를 검증한다.

---

# 24. 하지 않을 것

- WebGL/3D 엔진을 몰입의 전제조건으로 삼기
- 자유 이동 FPS 만들기
- 범용 NPC AI
- 호감도 시스템
- 대규모 대화 트리 엔진
- 범용 Scene DSL
- procedural narrative
- 점수/HP/EXP/ranking
- 전투 시스템

---

# 25. Stage 06 Acceptance Criteria

- Embodied POV를 기술적으로 표현할 최소 구조가 있음
- 역할별 Player Body Identity를 지원 가능
- 반복 인물 continuity를 지원 가능
- 역할 내부 관계 기억과 cross-role 최소 공유를 구분함
- 다축 질적 결과를 지원함
- narrative variant를 작은 규칙으로 선택 가능
- 재수렴형 분기를 과설계 없이 구현 가능
- Threat build-up을 선택 이전 Beat로 표현 가능
- Perspective Bridge를 시점 전환으로 구현 가능
- 기존 역할 경계와 same-day 시간 원칙 유지
- player/debug surface 분리
- 자동 테스트 가능성 유지

## 판정

이 기술 설계가 승인되기 전에는 기존 Hunt v0.1을 새 방향의 최종 구현으로 간주하지 않는다.
