import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_CART
} from "../constants/actionTypes";

const initialState = {
    products: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                addedProduct: Object.assign({}, action.payload)
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                removedProduct: Object.assign({}, action.payload)
            };
        case UPDATE_CART:
            const cartProducts = action.payload;
            return {
                ...state,
                products: [...cartProducts]
            };
        default:
            return state;
    }
}
