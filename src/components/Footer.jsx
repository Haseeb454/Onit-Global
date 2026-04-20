import React from 'react';
import { Link } from 'react-router-dom'; // Step 1: Link import kiya
import { FaLinkedinIn, FaFacebookF, FaGlobe } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { HiOutlineChevronRight } from "react-icons/hi";

import { footerData } from "../data/footer";
import { servicesData } from "../data/services";
import { industriesData } from "../data/industriesData";
import { normalizeForMatch, slugify } from "../utils/slug";

const Footer = () => {
  const { logo, contact, social, columns, copyright } = footerData;
  const serviceAliasMap = {
    "e commerce": "e-commerce-solutions",
    hosting: "web-hosting",
    iot: "iot-solutions",
    seo: "seo-services",
  };

  const industryAliasMap = {
    finance: "finance-banking",
    retail: "retail-ecommerce",
  };

  const serviceSlugByName = Object.entries(servicesData).reduce((acc, [slug, data]) => {
    acc[normalizeForMatch(data.hero?.title || data.slug || slug)] = slug;
    return acc;
  }, {});

  const industrySlugByName = Object.entries(industriesData).reduce((acc, [slug, data]) => {
    const canonicalTitle = data.title?.replace(/\s+Industry$/i, "") || slug;
    acc[normalizeForMatch(canonicalTitle)] = slug;
    return acc;
  }, {});

  const resolveServiceSlug = (linkName) => {
    const normalized = normalizeForMatch(linkName);
    return serviceAliasMap[normalized] || serviceSlugByName[normalized] || slugify(linkName);
  };

  const resolveIndustrySlug = (linkName) => {
    const normalized = normalizeForMatch(linkName);
    return industryAliasMap[normalized] || industrySlugByName[normalized] || slugify(linkName);
  };

  const getUsefulLinkPath = (linkName) => {
    const normalized = normalizeForMatch(linkName);
    const usefulLinks = {
      portfolio: "/Portfolio",
      about: "/AboutUs",
      "contact us": "/Contact",
      blogs: "/Blogs",
    };

    return usefulLinks[normalized] || `/${slugify(linkName)}`;
  };

  const getLinkPath = (column, index, linkName) => {
    const title = column.title.toLowerCase();
    const previousTitle = index > 0 ? columns[index - 1].title.toLowerCase() : "";

    if (title.includes("service") || (!title && previousTitle.includes("service"))) {
      return `/services/${resolveServiceSlug(linkName)}`;
    }

    if (title.includes("industr")) {
      return `/industries/${resolveIndustrySlug(linkName)}`;
    }

    return getUsefulLinkPath(linkName);
  };

  return (
    <footer className="bg-[#1A1A1A] text-gray-400 pt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
        
        {/* Column 1: Logo & Contact Info */}
        <div className="lg:col-span-1">
          <div className="h-12 w-48 mb-6 flex items-center justify-start">
             <img src={logo.src} alt={logo.alt} className="h-full object-contain" />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <MdPhone className="text-[#BE185D]" size={20} />
              <span className="text-sm">{contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <MdEmail className="text-[#BE185D]" size={20} />
              <span className="text-sm">{contact.email}</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-4">
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-all transform hover:scale-110">
              <FaLinkedinIn size={20} />
            </a>
            <a href={social.facebook} target="_blank" rel="noreferrer" className="hover:text-white transition-all transform hover:scale-110">
              <FaFacebookF size={20} />
            </a>
            <a href={social.website} target="_blank" rel="noreferrer" className="hover:text-white transition-all transform hover:scale-110">
              <FaGlobe size={20} />
            </a>
          </div>
        </div>

        {/* Dynamic Columns for Services, Industries, Links */}
        {columns.map((col, idx) => (
          <div key={idx} className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 h-7">
              {col.title}
            </h3>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link}>
                  <Link 
                    to={getLinkPath(col, idx, link)} 
                    className="group flex items-center gap-2 hover:text-white transition-colors text-sm"
                  >
                    {link}
                    <HiOutlineChevronRight className="text-gray-600 group-hover:text-[#BE185D] transition-colors" size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#232529] py-3 border-t border-gray-800">
        <p className="text-center text-sm text-gray-400">
          © {copyright.year} {copyright.text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;