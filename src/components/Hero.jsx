import { ArrowUpRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left: Greeting, introduction, paragraph, buttons */}
        <div className="hero-left">
          <span className="hero-greeting">Hi!</span>

          <div className="hero-typing-container">
            <span className="hero-intro-script">I'm</span>
          </div>

          <p className="hero-role">Networking &amp; Cybersecurity Enthusiast</p>
          <p className="hero-tagline">
            Building secure, scalable systems. Passionate about network architecture,
            cloud security, and open-source contributions.
          </p>

          <div className="hero-cta-group">
            <a className="hero-btn hero-btn-primary" href="#projects">
              <span>Explore My work</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="hero-btn hero-btn-secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        {/* Center: Photo */}
        <div className="hero-photo-wrapper">
          <div className="hero-photo">
            <img
              src="/hero_avatar.png"
              alt="Portrait of Ritu Dhakal"
              width="896"
              height="1196"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Right: Name */}
        <div className="hero-right">
          <h1 className="hero-name">
            <span className="hero-name-first">Ritu</span>
            <span className="hero-name-last">Dhakal</span>
          </h1>
        </div>
      </div>
    </section>
  );
}