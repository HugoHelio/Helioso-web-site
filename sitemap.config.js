

// sitemap.config.js
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
  { path: '', lastmod: new Date().toISOString() },
  { path: '/services', lastmod: new Date().toISOString() },
  { path: '/HLC', lastmod: new Date().toISOString() },
  { path: '/contact', lastmod: new Date().toISOString() },
  // ajoute ici toutes tes routes importantes
];

const SitemapOptions = {
  base: 'https://www.helioso.com',
  paths,
  options: {
    filename: 'sitemap.xml',
    lastmod: true,
  },
};

module.exports = SitemapOptions;
