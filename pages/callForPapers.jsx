import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrackItem from "../components/trackItem";

const TRACKS_WITH_TOPICS = [
  {
    title: "Applied Cryptography and Network Security",
    topics: [
      "Computer Networks and Protocols",
      "Quantum-Safe and Post-Quantum Cryptography",
      "Cryptography and Cryptanalysis",
      "Wireless Network Security",
      "Sensor and Mobile Ad Hoc Network Security",
      "Security Protocols",
      "Privacy Enhancing Cryptography",
      "Network Security",
      "Intrusion Detection & Prevention",
      "Information Hiding",
    ],
  },
  {
    title: "Distributed Systems and Architectures",
    topics: [
      "Network Architectures: SDN, NFV, and Cloud-Based Networking",
      "Next-Generation Networks (5G/6G, Vehicular, IoT, and Edge Networks)",
      "Blockchain and Distributed Ledger for Security",
      "Security Information Systems Architecture",
      "Security in Distributed Systems",
      "Peer-to-Peer Security",
      "Critical Infrastructure Protection",
      "Blockchain security",
    ],
  },
  {
    title: "Data Security and Privacy",
    topics: [
      "Digital Forensics and Incident Response",
      "Privacy-Preserving Technologies",
      "Security and Privacy Policies",
      "Privacy Enhancing Technologies",
      "Personal Data Protection for Information Systems",
      "Identity Management",
      "Ethical and Legal Implications of Security and Privacy",
      "Data Integrity",
      "Database Security and Privacy",
      "Biometrics Security and Privacy",
      "Anonymity",
      "Access Control",
    ],
  },
  {
    title: "Security and AI/Machine Learning",
    topics: [
      "Emerging Trends in Cybersecurity and Network Intelligence",
      "Anomaly Detection and Threat Intelligence",
      "Artificial Intelligence for Security and Trust Management",
      "Security Vulnerabilities of Large Language Models",
      "Secure Federated Learning",
      "Attacks on Machine Learning",
      "AI-based Solutions for Security",
      "Adversarial Machine Learning",
    ],
  },
  {
    title: "Security and Privacy in Emerging Scenarios",
    topics: [
      "Secure Cloud and Edge Computing",
      "Security in Smart Cities, Healthcare, and Critical Infrastructures",
      "Cyber-Physical Systems and IoT Security",
      "Security and Privacy in the Cloud",
      "Security and Privacy in Social Networks",
      "Security and Privacy in Smart Grids",
      "Security and Privacy in Pervasive/Ubiquitous Computing",
      "Security and Privacy in Mobile Systems",
      "Security and Privacy in Location-Based Services",
      "Security and Privacy in IT Outsourcing",
      "Security and Privacy in Crowdsourcing",
      "Security and Privacy for Big Data",
    ],
  },
  {
    title: "Risks, Policies and Software Security",
    topics: [
      "Lightweight Security for Resource-Constrained Devices",
      "Trust Modeling and Risk Management in Networks",
      "Software Metrics",
      "Security Verification and Validation",
      "Secure Software Development Methodologies",
      "Risk Assessment",
      "Organizational Security Policies",
      "Insider Threats and Countermeasures",
      "Intellectual Property Protection",
      "Information Systems Auditing",
      "Formal Methods and Security",
    ],
  },
  {
    title: "Trust Management and Usability",
    topics: [
      "Intrusion Detection and Prevention Systems",
      "Trust Management and Reputation Systems",
      "Security usability",
      "Security Metrics and Measurement",
      "Security Requirements",
      "Reliability and Dependability",
      "Human factors",
    ],
  },
  {
    title: "Computational Complexity Theory and its Applications",
    topics: [
      "Quantum Query Complexity",
      "Computational Complexity theory and its Application in Computer Networks",
    ],
  },
];

function CallForPapers() {
  const [openTrack, setOpenTrack] = useState(null);

  return (
    <div className="w-full bg-trustnet-bg min-h-screen">
      {/* Hero */}
      <section className="bg-trustnet-primary-dark text-trustnet-lighter py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Call for Papers</h1>
          <p className="text-xl leading-relaxed">
            Submit your original research and be part of the global dialogue on
            Trusted Networks, Intelligent Systems, and Secure Innovation.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/for-authors/submission"
              className="bg-white text-trustnet-primary-dark px-6 py-3 rounded-full font-semibold hover:bg-trustnet-bg transition"
            >
              Submit Paper
            </Link>
            <Link
              to="/for-authors/guidelines"
              className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-700 mb-8">
            Submission Guidelines
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Researchers, academicians, and professionals are invited to submit
            their research abstracts and full papers for oral and poster
            presentations. Selected presentations will be appreciated with Cash
            Awards under &quot;Best Paper Category&quot; and &quot;Outstanding
            Research Category&quot;.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-trustnet-bg-light">
              <h3 className="font-bold text-lg mb-4">Submission Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Original, unpublished research</li>
                <li>• High-quality academic conten</li>
                <li>• Follow conference format guidelines</li>
                <li>• Peer-review process</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-trustnet-bg-light">
              <h3 className="font-bold text-lg mb-4">Presentation Formats</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Interactive sessions</li>
                <li>• Panel discussions</li>
                <li>• Poster presentations</li>
                <li>• Oral presentations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    {/* ================= SCIENTIFIC CATEGORIES ================= */}
<section className="bg-trustnet-bg py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
      SCIENTIFIC CATEGORIES
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Topics of interest include but are not limited to the following:
    </p>

<div className="grid md:grid-cols-2 gap-6 items-start">

  <TrackItem
    title="Advanced Fluid Dynamics and Flow Systems"
    isOpen={openCategory === 1}
    onToggle={() => setOpenCategory(openCategory === 1 ? null : 1)}
    topics={[
      "Aerodynamics",
      "Artificial Intelligence in Turbulence",
      "Astrophysical Flows",
      "Biological/Biomedical Fluid Mechanics",
      "Boundary Layers",
      "Combustion and Reacting Flows",
      "Computational Fluid Dynamics and Numerical Methods",
      "Environmental Fluid Dynamics and Sustainability",
      "Fluid Dynamics: General",
      "Geophysical Fluid Dynamics",
      "Heat Transfer and Phase Change",
      "Industrial Fluid Dynamics and Applications",
      "Jets and Free Shear Flows",
      "Lattice Boltzmann Methods in Fluids",
      "Magnetohydrodynamics",
      "Multiphase Flows",
      "Non-Newtonian Flows",
      "Porous Media Flows",
      "Rotating Fluid",
      "Wall-Bounded Flows: Simulations",
      "Wall-Bounded Flows: Theory"
    ]}
  />

  <TrackItem
    title="Artificial Intelligence and Fuzzy Systems"
    isOpen={openCategory === 2}
    onToggle={() => setOpenCategory(openCategory === 2 ? null : 2)}
    topics={[
      "Advanced Fuzzy Systems",
      "Applied Mathematics, Statistics & Graph Theory",
      "Data Science",
      "Deep Learning",
      "Explainable AI based on Fuzzy logic",
      "Emerging Trends in AI and Fuzzy Logic",
      "Fuzzy Logic, Mathematics, and Computing",
      "Fuzzy Neural Networking",
      "Information Theory",
      "Learning, adaptive and evolvable fuzzy systems",
      "Multi-granular cognitive computation",
      "Machine Learning",
      "Optimization",
      "Rough set theory",
      "Soft Computing",
      "Theory of Uncertain Computation"
    ]}
  />

</div>


  </div>
</section>
   



      {/* Publication */}
      <section className="bg-trustnet-bg-light py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">
            Publication and Indexing
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
            After a thorough peer review procedure, all registered and presented papers will be evaluated for publication in journals, book series, or conference proceedings that are indexed by Scopus/SCIE. In compliance with their editorial policies, the corresponding journals or publishers will independently undertake peer review and make editorial decisions.
          </p>
           <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
            Ethical Standards
The conference upholds the highest standards of academic integrity. Any manuscript found to involve plagiarism or other ethical misconduct, whether during review, after registration, or in the final camera-ready version, will be rejected immediately. In such cases, the registration fee will not be refunded.
This policy applies to issues identified by the conference committee or our publication partners at any stage of the process.

           </p>
        </div>
      </section>
    </div>
  );
}

export default CallForPapers;
