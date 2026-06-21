/** Servizi offerti — consumati da <Services />. Aggiungi/modifica liberamente. */
export type Service = {
  title: string;
  description: string;
  /** Nome icona (vedi src/components/ui/Icon.astro). */
  icon: string;
};

export const services: Service[] = [
  {
    title: "Sito vetrina",
    description:
      "Un sito moderno, veloce e mobile-first che presenta la tua attività, gli orari e dove trovarti. La tua immagine professionale, online.",
    icon: "browser",
  },
  {
    title: "Menù digitale & ordini",
    description:
      "Menù sempre aggiornato via QR code, listino prodotti o un piccolo shop per ritiro e consegna. Niente PDF illeggibili al telefono.",
    icon: "menu",
  },
  {
    title: "Google & SEO locale",
    description:
      "Scheda Google Business ottimizzata e posizionamento locale: ti trovano quando cercano \"panetteria vicino a me\".",
    icon: "pin",
  },
  {
    title: "Prenotazioni online",
    description:
      "Tavoli, appuntamenti o servizi prenotabili direttamente dal sito o da WhatsApp, senza telefonate continue.",
    icon: "calendar",
  },
  {
    title: "Social & immagine",
    description:
      "Logo, palette, foto e template coordinati per Instagram e Facebook: un'identità riconoscibile ovunque.",
    icon: "spark",
  },
  {
    title: "Assistenza & aggiornamenti",
    description:
      "Ci pensiamo noi: hosting, sicurezza, modifiche e piccoli aggiornamenti. Tu ti concentri sul tuo lavoro.",
    icon: "shield",
  },
];
