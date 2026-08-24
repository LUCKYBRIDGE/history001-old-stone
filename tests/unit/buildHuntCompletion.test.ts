import { describe, expect, it } from 'vitest';
import { buildHuntCompletion } from '../../src/roles/hunt/buildHuntCompletion';
import type { HuntState } from '../../src/roles/hunt/huntTypes';

function readyState(
  huntOutcome: 'food-secured' | 'empty-handed',
): HuntState {
  return {
    stage: 'firelight',
    dayMoment: 'evening',
    inspectedSpots: ['bare-ground', 'grass-edge'],
    foundClues: ['ground-mark', 'pressed-grass'],
    trailChoice: 'ground-mark',
    approachChoice: huntOutcome === 'food-secured' ? 'wait' : 'attempt-now',
    attemptOutcome:
      huntOutcome === 'food-secured' ? 'brief-opening' : 'target-fled',
    trackingChoice:
      huntOutcome === 'food-secured'
        ? 'continue-tracking'
        : 'consider-return',
    dangerCue:
      huntOutcome === 'food-secured'
        ? 'brush-movement'
        : 'distant-call',
    dangerResponse: 'stay-together',
    finalOutcome: huntOutcome,
    returnLandmark: 'large-rock',
    distanceBurden: huntOutcome === 'food-secured' ? 'farther' : 'far',
  };
}

describe('buildHuntCompletion', () => {
  it('returns qualitative shared signals and role-owned detail after firelight', () => {
    const completion = buildHuntCompletion(readyState('food-secured'));

    expect(completion?.roleId).toBe('hunt');
    expect(completion?.completed).toBe(true);
    expect(completion?.detail.huntOutcome).toBe('food-secured');
    expect(completion?.detail.returnedToCommunity).toBe(true);
    expect(completion?.sharedSignals.map((signal) => signal.id)).toEqual(
      expect.arrayContaining([
        'hunt-food-secured',
        'hunt-natural-risk-experienced',
        'hunt-returned-to-community',
        'hunt-distance-burden',
      ]),
    );

    expect(Object.keys(completion ?? {})).not.toContain('score');
    expect(Object.keys(completion ?? {})).not.toContain('hp');
    expect(Object.keys(completion ?? {})).not.toContain('xp');
  });

  it('does not produce a completion before the return is finished', () => {
    expect(
      buildHuntCompletion({
        ...readyState('empty-handed'),
        stage: 'return-choice',
      }),
    ).toBeNull();
  });
});
