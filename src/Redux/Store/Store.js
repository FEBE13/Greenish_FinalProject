import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import EventReducer from "../Reducers/EventReducer";
import UserReducer from "../Reducers/UserReducer";
import ArticlesReducer from "../Reducers/ArticlesReducer";
import AuthReducer from "../Reducers/AuthReducer";
import PartiReducer from "../Reducers/PartiReducer";


const allReducer = combineReducers({
   Event: EventReducer,
   User: UserReducer,
   Articles: ArticlesReducer,
   Auth : AuthReducer,
   Parti: PartiReducer
});

const store = createStore(allReducer, applyMiddleware(thunk));
export default store;
