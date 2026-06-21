/**
 * Rivela gli elementi con classe `.reveal` quando entrano nel viewport.
 * Leggero, senza dipendenze, rispetta prefers-reduced-motion (gestito in CSS).
 */
function initReveal(): void {
  const items = document.querySelectorAll<HTMLElement>(".reveal");
  if (items.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  items.forEach((el) => observer.observe(el));
}

initReveal();
