

// sitemap.config.js
const SitemapPlugin = require('sitemap-webpack-plugin').default;

// Liste des URLs publiques (sans le dossier dist/pages)
const paths = [
  { path: '' },           // page d'accueil
  { path: '/services' },
  { path: '/HLC' },
  { path: '/contact' },
];


// Options du plugin
const options = {
  base: 'https://www.helioso.com',
  filename: 'sitemap.xml',
  lastmod: true,          // ajoute la date de dernière modification
};
