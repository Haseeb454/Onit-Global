import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/Industries" },
  { name: "About", path: "/AboutUs" },
  { name: "Portfolio", path: "/Portfolio" },
  { name: "Blogs", path: "/Blogs" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container-wrap flex h-20 items-center justify-between shadow-sm">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Onit Global" className="h-11 w-auto cursor-pointer" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-1 text-sm font-medium transition ${
                  isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                }`
              }
            >
              {item.name}
              {["Services", "Industries"].includes(item.name) && (
                <ChevronDown size={16} />
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Contact Us Button */}
          <Link 
            to="/Contact" 
            className="hidden rounded-md bg-pink-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 sm:block"
          >
            Contact Us
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="rounded-md border border-gray-200 p-2 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-wrap py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between text-base font-medium py-2 border-b border-gray-50 transition ${
                  isActive ? "text-primary" : "text-gray-700"
                }`
              }
            >
              {item.name}
              {["Services", "Industries"].includes(item.name) && (
                <ChevronDown size={16} />
              )}
            </NavLink>
          ))}
          <Link 
            to="/Contact" 
            onClick={() => setIsOpen(false)}
            className="mt-2 block w-full text-center rounded-md bg-pink-gradient px-6 py-4 text-sm font-semibold text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;