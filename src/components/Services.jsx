import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      meta: "Office of multiple\ninterest content",
      title: "Colaborative & partnership",
      previewImg: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=300&fit=crop&q=80"
    },
    {
      meta: "The hanger US Air force\ndigital experimental",
      title: "We talk about our weight",
      previewImg: "https://images.unsplash.com/photo-1542744173-8e0ee26bf15a?w=300&h=300&fit=crop&q=80"
    },
    {
      meta: "Delta faucet content,\nsocial, digital",
      title: "Piloting digital confidence",
      previewImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop&q=80",
      hasSpecialBadge: true,
      badgeImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=160&h=160&fit=crop&q=80" // circular badge overlay
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-visible select-none">
      
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="font-display font-medium text-4xl md:text-5.5xl leading-tight text-neutral-900 tracking-tight">
          What we <span className="sketch-highlight-green text-neutral-900 font-bold">can</span> <br />
          <span className="sketch-underline-yellow font-bold">offer</span> you!
        </h2>
      </div>

      {/* Elegant Service Table Rows */}
      <div className="border-t border-neutral-300">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 py-8 md:py-12 border-b border-neutral-200 items-center cursor-pointer transition-colors duration-450 hover:bg-neutral-100/50 px-4 -mx-4 rounded-xl relative overflow-visible"
          >
            
            {/* Category / Metadata Column */}
            <div className="md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-400 leading-snug max-w-[200px] whitespace-pre-line">
                {item.meta}
              </p>
            </div>

            {/* Large Bold Service Title Column */}
            <div className="md:col-span-8 flex items-center relative overflow-visible">
              <h3 className="font-display font-bold text-2xl md:text-4xl text-neutral-800 group-hover:text-neutral-950 transition-colors tracking-tight flex items-center relative">
                {item.title.includes("confidence") ? (
                  <>
                    Piloting digital&nbsp;
                    <span className="relative inline-block">
                      confidence
                      {item.hasSpecialBadge && (
                        <span className="absolute -right-8 -top-3 md:-right-10 md:-top-4 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-neutral-900 shadow-md transform -rotate-6 group-hover:rotate-12 transition-transform duration-500 shrink-0 pointer-events-none z-10">
                          <img 
                            src={item.badgeImg} 
                            alt="Special asset badge" 
                            className="w-full h-full object-cover" 
                            referrerPolicy="no-referrer"
                          />
                        </span>
                      )}
                    </span>
                  </>
                ) : (
                  item.title
                )}
              </h3>
              
              {/* Dynamic image preview bubble that smoothly scales in on hover */}
              {hoveredIndex === index && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:block">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 2 }}
                    className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
                  >
                    <img 
                      src={item.previewImg} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
              )}
            </div>

            {/* Right Arrow Navigation Column */}
            <div className="md:col-span-1 flex justify-end">
              <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors">
                <span className="text-neutral-600 group-hover:text-white font-mono font-bold leading-none text-sm group-hover:translate-x-0.5 transition-transform">
                  ──&gt;
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
