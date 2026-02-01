import React from "react";
import { Link } from "react-router-dom";

function Brochure() {
  return (
    <div className="w-full min-h-screen bg-trustnet-bg">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-700 mb-8">
            Conference Brochure
            <div className="w-24 h-1 bg-trustnet-primary mt-3 rounded-full"></div>
          </h1>

          <div className="space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              Download the TrustNet 2026 conference brochure for complete
              information about the event, tracks, speakers, and venue.
            </p>

            <div className="bg-yellow-50 rounded-xl p-8 shadow-md text-center">
              <h2 className="font-bold text-xl mb-4">Download Brochure</h2>
              <p className="mb-6 text-gray-600">
                The conference brochure will be available for download soon.
                Please check back for updates.
              </p>
              <button
                disabled
                className="bg-gray-400 text-white px-8 py-3 rounded-full font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>

            <div className="flex gap-4">
              <Link
                to="/for-authors/registration"
                className="text-trustnet-primary font-semibold hover:underline"
              >
                ← Registration
              </Link>
              <Link
                to="/"
                className="text-trustnet-primary font-semibold hover:underline"
              >
                Back to Home →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Brochure;
