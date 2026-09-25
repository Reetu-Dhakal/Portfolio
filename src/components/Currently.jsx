import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import Reveal from "./ui/Reveal";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

export default function Currently() {
  return (
    <section id="exploring" className="exploring-section">
      <div className="container">
        <div className="exploring-layout">
          <Reveal className="section-heading section-heading-light exploring-copy" amount={0.25}>
            <span className="section-kicker">CURRENTLY EXPLORING</span>
            <h2>Tools change. The fundamentals stay...</h2>
          </Reveal>

          <Reveal className="exploring-cloud" amount={0.2}>
            <div className="exploring-notepad" aria-hidden="true">
            </div>
            <span className="cloud-label cloud-label-top"></span>
            <ul className="exploring-words" aria-label="Technical skills">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <li className={`exploring-word exploring-word-${index + 1}`} key={skill.name}>
                    <Icon className="exploring-word-icon" color={skill.color} aria-hidden="true" />
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
