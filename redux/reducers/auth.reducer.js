

const initialState = {
    user: null,
    jwt: null,
    loading: false
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_AUTH_STATE':

            localStorage.setItem('auth', JSON.stringify({
                ...state,
                ...payload,
            }))
            return { ...state, ...payload }
        case 'LOGOUT':
            return initialState

        default:
            return state
    }
}

export default authReducer;
