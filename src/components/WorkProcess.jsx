import React from 'react';
import { workProcessData } from "../data/workProcess";

function WorkProcess({ data = workProcessData }) {
  const { badgeText, headingPrefix, headingHighlight, paragraphs, steps } = data;
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-wrap grid gap-12 lg:grid-cols-2 lg:items-start">
        
        {/* Left Side Content */}
        <div className="max-w-xl">
          <p className="text-[12px] font-semibold text-primary bg-primary/5 px-4 py-1 rounded-full border border-primary/10 inline-block">
            {badgeText}
          </p>
          <h2 className="mt-6 text-4xl font-extrabold text-[#0F172A] sm:text-5xl leading-tight">
            {headingPrefix}{" "}
            <span className="text-primary">{headingHighlight}</span> <br /> Process
          </h2>
          
          <div className="mt-8 space-y-6 text-gray-700 text-[15px] leading-relaxed">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Right Side Vertical Steps */}
        <div className="space-y-4">
          {steps.map(({ id, title, desc }) => (
            <div 
              key={id} 
              className="group flex gap-6 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Roman Numeral Icon */}
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white font-bold text-sm">
                {id}
              </div>

              {/* Step Text */}
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkProcess;