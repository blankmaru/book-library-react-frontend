import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/AppNavbar';

import Auth from './services/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined
    };
  };

  componentDidMount() {
    const user = Auth.currentUser();

    if (user) {
      this.setState({
        currentUser: user
      });
    };
  };

  logOut() {
    Auth.logOut();
  };

  render() {
    return (
      <Router>
          <AppNavbar />
          <Container>
          </Container>
      </Router>
    );
  }
}

export default App;
