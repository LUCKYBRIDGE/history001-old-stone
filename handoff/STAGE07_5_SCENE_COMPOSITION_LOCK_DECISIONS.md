# Stage 07.5 — Scene Composition Lock Decisions v1

> 상태: **Scene Composition Bible v1 hardening addendum / non-SSOT implementation contract**
>
> 상위 기준:
> - `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
> - `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - `docs/03_HUNT_STORY.md`
> - `docs/04_HUNT_PLAYFLOW.md`
> - `docs/06_TECH_BLUEPRINT.md`
> - `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
> - `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
> - `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
> - `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE.md`
>
> 이 문서는 새 Technical SSOT가 아니다. Scene Composition Bible v1에서 `선택`, `후보`, `가능`, `A/B`, `reference pack에서 lock`으로 남아 있던 항목 중 **현재 역사 자료 추가 검토 없이도 확정 가능한 연출·공간·신체·UI·continuity 결정**을 닫는다.
>
> 충돌 시 canonical 문서가 우선한다. 이 문서와 Scene Composition Bible v1을 함께 검토한 뒤, 실제 runtime/asset 구현 전에 하나의 Scene Composition Bible v2로 통합한다.
>
> # **이 Lock Decision 자체가 구현 허가를 의미하지 않는다.**
>
> 구현은 `Bible v2 consolidation → Reference Lock → Previsual Approval` 뒤에 시작한다.

---

# 1. 이번 hardening에서 확인된 구조적 부족

Scene Composition Bible v1은 장면별 세부 항목을 충분히 많이 정의했지만, 실제 구현자가 다시 자의적으로 결정할 수 있는 여지가 남아 있었다.

핵심 미정 요소:

1. Hunt outbound screen direction / 180° axis
2. 반복 route landmark
3. handaxe의 grip face / working-end 방향
4. SC07 왼손 행동
5. SC10 rock-edge contact 사용 여부
6. SC11 perspective A/B 방식
7. SC10 대사의 정확한 화자
8. background actor B1/B2의 continuity
9. curriculum cue가 자동으로 사라지는지 여부
10. Player action affordance / subtitle / curriculum cue의 공통 UI lane
11. action/contact/target 위 UI overlay 금지 구역
12. freeze-frame만으로 부족한 motion readability 검증
13. no-audio / reduced-effects 상황에서의 장면 이해 가능성
14. current shelter가 다시 현대 텐트 아이콘으로 회귀하지 않게 하는 silhouette constraint
15. camera rise/drop/pan이 장면마다 임의로 달라질 위험

이 문서에서 위 항목을 잠근다.

---

# 2. Screen Direction / 180° Axis Lock

## 2.1 Outbound 방향

Hunt first-five의 기본 outbound spatial axis는 다음으로 고정한다.

```text
camp / fire / Aru
        ↓ behind-left
Player camera → route-forward → screen right / right-center
                        Damu / Nua ahead
```

Player가 camp를 떠날 때의 시각 문법:

- camp = 뒤/왼쪽
- 진행 방향 = 앞/오른쪽
- Damu/Nua = Player보다 앞의 right-center / midground
- Aru = 뒤 left / left-center

# **SC04~SC10 사이에서 이유 없이 화면 방향을 좌우 반전하지 않는다.**

## 2.2 Axis-crossing 금지

같은 연속 이동 중:

- Damu가 갑자기 Player 반대편으로 mirror되지 않음
- Nua가 이유 없이 좌우를 교환하지 않음
- handaxe가 right-hand continuity를 유지
- route landmark가 frame 반대쪽으로 teleport하지 않음

카메라가 인물 사이 180° axis를 넘어야 한다면:

1. 실제 pan/turn을 보여 주거나
2. foreground occlusion + 명확한 재정립 shot이 있어야 한다.

Stage 07.5 first-five에서는 **axis crossing을 사용하지 않는 것**을 기본으로 고정한다.

## 2.3 Future return

Stage 08 Return에서는 같은 route를 역방향으로 돌아오기 때문에 세계 진행감은 반대로 읽힐 수 있다.

그러나:

- 같은 landmark
- 같은 camp approach direction
- 같은 terrain family

를 사용해서 `새로운 장소`가 아니라 `아까 지나간 길을 되돌아감`으로 보여야 한다.

---

# 3. Route Landmark Lock

first-five의 반복 landmark는 다음으로 고정한다.

# **`LM-SPLIT-ROCK-01` — 갈라진 낮은 큰 바위**

선택 이유:

- 정확한 계절/식생 lock 전에도 사용 가능
- 쓰러진 특정 수종 나무보다 vegetation dependence가 낮음
- 출발/귀환 spatial memory에 사용하기 쉬움
- 역사적 사실이 아니라 Day 1 route reconstruction으로 명확히 분리 가능

## 3.1 Outbound parallax

SC05 Stage A:

- split rock은 route ahead-right midground에 처음 보임
- x 약 72~82

SC05 Stage B:

- Player가 접근하면서 x 약 55~68로 이동
- apparent size 증가

SC06 진입:

- Player가 이미 landmark를 지나기 시작해 left/rear edge로 빠짐
- x 약 8~22에 일부 남길 수 있음

SC07 이후:

- primary target이 아니므로 대부분 frame 밖

## 3.2 Return callback

Stage 08 Return에서는 같은 rock identity가 다시 나타나야 한다.

조건:

- crack silhouette
- 큰 면의 edge
- 주변 작은 돌 관계

가 같아야 한다.

정확한 지질/유적 사실을 가르치는 표지가 아니다.

---

# 4. Camera State Lock

카메라는 장면마다 새롭게 만들어지지 않는다.

first-five의 camera state family를 다음처럼 잠근다.

| State | Scene | Horizon / visual rule |
|---|---|---|
| `C0-eyes-closed-seated` | SC00 | world 미노출, camera fixed |
| `C1-seated-neutral` | SC01 | horizon y 43~47 |
| `C2-seated-handoff` | SC02 | C1 대비 yaw ±5° 이내, horizon 유지 |
| `C3-seated-inspect` | SC03 | C2 same axis, tool을 위해 camera teleport 금지 |
| `C4-standing-route` | SC04/05 | rise 후 horizon y 39~42 |
| `C5-standing-stop` | SC06 | C4와 동일 높이, bob만 멎음 |
| `C6-crouch-ground` | SC07 | horizon y 55~62, ground lower 55~65% |
| `C7-standing-attention` | SC08 | C6→C4 높이로 복귀 |
| `C8-pan-right-shelter` | SC09 | C7에서 오른쪽 20~24° pan |
| `C9-shelter-approach` | SC10 | opening scale 증가, hard cut 금지 |
| `C10-aru-camp-recontext` | SC11 | same WP-CAMP-DAWN-A, 다른 POV owner |

## 4.1 Rise / crouch timing

- seated → standing: **520~650ms 목표**, 허용 450~700ms
- standing → crouch: **420~600ms 목표**
- crouch → standing: **450~620ms 목표**
- Nua follow pan: **450~580ms 목표**, 허용 350~650ms

Reduced-effects에서는:

- duration을 줄일 수 있음
- pose start/end state와 spatial relation은 유지
- instantaneous teleport처럼 보이면 안 됨

---

# 5. Handaxe Grip / Orientation Lock

Day 1 handaxe는 같은 물체일 뿐 아니라 **같은 쥐는 논리**를 유지한다.

## 5.1 Object identity

생산 anchor에서 임시 표기:

- `face-A` = Player가 받은 뒤 주로 보게 되는 식별 면
- `face-B` = 반대 면
- `grip-base` = 두껍고 손으로 쥐는 하단부
- `working-end` = 더 가공된 끝/날 방향

이 이름은 Player에게 노출하지 않는다.

## 5.2 Handoff

Aru는:

- `grip-base` 쪽을 Player가 잡기 쉬운 방향으로 내밂
- 날카로운/가공된 working-end를 Player palm 안쪽으로 밀어 넣지 않음

Player 오른손:

- lower-right에서 들어옴
- `grip-base`를 감쌈

shared contact 순간:

```text
Aru hand
→ handaxe body
→ Player fingers/palm
```

이 연속성이 보여야 한다.

## 5.3 SC03 inspect

Player가 도구를 받은 뒤:

- face-A가 주로 보임
- working-end는 대략 **forward-left / up-left 20~35°**
- wrist rotation은 25° 안팎의 작은 확인 동작
- RPG inventory처럼 180° 회전시키지 않음

## 5.4 SC04~SC10 carry

walking/carry에서는:

- tool long axis가 조금 더 downward/outward로 내려감
- face-A identity marker가 완전히 반전되지 않음
- handaxe가 항상 화면 중앙을 향하는 weapon view가 되지 않음

SC07:

- right hand는 target에서 바깥쪽 lower-right로 빼 둠

SC10:

- right hand handaxe는 low-right에 유지
- left-hand rock contact와 교차해 화면 중앙 X형 팔이 되지 않게 한다.

---

# 6. Player Left-Hand Decisions

## 6.1 SC07 — Ground Observation

기존 선택지를 폐기한다.

# **SC07 왼손 = 지면을 짚어 crouch를 지지한다.**

하지 않는 것:

- 흔적을 손가락으로 가리키기
- 흔적 자체를 만지거나 훼손하기
- 풀/흙을 크게 치워 정답을 드러내기

권장 composition:

- left hand/forearm: x 18~31 / y 76~93
- target: x 49~61 / y 69~82
- right handaxe: x 78~95 / lower edge

효과:

- 내가 실제로 몸을 낮췄다는 신체 증거
- 지면과 접촉하는 embodied scale
- target을 손이 대신 설명하지 않음

Production mode:

- ground brace contact는 `KF-GROUND-01`의 **필수 후보**로 승격
- direct evidence touch는 하지 않음

## 6.2 SC10 — Rock Shelter Inspection

기존 optional을 폐기한다.

# **SC10에서는 왼손으로 입구 가까운 rock edge를 짧게 짚는다.**

목적:

- opening scale을 몸으로 느끼게 함
- 2D background plate가 아니라 실제 가까운 바위라는 depth 제공
- Player body와 environment를 하나의 공간에 묶음

동작:

1. approach 중 near-left rock edge가 foreground에 들어옴
2. left hand가 0.5~1.2초 정도 짚음
3. interior scan이 시작되면 손을 떼거나 edge로 내려감

금지:

- 양손을 화면 중앙에 동시에 크게 띄움
- 바위 벽을 climbing pose처럼 붙잡음
- handaxe를 rock에 자동 사용

Production mode:

- `KF-CAVE-BRACE-01` = **required contact variation**

---

# 7. SC11 Perspective Recontextualization Lock

기존 A/B 선택을 폐기한다.

# **A 방식으로 고정한다: 같은 실제 순간을 Aru 쪽 POV에서 다시 경험한다.**

메모리 echo / 환청처럼 처리하지 않는다.

## 7.1 Transition

SC10 종료 후:

- short dark/blink 600~800ms
- audio bridge에서 fire crackle이 가까워짐
- 별도 `관점 전환` 제목 없음

다음 shot:

- WP-CAMP-DAWN-A same world family
- Aru가 있던 camp-side position
- departing group가 실제로 같은 방향으로 이동 중

## 7.2 Dialogue

Aru own voice:

> `해 지기 전에 와.`

이 line은 **과거 echo가 아니라 그 순간 Aru가 실제로 말한 말**이다.

오디오 위치:

- off-screen actor voice처럼 좌우에 찍지 않음
- 현재 POV owner의 own voice로 center/near

Player-facing speaker label:

- 표시하지 않음

## 7.3 Body

Aru body anchor가 reference-lock 전이므로:

- SC11에서 Aru 손/팔은 기본적으로 숨김
- former Player의 body silhouette를 억지로 새로 정의하지 않음

former Player 인식 단서:

- Damu/Nua와 함께 떠나는 위치
- **오른손의 동일 canonical handaxe**
- S5와 같은 group spacing / route direction

## 7.4 Acceptance

메타 텍스트 없이 학생이:

> `아까 불가에 남았던 쪽에서, 내가 사람들과 떠나는 모습을 보는 것 같다`

라고 추론할 수 있어야 한다.

이 proof가 실패하면 이름표/설명 제목을 추가하기 전에 composition을 수정한다.

---

# 8. Nua Attention Direction Lock

SC08→SC09 방향을 확정한다.

Nua는 route-forward 상태에서 **screen-right / right-forward 약 25°** 방향으로 attention을 돌린다.

순서:

```text
head turn
→ shoulder follows
→ torso follows
→ Player notices
→ Player pans right 20~24°
→ rock shelter enters right/center-right composition
```

SC09 pan 이후:

- Nua는 화면 left/left-center edge에 잠시 남음
- gaze source와 reveal target을 한 frame에서 최소 짧게 같이 볼 수 있음

rock shelter primary opening:

- pan 완료 후 x 약 60~77
- 4:3 essential safe zone 안에서 opening identity 유지

---

# 9. Background Community Continuity Lock

SC00~SC05의 ambient life는 임의 crowd가 아니다.

최소 2명 B1/B2를 **같은 사람/같은 작업 흐름**으로 유지한다.

## B1 — Fire tending

SC00 off-screen A:

> `그건 젖었어.`

SC01:

- fire/material zone에서 작업
- Player가 눈을 떠도 계속 작업

SC02:

- handoff 시각 우선순위 때문에 contrast/동작은 낮아짐
- 사라지지 않음

SC04/05:

- camp background에서 계속 작업
- outbound distance에 따라 작아지고 occlusion됨

## B2 — Material / shelter work

SC00 off-screen B:

> `저쪽 걸 써.`

SC01:

- material/shelter zone
- 잠시 뒤 같은 voice가 자연스럽게:

> `아루.`

Aru가 그 소리에 반응해서 이름을 학생이 연결한다.

SC02~05:

- 다른 작업으로 순간이동하지 않음
- shelter/material zone continuity 유지

## Rule

B1/B2는 Player tutorial actor가 아니다.

- 이름 없어도 됨
- Player가 상호작용할 필요 없음
- 모두가 Player를 동시에 보지 않음
- main action 순간에는 attention priority를 낮추되 존재 continuity를 유지

---

# 10. SC10 Dialogue Speaker Lock

기존 `누아 또는 적절한 인물`, `다른 인물` 선택을 닫는다.

이 Scene에서만:

Nua:

> `안이 꽤 넓어.`

조건:

- Player가 opening scale / 일부 마른 바닥 / rock cover를 먼저 본 뒤

Damu:

> `안쪽은 먼저 봐야 해.`

조건:

- interior darkness / uncertainty가 화면에서 먼저 읽힌 뒤

중요:

- 이것이 `Nua=공간 측정 담당`, `Damu=주의 담당`이라는 영구 역할을 뜻하지 않는다.
- 이 장면의 구체 반응일 뿐이다.

---

# 11. Dialogue / Action Timing Lock

대사는 행동을 설명하는 narration이 아니다.

## SC00

권장 pacing:

```text
0.0s fire crackle
0.4~0.8s material sound
0.9~1.4s B1: `그건 젖었어.`
1.5~2.2s B2: `저쪽 걸 써.`
1.6s 이후 `눈을 뜬다` action affordance 사용 가능
```

Player가 즉시 누르더라도 첫 생활 소리/대화가 최소 일부는 들리게 한다.

## SC01

- eyes-open 후 1.0~1.8초는 생활을 그냥 볼 수 있게 함
- B2: `아루.`
- 100~250ms 뒤 Aru head/attention response
- 그 뒤 `아루 쪽을 본다` affordance

## SC02

- Aru가 tool을 확인/내미는 동작 시작
- 200~450ms 후 `손.`
- 그 뒤 `손을 내민다` affordance 활성
- Player action 후 shared-contact beat

## SC04

- Damu가 먼저 1~2걸음 움직임
- 그 뒤 `가자.`
- Player action affordance

## SC05

- movement를 멈추지 않은 상태에서 Aru farewell
- Damu reply도 walk continuation 안에서 처리

## SC06

- Damu footstep stop
- 150~300ms 뒤 `잠깐.`
- Player action affordance

## SC07

- Player crouch 완료
- ground target이 실제로 읽히는 시간을 최소 500~800ms 제공
- 그 뒤 `봤어?`
- 즉시 정답 버튼/응답 요구 없음

## SC08

# **대사 없음으로 고정.**

`...` caption도 사용하지 않는다.

Nua의 몸 변화만으로 attention shift를 전달한다.

## SC09

- reveal 순간 설명 대사 없음

## SC10

- visual information → Nua line → darkness read → Damu line → curriculum cue

## SC11

- departing group가 실제 보인 뒤 own voice line

---

# 12. Curriculum Cue Lock

## 12.1 공통 배치

Curriculum annotation 기본 zone:

```text
x 15~41
y 7~23
```

4:3에서도 essential safe area 안에 유지한다.

금지:

- full-width card
- 큰 beige page block
- modal
- world를 dim 처리해 수업 화면으로 전환

표현:

- 작은 contextual annotation
- 제목 + 최대 2줄
- 반투명 배경을 쓰더라도 장면보다 강한 panel이 되지 않음

## 12.2 SC03 — 뗀석기 / 주먹도끼

Cue는 시간만으로 사라지지 않는다.

순서:

1. handoff 완료
2. Player가 same handaxe를 직접 보고 있음
3. cue 등장
4. Player가 읽는 동안 유지
5. 다음 world action 시작 시 작게 de-emphasize
6. 장면 전환 후 제거

# **2~4초 auto-hide만으로 학습 내용을 밀어내지 않는다.**

문구의 canonical 의미:

- 뗀석기 = 돌을 깨뜨리거나 떼어 만든 도구
- 지금 손의 주먹도끼 = 그 대표적인 예

## 12.3 SC10 — 자연 거처

Cue는:

- opening
- rock cover
- 안쪽 darkness

가 먼저 화면에 충분히 제시된 뒤 등장한다.

내용이 공간 판단을 선행하지 않는다.

---

# 13. UI Lane / No-Overlay Contract

## 13.1 Action lane

기본 action affordance:

```text
x 33~67
y 89~97
```

- 1개 primary action
- 최대 1줄
- 큰 story paragraph와 합치지 않음
- world frame을 별도 페이지 아래로 밀어내지 않음

## 13.2 Dialogue

기본은 speaker-proximal small caption.

원칙:

- actor 얼굴/손/target을 가리지 않음
- first recognition을 돕는 경우에만 작은 speaker call-name
- own voice(SC11)는 이름표 없음

접근성 caption fallback:

- top-center 또는 scene-specific empty negative space
- primary target과 겹치면 위치 이동

# **모든 Scene에 하나의 고정 bottom subtitle bar를 강제하지 않는다.**

## 13.3 Sensory caption

- 시각/음향으로 전달할 수 없는 감각만 사용
- action affordance와 분리
- 최대 1줄

## 13.4 Scene no-overlay zones

다음 영역에는 일반 UI를 올리지 않는다.

| Scene | No-overlay zone |
|---|---|
| SC02 | x 35~72 / y 25~84 — Aru/contact/Player hand |
| SC03 | x 50~76 / y 54~86 — handaxe inspect |
| SC04 | x 58~90 / y 22~80 — Damu/Nua action |
| SC05 | x 5~82 / y 20~80 — camp recede + actors |
| SC06 | x 34~80 / y 24~86 — Damu stop |
| SC07 | x 32~71 / y 50~89 — Damu + ground evidence |
| SC08 | x 50~84 / y 20~78 — Nua attention |
| SC09 | x 47~88 / y 24~84 — gaze source + shelter reveal |
| SC10 | x 24~86 / y 18~88 — actor/opening/contact |
| SC11 | x 28~90 / y 22~78 — departing group / handaxe |

UI가 no-overlay zone과 충돌하면 **UI를 옮긴다. 장면을 축소하지 않는다.**

---

# 14. Current Shelter Silhouette Constraint

exact temporary shelter reconstruction은 reference review 뒤에 lock한다.

그러나 지금도 다음은 금지할 수 있다.

금지 silhouette:

- 좌우 대칭 A-frame tent
- 현대 캠핑 텐트 같은 정삼각형
- 네모난 집 + 삼각 지붕 아이콘
- 정면 중앙 출입문이 강조된 house icon
- fabric tent처럼 팽팽한 동일 재질 면

현재 composition target:

- 낮고 비대칭
- 바람막이/차양/임시 구조처럼 보임
- 재료와 높이가 완벽히 균일하지 않음
- 주변 ground/material zone과 이어짐

정확한 구조/재료는 `REFERENCE-LOCK REQUIRED`다.

---

# 15. Actor Apparent-Scale Contract

사람 layer를 Scene마다 임의 확대/축소하지 않는다.

깊이별 제작 감각:

```text
Near interaction 2~5m     → frame height 약 38~62%
Midground 5~12m          → 약 18~35%
Background 12m+          → 약 5~16%
```

이는 실제 신장 수치가 아니라 2D perspective consistency 기준이다.

같은 actor가 동일 depth band에서 이유 없이 1.5배 이상 커지거나 작아지면 FAIL.

SC02 Aru는 close interaction이므로 크게 보일 수 있지만:

- camera zoom으로 갑자기 portrait가 되지 않음
- same camp spatial axis 유지

---

# 16. Motion Readability Gate

기존 freeze-frame test만으로는 `걷기 → 멈춤 → crouch`, `attention shift`를 충분히 검증하지 못한다.

따라서 다음을 추가한다.

## A. 1-second freeze-frame test

기존 유지.

## B. 800ms silent motion test

- 소리 OFF
- dialogue/caption OFF
- 700~1000ms 정도의 짧은 motion만 봄

다음을 구별할 수 있어야 한다.

- Damu walking
- Damu sudden stop
- Damu lowering
- Player crouch
- Nua attention turn
- Aru offering/releasing tool

## C. No-audio test

Audio가 없어도 핵심 행동/인과가 이해 가능해야 한다.

소리는 강화 요소이지 action의 유일한 증거가 아니다.

## D. Reduced-effects test

화면 움직임 줄이기 상태에서도:

- 시작 pose
- 종료 pose
- contact
- depth relation

으로 의미가 남아야 한다.

## E. No-caption test

설명문/대사 caption을 숨겨도 핵심 scene situation이 읽혀야 한다.

## F. First-glance priority test

1초 안에 시선이 먼저 가야 하는 대상이 장면마다 명확해야 한다.

| Scene | First visual priority |
|---|---|
| SC01 | living community + Aru response |
| SC02 | Aru hand → handaxe → Player hand |
| SC03 | handaxe in my hand |
| SC04 | Damu moving / Nua looking elsewhere |
| SC05 | people ahead + camp behind |
| SC06 | Damu stopped/lowering |
| SC07 | shared ground target |
| SC08 | Nua body turn |
| SC09 | newly revealed rock shelter |
| SC10 | opening depth / dark interior |
| SC11 | departing group + same handaxe |

---

# 17. Scene-specific Locked Decisions Summary

| Scene | Locked decision |
|---|---|
| SC00 | B1/B2 ambient voices are persistent background actors |
| SC01 | B2 calls `아루.`; Aru responds, no intro card |
| SC02 | Mode B unified handoff; face-A/grip-base orientation locked |
| SC03 | right-hand-only inspect; curriculum cue does not time-auto-hide |
| SC04 | outbound axis = right/right-center; Damu already moving |
| SC05 | landmark = `LM-SPLIT-ROCK-01`; camp recedes behind-left |
| SC06 | Player remains standing; landmark may linger rear-left edge |
| SC07 | left hand = ground brace, never points/touches evidence |
| SC08 | no dialogue; Nua turns right-forward about 25° |
| SC09 | camera pans right 20~24°; Nua briefly remains as gaze source |
| SC10 | left hand rock brace required; Nua then Damu lines fixed |
| SC11 | perspective method A: actual same moment replay from Aru POV |

---

# 18. Still REFERENCE-LOCK REQUIRED

이번 hardening에서 일부러 확정하지 않는 것:

- exact season
- exact vegetation species/palette
- exact clothing construction/material/stitching
- detailed skin/hair appearance
- final age/sex reading of Hunt Player
- exact temporary shelter reconstruction/material system
- final face/cast appearance
- final sound production

이 항목은 모호해서 남겨 둔 것이 아니라 **자료 검토 없이는 근거 없는 역사 단정이 될 수 있기 때문에 의도적으로 보류**한다.

## Already sufficiently anchored

- handaxe morphology direction
- right-dominant Hunt Player production continuity
- overall Grounded Illustrative Realism
- camp/departure/ground/rock-shelter spatial families
- scene screen direction
- body/contact choreography
- fictional character names as provisional reconstruction

---

# 19. Consolidation Requirement Before Implementation

이 addendum이 merge된 뒤에도 바로 runtime을 수정하지 않는다.

다음 순서:

```text
Scene Bible v1
+ Lock Decisions v1
→ Reference Review / visual evidence pack
→ unresolved historical visual items lock
→ Scene Composition Bible v2로 통합
→ Project-owner Scene Review
→ Previsual Approval
→ runtime + asset implementation
```

Bible v2에는 최소 다음이 한 문서에 합쳐져야 한다.

- Scene coordinates
- camera states
- screen direction
- body pose
- exact handaxe grip/orientation
- actor placement/action
- background continuity
- route landmark
- dialogue/timing
- curriculum cue behavior
- UI no-overlay zones
- contact keyframes
- reference-lock 결과
- Human acceptance matrix

# **v2 consolidation 전에는 새 CSS/runtime/image implementation branch를 만들지 않는다.**
