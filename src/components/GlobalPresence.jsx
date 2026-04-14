import React from 'react';
import worldMap from '../assets/Map.png'; 

function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background Subtle Gradient Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(190,24,93,0.05),_transparent_70%)]" />
      
      <div className="container-wrap relative text-center mx-auto px-4">
        {/* Top Badge */}
        <div className="flex justify-center">
          <p className="text-[12px] font-semibold text-primary bg-primary/5 px-4 py-1 rounded-full border border-primary/10 inline-block uppercase tracking-wider">
            Our Global Presence
          </p>
        </div>

        {/* Heading Section */}
        <h2 className="mt-6 text-4xl font-extrabold text-[#0F172A] sm:text-6xl tracking-tight">
          Wherever You Are, <br /> We Are <span className="text-primary">There</span>
        </h2>
        <p className='text-center text-sm mt-6'>With a presence in 15+ countries, we deliver reliable digital solutions to businesses around the world.</p>

        {/* Map Image Placeholder Container */}
        <div className="mt-16 relative w-full max-w-5xl mx-auto flex justify-center">
          {/* Yahan aap apni assets wali pic lagayen ge */}
          <div className="w-full min-h-[300px] md:min-h-[500px] flex items-center justify-center">
              {<img 
                  src={worldMap} 
                  alt="Global Map Presence" 
                  className="w-full h-auto object-contain"
                /> 
              }
              
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalPresence;