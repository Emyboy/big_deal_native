import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"
import Global from '../../Global';

export const getItAll = () => dispatch => {
    console.log('GETTING CATS')
    axios(Global.API_URL +'/categories')
        .then(res => {
            // console.log(res)
            dispatch({
                type: 'SET_VIEW_STATE',
                payload: {
                    categories: res.data
                }
            })
            // AsyncStorage.setItem(JSON.stringify({
            //     view: {
            //         categories:  res.data
            //     }
            // }))
        })
        .catch(err => {
            console.log(err)
        })

    axios(Global.API_URL + '/products')
        .then(res => {
            // console.log(res)
            dispatch({
                type: 'SET_VIEW_STATE',
                payload: {
                    products: res.data
                }
            })
            // AsyncStorage.setItem(JSON.stringify({
            //     view: {
            //         products: res.data
            //     }
            // }))
        })
        .catch(err => {
            console.log(err)
        })
}

