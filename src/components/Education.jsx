import { GraduationCap, School } from "lucide-react";
import Handwritten from "./scrapbook/Handwritten";
import Tape from "./scrapbook/Tape";
import Reveal from "./ui/Reveal";

const education = [
  {
    period: "2080 — Present",
    title: "Bachelor of Science in Computer Science and Information Technology",
    shortTitle: "BSc. CSIT",
    institution: "New Summit College (TU Affiliated)",
    icon: GraduationCap,
    current: true,
  },
  {
    period: "2077 — 2080",
    title: "Higher Secondary Education",
    shortTitle: "Science (Bio-Math)",
    institution: "Reliance International College",
    icon: School,
  },
  {
    period: "2077",
    title: "Secondary Education Examination",
    shortTitle: "SEE",
    institution: "International Joseph Public School",
    icon: School,
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="education-layout">
          <Reveal
            className="section-heading education-heading"
            amount={0.25}
          >
            <span className="section-kicker">
            ACADEMIC LIFE
            </span>

            <h2>A little bit of where I&apos;ve been learning.</h2>

            <p className="education-summary">
              My academic path started with science, moved toward computer
              science, and is still unfolding through study, building, and
              experimentation.
            </p>
          </Reveal>

          <div className="education-timeline">
            {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.number}
                className={`education-entry ${
                  item.current ? "is-current" : ""
                }`}
                amount={0.15}
                delay={index * 0.08}
              >
                <div className="education-year">
                  <span>{item.period}</span>
                </div>

                <div className="education-pin" aria-hidden="true">
                  <span />
                </div>

                <div className="education-paper">
                  {item.current && (
                    <Tape
                      className="education-tape"
                      rotation={2}
                    />
                  )}

                  <div className="education-number">
                    {item.number}
                  </div>

                  <div className="education-entry-icon">
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <div className="education-entry-content">
                    <span className="education-entry-label">
                      {item.current ? "CURRENTLY STUDYING" : "EDUCATION"}
                    </span>

                    <h3>{item.shortTitle}</h3>

                    <p className="education-degree">
                      {item.title}
                    </p>

                    <p className="education-institution">
                      {item.institution}
                    </p>

                    <span className="education-detail">
                      {item.detail}
                    </span>
                  </div>

                  {item.current && (
                    <Handwritten
                      className="education-current-note"
                      rotation={3}
                      size="1rem"
                    >
                  
                    </Handwritten>
                  )}
                </div>
              </Reveal>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
