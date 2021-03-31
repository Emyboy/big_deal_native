

const initialState = {
    userData: null,
    loading: false
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_AUTH_STATE':
            return { ...state, ...payload }
        case 'LOGOUT':
            return initialState

        default:
            return state
    }
}

export default authReducer;
