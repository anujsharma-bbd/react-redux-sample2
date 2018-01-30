import { sharedActionTypes } from "../actions/sharedActionTypes";
import { sharedState } from "../state/";
import { Map } from "immutable";

export default (state = Map(sharedState), action) => {

    let stateCopy = {};
    // /**
    //  * Create a copy of the state on which actions will be performed.
    //  */
    // if (sharedActionTypes[action.type]) {
    //     stateCopy = JSON.parse(JSON.stringify(state));
    // }

    switch (action.type) {

        case sharedActionTypes.SET_LEFT_MENU_EXPANDED:
            {
                // stateCopy.leftMenuExpaned = !stateCopy.leftMenuExpaned;
                stateCopy = state.set('leftMenuExpaned', !state.get('leftMenuExpaned'));
                return stateCopy;
            }
        case sharedActionTypes.SET_RIGHT_SIDE_EXPANDED:
            {
                // stateCopy.isRightPanelExpanded = !stateCopy.isRightPanelExpanded;
                stateCopy = state.set('isRightPanelExpanded', !state.get('isRightPanelExpanded'));

                return stateCopy;
            }
        case sharedActionTypes.SET_TAB_CHANGE:
            {
                // stateCopy
                //     .tabs
                //     .forEach((tab, index) => {
                //         tab.isSelected = (tab.key === action.payload.key);
                //     })
                debugger;
                const tabs = state.get('tabs').map((tab) => {
                    tab.set('isSelected', tab.get('key') === action.payload.key);
                });
                stateCopy = state.set('tabs', tabs);
                let category = tabs.toJS().filter((tab) => tab.get('key') === action.payload.key)[0].get('category');
                // .tabs
                // .filter((tab) => tab.key === action.payload.key)[0]
                // .category;
                // stateCopy
                //     .menuPanels
                //     .forEach((panel) => {
                //         panel.isOpened = (panel.value == category);
                //     })
                const menuPanels = stateCopy.get('menuPanels').map(panel => {
                    panel.set('isOpened', panel.get('value') === category);
                });
                stateCopy = state.set('menuPanels', menuPanels);
                return stateCopy;
            }
        case sharedActionTypes.SET_LOGIN_USERNAME:
            {
                // stateCopy.loginDetails.userName = action.payload.value;
                stateCopy = state.setIn(['loginDetails', 'userName'], action.payload.value);
                return stateCopy;
            }
        case sharedActionTypes.SET_LOGIN_PASSWORD:
            {
                // stateCopy.loginDetails.password = action.payload.value;
                stateCopy = state.setIn(['loginDetails', 'password'], action.payload.value);

                return stateCopy;
            }
        case sharedActionTypes.SET_LOGIN_REMEMBERME:
            {
                // stateCopy.loginDetails.rememberMe = action.payload.value;
                stateCopy = state.setIn(['loginDetails', 'rememberMe'], action.payload.value);

                return stateCopy;
            }
        case sharedActionTypes.SET_LOGIN_ERROR_MESSAGE:
            {
                // stateCopy.loginDetails.errorMessage = action.payload.value;
                stateCopy = state.setIn(['loginDetails', 'errorMessage'], action.payload.value);

                return stateCopy;
            }
        case sharedActionTypes.SET_LOGGED_IN:
            {
                // stateCopy.loginDetails.isloggedIn = action.payload.isLoggedIn;
                stateCopy = state.setIn(['loginDetails', 'isloggedIn'], action.payload.isloggedIn);
                stateCopy = stateCopy.setIn(['loginDetails', 'userName'], action.payload.userName);
                stateCopy = stateCopy.setIn(['loginDetails', 'displayName'], action.payload.displayName);

                // stateCopy.loginDetails.userName = action.payload.userName;
                // stateCopy.loginDetails.displayName = action.payload.displayName;
                return stateCopy;
            }
        case sharedActionTypes.SET_LOG_OUT:
            {
                return Map(state); // Reset to Original State after Logout
            }
        case sharedActionTypes.SET_LEFT_MENU_TOGGLE:
            {
                debugger;
                if (state.get('menuPanels') && state.get('leftMenuExpaned')) {
                    stateCopy = state.get('menuPanels').map((panel) => {
                        if (panel.get('value') == action.payload.panel.value) {
                            panel.set('isOpened', !panel.get('isOpened'));
                        } else {
                            panel.set('isOpened', false);
                        }
                    });
                    // .menuPanels
                    // .forEach((panel) => {
                    //     if (panel.value == action.payload.panel.value) {
                    //         panel.isOpened = !panel.isOpened;
                    //     } else {
                    //         panel.isOpened = false;
                    //     }
                    // })
                    return stateCopy;

                } else {
                    return Map(state);
                }

            }
        case sharedActionTypes.SET_TOGGLE_PROFILE_MENU:
            {
                // stateCopy.profileMenu.isOpened = !stateCopy.profileMenu.isOpened;
                stateCopy = state.setIn(['profileMenu', 'isOpened'], !state.getIn(['profileMenu', 'isOpened']));
                return stateCopy;
            }
        case sharedActionTypes.SET_DOCUMENT_CLICK:
            {
                // stateCopy.profileMenu.isOpened = action.payload;
                stateCopy = state.setIn(['profileMenu', 'isOpened'], action.payload);

                return stateCopy;
            }
        case sharedActionTypes.SET_LEFT_MENU_SMALL_SCREEN_TOGGLED:
            {
                // stateCopy.smallScreenLeftMenuOpened = !stateCopy.smallScreenLeftMenuOpened;
                stateCopy = state.setIn(['smallScreenLeftMenuOpened'], !state.getIn(['smallScreenLeftMenuOpened']));

                return stateCopy;
            }
        case sharedActionTypes.SET_RIGHT_MENU_SMALL_SCREEN_TOGGLED:
            {
                // stateCopy.smallScreenRightMenuOpened = !stateCopy.smallScreenRightMenuOpened;
                stateCopy = state.setIn(['smallScreenRightMenuOpened'], !state.getIn(['smallScreenRightMenuOpened']));

                return stateCopy;
            }
        case sharedActionTypes.SET_ROUTE_ON_MAP_OPENED:
            {
                // stateCopy.routesOnMap.isOpened = action.payload.isOpened;
                stateCopy = state.setIn(['routesOnMap', 'isOpened'], action.payload.isOpened);
                stateCopy = state.setIn(['routesOnMap', 'popupLoaderShown'], action.payload.popupLoaderShown);

                // stateCopy.routesOnMap.popupLoaderShown = action.payload.popupLoaderShown;
                if (action.payload.routeObject)
                    // stateCopy.routesOnMap.routeObject = action.payload.routeObject;
                    stateCopy = state.setIn(['routesOnMap', 'routeObject'], action.payload.routeObject);

                return stateCopy;
            }
        default:
            return state;
    }

}