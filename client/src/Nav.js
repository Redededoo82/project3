import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import logo from './public/images/logo.svg'
import {FaCompactDisc} from 'react-icons/fa'

function Navbar() {
    return (
        <div className="Nav">
          
          <Nav>
            <Link to ="/">
            <NavItem>
            <button>
            <FaCompactDisc className ="nav-icon"/>
            </button>
            </NavItem>
            </Link>
            <NavItem >
              <NavLink href="/events">Events</NavLink>
            </NavItem>  
            <NavItem>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink href="/login">Log In</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink  href="/">Home</NavLink>
            </NavItem>
            <Link to ="/">
            <NavItem>
            <button>
            <FaCompactDisc className ="nav-icon"/>
            </button>
            </NavItem>
            </Link>
          </Nav>
          
        </div>
      );
    }


export default Navbar;