import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Handwritten from "./scrapbook/Handwritten";
import Polaroid from "./scrapbook/Polaroid";
import Sticker from "./scrapbook/Sticker";
import Tape from "./scrapbook/Tape";

const annotations = ["look here →", "click me ↗", "work in progress"];

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className={`project-spread project-spread-${index + 1}`}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-copy">
        <div className="project-meta">
          <span className="project-number">{number}</span>
          <span>{project.type}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-tags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <a
          className="project-link"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse repositories
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <Handwritten className="project-annotation" rotation={index % 2 ? 2 : -2}>
          {annotations[index]}
        </Handwritten>
      </div>

      <a
        className="project-image-link"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
         aria-label={`Browse GitHub repositories for ${project.title}`}
      >
        <div className="project-image-wrap">
          <Tape className="project-tape" rotation={index % 2 ? 3 : -3} width="5.5rem" height="1.35rem" />
          <Polaroid
            className="project-polaroid"
            imageSrc={project.image}
            imageAlt={project.alt}
            label={`project ${number}`}
            rotation={index === 1 ? 1.2 : index === 2 ? -1.4 : -0.8}
            imageProps={{
              width: 1024,
              height: 1024,
              loading: index === 0 ? "eager" : "lazy",
              fetchPriority: index === 0 ? "high" : "auto",
            }}
          />
          <Sticker className="project-sticker" tone={index === 1 ? "coral" : "butter"} rotation={index % 2 ? 5 : -5}>
            {index === 2 ? "new!" : "made with care"}
          </Sticker>
           <span className="project-hover-label">Explore repositories ↗</span>
        </div>
      </a>
    </motion.article>
  );
}
