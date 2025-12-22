// components/HowItWorks.tsx
import { Gift, HandHeart, Star } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Gift className="w-8 h-8" />,
      title: "Give",
      description: "Choose a missionary or specific project to support. Every donation, big or small, makes a difference in advancing the Gospel.",
    },
    {
      number: "02",
      icon: <HandHeart className="w-8 h-8" />,
      title: "Support",
      description: "Your donation provides real tools, resources, and support that missionaries need to effectively carry out their ministry.",
    },
    {
      number: "03",
      icon: <Star className="w-8 h-8" />,
      title: "Impact",
      description: "Witness lives transformed as the Gospel reaches new communities and changes hearts across the globe.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Your Support Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, transparent process that connects your generosity with real impact
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-300 via-emerald-300 to-green-300 transform -translate-y-1/2 z-0" />
          
          {/* Steps */}
          <div className="relative z-10 grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center"
              >
                {/* Step Number */}
                <div className="w-16 h-16 bg-white border-4 border-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-700 mb-6 mx-auto">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
                  <div className="text-green-600 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-green-700 font-semibold">
              100% of donations directly support missionary work
            </span>
            <span className="ml-2 text-green-600">✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}