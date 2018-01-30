import React from "react";
import { connect } from "react-redux";
import { Constants } from "../../../../../common/app-settings/constants"
import { sharedActionTypes } from "../../../../shared/actions/sharedActionTypes";
import { payeeActionTypes } from "../../../actions/payeeActionTypes";
import * as Action from "../../../../shared/actions/action";
import { PayeeService } from "../../../services/";

class ListPayeesComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.getAllPayees = this.getAllPayees.bind(this);
    }
    /**
    * Set tab to DownloadSurveys on component mount.
    */
    componentDidMount() {
        this.props.dispatch(Action.getAction(sharedActionTypes.SET_TAB_CHANGE, { key: Constants.payeeKeys.list }));
        this.getAllPayees();
    }
    // get all payees
    getAllPayees() {
        this.props.dispatch(Action.getAction(payeeActionTypes.SET_PANEL_RELOAD, true));
        PayeeService.getalllPAyees().then((response) => {
            this.props.dispatch(Action.getAction(payeeActionTypes.SET_PANEL_RELOAD, false));
            if (response) {
                this.props.dispatch(Action.getAction(payeeActionTypes.SET_LIST_OF_PAYEES, { list: response }));
            }
        }).catch((error) => {
            this.props.dispatch(Action.getAction(payeeActionTypes.SET_SUCCESS_MESSAGE, { message: Constants.messages.someErrorOccured, type: "Error" }));
            window.scrollTo(0, 0)
        })
    }
    render() {
        debugger;
        let model = this.props.model;
        return (
            <div className="list-payees-content">
                {model.getIn(['panelProperties', 'panelReload']) ? <div className="panel-loader"><span className="spinner-small"></span></div> : ''}
                <div className="control-bar">
                    <button className="btn-edit pull-left">Edit</button>
                    <button className="btn-pdf pull-left">PDF</button>
                    <div className="btn-search-panel pull-right">
                        <input type="text" className="" />
                        <button>Advance Filters</button>
                    </div>
                </div>
                <table className="routeList-table routeList-table-rounded">
                    <thead>
                        <tr>
                            <th><input type="checkbox" checked={false} /></th>
                            <th>Payee Name</th>
                            <th>Contact</th>
                            <th>Unit Address</th>
                            <th>Phone</th>
                            <th>%</th>
                            <th>Status</th>
                            <th>Bank Acc.</th>
                            <th>Tax Id</th>
                            <th>Type</th>
                            <th>Management Co.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.model.get('payeeList').map((payee, index) =>
                                <tr key={"inasas" + index}>
                                    <td><input type="checkbox" checked={false} /></td>
                                    <td>{payee.get('Name')}</td>
                                    <td>{payee.get('FirstName') + " " + payee.get('LastName')}</td>
                                    <td>{payee.get('AddressStreet') + ", " + payee.get('AddressCity') + ", " + payee.get('AddressState') + " - " + payee.get('AddressZip')}</td>
                                    <td>{payee.get('Phone')}</td>
                                    <td>{payee.get('Percentage')}</td>
                                    <td className="text-center"><span className={payee.get('Status') ? payee.get('Status').toString().toLowerCase() : ''}>{payee.get('Status')}</span></td>
                                    <td>{payee.get('AccountNumber')}</td>
                                    <td>{payee.get('TaxId')}</td>
                                    <td>{payee.get('TaxIdType')}</td>
                                    <td>{payee.get('Name')}</td>
                                    <td>
                                        <button>Action</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        model: state.payeeModel,
        sharedModel: state.sharedModel
    };
}
export default connect(mapStateToProps)(ListPayeesComponent);;