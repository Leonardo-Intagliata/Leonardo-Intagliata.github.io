# Leonardo Intagliata · Portfolio

Sito portfolio personale: chi sono, i miei progetti, i contatti e il CV.

**Online:** https://leonardo-intagliata.github.io

## Tecnologie

- [Astro](https://astro.build) per la generazione del sito statico
- [Tailwind CSS](https://tailwindcss.com) per lo stile
- GitHub Actions + GitHub Pages per il deploy automatico a ogni push

## Struttura

```
src/
├── components/   # Hero, barra laterale, sezioni riutilizzabili
├── data/         # Dati personali e voci di navigazione (profilo.ts)
├── layouts/      # Layout comune a tutte le pagine
├── pages/        # Home, Chi sono, Lavori, Contatti, CV
└── styles/       # CSS globale e sfondo
public/           # Icone, sfondo e CV in PDF
```

## Avvio in locale

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera il sito in dist/
```
