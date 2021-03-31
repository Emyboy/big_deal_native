import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"
import Global from "../../Global"
import store from "../store";


export const login = data => dispatch => {
    dispatch({
        type: 'SET_AUTH_STATE',
        payload: { loading: true }
    })
    const url = Global.API_URL + '/auth/local';
    console.log(url, data)
    axios(url, {
        method: 'POST',
        data
    })
        .then(res => {
            dispatch({
                type: 'SET_AUTH_STATE',
                payload: { loading: false, userData: res.data }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: 'SET_AUTH_STATE',
                payload: { loading: false }
            })
        })
}

export const setAuthState = newState => dispatch => {
    dispatch({
        type: 'SET_AUTH_STATE',
        payload: newState
    })
}

export const logout = () => dispatch => {
    AsyncStorage.removeItem('auth');
    dispatch({
        type: 'LOGOUT',
    })
}

