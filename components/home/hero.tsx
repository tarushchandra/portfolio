"use client";
import { useState, type MouseEvent } from "react";
import Image from "next/image";
import { ArrowDownRight, Mail } from "lucide-react";
import { Socials } from "../socials";

export function Hero() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      className="relative overflow-hidden border-b hairline"
      onMouseMove={handleMouseMove}
      data-testid="section-hero"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(500px circle at ${pointer.x}% ${pointer.y}%, hsl(var(--primary) / .12), transparent 60%)`,
        }}
      />
      <div className="mx-auto grid min-h-[calc(100dvh-73px)] max-w-[1240px] items-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-12 lg:gap-4 lg:py-4">
        <div className="relative z-10 order-2 lg:order-1 lg:col-span-6">
          <div className="reveal reveal-delay-1 eyebrow mb-6 text-primary">
            Software Engineer
          </div>
          <h1
            className="reveal reveal-delay-1 display-font max-w-4xl text-[clamp(3.7rem,9vw,8.5rem)] leading-[.86] tracking-[-.055em]"
            data-testid="text-hero-heading"
          >
            I build
            <br />
            <em className="not-italic text-primary">products</em> that scale.
          </h1>
          <p className="reveal reveal-delay-2 mt-4 max-w-full text-base leading-7 text-muted-foreground sm:text-lg">
            Crafting modern web applications with a focus on performance,
            scalability, and clean architecture.
          </p>
          <div className="reveal reveal-delay-3 my-4 flex items-center gap-5">
            <Socials />
          </div>
          <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="focus-ring inline-flex items-center gap-3 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              data-testid="button-view-work"
            >
              View selected work <ArrowDownRight size={16} />
            </a>
            <a
              href="mailto:tarush@example.com"
              className="focus-ring inline-flex items-center gap-3 border hairline px-5 py-3 text-sm font-bold transition-colors hover:border-foreground"
              data-testid="link-hero-email"
            >
              Say hello <Mail size={15} />
            </a>
          </div>
          <div className="reveal reveal-delay-5 mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="mono-font">Based in India · working globally</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" /> Available now
            </span>
          </div>
        </div>

        <div
          className="relative reveal reveal-delay-1 mx-auto aspect-square w-full order-1 lg:order-2 lg:col-span-6"
          data-testid="hero-portrait"
        >
          <div className="absolute inset-[0%] rounded-full border border-primary/30" />
          <div className="hero-orbit absolute inset-[2%] rounded-full border border-dashed border-accent/50" />

          <div className="absolute inset-[6%] overflow-hidden rounded-full border border-primary bg-background p-2 shadow-[0_0_0_14px_hsl(var(--primary)/.08)]">
            <Image
              src="/images/tarush-portrait.png"
              alt="Portrait of Tarush Chandra"
              fill
              className="rounded-full object-cover object-center"
              data-testid="img-hero-portrait"
              priority
            />
          </div>
          <span className="absolute right-[20%] top-[9%] h-2 w-2 bg-primary" />
          <span className="absolute bottom-[13%] left-[18%] h-2 w-2 rounded-full bg-accent" />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-5 right-8 hidden items-center gap-3 mono-font text-[10px] uppercase tracking-[.16em] text-muted-foreground lg:flex">
        <span className="h-px w-10 bg-border" /> Scroll down{" "}
        <ArrowDownRight size={12} />
      </div>
    </section>
  );
}
