import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/section-label";

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-[1240px] scroll-mt-20 px-5 py-24 sm:px-8 lg:py-36"
      data-testid="section-work"
    >
      <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <SectionLabel index="01">Selected work</SectionLabel>
          <h2 className="display-font mt-5 max-w-2xl text-5xl leading-[.95] tracking-[-.04em] sm:text-7xl">
            One deep build
            <br />
            <span className="text-muted-foreground">beats five claims.</span>
          </h2>
        </div>
        <p className="max-w-[290px] text-sm leading-6 text-muted-foreground">
          A production social platform built end to end — from interaction model
          to cloud edge.
        </p>
      </div>

      <Link
        href="/work/social-platform"
        className="group focus-ring block border-y hairline"
        data-testid="link-case-study"
      >
        <div className="grid gap-10 py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-14">
          <div className="relative min-h-[290px] overflow-hidden bg-[#162a35] p-6 text-[#f4efe5]">
            <div className="grid-paper absolute inset-0 opacity-20" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between mono-font text-[10px] uppercase tracking-[.13em] text-[#a9c5c4]">
                <span>Case / 001</span>
                <span>Production</span>
              </div>
              <div className="relative">
                <div className="absolute -right-2 -top-16 h-44 w-44 rounded-full border border-[#ef7655]/70" />
                <div className="absolute -right-10 -top-24 h-60 w-60 rounded-full border border-dashed border-[#78b6b2]/60" />
                <p className="display-font text-6xl leading-[.8] tracking-[-.06em]">
                  Common
                  <br />
                  <span className="text-[#ef7655]">Ground</span>
                </p>
                <p className="mt-5 max-w-[220px] mono-font text-[10px] uppercase leading-5 tracking-[.08em] text-[#a9c5c4]">
                  A social layer for the ideas worth returning to.
                </p>
              </div>
              <div className="flex justify-between mono-font text-[10px] text-[#a9c5c4]">
                <span>Next.js / GraphQL</span>
                <span>2024—25</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="eyebrow text-primary">Flagship project</span>
                <span className="h-px flex-1 bg-border" />
                <ArrowUpRight
                  className="text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={19}
                />
              </div>
              <h3 className="max-w-xl text-3xl font-bold tracking-[-.04em] sm:text-5xl">
                Common Ground — social media, treated as a system.
              </h3>
              <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
                A production-grade platform designed and shipped across the
                stack. The case study goes behind the interface: auth, realtime
                presence, query shape, caching, media delivery, and deployment.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Next.js", "GraphQL", "Redis", "AWS"].map((item) => (
                <span
                  key={item}
                  className="border hairline px-3 py-1.5 mono-font text-[10px] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
