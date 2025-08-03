import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";
import {
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Shield,
  Heart,
  Play,
  Sparkles,
  MapPin,
  Camera,
  Compass,
  Plane,
  CheckCircle,
  TrendingUp,
  Clock,
} from "lucide-react";
import { destinations, testimonials } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import TestimonialCard from "../components/TestimonialCard";
import StickyScroll from "../components/StickyScroll";
import { motion } from "framer-motion";
import { useMotionValue, useTransform, animate } from "framer-motion";
import CountUp from "react-countup";
import home1 from "../data/assests/home1.jpg";
import home2 from "../data/assests/home2.jpg";
import home3 from "../data/assests/home3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const indianDestinations = destinations
    .filter((dest) => dest.category === "indian")
    .slice(0, 6);
  const foreignDestinations = destinations
    .filter((dest) => dest.category === "foreign")
    .slice(0, 6);

  const heroImages = [home1, home2, home3];

  const adventureWords = ["Adventure", "Journey", "Expedition"];
  const gradientClasses = [
    "bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400",
    "bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400",
    "bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex(
          (prevIndex) => (prevIndex + 1) % adventureWords.length
        );
        setIsFading(false);
      }, 300); // duration of fade-out before changing text
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Sticky Scroll Data
  const stickyScrollItems = [
    {
      title: "Discover Hidden Gems",
      description:
        "Uncover breathtaking destinations that most travelers never see. Our expert guides take you off the beaten path to experience authentic local culture, pristine natural beauty, and unforgettable moments that create lifelong memories.",
      image:
        "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: MapPin,
      stats: [
        { label: "Hidden Spots", value: "200+" },
        { label: "Local Guides", value: "50+" },
      ],
    },
    {
      title: "Capture Perfect Moments",
      description:
        "Every journey with us is a photo story waiting to be told. From sunrise over mountain peaks to sunset on pristine beaches, we ensure you're at the right place at the right time to capture Instagram-worthy shots and precious memories.",
      image:
        "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Camera,
      stats: [
        { label: "Photo Spots", value: "500+" },
        { label: "Perfect Shots", value: "10K+" },
      ],
    },
    {
      title: "Adventure Awaits",
      description:
        "Whether you're seeking adrenaline-pumping activities or peaceful retreats, our adventure packages cater to every type of traveler. From mountain trekking to water sports, cultural immersion to wildlife safaris - your perfect adventure is here.",
      image:
        "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Compass,
      stats: [
        { label: "Adventures", value: "100+" },
        { label: "Thrill Seekers", value: "5K+" },
      ],
    },
    {
      title: "Seamless Travel Experience",
      description:
        "From the moment you book until you return home, we handle every detail. Our comprehensive travel management includes flights, accommodations, transfers, and 24/7 support, ensuring your journey is smooth and stress-free.",
      image:
        "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Plane,
      stats: [
        { label: "Countries", value: "25+" },
        { label: "Happy Travelers", value: "10K+" },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover object-center rounded-none"
                style={{ filter: "brightness(0.7) blur(1px)" }}
              />
            </div>
          ))}
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4 pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight font-serif">
            <span className="block text-white text-shadow">Your Next</span>
            <span
              className={`block bg-clip-text text-transparent text-shadow transition-all duration-500 ease-in-out transform ${
                isFading ? "opacity-0 scale-90" : "opacity-100 scale-100"
              } ${gradientClasses[currentWordIndex]}`}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #1e40af 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {adventureWords[currentWordIndex]}
            </span>
            <span className="block text-white text-shadow">Starts Here</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed font-light text-shadow text-gray-200">
            Discover breathtaking destinations, create unforgettable memories,
            and experience the world like never before with our expertly curated
            travel packages
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div>
              <Link
                to="/indian-trips"
                className="group relative bg-gradient-to-r from-blue-400 to-blue-600 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:from-blue-500 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 shadow-xl flex items-center space-x-3 overflow-hidden border-2 border-blue-300"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </div>
            <a
              href="https://www.youtube.com/watch?v=LZ0BqgsYEIg"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-white hover:text-blue-300 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full flex items-center justify-center group-hover:bg-blue-400/20 transition-all duration-500 shadow-lg">
                <Play className="h-6 w-6 ml-1" />
              </div>
              <span className="text-lg font-medium font-serif">
                Watch Our Story
              </span>
            </a>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: 10,
                suffix: "+",
                label: "Years Experience",
                icon: Award,
              },
              {
                number: 10000,
                suffix: "+",
                label: "Happy Travelers",
                icon: Users,
              },
              { number: 200, suffix: "+", label: "Destinations", icon: Globe },
              { fixedText: "24/7", label: "Support", icon: Clock },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-white/10 to-blue-100/10 backdrop-blur-sm border border-blue-400/10 rounded-2xl p-6 hover:bg-blue-100/10 transition-all duration-500 hover:scale-105 shadow-lg"
                >
                  <Icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">
                    {"number" in stat ? (
                      <CountUp
                        end={stat.number as number}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    ) : (
                      stat.fixedText
                    )}
                  </div>
                  <div className="text-sm md:text-base text-blue-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-blue-400 w-8"
                  : "bg-blue-200/50 hover:bg-blue-400/75 w-4"
              }`}
            />
          ))}
        </div>
      </section>
      <About />
      {/* Featured Indian Destinations */}
      <section className="section-padding bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border-t border-b border-blue-100">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200">
              <span>🇮🇳</span>
              <span>Incredible India</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
              Discover <span className="text-blue-600">Incredible India</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              From pristine beaches to majestic mountains, explore India's
              diverse beauty with our expertly crafted experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {indianDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/indian-trips"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-400 to-blue-600 text-gray-900 px-10 py-5 rounded-2xl text-lg font-bold hover:from-blue-500 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 shadow-xl border-2 border-blue-300"
            >
              <span>Explore All Indian Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Foreign Destinations */}
      <section className="section-padding bg-gradient-to-br from-[#f1f5f9] via-[#e0e7ef] to-[#f8fafc] border-b border-blue-100">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200">
              <span>🌍</span>
              <span>International</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
              <span className="text-blue-600">International</span> Adventures
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Experience the world's most beautiful destinations with our
              carefully curated international packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {foreignDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/foreign-trips"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-blue-500 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 shadow-xl border-2 border-blue-300"
            >
              <span>Explore International Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-[#fffbe6] via-[#fef9c3] to-[#fef3c7] border-b border-blue-100">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200">
              <Star className="h-4 w-4 text-blue-400" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
              Why Choose <span className="text-blue-600">Exotic Travels</span>?
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              10+ years of creating unforgettable journeys for thousands of
              satisfied travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Award,
                title: "Expert Planning",
                description:
                  "10+ years of experience crafting perfect itineraries tailored to your dreams and preferences",
                color: "yellow",
                bgColor: "bg-blue-400",
                lightBg: "bg-blue-50",
                textColor: "text-blue-700",
              },
              {
                icon: Shield,
                title: "24/7 Support",
                description:
                  "Always-on support for a worry-free travel experience",
                color: "blue",
                bgColor: "bg-blue-400",
                lightBg: "bg-blue-50",
                textColor: "text-blue-700",
              },
              {
                icon: Heart,
                title: "Personalized Service",
                description:
                  "Customized packages tailored to your preferences, budget, and travel style",
                color: "rose",
                bgColor: "bg-rose-400",
                lightBg: "bg-rose-50",
                textColor: "text-rose-700",
              },
              {
                icon: Users,
                title: "10,000+ Happy Customers",
                description:
                  "Join thousands of satisfied travelers who trust us with their dream vacations",
                color: "emerald",
                bgColor: "bg-emerald-400",
                lightBg: "bg-emerald-50",
                textColor: "text-emerald-700",
              },
              {
                icon: Globe,
                title: "200+ Destinations",
                description:
                  "Extensive network covering popular and offbeat destinations across the globe",
                color: "indigo",
                bgColor: "bg-indigo-400",
                lightBg: "bg-indigo-50",
                textColor: "text-indigo-700",
              },
              {
                icon: Star,
                title: "Best Price Guarantee",
                description:
                  "Competitive rates with transparent pricing and best value for your money",
                color: "teal",
                bgColor: "bg-teal-400",
                lightBg: "bg-teal-50",
                textColor: "text-teal-700",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative ${feature.lightBg} rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 border border-blue-200 hover:border-blue-300 card-hover shadow-lg`}
              >
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-bold ${feature.textColor} mb-4 transition-all duration-300 font-serif`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border-b border-blue-100">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-rose-200">
              <Heart className="h-4 w-4 text-rose-400" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
              What Our <span className="text-rose-600">Travelers</span> Say
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Real experiences from satisfied customers who have created
              unforgettable memories with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="transform hover:scale-105 transition-transform duration-500 shadow-lg rounded-2xl bg-white/80 border border-rose-100"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Blog />
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden border-t border-blue-100">
        <div className="container-width relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="h-4 w-4" />
              <span>Start Your Journey Today</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif">
              Ready to Start Your{" "}
              <span className="text-blue-400">Dream Journey</span>?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Book a free consultation with our travel experts and let us create
              your perfect itinerary. Your adventure of a lifetime is just one
              click away!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-400 to-blue-600 text-gray-900 px-12 py-5 rounded-2xl text-lg font-bold hover:from-blue-500 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 shadow-xl flex items-center space-x-3 border-2 border-blue-300"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
              <a
                href="tel:+919876543210"
                className="group flex items-center space-x-3 text-white hover:text-blue-400 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full flex items-center justify-center group-hover:bg-blue-400/20 transition-all duration-500 shadow-lg">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold font-serif">Call Now</div>
                  <div className="text-sm opacity-80">+91 98765 43210</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
