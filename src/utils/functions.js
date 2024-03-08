export const extract = (link) => {
    // Extracting collection_id
    const collectionIdStartIndex = link.indexOf("collection_id=") + "collection_id=".length;
    const collectionLink = link.substring(collectionIdStartIndex);

    return collectionLink;
}