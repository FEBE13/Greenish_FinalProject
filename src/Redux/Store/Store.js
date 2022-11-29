import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import EventReducer from "../Reducers/EventReducer";
import UserReducer from "../Reducers/UserReducer";
import ArticlesReducer from "../Reducers/ArticlesReducer";

const allReducer = combineReducers({
   Event: EventReducer,
   User: UserReducer,
   Articles: ArticlesReducer,
   // user: userReducer,
   // product: productReducer
});

const store = createStore(allReducer, applyMiddleware(thunk));
export default store;
