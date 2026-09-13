import { PageFrame } from '@/components/page-frame';
import { Hero } from '@/components/home/hero';
import { WorkSection } from '@/components/home/work-section';
import { AboutSection } from '@/components/home/about-section';
import { SkillsSection } from '@/components/home/skills-section';
import { ContactSection } from '@/components/home/contact-section';

export default function Home() {
  return (
    <PageFrame>
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </PageFrame>
  );
}
