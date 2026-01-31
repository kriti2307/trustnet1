import React from "react";
import { Link } from "react-router-dom";

function SpecialSessions() {
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-700 mb-8">
            Special Sessions
            <div className="w-24 h-1 bg-blue-900 mt-3 rounded-full"></div>
          </h1>

          <div className="space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              TrustNet 2026 features special sessions that focus on emerging
              topics and innovative research areas within trusted networks and
              intelligent systems. These sessions provide a platform for
              in-depth discussion and networking.
            </p>

            <div className="bg-yellow-50 rounded-xl p-6 shadow-md">
              <h2 className="font-bold text-xl mb-4">Interested in Proposing a Special Session?</h2>
              <p className="mb-6">
                Researchers and practitioners can propose special sessions on
                relevant topics. Proposals will be reviewed by the program
                committee.
              </p>
              <Link
                to="/special-sessions/proposal"
                className="inline-block bg-blue-900 text-yellow-50 px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
              >
                Submit Special Session Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialSessions;
