import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "../components/Layout";
import Home from "../pages/home";
import About from "../pages/about";
import CallForPapers from "../pages/callForPapers";
import Speakers from "../pages/speakers";
import Committee from "../pages/committee";
import Guidelines from "../pages/forAuthors/guidelines";
import PaperSubmission from "../pages/forAuthors/paperSubmission";
import Registration from "../pages/forAuthors/registration";
import Brochure from "../pages/forAuthors/brochure";
import Contact from "../pages/contact";
import SpecialSessions from "../pages/specialSessions";
import SpecialSessionProposal from "../pages/specialSessionProposal";
import BestPaper from "../pages/Awards/bestPaper";
import YoungScientist from "../pages/Awards/youngScientist";

function App() {
  return (
    <BrowserRouter>
      {/* Scroll handler: always mounted inside the Router */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="committee/advisory" element={<Committee type="advisory" />} />
          <Route path="committee/organizing" element={<Committee type="organizing" />} />
          <Route path="for-authors/guidelines" element={<Guidelines />} />
          <Route path="for-authors/submission" element={<PaperSubmission />} />
          <Route path="for-authors/registration" element={<Registration />} />
          <Route path="for-authors/brochure" element={<Brochure />} />
          <Route path="contact" element={<Contact />} />
          <Route path="special-sessions" element={<SpecialSessions />} />
          <Route path="special-sessions/proposal" element={<SpecialSessionProposal />} />
          <Route path="/awards/best-paper" element={<BestPaper />} />
          <Route path="/awards/young-scientist" element={<YoungScientist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
