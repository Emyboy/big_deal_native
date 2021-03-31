import configureStore from './configure.store';
import loadState from '../utils/loadState';
import saveState from '../utils/saveState';


const loadedState = loadState();
console.log('loadedState', loadedState)

const store = configureStore(loadedState);

store.subscribe(() => {
    saveState({
        view: store.getState().view,
        auth: store.getState().auth
    })
})

export default store;
