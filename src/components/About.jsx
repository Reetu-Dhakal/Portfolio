import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer, staggerItem } from "../utils/motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="section-kicker">Background & Aspirations</span>
          <h2 className="section-title">A Little About Me</h2>
        </motion.div>

        <motion.div
          className="about-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p variants={staggerItem} className="about-text-p">
            Hi, I'm Ritu Dhakal, a Bachelor of Science in Computer Science and Information Technology (BSc CSIT) student at New Summit College, Kathmandu, Nepal. I have a strong interest in Networking and Cybersecurity, particularly in understanding network infrastructure, system security, and the technologies that keep digital environments connected and protected. I enjoy exploring new technologies, strengthening my technical knowledge, and developing practical skills through continuous learning and hands-on practice. I'm committed to expanding my understanding of the IT field, tackling technical challenges, and building a solid foundation for my future career in networking and cybersecurity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}