import {SELECT_MOVIE} from '../actions/type';

const INITIAL_STATE = { title : '', description : '', url : '' , image : '' , id : 0 }

export default (state = INITIAL_STATE ,action) => {
    switch(action.type) {
        case SELECT_MOVIE :
            return action.payload
        default :
            return state;
    }
}