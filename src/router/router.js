import React, {Component, Fragment} from 'react';
import {
    Route,
    HashRouter
} from 'react-router-dom';
import Login from '../pages/Login';
import ReduxDemo from '../pages/ReduxDemo';

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Fragment>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/redux" component={ReduxDemo}/>
                </Fragment>
            </HashRouter>
        );
    }
}

export default Router;
