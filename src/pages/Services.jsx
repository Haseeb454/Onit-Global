import ServicesGrid from "../components/ServicesGrid";
import Testimonials from "../components/Testimonials"
import TestimonialsSection from "../components/TestimonialsSection"
import DreamProject from "../components/DreamProject"
const Services = () => {
  return (
    <div className="bg-white">
      {/* Services Hero Section */}
      <section className="bg-[#F7FBFF] py-24 text-center">
        <div className="container-wrap">
          <h1 className="text-5xl font-bold text-slate-800">
            Our <span className="text-[#B82968]">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-md text-gray-600">
            We create digital solutions that help businesses grow. From software to apps and <br /> web platforms, our services deliver real impact.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <ServicesGrid />
     <Testimonials/>
     <TestimonialsSection/>
     <DreamProject/>
      
      {/* Aap yahan mazeed sections jaise 'Pricing' ya 'FAQ' add kar sakte hain */}
    </div>
  );
};
export default Services;