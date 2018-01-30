import React from "react";
import { connect } from 'react-redux';
import { payeeActionTypes } from "../../actions/payeeActionTypes";
import * as Action from "../../../shared/actions/action";
import ToolBoxControl from "../../../shared/controls/tool-box-control/";
import { Constants } from "../../../../common/app-settings/constants";
import { Utility } from "../../../../common/utility/";
import PayeeListHeaderComponent from "./list-payees/header-component";

/**
 * Middle container for REPORTS section
 */
class ReportsMiddelContainerComponent extends React.Component {

    /**
     * Constructor to initialize fields.
     */
    constructor(props) {
        super(props);
        this.onWindowResize = this.onWindowResize.bind(this);
    }

    onWindowResize() {
        Utility.onWindowResize();
    }
    /**
     * Render View method.
     */
    render() {
        let model = this.props.model;
        let selectedTab = this.props.sharedModel.get('tabs').find(m => m.get('isSelected'));

        return (
            <div id="content" className="content">
                <h1 className="page-header">{(selectedTab && selectedTab.get('key') == Constants.payeeKeys.list) ? 'Account Set-up' : 'Account Set-up : Add Payee Information'} </h1>
                <div className="clear"></div>
                <PayeeListHeaderComponent />
                <div className="clear"></div>
                <div className={'panel panel-inverse ' + (model.getIn(['panelProperties', 'panelExpanded']) ? " panel-expand " : "")}  >
                    <div className="panel-heading">
                        <ToolBoxControl dataModel={model.get('panelProperties')}
                            onExpand={() => {
                                this.props.dispatch(Action.getAction(payeeActionTypes.SET_PANEL_EXPAND_REPORTS, {}));
                                this.onWindowResize();
                            }}
                            onReload={() => {
                                this.props.dispatch(Action.getAction(payeeActionTypes.SET_PANEL_RELOAD_REPORTS_REFRESH, true));
                            }}
                            onCollapse={() => {
                                this.props.dispatch(Action.getAction(payeeActionTypes.SET_PANEL_COLLAPSE_REPORTS, {}));
                                this.onWindowResize();
                            }}
                            onRemove={() => {
                                this.props.dispatch(Action.getAction(payeeActionTypes.SET_PANEL_REMOVE_REPORTS, {}));
                            }}
                        />
                        <h4 className="panel-title"><panel>{selectedTab ? selectedTab.get('text') : ''}</panel></h4>
                    </div>
                    <div className={"panel-body " + (model.getIn(['panelProperties', 'panelExpanded']) ? " custom-scroll " : '') + (model.getIn(['panelProperties', 'panelCollapsed']) ? ' height-0 ' : '')}>
                        <div className="reports-filter-bar">

                        </div>
                        <div className="reports-content">
                            {this.props.children}
                            {model.getIn(['panelProperties', 'panelReload']) ? <div className="panel-loader"><span className="spinner-small"></span></div> : ''}
                        </div>

                    </div>
                </div>

            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        model: state.payeeModel,
        sharedModel: state.sharedModel
    }
}

export default connect(mapStateToProps)(ReportsMiddelContainerComponent);