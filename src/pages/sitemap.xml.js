import websites from "../data/websites.json";

const siteUrl = "https://benjamindehli.github.io/";

// Bump when the content of the front page changes
const lastModified = "2026-08-29";

// Pages on this domain that are not listed in websites.json
const additionalUrls = [
    "https://benjamindehli.github.io/music-theory/chords/",
    "https://benjamindehli.github.io/music-theory/scales/"
];

function isHostedOnSite(url) {
    return url.startsWith(siteUrl) && url !== siteUrl;
}

function generateUrlElement(url, lastmod) {
    const lastmodElement = lastmod ? `\n        <lastmod>${lastmod}</lastmod>` : "";
    return `    <url>\n        <loc>${url}</loc>${lastmodElement}\n    </url>`;
}

export function GET() {
    const websiteUrls = websites.map((website) => website.url).filter(isHostedOnSite);
    const urls = [...new Set([...websiteUrls, ...additionalUrls])];
    const urlElements = [
        generateUrlElement(siteUrl, lastModified),
        ...urls.map((url) => generateUrlElement(url))
    ];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements.join("\n")}
</urlset>
`;
    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml"
        }
    });
}
