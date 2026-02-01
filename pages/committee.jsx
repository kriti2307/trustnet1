import React from "react";
import { useParams, Link } from "react-router-dom";

const ADVISORY_BOARD = [
  { name: "TBD", affiliation: "—" },
  { name: "TBD", affiliation: "—" },
];

const ORGANIZING_COMMITTEE = [
  { name: "Dr. Satyabrata Roy", role: "Program Co-Chair" },
  { name: "Dr. Amit Garg", role: "Convener" },
  { name: "Dr. Ankur Pandey", role: "Convener" },
];

function Committee() {
  const { type } = useParams();
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
            <div className="space-y-4">
              <p className="text-gray-700 mb-8">
                The Organizing Committee oversees the planning and execution of
                TrustNet 2026.
              </p>
              {ORGANIZING_COMMITTEE.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md flex justify-between items-center flex-wrap gap-2 border border-trustnet-bg-light"
                >
                  <span className="font-semibold text-gray-800">
                    {member.name}
                  </span>
                  <span className="text-trustnet-primary font-medium">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Committee;
