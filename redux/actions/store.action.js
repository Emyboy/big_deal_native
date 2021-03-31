import axios from "axios"
import cogoToast from "cogo-toast";
import Global from "../../Global"
import store from "../store";

const auth = store.getState().auth;
const _store = store.getState().store;

export const setStoreState = newState => dispatch => {
    dispatch({
        type: 'SET_STORE_STATE',
        payload: { ...newState }
    })
}

export const addProduct = data => dispatch => {
    console.log('SENDING ---', data)
    dispatch({
        type: 'LOADING',
    })
    axios(Global.API_URL + '/products', {
        method: 'POST',
        data,
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).jwt}`
        }
    })
        .then(res => {
            cogoToast.success('Added Product')
            dispatch({
                type: 'LOADING',
            })
            console.log(res)
        })
        .catch(err => {
            cogoToast.success('Error Adding Product')
            console.log(err)
            dispatch({
                type: 'LOADING',
            })
        })
}

export const createStore = data => dispatch => {
    dispatch({ type: 'LOADING' });
    const user = JSON.parse(localStorage.getItem('auth'))
    axios(Global.API_URL + '/shops', {
        method: 'POST',
        data,
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).jwt}`
        }
    })
        .then(res => {
            console.log(res);
            store.dispatch({
                type: 'SET_AUTH_STATE',
                payload: {
                    user: { ...user.user, shop: res.data }
                }
            });
            localStorage.setItem('auth', JSON.stringify({ ...user.user, shop: res.data }))
            dispatch({
                type: 'CREATE_STORE',
                payload: res.data
            })
            dispatch({ type: 'LOADING' });
            dispatch({
                type: 'SET_STORE_STORE',
                payload: {
                    store: res.data
                }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'LOADING' });
        })
}

