import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/brand-logo.png";
import cartIcon from "../assets/Outlined.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="ByteSpace logo"
            className="w-[28.88px] h-[31.5px]"
          />
          <span className="font-bold text-lg">ByteSpace</span>
        </div>

        {/* Middle links - desktop */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="/" className="hover:text-lime-400">
            Home
          </a>
          <a href="/courses" className="hover:text-lime-400 mt-0.5">
            Courses
          </a>
          <a href="/creators" className="hover:text-lime-400 mt-0.5">
            Creators
          </a>
        </div>

        {/* Right side - desktop */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <a href="/login" className="hover:text-lime-400">
            Sign In
          </a>
          <a
            href="/signup"
            className=" px-4 py-2 rounded-full font-medium hover:bg-lime-300"
          >
            Join Us
          </a>
          <img
            src={cartIcon}
            alt="cart"
            className="w-5 h-5 cursor-pointer hover:opacity-75"
          />
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm">
          <a href="/" className="hover:text-lime-400">
            Home
          </a>
          <a href="/courses" className="hover:text-lime-400">
            Courses
          </a>
          <a href="/creators" className="hover:text-lime-400">
            Creators
          </a>
          <a href="/login" className="hover:text-lime-400">
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-lime-400 text-blue-700 px-4 py-2 rounded-full text-center"
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  );
}
