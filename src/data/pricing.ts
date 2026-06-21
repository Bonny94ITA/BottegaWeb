/** Pacchetti mostrati in <Pricing />. Prezzi indicativi placeholder: adattali. */
export type Plan = {
  name: string;
  /** Costo di attivazione una tantum. */
  price: string;
  period: string;
  /** Canone di manutenzione & hosting ricorrente (es. "+ 15€/mese"). */
  monthly: string;
  description: string;
  features: string[];
  cta: string;
  /** Evidenzia il piano consigliato. */
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Base",
    price: "da 390€",
    period: "una tantum",
    monthly: "+ 15€/mese",
    description: "Per iniziare con una presenza online curata e professionale.",
    features: [
      "Sito vetrina one-page",
      "Mobile-first e veloce",
      "Contatti, orari e mappa",
      "Scheda Google Business",
      "Form di contatto",
    ],
    cta: "Richiedi preventivo",
  },
  {
    name: "Pro",
    price: "da 790€",
    period: "una tantum",
    monthly: "+ 29€/mese",
    description: "Il pacchetto completo per farti trovare e far ordinare.",
    features: [
      "Tutto del piano Base",
      "Più pagine / sezioni",
      "Menù digitale o mini-shop",
      "Prenotazioni online",
      "SEO locale avanzata",
      "Template social coordinati",
    ],
    cta: "Parliamone",
    featured: true,
  },
  {
    name: "Su misura",
    price: "preventivo",
    period: "personalizzato",
    monthly: "canone su misura",
    description: "Progetti specifici: e-commerce, gestionali, integrazioni.",
    features: [
      "Analisi dedicata",
      "Funzionalità su richiesta",
      "Integrazioni (pagamenti, CRM…)",
      "Assistenza prioritaria",
    ],
    cta: "Contattami",
  },
];

/** Cosa include il canone, mostrato sotto i pacchetti. */
export const maintenanceNote =
  "Il canone mensile include hosting, dominio gestito, aggiornamenti, sicurezza, backup e piccole modifiche: il tuo sito sempre curato. Nessun vincolo, disdici quando vuoi.";
