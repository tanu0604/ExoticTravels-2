import React from "react";
import { Award, Users, Globe, Heart, Star, Shield } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-16 pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 font-serif tracking-tight">
              About Exotic Travels
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200 font-light">
              Your trusted partner in creating unforgettable travel experiences
              across India and around the world
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Started in 2015, Exotic Travels was born out of a vision to
                become one of the top-rated travel companies in Eastern India.
                With a strong focus on customer satisfaction and curated travel
                experiences, the company has steadily grown into a trusted name
                in the region’s travel landscape, turning vacation dreams into
                unforgettable journeys.
              </p>
              <p className="text-gray-700 mb-4">
                Over the past 10 years, we've had the privilege of creating
                thousands of unforgettable memories for our clients. From the
                serene backwaters of Kerala to the romantic beaches of Maldives,
                from the adventurous mountains of Himachal to the cultural
                richness of Rajasthan, we've been there every step of the way.
              </p>
              <p className="text-gray-700">
                Our commitment to excellence, personalized service, and
                authentic experiences has made us the preferred choice for
                travelers across India. We don't just plan trips; we craft
                experiences that last a lifetime.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Travel memories"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-blue-100"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-xl border-2 border-blue-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white font-serif">
                    10+
                  </div>
                  <div className="text-sm text-blue-100">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-[#fffbe6] via-[#fef9c3] to-[#fef3c7] border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To create extraordinary travel experiences that inspire,
                educate, and transform lives. We believe that travel is more
                than just visiting new places—it's about connecting with
                cultures, creating memories, and discovering the beauty of our
                world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the leading travel company in Eastern India, known for our
                commitment to excellence, innovation, and sustainable tourism
                practices. We envision a world where travel brings people
                together and creates understanding across cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Why Choose Exotic Travels?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              With over 10 years of experience and thousands of satisfied
              customers, here's what makes us special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl shadow-xl border border-blue-100 p-8"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                  Expert Planning
                </h3>
                <p className="text-gray-700">
                  Our experienced travel consultants craft personalized
                  itineraries based on your preferences and budget.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "10,000+", label: "Happy Customers" },
              { value: "200+", label: "Destinations" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2 font-serif">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Meet Our Team
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our dedicated team of travel experts is passionate about creating
              extraordinary experiences for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Member 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center border border-blue-100">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold font-serif">
                  CG
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                Chanchal Ghosh
              </h3>
              <p className="text-gray-700 mb-2">Operations (International)</p>
              <p className="text-gray-500 text-sm">
                Chanchal has been leading international operations at Exotic
                Travels since March 2025, ensuring seamless travel experiences
                across borders with dedication and efficiency.
              </p>
            </div>

            {/* Member 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center border border-blue-100">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold font-serif">
                  RD
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                Reshmi Dutta
              </h3>
              <p className="text-gray-700 mb-2">
                Operations Manager (Domestic)
              </p>
              <p className="text-gray-500 text-sm">
                Reshmi has been managing domestic operations at Exotic Travels
                since January 2023, delivering top-notch experiences with care
                and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
