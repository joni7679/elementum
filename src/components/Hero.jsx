import React from "react";
import { motion } from "motion/react";

export default function Hero() {
  const team = [
    {
      id: "1",
      name: "Marcus Cole",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=260&h=260&fit=crop&crop=faces&q=80",
      className: "w-20 h-20 md:w-28 md:h-28 absolute -bottom-12 md:-bottom-16 left-[2%] animate-float-1 border-4 border-[#fcfbf7] shadow-xl",
    },
    {
      id: "2",
      name: "Alex River",
      role: "Strategist",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=260&h=260&fit=crop&crop=faces&q=80",
      className: "w-22 h-22 md:w-30 md:h-30 absolute -bottom-4 md:-bottom-6 left-[14%] animate-float-3 border-4 border-[#fcfbf7] shadow-xl z-10",
    },
    {
      id: "3",
      name: "Sophia Jin",
      role: "Lead Research",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=260&h=260&fit=crop&crop=faces&q=80",
      className: "w-24 h-24 md:w-32 md:h-32 absolute bottom-2 md:bottom-4 left-[26%] animate-float-2 border-4 border-[#fcfbf7] shadow-xl",
    },
    {
      id: "4",
      name: "Elena Rostova",
      role: "Digital Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=260&h=260&fit=crop&crop=faces&q=80",
      className: "w-24 h-24 md:w-32 md:h-32 absolute -bottom-28 md:-bottom-36 left-[38%] animate-float-4 border-4 border-[#fcfbf7] shadow-xl z-20",
    },
    {
      id: "5",
      name: "David Vance",
      role: "Senior Copywriter",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=260&h=260&fit=crop&crop=faces&q=80",
      className: "w-22 h-22 md:w-30 md:h-30 absolute -bottom-4 md:-bottom-6 left-[50%] animate-float-1 border-4 border-[#fcfbf7] shadow-xl",
    },
    {
      id: "6",
      name: "Kenji Sato",
      role: "UX Researcher",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=260&h=260&fit=crop&crop=faces&q=80",
      className: "w-24 h-24 md:w-32 md:h-32 absolute -bottom-28 md:-bottom-36 left-[62%] animate-float-3 border-4 border-[#fcfbf7] shadow-xl z-20",
    },
    {
      id: "7",
      name: "Aris Vance",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=260&h=260&fit=crop&crop=faces&q=80",
      className: "w-24 h-24 md:w-32 md:h-32 absolute bottom-2 md:bottom-4 left-[74%] animate-float-2 border-4 border-[#fcfbf7] shadow-xl",
    },
    {
      id: "8",
      name: "Elena Rostova",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=260&h=260&fit=crop&crop=faces&q=80",
      className: "w-20 h-20 md:w-28 md:h-28 absolute -bottom-16 md:-bottom-20 left-[86%] animate-float-4 border-4 border-[#fcfbf7] shadow-xl z-10",
    },
  ];

  return (
    <section id="home" className="relative pt-12 pb-36 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center overflow-visible">
      {/* Hand-drawn loop doodle decoration on the left side */}
      <div className="absolute left-1 md:left-6 top-[20%] w-16 md:w-28 pointer-events-none select-none opacity-80">
        <svg 
          viewBox="0 0 100 200" 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-full h-auto"
        >
          <path d="M50,10 C20,30 5,60 15,90 C25,120 70,80 80,110 C90,140 40,180 15,160 C-5,145 10,120 30,135" />
        </svg>
      </div>

      {/* Main Heading Text */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-bold text-4xl md:text-6xl lg:text-7.5xl leading-[1.12] md:leading-[1.1] tracking-tight max-w-5xl text-neutral-900 mt-6 select-none relative z-10"
      >
        The{" "}
        <span className="sketch-underline-yellow">thinkers and</span>{" "}
        <span className="sketch-underline-yellow">doers</span> were{" "}
        <span className="sketch-highlight-pink text-neutral-900">changing</span>{" "}
        the <span className="sketch-highlight-green text-neutral-900">status Quo</span> with
      </motion.h1>

      {/* Paragraph Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans font-medium text-neutral-500 text-sm md:text-base leading-relaxed mt-8 max-w-2xl px-4 relative z-10"
      >
        We are a team of strategists, designers, communicators, and researchers. 
        Together, we believe that progress only happens when you refuse to play things safe.
      </motion.p>

      {/* Floating Team Circle Avatars */}
      <div className="relative w-full h-48 md:h-64 mt-16 z-20">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.3 + index * 0.1, 
              type: "spring",
              stiffness: 70,
              damping: 12
            }}
            className={`${member.className} rounded-full overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-30`}
            title={`${member.name} — ${member.role}`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* Popover overlay description */}
            <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white text-center p-2">
              <span className="font-display font-bold text-xs uppercase tracking-wide">{member.name}</span>
              <span className="font-sans text-[10px] text-neutral-300 mt-1">{member.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
