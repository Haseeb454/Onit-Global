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
import { industryCardsData } from "../data/industryCards";

const iconMap = {
  HeartPulse,
  Landmark,
  Trophy,
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
  Store,
};

const IndustryCards = () => {
  // Logic for View More / View Less
  const [isExpanded, setIsExpanded] = useState(true);
  const { cards, viewToggleLabel } = industryCardsData;

  // Logic to show all or only first 6
  const visibleIndustries = isExpanded ? cards : cards.slice(0, 6);

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:p-10 font-sans bg-[#fafafc] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleIndustries.map((item) => {
          const Icon = iconMap[item.iconKey];
          return (
            <div
              key={item.id}
              className="flex items-center p-5 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#fdf0f4]">
                {Icon ? <Icon size={24} strokeWidth={1.5} color="#b43265" /> : null}
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
          {isExpanded ? viewToggleLabel.expanded : viewToggleLabel.collapsed}
        </button>
      </div>
    </div>
  );
};

export default IndustryCards;