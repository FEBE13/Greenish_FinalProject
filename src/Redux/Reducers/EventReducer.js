import { FETCH_START,SUCCESS_GET_USER} from "../Action/EventAction";

const init = {
    events : [],
    loading : false,
    err:null
}
function EventReducer(state = init,action) {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading : true
            }
        case SUCCESS_GET_USER:
            return{
                ...state,
                events : action.payload,
                loading : false
            }
        default:
            return state
    }
}
export default EventReducer