// pages/index.tsx
import { useState } from "react";
import Head from "next/head";
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND, FILTER_OPTIONS } from "@/constants";
import PropertyCard from "@/components/PropertyCard";
import Pill from "@/components/Pill";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Home | Property Listings</title>
      </Head>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[75vh] flex items-center justify-center text-white px-4 text-center"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 p-6 md:p-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-6 border-b">
        <div className="flex gap-3 overflow-x-auto whitespace-nowrap no-scrollbar pb-2">
          {FILTER_OPTIONS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() =>
                setActiveFilter((prev) => (prev === filter ? null : filter))
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          Available Properties
        </h2>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard
              key={`${property.name}-${property.address.city}`}
              property={property}
            />
          ))}
        </div>
      </section>
    </>
  );
}
