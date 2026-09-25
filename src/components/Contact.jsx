import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Handwritten from "./scrapbook/Handwritten";
import Reveal from "./ui/Reveal";

const contactEmail = "dhakalreetu05@gmail.com";
const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Reetu-Dhakal", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ritu-d-563669300/", icon: FaLinkedin },
];

const initialForm = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status.type) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (form.company) {
      return;
    }

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill in your name, email, and message." });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ type: "sending", message: "Sending your message..." });

    if (contactEndpoint) {
      try {
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
          throw new Error("The contact endpoint returned an error.");
        }

        setForm(initialForm);
        setStatus({ type: "success", message: "Thanks — your message has been sent." });
      } catch {
        setStatus({
          type: "error",
          message: `I couldn't send that automatically. Email me directly at ${contactEmail}.`,
        });
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus({ type: "success", message: "Your email app should open with the message ready to send." });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-shell">
        <div className="contact-layout">
          <div className="contact-intro">
            <Reveal className="section-heading section-heading-light contact-heading" amount={0.2}>
              <span className="section-kicker">SAY HELLO</span>
              <h2>Got something<br /><em>to say?</em></h2>
            </Reveal>

            <div className="contact-link-grid">
              <a className="contact-link-card contact-email-card" href={`mailto:${contactEmail}`}>
                <span className="contact-link-icon"><Mail size={17} aria-hidden="true" /></span>
                <span className="contact-link-copy">
                  <small>Gmail / Email</small>
                  <strong>{contactEmail}</strong>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a className="contact-link-card" href={href} target="_blank" rel="noopener noreferrer" key={name}>
                  <span className="contact-link-icon"><Icon size={17} aria-hidden="true" /></span>
                  <span className="contact-link-copy">
                    <small>Profile</small>
                    <strong>{name}</strong>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
            <Reveal className="contact-copy" direction="right" distance={28}>
              <p>
                I&apos;m always happy to talk about projects, ideas, design, technology or whatever
                you&apos;re currently figuring out.
              </p>
              <a className="button button-primary" href={`mailto:${contactEmail}`}>
                Let&apos;s talk
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <Handwritten className="contact-handnote" rotation={-3} size="1.35rem"></Handwritten>
            </Reveal>
          </div>


          <Reveal className="contact-form-panel" direction="left" distance={30} delay={0.1}>
            <div className="contact-form-heading">
              <span className="section-kicker">OR SEND A MESSAGE</span>
            </div>

            <form
              className="contact-form"
              action={`mailto:${contactEmail}`}
              method="post"
              encType="text/plain"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-row">
                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={80}
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={120}
                    required
                  />
                </label>
              </div>
              <label>
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Write your message here..."
                  rows={5}
                  maxLength={2000}
                  required
                />
              </label>
              <input
                className="form-honeypot"
                name="company"
                type="text"
                value={form.company}
                onChange={updateField}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="form-actions">
                <button className="button button-primary" type="submit" disabled={status.type === "sending"}>
                  {status.type === "sending" ? "Sending..." : "Send message"}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </button>
              </div>
              {status.message ? (
                <p className={`form-status form-status-${status.type}`} role="status" aria-live="polite">
                  {status.message}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
