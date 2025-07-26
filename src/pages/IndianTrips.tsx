import React, { useState } from "react";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import { Filter } from "lucide-react";

const IndianTrips: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const indianDestinations = destinations.filter(
    (dest) => dest.category === "indian"
  );
  const regions = ["All", "North", "South", "East", "West"];

  const filteredDestinations =
    selectedRegion === "All"
      ? indianDestinations
      : indianDestinations.filter((dest) => dest.region === selectedRegion);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 font-serif tracking-tight">
              Discover Incredible India
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200 font-light">
              Explore India's diverse landscapes, rich culture, and
              unforgettable experiences with our curated travel packages
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gradient-to-br from-[#fffbe6] via-[#fef9c3] to-[#fef3c7] shadow-sm border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-blue-500" />
              <span className="text-blue-700 font-medium font-serif">
                Filter by Region:
              </span>
            </div>
            <div className="flex space-x-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-lg font-bold font-serif transition-colors duration-200 border-2 ${
                    selectedRegion === region
                      ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white border-blue-400 shadow-lg"
                      : "bg-white text-blue-700 border-blue-100 hover:bg-blue-50"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
              {selectedRegion === "All"
                ? "All Indian Destinations"
                : `${selectedRegion} India`}
            </h2>
            <p className="text-gray-700">
              {filteredDestinations.length} destination
              {filteredDestinations.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg font-serif">
                No destinations found for the selected region.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default IndianTrips;
