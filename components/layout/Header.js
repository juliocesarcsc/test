import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {Nav, Navbar, NavItem, NavDropdown, Button} from 'react-bootstrap';
// #endregion

class Header extends Component {
    // #region component lifecycle methods
    render() {
        return (
            <Navbar bg="light" expand="lg" className="custom-navbar">
                <Navbar.Brand href="/" className="custom-navbar-brand"><span>10</span>TRAITS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#about" className="custom-navbar-link">ABOUT US</Nav.Link>
                        <Nav.Link href="#advisers" className="custom-navbar-link">OUR ADVISERS</Nav.Link>
                        <Nav.Link href="#how-works" className="custom-navbar-link">HOW 10TRAITS WORKS</Nav.Link>
                        <Nav.Link href="#link"
                                  className="custom-navbar-link custom-navbar-link-lg">303-443-3697</Nav.Link>
                        <Button variant="outline-info" size="sm" className="custom-navbar-button">
                            Sing in | <span className="underline-text">Register</span>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }    // #endregion

}
export default Header;

