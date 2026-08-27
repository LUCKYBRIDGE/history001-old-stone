import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Stage075PrevisualHarness } from '../../src/experience/previsual/Stage075PrevisualHarness';
import { STAGE075_PREVISUAL_CASES } from '../../src/experience/previsual/stage075PrevisualSpec';

describe('Stage075PrevisualHarness', () => {
  it('exposes the eight approved critical previsual cases without production imagery', () => {
    render(<Stage075PrevisualHarness />);

    expect(STAGE075_PREVISUAL_CASES).toHaveLength(8);
    expect(screen.getByTestId('previsual-case-PV-01')).toBeTruthy();
    expect(screen.getByTestId('previsual-case-PV-08')).toBeTruthy();
    expect(document.body.textContent).toContain('실제 이미지 없이 승인된 v2.1');
  });

  it('switches aspect ratio so 4:3 crop can be inspected explicitly', async () => {
    const user = userEvent.setup();
    render(<Stage075PrevisualHarness />);

    const stage = screen.getByTestId('previsual-stage');
    expect(stage.getAttribute('data-aspect')).toBe('16:9');
    expect(stage.getAttribute('data-composition-family')).toBe('L');

    await user.click(screen.getByRole('radio', { name: '4:3' }));

    expect(stage.getAttribute('data-aspect')).toBe('4:3');
    expect(stage.getAttribute('data-composition-family')).toBe('L');
  });

  it('exposes tablet and phone portrait as separate composition review families', async () => {
    const user = userEvent.setup();
    render(<Stage075PrevisualHarness />);

    const stage = screen.getByTestId('previsual-stage');

    await user.click(screen.getByRole('radio', { name: '3:4' }));
    expect(stage.getAttribute('data-aspect')).toBe('3:4');
    expect(stage.getAttribute('data-composition-family')).toBe('TP');
    expect(document.body.textContent).toContain('tablet portrait');

    await user.click(screen.getByRole('radio', { name: '9:16' }));
    expect(stage.getAttribute('data-aspect')).toBe('9:16');
    expect(stage.getAttribute('data-composition-family')).toBe('PP');
    expect(document.body.textContent).toContain('phone portrait');
    expect(document.body.textContent).toContain('TP/PP 전용 production composition');
  });

  it('makes the handoff a three-beat ownership transfer with a shared-contact frame', async () => {
    const user = userEvent.setup();
    render(<Stage075PrevisualHarness />);

    await user.click(screen.getByTestId('previsual-case-PV-02'));
    await user.click(screen.getByTestId('previsual-frame-pv02-contact'));

    expect(screen.getByTestId('previsual-element-handaxe-contact')).toBeTruthy();
    expect(screen.getByTestId('previsual-element-player-right-contact')).toBeTruthy();
    expect(document.body.textContent).toContain('도구가 두 손 사이에서 공중에 뜨지 않는다.');
  });

  it('keeps Damu stop and player crouch as separate causal frames', async () => {
    const user = userEvent.setup();
    render(<Stage075PrevisualHarness />);

    await user.click(screen.getByTestId('previsual-case-PV-05'));

    expect(screen.getByTestId('previsual-element-player-standing-edge')).toBeTruthy();
    expect(document.body.textContent).toContain('Player는 아직 standing eye height.');

    await user.click(screen.getByTestId('previsual-frame-pv05-player-crouch'));

    expect(screen.getByTestId('previsual-element-player-left-support')).toBeTruthy();
    expect(screen.getByTestId('previsual-element-ground-evidence')).toBeTruthy();
  });

  it('binds SC05 and SC11 to the same departure moment without a meta perspective label', async () => {
    const user = userEvent.setup();
    render(<Stage075PrevisualHarness />);

    await user.click(screen.getByTestId('previsual-case-PV-08'));
    await user.click(screen.getByTestId('previsual-frame-pv08-aru-side'));

    expect(document.body.textContent).toContain('DEPARTURE-MOMENT-A');
    expect(document.body.textContent).toContain('PV-04 · Stage A · 대각선 출발');
    expect(document.body.textContent).toContain('rewind 효과/flashback vignette/“아루 시점” meta title이 없다.');
  });
});
