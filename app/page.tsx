import { PageFrame } from "@/components/page-frame";
import { Hero } from "@/components/home/hero";
import { Work } from "@/components/home/work";
import { About } from "@/components/home/about";
import { Skills } from "@/components/home/skills";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <PageFrame>
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
    </PageFrame>
  );
}
