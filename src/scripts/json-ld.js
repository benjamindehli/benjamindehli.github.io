function generateJsonLdElementFromJsObject(jsObject) {
    return `<script type="application/ld+json">${JSON.stringify(jsObject)}</script>`;
}

function generateJsonLdItemListElementForRepository(repository, position) {
    return {
        "@type": "ListItem",
        "@id": getJsonLdIdForRepository(repository),
        position: position,
        name: repository.name,
        url: repository.url
    };
}

function getJsonLdIdForRepository(repository) {
    return repository.jsonLdId || repository.url;
}

export function generateJsonLdItemListForRepositories(repositories, name) {
    const itemList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: name,
        numberOfItems: repositories.length,
        itemListElement: repositories.map((repository, index) => generateJsonLdItemListElementForRepository(repository, index + 1))
    };
    return generateJsonLdElementFromJsObject(itemList);
}
