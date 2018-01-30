import React from "react";
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import { MenuItem } from '../controls/menu-item-control/';
import { sharedActionTypes } from "../actions/sharedActionTypes";
import * as Action from "../actions/action";

class LeftMenu extends React.Component {

	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
		this.onExpand = this.onExpand.bind(this);
		this.onPanelClickHandler = this.onPanelClickHandler.bind(this);
	}
	/* on left menu minimized/maximize */
	onExpand() {
		this.props.dispatch(Action.getAction(sharedActionTypes.SET_LEFT_MENU_EXPANDED, {}));
	}
	/* on link click */
	onClickHandler(tabkey) {
		this.props.dispatch(Action.getAction(sharedActionTypes.SET_TAB_CHANGE, { key: tabkey }));
	}
	/* on panel toggle */
	onPanelClickHandler(panel) {
		this.props.dispatch(Action.getAction(sharedActionTypes.SET_LEFT_MENU_TOGGLE, { panel: panel }));
	}
	render() {
		debugger;
		return (
			<div>
				<div id="sidebar" className={"sidebar " + (this.props.sharedModel.get('smallScreenLeftMenuOpened') ? " left_menu_small_screen_toggled " : '')}>
					<div data-height="100%">
						<ul className="nav">
							<li className="nav-profile">
								<div className="info">
									POC
						</div>
							</li>
						</ul>

						<ul className="nav">
							{
								this.props.sharedModel.get('menuPanels').map((panel, ind) =>
									<li className={"has-sub" + (panel.get('isOpened') ? " expand " : '')} key={"panel-menu-" + ind}>
										<a href="javascript:;" onClick={(e) => this.onPanelClickHandler(panel)}>
											<b className="caret pull-right"></b>
											<i className={panel.get('iconClass')}></i>
											<span> {panel.get('text')} </span>
										</a>
										<ul className={"sub-menu" + (!panel.get('isOpened') ? " displaynone " : '')}>
											{
												this.props.sharedModel.get('tabs').filter((tab) => tab.get('category') === panel.get('value')).map((tab, index) => (
													<MenuItem dispatch={this.props.dispatch} key={"tabs-leftmenu-" + index} TabKey={tab.get('key')} To={"/" + panel.get('value') + "/" + tab.get('key')} Text={tab.get('text')} IsSelected={tab.get('isSelected')}>
													</MenuItem>
												))
											}
										</ul>
									</li>)
							}
							<li>
								<a href="javascript:void(0)" className="sidebar-minify-btn" data-click="sidebar-minify" onClick={this.onExpand}>
									<i className={"fa " + (this.props.sharedModel.get('leftMenuExpaned') ? "fa-angle-double-left" : '')}></i>
								</a>
							</li>

						</ul>

					</div>
				</div>
				<div className="sidebar-bg"></div>
			</div>
		);

	}

}

const mapStateToProps = (state) => {
	return {
		sharedModel: state.sharedModel
	}
}

export default connect(mapStateToProps)(LeftMenu);