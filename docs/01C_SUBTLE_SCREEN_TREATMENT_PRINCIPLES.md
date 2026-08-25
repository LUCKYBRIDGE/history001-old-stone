# 구석기 역사 체험 웹게임
## Stage 01C — Screen Treatment 원칙 v3 / Subtle by Default, Strong When Earned

> 목적: 색, 명암, blink, 초점, 시야 가장자리, 미세 움직임, 순간적 강한 accent를 이용해 **몸 상태·시간·환경·위협·감정·전환을 체감**하게 한다. 기본은 절제하지만, 역사적 상황과 서사가 충분히 쌓인 순간에는 더 강한 연출도 허용한다.
>
> 상위 기준:
> - `docs/01_PROJECT_CORE.md`
> - `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
> - `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`

---

# 1. 핵심 정의

화면 효과는 장식용 VFX도, 항상 약해야 하는 배경 장식도 아니다.

# **효과의 강도는 장면이 이미 만들어 놓은 의미와 감정에 비례한다.**

기본 순서:

# **World / Actor Cue → Body Response → Perceptual Treatment**

그러나 중요한 순간에는 treatment가 학생의 지각을 순간적으로 강하게 흔들어도 된다.

예:

- 불이 가까움 → 따뜻한 환경/손 → 지속적인 약한 warm treatment
- 해가 짐 → 시간/거리 압박 → 점진적 dusk treatment
- 동행자가 갑자기 멈춤 → 내 몸도 정지 → 짧고 강한 focus/accent 가능
- 바로 옆에서 예상 못 한 움직임 → 순간적인 dark/red edge + viewpoint jolt 가능
- 무사히 불빛을 다시 발견 → 어둠 속 노출 회복 + 긴장 완화

# **Subtle by default. Strong when earned.**

---

# 2. 효과의 여섯 역할

## A. Environment Treatment

- 불빛의 따뜻한 반사
- 새벽/한낮/해질녘 색온도
- 노출 적응
- 연기/먼지/습기
- 멀어지는 거처의 빛/선명도

## B. Body State Treatment

- 피로: sway, 무거운 리듬, 주변부 변화
- 긴장: 움직임 정지, focus 집중
- 추위: 몸 자세 + 색온도
- 운반: 둔한 화면 리듬
- 놀람: 짧은 viewpoint jolt/노출 변화

## C. Event Beat Treatment

- 갑작스러운 소리 뒤 순간적인 초점 변화
- 몸을 급히 낮출 때 viewpoint shift
- 가까운 위험이 드러나는 순간 짧은 accent
- 먼 불빛 재발견 때 노출 회복

## D. Emotional Treatment

장면의 감정적 여운을 아주 짧게 강화할 수 있다.

- 죄책감/후회: 과장된 빨강보다 정적, 낮아진 밝기, 사람의 시선과 결합
- 안도: 소리와 밝기 회복
- 공포: 시야 정지, 주변부 압박, 제한적 색 변화
- 긴장 해소: treatment가 갑자기 사라지거나 호흡감 회복

감정을 색상 코드 하나로 고정하지 않는다.

## E. Transition Treatment

- 자연스러운 blink
- fade through darkness
- 동일한 사람/물건/불을 anchor로 한 POV 전환

## F. Attention Treatment

학생이 봐야 할 대상을 보조한다.

- 주변 대비 약화
- 자연스러운 빛/초점 차이
- 필요한 경우 짧은 motion cue

게임식 glowing outline은 기본값이 아니다.

---

# 3. 효과 강도 Budget

기본 단계:

- `none`
- `subtle`
- `accent`
- `strong-accent` — **예외적 핵심 순간에만 허용**

`strong-accent`는 장면 전체에서 매우 드물게 사용한다.

좋은 사용 조건:

1. 앞에서 상황 build-up이 있었음
2. 학생이 왜 놀랐는지 세계 안에서 이해할 수 있음
3. 효과가 짧음
4. 효과 뒤 실제 행동/관계/결과가 이어짐
5. reduced-effects에서도 의미가 유지됨

나쁜 사용:

- 버튼 클릭 때마다 flash
- 모든 위험마다 빨간 화면
- 같은 강한 효과를 반복해 무감각하게 만듦

# **강한 효과가 있다는 것이 문제가 아니라, 강한 효과에 서사적 이유가 없는 것이 문제다.**

---

# 4. 붉은 화면 / Red Accent 원칙

붉은 계열은 사용할 수 있다.

허용:

- 불의 자연스러운 적색/주황 반사
- 해질녘 환경광
- 긴장 순간의 주변부 red tint
- 갑작스러운 위험/충격 순간 한 번의 짧은 red/dark accent
- 몸 가까이에 무언가 스치는 순간의 제한적 시각 충격

피할 것:

- 위험마다 동일한 red flash
- HP damage UI처럼 반복되는 red pulse
- 화면 전체를 장시간 빨강으로 유지
- 빨간색만 보고 위험을 판단해야 하는 구조

한 번의 짧은 강한 red accent가 역사적 위험을 강하게 체감시키는 데 유효하다면 사용할 수 있다.

단, **게임 관습의 체력 감소 피드백처럼 반복적으로 사용하지 않는다.**

---

# 5. Blink / Flash / Jolt를 구분한다

## Blink

눈을 감았다 뜨는 감각.

- 자세 전환
- 짧은 시간 경과
- Perspective transition
- 장면 호흡

## Flash

극히 제한적으로 가능.

- 강한 순간 사건을 한 번 accent하는 목적
- 반복 flashing 금지
- 빠르게 연속되는 flash 금지
- 접근성 기준을 넘지 않음

## Jolt

매우 짧은 viewpoint 이동/충격.

- 갑작스러운 움직임
- 몸을 급히 피함
- 예상하지 못한 가까운 위험

지속 shake보다 **짧은 한 번의 jolt**를 선호한다.

---

# 6. 공포 장면과 Treatment

공포게임 같은 순간이 일부 있어도 된다.

좋은 공포 treatment:

```text
소리가 끊김
→ H1이 멈춤
→ 내 손도 멈춤
→ 시야 밖 움직임
→ 주변부가 약간 좁아짐
→ 갑작스러운 가까운 소리
→ 짧은 strong accent
→ 즉시 몸을 낮추거나 이동
```

이때 effect는 공포를 만들어내는 유일한 원인이 아니다.

사람·소리·공간·불확실성이 이미 공포를 만들고 treatment는 그 순간을 몸으로 강화한다.

---

# 7. Vignette / Peripheral Vision

가능:

- 긴장 순간 주변부 어두움
- 피로/어둠 적응
- 위협이 가까워질 때 잠깐 시야가 좁아지는 느낌

피할 것:

- 항상 켜진 검은 vignette
- 체력 게이지처럼 단계적 HUD
- 장시간 시야를 답답하게 제한

---

# 8. Blur / Focus

가능:

- 손/도구에 잠깐 시선 집중
- 멀리 있는 사람/불빛 집중
- 놀람 뒤 짧은 초점 회복
- 위협 직전 주변 정보가 순간적으로 흐려지는 연출

피할 것:

- 조작을 오래 방해하는 blur
- 텍스트를 읽기 어렵게 하는 지속 blur
- 피로를 표현한다고 계속 초점이 흔들리는 상태

---

# 9. Micro Motion / Stop / Chase Rhythm

- 걷기: 약한 sway
- 몸 낮추기: viewpoint shift
- 운반: 무거운 리듬
- 긴장: motion stop
- 도망/빠른 회피: 짧은 연속 움직임 가능
- 충격: 한 번의 jolt

1인칭이라고 항상 흔들 필요는 없다.

# **정지와 갑작스러운 움직임의 대비 자체가 강한 연출이다.**

---

# 10. 효과와 감정의 관계

효과를 감정 아이콘으로 쓰지 않는다.

예:

- 죄책감 = 빨강 ❌
- 공포 = 검은 vignette 항상 ❌
- 성공 = 황금빛 ❌

대신 장면마다 사람·몸·공간과 결합한다.

예:

> 늦게 귀환 → 불은 이미 어두운 환경에서 강하게 보임 → R의 시선 → 내 움직임이 잠깐 느려짐 → 별도 과장 없이 정서적 무게 발생.

---

# 11. 접근성 / 안전 Baseline

강한 감정과 강한 순간 연출을 허용하되 접근성 기준은 유지한다.

- 반복적·빠른 flashing 금지
- WCAG three-flashes threshold를 넘지 않음
- 중요한 정보는 색/효과 하나에 의존하지 않음
- `prefers-reduced-motion` / reduced effects 지원
- 강한 blur/zoom/shake를 지속하지 않음
- 효과가 조작을 장시간 방해하지 않음
- 불편함을 호소하면 교사/설정에서 강도를 낮출 수 있음

Reduced Effects는 `공포 없음` 모드가 아니라 **동일 장면을 덜 자극적인 지각 언어로 경험하는 모드**다.

---

# 12. 역할별 Treatment 방향

## Hunt

가장 넓은 강도 범위를 허용한다.

- 거처 이탈: 따뜻한 색 감소
- 긴 추적: dusk + 피로
- 위협 build-up: 정지/focus/peripheral 압박
- 가까운 위험: 드문 strong accent 가능
- 회피: 짧은 motion rhythm
- 귀환: 먼 불빛과 노출 회복

## Gather

관찰과 불확실성 중심.

- 가까운 대상 focus
- 같은 장소의 빛 변화
- 낯선 흔적/식생에서 순간적 attention shift
- 멀어진 거처 감각

## Camp

정적 변화와 기다림 중심.

- 불 가까이 warm treatment
- 시간 경과의 그림자/색온도
- 빈자리와 먼 소리
- 늦은 귀환을 기다리는 어두워지는 화면
- 사람을 발견한 순간 focus/밝기 변화

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
- `ImpactAccent`

범용 VFX 엔진을 만들지 않는다.

장면 의미에서 파생되는 작은 preset으로 구현한다.

예:

- `fire-warmth`
- `dusk-fatigue`
- `threat-attention`
- `threat-close-accent`
- `crouch-shift`
- `return-firelight`

---

# 14. Acceptance Gate

- 효과가 장면 의미와 감정을 강화하는가?
- 약한 효과만 고집해 중요한 순간이 평평해지지는 않는가?
- 반대로 강한 효과가 남용되지 않는가?
- red/flash/jolt가 HP UI가 아니라 실제 순간 사건처럼 느껴지는가?
- 공포 장면의 효과가 사람·소리·공간과 함께 작동하는가?
- 학생이 왜 놀랐거나 긴장했는지 설명할 수 있는가?
- reduced effects에서도 동일한 사건과 판단이 유지되는가?

# **목표는 `효과가 적은 게임`이 아니라 `효과가 정확한 자리에 있는 게임`이다.**
