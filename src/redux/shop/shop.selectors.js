import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  shoes: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

/**
 * Grabs string value in url and matches it to correct collection to display.
 * Find the collection.id matching url param of collection id map
 * @param {*} collectionUrlParam
 */
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>
      collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );
