export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const stats: Stat[] = [
  { value: "98", suffix: "%", label: "Kundenzufriedenheit" },
  { value: "45", label: "Tage Ø-Vermittlungszeit" },
  { value: "€ 1,2", suffix: " Mrd.", label: "Transaktionsvolumen" },
  { value: "280+", label: "Erfolgreich vermittelte Objekte" },
];

export const advantages = [
  {
    title: "Absolute Diskretion",
    description:
      "Vertrauliche Vermarktung und sorgfältig kuratierte Käuferkreise — Ihre Privatsphäre steht an erster Stelle.",
  },
  {
    title: "Exklusives Netzwerk",
    description:
      "Zugang zu Off-Market-Objekten und qualifizierten Investoren in ganz Deutschland und Österreich.",
  },
  {
    title: "Präzise Bewertung",
    description:
      "Datenbasierte Marktanalysen und juristisch fundierte Wertermittlung durch unser Expertenteam.",
  },
  {
    title: "Full-Service-Begleitung",
    description:
      "Von der ersten Besichtigung bis zur Notarunterschrift — ein Ansprechpartner für alles.",
  },
];
