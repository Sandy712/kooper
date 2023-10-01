"use client";

import Link from 'next/link';
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
{/* TO DO                    add search icon */}
                {/* <Form inline className="mr-auto ">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                    <Button variant="outline-success">Search</Button>
                </Form> */}
                <Nav className="ms-auto">
                    <Link href='/'>Home</Link>
                    <NavDropdown title="Startup" id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link href='/learn'>
                                Startup Pro.
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link href='/Loading'>
                                Startup Details.
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link href='/Mentor'>
                                Connect with US
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link href='/Mentor'>
                                MentorShip
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Investor" id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link href='/learn'>
                                Find Inv.
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link href='/Loading'>
                                Reatil Inv.
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link href='/login'>
                                FAQs
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Resources" id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link href='/learn'>
                                Community
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link href='/Loading'>
                                Learn/Webinar
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link href='/login'>
                                News
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Link href='/contact'>Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
