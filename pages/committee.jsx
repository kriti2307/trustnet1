import React from "react";
import { Link } from "react-router-dom";

const ADVISORY_BOARD = [
  { name: "TBD", affiliation: "—" },
  { name: "TBD", affiliation: "—" },
];

/* Organizing Committee data from https://trustnetcon.in/organizing-committee */
const ORGANIZING_COMMITTEE = [
  { name: "Mr. S. Vaitheeswaran", role: "Chief Patron", designation: "Chairperson", image: "S-Vaitheeswaran.webp" },
  { name: "Prof. Dr. N. N. Sharma", role: "Patron", designation: "President", image: "dr-nnsharma.webp" },
  { name: "Dr. Karunakar A Kotegar", role: "Co-Patron", designation: "Pro-President", image: "karunakar-kotegar.webp" },
  { name: "Dr. Amit Soni", role: "Co-Patron", designation: "Registrar", image: "amit-soni.webp" },
  { name: "Prof. Nitu Bhatnagar", role: "Co-Patron", designation: "Provost", image: "Nitu-Bhatnagar.webp" },
  { name: "Prof. Dr. Kuldip Singh Sangwan", role: "General Chair", designation: "Dean – Faculty of Engineering", image: "Dr-Kuldip-Singh.webp" },
  { name: "Dr. Chhatar Singh Lamba", role: "General Chair", designation: "Professor & Associate Dean", image: "cslamba.webp" },
  { name: "Prof. Dr. Neha Chaudhary", role: "Program Chair", designation: "Professor & HoD, CSE", image: "Neha-Chaudhary.webp" },
  { name: "Dr. U. S. Rawat", role: "Program Co-Chair", designation: "Professor", image: "us-rawat.webp" },
  { name: "Dr. Satyabrata Roy", role: "Program Co-chair", designation: "Associate Professor, CSE", image: "Dr-Satyabrata-Roy.webp" },
  { name: "Dr. Mahesh Jangid", role: "Program Co-Chair", designation: "Associate Professor, CSE", image: "Mahesh-Jangid.webp" },
  { name: "Dr. Amit Garg", role: "Organizing Chair", designation: "Associate Professor, CSE", image: "amit-garg.webp" },
  { name: "Dr. Ankur Pandey", role: "Organizing Chair", designation: "Assistant Professor, CSE", image: "ankur-pandey.webp" },
  { name: "Dr. Amit Kumar Gupta", role: "Organizing Co-Chair", designation: "Assistant Professor, CSE", image: "amit-kumar-gupta.webp" },
  { name: "Dr. Neetu Gupta", role: "Organizing Co-Chair", designation: "Assistant Professor, CSE", image: "neetu-gupta.webp" },
  { name: "Dr. Sayar Singh Shekhawat", role: "Publicity Chair", designation: "Associate Professor, CSE", image: "sayar-singh.webp" },
  { name: "Dr. Usha Jain", role: "Publicity Chair", designation: "Assistant Professor, CSE", image: "usha-jain.webp" },
  { name: "Dr. Surbhi Sharma", role: "Publicity Chair", designation: "Assistant Professor, CSE", image: "surbhi-sharma.webp" },
  { name: "Dr. Satpal Singh Kushwaha", role: "Technical Chair", designation: "Assistant Professor, CSE", image: "satpal-singh-kushwaha.webp" },
  { name: "Dr. Lokesh Sharma", role: "Technical Chair", designation: "Associate Professor, IT", image: "lokesh-sharma.webp" },
  { name: "Dr. Sumit Srivastava", role: "Technical Chair", designation: "Assistant Professor, IT", image: "sumit-srivastava.webp" },
  { name: "Dr. Rishi Gupta", role: "Finance Chair", designation: "Associate Professor, CSE", image: "rishi-gupta.webp" },
  { name: "Dr. Akshay Jadhav", role: "Publication Chair", designation: "Assistant Professor, CSE", image: "akshay-jadhav.webp" },
  { name: "Dr. Mayank Namdev", role: "Publication Chair", designation: "Assistant Professor, CSE", image: "mayank-namdev.webp" },
];

function Committee({ type }) {
  const isAdvisory = type === "advisory";

  return (
    <div className="w-full min-h-screen bg-trustnet-bg">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 flex gap-4">
            <Link
              to="/committee/advisory"
              className={`px-4 py-2 rounded-lg font-medium transition ${
                isAdvisory
                  ? "bg-trustnet-primary text-white"
                  : "bg-white hover:bg-trustnet-bg-light text-gray-700 border border-trustnet-bg-light"
              }`}
            >
              Advisory Board
            </Link>
            <Link
              to="/committee/organizing"
              className={`px-4 py-2 rounded-lg font-medium transition ${
                !isAdvisory
                  ? "bg-trustnet-primary text-white"
                  : "bg-white hover:bg-trustnet-bg-light text-gray-700 border border-trustnet-bg-light"
              }`}
            >
              Organizing Committee
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-slate-700 mb-12">
            {isAdvisory ? "Advisory Board" : "Organizing Committee"}
            <div className="w-24 h-1 bg-blue-900 mt-3 rounded-full"></div>
          </h1>

          {isAdvisory ? (
            <div className="space-y-4">
              <p className="text-gray-700 mb-8">
                The Advisory Board provides strategic guidance and expertise for
                TrustNet 2026.
              </p>
              {ADVISORY_BOARD.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md flex justify-between items-center border border-trustnet-bg-light"
                >
                  <span className="font-semibold text-gray-800">
                    {member.name}
                  </span>
                  <span className="text-gray-600">{member.affiliation}</span>
                </div>
              ))}
            </div>
          ) : (
            <section id="organizing-committee" className="scroll-mt-20">
              <p className="text-gray-700 mb-8">
                The Organizing Committee oversees the planning and execution of
                TrustNet 2026.
              </p>
              <div className="space-y-4">
                {ORGANIZING_COMMITTEE.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 shadow-sm border border-trustnet-bg-light hover:shadow-md transition-shadow flex items-center gap-4"
                  >
                    <img
                      src={`/assets/committee/${member.image}`}
                      alt={member.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0"
                    />
                    <div className="flex flex-col sm:flex-row sm:flex-1 sm:justify-between sm:items-center gap-2 min-w-0">
                      <span className="font-semibold text-gray-800 text-lg">
                        {member.name}
                      </span>
                      <div className="flex flex-col sm:items-end gap-0.5">
                        <span className="text-trustnet-primary font-medium">
                          {member.role}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {member.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}

export default Committee;
