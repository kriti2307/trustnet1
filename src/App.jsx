import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../components/Layout";
import Home from "../pages/home";
import About from "../pages/about";
import CallForPapers from "../pages/callForPapers";
import Speakers from "../pages/speakers";
import Committee from "../pages/committee";
import Advisory from "../pages/advisory";
import Organizing from "../pages/organizing";
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

          {/* Home */}
          <Route index element={<Home />} />

          {/* Main Pages */}
          <Route path="about" element={<About />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="committee/advisory" element={<Committee type="advisory" />} />
          <Route path="committee/organizing" element={<Committee type="organizing" />} />
          <Route path="for-authors/guidelines" element={<Guidelines />} />
          <Route path="for-authors/submission" element={<PaperSubmission />} />
          <Route path="for-authors/registration" element={<Registration />} />
          <Route path="for-authors/brochure" element={<Brochure />} />

          {/* Other Pages */}
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
