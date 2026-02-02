import React from "react";

const ORGANIZING_COMMITTEE = [
  { name: "Mr. S. Vaitheeswaran", role: "Chief Patron", designation: "Chairperson", image: "S-Vaitheeswaran.webp" },
  { name: "Prof. Dr. N. N. Sharma", role: "Patron", designation: "President", image: "dr-nnsharma.webp" },
  { name: "Dr. Karunakar A Kotegar", role: "Co-Patron", designation: "Pro-President", image: "karunakar-kotegar.webp" },
  { name: "Dr. Amit Soni", role: "Co-Patron", designation: "Registrar", image: "amit-soni.webp" },
  { name: "Prof. Nitu Bhatnagar", role: "Co-Patron", designation: "Provost", image: "Nitu-Bhatnagar.webp" },
  { name: "Prof. Dr. Kuldip Singh Sangwan", role: "General Chair", designation: "Dean – Engineering", image: "Dr-Kuldip-Singh.webp" },
  { name: "Dr. Chhatar Singh Lamba", role: "General Chair", designation: "Associate Dean", image: "cslamba.webp" },
  { name: "Prof. Dr. Neha Chaudhary", role: "Program Chair", designation: "HoD CSE", image: "Neha-Chaudhary.webp" },
  { name: "Dr. U. S. Rawat", role: "Program Co-Chair", designation: "Professor", image: "us-rawat.webp" },
  { name: "Dr. Satyabrata Roy", role: "Program Co-Chair", designation: "Associate Professor", image: "Dr-Satyabrata-Roy.webp" },
  { name: "Dr. Mahesh Jangid", role: "Program Co-Chair", designation: "Associate Professor", image: "Mahesh-Jangid.webp" },
  { name: "Dr. Amit Garg", role: "Organizing Chair", designation: "Associate Professor", image: "amit-garg.webp" },
  { name: "Dr. Ankur Pandey", role: "Organizing Chair", designation: "Assistant Professor", image: "ankur-pandey.webp" },
  { name: "Dr. Amit Kumar Gupta", role: "Organizing Co-Chair", designation: "Assistant Professor", image: "amit-kumar-gupta.webp" },
  { name: "Dr. Neetu Gupta", role: "Organizing Co-Chair", designation: "Assistant Professor", image: "neetu-gupta.webp" },
  { name: "Dr. Sayar Singh", role: "Publicity Chair", designation: "Associate Professor", image: "sayar-singh.webp" },
  { name: "Dr. Usha Jain", role: "Publicity Chair", designation: "Assistant Professor", image: "usha-jain.webp" },
  { name: "Dr. Surbhi Sharma", role: "Publicity Chair", designation: "Assistant Professor", image: "surbhi-sharma.webp" },
  { name: "Dr. Satpal Singh Kushwaha", role: "Technical Chair", designation: "Assistant Professor", image: "satpal-singh-kushwaha.webp" },
  { name: "Dr. Lokesh Sharma", role: "Technical Chair", designation: "Associate Professor", image: "lokesh-sharma.webp" },
  { name: "Dr. Sumit Srivastava", role: "Technical Chair", designation: "Assistant Professor", image: "sumit-srivastava.webp" },
  { name: "Dr. Rishi Gupta", role: "Finance Chair", designation: "Associate Professor", image: "rishi-gupta.webp" },
  { name: "Dr. Akshay Jadhav", role: "Publication Chair", designation: "Assistant Professor", image: "akshay-jadhav.webp" },
  { name: "Dr. Mayank Namdev", role: "Publication Chair", designation: "Assistant Professor", image: "mayank-namdev.webp" },
];


export default function Organizing() {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
  
          <h1 className="text-4xl font-bold text-slate-700 mb-6">
            Organizing Committee
            <div className="w-24 h-1 bg-blue-900 mt-3 rounded-full"></div>
          </h1>
  
          <p className="text-gray-700 mb-10">
            The Organizing Committee oversees the planning and execution of TrustNet 2026.
          </p>
  
          <div className="space-y-6">
            {ORGANIZING_COMMITTEE.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow flex items-center justify-between"
              >
                {/* LEFT: Image + Name */}
                <div className="flex items-center gap-6">
                  <img
                    src={`/assets/committee/${m.image}`}
                    alt={m.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <h3 className="font-semibold text-lg text-slate-800">
                    {m.name}
                  </h3>
                </div>
  
                {/* RIGHT: Role + Designation */}
                <div className="text-right">
                  <p className="text-blue-700 font-medium">
                    {m.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {m.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </div>
    );
  }