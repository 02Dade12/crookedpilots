import React, { Component } from "react";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";
// import ContactInfo from "../pages/ContactInfo";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthApi from "../utils/AuthApi";


function Routes() {
    return (
        <Switch>
            <RouteRegistration path="/admin" component={Admin} />
            <RouteProtected path="/dashboard" component={Dashboard} />
        </Switch>
    );
}

const RouteRegistration = ({ component: Component, ...rest }) => {
    const authApi = React.useContext(AuthApi);
    return <Route {...rest} render={props => !authApi.auth ? (<Component {...props} />) : <Redirect to="/dashboard"/>
} />
};

const RouteProtected = ({ component: Component, ...rest }) => {
    const authApi = React.useContext(AuthApi);
    return <Route {...rest} render={props => authApi.auth ? (<Component {...props} />) : (<Redirect to="/admin" />)
} />
};



export default Routes;