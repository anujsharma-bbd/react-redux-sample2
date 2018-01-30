import { combineReducers } from 'redux';

import payeeReducer from "../../payees/reducers/payeeReducer.js";
import sharedReducer from "./sharedReducer.js";
/**
 * Using redux to combine reduces for dashboard, admin and shared.
 */
const reducer = combineReducers(
    {
        sharedModel: sharedReducer,
        payeeModel: payeeReducer
    });

export default reducer;