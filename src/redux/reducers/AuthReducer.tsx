import UserAuthAction, { LOGIN, LOGOUT, CREATE } from '../types/AuthTypes';

const defaultAuthState = {
    isLoggedIn: false,
    isError: false,
    email: '',
    errorString: ''
}

const AuthReducer = (state = defaultAuthState, action: UserAuthAction) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state
            }; 
        case LOGIN:
            localStorage.setItem("user", action.payload.email);
            return {
                ...state,
                isLoggedIn: true,
                email: action.payload.email
            }
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                isLoggedIn: false,
                email: ''
            }
        default:
            return {
                ...state
            }
    }
}

export default AuthReducer;