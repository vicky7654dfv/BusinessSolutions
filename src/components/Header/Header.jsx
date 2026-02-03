import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/Header/logo.webp';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
    window.scrollTo(0, 0);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} fade-in`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link 
            to="/" 
            className={styles.logo} 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
          >
            <div className={styles.logoWrapper}>
              <img src={logo} alt="Business Solutions Logo" className={styles.logoImage} />
              <div className={styles.logoGlow}></div>
            </div>
            <div className={styles.companyName}>
              <span className={styles.logoText}>BUSINESS</span>
              <span className={styles.logoTextAccent}>SOLUTIONS</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav 
          ref={menuRef}
          className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                to="/Error" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/Error');
                }}
              >
                <span className={styles.navText}>About</span>
                <span className={styles.navHoverLine}></span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/Error" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/Error');
                }}
              >
                <span className={styles.navText}>Services</span>
                <span className={styles.navHoverLine}></span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/Error" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/Error');
                }}
              >
                <span className={styles.navText}>Contact</span>
                <span className={styles.navHoverLine}></span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <button 
                className={styles.signupButton}
                onClick={() => handleNavigation('/Error')}
              >
                <span className={styles.buttonText}>Get Started</span>
              </button>
            </li>
            <li className={styles.navItem}>
              <button 
                className={styles.loginButton}
                onClick={() => handleNavigation('/Error')}
              >
                <span className={styles.buttonText}>Login</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          ref={buttonRef}
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} 
          aria-label="Menu"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>
      </div>
      
      {/* Overlay for mobile */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;