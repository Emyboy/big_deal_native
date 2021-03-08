


export const setAuthState = newState => dispatch => {
    dispatch({
        type: 'SET_AUTH_STATE',
        payload: newState
    })
}

export const logout = () => dispatch => {
    localStorage.clear();
    sessionStorage.clear()
    dispatch({
        type: 'LOGOUT',
    })
}

