import { ArrowUpRight } from "lucide-react";

const directionRotations = {
  up: -45,
  upRight: 0,
  northeast: 0,
  right: 45,
  down: 135,
  downRight: 90,
  southeast: 90,
  left: 225,
  downLeft: 180,
  southwest: 180,
  upLeft: 270,
  northwest: 270,
};

export default function Arrow({
  className = "",
  rotation = 0,
  direction = "upRight",
  label,
  children,
  size = 28,
  color = "currentColor",
  strokeWidth = 1.8,
  style,
  ...props
}) {
  const accessibleLabel = label ?? props["aria-label"];
  const directionRotation = directionRotations[direction] ?? 0;
  const content =
    children ?? <ArrowUpRight size={size} color={color} strokeWidth={strokeWidth} aria-hidden="true" />;

  return (
    <span
      {...props}
      className={["scrapbook-arrow", className].filter(Boolean).join(" ")}
      style={{
        display: "inline-flex",
        flexShrink: 0,
        color,
        lineHeight: 0,
        transform: `rotate(${rotation + directionRotation}deg)`,
        ...style,
      }}
      role={accessibleLabel ? "img" : undefined}
      aria-label={accessibleLabel}
      aria-hidden={accessibleLabel ? undefined : true}
    >
      {content}
    </span>
  );
}
