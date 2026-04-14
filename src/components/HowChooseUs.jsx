import React from 'react';

// Images ko yahan import karein (Placeholders)
// import img1 from '../assets/advantage1.jpg';
// import img2 from '../assets/advantage2.jpg';
// import img3 from '../assets/advantage3.jpg';
// import img4 from '../assets/advantage4.jpg';

const advantages = [
  {
    id: "01",
    title: "10+ Years of Experience",
    desc: "Over a decade of delivering innovative digital solutions to businesses worldwide."
  },
  {
    id: "02",
    title: "3000+ Satisfied Clients",
    desc: "Trusted by thousands of businesses worldwide for reliable digital solutions."
  },
  {
    id: "03",
    title: "6+ Creative & Tech Excellence Awards",
    desc: "Recognized for innovation and technical excellence in delivering outstanding digital solutions."
  },
  {
    id: "04",
    title: "200+ Startups Trust Us",
    desc: "Helping startups worldwide turn ideas into scalable, high-performing digital solutions."
  },
  {
    id: "05",
    title: "24/7 Support",
    desc: "Always available to assist you, ensuring your digital solutions run smoothly around the clock."
  },
  {
    id: "06",
    title: "Transparent Pricing",
    desc: "Clear, upfront pricing with no hidden fees, so you always know what you're investing in."
  }
];

function HowChooseUs() {
  return (
    <section className="bg-white py-20 px-14">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Images and Text */}
        <div className="space-y-7">
          <div>
            <span className="text-[12px] font-semibold text-[#BE185D] bg-[#FDF2F8] px-4 py-1 rounded-full border border-[#FCE7F3] uppercase tracking-wider inline-block mb-4">
              How Choose Us?
            </span>
            <h2 className="text-5xl font-extrabold text-[#0F172A] leading-tight">
              Your <span className="text-[#BE185D]">Advantage</span> <br />
              with Onit Global
            </h2>
            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              We combine expertise, innovation, and a client-focused <br /> approach to deliver 
              solutions that drive real results. Partnering <br /> with us means gaining a 
              trusted technology team dedicated to <br /> your growth.
            </p>
          </div>

          {/* Image Masonry Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square">
                 <img src={"https://onitsol.com/images/home/Base.png"} alt="advantage" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
                 <img src={"https://onitsol.com/images/home/3.png"} alt="advantage" className="w-full h-full object-cover" /> 
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
                  <img src={"https://onitsol.com/images/home/2.png"} alt="advantage" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square">
                <img src={"https://onitsol.com/images/home/4.png"} alt="advantage" className="w-full h-full object-cover" /> 
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Advantage Cards Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {advantages.map((item) => (
            <div key={item.id} className="group">
              <span className="text-2xl font-black text-primary  italic block mb-2">
                {item.id}
              </span>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-[13px] ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowChooseUs;