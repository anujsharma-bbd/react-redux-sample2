import { Constants } from "../../../common/app-settings/constants";

import { Map, List } from "immutable";


// dashboard section state
export const reportsState = Map({
    "isDownloadingReport": false,
    "panelProperties": Map({
        "panelExpanded": false,
        "displayRefreshButton": true,
        "panelReload": false,
        "panelCollapsed": false,
        "panelRemoved": false
    }),
    payeeList: List([]),
    addPayee: Map({
        addPayeeMessage: '',
        validationMessageType: "",
        taxNoOptions: [{ value: "SSN", label: "SSN" }, { value: "A", label: "A" }, { value: "B", label: "B" }],
        statesOptions: [{ value: "State A", label: "State A" }, { value: "State B", label: "State B" }, { value: "State C", label: "State C" }],
        taxNo: { value: "SSN", label: "SSN" },
        formModel: Map({
            payeeInfo: Map({
                percentage: "",
                payeeName: "",
                address: "",
                email: "",
                confirmEmail: "",
                phone: "",
                fax: "",
                firstName: "",
                lastName: "",
                city: "",
                state: "",
                zip: "",
                chkInvite: false
            }),
            taxIDInfo: Map({
                taxIDType: "",
                taxIDNo: ""
            }),
            bankingInfo: Map({
                bankName: "",
                routingNumber: "",
                accNumber: ""
            })
        })
    })
});
