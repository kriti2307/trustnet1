import { useState } from "react";
function TrackItem({ title }) {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm">
        
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center px-6 py-4 bg-yellow-50 hover:bg-yellow-100 transition"
        >
          <span className="font-semibold text-left text-gray-800">
            {title.toUpperCase()}
          </span>
  
          <span className={`text-blue-900 text-xl transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
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