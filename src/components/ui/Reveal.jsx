import { motion, useReducedMotion } from "framer-motion";

function getOffset(direction, distance) {
  if (direction === "up") {
    return { y: distance };
  }

  if (direction === "down") {
    return { y: -distance };
  }

  if (direction === "left") {
    return { x: distance };
  }

  if (direction === "right") {
    return { x: -distance };
  }

  return {};
}

export default function Reveal({
  children,
  className = "",
  direction = "up",
  distance = 24,
  delay = 0,
  duration = 0.65,
  once = true,
  amount = 0.2,
  rotation = 0,
  label,
  style,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const offset = getOffset(direction, distance);
  const initial = reduceMotion ? false : { opacity: 0, ...offset, rotate: rotation };
  const visible = { opacity: 1, x: 0, y: 0, rotate: rotation };

  return (
    <motion.div
      {...props}
      className={["reveal", className].filter(Boolean).join(" ")}
      initial={initial}
      whileInView={visible}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
      aria-label={label}
    >
      {children}
    </motion.div>
  );
}
