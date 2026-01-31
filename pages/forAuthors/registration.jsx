import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-700 mb-8">
            Registration
            <div className="w-24 h-1 bg-blue-900 mt-3 rounded-full"></div>
          </h1>

          <div className="space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              Registration for TrustNet 2026 is now open. Please complete your
              registration before January 14, 2026 (Extended deadline) to secure
              your participation.
            </p>

            <div className="bg-yellow-50 rounded-xl p-8 shadow-md">
              <h2 className="font-bold text-xl mb-4">Registration Details</h2>
              <p className="mb-6">
                Registration link and fee structure will be published soon.
                For queries, please contact:{" "}
                <a
                  href="mailto:trustnet2026@gmail.com"
                  className="text-blue-900 font-semibold hover:underline"
                >
                  trustnet2026@gmail.com
                </a>
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold mb-2">Important Dates:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Registration End: December 25, 2025</li>
                  <li>• Extended: January 14, 2026</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                to="/for-authors/submission"
                className="text-blue-900 font-semibold hover:underline"
              >
                ← Paper Submission
              </Link>
              <Link
                to="/for-authors/brochure"
                className="text-blue-900 font-semibold hover:underline"
              >
                Conference Brochure →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
