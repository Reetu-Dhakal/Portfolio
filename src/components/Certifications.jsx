import { useState } from "react";
import { FolderOpen } from "lucide-react";
import Reveal from "./ui/Reveal";

const certificateFolders = [
  {
    id: "courses",
    name: "Courses",
    description: "Formal courses and structured learning.",
  },
  {
    id: "workshops",
    name: "Workshops",
    description: "Hands-on workshops and practical sessions.",
  },
  {
    id: "others",
    name: "Others",
    description: "Additional learning and achievements.",
  },
];

export default function Certifications() {
  const [activeFolder, setActiveFolder] = useState(null);
  const selectedFolder = certificateFolders.find((folder) => folder.id === activeFolder);

  const toggleFolder = (folderId) => {
    setActiveFolder((currentFolder) => (currentFolder === folderId ? null : folderId));
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <Reveal className="section-heading certifications-heading" amount={0.25}>
          <span className="section-kicker"> CERTIFICATIONS</span>
          <h2>Learning I can point to.</h2>
        </Reveal>

        <div className="certifications-layout">
          <Reveal className="certifications-folders" amount={0.2} delay={0.1}>
            {certificateFolders.map((folder) => (
              <button
                className="certification-folder"
                key={folder.id}
                type="button"
                aria-label={`Preview ${folder.name} certificates`}
                onClick={() => toggleFolder(folder.id)}
              >
                <FolderOpen className="certificate-folder-icon" aria-hidden="true" />
                <span className="certificate-folder-name">{folder.name}</span>
              </button>
            ))}
          </Reveal>
        </div>
      </div>

      {selectedFolder && (
        <div
          className="certificate-preview-backdrop"
          role="presentation"
          onClick={() => setActiveFolder(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setActiveFolder(null);
            }
          }}
          onMouseEnter={() => setActiveFolder(selectedFolder.id)}
          onMouseLeave={() => setActiveFolder(null)}
        >
          <div
            className="certificate-preview"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-preview-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="certificate-preview-close"
              type="button"
              aria-label="Close certificate preview"
              onClick={() => setActiveFolder(null)}
            >
              ×
            </button>
            <span className="certificate-preview-label">CERTIFICATE PREVIEW</span>
            <span className="certificate-preview-seal" aria-hidden="true">✦</span>
            <h3 id="certificate-preview-title">{selectedFolder.name}</h3>
            <p>{selectedFolder.description}</p>
            <span className="certificate-preview-status">IN PROGRESS</span>
            <small>Completed certificates will be added here.</small>
          </div>
        </div>
      )}
    </section>
  );
}
