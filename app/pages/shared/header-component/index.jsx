import React from "react";
import { connect } from "react-redux";
import { Link, IndexLink } from 'react-router';

const header_logo = require("../../../assets/img/dss_logo_white_sm.png");
const profile_logo = require("../../../assets/img/user-rbs.jpg");

import { sharedActionTypes } from "../actions/sharedActionTypes";
import * as Action from "../actions/action";

class AppHeader extends React.Component {

    constructor(props) {
        super(props);
        this.onClickLeftMenuToggle = this.onClickLeftMenuToggle.bind(this);
    }
    // toggling left and right menu
    onClickLeftMenuToggle(flag) {

        if (flag)
            this.props.dispatch(Action.getAction(sharedActionTypes.SET_LEFT_MENU_SMALL_SCREEN_TOGGLED, {}));
        else
            this.props.dispatch(Action.getAction(sharedActionTypes.SET_RIGHT_MENU_SMALL_SCREEN_TOGGLED, {}));

    }
    render() {
        let loginDetails = this.props.sharedModel.get('loginDetails');

        return (
            <div id="header" className="header navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button className="navbar-toggle pull-left" onClick={() => { this.onClickLeftMenuToggle(true) }} data-click="sidebar-toggled">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <button className="navbar-toggle pull-right" onClick={() => { this.onClickLeftMenuToggle(false) }} data-click="right-sidebar-toggled">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <Link to="/dashboard/mapview" className="navbar-brand" activeClassName="selected-left-menu-item">
                            <img src={header_logo} alt="DSS" width="190" height="33" />
                        </Link>
                    </div>

                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        sharedModel: state.sharedModel
    }
};
export default connect(mapStateToProps)(AppHeader);