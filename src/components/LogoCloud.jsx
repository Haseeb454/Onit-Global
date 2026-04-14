import React from 'react';
// Pehle images ko import karein
import airbnb from '../assets/Airbnb.png';
import creative from '../assets/creative.png';
import shopify from '../assets/shopify.png';
import amazon from '../assets/amazon.png';
import google from '../assets/google.png';

const logos = [
  { name: "airbnb", src: airbnb },
  { name: "creativemarket", src: creative },
  { name: "shopify", src: shopify },
  { name: "Amazon", src: amazon },
  { name: "Google", src: google },
];
function LogoCloud() {
  return (
    <section className="border-b border-gray-100 bg-white py-8 sm:py-10">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-black">
          Trusted by the greatest companies
        </p>
        
        <div className="grid grid-cols-2 gap-6 items-center justify-center sm:grid-cols-2 lg:grid-cols-5">
          {logos.map((logo) => (
            <div 
              key={logo.name} 
              className="flex items-center justify-center h-16 px-4 py-2"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoCloud;