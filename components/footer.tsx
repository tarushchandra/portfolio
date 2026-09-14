import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p
          className="mono-font text-[10px] uppercase tracking-[.12em] text-muted-foreground"
          data-testid="text-footer-signature"
        >
          TC / Made with intent
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="focus-ring nav-link"
            aria-label="GitHub profile"
            data-testid="link-github"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="focus-ring nav-link"
            aria-label="LinkedIn profile"
            data-testid="link-linkedin"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:tarush@example.com"
            className="focus-ring nav-link"
            aria-label="Email Tarush"
            data-testid="link-footer-email"
          >
            <Mail size={16} />
          </a>
        </div>
        <p className="mono-font text-[10px] uppercase tracking-[.12em] text-muted-foreground">
          © {new Date().getFullYear()} Tarush Chandra
        </p>
      </div>
    </footer>
  );
}
