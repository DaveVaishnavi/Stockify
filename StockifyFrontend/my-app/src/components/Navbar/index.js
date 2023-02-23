import React from "react";
import "./navbarelement.css";
import { NavLinks, NavLogo, NavBtnLink, NavLinkss } from "./NavbarElements";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <>
      <div className="Nav">
        <div className="NavbarContainer">
          <NavLogo className="NavLogo" to="/">
            Stockify
          </NavLogo>
          <div className="NavMenu">
            <div className="NavItem">
              <NavLinks to="about"> About</NavLinks>
            </div>
            <div className="NavItem">
              <NavLinks to="discover">Discover</NavLinks>
            </div>
            <div className="NavItem">
              <NavLinkss to="register">Register</NavLinkss>
            </div>
          </div>
          <div className="NavBtn">
            <div className="Navbtnlink">
              <NavBtnLink to="login">Log In</NavBtnLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
