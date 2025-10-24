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
  Award,
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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          Portfolio
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 transition-all duration-300 px-4 py-2 rounded-xl ${
                    isActive 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
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
            className="text-slate-300 focus:outline-none p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar - Solid Professional Background */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 to-blue-900 shadow-2xl z-50 flex flex-col items-center pt-20 pb-10 space-y-8 border-l border-slate-700"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
              >
                <X size={24} />
              </button>

              {/* Profile Section */}
              <div className="flex flex-col items-center space-y-4 px-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full p-1">
                  <img
                    src={sumantha}
                    alt="Sumanta"
                    className="w-full h-full rounded-full object-cover border-2 border-slate-900"
                  />
                </div>
                <h2 className="text-xl font-semibold text-white text-center">
                  Sumanta Kumar Nayak
                </h2>
                <p className="text-sm text-slate-300 font-medium bg-slate-800/50 px-3 py-1 rounded-full">
                  DevOps Engineer
                </p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-3 w-full px-6">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-4 text-lg font-medium transition-all duration-300 ${
                        isActive 
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 border-l-4 border-blue-400" 
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      } px-4 py-3 rounded-r-xl`}
                    >
                      <Icon size={22} />
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Social Links & Contact */}
              <div className="flex flex-col items-center gap-6 mt-auto px-6 w-full">
                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/sumanta07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white shadow-md transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/mrsumantakumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white shadow-md transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>

                {/* Contact Info */}
                <div className="w-full bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex flex-col gap-3 text-slate-300">
                    <a
                      href="tel:+917735930235"
                      className="flex items-center gap-3 hover:text-blue-400 transition-colors text-sm"
                    >
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Phone size={16} className="text-blue-400" />
                      </div>
                      <span>+91 77359 30235</span>
                    </a>
                    <a
                      href="mailto:sumantakumarnayak199@gmail.com"
                      className="flex items-center gap-3 hover:text-blue-400 transition-colors text-sm"
                    >
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Mail size={16} className="text-blue-400" />
                      </div>
                      <span className="text-xs">sumantakumarnayak199@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}