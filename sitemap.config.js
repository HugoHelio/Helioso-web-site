
// sitemap.config.js

// Liste des URLs publiques (sans le dossier dist/pages)
const pathsArray = [
  { path: '' },           // page d'accueil
  { path: '/services' },
  { path: '/HLC' },
  { path: '/contact' },
];

// Options du plugin
const sitemapOptions = {
  base: 'https://www.helioso.com',
  filename: 'sitemap.xml',
  lastmod: true,          // ajoute la date de dernière modification
};

// On exporte les deux pour pouvoir les utiliser dans webpack.config.js
module.exports = { pathsArray, sitemapOptions };
