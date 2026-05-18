"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS, AGENCY_SHORT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);

    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push("/");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-dark/95 py-4 shadow-lg backdrop-blur-md"
            : "bg-transparent py-6",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            onClick={handleLogoClick}
            aria-current={isHome ? "page" : undefined}
            aria-label="Zur Startseite"
            className="font-serif text-xl tracking-wide text-gold transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:text-2xl"
          >
            {AGENCY_SHORT}
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Hauptnavigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#kontakt" variant="primary" size="sm">
              Beratung anfragen
            </Button>
          </div>

          <button
            type="button"
            className="rounded-sm p-2 text-white lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            onClick={() => setMenuOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
