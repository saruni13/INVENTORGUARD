/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home" >INVENTOR GUARD</Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
