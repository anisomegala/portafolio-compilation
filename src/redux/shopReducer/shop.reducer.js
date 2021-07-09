import PREVIEW_DATA from './preview-course.data';

const INITIAL_STATE = {
    collections: PREVIEW_DATA,
};


const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}


export default shopReducer;