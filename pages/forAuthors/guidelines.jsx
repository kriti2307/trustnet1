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
            aligned with the themes of ACIFF 2026.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-14">

          {/* INTRO */}
          <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-justify">
            <p>
              The International Conference on Advances in Computational Intelligence for Fluid and Fuzzy Systems  seeks original research contributions
              across various disciplines, provided the work&apos;s context is
              adequately articulated. Researchers are encouraged to submit
              their papers by the specified deadline. After this date, no new
              papers will be accepted for submission, although modifications to
              existing submissions will still be possible.
            </p>

            <p>
              This conference brings together researchers, academicians,
              industry leaders, and practitioners to exchange ideas and explore
              advancements in AI, Computing, Blockchain, Cybersecurity, Digital
              and Network Security, fostering collaboration and innovation for
              a smarter, secure future.
            </p>

            <p>
              The Microsoft CMT service was used for managing the peer-reviewing
              process for this conference. This service was provided for free
              by Microsoft and they bore all expenses, including costs for Azure
              cloud services as well as for software development and support.
            </p>
          </div>

          {/* MANUSCRIPT PREPARATION */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-trustnet-bg-light">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">
              Manuscript Preparation and Submission Guidelines
            </h2>

            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Title: First letter of each word except helping verbs and connectors should be uppercase letters only.</li>
              <li>Usage of first/second/third person (our, me, us, I, etc.) should be avoided in the manuscript.</li>
              <li>Authors are required to proofread the paper for English usage.</li>
              <li>Abbreviations should be avoided in the abstract.</li>
              <li>Include all figures in high resolution only (DPI above 500).</li>
              <li>Contents need to be well organized. Title, objective, research gap, proposed methodology, and results need to be inline.</li>
              <li>Authors should include motivation and a paper organization at the end of the introduction section.</li>
              <li>All images and tables must be numbered and provided with a suitable caption.</li>
              <li>Do not paste tables as figures or snapshots.</li>
              <li>All equations must be numbered sequentially and discussed in the text.</li>
              <li>All images, tables, equations, and references must be cited in the text.</li>
              <li>Mention at least 5 to 8 keywords in the manuscript.</li>
              <li>Abbreviations should be expanded to their first usage only.</li>
              <li>All sections and subsections of the manuscript must be numbered properly.</li>
              <li>Acknowledgements (if any) should be included after the conclusion section.</li>
              <li>Author names and ordering must be kept identical in all places.</li>
              <li>Include name, affiliation and e-mail of all authors and corresponding author.</li>
              <li>The conclusion should be novel and supported by statistical remarks.</li>
              <li>Reference items should be complete and properly cited.</li>
              <li>The manuscript should be kept within the page limit of 10–12 pages.</li>
            </ul>
          </div>

          {/* ✅ NEW BUTTONS — ADDED HERE ONLY */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="/assets/TrustNet2026_Word_Template.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-trustnet-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-trustnet-primary-dark transition"
            >
              Download Word Template
            </a>

            <a
              href="/assets/TrustNet2026_LaTeX_Template.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-trustnet-primary text-trustnet-primary px-8 py-4 rounded-full font-semibold hover:bg-trustnet-bg transition"
            >
              Download LaTeX Template
            </a>
          </div>

          {/* CONFIDENTIALITY */}
          <div className="text-gray-700 leading-relaxed text-justify space-y-4">
            <h2 className="text-2xl font-bold text-slate-700">
              Confidentiality
            </h2>
            <p>
              The conference committee maintains strict confidentiality throughout the process, from submission to decision-making on every article considered for review. Reviewers involved in this whole review process are from reputed universities throughout the globe, and the practice of keeping all information confidential during the review is part of the standard communication with all reviewers.
             
            </p>
          </div>

          {/* REVIEW PROCESS */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-trustnet-bg-light space-y-6">
            <h2 className="text-2xl font-bold text-slate-700">
              Review Process
            </h2>

            <p className="text-gray-700 leading-relaxed text-justify">
             Once an article is submitted to the conference, the authors agree to our review policy, where the article will be peer-reviewed by professional reviewers after being checked for similarity index and plagiarism by plagiarism detection software (Turnitin). ACIFF 2026 respects Intellectual Property Rights. Plagiarism is defined as the incorrect appropriation of someone else&apos;s information, thoughts, or ideas and presenting them as one&apos;s own. The conference committee will not tolerate this sort of breach of ethical norms at any cost. Any article with more than 18% similarity index will be rejected immediately without further consideration. The similarity should not be greater than 2% from a single source.
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              Any article with more than 18% similarity index will be rejected.
            </p>
          </div>

          {/* DUAL SUBMISSION */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-trustnet-bg-light space-y-4">
            <h2 className="text-2xl font-bold text-slate-700">
              Dual / Double Submissions Policy
            </h2>

            <p className="text-gray-700 leading-relaxed text-justify">
              Our conference aims to present novel research and ensure efficient use of reviewers' efforts. Authors submitting manuscripts acknowledge that their work has not been previously published or accepted for publication in a substantially similar form in any peer-reviewed venue. Any breach of these conditions will result in rejection and notification to the other venue where the submission was made. Submissions should be original and not duplicate prior publications or ongoing submissions. Include citations in your manuscript if you need to reference another paper concurrently submitted to the conference. Clearly articulate in your paper how your submission differs significantly from these concurrent works and provide the additional papers in the supplemental material. Authors are encouraged to contact the Program Chairs for further clarification if needed.
            </p>
          </div>

          {/* ATTENDANCE */}
          <div className="text-gray-700 leading-relaxed text-justify space-y-4">
            <h2 className="text-2xl font-bold text-slate-700">
              Attendance Responsibilities
            </h2>
            <p>
             The authors must agree that if the paper is accepted, at least one of the authors will register for the conference and present the paper there. Acceptance of a paper does not claim for final publication. Only presented papers will be forwarded to the publication partner. Presenters will be provided with a certificate of paper presentation.
            </p>
          </div>

          {/* PUBLICATION */}
          <div className="text-gray-700 leading-relaxed text-justify space-y-4">
            <h2 className="text-2xl font-bold text-slate-700">
              Publication
            </h2>
            <p>
              Select accepted and presented papers at the conference will be submitted for publication through our publication partners. Before final publication, proofs may be sent to the corresponding author designated in the manuscript. It is crucial to provide the corresponding author's correct email address. Please regularly visit the conference website for updates on publication specifics.

Papers found to be plagiarised/having ethical concerns during any stage of the publication process (either by the conference committee or by the publication partner) shall be rejected immediately. If found in CRC of manuscript after registration fees deposition, then registration fees will NOT be refunded.
            </p>
          </div>

          {/* PUBLICITY */}
          <div className="text-gray-700 leading-relaxed text-justify space-y-4">
            <h2 className="text-2xl font-bold text-slate-700">
              Publicity
            </h2>
            <p>
              All articles submitted to the conference cannot be fully or partially publicised on any social media platform until an official acceptance email is received from the publisher. If any author(s) violate this act, their article will be rejected for presentation and removed from the proceeding for publication.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Guidelines;



