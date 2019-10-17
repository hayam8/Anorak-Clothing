import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

/**
 * Retrieves all keys for collections (hats, shoes, jackets, etc) and map over array to return objects for keys
 */
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

/**
 * Grabs string value in url and matches it to correct collection to display.
 * Find the collection.id matching url param of collection id map
 * @param {*} collectionUrlParam
 */
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionLoading = createSelector(
  [selectShop],
  shop => shop.isLoading
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
