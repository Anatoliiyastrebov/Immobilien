"use client";

import { motion } from "framer-motion";
import { Award, Shield } from "lucide-react";
import { advantages, stats } from "@/lib/data/stats";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { fadeUp, staggerContainer, useMotionConfig } from "@/lib/motion";

export function WhyUs() {
  const { transition, viewport, prefersReducedMotion } = useMotionConfig();

  return (
    <section
      id="warum-wir"
      className="scroll-mt-24 bg-background py-24 md:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Warum wir"
          title="Exzellenz in jedem Detail"
          description="Was uns von anderen unterscheidet: echte Expertise, ein exklusives Netzwerk und messbare Ergebnisse."
        />

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ ...transition, delay: i * 0.08 }}
              className="group border border-foreground/10 p-8 transition-colors hover:border-gold/40"
            >
              <h3 className="font-serif text-xl font-light text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-dark px-8 py-16 md:px-12 md:py-20">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Zahlen & Fakten</p>
              <h3 className="mt-2 font-serif text-3xl font-light text-white md:text-4xl">
                Vertrauen in Zahlen
              </h3>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 border border-gold/30 px-4 py-2 text-xs uppercase tracking-widest text-gold">
                <Shield className="h-4 w-4" aria-hidden />
                IVD-Mitglied
              </span>
              <span className="flex items-center gap-2 border border-gold/30 px-4 py-2 text-xs uppercase tracking-widest text-gold">
                <Award className="h-4 w-4" aria-hidden />
                Ausgezeichnet 2024
              </span>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} dark />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
