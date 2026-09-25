export default function Polaroid({
  className = "",
  rotation = -2,
  label,
  image,
  imageSrc,
  imageAlt,
  alt,
  imageProps = {},
  children,
  width = "min(100%, 20rem)",
  style,
  ...props
}) {
  const resolvedImageProps = imageProps ?? {};
  const source = imageSrc ?? (typeof image === "string" ? image : image?.src);
  const resolvedAlt = imageAlt ?? alt ?? image?.alt ?? "";
  const imageNode = source ? (
    <img
      src={source}
      alt={resolvedAlt}
      loading="lazy"
      decoding="async"
      style={{
        display: "block",
        width: "100%",
        aspectRatio: "1 / 1",
        objectFit: "cover",
      }}
      {...resolvedImageProps}
    />
  ) : (
    image || (
      <span
        aria-hidden="true"
        style={{
          display: "grid",
          width: "100%",
          aspectRatio: "1 / 1",
          placeItems: "center",
          background: "var(--paper-deep)",
          color: "var(--muted)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label || "image"}
      </span>
    )
  );
  const hasCaption =
    (label !== undefined && label !== null) || (children !== undefined && children !== null);

  return (
    <figure
      {...props}
      className={["scrapbook-polaroid", className].filter(Boolean).join(" ")}
      style={{
        width,
        maxWidth: "100%",
        margin: 0,
        padding: "0.65rem 0.65rem 0.8rem",
        border: "1px solid var(--line)",
        background: "var(--paper-light)",
        boxShadow: "5px 6px 0 var(--ink)",
        color: "var(--ink)",
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      <div
        style={{
          display: "grid",
          minHeight: "8rem",
          placeItems: "center",
          overflow: "hidden",
          background: "var(--paper-deep)",
        }}
      >
        {imageNode}
      </div>
      {hasCaption ? (
        <figcaption
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35rem 0.75rem",
            justifyContent: "center",
            marginTop: "0.7rem",
            color: "var(--ink-soft)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            lineHeight: 1.3,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {label}
          {children}
        </figcaption>
      ) : null}
    </figure>
  );
}
