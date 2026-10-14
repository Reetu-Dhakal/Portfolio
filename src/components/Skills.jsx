import { motion } from "framer-motion";
import {
  SiCisco,
  SiWireshark,
  SiKalilinux,
  SiTryhackme,
  SiHackthebox,
  SiVirtualbox,
  SiBurpsuite,
} from "react-icons/si";
import { Terminal } from "lucide-react";
import { fadeUpVariant, staggerContainer, staggerItem } from "../utils/motion";
import "./Skills.css";

const tools = [
  { name: "Cisco Packet Tracer", icon: SiCisco, color: "#1BA0D7" },
  { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
  { name: "Nmap", icon: Terminal, color: "#4B8BBE" },
  { name: "Linux (Kali/Ubuntu)", icon: SiKalilinux, color: "#557C94" },
  { name: "TryHackMe", icon: SiTryhackme, color: "#212C42" },
  { name: "Hack The Box", icon: SiHackthebox, color: "#9FEF00" },
  { name: "VirtualBox", icon: SiVirtualbox, color: "#183153" },
  { name: "Burp Suite", icon: SiBurpsuite, color: "#FF6633" },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="section-kicker">Tools & Platforms</span>
          <h2 className="section-title">Hands-on Tools I Use</h2>
        </motion.div>

        <motion.ul
          className="tools-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.li key={tool.name} variants={staggerItem}>
                <div className="tool-item">
                  <div className="tool-icon" aria-hidden="true" style={{ color: tool.color }}>
                    <Icon size={24} />
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}