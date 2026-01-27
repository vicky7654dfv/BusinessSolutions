import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/Header/logo.webp';

const Footer = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  
  // Newsletter State
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email) {
      setSubscribeStatus('error');
      setErrorMessage('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setSubscribeStatus('error');
      setErrorMessage('Please enter a valid email');
      return;
    }
    
    setSubscribeStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
      
      // Reset to idle after showing success message
      setTimeout(() => {
        setSubscribeStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <footer className={styles.footer}>
      {/* Scroll To Top */}
      <button 
        className={`${styles.scrollTop} ${showScrollTop ? styles.show : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <div className={styles.container}>
        <div className={styles.mainGrid}>
          
          {/* Column 1: Brand */}
          <div className={styles.brandColumn}>
            <Link to="/" className={styles.logoLink} onClick={(e) => handleLinkClick(e, '/')}>
              <div className={styles.logoWrapper}>
                <img src={logo} alt="Logo" className={styles.logoImg} />
              </div>
              <div className={styles.brandText}>
                <span>BUSINESS</span>
                <span className={styles.accentText}>SOLUTIONS</span>
              </div>
            </Link>
            <p className={styles.description}>
              Architecting the digital future with enterprise-grade solutions. 
              We transform complex challenges into scalable growth opportunities.
            </p>
            <div className={styles.socialRow}>
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <button 
                  key={social} 
                  className={styles.socialBtn}
                  onClick={(e) => handleLinkClick(e, '/Error')}
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linkColumn}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {['About Us', 'Leadership', 'Careers', 'Newsroom', 'Partners'].map((item) => (
                <li key={item}>
                  <button onClick={(e) => handleLinkClick(e, '/Error')} className={styles.link}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={styles.linkColumn}>
            <h4 className={styles.colTitle}>Expertise</h4>
            <ul className={styles.linkList}>
              {['Cloud Infrastructure', 'AI & Machine Learning', 'Cyber Security', 'Data Analytics', 'Digital Strategy'].map((item) => (
                <li key={item}>
                  <button onClick={(e) => handleLinkClick(e, '/Error')} className={styles.link}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className={styles.contactColumn}>
            <h4 className={styles.colTitle}>Stay Connected</h4>
            <p className={styles.contactText}>
              Join our exclusive insights newsletter.
            </p>
            
            <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
              <div className={styles.inputWrapper}>
                <input 
                  type="text" 
                  placeholder="Enter business email" 
                  className={`${styles.emailInput} ${subscribeStatus === 'error' ? styles.inputError : ''}`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscribeStatus === 'error') setSubscribeStatus('idle');
                  }}
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                />
                {subscribeStatus === 'error' && (
                  <span className={styles.errorTooltip}>{errorMessage}</span>
                )}
              </div>
              <button 
                type="submit" 
                className={`${styles.submitBtn} ${subscribeStatus === 'success' ? styles.success : ''}`}
                disabled={subscribeStatus === 'loading'}
              >
                {subscribeStatus === 'loading' ? '...' : subscribeStatus === 'success' ? '✓' : '→'}
              </button>
            </form>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span> 100 Innovation Dr, Silicon Valley, CA
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>✉️</span> contact@business-solutions.com
              </div>
            </div>
          </div>

        </div>

        <div className={styles.separator}></div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; {currentYear} Business Solutions Inc. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <button onClick={(e) => handleLinkClick(e, '/Error')} className={styles.legalLink}>Privacy Policy</button>
            <button onClick={(e) => handleLinkClick(e, '/Error')} className={styles.legalLink}>Terms of Service</button>
            <button onClick={(e) => handleLinkClick(e, '/Error')} className={styles.legalLink}>Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;