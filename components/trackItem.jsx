import { useState } from "react";

function TrackItem({ title, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-trustnet-bg-light rounded-xl overflow-hidden shadow-sm bg-white">
      
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 bg-trustnet-bg hover:bg-trustnet-bg-light transition"
      >
        {/* Left side: Icon + Title */}
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="text-trustnet-primary text-2xl flex-shrink-0">
            {icon}
          </div>
          
          {/* Title */}
          <span className="font-semibold text-left text-gray-800">
            {title.toUpperCase()}
          </span>
        </div>

        {/* Right side: Dropdown arrow */}
        <span className={`text-trustnet-primary text-xl transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open && (
        <div className="px-6 py-4 bg-white text-gray-600 text-sm leading-relaxed">
          Topics may include advanced research papers, case studies, and
          innovative solutions related to {title.toLowerCase()}.
        </div>
      )}

    </div>
  );
}

export default TrackItem;
