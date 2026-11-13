import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import "./Footer.css";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Reetu-Dhakal",
    icon: GithubIcon,
    ariaLabel: "GitHub profile",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ritu-d-563669300/",
    icon: LinkedinIcon,
    ariaLabel: "LinkedIn profile",
  },

  {
    label: "Email",
    href: "mailto:dhakalreetu05@gmail.com",
    icon: Mail,
    ariaLabel: "Send email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <section className="footer-brand-section" aria-labelledby="footer-brand-heading">
          <h2 id="footer-brand-heading" className="visually-hidden">Brand</h2>
          <div className="footer-brand">
            <span className="footer-logo">
              Ritu<span className="logo-dot">.</span>
            </span>
            <p className="footer-description">
              Building practical software, learning in public, and staying curious
              about the systems behind it.
            </p>
            <div className="footer-social" role="list" aria-label="Social links">
              {socialLinks.map(({ label, href, icon: Icon, ariaLabel }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={ariaLabel}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <nav className="footer-nav-section" aria-labelledby="footer-nav-heading">
          <h2 id="footer-nav-heading" className="visually-hidden">Navigation</h2>
          <ul className="footer-nav" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <motion.a
                  href={href}
                  className="footer-nav-link"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer-contact-section" aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading" className="visually-hidden">Contact</h2>
          <address className="footer-contact">
            <motion.a
              href="mailto:dhakalreetu05@gmail.com"
              className="footer-contact-link"
              whileHover={{ x: 4 }}
            >
              <Mail size={18} aria-hidden="true" />
              <span>dhakalreetu05@gmail.com</span>
            </motion.a>
            <div className="footer-contact-item">
              <MapPin size={18} aria-hidden="true" />
              <span>Kathmandu, Nepal</span>
            </div>
            <p className="footer-availability">Open to opportunities & collaborations</p>
          </address>
        </section>
      </div>

      <div className="footer-divider" aria-hidden="true" />

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Ritu Dhakal. All rights reserved.
        </p>

        <motion.button
          type="button"
          onClick={scrollToTop}
          className="footer-back-to-top"
          aria-label="Scroll back to top"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Back to Top</span>
          <ArrowUp size={14} aria-hidden="true" />
        </motion.button>
      </div>
    </footer>
  );
}