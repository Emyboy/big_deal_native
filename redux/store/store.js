import configureStore from './configure.store';
import loadState from '../utils/loadState';
import saveState from '../utils/saveState';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root.reducer';

const middleware = [thunk]
const loadedState = loadState();

const store = createStore(rootReducer, applyMiddleware(...middleware));
// const store = configureStore(loadedState);

// store.subscribe(() => {
//     saveState({
//         view: store.getState().view
//     })
// })

export default store;
