import { motion } from "framer-motion";
import { learningItems } from "../data/certificates";
import { BookOpen, CheckCircle2, Clock, ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";
import { fadeUpVariant, staggerContainer, staggerItem } from "../utils/motion";
import "./Certificates.css";

export default function Certificates() {
  return (
    <section id="learning" className="section section-alt certificates-section">
      <div id="certificates" style={{ position: "absolute", top: 0 }} aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="section-kicker">Skill Development</span>
          <h2 className="section-title">Learning &amp; Certifications</h2>
          <p className="section-desc">
            University coursework completed and hands-on learning platforms I am actively studying as a fresher.
          </p>
        </motion.div>

        <motion.div
          className="learning-cards-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {learningItems.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <TiltCard maxTilt={5} scale={1.015}>
                <article className={`learning-card-item ${item.isCompleted ? "is-completed" : "is-learning"}`}>
                  <div className="learning-card-top">
                    <span className="learning-provider-tag">{item.provider}</span>
                    <span className={`badge-status ${item.isCompleted ? "completed" : "learning"}`}>
                      {item.isCompleted ? (
                        <><CheckCircle2 size={13} /> {item.status}</>
                      ) : (
                        <><Clock size={13} /> {item.status}</>
                      )}
                    </span>
                  </div>

                  <h3 className="learning-item-title">{item.title}</h3>
                  <p className="learning-item-desc">{item.description}</p>

                  <div className="learning-topics-group">
                    {item.topics.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="learning-card-bottom">
                    <span className="learning-date-info">
                      <BookOpen size={13} /> {item.date}
                    </span>

                    {item.link && (
                      <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{item.linkLabel || "View Platform"}</span>
                        <ExternalLink size={12} className="btn-arrow" />
                      </motion.a>
                    )}
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
