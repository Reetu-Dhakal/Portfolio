import { motion } from "framer-motion";
import { featuredProjects } from "../data/projects";
import { ExternalLink, FolderGit2, ChevronLeft, ChevronRight } from "lucide-react";
import TiltCard from "./TiltCard";
import { fadeUpVariant, staggerContainer, staggerItem } from "../utils/motion";
import "./Projects.css";

const GithubIcon = () => (
  <svg
    width="16"
    height="16"
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
  const scrollContainerRef = (el) => {
    if (el) {
      el.style.scrollBehavior = "smooth";
    }
  };

  const scrollLeft = (container) => {
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (container) => {
    container.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section section-alt projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="section-kicker">Hands-on Experience</span>
          <h2 className="section-title">Projects & Practical Labs</h2>
        </motion.div>

        <div className="projects-carousel-wrapper" ref={scrollContainerRef}>
          <button
            type="button"
            className="carousel-nav prev"
            onClick={(e) => {
              e.preventDefault();
              scrollLeft(e.currentTarget.parentElement.querySelector(".projects-carousel"));
            }}
            aria-label="Scroll projects left"
          >
            <ChevronLeft size={20} />
          </button>

          <motion.div
            className="projects-carousel"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem} className="project-slide">
                <TiltCard maxTilt={5} scale={1.012}>
                  <article className="project-card">
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        loading="lazy"
                      />
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>

                      <div className="project-actions">
                        {project.github ? (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm project-btn"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <GithubIcon />
                            <span>View Source Code</span>
                            <ExternalLink size={13} className="btn-arrow" />
                          </motion.a>
                        ) : (
                          <span className="lab-notice">
                            <FolderGit2 size={14} /> Lab setup in progress · Notes being documented
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <button
            type="button"
            className="carousel-nav next"
            onClick={(e) => {
              e.preventDefault();
              scrollRight(e.currentTarget.parentElement.querySelector(".projects-carousel"));
            }}
            aria-label="Scroll projects right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          Scroll horizontally →
        </div>
      </div>
    </section>
  );
}