# Portfolio — Hanene Triaa

Site vitrine : **https://hanenetriaa.github.io**

Site en **React** (Vite) présentant mes projets en cloud, DevOps, développement et pilotage de
projet : visuels de chaque projet, filtre par domaine, galerie d'écrans et liens vers les dépôts.

## Développement

Le code source est dans `site/`. La compilation écrit le site directement à la racine du dépôt,
que GitHub Pages publie.

```bash
cd site
npm install
npm run dev        # aperçu local : http://localhost:5173
npm run build      # met à jour index.html, assets/ et img/ à la racine
```

## Structure

```
site/
├── src/App.jsx      # Sections : accueil, expertises, projets, méthode, contact
├── src/data.js      # Contenu : profil, expertises, projets
├── src/styles.css   # Charte graphique (bleu marine, responsive)
└── public/img/      # Captures et schémas des projets
index.html, assets/, img/   # Site compilé, publié par GitHub Pages
```
