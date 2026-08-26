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

- second remediation replay still failed broader immersion / **third remediation candidate pending human re-check**

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

- second remediation replay still failed broader immersion / **third remediation candidate pending human re-check**

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

# Stage 07.5 follow-up Human QA after PR #22

프로젝트 오너가 PR #22 병합본을 다시 플레이한 뒤 다음을 직접 지적했다.

> **“자꾸 그 사람 그 사람 하는데 누구 얘기하는지도 모르겠고, 몰입도 안돼.”**

이 관찰은 R2UX-002/003이 첫 remediation으로 해결되지 않았음을 확인한다.

---

## R2UX-006 — Speaker / referent identity ambiguity

위치:

- Tool Handoff 이후 동행자 합류
- `“같이 가자.”` 장면
- 출발 / H1 shared observation / H2 gaze-led discovery

관찰 사실:

- 화면에 세 인물이 있지만 서로 충분히 구별되지 않음
- `“같이 가자.”`가 화면 아래 서사 overlay에만 있어 어느 인물이 말하는지 공간적으로 알 수 없음
- 이어지는 문장이 `한 사람`, `다른 한 사람`, `그 사람`을 반복해 앞 장면의 인물과 현재 지칭을 추적하기 어려움
- 내부 R/H1/H2 구분은 존재하지만 Player 경험에는 실제 화자/행동 주체 구분으로 번역되지 않음

학생/교사 반응:

- 프로젝트 오너가 실제 화면에서 **누구를 가리키는지 모르겠다**고 명시적으로 보고
- 동시에 **몰입되지 않는다**고 재확인

심각도:

- **P1**

재현 여부:

- PR #22 main 병합본에서 재현 확인

Root cause category:

- Relationship problem
- Narrative problem
- Interaction problem
- Embodied spatial problem

해석:

- 고유 이름 부재 자체가 핵심 문제가 아님
- 문제는 화자와 행동 주체가 world 안의 위치·몸짓·시선·반복 행동으로 식별되지 않고 설명문이 대신한다는 것
- 근거 없는 선사시대 고유 이름을 붙여 해결하면 역사적 재구성 비용만 늘고 embodied relationship 문제는 남는다

최소 수정 가설:

- `같이 가자`는 실제 H1 위치에 dialogue cue로 배치
- H1은 Player 쪽으로 몸을 돌리고 기다리는 pose/gesture를 가짐
- H2는 같은 순간 바깥을 향해 서서 scanning pose를 유지
- `해가 지기 전에 돌아와`는 불가에 남은 R 위치에 직접 배치
- H2의 발견 시작은 H2 위치의 짧은 `저기.` + 시선/몸 방향으로 전달
- cave inspection의 두 판단도 각각 H1/H2 위치에서 나오게 함
- Player prose에서는 `한 사람 / 다른 한 사람 / 그 사람` 연쇄 지칭을 제거하고 world event만 보조 설명

회귀 위험:

- dialogue bubble이 UI 카드처럼 과도하게 보일 위험
- 좁은 화면에서 actor/contact/curriculum cue와 겹칠 위험
- 시각적 화자 구분을 최종 character art처럼 과잉 확정할 위험

교과/역사/관점 영향:

- R/H1/H2의 구체 인물·대사·행동은 Historical Reconstruction임
- Player에는 reconstruction 관리 라벨을 노출하지 않음
- 교과 개념이나 `뗀석기 → 주먹도끼` 위계는 변경하지 않음

수정 후 다시 사람이 확인할 항목:

- `같이 가자`를 누가 말했는지 설명을 읽지 않아도 바로 알 수 있는가
- 불가의 `해가 지기 전에 돌아와`가 아침에 도구를 건넨 동일 인물의 말처럼 이어지는가
- 가까이 함께 걷는 동행자와 앞을 살피는 동행자를 행동으로 구분할 수 있는가
- `저기` 이후 누구의 시선을 따라보는지 자연스럽게 이해되는가
- 설명문을 읽어서 인물을 추적하는 느낌이 줄었는가
- 여전히 `웹페이지 속 검은 사람 세 명`으로 느껴지는가

상태:

- speaker-source remediation candidate remains / **broader immersion failed again; Human re-check pending**

---

# Stage 07.5 follow-up Human QA after PR #23

프로젝트 오너가 PR #23 병합본을 다시 플레이한 뒤 다음을 직접 지적했다.

> **“너무 각 인물의 입장이 너무 역할 중심으로 서술되어 이입 전혀 안돼.”**

이 관찰은 화자 위치를 명확히 하는 것만으로는 Relationship Presence와 Role Embodiment가 성립하지 않음을 확인한다.

---

## R2UX-007 — Functional-role narration blocks identification

위치:

- 시작 orientation
- 사람 합류 / 출발 / 흔적 관찰 / 자연 거처 발견
- Perspective Proof

관찰 사실:

- `사냥을 나선 사람의 관점`, `아침에 도구를 건넨 사람의 관점`처럼 현재 인물을 기능으로 먼저 정의함
- Player가 인물을 `같이 살아가는 사람`보다 `도구 전달 담당`, `함께 이동 담당`, `주변 관찰 담당` 같은 제작 역할로 해석하게 됨
- PR #23에서 화자 위치와 pose는 더 명확해졌지만 Player prose와 버튼이 여전히 `동행자`, 역할별 행동 설명을 반복함
- 관계를 기억하기보다 각 인물의 기능을 읽고 따라가는 느낌이 남음

학생/교사 반응:

- 프로젝트 오너가 실제 플레이에서 **역할 중심 서술 때문에 전혀 이입되지 않는다**고 명시적으로 보고

심각도:

- **P1**

재현 여부:

- PR #23 main 병합본에서 재현 확인

Root cause category:

- Narrative problem
- Relationship problem
- Perspective problem
- Interaction problem

해석:

- R/H1/H2라는 내부 역할 모델 자체가 문제는 아님
- 문제는 authoring metadata가 Player-facing 문장으로 번역되어 인물을 사람보다 기능으로 먼저 이해하게 만드는 것
- 이름을 추가하거나 역할 설명을 더 자세히 하는 방식은 오히려 문제를 악화할 수 있음
- 관점 역시 제목으로 선언하기보다 몸·물건·공간·방금 전 사건의 continuity로 알아차리게 해야 함

최소 수정 가설:

- Player orientation에서 역할/관점 제목 제거
- `동행자`, `도구를 건넨 사람`, `주변을 살피는 사람` 같은 기능명 중심 표현 제거
- 현재 몸에서 들리는 소리, 보이는 손/얼굴, 거리, 방향, 이전 공유 사건으로 인물을 이어감
- 버튼도 역할 대상으로 명령하지 않고 `그쪽을 본다`, `옆에 쪼그려 앉는다`, `다시 걷는다`처럼 즉시 행동으로 작성
- Perspective Proof는 새 역할 제목 없이 `빈 손 → 멀리 있는 같은 돌 → 불 → 방금 한 말`로 새 자리임을 깨닫게 함
- 내부 Teacher/Debug에서는 R/H1/H2와 reconstruction metadata를 그대로 유지

회귀 위험:

- 역할 설명을 없애면서 실제 화자/행동 주체 식별까지 다시 모호해질 위험
- 감각 문장이 과도해져 문학적 장문으로 흐를 위험
- 관점 전환이 너무 암시적이면 일부 학생이 새 몸을 알아차리지 못할 위험

교과/역사/관점 영향:

- 교과 개념 순서와 `뗀석기 → 주먹도끼` 위계는 변경하지 않음
- R/H1/H2는 계속 Historical Reconstruction / internal authoring metadata임
- Player가 제작 역할을 외우는 것이 학습 목표가 아님
- 관점 전환은 전지적 정보 공유가 아니라 같은 사건을 다른 몸에서 다시 지각하는 proof로 유지

수정 후 다시 사람이 확인할 항목:

- 첫 화면에서 역할을 읽는 대신 실제 그 자리에서 눈을 뜨는 느낌이 드는가
- `동행자` 같은 기능 단어 없이도 주변 사람이 자연스럽게 이어지는가
- 인물을 `무슨 역할을 하는 사람`보다 `아까 눈이 마주쳤던 사람 / 같이 걸었던 사람`처럼 사건으로 기억하는가
- 버튼이 사람의 기능을 설명하지 않고 내 즉시 행동처럼 느껴지는가
- Perspective Proof에서 제목을 읽지 않아도 손·돌·불·발소리로 자리 변화가 이해되는가
- 설명이 줄었는데도 누가 말하고 무엇이 일어나는지는 오히려 더 자연스럽게 알 수 있는가

상태:

- third remediation implemented candidate / **Human re-check pending**

---

# Stage 07.5 remediation acceptance

자동 검증으로 확인할 수 있는 것:

- R handoff 뒤 terminology
- held-item continuity
- H1 invitation dialogue가 world spatial cue에 연결됨
- H1/H2가 join에서 서로 다른 pose/relationship marker를 가짐
- R return motif가 fire-side spatial cue에서 나옴
- H1 shared observation ordering
- H2 stop/gaze ordering
- H2 gaze-follow 전 cave 미노출
- gaze-follow 뒤 cave 노출
- cave inspection의 두 판단이 actor-linked dialogue로 분리됨
- cave inspection 뒤 terminology
- same-day perspective callback 구조
- Player / Teacher / Debug 정보 경계
- Player orientation에 역할/관점 제목이 없음
- Player 주요 flow에 `동행자`, R/H1/H2 같은 제작 역할어가 노출되지 않음
- Perspective Proof가 역할 제목이 아니라 body/object continuity를 사용함

사람만 판정할 것:

- 주변 인물이 실제 서로 다른 사람처럼 느껴지는가
- 누가 말하는지 설명 없이 알 수 있는가
- 관계가 기능 설명이 아니라 함께 겪은 사건으로 기억되는가
- 역할명을 읽지 않아도 지금 이 몸과 상황에 들어간 느낌이 드는가
- 관점 전환을 제목 없이도 자연스럽게 이해할 수 있는가
- 팔/손/도구가 자연스러운가
- current shelter가 생활 공간처럼 느껴지는가
- terminology가 몰입을 끊는가
- Perspective Proof가 실제 관계 callback으로 작동하는가

# **실제 재플레이 전에는 R2UX-001~007을 RESOLVED로 표시하지 않는다.**