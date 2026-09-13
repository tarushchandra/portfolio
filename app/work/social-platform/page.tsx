import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';
import { SectionLabel } from '@/components/section-label';
import { techStack } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Common Ground — Case Study | Tarush Chandra',
};

const sections: Array<[string, string, string]> = [
  [
    '01',
    'The brief',
    'Build a social product where conversation feels immediate, but the underlying system stays predictable under load. I owned the frontend architecture and the connective tissue across the stack.',
  ],
  [
    '02',
    'Identity & auth',
    'A secure session flow keeps access tokens out of the UI surface. Protected routes, refresh handling, and optimistic profile edits are explicit states rather than edge-case patches.',
  ],
  [
    '03',
    'The query shape',
    'GraphQL gave the client a precise contract. Batched author queries removed N+1 behavior, while cursor pagination kept feeds stable as new posts arrived. TanStack Query owns server state; Redux Toolkit owns interaction state.',
  ],
  [
    '04',
    'Realtime without noise',
    'WebSockets power presence and live activity. Events are normalized at the boundary, then translated into small cache updates — no full-feed refetch every time someone likes a post.',
  ],
  [
    '05',
    'Media at the edge',
    'Uploads land in S3, then travel through CloudFront for fast delivery. The API stores metadata and signed access details, not heavy binary payloads.',
  ],
  [
    '06',
    'Shipping the thing',
    'Node.js services run on AWS EC2 behind Nginx. PostgreSQL is the source of truth, Redis handles hot reads and ephemeral state, and the deployment path is observable enough to debug at 2am.',
  ],
];

export default function CaseStudyPage() {
  return (
    <PageFrame>
      <main>
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
            data-testid="link-back-home"
          >
            <ArrowLeft size={15} /> Back to home
          </Link>
        </div>

        <section className="border-y hairline bg-[#162a35] text-[#f4efe5]" data-testid="section-case-study-hero">
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-32">
            <div className="eyebrow text-[#ef7655]">Case study / 001 · Production</div>
            <h1 className="display-font mt-7 max-w-4xl text-[clamp(4rem,10vw,9rem)] leading-[.8] tracking-[-.06em]">
              Common
              <br />
              <span className="text-[#ef7655]">Ground.</span>
            </h1>
            <div className="mt-12 grid gap-8 border-t border-[#a9c5c4]/30 pt-6 sm:grid-cols-3">
              <div>
                <span className="eyebrow text-[#a9c5c4]">Role</span>
                <p className="mt-2 text-sm">Frontend-focused full-stack engineer</p>
              </div>
              <div>
                <span className="eyebrow text-[#a9c5c4]">Surface area</span>
                <p className="mt-2 text-sm">Product · Architecture · Deployment</p>
              </div>
              <div>
                <span className="eyebrow text-[#a9c5c4]">Core stack</span>
                <p className="mt-2 text-sm">Next.js · GraphQL · PostgreSQL · AWS</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[.6fr_1.4fr]">
            <div>
              <SectionLabel index="Read the build">Inside the system</SectionLabel>
            </div>
            <div>
              <p className="display-font max-w-3xl text-4xl leading-[1] tracking-[-.04em] sm:text-6xl">
                A social platform is a choreography of small decisions. This is what happens when those decisions
                are made deliberately.
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
                Common Ground was built as a production social media platform — not a screens-only exercise. The
                goal was a product that felt quick at the surface because the system underneath had a clear
                opinion.
              </p>
            </div>
          </div>

          <div className="mt-24 border-t hairline">
            {sections.map(([index, title, body]) => (
              <article
                key={index}
                className="grid gap-5 border-b hairline py-8 sm:grid-cols-[.18fr_.42fr_1fr] sm:gap-8"
                data-testid={`article-case-study-${index}`}
              >
                <span className="mono-font text-xs text-primary">{index}</span>
                <h2 className="text-xl font-bold tracking-[-.03em]">{title}</h2>
                <p className="max-w-2xl leading-7 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y hairline bg-secondary/40">
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <SectionLabel index="The full stack">Technical inventory</SectionLabel>
                <h2 className="display-font mt-5 text-5xl tracking-[-.05em] sm:text-7xl">No black boxes.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Each tool has a job. The craft is in the seams between them.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {techStack.map((item) => (
                <span key={item} className="border hairline bg-background px-4 py-2 mono-font text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-20 sm:px-8 sm:flex-row sm:items-center sm:justify-between lg:py-28">
          <div>
            <p className="eyebrow text-primary">Keep exploring</p>
            <h2 className="display-font mt-4 text-5xl tracking-[-.05em]">
              Back to the person
              <br />
              behind the system.
            </h2>
          </div>
          <Link
            href="/#contact"
            className="focus-ring inline-flex w-fit items-center gap-3 border hairline px-5 py-3 text-sm font-bold transition-colors hover:border-primary hover:text-primary"
            data-testid="link-case-contact"
          >
            Start a conversation <ChevronRight size={16} />
          </Link>
        </section>
      </main>
    </PageFrame>
  );
}
