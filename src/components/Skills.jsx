import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "PHP",
  "Java",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Figma",
];

const process = [
  { title: "Understand", text: "Start with the problem, not the tool." },
  { title: "Build", text: "Make the smallest useful version first." },
  { title: "Refine", text: "Remove what does not need to be there." },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="dark-section-heading"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <span className="dark-kicker">Toolkit</span>
            <h2>Tools change. The fundamentals stay.</h2>
          </div>
          <p>
            These are the technologies I currently use. I care more about
            understanding the basics than collecting names.
            <span className="skill-handnote">a working collection, not a badge wall ✳</span>
          </p>
        </motion.div>

        <motion.div
          className="skill-cloud"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          aria-label="Technical skills"
        >
          {skills.map((skill, index) => (
            <span className={`skill-word skill-word-${(index % 5) + 1}`} key={skill}>
              {skill}
            </span>
          ))}
        </motion.div>

        <div className="process-grid">
          {process.map((item, index) => (
            <motion.div
              className="process-item"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <span className="process-mark" aria-hidden="true">✳</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skill-marquee" aria-hidden="true">
        <div>
          <span>build</span><i>+</i><span>learn</span><i>+</i>
          <span>share</span><i>+</i><span>connect</span><i>+</i>
          <span>build</span><i>+</i><span>learn</span><i>+</i>
          <span>share</span><i>+</i><span>connect</span><i>+</i>
        </div>
      </div>
    </section>
  );
}
