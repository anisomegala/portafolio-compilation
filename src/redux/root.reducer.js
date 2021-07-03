import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import CartReducer from './shoooping-cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: CartReducer
});