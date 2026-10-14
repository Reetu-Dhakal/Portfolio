import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg-container" aria-hidden="true">
      <div className="bg-floating-orb orb-1" />
      <div className="bg-floating-orb orb-2" />
      <div className="bg-floating-orb orb-3" />

      <svg className="bg-floating-lines" viewBox="0 0 1440 900" fill="none">
        <path
          d="M-100 200 C300 100, 700 350, 1540 180"
          stroke="var(--bg-line-color, rgba(229, 229, 229, 0.45))"
          strokeWidth="1"
          strokeDasharray="6 6"
          className="bg-line-anim line-1"
        />
        <path
          d="M-50 650 C400 750, 950 500, 1500 700"
          stroke="var(--bg-line-color, rgba(229, 229, 229, 0.35))"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="bg-line-anim line-2"
        />
      </svg>
    </div>
  );
}