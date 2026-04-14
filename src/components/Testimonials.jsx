import React from 'react';
import bunafrImg from '../assets/bunafr.jpg'; 
import divinityImg from '../assets/bunafr.jpg'; 
import lockerImg from '../assets/bunafr.jpg';

const projects = [
  {
    title: "Bunafr",
    desc: "Bunafr is a smart home coffee roaster that enables greater supply chain efficiencies and the possibility to create an equitable society. We...",
    image: bunafrImg 
  },
  {
    title: "Divinity Metals",
    desc: "An elegant e-commerce platform for Divinity Metals, offering a seamless shopping experience for their gold collection and various jewelry...",
    image: divinityImg 
  },
  {
    title: "Locker Room",
    desc: "Locker Room is an app used by college athletes and fans to exchange video messages asking for shoutouts, coaching advice, or general...",
    image: lockerImg
  }
];

function ProvenResults() {
  return (
    <section className="bg-white py-16 sm:py-24 text-center">
      <div className="container-wrap mx-auto px-4 max-w-7xl">
        
        {/* Top Badge */}
        <div className="flex justify-center">
          <p className="text-[12px] font-semibold text-[#BE185D] bg-[#FDF2F8] px-4 py-1 rounded-full border border-[#FCE7F3] inline-block uppercase tracking-wider">
            Our Portfolio
          </p>
        </div>

        {/* Section Heading */}
        <h2 className="mt-6 text-4xl font-extrabold text-[#0F172A] sm:text-6xl tracking-tight">
          Proven Client <span className="text-[#BE185D] font-bold">Results</span>
        </h2>
        
        <p className="mt-6 text-gray-500 text-md font-medium max-w-2xl mx-auto">
          We help market leaders and innovators achieve their most ambitious goals.
        </p>

        {/* Portfolio Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <article 
              key={index} 
              className="group rounded-3xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-500 text-left overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-50">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              {/* Text Content */}
              <div className="mt-6 px-1">
                <h3 className="text-1xl font-bold text-[#0F172A] group-hover:text-[#BE185D] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16">
          <button className="bg-gradient-to-r from-[#BE185D] to-[#D83B61] text-white px-16 py-3 rounded-xl text-md hover:shadow-2xl hover:opacity-95 transition-all shadow-lg shadow-pink-200">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProvenResults;