import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_CART
} from "../constants/actionTypes";

export const addProduct = product => ({
    type: ADD_PRODUCT,
    payload: product
});

export const removeProduct = product => ({
    type: REMOVE_PRODUCT,
    payload: product
});

export const updateCart = cartProducts => ({
    type: UPDATE_CART,
    payload: cartProducts
});
