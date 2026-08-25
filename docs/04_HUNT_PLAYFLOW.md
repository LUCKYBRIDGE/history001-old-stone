# 구석기 역사 체험 웹게임
## Stage 04 — Hunt 실제 PLAYFLOW v5 / Embodied First-Person + Clarity

> 목적: Hunt STORY v5를 학생이 실제로 `내 눈 + 내 몸 + 주변 사람 + 환경 + 선택의 결과`로 경험하는 플레이 명세로 변환한다. 모든 장면은 몰입뿐 아니라 명료성·학습 불변조건·안전·접근성을 함께 통과해야 한다.
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

# 1. 기본 플레이 문법

# **상황을 먼저 본다 → 몸/사람이 반응한다 → 직접 살핀다 → 판단한다 → 세계가 반응한다 → 그 흔적이 남는다**

피할 것:

- 제목 → 설명 → 버튼 반복
- 선택지가 상황보다 먼저 등장
- 정답/오답 피드백
- 모든 장면에 같은 버튼 3개
- 의미 없는 클릭 수 증가

---

# 2. 모든 주요 Scene의 필수 계약

각 Scene은 구현 전에 다음을 적는다.

1. `location`
2. `dayMoment / light`
3. `POV / gaze`
4. `visible body parts / held item`
5. `actors and positions`
6. `Primary Attention Target`
7. `environment / sound`
8. `direct action`
9. `immediate world/actor response`
10. `relationship/consequence memory`
11. `Learning Invariant contribution`
12. `screen treatment` — none/subtle/accent
13. `scaffold fallback`
14. `safety/accessibility note`
15. `callback / future reuse`

이 계약이 비어 있으면 설명 카드로 회귀할 가능성이 높다.

---

# 3. Scaffold 규칙

학생이 행동을 찾지 못할 때:

1. actor gaze/gesture
2. 환경 cue
3. 은은한 hotspot
4. 짧은 행동 문구
5. 반복 막힘 시 명확한 hint

중요한 단서를 pixel hunting으로 만들지 않는다.

---

# 4. Scene 0 — 새벽 / 불 앞

### POV

앉은 자세. 불 가까이.

### Body

두 손/팔 일부/무릎 일부.

### Actor

R이 가까이 있음.

### Primary Attention

R의 손과 돌도구.

### Action

R이 내민 도구를 받는다.

### Response

내 손에 도구가 남는다. R의 시선/짧은 말.

### Treatment

`fire-warmth` subtle.

### Learning

도구가 설명 카드가 아니라 생활 행동 안에 들어옴.

### Scaffold

R의 시선 → 손짓 → 도구 hotspot.

---

# 5. Scene 1 — 사람들이 움직이기 시작한다

학생은 주변 사람들이 다른 일을 준비하는 것을 본다.

H1/H2가 밖으로 움직임.

H1:

> “같이 가자.”

학생 행동:

- 시선을 옮기고 일어나 합류.

Primary Attention:

**같이 움직이기 시작하는 사람들.**

역할 메뉴를 보여주지 않는다.

---

# 6. Scene 2 — 출발 직전

R이 내 쪽을 보고 말한다.

> **“해가 지기 전에 돌아와.”**

학생은 이 말의 의미를 해설로 배우지 않는다.

Callback seed로 저장한다.

관계 memory 후보:

- `noticed-waiting-person`

이 memory는 학생이 실제로 R을 바라본 경우에만 생성할지 구현 단계에서 검토한다. 핵심 학습을 잠그는 용도로 사용하지 않는다.

---

# 7. Scene 3 — 거처가 멀어진다

### POV

걷는 정면 시야.

### Body

도구 든 손/팔 일부.

### World

불/연기/사람 소리가 점차 멀어짐.

### Treatment

따뜻한 색 감소, 자연광 증가. sway는 매우 약하게.

### Primary Attention

**뒤에 남겨진 거처와 앞으로 가는 사람의 거리 변화.**

멀어짐은 이후 귀환을 위한 공간 기억이다.

---

# 8. Scene 4 — 흔적 탐색

사냥감은 보이지 않는다.

학생은 여러 지점을 살핀다.

가능 결과:

- 의미 있는 흔적
- 애매한 흔적
- 아무것도 없음

아무것도 없는 지점을 봐도 오답 표시 없음.

H2의 반응이 관찰을 돕는다.

### Body

몸을 낮추며 손/무릎/지면이 한 시야에 들어옴.

### Primary Attention

지면의 구체적 변화.

### Learning

`찾는 것부터 사냥`이라는 불변조건.

---

# 9. Scene 5 — 단서 판단

학생은 자신이 본 정보로 다음 방향/행동을 정한다.

선택 전 반드시 앞 장면에서 단서를 봤어야 한다.

선택 후 변화:

- actor gaze/position
- 시간
- 다음 환경 정보

금지:

- `정답입니다`
- 별점
- 숨겨진 최적 단서 루트

---

# 10. Scene 6 — 발견 전 정적

H1이 갑자기 멈춘다.

H2의 시선이 한 방향에 고정된다.

주변 소리가 변한다.

학생 행동:

- 그 방향을 직접 본다.

Primary Attention:

**사람의 멈춤 → 그들이 보는 방향.**

그 뒤 사냥감을 확인한다.

---

# 11. Scene 7 — 접근 판단

선택 후보:

- 더 기다리며 본다.
- 조금 더 가까이 간다.
- 지금 시도한다.

각 선택은 앞서 보이는 상황에서 합리성을 가져야 한다.

선택 뒤 사냥감/H1/H2/시간 중 최소 하나가 달라진다.

---

# 12. Scene 8 — 사냥 시도

짧은 직접 행동을 사용할 수 있다.

그러나

- 반응속도 점수
- 조준 정확도 점수
- 콤보

를 만들지 않는다.

질적 결과:

- 잠깐의 기회
- 대상 이동
- 흔적 이어짐
- 놓침

발견/시도 = 성공이 아니라는 불변조건을 유지한다.

---

# 13. Scene 9 — “조금만 더…” / 딜레마 준비

선택지를 먼저 띄우지 않는다.

학생이 볼 것:

- 아직 이어지는 흔적/가능성
- 낮아진 해
- 보이지 않는 거처
- H1/H2의 상태
- R의 아침 말 기억

Primary Attention:

한 대상이 아니라 **상충하는 두 축**을 순차적으로 보여준다.

1. 가능성
2. 시간/사람의 부담

학생이 정보를 놓쳤다면 다시 살펴볼 수 있다.

---

# 14. Scene 10 — 추적 판단

선택:

- 더 따라간다.
- 돌아갈 때를 생각한다.
- 주변과 해/사람 상태를 더 확인한다.

각 선택에는 장점과 비용이 있다.

결과 축:

- return timing
- distance burden
- additional information
- later threat context

어느 것도 용감/겁쟁이로 채점하지 않는다.

---

# 15. Scene 11 — Threat Build-up 1: 이상한 신호

가능:

- 낯선 소리
- 큰 흔적
- 수풀 움직임

아직 `위험` 문구나 선택 패널 없음.

actor가 먼저 반응한다.

---

# 16. Scene 12 — Threat Build-up 2: 사람과 몸의 반응

H1/H2가 멈추거나 가까이 움직인다.

내 몸도 정지/낮은 자세로 변한다.

학생 행동:

- 이상한 방향을 직접 확인.

Treatment:

필요한 경우 `threat-attention` subtle.

- 아주 약한 focus 변화
- 정지

red flash 없음.

---

# 17. Scene 13 — 위험 대응

선택 후보:

- 가까이 붙어 움직인다.
- 조용히 거리를 둔다.
- 더 안전해 보이는 방향을 확인한다.

금지:

- 공격
- 처치
- enemy HP
- 전투 승리

위험 대응이 사냥 성공 여부를 채점하지 않는다.

관계 memory 후보:

- `stayed-together-under-danger`
- `followed-companion-warning`

---

# 18. Scene 14 — Recovery Beat

위험 장면 뒤 짧게 긴장을 낮춘다.

- 평상시 소리가 조금 돌아옴
- 자세 회복
- 동행자의 짧은 반응

학생에게 장시간 공포를 유지하지 않는다.

---

# 19. Scene 15 — 오늘의 결과

## food-secured

기쁨은 허용.

곧 운반/귀환으로 목표가 바뀜.

## empty-handed

아쉬움은 허용.

실패 화면 없음.

두 경로 모두 다음 Learning Invariant 유지:

- 결과 불확실성
- 귀환의 중요성
- 공동체 연결

---

# 20. Scene 16 — 귀환 시작

목표 전환:

# **먹을 것을 구한다 → 사람들에게 돌아간다**

몸 상태는 결과에 따라 달라질 수 있다.

- carrying
- tired
- shared burden

---

# 21. Scene 17 — 돌아가는 길

앞서 실제로 본 랜드마크를 다시 사용한다.

후보:

- 큰 바위
- 물 흐름
- 능선

새로운 정답 길찾기 퀴즈가 아니다.

잘못된 판단으로 GAME OVER가 되지 않는다.

---

# 22. Scene 18 — 해 질 무렵 / 모티프 회수

피로와 시간 변화.

아침의 말:

> **“해가 지기 전에 돌아와.”**

을 다시 떠올린다.

학생을 비난하는 내레이션 없음.

---

# 23. Scene 19 — 불빛

멀리 같은 거처의 불빛을 발견한다.

Primary Attention:

**불빛.**

Treatment:

- 주변은 어둡게
- 아주 약한 밝기 회복

승리 flash/음악 폭발 없음.

핵심:

> **돌아왔다.**

---

# 24. Scene 20 — 재회 변주

결과 조합에 따라 짧게 달라진다.

예:

- late + empty-handed
- late + food-secured
- earlier + empty-handed
- shared-carry

달라질 수 있는 것:

- R의 첫 시선
- H1/H2와 물건 내려놓는 행동
- 짧은 대사
- 몸 상태

같은 장소로 재수렴하지만 같은 장면 복사본은 아니다.

---

# 25. Scene 21 — Perspective Bridge seed

내가 없던 동안 이어진 불/생활/사람을 짧게 본다.

다음 질문을 남긴다.

> **내가 없는 동안 이곳에서는 무엇이 계속되고 있었을까?**

역할 메뉴로 닫지 않는다.

---

# 26. Micro Reflection 후보

필요한 경우 짧게:

- 더 따라갈지 돌아갈지 고민한 이유는?
- 위험이라고 쓰여 있기 전에 무엇이 이상했나?
- 결과보다 돌아오는 동안 무엇이 신경 쓰였나?

정답 채점 없음.

---

# 27. 화면 Treatment Budget

Hunt 전체에서 효과를 상시 사용하지 않는다.

대표 preset 후보:

- `fire-warmth`
- `leave-camp-light-shift`
- `crouch-shift`
- `threat-attention`
- `dusk-fatigue`
- `return-firelight`
- `blink-perspective-transition`

한 Scene의 기본값은 `none` 또는 `subtle`이다.

Reduced effects에서도 모든 정보가 유지된다.

---

# 28. 자동 테스트가 확인할 것

- 첫 행동 진행 가능
- player 화면에 debug 문자열 없음
- 주요 Scene의 required body/actor state
- 딜레마 선택 전에 관련 정보 state가 존재
- threat choice 전에 build-up stage 존재
- 성공/빈손 모두 귀환
- 결과 축이 completion에 반영
- reduced effects에서도 진행 가능

자동 테스트가 `몰입했다`를 증명할 수는 없다.

---

# 29. 교사 플레이 QA

관찰:

- 첫 30초 행동을 이해하는가
- 몸이 자연스러운가
- R/H1/H2가 기억되는가
- 딜레마 전에 실제 고민이 생기는가
- 위협이 설명 전에도 느껴지는가
- 공포가 과하지 않은가
- 효과가 상황을 보조하고 방해하지 않는가
- 선택이 뒤에서 기억되는가
- 귀환이 의미 있는가
- 빈손이 GAME OVER처럼 느껴지지 않는가

---

# 30. Stage 04 Acceptance Gate

- STORY v5의 Learning Invariants가 모든 경로에서 유지되는가?
- 각 Scene의 Primary Attention Target이 명확한가?
- 첫 행동/핵심 상호작용에 scaffold fallback이 있는가?
- 선택 전에 필요한 정보가 실제로 노출되는가?
- 위협 build-up과 choice가 분리되는가?
- 관계가 죄책감/정답 유도로 작동하지 않는가?
- 화면 효과가 의미를 대신하지 않는가?
- reduced effects에서도 동일하게 진행되는가?
- 귀환/재회 변주가 다축 결과를 회수하는가?
- 최종적으로 Perspective Recontextualization에 연결되는가?

이 Gate를 통과한 뒤 구현 단계로 넘긴다.
