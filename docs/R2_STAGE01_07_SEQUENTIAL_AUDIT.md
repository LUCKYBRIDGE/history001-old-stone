# R2 Stage 01~07 Sequential Audit v2

> **문서 지위: Historical Audit Record / Non-Canonical.**
>
> 최신 설계 판단은 `docs/00_CANONICAL_BASELINE.md`와 Stage 01~07 canonical 문서를 따른다.
>
> 목적: 여러 차례의 R2 리비전에서 무엇이 문제였고 무엇을 해결했는지 기록한다. 이 문서의 과거 버전 번호·테스트 수·구형 예시는 최신 canonical 계약을 덮지 않는다.

---

# 1. 감사 범위

순서:

```text
Stage 01
→ Stage 02
→ Stage 03
→ Stage 04
→ Stage 05
→ Stage 06
→ Stage 07 runtime
```

판정 축:

- 상위 헌법 충돌
- Role-True limited POV
- Embodied First-Person
- 관계/감정/공포
- Choice Fairness
- Same-Day time model
- Curriculum Anchor 정확성
- Fact / Reconstruction 경계
- 구현 가능성
- 과설계
- 자동검증과 Human QA의 구분

---

# 2. 핵심적으로 해결한 구조 문제

## A. 플레이 순서와 세계 시간 혼동

해결:

# **Student Play Order ≠ In-World Time**

Hunt/Gather/Camp는 같은 Day 1의 다른 관점이다.

## B. Scene 과세분화

해결:

# **Scene ≠ Beat**

- Scene = 목표/행동/위치/결과/관계 변화
- Beat = gaze/dialogue/body/treatment/terminology reveal

## C. 감정 안전의 과보정

과거 일부 문서는 죄책감·공포를 지나치게 억제했다.

최신 해결:

- 역사 상황에서 자연스러운 공포·죄책감·후회 허용
- 학생 인격 판정/도덕 점수/강압만 금지

## D. 개발 메타 UI 노출

해결:

- Player / Teacher / Debug 분리
- Stage/reducer/evidence/internal anchor는 Player에 노출하지 않음

---

# 3. Curriculum Anchor 감사에서 해결한 문제

## 뗀석기 / 주먹도끼

이전 위험:

- 두 용어를 병렬 표기해 동의어처럼 보일 수 있었음

최신 해결:

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

- `chipped-stone-term-revealed`
- `handaxe-term-revealed`

Evidence도 분리.

## 거처

이전 위험:

- cave가 current shelter보다 강하게 보여 `구석기 집 = 동굴`로 남을 수 있음
- cave cue에서 아직 경험하지 않은 막집을 조기 비교함

최신 해결:

```text
Stage 07: 현재 임시 거처 존재
→ Camp: 생활/손질 뒤 막집 명명

Hunt: 자연 거처 후보 발견/살핌
→ 동굴 / 바위 그늘 명명
```

막집과 동굴/바위 그늘은 경쟁 정답이 아니다.

## Fact / Reconstruction

최신 해결:

- source-supported 개념 = Fact
- R/H1/H2, 특정 Day 1 사건 = Reconstruction
- Player flow는 관리 라벨로 끊지 않음
- Teacher/Debug에서 경계 확인

---

# 4. Stage별 현재 설계 결론

## Stage 01

- 프로젝트 헌법 정리
- Role-True POV / Embodied / 감정 / 선택 / 교과 / 역사 경계 통합

## Stage 02

- Same-Day 구조
- 역할별 Curriculum Anchor 분산
- Learning Invariant / Narrative Variant 분리

## Stage 03

- Hunt를 관계→도구→멀어짐→흔적→딜레마→새 장소→위험→결과→귀환 서사로 정리

## Stage 04

- Scene/Beat 경계
- 구현 가능한 interaction spec
- terminology timing/evidence 분리

## Stage 05

- Hunt/Gather/Camp 고유 문법
- 도구/불/거처/이동을 역할마다 다른 의미로 재경험

## Stage 06

- React/TypeScript 최소 계약
- Same-Day / Curriculum / Embodied / Teacher-Debug 계약
- 별도 보정 문서를 Stage 06 본문에 흡수해 기술 SSOT 단일화

## Stage 07

- 실제 Browser Skeleton 구현
- 자동검증 수행
- Human visual/immersion/curriculum/misconception QA는 별도 Gate

---

# 5. Stage 07 현재 proof가 담당하는 것

```text
사냥 관점
→ 새벽 불 + 현재 임시 거처
→ R의 도구 전달
→ 뗀석기 → 대표적인 예: 주먹도끼
→ held-item continuity
→ H1/H2와 출발
→ current shelter가 멀어짐
→ crouch observation
→ 한동안 이동
→ 동굴/바위 그늘 후보 발견/평가
→ 짧은 용어 연결
→ 다른 사람 관점 proof
```

담당하지 않는 것:

- 주먹도끼 실제 다용도 사용 완성
- Camp 막집 경험/명명 완성
- 불 기능 전체 상호작용
- Hunt 전체 추적/위험/결과/귀환
- 학생 개념 이해 증명

---

# 6. 현재 자동검증 정보의 소유권

정확한 최신:

- SHA
- CI run ID
- test file count
- test count

는 이 Audit 문서에 고정하지 않는다.

다음이 소유한다.

- `PROJECT_STATUS.md`
- `handoff/TEST_REPORT.md`

이 문서는 구조적 결론만 보존한다.

---

# 7. 현재 공식 다음 Gate

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

Human Gate에서 확인:

- 몸/도구 spatial relation
- R/H1/H2 존재감
- current shelter가 현대 집/텐트 아이콘처럼 보이지 않는지
- `뗀석기 → 주먹도끼` 관계 이해
- terminology reveal 몰입 영향
- cave 공간감/거리감
- Fact / Reconstruction 구분
- reduced effects parity
- 주요 오개념

Human Gate 통과 전 Stage 08을 시작하지 않는다.

---

# 8. 최종 감사 결론

# **설계 방향을 계속 추가하는 것보다, canonical 문서를 하나의 용어와 계약으로 유지하고 실제 Human QA 증거로 다음 변경을 결정해야 하는 단계에 도달했다.**

과거 Audit 기록과 최신 canonical이 충돌하면 최신 canonical을 따른다.
