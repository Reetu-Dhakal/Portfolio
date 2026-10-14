import { useState, useEffect } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [opacity, setOpacity] = useState(0);
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const isTouch = window.matchMedia("(hover: none) or (pointer: coarse)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !isTouch && !isReduced;
  });

  useEffect(() => {
    if (!enabled) return;

    const onPointerMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const onPointerLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="cursor-glow-overlay"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity,
        transition: "opacity 0.4s ease",
        background: `radial-gradient(650px circle at ${pos.x}px ${pos.y}px, var(--glow-color, rgba(23, 23, 23, 0.04)), transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}