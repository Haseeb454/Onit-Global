import heroImage from "../assets/Aboutimage.png";
import bgPattern from "../assets/aboutback.png"; 

function FeatureSection() {
  return (
    <section 
      className="relative bg-soft py-16 sm:py-20 bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
  
      <div className="absolute inset-0 bg-white/50 pointer-events-none"></div>

      <div className="container-wrap relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-xl shadow-soft">
          <img src={heroImage} alt="Building digital products" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-white bg-pink-gradient px-2 py-1 p-1 rounded-full w-fit">About Us</p>
          <h1 className="text-3xl font-extrabold leading-tight text-deep sm:text-5xl">
            Building Digital <br /> Solutions with <br /> Purpose
          </h1>
          <p className="mt-8 text-gray-600">
            Onit is a Pakistan-based digital solutions company helping <br /> businesses worldwide grow with custom software, mobile apps, <br /> ERP systems, and web platforms. With 10+ years of expertise, we <br /> deliver simple, effective, and innovative products — built on trust <br /> and long-term partnerships.
          </p>
          <div className="mt-8">
            <ul className="list-disc list-inside flex flex-col space-y-3 mb-4 ">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>ERP & Business Solutions</li>
              <li>Web Design & Development</li>
              <li>E-Commerce Platforms</li>
            </ul> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;