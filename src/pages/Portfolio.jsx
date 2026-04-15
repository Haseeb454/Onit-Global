import DreamProject from "../components/DreamProject";
import ProjectsSection from "../components/ProjectsSection";
const Portfolio = () => {
    return (
      <div className="bg-white">
        {/* Services Hero Section */}
        <section className="bg-[#F7FBFF] py-24 text-center">
          <div className="container-wrap">
            <h1 className="text-6xl font-bold text-slate-800">
            Our <span className="text-[#B82968]">Portfolio</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-md text-gray-600">
            Explore the innovative digital solutions we’ve delivered across diverse industries. <br /> Every project reflects our dedication to excellence and creativity.
            </p>
          </div>
        </section>
       
        
        <ProjectsSection/>
        <DreamProject/>
      
      </div>
      
    );
  };
  export default Portfolio;