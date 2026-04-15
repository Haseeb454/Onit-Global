import React, { useState } from 'react';
import { LayoutGrid, Smartphone, Globe, ShoppingCart, MoveRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('All Projects');

  const categories = [
    { name: 'All Projects', icon: <LayoutGrid size={16} /> },
    { name: 'Mobile Apps', icon: <Smartphone size={16} /> },
    { name: 'Web Development', icon: <Globe size={16} /> },
    { name: 'E-commerce', icon: <ShoppingCart size={16} /> },
  ];

  const allProjects = [
    { title: 'Bunafr', category: 'Mobile Apps', desc: 'Bunafr is a smart home coffee roaster that enables greater supply chain efficiencies and the possibility to create an equitable society. We...' },
    { title: 'Divinity Metals', category: 'E-commerce', desc: 'An elegant e-commerce platform for Divinity Metals, offering a seamless shopping experience for their gold collection and various jewelry...' },
    { title: 'Locker Room', category: 'Mobile Apps', desc: 'Locker Room is an app used by college athletes and fans to exchange video messages asking for shoutouts, coaching advice, or general...' },
    { title: 'NovaTech', category: 'Web Development', desc: 'NovaTech helps enterprises transition to cloud-native infrastructure with secure, scalable solutions tailored for their needs...' },
    { title: 'GreenCart', category: 'E-commerce', desc: 'A sustainable e-commerce platform focused on eco-friendly products, empowering consumers to shop responsibly...' },
    { title: 'FinTrust', category: 'Web Development', desc: 'FinTrust delivers AI-driven financial advisory tools, helping individuals and businesses make smarter investment decisions...' },
    { title: 'Foodify', category: 'Mobile Apps', desc: 'Foodify connects local restaurants with food lovers, enabling smooth ordering, delivery, and personalized recommendations...' },
    { title: 'SkillHub', category: 'Web Development', desc: 'An e-learning marketplace where instructors can share knowledge and students can learn anytime, anywhere...' },
    { title: 'TravelNest', category: 'E-commerce', desc: 'A travel booking platform that helps users find curated trips, unique stays, and personalized vacation packages...' },
  ];

  const filteredProjects = activeTab === 'All Projects' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeTab);

  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-md border transition-all text-sm font-medium ${
                activeTab === cat.name
                  ? 'bg-[#b0336b] border-[#b0336b] text-white shadow-md'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-12"></div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in zoom-in duration-500"
            >
              {/* Larger Image Container */}
              <div className="aspect-[16/10] bg-[#fdf8ff] rounded-xl mb-6 overflow-hidden flex items-center justify-center p-4">
                <img 
                  src={`https://onitsol.com/images/home/Bunafr.png`} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="px-2 pb-2">
                <h3 className="text-[#1a202c] text-2xl font-bold mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-3">
                  {project.desc}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[#b0336b] font-bold text-sm transition-all"
                >
                  Read Case Study 
                  <MoveRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;