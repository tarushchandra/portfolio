import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';

export default function NotFound() {
  return (
    <PageFrame>
      <main className="mx-auto max-w-[1240px] px-5 py-32 sm:px-8">
        <p className="eyebrow text-primary">404 / Lost in the stack</p>
        <h1 className="display-font mt-6 text-7xl tracking-[-.06em]">Nothing here.</h1>
        <Link href="/" className="focus-ring mt-8 inline-flex items-center gap-2 font-bold text-primary" data-testid="link-404-home">
          Return home <ArrowUpRight size={15} />
        </Link>
      </main>
    </PageFrame>
  );
}
