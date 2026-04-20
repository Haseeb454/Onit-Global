import React from 'react';
import { Link } from 'react-router-dom'; // Ye import add kiya hai
import {
  CarFront,
  HeartPulse,
  Landmark,
  Monitor,
  Trophy,
  Zap,
} from "lucide-react";
import { industrySectionData } from "../data/industrySection";

const iconMap = {
  HeartPulse,
  Landmark,
  Trophy,
  Monitor,
  Zap,
  CarFront,
};

function IndustrySection() {
  const { badgeText, headingPrefix, headingHighlight, description, viewAllText, industries } =
    industrySectionData;

  return (
    <section className="bg-white py-16 sm:py-20 text-center">
      <div className="container-wrap mx-auto px-4">
        {/* Top Badge */}
        <div className="flex justify-center">
          <p className="text-[12px] font-semibold text-primary bg-gray-100 px-4 py-1 rounded-full border">
            {badgeText}
          </p>
        </div>

        {/* Heading Section */}
        <h2 className="mt-4 text-4xl font-extrabold text-[#0F172A] sm:text-5xl">
          {headingPrefix} <br /> <span className="text-primary">{headingHighlight}</span>
        </h2>
        
        <p className="mt-5 text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Industry Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, iconKey, desc }) => {
      
            const IconComponent = iconMap[iconKey];

            return (
              <article 
                key={title} 
                className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#FDF2F8] text-primary">
                  {IconComponent ? <IconComponent size={24} /> : null}
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <h3 className="text-[17px] font-bold text-[#0F172A]">{title}</h3>
                  <p className="text-[13px] text-gray-400 mt-0.5">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <Link 
            to="/industries" 
            className="inline-block bg-primary text-white px-10 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            {viewAllText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IndustrySection;