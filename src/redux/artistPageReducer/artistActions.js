import * as actions from './artist.type';

export const ToggleInfo = (id) => ({
    type: actions.TOGGLE_INFO_HIDDEN,
    payload: {
        id
    }
    
});