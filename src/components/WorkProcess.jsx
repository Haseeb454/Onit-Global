import React from 'react';

const steps = [
  {
    id: "I",
    title: "Discover & Plan",
    desc: "We dive deep into understanding your business goals and challenges. Together, we define a clear roadmap for success."
  },
  {
    id: "II",
    title: "Design & Prototype",
    desc: "Our team creates intuitive designs and interactive prototypes. This ensures a seamless user experience before development begins."
  },
  {
    id: "III",
    title: "Develop & Implement",
    desc: "We build robust, scalable, and high-performing solutions tailored to your needs. Every line of code is crafted for efficiency and reliability."
  },
  {
    id: "IV",
    title: "Test & Launch",
    desc: "We rigorously test every feature to ensure quality and performance. Once ready, we deploy your solution for a smooth, successful launch."
  }
];

function WorkProcess() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-wrap grid gap-12 lg:grid-cols-2 lg:items-start">
        
        {/* Left Side Content */}
        <div className="max-w-xl">
          <p className="text-[12px] font-semibold text-primary bg-primary/5 px-4 py-1 rounded-full border border-primary/10 inline-block">
            How We Work
          </p>
          <h2 className="mt-6 text-4xl font-extrabold text-[#0F172A] sm:text-5xl leading-tight">
            Our <span className="text-primary">Work</span> <br /> Process
          </h2>
          
          <div className="mt-8 space-y-6 text-gray-700 text-[15px] leading-relaxed">
            <p>
              We combine strategy, technology, and creativity to deliver <br /> solutions that meet real business needs. Our collaborative <br />approach ensures every project is efficient, effective, and built for <br />  long-term success.
            </p>
            <p>
              Our collaborative approach ensures transparency and adaptability <br /> at every stage, from discovery and planning to execution and <br />support. We work closely with our clients to understand their <br /> goals, streamline processes, and implement solutions that deliver <br /> measurable results.
            </p>
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