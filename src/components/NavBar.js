import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faQuestionCircle,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="fixed-top nav-bar">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="MYSITE" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#profile">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Kishore</span>
                    </Nav.Link>
                    <Nav.Link href="#notification">
                        <FontAwesomeIcon icon={faBell} />
                    </Nav.Link>
                    <Nav.Link href="#question">
                        <FontAwesomeIcon icon={faQuestionCircle} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
