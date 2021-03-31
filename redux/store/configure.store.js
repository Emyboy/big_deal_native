import {
    createStore,
    applyMiddleware
} from 'redux';
//import dotenv from 'dotenv';

import thunk from 'redux-thunk';
import indexReducer from '../reducers/root.reducer';

//dotenv.config();
const middleware = [thunk];

const configureStore = (settings = {}) => createStore(
    indexReducer, settings,
    applyMiddleware(...middleware),
    // composeEnhancers(applyMiddleware(thunk, logger)),
);

export default configureStore;
