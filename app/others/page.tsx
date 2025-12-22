// app/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Heart, Globe, Users, Shield, Play, Award, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // For future video loading state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  const features = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Reach",
      description: "Support missionaries in 50+ countries reaching unreached people groups.",
      stat: "50+ Countries",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Direct Impact",
      description: "100% of donations go directly to missionary support and projects.",
      stat: "100% Direct",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Community",
      description: "Join 10,000+ believers supporting the Great Commission.",
      stat: "10K+ Supporters",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure & Transparent",
      description: "Financial transparency with quarterly impact reports.",
      stat: "Quarterly Reports",
      color: "from-violet-500 to-purple-500",
    },
  ];

  const missionaries = [
    {
      name: "Sarah & Michael",
      location: "Kenya, Africa",
      ministry: "Church Planting & Medical Missions",
      years: "5 years",
      image: "/images/missionaries/kenya.jpg", // You'll add this image
    },
    {
      name: "David Chen",
      location: "Thailand",
      ministry: "Youth Discipleship & Education",
      years: "3 years",
      image: "/images/missionaries/thailand.jpg",
    },
    {
      name: "Maria Rodriguez",
      location: "Peru, South America",
      ministry: "Community Development",
      years: "7 years",
      image: "/images/missionaries/peru.jpg",
    },
    {
      name: "John & Grace",
      location: "Middle East",
      ministry: "Refugee Ministry & Trauma Care",
      years: "4 years",
      image: "/images/missionaries/middle-east.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* === HERO SECTION WITH VIDEO BACKGROUND === */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-poster.jpg" // Optional: placeholder while video loads
          >
            <source src="/videos/volunteervideo.mp4" type="video/mp4" />
            {/* Fallback background if video doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900" />
          </video>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl px-6">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Trusted by 10,000+ Believers Worldwide
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Fuel
            <span className="block text-emerald-300">Eternal</span>
            <span className="block">Change</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with missionaries bringing the Gospel to unreached people groups.
            Your support fuels churches, saves lives, and transforms communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="group px-8 py-4 bg-white text-green-900 font-bold text-lg rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/missionaries"
              className="px-8 py-4 border-2 border-white/80 text-white font-bold text-lg rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Meet Our Missionaries
              </span>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Missionaries Supported" },
              { number: "$2.5M+", label: "Funds Deployed" },
              { number: "50+", label: "Nations Reached" },
              { number: "100%", label: "Financial Integrity" },
            ].map((item, index) => (
              <div key={index} className="text-center backdrop-blur-sm bg-white/5 p-4 rounded-2xl">
                <div className="text-3xl font-bold text-white">{item.number}</div>
                <div className="text-green-200 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="text-white text-sm mb-2">Explore More</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION (Static - doesn't move) === */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine faithful stewardship with strategic impact for maximum Gospel advancement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="text-sm font-semibold text-gray-700">
                  {feature.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === MISSIONARIES PREVIEW SECTION === */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Missionaries We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of the faithful workers you&apos;ll be partnering with around the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionaries.map((missionary, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Placeholder - You'll replace these */}
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🌍</div>
                      <p className="text-gray-500 font-medium">
                        {missionary.location.split(",")[0]} Photo
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Add your image to /images/missionaries/
                      </p>
                    </div>
                  </div>
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                    {missionary.location}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{missionary.name}</h3>
                  <p className="text-gray-600 mb-4">{missionary.ministry}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Target className="w-4 h-4 mr-1" />
                      {missionary.years} on field
                    </div>
                    <Link
                      href="/missionaries"
                      className="text-green-700 font-semibold hover:text-green-900 transition-colors flex items-center gap-1"
                    >
                      Support
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/missionaries"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-700 text-white font-bold text-lg rounded-xl hover:bg-green-800 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-6 h-6" />
              View All Missionaries
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* === IMPACT STORIES SECTION === */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div>
              <div className="mb-8">
                <Award className="w-12 h-12 text-emerald-300 mb-4" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Real Stories of <span className="text-emerald-300">Transformation</span>
                </h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <blockquote className="text-xl italic mb-8 leading-relaxed">
                  &quot;Because of supporters through Jesus Mission Fund, our team planted 
                  3 new churches last year among an unreached people group in Southeast Asia. 
                  Every donation truly makes an eternal difference. We&apos;re seeing whole 
                  communities transformed by the Gospel.&quot;
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    JM
                  </div>
                  <div>
                    <div className="font-bold text-xl">Joshua & Miriam</div>
                    <div className="text-emerald-200">Missionaries in Southeast Asia • 6 years</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "127", label: "Churches Planted", icon: "⛪" },
                { number: "3,450+", label: "Lives Impacted", icon: "🙏" },
                { number: "42", label: "Clean Water Wells", icon: "💧" },
                { number: "89", label: "Trained Leaders", icon: "👥" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-emerald-200 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Ready to Make Your Mark for Eternity?
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of believers who are partnering with missionaries to reach 
              the ends of the earth. Start with just $25/month.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Create Your Account
              </Link>
              
              <Link
                href="/donate"
                className="px-10 py-5 border-2 border-green-600 text-green-700 font-bold text-lg rounded-xl hover:bg-green-50 transition-all duration-300"
              >
                Make a One-Time Gift
              </Link>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  Secure & Encrypted
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-green-600" />
                  100% Tax Deductible
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-600" />
                  Cancel Anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}