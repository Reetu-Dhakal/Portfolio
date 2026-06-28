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

import {
  SiJavascript,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const orbit1 = [
  {
    name: "HTML",
    icon: <FaHtml5 color="#E34F26" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt color="#1572B6" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript color="#F7DF1E" />,
  },
];

const orbit2 = [
  {
    name: "React",
    icon: <FaReact color="#61DAFB" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#3C873A" />,
  },
  {
    name: "PHP",
    icon: <FaPhp color="#777BB4" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#4479A1" />,
  },
];

const orbit3 = [
  {
    name: "MongoDB",
    icon: <SiMongodb color="#47A248" />,
  },
  {
    name: "Python",
    icon: <FaPython color="#3776AB" />,
  },
  {
    name: "Java",
    icon: <FaJava color="#ED8B00" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt color="#F05032" />,
  },
  {
    name: "Figma",
    icon: <FaFigma color="#F24E1E" />,
  },
];
function Orbit({ skills, radius, duration, reverse = false }) {
  return (
    <motion.div
      className="orbit"
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={{
        width: radius * 2,
        height: radius * 2,
        x: "-50%",
        y: "-50%",
      }}
    >
      <div className="orbit-line"></div>

      {skills.map((skill, index) => {
        const angle = (index * 360) / skills.length;

        return (
          <div
            key={skill.name}
            className="planet"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `
                translate(-50%, -50%)
                rotate(${angle}deg)
                translate(${radius}px, 0px)
              `,
              transformOrigin: "center",
            }}
          >
          <motion.div
            className="planet-inner"
            whileHover={{ scale: 1.15 }}
            animate={{
              rotate: reverse ? [-angle, 360 - angle] : [-angle, -360 - angle],
            }}
            transition={{
              repeat: Infinity,
              duration,
              ease: "linear",
            }}
          >
            <div className="planet-icon">
              {skill.icon}
            </div>

            <span>{skill.name}</span>
          </motion.div>
          </div>
        );
      })}
    </motion.div>
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
            Technologies I've learned and use to build modern web
            applications.
          </p>
        </motion.div>

        {/* Solar System */}

        <div className="solar-system">

          {/* Center Laptop */}

          <motion.div
            className="center-sun"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaLaptopCode />
          </motion.div>

          {/* Orbit 1 */}

          <Orbit
            skills={orbit1}
            radius={120}
            duration={14}
          />

          {/* Orbit 2 */}

          <Orbit
            skills={orbit2}
            radius={210}
            duration={22}
            reverse
          />

          {/* Orbit 3 */}

          <Orbit
            skills={orbit3}
            radius={305}
            duration={30}
          />

        </div>

      </div>
    </section>
  );
}