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
    'GIR-SURFACE-30: 표면/렌더링 사실성 목표는 30/100, 허용대역은 25–35다. 이 숫자는 해부 정확도 점수가 아니다.',
    'Grounded Illustrative Realism: 관절·무게·공간·접촉은 현실적으로 납득되지만 화면은 normal viewing에서 즉시 일러스트로 읽혀야 한다.',
    '인물 동일성은 얼굴 구조·헤어 실루엣·체형·정확한 canonical 비율·의복 실루엣으로 유지하며 micro-realism보다 우선한다.',
    '피부는 broad plane/value와 대표 주름 중심이다. 모공·잔털·혈관·피부 얼룩을 사진처럼 누적하지 않는다.',
    '머리카락은 mass/silhouette와 소수의 큰 strand group으로 읽히며 사진처럼 개별 모발 field가 지배하지 않는다.',
    '손톱은 구조 확인용 단순 형태/명암만 사용하고 macro reflection·cuticle detail을 강조하지 않는다.',
    '돌·흙·의복은 큰 면·거칠기·무게·fold group으로 구분하고 미세 균열·섬유·grain을 사진 밀도로 묘사하지 않는다.',
    '재사용 actor/body/item master는 투명 분리 또는 extraction-safe 파생이 가능하도록 clean silhouette를 유지한다.',
    '사람/손/도구/세계가 같은 GIR-30 detail density와 surface treatment를 공유한다.',
    '빛은 자연스럽고 정보가 읽히며 영화 포스터식 HDR·bokeh·lens staging으로 분리하지 않는다.',
    '아동 친화적이되 chibi/cartoon으로 가지 않는다. 단순화는 표면에 적용하고 기능적 해부·접촉·원근에는 적용하지 않는다.',
  ],
  forbiddenDrift: [
    'GIR-SURFACE-30 허용대역보다 명백히 높은 photoreal/semireal surface tier',
    '사진 촬영물처럼 보이는 skin pore field / beauty portrait rendering',
    '개별 모발이 사진처럼 과밀하게 렌더링되어 silhouette보다 우선함',
    '손/팔의 잔털·혈관·모공·손톱 반사가 정체성 정보처럼 과도하게 보임',
    '바위·흙·털·직물이 macro/product-photo texture density로 묘사됨',
    'bokeh/lens flare/chromatic aberration/sensor-film noise 같은 사진 렌즈 언어',
    '얕은 photographic depth-of-field가 재사용 인물/신체 외곽을 녹임',
    'AAA 광고 포스터식 cinematic grading',
    'fantasy barbarian concept-art 방향',
    '장면마다 brush/texture/contrast/detail level이 달라짐',
    '배경은 회화적인데 인물만 사진처럼 합성된 스타일 불일치',
    '재사용 transparent asset에 눈에 보이는 alpha halo/background contamination이 남음',
    'generic AI fog/bloom이 행동 정보를 가림',
    '표면 단순화가 지나쳐 cartoon/chibi 형태로 이동함',
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
