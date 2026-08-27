export type Stage075AnchorReviewBundleId =
  | 'STYLE-GIR-V1'
  | 'DAY1-HANDAXE-V1'
  | 'PLAYER-HUNT-BODY-V1'
  | 'ARU-IDENTITY-V1';

export type Stage075AnchorCandidateMode =
  | 'independent-exploration'
  | 'anchor-conditioned'
  | 'locked-keyframe-variation';

export interface Stage075AnchorCandidateBrief {
  mode: Stage075AnchorCandidateMode;
  instruction: string;
  reviewFocus: readonly string[];
  rejectCodes: readonly string[];
}

export interface Stage075AnchorReviewSlot {
  id: string;
  label: string;
  purpose: string;
  plannedRepositoryPath: string;
  required: boolean;
  approvedPath?: string;
  candidateBrief?: Stage075AnchorCandidateBrief;
}

export interface Stage075AnchorReviewBundle {
  anchorId: Stage075AnchorReviewBundleId;
  reviewOrder: number;
  slots: readonly Stage075AnchorReviewSlot[];
}

function slot(
  anchorId: string,
  id: string,
  label: string,
  purpose: string,
): Stage075AnchorReviewSlot {
  return {
    id,
    label,
    purpose,
    required: true,
    plannedRepositoryPath: `public/assets/stage075/anchors/${anchorId}/${id}.webp`,
  };
}

function styleSlot(
  id: string,
  label: string,
  purpose: string,
  instruction: string,
  reviewFocus: readonly string[],
  rejectCodes: readonly string[],
  mode: Stage075AnchorCandidateMode = 'independent-exploration',
): Stage075AnchorReviewSlot {
  return {
    ...slot('STYLE-GIR-V1', id, label, purpose),
    candidateBrief: {
      mode,
      instruction,
      reviewFocus,
      rejectCodes,
    },
  };
}

export const STAGE075_ANCHOR_REVIEW_BUNDLES: readonly Stage075AnchorReviewBundle[] = [
  {
    anchorId: 'STYLE-GIR-V1',
    reviewOrder: 0,
    slots: [
      styleSlot(
        'human-mid',
        'Human mid-shot',
        '인물 해부와 surface treatment의 사실성 상한을 잠근다.',
        '이름 없는 fictional community member를 중간 거리에서 보여주는 style-only test. 자연스러운 사람 비율, 절제된 피부/머리/의복 질감, low-specificity covering을 사용하고 Aru/Damu/Nua의 identity anchor나 특정 구석기 인종·종·복식의 사실 재현으로 고정하지 않는다.',
        [
          'realistic anatomy without portrait-photo skin detail',
          'hair mass/silhouette before strand detail',
          'broad garment fold/material readability without modern tailoring claims',
          'natural restrained dawn/environment light',
        ],
        ['SID-PHOTO', 'SID-3D', 'SID-POSTER', 'SID-FANTASY', 'SID-CARTOON', 'SID-DETAIL'],
      ),
      styleSlot(
        'first-person-hand',
        'First-person hand',
        '손/피부/손톱/오염 detail density를 잠근다.',
        '한쪽 손과 전완이 비진단적인 거친 석재를 자연스럽게 만지는 first-person close-action style test. 손가락 수·관절·손목·압력 접촉은 현실적으로 유지하되 DAY1-HANDAXE-V1의 morphology, scale, flake-scar fingerprint는 아직 정의하지 않는다.',
        [
          'five-finger anatomy and believable wrist articulation',
          'moderate palm/knuckle/nail detail at gameplay distance',
          'skin and stone share the same illustrative finish',
          'contact pressure reads without product-photo macro rendering',
        ],
        ['SID-PHOTO', 'SID-DETAIL', 'SID-COMPOSITE', 'ANAT-FINGER', 'ANAT-WRIST', 'ANAT-HAND-SCALE'],
      ),
      styleSlot(
        'world',
        'World plate sample',
        '풍경과 인물이 같은 미술 언어인지 검증한다.',
        'canonical Day 1 geography를 고정하지 않는 dawn environment style vignette. 낮은 지형·암석·식생 mass와 작은 warm fire contribution을 사용해 depth와 natural light를 검증하되 WORLD-CAMP-DAWN-A, shelter footprint, route, landmark를 이 이미지로 확정하지 않는다.',
        [
          'depth through value/occlusion/perspective rather than generic fog',
          'restrained earth palette and readable terrain',
          'cool dawn ambient plus local warm fire without blockbuster grading',
          'environment detail density compatible with the human/hand samples',
        ],
        ['SID-FOG', 'SID-POSTER', 'SID-FANTASY', 'SID-LIGHT', 'SID-COLOR', 'SID-DETAIL'],
      ),
      styleSlot(
        'material',
        'Rock / earth / garment material',
        '재질의 brush/detail density를 비교한다.',
        '자연광 아래 rock, earth, low-specificity garment material이 한 미술 언어로 읽히는 material style test. 라벨이 붙은 교과서 표본판이나 macro product shot이 아니라 실제 장면에 들어갈 거리와 edge treatment를 유지한다.',
        [
          'rock roughness and flake-like surface cues without polished/glossy finish',
          'earth texture remains readable without noisy microdetail',
          'garment material reads through broad folds/weight rather than speculative stitching',
          'all materials share restrained brush/texture density',
        ],
        ['SID-TEXTBOOK', 'SID-PHOTO', 'SID-DETAIL', 'SID-COMPOSITE', 'SID-COLOR'],
      ),
      styleSlot(
        'responsive-pair',
        'Landscape / portrait equivalence',
        '같은 사건이 L/portrait에서 같은 스타일로 유지되는지 본다.',
        '같은 anonymous style-test moment/source에서 Landscape와 Portrait를 한 쌍으로 파생한다. portrait는 camera/framing을 재구성할 수 있지만 인체·손·도구 비율을 늘이거나 줄이지 않고, 동일 light direction, color grade, brush/detail density를 유지한다.',
        [
          'same moment and same subject identity across both frames',
          'no anatomy rescaling to solve portrait composition',
          'same light direction, material simplification and color grade',
          'portrait does not become more photographic because the subject is larger',
        ],
        ['SID-PHOTO', 'SID-DETAIL', 'SID-LIGHT', 'SID-COLOR', 'SID-COMPOSITE', 'ANAT-FOV'],
        'locked-keyframe-variation',
      ),
    ],
  },
  {
    anchorId: 'DAY1-HANDAXE-V1',
    reviewOrder: 1,
    slots: [
      slot('DAY1-HANDAXE-V1', 'face-a', 'Face A', '대표 박리흔 fingerprint와 working-end를 잠근다.'),
      slot('DAY1-HANDAXE-V1', 'face-b', 'Face B', '반대면 morphology와 같은 물체 identity를 잠근다.'),
      slot('DAY1-HANDAXE-V1', 'side', 'Side / thickness', '두께와 단면을 잠근다.'),
      slot('DAY1-HANDAXE-V1', 'scale', 'Scale reference', 'Player palm 대비 길이/폭/두께 비율을 측정한다.'),
      slot('DAY1-HANDAXE-V1', 'aru-grip', 'Aru grip', '건네기 전 grip-base orientation을 잠근다.'),
      slot('DAY1-HANDAXE-V1', 'player-grip', 'Player right-hand grip', '오른손 palm 대비 grip scale을 잠근다.'),
    ],
  },
  {
    anchorId: 'PLAYER-HUNT-BODY-V1',
    reviewOrder: 2,
    slots: [
      slot('PLAYER-HUNT-BODY-V1', 'right-palm', 'Right palm', '손바닥/손가락 비율 master.'),
      slot('PLAYER-HUNT-BODY-V1', 'right-dorsum', 'Right dorsum', '손등/손목 비율 master.'),
      slot('PLAYER-HUNT-BODY-V1', 'left-palm', 'Left palm', '왼손 ground/rock brace 기준.'),
      slot('PLAYER-HUNT-BODY-V1', 'left-dorsum', 'Left dorsum', '좌우 손 identity consistency.'),
      slot('PLAYER-HUNT-BODY-V1', 'forearm-neutral', 'Forearm neutral', '전완 길이/손목 폭 기준.'),
      slot('PLAYER-HUNT-BODY-V1', 'receive-reach', 'Receive reach', 'SC02 도달 pose skeleton 기준.'),
      slot('PLAYER-HUNT-BODY-V1', 'handaxe-grip', 'Handaxe grip', 'DAY1-HANDAXE-V1과 실제 grip scale 기준.'),
      slot('PLAYER-HUNT-BODY-V1', 'ground-brace', 'Ground brace', 'SC07 왼손 지면 지지 geometry 기준.'),
      slot('PLAYER-HUNT-BODY-V1', 'rock-brace', 'Rock brace', 'SC10 왼손 바위 접촉 geometry 기준.'),
      slot('PLAYER-HUNT-BODY-V1', 'crouch', 'Crouch body edge', '무릎/전완/카메라 관계 기준.'),
      slot('PLAYER-HUNT-BODY-V1', 'walk-carry', 'Walk carry', '도구를 낮춰 든 이동 pose 기준.'),
    ],
  },
  {
    anchorId: 'ARU-IDENTITY-V1',
    reviewOrder: 3,
    slots: [
      slot('ARU-IDENTITY-V1', 'front', 'Full body front', '전체 H와 skeleton landmark 기준.'),
      slot('ARU-IDENTITY-V1', 'back', 'Full body back', '후면 체형/의복 silhouette 기준.'),
      slot('ARU-IDENTITY-V1', 'three-quarter-left', '3/4 left', '얼굴/머리/어깨 identity 기준.'),
      slot('ARU-IDENTITY-V1', 'three-quarter-right', '3/4 right', '반대 방향 identity consistency.'),
      slot('ARU-IDENTITY-V1', 'side-left', 'Side left', '머리-흉곽-골반 alignment 기준.'),
      slot('ARU-IDENTITY-V1', 'side-right', 'Side right', '좌우 skeleton consistency.'),
      slot('ARU-IDENTITY-V1', 'seated', 'Seated near fire', '앉은 중심/다리 비율 기준.'),
      slot('ARU-IDENTITY-V1', 'offer-handaxe', 'Offer handaxe', 'SC02 reach/handoff pose 기준.'),
      slot('ARU-IDENTITY-V1', 'hand-reference', 'Hand reference', '손 크기와 손가락 anatomy 기준.'),
    ],
  },
] as const;

export function getStage075AnchorReviewBundle(anchorId: Stage075AnchorReviewBundleId) {
  return STAGE075_ANCHOR_REVIEW_BUNDLES.find((bundle) => bundle.anchorId === anchorId) ?? null;
}

export function getStage075AnchorBundleProgress(bundle: Stage075AnchorReviewBundle) {
  const required = bundle.slots.filter((item) => item.required);
  const approved = required.filter((item) => Boolean(item.approvedPath));
  const missingSlotIds = required.filter((item) => !item.approvedPath).map((item) => item.id);

  return {
    approved: approved.length,
    required: required.length,
    missingSlotIds,
  };
}

export function isStage075AnchorReviewBundleComplete(bundle: Stage075AnchorReviewBundle) {
  const progress = getStage075AnchorBundleProgress(bundle);
  return progress.required > 0 && progress.approved === progress.required;
}

export function getStage075AnchorBundleApprovedPaths(bundle: Stage075AnchorReviewBundle) {
  return bundle.slots
    .filter((item) => item.required && item.approvedPath)
    .map((item) => item.approvedPath as string);
}
