import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="portfolio-shell noise min-h-[100dvh]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
