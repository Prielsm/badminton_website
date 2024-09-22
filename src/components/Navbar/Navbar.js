import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  const [click, setClick] = useState(false)
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/a-propos' className='nav-links' onClick={closeMobileMenu}>
                A propos
              </Link>
            </li>
            <li className="dropdown nav-item">
              <button className='nav-links' onClick={handleOpen}>Horaires et tarifs <i className="fa-solid fa-caret-down"></i></button>
              {open && (
                <ul className="openedMenu">
                  <li className="openedMenu-item">
                    <Link to='/horaires' className='openedMenu-link' onClick={closeMobileMenu}>
                      Horaires
                    </Link>
                  </li>
                  <li className="openedMenu-item">
                    <Link to='/tarifs' className='openedMenu-link' onClick={closeMobileMenu}>
                      Tarifs
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className='nav-item'>
              <Link to='/evenements' className='nav-links' onClick={closeMobileMenu}>
                Événements
              </Link>
            </li>
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
  )
}

export default Navbar
