import { motion } from "framer-motion";
const stats = [
  { value: "10+",  label: "Projects Built"   },
  { value: "15+",  label: "Technologies"     },
  { value: "3+",   label: "Years Learning"   },
  { value: "100%", label: "Passion & Drive"  },
];
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          {/* ─── Image ─── */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-img-stack">
              <div className="about-img-bg" />
              <img
                src="/hero_avatar.png"
                alt="Reetu Dhakal"
                className="about-img-main"
              />
            </div>
          </motion.div>
          {/* ─── Text ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">About Me</span>
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp}>
              Crafting code with{" "}
              <span className="accent">heart &amp; precision</span>
            </motion.h2>
            <motion.p className="section-desc" variants={fadeUp}>
              I'm Ritu Dhakal, a motivated BSc CSIT student and aspiring Full-Stack Developer from Nepal. 
              I enjoy building elegant, high-performance web applications that blend creativity with technology. 
              Whether it's designing intuitive user interfaces, developing scalable solutions, or exploring cybersecurity concepts, 
              I'm driven by a desire to learn, innovate, and create meaningful digital experiences.
            </motion.p>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "0.95rem",
                color: "var(--muted)",
                marginTop: "14px",
                lineHeight: "1.7",
              }}
            >
              <p>
                Passionate about learning and building, I am constantly exploring new technologies and industry best practices. From developing responsive web applications to enhancing user experiences and understanding cybersecurity principles, I strive to create solutions that are both impactful and reliable. Every project is an opportunity to refine my skills, embrace new challenges, and move one step closer to becoming a well-rounded software developer.
              </p>
            </motion.p>
            {/* Stats */}
            <motion.div className="about-info-grid" variants={fadeUp}>
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  className="info-chip"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} style={{ marginTop: "32px" }}>
              <a href="#contact" className="btn-primary">
                Let's Talk ✨
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}