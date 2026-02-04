import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import manipalLogo from "../src/assets/manipal-logo.png";

function Layout() {
  const [committeeOpen, setCommitteeOpen] = useState(false);
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [sessionsOpen, setSessionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [awardsOpen, setAwardsOpen] = useState(false); // ✅ ONLY ADDITION

  const navLinks = (
    <>
      <Link to="/" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Home</Link>
      <a href="/#about" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>About</a>
      <Link to="/call-for-papers" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Call for Papers</Link>
      <a href="/#speakers" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Speakers</a>

      {/* Committee */}
      <div className="relative flex items-center" onMouseEnter={() => setCommitteeOpen(true)} onMouseLeave={() => setCommitteeOpen(false)}>
        <button className="flex items-center gap-1 hover:text-trustnet-accent">
          Committee <span className={`transition-transform duration-200 ${committeeOpen ? "rotate-180" : ""}`}>▼</span>
        </button>
        {committeeOpen && (
          <div className="absolute top-full left-0 mt-3 z-50">
            <div className="absolute -top-3 left-0 w-full h-3" />
            <div className="bg-trustnet-card shadow-xl rounded-lg py-2 min-w-[200px] border border-trustnet-bg-light">
              <Link to="/committee/advisory" className="block px-4 py-2 hover:bg-trustnet-bg">Advisory Board</Link>
              <Link to="/committee/organizing" className="block px-4 py-2 hover:bg-trustnet-bg">Organizing Committee</Link>
            </div>
          </div>
        )}
      </div>

      {/* For Authors */}
      <div className="relative flex items-center" onMouseEnter={() => setAuthorsOpen(true)} onMouseLeave={() => setAuthorsOpen(false)}>
        <button className="flex items-center gap-1 hover:text-trustnet-accent">
          For Authors <span className={`transition-transform duration-200 ${authorsOpen ? "rotate-180" : ""}`}>▼</span>
        </button>
        {authorsOpen && (
          <div className="absolute top-full left-0 mt-3 z-50">
            <div className="absolute -top-3 left-0 w-full h-3" />
            <div className="bg-trustnet-card shadow-xl rounded-lg py-2 min-w-[220px] border border-trustnet-bg-light">
              <Link to="/for-authors/guidelines" className="block px-4 py-2 hover:bg-trustnet-bg">Guidelines for Authors</Link>
              <Link to="/for-authors/submission" className="block px-4 py-2 hover:bg-trustnet-bg">Paper Submission</Link>
              <Link to="/for-authors/registration" className="block px-4 py-2 hover:bg-trustnet-bg">Registration</Link>
              <Link to="/for-authors/brochure" className="block px-4 py-2 hover:bg-trustnet-bg">Conference Brochure</Link>
            </div>
          </div>
        )}
      </div>

      <a href="/#contact" className="hover:text-trustnet-accent" onClick={() => setMobileMenuOpen(false)}>Contact</a>

      {/* Special Sessions */}
      <div className="relative flex items-center" onMouseEnter={() => setSessionsOpen(true)} onMouseLeave={() => setSessionsOpen(false)}>
        <button className="flex items-center gap-1 hover:text-trustnet-accent">
          Special Sessions <span className={`transition-transform duration-200 ${sessionsOpen ? "rotate-180" : ""}`}>▼</span>
        </button>
        {sessionsOpen && (
          <div className="absolute top-full left-0 mt-3 z-50">
            <div className="absolute -top-3 left-0 w-full h-3" />
            <div className="bg-trustnet-card shadow-xl rounded-lg py-2 min-w-[220px] border border-trustnet-bg-light">
              <Link to="/special-sessions" className="block px-4 py-2 hover:bg-trustnet-bg">Special Sessions</Link>
              <Link to="/special-sessions/proposal" className="block px-4 py-2 hover:bg-trustnet-bg">Special Session Proposal</Link>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Awards – ONLY ADDITION */}
      <div className="relative flex items-center" onMouseEnter={() => setAwardsOpen(true)} onMouseLeave={() => setAwardsOpen(false)}>
        <button className="flex items-center gap-1 hover:text-trustnet-accent">
          Awards <span className={`transition-transform duration-200 ${awardsOpen ? "rotate-180" : ""}`}>▼</span>
        </button>
        {awardsOpen && (
          <div className="absolute top-full left-0 mt-3 z-50">
            <div className="absolute -top-3 left-0 w-full h-3" />
            <div className="bg-trustnet-card shadow-xl rounded-lg py-2 min-w-[220px] border border-trustnet-bg-light">
              <Link to="/awards/best-paper" className="block px-4 py-2 hover:bg-trustnet-bg">Best Paper Award</Link>
              <Link to="/awards/young-scientist" className="block px-4 py-2 hover:bg-trustnet-bg">Young Scientist Award</Link>
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
          <Link to="/" style={{ marginLeft: "20px" }}>
            <img src={manipalLogo} alt="Manipal Logo" style={{ height: "70px" }} />
          </Link>

          <div className="hidden lg:flex space-x-6 text-slate-700 font-medium items-center">
            {navLinks}
          </div>

          <div className="hidden lg:block">
            <span className="bg-trustnet-primary text-white px-3 py-1 rounded-full text-sm font-semibold">HYBRID</span>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
        </div>
      </nav>

      <main className="pt-20">
        <Outlet />
      </main>

      {/* FOOTER — UNTOUCHED */}
      <footer id="contact" className="bg-trustnet-primary-dark text-trustnet-lighter pt-12 pb-6">
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
              <img src="/assets/manipal-logo.png" alt="Manipal Logo" className="mx-auto mb-4" style={{ height: "80px" }} />
              <p>Dehmi Kalan, Off Jaipur-Ajmer Expressway,</p>
              <p>Jaipur, Rajasthan, India - 303007</p>
            </div>
            <div className="text-right">
              <img src="/assets/trustnet.webp" alt="TrustNet Logo" className="mx-auto mb-4" style={{ height: "80px" }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

