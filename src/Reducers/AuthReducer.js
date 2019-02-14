import { USER_LOGIN_SUCCES,  AUTH_SYSTEM_ERROR , AUTH_LOADING , LogOut , REGISTER_LOGIN ,COOKIE_CHECKED, MOVIE_SUCCESS , ADD_CART_SUCCESS } from '../actions/type';
const INITIAL_STATE = { username : '', error : '' , loading : false , cookie : false , email : '' ,img : '' , id : 0 , role : '' };

export default (state = INITIAL_STATE ,action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCES :
            return {...INITIAL_STATE , 
                username : action.payload.username, 
                email: action.payload.email , 
                id : action.payload.id ,
                role : action.payload.role ,
                cookie : true};
       case AUTH_SYSTEM_ERROR :
            return {...INITIAL_STATE , error : action.payload , cookie : true}
        case AUTH_LOADING : 
            return {...INITIAL_STATE, loading : true ,cookie : true  }
        case LogOut : 
            return {...INITIAL_STATE , cookie : true};
        case REGISTER_LOGIN : 
            return {...INITIAL_STATE , username : action.payload.username, cookie : true};
        case ADD_CART_SUCCESS :
                return {...INITIAL_STATE, cookie : true}
        case COOKIE_CHECKED :
            return {...INITIAL_STATE , cookie : true}
        // case MOVIE_SUCCESS :
        //     return {...INITIAL_STATE ,   cookie : true}
        default :
            return state;
    }
}