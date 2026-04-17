import React from 'react';
import { useParams } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineChartBar, HiCheckCircle } from 'react-icons/hi';
import LogoCloud from '../components/LogoCloud';
import ContactSection from '../components/ContactSection';
import DreamProject from '../components/DreamProject';

const IndustryDetailPage = () => {
  const { slug } = useParams();
  
  // URL slug ke mutabiq data file se sahi object uthana
  const data = industriesData[slug];

  // Agar data na mile (invalid URL)
  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-white text-gray-900 font-bold text-2xl">
        Industry Not Found
      </div>
    );
  }

  // Icons array for 'Why Choose' section
  const icons = [
    <HiOutlineLightBulb className="w-6 h-6 text-white" />,
    <HiOutlineUserGroup className="w-6 h-6 text-white" />,
    <HiOutlineShieldCheck className="w-6 h-6 text-white" />,
    <HiOutlineChartBar className="w-6 h-6 text-white" />
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section - Dynamic Data */}
      <section className="relative w-full bg-[#F1F7FF] px-6 pt-32 pb-20 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
          <div className="inline-flex items-center bg-[#eef2f6] px-4 py-1.5 rounded-full mb-8 shadow-sm border border-[#e2e8f0]">
            <span className="text-[#64748b] text-[13px] font-medium tracking-wide">
              {data.breadcrumb}
            </span>
          </div>
          <h1 className="text-[#1e293b] text-5xl md:text-6xl lg:text-[65px] font-bold tracking-tight leading-[1.1] mb-8">
            {data.title}
          </h1>
          <p className="text-[#475569] text-lg md:text-xl lg:text-[18px] leading-relaxed max-w-[850px] font-light tracking-wide">
            {data.heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Why Choose Section - Dynamic Data */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="inline-block bg-[#F1F1F1] px-4 py-1 rounded-full mb-6">
            <span className="text-[10px] font-bold text-[#A62B62] uppercase tracking-[0.2em]">What we do</span>
          </div>
          <h2 className="text-[#0F172A] text-[48px] font-bold leading-[1.2] mb-4">
            {data.whySection.mainTitle}
          </h2>
          <p className="text-[#64748B] text-[15px] leading-[1.6] max-w-[700px] mx-auto mb-16 font-medium">
            {data.heroDescription}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {data.whySection.points.map((point, index) => (
              <div key={index} className="flex flex-col items-start text-left p-8 rounded-[12px] border border-[#E2E8F0] bg-white hover:shadow-lg transition-shadow duration-300 min-h-[440px]">
                <div className="w-[45px] h-[45px] rounded-full bg-[#A62B62] flex items-center justify-center mb-8">
                  {/* Rotating through icons based on index */}
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-[#0F172A] text-[18px] font-bold leading-[1.3] mb-4">
                  {point.title}
                </h3>
                <p className="text-[#64748B] text-[14px] leading-[1.7] font-normal">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
          
          <button className="bg-gradient-to-r from-[#8E2D5E] to-[#D83B64] text-white px-8 py-3.5 rounded-[8px] text-[14px] font-bold hover:opacity-90 transition-opacity mb-24">
            Ask What Onit Global can do for you
          </button>
        </div>
      </section>

      {/* 3. Solutions Section - Dynamic Title and List */}
      <section className="pb-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#F1F1F1] px-4 py-1 rounded-full mb-4">
              <span className="text-[10px] font-bold text-[#A62B62] uppercase tracking-[0.2em]">Our Solutions</span>
            </div>
            <h2 className="text-[#0F172A] text-[48px] font-bold leading-[1.1] mb-4">
              Software Applications and <br /> Solutions for <span className="text-[#A62B62]">{data.title.replace('Industry', '')}</span>
            </h2>
            <p className="text-[#64748B] text-[16px]">
              See what services and solutions we provide to our clients
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
              <img 
                src="https://onitsol.com/images/home/630%20x%20500%20-%2001mid.jpg" 
                alt={data.title} 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Solutions List - Dynamic Mapping */}
            <div className="space-y-4">
              {data.solutions.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <HiCheckCircle className="text-[#A62B62] w-5 h-5 flex-shrink-0" />
                  <span className="text-[#475569] text-[16px] font-medium group-hover:text-[#A62B62] transition-colors cursor-default">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Components */}
      <LogoCloud />
      <div className="py-10"></div> {/* Spacer */}
      <ContactSection />
      <DreamProject />
    </div>
  );
};

export default IndustryDetailPage;