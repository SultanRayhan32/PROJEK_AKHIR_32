import { combineReducers } from 'redux';
import AuthReducers from './AuthReducer';
import  SelectProdukReducer  from './selectProdukReducer';
import SelectMovies from './SelectMovies';
import CartProdukReducer from './CartProdukReducer';
import selectedForProduk from './selectedForProduk';
import dasfds from './PaginantionReducer';
import PaginantionReducer from './PaginantionReducer';

export default combineReducers({
    pikachu : () => 'Hai Namaku adalah...' , 
    auth : AuthReducers,
    rosinante : () => 'DonQuixote Rosinante',
    selectedProduk : SelectProdukReducer,
    movie : SelectMovies ,
    Cart : CartProdukReducer ,
    produk : selectedForProduk,
    paging : PaginantionReducer
    
});

