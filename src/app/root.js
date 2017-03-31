import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Index from './../components/index';
import App from './../components/app';
import PrivateRoute from './privateroute';
import Auth from './auth'
const authenticate = new Auth();

class Root extends Component {
  render() {
   let loggedIn = authenticate.session();
   return (     
       <BrowserRouter>
        <div>
            <Route exact path='/' render={() => (loggedIn ? <Redirect to='/home'/> : <Index/>)}/>
            <PrivateRoute exact path="/home" component={App}/>
        </div>
      </BrowserRouter>
   )
  }
}

export default Root;