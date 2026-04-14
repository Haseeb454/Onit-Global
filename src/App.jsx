import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import FeatureSection from "./components/FeatureSection";
import StatsBar from "./components/StatsBar";
import ServicesGrid from "./components/ServicesGrid";
import ToolsShowcase from "./components/ToolsShowcase";
import IndustrySection from "./components/IndustrySection";
import WorkProcess from "./components/WorkProcess";
import Testimonials from "./components/Testimonials";
import HowChooseUs from "./components/HowChooseUs";
import ContactUs from "./components/ContactUs";
import GlobalPresence from "./components/GlobalPresence";
import DreamProject from "./components/DreamProject";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
