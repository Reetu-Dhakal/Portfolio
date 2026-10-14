import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificate", href: "#certificate" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 140;
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`navbar-header ${isScrolled ? "is-scrolled" : ""}`}
      >
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" aria-label="Ritu Dhakal Home">
            Ritu<span className="logo-dot">.</span>
          </a>

          <nav className="navbar-nav" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`navbar-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="navbar-actions">
            <motion.a
              href="#contact"
              className="btn btn-primary navbar-cta"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.a>

            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={`mobile-drawer ${isOpen ? "open" : ""}`}
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-logo">
            RD<span className="logo-dot">.</span>
          </span>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="#contact"
            className="btn btn-primary mobile-cta"
            onClick={handleLinkClick}
          >
            Let's Connect
          </a>
        </div>
      </div>
    </>
  );
}