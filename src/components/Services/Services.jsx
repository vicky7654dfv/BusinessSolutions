import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const servicesData = [
    {
      id: 1,
      icon: "🤖",
      title: "AI Solutions",
      description: "Deploy intelligent algorithms that automate workflows and predict market trends with precision."
    },
    {
      id: 2,
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud architectures designed to support high-traffic enterprise applications."
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Cyber Security",
      description: "Bank-grade security protocols to protect your digital assets and ensure compliance."
    },
    {
      id: 4,
      icon: "📊",
      title: "Data Analytics",
      description: "Turn raw data into actionable insights with our advanced visualization and reporting tools."
    },
    {
      id: 5,
      icon: "🚀",
      title: "Digital Strategy",
      description: "Comprehensive roadmaps to guide your business through successful digital transformation."
    },
    {
      id: 6,
      icon: "⚙️",
      title: "Custom Development",
      description: "Tailored software solutions built with modern stacks to solve your unique business challenges."
    }
  ];

  return (
    <section className={styles.servicesSection} data-aos="fade-up" data-aos-duration="1000">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerContainer}>
          <div className={styles.subBadge}>
            <span className={styles.subBadgeText}>WHAT WE DO</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Building the Future of <br />
            <span className={styles.titleHighlight}>Digital Business</span>
          </h2>
          <p className={styles.sectionDescription}>
            We combine deep industry knowledge with cutting-edge technology to deliver 
            solutions that drive tangible growth and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.gridContainer}>
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className={styles.card}
              onClick={() => handleServiceClick('/Error')}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <div className={styles.cardArrow}>→</div>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.cardOverlay}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <p className={styles.ctaText}>Need a custom solution?</p>
          <Link 
            to="/Error" 
            className={styles.linkButton}
            onClick={(e) => {
              e.preventDefault();
              handleServiceClick('/Error');
            }}
          >
            Let's Talk
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;