import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const links = [
  { name: "Work", href: "#projects", id: "projects" },
  { name: "About", href: "#about", id: "about" },
  { name: "Exploring", href: "#exploring", id: "exploring" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const sections = ["home", "about", "projects", "exploring", "education", "certifications", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("portfolio:menu", { detail: { open } }));
    return () => {
      window.dispatchEvent(new CustomEvent("portfolio:menu", { detail: { open: false } }));
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previouslyFocused = document.activeElement;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      menuRef.current?.querySelector("a")?.focus();
    });
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = [...(menuRef.current?.querySelectorAll(focusableSelector) ?? [])];
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus();
      } else {
        toggle?.focus();
      }
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="Ritu Dhakal — home">
            <span className="brand-wordmark">RITU.</span>
            <span className="brand-caption">digital scrapbook</span>
          </a>

          <nav className="nav-desktop" aria-label="Primary navigation">
            {links.map((link) => (
              <a
                className={activeSection === link.id ? "active" : ""}
                href={link.href}
                aria-current={activeSection === link.id ? "location" : undefined}
                key={link.href}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
          </nav>

          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X size={21} /> : <span className="menu-lines" aria-hidden="true" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              className="menu-overlay"
              type="button"
              aria-label="Close navigation"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.nav
              ref={menuRef}
              id="mobile-navigation"
              className="mobile-menu"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              {links.map((link) => (
                <a
                  className={activeSection === link.id ? "active" : ""}
                  href={link.href}
                  aria-current={activeSection === link.id ? "location" : undefined}
                  onClick={closeMenu}
                  key={link.href}
                >
                  {link.name}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
              <a className="mobile-email" href="mailto:dhakalreetu05@gmail.com" onClick={closeMenu}>
                Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
