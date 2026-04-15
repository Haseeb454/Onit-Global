import React, { useState } from 'react';
import {
  HeartPulse,
  Landmark,
  Trophy, // Dribble/Dribbble ko Trophy se replace kiya taake error khatam ho jaye
  Monitor,
  Fan,
  Settings,
  Building2,
  Truck,
  MonitorSmartphone,
  Luggage,
  Home,
  HardHat,
  RadioTower,
  Store
} from 'lucide-react';

const IndustryCards = () => {
  // Logic for View More / View Less
  const [isExpanded, setIsExpanded] = useState(true);

  const industries = [
    { id: 1, title: 'HealthCare', desc: 'Creating smart apps.', icon: HeartPulse },
    { id: 2, title: 'Finance & Banking', desc: 'Reliable online performance.', icon: Landmark },
    { id: 3, title: 'Sports', desc: 'Optimizing business operations.', icon: Trophy }, 
    { id: 4, title: 'Education', desc: 'Building digital experiences.', icon: Monitor },
    { id: 5, title: 'Renewable Energy', desc: 'Boosting online visibility.', icon: Fan },
    { id: 6, title: 'Automobiles', desc: 'Simplifying sales management.', icon: Settings },
    { id: 7, title: 'Government & NGOs', desc: 'Protecting digital assets.', icon: Building2 },
    { id: 8, title: 'Logistics & Supply Chain', desc: 'Intuitive user experiences.', icon: Truck },
    { id: 9, title: 'Home Appliances', desc: 'Smart connected devices.', icon: MonitorSmartphone },
    { id: 10, title: 'Tourism & Hospitality', desc: 'Driving online sales.', icon: Luggage },
    { id: 11, title: 'Real Estate', desc: 'Creative visual brand solutions.', icon: Home },
    { id: 12, title: 'Construction Materials', desc: 'Tailored software solutions.', icon: HardHat },
    { id: 13, title: 'Telecommunication', desc: 'Driving online sales.', icon: RadioTower },
    { id: 14, title: 'Retail & E-commerce', desc: 'Creative visual brand solutions.', icon: Store },
  ];

  // Logic to show all or only first 6
  const visibleIndustries = isExpanded ? industries : industries.slice(0, 6);

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:p-10 font-sans bg-[#fafafc] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleIndustries.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-center p-5 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#fdf0f4]">
                <Icon size={24} strokeWidth={1.5} color="#b43265" />
              </div>
              
              {/* Text */}
              <div className="ml-4">
                <h3 className="text-[17px] font-bold text-[#1c1d21]">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[#787b84] mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More/Less Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-10 py-3 text-[15px] font-semibold text-white bg-gradient-to-r from-[#97306c] to-[#ca325f] rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
        >
          {isExpanded ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default IndustryCards;