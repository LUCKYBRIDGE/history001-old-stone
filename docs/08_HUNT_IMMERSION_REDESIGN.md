# 구석기 역사 체험 웹게임
## Hunt 재설계 구현 브리프 v2 / Embodied First-Person vNext

> 목적: 기존 Hunt v0.1 기능 프로토타입을 Stage 01~06 Design Reboot R2 기준으로 다시 구현할 때의 직접 입력 문서다.
>
> 상위 기준:
> - `docs/03_HUNT_STORY.md` v4
> - `docs/04_HUNT_PLAYFLOW.md` v4
> - `docs/06_TECH_BLUEPRINT.md` v3
> - `docs/07_IMMERSION_NARRATIVE_BIBLE.md` v2

---

# 1. 기존 v0.1의 위치

기존 Hunt v0.1은 다음을 검증했다.

- React/TypeScript 앱 실행
- Hunt 내부 reducer
- 질적 결과
- 위험 비전투성
- 귀환 후 completion
- Perspective Bridge
- 자동 테스트

따라서 **기능 프로토타입으로는 가치가 있다.**

그러나 새 설계 기준에서는 다음이 부족하다.

- 신체가 포함된 1인칭 시야
- 관계 인물의 지속성
- 위협의 build-up
- 고민을 만드는 상황 정보
- 다축 결과
- 선택의 후속 회수
- 관점 재맥락화

결론:

## **v0.1 코드는 참고 대상이지 새 UX의 정답이 아니다.**

---

# 2. 새 Hunt prototype 목표

학생이 브라우저에서 다음을 느끼게 한다.

> “내 손에 도구가 있고, 저 사람들이 내 앞에서 움직이고 있다.”

> “저 사람이 나를 기다릴 거라는 게 신경 쓰인다.”

> “더 가고 싶지만 해와 거리와 옆 사람 상태를 보니 고민된다.”

> “위험하다고 써 있지 않아도 뭔가 이상해서 긴장된다.”

> “내가 어떻게 움직였는지를 사람들이 기억하는 것 같다.”

> “같은 거처로 돌아와도 내가 겪은 하루에 따라 분위기가 다르다.”

---

# 3. 구현 우선순위 A — Embodied Surface

1. player-facing / debug 완전 분리
2. `EmbodiedExperienceFrame` 또는 동등한 최소 구조
3. body pose preset
4. tool-in-hand continuity
5. Cold Open의 도구 전달
6. 걸을 때 / 몸 낮출 때 / 귀환 때 다른 body state

프로토타입 이미지가 없어도 CSS/실루엣으로 먼저 검증 가능하다.

---

# 4. 구현 우선순위 B — 관계 인물

반복 인물:

- R
- H1
- H2

필수:

- 같은 actor identity 유지
- 대사 위치/시선 일관성
- 학생 선택 직후 반응
- relationship memory 2~4개 우선 구현

첫 구현 후보:

- `noticed-waiting-person`
- `stayed-together-under-danger`
- `shared-carry-burden`
- `returned-late`

숫자 호감도 없음.

---

# 5. 구현 우선순위 C — 고민과 위협

## 추적 딜레마

선택 UI 전에 반드시 보여줄 것:

- 흔적/가능성
- 해
- 거리
- H1/H2 피로
- 내 몸 피로

## 위험

선택 전에 최소 Beat:

- anomaly
- companion reaction
- player observation
- threat recognition

기존 danger choice를 이 build-up 뒤로 이동한다.

---

# 6. 구현 우선순위 D — 다축 결과

기존 food outcome을 유지하되 최소 다음을 추가 검토한다.

- return timing
- distance burden
- danger exposure
- carry burden
- relationship memories

모든 조합을 UI로 보여주지 않는다.

이 데이터는 장면 변주와 Integration에 사용한다.

---

# 7. 구현 우선순위 E — 귀환 변주

귀환은 최소 몇 가지 의미 있는 variant를 갖는다.

예:

- early + empty-handed
- late + empty-handed
- early + food-secured
- late + food-secured
- shared-carry 강조

여기에 relationship memory를 일부 겹칠 수 있다.

모든 조합에 별도 장면을 만들지 않는다.

규칙 우선순위로 대표 variant를 선택한다.

---

# 8. 구현 우선순위 F — Perspective Bridge

Hunt 종료 뒤 역할 카드로 가지 않는다.

우선 prototype:

- R을 바라보는 Hunt POV
- 짧은 화면 전환
- 같은 공간에서 R의 POV/몸으로 전환되는 visual beat

이 Bridge가 성공하면 Camp 설계의 기반으로 사용한다.

---

# 9. 테스트 추가

## Unit

- relationship memory 생성
- 다축 result resolution
- return variant selection

## Integration

- body/scene progression이 completion을 방해하지 않음
- relationship/consequence signal 전달

## Player-facing

- debug meta 없음
- Cold Open에서 실제 첫 행동 가능
- threat choice 전에 build-up 존재

## E2E

- 도구 받기 → 출발 → 흔적 → 발견 → 딜레마 → 위험 → 귀환 → R 반응 → Bridge

서로 다른 최소 2~3 결과 조합 검증.

---

# 10. 구현하지 않을 것

- 최종 역사 아트 대량 제작
- 자유 3D 이동
- 전투
- 호감도 수치
- 범용 NPC AI
- 대규모 분기 트리
- procedural narrative

---

# 11. 완료 기준

새 Hunt prototype은 다음을 모두 만족해야 한다.

## Functional

- 진행 막힘 없음
- 기존 핵심 architecture guardrail 유지
- 자동 테스트 통과

## Embodied

- 첫 장면부터 몸이 보임
- 주요 행동에 몸 pose 변화
- 몸/환경/사람이 한 공간처럼 구성됨

## Relationship

- R/H1/H2 중 최소 2명이 기억됨
- 선택에 대한 사람 반응이 뒤에서 회수됨

## Dilemma/Threat

- 고민과 위협이 선택 UI 전에 상황으로 형성됨

## Consequence

- food outcome 외 다른 질적 축이 실제 장면을 바꿈
- 모든 경로가 같은 귀환 문장으로 축소되지 않음

## Perspective

- 다음 관점으로의 전환이 메뉴보다 사람/시야 변화로 느껴짐

이후 교사 재플레이에서 실제 몰입 여부를 판정한다.
