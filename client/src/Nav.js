import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Navbar() {
    return (
        <div className="Nav">
          
          <Nav>
            <NavItem>
              <NavLink href="/events">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/">Home</NavLink>
            </NavItem>
          </Nav>
          
        </div>
      );
    }


export default Navbar;