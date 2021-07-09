import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;


export const selectDirectoryPortafolios =  createSelector(
    [selectDirectory],
    directory => directory.portafolios
);