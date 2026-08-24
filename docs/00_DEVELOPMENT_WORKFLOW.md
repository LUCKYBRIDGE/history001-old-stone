# 00_DEVELOPMENT_WORKFLOW.md

# 구석기 역사 체험 웹게임 — 개발 워크플로우 v2

이 문서는 **어떤 순서로 무엇을 만들고 어떤 품질 게이트를 통과해야 다음 단계로 가는지**를 정의한다.

기획 내용은 각 `docs/` 문서를 따른다.

---

# 1. 운영 원칙

## GitHub = Single Source of Truth

- 최신 기획, 코드, 테스트, 인수인계, 자산 계획은 GitHub에 둔다.
- 새 ChatGPT 세션은 과거 채팅 기억이 아니라 저장소를 읽고 시작한다.
- 별도 `LATEST_BUILD.zip`을 기준으로 삼지 않는다.

## 세션 = 책임 단위

예:

- 역할 STORY
- 역할 Immersion Script
- 역할 PLAYFLOW
- 기능 구현
- 교사 몰입 QA
- 학생 테스트
- 아트 디렉션

한 세션에서 무관한 단계까지 무리하게 확장하지 않는다.

## 새 세션 읽기 순서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. 관련 canonical 문서
6. 실제 개발이면 관련 코드/테스트

---

# 2. 개발 파이프라인의 핵심 변경

Stage 09-A 플레이에서 `HUX-001 — 시작 직후 역할 몰입 부족`이 확인되었다.

따라서 앞으로 역할 개발은

## **STORY → PLAYFLOW → CODE**

가 아니라

# **Historical Core → Role Identity → STORY → Immersion Script → PLAYFLOW → Functional Prototype → Teacher Immersion Test → Student Test → Final Art/Sound → Final QA**

순서를 기본으로 한다.

몰입은 최종 미술 단계의 장식이 아니라 **기능 완성과 별도의 필수 품질 게이트**다.

---

# 3. 공통 품질 게이트

## Historical Gate

- 교과 사실 / 재구성 / 게임 장치를 구분
- 불확실한 세부를 사실처럼 단정하지 않음

## Role Identity Gate

- 학생은 이 역할에서 누구인가?
- 누구와 연결되어 있는가?
- 지금 무엇이 필요한가?
- 이 역할만의 Dramatic Question은 무엇인가?

## Immersion Gate

- 시작 20~30초 안에 장소·사람·생활 문제·첫 행동이 드러남
- 개발 메타 UI가 학생 화면에 없음
- 몸/감각 앵커 존재
- 관계 인물 존재
- 선택 뒤 세계가 반응
- 시간·공간 연속성 존재
- 앞의 모티프가 뒤에서 회수

## Functional Gate

- 진행 막힘 없음
- 상태/계약/저장/역할 경계 정상
- 자동 테스트 통과

## Learning Gate

- 학생이 설명을 외운 것이 아니라 플레이 경험을 근거로 역사적 이유를 말할 수 있음

---

# 4. Stage 01~08 — 완료된 기반

## Stage 01 — Project Core

결과물: `docs/01_PROJECT_CORE.md`

현재 v4로 몰입/역할 빙의 원칙까지 확장.

## Stage 02 — Experience Structure

결과물: `docs/02_EXPERIENCE_STRUCTURE.md`

현재 v3로 Cold Open, Perspective continuity, Common Evening 통합을 강화.

## Stage 03 — Hunt STORY

결과물: `docs/03_HUNT_STORY.md`

현재 v3로 관계·플롯·감정 회수를 강화.

## Stage 04 — Hunt PLAYFLOW

결과물: `docs/04_HUNT_PLAYFLOW.md`

현재 v3로 설명 카드형 진행을 줄이고 행동/반응 중심으로 강화.

## Stage 05 — Role Experience Map

결과물: `docs/05_ROLE_EXPERIENCE_MAP.md`

현재 v3로 역할별 고유 몰입 문법까지 명시.

## Stage 06 — Tech Blueprint

결과물: `docs/06_TECH_BLUEPRINT.md`

현재 v2로 Player-facing / Debug 분리, 몰입 UI, 테스트 전략을 추가.

## Stage 07 — App Skeleton

완료.

- React + TypeScript + Vite
- Experience Orchestrator
- Common / Role Feature 경계
- localStorage checkpoint
- 테스트 / CI

## Stage 08 — Hunt Vertical Slice v0.1

완료.

기능 흐름:

**공통 아침 → Hunt → 추적/위험/결과 → 귀환 → 불빛 → RoleCompletion → Perspective Bridge**

기능/아키텍처 기준선은 통과했지만 Stage 09 실제 플레이에서 몰입 문제를 발견했다.

---

# 5. Stage 09 — Hunt 몰입·서사 리빌드

## Stage 09-A — 교사 첫 플레이 / 문제 발견

상태: **진행됨 / 핵심 HUX-001 확인**

확인된 핵심:

> 시작부터 해당 상황·인물이 된 느낌이 부족함.

기록:

- `handoff/HUNT_PLAYTEST_NOTES.md`
- `handoff/HUNT_PLAYTEST_OBSERVATIONS.md`

이 관찰은 단순 문구 수정이 아니라 상위 설계 리비전을 요구하는 수준으로 판정한다.

---

## Stage 09-B — 몰입·내러티브 기반 재설계

상태: **현재 문서 리비전 단계**

결과물:

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`
- `AGENTS.md` 몰입 Guardrail 강화
- `docs/01~06` canonical 리비전
- 향후 개발 로드맵 개편

코드는 이 단계에서 먼저 고치지 않는다.

Acceptance:

- 상위 문서 모두 역할 빙의 기준과 모순 없음
- Hunt v0.2의 구현 우선순위가 구체적임
- Gather/Camp가 Hunt 복사본이 되지 않을 몰입 기준이 존재

---

## Stage 09-C — Hunt v0.2 몰입 구현

새 개발 세션.

읽을 것:

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/01_PROJECT_CORE.md`
4. `docs/02_EXPERIENCE_STRUCTURE.md`
5. `docs/03_HUNT_STORY.md`
6. `docs/04_HUNT_PLAYFLOW.md`
7. `docs/06_TECH_BLUEPRINT.md`
8. `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
9. `docs/08_HUNT_IMMERSION_REDESIGN.md`
10. 현재 Hunt 코드/tests

### P0

- Player-facing에서 개발 메타 UI 제거/분리
- Common Morning Cold Open
- 시작 30초 내 감각 + 관계 + 첫 행동
- `같이 가자` / `해가 지기 전에 돌아와` 관계 앵커
- 거처가 멀어지는 공간 연속성

### P1

- 탐색 결과에 동행자/환경 반응
- 발견 전 정적/시선 연출
- 추적에서 시간·거리 부담 표현
- 위험을 환경 신호 중심으로 강화
- 결과 → 귀환 목표 전환 강화
- 랜드마크 선행 노출 → 귀환 회수
- 아침 불 → 저녁 불빛 회수

### P2

- student/debug mode separation 테스트
- 핵심 E2E 경로

결과: **Hunt v0.2 immersive functional prototype**

---

## Stage 09-D — 교사 재플레이 / 몰입 QA

Hunt v0.2를 직접 플레이.

반드시 측정:

- 시작 30초 역할 빙의
- 기억되는 사람
- 개발 UI에 의한 몰입 깨짐
- 텍스트 부담
- 선택의 결과감
- 거리/시간 체감
- 자연 위험의 긴장과 비전투성
- 성공/빈손 감정 균형
- 귀환/불빛의 감정
- 모티프 회수

문제는 HUX ID로 기록.

---

## Stage 09-E — Hunt UX Review / 수정

결과물:

- `docs/09_HUNT_UX_REVIEW.md`

문제 분류:

- 유지
- 축소
- 수정
- 삭제

승인된 항목만 코드 수정.

결과: Hunt v0.3 candidate.

---

## Stage 09-F — 소규모 학생 테스트

교사 QA 뒤 실제 학생 대상으로 검증.

관찰:

- 설명 없이 역할 이해
- 첫 행동 이해
- 몰입을 깨는 문구/UI
- 기억하는 인물/장면
- 빈손 해석
- `해가 지기 전에 돌아와` 의미
- 사냥만이 전체 생활이라고 오해하는지

학생 테스트 전에 최종 아트를 필수로 하지 않는다. 필요한 경우 제한적 prototype asset을 사용할 수 있으나 역사 검토를 거친다.

---

# 6. Stage 10 — Gather 개발

Hunt 코드를 복사해 시작하지 않는다.

## 10-A Historical / Narrative Research

- Gather가 담당할 교과·역사 범위 검토
- 구체 먹을거리/식생 세부는 검증 후 사용

## 10-B Gather Role Identity + STORY

결과물 예:

- `docs/10_GATHER_STORY.md`

확정:

- Dramatic Question
- 관계
- 감정선
- 역할 고유 변화
- 다른 역할과의 연결

## 10-C Gather Immersion Script

장면별:

- 위치
- 감각
- 관계
- 행동
- 반응
- 공간 기억
- 모티프

## 10-D Gather PLAYFLOW

Hunt와 다른 플레이 리듬을 설계.

## 10-E Gather Vertical Slice

Functional + Immersion Gate 둘 다 통과해야 함.

## 10-F Teacher QA

## 10-G Student Test / 수정

---

# 7. Stage 11 — Camp 개발

동일한 품질 파이프라인을 사용하되 Hunt/Gather 플레이 문법은 복제하지 않는다.

## 11-A Historical / Narrative Research

## 11-B Camp Role Identity + STORY

핵심:

- 생활 유지
- 같은 장소의 시간 변화
- 밖에 나간 사람을 기다림
- 불과 공동체

## 11-C Camp Immersion Script

특히 `같은 장소가 시간에 따라 다르게 느껴지는 방법`을 집중 설계.

## 11-D Camp PLAYFLOW

## 11-E Camp Vertical Slice

## 11-F Teacher QA

## 11-G Student Test / 수정

---

# 8. Stage 12 — 세 역할 통합 / Common Evening

세 역할의 실제 질적 결과가 모두 존재한 뒤 수행.

## 12-A Perspective Bridge 통합

- 같은 하루의 동시성
- 같은 사람/불/해의 관점 전환
- 역할 메뉴 느낌 제거

## 12-B Common Evening STORY

공통 저녁을 결과표가 아니라 재회 장면으로 구현.

## 12-C Integration implementation

RoleCompletion sharedSignals를 공동체 이야기로 조합.

## 12-D Teacher / Student QA

질문:

> **“내 역할만이 하루의 전부가 아니었다”는 느낌이 드는가?**

---

# 9. Stage 13 — 며칠의 변화

세 역할 신호가 반복되며 부담이 변하는 것을 보여준다.

- Hunt: 거리/귀환 부담
- Gather: 가까운 탐색 범위의 변화
- Camp: 기다림/생활 부담

단순 반복 플레이가 아니라 짧고 의미 있는 변화 표현을 설계한다.

---

# 10. Stage 14 — 이동과 새 거처

## 14-A 이동 결정 STORY / Immersion Script

학생이 앞선 경험 때문에 이동 필요를 예상할 수 있어야 한다.

## 14-B 이동 PLAYFLOW

- 무엇을 챙길지
- 함께 이동
- 익숙한 장소를 떠남
- 새 장소 탐색

## 14-C 새 거처

첫 아침의 불과 구조적으로 대구되는 새로운 밤/불을 만든다.

---

# 11. Stage 15 — 역사 개념화 / 학습 브리지

학생이 자신의 경험을 근거로 교과 개념을 정리한다.

목표:

> **경험에 이름을 붙이는 것**

이지 게임 뒤 별도 암기시험을 붙이는 것이 아니다.

---

# 12. Stage 16 — 역사·시각 Context Bible

기능/몰입 구조가 검증된 뒤 본격 자산 설계.

결과물:

- `VISUAL_CONTEXT_BIBLE`
- `VISUAL_CONTINUITY_MAP`
- `ART_DIRECTION_BIBLE`
- `ASSET_SPEC`
- 역사 레퍼런스 검토

---

# 13. Stage 17 — 이미지·사운드 제작

별도 제작 세션.

우선순위:

- 공간/시간 정보
- 사람의 연속성
- 상호작용 단서
- 감정 모티프
- 앰비언스/행동 피드백/대사

단순 장식보다 서사 기능을 우선한다.

---

# 14. Stage 18 — Final Integration / QA

- 기능
- 접근성
- 브라우저/화면 크기
- 자동 테스트
- 몰입 QA
- 역사 QA
- 아트 연속성
- 사운드
- 학생 테스트

모두 통과 후 release candidate로 본다.

---

# 15. 역할별 완료 정의

앞으로 `구현 완료`는 다음 세 수준을 구분한다.

## Functional Complete

코드/상태/테스트가 정상.

## Immersion Complete

교사/학생 테스트에서 역할 빙의, 관계, 연속성, 감정 회수가 기준 통과.

## Production Complete

최종 역사 검토 + 아트/사운드 + 접근성 + 최종 QA까지 통과.

**Functional Complete만으로 역할을 최종 완성이라고 부르지 않는다.**
