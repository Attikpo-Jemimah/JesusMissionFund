// components/InfoSection.tsx
import { Globe, Heart, Target } from 'lucide-react';

export default function InfoSection() {
  const cards = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Who We Serve",
      description: "Supporting missionaries across 50+ nations, focusing on unreached people groups and regions where the Gospel has limited access.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "What We Do",
      description: "Providing essential funding for ministry outreach, logistical support, training, and resources that enable sustainable mission work.",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Why It Matters",
      description: "Every contribution expands the Gospel's reach, transforms communities, and fulfills the Great Commission in our generation.",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Purpose & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We exist to empower missionaries with the resources they need to 
            effectively share the Gospel and make disciples worldwide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container with Gradient */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.color} text-white mb-6`}>
                {card.icon}
              </div>
              
              {/* Card Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
              
              {/* Decorative Element */}
              <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Scripture Verse */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-gray-700 max-w-2xl mx-auto p-6 bg-white/50 rounded-xl">
            &quot;How beautiful are the feet of those who bring good news!&quot; 
            <footer className="text-gray-600 text-lg mt-2 not-italic">— Romans 10:15</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}