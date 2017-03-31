import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './auth';
const authenticate = new Auth();

const PrivateRoute = ({ component, ...rest }) => {
  const loggedIn = authenticate.session();
  return <Route {...rest} render={props => (
    loggedIn ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
}

export default PrivateRoute;