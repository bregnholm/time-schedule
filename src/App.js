import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Schedule from "./Schedule";
import './App.css';


export default function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand href="/">Peters Stuff</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/eggs">Eggs</Nav.Link>
                    <Nav.Link href="/walks">Walks</Nav.Link>
                    <Nav.Link href="/time-schedule">Time Schedule</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Schedule />
        <footer></footer>
      </div>
    </Router>
  );
}
