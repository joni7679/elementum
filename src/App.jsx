import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden select-none">
      
      {/* Dynamic Background Noise / Paper Texture Overlay to achieve a highly premium editorial look */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] z-50 bg-repeat bg-contain"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=50&h=50&fit=crop&q=1')"
        }}
      />

      {/* Main Header navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow">
        
        {/* Thinkers and doers changing the status quo */}
        <Hero />
        
        {/* Tomorrow should be better than today / Help you progress */}
        <Features />
        
        {/* What we can offer you! service row items */}
        <Services />
        
        {/* What our customer says About Us speech card */}
        <Testimonials />
        
        {/* Subscribe to newsletter, footer coordinates, contact */}
        <Newsletter />
        
      </main>

    </div>
  );
}
