import { ChevronDown, Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom"; // Link aur NavLink import kiya
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/Industries" },
  { name: "About", path: "/AboutUs" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blogs", path: "/blogs" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container-wrap flex h-20 items-center justify-between shadow-sm">
        {/* Logo par click karne se Home par jaye */}
        <Link to="/">
          <img src={logo} alt="Onit Global" className="h-11 w-auto cursor-pointer" />
        </Link>

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
              {/* Sirf Services aur Industries ke liye icon show hoga */}
              {["Services", "Industries"].includes(item.name) && (
                <ChevronDown size={16} />
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Contact Us button ko bhi link kar diya */}
          <Link 
            to="/contact" 
            className="hidden rounded-md bg-pink-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 sm:block"
          >
            Contact Us
          </Link>
          
          <button className="rounded-md border border-gray-200 p-2 lg:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;