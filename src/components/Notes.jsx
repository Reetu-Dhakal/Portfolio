import { motion } from "framer-motion";
import Arrow from "./scrapbook/Arrow";
import Handwritten from "./scrapbook/Handwritten";
import PaperNote from "./scrapbook/PaperNote";
import Reveal from "./ui/Reveal";

const notes = [
  {
    label: "LATELY",
    title: "Trying different things",
    text: "Still exploring what kind of work I enjoy and where I want to take it.",
  },
  {
    label: "MY APPROACH",
    title: "Make it, then improve it",
    text: "I learn best by building something real, making mistakes, and fixing them along the way.",
  },
  {
    label: "WHAT MATTERS",
    title: "Useful over impressive",
    text: "I care more about making something clear and useful than making it complicated.",
  },
];

export default function Notes() {
  return (
    <section id="notes" className="notes-section">
      <div className="container notes-layout">
        <div className="notes-aside">
          <Reveal className="section-heading notes-heading" amount={0.25}>
            <span className="section-kicker">FROM MY DESK</span>
            <h2>A few things on my mind.</h2>
          </Reveal>

          <div className="notes-footer">
            <Handwritten rotation={-2} size="1.25rem">
              still figuring it out
            </Handwritten>

            <Arrow direction="right" rotation={-8} size={30} />
          </div>
        </div>

        <div className="notes-grid">
          {notes.map((note, index) => (
            <motion.div
              className="note-item"
              key={note.label}
              initial={{
                opacity: 0,
                y: 28,
                rotate: index % 2 ? 1 : -1,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: index % 2 ? 0.5 : -0.5,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <PaperNote
                label={note.label}
                rotation={index % 2 ? 1.5 : -1.5}
              >
                <strong>{note.title}</strong>
                <span>{note.text}</span>
              </PaperNote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
