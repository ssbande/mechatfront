import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component, loggedIn, ...rest }) => {
	console.log('private loggedIn: ', loggedIn);
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