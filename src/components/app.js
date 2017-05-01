import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap - Copy.css';

import React, { Component } from 'react';
// import Header from './header';
// import Sidebar from './sidebar';
// import { Grid, Row, Col } from 'react-bootstrap';
var commonService = require('./../services/commonsvc');
const svc = new commonService.CommonService();


class AppComponent extends Component {

    componentWillMount() {
        console.log('props from constructor: ', this.props);
        this.onlineUsers = this.props.location.onlineUsers;
    }

    onClick(username) {
        console.log('user clicked on: ' + username);
    }

    render() {
        console.log('from app component');
        console.log('this props: ', JSON.stringify(this.props));
        let x = [];
        for(let i = 0; i < 500; i++) {
            x.push(i);
        };

        return (
            <div style={{paddingTop: '50px', paddingBottom: '50px'}}>
                <nav className="navbar navbar-default navbar-fixed-top">
                  <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 sideBarHeader">
                          Sidebar Header
                        </div>
                        <div className="col-md-6 bodyHeader">
                          Body Header
                        </div>
                        <div className="col-md-4 bodyHeader">
                          Other Options
                        </div>
                    </div>
                  </div>
                </nav>
                
                <div className="container-fluid">
                  <div className="row" style={{padding: '8px'}}>
                    <div className="col-md-2" id="sidebar">
                        <div>
                          {
                            x.map((s) => {
                                return <div key = {s}>Sidebar Content {s}</div>
                            })
                          }
                        </div>
                        <hr/>
                        <div>
                            {
                                this.onlineUsers.map((user) => {
                                    return <div key = { user.id } > <a onClick={this.onClick(user.name)}>{ user.name }</a> < /div>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-10" id="bodyContent">
                        <div>
                          {
                            x.map((s) => {
                                return <div key = {s}>Body Content {s}</div>
                            })
                          }
                        </div>
                    </div>
                </div>
                
                </div>
                <nav className="navbar navbar-default navbar-fixed-bottom">
                  <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 sideBarFooter">
                          Sidebar Footer
                        </div>
                        <div className="col-md-10 bodyFooter">
                          Body Footer
                        </div>
                    </div>
                  </div>
                </nav>
            </div>

            // {
            //     this.onlineUsers.map((user) => {
            //         return <div key = { user.id } > { user.name } < /div>
            //     })
            // }
        );
    }
}

export default AppComponent;