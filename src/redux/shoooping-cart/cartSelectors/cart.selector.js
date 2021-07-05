import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartToggle = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectIconCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulateQuantity, cartItem) => accumulateQuantity + cartItem.quantity, 0)

);