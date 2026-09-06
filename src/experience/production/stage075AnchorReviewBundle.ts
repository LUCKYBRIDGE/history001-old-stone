import type { Stage075VisualContinuityAnchorId } from './stage075VisualContinuityRegistry';

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
  | 'serial-slot'
  | 'serial-master-derivation';

export interface Stage075AnchorCandidateBrief {
  readonly mode: Stage075AnchorCandidateMode;
  readonly instruction: string;
  readonly reviewFocus: readonly string[];
  readonly rejectCodes: readonly string[];
}

export interface Stage075AnchorReviewSlot {
  readonly id: string;
  readonly label: string;
  readonly note: string;
  readonly required: boolean;
  readonly plannedRepositoryPath: string;
  readonly approvedPath: string | null;
  readonly parentSlotId: string | null;
  readonly candidateBrief: Stage075AnchorCandidateBrief | null;
}

export interface Stage075AnchorReviewBundle {
  readonly anchorId: Stage075AnchorReviewBundleId;
  readonly reviewOrder: number;
  readonly productionMode: Stage075AnchorProductionMode;
  readonly slots: readonly Stage075AnchorReviewSlot[];
}

export interface Stage075AnchorProductionTarget {
  readonly anchorId: Stage075AnchorReviewBundleId;
  readonly slotId: string;
  readonly label: string;
  readonly plannedRepositoryPath: string;
}

function slot(
  anchorId: Stage075AnchorReviewBundleId,
  id: string,
  label: string,
  note: string,
  candidateBrief: Stage075AnchorCandidateBrief | null = null,
): Stage075AnchorReviewSlot {
  return {
    id,
    label,
    note,
    required: true,
    plannedRepositoryPath: `public/assets/stage075/anchors/${anchorId}/${id}.webp`,
    approvedPath: null,
    parentSlotId: null,
    candidateBrief,
  };
}

function derivedSlot(
  anchorId: Stage075AnchorReviewBundleId,
  id: string,
  label: string,
  note: string,
  parentSlotId: string,
  candidateBrief: Stage075AnchorCandidateBrief | null = null,
): Stage075AnchorReviewSlot {
  return {
    ...slot(anchorId, id, label, note, candidateBrief),
    parentSlotId,
  };
}

const STYLE_REJECT_CODES = [
  'SID-PHOTO',
  'SID-3D',
  'SID-POSTER',
  'SID-FANTASY',
  'SID-CARTOON',
  'SID-TEXTBOOK',
  'SID-FOG',
  'SID-DETAIL',
  'SID-LIGHT',
  'SID-COLOR',
  'SID-COMPOSITE',
  'SID-EDGE',
  'SID-LENS',
] as const;

const STYLE_SHARED_REVIEW = [
  'Grounded Illustrative Realism 유지',
  '실사 인간 등신을 외부 정답처럼 강제하지 않되 functional anatomy는 자연스럽게 유지',
  'skin/hair/material의 photographic micro-detail을 피하고 silhouette/readability를 우선',
  'Aru/Damu/Nua/Player/handaxe/world anchor를 조기 lock하지 않기',
] as const;

export const STAGE075_ANCHOR_REVIEW_BUNDLES: readonly Stage075AnchorReviewBundle[] = [
  {
    anchorId: 'STYLE-GIR-V1',
    reviewOrder: 0,
    productionMode: 'serial-slot',
    slots: [
      {
        ...slot(
          'STYLE-GIR-V1',
          'human-mid',
          'Human mid',
          '익명의 중간 거리 인물에서 사람 표면/머리/의복 detail tier를 잠근다.',
          {
            mode: 'independent-exploration',
            instruction:
              '익명의 성인 공동체 구성원 1명을 중간 거리로 그린다. 얼굴/신체 구조와 자연스러운 관절/무게감은 유지하되 피부 모공, 개별 머리카락 field, beauty-photo skin, shallow photographic DOF는 피한다. 의복은 broad material mass/fold 위주로 낮은 특정성으로 두고 Aru/Damu/Nua identity나 Player body를 정의하지 않는다.',
            reviewFocus: [
              ...STYLE_SHARED_REVIEW,
              '얼굴은 microtexture보다 구조/비율로 읽힐 것',
              '머리카락은 strand simulation보다 mass/silhouette로 읽힐 것',
              'outer silhouette가 추출/합성에 충분히 깨끗할 것',
            ],
            rejectCodes: STYLE_REJECT_CODES,
          },
        ),
        approvedPath: 'public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp',
      },
      slot(
        'STYLE-GIR-V1',
        'first-person-hand',
        'First-person hand',
        '익명의 1인칭 손/손목/전완에서 anatomy/contact/style detail tier를 검증한다. Player body나 DAY1-HANDAXE를 lock하지 않는다.',
        {
          mode: 'independent-exploration',
          instruction:
            '익명의 손+손목+전완 1개가 비진단적 거친 돌에 닿는 1인칭 reference를 만든다. five fingers/joints/wrist/contact pressure는 명확히 하고 photo-macro texture는 피한다. accepted human-mid의 surface/detail boundary를 상속하되 PLAYER-HUNT-BODY-V1 또는 DAY1-HANDAXE-V1 형태/scale을 정의하지 않는다.',
          reviewFocus: [
            ...STYLE_SHARED_REVIEW,
            'finger count/joint/wrist transition 정상',
            'hand/stone이 같은 rendering language',
            'accepted human-mid와 detail tier 일치',
          ],
          rejectCodes: [...STYLE_REJECT_CODES, 'ANAT-FINGER', 'ANAT-WRIST', 'GEO-CONTACT-POINT'],
        },
      ),
      slot(
        'STYLE-GIR-V1',
        'world',
        'World',
        '낮은 특정성의 dawn natural setting으로 depth/light/environment detail tier를 잠근다.',
        {
          mode: 'independent-exploration',
          instruction:
            '구체 Day 1 geography를 정의하지 않는 low-specificity 자연환경 reference를 만든다. dawn light, overlap, perspective, broad earth/rock/vegetation masses로 깊이를 만들고 generic AI fog/HDR/game-poster grading을 피한다.',
          reviewFocus: [...STYLE_SHARED_REVIEW, 'depth가 fog가 아니라 overlap/value/perspective로 읽힐 것'],
          rejectCodes: STYLE_REJECT_CODES,
        },
      ),
      slot(
        'STYLE-GIR-V1',
        'material',
        'Material',
        'stone/soil/garment의 gameplay-distance material language를 잠근다.',
        {
          mode: 'independent-exploration',
          instruction:
            'stone/soil/low-specificity garment material이 gameplay viewing distance에서 broad form과 material zone으로 읽히는 reference를 만든다. macro product photography, fiber-level simulation, glossy beauty surface를 피한다.',
          reviewFocus: [...STYLE_SHARED_REVIEW, 'material이 microtexture가 아니라 broad plane/fold로 읽힐 것'],
          rejectCodes: STYLE_REJECT_CODES,
        },
      ),
      slot(
        'STYLE-GIR-V1',
        'responsive-pair',
        'Responsive pair',
        '한 anonymous source moment에서 landscape/portrait framing equivalence를 검증한다.',
        {
          mode: 'locked-keyframe-variation',
          instruction:
            '한 개의 익명 canonical source moment를 먼저 선택하고 landscape와 portrait를 그 source에서 crop/zoom/pan으로 파생한다. coverage가 부족할 때만 controlled outpaint를 사용하며 서로 unrelated text-to-image 두 장을 responsive pair로 만들지 않는다.',
          reviewFocus: [
            ...STYLE_SHARED_REVIEW,
            'L/portrait가 same moment/same people/same world일 것',
            'portrait 때문에 human/hand/arm 비율을 변형하지 않을 것',
          ],
          rejectCodes: [...STYLE_REJECT_CODES, 'ANAT-HEAD-BODY', 'ANAT-HAND-SCALE'],
        },
      ),
    ],
  },
  {
    anchorId: 'DAY1-HANDAXE-V1',
    reviewOrder: 1,
    productionMode: 'serial-master-derivation',
    slots: [
      slot('DAY1-HANDAXE-V1', 'face-a', 'Face A', 'DAY1-HANDAXE-V1 canonical morphology seed. face-A/working-end/grip-base/flake-scar fingerprint를 먼저 잠근다.'),
      derivedSlot('DAY1-HANDAXE-V1', 'face-b', 'Face B', '동일 object master의 반대 면 morphology/flake-scar 관계.', 'face-a'),
      derivedSlot('DAY1-HANDAXE-V1', 'side-thickness', 'Side / thickness', '같은 object의 side profile과 thickness relationship.', 'face-a'),
      derivedSlot('DAY1-HANDAXE-V1', 'metric-scale', 'Metric / normalized scale', '실제/정규화 길이·폭·두께와 morphology fingerprint를 함께 잠근다. body-specific grip은 아직 요구하지 않는다.', 'face-a'),
    ],
  },
  {
    anchorId: 'PLAYER-HUNT-BODY-V1',
    reviewOrder: 2,
    productionMode: 'serial-master-derivation',
    slots: [
      slot('PLAYER-HUNT-BODY-V1', 'structural-scaffold', 'Structural scaffold', 'Player의 joint landmarks, body segment relationships, center-of-mass와 intended proportion silhouette를 먼저 잠근다. 실사 6/7/8등신 목표를 강제하지 않는다.'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'canonical-body', 'Canonical body master', '한 장의 neutral full-body master에서 head/body ratio, shoulder/pelvis/limb/hand/foot relationships를 확정한다. 이후 모든 Player limb/action의 부모다.', 'structural-scaffold'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'right-palm', 'Right palm', '오른손 palm/finger/wrist 비율 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'right-dorsum', 'Right dorsum', '같은 오른손의 dorsum 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'left-palm', 'Left palm', '왼손 palm/finger/wrist 비율 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'left-dorsum', 'Left dorsum', '같은 왼손의 dorsum 기준.', 'canonical-body'),
      derivedSlot('PLAYER-HUNT-BODY-V1', 'forearm-neutral', 'Forearm neutral', '손목-전완 taper와 arm segment 기준.', 'canonical-body'),
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
