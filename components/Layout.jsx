import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import manipalLogo from "../src/assets/manipalfinallogo.png";


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

      <a href="/#about" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>
        About
      </a>

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
            <img src={manipalLogo} alt="Manipal Logo" />
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
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>

     {/* FOOTER */}
<footer id="contact" className="bg-trustnet-primary-dark text-trustnet-lighter pt-6 pb-3">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-4 text-sm items-start">

      {/* Contacts */}
      <div>
        <h3 className="font-semibold text-base mb-1">Contact:</h3>

        <p className="font-medium">Dr. Abdul Haseeb Ganie</p>
        <p>Email: abdul.ganie@jaipur.manipal.edu</p>
        <p className="mb-2">Ph: +91 99068 36244</p>

        <p className="font-medium">Dr. Loganathan Karuppusamy</p>
        <p>Email: loganathan.karuppusamy@jaipur.manipal.edu</p>
        <p>Ph: +91 94433 68789</p>
      </div>

      {/* University */}
      <div className="text-center">
        <img
          src="/assets/mujlogo.png"
          alt="Manipal Logo"
          className="mx-auto mb-2"
          style={{ height: "65px", width: "auto" }}
        />
        <p>Dehmi Kalan, Off Jaipur-Ajmer Expressway,</p>
        <p>Jaipur, Rajasthan, India - 303007</p>
      </div>

    {/* Conference Email — Bottom Right */}
      <div className="flex flex-col justify-end md:items-end items-center">
        <p className="font-semibold">
          Email: <span className="font-normal">aciffs2026@gmail.com</span>
        </p>
      </div>


    </div>

    {/* Bottom line */}
    <div className="border-t border-trustnet-primary-darker mt-4 pt-2 text-xs text-trustnet-light">
      <div className="flex flex-col md:flex-row justify-between items-center">
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


