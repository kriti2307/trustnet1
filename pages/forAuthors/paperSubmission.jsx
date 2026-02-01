import React from "react";
import { Link } from "react-router-dom";

function PaperSubmission() {
  return (
    <div className="w-full min-h-screen bg-trustnet-bg">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-700 mb-8">
            Paper Submission
            <div className="w-24 h-1 bg-trustnet-primary mt-3 rounded-full"></div>
          </h1>

          <div className="space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              Submit your research paper through the Microsoft CMT (Conference
              Management Toolkit) portal. The peer-review process is managed
              through this service, provided by Microsoft.
            </p>

            <div className="bg-white border border-trustnet-bg-light rounded-xl p-8 shadow-md text-center">
              <h2 className="font-bold text-xl mb-4">Submission Portal</h2>
              <p className="mb-6">
                Paper submission link will be available soon. Please check back
                for updates.
              </p>
              <a
                href="https://cmt3.research.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-trustnet-primary text-yellow-50 px-8 py-3 rounded-full font-semibold hover:bg-trustnet-primary-dark transition"
              >
                Microsoft CMT Portal
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold mb-2">Important Dates</h3>
                <p className="text-sm">Submission: December 30, 2025</p>
                <p className="text-sm">Acceptance: January 10, 2026</p>
                <p className="text-sm">Registration: January 14, 2026</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold mb-2">Contact</h3>
                <p className="text-sm">Email: trustnet2026@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                to="/for-authors/guidelines"
                className="text-trustnet-primary font-semibold hover:underline"
              >
                ← Guidelines for Authors
              </Link>
              <Link
                to="/for-authors/registration"
                className="text-trustnet-primary font-semibold hover:underline"
              >
                Registration →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaperSubmission;
