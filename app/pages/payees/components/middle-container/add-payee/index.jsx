import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Constants } from "../../../../../common/app-settings/constants"
import { sharedActionTypes } from "../../../../shared/actions/sharedActionTypes";
import { payeeActionTypes } from "../../../actions/payeeActionTypes";
import * as Action from "../../../../shared/actions/action";
import { menuRenderer } from "../../../../shared/controls/menu-renderer/";
import ValidationControl from '../../../../shared/controls/validation-control';
import { PayeeService } from "../../../services/";

class AddPayeeComponent extends React.Component{

    constructor(props){
        super(props);
        this.addPayeeData = this.addPayeeData.bind(this);
    }
    addPayeeData(){
        let refs = this.refs;
        let body = {
            Name:refs.payeeName.value,
            FirstName: refs.firstName.value,
            LastName: refs.lastName.value,
            AddressStreet: refs.address.value,
            AddressCity: refs.city.value,
            AddressState: refs.state.value,
            AddressZip: refs.zip.value,
            Phone: refs.phone.value,
            Fax: refs.fax.value,
            Email: refs.email.value,
            Percentage: refs.percentage.value,
            TaxId: refs.taxIDNo.value,
            TaxIdType: refs.taxIDType.value,
            RouteNumber: refs.routeNumber.value,
            AccountNumber: refs.accNumber.value
        }
        this.props.dispatch(Action.getAction(payeeActionTypes.SET_PANEL_RELOAD, true));
        PayeeService.addPayee(JSON.stringify(body)).then((response)=>{
             this.props.dispatch(Action.getAction(payeeActionTypes.SET_PANEL_RELOAD, false));
            this.props.dispatch(Action.getAction(payeeActionTypes.SET_SUCCESS_MESSAGE, { message: Constants.messages.appPayee,type:"Success" }));
            window.scrollTo(0,0)
        }).catch((error)=>{
            this.props.dispatch(Action.getAction(payeeActionTypes.SET_PANEL_RELOAD, false));
            this.props.dispatch(Action.getAction(payeeActionTypes.SET_SUCCESS_MESSAGE, { message: Constants.messages.someErrorOccured,type:"Error" }));
            window.scrollTo(0,0)
        })
    }
     /**
     * Set tab to DownloadSurveys on component mount.
     */
    componentDidMount() {
        this.props.dispatch(Action.getAction(sharedActionTypes.SET_TAB_CHANGE, { key: Constants.payeeKeys.add }));
    }
    render(){
        let model = this.props.model;
        return (
            <div className="add-payee-content">
                 <ValidationControl message={model.addPayee.addPayeeMessage} type={model.addPayee.validationMessageType} isPopup={false}/>
                <div className="add-payee-tabs">
                        <div className="add-payee-tab tab-1 active">
                            <label className="tab-number">1</label><h5>Payee Information & Tax ID</h5>
                            <div className="Content-tabs">
                                Please confirm the information on this screen. Its the contact information that was completed during the initial registration.
                            </div>
                        </div>
                         <div className="add-payee-tab tab-2">
                            <label className="tab-number">2</label><h5>Add Units</h5>
                            <div className="Content-tabs">
                                Please confirm the information on this screen. Its the contact information that was completed during the initial registration.
                            </div>
                        </div>
                         <div className="add-payee-tab tab-3">
                            <label className="tab-number">3</label><h5>Confirm & Submit</h5>
                            <div className="Content-tabs">
                                You will be able to review before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="account-entries">
                        <div className="payee-info">
                            <form>
                                <div className="row">
                                        <div className="col-sm-12">
                                            <label className=" table-title">Payee Information</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Percentage<span className="asterik">*</span>:</label>
                                        <input type="number" className="form-control pull-right" style={{width:"150px"}} 
                                            ref="percentage" />
                                    </div>
                                    <div className="form-group">
                                        <label >Payee Name<span className="asterik">*</span>:</label>
                                        <input type="text" ref="payeeName" className="form-control"  placeholder="ACME, Inc."  />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label >c/o First Name<span className="asterik">*</span>:</label>
                                            <input type="text"  className="form-control"  placeholder="Robert" ref="firstName" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label >Last Name<span className="asterik">*</span>:</label>
                                            <input type="text" className="form-control" ref="lastName"  placeholder="Santore"  />
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label >Address<span className="asterik">*</span>:</label>
                                        <input type="text" className="form-control" id="address" ref="address" placeholder="Enter your mailing address."  />
                                    </div>
                                     <div className="row">
                                        <div className="col-sm-4">
                                            <label >City<span className="asterik">*</span>:</label>
                                            <input type="text" className="form-control"  placeholder="City" ref='city' />
                                        </div>
                                        <div className="col-sm-4">
                                            <label >State<span className="asterik">*</span>:</label>
                                              <input type="text" className="form-control"  placeholder="State" ref='state' />
                                        </div>
                                        <div className="col-sm-4">
                                            <label >Zip Code<span className="asterik">*</span>:</label>
                                            <input type="text" className="form-control"  placeholder="Zip" ref='zip' />
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label >Phone Number<span className="asterik">*</span>:</label>
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                             <input type="text" className="form-control" placeholder="" ref='phone' />
                                        </div>
                                       
                                    </div>
                                    <div className="form-group">
                                        <label >Fax Number<span className="asterik">*</span>:</label>
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                            <i className="fa fa-fax" aria-hidden="true"></i>
                                            </div>
                                             <input type="text" className="form-control" placeholder="" ref="fax" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Email<span className="asterik">*</span>:</label>
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                             <input type="text" className="form-control" placeholder="Enter an email address. this will be your username." ref='email' />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Confirm Email<span className="asterik">*</span>:</label>
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                             <input type="text" className="form-control" placeholder="Enter an email address. this will be your username. " ref='confirmEmail' />
                                        </div>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" ref='chkInvite' /> Invite and send account creation instructions?</label>
                                    </div>
                            </form>
                        </div>
                        <div className="tax-info">
                            <form>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label  className=" table-title">Tax ID Information</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Tax ID Type<span className="asterik">*</span>:</label>
                                        <input type="text" className="form-control" placeholder="" ref='taxIDType'  />
                                    </div>
                                    <div className="form-group">
                                        <label >Tax ID No<span className="asterik">*</span>:</label>
                                        <input type="text" className="form-control" placeholder="" ref='taxIDNo'  />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label  className=" table-title">Banking Information</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Bank Name : </label>&nbsp;
                                        <span className="badge"> SSN </span>
                                    </div>
                                    <div className="form-group">
                                        <label >Routing Number<span className="asterik">*</span>:</label>
                                        <input type="text" className="form-control" placeholder="" ref="routeNumber" />
                                    </div>
                                    <div className="form-group">
                                        <label >Account Number<span className="asterik">*</span>:</label>
                                        <input type="text" className="form-control" ref="accNumber" />
                                    </div>
                            </form>
                        </div>
                    </div>
                <hr className="horizontalline"/>
                <button className="addpayee pull-right" onClick={this.addPayeeData}> Add Payee &nbsp;&nbsp;<i className="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
 return { 
     model:state.payeeModel,
     sharedModel: state.sharedModel
    };
}
export default connect(mapStateToProps)(AddPayeeComponent);;