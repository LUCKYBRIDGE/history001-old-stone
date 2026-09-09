export type Stage075AnchorReviewBundleId =
  | 'STYLE-GIR-V1'
  | 'DAY1-HANDAXE-V1'
  | 'PLAYER-HUNT-BODY-V1'
  | 'ARU-IDENTITY-V1';

export type Stage075AnchorCandidateMode =
  | 'independent-exploration'
  | 'anchor-conditioned'
  | 'locked-keyframe-variation';

export type Stage075AnchorProductionMode =
  | 'serial-calibration'
  | 'serial-master-derivation';

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
  productionMode: Stage075AnchorProductionMode;
  slots: readonly Stage075AnchorReviewSlot[];
}

export interface Stage075AnchorProductionTarget {
  anchorId: Stage075AnchorReviewBundleId;
  slotId: string;
  label: string;
  plannedRepositoryPath: string;
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
  approved = false,
): Stage075AnchorReviewSlot {
  const plannedRepositoryPath = `public/assets/stage075/anchors/STYLE-GIR-V1/${id}.webp`;
  return {
    id,
    label,
    purpose,
    required: true,
    plannedRepositoryPath,
    approvedPath: approved ? plannedRepositoryPath : undefined,
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
    productionMode: 'serial-calibration',
    slots: [
      styleSlot(
        'human-mid',
        'Human mid-shot',
        'GIR-SURFACE-30의 사람 표면 단순화·해부·분리 가능성 기준을 잠근다.',
        '이름 없는 fictional community member를 중간 거리에서 보여주는 style-only test. GIR-SURFACE-30의 표면/렌더링 사실성 목표 30/100(허용 25–35)을 적용한다. 기능적으로 납득되는 관절·무게·원근은 유지하지만 피부는 broad value/color planes와 대표 주름 몇 개로 단순화하고 모공·잔털·혈관·개별 모발을 사진 밀도로 묘사하지 않는다. 구조 중심 얼굴, mass/silhouette 우선의 머리, broad-fold low-specificity covering을 사용한다. 6/7/8등신 같은 photographic proportion target은 강제하지 않는다. 이 이미지는 Aru/Damu/Nua, DAY1-HANDAXE-V1, WORLD-CAMP-DAWN-A를 정의하지 않는다.',
        [
          'surface/rendering realism reads near 30/100 and inside the 25–35 acceptance band',
          'functional anatomy without imposing a textbook 6/7/8-head target',
          'face identity reads from structure and large planes rather than pores',
          'hair mass/silhouette before individual-strand field',
          'skin, nails and garments are simplified at normal viewing distance',
          'natural restrained light without photographic lens language',
          'outer silhouette remains suitable for later extraction-oriented production',
        ],
        ['SID-PHOTO', 'SID-LENS', 'SID-EDGE', 'SID-3D', 'SID-POSTER', 'SID-FANTASY', 'SID-CARTOON', 'SID-DETAIL'],
        'independent-exploration',
        true,
      ),
      styleSlot(
        'first-person-hand',
        'First-person hand',
        'GIR-30 손/피부/손톱 detail density와 first-person 신체 surface tier를 잠근다.',
        '승인된 GIR-SURFACE-30 human-mid의 표면 단순화 언어를 실제 reference로 사용하되 특정 Player identity는 아직 잠그지 않는 anonymous hand + wrist + forearm style test. 비진단적인 거친 석재를 자연스럽게 만지며 손가락 수·관절·손목·압력 접촉은 기능적으로 납득되게 유지한다. 피부는 큰 면과 대표 주름 위주, 손톱은 단순 형태/명암 위주로 처리하고 모공·잔털·혈관·손톱 반사·바위 미세균열을 photo-macro 밀도로 만들지 않는다. DAY1-HANDAXE-V1 morphology/scale/fingerprint는 정의하지 않는다.',
        [
          'same GIR-SURFACE-30 rendering tier as the approved human reference',
          'five-finger functional anatomy and believable wrist articulation',
          'palm/knuckle/nail detail remains simplified rather than photo-macro',
          'skin and stone share the same illustrative finish',
          'contact pressure reads before texture polish',
          'hand/forearm silhouette is clean enough for later reusable body-master production',
        ],
        ['SID-PHOTO', 'SID-LENS', 'SID-EDGE', 'SID-DETAIL', 'SID-COMPOSITE', 'ANAT-FINGER', 'ANAT-WRIST', 'ANAT-HAND-SCALE'],
        'anchor-conditioned',
      ),
      styleSlot(
        'world',
        'World plate sample',
        '풍경이 동일한 GIR-30 미술 언어로 읽히는지 검증한다.',
        '앞서 승인된 GIR-SURFACE-30 references를 style parent로 사용한다. canonical Day 1 geography를 고정하지 않는 dawn environment style vignette에서 지형·암석·식생을 큰 shape/value mass로 단순화한다. WORLD-CAMP-DAWN-A를 이 이미지로 확정하지 않는다. cinematic bokeh/flare/HDR가 아니라 value/occlusion/perspective로 깊이를 만든다.',
        [
          'same GIR-SURFACE-30 rendering tier as approved human/hand references',
          'depth through value/occlusion/perspective rather than generic fog or lens blur',
          'terrain and vegetation read as grouped masses instead of photo-density texture',
          'restrained earth palette and readable terrain',
        ],
        ['SID-FOG', 'SID-LENS', 'SID-PHOTO', 'SID-POSTER', 'SID-FANTASY', 'SID-LIGHT', 'SID-COLOR', 'SID-DETAIL'],
        'anchor-conditioned',
      ),
      styleSlot(
        'material',
        'Rock / earth / garment material',
        'GIR-30 재질의 plane/roughness/fold detail density를 비교한다.',
        '앞서 승인된 GIR-SURFACE-30 references를 style parent로 사용한다. rock, earth, low-specificity garment material을 실제 게임 거리의 큰 면·roughness group·fold/weight로 구분한다. 미세 균열·grain·fiber·stitch를 사진 밀도로 누적하지 않는다.',
        [
          'same GIR-SURFACE-30 rendering tier as approved human/hand/world references',
          'rock roughness reads from major planes and representative marks',
          'earth texture remains readable without noisy microdetail',
          'garment material reads through broad folds/weight rather than fiber or speculative stitching',
        ],
        ['SID-TEXTBOOK', 'SID-PHOTO', 'SID-LENS', 'SID-DETAIL', 'SID-COMPOSITE', 'SID-COLOR'],
        'anchor-conditioned',
      ),
      styleSlot(
        'responsive-pair',
        'Landscape / portrait equivalence',
        '같은 사건이 L/portrait에서 같은 source identity와 GIR-30 스타일로 유지되는지 본다.',
        '같은 anonymous style-test moment/source에서 Landscape와 Portrait를 한 쌍으로 파생한다. 먼저 같은 high-resolution source의 crop/zoom으로 두 framing을 해결하고, crop이 action/identity/safe-region을 보존하지 못할 때만 같은 source를 사용한 controlled locked-keyframe variation/outpaint를 허용한다. 두 unrelated text-to-image generation은 금지한다.',
        [
          'same source moment and same subject identity across both frames',
          'same GIR-SURFACE-30 treatment even when portrait enlarges the subject',
          'crop-first derivation is used when geometrically sufficient',
          'no anatomy rescaling or world-space actor relocation to solve portrait',
        ],
        ['SID-PHOTO', 'SID-LENS', 'SID-DETAIL', 'SID-LIGHT', 'SID-COLOR', 'SID-COMPOSITE', 'ANAT-FOV', 'GEO-CROP'],
        'locked-keyframe-variation',
      ),
    ],
  },
  {
    anchorId: 'DAY1-HANDAXE-V1',
    reviewOrder: 1,
    productionMode: 'serial-master-derivation',
    slots: [
      slot('DAY1-HANDAXE-V1', 'face-a', 'Canonical Face A / morphology seed', '첫 승인 object seed에서 전체 contour, grip-base, working-end, 대표 face-A scar fingerprint와 재질 family를 잠근다.'),
      derivedSlot('DAY1-HANDAXE-V1', 'face-b', 'Face B derivative', 'canonical face-A seed와 고정된 전체 치수/비대칭을 참조해 반대면을 파생한다. 새 주먹도끼를 재설계하지 않는다.', 'face-a'),
      derivedSlot('DAY1-HANDAXE-V1', 'side', 'Side / thickness derivative', 'canonical morphology seed의 길이·폭·비대칭과 일치하는 두께/단면을 파생한다.', 'face-a'),
      derivedSlot('DAY1-HANDAXE-V1', 'scale', 'Metric / normalized scale reference', 'Player body와의 순환 의존성을 만들지 않도록 먼저 절대/정규화 길이·폭·두께를 잠근다. Player palm 대비 검증은 PLAYER/SC02 contact 단계에서 수행한다.', 'face-a'),
    ],
  },
  {
    anchorId: 'PLAYER-HUNT-BODY-V1',
    reviewOrder: 2,
    productionMode: 'serial-master-derivation',
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
      derivedSlot('PLAYER-HUNT-BODY-V1', 'handaxe-grip', 'Handaxe grip', '승인된 DAY1-HANDAXE-V1의 실제 scale과 canonical Player right hand의 grip 관계를 검증한다.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'ground-brace', 'Ground brace', 'SC07 왼손 지면 지지 geometry 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'rock-brace', 'Rock brace', 'SC10 왼손 바위 접촉 geometry 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'crouch', 'Crouch body edge', '무릎/전완/카메라 관계 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'walk-carry', 'Walk carry', '도구를 낮춰 든 이동 pose 기준.', 'canonical-body'),
    ],
  },
  {
    anchorId: 'ARU-IDENTITY-V1',
    reviewOrder: 3,
    productionMode: 'serial-master-derivation',
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

export function getStage075AnchorBundleLineageIssues(bundle: Stage075AnchorReviewBundle) {
  const issues: string[] = [];
  const slotIndexById = new Map<string, number>();

  bundle.slots.forEach((item, index) => {
    if (slotIndexById.has(item.id)) {
      issues.push(`${item.id}:duplicate-slot-id`);
      return;
    }
    slotIndexById.set(item.id, index);
  });

  bundle.slots.forEach((item, index) => {
    if (!item.parentSlotId) {
      return;
    }

    const parentIndex = slotIndexById.get(item.parentSlotId);
    if (parentIndex === undefined) {
      issues.push(`${item.id}:missing-parent:${item.parentSlotId}`);
      return;
    }

    if (parentIndex >= index) {
      issues.push(`${item.id}:parent-must-precede-child:${item.parentSlotId}`);
    }
  });

  return issues;
}

export function isStage075AnchorBundleLineageValid(bundle: Stage075AnchorReviewBundle) {
  return getStage075AnchorBundleLineageIssues(bundle).length === 0;
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

export function getStage075AnchorSlotProductionReadiness(
  bundle: Stage075AnchorReviewBundle,
  slotId: string,
) {
  const index = bundle.slots.findIndex((item) => item.id === slotId);
  if (index < 0) {
    return { state: 'blocked' as const, blockedBySlotIds: ['unknown-slot'] };
  }

  const item = bundle.slots[index];
  if (item.approvedPath) {
    return { state: 'approved' as const, blockedBySlotIds: [] as string[] };
  }

  const lineageIssues = getStage075AnchorBundleLineageIssues(bundle);
  if (lineageIssues.length > 0) {
    return { state: 'blocked' as const, blockedBySlotIds: ['lineage-invalid'] };
  }

  const blockedBySlotIds = bundle.slots
    .slice(0, index)
    .filter((prior) => prior.required && !prior.approvedPath)
    .map((prior) => prior.id);

  if (item.parentSlotId) {
    const parent = bundle.slots.find((candidate) => candidate.id === item.parentSlotId);
    if (!parent?.approvedPath && !blockedBySlotIds.includes(item.parentSlotId)) {
      blockedBySlotIds.push(item.parentSlotId);
    }
  }

  return blockedBySlotIds.length === 0
    ? { state: 'ready' as const, blockedBySlotIds }
    : { state: 'blocked' as const, blockedBySlotIds };
}

export function getStage075NextProductionSlot(bundle: Stage075AnchorReviewBundle) {
  return (
    bundle.slots.find(
      (item) =>
        item.required &&
        !item.approvedPath &&
        getStage075AnchorSlotProductionReadiness(bundle, item.id).state === 'ready',
    ) ?? null
  );
}

export function getStage075NextGlobalProductionTarget(
  bundles: readonly Stage075AnchorReviewBundle[] = STAGE075_ANCHOR_REVIEW_BUNDLES,
): Stage075AnchorProductionTarget | null {
  const ordered = [...bundles].sort((a, b) => a.reviewOrder - b.reviewOrder);

  for (const bundle of ordered) {
    if (isStage075AnchorReviewBundleComplete(bundle)) {
      continue;
    }

    const next = getStage075NextProductionSlot(bundle);
    if (!next) {
      return null;
    }

    return {
      anchorId: bundle.anchorId,
      slotId: next.id,
      label: next.label,
      plannedRepositoryPath: next.plannedRepositoryPath,
    };
  }

  return null;
}

export function isStage075AnchorReviewBundleComplete(bundle: Stage075AnchorReviewBundle) {
  const progress = getStage075AnchorBundleProgress(bundle);
  return (
    isStage075AnchorBundleLineageValid(bundle) &&
    progress.required > 0 &&
    progress.approved === progress.required
  );
}

export function getStage075AnchorBundleApprovedPaths(bundle: Stage075AnchorReviewBundle) {
  return bundle.slots
    .filter((item) => item.required && item.approvedPath)
    .map((item) => item.approvedPath as string);
}
