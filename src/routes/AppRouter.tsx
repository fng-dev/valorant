import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />

                    <Route exact path="/" component={Home} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};
