import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Anchor } from "antd";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="phew-navbar-button">
              <button>mua hoy!</button>
            </div>
            <Link
              to="/"
              className="navbar-mobile-logo"
              onClick={closeMobileMenu}
            >
              <FaShoppingCart />
            </Link>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={logo} alt="logo" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  về phew
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/feature"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  sản phẩm
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
