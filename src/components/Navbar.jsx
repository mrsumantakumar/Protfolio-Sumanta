
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Wrench,
  Mail,
  Linkedin,
  Github,
  Phone,
  Award, // Certification icon
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sumantha from "../assets/sumanta.jpg";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "Certification", path: "/certificate", icon: Award },
    { name: "Skills", path: "/skills", icon: Wrench },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2"
        >
          Portfolio
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 hover:text-indigo-600 transition ${
                    isActive ? "text-indigo-600 font-semibold" : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  <Icon size={18} />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl z-50 flex flex-col items-center pt-16 pb-10 space-y-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition"
              >
                <X size={28} />
              </button>

              {/* Profile Section */}
              <div className="flex flex-col items-center space-y-2 mt-2">
                <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  Sumanta Kumar Nayak
                </h2>
                <img
                  src={sumantha}
                  alt="Sumanta"
                  className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500 shadow-md"
                />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  DevOps Engineer
                </p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-6 mt-6 w-full px-6 sm:px-20">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 text-lg tracking-wide ${
                        isActive ? "text-indigo-600 font-semibold" : "text-gray-800 dark:text-gray-200"
                      } hover:text-indigo-500 transition`}
                    >
                      <Icon size={22} />
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-center gap-4 mt-6">
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/sumanta07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-700 hover:text-white shadow-md transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/mrsumantakumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-white shadow-md transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300 mt-2">
                  <a
                    href="tel:+917735930235"
                    className="flex items-center gap-2 hover:text-indigo-600 transition"
                  >
                    <Phone size={20} className="text-indigo-600" />
                    <span>+91 77359 30235</span>
                  </a>
                  <a
                    href="mailto:sumantakumarnayak199@gmail.com"
                    className="flex items-center gap-2 hover:text-indigo-600 transition text-center"
                  >
                    <Mail size={20} className="text-indigo-600" />
                    <span className="text-[13px]">
                      sumantakumarnayak199@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
