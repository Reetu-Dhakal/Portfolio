import { motion } from "framer-motion";
import Arrow from "./scrapbook/Arrow";
import Handwritten from "./scrapbook/Handwritten";
import PaperNote from "./scrapbook/PaperNote";
import Reveal from "./ui/Reveal";
import Tape from "./scrapbook/Tape";

const notes = [
  {
    label: "THINGS I'M LEARNING",
    title: "Cybersecurity & UI/UX",
    text: "Practical security and clear, human-centered interfaces.",
  },
  {
    label: "THINGS I'M BUILDING",
    title: "Full-stack web projects",
    text: "Interfaces + logic, one useful version at a time.",
  },
  {
    label: "LITTLE EXPERIMENTS",
    title: "Learning by building",
    text: "Most of what I know, I have learned by making it and fixing what breaks.",
  },
];

export default function Notes() {
  return (
    <section id="notes" className="notes-section">
      <div className="container">
        <Reveal className="section-heading" amount={0.25}>
          <span className="section-kicker">04 <i>—</i> FROM MY DESK</span>
          <h2>A few notes from the process.</h2>
        </Reveal>

        <div className="notes-grid">
          {notes.map((note, index) => (
            <motion.div
              className="note-item"
              key={note.label}
              initial={{ opacity: 0, y: 28, rotate: index % 2 ? 1 : -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 0.5 : -0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Tape className="note-tape" rotation={index % 2 ? 3 : -3} width="4.5rem" height="1.15rem" />
              <PaperNote label={note.label} rotation={index % 2 ? 1.5 : -1.5}>
                <strong>{note.title}</strong>
                <span>{note.text}</span>
              </PaperNote>
            </motion.div>
          ))}
        </div>

        <div className="notes-footer">
          <Handwritten rotation={-2} size="1.25rem">still figuring it out</Handwritten>
          <Arrow direction="right" rotation={-8} size={30} />
        </div>
      </div>
    </section>
  );
}
