import React from 'react';

const AboutSection = () => {
  const COLORS = {
    badgeBg: '#F8EFF3',
    badgeText: '#A12F6B',
    heading: '#1F2937',
    highlight: '#A12F6B',
    paragraph: '#6B7280',
    counter: '#A12F6B',
    counterLabel: '#4B5563',
  };

  const counterData = [
    { number: '130', label: 'Project Completed' },
    { number: '3K+', label: 'Awesome clients' },
    { number: '10+', label: 'Years of Experience' },
    { number: '5', label: 'Awards Winning' },
  ];

  return (
    <div className="w-full bg-white font-sans py-16 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto space-y-10">
        
        {/* === Header Section === */}
        <div className="space-y-6 w-full">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider"
            style={{ backgroundColor: COLORS.badgeBg, color: COLORS.badgeText }}
          >
            DISCOVER THE ADVANTAGE
          </div>

          <h1
            className="text-[40px] md:text-[64px] font-extrabold leading-tight"
            style={{ color: COLORS.heading }}
          >
            We are a IT service Company working <br className="hidden md:block" /> with talents on{' '}
            <span style={{ color: COLORS.highlight }}>delivering unique ideas</span>.
          </h1>

          <p
            className="text-[19px] leading-relaxed w-full max-w-none"
            style={{ color: COLORS.paragraph }}
          >
            Onit is a leading digital solutions company based in Pakistan, delivering innovative technology to businesses <br className="hidden md:block" /> across the globe. With over a decade of experience, we specialize in custom software, mobile apps, ERP <br className="hidden md:block" /> systems, and creative web solutions that help organizations grow and perform better.
          </p>
        </div>

        {/* === Equal Height Grid Section === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          
          {/* Left Side: Image Container */}
          <div className="w-full ">
            <div className="w-full h-full aspect-[3/4] md:aspect-auto md:h-[650px] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://onitsol.com/images/home/pexels-fauxels-3183172.jpg" 
                alt="Team Collaboration" 
                className="w-full h-full object-cover   " 
              />
            </div>
          </div>

          {/* Right Side: Content Aligned with Image Height */}
          <div className="flex flex-col justify-between h-full py-2">
            
            <p
              className="text-[17px] leading-relaxed mb-8"
              style={{ color: COLORS.paragraph }}
            >
              We combine creativity, strategy, and technology to craft solutions that solve real business challenges. Every project is handled collaboratively, ensuring efficiency, quality, and long-term partnerships. Our team of experts brings deep industry knowledge and a passion for innovation, allowing us to design solutions that are not only effective today but also adaptable for the future.
            </p>

            {/* Counters Grid with Shadow & Hover Effect */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {counterData.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative p-8 bg-white rounded-2xl border border-gray-50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(161,47,107,0.15)] hover:-translate-y-2 cursor-default overflow-hidden"
                >
                  {/* Design Line with Hover Animation */}
                  <div
                    className="absolute top-0 left-0 w-16 h-[4px] transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: COLORS.counter }}
                  />

                  {/* Even Larger Numbers */}
                  <div
                    className="text-[60px] md:text-[100px] font-bold leading-none tracking-tighter transition-transform duration-300 group-hover:scale-105"
                    style={{ color: COLORS.counter }}
                  >
                    {item.number}
                  </div>
                  
                  {/* Label */}
                  <p
                    className="text-[18px] md:text-[20px] font-semibold mt-2"
                    style={{ color: COLORS.counterLabel }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;