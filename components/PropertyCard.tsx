import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface CardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<CardProps> = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={property.image}
          alt={`Image of ${property.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded-md shadow">
          ⭐ {property.rating}
        </span>
      </div>

      <div className="p-4 space-y-1">
        <h3 className="text-lg font-semibold truncate">{property.name}</h3>
        <p className="text-sm text-gray-600 truncate">
          {property.address.city}, {property.address.country}
        </p>
        <p className="text-md font-bold text-black">
          ${property.price.toLocaleString()}{" "}
          <span className="text-sm font-normal text-gray-500">/ night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
