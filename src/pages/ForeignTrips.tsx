import React, { useState } from "react";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import { Filter } from "lucide-react";

const ForeignTrips: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("All");

  const foreignDestinations = destinations.filter(
    (dest) => dest.category === "foreign"
  );
  const types = [
    "All",
    "Beach",
    "Mountains",
    "Honeymoon",
    "Adventure",
    "Family",
  ];

  const filteredDestinations =
    selectedType === "All"
      ? foreignDestinations
      : foreignDestinations.filter((dest) => dest.type === selectedType);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 font-serif tracking-tight">
              International Adventures
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200 font-light">
              Explore the world's most beautiful destinations with our carefully
              curated international travel packages
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
                Filter by Type:
              </span>
            </div>
            <div className="flex space-x-2 flex-wrap">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-bold font-serif transition-colors duration-200 border-2 ${
                    selectedType === type
                      ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white border-blue-400 shadow-lg"
                      : "bg-white text-blue-700 border-blue-100 hover:bg-blue-50"
                  }`}
                >
                  {type}
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
              {selectedType === "All"
                ? "All International Destinations"
                : `${selectedType} Destinations`}
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
                No destinations found for the selected type.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ForeignTrips;
