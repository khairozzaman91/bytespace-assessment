import { useState } from "react";
import logoImg from "../assets/brand-logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing with: ${email}`);
    setEmail(""); 
  };

  return (
    <footer className="w-full bg-white p-8 md:p-12 lg:p-16 border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        {/* Top Section: Newsletter & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
          {/* Left Side: Logo & Newsletter */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="ByteSpace Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900">ByteSpace</span>
            </div>

            {/* Newsletter Text */}
            <p className="text-gray-600 text-sm mb-5">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Input & Search Button Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mb-5"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all text-sm cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Privacy Policy Note */}
            <p className="text-gray-400 text-xs leading-relaxed max-w-md">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Side: Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-8 text-sm">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 font-medium"
              >
                Featured Courses
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Featured Categories
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Business
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                IT
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Design
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 font-medium"
              >
                Development
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Marketing
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Photography
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Finance
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Sport
              </a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 font-medium"
              >
                Become a Creator
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Affiliate Program
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Help
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                About
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-8" />

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 pb-2 top-4">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}