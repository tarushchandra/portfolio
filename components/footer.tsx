import { Socials } from "./socials";

export function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p
          className="mono-font text-[10px] uppercase tracking-[.12em] text-muted-foreground"
          data-testid="text-footer-signature"
        >
          Made with ❤️
        </p>
        <div className="flex items-center gap-5">
          <Socials />
        </div>
        <p className="mono-font text-[10px] uppercase tracking-[.12em] text-muted-foreground">
          © {new Date().getFullYear()} Tarush Chandra
        </p>
      </div>
    </footer>
  );
}
