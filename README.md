# Portfolio — Gauthier Combes

Portfolio statique (Astro + Tailwind) déployé sur GitHub Pages :
**https://gauthiernoepm-max.github.io/portfolio**

Direction artistique inspirée de Cal.com : blanc / encre, Inter en tracking serré,
filets 1 px, cartes à radius 14, grille pointillée en hero, thème clair et sombre.

## Structure

```
src/
  data/site.ts        # identité, liens, tous les textes FR/EN
  data/projects.ts    # les 4 projets : tagline, intro, 3 points d'étude de cas
  components/         # Header, Footer, Home, ProjectCard, CaseStudy
  layouts/BaseLayout.astro
  pages/fr, pages/en  # accueil + /work/[slug] dans les deux langues
  pages/index.astro   # redirection selon la langue du navigateur
public/
  shots/*.webp        # captures des sites
  og.png              # image de partage
```

## Développer

```bash
npm install
npm run dev     # http://localhost:4321/portfolio/fr/
npm run build   # dist/
npm run preview
```

## Ajouter ou modifier un projet

Tout est dans `src/data/projects.ts` : un objet par projet (nom, année, statut,
stack, `tagline`, `intro`, trois `points` en FR et EN). Les pages `/fr/work/slug`
et `/en/work/slug` sont générées automatiquement.

La capture affichée est `public/shots/<slug>.webp` (ratio 16:10).

## Régénérer les visuels

```bash
npm run shots   # Playwright, 1440×900, conversion webp
node scripts/og.mjs  # image de partage 1200×630
```

Les URLs capturées sont listées dans `scripts/shots.mjs`. Ghys & Martine n'est
pas en ligne : le script pointe vers `http://localhost:4310` (lancer
`npm run dev -- --port 4310` dans `side-business/boardgame-store`) ou vers
`$GHYS_URL`.

## Déploiement

Push sur `main` → GitHub Actions construit et publie `dist/` sur Pages
(`.github/workflows/deploy.yml`). Le `base` est `/portfolio` : si le dépôt change
de nom, mettre à jour `REPO` dans `astro.config.mjs` et `robots.txt`.
