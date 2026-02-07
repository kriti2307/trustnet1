import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";


function Layout() {
  const [committeeOpen, setCommitteeOpen] = useState(false);
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [sessionsOpen, setSessionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [awardsOpen, setAwardsOpen] = useState(false);

  const navLinks = (
    <>
      <Link to="/" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>
        Home
      </Link>

      <Link to="/about-us" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>
        About Us
      </Link>

      <Link to="/call-for-papers" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>
        Call for Papers
      </Link>

      <a href="/#speakers" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>
        Speakers
      </a>
      

      {/* Committee */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setCommitteeOpen(true)}
        onMouseLeave={() => setCommitteeOpen(false)}
      >
        <button className="flex items-center gap-1 hover:text-trustnet-accent">
          Committee
          <span className={`ml-1 text-xs leading-none transition-transform duration-200 ${committeeOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {committeeOpen && (
          <div className="absolute top-full left-0 mt-3 z-50">
            <div className="absolute -top-3 left-0 w-full h-3" />
            <div className="bg-trustnet-card shadow-xl rounded-lg py-2 min-w-[200px] border border-trustnet-bg-light">
              <Link to="/committee/advisory" className="block px-4 py-2 hover:bg-trustnet-bg">
                Advisory Board
              </Link>
              <Link to="/committee/organizing" className="block px-4 py-2 hover:bg-trustnet-bg">
                Organizing Committee
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* For Authors */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setAuthorsOpen(true)}
        onMouseLeave={() => setAuthorsOpen(false)}
      >
        <button className="flex items-center gap-1 hover:text-trustnet-accent">
          For Authors
          <span className={`transition-transform duration-200 ${authorsOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {authorsOpen && (
          <div className="absolute top-full left-0 mt-3 z-50">
            <div className="absolute -top-3 left-0 w-full h-3" />
            <div className="bg-trustnet-card shadow-xl rounded-lg py-2 min-w-[220px] border border-trustnet-bg-light">
              <Link to="/for-authors/guidelines" className="block px-4 py-2 hover:bg-trustnet-bg">
                Guidelines for Authors
              </Link>
              <Link to="/for-authors/submission" className="block px-4 py-2 hover:bg-trustnet-bg">
                Paper Submission
              </Link>
              <Link to="/for-authors/registration" className="block px-4 py-2 hover:bg-trustnet-bg">
                Registration
              </Link>
              <Link to="/for-authors/brochure" className="block px-4 py-2 hover:bg-trustnet-bg">
                Conference Brochure
              </Link>
              <Link to="/for-authors/Accommodation" className="block px-4 py-2 hover:bg-trustnet-bg">
                Accommodation 
              </Link>
            </div>
          </div>
        )}
      </div>

      <a
        href="/#contact"
        className="hover:text-trustnet-accent"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact
      </a>

      {/* Awards */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setAwardsOpen(true)}
        onMouseLeave={() => setAwardsOpen(false)}
      >
        <button className="flex items-center gap-1 hover:text-trustnet-accent">
          Awards
          <span className={`transition-transform duration-200 ${awardsOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {awardsOpen && (
          <div className="absolute top-full left-0 mt-3 z-50">
            <div className="absolute -top-3 left-0 w-full h-3" />
            <div className="bg-trustnet-card shadow-xl rounded-lg py-2 min-w-[220px] border border-trustnet-bg-light">
              <Link to="/awards/best-paper" className="block px-4 py-2 hover:bg-trustnet-bg">
                Best Paper Award
              </Link>
              <Link to="/awards/young-scientist" className="block px-4 py-2 hover:bg-trustnet-bg">
                Young Scientist Award
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="w-full min-h-screen font-sans">
      <nav className="w-full bg-white shadow-md fixed top-0 z-50 border-b border-trustnet-bg-light">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <Link to="/" className="logo">
            <img src="/assets/newmujlogo.png" alt="Manipal Logo" />
          </Link>


          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700 leading-none">
            {navLinks}
          </div>

          <div className="hidden lg:block">
            <span className="bg-trustnet-primary text-white px-3 py-0.5 rounded-full text-xs font-semibold">
              HYBRID
            </span>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>

{/* ===== MOBILE DRAWER MENU ===== */}
<div
  className={`lg:hidden fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300
  ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
>

  <div className="flex flex-col h-full p-6 text-slate-700">

    {/* CLOSE BUTTON */}
    <button
      className="self-end text-2xl mb-6"
      onClick={() => setMobileMenuOpen(false)}
    >
      ✕
    </button>

    <div className="flex flex-col gap-4 text-base font-medium">

      <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
      
      <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>
      About Us
      </Link>
 

      <Link to="/call-for-papers" onClick={() => setMobileMenuOpen(false)}>
        Call for Papers
      </Link>

      <a href="/#speakers" onClick={() => setMobileMenuOpen(false)}>Speakers</a>


      {/* Committee */}
      <button
        onClick={() => setCommitteeOpen(!committeeOpen)}
        className="flex justify-between items-center"
      >
        Committee
        <span className={`${committeeOpen ? "rotate-180" : ""}`}>⌄</span>
      </button>

      {committeeOpen && (
        <div className="pl-4 flex flex-col gap-2 text-sm">
          <Link to="/committee/advisory" onClick={() => setMobileMenuOpen(false)}>
            Advisory Board
          </Link>
          <Link to="/committee/organizing" onClick={() => setMobileMenuOpen(false)}>
            Organizing Committee
          </Link>
        </div>
      )}


      {/* Authors */}
      <button
        onClick={() => setAuthorsOpen(!authorsOpen)}
        className="flex justify-between items-center"
      >
        For Authors
        <span className={`${authorsOpen ? "rotate-180" : ""}`}>⌄</span>
      </button>

      {authorsOpen && (
        <div className="pl-4 flex flex-col gap-2 text-sm">
          <Link to="/for-authors/guidelines" onClick={() => setMobileMenuOpen(false)}>
            Guidelines
          </Link>
          <Link to="/for-authors/submission" onClick={() => setMobileMenuOpen(false)}>
            Submission
          </Link>
          <Link to="/for-authors/registration" onClick={() => setMobileMenuOpen(false)}>
            Registration
          </Link>
          <Link to="/for-authors/brochure" onClick={() => setMobileMenuOpen(false)}>
            Brochure
          </Link>
          <Link to="/for-authors/Accommodation" onClick={() => setMobileMenuOpen(false)}>
            Accommodation
          </Link>
        </div>
      )}


      {/* Awards */}
      <button
        onClick={() => setAwardsOpen(!awardsOpen)}
        className="flex justify-between items-center"
      >
        Awards
        <span className={`${awardsOpen ? "rotate-180" : ""}`}>⌄</span>
      </button>

      {awardsOpen && (
        <div className="pl-4 flex flex-col gap-2 text-sm">
          <Link to="/awards/best-paper" onClick={() => setMobileMenuOpen(false)}>
            Best Paper Award
          </Link>
          <Link to="/awards/young-scientist" onClick={() => setMobileMenuOpen(false)}>
            Young Scientist Award
          </Link>
        </div>
      )}


      <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>
        Contact
      </a>

    </div>

  </div>
</div>


      </nav>

      <main className="pt-16">
        <Outlet />
      </main>
{/* FOOTER */}
<footer id="contact" className="bg-trustnet-primary-dark text-trustnet-lighter pt-6 pb-4">

  <div className="max-w-7xl mx-auto px-5 md:px-6">

    {/* Main Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">

 {/* Contacts */}
<div className="text-center sm:text-left space-y-5">
  <h3 className="font-semibold text-base mb-2">Contact</h3>

   {/* Contact 1 */}
  <div className="space-y-1">
    <p className="font-medium">Dr. Reema Jain</p>
    <p>Professor & Head</p>
    <p>Email: aciffs2026@gmail.com</p>
  </div>

  {/* Contact 2 */}
  <div className="space-y-1">
    <p className="font-medium">Dr. Abdul Haseeb Ganie</p>
    <p>Email: abdul.ganie@jaipur.manipal.edu </p>
    <p>Ph: +91 99068 36244</p>
  </div>

  {/* Contact 3 */}
  <div className="space-y-1">
    <p className="font-medium">Dr. Loganathan Karuppusamy</p>
    <p>Email: loganathan.karuppusamy@jaipur.manipal.edu</p>
    <p>Ph: +91 94433 68789</p>
  </div>
</div>



      {/* University */}
<div className="text-center">
  <img
    src="/assets/mujlogo-small.png"
    alt="Manipal Logo"
    className="mx-auto mb-3 h-20 w-auto object-contain"
  />

  <p>Dehmi Kalan, Off Jaipur-Ajmer Expressway,</p>
  <p>Jaipur, Rajasthan, India - 303007</p>
</div>



      {/* Conference Email */}
      <div className="flex flex-col justify-center md:items-end items-center text-center md:text-right">
        <p className="font-semibold">
          Email:
        </p>

        <a
          href="mailto:aciffs2026@gmail.com"
          className="hover:underline"
        >
          aciffs2026@gmail.com
        </a>
      </div>
{/* SDG STRIP */}
<div className="mt-8 flex justify-center">
  <div className="flex items-center gap-0">

    <img
      src="/assets/sdg/4th.png"
      alt="Quality Education"
      className="h-10 md:h-12 w-auto object-contain"
    />

    <img
      src="/assets/sdg/8th.png"
      alt="Decent Work and Economic Growth"
      className="h-10 md:h-12 w-auto object-contain"
    />

    <img
      src="/assets/sdg/9th.png"
      alt="Industry, Innovation and Infrastructure"
      className="h-10 md:h-12 w-auto object-contain"
    />

    <img
      src="/assets/sdg/12th.png"
      alt="Responsible Consumption and Production"
      className="h-10 md:h-12 w-auto object-contain"
    />

    <img
      src="/assets/sdg/17th.png"
      alt="Partnerships for the Goals"
      className="h-10 md:h-12 w-auto object-contain"
    />

  </div>
</div>






    </div>
    


    {/* Bottom Line */}
    <div className="border-t border-trustnet-primary-darker mt-6 pt-3 text-xs text-trustnet-light">

      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">

        <span>© 2026 All rights reserved.</span>

        <span>Developed by</span>

      </div>

    </div>

  </div>

</footer>




    </div>
  );
}

export default Layout;


