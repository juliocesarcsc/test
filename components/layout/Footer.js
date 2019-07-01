import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {Nav, Navbar, NavItem, NavDropdown, Button} from 'react-bootstrap';
// #endregion

class Footer extends Component {
    // #region component lifecycle methods
    render() {
        return (
            <Navbar bg="light" expand="lg" id="footer">
                <Navbar.Brand href="#home" className="custom-navbar-brand"><span>10</span>TRAITS</Navbar.Brand>
                <Navbar.Text>You access and use of this website ar subject to your <a href="#">Privacy Policy</a> </Navbar.Text>
                <div className="footer-separator"></div>
                <Navbar.Text>In <a href="">10Traits</a> youhave 10 powerfull traits that are exactly what's nedded, </Navbar.Text>
                <Navbar.Text>urgently needed, in the world today. When you learn about these traits, study them and reflect on them, </Navbar.Text>
                <Navbar.Text>they will manifest as inner power courage and will to express your full potential </Navbar.Text>
                <div className="footer-separator"></div>
                <Navbar.Text>&#169; 2019 10Trails LLC, 1035 Pearl Street, Boulder, CO 80302 </Navbar.Text>
            </Navbar>
        );
    }    // #endregion
}
export default Footer;


