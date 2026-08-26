# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 01~07 Canonical Unification 통합 완료 / Automated PASS / Human QA 대기**

공식 기준선:

- `docs/00_CANONICAL_BASELINE.md`

시각 제작 보완 계약:

- `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`

핵심 교과 문법:

# **Experience → Name → Reuse → Connect**

도구 위계:

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

---

# 1. 새 세션 읽기 순서

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. Stage 01~07 해당 canonical 문서
7. `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
8. 관련 코드/tests

Non-canonical 기록/전환 문서:

- `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`
- `docs/R2_STAGE01_DEEP_AUDIT_REPORT.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`

---

# 2. 최신 canonical 버전

- `docs/01_PROJECT_CORE.md` — **v9**
- `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md` — **v3**
- `docs/02_EXPERIENCE_STRUCTURE.md` — **v9**
- `docs/03_HUNT_STORY.md` — **v8**
- `docs/04_HUNT_PLAYFLOW.md` — **v8**
- `docs/05_ROLE_EXPERIENCE_MAP.md` — **v8**
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — **v6**
- `docs/06_TECH_BLUEPRINT.md` — **v8 / single tech SSOT**
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — **v7**
- `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md` — **v1 / visual production contract**

`docs/06A_CURRICULUM_RUNTIME_CONTRACT.md`는 Stage 06 v8에 흡수되어 삭제됐다.

07A는 Technical SSOT가 아니다. 실제 runtime 타입/manifest 구조를 구현할 때는 `docs/06_TECH_BLUEPRINT.md`의 정식 후속 버전에 흡수한다.

---

# 3. 공식 용어

## 도구

- `뗀석기` = 상위 개념
- `주먹도끼` = 대표적인 구체 예

## 거처

- `현재 임시 거처` = Stage 07 초기 중립적 표현
- `막집` = Camp에서 실제 생활/손질 뒤 명명
- `동굴 / 바위 그늘` = 자연 지형 생활 공간

---

# 4. Fact / Reconstruction

Fact:

- 뗀석기
- 주먹도끼의 대표성/다용도성
- 이동 생활
- 막집
- 동굴/바위 그늘 생활
- 불의 이용

Reconstruction:

- R/H1/H2
- 특정 아침 도구 전달
- 이 Day 1의 구체 거처 배치
- 특정 자연 거처 후보 발견
- 구체 대사/감정/선택 결과

Player에는 관리 metadata를 노출하지 않는다.
Teacher/Debug에서만 확인한다.

---

# 5. Stage 07 현재 Player 흐름

package:

```text
0.0.0-r2-stage07-curriculum-hardened
```

```text
사냥 관점
→ 새벽 불 + 현재 임시 거처
→ R에게 돌도구 받기
→ 뗀석기 상위 개념
→ 지금 손의 대표 예 = 주먹도끼
→ held-item continuity
→ H1/H2와 출발
→ 현재 거처가 멀어짐
→ crouch observation
→ 한동안 이동
→ 자연 거처 후보 발견
→ 장점/불확실성 평가
→ 동굴 / 바위 그늘 짧은 연결
→ 같은 날 다른 사람 관점 proof
```

Stage 07은 전체 Hunt가 아니다.

---

# 6. Canonical unification에서 실제로 바뀐 것

- `docs/00_CANONICAL_BASELINE.md` 신설
- 문서 우선순위/완료 판정/공식 용어 통일
- Stage 06A 보정 문서를 Stage 06 v8에 흡수 후 삭제
- Audit/Legacy 문서를 non-canonical로 명시
- current shelter를 비대칭 cover/poles/opening primitive로 변경
- Teacher reconstruction note 범위를:
  - 공동체 인물/거처 배치
  - 특정 아침 도구 전달
  - 특정 자연 거처 후보 발견
  로 통일
- Player reconstruction metadata 미노출 테스트 추가
- package baseline을 `curriculum-hardened`로 통일

후속 시각 계획 보완:

- 공개 1인칭 게임/오픈소스 사례를 참고한 `07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md` 추가
- viewmodel/world-model 분리 원칙을 3D FPS 그대로 도입하지 않고 2D `Embodied Composite`로 번역
- `World Plate + Occlusion + Actor + Body + Held/Contact Item + Light + Treatment + Minimal UI` 레이어 계약 추가
- Player Body / Camera Profile / Cast / Handaxe / Shelter / Environment Scene Family의 anchor-first 생성 원칙 추가
- responsive crop / normalized contact anchor / grip / occlusion / lighting continuity QA 추가
- 생성 자산 provenance 및 historical reference 출처 추적 원칙 추가

---

# 7. 자동검증 기준선

PR #15 canonical/runtime content:

- content head: `e40208b0d6e8fbf3a2949af2ef1fbaf6704b6849`
- CI `32926349166` — PASS
- exact PR-head CI `32926520525` — PASS
- Node 24.19.0
- npm 11.17.0
- **8 test files / 35 tests PASS**
- Stage 07 Skeleton integration tests: **10**
- production build PASS

정적 handoff 파일은 최신 main CI 번호를 다시 써서 CI 루프를 만들지 않는다. 최신 exact repository HEAD/CI는 GitHub 상태가 최종 기준이다.

07A 및 이 handoff 수정은 문서/계획 보완이며 기존 Stage 07 runtime 자동검증 범위를 확장했다고 과장하지 않는다.

---

# 8. 개발 URL

- Player: `http://localhost:5173/`
- Teacher: `http://localhost:5173/?teacher=1`
- Debug: `http://localhost:5173/?debug=1`
- Legacy Hunt: `http://localhost:5173/?legacy=1`

---

# 9. 다음 공식 작업

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

프로토콜:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

반드시 확인:

- 역할 진입
- body/tool spatial relation
- R/H1/H2 존재감
- current shelter가 현대 집/텐트 아이콘처럼 보이지 않는지
- `뗀석기 → 주먹도끼` 실제 이해
- terminology cue 몰입 영향
- natural shelter 공간감/거리감
- 주거 형태 오개념
- Fact / Reconstruction 교사 이해
- reduced effects parity
- Perspective transition

07A 관점에서 추가로 관찰:

- 현재 placeholder의 body/contact 구도가 production 이미지로 치환 가능한가?
- R의 손 → 도구 → 내 손 접촉 동선이 공간적으로 읽히는가?
- body/tool이 화면 아래 고정 HUD처럼 느껴지는가?
- current shelter/cave의 primary attention target이 일반적인 화면비에서도 유지될 구조인가?
- 장면마다 새 배경 한 장을 갈아끼우는 slideshow 구조로 굳어질 위험은 없는가?

Human Gate PASS 전 Stage 08 전체 Hunt 구현 금지.

---

# 10. Human Gate PASS 직후 Stage 08 첫 작업 묶음

코드 확장이나 최종 이미지 대량 생성부터 시작하지 않는다.

```text
1. Historical / Visual Reference Pack 확정
2. Player Body Continuity + Camera Profiles
3. R/H1/H2 Cast Anchor Sheets
4. canonical Handaxe Anchor Sheet
5. Current Shelter / Terrain / Cave / Fire Scene Families
6. Scene별 contact / grip / occlusion / crop-safe keyframe
7. Stage 06 Technical SSOT에 최소 visual manifest/anchor 계약 정식 흡수
8. Hunt minimum coherent production asset set 생성
9. Browser Embodied Composite 통합
10. Visual Continuity QA
11. 실제 handaxe reuse / pursuit / threat / result / return 구현 확장
```

Minimum coherent production asset set은 적어도:

- fire-rest
- receive-reach
- tool-inspect
- walking-carry
- crouch-observe
- cave-inspect
- fatigued-return
- firelight-relief

의 body flow와, 동일 R/H1/H2 / 동일 주먹도끼 / 동일 하루 환경 continuity를 증명해야 한다.

---

# 11. Stage 01~07 시각 보완 판정

07A 기준 현재 결론:

- Stage 01A — 핵심 철학 유지, camera/contact/occlusion 해석 보강 필요
- Stage 01C — treatment 전에 physical-looking lighting integration 보강 필요
- Stage 02 — same-day shared visual anchors 보강 필요
- Stage 03 — handaxe/distance/light/fatigue visual checkpoints 보강 필요
- Stage 04 — Scene production checklist에 visual asset fields 보강 필요
- Stage 05/05A — 역할별 body vocabulary / Visual Production Readiness 보강 필요
- Stage 06 — Stage 08 구현 시 minimal visual manifest/anchor 타입으로 정식 버전업 필요
- Stage 07 — 기존 Human QA 유지 + production-replaceability 질문 추가

이는 Stage 01~07 전체 재설계를 뜻하지 않는다.

---

# 12. Stage 08 이후 책임

아직 완료가 아님:

- 주먹도끼 실제 땅파기/두들기기/자르기·손질
- 주먹도끼 다용도성 실제 체감
- production-quality first-person body / cast / tool / environment integration
- visual continuity / responsive composition QA
- Camp current shelter 생활/손질 뒤 `막집` 명명
- 불의 여러 기능 실제 행동
- 완성 Hunt 추적/위협/결과/귀환
- cave consequence
- Camp cave recontextualization
- Student Pilot

Legacy Hunt v0.1은 회귀/비교 기준으로 유지한다.
