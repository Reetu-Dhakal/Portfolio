const stickerColors = {
  butter: "var(--butter)",
  coral: "var(--coral)",
  lilac: "var(--lilac)",
  sage: "var(--sage)",
  sky: "var(--sky)",
};

export default function Sticker({
  className = "",
  rotation = -6,
  label,
  children,
  tone = "butter",
  color,
  style,
  ...props
}) {
  const content = children ?? label;
  const hasContent = content !== undefined && content !== null && content !== false;
  const background = color ?? stickerColors[tone] ?? stickerColors.butter;

  return (
    <span
      {...props}
      className={["scrapbook-sticker", className].filter(Boolean).join(" ")}
      style={{
        display: "inline-grid",
        minWidth: "5.25rem",
        minHeight: "5.25rem",
        padding: "0.7rem",
        placeItems: "center",
        border: "1.5px solid var(--ink)",
        borderRadius: "48% 52% 45% 55% / 52% 45% 55% 48%",
        background,
        color: "var(--ink)",
        boxShadow: "3px 4px 0 var(--ink)",
        fontFamily: "var(--font-hand)",
        fontSize: "1.2rem",
        fontWeight: 600,
        lineHeight: 0.9,
        textAlign: "center",
        whiteSpace: "pre-line",
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      aria-hidden={hasContent ? undefined : true}
    >
      {content}
    </span>
  );
}
