

const initialState = {
    store: null,
    loading: false,
    items: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_STORE_STATE':
            localStorage.setItem('store', JSON.stringify({
                ...state,
                ...payload,
            }))
            return { ...state, ...payload }
        case 'CREATE_STORE':
            localStorage.setItem('store', JSON.stringify({
                ...state,
                ...payload,
            }))
            return {
                ...state,
                store: payload
            }
        case 'LOADING':
            return {
                ...state,
                loading: !state.loading
            }
        default:
            return state
    }
}


