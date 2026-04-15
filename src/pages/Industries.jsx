import DreamProject from "../components/DreamProject";
import IndustryCards from "../components/IndustryCards";
import Testimonials from "../components/Testimonials"
import TestimonialsSection from "../components/TestimonialsSection";
const Industries = () => {
  return (
    <div className="bg-white">
      {/* Services Hero Section */}
      <section className="bg-[#EEF5FF] py-24 text-center">
        <div className="container-wrap">
          <h1 className="text-5xl font-bold text-slate-800">
          Industries <span className="text-[#B82968]">We Serve </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-md text-gray-600">
          We deliver tailored digital solutions — from software and apps to ERP and web <br /> platforms — designed to drive growth, efficiency, and lasting impact in every <br /> Industry
          </p>
        </div>
        
      </section>
      <IndustryCards/>
      <Testimonials/>
      <TestimonialsSection/>
      <DreamProject/>
    
     
      
      {/* Aap yahan mazeed sections jaise 'Pricing' ya 'FAQ' add kar sakte hain */}
    </div>
  );
};
export default Industries;