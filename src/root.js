import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Index from './components/index';
import App from './components/app';
import PrivateRoute from './privateroute';
// const jwt = require('jsonwebtoken');

class Root extends Component {
  checkSession() {
    let isLoggedIn = true;

    // if(localStorage.getItem('xyzcba')){
    //   const data = jwt.verify(localStorage.getItem('xyzcba'), 
    //     'super.super.secret.shhh',
    //     (err, data) => {
    //       console.log('err: ', err);
    //       console.log('data: ', data);

    //       if(err){
    //         isLoggedIn = false;
    //       }

    //       if (data) {
    //         isLoggedIn = true;
    //       }
    //   });
    // }

    return isLoggedIn;
  }

  render() {
   let loggedIn = this.checkSession();
   return (     
       <BrowserRouter>
        <div>
            <Route exact path='/' render={() => (loggedIn ? <Redirect to='/home'/> : <Index/>)}/>
            <PrivateRoute exact path="/home" component={App} loggedIn={loggedIn}/>
        </div>
      </BrowserRouter>
   )
  }
}

export default Root;