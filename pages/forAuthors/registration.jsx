import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="w-full min-h-screen bg-trustnet-bg">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE TITLE */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-700">
              Registration
            </h1>
            <div className="w-24 h-1 bg-trustnet-primary mt-3 rounded-full"></div>
          </div>

          {/* INTRO */}
          <div className="bg-white rounded-2xl shadow-lg border border-trustnet-bg-light p-8 md:p-10 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              By submitting a manuscript, the authors agree that, in the event of
              acceptance for oral or poster presentation, at least one author
              shall register for the conference and present the paper. The
              conference will be conducted in a <span className="font-semibold">hybrid mode</span>,
              allowing participation either in person at
              <span className="font-semibold"> Manipal University Jaipur, Rajasthan, India</span>,
              or virtually through online presentation.
            </p>
          </div>

          {/* IMPORTANT INSTRUCTIONS */}
          <div className="bg-white rounded-2xl shadow-lg border border-trustnet-bg-light p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">
              Important Instructions
            </h2>

            <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
              <li>At least one author per accepted paper must register before the deadline.</li>
              <li>The registration fee includes conference participation, lunch, and conference materials.</li>
              <li>All travel and accommodation expenses must be borne by the participant.</li>
              <li>Papers must be prepared according to Springer guidelines and should be between 10 and 20 pages.</li>
              <li>Participants must retain the transaction ID and payment confirmation screenshot after payment.</li>
              <li>A presentation certificate will be issued after successful registration and paper presentation.</li>
            </ul>
          </div>

          {/* ================= REGISTRATION FEES ================= */}
<div className="bg-white rounded-2xl shadow-lg border border-trustnet-bg-light p-8 md:p-10 mb-12 overflow-x-auto">

  <h2 className="text-2xl font-bold text-slate-700 mb-6">
    Registration Fee Details
  </h2>

  <table className="w-full border-collapse border border-gray-300 text-gray-700">
    <thead>
      <tr className="bg-trustnet-bg-light">
        <th rowSpan="2" className="border px-4 py-3 text-left">
          Category
        </th>
        <th colSpan="2" className="border px-4 py-3 text-center">
          Indian Participants <br />
          <span className="text-sm font-normal">(Amount in INR)</span>
        </th>
        <th colSpan="2" className="border px-4 py-3 text-center">
          International Participants <br />
          <span className="text-sm font-normal">(Amount in USD)</span>
        </th>
      </tr>
      <tr className="bg-trustnet-bg-light">
        <th className="border px-4 py-3 text-center">
          Early Bird <br />
          <span className="text-sm font-normal">(By May 31, 2026)</span>
        </th>
        <th className="border px-4 py-3 text-center">
          Regular <br />
          <span className="text-sm font-normal">(After May 31, 2026)</span>
        </th>
        <th className="border px-4 py-3 text-center">
          Early Bird <br />
          <span className="text-sm font-normal">(By May 31, 2026)</span>
        </th>
        <th className="border px-4 py-3 text-center">
          Regular <br />
          <span className="text-sm font-normal">(After May 31, 2026)</span>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="border px-4 py-3 font-semibold">Students</td>
        <td className="border px-4 py-3 text-center">3,000</td>
        <td className="border px-4 py-3 text-center">3,500</td>
        <td className="border px-4 py-3 text-center">200</td>
        <td className="border px-4 py-3 text-center">250</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="border px-4 py-3 font-semibold">Academicians</td>
        <td className="border px-4 py-3 text-center">6,000</td>
        <td className="border px-4 py-3 text-center">7,000</td>
        <td className="border px-4 py-3 text-center">250</td>
        <td className="border px-4 py-3 text-center">300</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="border px-4 py-3 font-semibold">Industry Participants</td>
        <td className="border px-4 py-3 text-center">10,000</td>
        <td className="border px-4 py-3 text-center">12,000</td>
        <td className="border px-4 py-3 text-center">300</td>
        <td className="border px-4 py-3 text-center">350</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="border px-4 py-3 font-semibold">Attendee Only</td>
        <td className="border px-4 py-3 text-center">2,500</td>
        <td className="border px-4 py-3 text-center">3,000</td>
        <td className="border px-4 py-3 text-center">200</td>
        <td className="border px-4 py-3 text-center">250</td>
      </tr>
    </tbody>
  </table>

  <p className="text-sm text-gray-600 mt-4">
    * Registration fee includes 18% GST.
  </p>

</div>


       

          {/* REFUND & ETHICS */}
          <div className="bg-white rounded-2xl shadow-lg border border-trustnet-bg-light p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">
              Refund and Ethical Policy
            </h2>

            <h3 className="font-semibold text-lg mb-2">Refund Policy</h3>
            <p className="text-gray-700 mb-6">
              The conference registration fee is strictly non-refundable under
              any circumstances.
            </p>

            <h3 className="font-semibold text-lg mb-2">Ethical Standards</h3>
            <p className="text-gray-700 text-justify">
              The conference maintains the highest standards of academic
              integrity. Any manuscript found to involve plagiarism or ethical
              misconduct at any stage — during review, afters registration, or
              in the camera-ready submission — will be rejected immediately.
              In such cases, the registration fee will not be refunded. This
              policy applies to issues identified by the conference committee
              or publication partners at any stage of the process.
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="flex justify-between text-trustnet-primary font-semibold">
            <Link to="/for-authors/submission" className="hover:underline">
              ← Paper Submission
            </Link>
            <Link to="/for-authors/brochure" className="hover:underline">
              Conference Brochure →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Registration;

