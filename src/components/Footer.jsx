import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const email = "dhakalreetu05@gmail.com";

const sectionLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Exploring", href: "#exploring" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Reetu-Dhakal", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ritu-d-563669300/", icon: FaLinkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-topline">
          <span className="footer-eyebrow">That&apos;s a wrap · stay curious</span>
          <a className="footer-top-link" href="#home">
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-intro">
            <a className="footer-brand" href="#home" aria-label="Ritu Dhakal — home">
              RITU<span>.</span>
            </a>
            <p>Building useful things, learning in public, and leaving room for a little detours.</p>
            <a className="footer-email" href={`mailto:${email}`}>
              <Mail size={16} aria-hidden="true" />
              <span>{email}</span>
            </a>
            <span className="footer-location">
              <MapPin size={15} aria-hidden="true" />
              <span>Kathmandu, Nepal</span>
            </span>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <span className="footer-label">Explore</span>
            <div className="footer-nav-links">
              {sectionLinks.map((link) => (
                <a href={link.href} key={link.href}>{link.label}</a>
              ))}
            </div>
          </nav>

          <div className="footer-social">
            <span className="footer-label">Elsewhere</span>
            <div className="footer-social-links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" key={label}>
                  <span><Icon size={16} aria-hidden="true" />{label}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Ritu Dhakal</span>
          <span>Made by Ritu.</span>
        </div>
      </div>
    </footer>
  );
}
