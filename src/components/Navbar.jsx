import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiXCircle } from "react-icons/fi";


import "../styles/navbar.scss"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main">
      <div className="logo-container">
        <p className="logo">
          <span>A</span>shutosh
        </p>
      </div>
      <div className={`nav-tab-container ${menuOpen ? "open" : ""}`}>
        <div className="nav-tabs">
          <HashLink className="nav-tab" to={"/#home"} onClick={toggleMenu}>
            Home
          </HashLink>
          <HashLink className="nav-tab" to={"/#skills"} onClick={toggleMenu}>
            Skills
          </HashLink>
          <HashLink className="nav-tab" to={"/#projects"} onClick={toggleMenu}>
            Projects
          </HashLink>
          <HashLink className="nav-tab" to={"/#certificate"} onClick={toggleMenu}>
            Certificate
          </HashLink>
          <HashLink className="nav-tab" to={"/#contact"} onClick={toggleMenu}>
            Contact
          </HashLink>
        </div>
        {menuOpen ? (
          <div className="closeIt" onClick={toggleMenu}>
            <FiXCircle className="close" />
          </div>
        ) : (
          <div className="openIt" onClick={toggleMenu}>
            <FiMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
