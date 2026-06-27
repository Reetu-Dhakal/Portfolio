import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
const contactDetails = [
  {
    icon:  <Mail size={18} />,
    label: "Email",
    value: "dhakalreetu05@gmail.com",
    href:  "mailto:dhakalreetu05@gmail.com",
  },
  {
    icon:  <Phone size={18} />,
    label: "Phone",
    value: "+977 9765964623",
    href:  "tel:+9779765964623",
  },
  {
    icon:  <MapPin size={18} />,
    label: "Location",
    value: "Kathmandu, Nepal",
    href:  null,
  },
];
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    /* TODO: wire to your backend / EmailJS */
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* ─── Left ─── */}
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.span className="section-tag" variants={fadeUp}>
              Get In Touch
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              Let's work <span className="accent">together</span>
            </motion.h2>
            <motion.p className="section-desc" variants={fadeUp}>
              I'm a BSc CSIT student with a strong interest in Full Stack Development, Cybersecurity, and emerging technologies. 
              I'm currently seeking internship and entry-level opportunities where I can apply my skills, contribute to meaningful 
              projects, and continue growing as a developer.
              
              Whether you have an opportunity, a collaboration idea, or simply want to connect, I'd be happy to hear from you.
            </motion.p>
            <motion.div className="contact-details" variants={fadeUp}>
              {contactDetails.map((d) => (
                <div key={d.label} className="contact-detail-item">
                  <div className="contact-detail-icon">{d.icon}</div>
                  <div className="contact-detail-text">
                    <strong>{d.label}</strong>
                    {d.href ? (
                      <a
                        href={d.href}
                        style={{ color: "var(--ink-2)", transition: "color .25s" }}
                        onMouseEnter={(e) => (e.target.style.color = "var(--rose)")}
                        onMouseLeave={(e) => (e.target.style.color = "var(--ink-2)")}
                      >
                        <span>{d.value}</span>
                      </a>
                    ) : (
                      <span>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          {/* ─── Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="form-input"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@gmail.com"
                    className="form-input"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Let's work together!"
                  className="form-input"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  className="form-input"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? (
                  "Message Sent! "
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}