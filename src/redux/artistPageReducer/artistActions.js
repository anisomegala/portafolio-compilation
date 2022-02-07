import * as actions from './artist.type';

export const ShowToggle = id => ({ type: 'SHOW', payload: id});
export const HideToggle = id => ({ type: 'HIDE', payload: id});