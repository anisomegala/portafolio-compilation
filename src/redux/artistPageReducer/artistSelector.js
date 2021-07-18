import { createSelector } from 'reselect';

const selectGrid = state => state.artist;


export const selectGridArtist = createSelector(
    [selectGrid],
    artist => artist.grid
);