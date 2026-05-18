"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const testimonial = testimonials[current];

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="bewertungen"
      className="scroll-mt-24 bg-dark py-24 md:py-32"
      aria-labelledby="testimonials-heading"
      aria-roledescription="Karussell"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Kundenbewertungen"
          title="Was unsere Mandanten sagen"
          description="Diskretion verhindert viele Namen in der Öffentlichkeit — diese Stimmen dürfen wir zeigen."
          dark
          align="center"
        />

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-sm border border-white/20 p-3 text-white transition-colors hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Bewertungen">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Bewertung ${i + 1} von ${testimonials.length}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-gold" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-sm border border-white/20 p-3 text-white transition-colors hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
