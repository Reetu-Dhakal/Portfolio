import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { featuredProjects } from "../data/projects";
import { fadeUpVariant, staggerContainer, staggerItem } from "../utils/motion";
import "./Skills.css";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", projects: ["hamro-menu", "kala-bazzar"] },
      { name: "PHP", projects: ["balswasthya"] },
      { name: "SQL", projects: ["hamro-menu", "kala-bazzar", "balswasthya"] },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML & CSS", projects: ["hamro-menu", "kala-bazzar", "balswasthya"] },
      { name: "React", projects: ["hamro-menu", "kala-bazzar"] },
      { name: "Node.js", projects: ["hamro-menu"] },
      { name: "Express.js", projects: ["hamro-menu"] },
      { name: "REST APIs", projects: ["hamro-menu"] },
      { name: "Laravel", projects: ["balswasthya"] },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", projects: ["hamro-menu", "kala-bazzar"] },
      { name: "MySQL", projects: ["balswasthya"] },
      { name: "Database design", projects: ["hamro-menu", "kala-bazzar", "balswasthya"] },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", projects: ["hamro-menu", "kala-bazzar", "balswasthya"] },
      { name: "Postman", projects: ["hamro-menu"] },
    ],
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const selectedProjects = useMemo(() => {
    const skill = skillGroups
      .flatMap((group) => group.skills)
      .find((item) => item.name === selectedSkill);

    return skill
      ? featuredProjects.filter((project) => skill.projects.includes(project.id))
      : [];
  }, [selectedSkill]);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="section-kicker">03 — Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-desc">
            Select a skill to see where I have used it in my projects and labs.
          </p>
        </motion.div>

        <motion.div
          className="skills-layout"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <motion.div className="skill-group" variants={staggerItem} key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <motion.button
                      type="button"
                      key={skill.name}
                      className={`skill-chip ${selectedSkill === skill.name ? "is-selected" : ""}`}
                      onClick={() => setSelectedSkill(skill.name)}
                      aria-pressed={selectedSkill === skill.name}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {skill.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="skill-results" variants={staggerItem} aria-live="polite">
            <div className="skill-results-heading">
              <span>{selectedSkill ? `Projects using ${selectedSkill}` : "Explore by skill"}</span>
              {selectedSkill && (
                <button type="button" className="skill-reset" onClick={() => setSelectedSkill(null)}>
                  Reset <RotateCcw size={12} aria-hidden="true" />
                </button>
              )}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill || "empty"}
                className="skill-result-list"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                {selectedProjects.length > 0 ? (
                  selectedProjects.map((project) => (
                    <a className="skill-result" href="#work" key={project.id}>
                      <span>{project.title}</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ))
                ) : (
                  <p className="skill-empty">
                    Choose a skill to connect it to a real project or practical lab.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
