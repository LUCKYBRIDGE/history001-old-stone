# AGENTS.md

이 저장소는 초등학생용 **구석기 신체화 1인칭 역사 체험 웹게임**의 작업 규칙이다.

현재 장기 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

현재 운영 상태와 문서 위계는 가장 먼저:

- `docs/00_CANONICAL_BASELINE.md`

를 따른다.

기존 Hunt v0.1은 **Legacy Functional Prototype**으로만 보존한다.

---

# 1. 새 작업 세션 시작 순서

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. `docs/01_PROJECT_CORE.md`
7. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
8. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
9. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
10. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
11. `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
12. 해당 Stage canonical 문서
13. 관련 handoff / code / tests

현재 Stage 07.5 작업에서는 추가로 반드시:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`
- `handoff/STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`

를 읽는다.

Audit/Legacy 문서는 필요할 때만 참고한다.
과거 채팅 기억보다 최신 GitHub canonical을 우선한다.

---

# 2. 핵심 정체성

학생이 구석기 시대를 밖에서 관찰하는 자료가 아니다.

# **학생이 공동체 구성원의 몸과 눈으로 그 순간을 살아보고, 다른 사람의 관점도 경험하면서 당시 삶의 조건·도구·감정·관계·위험·판단을 역사적으로 상상하고 이해하게 한다.**

학습 흐름:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Naming / Conceptualization
```

교과 연결:

# **Experience → Name → Reuse → Connect**

---

# 3. Curriculum Guardrail

핵심 Anchor:

- 뗀석기
- 주먹도끼
- 불의 이용
- 막집
- 동굴 / 바위 그늘 생활
- 먹을 것을 찾아 옮겨 다니는 생활
- 사냥·채집·생활 가공

정확한 관계:

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

학생용 연결 예:

> **뗀석기**  
> 돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다. 지금 손에 든 것은 그 대표적인 예인 **주먹도끼**다.

금지:

- `뗀석기 = 주먹도끼`
- 시작부터 유물 목록
- 장문의 교과 모달
- 즉시 객관식/OX
- 상시 이름표
- 교과 cue 때문에 story/action 중단

---

# 4. 거처 용어

## 현재 임시 거처

처음 보는 현재 공동체 생활 공간의 중립적 표현.

## 막집

교과서 핵심 용어. Camp에서 거처를 실제로 보고/손질한 뒤 명명하는 기본 경로.

## 동굴 / 바위 그늘

자연 지형을 이용한 생활 공간.

막집과 동굴/바위 그늘을 경쟁 정답으로 만들지 않는다.
동굴은 유일한 집/막집 업그레이드/자동 새 집/자동 공포 던전이 아니다.

---

# 5. Historical Integrity / Chronology

Historical / Curriculum Fact와 Reconstructed Event를 구분한다.

Historical anchor 예:

- 뗀석기 사용
- 주먹도끼의 다용도성
- 이동 생활
- 불 이용
- 막집
- 동굴/바위 그늘 생활

Reconstruction 예:

- 아루/다무/누아
- 특정 아침 handoff
- 구체 camp layout
- 특정 route / landmark
- 구체 대사/감정/선택 결과

Player flow를 `[재구성]` 라벨로 반복 중단하지 않는다.
Teacher/Debug에서 사실/재구성 경계를 확인할 수 있어야 한다.

공식 visual framing:

# **Korean Paleolithic Educational Composite / Element-level Provenance**

confidence marker:

- `[H]` Historical anchor
- `[C]` Comparative reference
- `[R]` Reconstruction choice
- `[D]` Deferred / non-diagnostic

# **Chronology Coherence Gate**

서로 다른 구석기 시기/유적의 구체 복원을 `구석기`라는 이유만으로 무비판적으로 합치지 않는다.

---

# 6. Same-Day / Limited Knowledge

# **Student Play Order ≠ In-World Time**

```text
Same Day 1
├─ Hunt
├─ Gather
└─ Camp
```

- 역할 완료마다 하루 증가 금지
- 역할 순서가 달라도 동일 `dayId`
- 한 역할 결과로 이미 일어난 과거를 소급 변경 금지
- 세 관점 뒤 Common Evening 한 번

# **World Truth ≠ Character Knowledge**

현재 캐릭터가 직접 보거나 함께 겪거나 전달받은 범위만 안다.

---

# 7. Role-True Perspective

Player-facing 정보는 현재 인물이 실제로:

- 보는 것
- 듣는 것
- 이미 아는 것
- 주변 사람이 드러낸 것

범위 안에 있어야 한다.

Perspective proof에서 메타 제목으로 정답을 먼저 주지 않는다.

---

# 8. Embodied First-Person

기본 화면:

# **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 주변 사람 + 현재 행동 + 빛/소리**

- body is not HUD
- 모든 장면 아래 고정 손 PNG 금지
- pose에 따라 몸 가시성 변화
- 동일 역할 body/tool/light continuity 유지
- 사람과 내 몸이 같은 공간처럼 보여야 함
- action affordance도 fixed footer/HUD가 되지 않음

---

# 9. 주먹도끼 Guardrail

```text
받음
→ 뗀석기 상위 개념 + 주먹도끼 대표 예 명명
→ 손에 계속 존재
→ 이후 실제 생활 행동에서 재사용
→ 다른 역할/저녁에서 재등장
```

사냥 전용 무기로 축소하지 않는다.
단순 receive proof와 실제 다용도 사용 evidence를 구분한다.

Stage 07.5 continuity:

- right-hand dominant production attribute
- same canonical object
- grip-base continuity
- off-frame이어도 state상 계속 들고 있음
- inventory pop / FPS weapon lock 금지

---

# 10. 관계 / Emotional Reality

관계는 호감도 점수가 아니라 shared event와 이후 반응이다.

가능:

- 기대
- 흥분
- 두려움/공포
- 걱정
- 책임감
- 죄책감/후회
- 아쉬움
- 성취감
- 안도

안전 = 감정 제거가 아니다.

금지:

- NPC 모욕/조롱
- 학생 인격 판정
- 죄책감만으로 숨은 정답 강요
- 호감도/도덕 점수

---

# 11. Choice / Consequence

# **Choice Fairness = 결과 평등이 아니라 결과의 납득 가능성**

- 필요한 정보가 선택 전에 존재
- 결과가 앞선 조건과 연결
- 더 나쁜 결과/후회 가능
- 필수 교과 개념을 특정 선택 하나가 독점하지 않음

---

# 12. Threat / Horror

역사적 상황/자연의 불확실성과 연결된 긴장은 허용한다.

가능:

- 어둠
- 시야 밖 소리/움직임
- 갑작스러운 정지
- 미지의 안쪽 공간
- 짧은 놀람
- 회피/도주
- rare strong accent

Stage 07.5 natural shelter discovery를 자동 공포 장면으로 고정하지 않는다.
Explicit animal-threat evidence는 Stage 08 threat logic과 함께 검토한다.

---

# 13. Screen Treatment

# **Subtle by default. Strong when earned.**

가능:

- fire warmth
- dusk shift
- cave exposure
- focus/vignette
- sway/jolt
- blink/fade
- 짧은 red/dark accent

Reduced Effects에서도 같은 사건·판단·학습이 유지돼야 한다.

---

# 14. Scene ≠ Beat

Scene:
- 목표·직접 행동·위치·결과·관계/world memory가 의미 있게 변하는 단위

Beat:
- 시선·정적·대사·손 transition·용어 reveal·화면 효과 같은 Scene 내부 변화

모든 연출/대사를 reducer state로 만들지 않는다.

---

# 15. 역할 경계

## Hunt

거리 / 흔적 / 주먹도끼 / 추적 / 자연 위험 / 새 장소 / 귀환

## Gather

가까운 관찰 / 채집 / 도구 재사용 / 가공 / 공간 기억

## Camp

불 / 현재 임시 거처와 막집 / 생활 유지 / 가공 / 기다림 / 재회

Hunt의 추적/공포 문법을 Gather/Camp에 복제하지 않는다.

---

# 16. 기술 구조

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

유지:

- React + TypeScript + Vite
- role feature 독립
- qualitative `RoleCompletion`
- explicit small state
- stable checkpoint

금지:

- generic Scene Engine
- generic Curriculum Engine
- 범용 NPC AI
- 대규모 Dialogue Engine
- procedural narrative
- FPS/3D 엔진 선행
- generic VFX engine
- 전역 관계 점수

`docs/06_TECH_BLUEPRINT.md`가 유일한 Technical SSOT다.

---

# 17. Curriculum Runtime 용어

- Curriculum Anchor: 내부 안정 ID
- Terminology Reveal: 경험 뒤 짧은 명명 beat
- Learning Evidence: 학생 점수가 아닌 QA/자동검증 증거

학생에게 internal ID를 노출하지 않는다.

---

# 18. Player / Teacher / Debug

Player 금지:

- Stage 번호
- reducer state
- evidence ID
- curriculum internal ID
- 개발 toolbar
- reconstruction metadata

Player 허용:

- 직접 행동
- 짧은 terminology reveal
- 필요한 최소 orientation

개발 환경:

- `?legacy=1`
- `?teacher=1`
- `?debug=1`

---

# 19. 현재 Stage 07.5 범위와 판정

현재 main causal proof:

```text
눈뜨기 전 community life
→ 눈을 뜸
→ 생활 속 아루 인식
→ handaxe handoff
→ 뗀석기 / 주먹도끼 naming
→ 다무/누아와 출발
→ camp recedes
→ 다무가 먼저 멈춤
→ Player crouch
→ ground evidence
→ 누아 attention shift
→ Player gaze follow
→ natural shelter reveal
→ inspect / 동굴·바위 그늘 naming
→ same-moment Aru-side perspective proof
```

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition Review In Progress / Implementation Frozen**

현재 prototype은 final production composition이 아니다.

---

# 20. 현재 다음 공식 Gate

# **Project-owner Scene Composition Confirmation**

주 문서:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`
- `handoff/STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`

Review에서 잠근 주요 보정:

- SC03→04 terminology와 world movement 동시 진행
- SC05 physically plausible diagonal departure geometry
- SC08~10 handaxe continuous off-frame/re-entry
- SC11 SC05 Stage A temporal sync
- action affordance fixed-HUD 금지

Project-owner confirmation 전:

- runtime/CSS remediation 금지
- production image generation 금지
- Stage 08 금지

확인 뒤:

```text
Bible v2.x consolidation
→ Previsual Approval
→ Visual Production Readiness
→ minimum coherent production set
→ runtime/asset implementation
→ Human Visual QA
```

# **Human Gate는 계속 FAIL이며 Stage 08은 BLOCKED다.**

---

# 21. 완료 판정

구분:

- Design PASS
- Implementation Complete
- Automated PASS
- Project-owner Scene Confirmation
- Previsual Approval
- Human QA PASS
- Visual Production Ready
- Stage Complete

자동 CI만으로 Immersion/Curriculum/Human PASS를 선언하지 않는다.
Human QA PASS도 Student Pilot PASS가 아니다.

---

# 22. 세션 종료

코드/설계를 변경했다면:

1. canonical 문서 정합성 확인
2. typecheck
3. tests
4. production build
5. `PROJECT_STATUS.md`
6. `handoff/CURRENT_HANDOFF.md`
7. 필요 시 `handoff/TEST_REPORT.md`
8. 실제 GitHub SHA/CI 확인

최신 exact SHA/run은 GitHub/Actions가 최종 진실 공급원이다.
