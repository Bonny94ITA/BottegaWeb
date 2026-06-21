/** Esempi/demo mostrati in <Portfolio />. Sono mockup illustrativi (placeholder). */
export type Demo = {
  name: string;
  category: string;
  /** Riga descrittiva dell'esempio. */
  blurb: string;
  /** Feature evidenziate nel mockup. */
  features: string[];
  /** Emoji usata nel mockup stilizzato. */
  emoji: string;
  /** Gradiente Tailwind di sfondo del mockup. */
  gradient: string;
};

export const demos: Demo[] = [
  {
    name: "Forno Aurora",
    category: "Panetteria",
    blurb: "Pane e dolci freschi ogni mattina, con ordini per le feste.",
    features: ["Listino prodotti", "Ordini per ricorrenze", "Orari & mappa"],
    emoji: "🥖",
    gradient: "from-amber-100 to-orange-200",
  },
  {
    name: "Trattoria del Borgo",
    category: "Ristorante",
    blurb: "Cucina del territorio con menù digitale e prenotazione tavoli.",
    features: ["Menù QR", "Prenotazioni", "Galleria piatti"],
    emoji: "🍝",
    gradient: "from-rose-100 to-amber-200",
  },
  {
    name: "Caffè Centrale",
    category: "Bar",
    blurb: "Colazioni e aperitivi, con eventi e fidelity dei clienti.",
    features: ["Eventi & aperitivi", "Card fedeltà", "Social integrati"],
    emoji: "☕",
    gradient: "from-teal-100 to-emerald-200",
  },
];
