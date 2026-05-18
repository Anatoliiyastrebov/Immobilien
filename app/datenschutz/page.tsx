import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AGENCY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Datenschutz | ${AGENCY_NAME}`,
  description: "Datenschutzerklärung — Portfolio-Projekt.",
};

export default function DatenschutzPage() {
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
          <h1 className="mt-8 font-serif text-4xl font-light md:text-5xl">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-neutral mt-12 max-w-none space-y-8 text-muted">
            <p className="text-sm italic text-gold">
              Diese Datenschutzerklärung ist ein Platzhalter für das Portfolio-Projekt. Es werden
              keine personenbezogenen Daten dauerhaft gespeichert oder an Dritte weitergegeben.
            </p>

            <section>
              <h2 className="font-serif text-xl text-foreground">1. Verantwortlicher</h2>
              <p>
                Weiß & Partner Immobilien GmbH (fiktiv)
                <br />
                Maximilianstraße 35, 80539 München
                <br />
                E-Mail: kontakt@weiss-partner-immobilien.de
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">2. Erhebung und Speicherung</h2>
              <p>
                Beim Besuch dieser Website werden technisch notwendige Daten (z. B. IP-Adresse,
                Browsertyp) durch den Hosting-Anbieter verarbeitet. Das Kontaktformular dient
                ausschließlich der Demonstration — übermittelte Daten werden nicht gespeichert.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">3. Cookies</h2>
              <p>
                Diese Demo-Website verwendet keine Tracking-Cookies. SessionStorage wird nur für
                die Ladeanimation genutzt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">4. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch gemäß DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">5. Externe Dienste</h2>
              <p>
                Google Maps wird per eingebettetem iframe geladen. Es gelten die Datenschutzbestimmungen
                von Google Ireland Limited.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">6. Änderungen</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte
                Rechtslagen anzupassen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
