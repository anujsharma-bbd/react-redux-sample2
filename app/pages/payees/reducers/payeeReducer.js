import { reportsState } from "../state/";
import { payeeActionTypes } from "../actions/payeeActionTypes";

import { Map } from "immutable";

export default (state = Map(reportsState), action) => {

     let stateCopy = {};
    // /**
    //  * Create a copy of the state on which actions will be performed.
    //  */
    // if (payeeActionTypes[action.type]) {
    //     stateCopy = JSON.parse(JSON.stringify(state));
    // }

    switch (action.type) {
        case payeeActionTypes.SET_LIST_OF_PAYEES:
            {
                stateCopy = state.set('payeeList', action.payload.list);
                // stateCopy.payeeList = action.payload.list;
                return stateCopy;
            }
        case payeeActionTypes.SET_STATE:
            {
                // stateCopy.addPayee.formModel.payeeInfo.state = action.payload;
                stateCopy = state.setIn(['addPayee', 'formModel', 'payeeInfo', 'state'], action.payload);
                return stateCopy;
            }
        case payeeActionTypes.SET_TAX_ID:
            {
                // stateCopy.addPayee.formModel.taxIDInfo.taxIDType = action.payload;
                stateCopy = state.setIn(['addPayee', 'formModel', 'taxIDInfo', 'taxIDType'], action.payload);
                return stateCopy;
            }
        case payeeActionTypes.SET_SUCCESS_MESSAGE:
            {
                // stateCopy.addPayee.addPayeeMessage = action.payload.message;
                stateCopy = state.setIn(['addPayee', 'addPayeeMessage'], action.payload.message);

                // stateCopy.addPayee.validationMessageType = action.payload.type;
                stateCopy = state.setIn(['addPayee', 'validationMessageType'], action.payload.type);

                return stateCopy;
            }
        case payeeActionTypes.SET_PANEL_RELOAD:
            {
                // stateCopy.panelProperties.panelReload = action.payload;
                stateCopy = state.setIn(['panelProperties', 'panelReload'], action.payload);

                return stateCopy;
            }
        default:
            return state;
    }

};