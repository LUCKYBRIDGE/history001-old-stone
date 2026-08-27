import { Stage075RasterMedia } from './Stage075RasterMedia';
import { STAGE075_RASTER_MANIFEST } from './stage075RasterManifest';

export function Stage075RasterIntegrationPreview() {
  return (
    <section className="stage075-raster-integration-preview" aria-label="Stage 07.5 raster integration preview">
      <header className="stage075-raster-integration-preview__header">
        <p>DEV-ONLY · RASTER INTEGRATION</p>
        <h1>Stage 07.5 Production Media Slots</h1>
        <p>
          승인되지 않은 생성 이미지는 runtime에 연결하지 않는다. 이 화면은 L / TP / PP raster가
          준비되는 즉시 깨진 경로나 잘못된 fallback 없이 적용할 수 있는 production adapter를 검증한다.
        </p>
      </header>

      <div className="stage075-raster-integration-preview__grid">
        {STAGE075_RASTER_MANIFEST.map((record) => (
          <article className="stage075-raster-integration-preview__card" key={record.assetId}>
            <div>
              <h2>{record.assetId}</h2>
              <p>
                {record.sceneIds.join(' · ')} · {record.role} · {record.status}
              </p>
            </div>
            <Stage075RasterMedia record={record} />
            <ul className="stage075-raster-integration-preview__checks">
              {record.continuity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
