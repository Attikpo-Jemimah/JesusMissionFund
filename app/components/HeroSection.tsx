// components/HeroSection.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/volunteervideo.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-800" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Tagline */}
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Supporting Missionaries Worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empower
            <span className="block text-emerald-200 mt-2">Global Missions</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-xl md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with missionaries bringing the Gospel to unreached people groups. 
            Your support fuels churches, saves lives, and transforms communities for eternity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="group px-8 py-4 bg-white text-green-900 font-bold text-lg rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/volunteer"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
Support A Missionary            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: "", label: " More MissionariesTo Be Supported" },
              { number: "", label: " More Countries To Reached" },
              { number: "", label: "Funds Deployed" },
              { number: "", label: "Direct Impact" },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center backdrop-blur-sm bg-white/10 p-4 rounded-2xl border border-white/20"
              >
                <div className="text-2xl font-bold text-white">{item.number}</div>
                <div className="text-white/80 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mx-auto">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}