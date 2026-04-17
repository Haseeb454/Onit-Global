import { useState } from "react";
import {
  Globe,
  LayoutGrid,
  MoveRight,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { projectsData } from "../data/projects";

const iconMap = {
  Globe,
  LayoutGrid,
  ShoppingCart,
  Smartphone,
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState(
    projectsData.defaultActiveTab ?? projectsData.categories[0]?.name
  );
  const { categories, allProjects } = projectsData;

  const filteredProjects =
    activeTab === "All Projects"
      ? allProjects
      : allProjects.filter((project) => project.category === activeTab);

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
                  ? "bg-[#b0336b] border-[#b0336b] text-white shadow-md"
                  : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              {iconMap[cat.iconKey]
                ? (() => {
                    const Icon = iconMap[cat.iconKey];
                    return <Icon size={16} />;
                  })()
                : null}
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
                  src={project.image}
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
                  {projectsData.content.readCaseStudyText} 
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