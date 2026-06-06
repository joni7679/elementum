import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Elementum delivered the site within the timeline as requested. In the end, the client found a 50% increase in traffic in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
      author: "Sarah Jenkins",
      role: "CTO, Delta Digital",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
      desktopClass: "top-12 left-10 md:w-20 md:h-20 w-12 h-12"
    },
    {
      quote: "The strategic insight they added allowed our marketing team to compress planning phases by weeks. They challenge conventional logic to deliver robust design pipelines that are both gorgeous and robust.",
      author: "Marcus Aurelius",
      role: "Strategic Partner, Capitol",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&q=80",
      desktopClass: "top-44 -left-12 md:w-24 md:h-24 w-14 h-14"
    },
    {
      quote: "Their capability to quickly capture user feedback and adapt visual architectures is incredibly high. Elementum operates with pristine visual taste and outstanding project hygiene.",
      author: "Sophia Sterling",
      role: "Lead Researcher, Apex Labs",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
      desktopClass: "bottom-12 left-6 md:w-16 md:h-16 w-12 h-12"
    },
    {
      quote: "We achieved a 150% subscription rate spike within single-digit weeks of launch. The product feels seamless, highly professional, and has become the ultimate benchmark in our industry.",
      author: "Jean-Paul Raymond",
      role: "President, Fulton Ste",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      desktopClass: "top-16 right-12 md:w-16 md:h-16 w-12 h-12"
    },
    {
      quote: "They bring incredible patience, top-tier React engineering capability, and superb modern design discipline. There isn't another digital agency we would ever trust deeper.",
      author: "Aris Vance",
      role: "Creative Director, Core Media",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80",
      desktopClass: "top-48 -right-8 md:w-20 md:h-20 w-14 h-14"
    },
    {
      quote: "Working with them was an absolute breeze. They delivered not only exactly what they specified, but accompanied it with rigorous training that empowered our in-house systems immediately.",
      author: "Alisha Patel",
      role: "Product Manager, TechNext",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&q=80",
      desktopClass: "bottom-12 right-12 md:w-24 md:h-24 w-16 h-16"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faqs" className="relative py-24 px-6 md:px-12 max-w-5xl mx-auto overflow-visible select-none text-center">
      
      {/* Testimonials Title */}
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-3xl md:text-5xl text-neutral-900 tracking-tight"
        >
          <span className="sketch-highlight-green text-neutral-900 font-bold">What our customer</span> <br />
          says <span className="sketch-underline-yellow font-bold">About Us</span>
        </motion.h2>
      </div>

      {/* Floating Interactive Canvas for Testimonials */}
      <div className="relative min-h-[480px] md:min-h-[380px] flex items-center justify-center">
        
        {/* Absolute Floating Team Avatars on Desktop */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {testimonials.map((testi, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 85, damping: 14 }}
              onClick={() => setActiveIndex(idx)}
              className={`absolute ${testi.desktopClass} pointer-events-auto rounded-full overflow-hidden border-4 cursor-pointer transition-all duration-350 shadow-lg ${
                activeIndex === idx 
                  ? "border-[#ef4444] scale-110 shadow-xl z-20" 
                  : "border-white hover:border-[#fde047] hover:scale-105"
              }`}
              style={{
                animation: `float-gentle ${5 + (idx % 3)}s ease-in-out infinite ${idx * 0.4}s`
              }}
              title={`${testi.author} — ${testi.role}`}
            >
              <img 
                src={testi.image} 
                alt={testi.author} 
                className={`w-full h-full object-cover transition-all ${
                  activeIndex === idx ? "grayscale-0" : "grayscale hover:grayscale-0"
                }`}
                referrerPolicy="no-referrer"
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile avatars flat band */}
        <div className="flex md:hidden flex-wrap gap-3 justify-center mb-8 pointer-events-auto relative z-20">
          {testimonials.map((testi, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-12 h-12 rounded-full overflow-hidden border-2 cursor-pointer transition-all ${
                activeIndex === idx ? "border-[#ef4444] scale-110" : "border-neutral-200"
              }`}
            >
              <img 
                src={testi.image} 
                alt={testi.author} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>

        {/* Selected Quote Speech Card (matches cream speech container) */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl bg-[#f5f3ec] border border-neutral-200/60 rounded-3xl p-8 md:p-12 shadow-md relative z-10 mx-auto text-center"
        >
          
          {/* Subtle hanging quote icons */}
          <div className="absolute top-4 left-6 text-emerald-600/70 font-serif text-6xl leading-none select-none">
            “
          </div>
          
          <div className="relative z-10 px-4 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <p className="font-display font-medium text-neutral-800 text-sm md:text-base md:text-lg leading-relaxed text-center">
                  {testimonials[activeIndex].quote}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
 
          <div className="absolute bottom-2 right-6 text-emerald-600/70 font-serif text-6xl leading-none select-none">
            ”
          </div>
        </motion.div>

      </div>
    </section>
  );
}
