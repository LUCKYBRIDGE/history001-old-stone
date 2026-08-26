# 구석기 역사 체험 웹게임
## Stage 06A — Curriculum Runtime Correction Contract v1

> 상태: **Canonical supplement**
>
> 목적: `docs/06_TECH_BLUEPRINT.md` v7의 Curriculum Anchor / Terminology Reveal 예시 중 Stage 01E v2와 충돌하는 부분을 교정한다. 이 문서는 06 v7의 §8~10 및 Stage 07 curriculum proof에 대해 우선한다. 다음 Stage 06 전면 버전업 때 본 내용을 본문으로 흡수한다.

---

# 1. 문제

기존 06 v7 예시는 다음처럼 단일 anchor를 전제했다.

```ts
interface TerminologyReveal {
  anchorId: CurriculumAnchorId;
  title: string;
  description: string;
}
```

또 `뗀석기 · 주먹도끼`를 하나의 제목으로 병렬 표시했다.

이 방식은

- 뗀석기 = 상위 개념
- 주먹도끼 = 대표적인 구체 예

라는 교과 관계를 흐릴 수 있다.

---

# 2. Corrected Terminology Reveal Contract

한 cue가 상위 개념과 구체 예를 함께 연결해야 할 때 복수 anchor를 허용한다.

```ts
export interface TerminologyReveal {
  anchorIds: readonly CurriculumAnchorId[];
  title: string;
  description: string;
  teacherSummary?: string;
}
```

Stage 07 주먹도끼 예:

```ts
{
  anchorIds: ['paleolithic-chipped-stone', 'handaxe'],
  title: '뗀석기',
  description:
    '돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다. 지금 손에 든 것은 그 대표적인 예인 주먹도끼다.',
  teacherSummary: '뗀석기 → 대표적인 예: 주먹도끼',
}
```

학생에게 internal anchor ID는 노출하지 않는다.

---

# 3. Evidence를 분리한다

Stage 07 권장 evidence:

- `tool-received-in-embodied-context`
- `chipped-stone-term-revealed`
- `handaxe-term-revealed`
- `embodied-observation-performed`
- `natural-shelter-evaluated`
- `cave-shelter-term-revealed`

중요:

- `tool-received-in-embodied-context` ≠ 기능적 도구 사용 학습 완료
- `handaxe-term-revealed` ≠ 주먹도끼의 다용도성 경험 완료

Stage 08 이후 실제 생활 행동을 구현한 뒤에만:

- `tool-reused-in-living-action`
- `handaxe-multiple-uses-experienced`

같은 evidence를 추가한다.

---

# 4. Current Shelter Before Cave Guardrail

Stage 07에서 동굴을 발견하기 전에 현재 공동체가 이미 사용하는 생활 공간의 존재가 화면/스토리에서 느껴져야 한다.

최소 proof:

- 새벽 불 가까이에 임시 거처 silhouette/shape가 존재.
- 출발 때 불·사람·임시 거처가 함께 멀어짐.
- 이 단계에서 `막집` 용어를 억지로 먼저 설명할 필요는 없음.

목적:

`동굴 = 구석기의 유일한 집` 오개념을 예방한다.

---

# 5. Cave Cue Guardrail

동굴 발견/살핌 뒤 student-facing cue:

```text
동굴 / 바위 그늘
구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.
```

이 시점에서 아직 직접 명명하지 않은 `막집`을 비교 설명으로 끌어오지 않는다.

막집은 Camp에서 실제 임시 거처를 보고/손질한 뒤 명명하는 것을 우선한다.

---

# 6. Historical Reconstruction Metadata

다음은 서로 다른 층이다.

## Source-supported anchor

- 구석기 사람들이 동굴/바위 그늘을 생활 공간으로 이용함.

## Reconstructed event

- 오늘 Hunt 인물들이 이동 중 특정 자연 거처 후보를 발견함.
- H2가 멈춰 그것을 바라봄.
- 함께 가까이 가 평가함.

Player flow를 매번 `[재구성]` 라벨로 끊지는 않는다.

대신 Teacher/Debug surface에서 다음과 같이 구분 가능해야 한다.

```text
역사적 재구성: 이 날 이 사람들이 이 거처 후보를 발견하는 구체 사건
```

---

# 7. Terminology Budget

- 한 순간 한 개념 묶음.
- 1~2문장.
- 경험 뒤 명명.
- 중요한 감정/위협 peak와 겹치지 않음.
- 같은 개념을 매 Scene 다시 설명하지 않음.

---

# 8. Automated Contract

Stage 07 integration tests는 최소 다음을 잠근다.

1. 현재 임시 거처가 cave 발견 전에 존재.
2. `뗀석기`가 주먹도끼의 상위 개념으로 설명됨.
3. cue에 `paleolithic-chipped-stone`과 `handaxe`가 모두 내부 연결됨.
4. handaxe가 명명 뒤에도 held item으로 유지됨.
5. cave를 먼저 발견/살핀 뒤 용어가 나타남.
6. cave cue에 아직 배우지 않은 `막집`을 끌어오지 않음.
7. Teacher/Debug에서 구체 cave 발견 사건을 재구성으로 구분 가능.
8. Player에는 internal anchor/evidence/reconstruction 관리 정보가 노출되지 않음.

---

# 9. 과설계 금지

이 보완 때문에 다음을 만들지 않는다.

- Curriculum Engine
- ontology framework
- 교과서 DB
- item taxonomy engine
- generic reconstruction metadata engine

Stage 07은 component-local explicit state와 test로 충분하다.
