import { createConfirmation } from 'react-confirm';
import React, {PropTypes} from 'react';
import Modal from 'tg-modal';
import {confirmable} from 'react-confirm';
import { Constants } from "../../../../common/app-settings/constants";

/**
 * Confirmation Dialog component
 */
class ConfirmDialog extends React.Component {
  render() {
    const {
      okLabbel = 'OK',
      cancelLabel = 'Cancel',
      title,
      confirmation,
      show,
      proceed,
      dismiss,
      cancel,
      options
    } = this.props;

    return (
      <div className={"container confirm-dialog-poup" + (options && options.notification ?" notification-as-well":'')}>
          <Modal isOpen={show} autoWrap title={''} onCancel={() => cancel()} >
            <div className="confirm-text"> 
              {confirmation} 
            </div>
            <div className="footer-bar">
                  <button className="button pull-right secondary-button" onClick={() => cancel()}>{cancelLabel}</button>
                  <div className="pull-right">&nbsp;</div>
                  <button className="button pull-right " onClick={() => proceed()}>{okLabbel}</button>
                  <div className="clear"></div>
                </div>
          </Modal>
      </div>
  
    )
  }
}
 
ConfirmDialog.propTypes = {
  show: PropTypes.bool,            // from confirmable. indicates if the dialog is shown or not. 
  proceed: PropTypes.func,         // from confirmable. call to close the dialog with promise resolved. 
  cancel: PropTypes.func,          // from confirmable. call to close the dialog with promise rejected. 
  dismiss: PropTypes.func,         // from confirmable. call to only close the dialog. 
  confirmation: PropTypes.string,  // arguments of your confirm function 
  options: PropTypes.object        // arguments of your confirm function 
}
 
// confirmable HOC pass props `show`, `dismiss`, `cancel` and `proceed` to your component. 

// create confirm function 
const confirm = createConfirmation(confirmable(ConfirmDialog));

// This is optional. But I recommend to define your confirm function easy to call. 
export default function(confirmation, options = {}) {
  // You can pass whatever you want to the component. These arguments will be your Component's props 
  return confirm({ confirmation, options });
}
