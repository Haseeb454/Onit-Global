import React from 'react';

const AwardsSection = () => {
  // Exact Color Palette based on image analysis
  const COLORS = {
    badgeBg: '#F1F1F3',
    badgeText: '#BF4B7D', // Pinkish text color from badge
    heading: '#1F2937', // Near Black/Dark Gray
    headingHighlight: '#BF4B7D', // Same pink accent for highlight
    paragraph: '#6B7280', // Text Gray
    itemYear: '#BF4B7D', // Pink year text
    itemTitle: '#1F2937', // Dark item title
    itemSubtitle: '#6B7280', // Gray item subtitle
    itemNumber: '#6B7280', // Gray item number
    border: '#E5E7EB', // Light gray border
    accentIcon: '#BF4B7D', // Pink spiky icon
  };

  const awardsData = [
    {
      id: 1,
      year: '2024',
      title: 'Innovation Ignition Award',
      subtitle: 'Site Of The Day',
    },
    {
      id: 2,
      year: '2024',
      title: 'CSS Design Award',
      subtitle: 'Site Of The Day',
    },
    {
      id: 3,
      year: '2024',
      title: 'Masterpiece Maker',
      subtitle: 'Awards Jury 2024',
    },
  ];

  return (
    <div className="w-full bg-white font-sans py-20 px-4 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
        
        {/* === Left Side Content === */}
        <div className="space-y-8">
          {/* Badge */}
          <div
            className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-sm"
            style={{ backgroundColor: COLORS.badgeBg, color: COLORS.badgeText }}
          >
            OUR AWARD TIME
          </div>

          {/* Heading with Highlight */}
          <h1
            className="text-[48px] md:text-[40px] font-bold leading-tight"
            style={{ color: COLORS.heading }}
          >
            Celebrating Eagle <br /> Soft's{' '}
            <span style={{ color: COLORS.headingHighlight }}>Award-Winning</span>{' '}
            Excellence.
          </h1>

          {/* Paragraph */}
          <p
            className="text-[16px] leading-relaxed max-w-lg"
            style={{ color: COLORS.paragraph }}
          >
            Onit has been recognized for creativity, innovation, and technical
            excellence with multiple industry awards. These accolades reflect our
            commitment to delivering high-quality digital solutions and driving
            meaningful results for our clients worldwide.
          </p>
        </div>

        {/* === Right Side Awards Timeline === */}
        <div className="relative pl-12">
          {/* Main vertical border line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{ backgroundColor: COLORS.border }}
          />

          {/* Top spiky icon element - Perfect replica */}
          <div
            className="absolute -left-[16px] top-0 w-8 h-8 rounded-full flex items-center justify-center p-1 bg-white border-2"
            style={{ color: COLORS.accentIcon, borderColor: COLORS.border }}
          >
            {/* Simple spiky/burst icon representation */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="7" y1="7" x2="17" y2="17"></line>
              <line x1="7" y1="17" x2="17" y2="7"></line>
            </svg>
          </div>

          <div className="space-y-12 pt-6">
            {awardsData.map((award, index) => (
              <div
                key={award.id}
                className={`relative pb-10 ${index === awardsData.length - 1 ? 'pb-0' : ''}`}
                style={{
                  borderBottom: index === awardsData.length - 1 ? 'none' : `1px solid ${COLORS.border}`
                }}
              >
                <div className="grid grid-cols-[1fr,auto] gap-x-6 gap-y-1 items-start">
                  
                  {/* Year, Title, Subtitle Group */}
                  <div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: COLORS.itemYear }}
                    >
                      {award.year}
                    </span>
                    <h3
                      className="text-[22px] font-semibold leading-tight mt-1"
                      style={{ color: COLORS.itemTitle }}
                    >
                      {award.title}
                    </h3>
                    <p
                      className="text-[16px] mt-1"
                      style={{ color: COLORS.itemSubtitle }}
                    >
                      {award.subtitle}
                    </p>
                  </div>

                  {/* Circle with Number - Perfect replica */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2"
                    style={{ borderColor: COLORS.border, color: COLORS.itemNumber }}
                  >
                    <span className="text-[18px] font-semibold">{award.id}</span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AwardsSection;