import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import "./Footer.css";

const GithubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-logo">
              RD<span className="logo-dot">.</span>
            </span>
            <p className="footer-subtitle">Networking &amp; Cybersecurity Learner</p>
          </div>

          <div className="footer-links-group">
            <motion.a
              href="https://github.com/Reetu-Dhakal"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
              aria-label="GitHub profile"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon /> <span>GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ritu-d-563669300/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
              aria-label="LinkedIn profile"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedinIcon /> <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:dhakalreetu05@gmail.com"
              className="footer-link-item"
              aria-label="Send email"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} /> <span>Email</span>
            </motion.a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2026 Ritu Dhakal. All rights reserved.
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Scroll back to top"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}