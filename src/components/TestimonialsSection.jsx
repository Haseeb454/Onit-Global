import React from 'react';
import { testimonialsSectionData } from "../data/testimonialsSection";

// Star Icon Component (Re-usable)
const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 0-.325 1.523 1.523 0 0 0-.325-.325Z"/>
  </svg>
);

// Rating Component
const Rating = ({ stars }) => {
  return (
    <div className="flex items-center mt-1.5 space-x-0.5">
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} filled={index < stars} />
      ))}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, name, avatar, rating }) => (
  /* p-10 aur min-h-80 use kiya hai height barhane ke liye */
  <div className="bg-white p-14 shadow-md rounded-[20px] border border-gray-100 flex flex-col justify-between min-h-[320px]">
    <blockquote className="text-gray-600 text-base leading-relaxed mb-12">
      {quote}
    </blockquote>
    <div className="flex items-center gap-4 mt-auto">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover" />
      <div>
        <h4 className="font-bold text-gray-900 text-base">{name}</h4>
        <Rating stars={rating} />
      </div>
    </div>
  </div>
);

// Main Testimonials Section Component
const TestimonialsSection = () => {
  const { header, testimonials } = testimonialsSectionData;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#F5E6EC] text-[#B82968] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            {header.badgeText}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {header.titleParts[0]} <br /> <span className="text-[#B82968]">{header.titleParts[1]}</span>{" "}
            {header.titleParts[2]}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-normal">
            {header.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 gap-10 space-y-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;