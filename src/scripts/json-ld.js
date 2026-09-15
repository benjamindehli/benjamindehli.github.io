export function generateJsonLdElementFromJsObject(jsObject) {
    return `<script type="application/ld+json">${JSON.stringify(jsObject)}</script>`;
}

function generateJsonLdItemListElementForWebsite(website, position) {
    const listItem = {
        "@type": "ListItem",
        position: position,
        name: website.name,
        url: website.url
    };
    // The same sentence the list shows, so an engine reading only the markup
    // still learns what each entry is rather than seeing a bare name
    if (website.description) {
        listItem.description = website.description;
    }
    // jsonLdId identifies the entity the list item refers to, not the list item itself
    if (website.jsonLdId) {
        listItem.item = { "@id": website.jsonLdId };
    }
    return listItem;
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
