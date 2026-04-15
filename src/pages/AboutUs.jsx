import AboutSection from "../components/AboutSection";
import AwardsSection from "../components/AwardsSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import FeatureSection from "../components/FeatureSection";
import StatsBar from "../components/StatsBar";
import TeamSection from "../components/TeamSection";
import DreamProject from "../components/DreamProject";
const AboutUs = () => {
    return (
      <div className="bg-white">
        {/* Services Hero Section */}
        <section className="bg-[#F7FBFF] py-24 text-center">
          <div className="container-wrap">
            <h1 className="text-5xl font-bold text-slate-800">
            About <span className="text-[#B82968]">Us</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-md text-gray-600">
            Onit is dedicated to delivering innovative digital solutions that help businesses grow <br /> and succeed. With a skilled team and over a decade of experience, we turn ideas <br /> into impactful, reliable technology.
            </p>
          </div>
        </section>
        <FeatureSection/>
        <StatsBar/>
        <AboutSection/>
        <AwardsSection/>
        <TeamSection/>
        <BlogSection/>
        <br /><br /><br />
        <ContactSection/>
        <DreamProject/>
  
      
      </div>
    );
  };
  export default AboutUs;