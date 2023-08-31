const initialState = {
    isAuthenticated: false,
    token : localStorage.getItem('token'),
    user: null
}

const userReducer = (state= initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {
            console.log(action, "Hello Jeeeee")
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                user:action.payload.user
            };

        }
        case 'LOGOUT_SUUCCESS' : {
            localStorage.removeItem('token')
            return {
                token: null,
                isAuthenticated: false,
                user:null
              };
        };
        default :  return state
    }
}

export default userReducer