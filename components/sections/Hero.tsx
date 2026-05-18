"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { agency } from "@/lib/data/agency";
import { Button } from "@/components/ui/Button";
export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Startseite"
    >
      <Image
        src={agency.heroImage}
        alt="Luxuriöse Immobilie mit Panoramablick"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-block text-xs uppercase tracking-[0.4em] text-gold"
        >
          München · Premium Immobilien
        </motion.span>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-serif text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl text-balance"
        >
          {agency.headline}
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          {agency.subline}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#kontakt" variant="primary" size="lg">
            Immobilie verkaufen
          </Button>
          <Button href="#objekte" variant="secondary" size="lg">
            Objekte entdecken
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#ueber-uns"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-gold"
        aria-label="Nach unten scrollen"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.a>
    </section>
  );
}
