'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

export function SiteHeader() {
  const { dark, setDark } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b hairline bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3" data-testid="link-home">
          <span className="flex h-8 w-8 items-center justify-center bg-primary text-sm font-extrabold text-primary-foreground">
            TC
          </span>
          <span className="hidden text-sm font-bold tracking-[-.02em] sm:block">Tarush Chandra</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          <Link href="/#work" className="nav-link focus-ring text-[13px] font-semibold" data-testid="link-nav-work">
            Work
          </Link>
          <Link href="/#about" className="nav-link focus-ring text-[13px] font-semibold" data-testid="link-nav-about">
            About
          </Link>
          <Link href="/#skills" className="nav-link focus-ring text-[13px] font-semibold" data-testid="link-nav-skills">
            Skills
          </Link>
          <Link href="/#contact" className="nav-link focus-ring text-[13px] font-semibold" data-testid="link-nav-contact">
            Contact
          </Link>
          <Link href="/resume" className="nav-link focus-ring text-[13px] font-semibold" data-testid="link-nav-resume">
            Resume <span className="ml-1 text-primary">↗</span>
          </Link>
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="focus-ring flex h-9 w-9 items-center justify-center border hairline text-muted-foreground transition-colors hover:text-foreground"
            aria-label={dark ? 'Use light mode' : 'Use dark mode'}
            data-testid="button-toggle-theme"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="focus-ring flex h-9 w-9 items-center justify-center border hairline text-muted-foreground"
            aria-label={dark ? 'Use light mode' : 'Use dark mode'}
            data-testid="button-toggle-theme-mobile"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="focus-ring flex h-9 w-9 items-center justify-center border hairline"
            aria-label={open ? 'Close menu' : 'Open menu'}
            data-testid="button-toggle-menu"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t hairline px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {['work', 'about', 'skills', 'contact'].map((item) => (
              <Link
                key={item}
                href={`/#${item}`}
                onClick={() => setOpen(false)}
                className="nav-link focus-ring text-sm font-semibold capitalize"
                data-testid={`link-mobile-${item}`}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/resume"
              onClick={() => setOpen(false)}
              className="nav-link focus-ring text-sm font-semibold"
              data-testid="link-mobile-resume"
            >
              Resume <span className="text-primary">↗</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
