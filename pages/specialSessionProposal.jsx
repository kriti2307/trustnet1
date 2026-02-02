import React from "react";
import { Link } from "react-router-dom";

function SpecialSessionProposal() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          Special Session Proposal Guidelines
        </h1>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <ol className="space-y-6 text-gray-700">
              <li>
                All Special Sessions will be held at the conference venue or online.
                <ol className="mt-4 space-y-4 list-[lower-alpha] ml-8">
                  <li>
                    To conduct a special session, the organizer of the session needs to send a proposal containing the following items to {" "}
                    <a
                      href="mailto:trustnet2026@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      trustnet2026@gmail.com
                    </a>
                    <ol className="mt-3 space-y-2 list-[lower-roman] ml-8">
                      <li>Aim & Scope / Objectives</li>
                      <li>Sub-topics of interest</li>
                      <li>Contact information of the Organizer</li>
                      <li>Organizers' short biography</li>
                      <li>List of potential reviewers / TPC</li>
                      <li>Tentative number of paper submissions</li>
                    </ol>
                  </li>
                </ol>
              </li>

              <li>
               Proposals will be duly evaluated by the TrustNet'26 Technical Committee based on the novelty and associated impact of the topic and, the same will be intimated via email to the session organizer with further guidelines.
              </li>

              <li>
                Organizers of Special Sessions are required to announce/ publicize the Call for Papers for Special Sessions on their own, however, details of all accepted Sessions will be made available on the Conference website. (
                <a
                  href="https://trustnetcon.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://trustnetcon.in/
                </a>
                ).
              </li>

              <li>
              The review process (First phase) of the papers submitted in the Special Sessions will be done by the respective Organizers of the sessions. In the review process, each paper should receive at least two reviews from qualified reviewers (all reviewers are required to have expertise in the area of the submitted paper).
              </li>

              <li>
                The third qualified review (Second Phase) will be done by the Technical Committee/ Reviewer Pool of TrustNet'26 who will make the final decision on acceptance/ rejection. The decision about acceptance/ rejection will also be intimated to the respective organizers of the special session.
              </li>

              <li>
                The acceptance rate of papers submitted for the special session and similarity index percentage must be restricted to 30% and ≤15% respectively.
              </li>

              <li>
              For successful execution of the special session minimum 5 accepted papers are required, and the Organizer of the special session will be invited to chair the session. However, the TrustNet'26 organizing committee may combine papers from different sessions, if the number of papers is less than 5 in a single session.
              </li>
            </ol>

            {/* Important Dates */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Important dates:</h2>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Notification of acceptance: at the earliest</li>
                <li>Paper submission & registration: As per conference timeline</li>
              </ul>
            </div>

            {/* Notice */}
            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500">
              <p className="font-medium">
                The special session will be organized through online mode only.
              </p>
            </div>

            {/* Closing */}
            <div className="mt-10 text-gray-700">
              <p>Warm regards,</p>
              <p className="font-semibold">Team TrustNet'26</p>
              <p>Manipal University Jaipur</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:trustnet2026@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  trustnet2026@gmail.com
                </a>
              </p>
            </div>

            {/* Back Link */}
            <div className="mt-12">
              <Link
                to="/special-sessions"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
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

