import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "3+", label: "Years Learning" },
  { value: "100%", label: "Passion & Drive" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">

          {/* LEFT SIDE */}
          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">About Me</span>
            </motion.div>

            <motion.h2 className="section-title" variants={fadeUp}>
              Crafting code with <br />
              <span className="accent">heart &amp; precision</span>
            </motion.h2>

            <motion.p className="section-desc" variants={fadeUp}>
              I'm Ritu Dhakal, a motivated BSc CSIT student and aspiring
              Full-Stack Developer from Nepal. I enjoy building elegant,
              high-performance web applications that blend creativity with
              technology. Whether it's designing intuitive user interfaces,
              developing scalable solutions, or exploring cybersecurity
              concepts, I'm driven by a desire to learn, innovate, and create
              meaningful digital experiences.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="section-desc"
              style={{ marginTop: "20px" }}
            >
              Passionate about learning and building, I am constantly exploring
              new technologies and industry best practices. From developing
              responsive web applications to enhancing user experiences and
              understanding cybersecurity principles, I strive to create
              solutions that are both impactful and reliable.
            </motion.p>

            <motion.div variants={fadeUp} style={{ marginTop: "30px" }}>
              <a href="#contact" className="btn-primary">
                Let's Talk ✨
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="about-info-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                className="info-chip"
                whileHover={{ y: -8 }}
              >
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}