import type { Stage075RasterRecord } from './stage075RasterManifest';

interface Stage075RasterMediaProps {
  record: Stage075RasterRecord;
  className?: string;
  eager?: boolean;
}

export function Stage075RasterMedia({
  record,
  className,
  eager = false,
}: Stage075RasterMediaProps) {
  const sources = record.status === 'approved' ? record.sources : undefined;

  if (!sources) {
    return (
      <div
        className={`stage075-raster-slot stage075-raster-slot--pending ${className ?? ''}`.trim()}
        data-testid={`raster-slot-${record.assetId}`}
        data-raster-status={record.status}
        aria-label={`${record.assetId} raster asset ${record.status}`}
      >
        <span className="stage075-raster-slot__eyebrow">RASTER SLOT · {record.pvId}</span>
        <strong>{record.assetId}</strong>
        <span>{record.role}</span>
        <span>{record.requiredFamilies.join(' / ')}</span>
        {record.rejectionReason ? (
          <span className="stage075-raster-slot__reject">{record.rejectionReason}</span>
        ) : null}
      </div>
    );
  }

  const loading = eager ? 'eager' : 'lazy';

  return (
    <picture
      className={`stage075-raster-media ${className ?? ''}`.trim()}
      data-testid={`raster-media-${record.assetId}`}
      data-asset-id={record.assetId}
      data-raster-status="approved"
    >
      {sources.phonePortrait ? (
        <source
          media="(orientation: portrait) and (max-width: 599px)"
          srcSet={sources.phonePortrait}
          data-composition-family="PP"
        />
      ) : null}
      {sources.tabletPortrait ? (
        <source
          media="(orientation: portrait) and (min-width: 600px)"
          srcSet={sources.tabletPortrait}
          data-composition-family="TP"
        />
      ) : null}
      <img
        src={sources.landscape}
        alt={record.alt}
        loading={loading}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        style={{
          objectFit: record.objectFit ?? 'cover',
          objectPosition: record.objectPosition ?? '50% 50%',
        }}
      />
    </picture>
  );
}
