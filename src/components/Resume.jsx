import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, X } from "lucide-react";

const resumeProjects = [
  {
    title: "Complaint Management System",
    text: "PHP and MySQL web application for submitting, tracking, and managing complaints through a simple dashboard.",
    tags: "PHP · MySQL · HTML/CSS",
  },
  {
    title: "Student Management System",
    text: "Java desktop application for organizing student records, attendance, grades, and reports.",
    tags: "Java · MySQL · Swing",
  },
  {
    title: "Developer Portfolio",
    text: "Responsive React portfolio with deliberate motion, interactive details, and a personal visual system.",
    tags: "React · Vite · Framer Motion",
  },
];

const resumeSkills = [
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

export default function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const printResume = () => window.print();

  return (
    <>
      <section id="resume" className="resume-section resume-link-section">
        <div className="container">
          <motion.div
            className="resume-link-row"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="light-kicker">Résumé</span>
            <a
              className="resume-link-card"
              href="#resume-details"
              onClick={(event) => {
                event.preventDefault();
                setIsOpen(true);
              }}
            >
              <span>View resume</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="resume-details"
            className="resume-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="resume-modal-backdrop"
              aria-label="Close resume"
              onClick={() => setIsOpen(false)}
            />

            <motion.article
              className="resume-modal-card"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="resume-modal-bar">
                <span id="resume-modal-title">Curriculum vitae</span>
                <div className="resume-modal-actions">
                  <button type="button" className="resume-print-button" onClick={printResume}>
                    Save as PDF
                    <ArrowDownToLine size={16} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="resume-modal-close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close resume"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="resume-paper">
                <header className="resume-paper-header">
                  <div>
                    <span className="resume-paper-label">Curriculum vitae</span>
                    <h3>Ritu Dhakal</h3>
                    <p>BSc. CSIT · Kathmandu, Nepal</p>
                  </div>
                  <div className="resume-contact-list">
                    <a href="mailto:dhakalreetu05@gmail.com">
                      dhakalreetu05@gmail.com
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                    <a href="https://github.com/Reetu-Dhakal" target="_blank" rel="noopener noreferrer">
                      github.com/Reetu-Dhakal
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/ritu-d-563669300/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/ritu-d-563669300
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </div>
                </header>

                <div className="resume-rule" />

                <div className="resume-grid">
                  <div className="resume-main-column">
                    <section className="resume-block">
                      <span className="resume-block-label">Profile</span>
                      <p>
                        CSIT student turning small ideas into useful things on the internet. I enjoy the full process: sketching the interface, writing the logic, fixing what breaks, and making the result feel clear to use.
                      </p>
                    </section>

                    <section className="resume-block">
                      <span className="resume-block-label">Selected work</span>
                      <div className="resume-project-list">
                        {resumeProjects.map((project) => (
                          <div className="resume-project" key={project.title}>
                            <h4>{project.title}</h4>
                            <p>{project.text}</p>
                            <span>{project.tags}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <aside className="resume-side-column">
                    <section className="resume-block">
                      <span className="resume-block-label">Education</span>
                      <h4>BSc. CSIT</h4>
                      <p>Computer Science and Information Technology</p>
                    </section>

                    <section className="resume-block">
                      <span className="resume-block-label">Focus</span>
                      <ul className="resume-list">
                        <li>Full-stack web projects</li>
                        <li>Practical cybersecurity</li>
                        <li>Human-centered UI/UX</li>
                        <li>Learning through building</li>
                      </ul>
                    </section>

                    <section className="resume-block">
                      <span className="resume-block-label">Toolkit</span>
                      <div className="resume-skill-list">
                        {resumeSkills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </section>
                  </aside>
                </div>

                <footer className="resume-paper-footer">
                  <span>Made with curiosity in Kathmandu.</span>
                  <span>Ritu Dhakal · Résumé</span>
                </footer>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
