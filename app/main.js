import './assets/styles/main.css';
import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory, IndexRedirect,useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import store from './pages/shared/store';
import NoMatch from "./pages/shared/nomatch.jsx";
import Master from './pages/shared/master.jsx';
import PayeeContainer from "./pages/payees/components/";
import AddPayeeComponent from "./pages/payees/components/middle-container/add-payee/";
import ListPayeesComponent from "./pages/payees/components/middle-container/list-payees/";
import {Constants} from "./common/app-settings/constants"
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
    <Provider store={store}>
    <Router history={appHistory}>
        <Route path={Constants.pathNames.home} component={Master}>
            <IndexRedirect to={Constants.pathNames.payee}/>
            <Route path={Constants.pathNames.payee} component={PayeeContainer}>
                <IndexRoute component={ListPayeesComponent}/>
                <Route path={Constants.selectedReportsTab.add} component={AddPayeeComponent}/>
                <Route path={Constants.selectedReportsTab.list} component={ListPayeesComponent}/>
            </Route>           
        </Route>
        <Route path={Constants.pathNames.noMatch} component={NoMatch}/>
    </Router>
</Provider>, document.getElementById('app'));