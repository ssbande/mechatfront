import React, { Component, PropTypes } from 'react';
import { BrowserRouter, HashRouter, Route, Redirect } from 'react-router-dom';
var loginService = require('./../services/loginsvc');
const login = new loginService.LoginService();

class IndexComponent extends Component {
  state = {
    redirectToReferrer: false,
    loggedIn: false,
    loginData:{
      username: '',
      password: ''
    },
    error:'',
  }
  
  login = (e) => {
    e.preventDefault();
    this.setState({error: ''});

    return login.check(this.state.loginData)
      .then((res) => {
        console.log('response body: ', res.body);
        if(res.body.resultCode == 1){
          console.log("error")
          this.setState({ error : res.body.error.message });
        }else{
          console.log("success")
          // this.props.location.state = {from: {pathname: '/home'}};
          localStorage.setItem('xyzcba', res.body.data.token);
          this.setState({ redirectToReferrer: true, loggedIn: true });
          // return (
          //   <Redirect to={{from: {pathname: "/home"}}}/>
          // )
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  changeTextBoxValue(field, event) {
    var change = {};
    // console.log('field: ', field);
    // console.log('event: ', event);
    this.state.loginData[field] = event.target.value;
    // console.log('field data: ', this.state.loginData.username);
    
    this.setState(change);
  }

  render() {
    const loggedIn = this.state.loggedIn;
    console.log('props: ', this.state.loggedIn);

    let url = loggedIn ? "/home" : "/";
    console.log('url: ', url);
    // const {from} = this.props.location.state || { from: { pathname: url} };
    const {from} = { from: { pathname: url} };
    const { redirectToReferrer }  = { redirectToReferrer: loggedIn};

    // if(loggedIn){
    //   return (<Redirect to={from}/>);
    // } else {

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }else {
      console.log('else normal login');
      return (
      <div>
        <div className="container pageContainer">
          <div className="loginContainer centered">
            <form onSubmit={this.login}>
              <div><input type="text" value={this.state.loginData.username} onChange={this.changeTextBoxValue.bind(this, 'username')} /></div>
              <div><input type="password" onChange={this.changeTextBoxValue.bind(this, 'password')}/></div>
              <div><input type="submit" value="Login" /></div>
              <div>{this.state.error}</div>
            </form>
          </div>
        </div>
      </div> 
      )
    }
  }
}

export default IndexComponent