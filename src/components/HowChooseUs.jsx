import React from 'react';
import { howChooseUsData } from "../data/howChooseUs";

// Images ko yahan import karein (Placeholders)
// import img1 from '../assets/advantage1.jpg';
// import img2 from '../assets/advantage2.jpg';
// import img3 from '../assets/advantage3.jpg';
// import img4 from '../assets/advantage4.jpg';

function HowChooseUs({ data = howChooseUsData }) {
  const { left, advantages } = data;
  return (
    <section className="bg-white py-20 px-14">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Images and Text */}
        <div className="space-y-7">
          <div>
            <span className="text-[12px] font-semibold text-[#BE185D] bg-[#FDF2F8] px-4 py-1 rounded-full border border-[#FCE7F3] uppercase tracking-wider inline-block mb-4">
              {left.badgeText}
            </span>
            <h2 className="text-5xl font-extrabold text-[#0F172A] leading-tight">
              {left.headingLines[0]}
              <span className="text-[#BE185D]">{left.headingLines[1]}</span> <br />
              {left.headingLines[2]}
            </h2>
            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              {left.description}
            </p>
          </div>

          {/* Image Masonry Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square">
                 <img src={left.masonryImages[0].src} alt={left.masonryImages[0].alt} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
                 <img src={left.masonryImages[1].src} alt={left.masonryImages[1].alt} className="w-full h-full object-cover" /> 
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
                  <img src={left.masonryImages[2].src} alt={left.masonryImages[2].alt} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square">
                <img src={left.masonryImages[3].src} alt={left.masonryImages[3].alt} className="w-full h-full object-cover" /> 
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