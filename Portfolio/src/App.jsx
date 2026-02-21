import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Cursor Follower */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x + 'px',
          top: mousePosition.y + 'px'
        }}
      />

      {/* Navigation */}
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <button 
            onClick={() => scrollToSection('home')}
            className="logo-btn"
          >
            <span className="logo-text">S</span>
            <span className="logo-full">SRIRAM</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                <span className="nav-number">0{['About', 'Projects', 'Skills', 'Contact'].indexOf(item) + 1}</span>
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`mobile-nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="mobile-nav-number">0{index + 1}</span>
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-gradient"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <div className="hero-label">DEVELOPER & ENGINEER</div>
            <h1 className="hero-title">
              <span className="hero-title-line">S SRIRAM</span>
            </h1>
            <div className="hero-subtitle">
              <span className="subtitle-item">AI SPECIALIST</span>
              <span className="subtitle-divider">/</span>
              <span className="subtitle-item">ROBOTICS</span>
              <span className="subtitle-divider">/</span>
              <span className="subtitle-item">FRONTEND DEV</span>
            </div>
            <p className="hero-description">
              Computer Science Graduate crafting intelligent systems
              and scalable solutions at the intersection of AI and engineering.
            </p>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hero-cta"
            >
              View My Work
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">SCROLL</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-content">
            <div className="about-main">
              <div className="about-text">
                <p className="about-intro">
                  I'm a Computer Science Graduate at <strong>VIT Chennai</strong>, specializing in 
                  Artificial Intelligence and Robotics. My work focuses on building intelligent 
                  systems that solve real-world problems through automation and smart design.
                </p>
                
                <div className="about-highlights">
                  <div className="highlight-item">
                    <h3>Technical Foundation</h3>
                    <p>Strong expertise in data structures, machine learning, computer vision, 
                    and embedded systems with hands-on project experience.</p>
                  </div>
                  
                  <div className="highlight-item">
                    <h3>Frontend Development</h3>
                    <p>Passionate about building responsive and user-friendly interfaces with 
                    modern web technologies like React and Next.js.</p>
                  </div>
                  
                  <div className="highlight-item">
                    <h3>Open Source</h3>
                    <p>Active contributor to OSS projects, gaining real-world experience in 
                    collaborative development and industry best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="projects-grid">
            <ProjectCard
              number="01"
              title="Lung Cancer Prediction"
              description="CNN and hypergraph learning model for accurate early-stage lung cancer detection."
              tags={['Python', 'CNN', 'TensorFlow', 'Dynamic Hypergraph']}
              link="https://github.com/Sriram27102003/Lung-Cancer-Prediction"
            />
            <ProjectCard
              number="02"
              title="Autonomous Drone Human Tracking"
              description="Autonomous drone using YOLOv3 and Deep SORT for real-time human tracking."
              tags={['ROS', 'OpenCV', 'Python', 'Raspberry Pi']}
              link="https://github.com/Sriram27102003/Autonomous-Drone-Target-Tracking-System"
            />
            <ProjectCard
              number="03"
              title="Open Source Contributions"
              description="Added local search capability using docusaurus-plugin-search-local to CNCF's contributor documentation site."
              tags={['GitHub', 'Docusaurus', 'JavaScript', 'React']}
              link="https://github.com/Sriram27102003/Contribute-site"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Technical Arsenal</h2>
          </div>

          <div className="skills-content">
            <SkillCategory
              title="Languages"
              skills={['Java', 'Python', 'HTML','CSS', 'JavaScript', 'SQL']}
            />
            <SkillCategory
              title="AI & ML"
              skills={['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Keras', 'NumPy']}
            />
            <SkillCategory
              title="Robotics"
              skills={['ROS', 'Arduino', 'Raspberry Pi', 'Computer Vision', 'Embedded Systems']}
            />
            <SkillCategory
              title="Databases"
              skills={['MySQL', 'MongoDB', 'Firebase']}
            />
            <SkillCategory
              title="DevOps & Tools"
              skills={['Git','Github', 'Linux CLI','Azure','VS Code']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <div className="contact-content">
            <div className="contact-intro">
              <p className="contact-text">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="contact-methods">
              <ContactLink
                label="Email"
                value="winsriram962@gmail.com"
                href="mailto:winsriram962@gmail.com"
                icon="✉"
              />
              <ContactLink
                label="LinkedIn"
                value="s-sriram-728945249"
                href="https://linkedin.com/in/s-sriram-728945249/"
                icon="in"
              />
              <ContactLink
                label="GitHub"
                value="Sriram27102003"
                href="https://github.com/Sriram27102003"
                icon="<>"
              />
              <ContactLink
                label="Phone"
                value="+91 7904948527"
                href="tel:+917904948527"
                icon="☎"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-name">S SRIRAM</span>
            <span className="footer-tagline">Building the future, one line at a time</span>
          </div>
          <div className="footer-right">
            <span className="footer-year">© 2024</span>
            <span className="footer-location">Chennai, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ number, title, description, tags, link }) {
  return (
    <div className="project-card">
      <div className="project-number">{number}</div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">{tag}</span>
        ))}
      </div>
      <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
        View Project <span className="link-arrow">→</span>
      </a>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3 className="skill-category-title">{title}</h3>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">{skill}</span>
        ))}
      </div>
    </div>
  );
}

function ContactLink({ label, value, href, icon }) {
  return (
    <a href={href} className="contact-link" target="_blank" rel="noopener noreferrer">
      <div className="contact-icon">{icon}</div>
      <div className="contact-info">
        <span className="contact-label">{label}</span>
        <span className="contact-value">{value}</span>
      </div>
      <div className="contact-arrow">→</div>
    </a>
  );
}
