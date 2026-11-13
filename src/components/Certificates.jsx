import { motion } from "framer-motion";
import { learningItems } from "../data/certificates";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TiltCard from "./TiltCard";
import { fadeUpVariant, staggerContainer, staggerItem } from "../utils/motion";
import "./Certificates.css";

export default function Certificates() {
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
          <h2 className="section-title">Learning & Certifications</h2>
          <p className="section-desc">
            University coursework completed and hands-on learning platforms I am actively studying as a fresher.
          </p>
        </motion.div>

        <div className="certificates-carousel-wrapper" ref={scrollContainerRef}>
          <button
            type="button"
            className="carousel-nav prev"
            onClick={(e) => {
              e.preventDefault();
              scrollLeft(e.currentTarget.parentElement.querySelector(".certificates-carousel"));
            }}
            aria-label="Scroll certificates left"
          >
            <ChevronLeft size={20} />
          </button>

          <motion.div
            className="certificates-carousel"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {learningItems.map((item) => (
              <motion.div key={item.id} variants={staggerItem} className="certificate-slide">
                <TiltCard maxTilt={5} scale={1.01}>
                  <article className={`certificate-card ${item.isCompleted ? "is-completed" : "is-learning"}`}>
                    <div className="certificate-image-wrapper">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={`${item.title} certificate`}
                          className="certificate-image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="certificate-image-placeholder">
                          <span className="placeholder-text">{item.title.split(" ")[0]}</span>
                        </div>
                      )}
                    </div>

                    <div className="certificate-content">
                      <h3 className="certificate-title">{item.title}</h3>
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
              scrollRight(e.currentTarget.parentElement.querySelector(".certificates-carousel"));
            }}
            aria-label="Scroll certificates right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
