import { ChevronDown, Menu } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = ["Home", "Services", "Industries", "About", "Portfolio", "Blogs"];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container-wrap flex h-20 items-center justify-between">
        <img src={logo} alt="Onit Global" className="h-11 w-auto" />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-primary"
            >
              {item}
              <ChevronDown size={16} />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-md bg-pink-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 sm:block">
            Contact Us
          </button>
          <button className="rounded-md border border-gray-200 p-2 lg:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
