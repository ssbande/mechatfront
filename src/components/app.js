import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
// import Header from './header';
// import Sidebar from './sidebar';
import { Grid, Row, Col } from 'react-bootstrap';

class AppComponent extends Component {

  // componentWillMount() {
  // }

  render() {
    console.log('from app component');
    return (
      <div>
        Header
        {/*<Header lock={this.lock}></Header>*/}
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              SideBar 
              {/*<Sidebar />*/}
            </Col>
            <Col xs={12} md={9}>
              Main Page 
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AppComponent;