function SpeakerCard({ image, name, designation }) {
    return (
      <div className="flex flex-col items-center text-center group">
        
        {/* Image */}
        <div className="w-56 h-56 overflow-hidden rounded-xl border-2 border-trustnet-light shadow-md transition-transform duration-300 group-hover:scale-105">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Name */}
        <h3 className="mt-4 font-bold text-lg text-white">
          {name}
        </h3>
  
        {/* Designation */}
        <p className="text-sm text-trustnet-lighter mt-1 max-w-xs">
          {designation}
        </p>
  
        {/* Icons */}
        <div className="flex gap-3 mt-3">
          <a
            href="#"
            className="text-trustnet-lighter hover:text-white text-lg"
          >
            🔗
          </a>
          <a
            href="#"
            className="text-trustnet-lighter hover:text-white text-lg"
          >
            ⧉
          </a>
        </div>
  
      </div>
    );
  }

  export default SpeakerCard;