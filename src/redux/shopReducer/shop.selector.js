import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    musicourses: 1,
    Souvenirs: 2,
    discografy: 3,
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)


