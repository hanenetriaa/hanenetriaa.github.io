# Portfolio — Hanene Triaa

Site vitrine : **https://hanenetriaa.github.io**

Site en **React** (Vite) présentant mes projets en cloud, DevOps, développement et pilotage de
projet : visuels de chaque projet, filtre par domaine, galerie d'écrans et liens vers les dépôts.

## Développement

```bash
npm install
npm run dev        # http://localhost:5173
```

## Publication

Le site compilé est publié sur la branche `gh-pages` (GitHub Pages) :

```bash
npm run build
# puis publier le contenu de dist/ sur la branche gh-pages
```

## Structure

```
src/
├── App.jsx      # Sections : accueil, expertises, projets, méthode, contact
├── data.js      # Contenu : profil, expertises, projets
└── styles.css   # Charte graphique (bleu marine, responsive)
public/img/      # Captures et schémas des projets
```
