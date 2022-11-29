import { FETCH_START,SUCCESS_GET_DATA} from "../Action/ArticlesAction";

const init = {
    articles : [],
    loading : false,
    err:null
}
function ArticlesReducer(state = init,action) {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading : true
            }
        case SUCCESS_GET_DATA:
            return{
                ...state,
                articles : action.payload,
                loading : false
            }
        default:
            return state
    }
}
export default ArticlesReducer