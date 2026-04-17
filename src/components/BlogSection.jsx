import React from 'react';
import { blogSectionData } from "../data/blogSection";

const BlogSection = () => {
  const { header, blogs, readMore, commentLabel } = blogSectionData;

  return (
    <div className="w-full bg-white py-20 px-4 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] bg-[#FDF2F8] text-[#A12F6B]">
            {header.badgeText}
          </div>
          <h2 className="text-[48px] font-extrabold text-[#1F2937]">
            {header.titlePrefix} <span className="text-[#A12F6B]">{header.titleHighlight}</span>
          </h2>
          <p className="text-[#6B7280] text-[16px] leading-relaxed max-w-2xl">
          {header.description}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container with Date */}
              <div className="relative h-[240px] rounded-2xl overflow-hidden mb-6">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 w-16 h-16 bg-[#374151]/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-white border-2 border-white/20">
                  <span className="text-xl font-bold leading-none">{blog.date}</span>
                  <span className="text-[10px] uppercase font-medium">{blog.month}</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="space-y-3">
                <div className="flex items-center space-x-4 text-sm font-medium">
                  <span className="text-[#A12F6B] underline underline-offset-4 cursor-pointer">{blog.category}</span>
                  <span className="text-gray-400">{commentLabel} ({blog.comments})</span>
                </div>
                <h3 className="text-[22px] font-bold text-[#1F2937] leading-tight group-hover:text-[#A12F6B] transition-colors">
                  {blog.title}
                </h3>
                <button className="flex items-center text-[#A12F6B] font-bold text-sm pt-2 group-hover:translate-x-2 transition-transform">
                  {readMore.prefix} <span className="ml-2">{readMore.arrow}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;