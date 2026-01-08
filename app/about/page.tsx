"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Target, Globe, Award, Handshake } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { use } from "react";
const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We lead with love, serving communities with genuine care and empathy.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Transparent stewardship ensures every donation makes maximum impact.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We believe in collaborative relationships that empower local leaders.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Reaching every corner of the world with hope and transformation.",
  },
];

const team = [
  { name: "Sarah Johnson", role: "Executive Director", image: "/assets/img1.jpg" },
  { name: "Michael Chen", role: "Operations Director", image: "/assets/img2.jpg" },
  { name: "Emily Rodriguez", role: "Missionary Relations", image: "/assets/img3.jpg" },
  { name: "David Kim", role: "Finance Director", image: "/assets/img4.jpg" },
];


export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 glass-card text-secondary text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-gradient">MissionFuel</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over a decade, we&apos;ve been connecting generous hearts with dedicated missionaries, 
              creating lasting change in communities around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                MissionFuel exists to bridge the gap between those who want to give and those who serve 
                on the front lines of global missions. We provide a trusted platform for financial support, 
                prayer partnerships, and meaningful connections.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every missionary deserves sustainable support, and every donor deserves 
                to see their generosity create real, measurable impact in the lives of others.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Missionaries Supported</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
                <div className="text-sm text-muted-foreground">Funds Raised</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Active Donors</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every relationship we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated individuals committed to serving missionaries and donors alike.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
