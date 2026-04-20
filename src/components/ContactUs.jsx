import React from 'react';
import { Link } from "react-router-dom";
// Aapki akathi (single) image ka import
import missionImage from '../assets/Group.png'; 

const ContactUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      {/* Main Container - height 400px par fix hai */}
      <div className="max-w-7xl mx-auto bg-[#F6F6F6] rounded-[40px] overflow-hidden relative flex items-center shadow-sm h-[400px]">
        
        <div className="grid lg:grid-cols-2 w-full h-full items-center">
          
          {/* Left Side: Content */}
          <div className="p-10 md:p-12 lg:p-16 z-10 text-left">
            <span className="text-[#BE185D] font-bold text-sm  uppercase mb-4 block">
              Contact Us Now
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-[#0F172A] mb-8">
              Our mission is to look after the best interests of your business.
            </h2>
            
            <Link to="/contact">
              <button className="bg-gradient-to-r from-[#BE185D] to-[#8E24AA] text-white px-7 py-3 rounded-full font-bold text-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                Book a Service
              </button>
            </Link>
          </div>

          {/* Right Side: Image Container */}
          <div className="relative hidden lg:block h-full">
            <img 
              src={missionImage} 
              alt="Our Mission" 
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      </div>
    </section>
  );
};

export default ContactUs;