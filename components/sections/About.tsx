"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { agency } from "@/lib/data/agency";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, useMotionConfig } from "@/lib/motion";

export function About() {
  const { transition, viewport, prefersReducedMotion } = useMotionConfig();

  return (
    <section
      id="ueber-uns"
      className="scroll-mt-24 bg-background py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Über uns"
          title="Vertrauen, das man spürt"
          description="Weiß & Partner steht für Beratung auf Augenhöhe — mit dem Anspruch, den deutschen Premium-Markt seit 2008 zu definieren."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="space-y-6"
          >
            {agency.story.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                transition={transition}
                className="text-lg leading-relaxed text-muted"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              transition={transition}
              className="grid grid-cols-3 gap-6 border-t border-foreground/10 pt-8"
            >
              {agency.highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-3xl font-light text-gold md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} transition={transition} className="pt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Geschäftsführung</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {agency.founders.map((founder) => (
                  <div
                    key={founder.name}
                    className="border-l-2 border-gold pl-4"
                  >
                    <p className="font-medium text-foreground">{founder.name}</p>
                    <p className="text-sm text-muted">{founder.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={transition}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={agency.officeImage}
              alt="Büro von Weiß & Partner Immobilien in München"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
