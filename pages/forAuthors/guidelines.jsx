import React from "react";
import { Link } from "react-router-dom";

function Guidelines() {
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-700 mb-8">
            Guidelines for Authors
            <div className="w-24 h-1 bg-blue-900 mt-3 rounded-full"></div>
          </h1>

          <div className="space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              Researchers, academicians, and professionals are invited to
              submit their research abstracts and full papers for oral and
              poster presentations. Selected presentations will be appreciated
              with Cash Awards under &quot;Best Paper Category&quot; and
              &quot;Outstanding Research Category&quot;.
            </p>

            <div className="bg-yellow-50 rounded-xl p-6 shadow-md">
              <h2 className="font-bold text-xl mb-4">Submission Requirements</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Follow the LNNS (Lecture Notes in Networks and Systems) format</li>
                <li>Papers must be original and unpublished</li>
                <li>Maximum page limit as per conference guidelines</li>
                <li>Use Microsoft CMT for submission</li>
                <li>Double-blind peer review process</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 shadow-md">
              <h2 className="font-bold text-xl mb-4">Format Guidelines</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Use Springer LNNS template</li>
                <li>Abstract: 150-250 words</li>
                <li>Keywords: 4-6 keywords</li>
                <li>References in Springer format</li>
              </ul>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/for-authors/submission"
                className="bg-blue-900 text-yellow-50 px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
              >
                Submit Paper
              </Link>
              <Link
                to="/for-authors/registration"
                className="bg-yellow-50 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-100 transition"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Guidelines;
