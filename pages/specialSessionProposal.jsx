import React from "react";
import { Link } from "react-router-dom";

function SpecialSessionProposal() {
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-700 mb-8">
            Special Session Proposal
            <div className="w-24 h-1 bg-blue-900 mt-3 rounded-full"></div>
          </h1>

          <div className="space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              Submit your proposal for a special session at TrustNet 2026. Special
              sessions should focus on timely and relevant topics aligned with
              the conference themes.
            </p>

            <div className="bg-yellow-50 rounded-xl p-6 shadow-md">
              <h2 className="font-bold text-xl mb-4">Proposal Guidelines</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Session title and brief description</li>
                <li>Organizer(s) name and affiliation</li>
                <li>Relevance to conference themes</li>
                <li>Expected number of papers</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-8 shadow-md text-center">
              <p className="mb-6">
                For special session proposals, please contact the program
                committee at{" "}
                <a
                  href="mailto:trustnet2026@gmail.com"
                  className="text-blue-900 font-semibold hover:underline"
                >
                  trustnet2026@gmail.com
                </a>
              </p>
              <Link
                to="/special-sessions"
                className="text-blue-900 font-semibold hover:underline"
              >
                ← Back to Special Sessions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialSessionProposal;
