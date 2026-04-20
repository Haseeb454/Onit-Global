import React from 'react';
import { Link } from "react-router-dom";
// Geometric shapes wali image ko apne assets se link karein
import geometricGraphics from '../assets/Graphics.png';

const DreamProject = () => {
  return (
    /* Section ki vertical padding kam kar di */
    <section className="bg-white py-">
      {/* Container ki height kam kar ke 180px kar di hai (aap h-[150px] bhi kar sakte hain) */}
      <div className="w-full bg-[#C43062] relative h-[280px] flex items-center shadow-lg overflow-hidden">
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="w-full px-6 md:px-16 lg:px-24 grid grid-cols-2 items-center relative z-10 h-full">
          
          {/* Left Side: Content */}
          <div className="text-left flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Ready to build your <br /> next <span className="text-[#0F172A] font-extrabold">Dream Project?</span>
            </h2>
            
            <div className="mt-4">
              <Link to="/Contact">
                <button className="bg-white text-[#BE185D] px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-all shadow-md active:scale-95">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-end items-center h-full overflow-hidden">
            <div className="h-full w-full max-w-[600px]">
               <img 
                  src={geometricGraphics} 
                  alt="Geometric Graphics" 
                  className="w-full h-[300px] object-contain object-right opacity-100 " 
               /> 
            </div>

            {/* Subtle Dot Decoration */}
            <div className="absolute top-4 right-6 flex gap-1.5">
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamProject;