import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Projects.module.css';

// Import your 4 large project images here
import project1 from '../../assets/Projects/1.webp';
import project2 from '../../assets/projects/2.webp';
import project3 from '../../assets/projects/3.webp';
import project4 from '../../assets/projects/4.webp';

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate('/Error');
    window.scrollTo(0, 0);
  };

  const projects = [
    {
      id: 1,
      image: project1,
      category: "FinTech Architecture",
      title: "Global Banking Core Revamp",
      year: "2024"
    },
    {
      id: 2,
      image: project2,
      category: "AI Integration",
      title: "Predictive Logistics System",
      year: "2023"
    },
    {
      id: 3,
      image: project3,
      category: "Cloud Infrastructure",
      title: "Enterprise Data Migration",
      year: "2024"
    },
    {
      id: 4,
      image: project4,
      category: "Cyber Security",
      title: "Zero-Trust Network Defense",
      year: "2023"
    }
  ];

  return (
    <section className={styles.projectsSection} data-aos="fade-up" data-aos-duration="1000">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.sectionTitle}>
            Featured <span className={styles.titleHighlight}>Work</span>
          </h2>
          <button 
            className={styles.viewAllButton}
            onClick={handleProjectClick}
          >
            View All Projects <span className={styles.arrow}>→</span>
          </button>
        </div>

        {/* Big Grid */}
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              onClick={handleProjectClick}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage} 
                />
                <div className={styles.overlay}></div>
              </div>
              
              <div className={styles.contentCard}>
                <div className={styles.metaRow}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.year}>{project.year}</span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.hoverIndicator}>
                  <span className={styles.line}></span>
                  <span className={styles.exploreText}>Explore Case Study</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;