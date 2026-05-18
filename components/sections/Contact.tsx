"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { agency } from "@/lib/data/agency";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeUp, useMotionConfig } from "@/lib/motion";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const { transition, viewport, prefersReducedMotion } = useMotionConfig();

  const validate = (form: FormData): FormErrors => {
    const next: FormErrors = {};
    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const message = (form.get("message") as string)?.trim();

    if (!name) next.name = "Bitte geben Sie Ihren Namen ein.";
    if (!email) next.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!message) next.message = "Bitte geben Sie eine Nachricht ein.";
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
    }
  };

  const inputClass =
    "w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-muted/60 focus:border-gold focus:outline-none transition-colors";

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-background py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Kontakt"
          title="Lassen Sie uns sprechen"
          description="Vereinbaren Sie ein unverbindliches Erstgespräch — persönlich in München oder per Video."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={transition}
          >
            {submitted ? (
              <div className="border border-gold/30 bg-gold/5 p-10">
                <p className="font-serif text-2xl font-light text-foreground">
                  Vielen Dank
                </p>
                <p className="mt-4 text-muted">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted">
                    Name *
                  </label>
                  <input id="name" name="name" type="text" className={inputClass} />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted">
                    E-Mail *
                  </label>
                  <input id="email" name="email" type="email" className={inputClass} />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] text-muted">
                    Telefon
                  </label>
                  <input id="phone" name="phone" type="tel" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="subject" className="text-xs uppercase tracking-[0.2em] text-muted">
                    Betreff
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className={`${inputClass} cursor-pointer`}
                    defaultValue="verkauf"
                  >
                    <option value="verkauf">Immobilie verkaufen</option>
                    <option value="kauf">Immobilie kaufen</option>
                    <option value="bewertung">Bewertung anfragen</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" variant="primary" size="lg">
                  Nachricht senden
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{ ...transition, delay: 0.15 }}
            className="space-y-8"
          >
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Telefon</p>
                  <a
                    href={agency.contact.phoneHref}
                    className="mt-1 block text-lg text-foreground hover:text-gold"
                  >
                    {agency.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">E-Mail</p>
                  <a
                    href={agency.contact.emailHref}
                    className="mt-1 block text-lg text-foreground hover:text-gold"
                  >
                    {agency.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Adresse</p>
                  <p className="mt-1 text-lg text-foreground">
                    {agency.contact.address}
                    <br />
                    {agency.contact.city}
                  </p>
                </div>
              </li>
            </ul>

            <div className="aspect-video w-full overflow-hidden grayscale transition-[filter] hover:grayscale-0">
              <iframe
                title="Standort Weiß & Partner Immobilien auf Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.5!2d11.581!3d48.139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f759f089c1%3A0x64cd70e1b59a4efe!2sMaximilianstra%C3%9Fe%2C%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
