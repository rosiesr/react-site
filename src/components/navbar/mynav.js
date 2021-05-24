import React, { useState, useEffect } from "react";
import { Navbar, NavItem, Collapse, Nav, NavbarBrand, NavLink } from 'reactstrap'
import "./mynav.scss";
import email_icon from "./email_icon.png";
import github_icon from "./github_icon.png";
import linkedin_icon from "./linkedin_icon.png";

const MyNav =  ({scrollTo, landingPos}) => {
    
  const [fixed, setFixed] = useState(false);
  
  useEffect(() => {
    return () => { 
      if(landingPos < 0){
        setFixed(true);
      }
      else{
        setFixed(false);
      }
    }
  })
  
  return (
        <div className={`${fixed ? 'sticky-top' : ''}`}>
        <Navbar light expand="md" className="nav">
          <NavbarBrand className="brand"><NavLink onClick={() => scrollTo("landing")} style={{color:'#383D3B'}} > ★Rosie Rothschild </NavLink></NavbarBrand>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={() => scrollTo("about")} >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollTo("experience", -50)}>Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollTo("projects", -50)}>Projects</NavLink>
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