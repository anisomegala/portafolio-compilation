import { createSelector } from 'reselect';


const selectGrid = state => state.artist;


export const selectGridArtist = createSelector(
    [selectGrid],
    artist => artist.grid
);

export const selectArtistInfoHidden = createSelector(
    [selectGrid],
    artist => artist.hidden
)