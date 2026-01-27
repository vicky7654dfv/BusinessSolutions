import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import styles from './Banner.module.css';
import bgVid from '../../assets/Banner/bgVid.mp4';

const Banner = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const handleNavigate = () => {
    navigate('/Error');
  };

  return (
    <section 
      className={styles.heroSection} 
      data-aos="fade-in" 
      data-aos-duration="1000"
    >
      {/* Background Video */}
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          src={bgVid}
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.contentWrapper}>
          
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>💎</span>
            <span className={styles.badgeText}>Premium Business Solutions</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            Empowering Your
            <span className={styles.titleHighlight}> Enterprise</span>
            <br /> With Intelligent
            <span className={styles.titleHighlight}> Growth</span>
          </h1>
          
          <p className={styles.heroDescription}>
            We architect scalable digital ecosystems that redefine industry standards. 
            From advanced analytics to seamless cloud integration, we secure your future.
          </p>
          
          <div className={styles.ctaButtons}>
            <button 
              className={styles.primaryButton}
              onClick={handleNavigate}
            >
              <span className={styles.buttonIcon}>🚀</span>
              <span className={styles.buttonText}>Get Started</span>
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={handleNavigate}
            >
              <span className={styles.buttonIcon}>💼</span>
              <span className={styles.buttonText}>Our Portfolio</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                <CountUp end={98} suffix="%" duration={2.5} />
              </div>
              <div className={styles.statLabel}>Client Retention</div>
            </div>
            
            <div className={styles.statDivider}></div>
            
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                <CountUp end={500} suffix="+" duration={2.5} />
              </div>
              <div className={styles.statLabel}>Enterprise Projects</div>
            </div>
            
            <div className={styles.statDivider}></div>
            
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                <CountUp end={24} suffix="/7" duration={2.5} />
              </div>
              <div className={styles.statLabel}>Active Support</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;