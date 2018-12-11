import { SELECT_POPOK } from '../actions/type';
const INITIAL_STATE = { id : 0 , nama : '' , harga : 0 , merk : '' , deskripsi : '' , img : '' }

export default (state = INITIAL_STATE ,action) => {
    switch(action.type) {
        case SELECT_POPOK :
            return action.payload
        default :
            return state;
    }
}