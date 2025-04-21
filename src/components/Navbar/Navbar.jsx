import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"><img src="/images/logo.svg" alt="" /></div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={openMenu}>
        <img src="/images/icon-menu.svg" alt="hello" />
        </button>

        {/* Desktop Nav Links */}
        <div className="nav-links desktop">
          <a href="#">Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Contact</a>
        </div>
      </div>

 
      {isOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={closeMenu}> <img src="/images/icon-menu-close.svg" alt="hello" /></button>
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#" onClick={closeMenu}>New</a>
          <a href="#" onClick={closeMenu}>Popular</a>
          <a href="#" onClick={closeMenu}>Trending</a>
          <a href="#" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
