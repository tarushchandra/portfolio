import { SectionLabel } from "@/components/section-label";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y hairline bg-secondary/40"
      data-testid="section-about"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-24 lg:py-32">
        <div>
          <SectionLabel index="02">The through line</SectionLabel>
          <p className="display-font mt-6 text-4xl leading-[.95] tracking-[-.04em] sm:text-5xl">
            Curious enough to go deep.
            <br />
            <span className="text-primary">Practical enough to ship.</span>
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <span className="mono-font text-xs text-primary">01</span>
            <h3 className="mt-4 text-xl font-bold">
              From circuits to interfaces
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Electrical Engineering taught me to trace a system from first
              principles. Software gave me a much faster feedback loop. I
              followed it for 3.5 years, every day.
            </p>
          </div>
          <div>
            <span className="mono-font text-xs text-primary">02</span>
            <h3 className="mt-4 text-xl font-bold">
              Frontend is the vantage point
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              I care about the last mile: state that feels legible, transitions
              that explain themselves, and performance users can feel — backed
              by a backend I understand.
            </p>
          </div>
          <div className="sm:col-span-2 border-t hairline pt-6">
            <p className="max-w-2xl text-lg leading-8">
              &ldquo;The best interface decisions are usually architecture
              decisions made visible.&rdquo;
            </p>
            <p className="mt-3 mono-font text-[10px] uppercase tracking-[.14em] text-muted-foreground">
              — Working principle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
