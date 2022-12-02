import { FETCH_START_USER, SUCCESS_GET_DATA_USER } from "../Action/UserAction";


const init = {
    users : [],
    loading : false
}

function UserReducer(state = init,action) {
    switch (action.type) {
        case FETCH_START_USER :
            return{
                ...state,
                loading : true
            }
        case SUCCESS_GET_DATA_USER:
            return{
                ...state,
                users : action.payload,
                loading : false
            }
        default:
            return state;
    }
}

export default UserReducer