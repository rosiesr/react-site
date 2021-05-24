import React from "react";
import { Navbar, NavItem, Collapse, Nav, NavbarBrand, NavLink } from 'reactstrap'
import "./mynav.scss";
import email_icon from "./email_icon.png";
import github_icon from "./github_icon.png";
import linkedin_icon from "./linkedin_icon.png";

const MyNav =  ({scrollTo}) => {
    
    return (
        <div>
        <Navbar light expand="md" className="nav">
          <NavbarBrand className="brand" href="/">★ Rosie Rothschild</NavbarBrand>
          {/* <NavbarToggler onClick={toggle} /> */}
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={() => scrollTo("about")} >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollTo("experience")}>Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollTo("projects")}>Projects</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <a href="mailto:rosie.rothschild@yale.edu">
            <img className="icon" src={email_icon} alt="email"/>
          </a>
          <a href="https://github.com/rosiesr" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={github_icon} alt="github"/>
          </a>
          <a href="https://www.linkedin.com/in/rosie-rothschild/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={linkedin_icon} alt="linkedin"/>
          </a>
        </Navbar>
      </div>
    );
}

export default MyNav;