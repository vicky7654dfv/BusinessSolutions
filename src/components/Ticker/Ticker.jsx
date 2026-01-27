import React from 'react';
import styles from './Ticker.module.css';

const Ticker = () => {
  // Tape 1: Implemented Context (Tech/Services)
  // Moves Right to Left
  const techContext = [
    "CLOUD INFRASTRUCTURE",
    "•",
    "ARTIFICIAL INTELLIGENCE",
    "•",
    "CYBER SECURITY",
    "•",
    "DATA ANALYTICS",
    "•",
    "BLOCKCHAIN",
    "•",
    "IOT SOLUTIONS",
    "•"
  ];

  // Tape 2: Companies Integrated (Partners/Clients)
  // Moves Left to Right
  const partners = [
    "GLOBAL STRATEGIC PARTNERS",
    "✦",
    "FORTUNE 500 CLIENTS",
    "✦",
    "ENTERPRISE ALLIANCES",
    "✦",
    "INDUSTRY LEADERS",
    "✦",
    "INNOVATION NETWORKS",
    "✦"
  ];

  // Duplicate content 4 times to ensure no gaps on wide screens during the loop reset
  const contextContent = [...techContext, ...techContext, ...techContext, ...techContext];
  const partnersContent = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className={styles.tickerSection}>
      <div className={styles.crossContainer} data-aos="fade-in" data-aos-duration="1500">
        
        {/* Tape 1: Tech Context (Right to Left) - The "Bottom" Tape */}
        <div className={`${styles.tape} ${styles.tapePrimary}`}>
          <div className={styles.trackReverse}>
            <div className={styles.content}>
              {contextContent.map((item, index) => (
                <span key={`tech-${index}`} className={styles.word}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tape 2: Partners (Left to Right) - The "Top" Tape */}
        <div className={`${styles.tape} ${styles.tapeSecondary}`}>
          <div className={styles.trackForward}>
            <div className={styles.content}>
              {partnersContent.map((item, index) => (
                <span key={`part-${index}`} className={`${styles.word} ${styles.wordLight}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ticker;