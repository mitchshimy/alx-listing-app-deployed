// components/PropertyCard.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";

interface CardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<CardProps> = ({ property }) => {
  return (
    <div
  className="max-w-[1280px] mx-auto grid gap-6"
  style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
>
      <div className="relative h-24 md:h-26 w-full">
        <img
          src={property.image}
          alt={`Image of ${property.name}`}
          className="object-cover w-full h-full"
        />
        <span className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded-md shadow">
          ⭐ {property.rating}
        </span>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold truncate">{property.name}</h3>
        <p className="text-sm text-gray-600 truncate">
          {property.address.city}, {property.address.country}
        </p>
        <p className="text-md font-bold text-black">
          ${property.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">/ night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
