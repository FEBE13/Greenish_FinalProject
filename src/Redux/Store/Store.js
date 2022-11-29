import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import EventReducer from "../Reducers/EventReducer";

const allReducer = combineReducers({
    Event: EventReducer
    // user: userReducer,
    // product: productReducer
  })

const store = createStore(allReducer,applyMiddleware(thunk))
export default store