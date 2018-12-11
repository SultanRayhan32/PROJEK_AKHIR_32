import {CART_SUCCESS , CART_FAILED} from '../actions/type';

const INITITAL_STATE = {idUsers : 0 ,  harga : 0 , cookie : false , namaProduk : '', idProduk : 0 , id : 0 }

export default (state = INITITAL_STATE , action) => {
    switch(action.type) {
        case  CART_SUCCESS :
            return {...INITITAL_STATE , harga : action.payload.harga , 
                namaProduk : action.payload.namaProduk ,
                idUsers : action.payload.idUsers , 
                idProduk : action.payload.idProduk , 
                id : action.payload.id,
                cookie : true}
        case CART_FAILED : 
            return action.payload
        default : 
            return {...INITITAL_STATE , harga : "anjie lu"}
    }
}

// const INITITAL_STATE = {idUsers : 0 , idProduk : 0 ,harga : 0,qty : 0, totalHarga : 0}