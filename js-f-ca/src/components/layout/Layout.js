import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"; //Gotten from Bootstrap
import Nav from "react-bootstrap/Nav";  //Gotten from Bootstrap
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Game from "../game/Game";

function Layout() {
    return (
        <Router>

            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand>Games Website</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/game/:id" component={Game} />
            </Switch>
        </Router>
    );
}



export default Layout;
