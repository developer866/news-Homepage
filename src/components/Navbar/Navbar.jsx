import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">MySite</div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={openMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Desktop Nav Links */}
        <div className="nav-links desktop">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>

 
      {isOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={closeMenu}>×</button>
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#" onClick={closeMenu}>About</a>
          <a href="#" onClick={closeMenu}>Services</a>
          <a href="#" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
