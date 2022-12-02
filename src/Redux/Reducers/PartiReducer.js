import { FETCH_START, SUCCESS_GET_DATA_PARTI } from "../Action/PartiAction"


const init = {
    partis : [],
    loading : false,
    err:null
}
function PartiReducer(state = init,action) {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading : true
            }
        case SUCCESS_GET_DATA_PARTI:
            return{
                ...state,
                partis : action.payload,
                loading : false
            }
        default:
            return state
    }
}
export default PartiReducer