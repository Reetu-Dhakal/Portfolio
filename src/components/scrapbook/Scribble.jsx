const defaultPath = "M2 16 C18 7 31 22 48 13 S78 6 95 14 S126 23 158 8";

export default function Scribble({
  className = "",
  rotation = 0,
  label,
  children,
  path = defaultPath,
  d,
  width = "100%",
  height = "1.5rem",
  color = "var(--coral)",
  strokeWidth = 3,
  viewBox = "0 0 160 24",
  style,
  ...props
}) {
  const pathData = d ?? path;
  const hasChildren = children !== undefined && children !== null && children !== false;

  return (
    <span
      {...props}
      className={["scrapbook-scribble", className].filter(Boolean).join(" ")}
      style={{
        display: "inline-flex",
        width,
        maxWidth: "100%",
        alignItems: "center",
        overflow: "visible",
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={!label && !hasChildren ? true : undefined}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox={viewBox}
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height, overflow: "visible" }}
      >
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {children}
    </span>
  );
}
