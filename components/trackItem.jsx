function TrackItem({ title, topics = [], description, isOpen, onToggle }) {
  return (
    <div className="border border-trustnet-bg-light rounded-xl overflow-hidden shadow-sm bg-white">

      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4 bg-trustnet-bg hover:bg-trustnet-bg-light transition"
      >
        <span className="font-semibold text-gray-800">
          {title}
        </span>

        <span className={`text-trustnet-primary text-xl transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="px-6 py-4 text-gray-600 text-sm">

          {description && (
            <p className="italic mb-3">{description}</p>
          )}

          <ul className="space-y-1">
            {topics.map((topic, i) => (
              <li key={i}>➤ {topic}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}

export default TrackItem;
