/**
 * Configurazione centrale del sito (single source of truth).
 * Modifica QUI nome, contatti, social e la chiave del form: tutto il sito si aggiorna.
 */
export const site = {
  /** Nome del brand (placeholder: cambialo col nome della tua attività). */
  name: "Bottega Web",
  /** Slogan breve mostrato vicino al logo / nei meta. */
  tagline: "Siti web e presenza online per attività locali",
  /** Descrizione usata per SEO / OpenGraph. */
  description:
    "Aiutiamo panetterie, bar, ristoranti e negozi di quartiere a portare la propria attività online: siti veloci, menù digitali, prenotazioni e visibilità su Google. Senza complicazioni.",
  /** Dominio definitivo del sito (cambialo dopo l'acquisto del dominio). */
  url: "https://www.bottegaweb.it",

  /** Contatti — usati in header, contatti e footer. */
  email: "ciao@bottegaweb.it",
  /** Telefono mostrato all'utente. */
  phone: "+39 333 000 0000",
  /** Telefono in formato link (solo cifre e +). */
  phoneHref: "+393330000000",
  /** Numero WhatsApp in formato internazionale senza + e senza spazi. */
  whatsapp: "393330000000",
  /** Messaggio precompilato per WhatsApp. */
  whatsappMessage: "Ciao! Vorrei informazioni per portare online la mia attività.",

  /** Città/zona di riferimento (per SEO locale). */
  area: "Italia",

  /** Profili social (usa "#" per nasconderli finché non li hai). */
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },

  /**
   * Web3Forms: crea una Access Key GRATIS su https://web3forms.com
   * (basta inserire la tua email, nessun account). Incollala qui sotto.
   * Finché è il placeholder, il form mostra un avviso e non invia.
   */
  web3formsKey: "REPLACE-WITH-YOUR-WEB3FORMS-ACCESS-KEY",
} as const;

/** Link WhatsApp pronto all'uso. */
export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export type Site = typeof site;
