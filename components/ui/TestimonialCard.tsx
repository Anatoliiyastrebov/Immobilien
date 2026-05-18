import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/data/testimonials";
import { GlassCard } from "./GlassCard";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <GlassCard dark className="h-full">
      <div className="flex gap-1" aria-label={`${testimonial.rating} von 5 Sternen`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-gold text-gold"
            aria-hidden
          />
        ))}
      </div>
      <blockquote className="mt-6 font-serif text-xl font-light leading-relaxed text-white/90 md:text-2xl">
        {`„${testimonial.text}"`}
      </blockquote>
      <footer className="mt-8 border-t border-white/10 pt-6">
        <cite className="not-italic">
          <p className="font-medium text-white">{testimonial.name}</p>
          <p className="mt-1 text-sm text-white/50">{testimonial.location}</p>
        </cite>
      </footer>
    </GlassCard>
  );
}
