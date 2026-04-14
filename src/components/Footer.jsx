import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaGlobe } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { HiOutlineChevronRight } from "react-icons/hi";

// Logo import karne ke liye
import logo from "../assets/logo.png";

const Footer = () => {
  const serviceColumns = [
    {
      title: "Services",
      links: ["Mobile Applications", "Web Development", "Cyber Security", "E-Commerce", "Hosting", "SEO"],
    },
    {
      title: "", // Middle column for services in image
      links: ["UI/UX Design", "Graphic Design", "ERP Solutions", "POS Solutions", "IOT", "Custom Software"],
    },
    {
      title: "Industries",
      links: ["HealthCare", "Finance", "Education", "Retail", "Real Estate", "Telecommunication"],
    },
    {
      title: "Useful Links",
      links: ["Portfolio", "About", "Contact Us", "Blogs"],
    },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-gray-400 pt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
        
        {/* Column 1: Logo & Contact Info */}
        <div className="lg:col-span-1">
          <div className="h-12 w-48 mb-6 flex items-center justify-start">
             { <img src={"https://onitsol.com/images/home/logo.svg"} alt="Onit Global" className="h-full object-contain" /> }
             
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <MdPhone className="text-[#BE185D]" size={20} />
              <span className="text-sm">+92 (328) 80-150-00</span>
            </div>
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <MdEmail className="text-[#BE185D]" size={20} />
              <span className="text-sm">info@onitsol.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-4">
            <a href="#" className="hover:text-white transition-all transform hover:scale-110">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-white transition-all transform hover:scale-110">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-white transition-all transform hover:scale-110">
              <FaGlobe size={20} />
            </a>
          </div>
        </div>

        {/* Dynamic Columns for Services, Industries, Links */}
        {serviceColumns.map((col, idx) => (
          <div key={idx} className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 h-7">
              {col.title}
            </h3>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center gap-2 hover:text-white transition-colors text-sm">
                    {link}
                    <HiOutlineChevronRight className="text-gray-600 group-hover:text-[#BE185D] transition-colors" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#232529] py-3 border-t border-gray-800">
        <p className="text-center text-sm text-gray-400">
          © 2026 Onit Global
        </p>
      </div>
    </footer>
  );
};

export default Footer;