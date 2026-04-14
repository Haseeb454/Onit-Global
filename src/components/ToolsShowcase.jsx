import React from 'react';
import img from '../assets/tools.png';

function ToolsShowcase() {
  return (
    <section className="bg-[#FEFBFB] py-16 sm:py-20">
      <div className="container-wrap grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left Side Content */}
        <div>
          <p className="text-sm font-semibold text-primary bg-gray-300 inline-block px-4 py-1 rounded-full">
            Our Tech Stack
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-deep sm:text-5xl">
            Our<span className="text-primary"> Tools</span> that Power <br /> Our Solutions
          </h1>
          <p className="mt-5 text-gray-600 text-sm">
            We leverage the latest technologies and tools to build robust, scalable,
            <br /> and high-performing digital solutions. Our tech stack combines modern 
            <br /> frameworks, cloud platforms, and development tools to deliver products 
            <br /> that are efficient, secure, and future-ready.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex items-end justify-center">
          <img 
            /* 2. Yahan string path ki jagah variable use karein */
            src={img} 
            alt="Tech Stack Diagram" 
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default ToolsShowcase;