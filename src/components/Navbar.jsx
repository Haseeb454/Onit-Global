import { useState } from "react";
import {
  Building2,
  Camera,
  Car,
  ChevronDown,
  Code,
  Cpu,
  CreditCard,
  Globe,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Layout,
  Menu,
  Monitor,
  Palette,
  Plane,
  Radio,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Construction,
  Trophy,
  Truck,
  X,
  Zap,
  // --- Missing Icons Added ---
  Briefcase,
  Layers,
  Calculator
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { industries, navItems, services } from "../data/navbar";

const iconMap = {
  Building2,
  Camera,
  Car,
  Code,
  Cpu,
  CreditCard,
  Globe,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Layout,
  Monitor,
  Palette,
  Plane,
  Radio,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Construction,
  Trophy,
  Truck,
  Zap,
  // --- Map updated for your data ---
  Briefcase,
  Layers,
  Calculator
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const getDropdownItems = (itemName) =>
    itemName === "Services" ? services : industries;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container-wrap flex h-20 items-center justify-between shadow-sm">
        <Link to="/">
          <img src={logo} alt="Onit Global" className="h-11 w-auto cursor-pointer" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex h-full">
          {navItems.map((item) => (
            <div key={item.name} className="group relative flex h-full items-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 font-['Arial',_Helvetica,_sans-serif] text-[16px] leading-[24px] font-medium transition ${
                    isActive ? "text-[rgb(121,47,108)]" : "text-gray-700 group-hover:text-[rgb(121,47,108)]"
                  }`
                }
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
              </NavLink>

              {item.hasDropdown && (
                <div className={`invisible absolute top-[79px] w-[850px] rounded-xl bg-white p-8 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100 border border-gray-100 ${item.name === "Industries" ? "-left-[300px]" : "-left-10"}`}>
                  <p className="mb-6 text-[12px] font-bold uppercase tracking-widest text-gray-400">
                    {item.name === "Services" ? "OUR SERVICES" : "INDUSTRIES WE SERVE"}
                  </p>
                  <div className="grid grid-cols-3 gap-x-10 gap-y-8">
                    {getDropdownItems(item.name).map((data) => {
                      // Agar data.iconKey map mein nahi milega toh icon render nahi hoga
                      const Icon = iconMap[data.iconKey];

                      return (
                      <Link 
                        key={data.title} 
                        to={data.path}
                        className="group/item flex gap-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-[rgb(121,47,108)] transition-colors group-hover/item:bg-[rgb(121,47,108)] group-hover/item:text-white">
                          {Icon ? <Icon size={20} /> : <div className="w-5 h-5 bg-gray-200 rounded-full" />}
                        </div>
                        <div>
                          <h4 className="font-['Arial'] text-[15px] font-bold text-gray-900 group-hover/item:text-[rgb(121,47,108)]">
                            {data.title}
                          </h4>
                          <p className="mt-0.5 text-[13px] leading-snug text-gray-500">
                            {data.desc}
                          </p>
                        </div>
                      </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/Contact" className="hidden rounded-md bg-pink-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 sm:block">
            Contact Us
          </Link>
          <button className="rounded-md border border-gray-200 p-2 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 ${isOpen ? "max-h-screen overflow-y-auto opacity-100 pb-10" : "max-h-0 opacity-0"}`}>
        <div className="container-wrap py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              <NavLink
                to={item.path}
                onClick={() => !item.hasDropdown && setIsOpen(false)}
                className={({ isActive }) => `flex items-center justify-between py-2 border-b border-gray-50 font-['Arial'] text-[16px] font-medium ${isActive ? "text-[rgb(121,47,108)]" : "text-gray-700"}`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </NavLink>
            </div>
          ))}
          <Link to="/Contact" onClick={() => setIsOpen(false)} className="mt-2 block w-full text-center rounded-md bg-pink-gradient px-6 py-4 text-sm font-semibold text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;