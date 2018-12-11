import { combineReducers } from 'redux';
import AuthReducers from './AuthReducer';
import   SelectProdukReducer  from './selectProdukReducer';
import SelectMovies from './SelectMovies';
import CartProdukReducer from './CartProdukReducer';

export default combineReducers({
    pikachu : () => 'Hai Namaku adalah...' , 
    auth : AuthReducers,
    rosinante : () => 'DonQuixote Rosinante',
    selectedProduk : SelectProdukReducer,
    movie : SelectMovies ,
    Cart : CartProdukReducer
});

