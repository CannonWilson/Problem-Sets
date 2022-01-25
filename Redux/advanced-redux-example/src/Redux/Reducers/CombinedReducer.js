import {combineReducers} from "redux";
import {WizardReducer} from "./WizardReducer";
import {LoggedReducer} from "./LoggedReducer";
import {CounterReducer} from "./CounterReducer";

export const combinedReducer = combineReducers({
    isLoggedIn: LoggedReducer,
    wizards: WizardReducer,
    counter: CounterReducer
})