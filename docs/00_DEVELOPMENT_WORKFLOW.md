# 구석기 역사 체험 웹게임 — 개발 워크플로우 v4
## Design Reboot R2

이 문서는 새 프로젝트 헌법에 따라 **Stage 01부터 다시 정의한 설계와 이후 구현 순서**를 관리한다.

기존 Stage 07/08 코드와 테스트는 삭제하지 않지만 **Legacy Functional Prototype**으로 취급한다.

---

# 1. 왜 R2가 필요한가

첫 Hunt v0.1은 기능적으로 동작했지만 실제 플레이에서 핵심 문제가 드러났다.

1. 시작부터 `내가 그 사람`이라는 느낌이 약함
2. 주변 사람이 실제 관계보다 안내 기능처럼 느껴질 위험
3. 위협과 고민이 상황보다 선택지로 먼저 제시됨
4. 성공/빈손 중심 결과가 하루의 복합성을 충분히 표현하지 못함
5. 화면이 실제 내 시야와 몸이라기보다 웹 장면에 가까움
6. 거대한 연출보다 작은 색·명암·초점·blink·미세 움직임을 체계적으로 활용할 기준이 필요함

따라서 단순 Stage 09 UX 수정으로 해결하지 않고 **개발 이전 설계 Stage 01부터 다시 정의**한다.

---

# 2. R2 최상위 체험 정의

# **Embodied First-Person Historical Experience**

학생은

- 자기 몸이 자연스럽게 보이는 1인칭 시야로
- 반복 등장하는 공동체 사람들과 관계를 맺고
- 상황 속 위협과 가치 충돌을 느끼고
- 정답 없는 판단을 하며
- 그 선택의 흔적이 사람·몸·시간·공간·다른 관점에 남고
- 색·명암·초점·미세 움직임 같은 작은 연출이 이를 조용히 강화하는

역사 체험을 한다.

---

# 3. R2 품질 Gate

## Historical Gate

- 사실 / 재구성 / 게임 구분
- 근거 없는 친족·성 역할·사회 구조 확정 금지

## Embodied Gate

- 내 몸이 시야에 자연스럽게 존재
- 자세/행동에 따라 body state 변화
- 역할 내 body continuity 유지

## Relationship Gate

- 반복 인물 존재
- 내 선택에 반응
- 이후 기억 회수

## Dilemma Gate

- 선택 전에 장단점과 상황 조건이 보임
- 숨겨진 정답 루트 없음

## Threat Gate

- 징후 → 사람 반응 → 관찰 → 판단

## Consequence Gate

- 선택 결과가 뒤에서 다시 나타남
- 다축 질적 상태
- 재수렴 후에도 의미 차이 유지

## Perspective Gate

- 역할 전환이 메뉴가 아니라 다른 사람의 몸/시야로 이동하는 느낌
- 같은 사건을 다른 관점에서 재해석

## Screen Treatment Gate

- 색·명암·focus·blink·micro motion이 장면 의미를 보조
- 효과가 없어도 핵심 상황/진행은 성립
- 위험마다 red flash 같은 기계적 매핑 없음
- 반복 flashing / 지속 강한 shake·blur 없음
- reduced-effects에서도 플레이 가능

## Functional Gate

- 자동 테스트 / 빌드 / 접근성 / 진행 안정성

## Learning Gate

- 학생이 플레이 기억을 근거로 역사적 이유를 설명

---

# 4. R2 Stage 01 — Project Constitution

상태: **리비전 완료**

결과물:

- `docs/01_PROJECT_CORE.md` v5
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` v2
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` v1
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` v1

핵심:

- 신체화된 1인칭
- 역할마다 다른 사람의 몸
- 반복 관계 인물
- 체감형 위협
- 가치 충돌형 딜레마
- Bounded Agency
- Persistent Consequence
- Reconverging Narrative
- Perspective Recontextualization
- Subtle Screen Treatment

---

# 5. R2 Stage 02 — Experience Structure

상태: **리비전 완료**

결과물:

- `docs/02_EXPERIENCE_STRUCTURE.md` v4

핵심:

- Shared Morning Event
- Perspective Morning Echo
- 역할 메뉴보다 시점 이동
- 같은 인물/불/해의 연속성
- 관계·선택이 반영된 Common Evening
- 이동 역시 1인칭 체험

---

# 6. R2 Stage 03 — Hunt STORY

상태: **리비전 완료**

결과물:

- `docs/03_HUNT_STORY.md` v4

핵심:

- R / H1 / H2 관계
- 도구 전달에서 시작
- 동행자가 학생 판단을 기억
- 추적 딜레마
- 위협 build-up
- 다축 결과
- 귀환 재회 변주

---

# 7. R2 Stage 04 — Hunt PLAYFLOW

상태: **리비전 완료**

결과물:

- `docs/04_HUNT_PLAYFLOW.md` v4

모든 주요 Scene에:

- POV
- 보이는 몸
- 사람 위치
- 행동
- 세계 반응
- 관계 기억
- 결과 축
- 후속 회수

을 정의한다.

화면 treatment는 이 의미를 보조하는 presentation layer다.

---

# 8. R2 Stage 05 — Role Experience Map

상태: **리비전 완료**

결과물:

- `docs/05_ROLE_EXPERIENCE_MAP.md` v4
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` v3

역할별 몸 문법:

- Hunt: 먼 시야 / 걷기 / 몸 낮추기 / 위험 / 운반 / 귀환
- Gather: 가까운 시야 / 손으로 살피기 / 담기 / 공간 비교
- Camp: 불 가까운 몸 / 손질 / 같은 장소 / 빈자리 / 멀리 바라보기 / 재회

---

# 9. R2 Stage 06 — Technical Blueprint

상태: **리비전 완료**

결과물:

- `docs/06_TECH_BLUEPRINT.md` v4

기술 개념:

- Embodied scene presentation
- Player Body Identity
- Cast Anchor
- Relationship Memory
- Multi-axis Consequence
- Narrative Variant Selector
- Threat Build-up Beat
- Perspective Bridge
- ScreenTreatmentPresentation
- lightweight ScreenTreatmentLayer
- reduced-effects fallback

금지:

- 범용 NPC AI
- 대화 트리 엔진 과설계
- FPS/3D 엔진 선행
- 범용 Scene Engine
- 범용 VFX/particle engine

---

# 10. Legacy Prototype의 위치

기존 코드:

- React/TypeScript/Vite 골격
- Experience Orchestrator
- Hunt v0.1 reducer/flow
- 25개 자동 테스트 기준선

은 삭제하지 않는다.

보존 가치:

- 기술 스택 검증
- reducer/RoleCompletion 구조 일부
- CI
- non-combat / qualitative result guardrail

하지만 다음은 **재설계 대상**이다.

- Common Morning UI
- Hunt player-facing 화면
- Scene flow presentation
- result 의미 구조 일부
- 역할 전환 UI
- screen treatment presentation

기존 코드가 새 설계를 제한하면 새 설계를 우선한다.

---

# 11. R2 Stage 07 — Embodied Experience Skeleton

다음 공식 구현 단계.

목표:

**최종 Hunt 전체를 먼저 만들지 않고, 1인칭 몸·인물·시점 전환·작은 화면 연출이 브라우저에서 실제로 성립하는지 검증한다.**

범위:

1. Player / Debug surface 분리
2. `EmbodiedExperienceFrame` 또는 최소 동등 구조
3. body pose preset 3~5개
4. R/H1/H2 actor presentation 최소 구조
5. Cold Open
6. R의 도구 전달
7. H1과 출발
8. 최소 ScreenTreatmentLayer 또는 동등 구조
9. `fire-warmth`, `threat-attention`, `blink-transition` 중 2~3개 prototype preset
10. reduced-effects fallback
11. 짧은 Perspective Bridge prototype

아직 하지 않을 것:

- 전체 Hunt 분기
- 최종 아트
- Gather/Camp 전체 구현
- 강한 VFX

완료 조건:

- 실제 브라우저에서 `풍경 + 내 몸 + 사람`이 한 장면처럼 느껴짐
- 사람 손과 내 손이 만나는 상호작용 가능
- 역할 시점 전환 가능
- 작은 화면 treatment가 장면을 강화하지만 과장되지 않음
- reduced-effects에서도 진행 가능
- 자동 테스트 통과
- 교사 직접 플레이 승인

---

# 12. R2 Stage 08 — Hunt Embodied Vertical Slice

Stage 07 승인 뒤 진행.

## 08-A

- 출발
- 거처가 멀어짐
- 몸을 낮춰 흔적 탐색
- 동행자 반응
- 발견 전 정적
- 발견

## 08-B

- 접근/사냥 시도
- 추적 딜레마
- threat build-up
- 위험 대응
- 필요한 순간의 subtle treatment

## 08-C

- 다축 결과
- 귀환 body state
- 관계 기억 회수
- R 재회 변주
- 귀환/불빛 treatment
- Perspective Bridge

결과:

# **Hunt Embodied Vertical Slice vNext**

---

# 13. R2 Stage 09 — Teacher Immersion QA

실제 교사 플레이.

측정:

- 첫 30초 `내 몸` 체감
- 반복 인물 기억
- 관계 감각
- 위협 체감
- 실제 딜레마 여부
- 선택 회수
- 결론의 획일성 여부
- Perspective Recontextualization
- screen treatment가 자연스러운지/과한지

문제를 HUX ID로 기록.

---

# 14. R2 Stage 10 — Student Pilot

소규모 학생 테스트.

질문:

- 설명 없이 무엇을 해야 할지 이해하는가
- 1인칭 몸이 자연스러운가
- 기억하는 사람이 있는가
- 어떤 고민을 했는가
- `정답을 맞혔다`고 느끼는가, `판단했다`고 느끼는가
- 다른 관점에서 앞의 행동을 다시 생각하는가
- 화면 효과가 방해되거나 불편하지 않은가

---

# 15. R2 Stage 11 — Gather

순서:

Historical review
→ Role Body Identity
→ 반복 인물/관계
→ STORY
→ Embodied Script
→ PLAYFLOW
→ Prototype
→ Teacher QA
→ Student QA

Hunt UI나 treatment preset을 기계적으로 복제하지 않는다.

---

# 16. R2 Stage 12 — Camp

동일 품질 파이프라인.

특히:

- R의 관점 전환
- 불 가까운 몸
- 같은 공간의 시간 변화
- 떠난 사람의 부재
- 귀환 재회
- 큰 효과보다 정적/빛 변화

를 중심 검증한다.

---

# 17. R2 Stage 13 — Three-Perspective Integration

- Perspective Bridge 최종화
- shared cast continuity
- relationship/consequence signal 통합
- Common Evening variant

공통 저녁은 결과표가 아니다.

---

# 18. R2 Stage 14 — Multi-day Change

- 역할별 부담 변화
- 관계 기억의 제한적 누적
- 한 장소에서 계속 살기 어려워지는 맥락
- 같은 장소의 미세한 빛/환경 변화 활용 가능

---

# 19. R2 Stage 15 — Migration / New Home

- 이동 고민
- 챙길 것
- 떠나는 몸의 경험
- 함께 걷는 사람
- 새 장소 탐색
- 새 불

첫 Cold Open과 시각적 대구를 만든다.

---

# 20. R2 Stage 16 — Historical Concept Bridge

학생이 실제 경험 장면을 근거로

- 뗀석기
- 불
- 먹을거리 확보
- 협력
- 이동 생활
- 생활 공간

을 개념화한다.

---

# 21. Final Art/Sound Pipeline

기능·Embodied·Relationship·Screen Treatment Gate 이후 진행한다.

필수 선행 문서:

- Player Body Continuity Sheet
- Cast Continuity Sheet
- POV / Camera Bible
- Visual Context Bible
- Art Direction Bible
- Asset Spec
- Audio Context Map

최종 이미지 단위는 배경이 아니라 **POV composition**이다.

화면 treatment는 최종 이미지의 광원/색과 중복되거나 충돌하지 않게 조정한다.

---

# 22. 모든 새 세션 읽기 순서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
7. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
8. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
9. 해당 Stage 문서
10. 실제 개발이면 관련 코드/tests

---

# 23. 현재 공식 다음 단계

## **R2 Stage 07 — Embodied Experience Skeleton**

기존 Stage 09-C Hunt 수정 계획은 더 이상 공식 다음 단계가 아니다.

먼저 **몸·시야·인물·관점 전환·작은 화면 연출이라는 새 체험 기반**을 작은 골격으로 검증한 뒤 전체 Hunt를 다시 구현한다.
