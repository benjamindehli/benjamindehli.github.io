export function generateJsonLdElementFromJsObject(jsObject) {
    return `<script type="application/ld+json">${JSON.stringify(jsObject)}</script>`;
}

function generateJsonLdItemListElementForWebsite(website, position) {
    return {
        "@type": "ListItem",
        "@id": getJsonLdIdForWebsite(website),
        position: position,
        name: website.name,
        url: website.url
    };
}

function getJsonLdIdForWebsite(website) {
    return website.jsonLdId || website.url;
}

export function generateJsonLdItemListForWebsites(websites, name) {
    const itemList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: name,
        numberOfItems: websites.length,
        itemListElement: websites.map((website, index) => generateJsonLdItemListElementForWebsite(website, index + 1))
    };
    return generateJsonLdElementFromJsObject(itemList);
}
