import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { init, send } from "@emailjs/browser";
import { fadeUpVariant } from "../utils/motion";
import "./Contact.css";

const EMAIL = "dhakalreetu05@gmail.com";

// EmailJS config - REPLACE THESE WITH YOUR ACTUAL VALUES
const EMAILJS_PUBLIC_KEY = "uIGl13-5BvUjNT-p1";      // From EmailJS Account > API Keys
const EMAILJS_SERVICE_ID = "service_fe339wr";      // From EmailJS Email Services (Gmail)
const EMAILJS_TEMPLATE_ID = "template_i5ous3e";    // From EmailJS Email Templates

init(EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState({ error: "", success: "", sending: false });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ error: "", success: "", sending: true });

    if (!form.name.trim()) {
      setFormState({ error: "Please enter your name.", success: "", sending: false });
      return;
    }
    if (!validateEmail(form.email.trim())) {
      setFormState({ error: "Please enter a valid email address.", success: "", sending: false });
      return;
    }
    if (!form.message.trim()) {
      setFormState({ error: "Please write your message.", success: "", sending: false });
      return;
    }

    try {
      await send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: EMAIL,
      });

      setFormState({
        error: "",
        success: "Message sent successfully! I'll get back to you soon.",
        sending: false,
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setFormState({
        error: "Failed to send message. Please try again or email me directly.",
        success: "",
        sending: false,
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        {/* Left: heading, links, intro, CTA */}
        <motion.div
          className="contact-left"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="contact-kicker">Say hello</span>
          <h2 className="contact-title">
            Got something
            <span className="contact-title-accent">to say?</span>
          </h2>

          <div className="contact-icons">
            <a
              className="contact-icon-link contact-icon-gmail"
              href={`mailto:${EMAIL}`}
              aria-label="Send me an email"
              title="Email"
            >
              <SiGmail size={28} aria-hidden="true" />
            </a>
            <a
              className="contact-icon-link contact-icon-github"
              href="https://github.com/Reetu-Dhakal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <FaGithub size={30} aria-hidden="true" />
            </a>
            <a
              className="contact-icon-link contact-icon-linkedin"
              href="https://www.linkedin.com/in/ritu-d-563669300/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedin size={30} aria-hidden="true" />
            </a>
          </div>

          <p className="contact-intro">
            I'm always happy to talk about projects, ideas, networking, security,
            or whatever you're currently figuring out.
          </p>

          <a className="contact-btn" href={`mailto:${EMAIL}`}>
            Let's talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </motion.div>

        {/* Right: form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="contact-form-kicker">Or send a message</span>

          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows={6}
              placeholder="Write your message here..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {formState.error && (
            <p className="contact-feedback contact-feedback-error" role="alert">
              {formState.error}
            </p>
          )}
          {formState.success && (
            <p className="contact-feedback contact-feedback-ok" role="status">
              {formState.success}
            </p>
          )}

          <button type="submit" className="contact-btn" disabled={formState.sending}>
            {formState.sending ? "Sending..." : "Send message"}
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}