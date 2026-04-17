import React from 'react';
import { blogPageData } from "../data/blogPage";

// Custom SVGs for brand icons to avoid Lucide-React export issues
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const BlogPage = ({ data = blogPageData }) => {
  const { pageTitle, posts, pagination, sidebar } = data;

  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-12 lg:px-24 font-sans text-[#0f172a] selection:bg-[#b0336b] selection:text-white">
      <h1 className="text-5xl font-extrabold mb-10 tracking-tight text-[#0f172a]">
        {pageTitle}
      </h1>

      {/* Hero Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="overflow-hidden rounded-xl mb-5">
            <img src={posts[0].image} alt="Efficiency" className="w-full aspect-[16/9] object-cover transform transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 mb-3 tracking-wider uppercase">
            <span>{posts[0].category}</span>
            <span>•</span>
            <span>{posts[0].date}</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight group-hover:text-[#b0336b] transition-colors">
            {posts[0].title}
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4">
                <img src={post.image} alt="Tech" className="w-full aspect-[16/9] object-cover transform transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 mb-2 tracking-wider uppercase">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-[15px] font-bold leading-snug group-hover:text-[#b0336b] transition-colors">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-20 border-t border-gray-100 pt-16">
        {/* Article List */}
        <div className="lg:w-[65%] flex flex-col gap-14">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row gap-8 items-start group cursor-pointer">
              <div className="w-full md:w-[300px] flex-shrink-0 overflow-hidden rounded-xl">
                <img src={post.image} alt="post" className="w-full aspect-[4/3] object-cover transform transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#b0336b] transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-4">{post.description}</p>
              </div>
            </div>
          ))}
          
          {/* Pagination */}
          <div className="flex gap-3 mt-10">
            {pagination.buttons.map((btn, idx) => (
              <button
                key={btn}
                className={`w-10 h-10 flex items-center justify-center rounded text-sm font-bold transition-colors ${
                  idx === 0
                    ? "bg-[#0f172a] text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-[35%]">
          <h4 className="text-xl font-bold mb-8 border-b-2 border-gray-100 pb-2">
            {sidebar.trendingTitle}
          </h4>
          <div className="space-y-8 mb-16">
            {posts.map((post) => (
              <div key={post.id} className="flex gap-5 items-center group cursor-pointer">
                <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={post.image} alt="thumb" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h5 className="text-[13px] font-bold leading-tight group-hover:text-[#b0336b] transition-colors">{post.title}</h5>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-bold mb-6">{sidebar.followTitle}</h4>
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-[#b0336b] transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-[#b0336b] transition-colors"><LinkedinIcon /></a>
            <a href="#" className="hover:text-[#b0336b] transition-colors"><FacebookIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;