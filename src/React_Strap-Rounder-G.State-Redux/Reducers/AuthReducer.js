const INITIAL_STATE = '';

export default (state = INITIAL_STATE ,action) => {
    switch(action.type) {
        case 'USER_LOGIN_SUCCES' :
            return action.payload;
        default :
            return state;
    }
}