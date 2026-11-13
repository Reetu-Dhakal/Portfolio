import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer, staggerItem } from "../utils/motion";
import "./Education.css";

export default function Education() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-layout">
        <motion.div
          className="about-heading"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="section-kicker">02 — About</span>
          <h2 className="section-title">A little about me</h2>
          <p className="about-subtitle">More than just code.</p>
        </motion.div>

        <motion.div
          className="about-copy"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p variants={staggerItem}>
            I&apos;m Ritu Dhakal, a BSc CSIT student at New Summit College. I&apos;m
            passionate about technology, always eager to learn and build new things.
          </motion.p>
          <motion.p variants={staggerItem}>
            Whether it&apos;s developing web applications, analyzing data, I love challenging myself and growing in the tech world.
          </motion.p>
          <motion.div variants={staggerItem} className="about-meta">
            <span>BSc CSIT</span>
            <span>New Summit College</span>
            <span>Kathmandu, Nepal</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
