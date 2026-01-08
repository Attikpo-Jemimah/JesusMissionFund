"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Globe } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/public/hero-volunteers.jpg";
import { use } from "react";

const stats = [
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Users, value: "10K+", label: "Volunteers" },
  { icon: Heart, value: "$2M+", label: "Raised" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 py-24 lg:py-20">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center text-left z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center self-start px-4 py-2 glass-card text-secondary text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4 mr-2" />
            Empowering Global Mission Support
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
          >
            Jesus <span className="text-gradient">Mission</span>
            <br />
            Fund <span className="text-gradient">Foundation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
           Partner with us to raise funds and the needed support for missionaries and volunteers spreading hope and God’s love to communities everywhere. Every moment counts— and your donations go a long way to help those afar. “With your help, the gospel reaches every corner of the world, transforming lives and advancing God’s Kingdom.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button variant="hero" size="xl" className="group">
              Make An Impact
              
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Serve With Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-sans">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex-1 relative w-full max-w-xl lg:max-w-none"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-[3rem] blur-sm" />
            
            <div 
              className="relative overflow-hidden shadow-elevated"
              style={{
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                aspectRatio: '4/5',
              }}
            >
              <Image
                src={heroImage}
                alt="Volunteers helping communities around the world"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 glass-card p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Join 10,000+ donors</div>
                  <div className="text-xs text-muted-foreground">Making a difference every day</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 right-12 w-16 h-16 rounded-2xl bg-primary shadow-glow flex items-center justify-center"
            >
              <Globe className="w-8 h-8 text-primary-foreground" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -left-4 w-12 h-12 rounded-xl bg-secondary shadow-elevated flex items-center justify-center"
            >
              <Users className="w-6 h-6 text-secondary-foreground" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
