import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import FeatureSection from "./components/FeatureSection";
import StatsBar from "./components/StatsBar";
import ServicesGrid from "./components/ServicesGrid";
import ToolsShowcase from "./components/ToolsShowcase";
import WorkProcess from "./components/WorkProcess";
import Testimonials from "./components/Testimonials";
import HowChooseUs from "./components/HowChooseUs";
import ContactUs from "./components/ContactUs";
import GlobalPresence from "./components/GlobalPresence";
import DreamProject from "./components/DreamProject";
import Footer from "./components/Footer";
import IndustrySection from "./components/IndustrySection"
import Services from "./pages/Services"; 
import Industries from "./pages/Industries"
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        
        <Routes>
          {/* Home Route: Isme aapka saara existing content show hoga */}
          <Route path="/" element={
            <>
              <Hero />
              <LogoCloud />
              <FeatureSection />
              <StatsBar />
              <ServicesGrid />
              <ToolsShowcase />
              <IndustrySection />
              <WorkProcess />
              <Testimonials />
              <HowChooseUs />
              <ContactUs />
              <GlobalPresence />
              <DreamProject />
            </>
          } />

          {/* Services Route: Isme aapki alag file render hogi */}
          <Route path="/services" element={<Services />} />
          <Route path="/Industries" element={<Industries/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          <Route path="/Contact" element={<Contact/>} />




        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;