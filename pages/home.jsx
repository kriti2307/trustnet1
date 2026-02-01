import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SpeakerCard from "../components/speakerCard";
import TrackItem from "../components/trackItem";
import heroImage from "../src/assets/image.png";
import footerLogo from "../src/assets/footer-logo.webp";

function Home() {
  /* Scroll to section when landing with hash (e.g. /#about from another page) */
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
            backgroundImage: `url(${heroImage})`,
        }}
        >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-4">
            TRUSTNET’26
          </h1>

          <p className="text-xl md:text-2xl mb-6">
            International Conference on <br />
            Trusted Networks and Intelligent Systems
          </p> */}
          <div><img src={footerLogo} alt="TrustNet 2026" className="max-w-xl mx-auto w-full" /></div>

          <div className="text-2xl md:text-3xl font-semibold mb-8">
            16<sup>th</sup> – 17<sup>th</sup> February 2026
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/for-authors/registration" className="bg-trustnet-primary hover:bg-trustnet-primary-dark px-6 py-3 rounded-full text-white font-semibold transition duration-300">
              Register Now
            </Link>
            <Link to="/for-authors/submission" className="bg-white text-trustnet-primary-dark hover:bg-trustnet-bg px-6 py-3 rounded-full font-semibold transition duration-300 border-2 border-white">
              Submit Paper
            </Link>
          </div>

        </div>
      </section>

      {/* ================= IMPORTANT DATES ================= */}
      <section className="bg-trustnet-bg py-12">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-700">
              Important Dates
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light">
              <h3 className="font-semibold text-lg mb-2">Call for Paper</h3>
              <p className="text-gray-600">September 9, 2025</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light">
              <h3 className="font-semibold text-lg mb-2">Submission</h3>
              <p className="text-gray-600">December 15, 2025</p>
              <p className="text-gray-600 text-sm mt-1">December 30, 2025 (Extended)</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light">
              <h3 className="font-semibold text-lg mb-2">Acceptance</h3>
              <p className="text-gray-600">December 15, 2025</p>
              <p className="text-gray-600 text-sm mt-1">January 10, 2026 (Extended)</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light">
              <h3 className="font-semibold text-lg mb-2">Registration End</h3>
              <p className="text-gray-600">December 25, 2025</p>
              <p className="text-gray-600 text-sm mt-1">January 14, 2026 (Extended)</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CONFERENCE INTRO SECTION ================= */}
<section className="bg-trustnet-bg py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side - Logo + Title */}
    <div className="flex flex-col md:flex-row items-start gap-6">

      {/* Shield Logo Placeholder */}
      <div className="w-24 h-24 bg-trustnet-primary rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
        TN
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-700 leading-tight">
          INTERNATIONAL CONFERENCE ON <br />
          TRUSTED NETWORKS AND <br />
          INTELLIGENT SYSTEMS
        </h2>
      </div>
    </div>

    {/* Right Side - Description */}
    <div>
      <p className="text-gray-700 leading-relaxed text-lg">
        The <span className="font-semibold">Department of Computer Science and Engineering, Manipal University Jaipur</span> 
        is pleased to announce that it will host the International Conference on 
        Trusted Networks and Intelligent Systems (TrustNet 2026) on 
        February 16–17, 2026.
      </p>

      <p className="text-gray-700 leading-relaxed text-lg mt-4">
        This conference is centered around a shared global goal: creating a safe, smart, 
        and sustainable digital future. Discussions and research will focus on 
        <span className="font-semibold"> cybersecurity and Artificial Intelligence (AI)</span>, 
        contributing to both the United Nations Sustainable Development Goals (SDGs) 
        and the Digital India vision.
      </p>

      <p className="text-gray-700 leading-relaxed text-lg mt-4">
        By promoting <span className="font-semibold">Digital Trust, Innovation, and Security</span>, 
        the event will support progress toward goals related to 
        Innovation, Sustainable Cities, Strong Institutions, and Quality Education.
      </p>
    </div>

  </div>
</section>



{/* ================= ABOUT MANIPAL UNIVERSITY JAIPUR ================= */}
{/* ================= ABOUT MANIPAL UNIVERSITY JAIPUR ================= */}
<section id="about" className="bg-trustnet-primary-dark text-trustnet-lighter py-16 scroll-mt-20">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-8">
      About Manipal University Jaipur
    </h2>

    <p className="text-lg leading-relaxed">
      Established in 2011, Manipal University Jaipur (MUJ) is a proud member of the 
      globally acclaimed Manipal Group, carrying forward the visionary legacy of 
      Padma Shri Dr. T. M. A. Pai, whose mission was to make world-class education 
      accessible and transformative. With NAAC A+ accreditation, MUJ stands as a 
      multi-disciplinary, future-focused university that blends academic excellence 
      with innovation. Offering a wide spectrum of career-oriented programs across 
      engineering, architecture, design, law, management, humanities, sciences, and 
      more, MUJ is committed to nurturing well-rounded individuals prepared for the 
      demands of a global world. The university’s reputation is reinforced by 
      national and international recognition: ranked 58th in both the University 
      and Engineering categories by NIRF 2025 and featured in prestigious global 
      rankings such as QS Asia (701–750 band) and Times Higher Education 
      (1201–1500 band). Beyond academics, MUJ is known for its state-of-the-art 
      infrastructure, cutting-edge research ecosystem, and a campus designed with 
      sustainability at its core. It is the proud recipient of a 5-star GRIHA 
      rating and the ASSOCHAM Award for Best University Campus, testaments to its 
      commitment to excellence in every dimension.
    </p>

  </div>
</section>



{/* ================= CONFERENCE TRACKS ================= */}
<section className="bg-trustnet-bg py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      CONFERENCE TRACKS
      <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      <TrackItem title="Applied Cryptography and Network Security" />
      <TrackItem title="Distributed Systems and Architectures" />
      <TrackItem title="Data Security and Privacy" />
      <TrackItem title="Security and AI/Machine Learning" />
      <TrackItem title="Security and Privacy in Emerging Scenarios" />
      <TrackItem title="Risks, Policies and Software Security" />
      <TrackItem title="Trust Management and Usability" />
      <TrackItem title="Computational Complexity Theory and its Applications" />
    </div>

  </div>
</section>


{/* ================= OUR EMINENT SPEAKERS ================= */}
<section id="speakers" className="bg-trustnet-primary-dark py-20 scroll-mt-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-trustnet-lighter text-center mb-14">
      OUR EMINENT SPEAKERS
      <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
    </h2>

    {/* Speakers Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
      
      <SpeakerCard
        image="/assets/anupam-tiwari.webp"
        name="Dr. Anupam Tiwari"
        designation="Cyber Advisor, Ministry of Defence, Government of India"
      />

      <SpeakerCard
        image="/assets/apurva.webp"
        name="Apurva K Vangujar"
        designation="Cyber Security Engineer, Jaguar Land Rover"
      />

      <SpeakerCard
        image="/assets/somanath-tripathy.webp"
        name="Dr. Somanath Tripathy"
        designation="Department of Computer Science & Engineering, IIT Patna"
      />

      <SpeakerCard
        image="/assets/dr-maanak-gupta.jpg"
        name="Dr. Maanak Gupta"
        designation="Department of Computer Science, Tennessee Tech University, TN, USA"
      />

      <SpeakerCard
        image="/assets/chhagan-lal.webp"
        name="Dr. Chhagan Lal"
        designation="Cybersecurity Researcher, CISaR Group, NTNU | EU CYBERUNITY Project"
      />

      <SpeakerCard
        image="/assets/dr-gang-li.jpg"
        name="Dr. Gang Li"
        designation="Professor, Deakin University, School of Information Technology"
      />

    </div>

  </div>
</section>
{/* ================= PUBLICATION ================= */}
<section className="bg-trustnet-bg-light py-20">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      PUBLICATION
      <div className="w-20 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
    </h2>

    {/* Description */}
    <p className="text-gray-700 text-lg leading-relaxed mb-10">
      The Microsoft CMT service was used for managing the peer-reviewing
      process for this conference. This service was provided for free by
      Microsoft and they bore all expenses, including costs for Azure cloud
      services as well as for software development and support.
    </p>

    {/* Logos */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10">
      <img
        src="/assets/Scopus_logo.svg.png"
        alt="Scopus"
        className="h-16 object-contain"
      />
      <img
        src="/assets/springer-logo-removebg-preview.png"
        alt="Springer"
        className="h-16 object-contain"
      />
    </div>

    <p className="text-gray-700 text-lg leading-relaxed">
      The proceedings of TrustNet’26 will be published in Lecture Notes in
      Networks and Systems (LNNS). LNNS is abstracted and indexed in SCOPUS,
      INSPEC, WTI Frankfurt eG, zbMATH, SCImago.
    </p>

    {/* Divider */}
    <div className="border-t border-gray-300 mt-16"></div>

  </div>
</section>



{/* ================= CONFERENCE PARTNERS ================= */}
<section className="bg-blue-200 py-16">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      CONFERENCE PARTNERS
      <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
    </h2>

    {/* Partner Logos */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-16">
      <img
        src="https://unstop.com/assets/images/unstop-logo.svg"
        alt="Unstop"
        className="h-16 object-contain"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7b/Deakin_University_Logo.svg"
        alt="Deakin University"
        className="h-16 object-contain"
      />
    </div>

  </div>
</section>
{/* ================= ABOUT JAIPUR ================= */}
<section className="bg-trustnet-bg-light py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      ABOUT JAIPUR
      <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
    </h2>

    {/* Description */}
    <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-14">
      Jaipur, famously known as the Pink City, is the vibrant capital of Rajasthan 
      and a remarkable testament to Indian architecture and culture. Founded in 1727 
      by Maharaja Jai Singh II, the city enchants visitors with its majestic forts, 
      opulent palaces, and bustling colorful markets. Seamlessly blending its rich 
      historical heritage with modern amenities, Jaipur offers a captivating setting 
      for both tourism and professional events. Its warm hospitality, stunning 
      architecture, and lively atmosphere make it an ideal destination, providing an 
      unforgettable backdrop for our conference.
    </p>

    {/* Image Gallery */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <img
        src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600"
        alt="Jaipur Fort"
        className="rounded-xl shadow-md object-cover h-60 w-full hover:scale-105 transition duration-300"
      />

      <img
        src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600"
        alt="Amber Fort"
        className="rounded-xl shadow-md object-cover h-60 w-full hover:scale-105 transition duration-300"
      />

      <img
        src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600"
        alt="Jaipur Market"
        className="rounded-xl shadow-md object-cover h-60 w-full hover:scale-105 transition duration-300"
      />

      <img
        src="https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=600"
        alt="Jantar Mantar"
        className="rounded-xl shadow-md object-cover h-60 w-full hover:scale-105 transition duration-300"
      />

    </div>

  </div>
</section>
{/* ================= VENUE ================= */}
<section className="bg-trustnet-bg-light py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      VENUE
      <div className="w-20 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
    </h2>

    {/* Description */}
    <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-14">
      The conference will be held at Manipal University Jaipur, a premier
      institution known for its state-of-the-art facilities and beautiful campus.
    </p>

    {/* Image + Map */}
    <div className="grid md:grid-cols-2 gap-8 items-center">

      {/* Campus Image */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1581092918484-8313cf6e05d1?w=800"
          alt="Manipal University Jaipur Campus"
          className="w-full h-80 object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Google Map Embed */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Manipal University Jaipur Location"
          src="https://www.google.com/maps?q=Manipal+University+Jaipur&output=embed"
          width="100%"
          height="320"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>

    </div>

    {/* Address */}
    <div className="mt-10 text-center">
      <p className="text-lg text-gray-800">
        <span className="font-semibold">Address:</span> Manipal University Jaipur,
        Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Express Highway,
        Jaipur, Rajasthan 303007, India
      </p>
    </div>

  </div>
</section>


    </div>
  );
}

export default Home;
