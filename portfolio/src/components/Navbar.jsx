import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between glass rounded-2xl px-6 py-4">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
          >
            Reetu.
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-gray-300 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              className="primary-btn"
            >
              Resume
            </a>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 glass rounded-2xl p-6"
          >
            <div className="flex flex-col gap-5">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-pink-400 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                className="primary-btn text-center"
              >
                Resume
              </a>

            </div>
          </motion.div>
        )}

      </div>
    </motion.nav>
  );
}