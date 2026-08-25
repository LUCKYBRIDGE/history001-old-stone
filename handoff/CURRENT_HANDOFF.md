# CURRENT_HANDOFF.md

## Current responsibility completed

# **Design Reboot R2 — Stage 01~06 전면 리비전 + Subtle Screen Treatment 보강**

사용자 방향:

- 실제 사람의 시야처럼 눈앞 풍경과 내 신체 일부가 함께 보여야 함
- 실제 주변 인물과 관계를 맺어야 함
- 위협과 고민이 UI 문항이 아니라 실제 위협/고민으로 다가와야 함
- 선택이 하나의 획일적인 결론으로 무효화되지 않아야 함
- 거대한 연출보다 **화면이 잠깐 붉게/따뜻하게 물들거나, 짧게 깜빡이거나, 초점·명암·미세 흔들림이 바뀌는 작은 연출**도 몰입 언어로 사용해야 함

이를 기존 Stage 09 보완이 아니라 **Stage 01부터의 새 canonical foundation**으로 반영했다.

---

## 가장 중요한 새 정의

# Embodied First-Person

학생은 카메라를 조종하는 사람이 아니다.

학생 화면은:

## **환경 + 내 몸 + 들고 있는 것 + 주변 사람 + 현재 행동**

의 하나의 물리적 시야다.

예:

- 불 앞: 손 + 무릎 + 불 + 맞은편 사람
- 도구 전달: 상대 손 + 도구 + 내 손
- 흔적 관찰: 내 손 + 무릎 + 지면 흔적
- 걷기: 도구 든 손 + 앞의 동행자
- 귀환: 피로한 팔/운반 상태 + 멀리 보이는 거처

---

## Subtle Screen Treatment

새 canonical 문서:

- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`

핵심 원칙:

## **대형 VFX보다 작은 지각 변화로 몸·환경·시간·긴장을 보조한다.**

사용 가능:

- 불의 따뜻한 color wash
- 새벽/해질녘 색온도·명암 변화
- 위협 순간의 아주 약한 주변부 변화/focus shift
- 피로한 걸음의 미세 sway
- 자세/시간/관점 전환의 한 번의 blink
- 어두운 귀환 중 불빛을 발견할 때 미세한 밝기 회복

금지/제한:

- 위험마다 강한 전체 화면 빨강
- HP damage flash처럼 보이는 red flash
- 반복 flashing
- 지속적 강한 shake/blur/zoom
- 화면 효과만 보고 위험/피로를 이해하게 하는 구조

기본 강도는 `none / subtle / accent`로 제한한다.

효과보다 **세계·몸·사람이 먼저 의미를 만든다.**

---

## 역할의 새로운 의미

Hunt / Gather / Camp는 같은 사람이 세 일을 하는 것이 아니다.

## **같은 공동체의 같은 하루를 서로 다른 구성원의 몸과 눈으로 경험한다.**

Perspective Bridge는 역할 메뉴가 아니라 사람/몸/공간을 이용한 시점 전환이다.

---

## 관계 모델

관계는 호감도 숫자가 아니다.

### Relationship Memory

- 함께 위험을 피함
- 부담을 나눔
- 늦게 귀환
- 기다리는 사람을 바라봄

같은 질적 기억이 이후 사람의 대사·시선·행동·저녁 장면에 반영된다.

---

## 위협/고민 모델

### 위협

```text
징후
→ 주변 사람 반응
→ 내 몸의 긴장
→ 내가 주변을 봄
→ 필요하면 아주 약한 screen treatment
→ 위협을 이해
→ 판단
```

### 고민

선택 전에

- 원하는 것
- 가능성
- 시간
- 거리
- 피로
- 다른 사람 상태

가 함께 보여야 한다.

정답/오답 없음.

---

## 결과 모델

# **Bounded Agency + Persistent Consequence + Reconverging Narrative**

큰 이야기에서 같은 장소로 돌아올 수 있다.

하지만 선택은 다음에 흔적을 남긴다.

- 사람 반응
- 관계 기억
- 몸 상태
- 시간
- 거리
- 위험 경험
- 들고 있는 것
- 다음 역할 시점

같은 저녁이라도 같은 의미가 아니다.

---

## Revised canonical docs

### R2 Stage 01

- `docs/01_PROJECT_CORE.md` v5
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` v2
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` v1
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` v1

### R2 Stage 02

- `docs/02_EXPERIENCE_STRUCTURE.md` v4

### R2 Stage 03

- `docs/03_HUNT_STORY.md` v4

### R2 Stage 04

- `docs/04_HUNT_PLAYFLOW.md` v4

### R2 Stage 05

- `docs/05_ROLE_EXPERIENCE_MAP.md` v4
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` v3

### R2 Stage 06

- `docs/06_TECH_BLUEPRINT.md` v4

### Supporting canonical

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` v3
- `docs/08_HUNT_IMMERSION_REDESIGN.md` v2
- `docs/00_DEVELOPMENT_WORKFLOW.md` v3
- `AGENTS.md`

---

## Legacy runtime

현재 `src/`의 Hunt v0.1은 삭제하지 않는다.

지위:

# **Legacy Functional Prototype**

재사용 가능:

- React/TS/Vite
- Orchestrator 구조 일부
- reducer/test 기반
- non-combat guardrail
- qualitative completion 철학

재설계 가능:

- Common Morning
- player-facing UI
- Hunt Scene presentation
- result detail
- relationship data
- Perspective Bridge
- screen treatment layer

기존 코드가 R2 설계를 제한하면 R2 설계가 우선한다.

---

## 다음 공식 작업

# **R2 Stage 07 — Embodied Experience Skeleton**

전체 Hunt를 바로 만들지 않는다.

먼저 다음 작은 vertical skeleton을 구현/검증한다.

```text
Cold Open
→ 내 손/무릎 + 불
→ 따뜻한 fire-warmth treatment
→ R의 손에서 내 손으로 돌도구 전달
→ H1/H2와 같은 공간에 서기
→ 걷는 POV
→ 잠깐 몸을 낮추는 POV
→ 위협이 아닌 짧은 attention/focus treatment prototype
→ Perspective Bridge에서 자연스러운 blink prototype
```

### P0

- Student / Debug surface 분리
- Embodied frame
- body pose preset
- R/H1/H2 actor continuity 최소 구조
- 최소 ScreenTreatmentLayer 또는 동등 구조

### P1

- 도구 전달
- 걷기
- crouch POV
- 시선/actor reaction
- `fire-warmth`, `threat-attention`, `blink-transition` 중 2~3개 preset

### P2

- Perspective Bridge
- reduced-effects fallback
- 자동 테스트
- 브라우저 교사 QA

---

## R2 Stage 07 완료 질문

다음에 YES라고 답할 수 있어야 한다.

> 화면이 `구석기 배경을 보는 웹`이 아니라 정말 **내 눈앞의 풍경에 내 몸과 다른 사람이 함께 존재하는 장면**처럼 느껴지는가?

> 다른 사람의 손과 내 손이 같은 공간에서 물건을 주고받는 것이 자연스러운가?

> 역할이 바뀔 때 `다음 게임`보다 `다른 사람의 몸으로 이동했다`는 느낌이 가능한가?

> 색·명암·초점·blink·미세 움직임이 장면을 조용히 강화하며, 효과 자체가 튀어 보이지 않는가?

NO라면 전체 Hunt를 만들지 않고 skeleton부터 수정한다.

---

## 구현 시 읽기 순서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
7. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
8. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
9. `docs/02_EXPERIENCE_STRUCTURE.md`
10. `docs/06_TECH_BLUEPRINT.md`
11. R2 Stage 07 구현 대상 코드/tests

Hunt 전체 구현 세션에서는 추가로 `03`, `04`, `08`을 읽는다.

---

## 금지

다음 세션에서 바로 하지 않는다.

- 최종 Hunt 전체를 한 번에 구현
- 최종 이미지 대량 제작
- 3D/FPS 엔진 도입
- NPC AI 프레임워크 구축
- 호감도/관계 점수
- Gather/Camp 복제 구현
- 기존 v0.1 UI에 손 그림/빨간 overlay만 붙이고 완료 처리
- 화려한 VFX로 장면 설계 부족을 덮기

---

## 현재 검증 상태

이번 변경은 설계/문서 변경이다.

기존 runtime 기능 기준선은 보존한다. PR/CI에서 install, typecheck, 기존 tests, production build를 다시 확인한다.
