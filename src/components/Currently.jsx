import { motion } from "framer-motion";
import Arrow from "./scrapbook/Arrow";
import Handwritten from "./scrapbook/Handwritten";
import PaperNote from "./scrapbook/PaperNote";
import Reveal from "./ui/Reveal";
import Scribble from "./scrapbook/Scribble";

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

export default function Currently() {
  return (
    <section id="exploring" className="exploring-section">
      <div className="container">
        <Reveal className="section-heading section-heading-light" amount={0.25}>
          <span className="section-kicker">03 <i>—</i> CURRENTLY EXPLORING</span>
          <h2>Tools change. The fundamentals stay.</h2>
        </Reveal>

        <div className="exploring-layout">
          <Reveal className="exploring-cloud" amount={0.2}>
            <span className="cloud-label cloud-label-top">a working collection</span>
            <ul aria-label="Technical skills">
              {skills.map((skill, index) => (
                <li className={`exploring-word exploring-word-${index + 1}`} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
            <Scribble className="cloud-scribble" rotation={-4} width="8rem" />
            <Arrow className="cloud-arrow" direction="right" rotation={-9} size={34} />
            <Handwritten className="cloud-note" rotation={-3} size="1.1rem">not a badge wall ✳</Handwritten>
          </Reveal>

          <Reveal className="exploring-notes" direction="left" distance={28} delay={0.1}>
            {process.map((item, index) => (
              <PaperNote className={`process-note process-note-${index + 1}`} label={item.title} rotation={index % 2 ? 2 : -2} key={item.title}>
                {item.text}
              </PaperNote>
            ))}
          </Reveal>
        </div>

        <motion.p
          className="exploring-footnote"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          I care more about understanding the basics than collecting names.
        </motion.p>
      </div>
    </section>
  );
}
