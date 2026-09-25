export default function Handwritten({
  className = "",
  rotation = -2,
  label,
  children,
  color = "var(--ink)",
  size = "1.25rem",
  style,
  ...props
}) {
  const content = children ?? label;

  return (
    <span
      {...props}
      className={["scrapbook-handwritten", className].filter(Boolean).join(" ")}
      style={{
        display: "inline-block",
        color,
        fontFamily: "var(--font-hand)",
        fontSize: size,
        fontWeight: 600,
        lineHeight: 1,
        whiteSpace: "pre-wrap",
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      {content}
    </span>
  );
}
