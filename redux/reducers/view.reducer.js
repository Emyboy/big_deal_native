import AsyncStorage from "@react-native-async-storage/async-storage"


const initialState = {
    categories: [],
    loading: false,
    products: [],
    sizes: []
}

export default (state = initialState, { type, payload }) => {
    // AsyncStorage.setItem('view', JSON.stringify(state))
    switch (type) {

        case 'SET_VIEW_STATE':
            return { ...state, ...payload }

        default:
            return state
    }
}
