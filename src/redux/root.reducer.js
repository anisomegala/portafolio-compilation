import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import CartReducer from './shoooping-cart/cart.reducer';
import  directoryReducer from './directory/directory.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer
});


export default persistReducer(persistConfig, rootReducer);