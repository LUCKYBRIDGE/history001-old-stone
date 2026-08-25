# R2_EMBODIED_PLAYTEST_PROTOCOL.md

## 목적

R2 Stage 07 Skeleton과 이후 Embodied role prototype이 **실제로 사람의 시야·몸·관계·감정·역사적 상상력**으로 작동하는지 교사/학생이 확인한다.

자동 테스트와 별개다.

현재 첫 적용 대상:

# **R2 Stage 07 — Embodied Experience Skeleton**

---

# 1. 실행

기본 Player:

```text
http://localhost:5173/
```

Teacher:

```text
http://localhost:5173/?teacher=1
```

Legacy 비교:

```text
http://localhost:5173/?legacy=1
```

첫 관찰에서는 **기본 Player URL**을 사용한다.

---

# 2. 관찰 원칙

먼저 플레이하고 나중에 분석한다.

첫 run에서는:

- DOM/devtools를 먼저 보지 않음
- 일부러 정답을 찾지 않음
- 화면을 학생처럼 봄
- 이상한 점이 생긴 순간을 기록
- 코드 수정은 플레이 중 하지 않음

관찰 기록은 사실/해석을 분리한다.

예:

```text
사실: 돌도구를 받는 버튼을 찾기 전에 약 8초 멈춤.
해석: 상대의 손과 도구가 Primary Attention으로 충분히 보이지 않을 수 있음.
```

---

# 3. 현재 Stage 07 흐름

```text
사냥을 나선 사람의 관점
→ 눈을 뜬다
→ 새벽 불
→ 익숙한 사람을 바라봄
→ 돌도구를 받음
→ 동행자들과 일어남
→ “해가 지기 전에 돌아와.”
→ 거처를 떠남
→ 몸을 낮춰 지면을 살핌
→ 같은 날, 다른 사람 관점
```

현재는 최종 이미지가 아니라 CSS/DOM layout proof다.

따라서 `예쁜가?`보다 **공간·몸·행동 구조가 맞는가?**를 먼저 본다.

---

# 4. 첫 20~30초

확인:

- 웹사이트 첫 화면보다 `내가 이미 여기에 있다`는 느낌이 있는가?
- `사냥을 나선 사람의 관점` 표시는 이해에 도움 되는가?
- 설명이 너무 많지 않은가?
- 첫 행동 `눈을 뜬다`가 어색한가 자연스러운가?
- 불/몸/사람 중 무엇이 먼저 눈에 들어오는가?

판정:

- PASS
- NEEDS REVISION
- FAIL

---

# 5. Embodied POV

장면별로 본다.

## 불 앞

- 손/무릎이 실제 앉은 자세처럼 느껴지는가?
- 몸이 화면 하단 장식처럼 붙어 보이지 않는가?
- 불과 몸의 위치/광원이 한 공간처럼 느껴지는가?

## 도구 전달

- 상대 손 → 돌도구 → 내 손의 공간 관계가 자연스러운가?
- `물건을 받았다`보다 `저 사람이 나에게 건넸다`가 느껴지는가?

## 일어나기/걷기

- 몸 자세 변화가 이해되는가?
- 갑자기 카메라만 바뀐 느낌은 아닌가?

## crouch

- 정말 몸을 낮춘 느낌인가?
- 손/무릎/지면의 원근이 자연스러운가?

기록:

- 이상한 손 비율
- 어색한 팔 길이
- 몸과 배경의 광원 불일치
- 상대와 내 몸이 충돌하는 느낌

---

# 6. 주변 사람 / 관계

R/H1/H2는 현재 placeholder다.

그래도 다음을 본다.

- `익숙한 사람`이 단순 버튼 안내보다 사람처럼 느껴지는가?
- 도구 전달로 관계가 시작되는 느낌이 있는가?
- H1/H2가 `다음 버튼을 누르게 하는 표지`가 아니라 함께 나가는 사람처럼 느껴지는가?
- `해가 지기 전에 돌아와.`가 기억에 남는가?

최종 Cast asset이 없어도 **관계 동선**은 검증 가능하다.

---

# 7. Role-True Perspective

확인:

- Hunt 구간에서 내가 사냥을 나선 사람이라는 것이 유지되는가?
- 내 눈앞 정보만으로 진행되는가?
- 보이지 않는 Camp 내부를 설명해 몰입을 깨는 부분은 없는가?
- 다른 관점 전환 뒤 `아, 이번에는 다른 사람이구나`가 명확한가?

현재는 관점 전환 proof만 본다.

완전한 Camp 서사는 아직 구현하지 않았다.

---

# 8. Screen Treatment

현재 Stage 07 treatment:

- fire-warmth
- standing-shift
- walking-air
- crouch-focus
- perspective-transition

확인:

- 효과를 의식하기 전에 장면 변화가 느껴지는가?
- 효과가 너무 약해 의미가 없는가?
- 반대로 `효과 보여주기`처럼 튀는가?
- walking sway가 멀미/장난감 느낌을 주는가?
- crouch focus가 시선을 돕는가?

현재 Stage 07에는 실제 Horror `strong-accent` 장면이 없다.

그 검증은 Stage 08 Threat 구현 뒤 한다.

---

# 9. Reduced Effects

Teacher URL에서 `화면 움직임 줄이기`를 켜고 같은 구간을 다시 확인한다.

- 진행이 동일한가?
- 몸 자세와 행동 의미는 이해되는가?
- 중요한 정보가 사라지지 않는가?
- 더 편안하지만 지나치게 밋밋해지지는 않는가?

Reduced Effects는 내용 삭제 모드가 아니다.

---

# 10. Perspective Transition

마지막에:

> **거처에 남아 생활을 이어가는 사람의 관점**

으로 바뀐다.

확인:

- 전환이 너무 갑작스러운가?
- 역할 표시가 충분한가?
- 다른 몸이라는 것이 자연스럽게 받아들여지는가?
- 굳이 복잡한 continuity transition이 필요한가, 현재 단순 전환이 더 좋은가?

현재 목표는 전환 퍼즐이 아니라 **명료한 관점 이동**이다.

---

# 11. 감정

Stage 07은 감정 범위가 아직 작다.

확인 가능한 것:

- 새벽의 온기/일상
- 같이 나가는 느낌
- 누군가 나를 챙기는 느낌
- 거처를 떠나는 약한 거리감

향후 Stage 08에서 별도 확인:

- 흥분
- 공포
- 후회
- 죄책감
- 안도

중요:

# **죄책감/공포를 느꼈다는 사실 자체를 FAIL로 기록하지 않는다.**

판정 질문은:

- 왜 그런 감정이 생겼는가?
- 역사적 상황/관계에서 자연스럽게 생겼는가?
- 아니면 UI/대사가 억지로 강요했는가?

이다.

---

# 12. Historical Imagination

Stage 07처럼 짧은 proof에서도 최소한 다음 질문을 해볼 수 있다.

- 왜 누군가 도구를 건네줬을 것 같아?
- 왜 여러 사람이 같이 나가려 했을 것 같아?
- 왜 `해가 지기 전에 돌아와`라고 했을까?

정답 암기보다 학생이 화면에서 본 사건을 근거로 말하는지 본다.

최종 목표:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Conceptualization
```

---

# 13. Player / Teacher / Debug 분리

기본 Player에서 다음이 보이면 FAIL:

- Stage 번호
- exact step ID
- reducer state
- debug evidence
- `Vertical Slice v0.1`
- 개발 toolbar

Teacher/Debug는 명시적 개발 URL에서만 확인한다.

---

# 14. Stage 07 Human Gate

Stage 08로 가기 전 다음 핵심을 확인한다.

- [ ] 첫 화면의 관점 진입이 이해됨
- [ ] 몸이 시야 안에 자연스럽게 존재
- [ ] 도구 전달의 공간 관계가 납득됨
- [ ] R/H1/H2가 최소한 사람 관계의 시작처럼 보임
- [ ] tool continuity가 시각적으로도 유지됨
- [ ] standing/walking/crouch가 몸 변화처럼 느껴짐
- [ ] treatment가 과도하지 않음
- [ ] reduced effects가 정상 작동
- [ ] 다른 사람 관점 전환이 명료함
- [ ] 기본 Player에 개발 정보가 노출되지 않음

핵심 FAIL이 있으면 Stage 08로 가지 않고 Skeleton을 먼저 수정한다.

---

# 15. Stage 07에서 평가하지 않을 것

아직 없음:

- 최종 역사 아트
- 최종 사람 얼굴/신체 asset
- 최종 soundscape
- 실제 흔적 탐색 전체
- Hunt dilemma
- Threat/Horror
- multi-axis Hunt result
- 귀환/죄책감 callback

이 항목이 없다고 Stage 07 실패가 아니다.
