
const fs = require('fs-extra');
const path = require('path');

const baseUrl = 'https://www.helioso.com';

// Liste des pages de ton site (URL publiques)
const pages = [
  '',
  'services',
  'HLC',
  'contact'
];

// Générer le contenu XML du sitemap
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `
  <url>
    <loc>${baseUrl}/${p}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('')}
</urlset>
`;

// Créer le dossier dist si nécessaire et écrire sitemap.xml
fs.ensureDirSync(path.join(__dirname, 'dist'));
fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemapContent);

console.log('✅ Sitemap généré avec succès !');
