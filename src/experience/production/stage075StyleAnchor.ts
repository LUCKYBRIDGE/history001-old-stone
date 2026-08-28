import {
  getStage075AnchorBundleApprovedPaths,
  getStage075AnchorReviewBundle,
  isStage075AnchorReviewBundleComplete,
  type Stage075AnchorReviewBundle,
} from './stage075AnchorReviewBundle';

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
    'Grounded Illustrative Realism: 현실적인 해부·공간·접촉 + 절제된 일러스트 표면.',
    '인물 동일성은 얼굴 구조·헤어 실루엣·체형·의복 실루엣으로 유지하며 micro-realism보다 우선한다.',
    '피부는 broad plane/crease 중심이며 normal viewing에서 pore-field가 주된 정보가 되지 않는다.',
    '머리카락은 mass/silhouette가 먼저 읽히며 사진처럼 개별 모발 field가 지배하지 않는다.',
    '재사용 actor/body/item master는 투명 분리 또는 extraction-safe 파생이 가능하도록 clean silhouette를 유지한다.',
    '사람/손/도구/세계가 같은 detail density와 surface treatment를 공유한다.',
    '빛은 자연스럽고 정보가 읽히며 영화 포스터식 과도한 HDR/색보정을 피한다.',
    '아동 친화적이되 그림책식 단순화나 chibi/cartoon 비율로 가지 않는다.',
  ],
  forbiddenDrift: [
    '사진 촬영물처럼 보이는 skin pore field / beauty portrait rendering',
    '개별 모발이 사진처럼 과밀하게 렌더링되어 silhouette보다 우선함',
    'bokeh/lens flare/chromatic aberration/sensor-film noise 같은 사진 렌즈 언어',
    '얕은 photographic depth-of-field가 재사용 인물/신체 외곽을 녹임',
    'AAA 광고 포스터식 cinematic grading',
    'fantasy barbarian concept-art 방향',
    '장면마다 brush/texture/contrast/detail level이 달라짐',
    '배경은 회화적인데 인물만 사진처럼 합성된 스타일 불일치',
    '재사용 transparent asset에 눈에 보이는 alpha halo/background contamination이 남음',
    'generic AI fog/bloom이 행동 정보를 가림',
  ],
};

export function isStage075StyleAnchorApproved(
  anchor: Stage075StyleAnchor = STAGE075_STYLE_ANCHOR,
  bundle: Stage075AnchorReviewBundle | null = getStage075AnchorReviewBundle(anchor.id),
) {
  if (!bundle || bundle.anchorId !== anchor.id || anchor.status !== 'anchor-approved' || !isStage075AnchorReviewBundleComplete(bundle)) {
    return false;
  }

  const bundlePaths = getStage075AnchorBundleApprovedPaths(bundle);
  const approvedPaths = anchor.approvedReferencePaths ?? [];

  return (
    approvedPaths.length === bundlePaths.length &&
    bundlePaths.every((path) => approvedPaths.includes(path))
  );
}
