import React from 'react';
import { Provider } from 'react-redux';

import store from './config/store';

const RootContainer = ({ children, initialState = {} }) => (
    <Provider store={store(initialState)}>{children}</Provider>
);

export default RootContainer;
