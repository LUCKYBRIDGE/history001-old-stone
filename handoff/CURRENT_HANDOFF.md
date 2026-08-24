# CURRENT_HANDOFF.md

## Current responsibility completed

**Stage 09-B — 몰입·내러티브 기반 재설계 문서 작업.**

Stage 09-A 첫 실제 플레이에서 다음 핵심 관찰이 나왔다.

> **“시작부터 몰입을 하게 할 무언가가 부족하다. 내가 정말 해당 상황, 해당 인물이 된 것 같은 느낌이 들게 해야 한다.”**

이를 `HUX-001`로 기록했고 **프로젝트 수준의 높은 심각도 문제**로 판정했다.

결론:

## **Hunt v0.1은 Functional Complete이지만 Immersion Complete가 아니다.**

이 문제 때문에 Hunt 첫 화면만 고치는 대신 프로젝트 상위 문서와 향후 개발 파이프라인 전체를 리비전했다.

---

## New canonical immersion documents

### `docs/07_IMMERSION_NARRATIVE_BIBLE.md`

모든 역할과 공통 경험이 따라야 하는 공통 기준.

8개 몰입 층:

1. 즉시 상황 진입
2. 몸과 감각
3. 관계
4. 개인적 필요/즉각적 이유
5. 행동으로 드러나는 정보
6. 선택의 결과감
7. 시간·공간 연속성
8. 감정의 회수

핵심 Gate:

> **시작 20~30초 안에 학생이 `나는 지금 이 공동체의 한 사람이다`라고 느낄 수 있는가?**

### `docs/08_HUNT_IMMERSION_REDESIGN.md`

Stage 09-C Hunt v0.2 구현의 직접 입력.

강화된 플롯:

```text
불 옆의 새벽
→ 사람들이 하루를 준비
→ “같이 가자”
→ “해가 지기 전에 돌아와.”
→ 거처가 멀어짐
→ 흔적 탐색
→ 발견 전 정적
→ 발견 / 접근 / 사냥 시도
→ “조금만 더…”
→ 추적 판단
→ 자연 위험 신호
→ 함께 위험을 피함
→ 먹을 것 확보 또는 빈손
→ 귀환
→ 앞서 본 랜드마크 회수
→ 아침 말의 의미 변화
→ 같은 불빛을 다시 봄
→ 공동체 복귀
→ Perspective Bridge
```

---

## Revised canonical docs

- `AGENTS.md` — 몰입 Guardrail을 최상위 규칙으로 승격
- `README.md` — 역할 몰입형 프로젝트 정체성 반영
- `docs/00_DEVELOPMENT_WORKFLOW.md` — 개발 로드맵 v2
- `docs/01_PROJECT_CORE.md` — v4
- `docs/02_EXPERIENCE_STRUCTURE.md` — v3
- `docs/03_HUNT_STORY.md` — v3
- `docs/04_HUNT_PLAYFLOW.md` — v3
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v3
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — v2 재검증
- `docs/06_TECH_BLUEPRINT.md` — v2

---

## Major design decisions — preserve

### 1. 몰입은 장식이 아니다

STORY/PLAYFLOW/상호작용/UI 단계에서 먼저 검증한다.

최종 이미지와 사운드는 기본 몰입을 **증폭**해야지 대신 만들어서는 안 된다.

### 2. 설명보다 상황과 행동

기본 학습 순서:

```text
상황
→ 행동
→ 세계의 반응 / 감각
→ 다른 관점과 연결
→ 이유를 생각
→ 역사 개념화
```

### 3. 개발 메타 UI는 학생 화면과 분리

기본 학생 화면에서 숨길 것:

- Stage 번호
- Vertical Slice
- RoleEntry
- internal state key
- SharedSignal
- test route

필요하면 debug mode에서만 표시.

### 4. Hunt 관계 앵커

최소 기능 관계:

- 함께 나가는 사람 A
- 주변을 함께 살피는 사람 B
- 거처에 남아 기다리는 사람

구체 이름은 아직 확정하지 않는다.

### 5. Hunt 모티프

> **“해가 지기 전에 돌아와.”**

아침의 가벼운 당부가 귀환에서는 기다리는 사람과 시간의 의미로 바뀐다.

같은 불도 아침의 생활 배경 → 저녁의 돌아갈 장소로 의미가 변한다.

### 6. 역할별 몰입 문법은 다르다

Hunt:

- 멀어짐
- 추적
- 위험
- 귀환

Gather:

- 익숙한 공간
- 반복 탐색
- 공간 기억
- 탐색 범위 확대

Camp:

- 같은 장소
- 불
- 시간 변화
- 빈 자리
- 기다림
- 재회

Gather/Camp를 Hunt식 Scene/reducer 루프로 복제하지 않는다.

---

## Existing Hunt v0.1 code — preserve as functional baseline

현재 코드의 기능 Guardrail:

- Hunt state/reducer는 Hunt 내부
- Common reducer는 Hunt stage를 모름
- no generic Scene Engine
- score / HP / EXP / ranking 없음
- 자연 위험은 전투가 아님
- danger response가 성공/실패를 채점하지 않음
- `food-secured` / `empty-handed` 모두 정상
- 성공/빈손 모두 귀환
- firelight 전 RoleCompletion 생성 금지
- Perspective Bridge 사용
- Common Evening은 Hunt 전용 엔딩 아님
- 역할 플레이 순서와 same-day time 분리

Stage 09-C에서 몰입을 강화하더라도 이 계약을 깨지 않는다.

---

## Next task — Stage 09-C

### **Hunt v0.2 immersive functional prototype 구현**

새 개발 세션에서 다음 순서로 읽는다.

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/02_EXPERIENCE_STRUCTURE.md`
7. `docs/03_HUNT_STORY.md`
8. `docs/04_HUNT_PLAYFLOW.md`
9. `docs/05_ROLE_EXPERIENCE_MAP.md`
10. `docs/06_TECH_BLUEPRINT.md`
11. `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
12. `docs/08_HUNT_IMMERSION_REDESIGN.md`
13. Hunt current code/tests

### P0 implementation

1. Player-facing / Debug UI 분리
2. Common Morning Cold Open
3. 첫 30초: 불/감각/사람/생활 문제/첫 행동
4. `같이 가자`
5. `해가 지기 전에 돌아와`
6. 거처가 멀어지는 연속성

### P1 implementation

7. 탐색에 환경/동행자 반응
8. 발견 전 정적/시선
9. 추적 갈등에서 해·거리·피로
10. 자연 위험 환경 신호
11. 결과 → 귀환 전환
12. 랜드마크 선행 노출/회수
13. 같은 불의 아침/저녁 회수

### P2 validation

14. 학생 화면 개발 메타 비노출 test
15. 기존 25 tests 보존/확장
16. 핵심 E2E 검토
17. `HUNT_PLAYTEST_NOTES.md` 기준으로 교사 재플레이 준비

---

## After Stage 09-C

### Stage 09-D
교사 Hunt v0.2 재플레이 / 몰입 QA.

### Stage 09-E
HUX 문제를 분석하고 승인 수정 반영.

### Stage 09-F
소규모 학생 테스트.

그 뒤 Gather부터는 새로운 pipeline을 사용한다.

```text
Historical Core
→ Role Identity
→ STORY
→ Immersion Script
→ PLAYFLOW
→ Functional Prototype
→ Teacher Immersion Test
→ Student Test
→ Final Art/Sound
→ Final QA
```

---

## Assets

이번 Stage 09-B는 기획/문서 재설계다.

아직 최종 이미지/사운드를 제작하지 않는다.

다만 Stage 09-C 이후 몰입 QA가 통과하면 다음 자산에 높은 우선순위가 생긴다.

- 아침/저녁 같은 거처의 연속성 장면
- 불
- 동행자/기다리는 사람
- 사냥 환경과 귀환 랜드마크
- 공간 앰비언스
- 불소리/발걸음/자연 신호

구체 자산 요청은 역사·시각 Context 단계에서 확정한다.
