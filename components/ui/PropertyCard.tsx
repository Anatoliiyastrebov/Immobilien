"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Bed, MapPin, Maximize2 } from "lucide-react";
import type { Property } from "@/lib/data/properties";
import { formatPrice } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      className="group relative overflow-hidden bg-white shadow-2xl shadow-black/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-xs font-medium uppercase tracking-widest text-dark">
          {property.type}
        </span>
      </div>
      <div className="border border-transparent p-6 transition-colors duration-300 group-hover:border-gold/30">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">
          {property.district}, {property.location}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-light text-foreground">
          {property.title}
        </h3>
        <p className="mt-3 font-serif text-2xl text-foreground">
          {formatPrice(property.price)}
        </p>
        <ul className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
          <li className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-gold" aria-hidden />
            {property.rooms} Zimmer
          </li>
          <li className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4 text-gold" aria-hidden />
            {property.area} m²
          </li>
          <li className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-gold" aria-hidden />
            {property.location}
          </li>
        </ul>
      </div>
    </motion.article>
  );
}
