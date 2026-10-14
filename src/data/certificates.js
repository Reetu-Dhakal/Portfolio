/**
 * Learning, Courses & Certification Studies
 * Honest fresher representation distinguishing completed courses from active learning goals.
 */

export const learningItems = [
  {
    id: "tryhackme-pre-security",
    title: "Pre-Security & Cyber Fundamentals Path",
    provider: "TryHackMe",
    status: "Currently Learning",
    isCompleted: false,
    date: "Active Practice",
    description:
      "Hands-on interactive learning modules covering network fundamentals, the web and how it works, and fundamental defensive security concepts.",
    topics: ["Network Protocols", "Web Vulnerabilities", "Linux Command Line", "Defensive Security"],
    link: "https://tryhackme.com",
    linkLabel: "TryHackMe Platform",
  },
  {
    id: "cisco-packet-tracer",
    title: "Computer Networks & Packet Tracer Simulation",
    provider: "New Summit College / Academic Curriculum",
    status: "Completed Coursework Lab",
    isCompleted: true,
    date: "2024",
    description:
      "Practical university lab course dedicated to physical and logical network simulation, IPv4 subnetting calculations, and device configurations.",
    topics: ["Cisco Packet Tracer", "IPv4 Subnetting", "VLAN Configuration", "Router Setup"],
    link: null,
    linkLabel: null,
  },
  {
    id: "fullstack-curriculum",
    title: "Web Technology & Database Systems",
    provider: "BSc CSIT Curriculum / Tribhuvan University",
    status: "Completed Coursework Lab",
    isCompleted: true,
    date: "2024",
    description:
      "Comprehensive coursework on client-server architecture, database normalization, backend API development, and dynamic frontend rendering.",
    topics: ["Full-Stack Architecture", "Relational & NoSQL Databases", "REST APIs", "Modern JS"],
    link: null,
    linkLabel: null,
  },
  {
    id: "ccna-study-goal",
    title: "Cisco Certified Network Associate (CCNA 200-301) Study",
    provider: "Self-Paced Study Goal",
    status: "Currently Learning",
    isCompleted: false,
    date: "Target Exam Preparation",
    description:
      "Actively working through the CCNA syllabus covering network fundamentals, IP connectivity, IP services, and security fundamentals to prepare for future certification.",
    topics: ["IP Connectivity", "Routing Protocols", "Switching Mechanisms", "Network Assurance"],
    link: null,
    linkLabel: null,
  },
];

export default learningItems;
