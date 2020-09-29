import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/AppNavbar';

import Register from './components/auth/register';
import Login from './components/auth/login';
import Profile from './components/auth/profile';
import Home from './components/HomePage';

import Category from './components/Categories/Category';
import Romantic from './components/Categories/Romantic';
import Science from './components/Categories/Science';
import Classics from './components/Categories/Classics';
import Horror from './components/Categories/Horror';
import Detective from './components/Categories/Detective';
import Psychology from './components/Categories/Psychology';
import Drama from './components/Categories/Drama';
import Fantasy from './components/Categories/Fantasy';

import Books from './components/Books/Books';

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
          <AppNavbar state={this.state} logOut={this.logOut} />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/books" component={Books} />
              <Route exact path="/category" component={Category} />
              <Route exact path="/category/romantic" component={Romantic} />
              <Route exact path="/category/science" component={Science} />
              <Route exact path="/category/classics" component={Classics} />
              <Route exact path="/category/horror" component={Horror} />
              <Route exact path="/category/detective" component={Detective} />
              <Route exact path="/category/psychology" component={Psychology} />
              <Route exact path="/category/drama" component={Drama} />
              <Route exact path="/category/fantasy" component={Fantasy} />
            </Switch>
          </Container>
      </Router>
    );
  }
}

export default App;
