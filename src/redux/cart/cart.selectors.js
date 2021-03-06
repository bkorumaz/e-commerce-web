import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, {quantity}) => accumulator + quantity, 0)
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, {quantity, price}) => accumulator + ( quantity * price ), 0)
);

export const selectCartVisibility = createSelector(
    [selectCart],
    cart => cart.visibility
);