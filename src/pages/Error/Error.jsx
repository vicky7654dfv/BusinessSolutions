import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Error.module.css';

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page in history
  };

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.errorSection}>
      <div className={styles.container}>
        
        {/* Large 404 Text */}
        <h1 className={styles.errorCode}>
          4<span className={styles.zero}>0</span>4
        </h1>

        {/* Message */}
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorDescription}>
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <button 
            className={styles.backButton} 
            onClick={handleGoBack}
          >
            ← Go Back
          </button>
          
          <button 
            className={styles.homeButton} 
            onClick={handleGoHome}
          >
            Return Home
          </button>
        </div>

      </div>
      
      {/* Background Decor (Optional glow) */}
      <div className={styles.glowEffect}></div>
    </section>
  );
};

export default Error;