import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <Router>
        <AppNavbar />
        <Container>
        </Container>
    </Router>
  );
}

export default App;
