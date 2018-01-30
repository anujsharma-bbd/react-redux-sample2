import { Constants } from "../../../common/app-settings/constants"
import { Map, List } from "immutable";
// shared state for all components
export
    const
    sharedState = Map({
        "leftMenuExpaned": true,
        "isRightPanelExpanded": false,
        "smallScreenLeftMenuOpened": false,
        "smallScreenRightMenuOpened": false,
        "menuPanels": List([
            Map({
                "text": "Payee",
                "value": Constants.menuCategory.payee,
                "isOpened": false,
                "iconClass": "fa fa-user"
            })
        ]),
        "profileMenu": Map({
            "isOpened": false
        }),
        "tabs": List([
            Map({
                "key": "add",
                "text": "Add Payee",
                "isSelected": false,
                "category": Constants.menuCategory.payee
            }),
            Map({
                "key": "list",
                "text": "List of Payees",
                "isSelected": false,
                "category": Constants.menuCategory.payee
            })
        ])
    });