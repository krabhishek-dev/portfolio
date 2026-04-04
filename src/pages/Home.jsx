import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaTrophy,
  FaCertificate,
  FaLaptopCode,
  FaShieldAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
  FaChevronDown,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaAws,
  FaPython,
  FaLinux,
  FaGamepad,
  FaMusic,
  FaBook,
  FaCamera,
  FaPlane,
  FaBrain,
  FaLightbulb,
  FaGlobeAmericas,
  FaRobot,
  FaRocket,
  FaTools,
  FaChess,
  FaNetworkWired,
  FaMicrochip
} from "react-icons/fa";
import { GiPingPongBat } from "react-icons/gi";
import {
  SiMongodb,
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiDjango,
  SiFlask,
  SiFirebase,
  SiArduino,
  SiRaspberrypi,
  SiMetasploit,
} from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FiMail } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import MouseEffect from "../components/MouseEffect";
import AchievementsCarousel from "../components/AchievementsCarousel";

// Particle background component
const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 10,
      color: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
      shape: Math.random() > 0.5 ? "circle" : "square",
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`particle ${particle.shape}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [particle.y, particle.y + 100],
            x: [particle.x, particle.x + (Math.random() * 30 - 15)],
            rotate: particle.shape === "square" ? [0, 180] : 0,
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            boxShadow: `0 0 20px 2px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [expandedAchievement, setExpandedAchievement] = useState(null);
  const controls = useAnimation();

  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [educationRef, educationInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [experienceRef, experienceInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [achievementsRef, achievementsInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [certificationsRef, certificationsInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [ref, inView] = useInView({ threshold: 0.1 });

  const skills = [
    { name: "MERN Stack", level: 80, icon: <FaLaptopCode />, color: "#6c63ff" },
    { name: "JavaScript", level: 80, icon: <FaCode />, color: "#f0db4f" },
    { name: "Python", level: 75, icon: <FaCode />, color: "#3776ab" },
    // { name: "AI/ML", level: 80, icon: <FaShieldAlt />, color: "#ff6b6b" },
    { name: "Embedded Systems", level: 60, icon: <FaCode />, color: "#45aaf2" },
    {
      name: "Cybersecurity",
      level: 50,
      icon: <FaShieldAlt />,
      color: "#4ecdc4",
    },
  ];

  const tools = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    // { name: "TensorFlow", icon: <SiTensorflow /> },
    // { name: "PyTorch", icon: <SiPytorch /> },
    // { name: "Django", icon: <SiDjango /> },
    // { name: "Flask", icon: <SiFlask /> },
    // { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGit /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Arduino", icon: <SiArduino /> },
    { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
    // { name: "Kali Linux", icon: <SiKaliLinux /> },
    { name: "Metasploit", icon: <SiMetasploit /> },
  ];

  const achievements = [
    {
      title: "SIH Winner 2025 (College Level)",
      description:
        "Winner of Smart India Hackathon (Internal Round) for building a high-impact scalable solution.",
      details:
        "Led the development of an advanced tech solution shortlisted as the top project in the internal SIH 2025 evaluation. Designed a scalable architecture with strong real-world applicability, focusing on performance, security, and innovation. Demonstrated leadership, problem-solving, and rapid prototyping under strict deadlines.",
      date: "2025",
    },
    {
      title: "TechFest Web Wizard Winner 2025",
      description:
        "1st place in Web Development competition for building a production-ready full-stack application.",
      details:
        "Developed a high-performance full-stack web application using MERN stack with optimized backend architecture, responsive UI, and real-time features. Stood out among top participants for clean code practices, UI/UX excellence, and scalability-focused implementation.",
      date: "2025",
    },
    {
      title: "SIH Finalist 2024",
      description:
        "National-level finalist for building an advanced cybersecurity solution.",
      details:
        "Built a secure web application fuzzing platform integrating tools like Nmap, Metasploit, and Wireshark for vulnerability detection. Implemented automation, encryption techniques, and modular architecture. Selected among top teams from 500+ national entries.",
      date: "November 2024",
    },
    {
      title: "Hackathon Winner (Cybersecurity)",
      description:
        "1st place in college-level hackathon for real-time threat detection system.",
      details:
        "Led a team of 6 to develop a cybersecurity dashboard integrating network scanning and attack simulation tools. Achieved ~90% detection efficiency using intelligent analysis and real-time monitoring techniques.",
      date: "September 2024",
    },
    {
      title: "1st Place – Python Coding Competition",
      description:
        "Top performer in competitive programming contest.",
      details:
        "Outperformed 200+ participants by solving complex DSA and algorithmic problems in a 2-hour coding marathon. Demonstrated strong problem-solving, optimization, and time management skills.",
      date: "October 2024",
    },
    {
      title: "Web Development Champion",
      description:
        "Awarded for building an innovative IoT-integrated full-stack system.",
      details:
        "Developed an IoT-based smart classroom system using React, Node.js, and MongoDB. Implemented real-time monitoring, automated attendance via facial recognition, and data visualization dashboards.",
      date: "May 2024",
    },
    {
      title: "ISRO Recognition – Pragyan Rover Model",
      description:
        "Recognized by ISRO scientists for engineering and innovation excellence.",
      details:
        "Designed and built a functional model of ISRO's Pragyan Rover using Arduino with autonomous navigation. Appreciated by ISRO experts for technical precision and real-world simulation.",
      date: "August 2024",
    },
    {
      title: "Moon Rover Project Showcase (Patna Planetarium)",
      description:
        "Selected for public exhibition for advanced IoT-based rover system.",
      details:
        "Engineered a dual-ESP32 powered rover with joystick control, live video streaming, and smart navigation features. Showcased at Patna Planetarium as an innovative embedded systems project.",
      date: "February 2024",
    },
    {
      title: "Coding Club Lead & Technical Contributor",
      description:
        "Leading development initiatives and mentoring peers in full-stack technologies.",
      details:
        "Actively contributing to real-world projects, organizing coding events, and mentoring students in MERN stack, system design, and competitive programming.",
      date: "2024 – Present",
    },
  ];

  const certifications = [
    {
      name: "Certified Python Developer",
      issuer: "Python Institute",
      date: "2024",
      // credential: "PCAP-31-03",
      link: "#",
    },
    // {
    //   name: "Machine Learning with Python",
    //   issuer: "Coursera",
    //   date: "2023",
    //   credential: "C4MLP-2023",
    //   link: "#",
    // },
    // {
    //   name: "AI & Chatbot Development",
    //   issuer: "Udemy",
    //   date: "2022",
    //   credential: "UC-AI2022",
    //   link: "#",
    // },
    {
      name: "Mern Stack Developer",
      issuer: "apna college",
      date: "2024",
      // credential: "FCC-SEC2022",
      link: "#",
    },
  ];

  const hobbies = [
    {
      name: "Table Tennis",
      icon: <GiPingPongBat />,
      description:
        "I enjoy playing table tennis, improving my skills and competing.",
      color: "#FF6B6B",
    },
    {
      name: "Chess",
      icon: <FaChess />,
      description:
        "I am a chess player, strategizing and competing in various formats.",
      color: "#6c63ff",
    },
    {
      name: "Travel",
      icon: <FaPlane />,
      description: "Exploring new cultures and cuisines around the world.",
      color: "#FFA500",
    },
    {
      name: "Reading",
      icon: <FaBook />,
      description: "Reading books, especially sci-fi and technical topics.",
      color: "#4B8BBE",
    },
    {
      name: "Coding",
      icon: <FaLaptopCode />,
      description: "Writing code and building software applications.",
      color: "#00BFA6",
    },
  ];

  // Interests data
  const interests = [
    {
      name: "Software Development",
      icon: <FaCode />,
      description: "Building applications and writing code to solve problems.",
      color: "#4B8BBE",
    },
    {
      name: "Cybersecurity",
      icon: <FaShieldAlt />,
      description: "Protecting systems and networks from digital threats.",
      color: "#00BFA6",
    },
    {
      name: "IoT",
      icon: <FaNetworkWired />,
      description: "The interconnected world of devices and data exchange.",
      color: "#6c63ff",
    },
    {
      name: "Robotics",
      icon: <FaRobot />,
      description: "Human-robot interaction and automation technologies.",
      color: "#FFA500",
    },
  ];

  // Particles.js configuration
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const toggleAchievement = (index) => {
    setExpandedAchievement(expandedAchievement === index ? null : index);
  };

  // Floating social icons animation
  const socialIcons = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/krabhishek-dev",
      color: "#333",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/abhishek-kumar977/",
      color: "#0077b5",
    },
    // { icon: <SiLeetcode />, name: "LeetCode", link: "#", color: "#f89f1b" },
    {
      icon: <SiHackerrank />,
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/abhibth977",
      color: "#2ec866",
    },
    { icon: <FaTwitter />, name: "Twitter", link: "https://x.com/itsabhishek_01", color: "#1da1f2" },
    {
      icon: <FiMail />,
      name: "Email",
      link: `mailto:abhishek23iot17.gecv@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Abhishek,`,
      color: "#ea4335",
    },
  ];

  const achievementsGallery = [
    {
      src: "/portfolio/images/sih-winner.jpg",
      alt: "Hackathon Winner",
      caption: {
        title: "1st Place - College-level hackathon.",
        description: "Led a team of 6 to develop a real-time cybersecurity threat detection dashboard using Python and Cybersecurity. Implemented many tools like nmap, whireshark, metasploit with 90% accuracy."
      }
    },
    {
      src: "/portfolio/images/sih-gp.jpg",
      alt: "SIH Finalist 2024",
      caption: {
        title: "Recognized for innovative tech solution using Python and Cybersecurity.",
        description: "Developed a secure web application fuzzer tool platform combining multiples tools like nmap, metasploit, whireshar which can help to dectect vulnurabilities using advanced features and encryption techniques. The solution was selected among top 10 out of 500+ entries in Smart India Hackathon 2024."
      }
    },
    // {
    //   src: "/images/achievement3.jpg",
    //   alt: "1st Place Python Competition",
    //   caption: {
    //     title: "Awarded for solving complex programming challenges.",
    //     description: "Competed against 200+ participants in a 2-hour coding marathon, solving 15 algorithmic problems with optimal solutions. Demonstrated expertise in data structures and problem-solving under time constraints."
    //   }
    // },
    {
      src: "/portfolio/images/web.jpg",
      alt: "Web Development Winner",
      caption: {
        title: "1st prize for innovative web application.",
        description: "Built an tourism management system with HTML, CSS, JavaScript, Bootstrap."
      }
    },
    // {
    //   src: "/images/achievement3.jpg",
    //   alt: "ISRO Recognition",
    //   caption: {
    //     title: "Appreciation certificate for Pragyan Rover Model.",
    //     description: "Designed and built a functional scale model of ISRO's Pragyan rover with Arduino-based autonomous navigation system. Recognized by ISRO scientists for technical excellence and innovation in embedded systems."
    //   }
    // },
    {
      src: "/portfolio/images/mars-gp.jpg",
      alt: "Mars Rover Project Showcase",
      caption: {
        title: "Interactive ESP32-based mars rover model with advanced features.",
        description: "Engineered a dual-ESP32 controlled moon rover with joystick-based remote navigation, live video streaming via CP-Plus camera, and multiple smart features. The model is currently on public display at Patna Planetarium, showcasing innovation in embedded systems and IoT integration."
      }
    },
    {
      src: "/portfolio/images/tt-single.jpg",
      alt: "Intra College Table Tennis Winner",
      caption: {
        title: "1st Place - Intra College Table Tennis Championship.",
        description: "Clinched the top position among 30+ participants demonstrating sharp reflexes, focus, and strategic gameplay."
      }
    },
    // {
    //   src: "/portfolio/images/tt-inter-college.jpg",
    //   alt: "Inter College Table Tennis Winner",
    //   caption: {
    //     title: "1st Place - Inter College Table Tennis Tournament.",
    //     description: "Represented the college and secured first position, competing against top players from 10+ colleges."
    //   }
    // },
    {
      src: "/portfolio/images/tt-com.jpg",
      alt: "Commissionary Level Table Tennis Winner",
      caption: {
        title: "1st Place - Commissionary Level Table Tennis Competition.",
        description: "Achieved victory at the commissionary level by showcasing exceptional consistency and advanced techniques."
      }
    },
    {
      src: "/portfolio/images/db.JPG",
      alt: "Dance Battle Winner",
      caption: {
        title: "Winner - Inter College Dance Battle.",
        description: "Stunned the crowd and judges with a powerful and creative dance performance, earning the top spot in a high-energy competition."
      }
    },
    {
      src: "/portfolio/images/cc-session.jpg",
      alt: "Coding Club Session",
    },
    {
      src: "/portfolio/images/cc-session2.jpg",
      alt: "Coding Club Session",
    },
    {
      src: "/portfolio/images/sih-certificate.jpg",
      alt: "SIH Internal Certificate",
    },
    {
      src: "/portfolio/images/pragyan2.jpg",
      alt: "Pragyan Rover Model",
    },
    {
      src: "/portfolio/images/pragyan3.jpg",
      alt: "Pragyan Rover Model",
    },
    {
      src: "/portfolio/images/tt-prize.jpg",
      alt: "Table Tennis Prize",
    },
  ];

  return (
    <div className="home-page">
      {/*       <MouseEffect /> */}
      {/* Floating Social Icons */}
      <motion.div
        className="social-icons-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {socialIcons.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ backgroundColor: social.color }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + index * 0.1 }}
          >
            {social.icon}
            <span className="tooltip">{social.name}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <ParticlesBackground />
        <div className="container">
          {/* <MouseEffect /> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Hi, I'm
                </motion.span>{" "}
                <motion.span
                  className="name"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Abhishek
                </motion.span>
              </h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <TypewriterEffect
                  text={[
                    "Full-Stack MERN Developer",
                    "Building Scalable & Secure Systems",
                    "Cybersecurity & System Design Enthusiast",
                    "IoT & Embedded Systems Innovator",
                    "Crafting High-Performance Web Experiences",
                  ]}
                  delay={100}
                />
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              I design and develop{" "}
              <span className="highlight">production-ready applications</span> that solve
              real-world problems with performance, scalability, and security in mind.
              From <span className="highlight">full-stack web systems</span> to{" "}
              <span className="highlight">cybersecurity solutions</span> and{" "}
              <span className="highlight">IoT innovations</span>, I turn ideas into
              impactful digital products.
            </motion.p>

            <div className="hero-buttons">
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="/portfolio/images/my-resume.pdf"
                download
                className="btn btn-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <FaDownload /> Download CV
              </motion.a>
              <Link to="/contact">
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <FaBriefcase /> Hire me
                </motion.a>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{
              opacity: heroInView ? 1 : 0,
              x: heroInView ? 0 : 50,
              rotate: heroInView ? 0 : 5,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="image-wrapper">
              <div className="glow-effect"></div>
              <img src="/portfolio/images/main_image.jpeg" alt="Abhishek Kumar" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ y: 5 }}
        >
          <span>Scroll Down</span>
          <motion.div
            className="arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronDown />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about" id="about" ref={aboutRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>
              About <span>Me</span>
            </h2>
            <p>Get to know me better</p>
          </motion.div>

          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -3 }}
              animate={{
                opacity: aboutInView ? 1 : 0,
                x: aboutInView ? 0 : -50,
                rotate: aboutInView ? 0 : -3,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-image"
              whileHover={{ y: -10 }}
            >
              <div className="image-border"></div>
              <img src="/portfolio/images/second_image.jpeg" alt="About Me" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: aboutInView ? 1 : 0,
                x: aboutInView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-text"
            >
              <h3>Who am I?</h3>
              <p>
                I’m a{" "}
                <span className="highlight">full-stack developer and problem solver</span>{" "}
                who loves building systems that actually make an impact. From developing{" "}
                <span className="highlight">scalable web applications</span> to experimenting
                with <span className="highlight">cybersecurity and IoT</span>, I focus on
                turning ideas into real, working solutions — not just projects.
              </p>

              <p>
                My core expertise lies in the{" "}
                <span className="highlight">MERN stack</span>, where I build
                production-ready applications with clean architecture, performance
                optimization, and strong security practices. Beyond web development, I
                actively explore <span className="highlight">automation, system design</span>,
                and <span className="highlight">intelligent solutions</span> using Python and
                modern technologies.
              </p>

              <p>
                What sets me apart is my approach — I don’t just write code, I{" "}
                <span className="highlight">analyze problems deeply</span>, design efficient
                systems, and continuously push myself to build better, faster, and smarter.
                Whether it's a hackathon, a real-world project, or a new idea, I aim to create
                solutions that are both technically strong and practically useful.
              </p>

              <div className="about-details">
                <div className="detail-item">
                  <span>Abhishek Kumar</span>
                </div>
                <div className="detail-item">
                  <span>From:</span>
                  <p>Hajipur, India</p>
                </div>
              </div>

              <motion.div
                className="fun-fact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="fact-icon">💡</div>
                <p>
                  <strong>Fun Fact:</strong> I enjoy breaking things just to understand how they
                  work — whether it's reverse engineering software or building IoT systems
                  from scratch.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education" ref={educationRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: educationInView ? 1 : 0,
              y: educationInView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>
              My <span>Education</span>
            </h2>
            <p>My academic journey</p>
          </motion.div>

          <div className="education-timeline">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: educationInView ? 1 : 0,
                y: educationInView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="timeline-item"
              whileHover={{ y: -5 }}
            >
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">

                <span className="date">2023 - Present</span>

                <h3>Bachelor of Technology in Computer Science (IoT)</h3>
                <h4>Government Engineering College, Vaishali</h4>

                <p>
                  Pursuing my degree with a strong focus on{" "}
                  <span className="highlight">software engineering, system design, and real-world development</span>.
                  Alongside core subjects like{" "}
                  <span className="highlight">Data Structures & Algorithms</span>, I actively
                  build scalable applications using modern technologies and industry practices.
                </p>

                <p>
                  My academic journey is not limited to theory — I consistently apply my learning
                  through <span className="highlight">projects, hackathons, and technical leadership</span>.
                  This hands-on approach has helped me develop strong problem-solving skills and
                  a deep understanding of how real-world systems are designed and optimized.
                </p>

                <div className="timeline-badges">
                  <span className="badge">CGPA: 8.21</span>
                  <span className="badge">SIH 2025 Winner (College Level)</span>
                  <span className="badge">TechFest Web Wizard Winner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills" ref={ref}>
        {/* Animated background particles */}
        <div className="particles-container">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#6c63ff",
                },
                shape: {
                  type: "circle",
                },
                opacity: {
                  value: 0.5,
                  random: true,
                },
                size: {
                  value: 3,
                  random: true,
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#6c63ff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  push: {
                    particles_nb: 4,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </div>

        <div className="container position-relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>
              My <span>Skills & Interests</span>
            </h2>
            <p>What drives me beyond coding</p>
          </motion.div>

          {/* Enhanced Tabs Navigation */}
          <motion.div
            className="skills-tabs"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => setActiveTab("skills")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode /> Technical Skills
            </button>
            <button
              className={activeTab === "tools" ? "active" : ""}
              onClick={() => setActiveTab("tools")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTools /> Tools & Tech
            </button>
            <button
              className={activeTab === "interests" ? "active" : ""}
              onClick={() => setActiveTab("interests")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLightbulb /> My Interests
            </button>
            <button
              className={activeTab === "hobbies" ? "active" : ""}
              onClick={() => setActiveTab("hobbies")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGamepad /> My Hobbies
            </button>
          </motion.div>

          {/* Skills Tab Content */}
          {activeTab === "skills" && (
            <div className="skills-container">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="skill-item"
                >
                  <div className="skill-header">
                    <motion.div
                      className="skill-icon"
                      style={{ color: skill.color }}
                      whileHover={{ rotate: 15 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Tools Tab Content */}
          {activeTab === "tools" && (
            <motion.div
              className="tools-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="tool-item"
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="tool-icon">{tool.icon}</div>
                  {/* <div className="tool-name">{tool.name}</div> */}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Hobbies Tab Content */}
          {activeTab === "hobbies" && (
            <motion.div
              className="hobbies-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  className="hobby-card"
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: `0 15px 30px ${hobby.color}33`,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ borderTop: `4px solid ${hobby.color}` }}
                >
                  <div className="hobby-icon" style={{ color: hobby.color }}>
                    {hobby.icon}
                  </div>
                  <h3>{hobby.name}</h3>
                  <p>{hobby.description}</p>
                  <div
                    className="hobby-bg"
                    style={{ backgroundColor: `${hobby.color}10` }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Interests Tab Content */}
          {activeTab === "interests" && (
            <motion.div
              className="interests-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="interest-card"
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: `0 15px 30px ${interest.color}33`,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="interest-icon"
                    style={{ color: interest.color }}
                  >
                    {interest.icon}
                  </div>
                  <h3>{interest.name}</h3>
                  <p>{interest.description}</p>
                  <motion.div
                    className="interest-wave"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ backgroundColor: interest.color }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Category Cards (shown only on skills tab) */}
          {activeTab === "skills" && (
            <div className="skills-categories">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-icon">
                    <FaCode />
                  </div>
                  <h3>Web Development</h3>
                  <p>MERN Stack, Node.js, JavaScript, HTML/CSS</p>
                  <div className="tech-stack">
                    <span>React</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-icon">
                    <FaMicrochip />
                  </div>
                  <h3>Embedded Systems</h3>
                  <p>IoT, Microcontrollers, Hardware Programming</p>
                  <div className="tech-stack">
                    <span>Arduino</span>
                    <span>ESP32</span>
                    <span>Raspberry Pi</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-icon">
                    <FaShieldAlt />
                  </div>
                  <h3>Cybersecurity</h3>
                  <p>Ethical Hacking, Vulnerability Analysis</p>
                  <div className="tech-stack">
                    <span>Pen Testing</span>
                    <span>Networking</span>
                    <span>Security</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience" ref={experienceRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: experienceInView ? 1 : 0,
              y: experienceInView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>
              My <span>Experience</span>
            </h2>
            <p>Where I've worked</p>
          </motion.div>

          <div className="experience-timeline">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: experienceInView ? 1 : 0,
                y: experienceInView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="timeline-item"
              whileHover={{ y: -5 }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="date">Mar 2026 – Present</span>
                <h3>IoT Intern</h3>
                <h4>Uniconverge Technology (IoT Academy, Upskill Campus)</h4>

                <ul className="responsibilities">
                  <li>
                    Designed and built real-world sensor-based systems using Arduino,
                    including temperature, soil moisture, and ultrasonic modules.
                  </li>
                  <li>
                    Developed automation projects such as smart traffic control and
                    automatic street lighting systems using embedded logic.
                  </li>
                  <li>
                    Prototyped IoT communication workflows using ESP8266, LoRaWAN, and
                    5G concepts for real-time data transmission.
                  </li>
                  <li>
                    Implemented basic embedded security systems using motion and proximity
                    detection techniques.
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: experienceInView ? 1 : 0,
                y: experienceInView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="timeline-item"
              whileHover={{ y: -5 }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="date">Jun – Sep 2025</span>
                <h3>Full Stack Developer Intern</h3>
                <h4>Evergarden Technologies Pvt. Ltd.</h4>

                <ul className="responsibilities">
                  <li>
                    Developed scalable backend services and REST APIs using Node.js, Hono.js,
                    and PostgreSQL with clean architecture practices.
                  </li>
                  <li>
                    Built responsive and user-friendly UI components integrated with optimized
                    backend workflows.
                  </li>
                  <li>
                    Worked with modern tools like Redis and Bun to improve performance and
                    system efficiency.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver production-ready
                    features following structured development and version control practices.
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: experienceInView ? 1 : 0,
                y: experienceInView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="timeline-item"
              whileHover={{ y: -5 }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="date">2025</span>
                <h3>Freelance Full Stack Developer</h3>
                <h4>KhetiGrow — Agri-Tech Platform (Live Project)</h4>

                <ul className="responsibilities">
                  <li>
                    Built a full-stack agri-tech platform using MERN stack with role-based
                    access for farmers, experts, and service providers.
                  </li>
                  <li>
                    Implemented features like crop management, expert consultation,
                    equipment rental, and real-time user interaction.
                  </li>
                  <li>
                    Designed scalable backend architecture and deployed using CI/CD
                    pipelines on cloud infrastructure.
                  </li>
                  <li>
                    Focused on performance optimization, clean UI/UX, and real-world usability.
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: experienceInView ? 1 : 0,
                y: experienceInView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="timeline-item"
              whileHover={{ y: -5 }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="date">2025 - Present</span>
                <h3>Coding Club Lead</h3>
                <h4>Government Engineering College Vaishali</h4>
                <ul className="responsibilities">
                  <li>
                    Organized and led 10+ technical workshops on full-stack development and cybersecurity.
                  </li>
                  <li>
                    Mentored 50+ students in DSA, development, and real-world project building.
                  </li>
                  <li>
                    Managed and executed hackathons and coding events with 100+ participants.
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: experienceInView ? 1 : 0,
                y: experienceInView ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="timeline-item"
              whileHover={{ y: -5 }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="date">2025 - Present</span>
                <h3>Technical Club Lead</h3>
                <h4>Government Engineering College Vaishali</h4>
                <ul className="responsibilities">
                  <li>
                    Conducted hands-on sessions on Arduino, IoT systems, and embedded programming.
                  </li>
                  <li>
                    Guided students in building real-world IoT prototypes and mini projects.
                  </li>
                  <li>
                    Organized technical competitions and innovation-driven events.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements" id="achievements" ref={achievementsRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: achievementsInView ? 1 : 0,
              y: achievementsInView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>
              My <span>Achievements</span>
            </h2>
            <p>Recognitions and awards</p>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: achievementsInView ? 1 : 0,
                  scale: achievementsInView ? 1 : 0.8,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="achievement-card"
                onClick={() => toggleAchievement(index)}
              >
                <div className="animated-border"></div>
                <div className="achievement-icon">
                  <FaTrophy />
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <span className="achievement-date">{achievement.date}</span>

                <AnimatePresence>
                  {expandedAchievement === index && (
                    <motion.div
                      className="achievement-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{achievement.details}</p>
                      <button
                        className="close-details"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAchievement(index);
                        }}
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className="expand-button"
                  animate={{ rotate: expandedAchievement === index ? 180 : 0 }}
                >
                  <FaChevronDown />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <h2>
          My <span>Gallery</span>
        </h2>
        <AchievementsCarousel images={achievementsGallery} />
      </section>

      {/* Certifications Section */}
      {/* <section
        className="certifications"
        id="certifications"
        ref={certificationsRef}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: certificationsInView ? 1 : 0,
              y: certificationsInView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>
              My <span>Certifications</span>
            </h2>
            <p>Professional credentials</p>
          </motion.div>

          <div className="certifications-grid">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: certificationsInView ? 1 : 0,
                  y: certificationsInView ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="certification-card"
              >
                <div className="certification-icon">
                  <FaCertificate />
                </div>
                <div className="certification-content">
                  <h3>{certification.name}</h3>
                  <div className="certification-meta">
                    <span className="issuer">{certification.issuer}</span>
                    <span className="date">{certification.date}</span>
                  </div>
                  <div className="credential-id">
                    <span>Credential ID:</span> {certification.credential}
                  </div>
                  <a href={certification.link} className="view-credential">
                    View Credential <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

// Typewriter effect component
const TypewriterEffect = ({ text, delay = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setCurrentIndex((currentIndex + 1) % text.length);
        }
      } else {
        setDisplayedText(
          text[currentIndex].substring(0, displayedText.length + 1)
        );
        if (displayedText === text[currentIndex]) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? delay / 2 : delay);
    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, delay, isDeleting, loopNum, text]);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Home;
