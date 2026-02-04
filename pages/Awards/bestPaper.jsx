import React from "react";

function BestPaper() {
  return (
    <section className="bg-trustnet-bg py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Best Paper Award
          <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
        </h2>

        <div className="bg-white rounded-2xl shadow-lg border border-trustnet-bg-light p-8 md:p-12 space-y-8">

          <div>
            <h3 className="text-xl font-semibold mb-3">Eligibility Criteria</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>The paper must be original, unpublished, and to be presented at the conference. </li>
              <li>At least one of the authors must be registered and must have attended and presented the paper at the conference. </li>
              <li>Papers from both academia and industry are eligible. </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Evaluation Criteria</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-left">
                <thead className="bg-trustnet-bg-light">
                  <tr>
                    <th className="p-3 border">Criteria</th>
                    <th className="p-3 border">Weightage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border">Technical Depth & Novelty</td><td className="p-3 border">30%</td></tr>
                  <tr><td className="p-3 border">Relevance to Conference Themes</td><td className="p-3 border">20%</td></tr>
                  <tr><td className="p-3 border">Methodology & Results</td><td className="p-3 border">20%</td></tr>
                  <tr><td className="p-3 border">Clarity of Presentation & Writing</td><td className="p-3 border">15%</td></tr>
                  <tr><td className="p-3 border">Impact & Practical Applications</td><td className="p-3 border">15%</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Selection Process</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Session Chairs will evaluate the content of the paper, presentation, communication during presentations, etc., and assign the score to each presentation/paper. </li>
              <li>Papers shortlisted based on evaluation scores above and only the highest-scoring paper will be considered for the best paper. </li>
              <li>Final selection will be made through a consensus-based discussion by the General Chairs. </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BestPaper;
