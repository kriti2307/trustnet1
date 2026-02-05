import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import SpeakerCard from "../components/speakerCard";
import TrackItem from "../components/trackItem";
import heroImage from "../src/assets/image.png";
import footerLogo from "../src/assets/footer-logo.webp";




function Home() {

  return (
    <div className="w-full">

{/* ================= HERO SECTION ================= */}
<section className="relative w-full h-[80vh] overflow-hidden">

  <video
  className="absolute top-0 left-0 w-full h-full object-cover object-[50%_25%]"
  src="/assets/hero-video.mp4"
  autoPlay
  loop
  muted
  playsInline
/>


  {/* DARK OVERLAY */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

  {/* CENTER TEXT */}
  <div className="relative z-10 h-full flex items-center justify-center">
    <div className="text-center text-white px-6 max-w-5xl space-y-4">

      
      <p className="uppercase tracking-widest text-lg font-medium">
  First International Conference
</p>

<p className ="uppercase tracking-widest text-lg font-medium"> on </p>


      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Advances in Computational Intelligence <br />
        for Fluid and Fuzzy Systems
      </h1>

      <p className="text-lg font-semibold">
        July 29–31, 2026
      </p>

      {/* 🔘 BUTTONS */}
      <div className="flex justify-center gap-4 pt-4 flex-wrap">
        <a
          href="/for-authors/registration"
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Register Now
        </a>

        <a
          href="/for-authors/submission"
          className="bg-white hover:bg-gray-100 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Submit Paper
        </a>
      </div>

    </div>
  </div>

  {/* BOTTOM LEFT — ORGANIZED BY */}
  <div className="absolute bottom-8 left-8 z-10 text-white text-left">
    <p className="font-semibold">Organized by</p>
    <p className="text-lg">Manipal University Jaipur</p>
  </div>

  {/* BOTTOM RIGHT — IN ASSOCIATION WITH */}
  <div className="absolute bottom-8 right-8 z-10 text-white text-right text-sm space-y-1">
    <p className="font-semibold">In Association With</p>
    <p>IIT Guwahati</p>
    <p>
      Nelson Mandela African Institution of Science and Technology (NM-AIST),
      Tanzania
    </p>
    <p>African Mathematical Union (AMU)</p>
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

    {/* 👇 THIS LINE IS THE FIX */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">

      <div className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light text-center">
        <h3 className="font-semibold text-lg mb-2">Call for Paper</h3>
        <p className="text-gray-600">Feb 15, 2026</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light text-center">
        <h3 className="font-semibold text-lg mb-2">Submission</h3>
        <p className="text-gray-600">April 15, 2026</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light text-center">
        <h3 className="font-semibold text-lg mb-2">Acceptance</h3>
        <p className="text-gray-600">May 15, 2026</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light text-center">
        <h3 className="font-semibold text-lg mb-2">
          Camera Ready Paper Submission
        </h3>
        <p className="text-gray-600">May 31, 2026</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light text-center">
        <h3 className="font-semibold text-lg mb-2">Registration End</h3>
        <p className="text-gray-600">June 30, 2026</p>
      </div>

    </div>

  </div>
</section>

{/* ================= ABOUT CONFERENCE SECTION ================= */}
<section id="about" className="bg-trustnet-bg py-20">
  <div className="w-full px-6">

    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
        About the Conference
      </h2>
      <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Full-width Content Box */}
    <div className="bg-white rounded-2xl shadow-lg border border-trustnet-bg-light 
                    px-8 md:px-16 lg:px-32 py-10 max-w-screen-2xl mx-auto">

      <p className="text-gray-700 text-lg leading-relaxed text-justify">
        The <span className="font-semibold">
          Department of Mathematics and Statistics, Manipal University Jaipur
        </span>, in collaboration with the
        <span className="font-semibold"> Indian Institute of Technology (IIT) Guwahati</span>,
        <span className="font-semibold"> Nelson Mandela African Institution of Science and Technology (NM-AIST), Tanzania</span>,
        and the <span className="font-semibold">African Mathematical Union (AMU)</span>,
        proposes to organize the First International Conference on
        <span className="font-semibold">
          {" "}Advances in Computational Intelligence for Fluid and Fuzzy Systems (ACIFFS-2026)
        </span>,
        scheduled for <span className="font-semibold">July 29–31, 2026</span>.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-6 text-justify">
        ACIFFS 2026 provides an international platform for researchers,
        academicians, and industry professionals to present, exchange, and discuss
        recent advancements and innovative research outcomes in computational
        intelligence, fluid systems, and fuzzy methodologies.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-6 text-justify">
        The conference will bring together leading experts to explore cutting-edge
        theoretical developments, computational techniques, and real-world
        applications influencing science, technology, and society. To promote
        collaboration and knowledge sharing between academia and industry, the
        program will feature keynote addresses, technical paper presentations, and
        interactive sessions by distinguished speakers from around the globe.
      </p>

    </div>

  </div>
</section>



{/* ================= ABOUT MANIPAL UNIVERSITY JAIPUR ================= */}
<section id="about-university" className="bg-trustnet-primary-dark text-trustnet-lighter py-16 scroll-mt-20">
  <div className="max-w-6xl mx-auto px-6 ">


    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
      About Manipal University Jaipur
    </h2>


    <p className="text-lg leading-relaxed text-justify">
      The Manipal Education and Medical Group is an established leader in the field of education, research, and healthcare. In a span of over six decades, it has transformed the lives of more than 3,00,000 students from over 59 countries. The group includes five Universities – Manipal Academy of Higher Education (MAHE, Karnataka), Sikkim Manipal University (Sikkim), American University of Antigua (Caribbean Islands), Manipal International University (Malaysia), and Manipal University Jaipur (Jaipur). Manipal University Jaipur was established in 2011 at the invitation of the Government of Rajasthan as a self-financed State University. The university upholds the Manipal model of education, promoting academic excellence through hands-on learning and innovation across disciplines.


    </p>


  </div>
</section>

{/* ================= ABOUT DEPARTMENT OF MATHEMATICS & STATISTICS ================= */}
<section className="bg-trustnet-bg-light py-20">
  <div className="w-full px-6">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
        Department of Mathematics and Statistics
      </h2>
      <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Wider Content Card */}
    <div className="bg-white rounded-2xl shadow-lg border border-trustnet-bg-light 
                    px-10 md:px-16 lg:px-32 py-12 
                    max-w-screen-2xl mx-auto">

      <p className="text-gray-700 text-lg leading-relaxed text-justify">
        The Department of Mathematics and Statistics is dedicated to delivering
        high-quality education and fostering a strong research-oriented
        environment. With a balanced focus on teaching, research, and student
        development, the department is supported by experienced faculty members
        with strong research credentials and exposure to leading academic and
        research institutions.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-6 text-justify">
        The department is committed to promoting research in both fundamental and
        applied areas of mathematics and statistics, enabling students to excel
        academically and succeed in diverse professional and research careers.
      </p>

    </div>

  </div>
</section>





{/* ================= CONFERENCE TRACKS ================= 
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
*/}



{/* ================= OUR EMINENT SPEAKERS ================= 
<section id="speakers" className="bg-trustnet-primary-dark py-20 scroll-mt-20">
  <div className="max-w-7xl mx-auto px-6">

    
    <h2 className="text-3xl md:text-4xl font-bold text-trustnet-lighter text-center mb-14">
      OUR EMINENT SPEAKERS
      <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
    </h2>

    
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">

      {[
        {
          image: "/assets/speakers/anupam-tiwari.webp",
          name: "Dr. Anupam Tiwari",
          designation: "Cyber Advisor, Ministry of Defence, Government of India",
          linkedin: "https://www.linkedin.com/",
        },
        {
          image: "/assets/speakers/apurva.webp",
          name: "Apurva K Vangujar",
          designation: "Cyber Security Engineer, Jaguar Land Rover",
          linkedin: "https://www.linkedin.com/",
        },
        {
          image: "/assets/speakers/somanath-tripathy.webp",
          name: "Dr. Somanath Tripathy",
          designation: "Department of Computer Science & Engineering, IIT Patna",
          linkedin: "https://www.linkedin.com/",
        },
        {
          image: "/assets/speakers/dr-maanak-gupta.jpg",
          name: "Dr. Maanak Gupta",
          designation: "Department of Computer Science, Tennessee Tech University, TN, USA",
          linkedin: "https://www.linkedin.com/",
        },
        {
          image: "/assets/speakers/chhagan-lal.webp",
          name: "Dr. Chhagan Lal",
          designation: "Cybersecurity Researcher, CISaR Group, NTNU | EU CYBERUNITY Project",
          linkedin: "https://www.linkedin.com/",
        },
        {
          image: "/assets/speakers/dr-gang-li.jpg",
          name: "Dr. Gang Li",
          designation: "Professor, Deakin University, School of Information Technology",
          linkedin: "https://www.linkedin.com/",
        },
      ].map((speaker, idx) => (
        <div key={idx} className="text-center max-w-[260px]">

        
          <div className="border-2 border-white/40 rounded-xl overflow-hidden mb-4">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>

        
          <h3 className="font-semibold text-lg text-white">
            {speaker.name}
          </h3>

          
          <p className="text-sm text-trustnet-lighter mt-2 leading-snug">
            {speaker.designation}
          </p>

          <div className="mt-3 flex justify-center">
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-trustnet-primary hover:text-white transition"
            >
            </a>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

*/}






{/* ================= PUBLICATION ================= */}
<section className="bg-trustnet-bg-light py-20">
  <div className="max-w-5xl mx-auto px-6">


    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
      PUBLICATION
      <div className="w-20 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
    </h2>


    {/* Description */}
    <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
After a thorough peer review procedure, all registered and presented papers will be evaluated for publication in journals, book series, or conference proceedings that are indexed by Scopus/SCIE. In compliance with their editorial policies, the corresponding journals or publishers will independently undertake peer review and make editorial decisions.

    
    </p>

    {/* Publication Partner Logos */}
<div className="flex flex-wrap items-center justify-center gap-10 mt-12">
  <img
    src="/assets/sdg/4th.png"
    alt="Quality Education"
    className="h-20 w-auto object-contain"
  />
  <img
    src="/assets/sdg/8th.png"
    alt="Decent Work and Economic Growth"
    className="h-20 w-auto object-contain"
  />
  <img
    src="/assets/sdg/9th.png"
    alt="Industry, Innovation and Infrastructure"
    className="h-20 w-auto object-contain"
  />
  <img
    src="/assets/sdg/12th.png"
    alt="Responsible consumption and production"
    className="h-20 w-auto object-contain"
  />
  <img
    src="/assets/sdg/17th.png"
    alt="Partnerships for the Goals"
    className="h-20 w-auto object-contain"
  />
</div>


{/*
     Logos 
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10 text-justify">
      <img
        src="/assets/Scopus.png"
        alt="Scopus"
        className="h-20 w-32 object-contain"
      />
      <img
        src="/assets/springer.png"
        alt="Springer"
        className="h-20 w-32 object-contain"
      />
    </div>
*/} 
    


    <p className="text-gray-700 text-lg leading-relaxed">
      
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

  {/* AMU */}
  <div className="flex flex-col items-center text-center">
    <img
      src="/assets/AMU.png"
      alt="AMU"
      className="h-60 object-contain"
    />
    <p className="mt-4 font-medium">African Mathematical Union </p>
  </div>

  {/* African Institute of Science and Technology */}
  <div className="flex flex-col items-center text-center">
    <img
      src="/assets/Arusha.png"
      alt="African Institute of Science and Technology"
      className="h-60 object-contain"
    />
    <p className="mt-4 font-medium">
      African Institute of Science and Technology
    </p>
  </div>

  {/* IIT Guwahati */}
  <div className="flex flex-col items-center text-center">
    <img
      src="/assets/IIT.png"
      alt="IIT Guwahati"
      className="h-60 object-contain"
    />
    <p className="mt-4 font-medium">IIT Guwahati</p>
  </div>

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
    <p className="text-gray-700 text-lg leading-relaxed  max-w-4xl mx-auto mb-14 text-justify">
      Jaipur, famously known as the Pink City, is the vibrant capital of Rajasthan 
      and a remarkable testament to Indian architecture and culture. Founded in 1727 
      by Maharaja Jai Singh II, the city enchants visitors with its majestic forts, 
      opulent palaces, and bustling colorful markets. Seamlessly blending its rich 
      historical heritage with modern amenities, Jaipur offers a captivating setting 
      for both tourism and professional events. Its warm hospitality, stunning 
      architecture, and lively atmosphere make it an ideal destination, providing an 
      unforgettable backdrop for our conference.
    </p>

{/* ================= MOVING IMAGE SLIDER ================= */}
<ImageSlider />


    


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
    <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-14">
      The conference will be held at Manipal University Jaipur, a premier
      institution known for its state-of-the-art facilities and beautiful campus.
    </p>


    {/* Image + Map */}
    <div className="grid md:grid-cols-2 gap-8 items-center">


      {/* Campus Video */}
<div className="rounded-xl overflow-hidden shadow-lg">
  <video
    className="w-full h-80 object-cover transition duration-300"
    src="/assets/MUJ_Venue.webm"
    autoPlay
    loop
    muted
    playsInline
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
