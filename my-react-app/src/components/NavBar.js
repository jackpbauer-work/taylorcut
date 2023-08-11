import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import white_logo_transparent_background from '../images/white_logo_transparent_background.png';
import  '../css/NavBar.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 25;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    const handleResize = () => {
      setIsScreenLarge(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('scroll', handleScroll);

    handleResize();

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <header>
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={white_logo_transparent_background} alt="Logo" className="logo-image" />
            </Link>
          </div>
          {!isScreenLarge && (
            <div onClick={toggleMenu} className="hamburger">
              <div />
              <div />
              <div />
            </div>
          )}
        </div>
      </header>
      {(isOpen || isScreenLarge) && (
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/upcoming">The Trip</Link>
          </li>
          <li>
            <Link to="/pricing">What's Included</Link>
          </li>
          <li>
            <Link to="/about">Our Story</Link>
          </li>
          <li>
            <Link to="/faqs">Get Informed</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
