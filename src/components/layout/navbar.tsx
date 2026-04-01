"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-border py-3"
          : "py-4"
      )}
    >
      <div className="mx-auto max-w-[1140px] px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2.5">
          <span className="gradient-text text-xl font-black tracking-tight">
            ZG
          </span>
          <span className="text-foreground font-semibold text-[1.05rem]">
            Automations
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LinkButton variant="gradient" size="sm" href="#contact">
            Contact
          </LinkButton>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden inline-flex items-center justify-center size-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-bg-elevated border-l border-border"
          >
            <SheetTitle className="sr-only">Navigatie</SheetTitle>
            <div className="flex flex-col gap-6 pt-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <LinkButton
                variant="gradient"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </LinkButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
