import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

export default initialState => {
    initialState =
        JSON.parse(window.localStorage.getItem("state")) || initialState;
    const middleware = [logger];
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );

    store.subscribe(() => {
        const state = store.getState();
        const persist = {
            cart: state.cart,
            total: state.total
        };

        window.localStorage.setItem("state", JSON.stringify(persist));
    });

    return store;
};
