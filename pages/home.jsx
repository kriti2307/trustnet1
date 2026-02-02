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
      demands of a global world. The university's reputation is reinforced by 
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
      <TrackItem 
        title="Applied Cryptography and Network Security" 
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        }
      />
      
      <TrackItem 
        title="Distributed Systems and Architectures" 
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
          </svg>
        }
      />
      
      <TrackItem 
        title="Data Security and Privacy" 
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
        }
      />
      
      <TrackItem 
        title="Security and AI/Machine Learning" 
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 7H7v6h6V7z"/>
            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
          </svg>
        }
      />
      
      <TrackItem 
        title="Security and Privacy in Emerging Scenarios" 
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
          </svg>
        }
      />
      
      <TrackItem 
        title="Risks, Policies and Software Security" 
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
          </svg>
        }
      />
      
      <TrackItem 
        title="Trust Management and Usability" 
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
          </svg>
        }
      />
      
      <TrackItem 
        title="Computational Complexity Theory and its Applications" 
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
          </svg>
        }
      />
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
        image="/assets/speakers/anupam-tiwari.webp"
        name="Dr. Anupam Tiwari"
        designation="Cyber Advisor, Ministry of Defence, Government of India"
      />


      <SpeakerCard
        image="/assets/speakers/apurva.webp"
        name="Apurva K Vangujar"
        designation="Cyber Security Engineer, Jaguar Land Rover"
      />


      <SpeakerCard
        image="/assets/speakers/somanath-tripathy.webp"
        name="Dr. Somanath Tripathy"
        designation="Department of Computer Science & Engineering, IIT Patna"
      />


      <SpeakerCard
        image="/assets/speakers/dr-maanak-gupta.jpg"
        name="Dr. Maanak Gupta"
        designation="Department of Computer Science, Tennessee Tech University, TN, USA"
      />


      <SpeakerCard
        image="/assets/speakers/chhagan-lal.webp"
        name="Dr. Chhagan Lal"
        designation="Cybersecurity Researcher, CISaR Group, NTNU | EU CYBERUNITY Project"
      />


      <SpeakerCard
        image="/assets/speakers/dr-gang-li.jpg"
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
        className="h-24 object-contain"
      />
    </div>


    <p className="text-gray-700 text-lg leading-relaxed">
      The proceedings of TrustNet'26 will be published in Lecture Notes in
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
        src="/assets/unstop.png"
        alt="Unstop"
        className="h-16 object-contain"
      />
      <img
        src="/assets/deakin.png"
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
