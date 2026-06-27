import { motion } from "framer-motion";
const skills = [
  { name: "HTML5",       icon: "🌐", level: 90 },
  { name: "CSS3",        icon: "🎨", level: 85 },
  { name: "JavaScript",  icon: "⚡", level: 78 },
  { name: "React",       icon: "⚛️",  level: 72 },
  { name: "Node.js",     icon: "🟢", level: 65 },
  { name: "PHP",         icon: "🐘", level: 68 },
  { name: "MySQL",       icon: "🗄️",  level: 72 },
  { name: "MongoDB",     icon: "🍃", level: 60 },
  { name: "Python",      icon: "🐍", level: 65 },
  { name: "Java",        icon: "☕", level: 63 },
  { name: "Git",         icon: "🌿", level: 75 },
  { name: "Figma",       icon: "✏️",  level: 60 },
];
export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="skills-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Tech Stack</span>
            <h2 className="section-title">
              Tools I <span className="accent">work with</span>
            </h2>
            <p className="section-desc">
              Technologies I've learned and use to build modern web applications.
            </p>
          </motion.div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-level">
                <motion.div
                  className="skill-level-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.04 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}