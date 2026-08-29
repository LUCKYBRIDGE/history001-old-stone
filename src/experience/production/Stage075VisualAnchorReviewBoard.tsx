import {
  STAGE075_ANCHOR_REVIEW_BUNDLES,
  getStage075AnchorBundleProgress,
} from './stage075AnchorReviewBundle';
import { STAGE075_ANATOMY_CONTRACTS } from './stage075AnatomyRegistry';
import { STAGE075_RASTER_MANIFEST } from './stage075RasterManifest';
import { STAGE075_STYLE_ANCHOR } from './stage075StyleAnchor';
import { STAGE075_VISUAL_CONTINUITY_ANCHORS } from './stage075VisualContinuityRegistry';
import { STAGE075_VISUAL_PRODUCTION_POLICY } from './stage075VisualProductionPolicy';

const priorityVisualAnchorIds = [
  'DAY1-HANDAXE-V1',
  'PLAYER-HUNT-BODY-V1',
  'ARU-IDENTITY-V1',
  'DAMU-IDENTITY-V1',
  'NUA-IDENTITY-V1',
  'WORLD-CAMP-DAWN-A',
] as const;

const priorityAnatomyContractIds = [
  'PLAYER-HUNT-BODY-PROP-V1',
  'ARU-PROP-V1',
  'SC02-HANDOFF-GEO-V1',
] as const;

function StatusBadge({ status }: { status: string }) {
  return <span className={`anchor-review__status anchor-review__status--${status}`}>{status}</span>;
}

export function Stage075VisualAnchorReviewBoard() {
  const priorityVisualAnchors = priorityVisualAnchorIds
    .map((id) => STAGE075_VISUAL_CONTINUITY_ANCHORS.find((anchor) => anchor.id === id))
    .filter((anchor): anchor is NonNullable<typeof anchor> => Boolean(anchor));

  const priorityAnatomyContracts = priorityAnatomyContractIds
    .map((id) => STAGE075_ANATOMY_CONTRACTS.find((contract) => contract.id === id))
    .filter((contract): contract is NonNullable<typeof contract> => Boolean(contract));

  return (
    <section className="anchor-review" aria-label="Stage 07.5 visual anchor review board">
      <header className="anchor-review__hero">
        <p>DEV-ONLY · VISUAL ANCHOR REVIEW</p>
        <h1>Stage 07.5 Visual Anatomy Reference Lock</h1>
        <p>
          장면 이미지를 먼저 승인하지 않는다. 스타일, 도구 scale, Player 몸 비율, 캐릭터 모체와 접촉 기하가
          실제 reference path와 함께 잠긴 뒤 scene raster를 승인한다.
        </p>
      </header>

      <section
        className="anchor-review__section"
        aria-labelledby="canonical-lineage-heading"
        data-testid="canonical-ratio-policy"
      >
        <div className="anchor-review__section-heading">
          <div>
            <p>Identity production law</p>
            <h2 id="canonical-lineage-heading">Canonical body lineage & exact-ratio lock</h2>
          </div>
        </div>
        <div className="anchor-review__two-col">
          <div>
            <h3>Production lineage</h3>
            <p className="anchor-review__mono">
              {STAGE075_VISUAL_PRODUCTION_POLICY.bodyMasterOrder.join(' → ')}
            </p>
            <p>{STAGE075_VISUAL_PRODUCTION_POLICY.canonicalRatioRule}</p>
          </div>
          <div>
            <h3>Projection is not redesign</h3>
            <p>{STAGE075_VISUAL_PRODUCTION_POLICY.projectionRule}</p>
            <p>{STAGE075_VISUAL_PRODUCTION_POLICY.verificationRule}</p>
          </div>
        </div>
      </section>

      <section className="anchor-review__section" aria-labelledby="bundle-heading">
        <div className="anchor-review__section-heading">
          <div>
            <p>First production bundle</p>
            <h2 id="bundle-heading">Required master/reference slots</h2>
          </div>
        </div>
        <div className="anchor-review__cards">
          {STAGE075_ANCHOR_REVIEW_BUNDLES.map((bundle) => {
            const progress = getStage075AnchorBundleProgress(bundle);
            return (
              <article className="anchor-review__card" key={bundle.anchorId} data-testid={`review-bundle-${bundle.anchorId}`}>
                <div className="anchor-review__card-heading">
                  <h3>{bundle.reviewOrder}. {bundle.anchorId}</h3>
                  <span className="anchor-review__progress">{progress.approved}/{progress.required}</span>
                </div>
                <ul className="anchor-review__slot-list">
                  {bundle.slots.map((item) => (
                    <li key={item.id}>
                      <div className="anchor-review__slot-heading">
                        <strong>{item.label}</strong>
                        <span className={`anchor-review__slot-state anchor-review__slot-state--${item.approvedPath ? 'approved' : 'planned'}`}>
                          {item.approvedPath ? 'approved reference' : 'planned candidate path'}
                        </span>
                      </div>
                      <span>{item.purpose}</span>
                      {item.parentSlotId ? (
                        <p
                          className="anchor-review__mono"
                          data-testid={`slot-parent-${bundle.anchorId}-${item.id}`}
                        >
                          <strong>Derived from:</strong> <code>{item.parentSlotId}</code>
                        </p>
                      ) : null}
                      {item.candidateBrief ? (
                        <div className="anchor-review__candidate-brief" data-testid={`candidate-brief-${bundle.anchorId}-${item.id}`}>
                          <p><strong>Mode:</strong> <code>{item.candidateBrief.mode}</code></p>
                          <p><strong>Controlled instruction:</strong> {item.candidateBrief.instruction}</p>
                          <div>
                            <strong>Review focus</strong>
                            <ul>
                              {item.candidateBrief.reviewFocus.map((focus) => <li key={focus}>{focus}</li>)}
                            </ul>
                          </div>
                          <p className="anchor-review__mono">
                            <strong>Reject:</strong> {item.candidateBrief.rejectCodes.join(' · ')}
                          </p>
                        </div>
                      ) : null}
                      <code>{item.approvedPath ?? item.plannedRepositoryPath}</code>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="anchor-review__section" aria-labelledby="style-anchor-heading">
        <div className="anchor-review__section-heading">
          <div>
            <p>Gate 0</p>
            <h2 id="style-anchor-heading">{STAGE075_STYLE_ANCHOR.id}</h2>
          </div>
          <StatusBadge status={STAGE075_STYLE_ANCHOR.status} />
        </div>
        <div className="anchor-review__two-col">
          <div>
            <h3>Immutable</h3>
            <ul>{STAGE075_STYLE_ANCHOR.immutableTraits.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>Reject if</h3>
            <ul>{STAGE075_STYLE_ANCHOR.forbiddenDrift.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
        <p className="anchor-review__path-state">
          approved references: {STAGE075_STYLE_ANCHOR.approvedReferencePaths?.length ?? 0}
        </p>
      </section>

      <section className="anchor-review__section" aria-labelledby="visual-anchor-heading">
        <div className="anchor-review__section-heading">
          <div>
            <p>Gate 1–6</p>
            <h2 id="visual-anchor-heading">Priority visual anchors</h2>
          </div>
        </div>
        <div className="anchor-review__cards">
          {priorityVisualAnchors.map((anchor) => (
            <article className="anchor-review__card" key={anchor.id} data-testid={`visual-anchor-${anchor.id}`}>
              <div className="anchor-review__card-heading">
                <h3>{anchor.id}</h3>
                <StatusBadge status={anchor.status} />
              </div>
              <p className="anchor-review__meta">{anchor.kind} · {anchor.scenes.join(' · ')}</p>
              <h4>Must stay fixed</h4>
              <ul>{anchor.immutableTraits.map((item) => <li key={item}>{item}</li>)}</ul>
              <h4>Forbidden drift</h4>
              <ul>{anchor.forbiddenDrift.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className="anchor-review__path-state">
                approved master paths: {anchor.approvedReferencePaths?.length ?? 0}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="anchor-review__section" aria-labelledby="anatomy-heading">
        <div className="anchor-review__section-heading">
          <div>
            <p>Anatomy / Contact</p>
            <h2 id="anatomy-heading">Body proportion & geometry contracts</h2>
          </div>
        </div>
        <div className="anchor-review__cards anchor-review__cards--anatomy">
          {priorityAnatomyContracts.map((contract) => (
            <article className="anchor-review__card" key={contract.id} data-testid={`anatomy-contract-${contract.id}`}>
              <div className="anchor-review__card-heading">
                <h3>{contract.id}</h3>
                <StatusBadge status={contract.status} />
              </div>
              <p className="anchor-review__meta">{contract.scenes.join(' · ')}</p>
              <h4>Measure / lock</h4>
              <ul>{contract.proportionKeys.map((item) => <li key={item}>{item}</li>)}</ul>
              <h4>Required poses</h4>
              <p className="anchor-review__mono">{contract.requiredPoseFamilies.join(' · ')}</p>
              <h4>Reject codes</h4>
              <p className="anchor-review__mono">{contract.forbiddenDriftCodes.join(' · ')}</p>
              <p className="anchor-review__path-state">
                approved master paths: {contract.approvedMasterPaths?.length ?? 0}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="anchor-review__section" aria-labelledby="scene-gate-heading">
        <div className="anchor-review__section-heading">
          <div>
            <p>Downstream</p>
            <h2 id="scene-gate-heading">Scene raster readiness</h2>
          </div>
        </div>
        <div className="anchor-review__table-wrap">
          <table className="anchor-review__table">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Status</th>
                <th>Visual anchors</th>
                <th>Anatomy / geometry</th>
                <th>Sources</th>
              </tr>
            </thead>
            <tbody>
              {STAGE075_RASTER_MANIFEST.map((record) => (
                <tr key={record.assetId}>
                  <td><strong>{record.assetId}</strong><br /><span>{record.sceneIds.join(' · ')}</span></td>
                  <td><StatusBadge status={record.status} /></td>
                  <td>{record.requiredAnchorIds.join(', ')}</td>
                  <td>{record.requiredAnatomyContractIds.join(', ') || 'none'}</td>
                  <td>{record.sources ? 'registered' : 'not registered'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
