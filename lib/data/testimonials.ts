export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Thomas Hartmann",
    location: "München, Bogenhausen",
    rating: 5,
    text: "Die Veräußerung unseres Familienhauses wurde mit höchster Diskretion und Professionalität begleitet. Innerhalb von sechs Wochen hatten wir einen Käufer — zum überzeugenden Preis.",
  },
  {
    id: "2",
    name: "Dr. Julia Schreiber",
    location: "Berlin, Grunewald",
    rating: 5,
    text: "Markus Weiß und sein Team haben unsere Erwartungen übertroffen. Von der Bewertung bis zum Notartermin: kompetent, transparent und stets erreichbar.",
  },
  {
    id: "3",
    name: "Familie Meier",
    location: "Hamburg, Blankenese",
    rating: 5,
    text: "Wir haben mit Weiß & Partner unsere Traumimmobilie gefunden. Die Beratung war persönlich, der Prozess reibungslos — absolut empfehlenswert für anspruchsvolle Käufer.",
  },
  {
    id: "4",
    name: "Prof. Andreas Keller",
    location: "Frankfurt, Westend",
    rating: 5,
    text: "Als Investor schätze ich die präzise Marktanalyse und das exklusive Off-Market-Portfolio. Hier arbeitet man auf Augenhöhe mit echten Experten.",
  },
  {
    id: "5",
    name: "Christine von Berg",
    location: "München, Lehel",
    rating: 5,
    text: "Sabine Partner hat uns mit Empathie und Sachverstand durch den gesamten Kaufprozess geführt. Ein Makler, dem man wirklich vertrauen kann.",
  },
];
