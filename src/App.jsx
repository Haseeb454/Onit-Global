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
import BlogDetailPage from "./pages/BlogDetailPage";
import Contact from "./pages/Contact";
import ServiceDetailPage from "./pages/ServiceDetailPage";
// 1. Ye naya page import karo (jo hum abhi banayein ge)
import IndustryDetailPage from "./pages/IndustryDetailPage"; 
import ScrollToTop from "./components/ScrollToTop";

// React Hot Toast Import kiya gaya hai
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white">
        {/* Global Toaster add kiya hai taake har page par notification chal sakay */}
        <Toaster position="top-right" reverseOrder={false} />
        
        <Navbar />
        
        <Routes>
          {/* Home Route */}
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

          {/* Existing Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries/>} />
          <Route path="/Industries" element={<Industries/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/Contact" element={<Contact/>} />
          
          <Route path="/services/:slug" element={<ServiceDetailPage />} />

          <Route path="/industries/:slug" element={<IndustryDetailPage />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;