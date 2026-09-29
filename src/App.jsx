import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// SVG Icons
const Icons = {
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  ExternalLink: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
  Copy: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  ),
  Check: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  ArrowUpRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  ),
  Brain: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path>
    </svg>
  ),
  Code: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  Cpu: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  ),
  Share: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  ),
  Database: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  Terminal: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  ),
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  Download: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  ),
  GradCap: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10 12 5 2 10l10 5 10-5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  ),
  Languages: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8h8M9 5v3M7 8c0 4 3 7 6 8M11 8c-1 4-4 7-6 8"></path>
      <path d="M13 21l4-9 4 9M14.5 18h5"></path>
    </svg>
  ),
  MapPin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  )
};

const RESUME_URL = `${import.meta.env.BASE_URL}${encodeURIComponent('Sriram Resume Revised.pdf')}`;
const EMAIL = 'winsriram962@gmail.com';
const asset = (file) => `${import.meta.env.BASE_URL}${encodeURIComponent(file)}`;

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

// Each section gets a shareable URL hash, e.g. /Portfolio/#Experience
const hashFor = (id) => {
  const link = navLinks.find((l) => l.id === id);
  return link ? `#${link.label}` : '';
};

const idFromHash = (hash) => {
  const key = decodeURIComponent(hash.replace(/^#/, '')).toLowerCase();
  if (!key) return null;
  const link = navLinks.find((l) => l.id === key || l.label.toLowerCase() === key);
  return link ? link.id : key === 'home' ? 'home' : null;
};

const jumpTo = (sectionId, behavior) => {
  const element = document.getElementById(sectionId);
  if (!element) return false;
  const navOffset = 80;
  const top = sectionId === 'home' ? 0 : element.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top, behavior });
  return true;
};

const setUrlHash = (id, mode) => {
  const url = `${window.location.pathname}${window.location.search}${hashFor(id)}`;
  if (url === `${window.location.pathname}${window.location.search}${window.location.hash}`) return;
  window.history[mode === 'push' ? 'pushState' : 'replaceState'](null, '', url);
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedRoles, setExpandedRoles] = useState([]);
  const currentSectionRef = useRef(null);
  const urlSyncEnabledRef = useRef(false);

  const toggleRole = (id) => {
    setExpandedRoles((prev) => (prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', ...navLinks.map((link) => link.id)];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          // Keep the address bar in step with the section being read
          if (urlSyncEnabledRef.current && currentSectionRef.current !== sections[i]) {
            setUrlHash(sections[i], 'replace');
          }
          currentSectionRef.current = sections[i];
          break;
        }
      }
    };

    // Opening a shared link like #Experience jumps straight to that section
    const initialId = idFromHash(window.location.hash);
    let handleLoad = null;
    if (initialId) {
      // Stop the browser restoring an old scroll position over the jump
      window.history.scrollRestoration = 'manual';
      const jumpToInitial = () => {
        jumpTo(initialId, 'instant');
        urlSyncEnabledRef.current = true;
      };
      setTimeout(jumpToInitial, 0);
      // Re-align once fonts and images have loaded and shifted the layout
      if (document.readyState !== 'complete') {
        handleLoad = jumpToInitial;
        window.addEventListener('load', handleLoad, { once: true });
      }
    } else {
      urlSyncEnabledRef.current = true;
    }

    // Browser back/forward between sections
    const handlePopState = () => {
      jumpTo(idFromHash(window.location.hash) || 'home', 'smooth');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
      if (handleLoad) window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId, event) => {
    event?.preventDefault();
    if (jumpTo(sectionId, 'smooth')) {
      setUrlHash(sectionId, 'push');
      setIsMobileMenuOpen(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fall back to the mail client
      window.location.href = `mailto:${text}`;
    }
  };

  return (
    <div className="portfolio-app">
      <a href="#main-content" className="skip-link">Skip to content</a>

      {/* Subtle Background Glow Elements */}
      <div className="ambient-glow glow-top" />
      <div className="ambient-glow glow-middle" />
      <div className="ambient-grid-overlay" />

      {/* Floating Header */}
      <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
        <nav className="header-nav">
          <a
            href="#"
            onClick={(e) => scrollToSection('home', e)}
            className="brand-logo"
            aria-label="Back to top"
          >
            <img
              src={asset('Profile Picture.png')}
              alt="Sriram Saravanan"
              className="brand-avatar"
              width="38"
              height="38"
            />
            <span className="brand-name">SRIRAM</span>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav-items">
            {navLinks.map((item, idx) => (
              <a
                key={item.id}
                href={hashFor(item.id)}
                onClick={(e) => scrollToSection(item.id, e)}
                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                <span className="nav-index">0{idx + 1}</span>
                <span className="nav-text">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Header Action Button */}
          <div className="header-actions">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="talk-pill-btn"
            >
              <Icons.Download />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-drawer" id="mobile-menu">
            <div className="mobile-menu-links">
              {navLinks.map((item, idx) => (
                <a
                  key={item.id}
                  href={hashFor(item.id)}
                  onClick={(e) => scrollToSection(item.id, e)}
                  className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span className="mobile-idx">0{idx + 1}</span>
                  <span className="mobile-txt">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="content-container" id="main-content">
        {/* =========================================================
            HERO SECTION
            ========================================================= */}
        <section id="home" className="hero-section">
          <div className="hero-grid-layout">
            {/* Left Column: Introduction & CTAs */}
            <div className="hero-main-col">
              <div className="status-badge-wrapper">
                <span className="pulse-indicator">
                  <span className="pulse-dot"></span>
                  <span className="pulse-ring"></span>
                </span>
                <span className="status-badge-text">Open to Full-Time SDE & AI/ML Roles</span>
              </div>

              <h1 className="hero-heading">
                Hi, I'm <span className="highlight-gradient">S Sriram</span>
              </h1>

              <div className="hero-role-strip">
                <span className="role-tag">Software Developer</span>
                <span className="role-separator">•</span>
                <span className="role-tag">Full-Stack</span>
                <span className="role-separator">•</span>
                <span className="role-tag">Applied AI & Robotics</span>
              </div>

              <p className="hero-summary">
                B.Tech Computer Science graduate from <strong>VIT Chennai</strong> (AI & Robotics). I ship production
                software end to end — currently as a <strong>Software Developer at AJSolutions</strong>, delivering enterprise
                SaaS for clients, and co-building <strong>Snaptrace (Unit3A)</strong>, an AI face-matching platform that
                delivers wedding photos to guests in seconds.
              </p>

              {/* CTAs */}
              <div className="hero-cta-group">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary"
                >
                  <span>View My Work</span>
                  <Icons.ArrowUpRight />
                </button>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Icons.Download />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* At-a-glance metrics */}
              <dl className="hero-stats">
                <div className="hero-stat">
                  <dt>Products shipped</dt>
                  <dd>6+</dd>
                </div>
                <div className="hero-stat">
                  <dt>Live platforms</dt>
                  <dd>2</dd>
                </div>
                <div className="hero-stat">
                  <dt>Industry roles</dt>
                  <dd>2</dd>
                </div>
                <div className="hero-stat">
                  <dt>B.Tech CSE</dt>
                  <dd>'25</dd>
                </div>
              </dl>

              {/* Social Channels */}
              <div className="hero-social-strip">
                <a href="https://github.com/Sriram27102003" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                  <Icons.Github />
                </a>
                <a href="https://linkedin.com/in/s-sriram-728945249/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <Icons.Linkedin />
                </a>
                <a href={`mailto:${EMAIL}`} className="social-icon-btn" aria-label="Email">
                  <Icons.Mail />
                </a>
                <a href="tel:+917904948527" className="social-icon-btn" aria-label="Phone">
                  <Icons.Phone />
                </a>
                <span className="social-divider"></span>
                <span className="location-tag"><Icons.MapPin /> Bangalore & Chennai, India</span>
              </div>
            </div>

            {/* Right Column: Interactive Code Console Showcase */}
            <div className="hero-visual-col" aria-hidden="true">
              <div className="code-window-card">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control-dot dot-red"></span>
                    <span className="control-dot dot-yellow"></span>
                    <span className="control-dot dot-green"></span>
                  </div>
                  <div className="window-tab">
                    <Icons.Code />
                    <span>sriram_profile.ts</span>
                  </div>
                  <div className="window-actions">
                    <span className="tab-badge">Active</span>
                  </div>
                </div>

                <div className="window-body">
                  <pre className="code-content">
                    <code>
                      <span className="tok-keyword">const</span> <span className="tok-var">engineer</span>: <span className="tok-type">Profile</span> = &#123;{'\n'}
                      {'  '}<span className="tok-prop">name</span>: <span className="tok-string">"S Sriram"</span>,{'\n'}
                      {'  '}<span className="tok-prop">education</span>: <span className="tok-string">"CSE (AI & Robotics) @ VIT Chennai"</span>,{'\n'}
                      {'  '}<span className="tok-prop">currentRole</span>: <span className="tok-string">"Software Developer @ AJSolutions"</span>,{'\n'}
                      {'  '}<span className="tok-prop">venture</span>: <span className="tok-string">"Co-builder @ Snaptrace (Unit3A)"</span>,{'\n'}
                      {'  '}<span className="tok-prop">shipped</span>: [<span className="tok-string">"Snaptrace MVP"</span>, <span className="tok-string">"HRMS Platform"</span>],{'\n'}
                      {'  '}<span className="tok-prop">focusStack</span>: &#91;{'\n'}
                      {'    '}<span className="tok-string">"AWS Rekognition"</span>, <span className="tok-string">"React / Node.js"</span>,{'\n'}
                      {'    '}<span className="tok-string">"Cloudflare R2"</span>, <span className="tok-string">"sharp / OpenCV"</span>{'\n'}
                      {'  '}&#93;,{'\n'}
                      {'  '}<span className="tok-prop">openForWork</span>: <span className="tok-bool">true</span>,{'\n'}
                      {'  '}<span className="tok-prop">motto</span>: <span className="tok-string">"Scan. Smile. Find your memories 📸"</span>{'\n'}
                      &#125;;
                    </code>
                  </pre>
                </div>

                {/* Floating Metric Badges */}
                <div className="floating-metric-card metric-left">
                  <div className="metric-logo-wrap">
                    <img src={asset('VIT Chennai logo.png')} alt="" width="40" height="40" />
                  </div>
                  <div className="metric-info">
                    <span className="metric-title">VIT Chennai</span>
                    <span className="metric-subtitle">AI & Robotics Graduate</span>
                  </div>
                </div>

                <div className="floating-metric-card metric-right">
                  <div className="metric-logo-wrap">
                    <img src={asset('Snaptrace Logo.png')} alt="" width="40" height="40" />
                  </div>
                  <div className="metric-info">
                    <span className="metric-title">Snaptrace</span>
                    <span className="metric-subtitle">Unit3A Co-Builder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT SECTION
            ========================================================= */}
        <section id="about" className="section-block">
          <div className="section-head">
            <span className="section-kicker">// 01 . BACKGROUND</span>
            <h2 className="section-title">About Me</h2>
            <p className="section-desc">
              Bridging the gap between deep machine learning research, robotic hardware, and elegant user-facing web engineering.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-story-card">
              <h3 className="story-heading">Engineering with Purpose & Curiosity</h3>
              <p className="story-paragraph">
                I am a Computer Science Graduate from <strong>Vellore Institute of Technology (VIT) Chennai</strong>, 
                where I concentrated deeply in <strong>Artificial Intelligence and Robotics</strong>. My core ambition is to create 
                systems that seamlessly unite intelligent algorithms with intuitive interfaces.
              </p>
              <p className="story-paragraph">
                Whether deploying CNNs for medical prediction, configuring autonomous tracking drones with ROS and YOLO, 
                or crafting high-throughput web frontends with React and payment integrations, I thrive on end-to-end 
                problem solving with precision and clean architecture.
              </p>

              <div className="key-attributes-grid">
                <div className="attribute-item">
                  <span className="attr-val">VIT Chennai</span>
                  <span className="attr-lbl">B.Tech Computer Science</span>
                </div>
                <div className="attribute-item">
                  <span className="attr-val">AI & Robotics</span>
                  <span className="attr-lbl">Specialization</span>
                </div>
                <div className="attribute-item">
                  <span className="attr-val">Full-Stack / AI</span>
                  <span className="attr-lbl">Primary Discipline</span>
                </div>
                <div className="attribute-item">
                  <span className="attr-val">Enterprise SaaS</span>
                  <span className="attr-lbl">Production Delivery</span>
                </div>
              </div>
            </div>

            <div className="about-highlights-stack">
              <div className="highlight-pill-card">
                <div className="highlight-icon">
                  <Icons.Brain />
                </div>
                <div className="highlight-details">
                  <h4>AI & Computer Vision</h4>
                  <p>Expertise in deep learning architectures, CNNs, dynamic hypergraphs, YOLO object detection, and OpenCV image pipelines.</p>
                </div>
              </div>

              <div className="highlight-pill-card">
                <div className="highlight-icon">
                  <Icons.Code />
                </div>
                <div className="highlight-details">
                  <h4>Modern Frontend Engineering</h4>
                  <p>Building lightning-fast, reactive single-page applications with React, Next.js, Vite, and custom CSS design systems.</p>
                </div>
              </div>

              <div className="highlight-pill-card">
                <div className="highlight-icon">
                  <Icons.Cpu />
                </div>
                <div className="highlight-details">
                  <h4>Robotics & Embedded Systems</h4>
                  <p>Practical integration with ROS (Robot Operating System), Deep SORT multi-target tracking, Raspberry Pi, and Arduino hardware.</p>
                </div>
              </div>

              <div className="highlight-pill-card">
                <div className="highlight-icon">
                  <Icons.Share />
                </div>
                <div className="highlight-details">
                  <h4>Enterprise SaaS & Full-Lifecycle Delivery</h4>
                  <p>Leading end-to-end architecture, client priorities, and reliable cloud deployments across multi-tenant enterprise platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            EXPERIENCE SECTION
            ========================================================= */}
        <section id="experience" className="section-block">
          <div className="section-head">
            <span className="section-kicker">// 02 . CAREER HISTORY</span>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-desc">
              Hands-on engineering experience designing, integrating, and launching production-ready web products.
            </p>
          </div>

          <div className="experience-rail">
            {/* Experience 1: AJSolutions */}
            <div className="timeline-node">
              <div className="timeline-marker">
                <div className="marker-dot active-glow"></div>
                <div className="marker-line"></div>
              </div>

              <div className={`experience-card-content highlight-node ${expandedRoles.includes('ajsolutions') ? 'expanded' : ''}`}>
                <div className="experience-top-bar">
                  <div className="experience-identity">
                    <div className="company-logo-tile">
                      <img src={asset('AJS Mark.png')} alt="AJSolutions logo" width="56" height="56" loading="lazy" />
                    </div>
                    <div>
                      <div className="company-badge-row">
                        <span className="company-name">AJSolutions</span>
                        <span className="work-mode-pill">Remote</span>
                        <span className="active-role-badge">Current Role</span>
                      </div>
                      <h3 className="role-title">Software Developer</h3>
                    </div>
                  </div>
                  <div className="tenure-badge">
                    <span>April 2026 – Present</span>
                  </div>
                </div>

                <p className="experience-summary-text">
                  Sole engineer on three concurrent client products for MSMEs — owning technical proposals, architecture, deployment, and
                  third-party hardware integrations from requirements to production.
                </p>

                <button
                  type="button"
                  className="exp-toggle-btn"
                  onClick={() => toggleRole('ajsolutions')}
                  aria-expanded={expandedRoles.includes('ajsolutions')}
                  aria-controls="exp-ajsolutions-details"
                >
                  {expandedRoles.includes('ajsolutions') ? 'Hide details' : 'Show details'}
                  <span className="exp-toggle-caret" aria-hidden="true">▾</span>
                </button>

                <div className="responsibilities-block exp-collapsible" id="exp-ajsolutions-details">
                  <h4 className="block-subtitle">Key Deliverables & Responsibilities</h4>
                  <ul className="contributions-list">
                    <li>
                      <strong>16-Module HRMS Architecture:</strong> Architected an HRMS on a React frontend and Node.js/Express backend, and drafted the ₹3,00,500 technical proposal spanning payroll, attendance, and appraisal workflows.
                    </li>
                    <li>
                      <strong>Build-vs-Buy Analysis:</strong> Quantified a 392-hour build-vs-buy comparison of a custom Node.js stack against Zoho People, modelling licensing, customization, and long-term maintenance costs.
                    </li>
                    <li>
                      <strong>Sole Engineer, 3 Products:</strong> Configured REST endpoints, database schemas, and VPS deployments for an HRMS, a wastage tracker, and a maintenance app — running concurrently.
                    </li>
                    <li>
                      <strong>Client-Facing Delivery:</strong> Debugged schema migrations, third-party API failures, and scope changes directly with clients, keeping each build on schedule.
                    </li>
                  </ul>
                </div>

                {/* Delivered Client Products */}
                <div className="client-products-block exp-collapsible">
                  <h4 className="block-subtitle">Delivered Products & Platforms</h4>
                  <div className="client-products-pills">
                    <div className="client-product-chip">
                      <span className="cp-badge">SaaS</span>
                      <span className="cp-name">Enterprise HRMS Platform</span>
                    </div>
                    <div className="client-product-chip">
                      <span className="cp-badge">Analytics</span>
                      <span className="cp-name">Real-Time Wastage Tracker</span>
                    </div>
                    <div className="client-product-chip">
                      <span className="cp-badge">Operations</span>
                      <span className="cp-name">Equipment Maintenance App</span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="tech-stack-row">
                  <span className="tech-chip">React</span>
                  <span className="tech-chip">Node.js / Express</span>
                  <span className="tech-chip">Supabase (PostgreSQL)</span>
                  <span className="tech-chip">REST APIs</span>
                  <span className="tech-chip">Hostinger VPS</span>
                  <span className="tech-chip">eSSL Biometrics</span>
                </div>
              </div>
            </div>

            {/* Experience 2: Snaptrace / Unit3A */}
            <div className="timeline-node">
              <div className="timeline-marker">
                <div className="marker-dot active-glow"></div>
                <div className="marker-line"></div>
              </div>

              <div className={`experience-card-content ${expandedRoles.includes('snaptrace') ? 'expanded' : ''}`}>
                <div className="experience-top-bar">
                  <div className="experience-identity">
                    <div className="company-logo-tile">
                      <img src={asset('Unit3A Mark.png')} alt="Unit3A logo" width="56" height="56" loading="lazy" />
                    </div>
                    <div>
                      <div className="company-badge-row">
                        <span className="company-name">Snaptrace · Unit3A</span>
                        <span className="work-mode-pill">Venture</span>
                      </div>
                      <h3 className="role-title">Co-Builder & Lead Engineer</h3>
                    </div>
                  </div>
                  <div className="tenure-badge">
                    <span>Ongoing</span>
                  </div>
                </div>

                <p className="experience-summary-text">
                  Co-building an AI-powered photo discovery product for weddings and events: guests scan a QR code, take a
                  selfie, and receive every photo they appear in — no app install, no OTP.
                </p>

                <button
                  type="button"
                  className="exp-toggle-btn"
                  onClick={() => toggleRole('snaptrace')}
                  aria-expanded={expandedRoles.includes('snaptrace')}
                  aria-controls="exp-snaptrace-details"
                >
                  {expandedRoles.includes('snaptrace') ? 'Hide details' : 'Show details'}
                  <span className="exp-toggle-caret" aria-hidden="true">▾</span>
                </button>

                <div className="responsibilities-block exp-collapsible" id="exp-snaptrace-details">
                  <h4 className="block-subtitle">What I Own</h4>
                  <ul className="contributions-list">
                    <li>
                      <strong>Camera-to-Cloud Pipeline:</strong> Built the Node.js ingestion service that processes photos with sharp and stores them on Cloudflare R2 as they are shot.
                    </li>
                    <li>
                      <strong>Face Indexing & Matching:</strong> Integrated AWS Rekognition to index faces per event and match guest selfies against the collection in real time.
                    </li>
                    <li>
                      <strong>Product & Payments:</strong> Shipped the React guest experience, Firebase functions, and Razorpay checkout used in pilot wedding deployments.
                    </li>
                  </ul>
                </div>

                <div className="tech-stack-row">
                  <span className="tech-chip">AWS Rekognition</span>
                  <span className="tech-chip">Node.js</span>
                  <span className="tech-chip">Cloudflare R2</span>
                  <span className="tech-chip">Firebase</span>
                  <span className="tech-chip">React</span>
                  <span className="tech-chip">Razorpay</span>
                </div>
              </div>
            </div>

            {/* Experience 3: VIEntityData */}
            <div className="timeline-node">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div className={`experience-card-content ${expandedRoles.includes('vientitydata') ? 'expanded' : ''}`}>
                <div className="experience-top-bar">
                  <div className="experience-identity">
                    <div className="company-logo-tile">
                      <img src={asset('VIEDT Mark.png')} alt="VIEntityData Technologies logo" width="56" height="56" loading="lazy" />
                    </div>
                    <div>
                      <div className="company-badge-row">
                        <span className="company-name">VIEntityData Technologies</span>
                      </div>
                      <h3 className="role-title">Frontend Developer Intern</h3>
                    </div>
                  </div>
                  <div className="tenure-badge">
                    <span>September 2025 – March 2026</span>
                  </div>
                </div>

                <p className="experience-summary-text">
                  Spearheaded frontend development across multiple AI recruitment, candidate assessment, and client healthcare web systems.
                  Focused on responsive user interfaces, third-party API orchestration, and smooth payment processing.
                </p>

                <button
                  type="button"
                  className="exp-toggle-btn"
                  onClick={() => toggleRole('vientitydata')}
                  aria-expanded={expandedRoles.includes('vientitydata')}
                  aria-controls="exp-vientitydata-details"
                >
                  {expandedRoles.includes('vientitydata') ? 'Hide details' : 'Show details'}
                  <span className="exp-toggle-caret" aria-hidden="true">▾</span>
                </button>

                <div className="responsibilities-block exp-collapsible" id="exp-vientitydata-details">
                  <h4 className="block-subtitle">Key Contributions & Architecture</h4>
                  <ul className="contributions-list">
                    <li>
                      <strong>3 AI-Driven Modules:</strong> Shipped the Resume Builder, AI Assessment engine, and AI Interview simulator, wiring frontend forms to backend REST APIs.
                    </li>
                    <li>
                      <strong>Performance:</strong> Structured React component hierarchies with lazy-loaded routes and memoized state, cutting unnecessary re-renders in production builds.
                    </li>
                    <li>
                      <strong>SEO & Semantics:</strong> Added JSON-LD structured schema markup and semantic HTML, improving search indexing and crawlability.
                    </li>
                    <li>
                      <strong>Healthcare Client UI:</strong> Handled asynchronous data fetching and form validation for a healthcare client's responsive web app.
                    </li>
                  </ul>
                </div>

                {/* Live Projects Deployed */}
                <div className="live-products-section exp-collapsible">
                  <h4 className="block-subtitle">Live Shipped Products</h4>
                  <div className="live-products-grid">
                    <a 
                      href="https://intellihires.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="live-product-card"
                    >
                      <div className="product-meta">
                        <span className="product-url">intellihires.in</span>
                        <span className="product-tagline">AI hiring & candidate assessment platform</span>
                      </div>
                      <span className="product-arrow">
                        <Icons.ArrowUpRight />
                      </span>
                    </a>

                    <a 
                      href="https://ai.intellirecruits.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="live-product-card"
                    >
                      <div className="product-meta">
                        <span className="product-url">ai.intellirecruits.com</span>
                        <span className="product-tagline">AI interview & automated candidate evaluation system</span>
                      </div>
                      <span className="product-arrow">
                        <Icons.ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="tech-stack-row">
                  <span className="tech-chip">React</span>
                  <span className="tech-chip">JavaScript (ES6+)</span>
                  <span className="tech-chip">REST APIs</span>
                  <span className="tech-chip">Razorpay Gateway</span>
                  <span className="tech-chip">Lazy Loading & Memoization</span>
                  <span className="tech-chip">JSON-LD / SEO</span>
                  <span className="tech-chip">Git</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURED PROJECTS SECTION
            ========================================================= */}
        <section id="projects" className="section-block">
          <div className="section-head">
            <span className="section-kicker">// 03 . FEATURED WORK</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-desc">
              Selected engineering work across AI platforms, enterprise SaaS, deep learning diagnostics, and autonomous robotics.
            </p>
          </div>

          <p className="swipe-hint" aria-hidden="true">Swipe to browse all 6 projects →</p>
          <div className="projects-grid-container">
            {/* Project 1: Snaptrace */}
            <div className="project-card-item flagship-project">
              <div className="project-card-header">
                <span className="project-serial">01</span>
                <span className="project-category-badge flagship-badge">AI Platform · Unit3A</span>
              </div>
              <h3 className="project-name">Snaptrace — Wedding Photos, Found Instantly</h3>
              <p className="project-tagline">"Scan. Smile. Find your memories."</p>
              <p className="project-description">
                AI wedding photo discovery platform by <strong>Unit3A</strong>. Guests scan an event QR code, take a selfie, and instantly receive their matched photos without app downloads or OTPs. Architected camera-to-cloud ingestion (Node.js, sharp), Cloudflare R2 storage, AWS Rekognition facial indexing, and Firebase functions.
              </p>
              <div className="project-chips-container">
                <span className="p-chip">AWS Rekognition</span>
                <span className="p-chip">Cloudflare R2</span>
                <span className="p-chip">Firebase</span>
                <span className="p-chip">Node.js</span>
                <span className="p-chip">sharp</span>
                <span className="p-chip">React</span>
                <span className="p-chip">Razorpay</span>
              </div>
              <div className="project-card-footer">
                <span className="project-status-note">
                  <span className="status-dot-green"></span>
                  <span>Pilot Wedding Deployments · Unit3A</span>
                </span>
              </div>
            </div>

            {/* Project 2: Annapoorna Mithai HRMS */}
            <div className="project-card-item flagship-project">
              <div className="project-card-header">
                <span className="project-serial">02</span>
                <span className="project-category-badge">Client Project · AJSolutions · Apr 2026</span>
              </div>
              <h3 className="project-name">Human Resource Management System — Annapoorna Mithai</h3>
              <p className="project-tagline">"Payroll, biometric attendance & appraisals in one system."</p>
              <p className="project-description">
                Modelled payroll, biometric attendance, and appraisal schemas on <strong>Supabase (PostgreSQL)</strong> with real-time sync
                across modules. Connected eSSL biometric hardware through a custom Node.js relay on a Hostinger VPS that streams punch
                events into the database, and built a face-recognition attendance pipeline with face-api.js that matches facial
                embeddings client-side. Leave management covers 4 employee segments (Operations/Corporate × Resident/Non-Resident),
                each with its own accrual and approval logic.
              </p>
              <div className="project-chips-container">
                <span className="p-chip">React</span>
                <span className="p-chip">Node.js</span>
                <span className="p-chip">Supabase</span>
                <span className="p-chip">PostgreSQL</span>
                <span className="p-chip">face-api.js</span>
                <span className="p-chip">eSSL Biometrics</span>
                <span className="p-chip">Hostinger VPS</span>
              </div>
              <div className="project-card-footer">
                <span className="project-status-note">
                  <span className="status-dot-green"></span>
                  <span>Delivered to Client · Production</span>
                </span>
              </div>
            </div>

            {/* Project 3: Energy & Wastage Tracking */}
            <div className="project-card-item">
              <div className="project-card-header">
                <span className="project-serial">03</span>
                <span className="project-category-badge">Data Pipeline · Nov 2024</span>
              </div>
              <h3 className="project-name">Energy & Wastage Tracking System</h3>
              <p className="project-tagline">"From shop-floor readings to cost decisions."</p>
              <p className="project-description">
                Capture-to-dashboard pipeline for an MSME client that combines sensor and manual-entry data in MySQL, surfacing
                wastage and energy metrics that drive cost-reduction decisions.
              </p>
              <div className="project-chips-container">
                <span className="p-chip">MySQL</span>
                <span className="p-chip">Data Capture</span>
                <span className="p-chip">Dashboards</span>
                <span className="p-chip">Sensor Data</span>
              </div>
              <div className="project-card-footer">
                <span className="project-status-note">
                  <span className="status-dot-green"></span>
                  <span>Delivered to MSME Client</span>
                </span>
              </div>
            </div>

            {/* Project 4: Lung Cancer Prediction */}
            <div className="project-card-item">
              <div className="project-card-header">
                <span className="project-serial">04</span>
                <span className="project-category-badge">Deep Learning / Healthcare</span>
              </div>
              <h3 className="project-name">Lung Cancer Prediction</h3>
              <p className="project-tagline">"Diagnostic early-stage detection via hypergraphs."</p>
              <p className="project-description">
                Diagnostic deep learning architecture combining Convolutional Neural Networks (CNN) with dynamic hypergraph learning for accurate, early-stage lung cancer classification from medical scans.
              </p>
              <div className="project-chips-container">
                <span className="p-chip">Python</span>
                <span className="p-chip">CNN</span>
                <span className="p-chip">TensorFlow</span>
                <span className="p-chip">Dynamic Hypergraph</span>
                <span className="p-chip">Medical Imaging</span>
              </div>
              <div className="project-card-footer">
                <a 
                  href="https://github.com/Sriram27102003/Lung-Cancer-Prediction" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-github-btn"
                >
                  <Icons.Github />
                  <span>View on GitHub</span>
                  <Icons.ArrowUpRight />
                </a>
              </div>
            </div>

            {/* Project 5: Autonomous Drone Tracking */}
            <div className="project-card-item">
              <div className="project-card-header">
                <span className="project-serial">05</span>
                <span className="project-category-badge">Robotics / Computer Vision</span>
              </div>
              <h3 className="project-name">Autonomous Drone Human Tracking</h3>
              <p className="project-tagline">"Real-time edge target following on ROS."</p>
              <p className="project-description">
                Embedded autonomous robotic tracking platform implementing YOLOv3 for real-time human detection and Deep SORT for persistent target tracking executed on a Raspberry Pi via ROS.
              </p>
              <div className="project-chips-container">
                <span className="p-chip">ROS</span>
                <span className="p-chip">OpenCV</span>
                <span className="p-chip">YOLOv3</span>
                <span className="p-chip">Deep SORT</span>
                <span className="p-chip">Raspberry Pi</span>
                <span className="p-chip">Python</span>
              </div>
              <div className="project-card-footer">
                <a 
                  href="https://github.com/Sriram27102003/Autonomous-Drone-Target-Tracking-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-btn"
                >
                  <Icons.Github />
                  <span>View on GitHub</span>
                  <Icons.ArrowUpRight />
                </a>
              </div>
            </div>

            {/* Project 6: Task Manager */}
            <div className="project-card-item">
              <div className="project-card-header">
                <span className="project-serial">06</span>
                <span className="project-category-badge">Mobile App</span>
              </div>
              <h3 className="project-name">Task Manager</h3>
              <p className="project-tagline">"Real-time productivity, synced everywhere."</p>
              <p className="project-description">
                Cross-platform mobile app built with Flutter, using Firebase for authentication, backend services, and
                real-time data sync so tasks stay consistent across devices.
              </p>
              <div className="project-chips-container">
                <span className="p-chip">Flutter</span>
                <span className="p-chip">Dart</span>
                <span className="p-chip">Firebase</span>
                <span className="p-chip">Real-time Sync</span>
              </div>
              <div className="project-card-footer">
                <a
                  href="https://github.com/Sriram27102003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-btn"
                >
                  <Icons.Github />
                  <span>More on GitHub</span>
                  <Icons.ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SKILLS SECTION
            ========================================================= */}
        <section id="skills" className="section-block">
          <div className="section-head">
            <span className="section-kicker">// 04 . TECHNICAL ARSENAL</span>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-desc">
              The tools I use to take products from prototype to production — grouped by where they sit in the stack.
            </p>
          </div>

          <div className="skills-grid-container">
            {[
              { icon: Icons.Code, title: 'Languages', items: ['JavaScript (ES6+)', 'Python', 'Java', 'SQL', 'Dart', 'HTML5', 'CSS3'] },
              { icon: Icons.Globe, title: 'Frontend & Mobile', items: ['React', 'Next.js', 'Vite', 'Flutter', 'Responsive UI', 'Design Systems'] },
              { icon: Icons.Database, title: 'Backend & Data', items: ['Node.js', 'Express.js', 'REST APIs', 'Supabase', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'] },
              { icon: Icons.Terminal, title: 'Cloud & DevOps', items: ['Hostinger VPS', 'AWS Rekognition', 'Cloudflare R2', 'Microsoft Azure', 'Git & GitHub', 'Linux CLI', 'Razorpay API'] },
              { icon: Icons.Brain, title: 'AI & Machine Learning', items: ['face-api.js', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'YOLO', 'NumPy', 'Pandas'] },
              { icon: Icons.Cpu, title: 'Robotics & Hardware', items: ['eSSL Biometric Devices', 'ROS', 'Deep SORT', 'Raspberry Pi', 'Arduino', 'Sensor Interfacing'] }
            ].map((group) => (
              <div className="skill-domain-card" key={group.title}>
                <div className="domain-card-head">
                  <div className="domain-icon-wrapper">
                    <group.icon />
                  </div>
                  <h3 className="domain-title">{group.title}</h3>
                </div>
                <ul className="domain-skill-chips">
                  {group.items.map((skill) => (
                    <li className="skill-badge" key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            EDUCATION & ACHIEVEMENTS SECTION
            ========================================================= */}
        <section id="education" className="section-block">
          <div className="section-head">
            <span className="section-kicker">// 05 . CREDENTIALS</span>
            <h2 className="section-title">Education & Achievements</h2>
            <p className="section-desc">
              Academic foundation in AI and robotics, put to work on live, production platforms.
            </p>
          </div>

          <div className="education-grid">
            <article className="education-card">
              <div className="education-card-head">
                <div className="domain-icon-wrapper">
                  <Icons.GradCap />
                </div>
                <span className="tenure-badge"><span>Sep 2021 – Apr 2025</span></span>
              </div>
              <h3 className="education-degree">B.Tech, Computer Science & Engineering</h3>
              <p className="education-major">Specialization in Artificial Intelligence & Robotics</p>
              <p className="education-school">Vellore Institute of Technology (VIT), Chennai</p>

              <dl className="education-facts">
                <div>
                  <dt>CGPA</dt>
                  <dd>7.22 / 10</dd>
                </div>
                <div>
                  <dt>Class of</dt>
                  <dd>2025</dd>
                </div>
              </dl>

              <div className="tech-stack-row">
                <span className="tech-chip">Data Structures & Algorithms</span>
                <span className="tech-chip">Design & Analysis of Algorithms</span>
                <span className="tech-chip">DBMS</span>
                <span className="tech-chip">Embedded Systems</span>
              </div>
            </article>

            <div className="credentials-stack">
              <article className="highlight-pill-card">
                <div className="highlight-icon">
                  <Icons.GradCap />
                </div>
                <div className="highlight-details">
                  <h4>Adhyapana School, CBSE</h4>
                  <p>Class XII: 78.6% · Class X: 78.6%</p>
                </div>
              </article>

              <article className="highlight-pill-card">
                <div className="highlight-icon">
                  <Icons.Globe />
                </div>
                <div className="highlight-details">
                  <h4>2 Live AI Platforms Shipped</h4>
                  <p>Frontend for intellihires.in and ai.intellirecruits.com — used for real candidate assessments and AI interviews.</p>
                </div>
              </article>

              <article className="highlight-pill-card">
                <div className="highlight-icon">
                  <Icons.Languages />
                </div>
                <div className="highlight-details">
                  <h4>Languages</h4>
                  <p>Telugu (native) · Tamil · English (professional)</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT SECTION
            ========================================================= */}
        <section id="contact" className="section-block">
          <div className="contact-hero-card">
            <div className="contact-glow-backdrop"></div>

            <span className="section-kicker">// 06 . GET IN TOUCH</span>
            <h2 className="contact-main-title">Let's Build Something Exceptional</h2>
            <p className="contact-lead-text">
              I'm open to full-time Software Engineering, Full-Stack, and AI/ML roles — on-site in Bangalore or Chennai, or remote.
              Hiring, collaborating, or just curious about Snaptrace? I would love to hear from you.
            </p>

            <div className="contact-methods-grid">
              {/* Email */}
              <div className="contact-card-box">
                <div className="contact-box-icon">
                  <Icons.Mail />
                </div>
                <div className="contact-box-content">
                  <span className="contact-box-lbl">Direct Email</span>
                  <a href={`mailto:${EMAIL}`} className="contact-box-val">{EMAIL}</a>
                </div>
                <button 
                  onClick={() => copyToClipboard(EMAIL)}
                  className="copy-btn"
                  title="Copy to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Icons.Check /> : <Icons.Copy />}
                  <span className="copy-label">{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/s-sriram-728945249/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card-box linkable"
              >
                <div className="contact-box-icon">
                  <Icons.Linkedin />
                </div>
                <div className="contact-box-content">
                  <span className="contact-box-lbl">LinkedIn</span>
                  <span className="contact-box-val">s-sriram-728945249</span>
                </div>
                <span className="box-action-arrow">
                  <Icons.ArrowUpRight />
                </span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/Sriram27102003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card-box linkable"
              >
                <div className="contact-box-icon">
                  <Icons.Github />
                </div>
                <div className="contact-box-content">
                  <span className="contact-box-lbl">GitHub</span>
                  <span className="contact-box-val">Sriram27102003</span>
                </div>
                <span className="box-action-arrow">
                  <Icons.ArrowUpRight />
                </span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+917904948527" 
                className="contact-card-box linkable"
              >
                <div className="contact-box-icon">
                  <Icons.Phone />
                </div>
                <div className="contact-box-content">
                  <span className="contact-box-lbl">Phone</span>
                  <span className="contact-box-val">+91 7904948527</span>
                </div>
                <span className="box-action-arrow">
                  <Icons.ArrowUpRight />
                </span>
              </a>
            </div>

            <div className="contact-resume-row">
              <span>Prefer a one-page summary?</span>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Icons.Download />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            <p className="copy-status" role="status" aria-live="polite">
              {copiedEmail ? 'Email address copied to clipboard' : ''}
            </p>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
          ========================================================= */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left-block">
            <span className="footer-logo">SRIRAM</span>
            <span className="footer-tag">Software Developer · Full-Stack & Applied AI</span>
          </div>

          <nav className="footer-center-block" aria-label="Footer">
            {navLinks.map((item) => (
              <a key={item.id} href={hashFor(item.id)} onClick={(e) => scrollToSection(item.id, e)} className="footer-nav-link">
                {item.label}
              </a>
            ))}
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="footer-nav-link">Resume</a>
          </nav>

          <div className="footer-right-block">
            <button 
              onClick={() => scrollToSection('home')}
              className="back-to-top-btn"
            >
              <span>Back to Top</span>
              <span className="top-arrow" aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>© {new Date().getFullYear()} S Sriram. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
