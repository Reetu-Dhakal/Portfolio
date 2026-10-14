import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const touchQuery = window.matchMedia("(hover: none) or (pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    return !touchQuery.matches && !motionQuery.matches;
  });

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("select"))
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${visible ? "active" : ""} ${hovering ? "hovering" : ""}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      aria-hidden="true"
    />
  );
}