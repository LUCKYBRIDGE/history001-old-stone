export type Stage075AnchorReviewBundleId =
  | 'STYLE-GIR-V1'
  | 'DAY1-HANDAXE-V1'
  | 'PLAYER-HUNT-BODY-V1'
  | 'ARU-IDENTITY-V1';

export interface Stage075AnchorReviewSlot {
  id: string;
  label: string;
  purpose: string;
  plannedRepositoryPath: string;
  required: boolean;
  approvedPath?: string;
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

export const STAGE075_ANCHOR_REVIEW_BUNDLES: readonly Stage075AnchorReviewBundle[] = [
  {
    anchorId: 'STYLE-GIR-V1',
    reviewOrder: 0,
    slots: [
      slot('STYLE-GIR-V1', 'human-mid', 'Human mid-shot', '인물 해부와 surface treatment의 사실성 상한을 잠근다.'),
      slot('STYLE-GIR-V1', 'first-person-hand', 'First-person hand', '손/피부/손톱/오염 detail density를 잠근다.'),
      slot('STYLE-GIR-V1', 'world', 'World plate sample', '풍경과 인물이 같은 미술 언어인지 검증한다.'),
      slot('STYLE-GIR-V1', 'material', 'Rock / earth / garment material', '재질의 brush/detail density를 비교한다.'),
      slot('STYLE-GIR-V1', 'responsive-pair', 'Landscape / portrait equivalence', '같은 사건이 L/portrait에서 같은 스타일로 유지되는지 본다.'),
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
  return { approved: approved.length, required: required.length };
}
