import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../components/ProjectCard';
import '../assets/styles/projects.css';
// import MouseEffect from '../components/MouseEffect';

// Importing Imges
import pragyanImage from '/images/KnowYourPragyan.jpeg';
import marsImage from '/images/Mars.jpg';
import leave from '/images/leave.png';
import jarvis from '/images/jarvis.jpg';
import fuzzer from '/images/Fuzzer.webp';
import alumni from '/images/alumni.jpeg';
import AirbnbClone from '/images/AirbnbClone.webp';
import robotCar from '/images/robotCar.jpg';
import khetigrow from '/images/khetigrow.png';
import riwazImage from '/images/riwaz_events.png';
import quantevoImage from '/images/quantevo.png';
import codingImage from '/images/coding.webp';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      id: 10,
      title: 'Riwaz Events — Event Marketplace Platform',
      description: 'Full-stack event marketplace platform to discover and book venues, catering, photography, and event services with Razorpay advance payments.',
      image: riwazImage,
      tags: ['Next.js', 'PostgreSQL', 'Express.js', 'Razorpay', 'Full-Stack'],
      category: 'Web Development',
      link: '/projects/10',
      featured: true,
    },
    {
      id: 9,
      title: 'KhetiGrow — Agri-Tech Platform',
      description: 'Full-stack agricultural platform for crop management, expert consultation, and equipment rental with role-based access control and cloud CI/CD.',
      image: khetigrow,
      tags: ['React', 'Node.js', 'MongoDB', 'CI/CD', 'Cloud'],
      category: 'Web Development',
      link: '/projects/9',
      featured: true,
    },
    {
      id: 11,
      title: 'Quantevo — Smart Test Portal',
      description: 'Secure online testing platform featuring JWT authentication, real-time timer, auto-evaluation, and anti-cheating mechanisms.',
      image: quantevoImage,
      tags: ['MERN Stack', 'JWT', 'Security', 'Anti-Cheating', 'Real-time'],
      category: 'Web Development',
      link: '/projects/11',
      featured: true,
    },
    {
      id: 12,
      title: 'Heart Disease Detection System (ML)',
      description: 'End-to-end predictive healthcare ML system built at NIAMT Ranchi, comparing algorithms with Scikit-learn and XGBoost for optimal precision & recall.',
      image: codingImage,
      tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Machine Learning'],
      category: 'AI/ML',
      link: '/projects/12',
      featured: true,
    },
    {
      id: 3,
      title: 'GEMINI-AI Jarvis',
      description: 'AI-powered personal assistant with Google Gemini and OpenAI integration for intelligent system commands and automation.',
      image: jarvis,
      tags: ['AI', 'NLP', 'Gemini API', 'OpenAI'],
      category: 'AI/ML',
      link: '/projects/3',
      featured: true,
    },
    {
      id: 8,
      title: 'Advanced Alumni Portal (SIH Finalist)',
      description: 'Interactive alumni directory with geolocation mapping and dynamic filters. National Finalist in Smart India Hackathon 2024.',
      image: alumni,
      tags: ['React', 'Node.js', 'MongoDB', 'SIH 2024'],
      category: 'Web Development',
      link: '/projects/8',
      featured: true,
    },
    {
      id: 1,
      title: 'Pragyan Rover Model (Chandrayaan 3 Simulation)',
      description: 'Remote-controlled rover simulating ISRO’s Pragyan rover operations with autonomous navigation. Recognized by ISRO scientists.',
      image: pragyanImage,
      tags: ['Embedded Systems', 'IoT', 'Arduino'],
      category: 'Embedded Systems',
      link: '/projects/1',
    },
    {
      id: 2,
      title: 'Mars Rover Model (Patna Planetarium Exhibit)',
      description: 'Joystick-controlled rover using dual ESP32 with live video feed and display support, publicly showcased at Patna Planetarium.',
      image: marsImage,
      tags: ['ESP32', 'IoT', 'Real-time'],
      category: 'Embedded Systems',
      link: '/projects/2',
      featured: true,
    },
    {
      id: 4,
      title: 'Web Application Fuzzer',
      description: 'Security tool to identify vulnerabilities such as SQLi, XSS, and broken access controls in web applications.',
      image: fuzzer,
      tags: ['Cybersecurity', 'Python', 'Security'],
      category: 'Cybersecurity',
      link: '/projects/4',
    },
    {
      id: 6,
      title: 'Wanderlust - Airbnb Clone',
      description: 'Online rental marketplace with secure booking and property listing features.',
      image: AirbnbClone,
      tags: ['Node.Js', 'MongoDB', 'Full-stack'],
      category: 'Web Development',
      link: '/projects/6',
    },
    {
      id: 7,
      title: 'Multipurpose Robot Car',
      description: 'Robot car with voice/manual/obstacle/human-following modes and real-world embedded applications.',
      image: robotCar,
      tags: ['Arduino', 'Sensors', 'Robotics'],
      category: 'Embedded Systems',
      link: '/projects/7',
    },
  ];

  const filters = ['All', 'Web Development', 'AI/ML', 'Embedded Systems', 'Cybersecurity'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="projects-page" ref={ref}>
{/*       <MouseEffect /> */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="projects-hero"
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My <span>Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Explore my work and see how I solve problems with technology
          </motion.p>
        </div>
      </motion.section>

      <section className="projects-section">
        <div className="container">
          <motion.div 
            className="projects-filter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? 'active' : ''}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.span 
                    className="underline"
                    layoutId="filterUnderline"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
