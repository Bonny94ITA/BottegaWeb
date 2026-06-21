/** Domande frequenti — usate da <Faq /> e dal JSON-LD FAQPage. */
export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Quanto tempo ci vuole per avere il sito online?",
    answer:
      "Per un sito vetrina bastano in genere 1–2 settimane dalla raccolta di testi e foto. Progetti più articolati richiedono qualche settimana in più.",
  },
  {
    question: "Devo comprare io il dominio e l'hosting?",
    answer:
      "Ti guido io in tutto. Il dominio (es. iltuonome.it) costa circa 10–15€/anno ed è intestato a te. L'hosting può essere gratuito o incluso nel servizio di gestione mensile.",
  },
  {
    question: "Posso aggiornare i contenuti da solo?",
    answer:
      "Sì. Possiamo impostare il sito così che tu possa modificare testi, prezzi e foto in autonomia, oppure ci pensiamo noi con il servizio di assistenza.",
  },
  {
    question: "Funziona bene su smartphone?",
    answer:
      "Assolutamente. Ogni sito è progettato mobile-first: la maggior parte dei tuoi clienti ti cercherà dal telefono, e deve trovare tutto subito.",
  },
  {
    question: "Mi aiuti anche con Google e i social?",
    answer:
      "Sì: configuriamo la scheda Google Business per farti trovare nelle ricerche locali e prepariamo template coordinati per Instagram e Facebook.",
  },
];
