import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const links = [
  { name: "About",    href: "#about"    },
  { name: "Skills",   href: "#skills"   },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact"  },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`navbar${scrolled ? " scrolled" : ""}`}
      >
        <div className="container">
          {/* Logo */}
          <a href="#" className="nav-logo" aria-label="Ritu — home">
            Ritu<span>.</span>
          </a>
          {/* Desktop links */}
          <nav aria-label="primary navigation">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.name}>
                  <a href={l.href}>{l.name}</a>
                </li>
              ))}
              <li>
                <a href="/resume.pdf" className="nav-cta" target="_blank" rel="noopener noreferrer">
                  Resume ↗
                </a>
              </li>
            </ul>
          </nav>
          {/* Hamburger */}
          <button
            className={`hamburger${open ? " open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.header>
      {/* Overlay */}
      <div
        className={`overlay${open ? " open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: [0.77, 0, 0.18, 1] }}
            className="mobile-nav open"
            aria-label="mobile navigation"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                onClick={close}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                {l.name}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              onClick={close}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + links.length * 0.07 }}
              style={{ color: "var(--rose)", borderBottom: "none", marginTop: "auto" }}
            >
              Resume ↗
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}