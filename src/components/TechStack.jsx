import React from 'react';
import { techStackData } from "../data/techStack";

const TechStack = () => {
  const { header, tools } = techStackData;

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1240px] mx-auto text-center">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <span className="bg-[#e8eef7] text-[#C03565] text-[13px] font-bold px-5 py-1.5 rounded-full mb-6 font-sans tracking-wide uppercase">
            {header.badgeText}
          </span>
          <h2 className="text-[#1e293b] text-[56px] font-[800] leading-[1.1] font-sans">
            {header.titlePrefix}{" "}
            <span className="text-[#C03565]">{header.titleHighlight}</span>{" "}
            {header.titleSuffix}
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-4 bg-white border border-gray-100 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-[#1e293b] text-[15px] font-[700] tracking-wider font-sans">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;