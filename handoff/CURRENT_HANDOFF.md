# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 01~07 Sequential Audit 완료 / Stage 07 Skeleton 구현·자동검증 완료 / Teacher Browser QA 대기**

이번 작업은 최근 R2 변경이 빠르게 누적된 뒤 Stage 01부터 Stage 07까지 의존 순서대로 다시 점검하고, 실제 모순·누락·구현 부채를 수정한 작업이다.

상세 감사:

- `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`

---

# 1. 다음 세션이 가장 먼저 알아야 할 것

현재 기본 앱은 더 이상 Legacy Hunt v0.1이 아니다.

# **기본 `npm run dev` 화면 = R2 Stage 07 Embodied Experience Skeleton**

현재 Skeleton 흐름:

```text
사냥을 나선 사람의 관점
→ 눈을 뜬다
→ 새벽 불 앞
→ 익숙한 사람을 본다
→ 돌도구를 받는다
→ 동행자들과 일어난다
→ “해가 지기 전에 돌아와.”
→ 거처를 나선다
→ 몸을 낮춰 지면을 살핀다
→ 같은 날, 다른 사람 관점으로 전환
```

이것은 **최종 Hunt가 아니라 embodied layout / interaction / surface separation proof**다.

---

# 2. 개발 비교 URL

개발 서버 기준:

## 기본 Player

```text
http://localhost:5173/
```

## Legacy Hunt v0.1 비교

```text
http://localhost:5173/?legacy=1
```

## Teacher surface

```text
http://localhost:5173/?teacher=1
```

## Debug surface

```text
http://localhost:5173/?debug=1
```

query 기반 legacy/teacher/debug 경로는 개발 환경용이다.

---

# 3. Stage 01~06 최신 canonical 버전

- `docs/01_PROJECT_CORE.md` — v7
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — v4
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — v3
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` — v3
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` — v2
- `docs/02_EXPERIENCE_STRUCTURE.md` — v7
- `docs/03_HUNT_STORY.md` — v6
- `docs/04_HUNT_PLAYFLOW.md` — v6
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v6
- `docs/06_TECH_BLUEPRINT.md` — v6

공통 실무 기준:

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md`

---

# 4. 이번 순차 감사에서 수정한 핵심 오류

## A. Role-True POV 불일치

01A가 예전 관점 anchor 규칙을 과도하게 유지하고 있었다.

수정:

- 역할 진입 때 관점은 명료하게 표시 가능
- 역할 내부에서는 그 인물이 보고/듣고/아는 범위만 사용
- 다른 역할 내부/타인의 속마음/미래 결과 전지적 노출 금지

## B. Student Play Order와 World Time 혼동

수정:

# **Student Play Order ≠ In-World Time**

Hunt → Gather → Camp는 같은 Day 1의 세 관점이다.

`SharedDayContext`에 `dayId: 'day-1'`을 추가했다.

## C. 감정/공포에 남아 있던 과보수 규칙

Hunt STORY/PLAYFLOW를 최신 Emotional Reality 기준으로 수정했다.

허용:

- 공포게임 같은 순간
- 후회
- 죄책감
- 긴장 잔여
- 드문 strong-accent

단:

- 반복 damage flash
- 의미 없는 jump scare 반복
- 적 HP/처치 루프
- 학생 인격 도덕 채점

은 사용하지 않는다.

## D. Scene state 폭발 위험

Stage 04에서:

# **Scene ≠ Beat**

로 분리했다.

actor stop / gaze / sound / focus / jolt 같은 연출 beat를 모두 reducer stage로 만들지 않는다.

## E. 역할 복제 위험

Stage 05에서 Hunt/Gather/Camp의 몸·감정·딜레마·treatment 문법을 다시 분리했다.

## F. 기술 문서 과추상화

Stage 06을 v6으로 다시 정리했다.

- same-day identity
- 단순 RoleCompletion 유지
- local Skeleton state
- strong-accent
- reduced effects
- Player/Teacher/Debug
- no generic Scene/NPC/VFX engine

---

# 5. Stage 07 실제 변경 파일

새 파일:

- `src/experience/skeleton/R2EmbodiedSkeleton.tsx`
- `src/experience/skeleton/r2EmbodiedSkeleton.css`
- `tests/integration/R2EmbodiedSkeleton.test.tsx`

수정:

- `src/app/App.tsx`
- `src/app/AppShell.tsx`
- `src/experience/contracts/role.ts`
- `src/experience/ExperienceOrchestrator.tsx`
- `tests/integration/ExperienceOrchestrator.test.tsx`
- `tests/unit/HuntFeature.test.tsx`
- `package.json`

package version:

```text
0.0.0-r2-stage07
```

---

# 6. Stage 07 기능

## Player surface

기본값.

보이지 않음:

- Stage 번호
- exact reducer state
- 개발 toolbar
- debug evidence
- `Vertical Slice v0.1`

## Teacher surface

- major step
- reset
- reduced effects

## Debug surface

- exact skeleton step
- held tool state
- treatment preset
- evidence

## Learning Evidence proof

- `tool-used-in-context`
- `embodied-observation-performed`

학생에게 점수/배지로 노출하지 않는다.

---

# 7. 자동 검증

첫 PR CI:

- run `32822108088`
- install PASS
- typecheck FAIL

원인:

- `SharedDayContext.dayId`를 추가하면서 `tests/unit/HuntFeature.test.tsx`의 legacy fixture 한 곳에 `dayId`가 빠짐

수정 후 성공:

- run `32822273986`
- Node 24.19.0
- npm 11.17.0
- install PASS
- typecheck PASS
- **8 test files / 31 tests PASS**
- production build PASS

첫 실패를 숨기지 않는다. 순차 감사가 실제 계약 누락을 잡아낸 사례로 기록한다.

---

# 8. 아직 하지 않은 것

- Stage 07 사람 눈 브라우저 visual QA
- 최종 Player Body asset
- 최종 Cast asset
- 실제 사운드
- Hunt v6 전체 flow 구현
- 공포/strong-accent 실제 Threat 장면 구현
- Gather/Camp 본체

현재 CSS body/actor는 **layout proof**다.

---

# 9. 다음 공식 작업

# **R2 Stage 07 Teacher Browser Visual/Immersion QA**

교사가 기본 URL을 직접 플레이하며 확인한다.

핵심 질문:

1. 첫 화면부터 `웹페이지`보다 `그 사람의 시야`처럼 느껴지는가?
2. 손/무릎/사람의 위치가 물리적으로 어색하지 않은가?
3. 도구를 받는 순간이 실제 상호작용처럼 느껴지는가?
4. H1/H2가 단순 아이콘이 아니라 같이 나가는 사람처럼 느껴지는가?
5. 걷기/crouch 변화가 몸의 자세 변화로 느껴지는가?
6. treatment가 과하거나 약하지 않은가?
7. 관점 전환이 명료한가?
8. 개발 정보가 기본 화면에 전혀 튀어나오지 않는가?

관찰은 `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`에 기록한다.

Stage 07 human Gate PASS 전에는 Stage 08을 시작하지 않는다.

---

# 10. Stage 08 예정

Stage 07 human QA 통과 뒤:

# **R2 Stage 08 — Hunt Embodied Vertical Slice**

그때 구현:

- 실제 흔적 탐색
- 발견
- 접근/시도
- 추적 딜레마
- Threat/Horror
- multi-axis result
- 귀환
- 죄책감/후회/안도 callbacks
- 재회

현재는 아직 시작하지 않는다.
