# 구석기 역사 체험 웹게임
## Stage 07A — First-Person Visual Asset Bible v1 / Embodied Composite Production Contract

> 목적: Stage 01A의 Embodied First-Person 원칙을 실제 생성형 이미지 제작, 1인칭 몸/손/도구 자산, 배경/인물 자산, 레이어 합성, 원근/가림/광원 continuity, 브라우저 배치와 QA 규칙으로 번역한다.
>
> 이 문서는 **이미지 제작/아트 프로덕션 계약**이다. `docs/06_TECH_BLUEPRINT.md`가 유일한 Technical SSOT라는 원칙을 바꾸지 않는다. 실제 React/TypeScript 타입과 runtime 구조를 추가할 때는 반드시 Stage 06 정식 버전업에 흡수한다.
>
> 상위 기준:
> - `docs/00_CANONICAL_BASELINE.md`
> - `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
> - `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
> - `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
> - `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
> - `docs/04_HUNT_PLAYFLOW.md`
> - `docs/06_TECH_BLUEPRINT.md`
> - `docs/07_IMMERSION_NARRATIVE_BIBLE.md`

---

# 1. 현재 상태와 적용 시점

현재 Stage 07 Skeleton의 CSS/DOM primitive는 **Layout / Interaction Proof**다.

지금 하지 않는 것:

- final player body 생성
- final R/H1/H2 생성
- final handaxe 생성
- final background production
- final visual polish

Stage 07 Human Gate가 통과되기 전 Stage 08 전체 Hunt 구현은 시작하지 않는다.

다만 Human Gate 통과 직후 Stage 08의 첫 작업 묶음은 다음 순서를 따른다.

```text
Human Gate PASS
→ Visual Reference Pack 확정
→ Canonical Anchor Sheets 확정
→ Camera / Composition Profile 확정
→ Hunt Production Asset Set 생성
→ Embodied Composite 통합
→ Visual Continuity QA
→ Hunt interaction / threat / return 확장
```

# **Stage 08은 로직만 추가한 뒤 마지막에 그림을 입히는 단계가 아니다.**

Hunt Vertical Slice의 핵심 행동과 시각 자산을 함께 검증한다.

---

# 2. 외부 1인칭 게임 / 공개·오픈소스에서 가져오는 원칙

다음 사례는 구현을 복제하기 위한 것이 아니라 **검증된 1인칭 표현 문제와 해결 원칙을 추출하기 위한 참고**다.

## Quake / Source 계열 — View Model과 World Model의 분리

공개 Quake source는 player/world entity와 내부 시점에서만 보이는 weapon view entity를 구분한다.
Source 계열도 player가 보는 viewmodel과 세계에 존재하는 worldmodel을 별도로 다룬다.

적용:

- `내 몸/손/들고 있는 물건`과 `세계/다른 사람이 보는 물건`은 **논리적으로 다른 presentation 역할**을 가진다.
- 하지만 본 프로젝트는 FPS 총기 HUD를 만들지 않는다.
- 1인칭 손/도구를 화면 아래 고정 viewmodel처럼 보이게 만드는 것은 금지한다.
- 분리의 목적은 **원근·가림·포즈 제어**이지 `세계 위에 떠 있는 손`을 만드는 것이 아니다.

참고:

- id Software Quake source — `WinQuake/view.c`
- Valve Developer Community — viewmodel / worldmodel documentation

## Bevy / Godot 공개 자료 — 다른 FOV와 depth/clipping 문제

Bevy의 공식 first-person view model 예제는 world model과 view model을 다른 FOV로 렌더링하는 일반적 이유를 설명한다.
Godot 공개 논의도 FPS 무기/팔의 별도 FOV와 depth/clipping 문제를 별도 viewport 또는 shader 방식으로 해결하는 패턴을 다룬다.

적용:

본 프로젝트는 3D 엔진을 도입하지 않으므로 이를 다음처럼 번역한다.

```text
World Composition Space
≠
Embodied Foreground Composition Space
```

그러나 두 공간은:

- 같은 시선 방향
- 같은 광원
- 같은 사건
- 같은 접촉점
- 같은 원근 논리

를 공유해야 한다.

즉 몸 layer는 독립적으로 배치할 수 있지만 **별도 세계처럼 보이면 안 된다.**

## Mirror's Edge — 몸은 위치와 행동을 알려주는 정보

DICE는 believable first-person full-body experience를 핵심 과제로 다뤘다. 손·발·몸과 카메라 움직임은 단순 장식이 아니라 `지금 캐릭터가 무엇을 하고 있는지` 이해시키는 수단이었다.
또한 과도한 camera animation은 simulation sickness를 만들 수 있어 반복 조정이 필요했다.

적용:

- 팔/손/무릎/발은 `몸이 있다는 증거`를 매 순간 과시하기 위해 넣지 않는다.
- **행동을 이해하는 데 도움이 될 때** 보인다.
- crouch, receive, inspect, carry, brace, run, return은 서로 다른 body language를 가진다.
- camera sway/bob보다 **limb contact와 환경 반응**을 우선한다.
- camera motion은 적게 사용하고 의미 있게 사용한다.

## The Long Dark — 손/소매에서 Full-Body Presence로

The Long Dark 개발진은 first-person hands에 장갑/소매를 반영하고, 더 나아가 body가 착용 상태·부상·장애물 통과·struggle 같은 상태를 전달하는 기반이 될 수 있다고 설명했다.

적용:

- body asset은 포즈만 바꾸는 이미지가 아니다.
- 같은 역할 안에서:
  - 소매/피부/오염
  - 젖음/먼지
  - 운반 부담
  - 피로
  - 도구 보유
  를 continuity 상태로 유지할 수 있어야 한다.

## Firewatch — 손은 의도와 장면 구도를 강화

Campo Santo의 공개 개발 자료는 first-person narrative에서 camera movement 자체가 주인공의 행동이고, 손이 프레임에 들어오는 것만으로 장면의 존재감이 크게 달라질 수 있음을 보여준다. 또한 art production에서 장면을 먼저 고정하고 production-quality polish를 올리는 방식을 사용했다.

적용:

- 먼저 composition을 잠근다.
- 그 뒤 고해상도 자산을 만든다.
- 아름다운 이미지가 잘못된 camera/body composition을 덮게 하지 않는다.

## Frictional / Penumbra / Amnesia 공개 소스 — World Interaction 우선

Frictional의 HPL/Penumbra/Amnesia 계열 공개 소스는 first-person 공간에서 물건과 세계 상호작용을 핵심으로 삼는 참고 자료다.

적용:

- `도구 카드 선택 → 설명`보다
  `손을 뻗음 → 잡음 → 움직임 → 세계 반응`을 우선한다.
- 공포는 UI보다 공간/소리/행동의 불확실성에서 만든다.

---

# 3. EasyWeb가 아니라 이 프로젝트의 공식 시각 문법: Embodied Composite

최종 player-facing 장면은 다음 합성으로 생각한다.

```text
World Plate
+ Spatial / Occlusion Layer
+ Actor Layer
+ Embodied Body Layer
+ Held / Contact Item Layer
+ Environmental Light Integration
+ Perceptual Treatment
+ Minimal Player UI
```

이를 **Embodied Composite**라고 부른다.

중요:

- `배경 이미지 + 손 PNG + 버튼`이 아니다.
- 모든 layer는 같은 사건과 같은 물리 공간을 공유한다.
- layer 분리는 제작/배치/continuity를 위한 것이다.
- 학생에게는 하나의 시야처럼 보여야 한다.

---

# 4. 자산 종류

## A. World Plate

장면의 기본 환경.

예:

- dawn camp / fire area
- departure edge
- trail / grassland / woodland transition
- track observation ground
- rock-shelter approach
- cave/rock-shelter entrance
- return route
- distant firelight

원칙:

- 완전한 장면마다 새 그림을 하나씩 생성하지 않는다.
- 같은 Scene 내부 Beat는 가능한 한 같은 world plate family를 공유한다.
- 변화는 body/actor/object/light/focus layer로 처리한다.

## B. Spatial / Occlusion Layer

전경 풀, 바위 모서리, 불빛 앞 물체, 동굴 입구 가장자리처럼 **무엇이 무엇을 가리는지** 알려주는 요소.

목적:

- body가 background 위에 붙은 스티커처럼 보이는 문제 방지
- actor와 손이 같은 공간 안에 있다는 깊이감 생성
- 동굴/거처의 실제 입체감 보조

## C. Actor Layer

R/H1/H2 등 주변 사람.

필요 상태 예:

- idle / preparing
- gaze toward player
- offer-tool
- departure
- stop / alert
- inspect shelter
- return / reunion

NPC는 카드 portrait가 아니라 **공간 안에 있는 몸**이다.

## D. Embodied Body Layer

플레이어 역할의 1인칭 신체 일부.

항상 보이지 않아도 된다.

기본 Hunt pose family:

- `fire-rest`
- `receive-reach`
- `tool-inspect`
- `rise`
- `walking-carry`
- `crouch-observe`
- `ground-touch`
- `brace-or-hesitate`
- `cave-inspect`
- `fatigued-return`
- `firelight-relief`

## E. Held / Contact Item Layer

주먹도끼, 채집물, 운반물처럼 손과 관계를 갖는 물건.

원칙:

- tool-only image를 화면에 독립적으로 띄우지 않는다.
- held item에는 반드시 `grip/contact` 관계가 있다.
- handed-off item은 상대 손 → 공유 접촉 → 내 손의 연속성이 보여야 한다.

## F. Treatment Layer

01C의:

- warm exposure
- dusk
- focus
- vignette
- jolt
- blink
- threat accent

등.

이 layer는 world/body/actor를 하나의 장면으로 묶어야 한다.

---

# 5. Camera / Composition Profile

생성형 이미지 consistency를 위해 역할별 **Camera Profile**을 먼저 고정한다.

최소 항목:

```text
role
nominal eye height
horizon band
look direction
look-down range
body visibility policy
dominant hand
near-body scale range
interaction contact zone
safe crop zone
```

절대 규칙:

- 같은 역할 장면마다 시점 높이가 이유 없이 달라지지 않는다.
- 손을 크게 보이게 하려고 매 장면 body를 임의 확대하지 않는다.
- 도구 크기를 화면에 맞추기 위해 실제 grip 비율을 계속 바꾸지 않는다.
- 1인칭임을 강조하려고 항상 극단적 wide-angle 왜곡을 사용하지 않는다.

## Action Camera Profiles

필요하면 하나의 역할 안에서 소수의 action profile을 둔다.

예:

- `forward-neutral`
- `seated-downward`
- `handoff-close`
- `crouch-downward`
- `cave-forward-dark`
- `return-fatigue`

이는 Scene ID가 아니다.

카메라/구도 제작 preset이다.

---

# 6. 1인칭 팔·손·무릎 생성 규칙

## 몸은 HUD가 아니다

금지:

- 모든 화면 하단에 같은 손 PNG 고정
- 화면 중앙에 항상 같은 tool pose
- 배경과 무관한 studio lighting 손 이미지
- 매 장면 다른 사람처럼 보이는 손/팔

## 손의 역할

손이 보이는 이유는 최소 하나가 있어야 한다.

- 접촉
- 받기
- 들기
- 밀기
- 치우기
- 만지기
- 지지하기
- 피로/긴장 표현
- 방향/거리 감각 제공

## Contact-first 원칙

특히 상호작용 장면에서는:

```text
Target
→ approaching hand
→ contact
→ world response
```

가 읽혀야 한다.

`클릭한 뒤 갑자기 다음 pose 이미지`만 바뀌는 것을 최소화한다.

## Pose continuity

같은 pose family에서는:

- 팔 길이
- 손 크기
- 손가락 특징
- dominant hand
- 소매/피부
- 광원

이 유지돼야 한다.

## 무릎/발

- 불 앞에 앉음
- 몸을 낮춤
- 아래를 내려다봄
- 넘어질 듯한 위험

처럼 자세 이해에 필요한 경우만 보인다.

`나는 몸이 있다`를 증명하려고 억지로 발을 매 장면 노출하지 않는다.

---

# 7. 주먹도끼 Visual Canon

주먹도끼는 교과 핵심 Anchor이므로 **하나의 canonical object identity**를 먼저 만든다.

기준:

- `뗀석기` 상위 개념의 대표적인 구체 예
- 판타지 전투도끼가 아님
- 현대 손도끼 형태가 아님
- 손잡이 달린 철제 도구처럼 보이면 안 됨
- 자르기/두들기기/긁기/파기 등 여러 생활 사용을 상상할 수 있는 형태

## Reference Source 우선순위

실제 artifact reference는 가능한 한:

1. 박물관/연구기관 원자료
2. 공개 라이선스 또는 Public Domain 이미지
3. 학술/교육 기관 설명

순으로 고른다.

권장 기준 자료:

- Smithsonian Human Origins Program — Early Stone Age Tools / Stone Tools
- The Metropolitan Museum of Art Open Access handaxe/biface records
- British Museum handaxe records

Met Open Access처럼 Public Domain이 명시된 자료는 **형태 연구 reference**로 특히 유용하다.

## Handaxe Anchor Sheet

최소:

- front
- back
- left/right edge
- grip-in-hand
- offered-by-R
- held neutral
- close inspect

를 만든다.

## Continuity Markers

같은 Day 1 handaxe를 식별할 수 있도록 과장되지 않은 특징 2~3개를 고정한다.

예:

- 전체 실루엣
- 한쪽 cortex/거친 면 위치
- tip shape
- stone color family

장면마다 새로운 주먹도끼를 생성한 것처럼 보이면 FAIL이다.

---

# 8. 배경 / 환경 생성 규칙

## Scene Family 방식

배경은 개별 prompt의 연속이 아니라 **같은 지형의 family**로 생성한다.

Hunt 예:

```text
Camp Family
- dawn-near-fire
- shelter-visible
- departure-looking-back

Travel Family
- near-camp
- mid-distance
- track-ground
- far-from-camp

Rock Shelter Family
- distant-notice
- approach
- entrance
- interior-hint

Return Family
- dusk-route
- firelight-distant
- reunion-near-fire
```

## Spatial Continuity

같은 이동 구간에서 유지:

- 지형 재질
- 주요 방향
- 식생 성격
- 바위 종류/색
- 광원 방향
- 시간대 progression

## Current Temporary Shelter

생성 시 반드시 피한다.

- 현대 캠핑 텐트
- 완성된 현대 집 silhouette
- 지나치게 정교한 영구 건축물
- 교과서 아이콘 같은 정면 도식

필요:

- 비대칭성
- 재료의 불균일함
- 덮개/지지대의 생활 흔적
- 사람과 불이 실제로 사용하는 공간이라는 scale

Stage 07에서는 `막집`으로 확정 명명하지 않는다.

## Cave / Rock Shelter

필수 동시 정보:

- protection possibility
- usable dry-ish area
- real entrance depth
- darker uncertain interior
- possible animal use
- resource-distance uncertainty

피할 것:

- 빛나는 퀘스트 입구
- 자동 새 집처럼 아늑한 완성 공간
- 항상 공포 던전처럼 과장된 skull/monster language

---

# 9. R / H1 / H2 생성 규칙

각 인물은 먼저 **Cast Anchor Sheet**를 만든다.

포함:

- front / 3/4 / side
- standing scale
- clothing/material family
- hair silhouette
- hand appearance
- neutral / concern / alert 범위

원칙:

- 각 Beat마다 새로 character prompt를 처음부터 쓰지 않는다.
- 동일 character reference를 기반으로 변형을 만든다.
- 표정만으로 관계를 설명하지 않는다.
- gaze / body orientation / distance / hand action을 함께 사용한다.

역사적 고정관념 Guardrail:

- Hunt = 남성, Gather/Camp = 여성으로 자동 고정하지 않는다.
- 역사적으로 확정되지 않은 세부 복식/장신구를 사실처럼 과도하게 강조하지 않는다.
- “원시인” caricature를 피한다.

---

# 10. 생성형 이미지 제작 Workflow

## Step 1 — Historical Reference Pack

각 asset family마다 먼저 reference를 수집한다.

분리:

```text
Historical Fact Reference
Visual Mood Reference
Composition Reference
```

세 가지를 섞어서 `실제 역사적 사실`처럼 취급하지 않는다.

## Step 2 — Canonical Anchor Sheet

한 번에 장면을 많이 생성하기 전에 먼저 잠근다.

- player body identity
- R/H1/H2
- handaxe
- current temporary shelter
- terrain family
- cave/rock-shelter family
- fire/light family

## Step 3 — Camera Keyframes

장면 전체 생성보다 먼저 rough composition을 만든다.

- eye line
- horizon
- actor distance
- body entry direction
- object contact point
- UI safe area

Stage 07 CSS/DOM Skeleton은 이 단계의 reference로 사용한다.

## Step 4 — Pose / Object Variants

anchor를 기준으로 필요한 pose만 생성한다.

불필요한 variant 대량 생성 금지.

## Step 5 — Scene Family Generation

같은 장소/시간/광원 묶음으로 생성한다.

## Step 6 — Continuity Review

생성 직후 코드에 넣지 않는다.

검사:

- 같은 사람인가?
- 같은 손/팔인가?
- 같은 주먹도끼인가?
- 시점 높이가 맞는가?
- 광원이 같은가?
- 접촉점이 가능한가?
- 시대/교과 오개념이 없는가?

## Step 7 — Integration Export

선택된 자산만 export한다.

## Step 8 — Browser Composite QA

실제 브라우저에서:

- crop
- responsive size
- body proportion
- actor distance
- UI overlap
- readability
- treatment integration

을 확인한다.

---

# 11. Prompt / Generation Contract

특정 이미지 생성 서비스 하나에 종속되지 않는다.

각 생성 요청은 최소 다음 구조를 가진다.

```text
A. Canonical subject identity
B. Historical constraints
C. Camera / POV profile
D. Action / pose
E. Environment continuity
F. Lighting continuity
G. Required visible elements
H. Required occlusion/contact
I. Forbidden modern/fantasy elements
J. Output role: world plate / actor / body / item / reference sheet
```

## Negative / Forbidden 정보도 명시

예: 주먹도끼

- no metal
- no wooden axe handle
- no fantasy weapon
- no polished modern tool

예: 현재 임시 거처

- no camping tent
- no modern house
- no geometric icon-like hut

## Reference-conditioned generation

사용하는 생성 도구가 reference image conditioning을 지원하면:

- 같은 player body
- 같은 cast
- 같은 handaxe
- 같은 shelter

의 anchor를 반복 reference로 사용한다.

지원하지 않으면:

- 외형 특징을 prompt template에 고정
- 소수 variant를 만들고 사람이 canonical set을 선택
- continuity가 깨지는 결과는 폐기

한다.

---

# 12. Asset Provenance / Generation Record

생성 자산은 최소 다음 metadata를 추적한다.

```text
assetId
assetRole
sceneFamily
roleId
cameraProfile
bodyPose
heldItem
lightProfile
historicalReferenceIds
generationTool
generationDate
promptVersion
parentAnchorAssetId
humanApproved
```

학생에게 노출하지 않는다.

목적:

- 같은 자산 재생성
- continuity 원인 추적
- 역사 reference 확인
- 사용 권리/출처 확인

Generic DAM/asset server를 만들 필요는 없다.

Stage 08에서는 작은 JSON/TS manifest 정도면 충분하다.

실제 typed runtime 계약은 Stage 06이 소유한다.

---

# 13. 브라우저 배치 / Responsive Composition 원칙

## 왜 단순 absolute pixel placement만 쓰면 안 되는가

화면비가 바뀌면:

- 손이 과도하게 커짐
- NPC와 접촉점이 어긋남
- handaxe가 잘림
- attention target이 UI 뒤로 감

문제가 생길 수 있다.

## Composition Coordinate

자산 제작에는 canonical composition frame을 두되, runtime에서는 **normalized anchor**를 사용한다.

개념:

```text
x: 0.0 ~ 1.0
y: 0.0 ~ 1.0
scale relative to composition frame
pivot / contact anchor
```

몸/도구에는 특히:

- wrist/grip anchor
- receiving contact anchor
- body bottom anchor

를 둔다.

## Background

- aspect ratio 유지
- crop-safe zone 정의
- primary attention target이 흔한 viewport crop에서 사라지지 않게 함

브라우저 구현은 `object-fit`, `object-position`, responsive image source를 활용할 수 있다.

## Transparent Foreground

손/몸/actor layer는 투명 배경 자산 사용을 기본으로 한다.

- alpha edge halo 검사
- background light와 edge color mismatch 검사
- body가 독립 스티커처럼 보이는 drop shadow 금지

## Image Format 방향

production 후보:

- opaque world plate: AVIF/WebP + fallback 고려
- alpha foreground: WebP/PNG 등 실제 품질/호환성 기준 선택
- responsive source variants: 필요할 때만 생성

최종 format 정책은 Stage 06 runtime 구현 때 성능 측정 후 확정한다.

---

# 14. Depth / Occlusion Contract

각 주요 Scene은 최소한 다음 순서를 검토한다.

```text
far background
→ world midground
→ actor / interactable
→ near-world occluder
→ player body / held item
→ optional extreme foreground
→ treatment
→ UI
```

하지만 body가 항상 모든 world object보다 앞에 있는 것은 아니다.

예:

- 풀을 헤칠 때 일부 풀이 손 앞을 가릴 수 있음
- 바위 입구를 짚을 때 바위 edge가 손 일부를 가릴 수 있음
- R에게 도구를 받을 때 R의 손/도구/내 손의 depth가 순간적으로 교차함

# **Occlusion은 몰입을 만드는 핵심 정보다.**

단순 z-index 고정만으로 모든 Scene을 처리하지 않는다.

---

# 15. Lighting Integration Contract

레이어를 따로 생성해도 학생에게는 한 세계로 보여야 한다.

필수:

- key light direction 일치
- color temperature 일치
- fire reflection 일치
- cave entrance exposure 일치
- dusk progression 일치

특히:

```text
불이 따뜻함
→ 배경만 주황색 ❌
→ 손/도구/NPC에도 같은 방향의 약한 반사 ✅
```

01C Screen Treatment는 물리적 lighting을 대체하지 않는다.

# **Physical-looking light first, perceptual treatment second.**

---

# 16. Scene / Beat별 Visual Asset 규칙

Stage 04 Scene spec을 제작 시 다음 항목까지 확장해서 사용한다.

```text
Camera Profile
World Plate Family
Depth / Occlusion Plan
Actor Asset State
Body Pose
Held Item State
Contact Anchor
Light Profile
Continuity Inputs
Primary Attention Crop-Safe Zone
Treatment
Reduced-Effects Visual Parity
```

이 목록은 generic Scene DSL이 아니다.

art/implementation checklist다.

## Beat는 새 배경을 요구하지 않는다

예:

```text
S2 Tool Handoff
world plate 유지
→ R gaze 변경
→ offering hand 등장
→ 내 hand reach
→ contact
→ held state 전환
→ terminology cue
```

매 Beat마다 완성 이미지 한 장을 갈아 끼우는 slideshow 구조를 피한다.

---

# 17. Stage 01~07 보완 판정

외부 사례와 현재 canonical을 대조한 결과, Stage 01~07을 다시 갈아엎을 필요는 없다.

다만 다음 보완은 공식적으로 필요하다.

## Stage 01A — 보완 필요

기존 Body Continuity / Fidelity Ladder는 유지한다.

추가 해석:

- Camera Profile continuity
- contact anchor
- occlusion
- body visibility = action information
- viewmodel-like floating-hand 금지

이 문서(07A)가 생산 규칙을 구체화한다.

## Stage 01C — 보완 필요

기존 treatment 원칙 유지.

추가 해석:

- world/body/actor layer의 물리적 lighting 통합 뒤 treatment 적용
- 별도 body layer가 색/노출에서 분리되어 보이면 FAIL
- camera motion보다 body/environment cue 우선

## Stage 02 — 소폭 보완 필요

Same Day 1의 continuity는 narrative signal뿐 아니라 **shared visual anchors**에도 적용한다.

후속 구현 시 같은 하루의:

- R/H1/H2 canonical identity
- current shelter identity
- fire area layout
- morning/dusk light progression

이 역할마다 모순되지 않아야 한다.

다른 POV이므로 화면 구도는 달라도 된다.

## Stage 03 — 소폭 보완 필요

Hunt story의 주요 Scene에 visual continuity checkpoint를 둔다.

특히:

- 동일 handaxe
- 이동 거리
- 낮아지는 해
- body fatigue
- dirt/wear
- return firelight

## Stage 04 — 보완 필요

기존 Scene Spec에 제작 단계용 Visual Asset fields를 추가 해석한다.

Section 16의 목록을 사용한다.

## Stage 05 — 소폭 보완 필요

역할별 body/visual vocabulary를 다르게 유지한다.

Hunt:

- distance
- carry
- crouch
- alert
- fatigue

Gather:

- close hand work
- repeated reach
- sorting
- processing
- carrying small resources

Camp:

- fire tending
- shelter repair
- waiting/resting
- food processing
- watching departure/return

## Stage 05A — 보완 필요

Design PASS 이후 production readiness를 별도 검증한다.

- body continuity sheet 존재
- cast anchor sheet 존재
- handaxe visual canon 존재
- environment family 존재
- historical reference provenance 존재
- misconception visual guardrail 존재

이것이 없으면 `Visual Production Ready`가 아니다.

## Stage 06 — 후속 정식 버전업 필요

Stage 08 구현 직전/초기에 Technical SSOT에 최소 타입을 추가한다.

후보:

```text
VisualAssetId
CameraProfileId
SceneVisualManifest
BodyAssetState
HeldItemVisualState
LayerPlacement / Anchor
```

단:

- 범용 Asset Engine 금지
- 범용 Animation Engine 금지
- 3D engine 금지
- scene DSL 과설계 금지

## Stage 07 — 보완 필요

현재 Skeleton Human QA는 그대로 진행한다.

추가 질문:

- placeholder 단계에서도 body/contact composition이 production asset으로 치환 가능한 구조인가?
- 생성 자산으로 바꾸면 hand/UI sticker 문제가 커질 구조는 아닌가?
- current shelter/cave의 crop-safe spatial relation이 유지 가능한가?

Human QA PASS를 이미지가 예쁘다는 이유로 선언하지 않는다.

---

# 18. Stage 08 Visual Production 최소 범위

Stage 08 Hunt Vertical Slice에서 **한 역할 전체 production asset을 무제한 생성하지 않는다.**

먼저 minimum coherent set을 만든다.

## Player Body

- fire-rest
- receive-reach
- tool-inspect
- walking-carry
- crouch-observe
- cave-inspect
- fatigued-return
- firelight-relief

## Handaxe

- offered
- held neutral
- close inspect
- walking/crouch compatible
- functional-use variants는 실제 interaction이 구현될 때 추가

## Cast

- R fire-side
- R offer-tool
- H1/H2 prepare
- H1/H2 walking/stop
- shelter inspect reaction
- reunion

## Environment

- dawn camp
- current shelter near
- departure / looking back
- search ground
- travel distance
- rock shelter far
- rock shelter near
- dusk return
- distant firelight
- reunion camp

이 set으로:

```text
receive
→ leave
→ observe
→ discover
→ inspect
→ return
```

의 continuity를 먼저 증명한다.

---

# 19. Visual QA Gate

Production asset 한 장이 예쁘다고 PASS가 아니다.

각 Scene에서 확인:

## Embodiment

- 내 몸처럼 보이는가?
- pose가 현재 행동을 설명하는가?
- 손/팔 비율이 자연스러운가?

## Contact

- 상대/도구/환경과 실제로 접촉하는가?
- tool grip이 가능한가?

## Continuity

- 같은 몸인가?
- 같은 도구인가?
- 같은 사람인가?
- 같은 세계/시간인가?

## Spatial

- 거리와 depth가 읽히는가?
- occlusion이 물리적으로 납득되는가?

## Historical / Curriculum

- 현대/판타지 요소가 없는가?
- 주먹도끼가 사냥 전용 무기로 과장되지 않는가?
- current shelter가 현대 집/텐트처럼 보이지 않는가?
- cave가 유일한 정답 거처처럼 보이지 않는가?

## Treatment

- layer마다 lighting이 따로 노는가?
- effect가 물리적 사건보다 앞서는가?
- reduced effects에서도 핵심 정보가 남는가?

## Responsive

- viewport가 달라도 hand/contact/attention target이 무너지지 않는가?
- UI가 중요한 contact를 가리지 않는가?

---

# 20. 참고 자료와 라이선스 원칙

## 1인칭 구현/디자인 참고

- id Software — Quake GPL Source Release
  - https://github.com/id-Software/Quake
- Valve Developer Community — Viewmodel / Worldmodel documentation
  - https://developer.valvesoftware.com/
- Bevy official example — First Person View Model
  - https://github.com/bevyengine/bevy/blob/main/examples/camera/first_person_view_model.rs
- Godot documentation / proposals — Viewport, first-person viewmodel FOV/depth discussions
  - https://docs.godotengine.org/
  - https://github.com/godotengine/godot-proposals/
- DICE / GDC — Creating First Person Movement for Mirror's Edge
  - https://www.gdcvault.com/
- The Long Dark — Character Presentation developer diary
  - https://www.thelongdark.com/
- Campo Santo / GDC — Firewatch art, level design, development process
  - https://www.firewatchgame.com/
  - https://www.gdcvault.com/
- Frictional Games — Penumbra / HPL / Amnesia open source
  - https://github.com/FrictionalGames/

## 역사/유물 reference

- Smithsonian Human Origins Program
  - https://humanorigins.si.edu/
- The Metropolitan Museum of Art Open Access
  - https://www.metmuseum.org/art/collection
- British Museum Collection
  - https://www.britishmuseum.org/collection

## 라이선스 원칙

`웹에서 볼 수 있음`과 `프로젝트 자산으로 자유 사용 가능`은 다르다.

반드시 구분:

- reference only
- public domain
- CC licensed
- code license
- asset license

외부 게임의 실제 게임 asset을 복사하지 않는다.

오픈소스 code에서 **아이디어/구조를 학습**하는 것과 asset을 재사용하는 것은 별도 문제다.

생성형 이미지의 역사적 형태 reference에는 가능한 한 public-domain/open-access artifact를 우선 사용한다.

---

# 21. 최종 원칙

# **몸을 화면에 붙이지 말고, 몸이 세계와 접촉하게 한다.**

# **한 장면을 매번 새로 생성하지 말고, 같은 세계의 Scene Family를 만든다.**

# **생성형 이미지의 품질보다 identity / contact / continuity / historical plausibility를 먼저 잠근다.**

# **World / Actor → Body Contact → Perception → Curriculum 순서를 시각 자산에서도 유지한다.**

Stage 08의 목표는 `예쁜 이미지가 많은 Hunt`가 아니다.

# **같은 몸과 같은 사람들과 같은 도구를 들고, 실제 같은 하루의 공간을 지나고 있다고 느껴지는 Hunt**다.
