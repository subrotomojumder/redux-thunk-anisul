import { combineReducers, createStore } from "redux";
import counterReducer from "./services/reducers/counterReducer";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import todosReducer from "./services/reducers/todosReducer";

const allReducer = combineReducers({
    counterR : counterReducer,
    todosR: todosReducer
})

const store = createStore(allReducer, applyMiddleware(thunk));
export default store;
