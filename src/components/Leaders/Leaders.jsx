import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Leaders.module.css';

// Import leader images
import leader1 from '../../assets/Leaders/1.webp';
import leader2 from '../../assets/Leaders/2.webp';

const Leaders = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/Error');
    window.scrollTo(0, 0);
  };

  const leaders = [
    {
      id: 1,
      image: leader1,
      name: "Alexander Vane",
      role: "Chief Executive Officer",
      quote: "Innovation is not just about technology, it's about reshaping the human experience.",
      socials: ["LinkedIn", "Twitter"]
    },
    {
      id: 2,
      image: leader2,
      name: "Sarah Jenkins",
      role: "Chief Technology Officer",
      quote: "We build secure, scalable architectures that define the next generation of business.",
      socials: ["LinkedIn", "GitHub"]
    }
  ];

  return (
    <section className={styles.leadersSection} data-aos="fade-up" data-aos-duration="1000">
      <div className={styles.container}>
        
        <div className={styles.headerWrapper}>
          <div className={styles.badge}>LEADERSHIP</div>
          <h2 className={styles.sectionTitle}>
            Visionaries Behind the <span className={styles.titleHighlight}>Scale</span>
          </h2>
          <p className={styles.sectionDesc}>
            Guiding our global strategy with decades of combined experience in high-growth tech sectors.
          </p>
        </div>

        <div className={styles.leadersGrid}>
          {leaders.map((leader) => (
            <div 
              key={leader.id} 
              className={styles.leaderCard}
              onClick={handleProfileClick}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className={styles.leaderImage} 
                />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.infoPanel}>
                <div className={styles.roleWrapper}>
                  <span className={styles.roleLine}></span>
                  <span className={styles.roleText}>{leader.role}</span>
                </div>
                
                <h3 className={styles.name}>{leader.name}</h3>
                <p className={styles.quote}>"{leader.quote}"</p>
                
                <div className={styles.socialRow}>
                  {leader.socials.map((social, index) => (
                    <span key={index} className={styles.socialTag}>
                      {social}
                    </span>
                  ))}
                  <span className={styles.arrowIcon}>↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leaders;