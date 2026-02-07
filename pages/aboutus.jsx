import React from "react";

function AboutPartners() {
  return (
    <div className="w-full bg-trustnet-bg min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-trustnet-primary-dark text-trustnet-lighter py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Partner Institutions
          </h1>
          <p className="text-xl leading-relaxed">
            Learn more about the prestigious institutions collaborating in
            ACIFFS 2026 and contributing to academic excellence,
            research innovation, and global scientific advancement.
          </p>
        </div>
      </section>

    {/* ================= INSTITUTIONS ================= */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-6 space-y-12">

    {/* IIT GUWAHATI */}
    <div className="bg-white rounded-2xl shadow-md border border-trustnet-bg-light p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
        Indian Institute of Technology Guwahati (IIT Guwahati)
      </h2>

      <p className="text-gray-700 leading-relaxed text-justify">
        <span className="font-semibold">Indian Institute of Technology Guwahati (IIT G)</span>, 
        the sixth member of the IIT fraternity, was established in 
        <span className="font-semibold"> 1994</span>. 
        The academic program of IIT Guwahati commenced in 
        <span className="font-semibold"> 1995</span>. 
        At present the Institute has 
        <span className="font-semibold"> eleven departments and five inter-disciplinary academic centres</span> 
        covering all the major engineering, science and humanities disciplines, offering 
        <span className="font-semibold">
          {" "}BTech, BDes, B.Sc. (Hons), MTech, MDes, MSc, MBA, MA and PhD programs
        </span>.
      </p>
    </div>

    {/* NM-AIST */}
    <div className="bg-white rounded-2xl shadow-md border border-trustnet-bg-light p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
        Nelson Mandela African Institution of Science and Technology (NM-AIST), Tanzania
      </h2>

      <p className="text-gray-700 leading-relaxed text-justify">
        <span className="font-semibold">
          The Nelson Mandela African Institution of Science and Technology (NM-AIST)
        </span> in Arusha is one in a network of 
        <span className="font-semibold"> Pan-African Institutions of Science and Technology</span> 
        located across <span className="font-semibold">Sub-Saharan Africa (SSA)</span>. 
        These institutions, which are the proud brainchild of the late 
        <span className="font-semibold"> Nelson Mandela</span>, envision training and developing the next generation of African scientists and engineers with a view to impacting profoundly on the continent's development through the application of 
        <span className="font-semibold"> Science, Engineering and Technology and Innovation (SETI)</span>. 
        It is a <span className="font-semibold">premier postgraduate, research-intensive university</span> 
        located in Arusha, Tanzania, established to advance science, engineering, and technology education in Africa. 
        As part of the <span className="font-semibold">Pan-African University initiative</span>, 
        NM-AIST focuses on 
        <span className="font-semibold"> high-quality research, innovation, and capacity building</span> 
        to address regional and global challenges. The institution emphasizes 
        <span className="font-semibold"> strong international collaboration, industry engagement</span>, 
        and the training of highly skilled professionals, contributing significantly to 
        <span className="font-semibold"> sustainable development and technological advancement</span> across Africa.
      </p>
    </div>

    {/* AMU */}
    <div className="bg-white rounded-2xl shadow-md border border-trustnet-bg-light p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
        African Mathematical Union (AMU)
      </h2>

      <p className="text-gray-700 leading-relaxed text-justify mt-4">
        The <span className="font-semibold">African Mathematical Union (AMU)</span> 
        is a <span className="font-semibold">pan-African, non-profit scientific organization</span> 
        established in <span className="font-semibold">1976</span> 
        to promote the development of mathematics across Africa. It works to advance 
        <span className="font-semibold"> mathematical research</span>, 
        improve <span className="font-semibold"> mathematics education at all levels</span>, 
        and foster collaboration among African mathematicians and with the international mathematical community. 
        Through activities such as 
        <span className="font-semibold"> organizing continental conferences</span>, 
        supporting training programs and workshops, and strengthening research networks, 
        the AMU plays a vital role in building 
        <span className="font-semibold"> mathematical capacity</span> 
        and contributing to 
        <span className="font-semibold"> scientific, technological, and socio-economic development in Africa</span>.
      </p>
    </div>

  </div>
</section>


    </div>
  );
}

export default AboutPartners;
