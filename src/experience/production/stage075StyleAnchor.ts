export type Stage075StyleAnchorId = 'STYLE-GIR-V1';

export type Stage075StyleAnchorStatus =
  | 'spec-locked'
  | 'reference-pending'
  | 'anchor-approved';

export interface Stage075StyleAnchor {
  id: Stage075StyleAnchorId;
  status: Stage075StyleAnchorStatus;
  immutableTraits: readonly string[];
  forbiddenDrift: readonly string[];
  approvedReferencePaths?: readonly string[];
}

export const STAGE075_STYLE_ANCHOR: Stage075StyleAnchor = {
  id: 'STYLE-GIR-V1',
  status: 'reference-pending',
  immutableTraits: [
    'Grounded Illustrative Realism: 현실적인 해부·공간·접촉 + 절제된 일러스트 질감.',
    '피부 모공/렌즈 사진처럼 보이는 hyper-photoreal detail을 피한다.',
    '빛은 자연스럽고 정보가 읽히며 영화 포스터식 과도한 HDR/색보정을 피한다.',
    '사람/손/도구/세계가 같은 detail density와 surface treatment를 공유한다.',
    '아동 친화적이되 그림책식 단순화나 chibi/cartoon 비율로 가지 않는다.',
  ],
  forbiddenDrift: [
    '사진 촬영물처럼 보이는 극사실 skin/lens rendering',
    'AAA 광고 포스터식 cinematic grading',
    'fantasy barbarian concept-art 방향',
    '장면마다 brush/texture/contrast/detail level이 달라짐',
    '배경은 회화적인데 인물만 사진처럼 합성된 스타일 불일치',
    'generic AI fog/bloom이 행동 정보를 가림',
  ],
};

export function isStage075StyleAnchorApproved() {
  return Boolean(
    STAGE075_STYLE_ANCHOR.status === 'anchor-approved' &&
      STAGE075_STYLE_ANCHOR.approvedReferencePaths &&
      STAGE075_STYLE_ANCHOR.approvedReferencePaths.length > 0,
  );
}
