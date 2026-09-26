import { useState, useCallback, useRef } from "react";
import { projects } from "../../data/projects";
import Sticker from "./Sticker";
import Tape from "./Tape";
import "./Scrapbook.css";

const SPREADS = [
  { left: { kind: "index" }, right: { kind: "project", idx: 0 } },
  { left: { kind: "notes", idx: 0 }, right: { kind: "project", idx: 1 } },
  { left: { kind: "signoff" }, right: { kind: "signoff" } },
];
const TOTAL = SPREADS.length;

function ProjectSVG({ idx }) {
  const c = ["#9bae87", "#c9795b"][idx];
  const W = 300, H = 185;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", borderRadius: 1 }}>
      <defs><linearGradient id={`bg${idx}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: c + "1f" }} /><stop offset="100%" style={{ stopColor: "#f0e6d6" }} /></linearGradient></defs>
      <rect width={W} height={H} fill={`url(#bg${idx})`} />
      <rect x="0" y="0" width={W} height="22" fill={c} opacity="0.12" />
      <circle cx="10" cy="11" r="3.5" fill={c} opacity="0.35" /><circle cx="19" cy="11" r="3.5" fill={c} opacity="0.22" /><circle cx="28" cy="11" r="3.5" fill={c} opacity="0.1" />
      <rect x="14" y="42" width="50" height="7" rx="2" fill={c} opacity="0.25" />
      <rect x="14" y="56" width="180" height="5" rx="1" fill={c} opacity="0.1" />
      <rect x="14" y="66" width="140" height="5" rx="1" fill={c} opacity="0.08" />
      <rect x="14" y="76" width="160" height="5" rx="1" fill={c} opacity="0.06" />
      <rect x="14" y="95" width="70" height="35" rx="4" fill={c} opacity="0.15" />
      <rect x="90" y="95" width="70" height="35" rx="4" fill={c} opacity="0.1" />
      <rect x="14" y="145" width="270" height="22" rx="3" fill={c} opacity="0.2" />
      <rect x="18" y="150" width="110" height="5" rx="2" fill={c} opacity="0.15" />
      <text x={W / 2} y={H - 10} textAnchor="middle" fontFamily="cursive" fontSize="10" fill={c} opacity="0.45">{projects[idx].title}</text>
    </svg>
  );
}

function projectFront(idx) {
  const p = projects[idx];
  const tags = p.tags.map((t) => <span key={t} className="tech-tag">{t}</span>);
  return (
    <div className="page-inner">
      <span className="pagenum-stamp">0{idx + 1}</span>
      <Tape rotation={-3} width="4.5rem" height="0.85rem" className="tape-plain" style={{ top: 0, left: "10%" }} />
      <Tape rotation={6} width="3rem" height="0.7rem" className="tape-dotted" style={{ bottom: "22%", right: "6%" }} />
      <div className="project-meta"><span className="project-number">0{idx + 1}</span><span>{p.folderLabel}</span></div>
      <h3 className="project-title">{p.title}</h3>
      <p className="project-desc">{p.description.substring(0, 75)}&hellip;</p>
      <div className="tech-tags">{tags}</div>
      <a href={p.github} className="repo-link" target="_blank" rel="noopener noreferrer">Browse repo &rarr;</a>
      <div className="polaroid-wrap">
        <div className="polaroid">
          <ProjectSVG idx={idx} />
          <figcaption>project screenshot</figcaption>
        </div>
      </div>
      <Sticker tone="butter" rotation={-5} style={{ bottom: 8, right: 10, width: 44, height: 44, fontSize: "0.6rem" }}>{p.tags[0]}</Sticker>
      <span className="ink-stamp" style={{ top: 6, left: 6 }}>{p.folderLabel}</span>
    </div>
  );
}

function projectBack(idx) {
  const p = projects[idx];
  const note = `The creative process behind ${p.title} was deeply inspiring. Connecting artisans with their market felt meaningful &mdash; every feature told a story of community and craft.`;
  return (
    <div className="page-inner">
      <span className="note-label">REFLECTION</span>
      <p className="note-text">{note}</p>
      <Tape rotation={-5} width="2.8rem" height="0.65rem" className="tape-striped" style={{ top: 10, left: -2 }} />
      <Sticker tone="sage" rotation={-4} style={{ bottom: 8, left: 8, width: 40, height: 40, fontSize: "0.55rem" }}>{p.tags[0]}</Sticker>
      <p className="wrapper-text">project 0{idx + 1}</p>
    </div>
  );
}

function indexPage() {
  return (
    <div className="page-inner">
      <span className="note-label">INDEX</span>
      <h2 className="index-title">Things I&rsquo;ve Made</h2>
      <ul className="index-list">
        {projects.map((p, i) => (
          <li key={p.id} className="index-item">
            <span className="index-num">0{i + 1}</span>
            <span><strong>{p.title}</strong><br /><span className="index-type">{p.folderLabel}</span></span>
          </li>
        ))}
      </ul>
      <Tape rotation={4} width="2.8rem" height="0.65rem" className="tape-striped" style={{ top: 10, left: -2 }} />
      <p className="wrapper-text">click the fold to explore &rarr;</p>
    </div>
  );
}

function indexBack() {
  return (
    <div className="page-inner">
      <Sticker tone="butter" rotation={-6} style={{ width: 56, height: 56, fontSize: "0.7rem" }}>made with<br />curiosity</Sticker>
      <p className="wrapper-text">keep creating</p>
    </div>
  );
}

function notesPage(idx) {
  const p = projects[idx];
  const note = `The creative process behind ${p.title} was deeply inspiring. Connecting artisans with their market felt meaningful &mdash; every feature told a story of community and craft.`;
  return (
    <div className="page-inner">
      <span className="note-label">REFLECTION</span>
      <p className="note-text">{note}</p>
      <Tape rotation={-5} width="2.8rem" height="0.65rem" className="tape-striped" style={{ top: 10, left: -2 }} />
      <Sticker tone="sage" rotation={-4} style={{ bottom: 8, left: 8, width: 40, height: 40, fontSize: "0.55rem" }}>{p.tags[0]}</Sticker>
      <p className="wrapper-text">project 0{idx + 1}</p>
    </div>
  );
}

function signoffFront() {
  return (
    <div className="page-inner signoff-inner">
      <p className="signoff-text">the journey continues<br /><br /><span className="signoff-arrow">&rarr; next adventure</span></p>
      <Sticker tone="coral" rotation={-4} style={{ width: 46, height: 46, fontSize: "0.75rem", marginTop: 14 }}>★</Sticker>
      <p className="wrapper-text">made with curiosity</p>
    </div>
  );
}

function signoffBack() {
  return (
    <div className="page-inner signoff-inner">
      <p className="signoff-text">This scrapbook was created as a digital artifact.<br />All projects are real and open-source.<br /><br />See them on GitHub.</p>
      <a href="https://github.com/Reetu-Dhakal?tab=repositories" className="repo-link" target="_blank" rel="noopener noreferrer">View all repos &rarr;</a>
    </div>
  );
}

function renderContent(kind, idx) {
  switch (kind) {
    case "project": return projectFront(idx);
    case "project-back": return projectBack(idx);
    case "index": return indexPage();
    case "index-back": return indexBack();
    case "notes": return notesPage(idx);
    case "signoff": return signoffFront();
    case "signoff-back": return signoffBack();
    default: return null;
  }
}

export default function Scrapbook() {
  const [spread, setSpread] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const rightSlotRef = useRef(null);

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= TOTAL || idx === spread || flipping) return;
    setSpread(idx);
  }, [spread, flipping]);

  const flipNext = useCallback(() => {
    if (flipping || spread >= TOTAL - 1) return;
    setFlipping(true);
    const el = rightSlotRef.current;
    if (el) el.classList.add("flipping");
    setTimeout(() => {
      setSpread((s) => s + 1);
      if (el) el.classList.remove("flipping");
      setTimeout(() => setFlipping(false), 50);
    }, 380);
  }, [flipping, spread]);

  const flipPrev = useCallback(() => {
    if (flipping || spread <= 0) return;
    setSpread((s) => s - 1);
  }, [flipping, spread]);

  const sp = SPREADS[spread];

  return (
    <section id="projects" className="scrapbook-section">
      <div className="scrapbook-page">
        <h1>Things I&rsquo;ve <em>Made</em></h1>
        <p className="subtitle">a scrapbook journey</p>

        <div className="book-wrapper">
          <div className="book">
            <div className="spine" />
            <div className="spine-shadow-left" />
            <div className="spine-shadow-right" />
            <div className="ribbon-bookmark" />

            {SPREADS.map((_, si) => {
              const active = si === spread;
              const s = SPREADS[si];
              return (
                <div key={si} className={`spread-set ${active ? "spread-active" : "spread-inactive"}`}>
                  <div className="page-set-inner">
                    <div className="page-slot left-slot">
                      <div className="page-face page-front">{renderContent(s.left.kind, 0)}</div>
                      <div className="page-face page-back">{renderContent(s.left.kind === "signoff" ? "signoff-back" : "index-back", 0)}</div>
                    </div>
                    <div className="page-slot right-slot" ref={active ? rightSlotRef : null}>
                      <div className="page-face page-front">{renderContent(s.right.kind, s.right.idx)}</div>
                      <div className="page-face page-back">{renderContent(s.right.kind === "signoff" ? "signoff-back" : "project-back", s.right.idx)}</div>
                    </div>
                  </div>
                  {si < TOTAL - 1 && (
                    <div className="fold-corner right-corner" onClick={flipNext} role="button" aria-label="Flip page forward" tabIndex={0}>
                      <div className="fold-tri" /><div className="fold-dot" />
                    </div>
                  )}
                  {si > 0 && (
                    <div className="fold-corner left-corner" onClick={flipPrev} role="button" aria-label="Flip page back" tabIndex={0}>
                      <div className="fold-tri" /><div className="fold-dot" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="scrapbook-controls">
          <button onClick={() => goTo(spread - 1)} disabled={spread === 0} aria-label="Previous page">&larr; Back</button>
          <span className="page-counter">{spread + 1} / {TOTAL}</span>
          <button onClick={() => goTo(spread + 1)} disabled={spread >= TOTAL - 1} aria-label="Next page">Next &rarr;</button>
        </div>
      </div>
    </section>
  );
}
