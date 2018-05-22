import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
//import Reducers from "./reducers";

const store = createStore(
    combineReducers({
        //...Reducers,
        routing: routerReducer,
    }),
    applyMiddleware(thunk),
);
export {store};