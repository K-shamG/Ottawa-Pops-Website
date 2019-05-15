import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header(props) {
    return (
        <>
            <Navbar bg="dark" sticky="top" collapseOnSelect expand="lg" className={"grey darken-1 justify-content-center"}>
                <Navbar.Brand href="index.html">
                    <img id="logo" src="img/OPO-Logo-Primary.png" height="100" title="Ottawa Pops Orchestra" alt="Ottawa Pops Orchestra"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="about-us.html">About Us</Nav.Link>
                        <NavDropdown title="Concerts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="concerts.html">2018 - 2019</NavDropdown.Item>
                            <NavDropdown.Item href="concerts-2020.html">2019 - 2020</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Orchestra" id="basic-nav-dropdown">
                            <NavDropdown.Item href="auditions.html">Auditions</NavDropdown.Item>
                            <NavDropdown.Item href="conductors.html">Conductors</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Community" id="basic-nav-dropdown">
                            <NavDropdown.Item href="studentMatinees.html">Student Matinees</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="contact.html">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;