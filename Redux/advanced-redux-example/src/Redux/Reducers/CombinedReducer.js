import {combineReducers} from "redux";
import {WizardReducer} from "./WizardReducer";
import {LoggedReducer} from "./LoggedReducer";

export const combinedReducer = combineReducers({
    isLoggedIn: LoggedReducer,
    wizards: WizardReducer
})