import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import useWindowSize from "../hooks/useWindowSize";

function Navbar() {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const size = useWindowSize();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <li className="nav-item">Accueil</li>
            </Link>
            <Link
              to="/a-propos"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <li className="nav-item">A propos</li>
            </Link>
            <div className="nav-dropdown">
              {size.width >= 960 ? (
                <>
                  <button className="nav-links" onClick={handleOpen}>
                    <li className="dropdown nav-item">
                      <div>Horaires et tarifs</div>
                      <i className="fa-solid fa-caret-down"></i>
                    </li>
                  </button>
                  {open && (
                    <ul className="openedMenu">
                      <li className="nav-item">
                        <Link
                          to="/horaires"
                          className="openedMenu-link"
                          onClick={() => {setOpen(false); closeMobileMenu();}}
                        >
                          Horaires
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/tarifs"
                          className="openedMenu-link"
                          onClick={() => {setOpen(false); closeMobileMenu();}}
                        >
                          Tarifs
                        </Link>
                      </li>
                    </ul>
                  )}
                </>
              ) : (
                <>
                  <Link
                    to="/horaires"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <li className="nav-item">Horaires</li>
                  </Link>
                  <Link
                    to="/tarifs"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <li className="nav-item">Tarifs</li>
                  </Link>
                </>
              )}
            </div>
            <Link
              to="/evenements"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <li className="nav-item">Événements</li>
            </Link>
            <a href="#" className="cta">
              <span>S'inscrire au club</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
