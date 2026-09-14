import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/section-label";

export function Work() {
  return (
    <section
      id="work"
      className="bg-secondary/40 scroll-mt-20 px-5 py-24 sm:px-8 lg:py-36"
      data-testid="section-work"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel index="01">Work</SectionLabel>
            <h2 className="display-font mt-5  text-5xl leading-[.95] tracking-[-.04em] sm:text-7xl">
              Things I’ve built.
              <br />
              <span className="text-muted-foreground">
                Production systems and experiments.
              </span>
            </h2>
          </div>
        </div>

        <div
          className="group focus-ring block border-y hairline"
          data-testid="link-case-study"
        >
          <div className="grid gap-10 py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-14">
            <div>
              <video
                src="/videos/kuckoo-demo.m4v"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border" />
                  <div className="flex items-center gap-4">
                    <Link
                      className="flex items-center gap-0 text-primary hover:underline"
                      href="https://kuckoo.tarushchandra.com"
                      target="_blank"
                    >
                      <span className="eyebrow text-primary">Live</span>
                      <ArrowUpRight
                        className="text-primary transition-transform"
                        size={19}
                      />
                    </Link>
                    <Link
                      className="flex items-center gap-0 text-primary hover:underline"
                      href="https://github.com/tarushchandra/kuckoo-server"
                      target="_blank"
                    >
                      <span className="eyebrow text-primary">Source-1</span>
                      <ArrowUpRight
                        className="text-primary transition-transform"
                        size={19}
                      />
                    </Link>
                    <Link
                      className="flex items-center gap-0 text-primary hover:underline"
                      href="https://github.com/tarushchandra/kuckoo-client"
                      target="_blank"
                    >
                      <span className="eyebrow text-primary">Source-2</span>
                      <ArrowUpRight
                        className="text-primary transition-transform"
                        size={19}
                      />
                    </Link>
                  </div>
                </div>
                <h3 className="max-w-xl text-3xl font-bold tracking-[-.04em] sm:text-5xl">
                  Kuckoo — a full-stack social platform.
                </h3>
                <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
                  A full-stack social platform for sharing posts, discovering
                  content, and connecting with others in real time. Built with
                  authentication, media uploads, live presence, real-time chats,
                  notifications, and responsive feeds, along with caching and
                  optimized data delivery across the stack.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Express",
                  "GraphQL",
                  "PostgreSQL",
                  "Redis",
                  "Websockets",
                  "Docker",
                  "AWS",
                ].map((item) => (
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
        </div>
      </div>
    </section>
  );
}
