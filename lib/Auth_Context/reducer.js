export const ActionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGOUT: 'LOGOUT'
}

export const initialState = {
    username: null,
    password: null,
    error: null,
    loading: false
}

export function reducer(state, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                username: null,
                password: null,
                error: null,
                loading: true
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                error: null,
                loading: false
            }
        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                username: null,
                password: null,
                error: action.payload.error,
                loading: false
            }
        case ActionTypes.LOGOUT:
            return {
                ...state,
                username: null,
                password: null,
                error: null,
                loading: false
            }

        default:
            throw Error (`action type not allowed ${action.type}`)
    }
}
