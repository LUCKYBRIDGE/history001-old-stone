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
  parentSlotId?: string;
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

function derivedSlot(
  anchorId: string,
  id: string,
  label: string,
  purpose: string,
  parentSlotId: string,
): Stage075AnchorReviewSlot {
  return {
    ...slot(anchorId, id, label, purpose),
    parentSlotId,
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
        '인물 해부·surface treatment·배경 분리 가능성의 사실성 상한을 잠근다.',
        '이름 없는 fictional community member를 중간 거리에서 보여주는 style-only test. 기능적으로 납득되는 관절/무게/접촉을 유지하되 6/7/8등신 같은 photographic proportion target을 강제하지 않는다. 구조 중심 얼굴, mass/silhouette 우선의 머리, broad-fold low-specificity covering을 사용한다. 단순 contextual background는 actor/world integration 확인용으로 허용하지만 이 이미지를 reusable hero cutout이나 Aru/Damu/Nua identity로 취급하지 않는다. pore-field, beauty-photo skin, photographic bokeh/DOF/lens language를 사용하지 않는다.',
        [
          'functional anatomy without imposing a textbook 6/7/8-head target',
          'face identity reads from structure rather than pores',
          'hair mass/silhouette before individual-strand field',
          'broad garment fold/material readability without fiber-photo detail',
          'natural restrained environment light without photographic lens language',
          'outer silhouette remains suitable for later extraction-oriented production',
        ],
        ['SID-PHOTO', 'SID-LENS', 'SID-EDGE', 'SID-3D', 'SID-POSTER', 'SID-FANTASY', 'SID-CARTOON', 'SID-DETAIL'],
      ),
      styleSlot(
        'first-person-hand',
        'First-person hand',
        '손/피부/손톱/오염 detail density와 first-person 신체 surface tier를 잠근다.',
        '특정 Player identity를 아직 잠그지 않는 anonymous hand + wrist + forearm style test. 비진단적인 거친 석재를 자연스럽게 만지며 손가락 수·관절·손목·압력 접촉은 기능적으로 납득되게 유지한다. DAY1-HANDAXE-V1 morphology/scale/fingerprint는 정의하지 않는다. skin pore-field, glossy photo skin, shallow photographic DOF, lens bokeh를 피하고 손/전완 외곽은 재사용 자산 제작에 적합하게 읽혀야 한다.',
        [
          'five-finger functional anatomy and believable wrist articulation',
          'palm/knuckle/nail detail remains illustrative rather than photo-macro',
          'skin and stone share the same illustrative finish',
          'contact pressure reads before texture polish',
          'hand/forearm silhouette is clean enough for later reusable body-master production',
        ],
        ['SID-PHOTO', 'SID-LENS', 'SID-EDGE', 'SID-DETAIL', 'SID-COMPOSITE', 'ANAT-FINGER', 'ANAT-WRIST', 'ANAT-HAND-SCALE'],
      ),
      styleSlot(
        'world',
        'World plate sample',
        '풍경과 인물이 같은 미술 언어인지 검증한다.',
        'canonical Day 1 geography를 고정하지 않는 dawn environment style vignette. 낮은 지형·암석·식생 mass와 작은 warm fire contribution을 사용해 depth와 natural light를 검증하되 WORLD-CAMP-DAWN-A, shelter footprint, route, landmark를 이 이미지로 확정하지 않는다. cinematic bokeh/flare/HDR가 아니라 value/occlusion/perspective로 깊이를 만든다.',
        [
          'depth through value/occlusion/perspective rather than generic fog or lens blur',
          'restrained earth palette and readable terrain',
          'cool dawn ambient plus local warm fire without blockbuster grading',
          'environment detail density compatible with the human/hand samples',
        ],
        ['SID-FOG', 'SID-LENS', 'SID-POSTER', 'SID-FANTASY', 'SID-LIGHT', 'SID-COLOR', 'SID-DETAIL'],
      ),
      styleSlot(
        'material',
        'Rock / earth / garment material',
        '재질의 brush/detail density를 비교한다.',
        '자연광 아래 rock, earth, low-specificity garment material이 한 미술 언어로 읽히는 material style test. 라벨이 붙은 교과서 표본판이나 macro product shot이 아니라 실제 장면에 들어갈 거리와 edge treatment를 유지한다. pore/fiber/product-photo microdetail이 아니라 broad surface planes, roughness, fold/weight로 재질을 구분한다.',
        [
          'rock roughness and flake-like surface cues without polished/glossy finish',
          'earth texture remains readable without noisy microdetail',
          'garment material reads through broad folds/weight rather than fiber or speculative stitching',
          'all materials share restrained brush/texture density',
        ],
        ['SID-TEXTBOOK', 'SID-PHOTO', 'SID-LENS', 'SID-DETAIL', 'SID-COMPOSITE', 'SID-COLOR'],
      ),
      styleSlot(
        'responsive-pair',
        'Landscape / portrait equivalence',
        '같은 사건이 L/portrait에서 같은 source identity와 스타일로 유지되는지 본다.',
        '같은 anonymous style-test moment/source에서 Landscape와 Portrait를 한 쌍으로 파생한다. 먼저 같은 high-resolution source의 crop/zoom으로 두 framing을 해결하고, crop이 action/identity/safe-region을 보존하지 못할 때만 같은 source를 사용한 controlled locked-keyframe variation/outpaint를 허용한다. 두 unrelated text-to-image generation은 금지한다. 인체·손·도구 비율, light direction, color grade, brush/detail density를 바꾸지 않는다.',
        [
          'same source moment and same subject identity across both frames',
          'crop-first derivation is used when geometrically sufficient',
          'no anatomy rescaling or world-space actor relocation to solve portrait',
          'same light direction, material simplification and color grade',
          'portrait does not become more photographic because the subject is larger',
        ],
        ['SID-PHOTO', 'SID-LENS', 'SID-DETAIL', 'SID-LIGHT', 'SID-COLOR', 'SID-COMPOSITE', 'ANAT-FOV', 'GEO-CROP'],
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
      slot('PLAYER-HUNT-BODY-V1', 'structural-scaffold', 'Structural scaffold', '관절 landmark, segment relationship, reach, center-of-mass와 의도한 canonical proportion silhouette를 먼저 잠근다. 6/7/8등신 목표를 강제하지 않는다.'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'canonical-body', 'Canonical Player body master', '하나의 Player body identity와 고유 비율을 확정한다. 이후 모든 손/팔/발/동작 reference의 부모다.', 'structural-scaffold'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'right-palm', 'Right palm', '오른손 손바닥/손가락 비율 reference.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'right-dorsum', 'Right dorsum', '오른손 손등/손목 비율 reference.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'left-palm', 'Left palm', '왼손 손바닥과 ground/rock brace 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'left-dorsum', 'Left dorsum', '좌우 손이 같은 body family인지 검증.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'forearm-neutral', 'Forearm neutral', '손목 폭·전완 길이·taper 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'right-foot-ankle', 'Right foot / ankle', '오른발 길이·폭·발목 비율과 same-body identity 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'left-foot-ankle', 'Left foot / ankle', '왼발과 좌우 발/발목 same-body identity 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'receive-reach', 'Receive reach', 'SC02 도달 pose skeleton 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'handaxe-grip', 'Handaxe grip', 'DAY1-HANDAXE-V1과 실제 grip scale 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'ground-brace', 'Ground brace', 'SC07 왼손 지면 지지 geometry 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'rock-brace', 'Rock brace', 'SC10 왼손 바위 접촉 geometry 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'crouch', 'Crouch body edge', '무릎/전완/카메라 관계 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'walk-carry', 'Walk carry', '도구를 낮춰 든 이동 pose 기준.', 'canonical-body'),
    ],
  },
  {
    anchorId: 'ARU-IDENTITY-V1',
    reviewOrder: 3,
    slots: [
      slot('ARU-IDENTITY-V1', 'structural-scaffold', 'Structural scaffold', 'Aru의 joint landmarks, body segment relationships, center-of-mass와 intended proportion silhouette를 먼저 잠근다. 실사 6/7/8등신 목표를 강제하지 않는다.'),
      derivedSlot('ARU-IDENTITY-V1', 'canonical-identity', 'Canonical identity master', '한 장의 full-body 3/4 master에서 얼굴·머리·체형·고유 head/body ratio·의복 silhouette를 확정한다. 이후 모든 view/pose의 부모다.', 'structural-scaffold'),
      derivedSlot('ARU-IDENTITY-V1', 'front', 'Full body front', 'canonical identity에서 파생한 전체 H/skeleton landmark 정면 기준.', 'canonical-identity'),
      derivedSlot('ARU-IDENTITY-V1', 'back', 'Full body back', 'canonical identity에서 파생한 후면 체형/의복 silhouette 기준.', 'canonical-identity'),
      derivedSlot('ARU-IDENTITY-V1', 'opposite-three-quarter', 'Opposite 3/4', 'canonical identity 반대 방향에서도 동일 얼굴/머리/체형인지 검증.', 'canonical-identity'),
      derivedSlot('ARU-IDENTITY-V1', 'side-left', 'Side left', '머리-흉곽-골반 alignment 기준.', 'canonical-identity'),
      derivedSlot('ARU-IDENTITY-V1', 'side-right', 'Side right', '좌우 skeleton consistency.', 'canonical-identity'),
      derivedSlot('ARU-IDENTITY-V1', 'seated', 'Seated near fire', '앉은 중심/다리 비율 기준.', 'canonical-identity'),
      derivedSlot('ARU-IDENTITY-V1', 'offer-handaxe', 'Offer handaxe', 'SC02 reach/handoff pose 기준.', 'canonical-identity'),
      derivedSlot('ARU-IDENTITY-V1', 'hand-reference', 'Hand reference', '손 크기와 손가락 anatomy 기준.', 'canonical-identity'),
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
