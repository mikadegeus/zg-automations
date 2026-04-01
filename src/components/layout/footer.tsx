import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <Link href="#" className="flex items-center gap-2.5 justify-center md:justify-start">
              <span className="gradient-text text-xl font-black tracking-tight">
                ZG
              </span>
              <span className="text-foreground font-semibold text-[1.05rem]">
                Automations
              </span>
            </Link>
            <p className="text-text-dim text-sm mt-2">
              AI & automatisering voor bedrijven.
            </p>
          </div>
          <div className="flex gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-text-dim text-xs text-center">
            &copy; {new Date().getFullYear()} ZG Automations. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
