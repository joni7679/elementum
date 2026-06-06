import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "studio", "services", "contact", "faqs"];
  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="relative w-full py-6 px-6 md:px-12 bg-transparent z-40 max-w-7xl mx-auto">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="font-display font-bold text-2xl tracking-tight text-neutral-900 select-none hover:opacity-80 transition-opacity"
        >
          Elementum
        </a>
        {/* Central Nav Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="font-display font-medium text-[14px] text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer relative py-1 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Minimalist 2-line Hamburger (Desktop Icon / Mobile Trigger) */}
        <button
          id="menu-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col items-end gap-1.5 p-2 cursor-pointer focus:outline-none hover:opacity-75 transition-opacity"
          aria-label="Toggle menu"
        >
          <span className="w-8 h-[2px] bg-neutral-900 rounded-full"></span>
          <span className="w-5 h-[2px] bg-neutral-900 rounded-full"></span>
        </button>
      </nav>

      {/* Full-screen Slide-down Responsive Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-20 left-4 right-4 bg-white rounded-2xl border border-neutral-100 shadow-xl p-8 flex flex-col space-y-6 z-50 md:max-w-md md:left-auto md:right-12"
          >
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <span className="font-display font-medium text-neutral-400 text-xs uppercase tracking-wider">NAVIGATE STUDIO</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-neutral-50 rounded-full"
              >
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="font-display font-medium text-lg text-left text-neutral-800 hover:text-neutral-955 hover:pl-2 transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-100">
              <p className="font-mono text-[10px] text-neutral-400 tracking-wider">ELEMENTUM AGENCY — CHICAGO, IL</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
