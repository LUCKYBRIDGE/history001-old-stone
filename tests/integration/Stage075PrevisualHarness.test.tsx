import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Stage075PrevisualHarness } from '../../src/experience/previsual/Stage075PrevisualHarness';
import { STAGE075_PREVISUAL_CASES } from '../../src/experience/previsual/stage075PrevisualSpec';

describe('Stage075PrevisualHarness', () => {
  it('exposes the eight approved critical previsual cases without production imagery', () => {
    render(<Stage075PrevisualHarness />);

    expect(STAGE075_PREVISUAL_CASES).toHaveLength(8);
    expect(screen.getByRole('button', { name: /PV-01 Living Camp/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /PV-08 Same-Moment Aru POV/i })).toBeTruthy();
    expect(screen.getByText(/실제 이미지 없이 승인된 v2\.1/)).toBeTruthy();
  });

  it('switches aspect ratio so 4:3 crop can be inspected explicitly', async () => {
    const user = userEvent.setup();
    render(<Stage075PrevisualHarness />);

    const stage = screen.getByTestId('previsual-stage');
    expect(stage.getAttribute('data-aspect')).toBe('16:9');

    await user.click(screen.getByRole('radio', { name: '4:3' }));

    expect(stage.getAttribute('data-aspect')).toBe('4:3');
  });

  it('makes the handoff a three-beat ownership transfer with a shared-contact frame', async () => {
    const user = userEvent.setup();
    render(<Stage075PrevisualHarness />);

    await user.click(screen.getByRole('button', { name: /PV-02 Handaxe Handoff/i }));
    await user.click(screen.getByRole('button', { name: /2\. Shared Contact/i }));

    expect(screen.getByTestId('previsual-element-handaxe-contact')).toBeTruthy();
    expect(screen.getByTestId('previsual-element-player-right-contact')).toBeTruthy();
    expect(document.body.textContent).toContain('도구가 두 손 사이에서 공중에 뜨지 않는다.');
  });

  it('keeps Damu stop and player crouch as separate causal frames', async () => {
    const user = userEvent.setup();
    render(<Stage075PrevisualHarness />);

    await user.click(screen.getByRole('button', { name: /PV-05 Stop \/ Crouch Proof/i }));

    expect(screen.getByTestId('previsual-element-player-standing-edge')).toBeTruthy();
    expect(document.body.textContent).toContain('Player는 아직 standing eye height.');

    await user.click(screen.getByRole('button', { name: /2\. 내가 직접 몸을 낮춤/i }));

    expect(screen.getByTestId('previsual-element-player-left-support')).toBeTruthy();
    expect(screen.getByTestId('previsual-element-ground-evidence')).toBeTruthy();
  });

  it('binds SC05 and SC11 to the same departure moment without a meta perspective label', async () => {
    const user = userEvent.setup();
    render(<Stage075PrevisualHarness />);

    await user.click(screen.getByRole('button', { name: /PV-08 Same-Moment Aru POV/i }));
    await user.click(screen.getByRole('button', { name: /2\. SC11 · Aru-side same moment/i }));

    expect(document.body.textContent).toContain('DEPARTURE-MOMENT-A');
    expect(document.body.textContent).toContain('PV-04 · Stage A · 대각선 출발');
    expect(document.body.textContent).toContain('rewind 효과/flashback vignette/“아루 시점” meta title이 없다.');
  });
});
