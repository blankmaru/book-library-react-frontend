import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand
} from 'react-bootstrap';

import {
  FaSignOutAlt
} from 'react-icons/fa';

const AppNavbar = props => {
  return (
    <>
      <Navbar style={{background: '#000'}} className="justify-content-between"  variant="dark">
        <Container>
          <NavbarBrand>Book Library</NavbarBrand>
          <Nav className="navbar-nav mr-auto">
              <Nav.Link href="/category">Categories</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
          </Nav>
          {props.state.currentUser 
          ? ( <Nav>
                <Nav.Link href="/profile">{props.state.currentUser.username}</Nav.Link>
                <Nav.Link onClick={props.logOut} href="/login"><FaSignOutAlt /></Nav.Link>
              </Nav> )
          : ( <Nav>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav> )
          }
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;