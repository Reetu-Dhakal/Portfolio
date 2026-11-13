import { motion, useReducedMotion } from "framer-motion";

export default function SplitText({ children, className = "", as: Component = "span" }) {
  const reduceMotion = useReducedMotion();
  const words = String(children).split(" ");

  return (
    <Component className={`split-text ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="split-text-word"
          initial={reduceMotion ? false : { opacity: 0, y: "100%" }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.12 + index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </Component>
  );
}
