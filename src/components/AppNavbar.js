import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand
} from 'react-bootstrap';

const AppNavbar = props => {
  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Container>
          <NavbarBrand>Book Library</NavbarBrand>
          <Nav>
              <Nav.Link href="/category">Categories</Nav.Link>
              <Nav.Link href="/popular">Popular</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
          </Nav>
          {props.currentUser 
          ? <Nav>
                <Nav.Link href="/profile">{props.currentUser.username}</Nav.Link>
                <Nav.Link onClick={props.logOut} href="/login">LogOut</Nav.Link>
            </Nav> 
          : <Nav>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          }
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;