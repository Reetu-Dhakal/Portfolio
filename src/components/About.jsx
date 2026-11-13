import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer, staggerItem } from "../utils/motion";
import "./About.css";

const storyEntries = [
  {
    label: "Where it started",
    title: "Curiosity first",
    text: "I started with a curiosity about how computers turn ideas into useful tools, and kept following the questions that came next.",
  },
  {
    label: "Education",
    title: "BSc CSIT",
    text: "At New Summit College, my studies have taken that curiosity through software development, databases, networks, and systems.",
  },
  {
    label: "Exploration",
    title: "Learning by building",
    text: "Projects and practical labs help me connect concepts to something real: a product someone can use, or a system I can understand more deeply.",
  },
];

export default function About() {
  return (
    <section id="story" className="section story-section">
      <div className="container">
        <motion.div
          className="section-header story-header"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="section-kicker">01 — Story</span>
          <h2 className="section-title">Story</h2>
          <p className="section-desc">A journey of curiosity, learning and building.</p>
        </motion.div>

        <motion.div
          className="story-timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {storyEntries.map((entry) => (
            <motion.article className="story-entry" variants={staggerItem} key={entry.title}>
              <span className="story-entry-label">{entry.label}</span>
              <span className="story-entry-marker" aria-hidden="true" />
              <div className="story-entry-content">
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
