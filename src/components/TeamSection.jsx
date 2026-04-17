import React from 'react';
import { teamData } from "../data/team";

const TeamSection = () => {
  const COLORS = {
    badgeBg: '#F1F1F3',
    badgeText: '#A12F6B',
    heading: '#1F2937',
    highlight: '#A12F6B',
    paragraph: '#6B7280',
    name: '#1F2937',
    role: '#A12F6B',
    socialIcon: '#9CA3AF',
    socialHover: '#A12F6B',
  };

  const { badgeText, headingPrefix, headingHighlight, headingSuffix, description, teamMembers } = teamData;

  return (
    <div className="w-full bg-white font-sans py-20 px-4 md:px-10 lg:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* === Left Content Area (Taking 5 columns) === */}
        <div className="lg:col-span-5 space-y-6">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ backgroundColor: COLORS.badgeBg, color: COLORS.badgeText }}
          >
            {badgeText}
          </div>

          <h1
            className="text-[40px] md:text-[50px] font-bold leading-tight"
            style={{ color: COLORS.heading }}
          >
            {headingPrefix} <span style={{ color: COLORS.highlight }}>{headingHighlight}</span>
            {headingSuffix}
          </h1>

          <p
            className="text-[13px] leading-relaxed max-w-sm"
            style={{ color: COLORS.paragraph }}
          >
            {description}
          </p>
        </div>

        {/* === Right Team Grid Area (Taking 7 columns - Compact) === */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              {/* Profile Image - Smaller Size (w-24 h-24) */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-white shadow-md transition-transform duration-300 hover:scale-105">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info - Tighter spacing */}
              <div className="space-y-0.5">
                <h3 className="text-lg font-bold" style={{ color: COLORS.name }}>
                  {member.name}
                </h3>
                <p className="text-[13px] font-medium" style={{ color: COLORS.role }}>
                  {member.role}
                </p>
              </div>

              {/* Social Icons - Slightly smaller */}
              <div className="flex space-x-3">
                <a href="#" className="transition-colors duration-300" style={{ color: COLORS.socialIcon }} onMouseOver={(e) => e.currentTarget.style.color = COLORS.socialHover} onMouseOut={(e) => e.currentTarget.style.color = COLORS.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" className="transition-colors duration-300" style={{ color: COLORS.socialIcon }} onMouseOver={(e) => e.currentTarget.style.color = COLORS.socialHover} onMouseOut={(e) => e.currentTarget.style.color = COLORS.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="transition-colors duration-300" style={{ color: COLORS.socialIcon }} onMouseOver={(e) => e.currentTarget.style.color = COLORS.socialHover} onMouseOut={(e) => e.currentTarget.style.color = COLORS.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeamSection;