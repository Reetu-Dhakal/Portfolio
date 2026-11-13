import { useRef, useState } from "react";

export default function MagneticLink({ children, className = "", ...props }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
  });

  const handlePointerMove = (event) => {
    if (!enabled || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    setOffset({
      x: (event.clientX - (bounds.left + bounds.width / 2)) * 0.18,
      y: (event.clientY - (bounds.top + bounds.height / 2)) * 0.18,
    });
  };

  return (
    <a
      {...props}
      ref={ref}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      style={{
        ...props.style,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      {children}
    </a>
  );
}
