// components/CTASection.tsx
import Link from "next/link";
import { Heart } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Container */}
        <div className="bg-gradient-to-br from-green-900 to-emerald-800 rounded-3xl shadow-2xl p-12 md:p-16">
          {/* Icon */}
          <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Heart className="w-12 h-12 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join the Mission Today
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your partnership enables missionaries to reach the ends of the earth
            with the life-changing message of the Gospel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-10 py-4 bg-white text-green-900 font-bold text-lg rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
            >
              Partner With Us
            </Link>

            <Link
              href="/volunteer"
              className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Volunteer{" "}
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
              <div>
                <div className="font-semibold">Secure & Encrypted</div>
                <div className="text-sm mt-1">All transactions protected</div>
              </div>
              <div>
                <div className="font-semibold">Tax Deductible</div>
                <div className="text-sm mt-1">
                  100% eligible for tax benefits
                </div>
              </div>
              <div>
                <div className="font-semibold">Monthly Updates</div>
                <div className="text-sm mt-1">See your impact in action</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
