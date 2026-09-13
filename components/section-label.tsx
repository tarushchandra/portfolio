import type { ReactNode } from 'react';

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="eyebrow flex items-center gap-3 text-primary">
      <span>{index}</span>
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}
