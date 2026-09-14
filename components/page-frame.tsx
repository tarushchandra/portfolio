import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="portfolio-shell noise min-h-[100dvh]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
