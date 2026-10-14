/**
 * Framer Motion Animation Variants & Presets
 * Designed for clean, responsive, and performance-minded transitions.
 */

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: custom * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const microHover = {
  whileHover: { y: -2, transition: { duration: 0.18, ease: "easeOut" } },
  whileTap: { y: 0, scale: 0.98, transition: { duration: 0.1 } },
};

export const iconHover = {
  whileHover: { scale: 1.12, y: -2, transition: { duration: 0.15 } },
  whileTap: { scale: 0.95 },
};
