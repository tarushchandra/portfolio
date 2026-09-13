'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';

function downloadResume() {
  const text = `TARUSH CHANDRA
Frontend-focused full-stack software engineer

PROFILE
Moved from Electrical Engineering into software through 3.5 years of rigorous self-directed practice.

SELECTED WORK
Common Ground — production social media platform
Next.js, React, TypeScript, GraphQL, TanStack Query, Redux Toolkit, Node.js, PostgreSQL, Redis, AWS EC2/S3/CloudFront, Nginx

CAPABILITIES
Frontend architecture · Full-stack product engineering · GraphQL systems · Performance · Realtime interfaces

CONTACT
tarush@example.com`;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'tarush-chandra-resume.txt';
  anchor.click();
  URL.revokeObjectURL(url);
}

export default function ResumePage() {
  return (
    <PageFrame>
      <main className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-8 border-b hairline pb-12 sm:flex-row sm:items-end">
          <div>
            <Link
              href="/"
              className="focus-ring mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
              data-testid="link-resume-back"
            >
              <ArrowLeft size={15} /> Back to home
            </Link>
            <div className="eyebrow text-primary">Resume / 2025</div>
            <h1 className="display-font mt-5 text-7xl leading-[.82] tracking-[-.06em] sm:text-9xl">
              Tarush
              <br />
              <span className="text-primary">Chandra.</span>
            </h1>
          </div>
          <button
            type="button"
            onClick={downloadResume}
            className="focus-ring inline-flex w-fit items-center gap-3 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            data-testid="button-download-resume"
          >
            <Download size={16} /> Download resume
          </button>
        </div>

        <div className="grid gap-16 py-16 lg:grid-cols-[.55fr_1.45fr]">
          <aside>
            <p className="text-sm leading-6 text-muted-foreground">
              Frontend-focused full-stack software engineer
              <br />
              India · working globally
              <br />
              <a
                href="mailto:tarush@example.com"
                className="focus-ring mt-3 inline-block font-semibold text-foreground underline decoration-primary underline-offset-4"
                data-testid="link-resume-email"
              >
                tarush@example.com
              </a>
            </p>
          </aside>

          <div className="max-w-3xl">
            <p className="display-font text-4xl leading-[1] tracking-[-.04em] sm:text-6xl">
              I build interfaces with a systems mindset — clear in the browser, considered at the boundary, and
              resilient in production.
            </p>

            <div className="mt-16 grid gap-12 border-t hairline pt-8 sm:grid-cols-2">
              <div>
                <span className="eyebrow text-primary">Experience focus</span>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  <li>Frontend architecture & design systems</li>
                  <li>GraphQL and server-state modeling</li>
                  <li>Realtime product interactions</li>
                  <li>Performance and delivery infrastructure</li>
                </ul>
              </div>
              <div>
                <span className="eyebrow text-primary">Selected project</span>
                <h2 className="mt-5 text-2xl font-bold">Common Ground</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Production social media platform with Next.js, GraphQL, Redis, PostgreSQL, and AWS.
                </p>
                <Link
                  href="/work/social-platform"
                  className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
                  data-testid="link-resume-case-study"
                >
                  Read the case study <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div className="mt-16 border-t hairline pt-8">
              <span className="eyebrow text-primary">Working method</span>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-bold">01</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Trace the constraint</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">02</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Make the model legible</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">03</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Ship, observe, refine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageFrame>
  );
}
