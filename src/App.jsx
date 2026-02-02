import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../components/Layout";

import Home from "../pages/home";
import About from "../pages/about";
import CallForPapers from "../pages/callForPapers";
import Speakers from "../pages/speakers";

import Committee from "../pages/committee";
import AdvisoryBoard from "../pages/advisoryboard";
import OrganizingCommittee from "../pages/OrganizingCommittee";

import Guidelines from "../pages/forAuthors/guidelines";
import PaperSubmission from "../pages/forAuthors/paperSubmission";
import Registration from "../pages/forAuthors/registration";
import Brochure from "../pages/forAuthors/brochure";

import Contact from "../pages/contact";
import SpecialSessions from "../pages/specialSessions";
import SpecialSessionProposal from "../pages/specialSessionProposal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="speakers" element={<Speakers />} />

          {/* ✅ COMMITTEE */}
          <Route path="committee" element={<Committee />}>
            <Route index element={<AdvisoryBoard />} />
            <Route path="advisory" element={<AdvisoryBoard />} />
            <Route path="organizing" element={<OrganizingCommittee />} />
          </Route>

          <Route path="for-authors/guidelines" element={<Guidelines />} />
          <Route path="for-authors/submission" element={<PaperSubmission />} />
          <Route path="for-authors/registration" element={<Registration />} />
          <Route path="for-authors/brochure" element={<Brochure />} />

          <Route path="contact" element={<Contact />} />
          <Route path="special-sessions" element={<SpecialSessions />} />
          <Route
            path="special-sessions/proposal"
            element={<SpecialSessionProposal />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
