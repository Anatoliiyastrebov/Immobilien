export interface Property {
  id: string;
  title: string;
  location: string;
  district: string;
  price: number;
  rooms: number;
  area: number;
  type: string;
  image: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Penthouse mit Isarblick",
    location: "München",
    district: "Bogenhausen",
    price: 4_850_000,
    rooms: 5,
    area: 285,
    type: "Wohnung",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "2",
    title: "Villa im Grünen",
    location: "München",
    district: "Grünwald",
    price: 6_200_000,
    rooms: 8,
    area: 420,
    type: "Haus",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: "3",
    title: "Altbauwohnung mit Stuck",
    location: "Berlin",
    district: "Grunewald",
    price: 2_450_000,
    rooms: 4,
    area: 165,
    type: "Wohnung",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: "4",
    title: "Wassergrundstück mit Anleger",
    location: "Hamburg",
    district: "Blankenese",
    price: 3_890_000,
    rooms: 6,
    area: 310,
    type: "Haus",
    image:
      "https://images.unsplash.com/photo-1637946095935-75936cf3c11c?w=800&q=80",
  },
  {
    id: "5",
    title: "Loft in der HafenCity",
    location: "Hamburg",
    district: "HafenCity",
    price: 1_980_000,
    rooms: 3,
    area: 142,
    type: "Wohnung",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: "6",
    title: "Stadtpalais mit Garten",
    location: "Frankfurt",
    district: "Westend",
    price: 5_100_000,
    rooms: 7,
    area: 380,
    type: "Haus",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];
