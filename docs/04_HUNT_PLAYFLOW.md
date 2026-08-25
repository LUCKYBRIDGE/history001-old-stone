# 구석기 역사 체험 웹게임
## Stage 04 — Hunt PLAYFLOW v6 / Scene-State + Embodied Beat Contract

> 목적: Hunt STORY v6를 실제 브라우저 상호작용으로 변환한다. `Scene`을 무조건 페이지/컴포넌트로 만들지 않고 **상태·행동의 의미 단위**로 정의하며, 장면 안의 정적·시선·효과 변화는 `Beat`로 처리한다.
>
> 상위 기준:
> - `docs/01_PROJECT_CORE.md`
> - `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
> - `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
> - `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
> - `docs/02_EXPERIENCE_STRUCTURE.md`
> - `docs/03_HUNT_STORY.md`

---

# 1. Scene과 Beat를 구분한다

## Scene

다음 중 하나 이상이 바뀌는 의미 단위다.

- 플레이어 목표
- 직접 가능한 행동
- 역할 내부 상태
- 위치/시간의 큰 변화
- 결과/관계 memory

## Beat

같은 Scene 안에서 일어나는 짧은 변화다.

- 사람이 멈춤
- 시선이 이동
- 소리가 사라짐
- 손이 올라옴
- focus/jolt/red-dark accent
- 짧은 대사

# **연출 beat마다 새 stage/컴포넌트를 만들지 않는다.**

Stage 04의 번호는 서사 순서를 위한 것이며 구현 파일 개수를 의미하지 않는다.

---

# 2. 기본 플레이 문법

# **상황을 본다 → 사람/몸이 반응한다 → 직접 살핀다 → 판단한다 → 세계가 반응한다 → 결과가 남는다**

피할 것:

- 제목 → 설명 → 버튼의 반복
- 선택지가 상황보다 먼저 등장
- 정답/오답 피드백
- 모든 장면에 동일한 3버튼 UI
- 의미 없는 클릭 수 증가
- 연출을 stage enum으로 과도하게 세분화

---

# 3. 주요 Scene의 필수 설계 계약

구현 전 다음을 확인한다.

1. `sceneId`
2. `location`
3. `dayMoment / light`
4. `roleTrueKnowledge` — 이 인물이 지금 알 수 있는 정보
5. `viewpoint / gaze`
6. `visible body / held item`
7. `actors / positions`
8. `primaryAttention`
9. `environment / sound`
10. `directAction`
11. `immediateResponse`
12. `state / consequence / relationship memory`
13. `learningContribution`
14. `treatment` — none/subtle/accent/strong-accent
15. `scaffoldFallback`
16. `futureCallback`

모든 항목을 런타임 타입으로 만들 필요는 없다.

하지만 구현/테스트/문서 중 어디에서도 확인할 수 없다면 누락된 계약이다.

---

# 4. Stage 07 Skeleton 범위

전체 Hunt를 만들기 전에 다음 구간만 실제 브라우저로 구현한다.

```text
Role orientation
→ Scene A 새벽 불 앞
→ Scene B 도구 전달
→ Scene C 함께 일어나 합류
→ Scene D 거처를 떠나는 첫 걸음
→ Scene E 몸 낮춰 관찰하는 짧은 POV proof
→ 짧은 Perspective transition proof
```

검증 목표:

- Role-True POV
- 몸/사람/환경 한 공간감
- 손-도구-상대 손 상호작용
- walking/crouch body grammar
- first-action clarity
- player/teacher/debug 분리
- treatment intensity/reduced effects
- transition 명료성

Skeleton에서 Hunt 결과/위험 전체를 구현하지 않는다.

---

# 5. Scene A — 새벽 불 앞

### 목표

`게임 시작 화면`보다 이미 그곳에 있다는 느낌.

### POV

불 가까이 앉아 있음.

### Body

손/팔 일부/무릎 일부.

### Actors

R이 가까이 있음. H1/H2는 주변에서 준비 중.

### Primary Attention

불 → R → R의 손.

### Player knowledge

아침이고 사람들이 움직이기 시작했다는 것만 안다.

### Treatment

`fire-warmth` subtle.

### Scaffold

아직 직접 행동을 요구하지 않으므로 과한 hotspot 없음.

---

# 6. Scene B — 도구 전달

R이 돌도구를 내민다.

### Primary Attention

# **R의 손 → 돌도구 → 내 손**

### Action

도구를 받는다.

### Immediate Response

- 내 손이 도구를 쥠
- R이 시선을 유지하거나 짧은 말을 함
- 이후 장면에서 같은 도구가 계속 내 손/몸과 연결됨

### Learning

도구가 시대 설명 카드가 아니라 생활 행동 속에 들어온다.

### Scaffold

1. R의 시선/손 움직임
2. 도구의 작은 시각 cue
3. hotspot
4. `도구를 받는다` 짧은 문구

---

# 7. Scene C — 함께 움직인다

H1/H2가 일어난다.

> “같이 가자.”

학생은 시선을 옮기고 일어난다.

### Body Beat

앉은 시점 → 일어나는 시점.

필요하면 짧은 blink/fade 또는 viewpoint shift.

### Relationship

NPC 안내가 아니라 **같이 가는 사람들**이라는 감각이 중요하다.

---

# 8. Scene D — 출발

R:

> **“해가 지기 전에 돌아와.”**

그 말을 들은 뒤 H1/H2와 거처를 떠난다.

### World Beat

- 불빛 감소
- 사람 소리 감소
- 자연 소리 증가

### Body

도구 든 손/팔 일부.

### Learning

거리와 귀환의 seed.

### Memory

R의 말은 callback seed로 남긴다.

---

# 9. Scene E — 몸 낮추기 / 관찰 proof

Stage 07에서는 전체 흔적 탐색을 만들지 않아도 된다.

짧은 관찰 대상으로:

- 지면의 눌린 풀
- 흙의 변화

중 하나를 사용한다.

### Action

학생이 지면을 살핀다.

### Body

시야가 아래로 내려가고 손/무릎/지면이 한 공간에 들어온다.

### Purpose

`배경 + 손 PNG`가 아니라 pose에 따라 body composition이 달라지는지 검증한다.

---

# 10. Stage 08 이후 Scene F — 실제 흔적 탐색

여러 지점을 살핀다.

가능한 관찰:

- 의미 있는 흔적
- 애매한 흔적
- 아무것도 없음

오답 표시 없음.

H2는 정답을 말하지 않고 행동/시선으로 돕는다.

---

# 11. Scene G — 발견 전 정적 / 발견

같은 Scene 안의 Beat:

```text
평상시 탐색
→ H1 정지
→ H2 시선 고정
→ 환경 소리 변화
→ 학생이 방향 확인
→ 사냥감 발견
```

`H1 정지`, `소리 변화`, `발견`을 각각 별 stage로 만들 필요 없다.

---

# 12. Scene H — 접근 / 첫 시도

선택 전 관찰 정보가 있어야 한다.

가능한 의도:

- 기다린다.
- 조금 가까이 간다.
- 지금 시도한다.

결과:

- 잠깐의 기회
- 대상 이동
- 흔적 지속
- 놓침

반응속도/조준 점수 없음.

---

# 13. Scene I — 추적 딜레마

선택지를 띄우기 전에 다음을 순차적으로 보여준다.

1. 아직 이어지는 가능성
2. 낮아진 해
3. 보이지 않는 거처
4. H1/H2의 몸 상태
5. R의 아침 말 기억 가능성

선택:

- 더 따라간다.
- 돌아갈 때를 생각한다.
- 주변/해/사람 상태를 더 확인한다.

결과는 같을 필요가 없다.

더 밀어붙이면 더 좋은 기회와 더 큰 부담이 동시에 생길 수 있다.

---

# 14. Scene J — Threat / Horror

Threat는 하나의 Scene 안에서 여러 Beat로 쌓는다.

```text
정적
→ 이상한 소리/흔적
→ H1/H2 반응
→ 내 몸 정지
→ 직접 확인
→ 가까운 움직임
→ 필요 시 strong-accent
→ 대응 판단
→ 회피/거리 확보
→ 잔여 긴장
```

### 가능한 treatment

- `subtle`: 정지, focus, 주변부 명암
- `accent`: 짧은 dark/red peripheral wash, sound emphasis
- `strong-accent`: 드문 가까운 움직임에서 한 번의 jolt/강한 명암·소리

### 금지

- 반복 damage flash
- enemy HP
- 처치 루프
- 의미 없는 jump scare 반복

공포는 자연 속 인간의 취약함과 연결한다.

---

# 15. Scene K — 결과

결과는 단일 성공 여부가 아니다.

최소 축:

- food outcome
- return timing
- distance burden
- danger exposure
- carry burden
- relationship memory

## food-secured

기쁨/성취가 가능하지만 운반·시간·거리 부담이 남는다.

## empty-handed

아쉬움/후회가 가능하지만 GAME OVER가 아니다.

---

# 16. Scene L — 귀환

목표가 바뀐다.

> **먹을 것을 찾는다 → 사람들에게 돌아간다.**

앞서 본 랜드마크를 재사용한다.

몸:

- tired
- carrying
- shared burden

같은 상태에 따라 변주한다.

---

# 17. Scene M — 모티프 회수

해가 낮아짐.

> **“해가 지기 전에 돌아와.”**

학생이 늦었다면 이 말이 더 무겁게 느껴질 수 있다.

죄책감/후회는 허용한다.

내레이션이 학생을 도덕적으로 판정하지 않는다.

---

# 18. Scene N — 불빛 / 재회

멀리 같은 불빛.

### Primary Attention

불빛 → 사람.

### Result Variant

- late + empty
- late + food
- earlier + empty
- shared carry
- heightened danger

중요한 조합만 우선순위 규칙으로 보여준다.

모든 상태 조합마다 별도 엔딩을 만들지 않는다.

---

# 19. Perspective Bridge proof

Hunt 종료 후 Camp 내부 사실을 설명하지 않는다.

가능:

```text
Hunt의 마지막 시야
→ fade/blink
→ `거처에 남아 생활을 이어가는 사람의 관점`
→ 다른 손/몸 + 같은 불
```

Stage 07에서는 실제 Camp 전체가 아니라 **새 관점이 명료하게 열리는지**만 proof할 수 있다.

---

# 20. Treatment Budget

기본:

- none
- subtle
- accent
- strong-accent — rare

한 Scene에서 중요한 감각 변화가 여러 개라면 우선순위를 둔다.

`위험`을 알리기 위해 treatment를 쓰는 것이 아니라 **이미 발생한 사건의 체감을 보조**한다.

Reduced effects에서는:

- sway/jolt 제거 또는 축소
- blur 제거
- strong-accent 단순화

해도 actor/body/sound/static contrast로 사건 의미가 유지되어야 한다.

---

# 21. Relationship / Emotional Memory

memory 후보:

- `noticed-r-before-departure`
- `pressed-on-despite-fatigue`
- `stayed-close-under-danger`
- `shared-carry-burden`
- `returned-late`
- `returned-empty-handed`

memory는 좋음/나쁨 점수가 아니다.

후속 장면에서 실제로 사용하지 않는 memory는 만들지 않는다.

---

# 22. Learning Evidence

Hunt에서 실제 행동으로 확보할 evidence 후보:

- `tool-used-in-context`
- `hunt-begins-with-observation`
- `discovery-does-not-guarantee-food`
- `time-distance-constrained`
- `human-vulnerable-in-nature`
- `return-to-community-matters`

내부 QA/Conceptualization을 위한 신호이며 학생에게 배지처럼 노출하지 않는다.

---

# 23. Stage 04 Acceptance Gate

- Scene과 Beat가 구분되어 state 폭발을 막는가?
- Stage 07 Skeleton 범위가 전체 Hunt와 명확히 구분되는가?
- 첫 행동이 몸·사람·관계 속에서 일어나는가?
- 역할 내부가 Hunt 인물의 제한 시점을 유지하는가?
- 도구가 장면 간 continuity를 갖는가?
- 흔적 관찰이 pixel hunting이 아닌가?
- 딜레마 전에 판단 정보가 충분한가?
- 결과가 평등할 필요 없이 인과적으로 납득 가능한가?
- Threat가 여러 beat로 쌓이고 필요한 경우 strong-accent를 사용할 수 있는가?
- treatment가 반복 경고 UI가 아닌가?
- 결과가 다축으로 귀환/재회에 남는가?
- 죄책감·후회·안도가 상황에서 생길 수 있는가?
- reduced effects에서도 같은 사건과 선택이 이해되는가?
- 다음 관점에 Hunt 외부 정보를 미리 노출하지 않는가?

이 PLAYFLOW를 Stage 06 기술 계약과 Stage 07 Skeleton이 구현한다.
