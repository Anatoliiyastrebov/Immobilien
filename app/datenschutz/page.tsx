import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AGENCY_NAME } from "@/lib/constants";
import { agency } from "@/lib/data/agency";

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
              Diese Website ist ein Portfolio-Projekt; die genannte Agentur ist fiktiv. Die
              Erklärung beschreibt, welche Daten beim Besuch dieser Website tatsächlich verarbeitet
              werden.
            </p>

            <section>
              <h2 className="font-serif text-xl text-foreground">1. Verantwortlicher</h2>
              <p>
                Aurelhaus Immobilien GmbH (fiktiv)
                <br />
                {agency.contact.fullAddress}
                <br />
                E-Mail: {agency.contact.email}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">2. Hosting</h2>
              <p>
                Diese Website wird von Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107,
                USA ausgeliefert. Beim Aufruf verarbeitet Cloudflare technisch notwendige Daten wie
                IP-Adresse, Zeitpunkt, aufgerufene Seite und Browsertyp, um die Website auszuliefern
                und vor Angriffen zu schützen. Rechtsgrundlage ist unser berechtigtes Interesse an
                einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Mit Cloudflare
                besteht ein Vertrag zur Auftragsverarbeitung; Cloudflare ist unter dem EU-US Data
                Privacy Framework zertifiziert. Weitere Informationen:{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  className="text-gold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung von Cloudflare
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">3. Kontaktformular</h2>
              <p>
                Das Kontaktformular dient ausschließlich der Demonstration. Eingaben werden nur im
                Browser geprüft und weder übermittelt noch gespeichert.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">4. Cookies und lokale Speicherung</h2>
              <p>
                Diese Website setzt keine Cookies und speichert keine Informationen auf Ihrem Gerät
                (weder Local Storage noch Session Storage). Es findet kein Tracking statt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">5. Schriftarten und Bilder</h2>
              <p>
                Schriftarten und Bilder werden direkt von dieser Website geladen. Es besteht dabei
                keine Verbindung zu Servern Dritter.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">6. Google Maps</h2>
              <p>
                Die Karte im Kontaktbereich wird erst geladen, wenn Sie auf „Karte laden“ klicken.
                Erst dann werden Daten, u. a. Ihre IP-Adresse, an Google Ireland Limited, Gordon
                House, Barrow Street, Dublin 4, Irland übertragen; eine Übermittlung an Google LLC in
                den USA ist möglich. Google ist unter dem EU-US Data Privacy Framework zertifiziert.
                Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1
                TDDDG). Die Einwilligung gilt nur für den aktuellen Seitenaufruf; nach dem Neuladen
                wird die Karte nicht mehr angezeigt. Weitere Informationen:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-gold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">7. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO) sowie das
                Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu
                widerrufen. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde
                beschweren (Art. 77 DSGVO).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground">8. Änderungen</h2>
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
