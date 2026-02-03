import React from "react";
import { Link } from "react-router-dom";

function Guidelines() {
  return (
    <div className="w-full min-h-screen bg-trustnet-bg">

      {/* HERO */}
      <section className="bg-trustnet-primary-dark text-trustnet-lighter py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Guidelines for Authors
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Authors are invited to submit original, unpublished research papers
            aligned with the themes of TrustNet 2026.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-14">

         {/* INTRO */}
<div className="text-gray-700 text-lg leading-relaxed space-y-3">
  <p className="text-justify">
    The International Conference on Trusted Networks and Intelligent Systems
    (TrustNet 2026) seeks original research contributions across various
    disciplines, provided the work&apos;s context is adequately articulated.
    Researchers are encouraged to submit their papers by the specified deadline.
    After this date, no new papers will be accepted for submission, although
    modifications to existing submissions will still be possible. This conference
    brings together researchers, academicians, industry leaders, and practitioners
    to exchange ideas and explore advancements in AI, Computing, Blockchain,
    Cybersecurity, Digital and Network Security, fostering collaboration and
    innovation for a smarter, secure future.
  </p>

  <p>
    Paper Submission Link:&nbsp;
    <a
      href="https://cmt3.research.microsoft.com/TrustNet2026"
      target="_blank"
      rel="noopener noreferrer"
      className="text-trustnet-primary hover:underline break-all text-center"
    >
      https://cmt3.research.microsoft.com/TrustNet2026
    </a>
  </p>
  <p className="text-justify">
    The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
  </p>

</div>


          {/* SUBMISSION REQUIREMENTS */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-trustnet-bg-light">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">
              Submission Requirements
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Papers must be original and must not have been published elsewhere.</li>
              <li>Submissions should follow the Springer LNNS format.</li>
              <li>All submissions will undergo a double-blind peer-review process.</li>
              <li>Manuscripts must be submitted through the Microsoft CMT system.</li>
              <li>At least one author of an accepted paper must register and present.</li>
            </ul>
          </div>

          {/* FORMAT + LENGTH */}
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-yellow-50 rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-700 mb-4">
                Paper Format
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>Use the Springer LNNS LaTeX / Word template.</li>
                <li>Abstract length: 150–250 words.</li>
                <li>Include 4–6 relevant keywords.</li>
                <li>References must follow Springer citation style.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-700 mb-4">
                Page Limits
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>Full papers: up to 12 pages.</li>
                <li>Additional pages may incur extra charges.</li>
                <li>Figures and tables must be clearly legible.</li>
                <li>Plagiarism will be strictly checked.</li>
              </ul>
            </div>

          </div>

         {/* REVIEW PROCESS */}
<div className="bg-white rounded-2xl shadow-md p-8 border border-trustnet-bg-light space-y-6">

  <h2 className="text-2xl font-bold text-slate-700">
    Review Process
  </h2>

  <p className="text-gray-700 leading-relaxed text-justify">
    Once an article is submitted to the conference, the authors agree to our
    review policy, where the article will be peer-reviewed by professional
    reviewers after being checked for similarity index and plagiarism by
    plagiarism detection software (Turnitin). TrustNet 2026 respects Intellectual
    Property Rights. Plagiarism is defined as the incorrect appropriation of
    someone else&apos;s information, thoughts, or ideas and presenting them as
    one&apos;s own. The conference committee will not tolerate this sort of breach
    of ethical norms at any cost. Any article with more than 18% similarity index
    will be rejected immediately without further consideration. The similarity
    should not be greater than 2% from a single source.
  </p>

  <h3 className="text-xl font-semibold text-slate-700">
    Dual/Double Submissions Policy
  </h3>

  <p className="text-gray-700 leading-relaxed text-justify">
    Our conference aims to present novel research and ensure efficient use of
    reviewers&apos; efforts. Authors submitting manuscripts acknowledge that
    their work has not been previously published or accepted for publication in
    a substantially similar form in any peer-reviewed venue. Any breach of these
    conditions will result in rejection and notification to the other venue where
    the submission was made. Submissions should be original and not duplicate
    prior publications or ongoing submissions. Include citations in your
    manuscript if you need to reference another paper concurrently submitted to
    the conference. Clearly articulate in your paper how your submission differs
    significantly from these concurrent works and provide the additional papers
    in the supplemental material. Authors are encouraged to contact the Program
    Chairs for further clarification if needed.
  </p>

  <h3 className="text-xl font-semibold text-slate-700">
    Attendance Responsibilities
  </h3>

  <p className="text-gray-700 leading-relaxed text-justify">
    The authors must agree that if the paper is accepted, at least one of the
    authors will register for the conference and present the paper there.
    Acceptance of a paper does not claim final publication. Only presented papers
    will be forwarded to the publication partner. Presenters will be provided
    with a certificate of paper presentation.
  </p>

  <h3 className="text-xl font-semibold text-slate-700">
    Publication
  </h3>

  <p className="text-gray-700 leading-relaxed text-justify">
    Select accepted and presented papers at the conference will be submitted for
    publication through our publication partners. Before final publication,
    proofs may be sent to the corresponding author designated in the manuscript.
    It is crucial to provide the corresponding author&apos;s correct email
    address. Please regularly visit the conference website for updates on
    publication specifics.
  </p>

  <p className="text-gray-700 leading-relaxed text-justify">
    Papers found to be plagiarised or having ethical concerns during any stage of
    the publication process (either by the conference committee or by the
    publication partner) shall be rejected immediately. If found in the CRC of
    the manuscript after registration fees deposition, the registration fees
    will <strong>not</strong> be refunded.
  </p>

  <h3 className="text-xl font-semibold text-slate-700">
    Publicity
  </h3>

  <p className="text-gray-700 leading-relaxed text-justify">
    All articles submitted to the conference cannot be fully or partially
    publicised on any social media platform until an official acceptance email
    is received from the publisher. If any author(s) violate this act, their
    article will be rejected for presentation and removed from the proceedings
    for publication.
  </p>

</div>


          {/* IMPORTANT NOTE */}
          <div className="bg-trustnet-primary/10 border-l-4 border-trustnet-primary rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Important:</strong> At least one author must complete
              registration before the deadline for the paper to be included in
              the proceedings.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link
              to="/for-authors/submission"
              className="bg-trustnet-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-trustnet-primary-dark transition"
            >
              Submit Paper
            </Link>
            <Link
              to="/for-authors/registration"
              className="bg-white border-2 border-trustnet-primary text-trustnet-primary px-8 py-4 rounded-full font-semibold hover:bg-trustnet-bg transition"
            >
              Register Now
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Guidelines;
