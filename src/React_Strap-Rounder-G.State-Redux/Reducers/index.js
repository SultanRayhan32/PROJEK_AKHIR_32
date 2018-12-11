import { combineReducers } from 'redux';
import AuthReducers from './AuthReducer';

export default combineReducers({
    pikachu : () => 'Hai Namaku adalah...' , 
    username : AuthReducers,
    rosinante : () => 'DonQuixote Rosinante'
    
    
});

