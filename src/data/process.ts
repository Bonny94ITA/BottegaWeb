/** Fasi del metodo di lavoro — usate da <Process />. */
export type Step = {
  step: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    step: "01",
    title: "Ascolto",
    description:
      "Una chiacchierata (anche su WhatsApp) per capire la tua attività, i tuoi clienti e cosa ti serve davvero.",
  },
  {
    step: "02",
    title: "Proposta",
    description:
      "Ti presento una bozza chiara con struttura, stile e preventivo trasparente. Nessuna sorpresa.",
  },
  {
    step: "03",
    title: "Realizzazione",
    description:
      "Costruisco il sito, inserisco testi e foto, configuro Google e i contatti. Tu approvi ogni passo.",
  },
  {
    step: "04",
    title: "Online & assistenza",
    description:
      "Pubblichiamo il sito e resto al tuo fianco per aggiornamenti, modifiche e crescita nel tempo.",
  },
];
