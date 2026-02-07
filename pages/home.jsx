import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";
import SpeakerCard from "../components/speakerCard";
import TrackItem from "../components/trackItem";
import heroImage from "../src/assets/image.png";
import footerLogo from "../src/assets/footer-logo.webp";




function Home() {
  const [openCategory, setOpenCategory] = useState(null);



  return (
    <div className="w-full">

{/* ================= HERO SECTION ================= */}
<section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

  {/* BACKGROUND VIDEO */}
  <video
    className="absolute inset-0 w-full h-full object-cover 
               scale-[1.15] md:scale-100"
    src="/assets/hero-video.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/40 md:bg-black/15"></div>

  {/* CENTER CONTENT */}
  <div className="relative z-10 h-full flex items-center justify-center">
    <div className="text-center text-white px-5 sm:px-8 max-w-4xl">

      {/* CONFERENCE CODE */}
      <h2 className="font-serif text-sm sm:text-base md:text-2xl tracking-wide mb-2">
        ACIFFS 2026
      </h2>

      {/* INTERNATIONAL CONFERENCE */}
      <h3 className="font-serif text-base sm:text-lg md:text-4xl mb-1">
        International Conference
      </h3>

      <h3 className="font-serif text-base sm:text-lg md:text-4xl mb-3">
        on
      </h3>

      {/* MAIN TITLE */}
<h1 className="font-serif text-lg sm:text-xl md:text-5xl leading-snug md:leading-tight font-medium mb-4 text-center">
  
  <span className="md:whitespace-nowrap">
    Advances in Computational Intelligence
  </span>

  <br className="hidden sm:block" />

  for Fluid and Fuzzy Systems

</h1>


      {/* DATE */}
      <p className="font-serif mt-4 text-sm sm:text-base md:text-xl">
        July 29–31, 2026
      </p>

    </div>
  </div>

</section>

{/* ================= CONFERENCE INFO SECTION ================= */}
<section className="relative py-10 md:py-14 bg-gradient-to-b from-slate-50 via-white to-slate-100">

  <div className="max-w-5xl mx-auto px-6 text-center space-y-8">

    {/* -------- TOP LOGOS ROW -------- */}
<div className="flex flex-wrap justify-center items-center gap-10">

  {/* MUJ Logo */}
  <div className="h-20 md:h-24 flex items-center">
    <img
      src="/assets/muj_logo.png"
      alt="Manipal Logo"
      className="h-full max-w-[260px] object-contain"
    />
  </div>

  {/* Partner Logo 1 */}
  <div className="h-20 md:h-24 flex items-center">
    <img
      src="/assets/AMU.png"
      alt="AMU"
      className="h-full max-w-[220px] object-contain"
    />
  </div>

  {/* Partner Logo 2 */}
  <div className="h-20 md:h-24 flex items-center">
    <img
      src="/assets/IIT.png"
      alt="IIT Guwahati"
      className="h-full max-w-[220px] object-contain"
    />
  </div>

  {/* SDG LOGO STRIP (NO SPACE BETWEEN THEM) */}
  <div className="flex items-center gap-0">

    <img
      src="/assets/sdg/4th.png"
      alt="Quality Education"
      className="h-14 md:h-16 w-auto object-contain"
    />
    <img
      src="/assets/sdg/8th.png"
      alt="Decent Work and Economic Growth"
      className="h-14 md:h-16 w-auto object-contain"
    />
    <img
      src="/assets/sdg/9th.png"
      alt="Industry, Innovation and Infrastructure"
      className="h-14 md:h-16 w-auto object-contain"
    />
    <img
      src="/assets/sdg/12th.png"
      alt="Responsible Consumption and Production"
      className="h-14 md:h-16 w-auto object-contain"
    />
    <img
      src="/assets/sdg/17th.png"
      alt="Partnerships for the Goals"
      className="h-14 md:h-16 w-auto object-contain"
    />

  </div>

</div>



    {/* -------- ORGANIZED BY -------- */}
    <div className="space-y-1">
      <p className="text-base md:text-lg font-semibold">
        Organized by
      </p>

      <p className="text-lg md:text-xl">
        Department of Mathematics and Statistics, Manipal University Jaipur
      </p>
    </div>


    {/* -------- ASSOCIATIONS -------- */}
<div className="space-y-2">
  <p className="text-base md:text-lg font-semibold">
    In Association With
  </p>

  <div className="text-base md:text-lg space-y-1">
    <p>Indian Institute of Technology Guwahati (IIT G)</p>
    <p>Nelson Mandela African Institution of Science and Technology (NM-AIST), Tanzania</p>
    <p>African Mathematical Union (AMU)</p>
  </div>
</div>



    {/* -------- DATES + CENTER IMAGE + VENUE -------- */}
    <div className="grid md:grid-cols-3 items-center gap-6 pt-4">

      {/* Dates */}
      <div className="space-y-2">
        <p className="text-base md:text-lg font-semibold">
          Conference Dates
        </p>

        <p className="text-base md:text-lg">
          July 29–31, 2026
        </p>
      </div>


      {/* CENTER IMAGE */}
      <div className="flex justify-center">
        <div className="w-24 h-24 md:w-32 md:h-32">
          <img
            src="/assets/conference-logo.png"
            alt="Conference Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>


      {/* Venue */}
      <div className="space-y-2">
        <p className="text-base md:text-lg font-semibold">
          Conference Venue
        </p>

        <p className="text-base md:text-lg">
          Manipal University Jaipur
        </p>
      </div>

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

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.30
          }
        }
      }}
    >

      {/* Card 1 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light text-center"
      >
        <h3 className="font-semibold text-lg mb-2">Call for Abstract</h3>
        <p className="text-gray-600">Feb 15, 2026</p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light text-center"
      >
        <h3 className="font-semibold text-lg mb-2">Submission</h3>
        <p className="text-gray-600">April 15, 2026</p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light text-center"
      >
        <h3 className="font-semibold text-lg mb-2">Acceptance</h3>
        <p className="text-gray-600">May 15, 2026</p>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="bg-white shadow-md rounded-lg p-6 border border-trustnet-bg-light text-center"
      >
        <h3 className="font-semibold text-lg mb-2">Registration End</h3>
        <p className="text-gray-600">June 30, 2026</p>
      </motion.div>

    </motion.div>

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
        are organizing the First International Conference on
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

    <p className ="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
      Ethical Standards
The conference upholds the highest standards of academic integrity. Any manuscript found to involve plagiarism or other ethical misconduct, whether during review, after registration, or in the final camera-ready version, will be rejected immediately. In such cases, the registration fee will not be refunded.
This policy applies to issues identified by the conference committee or our publication partners at any stage of the process.
    </p>

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
