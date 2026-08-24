# PROJECT_STATUS.md

## Current phase

**Stage 09-B — 몰입·내러티브 기반 재설계. Hunt v0.1의 기능 기준선은 유지하고, 역할 빙의와 줄거리 강화를 상위 설계 전체에 반영하는 단계.**

Stage 09-A 실제 첫 플레이에서 다음 핵심 피드백이 확인됐다.

> **“시작부터 몰입을 하게 할 무언가가 부족하다. 내가 정말 해당 상황, 해당 인물이 된 것 같은 느낌이 들게 해야 한다.”**

이 문제를 `HUX-001 — 시작 직후 역할 몰입 부족`으로 기록했고 심각도는 **높음**으로 판정했다.

판정:

## **현재 Hunt v0.1은 Functional Complete이지만 Immersion Complete가 아니다.**

---

## 이번 재설계에서 확정한 핵심 변화

### 1. 몰입을 최상위 품질 게이트로 승격

몰입은 최종 이미지/사운드 단계의 장식이 아니다.

모든 역할은 다음을 검증해야 한다.

- 시작 20~30초 안의 장소·사람·생활 문제·첫 행동
- 몸/감각
- 관계 인물
- 설명보다 행동
- 선택 직후 세계 반응
- 시간·공간 연속성
- 모티프/감정 회수
- Player-facing UI와 개발 메타 UI 분리

### 2. 줄거리 강화

Hunt는 단순 장면 목록이 아니라 다음 연속 플롯으로 재설계했다.

```text
불 옆의 새벽
→ 사람들이 하루를 준비함
→ “같이 가자”
→ “해가 지기 전에 돌아와.”
→ 거처가 멀어짐
→ 흔적 탐색
→ 발견 전 정적
→ 발견 / 접근 / 사냥 시도
→ “조금만 더…” 추적 갈등
→ 자연 위험
→ 먹을 것 확보 또는 빈손
→ 귀환
→ 앞서 본 랜드마크 회수
→ 아침 말의 의미 변화
→ 같은 불빛을 다시 봄
→ 공동체 복귀
→ Perspective Bridge
```

### 3. 역할별 몰입 문법 분리

- Hunt: 멀어짐 / 추적 / 위험 / 귀환 / 불빛
- Gather: 익숙한 주변 / 반복 탐색 / 공간 기억 / 탐색 범위 확대
- Camp: 같은 장소 / 불 / 시간 변화 / 빈 자리 / 기다림 / 재회

Gather/Camp를 Hunt의 화면 구조나 reducer 문법의 복사본으로 만들지 않는다.

### 4. 개발 계획 개편

앞으로 역할 개발 기본 순서:

## **Historical Core → Role Identity → STORY → Immersion Script → PLAYFLOW → Functional Prototype → Teacher Immersion Test → Student Test → Final Art/Sound → Final QA**

Functional Complete와 Immersion Complete를 구분한다.

---

## Canonical documents revised

이번 Stage 09-B에서 다음 문서를 몰입 기준으로 개편했다.

- `AGENTS.md`
- `README.md`
- `docs/00_DEVELOPMENT_WORKFLOW.md` — v2
- `docs/01_PROJECT_CORE.md` — v4
- `docs/02_EXPERIENCE_STRUCTURE.md` — v3
- `docs/03_HUNT_STORY.md` — v3
- `docs/04_HUNT_PLAYFLOW.md` — v3
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v3
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — v2 재검증
- `docs/06_TECH_BLUEPRINT.md` — v2

새 문서:

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`

---

## Current Hunt code baseline

코드는 아직 Stage 08-B Hunt v0.1이다.

기능 흐름:

```text
Common Morning
→ Hunt RoleEntry
→ 출발
→ 흔적 탐색
→ 단서 판단
→ 발견
→ 접근 판단
→ 사냥 시도
→ 추적 판단
→ 자연 위험
→ food-secured / empty-handed
→ 귀환
→ 모티프
→ 불빛
→ RoleCompletion
→ Perspective Bridge
```

보존해야 할 Guardrail:

- Hunt 내부 상태는 Hunt가 소유
- Common reducer에 Hunt-specific event 없음
- 범용 Scene Engine 없음
- score / HP / EXP / ranking 없음
- 위험은 전투가 아님
- danger response는 사냥 성공 채점이 아님
- 성공/빈손 모두 정상 경로
- 두 결과 모두 귀환
- firelight 전 RoleCompletion 금지
- Common Evening은 Hunt 전용 엔딩이 아님
- Hunt DayMoment가 다른 역할의 시작 시간을 바꾸지 않음

---

## Automated baseline

Stage 08-B 기능 기준선:

- Node.js 24.19.0
- npm 11.17.0
- 7 test files
- 25 tests
- typecheck PASS
- production build PASS

기존 최종 성공 run: `32677268699`

Stage 09-B는 현재 문서/설계 리비전이므로 코드 구현은 다음 단계에서 수행한다.

---

## Next task — Stage 09-C Hunt v0.2 immersive prototype

우선순위:

### P0

1. 학생 화면에서 Stage/Vertical Slice/RoleEntry 등 개발 메타 UI 제거 또는 debug 분리
2. Common Morning을 Cold Open으로 재구성
3. 첫 30초 안에 감각 + 관계 + 의미 있는 첫 행동 구현
4. `같이 가자` / `해가 지기 전에 돌아와` 관계 앵커
5. 거처가 멀어지는 공간 연속성

### P1

6. 탐색에 동행자/환경 반응
7. 발견 전 정적과 시선 연출
8. 추적 갈등에서 해·거리·피로 표현
9. 위험을 환경 신호 중심으로 재연출
10. 성공/빈손에서 귀환으로 목표 전환 강화
11. 귀환 랜드마크를 앞 장면에 미리 심기
12. 아침 불 → 저녁 불빛 회수

### P2

13. Player-facing / debug 테스트
14. 핵심 E2E 경로
15. 교사 몰입 재테스트 준비

결과 목표:

## **Hunt v0.2 — immersive functional prototype**

그 뒤 Stage 09-D 교사 재플레이 → Stage 09-E UX 수정 → Stage 09-F 학생 테스트로 진행한다.

---

## Current unfinished work

- Stage 09-C Hunt v0.2 구현
- Stage 09-D 교사 몰입 QA
- Stage 09-E Hunt UX review / 수정
- Stage 09-F 학생 테스트
- Gather Historical/Story/Immersion/PLAYFLOW/구현
- Camp Historical/Story/Immersion/PLAYFLOW/구현
- 세 역할 Perspective Bridge 통합
- 실제 Common Evening narrative integration
- 며칠 변화
- 이동 / 새 거처
- 역사 개념화
- 역사·시각 Context Bible
- 최종 이미지 / 사운드
- 최종 학생 QA
