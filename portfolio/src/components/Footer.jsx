import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const navLinks = [
  { name: "Home",     href: "#home"     },
  { name: "About",    href: "#about"    },
  { name: "Skills",   href: "#skills"   },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact"  },
];
const socialLinks = [
  { icon: <FaGithub size={16} />,     href: "https://github.com/yourusername",    label: "GitHub"   },
  { icon: <FaLinkedinIn size={16} />, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { icon: <FaTwitter size={16} />,    href: "https://twitter.com/yourusername",   label: "Twitter"  },
  { icon: <Mail size={16} />,         href: "mailto:reetu@gmail.com",             label: "Email"    },
];
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3>Reetu<span>.</span></h3>
            <p>
              A fresher web developer passionate about creating clean,
              accessible, and beautiful digital experiences. Open to new
              opportunities and collaborations.
            </p>
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href}>{l.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:reetu@gmail.com">reetu@gmail.com</a></li>
              <li><a href="tel:+97798XXXXXXXX">+977 98XXXXXXXX</a></li>
              <li><a href="#" style={{ pointerEvents: "none" }}>Kathmandu, Nepal</a></li>
              <li><a href="/resume.pdf" download>Download Resume</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Made with <Heart size={13} style={{ display:"inline", verticalAlign:"middle", color:"var(--rose-light)" }} /> by{" "}
            <span>Reetu Dhakal</span>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}