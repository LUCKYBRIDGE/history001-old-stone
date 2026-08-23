import type { PropsWithChildren, ReactNode } from 'react';

interface ScreenRegionProps extends PropsWithChildren {
  title: string;
  description?: ReactNode;
}

export function ScreenRegion({
  title,
  description,
  children,
}: ScreenRegionProps) {
  return (
    <section className="screen-region" aria-labelledby="screen-region-title">
      <div className="screen-region__copy">
        <h2 id="screen-region-title">{title}</h2>
        {description ? <div className="screen-region__description">{description}</div> : null}
      </div>
      <div className="screen-region__content">{children}</div>
    </section>
  );
}
