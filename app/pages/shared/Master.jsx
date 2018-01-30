import React from 'react';
import { connect } from 'react-redux';

import LeftMenu from "./left-menu/";
import AppHeader from "./header-component/";
import { sharedActionTypes } from "./actions/sharedActionTypes";
import * as Action from "./actions/action";

/**
 * Master component containing the header and left menu component..
 */
class Master extends React.Component {
    /**
     * Constructor to initialize fields.
     */
   constructor(props,children) {
       super(props);
   }
 
   /**
    * Render view.
    */
   render() {
      return (
          <div>
            <div id="page-container" className={ "page-header-fixed page-sidebar-fixed page-with-two-sidebar "+(!this.props.sharedModel.get('leftMenuExpaned') ? "page-sidebar-minified ":"")+ (!this.props.sharedModel.get(['panelExpandedisRightPanelExpanded']) ? " right-sidebar-minified ":"")}>
                  <AppHeader />
                  <LeftMenu />
                  {this.props.children}
            </div>
          </div>
      );
  }


}

function mapStatToProps(state){
    return {
        sharedModel:state.sharedModel
    };
}
export default connect(mapStatToProps)(Master);
