# 구석기 역사 체험 웹게임
## Stage 01C — Subtle Screen Treatment 원칙 v2

> 목적: 큰 컷신·화려한 이펙트에 의존하지 않고 색, 명암, 짧은 blink, 초점, 시야 가장자리, 미세 움직임 같은 작은 화면 변화로 **몸 상태·시간·환경·위협·전환을 보조**하되, 효과가 의미를 대신하거나 학생의 접근성·안전을 침해하지 않도록 한다.
>
> 상위 기준:
> - `docs/01_PROJECT_CORE.md`
> - `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
> - `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`

---

# 1. 핵심 정의

이 프로젝트의 몰입은 대규모 애니메이션이나 영화 같은 VFX를 전제로 하지 않는다.

# **작은 화면 변화는 세계·몸·사람에서 이미 일어난 변화를 조금 더 빠르게 느끼게 하는 보조 지각 언어다.**

효과가 먼저 의미를 말하지 않는다.

기본 순서:

# **World / Actor Cue → Body Response → Perceptual Treatment**

예:

- 불이 가까움 → 손과 환경이 따뜻하게 보임 → 약한 warm treatment
- 동행자가 멈춤 → 내 몸도 멈춤 → 아주 약한 focus/vignette 변화
- 오래 걸음 → 팔과 걸음이 지침 → 미세 sway/명암 변화

---

# 2. 효과의 다섯 역할

## A. Environment Treatment

- 불빛의 따뜻한 반사
- 새벽/한낮/해질녘의 색온도 변화
- 밝고 어두운 장소 사이의 부드러운 노출 적응
- 연기/먼지/습기에 따른 약한 대비 변화
- 멀어지는 거처의 밝기/선명도 변화

## B. Body State Treatment

- 피로: 미세 sway, 아주 약한 주변부 변화
- 긴장: 움직임 정지, 짧은 focus 집중
- 추위: 몸 자세 + 약한 색온도 변화
- 운반: 둔한 화면 리듬

몸 상태는 효과만으로 표현하지 않는다.

## C. Event Beat Treatment

- 갑작스러운 소리 뒤 매우 짧은 focus 변화
- 몸을 급히 낮출 때 짧은 viewpoint shift
- 먼 불빛을 다시 발견했을 때 미세한 노출 회복

## D. Transition Treatment

- 한 번의 자연스러운 blink
- 짧은 fade through darkness
- 동일한 사람/손/물건을 anchor로 한 POV 전환

## E. Attention Treatment

학생이 봐야 할 대상을 보조하는 아주 약한 처리.

- 주변 대비를 조금 낮춤
- 대상 주변의 자연스러운 빛/초점 차이

게임식 glowing outline을 기본값으로 사용하지 않는다.

---

# 3. 효과는 Primary Attention Target을 방해하지 않는다

한 장면에서 가장 중요한 대상은 하나다.

예:

- 도구 전달: 상대 손 → 도구 → 내 손
- 위험 build-up: 멈춘 동행자 → 이상한 방향
- 귀환: 먼 불빛

screen treatment가 학생 눈을 다른 곳으로 끌면 삭제하거나 줄인다.

# **효과는 attention을 정리해야지 추가 경쟁 요소가 되어서는 안 된다.**

---

# 4. 붉은 화면 원칙

붉은색은 강한 게임 관습을 불러올 수 있으므로 매우 제한한다.

허용:

- 불의 자연스러운 적색/주황 반사
- 해질녘 환경광
- 긴장 순간의 아주 약한 주변부 색 변화

피할 것:

- 위험마다 전체 화면 진한 빨강
- HP damage flash처럼 보이는 red flash
- 반복적인 붉은 pulse
- 빨간색만 봐야 위험을 이해할 수 있는 구조

# **위협은 세계와 사람으로 먼저 이해되고, 색은 체감만 보조한다.**

---

# 5. Blink와 Flash를 구분한다

## Blink

짧게 눈을 감았다 뜨는 감각에 가깝게 사용 가능.

- 자세 전환
- 짧은 시간 경과
- Perspective transition
- 긴 장면 사이의 호흡

드물게 사용한다.

## Flash

기본적으로 사용하지 않는 쪽을 우선한다.

- 강한 백색/적색 flash 금지에 가깝게 운용
- 반복 flashing 금지
- 놀람을 만들기 위한 빠른 깜빡임 금지

접근성 최소 기준으로 **WCAG three-flashes threshold를 넘는 연출은 허용하지 않는다.**

프로젝트 내부 기준은 더 보수적으로, `flash보다 blink/fade`를 우선한다.

---

# 6. Vignette 원칙

가능:

- 긴장 순간 주변부가 아주 약하게 어두워짐
- 피로할 때 주변부 대비가 아주 조금 낮아짐
- 불을 본 뒤 상대적 어둠 적응

금지:

- 항상 켜진 검은 vignette
- 체력 상태처럼 단계가 눈에 띄게 바뀌는 HUD형 vignette
- vignette만으로 위험/피로를 판독

---

# 7. Blur / Focus 원칙

가능:

- 가까운 손/도구를 잠깐 볼 때 선택적 강조
- 멀리 있는 사람/불빛에 시선이 모이는 짧은 변화
- 갑작스러운 소리 뒤 아주 짧은 focus 회복

금지:

- 장시간 전체 화면 blur
- 텍스트/버튼을 읽기 어렵게 만드는 blur
- 피로를 표현한다고 계속 초점이 흔들리는 상태

피로는 blur보다 **몸 자세·걸음·사운드**를 우선한다.

---

# 8. Micro Motion 원칙

큰 카메라 흔들림보다 작은 움직임 또는 정지를 우선한다.

- 걷기: 약한 규칙적 sway
- 몸 낮추기: 짧은 viewpoint shift
- 운반: 느리고 작은 sway
- 긴장: 흔들림 증가보다 갑작스러운 정지가 더 적절할 수 있음

1인칭이라고 해서 화면을 계속 흔들지 않는다.

# **정지 역시 강한 연출이다.**

---

# 9. 효과 강도 Budget

기본 강도:

- `none`
- `subtle`
- `accent`

`strong`을 기본 preset으로 두지 않는다.

한 장면에 여러 효과를 겹칠 경우 가장 중요한 감각 하나를 우선한다.

효과가 계속 켜져 있으면 baseline이 되어 의미가 사라진다.

---

# 10. 의미 중복 금지

같은 정보를 동시에 과하게 반복하지 않는다.

나쁜 예:

> `위험!` 텍스트 + 빨간 화면 + 경고 아이콘 + 큰 음악 + 화면 흔들림

좋은 예:

> 동행자 멈춤 + 수풀 소리 + 내 움직임 정지 + 아주 약한 focus 변화

학생이 상황을 이해하는 데 필요한 정보와 효과의 수를 최소화한다.

---

# 11. 접근성 / 안전 Baseline

- 반복적·빠른 flashing 금지
- 중요한 정보는 색/효과 하나에 의존하지 않음
- interaction-triggered motion은 reduced-motion에서 억제/단순화 가능해야 함
- `prefers-reduced-motion` 또는 앱 내 reduced effects를 고려
- 강한 blur/zoom/shake 지속 금지
- 효과가 조작 대상이나 텍스트를 가리지 않음
- 효과를 꺼도 모든 진행·학습·위협 이해가 가능
- 학생이 어지러움/불편함을 호소하면 효과를 즉시 줄일 수 있어야 함

---

# 12. 역할별 기본 Treatment 예

## Hunt

- 거처 이탈: 따뜻한 색 감소, 자연광 증가
- 추적 장기화: 해질녘 색 + 아주 약한 피로 리듬
- 위협: 사람/소리/몸 정지 뒤 약한 focus 변화
- 귀환: 어두운 시야에서 먼 불빛 발견 뒤 미세한 밝기 회복

## Gather

- 가까운 관찰: 손과 대상에 자연스러운 선택적 focus
- 반복 탐색: 같은 장소의 시간/빛 변화
- 범위 확대: 익숙한 거처의 소리/빛이 약해짐

## Camp

- 불 가까이: 따뜻한 반사와 노출
- 시간 경과: 같은 공간의 그림자/색온도 변화
- 기다림: 큰 효과보다 정적·빈자리·먼 소리
- 귀환 발견: 먼 움직임에 시선이 모이는 정도

---

# 13. 기술 구현 원칙

초기에는 CSS와 가벼운 DOM layer로 충분하다.

후보:

- `ScreenTreatmentLayer`
- `ColorWash`
- `ExposureLayer`
- `VignetteLayer`
- `FocusTreatment`
- `MicroMotion`
- `BlinkTransition`

이름은 계약이 아니다.

범용 VFX 엔진을 만들지 않는다.

장면 의미에서 파생되는 작은 preset만 지원한다.

예:

- `fire-warmth`
- `dusk-fatigue`
- `threat-attention`
- `crouch-shift`
- `return-firelight`

---

# 14. Reduced Effects 동등성

효과 저감 상태는 `열화된 버전`이 아니라 동등한 학습 경로다.

예:

- sway 제거 → 몸 자세/발소리 유지
- blur 제거 → actor gaze/contrast cue 유지
- blink 단순화 → 짧은 fade/instant transition

모든 Learning Invariants와 선택 정보는 유지한다.

---

# 15. Acceptance Gate

- 효과가 없어도 장면 의미가 성립하는가?
- 효과가 상황을 더 빠르게 체감하게 하는가?
- 효과가 Primary Attention Target을 방해하지 않는가?
- 게임 HUD/HP 피드백처럼 보이지 않는가?
- 빨강/깜빡임/흔들림을 과하게 사용하지 않는가?
- 몸·사람·사운드와 하나의 상황으로 작동하는가?
- reduced effects에서도 동일한 정보와 학습이 유지되는가?
- 효과가 초등학생에게 불필요한 공포/멀미를 유발하지 않는가?

# **효과를 보고 `멋있다`보다 `불이 따뜻하다`, `뭔가 이상하다`, `많이 걸었다`, `돌아왔다`가 먼저 느껴지는 것이 목표다.**
