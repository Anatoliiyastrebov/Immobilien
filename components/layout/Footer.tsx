import Link from "next/link";
import { NAV_LINKS, AGENCY_NAME, AGENCY_SHORT, SOCIAL_LINKS } from "@/lib/constants";
import { agency } from "@/lib/data/agency";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const iconMap = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl font-light">{AGENCY_SHORT}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Exklusive Immobilienberatung in München und ganz Deutschland.
              Persönlich. Diskret. Auf höchstem Niveau.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Navigation</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Kontakt</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={agency.contact.phoneHref} className="hover:text-gold">
                  {agency.contact.phone}
                </a>
              </li>
              <li>
                <a href={agency.contact.emailHref} className="hover:text-gold">
                  {agency.contact.email}
                </a>
              </li>
              <li>{agency.contact.fullAddress}</li>
            </ul>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="rounded-sm p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/40">
            © {year} {AGENCY_NAME}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/impressum" className="text-white/60 hover:text-gold">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-white/60 hover:text-gold">
              Datenschutz
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-sm border border-gold/30 bg-gold/5 px-6 py-8 text-center">
          <p className="font-serif text-lg font-light text-gold md:text-xl">
            Dies ist keine echte Immobilienagentur. Diese Website wurde ausschließlich als
            Portfolio-Projekt erstellt.
          </p>
          <p className="mt-3 text-sm text-white/50">
            Alle Inhalte dienen nur zu Demonstrationszwecken.
          </p>
        </div>
      </div>
    </footer>
  );
}
