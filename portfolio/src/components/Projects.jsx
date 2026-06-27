import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Complaint Management System",
    desc:  "A full-featured web app for logging and tracking complaints. Users can submit, view, and manage complaints through an intuitive dashboard.",
    tags:  ["PHP", "MySQL", "HTML/CSS"],
    icon:  "📋",
    github: "#",
    live:   "#",
  },
  {
    title: "Student Management System",
    desc:  "Desktop application for managing student records, attendance, and grades. Features CRUD operations and report generation.",
    tags:  ["Java", "MySQL", "Swing"],
    icon:  "🎓",
    github: "#",
    live:   null,
  },
  {
    title: "Developer Portfolio",
    desc:  "Personal portfolio website built with React showcasing projects, skills, and contact information with smooth animations.",
    tags:  ["React", "Vite", "Framer Motion"],
    icon:  "💼",
    github: "#",
    live:   "#",
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">

        <div className="projects-header">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.span className="section-tag" variants={fadeUp}>
              My Work
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              Featured <span className="accent">Projects</span>
            </motion.h2>
          </motion.div>

          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: "0.88rem", padding: "10px 22px" }}
          >
            <FaGithub size={15} /> All Projects
          </motion.a>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image / Banner */}
              <div className="project-img">
                <span style={{ position: "relative", zIndex: 1, fontSize: "4rem" }}>
                  {project.icon}
                </span>
              </div>

              <div className="project-body">
                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`GitHub – ${project.title}`}
                  >
                    <FaGithub size={14} /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Live demo – ${project.title}`}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}