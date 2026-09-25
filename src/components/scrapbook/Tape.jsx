export default function Tape({
  className = "",
  rotation = -4,
  label,
  children,
  width = "7rem",
  height = "1.65rem",
  color = "var(--ink)",
  style,
  ...props
}) {
  const content = children ?? label;
  const hasContent = content !== undefined && content !== null && content !== false;

  return (
    <span
      {...props}
      className={["scrapbook-tape", className].filter(Boolean).join(" ")}
      style={{
        position: "relative",
        display: "inline-flex",
        width,
        height,
        alignItems: "center",
        justifyContent: "center",
        padding: "0.2rem 0.65rem",
        overflow: "hidden",
        border: "1px solid rgba(32, 35, 31, 0.2)",
        background: "rgba(245, 216, 137, 0.82)",
        color,
        fontFamily: "var(--font-mono)",
        fontSize: "0.62rem",
        letterSpacing: "0.08em",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "uppercase",
        clipPath: "polygon(3% 8%, 97% 0, 100% 91%, 4% 100%)",
        opacity: 0.92,
        pointerEvents: "none",
        userSelect: "none",
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      aria-hidden={hasContent ? undefined : true}
    >
      {content}
    </span>
  );
}
