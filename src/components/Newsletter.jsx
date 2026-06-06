import React, { useState } from "react";
import { motion } from "motion/react";
import SubscribeModal from "./SubscribeModal";

export default function Newsletter() {
  const [modalOpen, setModalOpen] = useState(false);

  const footerLinks = {
    company: ["Home", "Studio", "Service", "Blog"],
    policies: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"],
    follow: ["Instagram", "LinkedIn", "Youtube", "Twitter"]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#dbe6d8] pt-16 pb-16 select-none overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative overflow-visible">
        
        {/* ────────────────── NEWSLETTER CONTAINER ────────────────── */}
        <div className="relative w-full text-center mb-20 py-8 z-10">
          
          {/* Playful vector doodles pointing down at the heading */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-10 opacity-70">
            <svg 
              viewBox="0 0 100 50" 
              fill="none" 
              stroke="#ef4444" 
              strokeWidth="2" 
              strokeLinecap="round"
              className="w-full h-full"
            >
              {/* Left curved arrow */}
              <path d="M30,10 C40,25 35,40 25,45 M20,38 L25,45 L32,41" />
              {/* Right curved arrow */}
              <path d="M70,10 C60,25 65,40 75,45 M80,38 L75,45 L68,41" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="font-display font-medium text-4xl md:text-5.5xl text-neutral-900 tracking-tight leading-none mt-12 z-10 relative">
            Subscribe to <br />
            our newsletter
          </h2>

          {/* Subtitle description */}
          <p className="font-sans font-medium text-neutral-600 text-xs md:text-sm mt-4 z-10 relative max-w-md mx-auto">
            To make your stay special and even more memorable.
          </p>

          {/* Action Button */}
          <div className="mt-8 z-10 relative">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-[#fcfbf7] rounded-full font-display font-bold text-xs lowercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              come for more
            </button>
          </div>

          {/* Floating purple quarter circle corner (Matches mockup graphic exactly!) */}
          <div className="absolute -right-8 bottom-0 w-32 h-32 md:w-40 md:h-40 bg-[#8b5cf6] rounded-full pointer-events-none opacity-90" />
        </div>

        {/* ────────────────── FOOTER LINKS GRID ────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-left pt-6 pb-12 relative z-10">
          
          {/* Column 1: Company */}
          <div>
            <h4 className="font-display font-bold text-[#171717]/85 text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="font-sans text-neutral-600 hover:text-neutral-900 text-[13px] font-medium transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Terms & Policies */}
          <div>
            <h4 className="font-display font-bold text-[#171717]/85 text-sm mb-6">Terms & Policies</h4>
            <ul className="space-y-4">
              {footerLinks.policies.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-sans text-neutral-600 hover:text-neutral-900 text-[13px] font-medium transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h4 className="font-display font-bold text-[#171717]/85 text-sm mb-6">Follow Us</h4>
            <ul className="space-y-4">
              {footerLinks.follow.map((item) => (
                <li key={item}>
                  <a
                    href={`https://${item.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-neutral-600 hover:text-neutral-900 text-[13px] font-medium transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location / Contact */}
          <div>
            <h4 className="font-display font-bold text-[#171717]/85 text-sm mb-6">Terms & Policies</h4>
            <div className="space-y-4 font-sans text-neutral-600 text-[13px] font-medium leading-relaxed">
              <p>
                1498w Fluton ste, STE 2D <br />
                Chicago, IL 63867.
              </p>
              <p className="hover:text-neutral-900 transition-colors">
                (123) 456789000
              </p>
              <p className="hover:text-neutral-900 transition-colors">
                <a href="mailto:info@elementum.com">info@elementum.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Modern dividing border */}
        <div className="w-full h-[1px] bg-neutral-350 opacity-60" />

        {/* Copyright branding */}
        <div className="mt-8 flex flex-col items-center justify-center text-[11px] font-sans font-medium text-neutral-500/80 gap-1.5 text-center">
          <p>© 2026 Elementum. All rights reserved.</p>
          <p className="uppercase tracking-widest font-mono text-[9px]">Crafted with Professional Intent</p>
        </div>
      </div>
      {/* Subscription Popup Dialog */}
      <SubscribeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}
