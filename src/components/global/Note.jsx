import { useState } from "react";

export default function Note({ position = "right", children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`note-container absolute top-1/2 z-30 flex -translate-y-1/2 items-center gap-2 ${position}-0`}
    >
      <button
        className={`flex h-5 w-5 items-center justify-center transition-transform duration-300`}
        onClick={() => setOpen((prev) => !prev)}
        title="Toggle Note"
      >
        <div
          className={`transition-transform ${
            position === "right" ? (open ? "rotate-180" : "") : open ? "" : "rotate-180"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            fill="currentColor"
            className="h-4 w-4 text-white"
          >
            <polygon points="0,6 12,0 12,12" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="max-w-xs rounded-2xl bg-white/80 p-4 text-sm shadow-md backdrop-blur-2xl transition-all duration-300">
          {children}
        </div>
      )}
    </div>
  );
}
