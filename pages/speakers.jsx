import React from "react";
import SpeakerCard from "../components/speakerCard";

const SPEAKERS = [
  {
    name: "Dr. Anupam Tiwari",
    designation: "Cyber Advisor, Ministry of Defence, Government of India",
    image: "/assets/anupam-tiwari.webp",
  },
  {
    name: "Apurva K Vangujar",
    designation: "Cyber Security Engineer, Jaguar Land Rover",
    image: "/assets/apurva.webp",
  },
  {
    name: "Dr. Somanath Tripathy",
    designation: "Department of Computer Science & Engineering, IIT Patna",
    image: "/assets/somanath-tripathy.webp",
  },
  {
    name: "Dr. Maanak Gupta",
    designation: "Department of Computer Science, Tennessee Tech University, TN, USA",
    image: "/assets/maanak-gupta.webp",
  },
  {
    name: "Dr. Chhagan Lal",
    designation: "Cybersecurity Researcher, CISaR Group, NTNU | EU CYBERUNITY Project",
    image: "/assets/chhagan-lal.webp",
  },
  {
    name: "Dr. Gang Li",
    designation: "Professor, Deakin University, School of Information Technology",
    image: "/assets/gang-li.webp",
  },
];

function Speakers() {
  return (
    <div className="w-full min-h-screen bg-trustnet-primary-dark">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-trustnet-lighter text-center mb-4">
            Our Eminent Speakers
          </h1>
          <div className="w-24 h-1 bg-trustnet-primary mx-auto mb-14 rounded-full"></div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
            {SPEAKERS.map((speaker, idx) => (
              <SpeakerCard
                key={idx}
                image={speaker.image}
                name={speaker.name}
                designation={speaker.designation}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Speakers;
