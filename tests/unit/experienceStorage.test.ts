import { describe, expect, it } from 'vitest';
import { createInitialExperienceState } from '../../src/experience/experienceReducer';
import { createExperienceStorage } from '../../src/persistence/experienceStorage';

describe('experienceStorage', () => {
  it('round-trips stable experience progress for the same plan', () => {
    const storage = createExperienceStorage(window.localStorage);
    const state = {
      ...createInitialExperienceState('plan-a'),
      phase: 'role-entry' as const,
      commonMorningCompleted: true,
    };

    storage.save(state);

    expect(storage.load('plan-a')).toEqual(state);
    expect(storage.load('different-plan')).toBeNull();
  });

  it('ignores malformed persisted data safely', () => {
    window.localStorage.setItem(
      'history001-old-stone:experience',
      '{"version":1,"state":{"phase":"unknown"}}',
    );

    const storage = createExperienceStorage(window.localStorage);
    expect(storage.load('plan-a')).toBeNull();
  });
});
