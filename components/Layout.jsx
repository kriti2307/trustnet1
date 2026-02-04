import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import manipalLogo from "../src/assets/manipal-logo.png";


function Layout() {
  const [committeeOpen, setCommitteeOpen] = useState(false);
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [sessionsOpen, setSessionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = (
  <>
  {/* Home */}
  <Link
    to="/"
    className="hover:text-trustnet-accent"
    onClick={() => setMobileMenuOpen(false)}
  >
    Home
  </Link>

  {/* About → About the Conference */}
  <Link
    to={{ pathname: '/', hash: '#about' }}
    className="hover:text-trustnet-accent"
    onClick={() => setMobileMenuOpen(false)}
  >
    About
  </Link>

  {/* Call for Papers */}
  <Link
    to="/call-for-papers"
    className="hover:text-trustnet-accent"
    onClick={() => setMobileMenuOpen(false)}
  >
    Call for Papers
  </Link>

  {/* Speakers → Home Speakers section */}
  <Link
    to={{ pathname: '/', hash: '#speakers' }}
    className="hover:text-trustnet-accent"
    onClick={() => setMobileMenuOpen(false)}
  >
    Speakers
  </Link>



    {/* ================= Committee Dropdown ================= */}
    <div
      className="relative flex items-center"
      onMouseEnter={() => setCommitteeOpen(true)}
      onMouseLeave={() => setCommitteeOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-trustnet-accent">
        Committee
        <span className={`transition-transform duration-200 ${committeeOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {committeeOpen && (
        <div className="absolute top-full left-0 mt-3 z-50">
          {/* invisible hover buffer */}
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

    {/* ================= For Authors Dropdown ================= */}
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
          </div>
        </div>
      )}
    </div>

    <Link to={{ pathname: '/', hash: '#contact' }} className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>
      Contact
    </Link>

    {/* ================= Special Sessions Dropdown ================= */}
    <div
      className="relative flex items-center"
      onMouseEnter={() => setSessionsOpen(true)}
      onMouseLeave={() => setSessionsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-trustnet-accent">
        Special Sessions
        <span className={`transition-transform duration-200 ${sessionsOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {sessionsOpen && (
        <div className="absolute top-full left-0 mt-3 z-50">
          <div className="absolute -top-3 left-0 w-full h-3" />

          <div className="bg-trustnet-card shadow-xl rounded-lg py-2 min-w-[220px] border border-trustnet-bg-light">
            <Link to="/special-sessions" className="block px-4 py-2 hover:bg-trustnet-bg">
              Special Sessions
            </Link>
            <Link to="/special-sessions/proposal" className="block px-4 py-2 hover:bg-trustnet-bg">
              Special Session Proposal
            </Link>
          </div>
        </div>
      )}
    </div>
  </>
);


  return (
    <div className="w-full min-h-screen font-sans">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md fixed top-0 z-50 border-b border-trustnet-bg-light">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800" style={{ marginLeft: "20px" }}>
            <img src={manipalLogo} alt="Manipal Logo" style={{ height: "70px", width: "auto" }} />
          </Link>

          <div className="hidden lg:flex space-x-6 text-slate-700 font-medium items-center">
            {navLinks}
          </div>

          <div className="hidden lg:block">
            <span className="bg-trustnet-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              HYBRID
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu - flat links for touch */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-trustnet-bg border-t border-trustnet-bg-light py-4 px-6 space-y-2">
            <Link to="/" className="block py-2 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to={{ pathname: '/', hash: '#about' }} className="block py-2 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/call-for-papers" className="block py-2 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Call for Papers</Link>
            <Link to={{ pathname: '/', hash: '#speakers' }} className="block py-2 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Speakers</Link>
            <span className="block py-2 font-medium text-gray-500">Committee</span>
            <Link to="/committee/advisory" className="block py-2 pl-4 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Advisory Board</Link>
            <Link to="/committee/organizing" className="block py-2 pl-4 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Organizing Committee</Link>
            <span className="block py-2 font-medium text-gray-500">For Authors</span>
            <Link to="/for-authors/guidelines" className="block py-2 pl-4 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Guidelines</Link>
            <Link to="/for-authors/submission" className="block py-2 pl-4 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Paper Submission</Link>
            <Link to="/for-authors/registration" className="block py-2 pl-4 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Registration</Link>
            <Link to="/for-authors/brochure" className="block py-2 pl-4 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Brochure</Link>
            <Link to={{ pathname: '/', hash: '#contact' }} className="block py-2 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <span className="block py-2 font-medium text-gray-500">Special Sessions</span>
            <Link to="/special-sessions" className="block py-2 pl-4 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Special Sessions</Link>
            <Link to="/special-sessions/proposal" className="block py-2 pl-4 hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Session Proposal</Link>
            <div className="pt-2">
              <span className="bg-trustnet-primary text-white px-3 py-1 rounded-full text-sm font-semibold">HYBRID</span>
            </div>
          </div>
        )}
      </nav>

      {/* Main content - add pt for fixed navbar */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer - shared across all pages */}
      <footer id="contact" className="bg-trustnet-primary-dark text-trustnet-lighter pt-12 pb-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-sm">
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact:</h3>
              <p>Email: trustnet2026@gmail.com</p>
              <p className="mt-2">Dr. Satyabrata Roy (Program Co-Chair)</p>
              <p>Dr. Amit Garg (Convener)</p>
              <p>Dr. Ankur Pandey (Convener)</p>
            </div>
            <div className="text-center">
              <img src = "/assets/manipal-logo.png" alt="Manipal Logo" className="mx-auto mb-4" style={{ height: "80px", width: "auto" }} />
              <p>Dehmi Kalan, Off Jaipur-Ajmer Expressway,</p>
              <p>Jaipur, Rajasthan, India - 303007</p>
            </div>
            <div className="text-right">
              <img src = "/assets/trustnet.webp" alt="TrustNet Logo" className="mx-auto mb-4" style={{ height: "80px", width: "auto" }} />
            </div>
          </div>
          <div className="border-t border-trustnet-primary-darker mt-8 pt-4 text-center text-sm text-trustnet-light">
            <div className="flex justify-between">
              <span>© 2026 All rights reserved.</span>
              <span> Total Visitors: 99</span>
              <span>Developed by WIE WebDev Team</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
