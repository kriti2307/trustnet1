import React from "react";

const ORGANIZING_COMMITTEE = [
  "Dr. Satyabrata Roy – Program Co-Chair",
  "Dr. Amit Garg – Convener",
  "Dr. Ankur Pandey – Convener",
  // add more here
];

export default function OrganizingCommittee() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-12">
            Organizing Committee
            <div className="w-24 h-1 bg-blue-900 mt-3 rounded-full" />
          </h1>

          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            {ORGANIZING_COMMITTEE.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
