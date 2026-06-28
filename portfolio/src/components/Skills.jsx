import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb } from "react-icons/si";

const orbit1 = [
  { name: "HTML",       icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS",        icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
];

const orbit2 = [
  { name: "React",   icon: <FaReact color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "PHP",     icon: <FaPhp color="#777BB4" /> },
  { name: "MySQL",   icon: <SiMysql color="#4479A1" /> },
];

const orbit3 = [
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Python",  icon: <FaPython color="#3776AB" /> },
  { name: "Java",    icon: <FaJava color="#ED8B00" /> },
  { name: "Git",     icon: <FaGitAlt color="#F05032" /> },
  { name: "Figma",   icon: <FaFigma color="#F24E1E" /> },
];

// ICON_HALF = half the planet-icon size (60px / 2 = 30px)
const ICON_HALF = 30;

/**
 * Orbit — renders one dashed ring + one rotating arm per planet.
 *
 * Each planet arm is a zero-size div sitting at the solar-system centre.
 * It rotates around transformOrigin "0 0" (= the centre).
 * A plain <div> at the arm's tip is positioned with fixed px offsets so
 * the planet icon is centred exactly on the orbit circle.
 * An inner motion.div counter-rotates at the same speed to keep icons upright.
 */
function Orbit({ skills, radius, duration, reverse = false }) {
  return (
    <>
      {/* ── static dashed ring ── */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: radius * 2,
          height: radius * 2,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "2px dashed rgba(255,180,210,0.45)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── one arm per planet ── */}
      {skills.map((skill, index) => {
        const startAngle = (index * 360) / skills.length;

        return (
          <motion.div
            key={skill.name}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 0,
              height: 0,
              // rotate around the top-left corner = solar-system centre
              transformOrigin: "0 0",
              zIndex: 2,
            }}
            animate={{
              rotate: reverse
                ? [startAngle, startAngle - 360]
                : [startAngle, startAngle + 360],
            }}
            transition={{ repeat: Infinity, duration, ease: "linear" }}
          >
            {/*
              Plain div — NOT a motion.div so Framer Motion never touches
              its transform. Fixed px offsets centre the icon on the orbit:
                left = radius - ICON_HALF  →  icon centre at (radius, 0)
                top  = -ICON_HALF          →  icon centre at vertical 0
            */}
            <div
              style={{
                position: "absolute",
                left: radius - ICON_HALF,
                top: -ICON_HALF,
              }}
            >
              {/* Counter-rotates so the icon always faces up */}
              <motion.div
                className="planet-group"
                animate={{
                  rotate: reverse
                    ? [-startAngle, -startAngle + 360]
                    : [-startAngle, -startAngle - 360],
                }}
                transition={{ repeat: Infinity, duration, ease: "linear" }}
                whileHover={{ scale: 1.15 }}
              >
                <div className="planet-icon">{skill.icon}</div>
                <span className="planet-label">{skill.name}</span>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">

        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">TECH STACK</span>
          <h2 className="section-title">
            Tools I <span className="accent">work with</span>
          </h2>
          <p className="section-desc">
            Technologies I've learned and use to build modern web applications.
          </p>
        </motion.div>

        {/* Solar System */}
        <div className="solar-system">

          {/* Centre sun */}
          <motion.div
            className="center-sun"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaLaptopCode />
          </motion.div>

          {/* Orbits — radii chosen so icon circles never overlap each other */}
          <Orbit skills={orbit1} radius={130} duration={14} />
          <Orbit skills={orbit2} radius={240} duration={22} reverse />
          <Orbit skills={orbit3} radius={355} duration={30} />

        </div>
      </div>
    </section>
  );
}