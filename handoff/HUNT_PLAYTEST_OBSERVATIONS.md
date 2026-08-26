# HUNT_PLAYTEST_OBSERVATIONS.md

## Human QA observation log

이 파일은 실제 플레이 관찰과 root cause를 기록한다.

자동 테스트나 코드 변경만으로 `해결됨` 처리하지 않는다.
수정 후 실제 사람이 다시 플레이해 확인해야 한다.

---

# Historical observation — HUX-001

## 시작 직후 역할 몰입 부족

- 위치: 공통 아침 / 역할 진입 / Hunt 시작부
- 관찰자 피드백: **“시작부터 몰입을 하게 할 무언가가 부족하다. 내가 정말 해당 상황, 해당 인물이 된 것 같은 느낌이 들게 해야 한다.”**
- 관찰 사실: 초기 Hunt v0.1은 상황의 의미를 읽고 이해할 수는 있지만, 학생이 `구석기 공동체의 그 사람`으로 즉시 들어갔다는 감각이 약했다.
- 심각도: 높음

원인으로 확인된 항목:

- 상황 진입보다 메타 설명이 앞설 수 있음
- 플레이어 몸/감각 anchor 약함
- 관계 인물 체감 부족
- 역할을 행동보다 설명으로 알게 됨
- 장면이 연속 공간보다 카드/페이지처럼 느껴질 가능성
- 선택 뒤 세계의 즉각적 반응 약함
- 개발 메타 정보와 Player surface 혼합 위험
- `해가 지기 전에 돌아와`, 불빛 같은 motif가 관계와 공간에 충분히 뿌리내리지 못함

기존 해결 가설:

- Cold Open
- 20~30초 안 meaningful action
- 관계 진입
- 기다리는 사람
- 공간 연속성
- 동행자 반응
- 선택 결과감
- Debug 분리

이 관찰은 현재 R2에서도 계속 참고한다.

---

# Stage 07 initial Human QA

현재 Stage 07 automated verification은 PASS였지만 실제 Player Human QA에서 다음 P1 blocker가 확인됐다.

현재 공식 판정:

# **Human Gate FAIL / remediation required**

---

## R2UX-001 — First-person body / held-item spatial failure

위치:

- Stage 07 Player
- Tool Handoff 이후
- tool reveal / held-item view

관찰 사실:

- 화면 중앙에 큰 갈색 팔 두 개가 X 형태에 가깝게 겹쳐 보임
- 실제 몸의 일부보다 화면에 붙은 HUD/도형처럼 읽힘
- 주먹도끼가 손에 물리적으로 잡힌 물건처럼 충분히 읽히지 않음

학생/교사 반응:

- 프로젝트 오너 직접 플레이에서 즉시 부자연스러움 확인

심각도:

- **P1**

재현 여부:

- 재현 확인

Root cause category:

- Embodied spatial problem
- Visual production / asset composition problem

해석:

- final art quality 문제가 아니라 body/item spatial contract가 현재 placeholder에서 무너진 상태
- 그대로 production asset을 얹으면 FPS weapon HUD 구조를 고착시킬 위험

최소 수정 가설:

- 팔이 frame edge에서 필요한 만큼만 보이도록 composition 완화
- contact scene과 held-item scene을 pose별로 분리해 읽히게 함
- handaxe silhouette/grip 관계 강화

회귀 위험:

- responsive crop에서 손/도구가 사라지거나 UI와 충돌
- body continuity가 약해질 위험

교과/역사/관점 영향:

- 주먹도끼가 생활 물건보다 UI 아이템처럼 읽힐 수 있음
- 1인칭 embodied POV 약화

수정 후 다시 사람이 확인할 항목:

- 팔이 여전히 HUD처럼 보이는가
- handoff와 held item이 같은 물건으로 느껴지는가
- 4:3 / 16:10 / 16:9에서 contact가 유지되는가

상태:

- remediation implemented candidate / **Human re-check pending**

---

## R2UX-002 — R/H1/H2 relationship presence failure

위치:

- 새벽 불
- H1/H2 합류
- 이동/관찰

관찰 사실:

- R/H1/H2가 검은 막대형 silhouette에 가까움
- 누가 나를 보고 있는지, 누가 도구를 건네는지, 누가 함께 움직이는지의 관계가 약함
- `사람 세 명이 있다`는 것은 보이나 `같이 사는 사람들이다`는 감각이 약함

심각도:

- **P1**

Root cause category:

- Relationship problem
- Embodied spatial problem

해석:

- canonical 문서에는 R/H1/H2 기능이 이미 있으나 runtime에서 actor-specific shared incident가 약함

최소 수정 가설:

```text
R: 먼저 본다 → 도구를 건넨다 → 돌아오라는 말을 건넨다
H1: 기다린다 → 함께 지면을 본다
H2: 주변을 살핀다 → 먼저 멈춘다 → 플레이어가 그 시선을 따라본다
```

회귀 위험:

- NPC를 설명문/튜토리얼 기능으로 과도하게 만들 위험
- 관계를 reducer state 과잉으로 만들 위험

교과/역사/관점 영향:

- 도구/공간 개념이 사람과 분리된 학습 카드로 느껴질 수 있음

수정 후 다시 사람이 확인할 항목:

- R이 `도구 설명 NPC`가 아니라 익숙한 사람처럼 느껴지는가
- H1과 실제로 같이 행동했다고 느껴지는가
- H2의 행동이 발견을 유도한다고 느껴지는가

상태:

- remediation implemented candidate / **Human re-check pending**

---

## R2UX-003 — Hunt narrative / emotional causality weakness

위치:

- Stage 07 전체 flow

관찰 사실:

- `왜 나가는가`가 충분히 살아 있지 않음
- R의 말과 이후 행동 사이의 의미 연결 약함
- H1/H2와 함께 움직이는 사건이 관계 기억으로 남지 않음
- Perspective Proof가 `다른 사람 화면`이라는 사실은 보여도 앞 장면을 재해석하는 관계 callback이 약함

심각도:

- **P1**

Root cause category:

- Narrative problem
- Relationship problem

해석:

- canonical Hunt Story 자체의 문제보다 Canonical → Runtime semantic loss가 핵심

최소 수정 가설:

- 먹을 것을 찾아 나가고 다시 사람들에게 돌아와야 한다는 Need를 장면 안에서 제시
- R motif를 departure에 분명히 심음
- H1 shared observation
- H2 gaze-led discovery
- Perspective Proof를 아침 R 자리와 연결

회귀 위험:

- 설명문 증가로 오히려 웹페이지 느낌이 커질 위험

교과/역사/관점 영향:

- 생활 조건/상호의존 이해가 약해질 수 있음

수정 후 다시 사람이 확인할 항목:

- 첫 20~30초에 왜 사람들과 나가는지 느껴지는가
- Perspective Proof가 `아까의 나/아까의 사람`을 재해석하게 하는가

상태:

- remediation implemented candidate / **Human re-check pending**

---

## R2UX-004 — Terminology cue breaks immersion

위치:

- `뗀석기 → 주먹도끼`
- `동굴 / 바위 그늘`

관찰 사실:

- 교과 내용 자체는 정확함
- `뗀석기` 상위 개념 / `주먹도끼` 대표 예 관계도 정확함
- 문제는 큰 학습 카드가 world frame과 분리되어 튀어나오는 presentation

심각도:

- **P1**

Root cause category:

- Curriculum timing problem
- Visual composition problem

해석:

- Experience → Name을 없애는 것이 아니라 naming이 장면을 덮지 않게 해야 함

최소 수정 가설:

- same world frame 안의 contextual annotation으로 축소
- wording과 hierarchy는 유지

교과/역사/관점 영향:

- `뗀석기 = 주먹도끼` 오개념이 생기지 않도록 hierarchy 문장은 그대로 유지

수정 후 다시 사람이 확인할 항목:

- 이름을 `배웠다`보다 방금 경험한 것의 이름을 `알게 됐다`고 느끼는가

상태:

- visual remediation candidate / **Human re-check pending**

---

## R2UX-005 — Current shelter / actor composition risk

위치:

- Fire / Current Shelter
- Departure

관찰 사실:

- current shelter가 생활 공간보다 삼각 텐트/집 아이콘처럼 읽힐 위험
- actor와 world의 depth/occlusion 약함

심각도:

- **P1**

Root cause category:

- Visual production / asset composition problem
- Misconception risk

해석:

- final production asset 이전에도 `사람들이 현재 이미 생활하고 있는 장소`라는 의미는 CSS/DOM proof에서 성립해야 함

최소 수정 가설:

- shelter silhouette를 비대칭 덮개/지지대 형태로 유지·강화
- 불/사람/거처가 같은 생활 공간으로 읽히게 composition 조정

교과/역사/관점 영향:

- Stage 07에서는 이 silhouette만 보고 `막집 학습 완료` 판정 금지
- cave가 유일한 집/자동 새 집으로 느껴지지 않아야 함

수정 후 다시 사람이 확인할 항목:

- 현대 집/텐트 아이콘처럼 보이는가
- cave 이전부터 공동체 생활 장소가 존재한다고 느끼는가

상태:

- visual remediation candidate / **Human re-check pending**

---

# Stage 07.5 remediation acceptance

자동 검증으로 확인할 수 있는 것:

- R handoff 뒤 terminology
- held-item continuity
- H1 shared observation ordering
- H2 stop/gaze ordering
- H2 gaze-follow 전 cave 미노출
- gaze-follow 뒤 cave 노출
- cave inspection 뒤 terminology
- same-day perspective callback 구조
- Player / Teacher / Debug 정보 경계

사람만 판정할 것:

- R/H1/H2가 실제 사람처럼 느껴지는가
- 팔/손/도구가 자연스러운가
- current shelter가 생활 공간처럼 느껴지는가
- terminology가 몰입을 끊는가
- Perspective Proof가 실제 관계 callback으로 작동하는가

# **실제 재플레이 전에는 R2UX-001~005를 RESOLVED로 표시하지 않는다.**
