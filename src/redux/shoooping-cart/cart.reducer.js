import CartTypes from './cart.type';
import {addItemToCart, removeItemFromCart} from './cart.utils'


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const CartReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type) {
        case CartTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            } 
        case CartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }    
        case CartTypes.CLEAR_FROM_CART: 
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id)
            }      
        default: 
            return state;    
    }
}


export default CartReducer;