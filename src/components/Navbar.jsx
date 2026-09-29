import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-700 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 font-bold text-lg">
                    <span className="bg-lime-400 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center">
                        b
                    </span>
                    ByteSpace
                </div>

                {/* Middle links - desktop */}
                <div className="hidden md:flex gap-8 text-sm">
                    <a href="/" className="hover:text-lime-400">Home</a>
                    <a href="/courses" className="hover:text-lime-400">Courses</a>
                    <a href="/creators" className="hover:text-lime-400">Creators</a>
                </div>

                {/* Right side - desktop */}
                <div className="hidden md:flex items-center gap-4 text-sm">
                    <a href="/login" className="hover:text-lime-400">Sign In</a>
                    <a
                        href="/signup"
                        className="bg-lime-400 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-lime-300"
                    >
                        Join Us
                    </a>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? <X size={24} /> : <Menu size={24} />} </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm">
                    <a href="/">Home</a>
                    <a href="/courses">Courses</a>
                    <a href="/creators">Creators</a>
                    <a href="/login">Sign In</a>
                    <a href="/signup" className="bg-lime-400 text-blue-700 px-4 py-2 rounded-full text-center"> Join Us</a>
                </div>
            )}
        </nav>
    );
}