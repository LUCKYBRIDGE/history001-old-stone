# 구석기 역사 체험 웹게임 — 개발 워크플로우 v6
## Design Reboot R2 / Emotional Realism Refinement

이 문서는 Stage 01부터 다시 정의한 최신 canonical 설계를 실제 구현 순서로 관리한다.

기존 Hunt v0.1 코드와 테스트는 삭제하지 않지만 **Legacy Functional Prototype**으로 취급한다.

---

# 1. 현재 R2 핵심 정의

# **Embodied First-Person Historical Experience**

학생은

- 현재 역할이 누구인지 이해한 뒤
- 그 사람의 몸과 제한된 시야로 세계를 보고
- 반복되는 사람들과 관계를 맺고
- 위험·공포·후회·죄책감·안도 같은 현실적인 감정을 경험할 수 있으며
- 정답 없는 판단과 때로는 좋지 않은 결과도 겪고
- 다른 관점에서 이전 사건의 의미를 다시 보며
- 역사적 상상력과 개념 이해로 이어진다.

학습 목표 흐름:

# **Immersion → Historical Imagination → Understanding → Conceptualization**

---

# 2. R2 최상위 품질 Gate

## Historical Integrity

- 사실 / 연구상 가능성 / 재구성 구분

## Role-True Perspective

- 역할 진입 시 시점 명료화
- 역할 안에서는 그 사람이 알 수 있는 범위로만 진행
- 전지적 설명 최소화

## Embodied Gate

- 몸이 자연스럽게 시야에 존재
- 행동과 자세에 따라 body state 변화

## Relationship / Emotional Reality Gate

- 반복 인물
- 관계 기억
- 죄책감·후회·걱정·안도 등 자연스러운 정서 허용
- 모욕/낙인/숨겨진 도덕 시험은 피함

## Dilemma / Consequence Gate

- 판단할 정보가 존재
- 결과는 평등할 필요 없음
- 결과가 세계 조건에서 납득 가능
- 선택 흔적이 뒤에서 회수됨

## Threat / Horror Gate

- 역사적 위험과 인간 취약성을 강화하는 공포 허용
- 드문 strong accent / jump-like moment / 짧은 회피 가능
- 고어 소비/반복 jump scare/처치 루프는 피함

## Screen Treatment Gate

# **Subtle by default. Strong when earned.**

## Learning Gate

- 플레이 경험이 역사적 상상력과 이유 이해로 이어짐
- reflection은 필요할 때 사용하고 매 역할마다 강제하지 않음

---

# 3. R2 Stage 01 — Project Constitution

상태: **최신 리비전 완료**

- `docs/01_PROJECT_CORE.md` v6
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` v3
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` v3
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` v3
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` v2

---

# 4. R2 Stage 02 — Experience Structure

상태: **최신 리비전 완료**

`docs/02_EXPERIENCE_STRUCTURE.md` v6

핵심:

- 역할 시점은 진입 때 명료하게 알려줄 수 있음
- 이후 Role-True Perspective 유지
- Perspective Bridge는 복잡한 퍼즐이 아니라 짧고 명확한 전환 가능
- 다른 역할의 정보는 나중에 알게 함
- 강제 Micro Reflection 폐지
- 역사적 상상력 중심

---

# 5. R2 Stage 03 — Hunt STORY

기존 v5의 큰 플롯 유지.

다음 구현 전 추가 검토 대상:

- Hunt 관점 밖 전지적 정보 제거
- 죄책감/후회/안도 callback 강화
- 위협 장면의 공포 강도와 서사 build-up
- strong screen accent 후보 위치
- 결과가 관계와 감정에 남는 방식

---

# 6. R2 Stage 04 — Hunt PLAYFLOW

기존 v5를 기반으로 실제 구현 전 Scene별로 다음을 확정한다.

- 현재 POV와 visible body
- actor 위치
- 학생이 실제로 아는 정보
- 행동
- 세계 반응
- 관계/감정 callback
- threat/horror beat
- treatment intensity
- scaffold fallback

---

# 7. R2 Stage 05 — Role Experience Map

유지:

- Hunt / Gather / Camp의 서로 다른 body grammar
- 역할 동등성
- 역할별 다른 감정과 공간 경험

역할 차이는 성별 고정이 아니라 행동·환경·관계·관점으로 만든다.

---

# 8. R2 Stage 06 — Technical Blueprint

기술 원칙 유지:

- React + TypeScript + Vite
- reducer / explicit state
- small variant rules
- Relationship Memory
- qualitative consequence
- Screen Treatment preset
- reduced effects
- player/teacher/debug surface 분리

과설계 금지:

- 범용 NPC AI
- 범용 Scene Engine
- 대규모 대화 트리
- procedural narrative
- VFX engine
- FPS/3D 엔진 선행

---

# 9. R2 Stage 07 — Embodied Experience Skeleton

## 다음 공식 구현 단계

목표:

**Hunt 전체를 만들기 전에 `사냥하는 사람의 몸과 시야 안에서 그 시대를 살아가는 느낌`이 실제 브라우저에서 성립하는지 검증한다.**

### P0 — Role-True Entry

1. Player / Teacher / Debug surface 분리
2. `사냥을 나선 사람의 관점` 같은 짧은 role entry
3. Embodied first-person frame
4. 내 손/무릎 + 불 + R
5. 도구 전달

### P1 — Embodied Movement / Relationship

6. H1/H2와 같은 공간에 서기
7. 걷는 POV
8. 몸 낮추기 POV
9. 사람 시선/손짓/반응
10. 작은 Relationship Memory prototype

### P2 — Treatment / Emotion

11. `fire-warmth` subtle
12. `threat-attention` accent
13. 서사적으로 납득 가능한 한 번의 `strong-accent` 후보
14. reduced-effects parity

### P3 — Perspective Transition

15. 짧은 transition
16. 현재 다음 관점 표시 가능
17. 새 몸/시야로 자연스럽게 전환

### P4 — QA

18. 자동 테스트
19. 브라우저 교사 QA

### Stage 07 완료 질문

> **사냥 역할을 플레이하면 정말 사냥하는 사람의 눈과 몸과 제한된 정보 안에 들어간 느낌이 드는가?**

> **작은 효과와 강한 순간 효과가 정확한 위치에 있는가?**

> **관계가 단순 NPC 안내가 아니라 감정적 의미를 만들기 시작하는가?**

NO라면 전체 Hunt로 넘어가지 않는다.

---

# 10. R2 Stage 08 — Hunt Embodied Vertical Slice

Stage 07 승인 뒤 진행.

## 08-A — 거리와 발견

- 거처 이탈
- 걷기
- 흔적 탐색
- 동행자 반응
- 발견

## 08-B — 딜레마와 공포

- 접근
- 사냥 시도
- 더 추적할지 판단
- 시간/거리/동행자 부담
- threat build-up
- 공포 장면
- 회피/판단

## 08-C — 결과와 귀환

- 다축 결과
- 후회/죄책감/안도 가능
- 귀환 body state
- 기다리는 사람 반응
- Perspective Bridge

---

# 11. R2 Stage 09 — Teacher Immersion QA

측정:

- Role-True POV
- 몸의 자연스러움
- 관계 기억
- 실제 고민
- 공포/긴장 강도
- 죄책감/후회/안도의 자연스러움
- screen effect 위치/강도
- 선택 결과 회수
- 역사적 상상력

---

# 12. R2 Stage 10 — Student Pilot

학생에게 묻는다.

- 누구의 입장이었는지 이해했는가?
- 진짜 그 사람처럼 느껴진 순간은?
- 가장 무섭거나 긴장된 순간은?
- 후회하거나 마음에 걸린 선택은?
- 왜 그런 선택을 했는가?
- 다른 사람 입장에서 다시 보니 무엇이 달라졌는가?
- 구석기 사람들의 생활을 전보다 어떻게 상상하게 되었는가?

---

# 13. R2 Stage 11 — Gather

Historical review
→ Role-True POV
→ Body Identity
→ 관계/딜레마
→ STORY
→ PLAYFLOW
→ Prototype
→ QA

Hunt의 공포/추적 문법을 복제하지 않는다.

---

# 14. R2 Stage 12 — Camp

중심:

- 불 가까운 몸
- 생활 노동
- 같은 공간의 시간 변화
- 떠난 사람의 부재
- 기다림과 걱정
- 늦은 귀환의 반대편
- 재회

---

# 15. R2 Stage 13 — Three-Perspective Integration

- shared cast continuity
- relationship/consequence/emotional callback
- Common Evening variant
- Perspective Recontextualization

공통 저녁은 결과표가 아니다.

---

# 16. R2 Stage 14 — Multi-day Change

- 먹을거리/거리 부담 변화
- 관계 기억 제한적 누적
- 반복되는 피로와 불확실성
- 한 장소 생활의 부담

---

# 17. R2 Stage 15 — Migration / New Home

- 떠날지 고민
- 챙길 것
- 익숙한 장소를 버리는 감정
- 함께 이동
- 새로운 위험/불확실성
- 새 불

---

# 18. R2 Stage 16 — Historical Concept Bridge

마지막에 학생의 경험을 교과 개념과 연결한다.

하지만 이 Stage가 처음으로 개념을 만드는 것이 아니다.

# **개념은 앞선 몰입과 역사적 상상력에서 이미 생긴 이해를 정리한다.**

---

# 19. 현재 공식 다음 단계

# **R2 Stage 07 — Embodied Experience Skeleton**

먼저 **role-true POV + 몸 + 사람 + 관계 + 정확한 screen treatment**를 작은 브라우저 골격에서 검증한다.
