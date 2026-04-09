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


const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
  {
    id: 1,
    title: 'KhetiGrow — Agri-Tech Platform',
    description:
      'Full-stack MERN platform for farmers with crop management, expert consultation, equipment rental, and role-based dashboards.',
    image: khetigrow,
    tags: ['React', 'Node.js', 'MongoDB', 'CI/CD', 'Cloud'],
    category: 'Web Development',
    link: '/projects/khetigrow',
    featured: true,
  },
  {
    id: 2,
    title: 'Web Application Fuzzer (SIH Project)',
    description:
      'Advanced cybersecurity tool integrating Nmap, Metasploit, and automated scanning to detect vulnerabilities in web applications.',
    image: fuzzer,
    tags: ['Cybersecurity', 'Python', 'Automation', 'Security'],
    category: 'Cybersecurity',
    link: '/projects/4',
    featured: true,
  },
  {
    id: 3,
    title: 'GEMINI-AI Jarvis Assistant',
    description:
      'AI-powered assistant with Gemini + OpenAI integration for automation, NLP-based commands, and smart task execution.',
    image: jarvis,
    tags: ['AI', 'NLP', 'Automation', 'APIs'],
    category: 'AI/ML',
    link: '/projects/3',
    featured: true,
  },
  {
    id: 4,
    title: 'Mars Rover (ESP32 Real-Time System)',
    description:
      'Dual ESP32-based rover with joystick control, real-time video streaming, and embedded system communication.',
    image: marsImage,
    tags: ['ESP32', 'IoT', 'Real-time', 'Embedded'],
    category: 'Embedded Systems',
    link: '/projects/2',
    featured: true,
  },
  {
    id: 5,
    title: 'Pragyan Rover Model (ISRO Simulation)',
    description:
      'Arduino-based rover simulating Chandrayaan-3 Pragyan with autonomous navigation and real-world terrain movement.',
    image: pragyanImage,
    tags: ['Arduino', 'IoT', 'Embedded Systems'],
    category: 'Embedded Systems',
    link: '/projects/1',
  },
  {
    id: 6,
    title: 'Faculty Leave Management System',
    description:
      'Role-based full-stack system with authentication, approval workflows, and dashboard analytics.',
    image: leave,
    tags: ['Node.js', 'MongoDB', 'Auth', 'Full-stack'],
    category: 'Web Development',
    link: '/projects/5',
    featured: true,
  },
  {
    id: 7,
    title: 'Wanderlust — Airbnb Clone',
    description:
      'Full-featured rental platform with secure booking, listing management, and responsive UI design.',
    image: AirbnbClone,
    tags: ['Node.js', 'MongoDB', 'EJS', 'Full-stack'],
    category: 'Web Development',
    link: '/projects/6',
  },
  {
    id: 8,
    title: 'Multipurpose Robot Car',
    description:
      'Smart robotic system supporting voice control, obstacle avoidance, human-following, and manual modes.',
    image: robotCar,
    tags: ['Arduino', 'Sensors', 'Robotics'],
    category: 'Embedded Systems',
    link: '/projects/7',
  },
  {
    id: 9,
    title: 'Advanced Alumni Portal',
    description:
      'Interactive alumni platform with geolocation mapping, advanced filters, and dynamic user connections.',
    image: alumni,
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Web Development',
    link: '/projects/8',
  }
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
