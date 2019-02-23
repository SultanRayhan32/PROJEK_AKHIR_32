import {PAGINATION} from '../actions/type';
export default (state = 0 , action) => {
    switch(action.type) {
        case PAGINATION:
            return action.payload
        default :
            return state;
    }
}