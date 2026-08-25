# PROJECT_STATUS.md

## Current phase

# **Design Reboot R2 — Stage 01~06 재설계 완료. Subtle Screen Treatment 원칙까지 보강. 다음 공식 단계는 R2 Stage 07 — Embodied Experience Skeleton.**

기존 Hunt v0.1은 기능적으로 동작하지만 새 설계의 최종 기준이 아니다.

현재 판정:

- Legacy Hunt v0.1: **Functional Prototype / preserved**
- Design Reboot R2 Stage 01~06: **canonical design baseline**
- Embodied First-Person runtime: **not yet implemented**
- Relationship / consequence runtime: **not yet implemented**
- Subtle Screen Treatment runtime: **not yet implemented**

---

## 왜 Stage 01부터 다시 리비전했는가

실제 첫 플레이와 후속 기획 대화에서 다음이 확인됐다.

1. 시작부터 `내가 그 시대의 그 사람`이라는 느낌이 부족함
2. 실제 사람과 관계 맺는 감각이 더 필요함
3. 위협과 고민이 화면의 선택지가 아니라 실제 상황으로 다가와야 함
4. 모든 경로가 비슷한 결론으로 정리되는 구조를 피해야 함
5. 실제 사람의 시야처럼 **내 손·팔·다리 등 신체 일부가 눈앞 풍경과 함께 보이는 1인칭 화면**이 적합함
6. 대형 연출보다도 **색·명암·짧은 blink·초점·미세 흔들림 같은 작은 화면 변화**가 몸 상태와 상황을 자연스럽게 강화할 수 있어야 함

따라서 기존 Stage 09 UX 보완 범위를 넘어 프로젝트의 pre-development foundation을 다시 정의했다.

---

## R2 Stage 01 — Project Constitution

완료.

- `docs/01_PROJECT_CORE.md` v5
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` v2
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` v1
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` v1

새 핵심 원칙:

- Embodied First-Person
- 다른 역할 = 다른 공동체 구성원의 몸과 눈
- 관계 = 함께 겪은 기억과 이후 반응
- 위협 = 징후 → 사람 반응 → 관찰 → 판단
- 고민 = 가치 충돌
- Bounded Agency
- Persistent Consequence
- Reconverging Narrative
- Perspective Recontextualization
- Subtle Screen Treatment

Screen Treatment 원칙:

- 효과는 상황 의미를 생성하지 않고 보조
- `none / subtle / accent` 강도 budget
- 불/시간/피로/긴장/전환에 가벼운 color/exposure/focus/blink/micro-motion 사용 가능
- 위험 때마다 진한 red damage flash 금지
- 반복 flashing, 지속적 강한 shake/blur 금지
- reduced effects에서도 진행/의미 유지

---

## R2 Stage 02 — 전체 경험 구조

완료.

`docs/02_EXPERIENCE_STRUCTURE.md` v4

새 구조:

```text
Embodied Cold Open
→ 첫 관점의 같은 하루
→ Perspective Recontextualization
→ 두 번째 관점의 같은 하루
→ Perspective Recontextualization
→ 세 번째 관점의 같은 하루
→ 관계/결과가 반영된 Common Evening
→ 며칠 변화
→ 공동체 고민
→ 이동
→ 새 거처
→ 경험 기반 역사 개념화
```

Shared Morning Event와 역할별 Perspective Morning Echo를 구분한다.

---

## R2 Stage 03 — Hunt STORY

완료.

`docs/03_HUNT_STORY.md` v4

반복 관계 인물:

- R — 거처에 남는 익숙한 사람
- H1 — 함께 나가는 사람
- H2 — 주변을 세심하게 보는 사람

Hunt는 food outcome 하나가 아니라

- food outcome
- return timing
- distance burden
- danger exposure
- carry burden
- relationship memories

등 다축 질적 결과를 갖는 방향으로 재설계했다.

---

## R2 Stage 04 — Hunt PLAYFLOW

완료.

`docs/04_HUNT_PLAYFLOW.md` v4

각 주요 Scene은 다음을 가진다.

- POV
- 보이는 몸
- 손/도구 상태
- 사람 위치
- 환경/사운드
- 직접 행동
- 세계 반응
- 관계 기억
- 시간/거리/위험 변화
- 뒤에서의 회수

Screen Treatment는 이 Scene 의미를 보조하는 표현층으로 사용한다.

---

## R2 Stage 05 — Role Experience Map

완료.

- `docs/05_ROLE_EXPERIENCE_MAP.md` v4
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` v3

역할별 몸 문법:

### Hunt

먼 시야 / 걷기 / 흔적 앞에 몸 낮추기 / 위험 / 운반 / 귀환

### Gather

가까운 시야 / 손으로 살피기 / 담기 / 장소 기억 / 범위 확대

### Camp

불 가까운 몸 / 손질 / 같은 장소 / 빈자리 / 멀리 보기 / 기다림 / 재회

---

## R2 Stage 06 — Technical Blueprint

완료.

`docs/06_TECH_BLUEPRINT.md` v4

기술 지원 대상:

- Embodied scene presentation
- Player Body Identity
- Cast Anchor
- Relationship Memory
- Multi-axis Consequence
- Narrative Variant Selector
- Threat Build-up Beat
- Perspective Bridge
- ScreenTreatmentPresentation
- lightweight `ScreenTreatmentLayer`
- reduced-effects fallback

과설계 금지:

- 범용 NPC AI
- 호감도 시스템
- 대규모 대화 트리
- FPS/3D 엔진 선행
- 범용 Scene Engine
- 범용 VFX/particle engine

---

## Common immersion docs

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` v3
- `docs/08_HUNT_IMMERSION_REDESIGN.md` v2

---

## Legacy runtime baseline

현재 `src/`의 Hunt는 기존 v0.1이다.

보존할 가치:

- React + TypeScript + Vite
- Experience Orchestrator
- role feature boundary
- reducer/tests
- non-combat natural danger
- qualitative RoleCompletion 철학
- CI 기준선

기존 자동 검증 기준:

- 7 test files
- 25 tests
- typecheck PASS
- production build PASS

하지만 player-facing UI와 일부 state/result 의미는 R2 구현에서 변경 가능하다.

---

## Next official task — R2 Stage 07

# **Embodied Experience Skeleton**

목표는 Hunt 전체를 바로 다시 만드는 것이 아니다.

먼저 브라우저에서 다음이 실제로 성립하는지 검증한다.

### P0

1. Player-facing / Debug surface 분리
2. Embodied first-person frame
3. body pose preset 3~5개
4. Cold Open
5. R이 도구를 건네고 내 손이 받는 장면
6. H1/H2와 같은 공간에 있는 장면
7. 최소 `ScreenTreatmentLayer` 또는 동등 구조
8. `fire-warmth`, `threat-attention`, `blink-transition` 중 2~3개 prototype preset

### P1

9. 걷는 POV
10. 몸을 낮추는 POV
11. 사람의 시선/위치 반응
12. 화면의 미세 color/exposure/focus/motion 변화
13. 짧은 Perspective Bridge prototype

### P2

14. reduced-effects fallback
15. 자동 테스트
16. 교사 직접 브라우저 플레이

완료 판정 질문:

> **화면이 `풍경 + 버튼`이 아니라 정말 내 눈앞의 풍경과 내 몸과 사람이 함께 있는 장면처럼 느껴지는가?**

> **화면의 작은 색·명암·초점·움직임 변화가 장면을 강화하면서도 과장된 게임 효과처럼 보이지 않는가?**

이 Gate를 통과한 뒤 R2 Stage 08 Hunt Embodied Vertical Slice 전체를 구현한다.

---

## Current unfinished work

- R2 Stage 07 Embodied Experience Skeleton
- R2 Stage 08 Hunt Embodied Vertical Slice
- R2 Stage 09 Teacher Immersion QA
- R2 Stage 10 Student Pilot
- R2 Stage 11 Gather
- R2 Stage 12 Camp
- R2 Stage 13 Three-Perspective Integration / Common Evening
- R2 Stage 14 Multi-day Change
- R2 Stage 15 Migration / New Home
- R2 Stage 16 Historical Concept Bridge
- Player Body Continuity Sheets
- Cast Continuity Sheets
- POV / Camera Bible
- Screen Treatment visual QA
- final visual/audio production

---

## Do not do next

- 기존 Hunt v0.1 화면에 텍스트/손 그림/빨간 overlay만 추가하고 `몰입 개선 완료` 처리
- 최종 이미지 대량 제작
- 자유 3D/FPS 전환
- NPC AI 시스템 구축
- Gather/Camp를 기존 Hunt UI 복사로 구현
- 위험마다 강한 red flash/화면 흔들림을 넣어 긴장감을 대신함

새 구현은 반드시 R2 Stage 01~06과 `01C`를 기준으로 한다.
