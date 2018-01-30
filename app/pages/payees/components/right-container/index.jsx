import React from "react";
import { connect } from "react-redux";
import { Constants } from "../../../../common/app-settings/constants"
import { payeeActionTypes } from "../../actions/payeeActionTypes";
import { sharedActionTypes } from "../../../shared/actions/sharedActionTypes";
import * as Action from "../../../shared/actions/action";

class ReportsRightContainerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onExpand = this.onExpand.bind(this);
  }
  
  onExpand() {
    this.props.dispatch(Action.getAction(sharedActionTypes.SET_RIGHT_SIDE_EXPANDED, {}));
  }
  render() {


    return (
      <div>
        <div id="sidebar-right" className={"sidebar sidebar-right " + (this.props.sharedModel.smallScreenRightMenuOpened ? " right_menu_small_screen_toggled " : '')}>
          <div className="position-relative">
            <ul className="nav m-t-10">
              <li className="nav-widget">
                <div className="reports-notification"> This Page contains Payee Information.</div>
              </li>
              <li className="nav-widget minify-button-container">
                <a
                  href="javascript:;"
                  className="sidebar-minify-btn right-side-bar-minify-button-admin minify-reports-button"
                  onClick={this.onExpand}>
                  <i className="fa  fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side-bar-bg-overlay">
          <a
            href="javascript:void(0);"
            className="sidebar-minify-btn right-side-bar-minify-button minify-reports-button"
            onClick={this.onExpand}>
            <i className="fa  fa-angle-double-left"></i>
          </a>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { model: state.payeeModel, sharedModel: state.sharedModel }
};
export default connect(mapStateToProps)(ReportsRightContainerComponent);