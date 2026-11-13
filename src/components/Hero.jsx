import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/motion";
import MagneticLink from "./MagneticLink";
import SplitText from "./SplitText";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div
          className="hero-copy"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={staggerItem} className="hero-eyebrow">
            BSc CSIT Student · Aspiring Software Developer
          </motion.p>
          <motion.h1 variants={staggerItem} className="hero-name">
            <SplitText>Ritu</SplitText>
            <SplitText className="hero-name-last">Dhakal</SplitText>
          </motion.h1>
          <motion.p variants={staggerItem} className="hero-lede">
            A curious mind who loves computers and technology. I learn by
            building practical projects and turning ideas into real solutions.
          </motion.p>
          <motion.div variants={staggerItem} className="hero-cta-group">
            <MagneticLink className="hero-btn hero-btn-primary" href="#work">
              Explore my work <ArrowUpRight size={15} aria-hidden="true" />
            </MagneticLink>
            <MagneticLink className="hero-btn hero-btn-secondary" href="#contact">
              Get in touch
            </MagneticLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/hero_avatar.png"
            alt="Portrait of Ritu Dhakal"
            width="896"
            height="1196"
            fetchPriority="high"
          />
        </motion.div>

      </div>
    </section>
  );
}