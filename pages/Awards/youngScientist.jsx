import React from "react";

function YoungScientist() {
  return (
    <section className="bg-trustnet-bg py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Young Scientist Award
          <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
        </h2>

        <div className="bg-white rounded-2xl shadow-lg border border-trustnet-bg-light p-8 md:p-12 space-y-8">

          <div>
            <h3 className="text-xl font-semibold mb-3">Eligibility Criteria</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>The applicant must be registered for the conference and present the work in person.</li>
              <li>The applicant must be a young researcher/scientist below 35 years of age (or within 5 years of obtaining a Ph.D., excluding career breaks) as on the conference date.</li>
              <li>Open to PhD scholars, Post-Doctoral Fellows, early-career faculty members, and researchers from academia, R&D organizations, or industry. (Age criteria is applicable)</li>
              <li>The candidate must be the single author and presenter of the paper submitted to the conference.</li>
              <li>The submitted work must be original, unpublished, and relevant to the theme of the conference.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Evaluation Criteria</h3>
            <ul className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Originality and Novelty of the research contribution.</li>
              <li>Scientific and Technical Merit, including methodology and soundness of analysis.</li>
              <li>Relevance and Impact of the research in the field concerned.</li>
              <li>Quality of the Manuscript, including clarity, structure, and presentation.</li>
              <li>Presentation Quality, including communication skills, visual clarity, and ability to answer questions.</li>
              <li>Potential for Future Research or Societal/Industrial Application.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Selection Process</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Initial screening of full papers by the Technical Program Committee.</li>
              <li>Final evaluation during the conference presentation by an expert panel.</li>
              <li>The decision of the Award Committee shall be final and binding.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Announcement & Recognition</h3>
            <p className="text-gray-700">
              The winners will be announced at the closing ceremony of the conference.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default YoungScientist;
