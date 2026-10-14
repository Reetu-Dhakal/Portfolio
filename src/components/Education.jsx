import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { fadeUpVariant } from "../utils/motion";
import "./Education.css";

const timeline = [
  {
    period: "2023 – Present",
    kicker: "Currently Studying",
    title: "BSc. CSIT",
    subtitle: "Bachelor of Science in Computer Science and Information Technology",
    institution: "New Summit College (TU Affiliated)",
    current: true,
  },
  {
    // TODO: double-check these years
    period: "2018 – 2020",
    kicker: "Education",
    title: "Science (Bio-Math)",
    subtitle: "Higher Secondary Education",
    institution: "Reliance International College",
  },
  {
    period: "2017",
    kicker: "Education",
    title: "SEE",
    subtitle: "Secondary Education Examination",
    institution: "International Joseph Public School",
  },
];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="section-kicker">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">
            Formal university foundation supporting practical networking and cybersecurity exploration.
          </p>
        </motion.div>

        <div className="edu-timeline">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              className="edu-row"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              <span className="edu-period">{item.period}</span>

              <motion.article
                className={`edu-card ${item.current ? "edu-card--current" : ""}`}
                whileHover={{ x: -2, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div
                  className={`edu-icon-badge ${item.current ? "edu-icon-badge--current" : ""}`}
                  aria-hidden="true"
                >
                  {item.current ? <GraduationCap size={22} /> : <School size={22} />}
                </div>

                <div className="edu-card-content">
                  <span className="edu-kicker">{item.kicker}</span>
                  <h3 className="edu-title">{item.title}</h3>
                  <p className="edu-subtitle">{item.subtitle}</p>
                  <p className="edu-institution">{item.institution}</p>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}