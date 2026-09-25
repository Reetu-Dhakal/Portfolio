export default function PaperNote({
  className = "",
  rotation = 2,
  label,
  children,
  style,
  ...props
}) {
  const content = children ?? label;
  const hasLabel = label !== undefined && label !== null && label !== "";
  const hasChildren = children !== undefined && children !== null && children !== false;

  return (
    <div
      {...props}
      className={["scrapbook-paper-note", className].filter(Boolean).join(" ")}
      style={{
        position: "relative",
        width: "min(100%, 23rem)",
        maxWidth: "100%",
        padding: "1.1rem 1.25rem 1.25rem",
        border: "1px solid var(--line)",
        backgroundColor: "var(--paper-light)",
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0, transparent 1.7rem, rgba(32, 35, 31, 0.08) 1.75rem, transparent 1.8rem)",
        boxShadow: "4px 5px 0 var(--ink)",
        color: "var(--ink)",
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      {hasLabel && hasChildren ? (
        <span
          style={{
            display: "block",
            marginBottom: "0.65rem",
            color: "var(--coral)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            lineHeight: 1.2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
      ) : null}
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.95rem",
          lineHeight: 1.65,
        }}
      >
        {content}
      </div>
    </div>
  );
}
