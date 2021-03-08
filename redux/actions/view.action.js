import axios from "axios"
import Global from '../../Global';

export const getAllCategories = () => dispatch => {
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
        })
        .catch(err => {
            console.log(err)
        })
}

