import { SectionLabel } from '@/components/section-label';
import { techStack } from '@/lib/constants';

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 py-24 sm:px-8 lg:py-36" data-testid="section-skills">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionLabel index="03">Tools of the trade</SectionLabel>
          <h2 className="display-font mt-5 text-5xl leading-[.9] tracking-[-.05em] sm:text-7xl">
            The stack is
            <br />
            <span className="text-muted-foreground">a point of view.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 border-l hairline sm:grid-cols-3">
          {techStack.map((item, index) => (
            <div key={item} className="border-b border-r hairline p-4 sm:p-5">
              <span className="mono-font text-[10px] text-primary">0{index + 1}</span>
              <p className="mt-5 text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
