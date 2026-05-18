import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AGENCY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Impressum | ${AGENCY_NAME}`,
  description: "Impressum und rechtliche Angaben — Portfolio-Projekt.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="bg-background pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm uppercase tracking-widest text-gold hover:underline"
          >
            ← Zurück zur Startseite
          </Link>
          <h1 className="mt-8 font-serif text-4xl font-light md:text-5xl">Impressum</h1>

          <div className="prose prose-neutral mt-12 max-w-none space-y-8 text-muted">
            <section>
              <h2 className="font-serif text-xl text-foreground">Angaben gemäß § 5 TMG</h2>
              <p>
                Weiß & Partner Immobilien GmbH
                <br />
                Maximilianstraße 35
                <br />
                80539 München
              </p>
              <p className="mt-4 text-sm italic text-gold">
                Hinweis: Dies ist eine fiktive Agentur. Diese Website dient ausschließlich
                Demonstrationszwecken als Portfolio-Projekt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">Vertreten durch</h2>
              <p>
                Dr. Markus Weiß, Geschäftsführer
                <br />
                Sabine Partner, Geschäftsführerin
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">Kontakt</h2>
              <p>
                Telefon: +49 89 234 567 80
                <br />
                E-Mail: kontakt@weiss-partner-immobilien.de
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">Registereintrag</h2>
              <p>
                Registergericht: Amtsgericht München
                <br />
                Registernummer: HRB 000000 (fiktiv)
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE000000000 (fiktiv)</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">Verantwortlich für den Inhalt</h2>
              <p>Dr. Markus Weiß, Maximilianstraße 35, 80539 München</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
