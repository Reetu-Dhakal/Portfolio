import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./Hero.css";

const ROLES = [
  "Networking Enthusiast",
  "Cybersecurity Enthusiast",
  "Cloud Learner",
  "Full-Stack Developer",
];

function useTyping(words, { typeSpeed = 70, deleteSpeed = 40, hold = 1400 } = {}) {
  const [text, setText] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return words[0];
    }
    return "";
  });
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return undefined;
    }

    const word = words[index];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) delay = hold;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold]);

  return text;
}

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left: greeting, typing, student line, buttons */}
        <div className="hero-content">
          <span className="hero-hi">Hi!</span>

          <p className="hero-typing" aria-label="Networking and cybersecurity enthusiast">
            <span className="hero-typing-word">{typed}</span>
            <span className="typing-cursor" aria-hidden="true">|</span>
          </p>

          <p className="hero-student">BSc CSIT Student</p>

          <div className="hero-cta-group">
            <a className="hero-btn hero-btn-primary" href="#projects">
              Explore My Work
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="hero-btn hero-btn-secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        {/* Centre: portrait */}
        <div className="hero-photo">
          <img
            src="/hero_avatar.png"
            alt="Portrait of Ritu Dhakal"
            width="896"
            height="1196"
            fetchPriority="high"
          />
        </div>

        {/* Right: name */}
        <h1 className="hero-name">
          <span className="hero-name-small">I'm</span>
          <span className="hero-name-big">Ritu Dhakal</span>
        </h1>
      </div>
    </section>
  );
}