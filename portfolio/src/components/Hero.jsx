import { motion } from "framer-motion";
import { ArrowRight, Download} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});
export default function Hero() {
  return (
    <section id="home">
      <div className="container">
        <div className="hero-grid">
          {/* ─── Left Text ─── */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Open to Opportunities
              </div>
            </motion.div>
            <motion.h1 className="hero-name" {...fadeUp(0.2)}>
              Hi, I'm{" "}
              <span className="serif-accent">Ritu Dhakal</span>
            </motion.h1>
            <motion.p className="hero-tagline" {...fadeUp(0.3)}>
             Aspiring Full-Stack Developer passionate about creating modern web applications that combine clean design, seamless user experiences, and robust functionality.
            </motion.p>
            <motion.div className="hero-actions" {...fadeUp(0.4)}>
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                Download CV <Download size={16} />
              </a>
            </motion.div>
            <motion.div className="hero-social" {...fadeUp(0.5)}>
              <a
                href="https://github.com/Reetu-Dhakal"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ritu-d-563669300/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:dhakalreetu05@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                {/* <FaMail size={18} /> */}
              </a>
            </motion.div>
          </div>
          {/* ─── Right Image ─── */}
          <motion.div
            className="hero-img-wrap"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-img-blob animate-float">
              <img
                src="/hero_avatar.png"
                alt="Ritu Dhakal — Web Developer"
                className="hero-img"
              />
            </div>
            {/* Floating stat cards */}
            <motion.div
              className="hero-float-card card-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="float-card-icon pink">💻</div>
              <div className="float-card-text">
                <strong>10+ Projects</strong>
                <span>Built &amp; deployed</span>
              </div>
            </motion.div>
            <motion.div
              className="hero-float-card card-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <div className="float-card-icon mint">🎓</div>
              <div className="float-card-text">
                <strong>BSc CSIT</strong>
                <span>Fresher Developer</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}