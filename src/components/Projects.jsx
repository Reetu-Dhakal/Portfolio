import { ArrowUpRight } from "lucide-react";
import { githubRepositoryUrl, projects } from "../data/projects";
import Handwritten from "./scrapbook/Handwritten";
import ProjectCard from "./ProjectCard";
import Reveal from "./ui/Reveal";
import Scribble from "./scrapbook/Scribble";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <Reveal className="section-heading projects-heading" amount={0.2}>
          <div>
            <span className="section-kicker">02 <i>—</i> THINGS I'VE MADE</span>
            <h2>A few things I&apos;ve made so far.</h2>
          </div>
          <a className="section-link" href={githubRepositoryUrl} target="_blank" rel="noopener noreferrer">
            Browse GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>

        <div className="projects-footer">
          <Scribble width="7rem" rotation={-4} />
          <Handwritten rotation={-2} size="1.2rem">made with curiosity</Handwritten>
        </div>
      </div>
    </section>
  );
}
