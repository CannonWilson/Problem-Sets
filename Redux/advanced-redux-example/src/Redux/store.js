import {createStore, combineReducers} from "redux";

reducers = combineReducers() // put all reducers here
export const store = createStore(reducers)