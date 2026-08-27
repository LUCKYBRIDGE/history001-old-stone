import { useMemo, useState } from 'react';
import {
  STAGE075_PREVISUAL_CASES,
  type PrevisualAspect,
  type PrevisualElement,
} from './stage075PrevisualSpec';

const ASPECT_RATIOS: Record<PrevisualAspect, number> = {
  '16:9': 16 / 9,
  '16:10': 16 / 10,
  '4:3': 4 / 3,
};

function elementStyle(element: PrevisualElement) {
  const { x, y, w, h, rotate = 0 } = element.box;

  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${w}%`,
    height: `${h}%`,
    transform: `rotate(${rotate}deg)`,
  };
}

export function Stage075PrevisualHarness() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);
  const [aspect, setAspect] = useState<PrevisualAspect>('16:9');
  const [showSafeZones, setShowSafeZones] = useState(true);
  const [showLabels, setShowLabels] = useState(true);

  const currentCase = STAGE075_PREVISUAL_CASES[caseIndex];
  const currentFrame = currentCase.frames[Math.min(frameIndex, currentCase.frames.length - 1)];
  const aspectRatio = ASPECT_RATIOS[aspect];

  const sharedMomentCases = useMemo(
    () =>
      STAGE075_PREVISUAL_CASES.flatMap((previsualCase) =>
        previsualCase.frames
          .filter((frame) => frame.momentId === currentFrame.momentId && frame.id !== currentFrame.id)
          .map((frame) => `${previsualCase.id} · ${frame.label}`),
      ),
    [currentFrame],
  );

  const selectCase = (index: number) => {
    setCaseIndex(index);
    setFrameIndex(0);
  };

  return (
    <section className="previsual-harness" aria-label="Stage 07.5 previsual harness">
      <header className="previsual-harness__header">
        <div>
          <p className="previsual-harness__eyebrow">DEV-ONLY · STAGE 07.5 PREVISUAL</p>
          <h1>Scene Composition Harness</h1>
          <p>
            실제 이미지 없이 승인된 v2.1의 카메라·몸·도구·인물·접촉·크롭·연속성을 검증한다.
          </p>
        </div>
        <div className="previsual-harness__status" aria-label="gate status">
          <span>Scene Design PASS</span>
          <span>Previsual Approval NOT YET</span>
          <span>Human Gate FAIL</span>
        </div>
      </header>

      <nav className="previsual-harness__case-nav" aria-label="critical previsual cases">
        {STAGE075_PREVISUAL_CASES.map((previsualCase, index) => (
          <button
            type="button"
            key={previsualCase.id}
            className={index === caseIndex ? 'is-active' : undefined}
            onClick={() => selectCase(index)}
          >
            <strong>{previsualCase.id}</strong>
            <span>{previsualCase.title}</span>
          </button>
        ))}
      </nav>

      <div className="previsual-harness__toolbar">
        <fieldset>
          <legend>Frame ratio</legend>
          {(['16:9', '16:10', '4:3'] as const).map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="previsual-aspect"
                value={value}
                checked={aspect === value}
                onChange={() => setAspect(value)}
              />
              {value}
            </label>
          ))}
        </fieldset>
        <label>
          <input
            type="checkbox"
            checked={showSafeZones}
            onChange={(event) => setShowSafeZones(event.target.checked)}
          />
          4:3 / 16:10 safe zone
        </label>
        <label>
          <input
            type="checkbox"
            checked={showLabels}
            onChange={(event) => setShowLabels(event.target.checked)}
          />
          element labels
        </label>
      </div>

      <div className="previsual-harness__workspace">
        <aside className="previsual-harness__case-panel">
          <p className="previsual-harness__eyebrow">{currentCase.id}</p>
          <h2>{currentCase.title}</h2>
          <p>{currentCase.purpose}</p>

          <div className="previsual-harness__frame-tabs" aria-label="previsual frames">
            {currentCase.frames.map((frame, index) => (
              <button
                type="button"
                key={frame.id}
                className={index === frameIndex ? 'is-active' : undefined}
                onClick={() => setFrameIndex(index)}
              >
                {index + 1}. {frame.label}
              </button>
            ))}
          </div>

          <dl className="previsual-harness__facts">
            <div>
              <dt>Scene</dt>
              <dd>{currentFrame.sceneIds.join(' → ')}</dd>
            </div>
            <div>
              <dt>Camera</dt>
              <dd>{currentFrame.camera}</dd>
            </div>
            {currentFrame.momentId ? (
              <div>
                <dt>Moment ID</dt>
                <dd>{currentFrame.momentId}</dd>
              </div>
            ) : null}
          </dl>

          {currentFrame.dialogue?.length ? (
            <div className="previsual-harness__dialogue">
              <h3>Dialogue timing</h3>
              {currentFrame.dialogue.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ) : null}

          {sharedMomentCases.length ? (
            <div className="previsual-harness__moment-match">
              <h3>Same-moment match</h3>
              {sharedMomentCases.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ) : null}
        </aside>

        <main className="previsual-harness__viewer">
          <div
            className={`previsual-stage previsual-stage--${aspect.replace(':', '-')}`}
            style={{ aspectRatio }}
            data-testid="previsual-stage"
            data-aspect={aspect}
            data-case={currentCase.id}
            data-frame={currentFrame.id}
          >
            <div className="previsual-stage__world-grid" aria-hidden="true" />
            {showSafeZones ? (
              <>
                <div className="previsual-stage__safe previsual-stage__safe--16-10" aria-hidden="true">
                  <span>16:10 master crop</span>
                </div>
                <div className="previsual-stage__safe previsual-stage__safe--4-3" aria-hidden="true">
                  <span>4:3 essential safe</span>
                </div>
              </>
            ) : null}

            {currentFrame.elements.map((element) => (
              <div
                key={element.id}
                className={`previsual-element previsual-element--${element.kind}`}
                style={elementStyle(element)}
                data-testid={`previsual-element-${element.id}`}
                title={element.note ?? element.label}
              >
                {showLabels ? <span>{element.label}</span> : null}
              </div>
            ))}
          </div>

          <section className="previsual-harness__checks">
            <div>
              <h3>Frame continuity checks</h3>
              <ul>
                {currentFrame.continuityChecks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>PV acceptance</h3>
              <ul>
                {currentCase.acceptance.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}
