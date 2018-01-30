import React from "react";
import { connect } from "react-redux";
import { Constants } from "../../../../../common/app-settings/constants";

class PayeeListHeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let selectedTab = this.props.sharedModel.get('tabs').find(m => m.get('isSelected'));
        return (
            <div>
                {(selectedTab && (selectedTab.get('key') == Constants.payeeKeys.list)) ?
                    <div className="payeelist-header">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Account Holder Information
                                </th>
                                    <th>
                                        Banking & Tax Information
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Brooklyn Heights Motel <br />
                                        John Smith <br />
                                        233 Canel Street<br />
                                        Brooklyn, NY 10024<br />
                                    </td>
                                    <td>
                                        Brooklyn Heights Motel<br />
                                        John Smith<br />
                                        233 Canel Street<br />
                                        Brooklyn, NY 10024<br />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ''}
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

export default connect(mapStateToProps)(PayeeListHeaderComponent);