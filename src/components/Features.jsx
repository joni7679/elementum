import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <section id="studio" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-visible select-none">
      
      {/* ────────────────── FIRST BLOCK ────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column info */}
        <motion.div 
          initial={{ opacity: 0, x: -35, y: 15 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex flex-col items-start pr-0 md:pr-6"
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl leading-tight text-neutral-900 tracking-tight">
            <span className="sketch-underline-yellow">Tomorrow</span> should <br />
            be better than <span className="sketch-highlight-green text-neutral-900 font-bold">today</span>
          </h2>
          
          <p className="font-sans font-medium text-neutral-500 text-sm md:text-base leading-relaxed mt-6 max-w-md">
            We are a team of strategists, designers, communicators, and researchers. 
            Together, we believe that progress only happens when you refuse to play things safe.
          </p>

          <a 
            href="#contact"
            className="flex items-center gap-2 font-display font-bold text-xs uppercase tracking-widest text-neutral-900 group mt-8 transition-opacity hover:opacity-80"
          >
            Read more 
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              ────────────&gt;
            </span>
          </a>
        </motion.div>

        {/* Right Column photo circle with geometric overlays */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.82, rotate: 3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.1, type: "spring", stiffness: 65, damping: 14 }}
          className="md:col-span-7 flex justify-center md:justify-end items-center relative py-6"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            
            {/* Red poly wedge overlay on top right */}
            <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-red-500/95 clip-triangle z-20 transform rotate-12"></div>
            <div className="absolute top-2 -right-6 w-12 h-12 bg-red-500 transform rotate-45 z-10"></div>
            
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-neutral-100 shadow-xl relative z-10 bg-white group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=600&fit=crop&q=80" 
                alt="Strategic discussion" 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Abstract offset ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-200 pointer-events-none transform translate-x-4 translate-y-4"></div>
          </div>
        </motion.div>
      </div>

      {/* ────────────────── WAVING CONNECTING PATH ────────────────── */}
      <div className="relative w-full h-32 md:h-48 my-12 pointer-events-none z-0">
        <svg 
          viewBox="0 0 1440 200" 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="2" 
          className="w-full h-full opacity-60"
        >
          <path 
            d="M 1100 0 C 1000 80, 800 -40, 600 120 C 400 280, 200 40, 100 200" 
            strokeDasharray="4 4" 
          />
          <path 
            d="M 1100 5 C 1000 85, 800 -35, 600 125 C 400 285, 200 45, 100 205" 
          />
        </svg>
      </div>

      {/* ────────────────── SECOND BLOCK ────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 md:mt-12">
        
        {/* Left Column photo circle with geometric overlays */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.82, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.1, type: "spring", stiffness: 65, damping: 14 }}
          className="md:col-span-7 flex justify-center md:justify-start items-center relative order-last md:order-first py-6"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            
            {/* Red triangle overlay on bottom */}
            <div 
              className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-red-400 z-20"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            ></div>
            <div 
              className="absolute -bottom-6 left-12 w-10 h-10 bg-red-500 z-10"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            ></div>
            
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-neutral-100 shadow-xl relative z-10 bg-white group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=600&h=600&fit=crop&q=80" 
                alt="Creative collaboration" 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Abstract offset ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-200 pointer-events-none transform -translate-x-4 translate-y-4"></div>
          </div>
        </motion.div>

        {/* Right Column info */}
        <motion.div 
          initial={{ opacity: 0, x: 35, y: 15 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex flex-col items-start pl-0 md:pl-6"
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl leading-tight text-neutral-900 tracking-tight">
            <span className="sketch-highlight-green text-neutral-900 font-bold">See</span> how we <br />
            can help you <span className="sketch-underline-yellow font-bold">progress</span>
          </h2>
          
          <p className="font-sans font-medium text-neutral-500 text-sm md:text-base leading-relaxed mt-6 max-w-md">
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms, and social research.
          </p>

          <a 
            href="#contact"
            className="flex items-center gap-2 font-display font-bold text-xs uppercase tracking-widest text-neutral-900 group mt-8 transition-opacity hover:opacity-80"
          >
            Read more 
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              ────────────&gt;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
