import type { RoleCompletion } from '../../experience/contracts/role';
import type { HuntCompletionDetail, HuntState } from './huntTypes';

export function buildHuntCompletion(
  state: HuntState,
): RoleCompletion<HuntCompletionDetail> | null {
  if (
    state.stage !== 'firelight' ||
    !state.finalOutcome ||
    !state.attemptOutcome ||
    !state.trackingChoice ||
    !state.dangerCue ||
    !state.dangerResponse ||
    !state.returnLandmark ||
    state.distanceBurden === 'near'
  ) {
    return null;
  }

  const outcomeSignal =
    state.finalOutcome === 'food-secured'
      ? {
          id: 'hunt-food-secured',
          sourceRole: 'hunt' as const,
          tags: ['same-day', 'food', 'uncertainty', 'hunt-outcome'] as const,
        }
      : {
          id: 'hunt-returned-empty-handed',
          sourceRole: 'hunt' as const,
          tags: ['same-day', 'food', 'uncertainty', 'hunt-outcome'] as const,
        };

  return {
    roleId: 'hunt',
    completed: true,
    sharedSignals: [
      outcomeSignal,
      {
        id: 'hunt-natural-risk-experienced',
        sourceRole: 'hunt',
        tags: ['same-day', 'nature-risk', 'judgment', 'cooperation'],
      },
      {
        id: 'hunt-returned-to-community',
        sourceRole: 'hunt',
        tags: ['same-day', 'return', 'community'],
      },
      {
        id: 'hunt-distance-burden',
        sourceRole: 'hunt',
        tags: ['same-day', 'distance', state.distanceBurden],
      },
    ],
    detail: {
      huntOutcome: state.finalOutcome,
      attemptOutcome: state.attemptOutcome,
      trackingChoice: state.trackingChoice,
      dangerCue: state.dangerCue,
      dangerResponse: state.dangerResponse,
      returnLandmark: state.returnLandmark,
      distanceBurden: state.distanceBurden,
      returnedToCommunity: true,
    },
  };
}
