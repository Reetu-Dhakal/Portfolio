/**
 * Skills Data
 * Tools & platforms with actual icons for networking & cybersecurity learning.
 */

export const skillGroups = [
  {
    id: "networking",
    title: "Networking",
    icon: "Network",
    description: "Core communication architecture, addressing, and fundamental routing protocols.",
    skills: [
      { name: "TCP/IP Protocol Suite", level: "Familiar" },
      { name: "OSI 7-Layer Model", level: "Familiar" },
      { name: "DNS & DHCP Services", level: "Familiar" },
      { name: "IPv4 Addressing & Subnetting", level: "Practiced" },
      { name: "Routing & Switching Fundamentals", level: "Learning" },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "Shield",
    description: "Defensive concepts, secure access controls, and system auditing fundamentals.",
    skills: [
      { name: "Linux Fundamentals & CLI", level: "Practiced" },
      { name: "Network Security Concepts", level: "Learning" },
      { name: "Core Security Principles (CIA Triad)", level: "Familiar" },
      { name: "Vulnerability Assessment Fundamentals", level: "Learning" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "Terminal",
    description: "Hands-on simulators, packet inspection, learning platforms, and virtualization tools.",
    skills: [
      { name: "Cisco Packet Tracer", level: "Practiced", icon: "Network" },
      { name: "Wireshark", level: "Learning", icon: "Search" },
      { name: "Nmap", level: "Learning", icon: "Radar" },
      { name: "Linux (Kali/Ubuntu)", level: "Practiced", icon: "Terminal" },
      { name: "TryHackMe", level: "Practiced", icon: "Brain" },
      { name: "Hack The Box", level: "Learning", icon: "Box" },
      { name: "VirtualBox", level: "Practiced", icon: "Cpu" },
      { name: "Burp Suite", level: "Learning", icon: "Shield" },
    ],
  },
  {
    id: "development",
    title: "Development",
    icon: "Code",
    description: "Languages, runtime environments, and database foundations from coursework.",
    skills: [
      { name: "JavaScript", level: "Practiced" },
      { name: "React", level: "Practiced" },
      { name: "Node.js", level: "Familiar" },
      { name: "Express.js", level: "Familiar" },
      { name: "MongoDB", level: "Familiar" },
      { name: "REST APIs", level: "Familiar" },
    ],
  },
];

export default skillGroups;