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
import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sumantha from "../assets/sumanta.jpg";

// Memoized nav links to prevent unnecessary re-renders
const NavLinks = memo(({ navLinks, location, onLinkClick }) => (
  <>
    {navLinks.map((link) => {
      const Icon = link.icon;
      const isActive = location.pathname === link.path;
      return (
        <li key={link.path}>
          <Link
            to={link.path}
            onClick={onLinkClick}
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
  </>
));

// Memoized mobile nav links
const MobileNavLinks = memo(({ navLinks, location, onLinkClick }) => (
  <div className="flex flex-col space-y-2 w-full px-4">
    {navLinks.map((link) => {
      const Icon = link.icon;
      const isActive = location.pathname === link.path;
      return (
        <Link
          key={link.path}
          to={link.path}
          onClick={onLinkClick}
          className={`flex items-center gap-3 text-base font-medium transition-all duration-300 ${
            isActive 
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 border-l-4 border-blue-400" 
              : "text-slate-300 hover:text-white hover:bg-slate-800/50"
          } px-3 py-2.5 rounded-r-xl`}
        >
          <Icon size={20} />
          {link.name}
        </Link>
      );
    })}
  </div>
));

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

  // Optimized toggle with useCallback
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-2"
        >
          <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          Portfolio
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <NavLinks 
            navLinks={navLinks} 
            location={location} 
            onLinkClick={closeMenu}
          />
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-300 focus:outline-none p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu - Optimized for 6.5-6.8" screens */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Sidebar - Optimized for medium mobile screens */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[300px] bg-gradient-to-b from-slate-900 to-blue-900 shadow-2xl z-50 flex flex-col items-center pt-16 pb-6 space-y-6 border-l border-slate-700 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-slate-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-800"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>

              {/* Profile Section with Enhanced Photo */}
              <motion.div 
                className="flex flex-col items-center space-y-3 px-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full p-1"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <motion.img
                    src={sumantha}
                    alt="Sumanta Kumar Nayak"
                    className="w-full h-full rounded-full object-cover border-2 border-slate-900 shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                    loading="eager"
                  />
                </motion.div>
                <motion.h2 
                  className="text-lg font-semibold text-white text-center leading-tight"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Sumanta Kumar Nayak
                </motion.h2>
                <motion.p 
                  className="text-xs text-slate-300 font-medium bg-slate-800/50 px-2 py-1 rounded-full"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  DevOps Engineer
                </motion.p>
              </motion.div>

              {/* Navigation Links */}
              <motion.div
                className="w-full"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <MobileNavLinks 
                  navLinks={navLinks} 
                  location={location} 
                  onLinkClick={closeMenu}
                />
              </motion.div>

              {/* Social Links & Contact */}
              <motion.div 
                className="flex flex-col items-center gap-4 mt-auto px-4 w-full"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {/* Social Links */}
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.linkedin.com/in/sumanta07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/mrsumantakumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                  </motion.a>
                </div>

                {/* Contact Info */}
                <motion.div 
                  className="w-full bg-slate-800/50 rounded-xl p-3 border border-slate-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex flex-col gap-2 text-slate-300">
                    <motion.a
                      href="tel:+917735930235"
                      className="flex items-center gap-2 hover:text-blue-400 transition-colors text-xs"
                      whileHover={{ x: 3 }}
                    >
                      <div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center shrink-0">
                        <Phone size={14} className="text-blue-400" />
                      </div>
                      <span className="truncate">+91 77359 30235</span>
                    </motion.a>
                    <motion.a
                      href="mailto:sumantakumarnayak199@gmail.com"
                      className="flex items-center gap-2 hover:text-blue-400 transition-colors text-xs"
                      whileHover={{ x: 3 }}
                    >
                      <div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center shrink-0">
                        <Mail size={14} className="text-blue-400" />
                      </div>
                      <span className="truncate text-[10px]">sumantakumarnayak199@gmail.com</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}