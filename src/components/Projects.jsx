import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../data/projects";
import { fadeUpVariant, staggerContainer, staggerItem } from "../utils/motion";
import "./Projects.css";

const GithubIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="section projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="section-kicker">04 — Work</span>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-desc">Projects that reflect my learning journey.</p>
        </motion.div>

        <motion.div
          className="project-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              className="project-row"
              variants={staggerItem}
              whileHover={reduceMotion ? undefined : { y: -6, rotate: index % 3 === 2 ? 0 : -0.4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              key={project.id}
            >
              <div className="project-row-copy">
                <span className="project-number">0{index + 1}</span>
                <div className="project-row-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <div className="project-row-link">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                        View project <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ) : (
                      <span>Practical lab</span>
                    )}
                  </div>
                </div>
              </div>

              <motion.div
                className="project-row-image"
                initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
                whileInView={reduceMotion ? undefined : { clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="project-image-placeholder" aria-label={`${project.title} preview unavailable`}>
                    <span>{project.title}</span>
                  </div>
                )}
                <span className="project-image-hover">View project</span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
