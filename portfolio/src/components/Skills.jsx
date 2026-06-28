import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import { SiJavascript, SiMysql, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" />, level: 90 },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, level: 85 },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, level: 78 },
  { name: "React", icon: <FaReact color="#61DAFB" />, level: 72 },
  { name: "Node.js", icon: <FaNodeJs color="#339933" />, level: 65 },
  { name: "PHP", icon: <FaPhp color="#777BB4" />, level: 68 },
  { name: "MySQL", icon: <SiMysql color="#4479A1" />, level: 72 },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, level: 60 },
  { name: "Python", icon: <FaPython color="#3776AB" />, level: 65 },
  { name: "Java", icon: <FaJava color="#ED8B00" />, level: 63 },
  { name: "Git", icon: <FaGitAlt color="#F05032" />, level: 75 },
  { name: "Figma", icon: <FaFigma color="#F24E1E" />, level: 60 },
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