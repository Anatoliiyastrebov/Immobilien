import { properties } from "@/lib/data/properties";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Properties() {
  return (
    <section
      id="objekte"
      className="scroll-mt-24 bg-dark-surface py-24 md:py-32"
      aria-labelledby="properties-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Immobilien"
          title="Ausgewählte Objekte"
          description="Eine kuratierte Auswahl exklusiver Immobilien — von der Altbauwohnung bis zur Villa am Wasser."
          dark
          className="[&_h2]:text-white [&_p]:text-white/70"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
